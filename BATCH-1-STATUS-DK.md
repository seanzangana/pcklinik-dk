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
- Reconfigured to `.dk`: `package.json` (pcklinik-dk), `wrangler.toml` (project pcklinik-dk),
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

## Done — Batch 2 (18 brand pages, native Danish)
- `repairBody()` template chrome translated (breadcrumbs, section headings,
  models table, CTA band, related links).
- All 16 brand entries in `repairs.js` rewritten natively in Danish (intro,
  services, models, why, FAQ, CTAs, crosslinks). Brand/model names kept in
  English per the standing rule.
- Mac Repair hub (`macHubHtml`) + Gaming (`gamingHtml`) + their FAQ arrays in
  `richPages.js` translated. Hub page meta titles/descriptions Danish.
- Verified: 76 pages, 0 English on the 18 brand/hub pages, 0 broken links.

## Done — Batch 3 (20 service pages, native Danish)
- `serviceBody()` template chrome translated (hero, breadcrumbs, default
  free/express pricing block, FAQ, CTA band, related links).
- All task-based entries in `services.js` translated: 8 PC + 5 Mac +
  5 cross-cutting (incl. Remote Support, On-Site, System Installation) +
  WiFi & Network Troubleshooting.
- Error Messages + Computer Won't Turn On pages (+ ERROR_FAQ / WONT_TURN_ON_FAQ,
  stop-code table, Windows/Mac sub-sections) in `richPages.js` translated.
  Literal error codes/strings kept in English per convention.
- **Liquid-damage pricing exception preserved:** the page renders its own
  `pricing` override (flat 600 kr, 3–4 dage, ingen ekspres) and does NOT get
  the standard free/express block. Verified in the built output.
- Verified: 76 pages, 0 English on the 21 Batch-3 pages, 0 broken links.
- Still English by design: 5 network-equipment pages (Batch 4) and 3 Web
  pages (Batch 5) kept verbatim in `services.js`.

## Done — Batch 4 (network equipment + shop, native Danish)
- 5 network-equipment entries in `services.js` (UniFi, Netgear, TP-Link, ASUS
  router, Eero/Nest) translated + `networkHubHtml` / `NETWORK_HUB_FAQ`.
- All shop pages in `build.mjs` translated: hub, computers, new, refurbished,
  backup & security, `productCard` ("Køb nu"), `shopFaq`. Prices reformatted to
  Danish thousands separator (e.g. 6.999 kr.). Shop `run()` titles Danish.
- **Refurbished extra content preserved:** the "Hvad \"refurbished\" betyder her"
  trust-line + 6-month-warranty detail renders in Danish (not collapsed to the
  generic shop template). Verified in the built output (4× "6 måneders garanti").
- Verified: 76 pages, 0 English on the Batch-4 pages, 0 broken links, 0 Arabic.

## Still English — pending later batches (NOT yet Danish; do NOT deploy publicly)
Page BODIES for these still render English text from the .eu fork and must be
rewritten natively in Danish in their batches (nav labels already point to them):
- Batch 5 — Websites & SEO (4) + Business IT verification
- Batch 6 — General FAQ (`faqPageHtml`), Meet the Team (`aboutBody`)
- Slug renames to Danish (e.g. `/lenovo-reparation/`, `/butik/`,
  `/it-support-til-erhverv/`, `/kontakt/`) are a later, deliberate step.

## Notes / cleanup
- **RESOLVED:** the legacy Astro view mirror (`src/pages`, `src/components`,
  `src/layouts`, `astro.config.mjs`, the `astro` dependency) has been **deleted**.
  `build.mjs` is now the single source of truth — no static-HTML-vs-Astro split.
- Deployment (Cloudflare Pages project, GitHub repo, domain cutover) remains a
  deliberate, Shan-approved step — not done here.
