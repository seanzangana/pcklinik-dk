// POST /api/create-checkout-session
// Body: { name, tld, registrant: { name, email, address, postal_code, city, country } }
// Creates a Stripe Checkout Session for the domain's LIVE price, recomputed
// server-side (never trusts a price sent by the browser). Returns { url }.
import { checkDomainAndPrice, isValidTld, isValidDomainLabel } from '../_lib/openprovider.js';

const SITE_DOMAIN = 'https://www.pcklinik.dk';

function isNonEmptyString(v, maxLen = 200) {
  return typeof v === 'string' && v.trim().length > 0 && v.trim().length <= maxLen;
}
function isValidEmail(v) {
  return typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export async function onRequestPost(context) {
  const { request, env } = context;
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request body.' }, 400);
  }

  const name = String(body?.name || '').trim().toLowerCase();
  const tld = String(body?.tld || '').trim().toLowerCase();
  const registrant = body?.registrant || {};

  if (!isValidDomainLabel(name)) return json({ error: 'Ugyldigt domænenavn.' }, 400);
  if (!isValidTld(tld)) return json({ error: 'Ugyldig endelse — vælg .dk eller .com.' }, 400);

  if (!isNonEmptyString(registrant.name) || !isValidEmail(registrant.email) ||
      !isNonEmptyString(registrant.address) || !isNonEmptyString(registrant.postal_code, 20) ||
      !isNonEmptyString(registrant.city) || !isNonEmptyString(registrant.country, 100)) {
    return json({ error: 'Udfyld venligst alle kontaktoplysninger.' }, 400);
  }

  const secretKey = env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    console.error('create-checkout-session: STRIPE_SECRET_KEY missing');
    return json({ error: 'Betaling er ikke konfigureret endnu. Kontakt os venligst direkte.' }, 500);
  }

  // Re-derive the price server-side. This is the ONLY price the customer
  // can actually be charged — the price shown earlier in the UI is just a
  // preview and is never sent to Stripe directly.
  let priceResult;
  try {
    priceResult = await checkDomainAndPrice(env, name, tld);
  } catch (err) {
    console.error('create-checkout-session price lookup error:', err);
    return json({ error: 'Kunne ikke bekræfte prisen lige nu. Prøv igen om lidt.' }, 502);
  }
  if (!priceResult.available || !priceResult.price_dkk) {
    return json({ error: 'Domænet er desværre ikke længere ledigt.' }, 409);
  }

  const domainFull = `${name}.${tld}`;
  // The page shows the EX-VAT price ("ekskl. moms"). Stripe charges the
  // VAT-INCLUSIVE amount — 25% is added here, at checkout-creation time,
  // rather than relying on Stripe Tax being enabled on the account (which
  // we have no way to confirm from code). This keeps the charge correct
  // regardless of the account's Tax configuration.
  const unitAmountOre = Math.round(priceResult.price_incl_vat_dkk * 100); // Stripe wants the smallest currency unit

  const params = new URLSearchParams();
  params.set('mode', 'payment');
  params.set('success_url', `${SITE_DOMAIN}/domaener/tak/?session_id={CHECKOUT_SESSION_ID}`);
  params.set('cancel_url', `${SITE_DOMAIN}/domaener/`);
  params.set('customer_email', registrant.email.trim());
  params.set('line_items[0][quantity]', '1');
  params.set('line_items[0][price_data][currency]', 'dkk');
  params.set('line_items[0][price_data][unit_amount]', String(unitAmountOre));
  params.set('line_items[0][price_data][product_data][name]', `Domæneregistrering: ${domainFull}`);
  params.set('line_items[0][price_data][product_data][description]', `Engangsbetaling for 1 års domæneregistrering (${priceResult.price_dkk} kr ekskl. moms + 25% moms). Fornyelse faktureres separat.`);
  params.set('metadata[domain_name]', name);
  params.set('metadata[domain_tld]', tld);
  params.set('metadata[domain_full]', domainFull);
  params.set('metadata[registrant_name]', registrant.name.trim());
  params.set('metadata[registrant_email]', registrant.email.trim());
  params.set('metadata[registrant_address]', registrant.address.trim());
  params.set('metadata[registrant_postal_code]', registrant.postal_code.trim());
  params.set('metadata[registrant_city]', registrant.city.trim());
  params.set('metadata[registrant_country]', registrant.country.trim());

  let stripeRes;
  try {
    stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });
  } catch (err) {
    console.error('create-checkout-session Stripe fetch error:', err);
    return json({ error: 'Kunne ikke oprette betaling lige nu. Prøv igen om lidt.' }, 502);
  }

  if (!stripeRes.ok) {
    const errText = await stripeRes.text().catch(() => '');
    console.error('create-checkout-session Stripe error:', stripeRes.status, errText);
    return json({ error: 'Kunne ikke oprette betaling lige nu. Prøv igen om lidt.' }, 502);
  }

  const session = await stripeRes.json();
  if (!session.url) {
    console.error('create-checkout-session: Stripe response missing url', session);
    return json({ error: 'Kunne ikke oprette betaling lige nu. Prøv igen om lidt.' }, 502);
  }

  return json({ url: session.url }, 200);
}

export async function onRequest(context) {
  if (context.request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }
  return onRequestPost(context);
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } });
}
