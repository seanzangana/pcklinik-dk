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
  { label: 'IT-support til erhverv', href: '/business-it-service-agreement/' },
  {
    label: 'Hjemmesider & SEO',
    href: '/websites-seo-google-ads/',
    children: [
      { label: 'Oversigt', href: '/websites-seo-google-ads/' },
      { label: 'Webdesign & udvikling', href: '/website-design-development/' },
      { label: 'SEO-ydelser', href: '/seo-services/' },
      { label: 'Google Ads-administration', href: '/google-ads-management/' },
    ],
  },
  {
    label: 'Services',
    href: '/faq/',
    // Cascading flyout: 6 categories, each opens a side panel of links.
    flyout: [
      { label: 'Efter mærke', children: [
        { label: 'Lenovo', href: '/lenovo-repair/' },
        { label: 'Acer', href: '/acer-repair/' },
        { label: 'HP', href: '/hp-repair/' },
        { label: 'Dell', href: '/dell-repair/' },
        { label: 'Asus', href: '/asus-repair/' },
        { label: 'MSI', href: '/msi-repair/' },
        { label: 'Huawei', href: '/huawei-repair/' },
        { label: 'MacBook', href: '/macbook-repair/' },
        { label: 'Microsoft Surface', href: '/microsoft-surface-repair/' },
        { label: 'Samsung', href: '/samsung-repair/' },
        { label: 'Mac-reparation (oversigt)', href: '/mac-repair/' },
        { label: 'Mac (stationær)', href: '/mac-desktop-repair/' },
        { label: 'Gaming-pc’er & specialbyggede', href: '/gaming-pc-repair-and-build/' },
        { label: 'Toshiba / Dynabook', href: '/toshiba-dynabook-repair/' },
        { label: 'Fujitsu', href: '/fujitsu-repair/' },
        { label: 'LG gram', href: '/lg-gram-repair/' },
        { label: 'Razer Blade', href: '/razer-blade-repair/' },
        { label: 'Andre mærker & specialbyggede', href: '/other-brands-repair/' },
      ] },
      { label: 'Reparation & vedligeholdelse', children: [
        { label: 'SSD-opgradering', href: '/ssd-upgrade/' },
        { label: 'PC-optimering', href: '/pc-optimization/' },
        { label: 'Udskiftning af harddisk', href: '/hard-drive-replacement/' },
        { label: 'Skærmudskiftning', href: '/screen-replacement/' },
        { label: 'Væskeskade-reparation', href: '/liquid-damage-repair/' },
        { label: 'PC-rensning & støvfjernelse', href: '/pc-cleaning/' },
        { label: 'Reparation af ladeport', href: '/charging-port-repair/' },
        { label: 'Udskiftning af tastatur (bærbar)', href: '/keyboard-replacement/' },
        { label: 'Mac-rensning', href: '/mac-cleaning/' },
        { label: 'Mac-batteriskift', href: '/mac-battery-replacement/' },
        { label: 'Mac-skærmudskiftning', href: '/mac-screen-replacement/' },
        { label: 'MacBook-tastaturudskiftning', href: '/mac-keyboard-replacement/' },
        { label: 'MacBook-trackpadudskiftning', href: '/mac-trackpad-replacement/' },
      ] },
      { label: 'Data & sikkerhed', children: [
        { label: 'Backup & datagenskabelse', href: '/data-backup-and-recovery/' },
        { label: 'Fjernelse af virus & malware', href: '/virus-removal/' },
      ] },
      { label: 'Fjernsupport & on-site', children: [
        { label: 'Fjernsupport', href: '/remote-support/' },
        { label: 'On-site tekniker', href: '/on-site-technician/' },
        { label: 'Systeminstallation', href: '/system-installation/' },
      ] },
      { label: 'Netværksudstyr', children: [
        { label: 'Netværksudstyr (oversigt)', href: '/network-equipment/' },
        { label: 'WiFi- & netværksfejlfinding', href: '/wifi-network-troubleshooting/' },
        { label: 'UniFi-opsætning & support', href: '/unifi-setup-support/' },
        { label: 'Netgear-opsætning & support', href: '/netgear-setup-support/' },
        { label: 'TP-Link-opsætning & support', href: '/tp-link-setup-support/' },
        { label: 'ASUS-router-opsætning & support', href: '/asus-router-setup-support/' },
        { label: 'Eero & Google Nest WiFi-opsætning', href: '/eero-google-nest-wifi-setup/' },
      ] },
      { label: 'Hjælp & guides', children: [
        { label: 'Computeren vil ikke tænde', href: '/computer-wont-turn-on/' },
        { label: 'Fejlmeddelelser & koder', href: '/error-messages/' },
        { label: 'Generel FAQ', href: '/faq/' },
      ] },
    ],
  },
  { label: 'Kontakt', href: '/contact/' },
];

// hreflang map unused on the Danish site (no cross-language counterparts yet).
export const hreflangMap = {};
