// Central site config — single source of truth for NAP, nav, and URL mapping.
// pcklinik.dk — Danish site (fork of the pcklinik.eu codebase, Arabic removed).
export const site = {
  name: 'PCKlinik',
  domain: 'https://www.pcklinik.dk',
  phone: '91 81 61 81',
  phoneHref: 'tel:+4591816181',
  formMode: 'cloudflare', // 'formspree' or 'cloudflare' (Resend via /api/submit-form). LIVE-GATED: verify domain in Resend + set RESEND_API_KEY secret before deploying.
  emailConsumer: 'kontakt@pcklinik.dk',
  // Erhvervsundtagelsen (2026-08-06): B2B-facing pages use support@ instead
  // of kontakt@ — see the "resten af backloggen" brief. Applies wherever
  // site.emailBusiness is already used (IT-support til erhverv, IT-rådgivning,
  // hjemmesider/SEO, and the new B2B pages), not just the new ones — this is
  // the single source of truth so the address doesn't drift between pages.
  emailBusiness: 'support@pcklinik.dk',
  address: 'Falkoner Allé 108, 2000 Frederiksberg',
  addressStreet: 'Falkoner Allé 108',
  addressLocality: 'Frederiksberg',
  addressPostal: '2000',
  hours: 'Man–fre 10:00–18:00 · Lør 10:00–14:00 · Søn lukket',
  mapsEmbed: 'https://www.google.com/maps?q=Falkoner+All%C3%A9+108,+2000+Frederiksberg&output=embed',
  // Public Google Maps listing for PCKlinik (search-by-name/address deep
  // link — resolves directly to the business's own Maps page and reviews).
  reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=PCKlinik+Falkoner+All%C3%A9+108+Frederiksberg',
  // STATIC, manually-maintained values (per footerreviewlinkandschemabrief.md
  // — no Places API/billing set up yet). Used ONLY for the visible footer
  // review link (⭐ x.x/5 baseret på N anmeldelser →) — no longer referenced
  // by any JSON-LD schema (aggregateRating was removed sitewide; Google
  // doesn't allow self-serving review markup on LocalBusiness subtypes).
  // These will drift as new reviews come in — re-check against PCKlinik's
  // real Google Business Profile every few months and update both numbers
  // together.
  // Future upgrade path: automated-review-sync-brief.md (daily Worker sync
  // to KV/D1 once a billing-enabled Google Cloud project + Places API key +
  // Place ID exist) — not needed for this static version.
  reviewRating: '4.9',
  reviewCount: '494', // live-checked on Google Business Profile 2026-08-07
};

