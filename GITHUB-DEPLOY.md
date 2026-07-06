# pcklinik.dk — GitHub → Cloudflare Pages auto-deploy (Resend forms)

Why: a Pages project with a `functions/` folder can't be drag-and-dropped
("this uploader does not support projects that require a build process"). Git
integration builds and deploys on every push, Functions included. This is the
permanent fix.

Note: your current `pcklinik-dk` project is a **Direct Upload** project and
cannot be converted to Git — you create a **new** Git-connected project, then
move the `pcklinik.dk` custom domain onto it (last section).

---

## 1. Push this project to GitHub

This folder is already a git repo with one commit and a correct `.gitignore`
(`dist/` and `node_modules/` are built by Cloudflare, not committed).

Create an empty repo on GitHub (e.g. `pcklinik-dk`), then from this folder:

```
git remote add origin https://github.com/<your-username>/pcklinik-dk.git
git branch -M main
git push -u origin main
```

(If you use the GitHub CLI: `gh repo create pcklinik-dk --private --source=. --push`.)

## 2. Create the Cloudflare Pages project (connect to Git)

1. Cloudflare dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Authorize GitHub and pick the `pcklinik-dk` repo.
3. **Set up builds and deployments:**
   - Framework preset: **None**
   - **Build command:** `node build.mjs`
   - **Build output directory:** `dist`
   - Root directory: leave default
4. **Environment variables** → add:
   - `RESEND_API_KEY` = your Resend key (Production; add to Preview too if you want previews to send)
5. **Save and Deploy.** Cloudflare runs `npm install` then `node build.mjs`, uploads `dist/`, and compiles `functions/api/submit-form.js` automatically.

The build output dir must be `dist` and the build command must be `node build.mjs`
(that's the real generator — not `astro build`). `functions/` sits at the repo
root, so Pages picks it up.

## 3. Resend (required before forms actually send)

- Verify `pcklinik.dk` in Resend and add the **SPF + DKIM TXT** records at One.com. The only MX Resend asks for is on the `send.pcklinik.dk` subdomain — separate from your mailbox MX. Do not touch the root MX.
- The `RESEND_API_KEY` from step 2.4 is the key you create in Resend.

Until both are done, forms return a 500 and the page shows the inline error
(by design — never a silent failure).

## 4. Move the pcklinik.dk domain to the new project

Test first on the new project's `*.pages.dev` URL (submit a form, confirm mail
arrives). Then cut the domain over:

1. New Pages project → **Custom domains** → **Set up a custom domain** → `www.pcklinik.dk` (and the apex `pcklinik.dk` if you serve it). Cloudflare will want to update the CNAME.
2. If it says the domain is already in use, it's still attached to the old
   Direct-Upload project. Remove it there first: old project → **Custom domains**
   → remove `www.pcklinik.dk` (this deletes its CNAME), then add it on the new
   project. Doing it in this order keeps downtime to seconds.
3. Once the new project serves `www.pcklinik.dk`, you can delete the old
   `pcklinik-dk` Direct-Upload project.

## From here on

Every `git push` to `main` rebuilds and deploys automatically — forms, content,
everything. No more zip uploads. Content edits happen in `src/data/*` (and the
`build.mjs` templates); push and Cloudflare does the rest.

## Test checklist after go-live
- Submit all 5 forms → kontakt@pcklinik.dk, no reload, inline success.
- Reply to a notification → reaches the visitor (reply_to), not noreply/Resend.
- Honeypot `_gotcha` filled → looks successful, no email sent.
- Unset `RESEND_API_KEY` temporarily → inline error shown, logged in Functions logs.
