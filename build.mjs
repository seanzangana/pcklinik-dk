// ============================================================================
// Zero-dependency static site renderer for pcklinik.dk (Danish; fork of pcklinik.eu codebase).
// Single source of truth for the site (no Astro/view mirror). Renders into ./dist.
// Reads data files (src/data/*.js) and CSS (src/styles/global.css).
//   Run:  node build.mjs
// ============================================================================
import { promises as fs, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { repairs } from './src/data/repairs.js';
import { site, nav, hreflangMap } from './src/data/site.js';
import { lucide, lucideSm } from './src/data/icons.js';
import { services } from './src/data/services.js';
import { locations } from './src/data/locations.js';
import { loadNewsPosts } from './src/content/posts.mjs';
import { macHubHtml, gamingHtml, MAC_HUB_FAQ, GAMING_FAQ, errorMessagesHtml, ERROR_FAQ, computerWontTurnOnHtml, WONT_TURN_ON_FAQ, faqPageHtml, GENERAL_FAQ, networkHubHtml, NETWORK_HUB_FAQ, websitesHubHtml, WEBSITES_HUB_FAQ, studentsHtml, STUDENTS_FAQ, priceRangesHtml, itRaadgivningHtml, IT_RAADGIVNING_FAQ, forsikringsreparationHtml, FORSIKRING_FAQ, reparereEllerKoebeHtml, REPARERE_KOEBE_FAQ, macbookLevetidHtml, MACBOOK_LEVETID_FAQ, windows10HubHtml, WINDOWS10_HUB_FAQ, windows11KravHtml, WINDOWS11_KRAV_FAQ, windows11OpgraderingHtml, WINDOWS11_OPGRADERING_FAQ, windows10ErhvervHtml, WINDOWS10_ERHVERV_FAQ, itSupportAdvokatkontorHtml, IT_SUPPORT_ADVOKAT_FAQ, itSupportKlinikHtml, IT_SUPPORT_KLINIK_FAQ, itSupportMindreVirksomhederHtml, IT_SUPPORT_MINDRE_VIRKSOMHEDER_FAQ, bsodHtml, BSOD_FAQ, grafikkortFejlHtml, GPU_FEJL_FAQ, macbookTouchBarHtml, TOUCH_BAR_FAQ, batterietHolderIkkeHtml, BATTERI_HOLDER_IKKE_FAQ } from './src/data/richPages.js';
import { announcement } from './src/data/announcement.js';
// Nyheder posts (src/content/nyheder/*.md), populated at the top of run().
// Declared here rather than as a run()-local because newsIndexHtml()/
// newsPostHtml()/newsPostSchema() below close over this module-level binding.
let news = [];

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');
// Inlined directly into every page's <head> (see page() below) so the
// stylesheet is never a render-blocking network request — global.css is
// small (~6.6 KiB) so inlining it is cheap and removes the ~160ms
// render-blocking-resources penalty PageSpeed was flagging. Still copied to
// /styles/global.css in dist/ (see run()) as a fallback/for direct linking.
const GLOBAL_CSS = readFileSync(path.join(__dirname, 'src/styles/global.css'), 'utf8');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// Renders a <form> opening + hidden routing fields for the active form mode.
function formOpen(dest, subject, nextPath) {
  const next = `${site.domain}${nextPath}`;
  if (site.formMode === 'cloudflare') {
    const okMsg = 'Din besked er sendt — tak. Vi vender tilbage hurtigst muligt.';
    const errMsg = 'Noget gik galt. Prøv igen, eller send os en e-mail direkte.';
    return `<form action="/api/submit-form" method="POST" data-ajax-form data-ok="${esc(okMsg)}" data-err="${esc(errMsg)}">
        <input type="hidden" name="_to" value="${dest}" />
        <input type="hidden" name="_subject" value="${esc(subject)}" />
        <input type="hidden" name="_next" value="${next}" />
        <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px" />`;
  }
  const fs = dest === site.emailBusiness ? 'xpqgbpog' : 'maqgvelb';
  return `<form action="https://formspree.io/f/${fs}" method="POST">
        <input type="hidden" name="_subject" value="${esc(subject)}" />
        <input type="hidden" name="_next" value="${next}" />`;
}

// ---------- announcement banner ----------
// Renders nothing at all when announcement.enabled is false — zero visual
// footprint, zero performance cost. See src/data/announcement.js for how
// Shan (via Cowork) toggles this on/off with a one-line edit + push.
// Dismiss is stored in sessionStorage (per-tab-session): dismissing hides
// the banner for the rest of that browsing session, but it reappears on
// the next fresh visit/session as long as `enabled` is still true — no code
// change needed to "reset" it.
// expiresAt (optional, ISO timestamp incl. tz offset) adds a client-side
// auto-hide on top of that: once a visitor's own clock passes it, the
// script below hides the banner even though `enabled` is still true.
// No rebuild/push is needed right at the expiry moment since the check
// runs in-browser on every page load. Leave unset/null to skip this.
function announcementBanner() {
  if (!announcement.enabled) return '';
  const id = 'pck-announcement';
  return `<div class="announcement-bar announcement-${esc(announcement.type)}" id="${id}">
    <div class="wrap announcement-inner"><span class="announcement-msg">${esc(announcement.message)}</span><button type="button" class="announcement-close" id="${id}-close" aria-label="Luk besked">&times;</button></div>
  </div>`;
}
const announcementScript = announcement.enabled ? `<script>
(function(){
  var KEY='pck-announcement-dismissed';
  var EXPIRES=${announcement.expiresAt ? JSON.stringify(announcement.expiresAt) : 'null'};
  var bar=document.getElementById('pck-announcement');
  var btn=document.getElementById('pck-announcement-close');
  if(!bar) return;
  if(EXPIRES){ try{ if(Date.now()>=new Date(EXPIRES).getTime()){ bar.style.display='none'; return; } }catch(e){} }
  try{ if(sessionStorage.getItem(KEY)==='1'){ bar.style.display='none'; } }catch(e){}
  btn&&btn.addEventListener('click',function(){
    bar.style.display='none';
    try{ sessionStorage.setItem(KEY,'1'); }catch(e){}
  });
})();
</script>` : '';

// ---------- shared chrome ----------
function topbar(p) {
  return `<div class="topbar"><div class="wrap">
    <span>${lucideSm.clock} ${site.hours}</span>
    <span>${lucideSm.phone} <a href="${site.phoneHref}">${site.phone}</a></span>
    <span>${lucideSm.mail} <a href="mailto:${site.emailConsumer}">${site.emailConsumer}</a></span>
  </div></div>`;
}
function isActive(item, p) {
  if (item.href === '/') return p === '/';
  if (p === item.href) return true;
  if (item.children) return item.children.some((c) => p === c.href);
  if (item.flyout) return item.flyout.some((cat) => cat.children.some((c) => p === c.href));
  return false;
}
function header(p) {
  const items = nav.map((item) => {
    if (item.flyout) {
      const cats = item.flyout.map((cat) => {
        const links = cat.children.map((c) => `<a href="${c.href}">${esc(c.label)}</a>`).join('');
        return `<div class="flyout-cat"><button type="button" class="flyout-cat-label">${esc(cat.label)} <span aria-hidden="true">▸</span></button><div class="flyout-panel">${links}</div></div>`;
      }).join('');
      return `<div class="nav-item dropdown flyout"><a href="${item.href}" class="${isActive(item, p) ? 'active' : ''}">${item.label} <span aria-hidden="true">▾</span></a><div class="dropdown-menu flyout-menu">${cats}</div></div>`;
    }
    if (item.children) {
      const menu = item.children.map((c) => c.header ? `<span class="dropdown-header">${esc(c.header)}</span>` : `<a href="${c.href}">${esc(c.label)}</a>`).join('');
      return `<div class="nav-item dropdown"><a href="${item.href}" class="${isActive(item, p) ? 'active' : ''}">${item.label} <span aria-hidden="true">▾</span></a><div class="dropdown-menu">${menu}</div></div>`;
    }
    return `<div class="nav-item"><a href="${item.href}" class="${isActive(item, p) ? 'active' : ''}">${item.label}</a></div>`;
  }).join('');
  return `${topbar(p)}<header class="site-header"><div class="wrap">
    <a href="/" class="brand" aria-label="PCKlinik home"><img src="/logo.png" alt="PCKlinik" width="100" height="40" /></a>
    <nav class="main" id="mainnav">${items}</nav>
    <button class="nav-toggle" id="navtoggle" aria-label="Toggle menu" aria-expanded="false"><span></span><span></span><span></span></button>
  </div></header>`;
}
function footer() {
  const year = new Date().getFullYear();
  return `<footer class="site-footer"><div class="wrap"><div class="cols">
    <div><img src="/logo.png" alt="PCKlinik" class="logo-foot" width="85" height="34" /><p>Hurtig, ærlig PC- og Mac-reparation til privatpersoner og virksomheder på Frederiksberg og i København.</p><p>Alt inden for computer og IT — du har ikke brug for nogen andre.</p><p>${site.address}</p></div>
    <div><h2>Reparationer</h2><a href="/computer-reparation/">Computer reparation</a><a href="/lenovo-reparation/">Lenovo</a><a href="/hp-reparation/">HP</a><a href="/dell-reparation/">Dell</a><a href="/macbook-reparation/">MacBook</a><a href="/mac-stationaer-reparation/">Mac (stationær)</a><a href="/bundkort-reparation/">Bundkortreparation</a></div>
    <div><h2>Erhverv</h2><a href="/it-support-til-erhverv/">IT-support til erhverv</a><a href="/it-raadgivning/">IT-rådgivning</a><a href="/it-support-frederiksberg/">IT-support Frederiksberg</a><a href="/it-support-koebenhavn/">IT-support København</a><a href="/microsoft-365-erhverv/">Microsoft 365 til virksomheder</a><a href="/automatisk-backup/">Automatisk Backup</a><a href="/hosting/">Hosting</a><a href="/domaener/">Domæner</a><a href="/forsikringsreparation/">Forsikringsreparation</a><a href="/windows-10-erhverv-migrering/">Windows 10-migrering for virksomheder</a><a href="/it-support-advokatkontor/">IT-support til advokatkontorer</a><a href="/it-support-klinik/">IT-support til klinikker</a><a href="/it-support-mindre-virksomheder-frederiksberg/">IT-support til mindre virksomheder</a><a href="/hjemmesider-seo-google-ads/">Hjemmesider & SEO</a></div>
    <div><h2>Mere</h2><a href="/butik/">Butik</a><a href="/butik/computere/refurbished/">Refurbished computere</a><a href="/reparere-eller-koebe-ny-computer/">Reparere eller købe ny?</a><a href="/hvor-laenge-holder-en-macbook/">Hvor længe holder en MacBook?</a><a href="/windows-10-support-slut/">Windows 10 support er slut</a><a href="/kan-min-computer-koere-windows-11/">Kan min computer køre Windows 11?</a><a href="/opgradering-til-windows-11/">Opgradering til Windows 11</a><a href="/blaa-skaerm-bsod/">Blå skærm (BSOD)</a><a href="/grafikkort-fejl-baerbar/">Grafikkortfejl på bærbar</a><a href="/macbook-touch-bar-virker-ikke/">MacBook Touch Bar virker ikke</a><a href="/batteriet-holder-ikke/">Batteriet holder ikke</a><a href="/om-os/">Mød teamet</a><a href="/faq/">FAQ</a><a href="/nyheder/">Nyheder</a><a href="/studerende/">Studerende (CBS & DTU)</a><a href="/reparationspriser/">Typiske reparationspriser</a><a href="/garanti/">Garanti</a><a href="/aabningstider/">Åbningstider</a><a href="/kontakt/">Kontakt</a></div>
    <div><h2>Områder vi betjener</h2><a href="/computerreparation-koebenhavn/">København</a><a href="/mac-reparation-koebenhavn/">Mac-reparation i København</a><a href="/it-support-koebenhavn/">IT-support i København</a><a href="/computerreparation-frederiksberg/">Frederiksberg</a><a href="/computerreparation-vesterbro/">Vesterbro</a><a href="/computerreparation-oesterbro/">Østerbro</a><a href="/computerreparation-amager/">Amager</a><a href="/computerreparation-indre-by/">Indre By</a><a href="/computerreparation-christianshavn/">Christianshavn</a><a href="/computerreparation-vanloese/">Vanløse</a><a href="/computerreparation-valby/">Valby</a><a href="/computerreparation-nordvest/">Nordvest</a><a href="/computerreparation-broenshoej/">Brønshøj</a><a href="/computerreparation-bispebjerg/">Bispebjerg</a><a href="/computerreparation-storkoebenhavn/">Storkøbenhavn</a><a href="/fjernsupport/">Resten af Danmark (fjernsupport &amp; indsendelse)</a></div>
    
    <div><h2>Kontakt os</h2><p>📞 <a href="${site.phoneHref}" style="display:inline">${site.phone}</a></p><p>✉️ <a href="mailto:${site.emailConsumer}" style="display:inline">${site.emailConsumer}</a></p><p style="margin-top:14px">Man–fre 10:00–18:00<br />Lør 10:00–14:00<br />Søn lukket</p>
      <p style="margin-top:14px"><a href="${site.reviewsUrl}" target="_blank" rel="noopener">⭐ ${esc(site.reviewRating)}/5 baseret på ${esc(site.reviewCount)} anmeldelser →</a></p></div>
  </div><div class="footer-bottom"><div class="footer-nap">PCKlinik · Falkoner Allé 108, 2000 Frederiksberg · 91 81 61 81</div><div>© ${year} PCKlinik · CVR-nr. 33275145 · Frederiksberg</div></div></div></footer>`;
}
const navToggleScript = `<script>
const t=document.getElementById('navtoggle'),n=document.getElementById('mainnav');
t&&t.addEventListener('click',()=>{const o=n.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false');});
document.querySelectorAll('nav.main .dropdown > a').forEach(a=>{a.setAttribute('aria-haspopup','true');a.setAttribute('aria-expanded','false');a.addEventListener('click',e=>{e.preventDefault();const d=a.parentElement;const willOpen=!d.classList.contains('open');document.querySelectorAll('nav.main .dropdown.open').forEach(x=>{if(x!==d){x.classList.remove('open');x.querySelector('a').setAttribute('aria-expanded','false');x.querySelectorAll('.flyout-cat.expanded').forEach(c=>c.classList.remove('expanded'));}});d.classList.toggle('open',willOpen);a.setAttribute('aria-expanded',willOpen?'true':'false');});});
document.querySelectorAll('.flyout-cat-label').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();const cat=b.parentElement;const willExpand=!cat.classList.contains('expanded');const menu=cat.closest('.flyout-menu');menu&&menu.querySelectorAll('.flyout-cat.expanded').forEach(c=>{if(c!==cat)c.classList.remove('expanded');});cat.classList.toggle('expanded',willExpand);}));
document.addEventListener('click',e=>{if(!e.target.closest('.nav-item')){document.querySelectorAll('nav.main .dropdown.open').forEach(x=>{x.classList.remove('open');x.querySelector('a').setAttribute('aria-expanded','false');});document.querySelectorAll('.flyout-cat.expanded').forEach(c=>c.classList.remove('expanded'));}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('nav.main .dropdown.open').forEach(x=>{x.classList.remove('open');x.querySelector('a').setAttribute('aria-expanded','false');});document.querySelectorAll('.flyout-cat.expanded').forEach(c=>c.classList.remove('expanded'));}});
</script>`;

// AJAX submit for contact forms: no reload, inline success/error state.
const formsScript = `<script>
(function(){
var fs=document.querySelectorAll('form[data-ajax-form]');
fs.forEach(function(f){
var s=document.createElement('div');s.className='form-status';s.setAttribute('role','status');s.setAttribute('aria-live','polite');s.style.display='none';f.appendChild(s);
var b=f.querySelector('[type=submit]');
f.addEventListener('submit',function(e){
e.preventDefault();s.style.display='none';s.className='form-status';if(b){b.disabled=true;}
var d={};new FormData(f).forEach(function(v,k){d[k]=v;});
fetch(f.getAttribute('action'),{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(d)})
.then(function(r){return r.json().catch(function(){return{};}).then(function(j){return{ok:r.ok,j:j};});})
.then(function(x){if(x.ok&&x.j&&x.j.ok){f.reset();s.className='form-status form-status--ok';s.textContent=f.getAttribute('data-ok');}else{s.className='form-status form-status--error';s.textContent=f.getAttribute('data-err');}s.style.display='block';})
.catch(function(){s.className='form-status form-status--error';s.textContent=f.getAttribute('data-err');s.style.display='block';})
.then(function(){if(b){b.disabled=false;}});
});
});
})();
</script>`;

// NOTE — no aggregateRating here on purpose. Google doesn't allow
// self-serving review markup on LocalBusiness/Organization subtypes,
// so it would never be rich-result eligible regardless of how the
// JSON-LD is shaped. The visible footer review link
// (site.reviewRating/reviewCount in src/data/site.js) is page content,
// not markup, and is unaffected — it's sourced from the Google Business
// Profile, not this schema object.
//
// FROZEN BLOCK — byte-identical on every page that includes it (see page()
// below, which puts this on literally every page). Do not edit per-page;
// edit here once. `@id` lets other schema nodes (see areaServiceSchema())
// reference this exact node instead of duplicating business fields.
// `url` is always the homepage, never a subpage. `geo` is sourced from the
// verified/owned Google Business Profile listing for "PC klinik" (Falkoner
// Allé 108) — lat/long confirmed two independent ways from the same Google
// Maps place URL (the @lat,long prefix and the !3d/!4d data params) and
// cross-checked against the pin shown in the GBP dashboard's own Location
// tab. Confirmed by Shan 2026-08-05.
//
// `@type` is ElectronicsStore, not the old ComputerRepairService — that
// was never a real schema.org type (validator.schema.org confirms it's
// undefined in the vocabulary), which was also breaking `provider`
// resolution on every areaServiceSchema() Service node pointing at this
// block. ElectronicsStore is a real LocalBusiness > Store subtype with
// real-world adoption and fits PCKlinik's actual model (repairs + selling
// new/refurbished computers). Found and fixed 2026-08-05 while verifying
// this PR against validator.schema.org.
const businessSchema = {
  '@context': 'https://schema.org', '@type': 'ElectronicsStore', '@id': site.domain + '/#business', name: 'PCKlinik',
  image: site.domain + '/logo.png',
  description: 'PC- og Mac-reparation, IT-support, salg af computere og rådgivning i København og på Frederiksberg.',
  url: site.domain + '/', telephone: '+4591816181', email: site.emailConsumer,
  priceRange: 'kr. 300–600',
  address: { '@type': 'PostalAddress', streetAddress: site.addressStreet, postalCode: site.addressPostal, addressLocality: site.addressLocality, addressCountry: 'DK' },
  geo: { '@type': 'GeoCoordinates', latitude: 55.6868578, longitude: 12.5406516 },
  areaServed: ['Frederiksberg', 'København'],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '10:00', closes: '14:00' },
  ],
};