// Dropdown children may include { header: 'Label' } items — rendered as a
// non-clickable section divider inside the menu.
// NOTE: "Hjemmesider & SEO" is deliberately NOT a top-level header nav item —
// it lives only in the footer "Mere" column (see footer() in build.mjs).
export const nav = [
  { label: 'Forside', href: '/' },
  { label: 'IT-support til erhverv', href: '/it-support-til-erhverv/' },
  {
    label: 'Services',
    href: '/faq/',
    // Cascading flyout: 6 categories, each opens a side panel of links.
    flyout: [
      { label: 'Efter mærke', children: [
        { label: 'Lenovo', href: '/lenovo-reparation/' },
        { label: 'Acer', href: '/acer-reparation/' },
        { label: 'HP', href: '/hp-reparation/' },
        { label: 'Dell', href: '/dell-reparation/' },
        { label: 'Asus', href: '/asus-reparation/' },
        { label: 'MSI', href: '/msi-reparation/' },
        { label: 'Huawei', href: '/huawei-reparation/' },
        { label: 'MacBook', href: '/macbook-reparation/' },
        { label: 'Microsoft Surface', href: '/microsoft-surface-reparation/' },
        { label: 'Samsung', href: '/samsung-reparation/' },
        { label: 'Mac-reparation (oversigt)', href: '/mac-reparation/' },
        { label: 'Mac (stationær)', href: '/mac-stationaer-reparation/' },
        { label: 'Gaming-pc’er & specialbyggede', href: '/gaming-pc-reparation/' },
        { label: 'Toshiba / Dynabook', href: '/toshiba-dynabook-reparation/' },
        { label: 'Fujitsu', href: '/fujitsu-reparation/' },
        { label: 'LG gram', href: '/lg-gram-reparation/' },
        { label: 'Razer Blade', href: '/razer-blade-reparation/' },
        { label: 'Andre mærker & specialbyggede', href: '/andre-maerker-reparation/' },
      ] },
      { label: 'Reparation & vedligeholdelse', children: [
        { label: 'Computer reparation (oversigt)', href: '/computer-reparation/' },
        { label: 'Bundkortreparation', href: '/bundkort-reparation/' },
        { label: 'SSD-opgradering', href: '/ssd-opgradering/' },
        { label: 'RAM-opgradering', href: '/ram-opgradering/' },
        { label: 'PC-optimering', href: '/optimering-af-computer/' },
        { label: 'Udskiftning af harddisk', href: '/harddisk-ssd-udskiftning/' },
        { label: 'Skærmudskiftning', href: '/udskiftning-af-skaerm/' },
        { label: 'Væskeskade-reparation', href: '/vaeskeskade-reparation/' },
        { label: 'PC-rensning & støvfjernelse', href: '/rens-af-pc/' },
        { label: 'Reparation af ladeport', href: '/ladestik-reparation/' },
        { label: 'Reparation af strømforsyning', href: '/stroemforsyning-reparation/' },
        { label: 'Udskiftning af tastatur (bærbar)', href: '/tastaturudskiftning/' },
        { label: 'Mac-rensning', href: '/rens-af-mac/' },
        { label: 'Mac-batteriskift', href: '/mac-batteriskift/' },
        { label: 'Mac-skærmudskiftning', href: '/mac-skaermudskiftning/' },
        { label: 'MacBook-tastaturudskiftning', href: '/mac-tastaturudskiftning/' },
        { label: 'MacBook-trackpadudskiftning', href: '/mac-trackpadudskiftning/' },
      ] },
      { label: 'Data & sikkerhed', children: [
        { label: 'Backup & datagendannelse', href: '/backup-og-datagendannelse/' },
        { label: 'Fjernelse af virus & malware', href: '/virus-og-malwarefjernelse/' },
      ] },
      { label: 'Fjernsupport & on-site', children: [
        { label: 'IT-support på Frederiksberg', href: '/it-support-frederiksberg/' },
        { label: 'Fjernsupport', href: '/fjernsupport/' },
        { label: 'On-site tekniker', href: '/on-site-tekniker/' },
        { label: 'Systeminstallation', href: '/reinstallation-af-system/' },
      ] },
      { label: 'Netværksudstyr', children: [
        { label: 'Netværksudstyr (oversigt)', href: '/netvaerksudstyr/' },
        { label: 'WiFi- & netværksfejlfinding', href: '/wifi-og-netvaerksfejlfinding/' },
        { label: 'UniFi-opsætning & support', href: '/unifi-opsaetning/' },
        { label: 'Netgear-opsætning & support', href: '/netgear-opsaetning/' },
        { label: 'TP-Link-opsætning & support', href: '/tp-link-opsaetning/' },
        { label: 'ASUS-router-opsætning & support', href: '/asus-router-opsaetning/' },
        { label: 'Eero & Google Nest WiFi-opsætning', href: '/eero-google-nest-wifi-opsaetning/' },
      ] },
      { label: 'Hjælp & guides', children: [
        { label: 'Computeren vil ikke tænde', href: '/computer-vil-ikke-taende/' },
        { label: 'Fejlmeddelelser & koder', href: '/fejlmeddelelser/' },
        { label: 'Blå skærm (BSOD)', href: '/blaa-skaerm-bsod/' },
        { label: 'Grafikkortfejl på bærbar', href: '/grafikkort-fejl-baerbar/' },
        { label: 'MacBook Touch Bar virker ikke', href: '/macbook-touch-bar-virker-ikke/' },
        { label: 'Batteriet holder ikke', href: '/batteriet-holder-ikke/' },
        { label: 'Hvor længe holder en MacBook?', href: '/hvor-laenge-holder-en-macbook/' },
        { label: 'Windows 10 support er slut', href: '/windows-10-support-slut/' },
        { label: 'Kan min computer køre Windows 11?', href: '/kan-min-computer-koere-windows-11/' },
        { label: 'Opgradering til Windows 11', href: '/opgradering-til-windows-11/' },
        { label: 'Windows 10-migrering for virksomheder', href: '/windows-10-erhverv-migrering/' },
        { label: 'Generel FAQ', href: '/faq/' },
      ] },
    ],
  },
  { label: 'Butik', href: '/butik/' },
  { label: 'Hosting', href: '/hosting/' },
  { label: 'Automatisk Backup', href: '/automatisk-backup/' },
  { label: 'Domæner', href: '/domaener/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

// hreflang map unused on the Danish site (no cross-language counterparts yet).
export const hreflangMap = {};
