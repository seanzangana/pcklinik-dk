// ============================================================================
// Zero-dependency static site renderer for pcklinik.dk (Danish; fork of pcklinik.eu codebase).
// Single source of truth for the site (no Astro/view mirror). Renders into ./dist.
// Reads data files (src/data/*.js) and CSS (src/styles/global.css).
//   Run:  node build.mjs
// ============================================================================
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { repairs } from './src/data/repairs.js';
import { site, nav, hreflangMap } from './src/data/site.js';
import { lucide, lucideSm } from './src/data/icons.js';
import { services } from './src/data/services.js';
import { locations } from './src/data/locations.js';
import { news } from './src/data/news.js';
import { macHubHtml, gamingHtml, MAC_HUB_FAQ, GAMING_FAQ, errorMessagesHtml, ERROR_FAQ, computerWontTurnOnHtml, WONT_TURN_ON_FAQ, faqPageHtml, GENERAL_FAQ, networkHubHtml, NETWORK_HUB_FAQ, websitesHubHtml, WEBSITES_HUB_FAQ } from './src/data/richPages.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
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
    <div><img src="/logo.png" alt="PCKlinik" class="logo-foot" width="85" height="34" /><p>Hurtig, ærlig PC- og Mac-reparation til privatpersoner og virksomheder i Frederiksberg og København.</p><p>${site.address}</p></div>
    <div><h2>Reparationer</h2><a href="/lenovo-repair/">Lenovo</a><a href="/hp-repair/">HP</a><a href="/dell-repair/">Dell</a><a href="/macbook-repair/">MacBook</a><a href="/mac-desktop-repair/">Mac (stationær)</a><a href="/microsoft-surface-repair/">Microsoft Surface</a></div>
    <div><h2>Mere</h2><a href="/shop/">Butik</a><a href="/shop/computers/refurbished/">Refurbished computere</a><a href="/business-it-service-agreement/">IT-support til erhverv</a><a href="/about-us/">Mød teamet</a><a href="/faq/">FAQ</a><a href="/nyheder/">Nyheder</a><a href="/ask-a-question/">Stil os et spørgsmål</a><a href="/contact/">Kontakt</a></div>
    <div><h2>Områder vi betjener</h2><a href="/computerreparation-koebenhavn/">København</a><a href="/computerreparation-frederiksberg/">Frederiksberg</a><a href="/computerreparation-vesterbro/">Vesterbro</a><a href="/computerreparation-vanloese/">Vanløse</a><a href="/computerreparation-valby/">Valby</a><a href="/computerreparation-nordvest/">Nordvest</a></div>
    
    <div><h2>Kontakt os</h2><p>📞 <a href="${site.phoneHref}" style="display:inline">${site.phone}</a></p><p>✉️ <a href="mailto:${site.emailConsumer}" style="display:inline">${site.emailConsumer}</a></p><p style="margin-top:14px">Man–fre 10:00–18:00<br />Lør 10:00–14:00<br />Søn lukket</p></div>
  </div><div class="footer-bottom"><div class="footer-nap">PCKlinik · Falkoner Allé 108, 2000 Frederiksberg · 91 81 61 81</div><div>© ${year} PCKlinik · CVR-nr. 33275145 · Frederiksberg</div></div></div></footer>`;
}
const navToggleScript = `<script>
const t=document.getElementById('navtoggle'),n=document.getElementById('mainnav');
t&&t.addEventListener('click',()=>{const o=n.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false');});
document.querySelectorAll('nav.main .dropdown > a').forEach(a=>{a.setAttribute('aria-haspopup','true');a.setAttribute('aria-expanded','false');a.addEventListener('click',e=>{e.preventDefault();const d=a.parentElement;const willOpen=!d.classList.contains('open');document.querySelectorAll('nav.main .dropdown.open').forEach(x=>{if(x!==d){x.classList.remove('open');x.querySelector('a').setAttribute('aria-expanded','false');x.querySelectorAll('.flyout-cat.expanded').forEach(c=>c.classList.remove('expanded'));}});d.classList.toggle('open',willOpen);a.setAttribute('aria-expanded',willOpen?'true':'false');});});
document.querySelectorAll('.flyout-cat-label').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();b.parentElement.classList.toggle('expanded');}));
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

const businessSchema = {
  '@context': 'https://schema.org', '@type': 'ComputerRepairService', name: 'PCKlinik',
  image: site.domain + '/logo.png', url: site.domain + '/', telephone: '+4591816181', email: site.emailConsumer,
  address: { '@type': 'PostalAddress', streetAddress: site.addressStreet, postalCode: site.addressPostal, addressLocality: site.addressLocality, addressCountry: 'DK' },
  areaServed: ['Frederiksberg', 'Copenhagen'],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '10:00', closes: '14:00' },
  ],
};

function page({ title, description, p, body, schema = null, lang = 'da', dir = '', chrome = 'da' }) {
  const canonical = site.domain + p;
  const dk = hreflangMap[p];
  const altHreflang = '';
  const schemas = [businessSchema];
  if (schema) Array.isArray(schema) ? schemas.push(...schema) : schemas.push(schema);
  const ld = schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n  ');
  return `<!DOCTYPE html>
<html lang="${lang}"${dir ? ` dir="${dir}"` : ''}>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}" />
  <link rel="canonical" href="${canonical}" />
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
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" media="print" onload="this.media='all'" />
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" /></noscript>
  <link rel="stylesheet" href="/styles/global.css" />
  ${ld}
</head>
<body>
  ${header(p)}
  <main>
${body}
  </main>
  ${footer()}
  ${navToggleScript}
  ${formsScript}
</body>
</html>`;
}

const mapFrame = `<div class="map-frame"><iframe src="${site.mapsEmbed}" loading="lazy" title="PCKlinik on the map, Falkoner Allé 108" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`;

// ---------- repair pages ----------
function repairBody(r) {
  const svcIcons = ['🖥️', '🔋', '🔧', '🌀'];
  const services = r.services.map((s, i) => `<div class="card"><div class="card-icon">${svcIcons[i % 4]}</div><h3>${esc(s.title)}</h3><p>${s.body}</p></div>`).join('');
  const faq = r.faq.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const cross = r.crosslinks.map((c) => `<a href="${c.href}">${esc(c.label)} →</a>`).join('') + `<a href="/contact/">Kontakt & booking →</a>`;
  const intro = r.intro.map((pp) => `<p>${pp}</p>`).join('');
  // Optional sections — omitted for the catch-all "Other Brands" page.
  const modelsSection = r.models ? `<section class="section alt"><div class="wrap"><div class="eyebrow">Modeller vi reparerer</div><h2>Fuld modeldækning</h2><div class="table-wrap"><table class="models"><thead><tr><th>Serie</th><th>Modeller</th><th>Typisk problem</th></tr></thead><tbody>${r.models.map((m) => `<tr><td>${esc(m.series)}</td><td>${esc(m.models)}</td><td class="issue">${esc(m.issue)}</td></tr>`).join('')}</tbody></table></div></div></section>` : '';
  const photosSection = r.photos ? `<section class="section alt"><div class="wrap"><div class="eyebrow">Fra vores værksted</div><h2>Rigtige ${esc(r.brand)}-reparationer</h2><div class="grid grid-${r.photos.length === 2 ? '2' : '3'}">${r.photos.map((ph) => `<img class="img-placeholder" src="${ph.path}" alt="${esc(ph.alt)}" loading="lazy" width="480" height="360" />`).join('')}</div></div></section>` : '';
  const whySection = r.why ? `<section class="section"><div class="wrap"><div class="eyebrow">Hvorfor PCKlinik</div><h2>${esc(r.whyHeading)}</h2>${r.whyIntro ? `<p class="sub">${r.whyIntro}</p>` : ''}<ul class="why-list">${r.why.map((w) => `<li><strong>${esc(w.title)}</strong>${esc(w.body)}</li>`).join('')}</ul></div></section>` : '';
  const ctaHeading = r.ctaHeading ? esc(r.ctaHeading) : `Klar til at få din ${esc(r.brand)} repareret?`;
  return `  <section class="hero"><div class="wrap">
    <div class="eyebrow">${esc(r.brand)}-reparation · Frederiksberg &amp; København</div>
    <h1>${esc(r.h1)}</h1><p class="lead">${esc(r.h2)}</p>
    <div class="cta-row"><a class="btn btn-white" href="/contact/">${esc(r.ctaPrimary)}</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div>
  </div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>${esc(r.brand)}-reparation</span></div>${intro}</div></section>
  ${modelsSection}
  <section class="section"><div class="wrap"><div class="eyebrow">Hvad vi reparerer</div><h2>${esc(r.brand)}-reparationsservices</h2><div class="grid grid-4">${services}</div></div></section>
  ${photosSection}
  ${whySection}
  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>${esc(r.brand)}-reparation — ofte stillede spørgsmål</h2><div class="faq">${faq}</div></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>${ctaHeading}</h2><p>Gratis fejlsøgning (2–4 dage) eller ekspres for 600 kr. (1–2 timer). Fast pris, før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/contact/">${esc(r.ctaPrimary)}</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relaterede reparationer</p><div class="crosslinks">${cross}</div></div></div></section>`;
}
function repairSchema(r) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: r.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
}

