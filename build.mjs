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
import { macHubHtml, gamingHtml, MAC_HUB_FAQ, GAMING_FAQ, errorMessagesHtml, ERROR_FAQ, computerWontTurnOnHtml, WONT_TURN_ON_FAQ, faqPageHtml, GENERAL_FAQ, networkHubHtml, NETWORK_HUB_FAQ, websitesHubHtml, WEBSITES_HUB_FAQ, studentsHtml, STUDENTS_FAQ, priceRangesHtml } from './src/data/richPages.js';

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
    <div><h2>Mere</h2><a href="/shop/">Butik</a><a href="/shop/computers/refurbished/">Refurbished computere</a><a href="/business-it-service-agreement/">IT-support til erhverv</a><a href="/about-us/">Mød teamet</a><a href="/faq/">FAQ</a><a href="/nyheder/">Nyheder</a><a href="/studerende/">Studerende (CBS & DTU)</a><a href="/reparationspriser/">Typiske reparationspriser</a><a href="/ask-a-question/">Stil os et spørgsmål</a><a href="/contact/">Kontakt</a></div>
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
  <section class="section"><div class="wrap"><div class="cta-band"><h2>${ctaHeading}</h2><p>Fejlsøgning 300 kr. (2–4 dage) eller ekspres for 600 kr. (1–2 timer). Fast pris, før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/contact/">${esc(r.ctaPrimary)}</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relaterede reparationer</p><div class="crosslinks">${cross}</div></div></div></section>`;
}
function repairSchema(r) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: r.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
}

