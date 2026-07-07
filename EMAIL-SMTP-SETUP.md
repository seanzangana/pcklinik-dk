# pcklinik.dk — contact form email (Google Workspace SMTP)

Resend is NOT used. The Pages Function `functions/api/submit-form.js` sends via
Google Workspace SMTP (smtp.gmail.com) using worker-mailer over Cloudflare's
native `cloudflare:sockets` API. No subscription, no Resend, no DNS changes.

## Environment variables to set on the Cloudflare Pages project
Cloudflare → Workers & Pages → pcklinik-dk → Settings → Variables and Secrets:

| Name                 | Type   | Value                                             |
|----------------------|--------|---------------------------------------------------|
| `SMTP_USER`          | var    | the Workspace account, e.g. `shan@pcklinik.dk`    |
| `GMAIL_APP_PASSWORD` | secret | 16-char Google App Password (2FA must be enabled) |
| `SMTP_HOST`          | var    | *(optional)* default `smtp.gmail.com`             |
| `SMTP_PORT`          | var    | *(optional)* default `587`; use `465` if 587 fails|

- Remove any old `RESEND_API_KEY` — no longer used.
- `SMTP_USER` is BOTH the login and the "From". Gmail requires the From to be
  that account (or an alias it can "send as"). Reply-To is the visitor, so
  replying goes to the customer.

## Form → destination (unchanged routing)
- contact/ , ask-a-question/  → `kontakt@pcklinik.dk`
- business-it-service-agreement/ → `support@pcklinik.dk`
(Both are Google Groups; all team members see and can reply.)

## First live test
1. Push repo → Cloudflare auto-builds (`npm ci` installs worker-mailer, then
   `node build.mjs`, and bundles the Function).
2. Submit the contact form on the *.pages.dev URL.
3. Expect it in kontakt@pcklinik.dk (→ your Gmail). Reply goes to the visitor.
4. If it errors: check the project's Functions logs. If the SMTP handshake
   fails on 587, set `SMTP_PORT=465` and redeploy (implicit TLS) — no code change.
