// POST /api/stripe-webhook
// Stripe webhook receiver — verifies the signature itself using Web Crypto
// (the `stripe` npm SDK's built-in verifier relies on Node's `crypto`
// module, which isn't available in the Cloudflare Workers runtime that
// Pages Functions run on — same reason this codebase uses `worker-mailer`
// instead of `nodemailer` for outbound mail).
//
// On checkout.session.completed: sends an internal notification email to
// kontakt@pcklinik.dk with the domain + registrant details, so a human can
// complete the actual OpenProvider registration within a few hours.
// Domain registration itself is NOT automated here — see brief.
import { WorkerMailer } from 'worker-mailer';

async function verifyStripeSignature(rawBody, signatureHeader, secret) {
  if (!signatureHeader) return false;
  const parts = Object.fromEntries(
    signatureHeader.split(',').map((kv) => {
      const [k, v] = kv.split('=');
      return [k, v];
    })
  );
  const timestamp = parts.t;
  const v1 = parts.v1;
  if (!timestamp || !v1) return false;

  const signedPayload = `${timestamp}.${rawBody}`;
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sigBuffer = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(signedPayload));
  const computedHex = [...new Uint8Array(sigBuffer)].map((b) => b.toString(16).padStart(2, '0')).join('');

  // Constant-time-ish compare
  if (computedHex.length !== v1.length) return false;
  let mismatch = 0;
  for (let i = 0; i < computedHex.length; i++) mismatch |= computedHex.charCodeAt(i) ^ v1.charCodeAt(i);
  if (mismatch !== 0) return false;

  // Reject stale events (>5 min old) to limit replay-attack window.
  const ageSeconds = Math.abs(Date.now() / 1000 - Number(timestamp));
  if (ageSeconds > 300) return false;

  return true;
}

export async function onRequestPost(context) {
  const { request, env } = context;

  const webhookSecret = env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error('stripe-webhook: STRIPE_WEBHOOK_SECRET missing');
    return new Response('Webhook not configured', { status: 500 });
  }

  const rawBody = await request.text();
  const signatureHeader = request.headers.get('Stripe-Signature');

  const isValid = await verifyStripeSignature(rawBody, signatureHeader, webhookSecret).catch(() => false);
  if (!isValid) {
    return new Response('Invalid signature', { status: 400 });
  }

  let event;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data?.object || {};
    const md = session.metadata || {};
    const amountTotal = typeof session.amount_total === 'number' ? (session.amount_total / 100).toFixed(2) : '?';

    const subject = `Nyt domænekøb: ${md.domain_full || '(ukendt domæne)'}`;
    const bodyLines = [
      'Der er modtaget en ny betaling for domæneregistrering. Registrer domænet manuelt i OpenProvider snarest muligt.',
      '',
      `Domæne: ${md.domain_full || ''}`,
      `Beløb betalt: ${amountTotal} DKK (inkl. moms)`,
      `Stripe Checkout Session: ${session.id || ''}`,
      '',
      'Registrant / kundeoplysninger:',
      `  Navn: ${md.registrant_name || ''}`,
      `  E-mail: ${md.registrant_email || ''}`,
      `  Adresse: ${md.registrant_address || ''}`,
      `  Postnr. & by: ${md.registrant_postal_code || ''} ${md.registrant_city || ''}`,
      `  Land: ${md.registrant_country || ''}`,
      '',
      'Husk at sende kunden en bekræftelse, når registreringen er gennemført.',
    ];

    const user = (env.SMTP_USER || '').trim();
    if (!user || !env.GMAIL_APP_PASSWORD) {
      console.error('stripe-webhook: SMTP credentials missing, could not send notification email');
      // Still acknowledge the webhook — Stripe should not keep retrying
      // just because our notification mailer is misconfigured. The
      // payment itself already succeeded.
      return new Response('OK (email not sent — SMTP not configured)', { status: 200 });
    }

    try {
      const port = parseInt(env.SMTP_PORT || '587', 10);
      const mailer = await WorkerMailer.connect({
        host: env.SMTP_HOST || 'smtp.gmail.com',
        port,
        secure: port === 465,
        startTls: port === 587,
        authType: 'plain',
        credentials: { username: user, password: env.GMAIL_APP_PASSWORD },
      });
      try {
        await mailer.send({
          from: { name: 'PCKlinik Domæner', email: user },
          to: { email: 'kontakt@pcklinik.dk' },
          subject,
          text: bodyLines.join('\n'),
        });
      } finally {
        await mailer.close().catch(() => {});
      }
    } catch (err) {
      console.error('stripe-webhook: failed to send notification email', err);
      // Don't fail the webhook response over an email delivery issue — the
      // payment succeeded and is recorded in Stripe regardless; log for
      // manual follow-up.
    }
  }

  return new Response('OK', { status: 200 });
}

export async function onRequest(context) {
  if (context.request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }
  return onRequestPost(context);
}