// ---------- home ----------
const HOME_FAQ = [
  ['Reparerer I alle computermærker?', 'Ja, vi reparerer alle større PC- og Mac-mærker samt specialbyggede computere. Kan I ikke se jeres mærke, så se "Andre mærker & specialbyggede".'],
  ['Hvad koster en reparation?', 'Standardfejlsøgning koster 300 kr. (2–4 dage), eller ekspres for 600 kr. (1–2 timer). I får altid en fast pris, før vi går i gang, så der er ingen overraskelser.'],
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
      <a class="card card-link" href="/contact/"><div class="card-icon">🖥️</div><h3>Til privatpersoner</h3><p>PC- og Mac-reparation — standard- eller ekspres-fejlsøgning, fast pris, de fleste reparationer samme dag.</p><span class="arrow">Book en reparation →</span></a>
      <a class="card card-link" href="/business-it-service-agreement/"><div class="card-icon">🏢</div><h3>Til virksomheder</h3><p>IT-supportaftaler til fast pris — ubegrænset support, overvågning og sikkerhed for ét fast månedligt beløb.</p><span class="arrow">Se IT-support til erhverv →</span></a>
    </div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Vores løfte</div><h2>Sådan fungerer det</h2><div class="steps">
    <div class="step"><div class="num">1</div><h3>Fejlsøgning</h3><p>300 kr. (2–4 dage), eller ekspres for 600 kr. (1–2 timer).</p></div>
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
    ['🛠️', 'Ubegrænset IT-support', 'Hjælp til jeres medarbejdere via telefon, e-mail og fjernsupport — og on-site i København, når det er nødvendigt. Fast pris, ingen timeafregning.'],
    ['📡', 'Overvågning & drift', 'Vi holder øje med jeres computere og servere døgnet rundt og fanger problemer, før de bliver til nedbrud.'],
    ['💾', 'Backup & genskabelse', 'Rigtig backup af jeres data og Microsoft 365 — ikke bare cloud-lagring. Sker der noget med en maskine, genskaber vi det hele på en ny.'],
    ['🛡️', 'IT-sikkerhed', 'Professionel endpoint-beskyttelse og antivirus — beskyttelse mod virus, ransomware, phishing og mailtrusler, plus løbende overvågning.'],
    ['📧', 'Microsoft 365', 'Opsætning og administration af Microsoft 365, Teams, SharePoint og e-mail — nye medarbejdere kommer hurtigt og sikkert i gang.'],
    ['📋', 'Rådgivning & NIS2', 'Praktisk IT-rådgivning, så I træffer de rette valg — og er klar til krav som GDPR og NIS2.'],
    ['🖥️', 'Nyt IT-udstyr', 'Vi sælger og opsætter nye computere, Mac, skærme og andet udstyr — klar til brug fra dag ét.'],
    ['♻️', 'Istandsat udstyr', 'Professionelt istandsatte computere og enheder med op til 3 års garanti — billigere og grønnere. Udvidet garanti mulig.'],
    ['🔒', 'Sikker bortskaffelse', 'Vi tager jeres gamle udstyr retur, sletter alle data sikkert og bortskaffer det ansvarligt — fuldt GDPR-compliant.'],
  ];
  const tiers = [
    ['Starter', 'Ubegrænset fjernsupport og proaktiv vedligeholdelse til mindre virksomheder.', '399', false,
      [['yes', 'Ubegrænset fjernsupport (telefon & e-mail)'], ['yes', 'Svar inden for 1 arbejdsdag'], ['yes', 'Patch management & opdateringer'], ['yes', 'RMM-enhedsovervågning'], ['yes', 'Månedlig statusrapport'], ['no', 'Antivirus & endpoint-beskyttelse'], ['no', 'Backup-overvågning']]],
    ['Premium', 'Alt, jeres virksomhed har brug for: ubegrænset support og komplet IT-sikkerhed.', '599', true,
      [['yes', 'Alt i Starter'], ['yes', 'Svar inden for 4 timer'], ['yes', 'Antivirus & endpoint-beskyttelse'], ['yes', '24/7-overvågning'], ['yes', 'Backup-overvågning'], ['yes', 'Microsoft 365-administration'], ['yes', 'MFA & adgangsstyring']]],
    ['Exclusive', 'Komplet IT-support, sikkerhed og Microsoft 365-licens — alt i én pakke.', '899', false,
      [['yes', 'Alt i Premium'], ['yes', 'Microsoft 365-licens inkluderet'], ['yes', 'Outlook, Teams & OneDrive'], ['yes', 'Exchange Online (virksomhedsmail)'], ['yes', 'Opsætning & migrering inkluderet'], ['yes', 'Løbende licensadministration'], ['yes', 'GDPR-klar cloud-løsning']]],
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
    <p class="lead">IT-support til fast pris for virksomheder i København og Frederiksberg. Ubegrænset support, proaktiv overvågning og IT-sikkerhed for én forudsigelig månedlig pris. Vi ligger på Falkoner Allé i Frederiksberg, kører ud i hele København og hjælper resten af landet via fjernsupport.</p>
    <div class="badges"><span class="badge check">Faste pakker fra 399 kr./bruger/md.</span><span class="badge check">Ubegrænset support — ingen timepriser</span><span class="badge check">Svar samme dag</span><span class="badge check">Lokal IT-partner i Frederiksberg</span></div>
    <div class="cta-row"><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a><a class="btn btn-white" href="#enquiry">Book en gratis IT-gennemgang</a><a class="hero-text-link" href="#pricing">Se priser →</a></div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Hvad er en IT-supportaftale?</div><h2>Én fast aftale — og jeres IT kører bare</h2>
    <p class="sub">En IT-supportaftale til erhverv betyder, at PCKlinik passer på jeres IT, så I kan fokusere på jeres forretning. I får en dedikeret IT-ansvarlig, der kender jeres opsætning, holder øje med jeres systemer og træder til, når noget går galt — uden uventede regninger. I stedet for at ringe rundt efter hjælp har I én partner, der holder styr på det hele.</p>
    <div class="grid grid-3">${feat}</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Hvorfor PCKlinik</div><h2>En rigtig lokal IT-partner — ikke et callcenter</h2><ul class="why-list">
    <li><strong>Forudsigelige IT-omkostninger</strong>Fast månedlig pris, ingen timepriser eller regningsoverraskelser.</li>
    <li><strong>En dedikeret kontaktperson</strong>I får én navngiven IT-ansvarlig, der kender jeres virksomhed, bakket op af et helt team, når der skal flere hænder til.</li>
    <li><strong>Hurtig hjælp</strong>De fleste sager løses samme dag via fjernsupport.</li>
    <li><strong>Lokalt og landsdækkende</strong>On-site i København og omegn, fjernsupport i hele landet.</li></ul></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Sådan kommer I i gang</div><h2>Tre enkle trin</h2><div class="steps">
    <div class="step"><div class="num">1</div><h3>Gratis IT-gennemgang</h3><p>Vi kortlægger jeres nuværende IT-opsætning, finder sikkerhedshuller og besparelsesmuligheder — helt uforpligtende.</p></div>
    <div class="step"><div class="num">2</div><h3>En klar plan</h3><p>I får en konkret anbefaling og en supportaftale, der passer til jeres størrelse og behov. I sætter tempoet.</p></div>
    <div class="step"><div class="num">3</div><h3>Vi driver jeres IT</h3><p>Vi opsætter det og vedligeholder det fremover — support, overvågning og sikkerhed inkluderet.</p></div></div></div></section>
  <section class="section" id="pricing"><div class="wrap"><div class="eyebrow">Priser & pakker</div><h2>Gennemsigtige priser — ingen overraskelser</h2>
    <p class="sub">Vælg den pakke, der passer til jeres virksomhed. Fast pris pr. bruger, ekskl. moms — ingen binding.</p>
    <div class="pricing-grid">${price}</div>
    <p class="center" style="margin-top:28px;color:var(--muted)">Er I i tvivl om, hvad I har brug for? <a href="${site.phoneHref}">Ring ${site.phone}</a> for en uforpligtende IT-gennemgang.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Find os i Frederiksberg</div><h2>En fysisk IT-butik og værksted — ikke bare en hjemmeside</h2>
    <p class="sub">Kig forbi, ring eller skriv, så finder vi den rette aftale til jer.</p>
    <div class="info-block"><div class="nap"><p><strong>Adresse</strong><br />${site.address}</p><p><strong>Telefon</strong><br /><a href="${site.phoneHref}">${site.phone}</a></p><p><strong>E-mail</strong><br /><a href="mailto:${site.emailBusiness}">${site.emailBusiness}</a></p></div>${mapFrame}</div></div></section>
  <section class="section alt" id="enquiry"><div class="wrap"><div class="eyebrow">Kom i kontakt</div><h2>Book en gratis IT-gennemgang</h2>
    <p class="sub">Fortæl os lidt om jeres virksomhed, så vender vi tilbage — uforpligtende.</p>
    <div class="form-card" style="max-width:640px">
      ${formOpen(site.emailBusiness, 'Ny henvendelse om IT-support til erhverv — pcklinik.dk', '/thank-you/')}
        <div class="form-row"><div><label for="biz-name">Navn</label><input id="biz-name" name="name" type="text" autocomplete="name" required /></div></div>
        <div class="form-row"><div><label for="biz-company">Virksomhed <span style="font-weight:400;color:var(--muted)">(valgfrit)</span></label><input id="biz-company" name="company" type="text" autocomplete="organization" /></div></div>
        <div class="form-row"><div><label for="biz-email">E-mail</label><input id="biz-email" name="email" type="email" autocomplete="email" required /></div></div>
        <div class="form-row"><div><label for="biz-phone">Telefon <span style="font-weight:400;color:var(--muted)">(valgfrit)</span></label><input id="biz-phone" name="phone" type="tel" autocomplete="tel" /></div></div>
        <div class="form-row"><div><label for="biz-users">Antal brugere <span style="font-weight:400;color:var(--muted)">(valgfrit)</span></label><input id="biz-users" name="users" type="text" placeholder="fx 8" /></div></div>
        <div class="form-row"><div><label for="biz-message">Hvad har I brug for hjælp til?</label><textarea id="biz-message" name="message" required></textarea></div></div>
        <button class="btn btn-primary" type="submit">Anmod om en gratis IT-gennemgang</button>
      </form>
    </div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>IT-support til erhverv — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>`;
}
function businessSchemaFaq() {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_BUSINESS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
}
const FAQ_BUSINESS = [
  ['Kan ambassader eller diplomatiske repræsentationer bede om momsfri fakturering?', 'Kontakt os direkte for at drøfte jeres konkrete administrative krav og faktureringskrav — vi arbejder gerne inden for jeres organisations indkøbsproces.'],
  ['Tilbyder I onboarding af mange medarbejdere på én gang?', 'Ja — masseopsætning (flere nye medarbejdere eller migrering af et helt teams udstyr) er noget, vi håndterer som en del af en supportaftale.'],
  ['Kan I arbejde med vores eksisterende IT-dokumentation eller asset-inventory-system?', 'Ja — kontakt os om jeres konkrete systemer, så tilpasser vi os til at passe ind i jeres eksisterende processer frem for at kræve, at I ændrer dem.'],
  ['Hvad koster en IT-supportaftale?', 'Vi har tre pakker: Starter fra 399 kr., Premium 599 kr. og Exclusive 899 kr. pr. bruger pr. måned (ekskl. moms). I betaler en fast månedlig pris, så I altid kender omkostningen på forhånd. Usikker på, hvilken pakke der passer? Book en gennemgang.'],
  ['Er der nogen skjulte gebyrer?', 'Nej — aldrig. I betaler én fast månedlig pris pr. bruger, og det er det. Ingen opstartsgebyr, ingen timepris for supporthenvendelser og ingen overraskelser på fakturaen.'],
  ['Hvad er jeres svartid?', 'Vi garanterer svar inden for 4 timer i normal åbningstid (man–fre 10:00–17:00). De fleste henvendelser løses samme dag — mange inden for den første time.'],
  ['Kan jeg opsige mit abonnement når som helst?', 'Månedlige abonnementer kan opsiges med en måneds varsel. Årlige abonnementer løber til periodens udløb. Ingen binding ud over det.'],
  ['Hvad dækker "ubegrænset support"?', 'Alt vedrørende jeres daglige IT: computer- og softwareproblemer, netværksproblemer, printere, e-mail, Microsoft 365, virus og sikkerhed. Dækker ikke hardwareudskiftning eller kundespecifik udvikling — det aftaler vi særskilt.'],
  ['Fungerer det for virksomheder af enhver størrelse?', 'Ja. Vi hjælper enkeltmandsvirksomheder, kontorer med 2–3 medarbejdere og virksomheder med 50+ brugere. Prisen er pr. bruger, så I betaler præcis for det, I har brug for.'],
  ['Skal jeg installere noget?', 'Vi installerer et lille fjernadgangsværktøj (TeamViewer eller lignende), så vi hurtigt kan hjælpe jer, uden at I behøver komme til os. Opsætningen tager typisk under 15 minutter, og vi klarer den for jer.'],
  ['Hjælper I med printere og netværksprintere?', 'Ja. Vi opsætter, konfigurerer og fejlfinder alle typer printere — lokale, netværks- og cloud-printere. Vi hjælper også med driveropdateringer og integration med jeres eksisterende netværk.'],
  ['Tilbyder I backupløsninger?', 'Ja. Vi opsætter automatisk backup — både lokalt og i skyen — så jeres data altid er beskyttet. Vi tester backuppen regelmæssigt og hjælper med genskabelse, hvis noget går galt.'],
  ['Hvad med antivirussoftware og IT-sikkerhed?', 'Vi installerer og administrerer antivirus og endpoint-sikkerhed på alle jeres enheder. Premium-pakken inkluderer løbende sikkerhedsovervågning, så I er beskyttet mod virus, ransomware og phishing.'],
  ['Kan I hjælpe med vores netværk og WiFi?', 'Ja. Vi opsætter og optimerer netværk, routere og WiFi — inklusive gæstenetværk, firewalls og VPN. Langsomt internet eller dårlig dækning? Vi finder løsningen.'],
  ['Sælger I computere og udstyr?', 'Ja. Vi sælger både nyt og brugt/istandsat udstyr — computere, bærbare, skærme, printere til erhverv og tilbehør. Istandsat udstyr er professionelt gennemgået og kommer med garanti. Vi hjælper jer med at finde det rette udstyr til jeres behov og budget og opsætter det klar til brug.'],
  ['Hvad er forskellen på en supportaftale og timeafregning?', 'Med en supportaftale betaler I en fast månedlig pris og får ubegrænset support — uden at tænke på, hvad hvert opkald koster. Med timeafregning betaler I pr. opgave, hvilket gør omkostningerne uforudsigelige og ofte dyrere. En aftale betyder også, at vi arbejder proaktivt, så der opstår færre problemer i første omgang.'],
  ['Kan I overtage fra vores nuværende IT-leverandør?', 'Ja. Vi styrer en glidende overgang, indhenter de nødvendige oplysninger og overtager driften, uden at I oplever nedetid. I behøver ikke selv koordinere det.'],
  ['Hvor hurtigt kan vi komme i gang?', 'Som regel inden for få dage. Vi starter med en gennemgang, opsætter fjernadgang (under 15 minutter) og driver jeres aftale derfra.'],
  ['Hjælper I med NIS2 og GDPR?', 'Ja. Vi rådgiver om både GDPR og det nye NIS2-direktiv og hjælper med backup, adgangsstyring, sikkerhed og dokumentation, så I lever op til kravene.'],
  ['Understøtter I medarbejdere, der arbejder hjemmefra?', 'Ja. Vores support afhænger ikke af, hvor medarbejderne befinder sig. Vi hjælper via fjernsupport, uanset om de er på kontoret eller hjemme, og sikrer en stabil forbindelse til virksomhedens systemer.'],
  ['Hvad sker der ved et IT-nedbrud?', 'I kontakter os, og vi går i gang med det samme. Med vores overvågning fanger vi ofte problemet, før I selv opdager det. Vores mål er at få jer op at køre igen hurtigst muligt og holde nedetiden på et minimum.'],
  ['Hjælper I virksomheder i hele landet?', 'Ja. Fjernsupport dækker hele Danmark. Vi tilbyder on-site service i København og Frederiksberg, hvor vi holder til.'],
];

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
  <section class="section"><div class="wrap"><div class="trust-line" style="margin-bottom:36px">Alle produkter er personligt udvalgt og testet af os inden salg. Spørgsmål inden du køber? Ring <a href="${site.phoneHref}">${site.phone}</a>.</div>
    <div class="grid grid-2">
      <a class="card card-link" href="/shop/computers/"><div class="card-icon">🖥️</div><h3>Computere</h3><p>Nye og istandsatte computere — testet og klar til brug.</p><span class="arrow">Se computere →</span></a>
      <a class="card card-link" href="/shop/backup-security/"><div class="card-icon">🛡️</div><h3>Backup & sikkerhed</h3><p>Eksterne harddiske, NAS-løsninger og sikkerhedssoftware, vi personligt anbefaler.</p><span class="arrow">Se backup & sikkerhed →</span></a>
    </div></div></section>`+shopFaq("Butik — ofte stillede spørgsmål", [["Kan jeg bede om et bestemt produkt, der ikke er på listen lige nu?","Ja, kontakt os, så ser vi, hvad vi kan skaffe."],["Tilbyder I samlede tilbud (fx computer + backupdrev)?","Spørg os direkte — det kan nogle gange arrangeres."],["Kan jeg bytte en gammel enhed ind mod et nyt eller istandsat køb?","Kontakt os for at drøfte det — det kan nogle gange arrangeres afhængigt af enheden og dens stand."]]);
}
function shopComputers() {
  return `  <section class="hero"><div class="wrap"><div class="eyebrow"><a href="/shop/" style="color:#A9C1F0">Butik</a> · Computere</div><h1>Computere</h1><p class="lead">Vælg mellem nye og istandsatte computere.</p></div></section>
  <section class="section"><div class="wrap"><div class="crumbs"><a href="/shop/">Butik</a> › <span>Computere</span></div>
    <p class="sub">Uanset om du vil have en helt ny maskine eller en velholdt, testet computer til en lavere pris, har vi begge dele. Hver computer klargøres og testes af os, før den sælges.</p>
    <div class="grid grid-2">
      <a class="card card-link" href="/shop/computers/new/"><div class="card-icon">✨</div><h3>Nye computere</h3><p>Nye computere fra driftssikre mærker, klar til afhentning eller levering.</p><span class="arrow">Se nye computere →</span></a>
      <a class="card card-link" href="/shop/computers/refurbished/"><div class="card-icon">♻️</div><h3>Refurbished computere</h3><p>Grundigt testede og istandsatte computere — god ydelse til en lavere pris, med garanti.</p><span class="arrow">Se refurbished computere →</span></a>
    </div></div></section>`+shopFaq("Computere — ofte stillede spørgsmål", [["Hvad er bedst for de fleste — nyt eller refurbished?","Afhænger af budget og behov; refurbished giver bedre værdi til almindelig brug, nyt passer til dem, der vil have de nyeste specifikationer og fuld garanti."]]);
}
function shopNew() {
  const products = [{ img: '/images/shop/thinkpad-t14-new.jpg', alt: 'Lenovo ThinkPad T14 — ny', title: 'Lenovo ThinkPad T14 — Ny', desc: 'Helt ny og forseglet, direkte fra leverandør. Perfekt til kontorarbejde og daglig brug.', price: '6.999 kr.' }];
  return `  <section class="hero"><div class="wrap"><div class="eyebrow"><a href="/shop/computers/" style="color:#A9C1F0">Computere</a> · Nye</div><h1>Nye computere</h1><p class="lead">Klar til afhentning eller levering.</p></div></section>
  <section class="section"><div class="wrap"><div class="crumbs"><a href="/shop/">Butik</a> › <a href="/shop/computers/">Computere</a> › <span>Nye</span></div>
    <p class="sub">Nye computere fra driftssikre mærker. Vi hjælper dig med at finde det rette udstyr til dine behov og dit budget og opsætter det klar til brug.</p>
    <div class="placeholder-note">⚙️ Placeholder-produkt nedenfor. Tilføj jeres rigtige lager af nye computere (titel, beskrivelse, pris, foto under <code>/images/shop/…</code> og et Stripe Payment Link — separat fra den danske side).</div>
    <div class="grid grid-3" style="margin-top:24px">${products.map(productCard).join('')}</div></div></section>`+shopFaq("Nye computere — ofte stillede spørgsmål", [["Kan jeg tilpasse specifikationerne på en ny computer inden køb?","Kontakt os om jeres krav — vi kan ofte skaffe konfigurationer ud over det, der er nævnt."]]);
}
function shopRefurb() {
  const products = [
    { img: '/images/shop/thinkpad-t14-refurbished.jpg', alt: 'Lenovo ThinkPad T14 — refurbished', title: 'Lenovo ThinkPad T14 — Refurbished', desc: 'Grundigt testet og rengjort af os, med nyt batteri hvis nødvendigt. Perfekt til kontorarbejde og daglig brug. 6 måneders garanti.', price: '1.999 kr.' },
    { img: '/images/shop/macbook-air-refurbished.jpg', alt: 'MacBook Air M1 — refurbished', title: 'MacBook Air M1 — Refurbished', desc: 'Apple Silicon-ydelse til en lavere pris. Testet, rengjort og batteritjekket. 6 måneders garanti.', price: '4.499 kr.' },
    { img: '/images/shop/dell-latitude-refurbished.jpg', alt: 'Dell Latitude 7440 — refurbished', title: 'Dell Latitude 7440 — Refurbished', desc: 'Erhvervsbærbar, professionelt istandsat og klar til arbejde. 6 måneders garanti.', price: '2.799 kr.' },
  ];
  return `  <section class="hero"><div class="wrap"><div class="eyebrow"><a href="/shop/computers/" style="color:#A9C1F0">Computere</a> · Refurbished</div><h1>Refurbished computere</h1><p class="lead">Testet, rengjort og klar til brug — med garanti.</p></div></section>
  <section class="section"><div class="wrap"><div class="crumbs"><a href="/shop/">Butik</a> › <a href="/shop/computers/">Computere</a> › <span>Refurbished</span></div>
    <p class="sub">Grundigt testede og istandsatte computere — god ydelse til en lavere pris, med samme servicegaranti som vores reparationer. Testet af den samme person, der reparerer computere i butikken.</p>
    <div class="trust-line" style="margin:20px 0 8px"><strong>Hvad "refurbished" betyder her:</strong> hver maskine bliver testet, rengjort og forsynet med et nyt batteri, hvis nødvendigt — og derefter dækket af 6 måneders garanti. Det er den samme tekniker, der reparerer og istandsætter, så den holdes til samme standard som vores reparationsarbejde.</div>
    <div class="placeholder-note">⚙️ Eksempelprodukter nedenfor. Refurbished-lageret ændrer sig ofte — opdatér denne sides kort, priser, fotos og Stripe-links, når lageret ændrer sig.</div>
    <div class="grid grid-3" style="margin-top:24px">${products.map(productCard).join('')}</div></div></section>`+shopFaq("Refurbished computere — ofte stillede spørgsmål", [["Kommer refurbished computere med et licenseret styresystem?","Ja, alle istandsatte enheder inkluderer en gyldig, licenseret OS-installation."],["Hvad sker der med de gamle dele eller enheder, I udskifter under istandsættelsen?","Hvor det er muligt, genbruges eller genanvendes fungerende komponenter ansvarligt; alt, der ikke fungerer, bortskaffes gennem korrekte e-affaldskanaler frem for på lossepladsen."]]);
}
function shopBackup() {
  const products = [
    { img: '/images/shop/external-hdd-2tb.jpg', alt: 'Ekstern harddisk 2 TB', title: 'Ekstern harddisk 2 TB — til automatisk backup', desc: 'Det drev, vi personligt anbefaler til kunder, der vil sikre deres filer. Vi hjælper gerne med opsætning, hvis det er købt hos os.', price: '599 kr.' },
    { img: '/images/shop/nas-2bay.jpg', alt: 'NAS-løsning med 2 pladser', title: 'NAS 2-bay — backup til hjem & kontor', desc: 'Et netværksdrev til automatisk, redundant backup på tværs af alle dine enheder. Hjælp til opsætning inkluderet, hvis det er købt hos os.', price: '2.199 kr.' },
    { img: '/images/shop/security-software.jpg', alt: 'Licens til sikkerhedssoftware', title: 'Sikkerhedssoftware — 1 års licens', desc: 'Den endpoint-beskyttelse, vi bruger og anbefaler — antivirus samt beskyttelse mod ransomware og phishing til én computer.', price: '349 kr.' },
  ];
  return `  <section class="hero"><div class="wrap"><div class="eyebrow"><a href="/shop/" style="color:#A9C1F0">Butik</a> · Backup & sikkerhed</div><h1>Backup & sikkerhed</h1><p class="lead">Udstyr og software, vi personligt anbefaler og bruger.</p></div></section>
  <section class="section"><div class="wrap"><div class="crumbs"><a href="/shop/">Butik</a> › <span>Backup & sikkerhed</span></div>
    <p class="sub">Eksterne harddiske, NAS-løsninger og sikkerhedssoftware, vi personligt anbefaler og bruger. Vi hjælper gerne med opsætning, hvis det er købt hos os.</p>
    <div class="placeholder-note">⚙️ Eksempelprodukter nedenfor. Erstat med de præcise varer, I fører, rigtige priser, fotos og Stripe Payment Links (separat fra den danske side).</div>
    <div class="grid grid-3" style="margin-top:24px">${products.map(productCard).join('')}</div></div></section>`+shopFaq("Backup & sikkerhed — ofte stillede spørgsmål", [["Tilbyder I cloud-backup, eller kun fysiske drev?","Begge dele — kontakt os om jeres konkrete behov og budget."]]);
}