// ---------- home ----------
const HOME_FAQ = [
  ['Reparerer I alle computermærker?', 'Ja, vi reparerer alle større PC- og Mac-mærker samt specialbyggede computere. Kan I ikke se jeres mærke, så se "Andre mærker & specialbyggede".'],
  ['Hvad koster en reparation?', 'Standardfejlsøgning er gratis (2–4 dage), eller ekspres for 600 kr. (1–2 timer). I får altid en fast pris, før vi går i gang, så der er ingen overraskelser.'],
  ['Hvor lang tid tager en reparation?', 'Mange reparationer klares samme dag, især med ekspres fejlsøgning. Mere omfattende reparationer afhænger af, om der skal bestilles reservedele.'],
  ['Tilbyder I service til virksomheder også, ikke kun privatpersoner?', 'Ja — udover reparation tilbyder vi IT-supportaftaler til fast pris, inklusive ubegrænset support, overvågning og sikkerhed. Se vores side om IT-support til erhverv.'],
  ['Hvor ligger I?', 'Falkoner Allé 108, Frederiksberg. Vi betjener Frederiksberg og København direkte, samt resten af Danmark via fjernsupport til IT-supportaftaler.'],
  ['Sælger I også computere, eller kun reparation?', 'Ja — nye og brugte/istandsatte computere samt backup- og sikkerhedsudstyr findes i vores butik.'],
  ['Kan jeg bare møde op, eller skal jeg bestille tid?', 'I kan altid møde op uden bestilling — men det kan reducere ventetiden at booke på forhånd, især ved ekspres fejlsøgning.'],
  ['Tilbyder I en måde at følge status på en igangværende reparation uden at ringe?', 'Kontakt os direkte for en statusopdatering — et opkald eller en e-mail fungerer bedst for et lille, personligt værksted som vores.'],
];
function homeBody() {
  // [name, models, href, icon-key, optional linkText]
  const brands = [
    ['Lenovo', 'ThinkPad, IdeaPad, Legion, Yoga', '/lenovo-repair/', 'laptop'],
    ['Acer', 'Aspire, Swift, Nitro, Predator', '/acer-repair/', 'laptop'],
    ['HP', 'EliteBook, Pavilion, Spectre, Omen', '/hp-repair/', 'laptop'],
    ['Dell', 'XPS, Latitude, Inspiron, Precision', '/dell-repair/', 'laptop'],
    ['Asus', 'ZenBook, Vivobook, ROG, TUF', '/asus-repair/', 'laptop'],
    ['MSI', 'Katana, GF-serien, Stealth, Prestige', '/msi-repair/', 'laptop'],
    ['Huawei', 'MateBook D14, D15, X Pro', '/huawei-repair/', 'laptop'],
    ['MacBook', 'Pro, Air, alle generationer', '/macbook-repair/', 'laptop'],
    ['Microsoft Surface', 'Pro, Laptop, Book', '/microsoft-surface-repair/', 'laptop'],
    ['Samsung', 'Galaxy Book-serien', '/samsung-repair/', 'laptop'],
    ['Mac (stationær)', 'iMac, Mac mini, Mac Studio, Mac Pro', '/mac-desktop-repair/', 'monitor'],
    ['Gaming-pc’er & specialbyggede', 'Reparation, service & bygning fra bunden', '/gaming-pc-repair-and-build/', 'monitor'],
    ['Andre mærker & specialbyggede', 'Gigabyte, Chromebook, specialbyggede pc’er m.m.', '/other-brands-repair/', 'wrench', 'Se andre mærker'],
    ['Netværksudstyr', 'UniFi, Netgear, TP-Link m.m.', '/network-equipment/', 'wifi', 'Se netværksudstyr'],
    ['Toshiba / Dynabook', 'Satellite, Portégé, Tecra', '/toshiba-dynabook-repair/', 'laptop'],
    ['Fujitsu', 'LIFEBOOK — reparation & salg af istandsatte', '/fujitsu-repair/', 'laptop'],
    ['LG gram', 'Reparation af ultralet bærbar', '/lg-gram-repair/', 'laptop'],
    ['Razer Blade', 'Reparation af gaming-bærbar', '/razer-blade-repair/', 'laptop'],
  ];
  const cards = brands.map(([n, m, h, i, lt]) => `<a class="card card-link brand-card" href="${h}"><div class="card-icon brand-icon">${lucide[i]}</div><h3>${esc(n)}</h3><p class="models">${esc(m)}</p><span class="arrow">${esc(lt ? lt : 'Se ' + n + '-reparation')} →</span></a>`).join('');
  const popular = [
    ['SSD-opgradering', 'Hurtigere opstartstid for en ældre pc eller bærbar.', '/ssd-upgrade/'],
    ['Væskeskade-reparation', 'Alle mærker og modeller — pc eller Mac.', '/liquid-damage-repair/'],
    ['Backup & datagenskabelse', 'Beskyt dine filer, eller genskab dem efter en fejl.', '/data-backup-and-recovery/'],
    ['Fjernelse af virus & malware', 'Pc eller Mac, renset og beskyttet.', '/virus-removal/'],
  ].map(([t, d, h]) => `<a class="card card-link" href="${h}"><h3>${esc(t)}</h3><p>${esc(d)}</p><span class="arrow">Læs mere →</span></a>`).join('');
  const faqHtml = HOME_FAQ.map(([q, a]) => `<details><summary>${esc(q)}</summary><div class="answer">${esc(a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Frederiksberg &amp; København</div>
    <h1>Computer- og IT-support — til dig eller din virksomhed</h1>
    <p class="lead">Hurtig, ærlig reparation til privatpersoner. IT-support til fast pris for virksomheder. Vælg din vej nedenfor.</p>
    <div class="grid grid-2 hero-paths">
      <a class="card card-link" href="/contact/"><div class="card-icon">🖥️</div><h3>Til privatpersoner</h3><p>PC- og Mac-reparation — gratis eller ekspres fejlsøgning, fast pris, de fleste reparationer samme dag.</p><span class="arrow">Book en reparation →</span></a>
      <a class="card card-link" href="/business-it-service-agreement/"><div class="card-icon">🏢</div><h3>Til virksomheder</h3><p>IT-supportaftaler til fast pris — ubegrænset support, overvågning og sikkerhed for ét fast månedligt beløb.</p><span class="arrow">Se IT-support til erhverv →</span></a>
    </div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Vores løfte</div><h2>Sådan fungerer det</h2><div class="steps">
    <div class="step"><div class="num">1</div><h3>Fejlsøgning</h3><p>Gratis (2–4 dage), eller ekspres for 600 kr. (1–2 timer).</p></div>
    <div class="step"><div class="num">2</div><h3>Fast pris</h3><p>I får en klar pris, før vi rører ved noget.</p></div>
    <div class="step"><div class="num">3</div><h3>Reparation</h3><p>Vi udfører reparationen med samme omhu som fejlsøgningen.</p></div></div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Hvad vi reparerer</div><h2>Alle større computermærker — PC og Mac</h2>
    <p class="sub">Vi reparerer alle større computermærker — PC og Mac, bærbar og stationær — for privatpersoner og virksomheder i Frederiksberg og København.</p>
    <div class="grid grid-3">${cards}</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Populære services</div><h2>Ud over mærkereparationer</h2>
    <p class="sub">Ud over mærkespecifikke reparationer klarer vi disse ofte efterspurgte opgaver:</p>
    <div class="grid grid-4">${popular}</div>
    <div style="margin-top:24px"><a class="btn btn-outline" href="/faq/">Se alle services &amp; FAQ →</a></div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Hvorfor PCKlinik</div><h2>Derfor vælger du PCKlinik</h2><ul class="why-list">
    <li><strong>Rigtig ekspertise</strong>Et erfarent team, ikke et callcenter — du får altid et lige svar fra en, der ved, hvad han taler om.</li>
    <li><strong>Fast pris før vi starter</strong>Ingen overraskelser, nogensinde.</li>
    <li><strong>Erfaring på tværs af mærker</strong>Solid erfaring med alle større mærker og modeller, PC og Mac.</li>
    <li><strong>Hurtig ekspedition</strong>De fleste reparationer klares samme dag.</li>
    <li><strong>Vi taler dansk</strong>Naturligvis — men også engelsk, hvis det er nemmere for jer.</li></ul></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Vil du hellere købe?</h2><p>Nye og istandsatte computere samt backup- og sikkerhedsudstyr — alt testet og klar til brug.</p><div class="cta-row"><a class="btn btn-white" href="/shop/">Besøg butikken →</a></div></div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Find os</div><h2>Find os i Frederiksberg</h2>
    <p class="sub">Vi er et rigtigt værksted — ikke bare en hjemmeside. Kig forbi, ring eller skriv, så kigger vi på det.</p>
    <div class="info-block"><div class="nap">
      <p><strong>Adresse</strong><br />${site.address}</p>
      <p><strong>Telefon</strong><br /><a href="${site.phoneHref}">${site.phone}</a></p>
      <p><strong>E-mail</strong><br /><a href="mailto:${site.emailConsumer}">${site.emailConsumer}</a></p>
      <p><strong>Åbningstider</strong><br />Man–fre 10:00–18:00 · Lør 10:00–14:00 · Søn lukket</p>
      <a class="btn btn-primary" href="/contact/" style="margin-top:8px">Book en reparation</a>
    </div>${mapFrame}</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>`;
}

// ---------- contact ----------
function contactBody() {
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Kom i kontakt</div><h1>Kontakt os</h1>
    <p class="lead">Vi er klar til at hjælpe med din computer. Har du et spørgsmål om en reparation, eller vil du booke en tid? Ring, skriv, eller kig forbi værkstedet på Falkoner Allé — vi svarer hurtigt.</p><div class="badges"><span class="badge check">Fremmøde uden bestilling</span><span class="badge check">Afhentning og levering muligt</span></div></div></section>
  <section class="section"><div class="wrap"><div class="info-block">
    <div class="nap"><div class="eyebrow">Kontaktoplysninger</div>
      <p><strong>Telefon</strong><br /><a href="${site.phoneHref}">${site.phone}</a></p>
      <p><strong>E-mail</strong><br /><a href="mailto:${site.emailConsumer}">${site.emailConsumer}</a></p>
      <p><strong>Adresse</strong><br />${site.address}</p>
      <p><strong>Åbningstider</strong><br />Man–fre 10:00–18:00 · Lør 10:00–14:00 · Søn lukket</p></div>
    <div class="form-card">
      ${formOpen(site.emailConsumer, 'Ny henvendelse via kontaktformular — pcklinik.dk', '/thank-you/')}
        <div class="form-row"><div><label for="name">Navn</label><input id="name" name="name" type="text" autocomplete="name" required /></div></div>
        <div class="form-row"><div><label for="contact">Telefon eller e-mail</label><input id="contact" name="contact" type="text" autocomplete="email" required /></div></div>
        <div class="form-row"><div><label for="model">Mærke / model <span style="font-weight:400;color:var(--muted)">(valgfrit — hjælper os med at forberede)</span></label><input id="model" name="model" type="text" placeholder="fx Lenovo ThinkPad T14" /></div></div>
        <div class="form-row"><div><label for="message">Besked / beskrivelse af problemet</label><textarea id="message" name="message" required></textarea></div></div>
        <button class="btn btn-primary" type="submit">Send besked</button>
      </form></div></div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Godt at vide</div><h2>Ofte stillede spørgsmål</h2><div class="faq"><details><summary>Skal jeg bestille tid?</summary><div class="answer">Nej — du kan møde op uden bestilling. Du er velkommen til at kigge forbi i åbningstiden.</div></details><details><summary>Kan I hente og levere min computer?</summary><div class="answer">Ja, afhentning og levering er muligt — kontakt os for detaljer ud fra jeres placering.</div></details><details><summary>Kan jeg bede om et bestemt tidspunkt?</summary><div class="answer">Da vi er et lille, personligt værksted, så ring gerne i forvejen, så finder vi en løsning, hvor det er muligt.</div></details><details><summary>Er værkstedet kørestolsvenligt?</summary><div class="answer">Kontakt os direkte, hvis du har særlige behov for tilgængelighed, så sørger vi for, at dit besøg fungerer.</div></details></div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Find os</div><h2>Falkoner Allé 108, Frederiksberg</h2>${mapFrame}</div></section>`;
}

// ---------- business IT ----------
function businessBody() {
  const features = [
    ['🛠️', 'Unlimited IT support', 'Help for your employees by phone, email and remote support — and on-site in Copenhagen when needed. Fixed price, no hourly billing.'],
    ['📡', 'Monitoring & operations', 'We watch your computers and servers around the clock and catch problems before they become outages.'],
    ['💾', 'Backup & recovery', 'Real backup of your data and Microsoft 365 — not just cloud storage. If something happens to a machine, we restore everything onto a new one.'],
    ['🛡️', 'IT security', 'Professional endpoint protection and antivirus — protection against viruses, ransomware, phishing and email threats, plus ongoing monitoring.'],
    ['📧', 'Microsoft 365', 'Setup and management of Microsoft 365, Teams, SharePoint and email — new employees are onboarded quickly and securely.'],
    ['📋', 'Advisory & NIS2', 'Practical IT advice so you make the right choices — and stay ready for requirements like GDPR and NIS2.'],
    ['🖥️', 'New IT equipment', 'We sell and set up new computers, Macs, monitors and other equipment — ready to use from day one.'],
    ['♻️', 'Refurbished equipment', 'Professionally restored computers and devices with up to 3 years warranty — cheaper and greener. Extended warranty available.'],
    ['🔒', 'Secure disposal', 'We take back your old equipment, securely erase all data, and dispose of it responsibly — fully GDPR-compliant.'],
  ];
  const tiers = [
    ['Starter', 'Unlimited remote support and proactive maintenance for smaller businesses.', '399', false,
      [['yes', 'Unlimited remote support (phone & email)'], ['yes', 'Response within 1 business day'], ['yes', 'Patch management & updates'], ['yes', 'RMM device monitoring'], ['yes', 'Monthly status report'], ['no', 'Antivirus & endpoint protection'], ['no', 'Backup monitoring']]],
    ['Premium', 'Everything your business needs: unlimited support and complete IT security.', '599', true,
      [['yes', 'Everything in Starter'], ['yes', 'Response within 4 hours'], ['yes', 'Antivirus & endpoint protection'], ['yes', '24/7 monitoring'], ['yes', 'Backup monitoring'], ['yes', 'Microsoft 365 administration'], ['yes', 'MFA & access management']]],
    ['Exclusive', 'Complete IT support, security and Microsoft 365 licensing — all in one package.', '899', false,
      [['yes', 'Everything in Premium'], ['yes', 'Microsoft 365 license included'], ['yes', 'Outlook, Teams & OneDrive'], ['yes', 'Exchange Online (business email)'], ['yes', 'Setup & migration included'], ['yes', 'Ongoing license management'], ['yes', 'GDPR-ready cloud solution']]],
  ];
  const faq = FAQ_BUSINESS;
  const feat = features.map(([i, t, b]) => `<div class="card"><div class="card-icon">${i}</div><h3>${esc(t)}</h3><p>${esc(b)}</p></div>`).join('');
  const price = tiers.map(([name, blurb, p, feat2, items]) => {
    const li = items.map(([k, l]) => `<li class="${k}">${esc(l)}</li>`).join('');
    const signup = `mailto:${site.emailBusiness}?subject=${encodeURIComponent('Sign up: ' + name + ' plan')}`;
    return `<div class="price-card${feat2 ? ' featured' : ''}">${feat2 ? '<span class="ribbon">⭐ Recommended</span>' : ''}<div class="tag">${esc(name)}</div><h3>${esc(name)}</h3><p class="blurb">${esc(blurb)}</p><div class="price">${p} kr. <small>/ user / month</small></div><div class="vat">excl. VAT</div><ul>${li}</ul><a class="btn ${feat2 ? 'btn-primary' : 'btn-outline'}" href="${signup}">Choose ${esc(name)}</a><div class="fine">No commitment • Start today</div></div>`;
  }).join('');
  const faqHtml = faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><div class="answer">${esc(a)}</div></details>`).join('');
  const reviewMail = `mailto:${site.emailBusiness}?subject=Free%20IT%20review`;
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Business · IT Service Agreement</div>
    <h1>Business IT Service Agreement — your IT department on subscription</h1>
    <p class="lead">Fixed-price IT support for businesses in Copenhagen and Frederiksberg. Unlimited support, proactive monitoring and IT security for one predictable monthly price. We're based on Falkoner Allé in Frederiksberg, travel across Copenhagen and help the rest of the country via remote support.</p>
    <div class="badges"><span class="badge check">Fixed packages from 399 kr./user/mo.</span><span class="badge check">Unlimited support — no hourly rates</span><span class="badge check">Same-day response</span><span class="badge check">Local IT partner in Frederiksberg</span></div>
    <div class="cta-row"><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Call ${site.phone}</a><a class="btn btn-white" href="#enquiry">Book a free IT review</a><a class="hero-text-link" href="#pricing">See pricing →</a></div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">What is an IT service agreement?</div><h2>One fixed agreement — and your IT just runs</h2>
    <p class="sub">A business IT service agreement means PCKlinik looks after your IT so you can focus on your business. You get a dedicated IT manager who knows your setup, keeps an eye on your systems and steps in whenever something goes wrong — with no unexpected bills. Instead of calling around for help, you have one partner who keeps everything under control.</p>
    <div class="grid grid-3">${feat}</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Why PCKlinik</div><h2>A real local IT partner — not a call center</h2><ul class="why-list">
    <li><strong>Predictable IT costs</strong>Fixed monthly price, no hourly rates or billing surprises.</li>
    <li><strong>A dedicated contact</strong>You get one named IT manager who knows your business, backed by a full team when you need more hands.</li>
    <li><strong>Fast help</strong>Most cases are resolved the same day via remote support.</li>
    <li><strong>Local and nationwide</strong>On-site in Copenhagen and the surrounding area, remote support across the country.</li></ul></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">How to get started</div><h2>Three simple steps</h2><div class="steps">
    <div class="step"><div class="num">1</div><h3>Free IT review</h3><p>We map out your current IT setup, identify security gaps and savings opportunities — completely no-obligation.</p></div>
    <div class="step"><div class="num">2</div><h3>A clear plan</h3><p>You get a concrete recommendation and a service agreement that fits your size and needs. You set the pace.</p></div>
    <div class="step"><div class="num">3</div><h3>We run your IT</h3><p>We set it up and maintain it going forward — support, monitoring and security included.</p></div></div></div></section>
  <section class="section" id="pricing"><div class="wrap"><div class="eyebrow">Pricing & Packages</div><h2>Transparent pricing — no surprises</h2>
    <p class="sub">Choose the package that fits your business. Fixed price per user, excl. VAT — no commitment.</p>
    <div class="pricing-grid">${price}</div>
    <p class="center" style="margin-top:28px;color:var(--muted)">Not sure what you need? <a href="${site.phoneHref}">Call ${site.phone}</a> for a no-obligation IT review.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Find us in Frederiksberg</div><h2>A physical IT shop and workshop — not just a website</h2>
    <p class="sub">Stop by, call, or write, and we'll find the right agreement for you.</p>
    <div class="info-block"><div class="nap"><p><strong>Address</strong><br />${site.address}</p><p><strong>Phone</strong><br /><a href="${site.phoneHref}">${site.phone}</a></p><p><strong>Email</strong><br /><a href="mailto:${site.emailBusiness}">${site.emailBusiness}</a></p></div>${mapFrame}</div></div></section>
  <section class="section alt" id="enquiry"><div class="wrap"><div class="eyebrow">Get in touch</div><h2>Book a free IT review</h2>
    <p class="sub">Tell us a bit about your business and we'll get back to you — no obligation.</p>
    <div class="form-card" style="max-width:640px">
      ${formOpen(site.emailBusiness, 'Ny henvendelse om IT-support til erhverv — pcklinik.dk', '/thank-you/')}
        <div class="form-row"><div><label for="biz-name">Name</label><input id="biz-name" name="name" type="text" autocomplete="name" required /></div></div>
        <div class="form-row"><div><label for="biz-company">Company <span style="font-weight:400;color:var(--muted)">(optional)</span></label><input id="biz-company" name="company" type="text" autocomplete="organization" /></div></div>
        <div class="form-row"><div><label for="biz-email">Email</label><input id="biz-email" name="email" type="email" autocomplete="email" required /></div></div>
        <div class="form-row"><div><label for="biz-phone">Phone <span style="font-weight:400;color:var(--muted)">(optional)</span></label><input id="biz-phone" name="phone" type="tel" autocomplete="tel" /></div></div>
        <div class="form-row"><div><label for="biz-users">Number of users <span style="font-weight:400;color:var(--muted)">(optional)</span></label><input id="biz-users" name="users" type="text" placeholder="e.g. 8" /></div></div>
        <div class="form-row"><div><label for="biz-message">What do you need help with?</label><textarea id="biz-message" name="message" required></textarea></div></div>
        <button class="btn btn-primary" type="submit">Request a free IT review</button>
      </form>
    </div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Business IT support — common questions</h2><div class="faq">${faqHtml}</div></div></section>`;
}
function businessSchemaFaq() {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_BUSINESS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
}
const FAQ_BUSINESS = [
  ["Can embassies or diplomatic missions request VAT-exempt invoicing?", "Contact us directly to discuss your specific administrative and invoicing requirements — we're happy to work within your organization's procurement process."],
  ["Do you offer onboarding for a large number of employees at once?", "Yes — bulk setup (multiple new starters, or migrating a whole team's equipment) is something we handle as part of a service agreement."],
  ["Can you work with our existing IT documentation or asset inventory system?", "Yes — contact us about your specific systems and we'll adapt to fit into your existing processes rather than requiring you to change them."],
  ['What does an IT service agreement cost?', 'We have three packages: Starter from 399 kr., Premium 599 kr., and Exclusive 899 kr. per user per month (excl. VAT). You pay a fixed monthly price, so you always know the cost upfront. Not sure which package fits? Book a review.'],
  ['Are there any hidden fees?', 'No — never. You pay one fixed monthly price per user, and that’s it. No setup fee, no hourly rate for support requests, and no surprises on the invoice.'],
  ['What’s your response time?', 'We guarantee a response within 4 hours during normal business hours (Mon–Fri 10:00–17:00). Most requests are resolved the same day — many within the first hour.'],
  ['Can I cancel my subscription at any time?', 'Monthly subscriptions can be cancelled with one month’s notice. Annual subscriptions run until the end of the period. No commitment beyond that.'],
  ['What does "unlimited support" cover?', 'Everything related to your daily IT: computer and software issues, network problems, printers, email, Microsoft 365, viruses and security. Does not cover hardware replacement or custom development — we agree on those separately.'],
  ['Does this work for businesses of any size?', 'Yes. We help sole proprietors, offices with 2–3 employees, and businesses with 50+ users. The price is per user, so you pay exactly for what you need.'],
  ['Do I need to install anything?', 'We install a small remote-access tool (TeamViewer or similar) so we can help you quickly without you needing to come to us. Setup typically takes under 15 minutes and we handle it for you.'],
  ['Do you help with printers and network printers?', 'Yes. We set up, configure and troubleshoot all types of printers — local, network and cloud printers. We also help with driver updates and integration with your existing network.'],
  ['Do you offer backup solutions?', 'Yes. We set up automatic backup — both local and cloud — so your data is always protected. We test the backup regularly and help with recovery if something goes wrong.'],
  ['What about antivirus software and IT security?', 'We install and manage antivirus and endpoint security on all your devices. The Premium package includes ongoing security monitoring, so you’re protected against viruses, ransomware and phishing.'],
  ['Can you help with our network and WiFi?', 'Yes. We set up and optimize networks, routers and WiFi — including guest networks, firewalls and VPN. Slow internet or poor coverage? We’ll find the solution.'],
  ['Do you sell computers and equipment?', 'Yes. We sell both new and used/refurbished equipment — computers, laptops, monitors, printers for business, and accessories. Refurbished equipment is professionally inspected and comes with a warranty. We help you find the right equipment for your needs and budget, and set it up ready to use.'],
  ['What’s the difference between a service agreement and hourly billing?', 'With a service agreement, you pay a fixed monthly price and get unlimited support — without thinking about what each call costs. With hourly billing, you pay per task, which makes costs unpredictable and often more expensive. An agreement also means we work proactively, so fewer problems arise in the first place.'],
  ['Can you take over from our current IT provider?', 'Yes. We manage a smooth transition, gather the necessary information, and take over operations without you experiencing downtime. You don’t need to coordinate it yourself.'],
  ['How quickly can we get started?', 'Usually within a few days. We start with a review, set up remote access (under 15 minutes), and run your agreement from there.'],
  ['Do you help with NIS2 and GDPR?', 'Yes. We advise on both GDPR and the new NIS2 directive, and help with backup, access management, security and documentation, so you meet the requirements.'],
  ['Do you support employees working from home?', 'Yes. Our support isn’t dependent on where employees are located. We help via remote support, whether they’re at the office or at home, and ensure a stable connection to company systems.'],
  ['What happens during an IT outage?', 'You contact us, and we get started immediately. With our monitoring, we often catch the problem before you even notice it. Our goal is to get you back up and running as fast as possible and keep downtime to a minimum.'],
  ['Do you help businesses across the whole country?', 'Yes. Remote support covers all of Denmark. We offer on-site service in Copenhagen and Frederiksberg, where we’re based.'],
];

// ---------- shop ----------
function productCard({ img, alt, title, desc, price, stripe = '#stripe-link-placeholder' }) {
  return `<div class="card product-card"><img class="img-placeholder" src="${img}" alt="${esc(alt)}" loading="lazy" width="480" height="360" /><h3>${esc(title)}</h3><p class="desc">${esc(desc)}</p><div class="price-tag">${esc(price)}</div><a class="btn btn-primary" href="${stripe}">Buy Now →</a></div>`;
}
function shopFaq(heading, items) {
  const d = items.map(([q, a]) => `<details><summary>${esc(q)}</summary><div class="answer">${esc(a)}</div></details>`).join('');
  return `\n  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>${esc(heading)}</h2><div class="faq">${d}</div></div></section>`;
}
function shopHub() {
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Shop</div><h1>Shop</h1><p class="lead">Computers, backup and security — hand-picked and tested by us.</p></div></section>
  <section class="section"><div class="wrap"><div class="trust-line" style="margin-bottom:36px">All products are personally selected and tested by us before sale. Questions before you buy? Call <a href="${site.phoneHref}">${site.phone}</a>.</div>
    <div class="grid grid-2">
      <a class="card card-link" href="/shop/computers/"><div class="card-icon">🖥️</div><h3>Computers</h3><p>New and refurbished computers — tested and ready to use.</p><span class="arrow">Browse computers →</span></a>
      <a class="card card-link" href="/shop/backup-security/"><div class="card-icon">🛡️</div><h3>Backup & Security</h3><p>External hard drives, NAS solutions and security software we personally recommend.</p><span class="arrow">Browse backup & security →</span></a>
    </div></div></section>`+shopFaq("Shop — common questions", [["Can I request a specific product not currently listed?","Yes, contact us and we'll see what we can source."],["Do you offer bundled deals (e.g. computer + backup drive)?","Ask us directly — bundling can sometimes be arranged."],["Can I trade in an old device toward a new or refurbished purchase?","Contact us to discuss — this can sometimes be arranged depending on the device and its condition."]]);
}
function shopComputers() {
  return `  <section class="hero"><div class="wrap"><div class="eyebrow"><a href="/shop/" style="color:#A9C1F0">Shop</a> · Computers</div><h1>Computers</h1><p class="lead">Choose between new and refurbished computers.</p></div></section>
  <section class="section"><div class="wrap"><div class="crumbs"><a href="/shop/">Shop</a> › <span>Computers</span></div>
    <p class="sub">Whether you want a brand-new machine or a well-maintained, tested computer at a lower price, we have both. Every computer is prepared and tested by us before it's sold.</p>
    <div class="grid grid-2">
      <a class="card card-link" href="/shop/computers/new/"><div class="card-icon">✨</div><h3>New Computers</h3><p>New computers from reliable brands, ready for pickup or delivery.</p><span class="arrow">View new computers →</span></a>
      <a class="card card-link" href="/shop/computers/refurbished/"><div class="card-icon">♻️</div><h3>Refurbished Computers</h3><p>Thoroughly tested and refurbished computers — great performance at a lower price, with warranty.</p><span class="arrow">View refurbished computers →</span></a>
    </div></div></section>`+shopFaq("Computers — common questions", [["Which is better for most people — new or refurbished?","Depends on budget and needs; refurbished offers better value for standard use, new suits those wanting the latest specs and full warranty."]]);
}
function shopNew() {
  const products = [{ img: '/images/shop/thinkpad-t14-new.jpg', alt: 'Lenovo ThinkPad T14 — new', title: 'Lenovo ThinkPad T14 — New', desc: 'Brand new and sealed, direct from supplier. Perfect for office work and everyday use.', price: '6,999 kr.' }];
  return `  <section class="hero"><div class="wrap"><div class="eyebrow"><a href="/shop/computers/" style="color:#A9C1F0">Computers</a> · New</div><h1>New Computers</h1><p class="lead">Ready for pickup or delivery.</p></div></section>
  <section class="section"><div class="wrap"><div class="crumbs"><a href="/shop/">Shop</a> › <a href="/shop/computers/">Computers</a> › <span>New</span></div>
    <p class="sub">New computers from reliable brands. We help you find the right equipment for your needs and budget, and set it up ready to use.</p>
    <div class="placeholder-note">⚙️ Placeholder product below. Add your real new-computer inventory (title, description, price, photo at <code>/images/shop/…</code>, and a Stripe Payment Link — separate from the Danish site).</div>
    <div class="grid grid-3" style="margin-top:24px">${products.map(productCard).join('')}</div></div></section>`+shopFaq("New computers — common questions", [["Can I customize the specs of a new computer before purchase?","Contact us about your requirements — we can often source configurations beyond what's listed."]]);
}
function shopRefurb() {
  const products = [
    { img: '/images/shop/thinkpad-t14-refurbished.jpg', alt: 'Lenovo ThinkPad T14 — refurbished', title: 'Lenovo ThinkPad T14 — Refurbished', desc: 'Thoroughly tested and cleaned by us, with a new battery if needed. Perfect for office work and everyday use. 6-month warranty.', price: '1,999 kr.' },
    { img: '/images/shop/macbook-air-refurbished.jpg', alt: 'MacBook Air M1 — refurbished', title: 'MacBook Air M1 — Refurbished', desc: 'Apple Silicon performance at a lower price. Tested, cleaned and battery-checked. 6-month warranty.', price: '4,499 kr.' },
    { img: '/images/shop/dell-latitude-refurbished.jpg', alt: 'Dell Latitude 7440 — refurbished', title: 'Dell Latitude 7440 — Refurbished', desc: 'Business-grade laptop, professionally refurbished and ready for work. 6-month warranty.', price: '2,799 kr.' },
  ];
  return `  <section class="hero"><div class="wrap"><div class="eyebrow"><a href="/shop/computers/" style="color:#A9C1F0">Computers</a> · Refurbished</div><h1>Refurbished Computers</h1><p class="lead">Tested, cleaned and ready to use — with warranty.</p></div></section>
  <section class="section"><div class="wrap"><div class="crumbs"><a href="/shop/">Shop</a> › <a href="/shop/computers/">Computers</a> › <span>Refurbished</span></div>
    <p class="sub">Thoroughly tested and refurbished computers — great performance at a lower price, with the same service guarantee as our repairs. Tested by the same person who repairs computers in the shop.</p>
    <div class="trust-line" style="margin:20px 0 8px"><strong>What "refurbished" means here:</strong> every machine is tested, cleaned, and fitted with a new battery if needed — then backed by a 6-month warranty. It's the same technician who repairs and refurbishes, so it's held to the same standard as our repair work.</div>
    <div class="placeholder-note">⚙️ Example products below. Refurbished stock changes often — update this page's cards, prices, photos and Stripe links as inventory changes.</div>
    <div class="grid grid-3" style="margin-top:24px">${products.map(productCard).join('')}</div></div></section>`+shopFaq("Refurbished computers — common questions", [["Do refurbished computers come with a licensed operating system?","Yes, all refurbished units include a valid, licensed OS installation."],["What happens to the old parts or devices you replace during refurbishment?","Where possible, working components are reused or recycled responsibly; anything non-functional is disposed of through proper e-waste channels rather than landfill."]]);
}
function shopBackup() {
  const products = [
    { img: '/images/shop/external-hdd-2tb.jpg', alt: 'External hard drive 2TB', title: 'External Hard Drive 2TB — For Automatic Backup', desc: "The drive we personally recommend to customers who want to secure their files. We're happy to help with setup if purchased from us.", price: '599 kr.' },
    { img: '/images/shop/nas-2bay.jpg', alt: '2-bay NAS solution', title: 'NAS 2-Bay — Home & Office Backup', desc: 'A network drive for automatic, redundant backup across all your devices. Setup help included if bought from us.', price: '2,199 kr.' },
    { img: '/images/shop/security-software.jpg', alt: 'Security software licence', title: 'Security Software — 1-Year Licence', desc: 'The endpoint protection we use and recommend — antivirus, ransomware and phishing protection for one computer.', price: '349 kr.' },
  ];
  return `  <section class="hero"><div class="wrap"><div class="eyebrow"><a href="/shop/" style="color:#A9C1F0">Shop</a> · Backup & Security</div><h1>Backup & Security</h1><p class="lead">Equipment and software we personally recommend and use.</p></div></section>
  <section class="section"><div class="wrap"><div class="crumbs"><a href="/shop/">Shop</a> › <span>Backup & Security</span></div>
    <p class="sub">External hard drives, NAS solutions and security software we personally recommend and use. We're happy to help with setup if purchased from us.</p>
    <div class="placeholder-note">⚙️ Example products below. Replace with the exact items you stock, real prices, photos, and Stripe Payment Links (separate from the Danish site).</div>
    <div class="grid grid-3" style="margin-top:24px">${products.map(productCard).join('')}</div></div></section>`+shopFaq("Backup & security — common questions", [["Do you offer cloud backup, or only physical drives?","Both — contact us about your specific needs and budget."]]);
}

