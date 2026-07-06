# Email setup — superseded

The forms now send via the **Resend API** (not Cloudflare Email Routing).
See **GO-LIVE-RESEND-v90.md** in this folder for the current setup and go-live
steps. `functions/api/submit-form.js` + `wrangler.toml` are the authoritative
implementation.
