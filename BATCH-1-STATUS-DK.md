# pcklinik.dk — build status (fork of pcklinik.eu)

This repo is a **fork of the pcklinik.eu codebase** with Arabic removed and the
data layer + global chrome converted to Danish. Production build is
`node build.mjs` → `dist/` (zero-dependency renderer; single source of truth).
Deploy: Cloudflare Pages, `pages_build_output_dir = dist`, build command
`npm run build`. See GITHUB-DEPLOY.md and GO-LIVE-RESEND-v90.md.

## Done in this pass (foundation + Batch 1)
- Forked pcklinik.eu; **all Arabic removed**: `ar*.js` data files deleted, all
  `/ar/` routes, RTL handling, `headerAr/footerAr/arHomeHtml/...` functions, and
  the topbar language switcher stripped from `build.mjs`. No language switcher.
- Reconfigured to `.dk`: `package.json` (pcklinik-dk), `astro.config.mjs`
  (site https://www.pcklinik.dk), `wrangler.toml` (project pcklinik-dk),
  `site.js` (domain, `kontakt@pcklinik.dk`, Danish hours). `<html lang="da">`,
  `og:locale=da_DK`.
- Danish global chrome: nav labels + flyout categories (`site.js`), footer,
  topbar, form success/error messages.
- **Batch 1 content in native Danish:**
  - Homepage (split hero, 3-step, 18-card brand grid, popular services,
    why-us, shop teaser, map, FAQ).
  - 11 location pages (6 close Copenhagen neighbourhoods + 5 far customer
    towns), Danish slugs `/computerreparation-*/`.
  - Nyheder section at `/nyheder/` (index + 3 seed posts: battery signs,
    Mac startup screens, 3-2-1 backup rule). Danish date formatting.
  - Contact page + "Stil os et spørgsmål" page in Danish.
- Build verified: 76 pages, 0 Arabic, 0 broken internal links.

## Still English — pending later batches (NOT yet Danish; do NOT deploy publicly)
Page BODIES for these still render English text from the .eu fork and must be
rewritten natively in Danish in their batches (nav labels already point to them):
- Batch 2 — 18 brand pages (`repairs.js`) + Mac hub / Gaming (`richPages.js`)
- Batch 3 — 20 service/task pages (`services.js` + remote/system/error/wont-turn-on)
- Batch 4 — 5 network equipment pages + shop (`richPages.js`, shop* in build.mjs)
- Batch 5 — Websites & SEO (4) + Business IT verification
- Batch 6 — General FAQ (`faqPageHtml`), Meet the Team (`aboutBody`)
- Slug renames to Danish (e.g. `/lenovo-reparation/`, `/butik/`,
  `/it-support-til-erhverv/`, `/kontakt/`) are a later, deliberate step.

## Notes / cleanup
- `src/pages/*.astro` + `src/components/*.astro` are the legacy Astro mirror and
  are **not used** by `node build.mjs`; they are still English and stale. Either
  resync or delete in a cleanup pass — they don't affect the production build.
- Deployment (Cloudflare Pages project, GitHub repo, domain cutover) remains a
  deliberate, Shan-approved step — not done here.