// ---------- About / Team ----------
const TEAM = [
  ['Shan — Founder', '/images/team/shan.jpg', '20+ years of experience across Mac, PC, servers, and networks. Oversees the workshop and handles the most technically demanding repairs and business IT setups personally.'],
  ['On-Site Technician', '/images/team/on-site-technician-1.jpg', 'Handles home and office visits across Frederiksberg and Copenhagen — network setups, on-location troubleshooting, and hands-on work outside the workshop.'],
  ['On-Site Technician', '/images/team/on-site-technician-2.jpg', 'Handles home and office visits across Frederiksberg and Copenhagen — network setups, on-location troubleshooting, and hands-on work outside the workshop.'],
  ['Mac Specialist', '/images/team/mac-specialist.jpg', "Independent, not Apple-authorized — which means more flexibility: component-level repairs authorized shops often can't perform, and honest advice about repair vs. replace without pressure toward pricier official channels."],
  ['Website & SEO Specialist', '/images/team/seo-specialist.jpg', "15 years of experience, responsible for the technical and search side of PCKlinik's own web presence, as well as the Websites & SEO services we offer to clients."],
  ['Team Member', '/images/team/team-member-6.jpg', 'Rounds out the team for day-to-day repairs and customer support.'],
  ['Team Member', '/images/team/team-member-7.jpg', 'Rounds out the team for day-to-day repairs and customer support.'],
];
function aboutBody() {
  const cards = TEAM.map(([name, img, bio]) => `<div class="card"><img class="img-placeholder" src="${img}" alt="${esc(name)}" loading="lazy" width="480" height="360" /><h3>${esc(name)}</h3><p>${esc(bio)}</p></div>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">About PCKlinik</div><h1>Meet the Team</h1>
    <p class="lead">Real people, real experience — not a call center. PCKlinik is a team of 7, based in our workshop on Falkoner All&eacute; in Frederiksberg. Between us, we cover PC and Mac repair, networks and servers, on-site support, and website/SEO work — so whatever you need, there's someone on the team who genuinely knows it well.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">The team</div><h2>Seven people, one workshop</h2>
    <div class="grid grid-3" style="margin-top:24px">${cards}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Why this matters for you</div><h2>A bigger team — same straight answers</h2>
    <p class="sub">A bigger team means faster turnaround and more specialized expertise — but we still work the same way we always have: you get a straight answer from someone who actually knows what they're talking about, not a ticket number in a queue.</p>
    <div class="cta-row"><a class="btn btn-primary" href="/contact/">Contact us</a><a class="btn btn-outline" href="/business-it-service-agreement/">Business IT Support →</a></div></div></section>`;
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
    <p class="sub" style="margin-top:32px">Har du et spørgsmål, du ikke finder svar på her? <a href="/ask-a-question/">Spørg os direkte</a> — de mest nyttige bliver til guides på denne side.</p></div></section>`;
}
function newsPostHtml(n) {
  const idx = news.findIndex((x) => x.slug === n.slug);
  const others = news.filter((_, i) => i !== idx).slice(0, 2)
    .map((o) => `<a href="/nyheder/${o.slug}/">${esc(o.title)} →</a>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="crumbs"><a href="/nyheder/">Nyheder</a> › <span>${esc(n.category)}</span></div>
    <h1>${esc(n.title)}</h1><p class="lead">${esc(fmtDate(n.date))}</p></div></section>
  <section class="section"><div class="wrap"><div class="lead-copy" style="max-width:760px">${n.body}</div>
    ${others ? `<div style="margin-top:40px"><p class="eyebrow">Mere fra Nyheder</p><div class="crosslinks">${others}</div></div>` : ''}</div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Brug for hjælp med dette?</h2><p>Gratis fejlsøgning (2–4 dage) eller ekspres for 600 kr. (1–2 timer). Fast pris, før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/contact/">Kontakt os</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></div></section>`;
}
function newsPostSchema(n) {
  return { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: n.title, datePublished: n.date, dateModified: n.date, description: n.description, author: { '@type': 'Organization', name: 'PCKlinik' }, publisher: { '@type': 'Organization', name: 'PCKlinik' }, mainEntityOfPage: `${site.domain}/nyheder/${n.slug}/` };
}

// ---------- Ask Us a Question ----------
function askQuestionBody() {
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Stil os et spørgsmål</div><h1>Stil os et spørgsmål</h1>
    <p class="lead">Rigtige spørgsmål fra rigtige mennesker — nogle ender med at hjælpe andre. Er du i tvivl om, hvorvidt noget er værd at reparere, nysgerrig på et konkret problem, eller vil du bare have et hurtigt svar, før du beslutter dig? Spørg os direkte. Vi læser hvert spørgsmål — de mest nyttige bliver til et ordentligt svar på vores <a href="/nyheder/" style="color:#A9C1F0">nyhedsside</a>, så dit spørgsmål kan ende med at hjælpe en anden med samme problem.</p></div></section>
  <section class="section"><div class="wrap"><div class="form-card" style="max-width:640px">
      ${formOpen(site.emailConsumer, 'Nyt spørgsmål — pcklinik.dk Spørg os', '/thank-you/')}
        <div class="form-row"><div><label for="aq-name">Navn <span style="font-weight:400;color:var(--muted)">(valgfrit)</span></label><input id="aq-name" name="name" type="text" autocomplete="name" /></div></div>
        <div class="form-row"><div><label for="aq-email">E-mail <span style="font-weight:400;color:var(--muted)">(valgfrit — kun nødvendigt, hvis du ønsker et personligt svar)</span></label><input id="aq-email" name="email" type="email" autocomplete="email" /></div></div>
        <div class="form-row"><div><label for="aq-device">Enhed / mærke <span style="font-weight:400;color:var(--muted)">(valgfrit — hjælper os med at svare mere præcist)</span></label><input id="aq-device" name="device" type="text" placeholder="fx MacBook Air M2" /></div></div>
        <div class="form-row"><div><label for="aq-question">Dit spørgsmål</label><textarea id="aq-question" name="question" required></textarea></div></div>
        <div class="form-row"><label style="display:flex;gap:10px;align-items:flex-start;font-weight:400;color:var(--muted);font-size:14.5px"><input type="checkbox" name="feature_ok" value="yes" style="width:auto;margin-top:3px" /> Det er okay at vise dette spørgsmål (anonymt) på jeres nyhedsside.</label></div>
        <button class="btn btn-primary" type="submit">Send spørgsmål</button>
      </form>
      <p class="sub" style="margin-top:20px;font-size:14.5px">Privat som standard. Vi offentliggør aldrig noget, medmindre du sætter kryds ovenfor — og selv da anonymiserer vi det (for eksempel: "en kunde spurgte for nylig…"). Dit navn og din e-mail bliver aldrig offentliggjort.</p>
    </div></div></section>`;
}

// ---------- task-based service pages ----------
function serviceBody(s) {
  const intro = s.intro.map((p) => `<p>${p}</p>`).join('');
  const included = s.whatsIncluded ? `<div class="trust-line" style="margin:6px 0 20px"><strong>What's included:</strong> ${esc(s.whatsIncluded)}</div>` : '';
  const bullets = (s.bulletSections || []).map((b) => `<section class="section"><div class="wrap"><div class="eyebrow">${esc(b.heading)}</div><ul class="check-list">${b.items.map((it) => `<li>${esc(it)}</li>`).join('')}</ul></div></section>`).join('');
  const callout = s.callout ? `<section class="section"><div class="wrap"><div class="callout"><strong>${esc(s.callout.label)}:</strong> ${esc(s.callout.text)}</div></div></section>` : '';
  const pricing = s.pricing
    ? `<section class="section alt"><div class="wrap"><div class="eyebrow">Pricing</div><h2>${esc(s.pricing.h2)}</h2><p class="sub">${esc(s.pricing.text)}</p></div></section>`
    : `<section class="section alt"><div class="wrap"><div class="eyebrow">Diagnostics &amp; pricing</div><h2>Free or express — your choice</h2><p class="sub">Standard diagnostics are free (2–4 days), or express for 600 kr (1–2 hours) — with repair and delivery within 24 hours if no special parts need ordering. You get a fixed quote before we start, always.</p></div></section>`;
  const cta = esc(s.ctaLabel || 'Book diagnostics');
  const faq = s.faq.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const cross = s.crosslinks.map((c) => `<a href="${c.href}">${esc(c.label)} →</a>`).join('') + `<a href="/contact/">Contact & booking →</a>`;
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Service · Frederiksberg &amp; Copenhagen</div><h1>${esc(s.h1)}</h1>${s.subhead ? `<p class="lead">${esc(s.subhead)}</p>` : ''}
    <div class="cta-row"><a class="btn btn-white" href="/contact/">${cta}</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Call ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Home</a> › <span>${esc(s.h1)}</span></div>${intro}${included}</div></section>
  ${bullets}
  ${callout}
  ${pricing}
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Common questions</h2><div class="faq">${faq}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Ready to get started?</h2><p>Contact us and we'll help you book the right service.</p><div class="cta-row"><a class="btn btn-white" href="/contact/">${cta}</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Call ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Related services</p><div class="crosslinks">${cross}</div></div></div></section>`;
}
function faqSchemaFrom(items) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
}


