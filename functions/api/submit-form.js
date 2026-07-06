// Cloudflare Pages Function — shared form handler for pcklinik.eu / pcklinik.dk
// Sends the submission via the Resend API (https://resend.com) to a
// parameterized destination (_to).
//
// Two response modes:
//   - fetch/AJAX (Accept: application/json)  -> JSON { ok: true|false }
//   - plain form POST (no JS)                -> 303 redirect to _next
// so the site works with and without JavaScript.
//
// Resend is used instead of Cloudflare's send_email binding because it needs
// only SPF/DKIM TXT records (no MX changes) — so it coexists with the current
// One.com mailboxes and survives the future Google Workspace move untouched.
//
// Setup: verify pcklinik.eu (and later pcklinik.dk) in Resend, then set the API
// key as a secret:  npx wrangler pages secret put RESEND_API_KEY
//
// Security: _to is validated against ALLOWED_DESTINATIONS (no open relay).

const ALLOWED_DESTINATIONS = new Set([
  "contact@pcklinik.eu",
  "support@pcklinik.eu",
  "kontakt@pcklinik.dk",
  "support@pcklinik.dk",
]);

function fromFor(dest) {
  return dest.endsWith("@pcklinik.dk")
    ? "PCKlinik <noreply@pcklinik.dk>"
    : "PCKlinik <noreply@pcklinik.eu>";
}

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
  if (!env.RESEND_API_KEY) {
    console.error("submit-form: RESEND_API_KEY not configured");
    return wantsJson ? json({ ok: false, error: "not_configured" }, 500) : new Response("Email not configured", { status: 500 });
  }

  const subject = (form._subject || "New website form submission").toString();

  const lines = [];
  for (const [k, v] of Object.entries(form)) {
    if (k.startsWith("_")) continue;
    if (v === undefined || v === null || v === "") continue;
    lines.push(k + ": " + v);
  }
  const body = lines.join("\n") || "(no fields submitted)";

  const replyTo = (form.email || form.contact || "").toString().trim();
  const payload = { from: fromFor(to), to: [to], subject, text: body };
  if (replyTo && /.+@.+\..+/.test(replyTo)) payload.reply_to = replyTo;

  let res;
  try {
    res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: "Bearer " + env.RESEND_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("submit-form: Resend request failed", err && err.message);
    return wantsJson ? json({ ok: false, error: "send_failed" }, 502) : new Response("Email request failed", { status: 502 });
  }
  if (!res.ok) {
    const t = await res.text().catch(() => "");
    console.error("submit-form: Resend send failed", res.status, t);
    return wantsJson ? json({ ok: false, error: "send_failed" }, 502) : new Response("Email send failed", { status: 502 });
  }

  return wantsJson ? json({ ok: true }) : redirect(next);
}

export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  return onRequestPost(context);
}
