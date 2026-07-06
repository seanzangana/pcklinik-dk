# pcklinik.dk — Resend forms go-live (v90)

Built on the v89 source. All five forms now submit via **fetch** (no page
reload) to the Cloudflare Pages Function `functions/api/submit-form.js`, which
sends through **Resend**. `formMode` is already set to `'cloudflare'`, so the
built `dist/` is in its final state.

## What changed vs v89
- `src/data/site.js` → `formMode: 'cloudflare'` (was `'formspree'`).
- `build.mjs` `formOpen()` → the cloudflare-mode form now has `data-ajax-form` + localized `data-ok` / `data-err` (English + Arabic), plus the existing `_gotcha` honeypot and `_to` / `_subject` / `_next` hidden fields.
- `build.mjs` → a small shared client script does the fetch submit, shows an inline success/error `.form-status` message, disables the button while sending, and resets the form on success. No JS? The form still POSTs normally and the function 303-redirects to the thank-you page.
- `functions/api/submit-form.js` → returns **JSON** `{ok:true|false}` for fetch requests (and still redirects for plain POST). Adds server-side `console` logging on honeypot/invalid-destination/misconfig/send-failure.
- `src/styles/global.css` → `.form-status` / `--ok` / `--error` styles.
- `public/_headers` → CSP `form-action 'self'; connect-src 'self'` (dropped Formspree).

Unchanged and already correct from earlier work: allow-listed destinations
(no open relay), per-domain sender (`noreply@pcklinik.dk` / `.dk`), `reply_to`
set to the visitor's email/contact, and `wrangler.toml` (Resend, no MX binding).

## Form → destination (built and verified)
- contact/ → contact@pcklinik.dk
- ask-a-question/ → contact@pcklinik.dk
- business-it-service-agreement/ → support@pcklinik.dk

## IMPORTANT: deploy method changes
Because the forms now need the Pages Function, this version must be deployed
with **`wrangler pages deploy`** — NOT the drag-and-drop static uploader (that
uploader rejects a project containing `functions/` + `wrangler.toml`, which is
the "requires a build process" error seen before). The drag-and-drop
`DEPLOY-THIS-static-v89` bundle stays on Formspree and is untouched.

## Go-live order (do NOT deploy before step 1–2, or forms return 500)
1. **Resend domain**: add & verify `pcklinik.dk` in Resend — add the DKIM + SPF
   **TXT** records at One.com. The only MX Resend asks for lives on the
   `send.pcklinik.dk` subdomain (bounce feedback) and is separate from your
   mailbox MX — do not touch the root MX.
2. **API key secret** (from the project folder):
   ```
   npx wrangler pages secret put RESEND_API_KEY --project-name=pcklinik-dk
   ```
   (or set it in Cloudflare → the Pages project → Settings → Variables and Secrets.)
3. **Build & deploy**:
   ```
   node build.mjs
   npx wrangler pages deploy dist --project-name=pcklinik-dk
   ```
   `dist/` is already built in this package, so you can skip `node build.mjs` if
   you didn't change anything.

## Test after deploy
- Submit each of the 5 forms → confirm arrival at the right inbox (contact@ ×3, support@ ×2), no page reload, inline "message sent" appears.
- Reply to a notification → goes to the visitor (reply_to), not noreply/Resend.
- Honeypot: set the hidden `_gotcha` field via dev tools and submit → page shows success but **no email arrives**.
- Error state: temporarily unset `RESEND_API_KEY` → the form shows the inline error instead of failing silently (check the Pages Functions logs for the logged error). Restore the key.

## pcklinik.dk (later)
The function already allow-lists `kontakt@pcklinik.dk` / `support@pcklinik.dk`
and sends as `noreply@pcklinik.dk`. When that site is built, verify pcklinik.dk
in Resend the same way — no code changes needed.