// Builds BreadcrumbList JSON-LD straight from the visible `.crumbs` div
// already present in a page's body HTML, instead of hand-maintaining a
// second copy of the trail per page type. Guarantees the structured data
// always matches what's actually on the page (Google requires this) and
// covers every page that renders a `.crumbs` div with zero extra code
// per page generator. Returns null when a page has no `.crumbs` div
// (e.g. the homepage, kontakt, faq) — those simply don't get the schema.
function breadcrumbSchemaFrom(body, canonical) {
  const m = body.match(/<div class="crumbs">([\s\S]*?)<\/div>/);
  if (!m) return null;
  const inner = m[1];
  const unesc = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  const items = [];
  const linkRe = /<a href="([^"]+)">([^<]+)<\/a>/g;
  let lm;
  while ((lm = linkRe.exec(inner))) items.push({ name: unesc(lm[2]), url: lm[1] });
  const spanM = inner.match(/<span>([^<]+)<\/span>\s*$/);
  if (spanM) items.push({ name: unesc(spanM[1]), url: null });
  if (!items.length) return null;
  if (items[0].url !== '/') items.unshift({ name: 'Forside', url: '/' });
  return {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem', position: i + 1, name: it.name,
      item: it.url ? site.domain + it.url : canonical,
    })),
  };
}

function page({ title, description, p, body, schema = null, lang = 'da', dir = '', chrome = 'da', noindex = false }) {
  const canonical = site.domain + p;
  const dk = hreflangMap[p];
  const altHreflang = '';
  const schemas = [businessSchema];
  if (schema) Array.isArray(schema) ? schemas.push(...schema) : schemas.push(schema);
  const breadcrumb = breadcrumbSchemaFrom(body, canonical);
  if (breadcrumb) schemas.push(breadcrumb);
  const ld = schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n  ');
  return `<!DOCTYPE html>
<html lang="${lang}"${dir ? ` dir="${dir}"` : ''}>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-54QH3TD0N9"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-54QH3TD0N9');</script>
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}" />
  ${noindex ? '<meta name="robots" content="noindex, follow" />\n  ' : ''}<link rel="canonical" href="${canonical}" />
  <link rel="alternate" hreflang="${lang}" href="${canonical}" />
  ${dk ? `<link rel="alternate" hreflang="da" href="${dk}" />\n  <link rel="alternate" hreflang="x-default" href="${canonical}" />` : ''}${altHreflang}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:site_name" content="PCKlinik" />
  <meta property="og:locale" content="da_DK" />
  <link rel="icon" type="image/png" href="/logo.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
 <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=optional" />
  <style>${GLOBAL_CSS}</style>
  ${ld}
</head>
<body>
  ${announcementBanner()}
  ${header(p)}
  <main>
${body}
  </main>
  ${footer()}
  ${navToggleScript}
  ${formsScript}
  ${mapFacadeScript}
  ${announcementScript}
</body>
</html>`;
}

// Click-to-load map facade: avoids loading Google Maps' embed JS (~220 KiB
// unused-on-load, per PageSpeed) until the visitor actually wants the
// interactive map. Swaps in the real iframe on click via mapFacadeScript
// (see page()). Every page that shows the map pays zero JS cost for it
// unless the button is clicked.
const mapFrame = `<div class="map-frame"><button type="button" class="map-facade" data-map-src="${esc(site.mapsEmbed)}" aria-label="Åbn interaktivt kort over PCKlinik, Falkoner Allé 108"><span class="map-facade-icon" aria-hidden="true">📍</span><span>Klik for at åbne det interaktive kort</span></button></div>`;
const mapFacadeScript = `<script>
document.querySelectorAll('.map-facade').forEach(function(btn){btn.addEventListener('click',function(){var src=btn.getAttribute('data-map-src');var f=document.createElement('iframe');f.src=src;f.loading='lazy';f.title='PCKlinik på kortet, Falkoner Allé 108';f.referrerPolicy='no-referrer-when-downgrade';btn.replaceWith(f);});});
</script>`;

// ---------- repair pages ----------
function repairBody(r) {
  const svcIcons = ['🖥️', '🔋', '🔧', '🌀'];
  const services = r.services.map((s, i) => `<div class="card"><div class="card-icon">${svcIcons[i % 4]}</div><h3>${esc(s.title)}</h3><p>${s.body}</p></div>`).join('');
  const faq = r.faq.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const cross = r.crosslinks.map((c) => `<a href="${c.href}">${esc(c.label)} →</a>`).join('') + `<a href="/kontakt/">Kontakt & booking →</a>` + `<a href="/butik/">Kan det ikke betale sig at reparere? Se vores computere →</a>` + `<a href="/om-os/">Mød teamet →</a>`;
  const intro = r.intro.map((pp) => `<p>${pp}</p>`).join('');
  // Optional sections — omitted for the catch-all "Other Brands" page.
  const modelsSection = r.models ? `<section class="section alt"><div class="wrap"><div class="eyebrow">Modeller vi reparerer</div><h2>Fuld modeldækning</h2><div class="table-wrap"><table class="models"><thead><tr><th>Serie</th><th>Modeller</th><th>Typisk problem</th></tr></thead><tbody>${r.models.map((m) => `<tr><td>${esc(m.series)}</td><td>${esc(m.models)}</td><td class="issue">${esc(m.issue)}</td></tr>`).join('')}</tbody></table></div></div></section>` : '';
  const photosSection = r.photos ? `<section class="section alt"><div class="wrap"><div class="eyebrow">Fra vores værksted</div><h2>Rigtige ${esc(r.brand)}-reparationer</h2><div class="grid grid-${r.photos.length === 2 ? '2' : '3'}">${r.photos.map((ph) => `<img class="img-placeholder" src="${ph.path}" alt="${esc(ph.alt)}" loading="lazy" width="480" height="360" />`).join('')}</div></div></section>` : '';
  const whySection = r.why ? `<section class="section"><div class="wrap"><div class="eyebrow">Hvorfor PCKlinik</div><h2>${esc(r.whyHeading)}</h2>${r.whyIntro ? `<p class="sub">${r.whyIntro}</p>` : ''}<ul class="why-list">${r.why.map((w) => `<li><strong>${esc(w.title)}</strong>${esc(w.body)}</li>`).join('')}</ul></div></section>` : '';
  const ctaHeading = r.ctaHeading ? esc(r.ctaHeading) : `Klar til at få din ${esc(r.brand)} repareret?`;
  return `  <section class="hero"><div class="wrap">
    <div class="eyebrow">${esc(r.brand)}-reparation · Frederiksberg &amp; København</div>
    <h1>${esc(r.h1)}</h1><p class="lead">${esc(r.h2)}</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">${esc(r.ctaPrimary)}</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div>
  </div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>${esc(r.brand)}-reparation</span></div>${intro}</div></section>
  ${modelsSection}
  <section class="section"><div class="wrap"><div class="eyebrow">Hvad vi reparerer</div><h2>${esc(r.brand)}-reparationsservices</h2><div class="grid grid-4">${services}</div></div></section>
  ${photosSection}
  ${whySection}
  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>${esc(r.brand)}-reparation — ofte stillede spørgsmål</h2><div class="faq">${faq}</div></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>${ctaHeading}</h2><p>Fejlsøgning 300 kr. inkl. moms (3–4 dage) eller ekspres for 600 kr. inkl. moms (1–2 timer). Fast pris, før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">${esc(r.ctaPrimary)}</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relaterede reparationer</p><div class="crosslinks">${cross}</div></div></div></section>`;
}
function repairSchema(r) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: r.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
}