// ---------- About / Team ----------
const TEAM = [
  ['Shan — Indehaver', '/images/team/shan.jpg', '20+ års erfaring på tværs af Mac, pc, servere og netværk. Står for værkstedet og håndterer personligt de mest teknisk krævende reparationer og erhvervs-IT-opsætninger.'],
  ['On-site tekniker', '/images/team/on-site-technician-1.jpg', 'Håndterer besøg i hjem og på kontorer i Frederiksberg og København — netværksopsætninger, fejlfinding på stedet og praktisk arbejde uden for værkstedet.'],
  ['On-site tekniker', '/images/team/on-site-technician-2.jpg', 'Håndterer besøg i hjem og på kontorer i Frederiksberg og København — netværksopsætninger, fejlfinding på stedet og praktisk arbejde uden for værkstedet.'],
  ['Mac-specialist', '/images/team/mac-specialist.jpg', 'Uafhængig, ikke Apple-autoriseret — hvilket betyder mere fleksibilitet: reparationer på komponentniveau, som autoriserede værksteder ofte ikke kan udføre, og ærlig rådgivning om reparation kontra udskiftning uden pres mod dyrere officielle kanaler.'],
  ['Hjemmeside- & SEO-specialist', '/images/team/seo-specialist.jpg', '15 års erfaring, ansvarlig for den tekniske og søgemæssige side af PCKliniks egen webtilstedeværelse samt de hjemmeside- og SEO-ydelser, vi tilbyder kunder.'],
  ['Teammedlem', '/images/team/team-member-6.jpg', 'Runder teamet af med daglige reparationer og kundesupport.'],
  ['Teammedlem', '/images/team/team-member-7.jpg', 'Runder teamet af med daglige reparationer og kundesupport.'],
];
function aboutBody() {
  const cards = TEAM.map(([name, img, bio]) => `<div class="card"><img class="img-placeholder" src="${img}" alt="${esc(name)}" loading="lazy" width="480" height="360" /><h3>${esc(name)}</h3><p>${esc(bio)}</p></div>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Om PCKlinik</div><h1>Mød teamet</h1>
    <p class="lead">Rigtige mennesker, rigtig erfaring — ikke et callcenter. PCKlinik er et team på 7, med base i vores værksted på Falkoner All&eacute; i Frederiksberg. Tilsammen dækker vi pc- og Mac-reparation, netværk og servere, on-site support og hjemmeside-/SEO-arbejde — så uanset hvad du har brug for, er der en på teamet, der virkelig kender det godt.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Teamet</div><h2>Syv personer, ét værksted</h2>
    <div class="grid grid-3" style="margin-top:24px">${cards}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Derfor betyder det noget for dig</div><h2>Et større team — samme lige svar</h2>
    <p class="sub">Et større team betyder hurtigere ekspedition og mere specialiseret ekspertise — men vi arbejder stadig, som vi altid har gjort: du får et lige svar fra en, der faktisk ved, hvad han taler om, ikke et sagsnummer i en kø.</p>
    <div class="cta-row"><a class="btn btn-primary" href="/contact/">Kontakt os</a><a class="btn btn-outline" href="/business-it-service-agreement/">IT-support til erhverv →</a></div></div></section>`;
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
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Brug for hjælp med dette?</h2><p>Fejlsøgning 300 kr. (2–4 dage) eller ekspres for 600 kr. (1–2 timer). Fast pris, før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/contact/">Kontakt os</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></div></section>`;
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
  const included = s.whatsIncluded ? `<div class="trust-line" style="margin:6px 0 20px"><strong>Hvad er inkluderet:</strong> ${esc(s.whatsIncluded)}</div>` : '';
  const bullets = (s.bulletSections || []).map((b) => `<section class="section"><div class="wrap"><div class="eyebrow">${esc(b.heading)}</div><ul class="check-list">${b.items.map((it) => `<li>${esc(it)}</li>`).join('')}</ul></div></section>`).join('');
  const callout = s.callout ? `<section class="section"><div class="wrap"><div class="callout"><strong>${esc(s.callout.label)}:</strong> ${esc(s.callout.text)}</div></div></section>` : '';
  const pricing = s.pricing
    ? `<section class="section alt"><div class="wrap"><div class="eyebrow">Pris</div><h2>${esc(s.pricing.h2)}</h2><p class="sub">${esc(s.pricing.text)}</p></div></section>`
    : `<section class="section alt"><div class="wrap"><div class="eyebrow">Fejlsøgning &amp; pris</div><h2>Standard eller ekspres — dit valg</h2><p class="sub">Standardfejlsøgning koster 300 kr. (2–4 dage), eller ekspres for 600 kr. (1–2 timer) — med reparation og levering inden for 24 timer, hvis der ikke skal bestilles specielle reservedele. Du får altid en fast pris, før vi går i gang.</p></div></section>`;
  const cta = esc(s.ctaLabel || 'Book fejlsøgning');
  const faq = s.faq.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const cross = s.crosslinks.map((c) => `<a href="${c.href}">${esc(c.label)} →</a>`).join('') + `<a href="/contact/">Kontakt & booking →</a>`;
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Service · Frederiksberg &amp; København</div><h1>${esc(s.h1)}</h1>${s.subhead ? `<p class="lead">${esc(s.subhead)}</p>` : ''}
    <div class="cta-row"><a class="btn btn-white" href="/contact/">${cta}</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>${esc(s.h1)}</span></div>${intro}${included}</div></section>
  ${bullets}
  ${callout}
  ${pricing}
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Ofte stillede spørgsmål</h2><div class="faq">${faq}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Klar til at komme i gang?</h2><p>Kontakt os, så hjælper vi dig med at booke den rette service.</p><div class="cta-row"><a class="btn btn-white" href="/contact/">${cta}</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relaterede services</p><div class="crosslinks">${cross}</div></div></div></section>`;
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
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Brug for reparation i ${esc(loc.name)}?</h2><p>Fejlsøgning 300 kr. (2–4 dage) eller ekspres (600 kr., 1–2 timer). Fast pris, før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/contact/">Book en reparation</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
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
  pages.push(['/', page({ title: 'PCKlinik | Computer- og Mac-reparation i København', description: 'Computer- og Mac-reparation i Frederiksberg og København. Fejlsøgning 300 kr. (2–4 dage) eller ekspres (600 kr., 1–2 timer). Ring 91 81 61 81.', p: '/', body: homeBody(), schema: faqSchemaFrom(HOME_FAQ) })]);
  // repairs
  for (const r of repairs) {
    pages.push([`/${r.slug}/`, page({ title: r.title, description: r.description, p: `/${r.slug}/`, body: repairBody(r), schema: repairSchema(r) })]);
  }
  // contact
  pages.push(['/contact/', page({ title: 'Kontakt PCKlinik | Frederiksberg & København', description: 'Kontakt PCKlinik for PC- og Mac-reparation i Frederiksberg og København. Ring 91 81 61 81 eller skriv til kontakt@pcklinik.dk.', p: '/contact/', body: contactBody() })]);
  // business
  pages.push(['/business-it-service-agreement/', page({ title: 'IT-supportaftale til erhverv | PCKlinik', description: 'IT-support til fast pris for virksomheder i København og Frederiksberg. Ubegrænset support, overvågning, sikkerhed og backup — fra 399 kr./bruger/måned.', p: '/business-it-service-agreement/', body: businessBody(), schema: businessSchemaFaq() })]);
  // shop
  pages.push(['/shop/', page({ title: 'Butik | Computere, backup & sikkerhed | PCKlinik', description: 'Køb istandsatte og nye computere samt backup- og sikkerhedsløsninger hos PCKlinik. Enkel og sikker betaling via Stripe.', p: '/shop/', body: shopHub() })]);
  pages.push(['/shop/computers/', page({ title: 'Computere | Nye & refurbished | PCKlinik Butik', description: 'Nye og istandsatte computere fra PCKlinik — testet og klar til brug, med garanti. Se udvalget og køb sikkert via Stripe.', p: '/shop/computers/', body: shopComputers() })]);
  pages.push(['/shop/computers/new/', page({ title: 'Nye computere | PCKlinik Butik', description: 'Køb nye computere hos PCKlinik. Driftssikre mærker, klargjort og klar til brug. Sikker betaling via Stripe.', p: '/shop/computers/new/', body: shopNew() })]);
  pages.push(['/shop/computers/refurbished/', page({ title: 'Refurbished computere med garanti | PCKlinik Butik', description: 'Grundigt testede og istandsatte computere fra PCKlinik, med garanti. God ydelse til en lavere pris. Sikker betaling via Stripe.', p: '/shop/computers/refurbished/', body: shopRefurb() })]);
  pages.push(['/shop/backup-security/', page({ title: 'Backup & sikkerhed | PCKlinik Butik', description: 'Eksterne harddiske, NAS-løsninger og sikkerhedssoftware anbefalet af PCKlinik. Sikker betaling via Stripe.', p: '/shop/backup-security/', body: shopBackup() })]);

  // Mac Repair hub (broad intent)
  pages.push(['/mac-repair/', page({ title: 'Mac-reparation i Frederiksberg & København | PCKlinik', description: 'Reparation af MacBook, iMac, Mac mini, Mac Studio og Mac Pro i Frederiksberg og København. Fejlsøgning fra 300 kr., fast pris, hurtig ekspedition.', p: '/mac-repair/', body: macHubHtml(), schema: faqSchemaFrom(MAC_HUB_FAQ) })]);
  // Gaming PC repair, service & custom builds
  pages.push(['/gaming-pc-repair-and-build/', page({ title: 'Gaming-pc — reparation, service & specialbyggede | PCKlinik', description: 'Reparation af gaming-pc, køleservice og specialbyggede pc’er i Frederiksberg og København. GPU, overophedning, opgraderinger — plus bygning fra bunden.', p: '/gaming-pc-repair-and-build/', body: gamingHtml(), schema: faqSchemaFrom(GAMING_FAQ) })]);
  // Error messages reference page
  pages.push(['/error-messages/', page({ title: 'Almindelige computerfejlmeddelelser & koder | PCKlinik', description: 'Blå skærme, opstartsfejl, kernel panics og mere — hvad almindelige Windows- og Mac-fejlmeddelelser betyder, og hvordan vi udbedrer dem.', p: '/error-messages/', body: errorMessagesHtml(), schema: faqSchemaFrom(ERROR_FAQ) })]);
  // Computer won't turn on (guide)
  pages.push(['/computer-wont-turn-on/', page({ title: 'Vil computeren ikke tænde? Her er hvorfor | PCKlinik', description: 'Vil din bærbare eller pc ikke tænde? De tre mest almindelige årsager, hvad de betyder, og hvordan vi fejlsøger og udbedrer det. Frederiksberg og København.', p: '/computer-wont-turn-on/', body: computerWontTurnOnHtml(), schema: faqSchemaFrom(WONT_TURN_ON_FAQ) })]);
  // General site-wide FAQ
  pages.push(['/faq/', page({ title: 'Ofte stillede spørgsmål | PCKlinik', description: 'PC- og Mac-reparation i København — FAQ om fejlsøgning, priser, mærker, services, erhvervs-IT og vores butik.', p: '/faq/', body: faqPageHtml(), schema: faqSchemaFrom(GENERAL_FAQ) })]);
  // Network Equipment hub
  pages.push(['/network-equipment/', page({ title: 'Netværks- & router-opsætning | UniFi, Netgear, TP-Link m.m. | PCKlinik', description: 'Router- og netværksopsætning, konfiguration og fejlfinding — UniFi, Netgear, TP-Link, ASUS, Eero og Google Nest. Frederiksberg og København.', p: '/network-equipment/', body: networkHubHtml(), schema: faqSchemaFrom(NETWORK_HUB_FAQ) })]);
  // Websites & SEO hub
  pages.push(['/websites-seo-google-ads/', page({ title: 'Webdesign, SEO & Google Ads | PCKlinik', description: 'Webdesign, SEO og Google Ads-administration til virksomheder i København. Bygget og optimeret af en, der faktisk laver arbejdet.', p: '/websites-seo-google-ads/', body: websitesHubHtml(), schema: faqSchemaFrom(WEBSITES_HUB_FAQ) })]);
  // About / Meet the Team
  pages.push(['/about-us/', page({ title: 'Om PCKlinik & vores team | PCKlinik', description: 'Mød PCKlinik-teamet — 7 personer, der dækker pc, Mac, netværk, on-site support og web/SEO, med base i Frederiksberg.', p: '/about-us/', body: aboutBody() })]);
  // Students (CBS & DTU) — student-facing SEO/FAQ page
  pages.push(['/studerende/', page({ title: 'Computerreparation til studerende — CBS & DTU | PCKlinik', description: 'Computer- og MacBook-reparation til studerende ved CBS og DTU. Gåafstand fra Solbjerg Plads, Frederiksberg. Skærm, batteri, SSD, backup — fast pris.', p: '/studerende/', body: studentsHtml(), schema: faqSchemaFrom(STUDENTS_FAQ) })]);
  // Typiske reparationspriser
  pages.push(['/reparationspriser/', page({ title: 'Typiske reparationspriser | PCKlinik', description: 'Vejledende fra-priser på almindelige reparationer hos PCKlinik — skærm, batteri og SSD-opgradering, inkl. reservedele og arbejdsløn. Fast tilbud før vi går i gang.', p: '/reparationspriser/', body: priceRangesHtml() })]);
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