// ---------- location / area pages ----------
function locationBody(loc) {
  const intro = loc.intro.map((p) => `<p>${p}</p>`).join('');
  const trust = loc.trustLine ? `<div class="trust-line" style="margin:8px 0 24px">${esc(loc.trustLine)}</div>` : '';
  const areas = loc.areas ? `<section class="section alt"><div class="wrap"><div class="eyebrow">Områder vi betjener</div><h2>Kvarterer i København</h2><div class="grid grid-3">${loc.areas.map((sl) => { const a = locations.find((x) => x.slug === sl); return `<a class="card card-link" href="/${a.slug}/"><h3>${esc(a.name)}</h3><p>${esc(a.subhead)}</p><span class="arrow">Se område →</span></a>`; }).join('')}</div></div></section>` : '';
  const faq = loc.faq.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const cross = loc.crosslinks.map((c) => `<a href="${c.href}">${esc(c.label)} →</a>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">København · Frederiksberg</div>
    <h1>${esc(loc.h1)}</h1><p class="lead">${esc(loc.subhead)}</p>
    <div class="cta-row"><a class="btn btn-white" href="/contact/">Book en reparation</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>${esc(loc.h1)}</span></div>${intro}${trust}</div></section>
  ${areas}
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Ofte stillede spørgsmål</h2><div class="faq">${faq}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Find os</div><h2>Vores værksted — Falkoner Allé 108, Frederiksberg</h2><p class="sub">Vi betjener dette område fra vores værksted i Frederiksberg; aflevering, afhentning og levering kan aftales afhængigt af jeres placering.</p>${mapFrame}</div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Brug for reparation i ${esc(loc.name)}?</h2><p>Gratis fejlsøgning (2–4 dage) eller ekspres (600 kr., 1–2 timer). Fast pris, før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/contact/">Book en reparation</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks">${cross}</div></div></div></section>`;
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
  await fs.rm(DIST, { recursive: true, force: true });
  await fs.mkdir(DIST, { recursive: true });

  // static assets
  await copyDir(path.join(__dirname, 'public'), DIST);
  await fs.mkdir(path.join(DIST, 'styles'), { recursive: true });
  await fs.copyFile(path.join(__dirname, 'src/styles/global.css'), path.join(DIST, 'styles/global.css'));

  const pages = [];
  // home
  pages.push(['/', page({ title: 'PCKlinik | Computer- og Mac-reparation i København', description: 'Computer- og Mac-reparation i Frederiksberg og København. Gratis fejlsøgning (2–4 dage) eller ekspres (600 kr., 1–2 timer). Ring 91 81 61 81.', p: '/', body: homeBody(), schema: faqSchemaFrom(HOME_FAQ) })]);
  // repairs
  for (const r of repairs) {
    pages.push([`/${r.slug}/`, page({ title: r.title, description: r.description, p: `/${r.slug}/`, body: repairBody(r), schema: repairSchema(r) })]);
  }
  // contact
  pages.push(['/contact/', page({ title: 'Kontakt PCKlinik | Frederiksberg & København', description: 'Kontakt PCKlinik for PC- og Mac-reparation i Frederiksberg og København. Ring 91 81 61 81 eller skriv til kontakt@pcklinik.dk.', p: '/contact/', body: contactBody() })]);
  // business
  pages.push(['/business-it-service-agreement/', page({ title: 'Business IT Service Agreement | PCKlinik', description: 'Fixed-price IT support for businesses in Copenhagen and Frederiksberg. Unlimited support, monitoring, security and backup — from 399 kr./user/month.', p: '/business-it-service-agreement/', body: businessBody(), schema: businessSchemaFaq() })]);
  // shop
  pages.push(['/shop/', page({ title: 'Shop | Computers, Backup & Security | PCKlinik', description: 'Buy refurbished and new computers, plus backup and security solutions, from PCKlinik. Simple and secure checkout via Stripe.', p: '/shop/', body: shopHub() })]);
  pages.push(['/shop/computers/', page({ title: 'Computers | New & Refurbished | PCKlinik Shop', description: 'New and refurbished computers from PCKlinik — tested and ready to use, with warranty. Browse our selection and buy securely via Stripe.', p: '/shop/computers/', body: shopComputers() })]);
  pages.push(['/shop/computers/new/', page({ title: 'New Computers | PCKlinik Shop', description: 'Buy new computers from PCKlinik. Reliable brands, prepared and ready to use. Secure payment via Stripe.', p: '/shop/computers/new/', body: shopNew() })]);
  pages.push(['/shop/computers/refurbished/', page({ title: 'Refurbished Computers with Warranty | PCKlinik Shop', description: 'Thoroughly tested and refurbished computers from PCKlinik, with warranty. Great performance at a lower price. Secure payment via Stripe.', p: '/shop/computers/refurbished/', body: shopRefurb() })]);
  pages.push(['/shop/backup-security/', page({ title: 'Backup & Security | PCKlinik Shop', description: 'External hard drives, NAS solutions and security software recommended by PCKlinik. Secure payment via Stripe.', p: '/shop/backup-security/', body: shopBackup() })]);

  // Mac Repair hub (broad intent)
  pages.push(['/mac-repair/', page({ title: 'Mac-reparation i Frederiksberg & København | PCKlinik', description: 'Reparation af MacBook, iMac, Mac mini, Mac Studio og Mac Pro i Frederiksberg og København. Gratis fejlsøgning, fast pris, hurtig ekspedition.', p: '/mac-repair/', body: macHubHtml(), schema: faqSchemaFrom(MAC_HUB_FAQ) })]);
  // Gaming PC repair, service & custom builds
  pages.push(['/gaming-pc-repair-and-build/', page({ title: 'Gaming-pc — reparation, service & specialbyggede | PCKlinik', description: 'Reparation af gaming-pc, køleservice og specialbyggede pc’er i Frederiksberg og København. GPU, overophedning, opgraderinger — plus bygning fra bunden.', p: '/gaming-pc-repair-and-build/', body: gamingHtml(), schema: faqSchemaFrom(GAMING_FAQ) })]);
  // Error messages reference page
  pages.push(['/error-messages/', page({ title: 'Common Computer Error Messages & Codes | PCKlinik', description: 'Blue screen errors, boot failures, kernel panics and more — what common Windows and Mac error messages mean, and how we fix them.', p: '/error-messages/', body: errorMessagesHtml(), schema: faqSchemaFrom(ERROR_FAQ) })]);
  // Computer won't turn on (guide)
  pages.push(['/computer-wont-turn-on/', page({ title: "Computer Won't Turn On? Here's Why | PCKlinik", description: 'Laptop or PC not turning on? The three most common causes, what they mean, and how we diagnose and fix it. Frederiksberg and Copenhagen.', p: '/computer-wont-turn-on/', body: computerWontTurnOnHtml(), schema: faqSchemaFrom(WONT_TURN_ON_FAQ) })]);
  // General site-wide FAQ
  pages.push(['/faq/', page({ title: 'Frequently Asked Questions | PCKlinik', description: 'English-speaking PC and Mac repair in Copenhagen — FAQs on diagnostics, pricing, brands, services, business IT, and our shop.', p: '/faq/', body: faqPageHtml(), schema: faqSchemaFrom(GENERAL_FAQ) })]);
  // Network Equipment hub
  pages.push(['/network-equipment/', page({ title: 'Network & Router Setup | UniFi, Netgear, TP-Link & More | PCKlinik', description: 'Router and network setup, configuration, and troubleshooting — UniFi, Netgear, TP-Link, ASUS, Eero and Google Nest. Frederiksberg and Copenhagen.', p: '/network-equipment/', body: networkHubHtml(), schema: faqSchemaFrom(NETWORK_HUB_FAQ) })]);
  // Websites & SEO hub
  pages.push(['/websites-seo-google-ads/', page({ title: 'Website Design, SEO & Google Ads | PCKlinik', description: 'Website design, SEO, and Google Ads management for businesses in Copenhagen. Built and optimized by someone who actually does this work.', p: '/websites-seo-google-ads/', body: websitesHubHtml(), schema: faqSchemaFrom(WEBSITES_HUB_FAQ) })]);
  // About / Meet the Team
  pages.push(['/about-us/', page({ title: 'About PCKlinik & Our Team | PCKlinik', description: 'Meet the PCKlinik team — 7 people covering PC, Mac, networks, on-site support, and web/SEO, based in Frederiksberg.', p: '/about-us/', body: aboutBody() })]);
  // News section
  pages.push(['/nyheder/', page({ title: 'Nyheder & guides | PCKlinik', description: 'Praktiske computer-, Mac- og IT-guides fra PCKlinik i Frederiksberg — klare svar på almindelige spørgsmål, uden jargon.', p: '/nyheder/', body: newsIndexHtml() })]);
  for (const n of news) pages.push([`/nyheder/${n.slug}/`, page({ title: `${n.title} | PCKlinik Nyheder`, description: n.description, p: `/nyheder/${n.slug}/`, body: newsPostHtml(n), schema: newsPostSchema(n) })]);
  // Ask Us a Question
  pages.push(['/ask-a-question/', page({ title: 'Stil os et spørgsmål | PCKlinik', description: 'Har du et spørgsmål om din computer, Mac eller IT-opsætning? Spørg os direkte — rigtige spørgsmål får rigtige svar, og nogle bliver til guides på vores nyhedsside.', p: '/ask-a-question/', body: askQuestionBody() })]);
  // Thank-you pages (form redirect targets)
  pages.push(['/thank-you/', page({ title: 'Thank You | PCKlinik', description: 'Your message has been sent. We will get back to you as soon as possible.', p: '/thank-you/', body: thankYouHtml() })]);
  // Location / area pages
  for (const loc of locations) pages.push([`/${loc.slug}/`, page({ title: loc.title, description: loc.description, p: `/${loc.slug}/`, body: locationBody(loc), schema: faqSchemaFrom(loc.faq) })]);
  // 15 task-based service pages
  for (const s of services) pages.push([`/${s.slug}/`, page({ title: s.title, description: s.description, p: `/${s.slug}/`, body: serviceBody(s), schema: faqSchemaFrom(s.faq) })]);

  for (const [p, html] of pages) await writePage(p, html);

  // sitemap + robots
  const urls = pages.map(([p]) => `  <url><loc>${site.domain}${p}</loc></url>`).join('\n');
  await fs.writeFile(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  await fs.writeFile(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${site.domain}/sitemap.xml\n`);

  console.log(`Built ${pages.length} pages -> dist/`);
}
run().catch((e) => { console.error(e); process.exit(1); });