// ---------- home ----------
const HOME_FAQ = [
  ['Reparerer I alle computermærker?', 'Ja, vi reparerer alle større PC- og Mac-mærker samt specialbyggede computere. Kan du ikke se dit mærke, så se "Andre mærker & specialbyggede".'],
  ['Hvad koster en reparation?', 'Standardfejlsøgning koster 300 kr. inkl. moms (3–4 dage), eller ekspres for 600 kr. inkl. moms (1–2 timer). Du får altid en fast pris, før vi går i gang, så der er ingen overraskelser.'],
  ['Hvor lang tid tager en reparation?', 'Ekspres (600 kr. inkl. moms) giver fejlsøgning på 1–2 timer, og reparationen er klar inden for 24 timer. Standard (300 kr. inkl. moms) tager 3–4 dage. Du får altid en forventet tid, før vi går i gang.'],
  ['Tilbyder I service til virksomheder også, ikke kun privatpersoner?', 'Ja — ud over reparation tilbyder vi IT-supportaftaler til fast pris, inklusive ubegrænset support, overvågning og sikkerhed. Se vores side om IT-support til erhverv.'],
  ['Hvor ligger I?', 'Falkoner Allé 108, Frederiksberg. Vi betjener Frederiksberg og København direkte, samt resten af Danmark via fjernsupport til IT-supportaftaler.'],
  ['Sælger I også computere, eller kun reparation?', 'Ja — nye og brugte/istandsatte computere samt backup- og sikkerhedsudstyr findes i vores butik.'],
  ['Kan jeg bare møde op, eller skal jeg bestille tid?', 'Du kan altid møde op uden at bestille tid — kom forbi i åbningstiden, så kigger vi på den.'],
  ['Tilbyder I en måde at følge status på en igangværende reparation uden at ringe?', 'Kontakt os direkte for en statusopdatering — et opkald eller en e-mail fungerer bedst for et lille, personligt værksted som vores.'],
];
function homeBody() {
  // [name, models, href, icon-key, optional linkText]
  const brands = [
    ['Lenovo', 'ThinkPad, IdeaPad, Legion, Yoga', '/lenovo-reparation/', 'laptop'],
    ['Acer', 'Aspire, Swift, Nitro, Predator', '/acer-reparation/', 'laptop'],
    ['HP', 'EliteBook, Pavilion, Spectre, Omen', '/hp-reparation/', 'laptop'],
    ['Dell', 'XPS, Latitude, Inspiron, Precision', '/dell-reparation/', 'laptop'],
    ['Asus', 'ZenBook, Vivobook, ROG, TUF', '/asus-reparation/', 'laptop'],
    ['MSI', 'Katana, GF-serien, Stealth, Prestige', '/msi-reparation/', 'laptop'],
    ['Huawei', 'MateBook D14, D15, X Pro', '/huawei-reparation/', 'laptop'],
    ['MacBook', 'Pro, Air, alle generationer', '/macbook-reparation/', 'laptop'],
    ['Microsoft Surface', 'Pro, Laptop, Book', '/microsoft-surface-reparation/', 'laptop'],
    ['Samsung', 'Galaxy Book-serien', '/samsung-reparation/', 'laptop'],
    ['Mac (stationær)', 'iMac, Mac mini, Mac Studio, Mac Pro', '/mac-stationaer-reparation/', 'monitor'],
    ['Gaming-pc’er & specialbyggede', 'Reparation, service & bygning fra bunden', '/gaming-pc-reparation/', 'monitor'],
    ['Andre mærker & specialbyggede', 'Gigabyte, Chromebook, specialbyggede pc’er m.m.', '/andre-maerker-reparation/', 'wrench', 'Se andre mærker'],
    ['Netværksudstyr', 'UniFi, Netgear, TP-Link m.m.', '/netvaerksudstyr/', 'wifi', 'Se netværksudstyr'],
    ['Toshiba / Dynabook', 'Satellite, Portégé, Tecra', '/toshiba-dynabook-reparation/', 'laptop'],
    ['Fujitsu', 'LIFEBOOK — reparation & salg af istandsatte', '/fujitsu-reparation/', 'laptop'],
    ['LG gram', 'Reparation af ultralet bærbar', '/lg-gram-reparation/', 'laptop'],
    ['Razer Blade', 'Reparation af gaming-bærbar', '/razer-blade-reparation/', 'laptop'],
  ];
  const cards = brands.map(([n, m, h, i, lt]) => `<a class="card card-link brand-card" href="${h}"><div class="card-icon brand-icon">${lucide[i]}</div><h3>${esc(n)}</h3><p class="models">${esc(m)}</p><span class="arrow">${esc(lt ? lt : 'Se ' + n + '-reparation')} →</span></a>`).join('');
  const popular = [
    ['SSD-opgradering', 'Hurtigere opstartstid for en ældre pc eller bærbar.', '/ssd-opgradering/'],
    ['Væskeskade-reparation', 'Alle mærker og modeller — pc eller Mac.', '/vaeskeskade-reparation/'],
    ['Backup & datagendannelse', 'Beskyt dine filer, eller gendan dem efter en fejl.', '/backup-og-datagendannelse/'],
    ['Fjernelse af virus & malware', 'Pc eller Mac, renset og beskyttet.', '/virus-og-malwarefjernelse/'],
  ].map(([t, d, h]) => `<a class="card card-link" href="${h}"><h3>${esc(t)}</h3><p>${esc(d)}</p><span class="arrow">Læs mere →</span></a>`).join('');
  const faqHtml = HOME_FAQ.map(([q, a]) => `<details><summary>${esc(q)}</summary><div class="answer">${esc(a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Frederiksberg &amp; København</div>
    <h1>Alt inden for computer og IT — du har ikke brug for nogen andre.</h1>
    <p class="lead">Fra reparation, rådgivning og IT-support til hosting, domæner, backup og salg af computere — hos PCKlinik får du det hele ét sted. I din computerverden har du ikke brug for nogen andre end os. Ingen at ringe rundt til, ingen flere aftaler at holde styr på — bare ét team, der kender din opsætning fra start til slut.</p>
    <div class="pillars-row">
      <a class="pill-link" href="/computer-reparation/">🔧 Reparation</a>
      <a class="pill-link" href="/butik/">🛒 Køb</a>
      <a class="pill-link" href="/it-raadgivning/">💬 Rådgivning</a>
      <a class="pill-link" href="/it-support-til-erhverv/">🛠️ Support</a>
    </div>
    <div class="badges"><span class="badge check">Fremmøde uden bestilling</span><span class="badge check">Fast pris, før vi går i gang</span></div>
    <div class="cta-row" style="margin-bottom:24px"><a class="btn btn-white" href="${site.phoneHref}">📞 Ring ${site.phone}</a><span class="hero-text-link">🕒 ${site.hours}</span></div>
    <p style="margin-top:0;font-weight:600">Vælg din vej nedenfor:</p>
    <div class="grid grid-2 hero-paths">
      <a class="card card-link" href="/kontakt/"><div class="card-icon">🖥️</div><h2>Til private</h2><p>PC- og Mac-reparation — kom forbi med din enhed til en fejlsøgning, eller ring/skriv, hvis du har et spørgsmål. Fast pris, før vi går i gang.</p><span class="arrow">Kom forbi eller kontakt os →</span></a>
      <a class="card card-link" href="/it-support-til-erhverv/"><div class="card-icon">🏢</div><h2>Til virksomheder</h2><p>IT-supportaftaler til fast pris — ubegrænset support, overvågning og sikkerhed for ét fast månedligt beløb.</p><span class="arrow">Se IT-support til erhverv →</span></a>
    </div>
    <p style="margin-top:18px;color:#C7D3EC;font-size:14.5px">Har I brug for rådgivning frem for en løbende aftale? <a href="/it-raadgivning/" style="color:#A9C1F0">Se IT-rådgivning →</a></p></div></section>
  <section class="section alt trust-bar-section"><div class="wrap"><div class="trust-bar">
    <div class="trust-bar-item"><span class="ti-icon">⭐</span><a href="${site.reviewsUrl}" target="_blank" rel="noopener">${esc(site.reviewRating)}/5 · ${esc(site.reviewCount)} anmeldelser på Google</a></div>
    <div class="trust-bar-item"><span class="ti-icon">♻️</span>Refurbished med garanti — A: 3 år · B: 2 år · C: 1 år</div>
    <div class="trust-bar-item"><span class="ti-icon">🍎</span>Prisgaranti på MacBook-reparationer</div>
    <div class="trust-bar-item"><span class="ti-icon">🔧</span>Apple-reservedele på lager — ofte 30–50 % billigere end et officielt Apple-værksted</div>
    <div class="trust-bar-item"><span class="ti-icon">🔒</span>Sikker bortskaffelse &amp; datasletning af gammelt udstyr</div>
    <div class="trust-bar-item"><span class="ti-icon">👥</span>7 personer i teamet — ikke et callcenter</div>
  </div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Vores løfte</div><h2>Sådan fungerer det</h2><div class="steps">
    <div class="step"><div class="num">1</div><h3>Fejlsøgning</h3><p>300 kr. inkl. moms (3–4 dage), eller ekspres for 600 kr. inkl. moms (1–2 timer).</p></div>
    <div class="step"><div class="num">2</div><h3>Fast pris</h3><p>Du får en klar pris, før vi rører ved noget.</p></div>
    <div class="step"><div class="num">3</div><h3>Reparation</h3><p>Vi udfører reparationen med samme omhu som fejlsøgningen.</p></div></div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Hvad vi reparerer</div><h2>Alle større computermærker — PC og Mac</h2>
    <p class="sub">Vi reparerer alle større computermærker — PC og Mac, bærbar og stationær — for privatpersoner og virksomheder på Frederiksberg og i København. Se vores fulde <a href="/computer-reparation/">computer reparation</a>-oversigt, eller vælg dit mærke nedenfor.</p>
    <div class="grid grid-3">${cards}</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Populære services</div><h2>Ud over mærkereparationer</h2>
    <p class="sub">Ud over mærkespecifikke reparationer klarer vi disse ofte efterspurgte opgaver:</p>
    <div class="grid grid-4">${popular}</div>
    <div style="margin-top:24px"><a class="btn btn-outline" href="/faq/">Se alle services &amp; FAQ →</a></div>
    <p class="sub" style="margin-top:16px">Skaden dækket af din forsikring? <a href="/forsikringsreparation/">Se forsikringsreparation →</a></p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Hvorfor PCKlinik</div><h2>Derfor vælger du PCKlinik</h2><ul class="why-list">
    <li><strong>Rigtig ekspertise</strong>Et erfarent team, ikke et callcenter — du får altid et ærligt svar fra en, der ved, hvad de taler om.</li>
    <li><strong>Fast pris før vi starter</strong>Ingen overraskelser, nogensinde.</li>
    <li><strong>Erfaring på tværs af mærker</strong>Solid erfaring med alle større mærker og modeller, PC og Mac.</li>
    <li><strong>Hurtig ekspedition</strong>Vælger du ekspres, er reparationen klar inden for 24 timer. Standard tager 3–4 dage.</li>
    <li><strong>Vi taler dansk</strong>Naturligvis — men også engelsk, hvis det er nemmere for dig.</li></ul></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Vil du hellere købe?</h2><p>Nye og istandsatte computere samt backup- og sikkerhedsudstyr — alt testet og klar til brug. Usikker på, om det bedre kan betale sig at reparere? <a href="/reparere-eller-koebe-ny-computer/" style="color:#A9C1F0">Se vores guide →</a></p><div class="cta-row"><a class="btn btn-white" href="/butik/">Besøg butikken →</a></div></div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Find os</div><h2>Find os på Frederiksberg</h2>
    <p class="sub">Vi er et rigtigt værksted — ikke bare en hjemmeside. Kig forbi, ring eller skriv, så kigger vi på det.</p>
    <div class="info-block"><div class="nap">
      <p><strong>Adresse</strong><br />${site.address}</p>
      <p><strong>Telefon</strong><br /><a href="${site.phoneHref}">${site.phone}</a></p>
      <p><strong>E-mail</strong><br /><a href="mailto:${site.emailConsumer}">${site.emailConsumer}</a></p>
      <p><strong>Åbningstider</strong><br />Man–fre 10:00–18:00 · Lør 10:00–14:00 · Søn lukket</p>
      <a class="btn btn-primary" href="/kontakt/" style="margin-top:8px">Kom forbi med din enhed</a>
    </div>${mapFrame}</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>`;
}

// ---------- contact ----------
function contactBody() {
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Kom i kontakt</div><h1>Kontakt os</h1>
    <p class="lead">Vi er klar til at hjælpe med din computer. Har du et spørgsmål om en reparation? Ring, skriv, eller kig bare forbi værkstedet på Falkoner Allé — du behøver ikke bestille tid. Skal du bruge IT-rådgivning til din virksomhed, aftaler vi et tidspunkt.</p><div class="badges"><span class="badge check">Fremmøde uden bestilling</span></div></div></section>
  <section class="section"><div class="wrap"><div class="info-block">
    <div class="nap"><div class="eyebrow">Kontaktoplysninger</div>
      <p><strong>Telefon</strong><br /><a href="${site.phoneHref}">${site.phone}</a></p>
      <p><strong>E-mail</strong><br /><a href="mailto:${site.emailConsumer}">${site.emailConsumer}</a></p>
      <p><strong>Adresse</strong><br />${site.address}</p>
      <p><strong>Åbningstider</strong><br />Man–fre 10:00–18:00 · Lør 10:00–14:00 · Søn lukket</p></div>
    <div class="form-card">
      ${formOpen(site.emailConsumer, 'Ny henvendelse via kontaktformular — pcklinik.dk', '/tak/')}
        <div class="form-row"><div><label for="name">Navn</label><input id="name" name="name" type="text" autocomplete="name" required /></div></div>
        <div class="form-row"><div><label for="contact">Telefon eller e-mail</label><input id="contact" name="contact" type="text" autocomplete="email" required /></div></div>
        <div class="form-row"><div><label for="model">Mærke / model <span style="font-weight:400;color:var(--muted)">(valgfrit — hjælper os med at forberede)</span></label><input id="model" name="model" type="text" placeholder="fx Lenovo ThinkPad T14" /></div></div>
        <div class="form-row"><div><label for="message">Besked / beskrivelse af problemet</label><textarea id="message" name="message" required></textarea></div></div>
        <button class="btn btn-primary" type="submit">Send besked</button>
      </form></div></div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Godt at vide</div><h2>Ofte stillede spørgsmål</h2><div class="faq"><details><summary>Skal jeg bestille tid?</summary><div class="answer">Nej — du kan møde op uden bestilling. Du er velkommen til at kigge forbi i åbningstiden.</div></details><details><summary>Kan jeg bede om et bestemt tidspunkt?</summary><div class="answer">Da vi er et lille, personligt værksted, så ring gerne i forvejen, så finder vi en løsning, hvor det er muligt.</div></details><details><summary>Er værkstedet kørestolsvenligt?</summary><div class="answer">Kontakt os direkte, hvis du har særlige behov for tilgængelighed, så sørger vi for, at dit besøg fungerer.</div></details><details><summary>Hvilke oplysninger skal jeg give jer, for at få et hurtigt tilbud?</summary><div class="answer">Mærke og modelnavn er en god start, men serienummer (eller modelnummer) gør det muligt for os at give et hurtigere og mere præcist overslag, allerede før du kommer forbi. På en bærbar står det ofte på undersiden eller inde under batteriet; på en stationær pc typisk på et mærkat bagpå eller i siden. Har du ikke mulighed for at finde det, er det heller ikke noget problem — så ser vi nærmere på det, når du kontakter os eller kommer forbi.</div></details></div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Find os</div><h2>Falkoner Allé 108, Frederiksberg</h2>${mapFrame}</div></section>`;
}

// ---------- business IT ----------
const BUSINESS_HUB_SPOKES = [
  ['💬', 'IT-rådgivning (GDPR & NIS2)', 'Ærlig rådgivning om sikkerhed, backup og compliance. Første konsultation er gratis.', '/it-raadgivning/'],
  ['🖥️', 'Fjernsupport', 'Softwareproblemer løst på afstand — en fast del af enhver supportaftale.', '/fjernsupport/'],
  ['📍', 'IT-support på Frederiksberg', 'Lokal IT-support fra værkstedet på Falkoner Allé 108.', '/it-support-frederiksberg/'],
  ['🏙️', 'IT-support i København', 'Fjernsupport eller on-site tekniker i hele byen.', '/it-support-koebenhavn/'],
  ['💾', 'Automatisk Backup', 'Løbende, automatisk sikkerhedskopiering af computere og servere.', '/automatisk-backup/'],
  ['🌐', 'Hosting', 'Driftssikker webhosting med daglig backup og gratis SSL.', '/hosting/'],
  ['🔗', 'Domæner', 'Søg og køb .dk- og .com-domæner direkte online.', '/domaener/'],
  ['📧', 'Microsoft 365 til virksomheder', 'Opsætning, migrering og løbende administration af M365.', '/microsoft-365-erhverv/'],
  ['🛡️', 'Forsikringsreparation', 'Reparation dækket af jeres erhvervsforsikring.', '/forsikringsreparation/'],
];
function businessHubSpokesHtml() {
  return BUSINESS_HUB_SPOKES.map(([i, t, d, h]) => `<a class="card card-link" href="${h}"><div class="card-icon">${i}</div><h3>${esc(t)}</h3><p>${esc(d)}</p><span class="arrow">Læs mere →</span></a>`).join('');
}
function businessBody() {
  const features = [
    ['🛠️', 'Ubegrænset IT-support', 'Hjælp til jeres medarbejdere via telefon, e-mail og fjernsupport — og on-site i København, når det er nødvendigt. Fast pris, ingen timeafregning.'],
    ['📡', 'Overvågning & drift', 'Vi holder øje med jeres computere og servere døgnet rundt og fanger problemer, før de bliver til nedbrud.'],
    ['💾', 'Backup & gendannelse', 'Rigtig backup af jeres data og Microsoft 365 — ikke bare cloud-lagring. Sker der noget med en maskine, gendanner vi det hele på en ny.'],
    ['🛡️', 'IT-sikkerhed', 'Professionel endpoint-beskyttelse og antivirus — beskyttelse mod virus, ransomware, phishing og mailtrusler, plus løbende overvågning.'],
    ['📧', 'Microsoft 365', 'Opsætning og administration af Microsoft 365, Teams, SharePoint og e-mail — nye medarbejdere kommer hurtigt og sikkert i gang.'],
    ['📋', 'Rådgivning & NIS2', 'Praktisk IT-rådgivning, så I træffer de rette valg — og er klar til krav som GDPR og NIS2.'],
    ['🖥️', 'Nyt IT-udstyr', 'Vi sælger og opsætter nye computere, Mac, skærme og andet udstyr — klar til brug fra dag ét.'],
    ['♻️', 'Istandsat udstyr', 'Professionelt istandsatte computere og enheder — 1 til 3 års garanti afhængigt af kvalitetsgrad (A/B/C). Billigere og grønnere.'],
    ['🔒', 'Sikker bortskaffelse', 'Vi tager jeres gamle udstyr retur, sletter alle data sikkert og bortskaffer det ansvarligt — fuldt GDPR-compliant.'],
  ];
  const tiers = [
    ['Starter', 'Ubegrænset fjernsupport og proaktiv vedligeholdelse til mindre virksomheder.', '399', false,
      [['yes', 'Ubegrænset fjernsupport (telefon & e-mail)'], ['yes', 'Svar inden for 1 arbejdsdag'], ['yes', 'Patch management & opdateringer'], ['yes', 'RMM-enhedsovervågning'], ['yes', 'Månedlig statusrapport'], ['no', 'Antivirus & endpoint-beskyttelse'], ['no', 'Backup-overvågning']]],
    ['Premium', 'Alt, jeres virksomhed har brug for: ubegrænset support og komplet IT-sikkerhed.', '599', true,
      [['yes', 'Alt i Starter'], ['yes', 'Svar inden for 4 timer'], ['yes', 'Antivirus & endpoint-beskyttelse'], ['yes', '24/7-overvågning'], ['yes', 'Backup-overvågning'], ['yes', 'Microsoft 365-administration'], ['yes', 'MFA & adgangsstyring']]],
    ['Exclusive', 'Komplet IT-support, sikkerhed og Microsoft 365-licens — alt i én pakke.', '899', false,
      [['yes', 'Alt i Premium'], ['yes', 'Svar inden for 1 time'], ['yes', 'Microsoft 365-licens inkluderet'], ['yes', 'Outlook, Teams & OneDrive'], ['yes', 'Exchange Online (virksomhedsmail)'], ['yes', 'Opsætning & migrering inkluderet'], ['yes', 'Løbende licensadministration'], ['yes', 'GDPR-klar cloud-løsning']]],
  ];
  const faq = FAQ_BUSINESS;
  const feat = features.map(([i, t, b]) => `<div class="card"><div class="card-icon">${i}</div><h3>${esc(t)}</h3><p>${esc(b)}</p></div>`).join('');
  const price = tiers.map(([name, blurb, p, feat2, items]) => {
    const li = items.map(([k, l]) => `<li class="${k}">${esc(l)}</li>`).join('');
    const signup = `mailto:${site.emailBusiness}?subject=${encodeURIComponent('Tilmelding: ' + name + '-pakke')}`;
    return `<div class="price-card${feat2 ? ' featured' : ''}">${feat2 ? '<span class="ribbon">⭐ Anbefalet</span>' : ''}<div class="tag">${esc(name)}</div><h3>${esc(name)}</h3><p class="blurb">${esc(blurb)}</p><div class="price">${p} kr. <small>/ bruger / måned</small></div><div class="vat">ekskl. moms</div><ul>${li}</ul><a class="btn ${feat2 ? 'btn-primary' : 'btn-outline'}" href="${signup}">Vælg ${esc(name)}</a><div class="fine">Ingen binding • Start i dag</div></div>`;
  }).join('');
  const faqHtml = faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><div class="answer">${esc(a)}</div></details>`).join('');
  const reviewMail = `mailto:${site.emailBusiness}?subject=Gratis%20IT-gennemgang`;
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Erhverv · IT-supportaftale</div>
    <h1>IT-supportaftale til erhverv — din IT-afdeling på abonnement</h1>
    <p class="lead">IT-support til fast pris for virksomheder i København og på Frederiksberg. Ubegrænset support, proaktiv overvågning og IT-sikkerhed for én forudsigelig månedlig pris. Vi ligger på Falkoner Allé på Frederiksberg, kører ud i hele København og hjælper resten af landet via fjernsupport.</p>
    <div class="badges"><span class="badge check">Faste pakker fra 399 kr./bruger/md.</span><span class="badge check">Ubegrænset support — ingen timepriser</span><span class="badge check">Svar fra 1 time</span><span class="badge check">Lokal IT-partner på Frederiksberg</span></div>
    <p class="sub" style="margin-top:14px;color:#C7D3EC">20+ års erfaring · 7-personers team · eget værksted · ⭐ ${esc(site.reviewRating)}/5 fra ${esc(site.reviewCount)} anmeldelser</p>
    <div class="cta-row"><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a><a class="btn btn-white" href="#enquiry">Book en gratis IT-gennemgang</a><a class="hero-text-link" href="#pricing">Se priser →</a></div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Hvad er en IT-supportaftale?</div><h2>Én fast aftale — og jeres IT kører bare</h2>
    <p class="sub">En IT-supportaftale til erhverv betyder, at PCKlinik passer på jeres IT, så I kan fokusere på jeres forretning. I får en dedikeret IT-ansvarlig, der kender jeres opsætning, holder øje med jeres systemer og træder til, når noget går galt — uden uventede regninger. I stedet for at ringe rundt efter hjælp har I én partner, der holder styr på det hele.</p>
    <div class="grid grid-3">${feat}</div></div></section>
  <section class="section"><div class="wrap lead-copy"><h2>IT-serviceaftale, IT-supportaftale eller IT-abonnement — det er det samme hos os</h2>
    <p>Uanset om I søger efter en IT-serviceaftale, en IT-supportaftale eller et IT-support-abonnement, er det den samme løsning: én fast månedlig pris pr. bruger for ubegrænset support, overvågning og sikkerhed — uden timepriser og uden binding ud over selve betalingsperioden. Se pakker og priser nedenfor.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Erhvervsydelser</div><h2>Alt inden for erhvervs-IT — ét team, én aftale</h2>
    <p class="sub">De fleste erhvervskunder bruger mere end én af disse — det er netop pointen med "al din IT under ét tag".</p>
    <div class="grid grid-3">${businessHubSpokesHtml()}</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Hvorfor PCKlinik</div><h2>En rigtig lokal IT-partner — ikke et callcenter</h2><ul class="why-list">
    <li><strong>Forudsigelige IT-omkostninger</strong>Fast månedlig pris, ingen timepriser eller regningsoverraskelser.</li>
    <li><strong>En dedikeret kontaktperson</strong>I får én navngiven IT-ansvarlig, der kender jeres virksomhed, bakket op af et helt team, når der skal flere hænder til.</li>
    <li><strong>Hurtig hjælp</strong>Garanteret svartid fra 1 arbejdsdag ned til 1 time, afhængigt af jeres pakke. Vi holder bevidst den sidste time inden lukketid fri, så sene henvendelser stadig får svar samme dag.</li>
    <li><strong>Lokalt og landsdækkende</strong>On-site i København og omegn, fjernsupport i hele landet.</li></ul></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Sådan kommer I i gang</div><h2>Tre enkle trin</h2><div class="steps">
    <div class="step"><div class="num">1</div><h3>Gratis IT-gennemgang</h3><p>Vi kortlægger jeres nuværende IT-opsætning, finder sikkerhedshuller og besparelsesmuligheder — helt uforpligtende.</p></div>
    <div class="step"><div class="num">2</div><h3>En klar plan</h3><p>I får en konkret anbefaling og en supportaftale, der passer til jeres størrelse og behov. I sætter tempoet.</p></div>
    <div class="step"><div class="num">3</div><h3>Vi driver jeres IT</h3><p>Vi opsætter det og vedligeholder det fremover — support, overvågning og sikkerhed inkluderet.</p></div></div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Typiske kunder</div><h2>Virksomheder, vi kender godt</h2>
    <p class="sub">Tre eksempler på virksomhedstyper, vi ofte hjælper — hver med sine egne krav til IT.</p>
    <div class="grid grid-3">
      <a class="card card-link" href="/it-support-advokatkontor/"><h3>Et advokatkontor på Frederiksberg</h3><p>Klientfortrolighed, adgangsstyring når en fuldmægtig stopper, og backup der virker under en frist.</p><span class="arrow">Se IT-support til advokatkontorer →</span></a>
      <a class="card card-link" href="/it-support-klinik/"><h3>En klinik med patientkontakt hele dagen</h3><p>Opdateringer planlagt uden for behandlingstiden, patientdata i strengeste GDPR-kategori, adskilt gæste-WiFi.</p><span class="arrow">Se IT-support til klinikker →</span></a>
      <a class="card card-link" href="/it-support-mindre-virksomheder-frederiksberg/"><h3>En mindre virksomhed uden egen IT-afdeling</h3><p>Én fast kontakt i stedet for flere leverandører at ringe rundt til.</p><span class="arrow">Se IT-support til mindre virksomheder →</span></a>
    </div></div></section>
  <section class="section" id="pricing"><div class="wrap"><div class="eyebrow">Priser & pakker</div><h2>Gennemsigtige priser — ingen overraskelser</h2>
    <p class="sub">Vælg den pakke, der passer til jeres virksomhed. Fast pris pr. bruger, ekskl. moms — ingen binding.</p>
    <div class="pricing-grid">${price}</div>
    <p class="center" style="margin-top:28px;color:var(--muted)">Er I i tvivl om, hvad I har brug for? <a href="${site.phoneHref}">Ring ${site.phone}</a> for en uforpligtende IT-gennemgang.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Klippekort</div><h2>Ikke klar til en fast aftale?</h2>
    <p class="sub">Nogle virksomheder har brug for hjælp nu og da, men ikke en løbende aftale. Derfor tilbyder vi også klippekort — timer, I køber på forhånd og trækker på, når I har brug for os. Til support, opsætning, netværk eller et konkret projekt.</p>
    <div class="badges"><span class="badge check">5 timer — 1.000 kr./time</span><span class="badge check">10 timer — 950 kr./time</span><span class="badge check">20 timer — 900 kr./time</span></div>
    <p class="sub" style="margin-top:16px">Priserne er ekskl. moms. I får den samme tekniker og den samme kvalitet som i vores abonnementer. Til gengæld er der ikke ubegrænset support, overvågning eller garanteret svartid — det hører til abonnementerne ovenfor.</p>
    <p class="sub">Bruger I os jævnligt, er et abonnement næsten altid billigere. Det siger vi ærligt, også selvom klippekortet giver os pengene op front. Ring på <a href="${site.phoneHref}">${site.phone}</a>, så regner vi på det sammen.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Find os på Frederiksberg</div><h2>En fysisk IT-butik og værksted — ikke bare en hjemmeside</h2>
    <p class="sub">Kig forbi, ring eller skriv, så finder vi den rette aftale til jer.</p>
    <div class="info-block"><div class="nap"><p><strong>Adresse</strong><br />${site.address}</p><p><strong>Telefon</strong><br /><a href="${site.phoneHref}">${site.phone}</a></p><p><strong>E-mail</strong><br /><a href="mailto:${site.emailBusiness}">${site.emailBusiness}</a></p></div>${mapFrame}</div></div></section>
  <section class="section alt" id="enquiry"><div class="wrap"><div class="eyebrow">Kom i kontakt</div><h2>Book en gratis IT-gennemgang</h2>
    <p class="sub">Fortæl os lidt om jeres virksomhed, så vender vi tilbage — uforpligtende.</p>
    <div class="form-card" style="max-width:640px">
      ${formOpen(site.emailBusiness, 'Ny henvendelse om IT-support til erhverv — pcklinik.dk', '/tak/')}
        <div class="form-row"><div><label for="biz-name">Navn</label><input id="biz-name" name="name" type="text" autocomplete="name" required /></div></div>
        <div class="form-row"><div><label for="biz-company">Virksomhed <span style="font-weight:400;color:var(--muted)">(valgfrit)</span></label><input id="biz-company" name="company" type="text" autocomplete="organization" /></div></div>
        <div class="form-row"><div><label for="biz-email">E-mail</label><input id="biz-email" name="email" type="email" autocomplete="email" required /></div></div>
        <div class="form-row"><div><label for="biz-phone">Telefon <span style="font-weight:400;color:var(--muted)">(valgfrit)</span></label><input id="biz-phone" name="phone" type="tel" autocomplete="tel" /></div></div>
        <div class="form-row"><div><label for="biz-users">Antal brugere <span style="font-weight:400;color:var(--muted)">(valgfrit)</span></label><input id="biz-users" name="users" type="text" placeholder="fx 8" /></div></div>
        <div class="form-row"><div><label for="biz-message">Hvad har I brug for hjælp til?</label><textarea id="biz-message" name="message" required></textarea></div></div>
        <button class="btn btn-primary" type="submit">Anmod om en gratis IT-gennemgang</button>
      </form>
    </div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>IT-support til erhverv — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/it-raadgivning/">IT-rådgivning →</a><a href="/microsoft-365-erhverv/">Microsoft 365 til virksomheder →</a><a href="/it-support-frederiksberg/">IT-support på Frederiksberg →</a><a href="/it-support-koebenhavn/">IT-support i København →</a><a href="/fjernsupport/">Fjernsupport →</a><a href="/hosting/">Hosting →</a><a href="/domaener/">Domæner →</a><a href="/windows-10-erhverv-migrering/">Windows 10-migrering for virksomheder →</a><a href="/it-support-advokatkontor/">IT-support til advokatkontorer →</a><a href="/it-support-klinik/">IT-support til klinikker →</a><a href="/it-support-mindre-virksomheder-frederiksberg/">IT-support til mindre virksomheder →</a><a href="/automatisk-backup/">Automatisk Backup →</a><a href="/forsikringsreparation/">Forsikringsreparation →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></section>`;
}
function businessSchemaFaq() {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_BUSINESS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
}
const FAQ_BUSINESS = [
  ['Kan ambassader eller diplomatiske repræsentationer bede om momsfri fakturering?', 'Kontakt os direkte for at drøfte jeres konkrete administrative krav og faktureringskrav — vi arbejder gerne inden for jeres organisations indkøbsproces.'],
  ['Tilbyder I onboarding af mange medarbejdere på én gang?', 'Ja — masseopsætning (flere nye medarbejdere eller migrering af et helt teams udstyr) er noget, vi håndterer som en del af en supportaftale.'],
  ['Kan I arbejde med vores eksisterende IT-dokumentation eller asset-inventory-system?', 'Ja — kontakt os om jeres konkrete systemer, så tilpasser vi os til at passe ind i jeres eksisterende processer frem for at kræve, at I ændrer dem.'],
  ['Hvad koster en IT-supportaftale?', 'Vi har tre pakker: Starter fra 399 kr., Premium 599 kr. og Exclusive 899 kr. pr. bruger pr. måned (ekskl. moms). I betaler en fast månedlig pris, så I altid kender omkostningen på forhånd. Usikker på, hvilken pakke der passer? Book en gennemgang.'],
  ['Er det samme som en IT-serviceaftale eller et IT-support-abonnement?', 'Ja — "IT-supportaftale", "IT-serviceaftale" og "IT-support-abonnement" dækker det samme hos os: én fast månedlig pris for ubegrænset support, overvågning og sikkerhed, uden timepriser.'],
  ['Er der nogen skjulte gebyrer?', 'Nej — aldrig. I betaler én fast månedlig pris pr. bruger, og det er det. Ingen opstartsgebyr, ingen timepris for supporthenvendelser og ingen overraskelser på fakturaen.'],
  ['Hvad er jeres svartid?', 'Det afhænger af jeres pakke: Starter garanterer svar inden for 1 arbejdsdag, Premium inden for 4 timer, og Exclusive inden for 1 time. Svartiderne gælder inden for supporttiden man–fre 10:00–17:00. Den sidste time inden lukketid holder vi bevidst fri, så vi kan nå de henvendelser, der kommer sent på dagen — ringer I kl. 17:00, får I stadig svar samme dag. Værkstedet på Falkoner Allé har åbent til 18:00.'],
  ['Kan I opsige jeres abonnement når som helst?', 'Ja. Der er ingen bindingsperiode. Opsiger I et månedligt abonnement, løber det til udgangen af den måned, I opsiger i — der er ingen efterfølgende opsigelsesperiode. Årlige abonnementer løber til periodens udløb.'],
  ['Tilbyder I hjælp uden et fast abonnement?', 'Ja — klippekort på 5, 10 eller 20 timer, som I trækker på efter behov. Bruger I os jævnligt, er et abonnement som regel billigere; det siger vi ærligt.'],
  ['Hvad er forskellen på klippekort og abonnement?', 'Klippekortet er timer, I køber på forhånd og bruger, når I har brug for os. Abonnementet er en fast månedlig pris med ubegrænset support, overvågning, sikkerhed og garanteret svartid. Klippekort passer til enkeltopgaver, abonnement til løbende drift.'],
  ['Udløber timerne?', 'Nej. Jeres timer udløber ikke. Bruger I dem inden for 12 måneder, gælder den pris, I købte til. Går der mere end et år, omregnes den resterende værdi til dagens timepris — I mister ikke værdien, men et klippekort købt for flere år siden dækker naturligvis lidt færre timer i dag.'],
  ['Hvad koster en time uden abonnement?', '1.000 kr. ekskl. moms. Køber I et klippekort, falder timeprisen til 950 kr. (10 timer) eller 900 kr. (20 timer).'],
  ['Hvad dækker "ubegrænset support"?', 'Alt vedrørende jeres daglige IT: computer- og softwareproblemer, netværksproblemer, printere, e-mail, Microsoft 365, virus og sikkerhed. Dækker ikke hardwareudskiftning eller kundespecifik udvikling — det aftaler vi særskilt.'],
  ['Fungerer det for virksomheder af enhver størrelse?', 'Ja. Vi hjælper enkeltmandsvirksomheder, kontorer med 2–3 medarbejdere og virksomheder med 50+ brugere. Prisen er pr. bruger, så I betaler præcis for det, I har brug for.'],
  ['Skal I installere noget?', 'Vi installerer et lille fjernadgangsværktøj (TeamViewer eller lignende), så vi hurtigt kan hjælpe jer, uden at I behøver komme til os. Opsætningen tager typisk under 15 minutter, og vi klarer den for jer.'],
  ['Hjælper I med printere og netværksprintere?', 'Ja. Vi opsætter, konfigurerer og fejlfinder alle typer printere — lokale, netværks- og cloud-printere. Vi hjælper også med driveropdateringer og integration med jeres eksisterende netværk.'],
  ['Tilbyder I backupløsninger?', 'Ja. Vi opsætter automatisk backup — både lokalt og i skyen — så jeres data altid er beskyttet. Vi tester backuppen regelmæssigt og hjælper med gendannelse, hvis noget går galt.'],
  ['Hvad med antivirussoftware og IT-sikkerhed?', 'Vi installerer og administrerer antivirus og endpoint-sikkerhed på alle jeres enheder. Premium-pakken inkluderer løbende sikkerhedsovervågning, så I er beskyttet mod virus, ransomware og phishing.'],
  ['Kan I hjælpe med vores netværk og WiFi?', 'Ja. Vi opsætter og optimerer netværk, routere og WiFi — inklusive gæstenetværk, firewalls og VPN. Langsomt internet eller dårlig dækning? Vi finder løsningen.'],
  ['Sælger I computere og udstyr?', 'Ja. Vi sælger både nyt og brugt/istandsat udstyr — computere, bærbare, skærme, printere til erhverv og tilbehør. Istandsat udstyr er professionelt gennemgået og kommer med garanti. Vi hjælper jer med at finde det rette udstyr til jeres behov og budget og opsætter det klar til brug.'],
  ['Hvad er forskellen på en supportaftale og timeafregning?', 'Med en supportaftale betaler I en fast månedlig pris og får ubegrænset support — uden at tænke på, hvad hvert opkald koster. Med timeafregning betaler I pr. opgave, hvilket gør omkostningerne uforudsigelige og ofte dyrere. En aftale betyder også, at vi arbejder proaktivt, så der opstår færre problemer i første omgang.'],
  ['Kan I overtage fra vores nuværende IT-leverandør?', 'Ja. Vi styrer en glidende overgang, indhenter de nødvendige oplysninger og overtager driften, uden at I oplever nedetid. I behøver ikke selv koordinere det.'],
  ['Hvor hurtigt kan vi komme i gang?', 'Som regel inden for få dage. Vi starter med en gennemgang, opsætter fjernadgang (under 15 minutter) og driver jeres aftale derfra.'],
  ['Hjælper I med NIS2 og GDPR?', 'Ja. Vi rådgiver om både GDPR og det nye NIS2-direktiv og hjælper med backup, adgangsstyring, sikkerhed og dokumentation, så I lever op til kravene.'],
  ['Understøtter I medarbejdere, der arbejder hjemmefra?', 'Ja. Vores support afhænger ikke af, hvor medarbejderne befinder sig. Vi hjælper via fjernsupport, uanset om de er på kontoret eller hjemme, og sikrer en stabil forbindelse til virksomhedens systemer.'],
  ['Hvad sker der ved et IT-nedbrud?', 'I kontakter os, og vi går i gang med det samme. Med vores overvågning fanger vi ofte problemet, før I selv opdager det. Vores mål er at få jer op at køre igen hurtigst muligt og holde nedetiden på et minimum.'],
  ['Hjælper I virksomheder i hele landet?', 'Ja. Fjernsupport dækker hele Danmark. Vi tilbyder on-site service i København og på Frederiksberg, hvor vi holder til.'],
];

