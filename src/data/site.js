// Central site config — single source of truth for NAP, nav, and URL mapping.
// pcklinik.dk — Danish site (fork of the pcklinik.eu codebase, Arabic removed).
export const site = {
  name: 'PCKlinik',
  domain: 'https://www.pcklinik.dk',
  phone: '91 81 61 81',
  phoneHref: 'tel:+4591816181',
  formMode: 'cloudflare', // 'formspree' or 'cloudflare' (Resend via /api/submit-form). LIVE-GATED: verify domain in Resend + set RESEND_API_KEY secret before deploying.
  emailConsumer: 'kontakt@pcklinik.dk',
  emailBusiness: 'kontakt@pcklinik.dk',
  address: 'Falkoner Allé 108, 2000 Frederiksberg',
  addressStreet: 'Falkoner Allé 108',
  addressLocality: 'Frederiksberg',
  addressPostal: '2000',
  hours: 'Man–fre 10:00–18:00 · Lør 10:00–14:00 · Søn lukket',
  mapsEmbed: 'https://www.google.com/maps?q=Falkoner+All%C3%A9+108,+2000+Frederiksberg&output=embed',
};

// Dropdown children may include { header: 'Label' } items — rendered as a
// non-clickable section divider inside the menu.
export const nav = [
  { label: 'Forside', href: '/' },
  { label: 'IT-support til erhverv', href: '/it-support-til-erhverv/' },
  {
    label: 'Hjemmesider & SEO',
    href: '/hjemmesider-seo-google-ads/',
    children: [
      { label: 'Oversigt', href: '/hjemmesider-seo-google-ads/' },
      { label: 'Webdesign & udvikling', href: '/webdesign-og-udvikling/' },
      { label: 'SEO-ydelser', href: '/seo-ydelser/' },
      { label: 'Google Ads-administration', href: '/google-ads-administration/' },
    ],
  },
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
        { label: 'PC-optimering', href: '/optimering-af-computer/' },
        { label: 'Udskiftning af harddisk', href: '/harddisk-ssd-udskiftning/' },
        { label: 'Skærmudskiftning', href: '/udskiftning-af-skaerm/' },
        { label: 'Væskeskade-reparation', href: '/vaeskeskade-reparation/' },
        { label: 'PC-rensning & støvfjernelse', href: '/rens-af-pc/' },
        { label: 'Reparation af ladeport', href: '/ladestik-reparation/' },
        { label: 'Udskiftning af tastatur (bærbar)', href: '/tastaturudskiftning/' },
        { label: 'Mac-rensning', href: '/rens-af-mac/' },
        { label: 'Mac-batteriskift', href: '/mac-batteriskift/' },
        { label: 'Mac-skærmudskiftning', href: '/mac-skaermudskiftning/' },
        { label: 'MacBook-tastaturudskiftning', href: '/mac-tastaturudskiftning/' },
        { label: 'MacBook-trackpadudskiftning', href: '/mac-trackpadudskiftning/' },
      ] },
      { label: 'Data & sikkerhed', children: [
        { label: 'Backup & datagenskabelse', href: '/backup-og-datagendannelse/' },
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
        { label: 'Generel FAQ', href: '/faq/' },
      ] },
    ],
  },
  { label: 'Hosting', href: '/hosting/' },
  { label: 'Automatisk Backup', href: '/automatisk-backup/' },
  { label: 'Domæner', href: '/domaener/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

// hreflang map unused on the Danish site (no cross-language counterparts yet).
export const hreflangMap = {};
