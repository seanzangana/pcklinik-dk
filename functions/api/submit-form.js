// Cloudflare Pages Function — contact-form handler for pcklinik.dk.
// Sends the submission via Google Workspace SMTP (smtp.gmail.com) using an
// App Password, through worker-mailer (an SMTP client that runs on the
// Cloudflare Workers runtime via the cloudflare:sockets API — normal Node SMTP
// libraries like nodemailer do NOT work here).
//
// Two response modes:
//   - fetch/AJAX (Accept: application/json)  -> JSON { ok: true|false }
//   - plain form POST (no JS)                -> 303 redirect to _next
//
// Required environment on the Pages project:
//   SMTP_USER          (plain var)  the Workspace account, e.g. shan@pcklinik.dk
//                                   — this is the authenticated user AND the From
//   GMAIL_APP_PASSWORD (SECRET)     16-char Google App Password (2FA required)
// Optional (sensible Gmail defaults):
//   SMTP_HOST  (default smtp.gmail.com)
//   SMTP_PORT  (default 587, STARTTLS)   set 465 for implicit TLS if 587 fails
//
// Security: _to is validated against ALLOWED_DESTINATIONS (no open relay).
// Note: Gmail requires the From to be the authenticated account (SMTP_USER) or
// an alias it is allowed to "send as". The visitor's address is set as Reply-To
// (and repeated in the body) so replies go straight to the customer.

import { WorkerMailer } from "worker-mailer";

const ALLOWED_DESTINATIONS = new Set([
  "kontakt@pcklinik.dk",
  "support@pcklinik.dk",
]);

function redirect(url) {
  return new Response(null, { status: 303, headers: { Location: url } });
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const accept = request.headers.get("accept") || "";
  const ctype = request.headers.get("content-type") || "";
  const wantsJson = accept.includes("application/json") || ctype.includes("application/json");

  let form;
  try {
    if (ctype.includes("application/json")) {
      form = await request.json();
    } else {
      const fd = await request.formData();
      form = Object.fromEntries(fd.entries());
    }
  } catch (e) {
    return wantsJson ? json({ ok: false, error: "bad_request" }, 400) : new Response("Bad request", { status: 400 });
  }

  const next = form._next || "/";

  // Honeypot — bots fill hidden fields; silently accept to avoid retries.
  if (form._gotcha) {
    console.warn("submit-form: honeypot triggered, dropping submission");
    return wantsJson ? json({ ok: true }) : redirect(next);
  }

  const to = String(form._to || "").trim().toLowerCase();
  if (!ALLOWED_DESTINATIONS.has(to)) {
    console.warn("submit-form: invalid destination", to);
    return wantsJson ? json({ ok: false, error: "invalid_destination" }, 422) : new Response("Invalid destination", { status: 422 });
  }

  const user = (env.SMTP_USER || "").trim();
  if (!user || !env.GMAIL_APP_PASSWORD) {
    console.error("submit-form: SMTP not configured (need SMTP_USER + GMAIL_APP_PASSWORD)");
    return wantsJson ? json({ ok: false, error: "not_configured" }, 500) : new Response("Email not configured", { status: 500 });
  }

  const subject = (form._subject || "Ny henvendelse via pcklinik.dk").toString();
  const replyTo = (form.email || form.contact || "").toString().trim();
  const validReply = /.+@.+\..+/.test(replyTo);

  const lines = [];
  for (const [k, v] of Object.entries(form)) {
    if (k.startsWith("_")) continue;
    if (v === undefined || v === null || v === "") continue;
    lines.push(k + ": " + v);
  }
  let body = lines.join("\n") || "(ingen felter udfyldt)";
  if (validReply) body = "Svar til / Reply-To: " + replyTo + "\n\n" + body;

  const host = (env.SMTP_HOST || "smtp.gmail.com").trim();
  const port = parseInt(env.SMTP_PORT || "587", 10);

  let mailer;
  try {
    mailer = await WorkerMailer.connect({
      host,
      port,
      secure: port === 465, // 465 = implicit TLS; 587 = STARTTLS (worker-mailer upgrades)
      startTls: port === 587,
      authType: "plain",
      credentials: { username: user, password: env.GMAIL_APP_PASSWORD },
    });

    await mailer.send({
      from: { name: "PCKlinik", email: user },
      to: { email: to },
      reply: validReply ? { email: replyTo } : undefined,
      subject,
      text: body,
    });
  } catch (err) {
    console.error("submit-form: SMTP send failed", err && err.message);
    try { if (mailer && mailer.close) await mailer.close(); } catch (_) {}
    return wantsJson ? json({ ok: false, error: "send_failed" }, 502) : new Response("Email send failed", { status: 502 });
  }
  try { if (mailer && mailer.close) await mailer.close(); } catch (_) {}

  return wantsJson ? json({ ok: true }) : redirect(next);
}

export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  return onRequestPost(context);
}