// ---------- hosting ----------
// NOTE: "Bestil nu" buttons below link to HostShop product pages. HostShop
// setup (My20i package types, HostShop products, opening the shop) hasn't
// been completed yet — see hostshop-checkout-setup.md — so these are
// placeholders for now. Swap HOSTING_TIERS[].href with the real per-product
// HostShop "Product Link" URLs once Steps 5-7 of that setup are done.
const HOSTING_TIERS = [
  ['Basic', '45', false, '10 GB lagerplads', ['10 GB lagerplads', 'Ubegrænset trafik', '15 mailbokse', 'Gratis SSL-certifikat', 'Daglig backup'], '#hostshop-basic-tbd'],
  ['Business', '89', true, '50 GB lagerplads', ['50 GB lagerplads', 'Ubegrænset trafik', '60 mailbokse', 'Gratis SSL-certifikat', 'Daglig backup', 'Prioriteret support'], '#hostshop-business-tbd'],
  ['Business+', '169', false, '100 GB lagerplads', ['100 GB lagerplads', 'Ubegrænset trafik', '120 mailbokse', 'Gratis SSL-certifikat', 'Daglig backup', 'Prioriteret support', 'Til virksomheder med flere sites'], '#hostshop-businessplus-tbd'],
];
const HOSTING_FAQ = [
  ['Hvad er inkluderet i hosting-pakkerne?', 'Alle pakker inkluderer lagerplads, ubegrænset trafik, mailbokse, et gratis SSL-certifikat og daglig backup. Business og Business+ tilføjer flere mailbokse og prioriteret support — se sammenligningen ovenfor for detaljer pr. pakke.'],
  ['Kan I flytte min hjemmeside fra min nuværende udbyder?', 'Ja, kontakt os, så håndterer vi flytningen af din hjemmeside og dine mailbokse, så du undgår nedetid eller mistede e-mails undervejs.'],
  ['Er priserne inkl. eller ekskl. moms?', 'Priserne, du ser på siden, er ekskl. moms — 25% dansk moms lægges oveni ved bestilling.'],
  ['Er der binding på abonnementet?', 'Nej, alle hosting-pakker er månedlige uden binding.'],
  ['Hvad er forskellen på hosting og jeres webdesign-/SEO-ydelser?', 'Hosting er selve serverpladsen, der får din hjemmeside til at være tilgængelig online. Webdesign, SEO og Google Ads er separate ydelser — vi bygger og optimerer selve hjemmesiden. Mange kunder bruger begge dele, men de kan også vælges hver for sig.'],
  ['Hvilken pakke skal jeg vælge?', 'Basic passer til de fleste mindre hjemmesider og enkeltmandsvirksomheder. Business og Business+ passer til virksomheder med flere medarbejdere, mere e-mail-behov eller flere hjemmesider. Er du i tvivl, så kontakt os — vi rådgiver gerne.'],
];
function hostingBody() {
  const cards = HOSTING_TIERS.map(([name, price, featured, headline, features, href]) => {
    const li = features.map((f) => `<li class="yes">${esc(f)}</li>`).join('');
    return `<div class="price-card${featured ? ' featured' : ''}">${featured ? '<span class="ribbon">⭐ Anbefalet</span>' : ''}<div class="tag">${esc(name)}</div><h3>${esc(name)}</h3><p class="blurb">${esc(headline)}</p><div class="price">${price} kr. <small>/ måned</small></div><div class="vat">ekskl. moms</div><ul>${li}</ul><a class="btn ${featured ? 'btn-primary' : 'btn-outline'}" href="${href}">Bestil nu</a><div class="fine">Ingen binding</div></div>`;
  }).join('');
  const faqHtml = HOSTING_FAQ.map(([q, a]) => `<details><summary>${esc(q)}</summary><div class="answer">${esc(a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Hosting</div><h1>Webhosting til din hjemmeside</h1>
    <p class="lead">Hurtig, driftssikker webhosting med daglig backup og gratis SSL — fra det samme team, der reparerer din computer og bygger din hjemmeside.</p>
    <div class="badges"><span class="badge check">Fra 45 kr./md.</span><span class="badge check">Ingen binding</span><span class="badge check">Dansk support</span></div>
    <div class="cta-row"><a class="btn btn-white" href="#pricing">Se priser</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap"><div class="crumbs"><a href="/">Forside</a> › <span>Hosting</span></div>
    <p class="sub">Skal din hjemmeside køre stabilt, hurtigt og sikkert? Vores hosting-pakker inkluderer lagerplads, mailbokse, gratis SSL-certifikat og daglig backup — så du kan fokusere på din forretning i stedet for serverdrift. Passer godt sammen med vores <a href="/hjemmesider-seo-google-ads/">webdesign- og SEO-ydelser</a>, men kan også vælges alene.</p></div></section>
  <section class="section alt" id="pricing"><div class="wrap"><div class="eyebrow">Priser & pakker</div><h2>Gennemsigtige priser — ingen overraskelser</h2>
    <p class="sub">Vælg den pakke, der passer til din hjemmeside. Fast pris pr. måned, ekskl. moms — ingen binding.</p>
    <div class="pricing-grid">${cards}</div>
    <p class="center" style="margin-top:28px;color:var(--muted)">Er du i tvivl om, hvilken pakke der passer? <a href="${site.phoneHref}">Ring ${site.phone}</a> eller <a href="/kontakt/">kontakt os</a>.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Hosting — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/domaener/">Domæner →</a><a href="/hjemmesider-seo-google-ads/">Hjemmesider & SEO →</a><a href="/it-support-til-erhverv/">IT-support til erhverv →</a><a href="/automatisk-backup/">Automatisk Backup →</a><a href="/kontakt/">Kontakt →</a></div></div></section>`;
}
function hostingSchemaFaq() {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: HOSTING_FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
}

// ---------- automatisk backup ----------
// NOTE ON NAMING: deliberately distinct from "Backup & datagendannelse"
// (/backup-og-datagendannelse/, a one-time data-recovery service under
// Services). This page is a recurring backup SUBSCRIPTION.
const AUTOMATISK_BACKUP_TIERS = [
  ['256 GB', '199', 'Til den enkelte computer med almindelig brug.'],
  ['512 GB', '289', 'Til flere enheder eller større datamængder.'],
  ['1 TB', '349', 'Til virksomheder eller store fotobiblioteker/arkiver.'],
  ['2 TB', '599', 'Til servere eller flere brugere med store datamængder.'],
];
const AUTOMATISK_BACKUP_FAQ = [
  ['Hvor ofte tages der backup?', 'Automatisk, løbende — typisk dagligt, afhængig af dine behov og den aftalte plan.'],
  ['Hvor opbevares mine data?', 'Sikkert og krypteret hos en anerkendt cloud-udbyder. Kontakt os for specifikke detaljer om datacenter-placering.'],
  ['Kan jeg få gendannet en enkelt fil, eller kun det hele?', 'Begge dele — du kan få gendannet enkelte filer eller en fuld gendannelse, alt efter behov.'],
  ['Er der binding?', 'Nej, alle planer er uden binding.'],
  ['Hvad er forskellen på dette og "Backup & datagendannelse"?', '"Backup & datagendannelse" er en engangsservice — vi tager en backup eller gendanner data i forbindelse med en reparation. Automatisk Backup er et løbende abonnement, der kører i baggrunden hver dag, så du altid har en frisk kopi af dine data.'],
];
function automatiskBackupBody() {
  const cards = AUTOMATISK_BACKUP_TIERS.map(([name, price, blurb]) => {
    const mailto = `mailto:${site.emailBusiness}?subject=${encodeURIComponent('Interesse: Automatisk Backup – ' + name)}`;
    return `<div class="price-card"><div class="tag">${esc(name)}</div><h3>${esc(name)}</h3><p class="blurb">${esc(blurb)}</p><div class="price">${price} kr. <small>/ måned</small></div><div class="vat">ekskl. moms</div><a class="btn btn-outline" href="${mailto}">Kontakt os for at komme i gang</a><div class="fine">Ingen binding</div></div>`;
  }).join('');
  const why = [
    ['Sker automatisk, i baggrunden', 'Ingen manuel kopiering, ingen glemte USB-drev.'],
    ['Krypteret opbevaring', 'Dine data er beskyttet, både under overførsel og i opbevaring.'],
    ['Nem gendannelse', 'Mistet en fil, eller hele computeren? Vi henter det tilbage.'],
    ['Dansk support', 'Samme team som kender din opsætning i forvejen.'],
  ].map(([t, b]) => `<li><strong>${esc(t)}</strong>${esc(b)}</li>`).join('');
  const faqHtml = AUTOMATISK_BACKUP_FAQ.map(([q, a]) => `<details><summary>${esc(q)}</summary><div class="answer">${esc(a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Automatisk Backup</div><h1>Automatisk Backup fra PCKlinik</h1>
    <p class="lead">Løbende, automatisk sikkerhedskopiering af dine computere og servere — så en computerfejl aldrig bliver en katastrofe. Fra det samme team, der reparerer dine computere.</p>
    <div class="badges"><span class="badge check">Fra 199 kr./md.</span><span class="badge check">Ingen binding</span><span class="badge check">Krypteret opbevaring</span></div>
    <div class="cta-row"><a class="btn btn-white" href="#pricing">Se priser</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap"><div class="crumbs"><a href="/">Forside</a> › <span>Automatisk Backup</span></div>
    <div class="eyebrow">Hvorfor automatisk backup</div><ul class="why-list">${why}</ul></div></section>
  <section class="section alt" id="pricing"><div class="wrap"><div class="eyebrow">Priser</div><h2>Vælg den plan, der passer til dig</h2>
    <p class="sub">Ekskl. moms, ingen bindingsperiode.</p>
    <div class="pricing-grid">${cards}</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Sådan kommer du i gang</div><h2>Kontakt os for at komme i gang</h2>
    <p class="sub">Skriv til os eller ring, så sætter vi din automatiske backup op — vi rådgiver gerne om, hvilken plan der passer til dine behov.</p>
    <div class="cta-row"><a class="btn btn-primary" href="mailto:${site.emailBusiness}?subject=${encodeURIComponent('Interesse: Automatisk Backup')}">Kontakt os for at komme i gang</a><a class="btn btn-outline" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Automatisk Backup — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section"><div class="wrap"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/it-support-til-erhverv/">IT-support til erhverv →</a><a href="/it-raadgivning/">IT-rådgivning →</a><a href="/backup-og-datagendannelse/">Backup & datagendannelse →</a><a href="/kontakt/">Kontakt →</a></div></div></section>`;
}
function automatiskBackupSchemaFaq() {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: AUTOMATISK_BACKUP_FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
}

// ---------- shop ----------
function productCard({ img, alt, title, desc, price, stripe = '#stripe-link-placeholder' }) {
  return `<div class="card product-card"><img class="img-placeholder" src="${img}" alt="${esc(alt)}" loading="lazy" width="480" height="360" /><h3>${esc(title)}</h3><p class="desc">${esc(desc)}</p><div class="price-tag">${esc(price)}</div><a class="btn btn-primary" href="${stripe}">Køb nu →</a></div>`;
}
function shopFaq(heading, items) {
  const d = items.map(([q, a]) => `<details><summary>${esc(q)}</summary><div class="answer">${esc(a)}</div></details>`).join('');
  return `\n  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>${esc(heading)}</h2><div class="faq">${d}</div></div></section>`;
}
function shopHub() {
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Butik</div><h1>Butik</h1><p class="lead">Computere, backup og sikkerhed — håndplukket og testet af os.</p></div></section>
  <section class="section"><div class="wrap"><div class="trust-line" style="margin-bottom:16px">Alle produkter er personligt udvalgt og testet af os inden salg. Spørgsmål inden du køber? Ring <a href="${site.phoneHref}">${site.phone}</a>. Har du en gammel maskine? Vi køber brugte computere, og du kan bytte den ind mod et nyt eller refurbished køb.</div>
    <div class="trust-line" style="margin-bottom:36px">Refurbished computere får garanti efter kvalitetsgrad: <strong>A-kvalitet 3 år</strong>, <strong>B-kvalitet 2 år</strong>, <strong>C-kvalitet 1 år</strong>. <a href="/butik/computere/refurbished/">Se refurbished computere →</a></div>
    <div class="grid grid-2">
      <a class="card card-link" href="/butik/computere/"><div class="card-icon">🖥️</div><h3>Computere</h3><p>Nye og istandsatte computere — testet og klar til brug.</p><span class="arrow">Se computere →</span></a>
      <a class="card card-link" href="/butik/backup-sikkerhed/"><div class="card-icon">🛡️</div><h3>Backup & sikkerhed</h3><p>Eksterne harddiske, NAS-løsninger og sikkerhedssoftware, vi personligt anbefaler.</p><span class="arrow">Se backup & sikkerhed →</span></a>
    </div>
    <p class="sub" style="margin-top:24px">Usikker på, om det bedre kan betale sig at reparere din nuværende maskine? <a href="/reparere-eller-koebe-ny-computer/">Se vores guide til at vælge →</a></p></div></section>`+shopFaq("Butik — ofte stillede spørgsmål", [["Kan jeg bede om et bestemt produkt, der ikke er på listen lige nu?","Ja, kontakt os, så ser vi, hvad vi kan skaffe."],["Tilbyder I samlede tilbud (fx computer + backupdrev)?","Spørg os direkte — det kan nogle gange arrangeres."],["Kan jeg bytte en gammel enhed ind mod et nyt eller istandsat køb?","Ja. Vi køber brugte maskiner, og du kan bytte din gamle ind mod en ny eller refurbished computer. Er den ikke længere noget værd, tager vi den af hænderne på dig, sletter dine data sikkert og sender den til genbrug."]]);
}
function shopComputers() {
  return `  <section class="hero"><div class="wrap"><div class="eyebrow"><a href="/butik/" style="color:#A9C1F0">Butik</a> · Computere</div><h1>Computere</h1><p class="lead">Vælg mellem nye og istandsatte computere.</p></div></section>
  <section class="section"><div class="wrap"><div class="crumbs"><a href="/butik/">Butik</a> › <span>Computere</span></div>
    <p class="sub">Uanset om du vil have en helt ny maskine eller en velholdt, testet computer til en lavere pris, har vi begge dele. Hver computer klargøres og testes af os, før den sælges.</p>
    <div class="grid grid-2">
      <a class="card card-link" href="/butik/computere/nye/"><div class="card-icon">✨</div><h3>Nye computere</h3><p>Nye computere fra driftssikre mærker, klar med det samme.</p><span class="arrow">Se nye computere →</span></a>
      <a class="card card-link" href="/butik/computere/refurbished/"><div class="card-icon">♻️</div><h3>Refurbished computere</h3><p>Grundigt testede og istandsatte computere — god ydelse til en lavere pris, med garanti.</p><span class="arrow">Se refurbished computere →</span></a>
    </div></div></section>`+shopFaq("Computere — ofte stillede spørgsmål", [["Hvad er bedst for de fleste — nyt eller refurbished?","Afhænger af budget og behov; refurbished giver bedre værdi til almindelig brug, nyt passer til dem, der vil have de nyeste specifikationer og fuld garanti."]]);
}
function shopNew() {
  return `  <section class="hero"><div class="wrap"><div class="eyebrow"><a href="/butik/computere/" style="color:#A9C1F0">Computere</a> · Nye</div><h1>Nye computere</h1><p class="lead">Klar med det samme.</p></div></section>
  <section class="section"><div class="wrap"><div class="crumbs"><a href="/butik/">Butik</a> › <a href="/butik/computere/">Computere</a> › <span>Nye</span></div>
    <p class="sub">Nye computere fra driftssikre mærker. Vi hjælper dig med at finde det rette udstyr til dine behov og dit budget og opsætter det klar til brug.</p>
    <div class="trust-line" style="margin:20px 0 8px">Vores lager af nye computere skifter løbende, så vi holder ikke faste modeller og priser her på siden. Ring <a href="${site.phoneHref}">${site.phone}</a> eller skriv til <a href="mailto:${site.emailConsumer}">${site.emailConsumer}</a>, så fortæller vi, hvad vi har på lager lige nu, og finder den rette maskine til dig.</div>
    <div class="cta-row" style="margin-top:20px"><a class="btn btn-primary" href="${site.phoneHref}">📞 Ring ${site.phone}</a><a class="btn btn-outline" href="mailto:${site.emailConsumer}">Skriv til os</a></div></div></section>`+shopFaq("Nye computere — ofte stillede spørgsmål", [["Kan jeg tilpasse specifikationerne på en ny computer inden køb?","Kontakt os om dine krav — vi kan ofte skaffe konfigurationer ud over det, der er nævnt."]]);
}
function shopRefurb() {
  const warrantyGrades = [
    ['🥇', 'A-kvalitet', '3 års garanti'],
    ['🥈', 'B-kvalitet', '2 års garanti'],
    ['🥉', 'C-kvalitet', '1 års garanti'],
  ].map(([i, t, b]) => `<div class="card"><div class="card-icon">${i}</div><h3>${esc(t)}</h3><p>${esc(b)}</p></div>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow"><a href="/butik/computere/" style="color:#A9C1F0">Computere</a> · Refurbished</div><h1>Refurbished computere</h1><p class="lead">Testet, rengjort og klar til brug — med garanti efter kvalitetsgrad.</p></div></section>
  <section class="section"><div class="wrap"><div class="crumbs"><a href="/butik/">Butik</a> › <a href="/butik/computere/">Computere</a> › <span>Refurbished</span></div>
    <p class="sub">Grundigt testede og istandsatte computere — god ydelse til en lavere pris, med samme servicegaranti som vores reparationer. Testet af de samme teknikere, der reparerer computere i værkstedet.</p>
    <div class="grid grid-3" style="margin:20px 0 8px">${warrantyGrades}</div>
    <div class="trust-line" style="margin:20px 0 8px"><strong>Hvad "refurbished" betyder her:</strong> hver maskine bliver testet, rengjort og forsynet med et nyt batteri, hvis nødvendigt, og derefter mærket med en kvalitetsgrad (A/B/C), der afgør garantiperioden. Det er de samme teknikere, der reparerer og istandsætter, så den holdes til samme standard som vores reparationsarbejde.</div>
    <div class="trust-line" style="margin:20px 0 8px">Har du en gammel maskine? Vi køber brugte computere, og du kan bytte din gamle ind mod en refurbished eller ny maskine — spørg, når du kontakter os.</div>
    <div class="trust-line" style="margin:20px 0 8px">Vores lager af refurbished computere skifter løbende, så vi holder ikke faste modeller og priser her på siden. Ring <a href="${site.phoneHref}">${site.phone}</a> eller skriv til <a href="mailto:${site.emailConsumer}">${site.emailConsumer}</a>, så fortæller vi, hvad vi har på lager lige nu, og finder den rette maskine til dig.</div>
    <div class="cta-row" style="margin-top:20px"><a class="btn btn-primary" href="${site.phoneHref}">📞 Ring ${site.phone}</a><a class="btn btn-outline" href="mailto:${site.emailConsumer}">Skriv til os</a></div></div></section>`+shopFaq("Refurbished computere — ofte stillede spørgsmål", [["Kommer refurbished computere med et licenseret styresystem?","Ja, alle istandsatte enheder inkluderer en gyldig, licenseret OS-installation."],["Hvad sker der med de gamle dele eller enheder, I udskifter under istandsættelsen?","Hvor det er muligt, genbruges eller genanvendes fungerende komponenter ansvarligt; alt, der ikke fungerer, bortskaffes gennem korrekte e-affaldskanaler frem for på lossepladsen."],["Hvor lang garanti får jeg på en refurbished computer?","Det afhænger af kvalitetsgraden: A-kvalitet 3 år, B-kvalitet 2 år, C-kvalitet 1 år."]]);
}
function shopBackup() {
  return `  <section class="hero"><div class="wrap"><div class="eyebrow"><a href="/butik/" style="color:#A9C1F0">Butik</a> · Backup & sikkerhed</div><h1>Backup & sikkerhed</h1><p class="lead">Udstyr og software, vi personligt anbefaler og bruger.</p></div></section>
  <section class="section"><div class="wrap"><div class="crumbs"><a href="/butik/">Butik</a> › <span>Backup & sikkerhed</span></div>
    <p class="sub">Eksterne harddiske, NAS-løsninger og sikkerhedssoftware, vi personligt anbefaler og bruger. Vi hjælper gerne med opsætning, hvis det er købt hos os.</p>
    <div class="trust-line" style="margin:20px 0 8px">Vores udvalg skifter løbende, så vi holder ikke faste varer og priser her på siden. Ring <a href="${site.phoneHref}">${site.phone}</a> eller skriv til <a href="mailto:${site.emailConsumer}">${site.emailConsumer}</a>, så fortæller vi, hvad vi har på lager lige nu, og til hvilken pris.</div>
    <div class="cta-row" style="margin-top:20px"><a class="btn btn-primary" href="${site.phoneHref}">📞 Ring ${site.phone}</a><a class="btn btn-outline" href="mailto:${site.emailConsumer}">Skriv til os</a></div></div></section>`+shopFaq("Backup & sikkerhed — ofte stillede spørgsmål", [["Tilbyder I cloud-backup, eller kun fysiske drev?","Begge dele — kontakt os om dine konkrete behov og budget."]]);
}

// ---------- domain purchase ----------
// NOTE: DOMAENER_TLDS below is display/copy-only. The actual list of TLDs
// checked is SUPPORTED_TLDS in functions/_lib/openprovider.js (the two
// lists live in separate deploy targets — static build vs. Pages
// Functions — so they can't share an import). Keep them in sync by hand.
function domaenerBody() {
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Domæner</div><h1>Find og køb dit domæne</h1>
    <p class="lead">Søg efter et domænenavn — vi tjekker ${DOMAENER_TLD_COUNT} endelser (${DOMAENER_TLD_LIST_TEXT}) på én gang og viser priserne med det samme. Betal sikkert via Stripe — vi registrerer domænet for dig inden for få timer.</p></div></section>
  <style>
    .dom-results-list{display:flex;flex-direction:column;gap:10px}
    .dom-result-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 14px;border:1px solid var(--border,#e2e2e2);border-radius:10px;flex-wrap:wrap}
    .dom-result-row .dom-choose-btn{margin-left:auto}
  </style>
  <section class="section"><div class="wrap">
    <div class="form-card" style="max-width:640px" id="dom-search-card">
      <div class="form-row">
        <div style="flex:2 1 auto"><label for="dom-name">Domænenavn</label><input id="dom-name" type="text" placeholder="fx pcklinik-webshop" autocomplete="off" /></div>
      </div>
      <button class="btn btn-primary" type="button" id="dom-check-btn">Tjek tilgængelighed</button>
      <div id="dom-result" style="margin-top:20px"></div>
    </div>

    <div class="form-card" style="max-width:640px;display:none;margin-top:24px" id="dom-registrant-card">
      <div class="eyebrow">Valgt domæne: <strong id="dom-selected-label"></strong></div>
      <div class="form-row"><div><label for="reg-name">Fulde navn</label><input id="reg-name" type="text" autocomplete="name" required /></div></div>
      <div class="form-row"><div><label for="reg-email">E-mail</label><input id="reg-email" type="email" autocomplete="email" required /></div></div>
      <div class="form-row"><div><label for="reg-address">Adresse</label><input id="reg-address" type="text" autocomplete="street-address" required /></div></div>
      <div class="form-row">
        <div><label for="reg-postal">Postnr.</label><input id="reg-postal" type="text" autocomplete="postal-code" required /></div>
        <div><label for="reg-city">By</label><input id="reg-city" type="text" autocomplete="address-level2" required /></div>
      </div>
      <div class="form-row"><div><label for="reg-country">Land</label><input id="reg-country" type="text" autocomplete="country-name" value="Danmark" required /></div></div>
      <button class="btn btn-primary" type="button" id="dom-buy-btn">Bestil nu</button>
      <div id="dom-buy-error" class="form-status form-status--error" style="display:none;margin-top:14px"></div>
      <p class="sub" style="margin-top:16px;font-size:14.5px">Ved bestilling betaler du det fulde beløb inkl. 25% moms via Stripe. Vi registrerer domænet for dig manuelt inden for få timer og sender en bekræftelse på e-mail. Dette er et engangskøb for 1 års registrering — fornyelse næste år faktureres separat.</p>
    </div>
  </div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Ofte stillede spørgsmål</h2><div class="faq">${DOMAENER_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('')}</div></div></section>
  <section class="section"><div class="wrap"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/hosting/">Hosting →</a><a href="/hjemmesider-seo-google-ads/">Hjemmesider & SEO →</a><a href="/it-support-til-erhverv/">IT-support til erhverv →</a><a href="/kontakt/">Kontakt →</a></div></div></section>
  <script>
  (function(){
    var nameEl=document.getElementById('dom-name'),
      checkBtn=document.getElementById('dom-check-btn'),resultEl=document.getElementById('dom-result'),
      regCard=document.getElementById('dom-registrant-card'),buyBtn=document.getElementById('dom-buy-btn'),
      buyErr=document.getElementById('dom-buy-error'),selectedLabel=document.getElementById('dom-selected-label');
    var currentCheck=null;
    function esc(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML;}
    function runCheck(){
      var name=(nameEl.value||'').trim().toLowerCase();
      if(!name){resultEl.innerHTML='<p class="form-status form-status--error" style="display:block">Skriv venligst et domænenavn.</p>';return;}
      checkBtn.disabled=true;resultEl.innerHTML='<p class="sub">Tjekker '+esc(name)+' på tværs af alle endelser …</p>';regCard.style.display='none';currentCheck=null;
      fetch('/api/check-domain',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:name})})
        .then(function(r){return r.json().then(function(j){return {ok:r.ok,j:j};});})
        .then(function(x){
          checkBtn.disabled=false;
          if(!x.ok||x.j.error||!x.j.results){resultEl.innerHTML='<p class="form-status form-status--error" style="display:block">'+esc(x.j&&x.j.error?x.j.error:'Noget gik galt. Prøv igen.')+'</p>';return;}
          var rows=x.j.results.map(function(r){
            var full=name+'.'+r.tld;
            if(r.error){return '<div class="dom-result-row"><span>'+esc(full)+'</span><span class="sub">Kunne ikke tjekkes</span></div>';}
            if(!r.available){return '<div class="dom-result-row"><span>'+esc(full)+'</span><span class="sub">Optaget</span></div>';}
            return '<div class="dom-result-row"><span>'+esc(full)+'</span><span><strong>'+r.price_dkk+' kr.</strong> <span class="vat">ekskl. moms</span></span>'
              +'<button type="button" class="btn btn-outline dom-choose-btn" data-name="'+esc(name)+'" data-tld="'+esc(r.tld)+'" data-full="'+esc(full)+'">Vælg</button></div>';
          }).join('');
          resultEl.innerHTML='<div class="dom-results-list">'+rows+'</div>';
          var buttons=resultEl.querySelectorAll('.dom-choose-btn');
          for(var i=0;i<buttons.length;i++){
            buttons[i].addEventListener('click',function(){
              currentCheck={name:this.getAttribute('data-name'),tld:this.getAttribute('data-tld')};
              selectedLabel.textContent=this.getAttribute('data-full');
              regCard.style.display='block';
              regCard.scrollIntoView({behavior:'smooth',block:'start'});
            });
          }
        })
        .catch(function(){checkBtn.disabled=false;resultEl.innerHTML='<p class="form-status form-status--error" style="display:block">Noget gik galt. Prøv igen.</p>';});
    }
    checkBtn.addEventListener('click',runCheck);
    nameEl.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();runCheck();}});
    buyBtn.addEventListener('click',function(){
      buyErr.style.display='none';
      if(!currentCheck){buyErr.textContent='Vælg venligst et domæne først.';buyErr.style.display='block';return;}
      var registrant={
        name:document.getElementById('reg-name').value.trim(),
        email:document.getElementById('reg-email').value.trim(),
        address:document.getElementById('reg-address').value.trim(),
        postal_code:document.getElementById('reg-postal').value.trim(),
        city:document.getElementById('reg-city').value.trim(),
        country:document.getElementById('reg-country').value.trim()
      };
      for(var k in registrant){if(!registrant[k]){buyErr.textContent='Udfyld venligst alle kontaktoplysninger.';buyErr.style.display='block';return;}}
      buyBtn.disabled=true;buyBtn.textContent='Et øjeblik …';
      fetch('/api/create-checkout-session',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:currentCheck.name,tld:currentCheck.tld,registrant:registrant})})
        .then(function(r){return r.json().then(function(j){return {ok:r.ok,j:j};});})
        .then(function(x){
          if(!x.ok||!x.j.url){buyBtn.disabled=false;buyBtn.textContent='Bestil nu';buyErr.textContent=(x.j&&x.j.error)?x.j.error:'Noget gik galt. Prøv igen.';buyErr.style.display='block';return;}
          window.location.href=x.j.url;
        })
        .catch(function(){buyBtn.disabled=false;buyBtn.textContent='Bestil nu';buyErr.textContent='Noget gik galt. Prøv igen.';buyErr.style.display='block';});
    });
  })();
  </script>`;
}
// Must match SUPPORTED_TLDS in functions/_lib/openprovider.js (see note above).
const DOMAENER_TLDS = [
  'dk', 'com', 'net', 'org', 'eu',
  'info', 'biz', 'name', 'pro', 'mobi',
  'io', 'ai', 'co', 'me', 'tv', 'cc',
  'app', 'dev', 'xyz', 'online', 'store', 'tech', 'site', 'shop', 'club',
  'live', 'cloud', 'page', 'agency', 'digital', 'company', 'email', 'host',
  'link', 'media', 'news', 'software', 'solutions', 'studio', 'support',
  'team', 'tools', 'top', 'website', 'work', 'world', 'zone', 'fun', 'life',
  'art', 'design', 'style', 'consulting', 'finance', 'group', 'legal',
  'ltd', 'management', 'market', 'marketing', 'services', 'systems',
  'technology',
];
const DOMAENER_TLD_COUNT = DOMAENER_TLDS.length;
const DOMAENER_TLD_LIST_TEXT = DOMAENER_TLDS.slice(0, 8).map((t) => '.' + t).join(', ') + ' m.fl.';
const DOMAENER_FAQ = [
  { q: 'Hvor lang tid tager registreringen?', a: 'Vi registrerer domænet manuelt for dig, typisk inden for få timer efter betaling, og sender en bekræftelse på e-mail, når det er klar.' },
  { q: 'Hvad er inkluderet i prisen?', a: 'Prisen dækker 1 års registrering af domænet. Fornyelse næste år faktureres separat — vi kontakter dig, inden domænet udløber.' },
  { q: 'Er prisen inkl. eller ekskl. moms?', a: 'Prisen, du ser på siden, er ekskl. moms. Ved betaling via Stripe lægges 25% dansk moms oveni, så du ser det fulde beløb, før du betaler.' },
  { q: 'Kan jeg overføre et domæne, jeg allerede ejer?', a: 'Ja, kontakt os direkte på kontakt@pcklinik.dk, så hjælper vi med overførslen.' },
  { q: 'Hvilke endelser (TLD’er) tilbyder I?', a: 'Vi tjekker automatisk ' + DOMAENER_TLD_COUNT + ' endelser på én gang, herunder ' + DOMAENER_TLD_LIST_TEXT + ' Vi tilbyder generiske endelser (ikke landespecifikke som .de eller .fr) — mangler du en bestemt endelse, så kontakt os direkte.' },
];

// ---------- About / Team ----------
const TEAM = [
  ['Shan — Indehaver', '/images/team/shan.jpg', '20+ års erfaring på tværs af Mac, pc, servere og netværk. Står for værkstedet og håndterer personligt de mest teknisk krævende reparationer og erhvervs-IT-opsætninger.'],
  ['On-site tekniker', '/images/team/on-site-technician-1.jpg', 'Håndterer besøg i hjem og på kontorer på Frederiksberg og i København — netværksopsætninger, fejlfinding på stedet og praktisk arbejde uden for værkstedet.'],
  ['On-site tekniker', '/images/team/on-site-technician-2.jpg', 'Håndterer besøg i hjem og på kontorer på Frederiksberg og i København — netværksopsætninger, fejlfinding på stedet og praktisk arbejde uden for værkstedet.'],
  ['Mac-specialist', '/images/team/mac-specialist.jpg', 'Uafhængig, ikke Apple-autoriseret — hvilket betyder mere fleksibilitet: reparationer på komponentniveau, som autoriserede værksteder ofte ikke kan udføre, og ærlig rådgivning om reparation kontra udskiftning uden pres mod dyrere officielle kanaler.'],
  ['Hjemmeside- & SEO-specialist', '/images/team/seo-specialist.jpg', '15 års erfaring, ansvarlig for den tekniske og søgemæssige side af PCKliniks egen webtilstedeværelse samt de hjemmeside- og SEO-ydelser, vi tilbyder kunder.'],
  ['Teammedlem', '/images/team/team-member-6.jpg', 'Runder teamet af med daglige reparationer og kundesupport.'],
  ['Teammedlem', '/images/team/team-member-7.jpg', 'Runder teamet af med daglige reparationer og kundesupport.'],
];
function aboutBody() {
  const cards = TEAM.map(([name, img, bio]) => `<div class="card"><img class="img-placeholder" src="${img}" alt="${esc(name)}" loading="lazy" width="480" height="360" /><h3>${esc(name)}</h3><p>${esc(bio)}</p></div>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Om PCKlinik</div><h1>Mød teamet</h1>
    <p class="lead">Rigtige mennesker, rigtig erfaring — ikke et callcenter. PCKlinik er et team på 7, med base i vores værksted på Falkoner All&eacute; på Frederiksberg. Tilsammen dækker vi pc- og Mac-reparation, netværk og servere, on-site support og hjemmeside-/SEO-arbejde — så uanset hvad du har brug for, er der en på teamet, der virkelig kender det godt.</p></div></section>
  <section class="section"><div class="wrap"><div class="trust-line">16 år på samme domæne, eget værksted på Falkoner Allé — ikke et callcenter — og <a href="${site.reviewsUrl}" target="_blank" rel="noopener">4,9 ★ hos 494 kunder på Google →</a></div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Hvorfor vi er mere end reparation</div><h2>Alt inden for computer og IT — du har ikke brug for nogen andre</h2>
    <p class="sub">Vi startede som et reparationsværksted, men er over tid vokset til også at dække IT-support, hosting, domæner, backup og salg af computere. Det er ikke tilfældigt. Vi så det samme mønster igen og igen: kunder, der endte med at ringe rundt til flere forskellige leverandører for ting, der egentlig hang sammen — én til reparationen, én til hjemmesiden, én til backuppen, én til domænet. Derfor har vi valgt at være det ene team, der kender din opsætning fra start til slut. Inden for din computer- og IT-verden har du ikke brug for nogen andre end os.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Teamet</div><h2>Syv personer, ét værksted</h2>
    <div class="grid grid-3" style="margin-top:24px">${cards}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Derfor betyder det noget for dig</div><h2>Et større team — samme ærlige svar</h2>
    <p class="sub">Et større team betyder hurtigere ekspedition og mere specialiseret ekspertise — men vi arbejder stadig, som vi altid har gjort: du får et ærligt svar fra en, der faktisk ved, hvad de taler om, ikke et sagsnummer i en kø.</p>
    <div class="cta-row"><a class="btn btn-primary" href="/kontakt/">Kontakt os</a><a class="btn btn-outline" href="/it-support-til-erhverv/">IT-support til erhverv →</a></div></div></section>`;
}

function domaenerTakHtml() {
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Domæner</div><h1>Tak for din bestilling!</h1>
    <p class="lead">Vi har modtaget din betaling. Vi registrerer dit domæne inden for få timer og sender en bekræftelse til den e-mail, du opgav ved bestilling.</p>
    <div class="cta-row"><a class="btn btn-white" href="/">← Til forsiden</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>`;
}
function thankYouHtml() {
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">PCKlinik</div><h1>Thank You</h1>
    <p class="lead">Your message has been sent. We'll get back to you as soon as possible.</p>
    <div class="cta-row"><a class="btn btn-white" href="/">← Back to homepage</a></div></div></section>`;
}
function fmtDate(d) {
  const [y, m, day] = d.split('-').map(Number);
  const months = ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december'];
  return `${day}. ${months[m - 1]} ${y}`;
}
function newsIndexHtml() {
  const cards = news.map((n) => `<a class="card card-link" href="/nyheder/${n.slug}/"><div class="eyebrow" style="margin-bottom:8px">${esc(n.category)} · ${esc(fmtDate(n.date))}</div><h3>${esc(n.title)}</h3><p>${esc(n.description)}</p><span class="arrow">Læs mere →</span></a>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Nyheder · Guides</div><h1>Nyheder &amp; guides</h1>
    <p class="lead">Klare, praktiske svar på almindelige computer- og Mac-spørgsmål — skrevet af folk, der reparerer dem til daglig. Ingen jargon, ingen fyld.</p></div></section>
  <section class="section"><div class="wrap"><div class="grid grid-3">${cards}</div>
    <p class="sub" style="margin-top:32px">Har du et spørgsmål, du ikke finder svar på her? <a href="/stil-et-spoergsmaal/">Spørg os direkte</a> — de mest nyttige bliver til guides på denne side.</p></div></section>`;
}
function newsPostHtml(n) {
  const idx = news.findIndex((x) => x.slug === n.slug);
  const others = news.filter((_, i) => i !== idx).slice(0, 2)
    .map((o) => `<a href="/nyheder/${o.slug}/">${esc(o.title)} →</a>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="crumbs"><a href="/nyheder/">Nyheder</a> › <span>${esc(n.category)}</span></div>
    <h1>${esc(n.title)}</h1><p class="lead">${esc(fmtDate(n.date))}</p></div></section>
  <section class="section"><div class="wrap"><div class="lead-copy" style="max-width:760px">${n.body}</div>
    ${others ? `<div style="margin-top:40px"><p class="eyebrow">Mere fra Nyheder</p><div class="crosslinks">${others}</div></div>` : ''}</div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Brug for hjælp med dette?</h2><p>Fejlsøgning 300 kr. inkl. moms (3–4 dage) eller ekspres for 600 kr. inkl. moms (1–2 timer). Fast pris, før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kontakt os</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></div></section>`;
}
function newsPostSchema(n) {
  const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: n.title, datePublished: n.date, dateModified: n.date, description: n.description, author: { '@type': 'Organization', name: 'PCKlinik' }, publisher: { '@type': 'Organization', name: 'PCKlinik' }, mainEntityOfPage: `${site.domain}/nyheder/${n.slug}/` };
  if (n.image) schema.image = n.image.startsWith('http') ? n.image : `${site.domain}${n.image}`;
  return schema;
}

// ---------- Ask Us a Question ----------
function askQuestionBody() {
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Stil os et spørgsmål</div><h1>Stil os et spørgsmål</h1>
    <p class="lead">Rigtige spørgsmål fra rigtige mennesker — nogle ender med at hjælpe andre. Er du i tvivl om, hvorvidt noget er værd at reparere, nysgerrig på et konkret problem, eller vil du bare have et hurtigt svar, før du beslutter dig? Spørg os direkte. Vi læser hvert spørgsmål — de mest nyttige bliver til et ordentligt svar på vores <a href="/nyheder/" style="color:#A9C1F0">nyhedsside</a>, så dit spørgsmål kan ende med at hjælpe en anden med samme problem.</p></div></section>
  <section class="section"><div class="wrap"><div class="form-card" style="max-width:640px">
      ${formOpen(site.emailConsumer, 'Nyt spørgsmål — pcklinik.dk Spørg os', '/tak/')}
        <div class="form-row"><div><label for="aq-name">Navn <span style="font-weight:400;color:var(--muted)">(valgfrit)</span></label><input id="aq-name" name="name" type="text" autocomplete="name" /></div></div>
        <div class="form-row"><div><label for="aq-email">E-mail <span style="font-weight:400;color:var(--muted)">(valgfrit — kun nødvendigt, hvis du ønsker et personligt svar)</span></label><input id="aq-email" name="email" type="email" autocomplete="email" /></div></div>
        <div class="form-row"><div><label for="aq-device">Enhed / mærke <span style="font-weight:400;color:var(--muted)">(valgfrit — hjælper os med at svare mere præcist)</span></label><input id="aq-device" name="device" type="text" placeholder="fx MacBook Air M2" /></div></div>
        <div class="form-row"><div><label for="aq-question">Dit spørgsmål</label><textarea id="aq-question" name="question" required></textarea></div></div>
        <div class="form-row"><label style="display:flex;gap:10px;align-items:flex-start;font-weight:400;color:var(--muted);font-size:14.5px"><input type="checkbox" name="feature_ok" value="yes" style="width:auto;margin-top:3px" /> Det er okay at vise dette spørgsmål (anonymt) på vores nyhedsside.</label></div>
        <button class="btn btn-primary" type="submit">Send spørgsmål</button>
      </form>
      <p class="sub" style="margin-top:20px;font-size:14.5px">Privat som standard. Vi offentliggør aldrig noget, medmindre du sætter kryds ovenfor — og selv da anonymiserer vi det (for eksempel: "en kunde spurgte for nylig…"). Dit navn og din e-mail bliver aldrig offentliggjort.</p>
    </div></div></section>`;
}

// ---------- task-based service pages ----------
function serviceBody(s) {
  const intro = s.intro.map((p) => `<p>${p}</p>`).join('');
  const included = s.whatsIncluded ? `<div class="trust-line" style="margin:6px 0 20px"><strong>Hvad er inkluderet:</strong> ${esc(s.whatsIncluded)}</div>` : '';
  const bullets = (s.bulletSections || []).map((b) => `<section class="section"><div class="wrap"><div class="eyebrow">${esc(b.heading)}</div><ul class="check-list">${b.items.map((it) => `<li>${esc(it)}</li>`).join('')}</ul></div></section>`).join('');
  const callout = s.callout ? `<section class="section"><div class="wrap"><div class="callout"><strong>${esc(s.callout.label)}:</strong> ${esc(s.callout.text)}</div></div></section>` : '';
  const pricing = s.pricing
    ? `<section class="section alt"><div class="wrap"><div class="eyebrow">Pris</div><h2>${esc(s.pricing.h2)}</h2><p class="sub">${esc(s.pricing.text)}</p></div></section>`
    : `<section class="section alt"><div class="wrap"><div class="eyebrow">Fejlsøgning &amp; pris</div><h2>Standard eller ekspres — dit valg</h2><p class="sub">Standardfejlsøgning koster 300 kr. inkl. moms (3–4 dage), eller ekspres for 600 kr. inkl. moms (1–2 timer) — reparationen klar inden for 24 timer, hvis der ikke skal bestilles specielle reservedele. Du får altid en fast pris, før vi går i gang.</p></div></section>`;
  const cta = esc(s.ctaLabel || 'Kom forbi med din enhed');
  const faq = s.faq.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const cross = s.crosslinks.map((c) => `<a href="${c.href}">${esc(c.label)} →</a>`).join('') + `<a href="/kontakt/">Kontakt & booking →</a>`;
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Service · Frederiksberg &amp; København</div><h1>${esc(s.h1)}</h1>${s.subhead ? `<p class="lead">${esc(s.subhead)}</p>` : ''}
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">${cta}</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>${esc(s.h1)}</span></div>${intro}${included}</div></section>
  ${bullets}
  ${callout}
  ${pricing}
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Ofte stillede spørgsmål</h2><div class="faq">${faq}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Klar til at komme i gang?</h2><p>Kontakt os, så finder vi den rette løsning for dig.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">${cta}</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relaterede services</p><div class="crosslinks">${cross}</div></div></div></section>`;
}
function faqSchemaFrom(items) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
}
// ---------- schema: Service node (area/location pages) ----------
// Ground-truth "area-page schema template": #business (above) stays
// frozen/byte-identical everywhere; this Service node carries the
// page-specific bits. `@id` is namespaced to the page's own full URL
// (never a bare "#service") so it can't collide with another page's
// Service node. `provider` always points back at the single #business
// node — never re-declare business fields here.
function areaServiceSchema({ url, serviceType, areaServed }) {
  return {
    '@context': 'https://schema.org', '@type': 'Service', '@id': `${url}#service`,
    serviceType, provider: { '@id': site.domain + '/#business' }, areaServed, url,
  };
}

// ---------- schema: Article (guide/help pages) ----------
// Mirrors areaServiceSchema() above: `@id` namespaced to the page's own
// full URL (never a bare "#article") so it can't collide across pages.
// `author` and `publisher` both point back at the single frozen #business
// node rather than duplicating org fields — same pattern as `provider` on
// Service nodes. Guide pages pair this with faqSchemaFrom() for
// Article+FAQPage, per the ground-truth "New-page checklist."
function articleSchema({ url, headline, description, datePublished, dateModified }) {
  return {
    '@context': 'https://schema.org', '@type': 'Article', '@id': `${url}#article`,
    headline, description, datePublished, dateModified: dateModified || datePublished,
    author: { '@id': site.domain + '/#business' }, publisher: { '@id': site.domain + '/#business' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }, url,
  };
}

// ---------- garanti ----------
const GARANTI_FAQ = [
  { q: 'Hvor lang garanti giver I på en reparation?', a: 'Vi giver garanti på både reservedele og det udførte arbejde. Længden afhænger af reparationstypen og reservedelen — du får garantiperioden oplyst skriftligt, når du henter maskinen.' },
  { q: 'Hvad dækker garantien?', a: 'Garantien dækker den reservedel, vi har monteret, og det arbejde, vi har udført. Går den samme del i stykker igen inden for garantiperioden under normal brug, udbedrer vi det uden beregning.' },
  { q: 'Hvad dækker garantien ikke?', a: 'Garantien dækker ikke nye skader, der ikke har med reparationen at gøre — for eksempel ny væskeskade, fald- eller stødskade, overspænding, eller skader efter at andre har åbnet maskinen. Den dækker heller ikke slitage på batterier ud over normal kapacitetsnedgang.' },
  { q: 'Hvad gør jeg, hvis fejlen kommer igen?', a: 'Kontakt os på 91 81 61 81 eller kom forbi værkstedet på Falkoner Allé 108 med maskinen og din kvittering. Vi ser på den med det samme og udbedrer det, hvis det er dækket.' },
  { q: 'Skal jeg have kvitteringen med?', a: 'Ja, tag kvitteringen eller reparationsnummeret med — så kan vi finde din sag med det samme.' },
  { q: 'Gælder garantien også på refurbished computere fra butikken?', a: 'Ja. Refurbished computere fra PCKlinik sælges med garanti efter kvalitetsgrad: A-kvalitet 3 år, B-kvalitet 2 år, C-kvalitet 1 år.' },
];
function garantiBody() {
  const faq = GARANTI_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Garanti</div><h1>Garanti på reparation</h1>
    <p class="lead">Vi giver garanti på både reservedele og det arbejde, vi udfører. Går den samme fejl igen inden for garantiperioden, retter vi det uden beregning.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kontakt os</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Garanti</span></div>
    <p>Når vi reparerer din computer, skal du kunne regne med, at det holder. Derfor giver vi <strong>garanti på både den reservedel, vi monterer, og på selve arbejdet</strong>. Du får garantiperioden oplyst skriftligt på din kvittering, når du henter maskinen.</p>
    <p>Vi bruger kvalitetsreservedele, og vi tester altid maskinen, før du får den tilbage. Skulle den samme fejl alligevel dukke op igen inden for garantiperioden under normal brug, udbedrer vi det <strong>uden beregning</strong>.</p>
    <div class="trust-line" style="margin:6px 0 20px"><strong>Sådan bruger du garantien:</strong> Ring på ${site.phone} eller kom forbi Falkoner Allé 108 med maskinen og din kvittering.</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Dækning</div><h2>Hvad garantien dækker — og ikke dækker</h2>
    <div class="grid grid-2" style="margin-top:24px">
      <div class="card"><h3>Dækket</h3><ul class="check-list">
        <li>Den reservedel, vi har monteret</li>
        <li>Det arbejde, vi har udført</li>
        <li>Samme fejl der opstår igen ved normal brug</li>
        <li>Refurbished computere købt i butikken</li>
      </ul></div>
      <div class="card"><h3>Ikke dækket</h3><ul class="check-list">
        <li>Nye skader uden sammenhæng med reparationen</li>
        <li>Ny væskeskade, fald- eller stødskade</li>
        <li>Overspænding og lynnedslag</li>
        <li>Skader efter at andre har åbnet maskinen</li>
        <li>Normal slitage på batterikapacitet</li>
      </ul></div>
    </div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Refurbished</div><h2>Garanti på refurbished computere</h2>
    <p class="sub">Alle refurbished computere fra PCKlinik er testet og istandsat, og garantien afhænger af kvalitetsgraden: <strong>A-kvalitet</strong> 3 år, <strong>B-kvalitet</strong> 2 år, <strong>C-kvalitet</strong> 1 år — billigere og grønnere end at købe nyt.</p>
    <div class="cta-row"><a class="btn btn-primary" href="/butik/computere/refurbished/">Se refurbished computere →</a></div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Ofte stillede spørgsmål om garanti</h2><div class="faq">${faq}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Spørgsmål til din reparation?</h2><p>Ring til os, eller kom forbi værkstedet på Falkoner Allé 108.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kontakt os</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/reparationspriser/">Typiske reparationspriser →</a><a href="/computer-reparation/">Computer reparation →</a><a href="/aabningstider/">Åbningstider →</a><a href="/faq/">FAQ →</a></div></div></div></section>`;
}

// ---------- åbningstider ----------
const AABNING_FAQ = [
  { q: 'Hvad er PCKlinik åbningstider?', a: 'Mandag til fredag 10:00–18:00, lørdag 10:00–14:00. Søndag holder vi lukket.' },
  { q: 'Skal jeg bestille tid, eller kan jeg bare komme forbi?', a: 'Du kan komme forbi i åbningstiden uden at bestille tid. Vi tager imod indlevering løbende.' },
  { q: 'Hvor ligger værkstedet?', a: 'Falkoner Allé 108, 2000 Frederiksberg — i stueetagen. Tæt på Frederiksberg Station (metro M1/M2) og Falkoner Allé.' },
  { q: 'Hvad skal jeg have med, når jeg afleverer min computer?', a: 'Tag selve maskinen og gerne opladeren med. Har du en adgangskode til Windows eller macOS, skal vi bruge den for at kunne teste maskinen. Husk at lave en backup, hvis du kan.' },
  { q: 'Har I åbent på helligdage?', a: 'Vi holder lukket på helligdage. Er du i tvivl, så ring på 91 81 61 81, før du kører herud.' },
  { q: 'Kan jeg få hjælp uden for åbningstiden?', a: 'Erhvervskunder med en IT-serviceaftale kan aftale support uden for normal åbningstid. Kontakt os for at høre nærmere.' },
];
function aabningstiderBody() {
  const faq = AABNING_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const rows = [['Mandag', '10:00–18:00'], ['Tirsdag', '10:00–18:00'], ['Onsdag', '10:00–18:00'], ['Torsdag', '10:00–18:00'], ['Fredag', '10:00–18:00'], ['Lørdag', '10:00–14:00'], ['Søndag', 'Lukket']]
    .map(([d, h]) => `<li><strong>${d}</strong> — ${h}</li>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Åbningstider &amp; find vej</div><h1>Åbningstider</h1>
    <p class="lead">Falkoner Allé 108, 2000 Frederiksberg. Kom forbi i åbningstiden — du behøver ikke bestille tid.</p>
    <div class="cta-row"><a class="btn btn-white" href="${site.phoneHref}">📞 Ring ${site.phone}</a><a class="btn btn-ghost-light" href="/kontakt/">Kontakt &amp; booking</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Åbningstider</span></div>
    <p>Vores værksted på <strong>Falkoner Allé 108 på Frederiksberg</strong> har åbent seks dage om ugen. Du kan komme forbi og aflevere din computer i åbningstiden — <strong>ingen tidsbestilling nødvendig</strong>.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Åbningstider</div><h2>Hvornår vi har åbent</h2>
    <div class="grid grid-2" style="margin-top:24px">
      <div class="card"><h3>Ugens åbningstider</h3><ul class="check-list">${rows}</ul><p style="margin-top:12px">Vi holder lukket på helligdage. Er du i tvivl, så ring først på <a href="${site.phoneHref}">${site.phone}</a>.</p></div>
      <div class="card"><h3>Sådan finder du os</h3><ul class="check-list">
        <li>Falkoner Allé 108, 2000 Frederiksberg — stueetagen</li>
        <li>Metro M1/M2 til Frederiksberg Station, ca. 5 min. gang</li>
        <li>Bus på Falkoner Allé lige uden for døren</li>
        <li>Betalingsparkering på Falkoner Allé og sidegaderne</li>
        <li>Gåafstand fra CBS (Solbjerg Plads)</li>
      </ul></div>
    </div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Inden du kommer</div><h2>Hvad du skal have med</h2>
    <p class="sub">Tag selve maskinen og gerne opladeren med. Har du en adgangskode til Windows eller macOS, skal vi bruge den for at kunne teste maskinen efter reparationen. Lav en backup af dine data, hvis du har mulighed for det — vi passer på dine filer, men en backup er altid en god idé.</p>
    <div class="cta-row"><a class="btn btn-primary" href="/reparationspriser/">Se typiske priser →</a><a class="btn btn-outline" href="/computer-reparation/">Computer reparation →</a></div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Find os</div><h2>Vores værksted — Falkoner Allé 108, Frederiksberg</h2>${mapFrame}</div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Ofte stillede spørgsmål</h2><div class="faq">${faq}</div></div></section>`;
}

// ---------- location / area pages ----------
function locationBody(loc) {
  const intro = loc.intro.map((p) => `<p>${p}</p>`).join('');
  const trust = loc.trustLine ? `<div class="trust-line" style="margin:8px 0 24px">${esc(loc.trustLine)}</div>` : '';
  const areas = loc.areas ? `<section class="section alt"><div class="wrap"><div class="eyebrow">Områder vi betjener</div><h2>Kvarterer i København</h2><div class="grid grid-3">${loc.areas.map((sl) => { const a = locations.find((x) => x.slug === sl); return `<a class="card card-link" href="/${a.slug}/"><h3>${esc(a.name)}</h3><p>${esc(a.subhead)}</p><span class="arrow">Se område →</span></a>`; }).join('')}</div></div></section>` : '';
  // Honest framing: this is NOT a grid of local-repair pages for other towns
  // (that was a doorway pattern, removed 2026-07-30) — it's one link to the
  // consolidated remote-support/send-in page, with the served areas named in
  // plain text so it's clear this isn't local walk-in coverage.
  const remoteAreas = loc.remoteAreas ? '<section class="section"><div class="wrap"><div class="eyebrow">Resten af Danmark</div><h2>Fjernsupport og indsendelse uden for København</h2><p class="sub">Vi har allerede kunder i ' + loc.remoteAreas.areaNames.map(esc).join(', ') + ' og resten af landet — ikke som lokalt fremmøde, men via fjernsupport eller indsendelse af din enhed.</p><div class="cta-row"><a class="btn btn-primary" href="' + loc.remoteAreas.href + '">Se hvordan fjernsupport og indsendelse fungerer →</a></div></div></section>' : '';
  const faq = loc.faq.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const cross = loc.crosslinks.map((c) => `<a href="${c.href}">${esc(c.label)} →</a>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">København · Frederiksberg</div>
    <h1>${esc(loc.h1)}</h1><p class="lead">${esc(loc.subhead)}</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>${esc(loc.h1)}</span></div>${intro}${trust}</div></section>
  ${areas}
  ${remoteAreas}
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Ofte stillede spørgsmål</h2><div class="faq">${faq}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Find os</div><h2>Vores værksted — Falkoner Allé 108, Frederiksberg</h2><p class="sub">Vi betjener dette område fra vores værksted på Frederiksberg — kom forbi med din enhed, eller kontakt os for at høre mere. Driver du virksomhed? Se vores <a href="/it-support-til-erhverv/">IT-support til erhverv →</a></p>${mapFrame}</div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Brug for reparation ${['Frederiksberg','Vesterbro','Nørrebro','Østerbro','Amager','Christianshavn'].includes(loc.name) ? 'på' : 'i'} ${esc(loc.name)}?</h2><p>Fejlsøgning 300 kr. inkl. moms (3–4 dage) eller ekspres (600 kr. inkl. moms, 1–2 timer). Fast pris, før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks">${cross}</div></div></div></section>`;
}
// ---------- 404 ----------
function notFoundBody() {
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Fejl 404</div>
    <h1>Siden blev ikke fundet</h1>
    <p class="lead">Siden, du leder efter, findes ikke — den kan være flyttet, omdøbt, eller URL'en kan indeholde en fejl.</p>
    <div class="cta-row"><a class="btn btn-white" href="/">Til forsiden</a><a class="btn btn-ghost-light" href="/kontakt/">Kontakt os</a></div>
  </div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Prøv i stedet</div><h2>Populære sider</h2>
    <div class="grid grid-4">
      <a class="card card-link" href="/kontakt/"><h3>Kom forbi med din enhed</h3><p>Fejlsøgning fra 300 kr. inkl. moms, fast pris.</p><span class="arrow">Gå til kontakt →</span></a>
      <a class="card card-link" href="/butik/"><h3>Butik</h3><p>Computere, backup & sikkerhed.</p><span class="arrow">Se butikken →</span></a>
      <a class="card card-link" href="/it-support-til-erhverv/"><h3>IT-support til erhverv</h3><p>Fast pris pr. måned.</p><span class="arrow">Se erhvervs-IT →</span></a>
      <a class="card card-link" href="/faq/"><h3>FAQ</h3><p>Ofte stillede spørgsmål.</p><span class="arrow">Se FAQ →</span></a>
    </div></div></section>`;
}

// ---------- write helpers ----------
async function writePage(p, html) {
  const dir = p === '/' ? DIST : path.join(DIST, p);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, 'index.html'), html);
}
async function copyDir(src, dst) {
  await fs.mkdir(dst, { recursive: true });
  for (const e of await fs.readdir(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    if (e.isDirectory()) await copyDir(s, d); else await fs.copyFile(s, d);
  }
}

// ---------- run ----------
async function run() {
  // Nyheder posts: Markdown + frontmatter under src/content/nyheder/*.md,
  // newest first, drafts skipped. See src/content/README.md.
  news = await loadNewsPosts(__dirname);

  await fs.rm(DIST, { recursive: true, force: true });
  await fs.mkdir(DIST, { recursive: true });

  // static assets
  await copyDir(path.join(__dirname, 'public'), DIST);
  await fs.mkdir(path.join(DIST, 'styles'), { recursive: true });
  await fs.copyFile(path.join(__dirname, 'src/styles/global.css'), path.join(DIST, 'styles/global.css'));

  const pages = [];
  // home
  pages.push(['/', page({ title: 'PCKlinik | Computer- og Mac-reparation i København', description: 'Computer- og Mac-reparation, IT-support, hosting og backup — alt ét sted hos PCKlinik. Fejlsøgning fra 300 kr. inkl. moms Ring 91 81 61 81.', p: '/', body: homeBody(), schema: faqSchemaFrom(HOME_FAQ) })]);
  // repairs
  for (const r of repairs) {
    pages.push([`/${r.slug}/`, page({ title: r.title, description: r.description, p: `/${r.slug}/`, body: repairBody(r), schema: repairSchema(r) })]);
  }
  // contact
  pages.push(['/kontakt/', page({ title: 'Kontakt PCKlinik | Frederiksberg & København', description: 'Kontakt PCKlinik for PC- og Mac-reparation på Frederiksberg og i København. Ring 91 81 61 81 eller skriv til kontakt@pcklinik.dk.', p: '/kontakt/', body: contactBody() })]);
  // business
  pages.push(['/it-support-til-erhverv/', page({ title: 'IT-supportaftale til erhverv | PCKlinik', description: 'IT-support til fast pris for virksomheder — plus hosting, domæner og backup fra samme team. I har ikke brug for nogen andre. Fra 399 kr./bruger/måned.', p: '/it-support-til-erhverv/', body: businessBody(), schema: businessSchemaFaq() })]);
  // IT-rådgivning (erhverv) — GDPR/NIS2 consulting, "linchpin" for the
  // Rådgivning pillar. Gratis first consultation ONLY — no diagnosis
  // pricing shown on this page, per ground-truth "gratis" rule.
  pages.push(['/it-raadgivning/', page({
    title: 'IT-rådgivning til erhverv – GDPR & NIS2 | PCKlinik',
    description: 'IT-rådgivning til virksomheder i København og på Frederiksberg. Få styr på GDPR og NIS2. Første konsultation er gratis. Ring 91 81 61 81.',
    p: '/it-raadgivning/', body: itRaadgivningHtml(),
    schema: [areaServiceSchema({ url: `${site.domain}/it-raadgivning/`, serviceType: 'IT-rådgivning', areaServed: ['København', 'Frederiksberg'] }), faqSchemaFrom(IT_RAADGIVNING_FAQ)],
  })]);
  // Forsikringsreparation — reparation dækket af kundens forsikring.
  pages.push(['/forsikringsreparation/', page({
    title: 'Forsikringsreparation af computer & Mac | PCKlinik',
    description: 'Skadet computer eller Mac? Vi laver reparationer, der dækkes af din forsikring — du får et tilbud og en faktura til dit forsikringsselskab. Ring 91 81 61 81.',
    p: '/forsikringsreparation/', body: forsikringsreparationHtml(),
    schema: [areaServiceSchema({ url: `${site.domain}/forsikringsreparation/`, serviceType: 'Forsikringsreparation af computer og Mac', areaServed: ['København', 'Frederiksberg', 'Danmark'] }), faqSchemaFrom(FORSIKRING_FAQ)],
  })]);
  // shop
  pages.push(['/butik/', page({ title: 'Butik | Computere, backup & sikkerhed | PCKlinik', description: 'Køb nye og istandsatte computere samt backup- og sikkerhedsudstyr hos PCKlinik — samme team, der også reparerer og supporterer dem. Betaling via Stripe.', p: '/butik/', body: shopHub() })]);
  pages.push(['/butik/computere/', page({ title: 'Computere | Nye & refurbished | PCKlinik Butik', description: 'Nye og istandsatte computere fra PCKlinik — testet og klar til brug, med garanti. Se udvalget og køb sikkert via Stripe.', p: '/butik/computere/', body: shopComputers() })]);
  pages.push(['/butik/computere/nye/', page({ title: 'Nye computere | PCKlinik Butik', description: 'Køb nye computere hos PCKlinik. Driftssikre mærker, klargjort og klar til brug. Sikker betaling via Stripe.', p: '/butik/computere/nye/', body: shopNew() })]);
  pages.push(['/butik/computere/refurbished/', page({ title: 'Refurbished computere med garanti | PCKlinik Butik', description: 'Grundigt testede og istandsatte computere fra PCKlinik, med garanti. God ydelse til en lavere pris. Sikker betaling via Stripe.', p: '/butik/computere/refurbished/', body: shopRefurb() })]);
  pages.push(['/butik/backup-sikkerhed/', page({ title: 'Backup & sikkerhed | PCKlinik Butik', description: 'Eksterne harddiske, NAS-løsninger og sikkerhedssoftware anbefalet af PCKlinik. Sikker betaling via Stripe.', p: '/butik/backup-sikkerhed/', body: shopBackup() })]);
  // Domain purchase
  pages.push(['/domaener/', page({ title: 'Køb domæne (.dk & .com) | PCKlinik', description: 'Søg og køb dit domæne direkte online hos PCKlinik — samme team som klarer reparation, hosting og IT-support. Betal sikkert via Stripe.', p: '/domaener/', body: domaenerBody(), schema: faqSchemaFrom(DOMAENER_FAQ) })]);
  pages.push(['/domaener/tak/', page({ title: 'Tak for din bestilling | PCKlinik Domæner', description: 'Vi har modtaget din betaling og registrerer dit domæne inden for få timer.', p: '/domaener/tak/', body: domaenerTakHtml(), noindex: true })]);
  // Hosting (webhosting subscription — HostShop checkout links are TBD, see hostingBody() note)
  pages.push(['/hosting/', page({ title: 'Webhosting til din hjemmeside | PCKlinik', description: 'Hurtig, driftssikker webhosting fra 45 kr./md. — fra samme team, der reparerer din computer og bygger din hjemmeside. Ingen binding.', p: '/hosting/', body: hostingBody(), schema: hostingSchemaFaq() })]);
  // Automatisk Backup (recurring backup subscription — distinct from /backup-og-datagendannelse/)
  pages.push(['/automatisk-backup/', page({ title: 'Automatisk Backup | PCKlinik', description: 'Løbende, automatisk sikkerhedskopiering af dine computere og servere fra 199 kr./md. — fra det samme team, der reparerer og supporterer dig.', p: '/automatisk-backup/', body: automatiskBackupBody(), schema: automatiskBackupSchemaFaq() })]);

  // Mac Repair hub (broad intent)
  pages.push(['/mac-reparation/', page({ title: 'Mac-reparation på Frederiksberg & København | PCKlinik', description: 'Reparation af MacBook, iMac, Mac mini, Mac Studio og Mac Pro på Frederiksberg og i København. Fejlsøgning fra 300 kr. inkl. moms, fast pris, hurtig ekspedition.', p: '/mac-reparation/', body: macHubHtml(), schema: faqSchemaFrom(MAC_HUB_FAQ) })]);
  // Gaming PC repair, service & custom builds
  pages.push(['/gaming-pc-reparation/', page({ title: 'Gaming-pc — reparation, service & specialbyggede | PCKlinik', description: 'Reparation af gaming-pc, køleservice og specialbyggede pc’er på Frederiksberg og i København. GPU, overophedning, opgraderinger — plus bygning fra bunden.', p: '/gaming-pc-reparation/', body: gamingHtml(), schema: faqSchemaFrom(GAMING_FAQ) })]);
  // Error messages reference page
  pages.push(['/fejlmeddelelser/', page({ title: 'Almindelige computerfejlmeddelelser & koder | PCKlinik', description: 'Blå skærme, opstartsfejl, kernel panics og mere — hvad almindelige Windows- og Mac-fejlmeddelelser betyder, og hvordan vi udbedrer dem.', p: '/fejlmeddelelser/', body: errorMessagesHtml(), schema: faqSchemaFrom(ERROR_FAQ) })]);
  // Computer won't turn on (guide)
  pages.push(['/computer-vil-ikke-taende/', page({ title: 'Vil computeren ikke tænde? Her er hvorfor | PCKlinik', description: 'Vil din bærbare eller pc ikke tænde? De tre mest almindelige årsager, hvad de betyder, og hvordan vi fejlsøger og udbedrer det. Frederiksberg og København.', p: '/computer-vil-ikke-taende/', body: computerWontTurnOnHtml(), schema: faqSchemaFrom(WONT_TURN_ON_FAQ) })]);
  // General site-wide FAQ
  pages.push(['/faq/', page({ title: 'Ofte stillede spørgsmål | PCKlinik', description: 'PC- og Mac-reparation i København — FAQ om fejlsøgning, priser, mærker, services, erhvervs-IT og vores butik.', p: '/faq/', body: faqPageHtml(), schema: faqSchemaFrom(GENERAL_FAQ) })]);
  // Network Equipment hub
  pages.push(['/netvaerksudstyr/', page({ title: 'Netværks- & router-opsætning: UniFi, Netgear | PCKlinik', description: 'Router- og netværksopsætning, konfiguration og fejlfinding — UniFi, Netgear, TP-Link, ASUS, Eero og Google Nest. Frederiksberg og København.', p: '/netvaerksudstyr/', body: networkHubHtml(), schema: faqSchemaFrom(NETWORK_HUB_FAQ) })]);
  // Websites & SEO hub
  pages.push(['/hjemmesider-seo-google-ads/', page({ title: 'Webdesign, SEO & Google Ads | PCKlinik', description: 'Webdesign, SEO og Google Ads-administration til virksomheder i København. Bygget og optimeret af en, der faktisk laver arbejdet.', p: '/hjemmesider-seo-google-ads/', body: websitesHubHtml(), schema: faqSchemaFrom(WEBSITES_HUB_FAQ) })]);
  // About / Meet the Team
  pages.push(['/om-os/', page({ title: 'Om PCKlinik & vores team | PCKlinik', description: 'Mød PCKlinik-teamet — 7 personer, der dækker pc, Mac, netværk, on-site support og web/SEO, med base på Frederiksberg.', p: '/om-os/', body: aboutBody() })]);
  // Students (CBS & DTU) — student-facing SEO/FAQ page
  pages.push(['/studerende/', page({ title: 'Computerreparation til studerende — CBS & DTU | PCKlinik', description: 'Computer- og MacBook-reparation til studerende ved CBS og DTU. Gåafstand fra Solbjerg Plads, Frederiksberg. Skærm, batteri, SSD, backup — fast pris.', p: '/studerende/', body: studentsHtml(), schema: faqSchemaFrom(STUDENTS_FAQ) })]);
  // Typiske reparationspriser
  pages.push(['/reparationspriser/', page({ title: 'Typiske reparationspriser | PCKlinik', description: 'Vejledende fra-priser på almindelige reparationer — skærm, batteri, SSD — inkl. dele og arbejde. Fast tilbud, før vi går i gang.', p: '/reparationspriser/', body: priceRangesHtml() })]);
  // Reparere eller købe ny computer — genopbygning af død URL. No
  // _redirects rule targets this slug (verified against public/_redirects
  // before building), so no redirect needs removing here. NB: this is a
  // different URL from /hvor-laenge-holder-en-macbook/, which used to have
  // an active 301 to /macbook-reparation/ — that rule was removed from
  // public/_redirects in the same commit that added the page below.
  pages.push(['/reparere-eller-koebe-ny-computer/', page({
    title: 'Reparere eller købe ny computer? Sådan vælger du | PCKlinik',
    description: 'Kan det betale sig at reparere din computer, eller skal du købe ny? Ærlig vejledning fra PCKlinik — vi siger det ligeud, også når reparation ikke betaler sig.',
    p: '/reparere-eller-koebe-ny-computer/', body: reparereEllerKoebeHtml(),
    // Article, not Service — this is a decision guide, not a service
    // offering (per ground-truth: "Guides ... use Article + FAQPage;
    // service pages use Service + FAQPage").
    schema: [articleSchema({ url: `${site.domain}/reparere-eller-koebe-ny-computer/`, headline: 'Reparere eller købe ny computer? Sådan vælger du', description: 'Kan det betale sig at reparere din computer, eller skal du købe ny? Ærlig vejledning fra PCKlinik.', datePublished: '2026-08-05' }), faqSchemaFrom(REPARERE_KOEBE_FAQ)],
  })]);
  // Hvor længe holder en MacBook? — rebuild of a dead URL with 533 proven
  // views (see removed _redirects rule). Article, not Service, same
  // reasoning as the guide above.
  pages.push(['/hvor-laenge-holder-en-macbook/', page({
    title: 'Hvor længe holder en MacBook? | PCKlinik',
    description: 'Realistisk levetid for en MacBook er 5–10 år. Se hvad der afgør det, tegnene på at den nærmer sig enden, og hvordan du vælger mellem reparation og ny.',
    p: '/hvor-laenge-holder-en-macbook/', body: macbookLevetidHtml(),
    schema: [articleSchema({ url: `${site.domain}/hvor-laenge-holder-en-macbook/`, headline: 'Hvor længe holder en MacBook?', description: 'Realistisk levetid for en MacBook er 5–10 år. Se hvad der afgør det, og hvordan du vælger mellem reparation og ny.', datePublished: '2026-08-06' }), faqSchemaFrom(MACBOOK_LEVETID_FAQ)],
  })]);
  // Windows 10-klyngen (4 sider) — alle Article+FAQPage. ESU-fakta og
  // slutdatoer verificeret mod Microsofts egne sider 2026-08-06 (se
  // kommentar i richPages.js) — ikke skrevet fra hukommelse.
  pages.push(['/windows-10-support-slut/', page({
    title: 'Windows 10 support er slut — hvad gør du nu? | PCKlinik',
    description: 'Windows 10 mistede support 14. oktober 2025. Se dine tre muligheder: opgradér til Windows 11, forlæng midlertidigt, eller køb ny/refurbished.',
    p: '/windows-10-support-slut/', body: windows10HubHtml(),
    schema: [articleSchema({ url: `${site.domain}/windows-10-support-slut/`, headline: 'Windows 10 er ikke længere sikker — her er dine muligheder', description: 'Windows 10 mistede support 14. oktober 2025. Se dine tre muligheder, og hvordan du finder ud af, hvad der er rigtigst for din maskine.', datePublished: '2026-08-06' }), faqSchemaFrom(WINDOWS10_HUB_FAQ)],
  })]);
  pages.push(['/kan-min-computer-koere-windows-11/', page({
    title: 'Kan min computer køre Windows 11? | PCKlinik',
    description: 'TPM 2.0 og processoren afgør oftest, om din computer kan opgraderes til Windows 11. Se kravene, og hvordan du selv tjekker din maskine.',
    p: '/kan-min-computer-koere-windows-11/', body: windows11KravHtml(),
    schema: [articleSchema({ url: `${site.domain}/kan-min-computer-koere-windows-11/`, headline: 'Kan min computer køre Windows 11?', description: 'TPM 2.0 og processoren afgør oftest, om din computer kan opgraderes til Windows 11. Se kravene, og hvordan du selv tjekker din maskine.', datePublished: '2026-08-06' }), faqSchemaFrom(WINDOWS11_KRAV_FAQ)],
  })]);
  pages.push(['/opgradering-til-windows-11/', page({
    title: 'Sådan opgraderer du til Windows 11 | PCKlinik',
    description: 'Backup først, altid. Se trin for trin, hvad der sker med dine filer og programmer, og hvornår en ren installation er bedre end en opgradering.',
    p: '/opgradering-til-windows-11/', body: windows11OpgraderingHtml(),
    schema: [articleSchema({ url: `${site.domain}/opgradering-til-windows-11/`, headline: 'Sådan opgraderer du til Windows 11', description: 'Backup først, altid. Trin for trin gennem opgraderingen, og hvornår en ren installation er bedre.', datePublished: '2026-08-06' }), faqSchemaFrom(WINDOWS11_OPGRADERING_FAQ)],
  })]);
  pages.push(['/windows-10-erhverv-migrering/', page({
    title: 'Windows 10-migrering for virksomheder | PCKlinik',
    description: 'ESU køber jer tid, ikke en plan. Sådan kortlægger og migrerer I hele maskinparken sikkert væk fra Windows 10 — inkl. GDPR/NIS2-vinklen.',
    p: '/windows-10-erhverv-migrering/', body: windows10ErhvervHtml(),
    schema: [articleSchema({ url: `${site.domain}/windows-10-erhverv-migrering/`, headline: 'Windows 10-migrering for virksomheder', description: 'ESU køber jer tid, ikke en plan. Sådan kortlægger og migrerer I hele maskinparken sikkert væk fra Windows 10.', datePublished: '2026-08-06' }), faqSchemaFrom(WINDOWS10_ERHVERV_FAQ)],
  })]);
  // Tre B2B-sider — Service+FAQPage (ydelsessider, ikke guides). Reelt
  // forskelligt indhold pr. side (klientfortrolighed / behandlings-oppetid /
  // ét-fast-kontaktpunkt), ikke navneudskiftning. support@ er den bevidste
  // erhvervsundtagelse (site.emailBusiness), Starter/Premium/Exclusive
  // svartider matcher /it-support-til-erhverv/.
  pages.push(['/it-support-advokatkontor/', page({
    title: 'IT-support til advokatkontorer | PCKlinik',
    description: 'IT-support til advokatkontorer i København og på Frederiksberg — sikker mail og fildeling, adgangsstyring, backup og ransomware-beredskab.',
    p: '/it-support-advokatkontor/', body: itSupportAdvokatkontorHtml(),
    schema: [areaServiceSchema({ url: `${site.domain}/it-support-advokatkontor/`, serviceType: 'IT-support til advokatkontorer', areaServed: ['København', 'Frederiksberg'] }), faqSchemaFrom(IT_SUPPORT_ADVOKAT_FAQ)],
  })]);
  pages.push(['/it-support-klinik/', page({
    title: 'IT-support til klinikker | PCKlinik',
    description: 'IT-support til klinikker i København og på Frederiksberg — oppetid i åbningstiden, sikker håndtering af patientdata, testet backup.',
    p: '/it-support-klinik/', body: itSupportKlinikHtml(),
    schema: [areaServiceSchema({ url: `${site.domain}/it-support-klinik/`, serviceType: 'IT-support til klinikker', areaServed: ['København', 'Frederiksberg'] }), faqSchemaFrom(IT_SUPPORT_KLINIK_FAQ)],
  })]);
  pages.push(['/it-support-mindre-virksomheder-frederiksberg/', page({
    title: 'IT-support til mindre virksomheder på Frederiksberg | PCKlinik',
    description: 'IT-support til mindre virksomheder på Frederiksberg uden egen IT-afdeling — én fast kontakt til computere, Microsoft 365, backup og netværk.',
    p: '/it-support-mindre-virksomheder-frederiksberg/', body: itSupportMindreVirksomhederHtml(),
    schema: [areaServiceSchema({ url: `${site.domain}/it-support-mindre-virksomheder-frederiksberg/`, serviceType: 'IT-support til mindre virksomheder', areaServed: ['Frederiksberg', 'København'] }), faqSchemaFrom(IT_SUPPORT_MINDRE_VIRKSOMHEDER_FAQ)],
  })]);
  // Fire fejlspecifikke guides — Article+FAQPage. Reel selvhjælp først,
  // standard lukke-CTA (FAULT_GUIDE_CTA i richPages.js) ordret på alle fire.
  pages.push(['/blaa-skaerm-bsod/', page({
    title: 'Blå skærm (BSOD) — hvad betyder det? | PCKlinik',
    description: 'Blå skærm på din pc? Se hvad en BSOD betyder, hvor du finder stopkoden, de hyppigste årsager, og hvad du selv kan prøve, før du bringer den ind.',
    p: '/blaa-skaerm-bsod/', body: bsodHtml(),
    schema: [articleSchema({ url: `${site.domain}/blaa-skaerm-bsod/`, headline: 'Blå skærm — hvad det betyder, og hvad du kan gøre', description: 'Se hvad en BSOD betyder, hvor du finder stopkoden, og de hyppigste årsager — RAM, drivere, disk, overophedning.', datePublished: '2026-08-06' }), faqSchemaFrom(BSOD_FAQ)],
  })]);
  pages.push(['/grafikkort-fejl-baerbar/', page({
    title: 'Grafikkortfejl på bærbar — årsager & løsning | PCKlinik',
    description: 'Artefakter, striber eller sort skærm på din bærbare? Se forskellen på driver, overophedning og hardwaresvigt, og hvad du selv kan tjekke først.',
    p: '/grafikkort-fejl-baerbar/', body: grafikkortFejlHtml(),
    schema: [articleSchema({ url: `${site.domain}/grafikkort-fejl-baerbar/`, headline: 'Grafikkortfejl på en bærbar — hvad det kan være', description: 'Artefakter, striber eller sort skærm, mens maskinen ellers kører — driver, overophedning eller hardwaresvigt?', datePublished: '2026-08-06' }), faqSchemaFrom(GPU_FEJL_FAQ)],
  })]);
  pages.push(['/macbook-touch-bar-virker-ikke/', page({
    title: 'MacBook Touch Bar virker ikke | PCKlinik',
    description: 'Sort, frosset eller død Touch Bar på din MacBook Pro? Se de mest almindelige årsager, og hvad du selv kan prøve, før du bringer den ind.',
    p: '/macbook-touch-bar-virker-ikke/', body: macbookTouchBarHtml(),
    schema: [articleSchema({ url: `${site.domain}/macbook-touch-bar-virker-ikke/`, headline: 'Touch Bar virker ikke — hvad du kan gøre', description: 'Software-hængning, macOS-fejl, væskeskade eller et defekt flexkabel — hvad der oftest er årsagen, og hvad du selv kan prøve.', datePublished: '2026-08-06' }), faqSchemaFrom(TOUCH_BAR_FAQ)],
  })]);
  pages.push(['/batteriet-holder-ikke/', page({
    title: 'Batteriet holder ikke? Sådan finder du årsagen | PCKlinik',
    description: 'Batteriet i din computer eller Mac holder ikke som før? Se hvordan du selv tjekker batteriets tilstand på Windows og Mac, og hvornår det er en sikkerhedsrisiko.',
    p: '/batteriet-holder-ikke/', body: batterietHolderIkkeHtml(),
    schema: [articleSchema({ url: `${site.domain}/batteriet-holder-ikke/`, headline: 'Batteriet holder ikke længere — hvad du bør vide', description: 'Sådan tjekker du batteriets tilstand på Windows og Mac, og hvornår det er mere end bare almindeligt slid.', datePublished: '2026-08-06' }), faqSchemaFrom(BATTERI_HOLDER_IKKE_FAQ)],
  })]);
  // Garanti (genskabt fra WordPress — /garanti/ rangerer i forvejen)
  pages.push(['/garanti/', page({ title: 'Garanti på reparation | PCKlinik', description: 'PCKlinik giver garanti på både reservedele og udført arbejde. Se hvad garantien dækker, hvor længe den gælder, og hvordan du bruger den.', p: '/garanti/', body: garantiBody(), schema: faqSchemaFrom(GARANTI_FAQ) })]);
  // Åbningstider (genskabt fra WordPress — /aabningstider/ rangerer i forvejen)
  pages.push(['/aabningstider/', page({ title: 'Åbningstider — Falkoner Allé 108, Frederiksberg | PCKlinik', description: 'PCKlinik åbningstider: man–fre 10–18, lør 10–14, søn lukket. Falkoner Allé 108, Frederiksberg. Kom forbi uden tidsbestilling. Ring 91 81 61 81.', p: '/aabningstider/', body: aabningstiderBody(), schema: faqSchemaFrom(AABNING_FAQ) })]);
  // News section
  pages.push(['/nyheder/', page({ title: 'Nyheder & guides | PCKlinik', description: 'Praktiske computer-, Mac- og IT-guides fra PCKlinik på Frederiksberg — klare svar på almindelige spørgsmål, uden jargon.', p: '/nyheder/', body: newsIndexHtml() })]);
  for (const n of news) pages.push([`/nyheder/${n.slug}/`, page({ title: `${n.title} | PCKlinik Nyheder`, description: n.description, p: `/nyheder/${n.slug}/`, body: newsPostHtml(n), schema: newsPostSchema(n) })]);
  // Ask Us a Question
  pages.push(['/stil-et-spoergsmaal/', page({ title: 'Stil os et spørgsmål | PCKlinik', description: 'Har du et spørgsmål om din computer, Mac eller IT? Spørg os direkte — de mest nyttige svar bliver til guides på vores nyhedsside.', p: '/stil-et-spoergsmaal/', body: askQuestionBody() })]);
  // Thank-you pages (form redirect targets)
  pages.push(['/tak/', page({ title: 'Thank You | PCKlinik', description: 'Your message has been sent. We will get back to you as soon as possible.', p: '/tak/', body: thankYouHtml(), noindex: true })]);
  // Location / area pages — each gets its own Service node (serviceType is
  // Mac-reparation for the Mac-specific page, Computerreparation for the
  // rest; areaServed drops the "(NV)" UI suffix from loc.name) alongside
  // the shared FAQPage. #business (frozen block, above) is unaffected.
  for (const loc of locations) {
    const url = `${site.domain}/${loc.slug}/`;
    const svc = areaServiceSchema({
      url,
      serviceType: loc.slug.startsWith('mac-reparation-') ? 'Mac-reparation' : 'Computerreparation',
      // areaServedOverride lets a regional page (e.g. Storkøbenhavn) list the
      // municipalities it covers plus a Place node, instead of the single
      // areaServed string every local "kvarter" page gets by default.
      areaServed: loc.areaServedOverride || loc.name.replace(/\s*\(.*\)$/, ''),
    });
    pages.push([`/${loc.slug}/`, page({ title: loc.title, description: loc.description, p: `/${loc.slug}/`, body: locationBody(loc), schema: [svc, faqSchemaFrom(loc.faq)] })]);
  }
  // 15 task-based service pages. it-support-koebenhavn is the 8th page in
  // the area-page schema rollout (ground-truth doc groups it with the 7
  // locations.js pages above, even though it lives here in services.js) —
  // it gets the same areaServiceSchema() treatment; every other service
  // page keeps its plain FAQPage-only schema.
  for (const s of services) {
    const url = `${site.domain}/${s.slug}/`;
    const schema = s.slug === 'it-support-koebenhavn'
      ? [areaServiceSchema({ url, serviceType: 'IT-support', areaServed: 'København' }), faqSchemaFrom(s.faq)]
      : faqSchemaFrom(s.faq);
    pages.push([`/${s.slug}/`, page({ title: s.title, description: s.description, p: `/${s.slug}/`, body: serviceBody(s), schema })]);
  }

  for (const [p, html] of pages) await writePage(p, html);

  // 404 page — Cloudflare Pages serves this file (with an actual 404 status)
  // for any request that doesn't match a static asset or another route.
  const notFoundHtml = page({ title: 'Siden blev ikke fundet (404) | PCKlinik', description: 'Siden findes ikke. Gå til forsiden, eller find det, du leder efter, i menuen.', p: '/404.html', body: notFoundBody(), noindex: true });
  await fs.writeFile(path.join(DIST, '404.html'), notFoundHtml);

  // sitemap + robots
  const urls = pages.map(([p]) => `  <url><loc>${site.domain}${p}</loc></url>`).join('\n');
  await fs.writeFile(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  // robots.txt
  // The only Disallow is for ?nocache= query strings. The old WordPress site
  // emitted cache-busting homepage URLs like /?nocache=1769857392, and Google
  // has crawled 60+ of them repeatedly. They still return 200 (a static build
  // ignores query strings, so they serve the homepage) and are held out of the
  // index only by the canonical tag -- meaning they never 404 and never decay.
  // Blocking them stops the crawler spending budget re-fetching the homepage
  // under dozens of aliases. The pattern omits the leading '?' on purpose:
  // some of the crawled URLs carry Trustpilot UTM parameters first, so the
  // parameter appears as '&nocache=' rather than '?nocache='.
  //
  // Deliberately NOT blocked: /tag/, /product-category/, /wp-json/,
  // /wp-includes/, /shop/ and other retired WordPress paths. Those already
  // return 404, and a 404 is the cleanest signal for dropping a URL. Blocking
  // them in robots.txt would stop Googlebot ever seeing the 404 and would
  // freeze them in place instead.
  const robots = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /*nocache=',
    '',
    `Sitemap: ${site.domain}/sitemap.xml`,
    '',
  ].join('\n');
  await fs.writeFile(path.join(DIST, 'robots.txt'), robots);

  console.log(`Built ${pages.length} pages -> dist/`);
}
run().catch((e) => { console.error(e); process.exit(1); });
