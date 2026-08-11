// Shared rich-page bodies (Mac Repair hub + Gaming) — imported by both
// build.mjs (dist renderer). Single source of truth; no Astro/view mirror.
import { site } from './site.js';
import { lucide } from './icons.js';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------- Mac Repair hub ----------
export function macHubHtml() {
  const problems = ['Mac vil ikke tænde', 'Sort, flimrende eller misfarvet skærm', 'Batteri lader ikke, tømmes hurtigt eller er hævet', 'Computeren er blevet meget langsom', 'Tastaturtaster reagerer ikke korrekt', 'Overophedning eller usædvanlig blæserstøj', 'Væskeskade efter spild'];
  const problemsHtml = problems.map((p) => `<li>${esc(p)}</li>`).join('');
  const faq = MAC_HUB_FAQ;
  const faqHtml = faq.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Mac-reparation · Frederiksberg &amp; København</div>
    <h1>Mac-reparation på Frederiksberg &amp; København</h1><p class="lead">Alle Mac-modeller, ét værksted — bærbar eller stationær.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Mac-reparation</span></div>
    <p>Uanset hvad der er galt med din Mac — en MacBook, iMac, Mac mini, Mac Studio eller Mac Pro — reparerer vi den. Vi fejlsøger det reelle problem først, giver dig en fast pris, før vi går i gang, og klarer de fleste reparationer hurtigt. Standardfejlsøgning koster 300 kr. inkl. moms (3–4 dage), eller vælg ekspres for 600 kr. inkl. moms (1–2 timer) — reparationen klar inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Vores løfte</div><h2>Tre enkle trin</h2><div class="steps">
    <div class="step"><div class="num">1</div><h3>Kom forbi til fejlsøgning</h3><p>300 kr. inkl. moms (3–4 dage) eller ekspres (600 kr. inkl. moms, 1–2 timer).</p></div>
    <div class="step"><div class="num">2</div><h3>Få en fast pris</h3><p>Du godkender prisen, før vi rører ved noget.</p></div>
    <div class="step"><div class="num">3</div><h3>Vi reparerer den</h3><p>Vælger du ekspres, er den klar inden for 24 timer. Standard tager 3–4 dage — vi siger til, når den er klar.</p></div></div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Vælg din Mac</div><h2>Hvilken Mac har du?</h2><div class="grid grid-2">
    <a class="card card-link" href="/macbook-reparation/"><div class="card-icon brand-icon">${lucide.laptop}</div><h3>MacBook (bærbar)</h3><p>Dækker MacBook Pro, MacBook Air og ældre MacBook-modeller — skærm, batteri, tastatur, logic board og mere.</p><span class="arrow">MacBook-reparation →</span></a>
    <a class="card card-link" href="/mac-stationaer-reparation/"><div class="card-icon brand-icon">${lucide.monitor}</div><h3>Stationær Mac</h3><p>Dækker iMac, Mac mini, Mac Studio og Mac Pro — opstartsproblemer, lagring, skærm/display, køling.</p><span class="arrow">Reparation af stationær Mac →</span></a>
  </div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Almindelige problemer vi ser</div><h2>Almindelige Mac-problemer, vi udbedrer</h2>
    <ul class="check-list">${problemsHtml}</ul>
    <p class="sub" style="margin-top:18px">Ser du et af disse, er det bedst at få kigget på det hurtigt — især ved væskeskade eller et hævet batteri.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Reparere eller udskifte?</div><h2>Kan det betale sig at reparere?</h2>
    <p class="sub">Vi giver dig altid et ærligt svar — ikke bare et reparationsoverslag. Hvis en reparation ikke giver økonomisk mening sammenlignet med at udskifte Mac’en, siger vi det ligeud og peger dig mod vores <a href="/butik/computere/refurbished/">istandsatte</a> og <a href="/butik/computere/nye/">nye computere</a> i butikken, hvis det er den bedre løsning. Vores mål er det rette resultat for dig, ikke bare fakturerbart arbejde.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Uafhængigt værksted</div><h2>Ikke Apple-autoriserede — og det er en fordel</h2>
    <p class="sub">Vi er et uafhængigt Mac-værksted, ikke en Apple-autoriseret forhandler. Det betyder, at vi arbejder på komponentniveau i stedet for automatisk at udskifte hele dele, og at vi ofte er 30-50 % billigere end et officielt Apple-værksted. Vi har Apple-reservedele på lager til de mest almindelige reparationer, og du får altid ærlig rådgivning om, hvorvidt en reparation kan betale sig.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Mac-reparation — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Klar til at få kigget på din Mac?</h2><p>Fejlsøgning 300 kr. inkl. moms (3–4 dage) eller ekspres for 600 kr. inkl. moms (1–2 timer). Fast pris, før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/macbook-reparation/">MacBook-reparation →</a><a href="/mac-stationaer-reparation/">Reparation af stationær Mac →</a><a href="/mac-reparation-koebenhavn/">Mac-reparation i København →</a><a href="/mac-batteriskift/">Mac-batteriskift →</a><a href="/hvor-laenge-holder-en-macbook/">Hvor længe holder en MacBook? →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}
export const MAC_HUB_FAQ = [
  { q: 'Tilbyder I en lånecomputer, mens min Mac bliver repareret?', a: 'Ikke i øjeblikket — spørg os, når du kommer forbi, hvis det er vigtigt for dig.' },
  { q: 'Koster fejlsøgning det samme for både MacBook og stationær Mac?', a: 'Ja, samme standard-/ekspres-priser gælder på tværs af alle Mac-modeller.' },
  { q: 'Hvad koster en Mac-reparation?', a: 'Det afhænger af fejlen og modellen. Vi fejlsøger altid først og giver dig en fast pris, før vi går i gang — standardfejlsøgning er 300 kr. inkl. moms (3–4 dage), eller ekspres for 600 kr. inkl. moms (1–2 timer).' },
  { q: 'Hvor lang tid tager en Mac-reparation?', a: 'Med ekspresfejlsøgning er den ofte klar inden for 24 timer. Standardfejlsøgning tager 3–4 dage, og mere omfattende reparationer kan tage længere tid afhængigt af reservedele.' },
  { q: 'Kan alle Mac-computere repareres?', a: 'De fleste kan, men det afhænger af skadens omfang og modellens alder. Vi siger altid ærligt til, hvis en reparation ikke kan betale sig.' },
  { q: 'Betyder det noget, om min Mac er gammel?', a: 'Nej — vi reparerer Mac-computere på tværs af generationer, fra aktuelle Apple Silicon-modeller til meget ældre Intel-Mac.' },
  { q: 'Holder en Mac længere end en Windows-computer?', a: 'Ofte ja, i praksis — Apples tætte integration mellem hardware og styresystem betyder typisk en længere brugbar levetid og mere jævn ydelse over tid, end man ofte ser på tilfældigt sammensat pc-hardware. Det er dog ikke en absolut regel: en velbygget pc kan sagtens holde lige så længe, og en Mac er ikke immun over for slid. Vi reparerer og anbefaler begge dele lige ærligt, alt efter hvad der reelt passer til din situation.' },
];

// ---------- Gaming-pc — reparation, service & specialbyggede ----------
export function gamingHtml() {
  const issues = [
    ['Overophedning & køling', 'støvophobning, defekte blæsere, udtørret kølepasta, dårlig luftgennemstrømning. Vi renser, skifter blæsere og påfører ny kølepasta.'],
    ['GPU-problemer', 'artefakter, nedbrud under belastning, driverkonflikter, fysiske GPU-fejl.'],
    ['Ydelsesproblemer', 'hakken, lav FPS trods god hardware, ofte forårsaget af termisk throttling, forældede drivere eller et fejlkonfigureret system.'],
    ['Strømforsyningsfejl', 'tilfældige nedlukninger, computeren vil ikke starte, ofte en strømforsyning nær enden af sin levetid.'],
    ['RAM- & lageropgraderinger', 'tilføjelse af hukommelse, opgradering til SSD/NVMe for hurtigere indlæsningstider.'],
    ['Vedligeholdelse af væskekøling', 'til pc’er med AIO eller custom loops: pumpetjek, kølevæske, inspektion af slanger.'],
  ].map(([t, b]) => `<li><strong>${esc(t)}</strong> — ${esc(b)}</li>`).join('');
  const cards = [
    ['Køling & termisk service', 'Fuld udrensning, blæserinspektion/-udskiftning og ny kølepasta. Den mest almindelige løsning på en gaming-pc, der er blevet larmende eller varm.'],
    ['GPU-fejlsøgning & reparation', 'Artefakter, nedbrud eller et kort, der ikke registreres? Vi fejlsøger og reparerer eller rådgiver om udskiftning.'],
    ['Ydelsesoptimering', 'Hakken eller underpræstation trods anstændig hardware? Vi tjekker temperaturer, drivere og konfiguration, så den kører, som den skal.'],
    ['Opgraderinger', 'RAM, lagring (SSD/NVMe), GPU eller strømforsyning — fremskaffelse og montering af komponenter.'],
  ].map(([t, b], i) => `<div class="card"><div class="card-icon">${['🌀','🎮','⚡','⬆️'][i]}</div><h3>${esc(t)}</h3><p>${esc(b)}</p></div>`).join('');
  const why = [
    ['Erfaring med gaming-hardware', 'GPU’er, strømforsyninger med høj wattage, væskekøling og termisk styring.'],
    ['Fast pris, før vi starter', 'både ved reparationer og bygning.'],
    ['Rigtig test', 'hver maskine stress-testes før overdragelse, ikke bare samles og sendes.'],
    ['Lokalt værksted', 'baseret på Frederiksberg, on-site til alt, der kræver praktisk arbejde.'],
  ].map(([t, b]) => `<li><strong>${esc(t)}</strong>${esc(b)}</li>`).join('');
  const faq = GAMING_FAQ;
  const faqHtml = faq.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const buildQuote = `mailto:${site.emailConsumer}?subject=${encodeURIComponent('Tilbud på specialbygget pc')}`;
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Gaming-pc’er · Reparation, service &amp; specialbyggede</div>
    <h1>Gaming-pc — reparation, service &amp; specialbyggede</h1><p class="lead">Fra at udbedre en overophedet maskine til at bygge din drømme-pc fra bunden.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${buildQuote}">Få et tilbud på en byggeopgave</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Gaming-pc’er</span></div>
    <p>Uanset om din gaming-pc overopheder, underpræsterer, eller du vil have en helt specialbygget maskine fra bunden, klarer PCKlinik det. Vi reparerer og servicerer gaming-stationære af enhver slags — samlefærdige eller selvbyggede — og vi bygger specialtilpassede gaming-pc’er efter dine ønsker til kunder, der vil have noget bygget rigtigt første gang.</p>
    <p><strong>Til reparation og service:</strong> standardfejlsøgning er 300 kr. inkl. moms (3–4 dage), eller ekspres for 600 kr. inkl. moms (1–2 timer) — reparationen klar inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.</p>
    <p><strong>Til specialbyggede maskiner:</strong> det er en anden proces — ingen fejlsøgning involveret. Vi drøfter dit budget, dit formål (gaming, streaming, redigering) og dine præferencer og giver derefter en fast byggepris, før vi bestiller nogen dele.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Reparation &amp; service</div><h2>Almindelige problemer vi udbedrer</h2><ul class="why-list">${issues}</ul>
    <div class="grid grid-4" style="margin-top:32px">${cards}</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Specialbyggede pc’er</div><h2>Vil du have en pc bygget efter dine ønsker? Vi bygger den rigtigt.</h2>
    <p class="sub">Vi bygger specialtilpassede gaming-pc’er fra bunden — du fortæller os dit budget, og hvad du skal bruge den til (konkurrencegaming, streaming, videoredigering eller det hele), og vi anbefaler og skaffer de rette komponenter, bygger den, styrer kabler ordentligt og tester den grundigt, før den når dig.</p>
    <div class="trust-line" style="margin-bottom:24px"><strong>Hvad er inkluderet:</strong> komponentanbefaling ud fra dit budget og formål · fuld bygning og kabelstyring · stress-test og indkøring før overdragelse · grundlæggende OS-installation og driveropsætning, hvis det ønskes.</div>
    <div class="steps">
      <div class="step"><div class="num">1</div><h3>Rådgivning</h3><p>Fortæl os dit budget, og hvad du vil bruge pc’en til.</p></div>
      <div class="step"><div class="num">2</div><h3>Fast pris</h3><p>Vi anbefaler komponenter og giver dig en fast pris, før vi bestiller noget.</p></div>
      <div class="step"><div class="num">3</div><h3>Byg &amp; test</h3><p>Vi bygger den, tester den under belastning og overdrager den klar til brug.</p></div>
    </div>
    <div class="cta-row" style="margin-top:24px"><a class="btn btn-primary" href="${buildQuote}">Få et tilbud på en byggeopgave</a></div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Hvorfor PCKlinik</div><h2>Bygget og repareret ordentligt</h2><ul class="why-list">${why}</ul></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Gaming-pc’er — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Reparere, opgradere eller bygge fra bunden?</h2><p>Fejlsøgning koster 300 kr. inkl. moms (3–4 dage) eller ekspres (600 kr. inkl. moms). Specialbyggede maskiner er tilbudsbaserede — intet fejlsøgningsgebyr.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${buildQuote}">Få et tilbud på en byggeopgave</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/mac-stationaer-reparation/">Reparation af stationær Mac →</a><a href="/msi-reparation/">MSI-reparation →</a><a href="/rens-af-pc/">PC-rensning →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}
export const GAMING_FAQ = [
  { q: 'Hjælper I med at vælge komponenter til en maskine inden for et bestemt budget?', a: 'Ja, det er en del af rådgivningsprocessen.' },
  { q: 'Kan I opgradere GPU’en i en eksisterende gaming-pc frem for at bygge en ny?', a: 'Ja, GPU-opgraderinger er en almindelig opgave adskilt fra en fuld bygning.' },
  { q: 'Bygger I specialtilpassede gaming-pc’er fra bunden?', a: 'Ja. Fortæl os dit budget og formål, så anbefaler vi komponenter, bygger den og tester den før overdragelse.' },
  { q: 'Min gaming-pc overopheder — hvad betyder det som regel?', a: 'Oftest støvophobning eller udtørret kølepasta. Vi laver en fuld køleservice — udrensning, blæsertjek, ny kølepasta — som løser størstedelen af overophedningstilfælde.' },
  { q: 'Kan I opgradere min eksisterende gaming-pc i stedet for at bygge en ny?', a: 'Ja — RAM-, lager-, GPU- og strømforsyningsopgraderinger er almindelige opgaver og ofte mere omkostningseffektive end en fuld ombygning.' },
  { q: 'Arbejder I på samlefærdige gaming-pc’er (ikke kun specialbyggede)?', a: 'Ja, vi reparerer og servicerer samlefærdige gaming-stationære fra enhver producent samt selvbyggede og specialbyggede maskiner.' },
];


// ---------- Common Error Messages & Codes (help/reference page) ----------
export const ERROR_FAQ = [
  { q: 'Betyder fejlkoder det samme på alle Windows-versioner?', a: 'Stort set ja, men nogle koder er mere almindelige på visse versioner — vi fejlsøger den reelle årsag uanset kode.' },
  { q: 'Kan en fejlkode dukke op sporadisk uden at være alvorlig?', a: 'Lejlighedsvis, men gentagne forekomster af samme fejl er værd at få tjekket.' },
  { q: 'Bør jeg selv forsøge at udbedre en fejlkode, før jeg bringer den ind?', a: 'Grundlæggende trin (en genstart, tjek af oplagte kabel-/forbindelsesproblemer) er fine at prøve. Ud over det, især ved blå skærme eller kernel panics, anbefaler vi at bringe den ind frem for at risikere yderligere datatab ved gentagne fejlsøgningsforsøg.' },
  { q: 'Betyder en blå skærm eller kernel panic, at jeg har mistet mine data?', a: 'Ikke nødvendigvis — det er sikkerhedsmekanismer, ikke datadræbende hændelser i sig selv. Risikoen kommer fra et underliggende svigtende drev, hvilket er præcis det, vi tjekker først.' },
  { q: 'Kan I sige, hvad der er galt, alene ud fra fejlkoden?', a: 'Koden indsnævrer mulighederne, men vi bekræfter altid med faktisk fejlsøgning frem for at antage — den samme kode kan pege på flere forskellige rodårsager.' },
];
const STOP_CODES = [
  ['MEMORY_MANAGEMENT', 'Defekt RAM, beskadigede systemfiler eller en dårlig driver'],
  ['PAGE_FAULT_IN_NONPAGED_AREA', 'Defekt RAM, svigtende drev eller driverkonflikt'],
  ['CRITICAL_PROCESS_DIED', 'En central Windows-proces gik ned — beskadigede systemfiler eller en dårlig driveropdatering'],
  ['SYSTEM_THREAD_EXCEPTION_NOT_HANDLED', 'Som regel et driverproblem, ofte grafik- eller netværksdrivere'],
  ['IRQL_NOT_LESS_OR_EQUAL', 'Driverkonflikt eller defekt RAM'],
  ['KERNEL_SECURITY_CHECK_FAILURE', 'Beskadigede systemfiler eller driverproblem'],
  ['DPC_WATCHDOG_VIOLATION', 'Driver- eller lagercontroller-problem, især efter Windows-opdateringer'],
  ['VIDEO_TDR_FAILURE', 'Grafikdriver-nedbrud eller svigtende GPU'],
  ['WHEA_UNCORRECTABLE_ERROR', 'Hardwarefejl — ofte CPU, RAM eller bundkort'],
  ['INACCESSIBLE_BOOT_DEVICE', 'Windows kan ikke tilgå startdrevet — svigtende drev eller driver-/BIOS-indstillingsproblem'],
  ['Hex-koder (fx 0x0000007E, 0x0000008E, 0x0000007B)', 'Ældre koder, samme generelle årsager som ovenfor — driver, hardware eller beskadigede filer'],
];
const winSubs = [
  ['“Your PC ran into a problem and needs to restart”', 'Hverdagssprogs-versionen af en stop-kode-fejl (Windows 10/11’s venligere BSOD-formulering). Samme underliggende årsager som ovenfor.'],
  ['Computeren vil ikke starte / hænger på opstartslogoet', 'Kan pege på et beskadiget styresystem, et svigtende drev eller en hardwarefejl, der forhindrer Windows i at indlæse. Vi fejlsøger, om det er en hurtig softwareløsning eller noget mere alvorligt.'],
  ['“Operating System Not Found” / boot device-fejl', 'Betyder som regel, at computeren ikke kan finde et fungerende drev med et styresystem på — ofte et svigtende eller frakoblet drev/SSD, nogle gange en BIOS-/boot-rækkefølge-indstilling.'],
  ['Hyppige frysninger eller tilfældige genstarter (ingen fejlmeddelelse)', 'Ofte overophedning (støvophobning, defekte blæsere), defekt RAM eller et drev nær svigt — samme rodårsager som BSOD-fejl, bare uden en specifik kode vist.'],
];
const macSubs = [
  ['Kernel panic', 'Mac-ækvivalenten til en Windows-BSOD — macOS rammer en kritisk fejl og genstarter for at beskytte sig selv. En enkelt lejlighedsvis panic er som regel ikke akut, men gentagne panics peger på et reelt hardware- eller softwareproblem — ofte defekt hukommelse, et svigtende drev eller inkompatibel software.'],
  ['Forbudssymbol (cirkel med en streg igennem) ved opstart', 'Betyder, at macOS ikke kan starte op fra noget tilgængeligt drev — ofte på grund af beskadigede systemfiler, et svigtende drev eller (på Intel-Mac) problemer med valg af startdisk.'],
  ['Roterende hjul / beachball, der ikke forsvinder', 'Indikerer som regel, at systemet eller en app er overbelastet — kan være et svigtende drev, for lidt fri lagerplads eller en bestemt app, der hænger, frem for hele systemet.'],
  ['Mappe med et spørgsmålstegn ved opstart', 'Betyder, at Mac’en ikke kan finde en gyldig startdisk — almindeligvis et svigtende drev eller en beskadiget macOS-installation, ikke nødvendigvis et helt dødt drev.'],
  ['Grå skærm ved opstart (ingen fremgang)', 'Kan indikere et startdisk-problem, inkompatible startobjekter eller i nogle tilfælde en hardwarefejl, der forhindrer opstartsprocessen i at fuldføre.'],
];
export function errorMessagesHtml() {
  const rows = STOP_CODES.map(([c, m]) => `<tr><td><code>${esc(c)}</code></td><td class="issue">${esc(m)}</td></tr>`).join('');
  const wsubs = winSubs.map(([h, p]) => `<h3 style="margin-top:26px">${esc(h)}</h3><p>${esc(p)}</p>`).join('');
  const msubs = macSubs.map(([h, p]) => `<h3 style="margin-top:26px">${esc(h)}</h3><p>${esc(p)}</p>`).join('');
  const faqHtml = ERROR_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Hjælp · Fejlmeddelelser</div>
    <h1>Almindelige fejlmeddelelser &amp; hvad de betyder</h1><p class="lead">Windows- og Mac-fejl, forklaret ligeud.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Fejlmeddelelser</span></div>
    <p>At se en kryptisk fejlmeddelelse eller kode er ubehageligt, især når den forhindrer dig i at bruge computeren overhovedet. Nedenfor er de mest almindelige Windows- og Mac-fejl, vi bliver spurgt om — hvad de generelt betyder, og hvad vi gør for at udbedre dem. Vi fejlsøger altid den specifikke årsag frem for at gætte, da den samme fejlmeddelelse kan have flere forskellige underliggende årsager.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Windows</div><h2>Windows-fejl</h2>
    <div class="lead-copy"><h3>Blue Screen of Death (BSOD)</h3><p>Windows viser en blå skærm med en fejlkode, når den rammer en kritisk fejl, den ikke kan komme sikkert videre fra. Den specifikke kode er et spor, ikke en fuld diagnose — vi tester den faktiske hardware og tjekker systemlogfiler frem for at stole på koden alene.</p></div>
    <div class="table-wrap" style="margin-top:20px"><table class="models"><thead><tr><th>Fejlkode</th><th>Hvad den som regel peger på</th></tr></thead><tbody>${rows}</tbody></table></div>
    <div class="lead-copy"><h3 style="margin-top:26px">Windows 11-specifikke problemer</h3>
      <ul class="check-list" style="grid-template-columns:1fr">
        <li><strong>“This PC can’t run Windows 11”</strong> — som regel en manglende TPM 2.0-chip, Secure Boot ikke aktiveret i BIOS eller en inkompatibel CPU. Vi kan tjekke, om din maskine kan gøres kompatibel, eller rådgive ærligt, hvis den ikke kan.</li>
        <li>Opdateringsrelaterede frysninger eller rollback-loops efter en Windows 11-funktionsopdatering — ofte driverinkompatibilitet med den nye opdatering.</li>
      </ul>
      ${wsubs}
    </div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Mac</div><h2>Mac-fejl</h2><div class="lead-copy">${msubs}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Fejlmeddelelser — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Har du en af disse fejl?</h2><p>Vi fejlsøger rodårsagen, ikke bare koden. Fejlsøgning 300 kr. inkl. moms (3–4 dage) eller ekspres (600 kr. inkl. moms, 1–2 timer), fast pris før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/backup-og-datagendannelse/">Backup & datagendannelse →</a><a href="/harddisk-ssd-udskiftning/">Udskiftning af harddisk →</a><a href="/reinstallation-af-system/">Systeminstallation →</a><a href="/virus-og-malwarefjernelse/">Fjernelse af virus & malware →</a><a href="/blaa-skaerm-bsod/">Blå skærm (BSOD) →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}

// ---------- Computeren vil ikke tænde (guide) ----------
export const WONT_TURN_ON_FAQ = [
  { q: 'Kan en defekt stikkontakt være den reelle årsag?', a: 'Ja — altid værd at teste en anden stikkontakt først.' },
  { q: 'Betyder en computer, der ikke vil tænde, altid datatab?', a: 'Nej — i de fleste tilfælde er problemet adskilt fra lagerdrevet, og dine data kan gendannes.' },
  { q: 'Min bærbare viser slet ingen livstegn — er det helt sikkert batteriet?', a: 'Ikke nødvendigvis — det kan være batteriet, opladeren eller ladeporten. Vi tester hver del for sig frem for at antage, da det spilder tid og penge at udskifte den forkerte del.' },
  { q: 'Blæserne kører, men jeg ser ingenting på skærmen — er det alvorligt?', a: 'Det er faktisk et af de mere reparerbare scenarier — selve computeren fungerer, det er et skærmspecifikt problem, hvilket ofte er en ligetil skærm- eller kabelreparation frem for et dybere hardwareproblem.' },
  { q: 'Mister jeg mine data, hvis min computer ikke vil tænde?', a: 'Ikke af den grund alene — men hvis et svigtende drev er den underliggende årsag, bliver backup eller gendannelse af data tidskritisk. Vi prioriterer det, hvis det er det, fejlsøgningen viser.' },
  { q: 'Skal jeg blive ved med selv at forsøge at tænde den, eller bringe den ind?', a: 'Nogle få grundlæggende tjek (opladerforbindelse, en anden stikkontakt) er fine at prøve. Ud over det, især hvis du hører bippen eller ser gentagne genstartsloops, anbefaler vi at bringe den ind frem for at risikere yderligere komplikationer.' },
];
export function computerWontTurnOnHtml() {
  const scen = [
    ['Scenarie 1: Ingen strøm overhovedet — ingen lys, ingen lyd, intet',
     'et strømproblem — opladeren, ladeporten, et fladt eller svigtet batteri eller (sjældnere) en dybere hardwarefejl.',
     'Lyser opladerens LED, når den er sat i? Viser den bærbare nogen ladeindikator overhovedet? Hvis der virkelig er nul livstegn, selv når den er sat direkte i en stikkontakt, er dette meget sandsynligt relateret til oplader, batteri eller ladeport.',
     'Vi tester opladeren, batteriet og ladeporten hver for sig for at isolere, hvilken der er svigtet — se vores sider om <a href="/mac-batteriskift/">batteriskift</a> og <a href="/ladestik-reparation/">reparation af ladeport</a> for de specifikke løsninger.'],
    ['Scenarie 2: Den tænder (blæsere kører, lys tændes) — men skærmen forbliver sort',
     'selve enheden fungerer, men noget forhindrer et billede — det kan være selve skærmen, grafikhardwaren eller en forbindelse mellem dem.',
     'Tilslut en ekstern skærm, hvis det er muligt. Hvis den eksterne skærm viser et billede, er det den indbyggede skærm, der er problemet, ikke resten af computeren.',
     'Vi isolerer, om det er skærmen, skærmkablet eller grafikhardwaren — se vores side om <a href="/udskiftning-af-skaerm/">skærmudskiftning</a>, hvis det viser sig at være selve skærmen.'],
    ['Scenarie 3: Den tænder og begynder at starte op, men bliver ikke færdig med at indlæse Windows eller macOS',
     'et software- eller styresystemsproblem — et beskadiget OS, et svigtende drev eller en Windows-/macOS-opdatering, der ikke blev fuldført korrekt.',
     'Sætter den sig fast på en logoskærm, viser en fejlmeddelelse eller looper tilbage til en sort skærm gentagne gange? Enhver vist fejlkode er nyttig information.',
     'Afhænger af årsagen — det kan være en <a href="/reinstallation-af-system/">systeminstallation</a> (frisk OS-opsætning), en <a href="/harddisk-ssd-udskiftning/">udskiftning af harddisk</a>, hvis drevet er svigtet, eller <a href="/backup-og-datagendannelse/">datagendannelse</a> først, hvis drevet er ved at svigte, og data ikke er sikkerhedskopieret. Se vores side om <a href="/fejlmeddelelser/">fejlmeddelelser</a> for en specifik kode eller et symbol.'],
  ].map(([h, m, c, fx], i) => `<section class="section${i%2? ' alt':''}"><div class="wrap lead-copy"><h2>${esc(h)}</h2><p><strong>Hvad det som regel betyder:</strong> ${esc(m)}</p><p><strong>Hvad du skal tjekke først:</strong> ${esc(c)}</p><p><strong>Sådan udbedrer vi det:</strong> ${fx}</p></div></section>`).join('');
  const faqHtml = WONT_TURN_ON_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Hjælp · Vil ikke tænde</div>
    <h1>Vil computeren ikke tænde?</h1><p class="lead">Tre almindelige scenarier — og hvad hvert af dem som regel betyder.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Computeren vil ikke tænde</span></div>
    <p>"Vil ikke tænde" kan faktisk betyde et par forskellige ting, og hver peger på en forskellig årsag. Før du antager det værste, hjælper det at vide, hvilken af disse tre situationer der matcher din:</p></div></section>
  ${scen}
  <section class="section alt"><div class="wrap"><div class="eyebrow">Fejlsøgning &amp; pris</div><h2>Standard eller ekspres — dit valg</h2><p class="sub">Standardfejlsøgning koster 300 kr. inkl. moms (3–4 dage), eller ekspres for 600 kr. inkl. moms (1–2 timer) — reparationen klar inden for 24 timer, hvis der ikke skal bestilles specielle reservedele. Du får en fast pris, før vi går i gang.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Vil ikke tænde — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Er du i tvivl om, hvilket scenarie der er dit?</h2><p>Kom forbi — fejlsøgning 300 kr. inkl. moms (3–4 dage) eller ekspres (600 kr. inkl. moms). Vi isolerer årsagen, før vi giver pris.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/ladestik-reparation/">Reparation af ladeport →</a><a href="/udskiftning-af-skaerm/">Skærmudskiftning →</a><a href="/fejlmeddelelser/">Fejlmeddelelser →</a><a href="/blaa-skaerm-bsod/">Blå skærm (BSOD) →</a><a href="/faq/">Generel FAQ →</a></div></div></div></section>`;
}

// ---------- General FAQ (site-wide, grouped) ----------
const FAQ_GROUPS = [
  ['Generelt & proces', [
    ['Dækker indbo-/husforsikring typisk skader ved uheld?', 'Mange indboforsikringer dækker skader på bærbare ved uheld — værd at tjekke din konkrete police. Vi kan under alle omstændigheder lave en detaljeret faktura til brug for en forsikringssag.'],
    ['Kan I lave en faktura til udlægsrapporter eller refusion?', 'Ja — alle fakturaer kan laves med de nødvendige oplysninger til udlæg, virksomhedsrefusion eller administrative formål. Vi kan også lave fakturaen på engelsk, hvis det er nødvendigt.'],
    ['Hvad skal jeg gøre, før jeg bringer min enhed ind til reparation?', 'Hvis muligt: tag backup af vigtige data, fjern eventuelt cover eller tilbehør, og notér enhedens adgangskode, hvis vi skal teste den efter reparation. Ikke et krav, men det gør det hurtigere.'],
    ['Tilbyder I studierabat?', 'Kontakt os direkte for at spørge — værd at tjekke, især i betragtning af vores placering tæt på Copenhagen Business School.'],
    ['Taler I engelsk?', 'Ja — vi kan sagtens klare hele forløbet på engelsk, hvis det er nemmere for dig, fra første opkald eller e-mail til afhentning af den reparerede enhed.'],
    ['Hvordan fungerer fejlsøgning og reparation?', 'Vi fejlsøger det reelle problem først og giver dig derefter en fast pris, før noget reparationsarbejde starter. Standardfejlsøgning koster 300 kr. inkl. moms (3–4 dage), eller vælg ekspres for 600 kr. inkl. moms (1–2 timer) — reparationen klar inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.'],
    ['Hvad hvis jeg skal bruge min enhed hurtigere end standardfejlsøgning?', 'Vælg ekspresfejlsøgning (600 kr. inkl. moms, 1–2 timer) i stedet for standardmuligheden (300 kr. inkl. moms). De fleste ekspresreparationer klares inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.'],
    ['Giver I garanti på reparationer?', 'Ja, reparationer kommer med garanti. Spørg os om detaljerne for din type reparation, når du kontakter os eller kommer forbi.'],
    ['Er mine data sikre under reparation?', 'Ja. Vi tilgår eller deler ikke personlige data ud over det, der er nødvendigt for at gennemføre reparationen, og vi anbefaler under alle omstændigheder at tage backup af vigtige filer forinden.'],
    ['Skal jeg bestille tid, eller kan jeg bare møde op?', 'Fremmøde uden bestilling — ingen tidsbestilling nødvendig.'],
    ['Hvad hvis min enhed ikke kan repareres?', 'Så siger vi det ærligt. Hvis en reparation ikke kan betale sig sammenlignet med at udskifte, siger vi det frem for at opkræve for arbejde, der ikke kan svare sig — og kan pege dig mod istandsatte eller nye muligheder i vores <a href="/butik/">butik</a>, hvis det er den bedre vej.'],
    ['Hvordan ved jeg, om det kan betale sig at reparere min computer, eller om jeg bare skal udskifte den?', 'En almindelig tommelfingerregel: hvis reparationsprisen er mere end 25–50 % af en tilsvarende erstatning, er udskiftning som regel den bedre værdi — især på en ældre maskine. En 2–3 år gammel bærbar er næsten altid værd at reparere; en på 7–8 år kan have sværere-tilgængelige reservedele. Vi giver dig vores ærlige vurdering som en del af din faste pris.'],
    ['Hvilke betalingsmetoder tager I imod?', 'Kortbetaling og bankoverførsel.'],
  ]],
  ['Mærker vi reparerer', [
    ['Reparerer I Lenovo-bærbare?', 'Ja — ThinkPad (T14, T14s, X1 Carbon, P16 med flere), IdeaPad, Legion, Yoga og ThinkBook. Se <a href="/lenovo-reparation/">Lenovo-reparation</a>.'],
    ['Reparerer I Acer-bærbare?', 'Ja — Aspire, Swift, Nitro og Predator-modeller. Se <a href="/acer-reparation/">Acer-reparation</a>.'],
    ['Reparerer I HP-bærbare?', 'Ja — EliteBook, ProBook, Pavilion, Spectre og Omen. Se <a href="/hp-reparation/">HP-reparation</a>.'],
    ['Reparerer I Dell-bærbare?', 'Ja — XPS, Latitude, Inspiron, Precision og Alienware. Se <a href="/dell-reparation/">Dell-reparation</a>.'],
    ['Reparerer I Asus-bærbare?', 'Ja — ZenBook, Vivobook, ROG og TUF Gaming. Se <a href="/asus-reparation/">Asus-reparation</a>.'],
    ['Reparerer I MSI-bærbare?', 'Ja — Katana, GF-serien, Stealth og Prestige. Vi er også et af de få værksteder i Danmark, der har MSI-dele på lager. Se <a href="/msi-reparation/">MSI-reparation</a>.'],
    ['Reparerer I Huawei-bærbare?', 'Ja — MateBook D14, D15 og X Pro. Se <a href="/huawei-reparation/">Huawei-reparation</a>.'],
    ['Reparerer I MacBook og stationære Mac?', 'Ja — alle MacBook-generationer (Intel og Apple Silicon), plus iMac, Mac mini, Mac Studio og Mac Pro. Se <a href="/mac-reparation/">Mac-reparation</a>.'],
    ['Reparerer I Microsoft Surface-enheder?', 'Ja — Surface Pro, Surface Laptop og Surface Book, inklusive specialiseret digitizer- og touchskærm-reparation. Se <a href="/microsoft-surface-reparation/">Microsoft Surface-reparation</a>.'],
    ['Reparerer I Samsung Galaxy Book-bærbare?', 'Ja — Galaxy Book3, Galaxy Book4 Pro, Galaxy Book3 360 og Galaxy Book Go. Se <a href="/samsung-reparation/">Samsung-reparation</a>.'],
    ['Hvad med mærker, der ikke er nævnt her — Toshiba, Gigabyte, LG gram, Razer?', 'Vi reparerer stort set alle mærker og specialbyggede opsætninger — se <a href="/andre-maerker-reparation/">Andre mærker & specialbyggede</a>.'],
    ['Bygger I specialbyggede gaming-pc’er, ikke kun reparerer dem?', 'Ja — fortæl os dit budget og formål, så anbefaler vi komponenter, bygger den og tester den før overdragelse. Se vores <a href="/gaming-pc-reparation/">Gaming-pc</a>-side.'],
  ]],
  ['Services', [
    ['Kan I opgradere min gamle bærbar til en SSD?', 'Ja — ofte en af de mest mærkbare hastighedsforbedringer, du kan lave på en ældre maskine. Se <a href="/ssd-opgradering/">SSD-opgradering</a>.'],
    ['Reparerer I væskeskade?', 'Ja, på alle mærker og modeller. Væskeskade-fejlsøgning fungerer anderledes end vores standardpriser — det er en fast pris på 600 kr. inkl. moms, tager 4–5 dage, og der er ingen ekspresmulighed, da en ordentlig vurdering tager tid. Se <a href="/vaeskeskade-reparation/">Væskeskade-reparation</a>.'],
    ['Kan I gendanne data fra en svigtet harddisk?', 'Ofte, ja — det afhænger af svigtets type og alvorlighed. Vi vurderer først og giver et ærligt svar. Se <a href="/backup-og-datagendannelse/">Backup & datagendannelse</a>.'],
    ['Fjerner I virus og malware?', 'Ja, på både pc og Mac. Se <a href="/virus-og-malwarefjernelse/">Fjernelse af virus & malware</a>.'],
    ['Renser I støv og påfører ny kølepasta?', 'Ja — en almindelig løsning på overophedning eller blæserstøj på både bærbare og stationære gaming-pc’er.'],
    ['Udbedrer I ladeporte?', 'Ja, på tværs af bærbar-mærker. Se <a href="/ladestik-reparation/">Reparation af ladeport</a>.'],
  ]],
  ['IT-support til erhverv', [
    ['Kan en virksomhed sende flere enheder ind på én gang til reparation eller opsætning?', 'Ja — det er almindeligt for virksomheder og kobler sig til vores IT-support til erhverv ved større eller løbende behov.'],
    ['Tilbyder I løbende IT-support til virksomheder, ikke kun enkeltstående reparationer?', 'Ja — IT-supportaftaler til fast pris med ubegrænset support, overvågning og sikkerhed. Se vores side om <a href="/it-support-til-erhverv/">IT-support til erhverv</a>.'],
    ['Hvad er forskellen på en enkeltstående reparation og en supportaftale?', 'En reparation er en enkelt løsning på et bestemt problem. En supportaftale er en løbende, fast månedlig ordning, der dækker ubegrænset support, overvågning og sikkerhed for din virksomhed — designet til at forebygge problemer frem for bare at udbedre dem bagefter.'],
  ]],
  ['Butik', [
    ['Sælger I computere, ikke kun reparerer dem?', 'Ja — nye og istandsatte computere samt backup- og sikkerhedsudstyr findes i vores <a href="/butik/">butik</a>.'],
    ['Er der garanti på istandsatte computere?', 'Ja — istandsatte computere kommer med garanti; se <a href="/butik/computere/refurbished/">butikken</a> for detaljer.'],
  ]],
];
const stripTags = (h) => h.replace(/<[^>]+>/g, '');
export const GENERAL_FAQ = FAQ_GROUPS.flatMap(([, items]) => items.map(([q, a]) => ({ q, a: stripTags(a) })));
export function faqPageHtml() {
  const sections = FAQ_GROUPS.map(([title, items], i) => {
    const rows = items.map(([q, a]) => `<details><summary>${esc(q)}</summary><div class="answer">${a}</div></details>`).join('');
    return `<section class="section${i%2? ' alt':''}"><div class="wrap"><div class="eyebrow">${esc(title)}</div><div class="faq" style="max-width:900px">${rows}</div></div></section>`;
  }).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Hjælp · FAQ</div>
    <h1>Ofte stillede spørgsmål</h1><p class="lead">Alt om vores reparationer, mærker, services, erhvervs-IT og butik — samlet ét sted.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kontakt os</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  ${sections}
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Har du stadig et spørgsmål?</h2><p>Ring, skriv eller kig forbi værkstedet på Falkoner Allé — vi svarer hurtigt.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kontakt os</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></div></section>`;
}

// ---------- Network Equipment hub ----------
export const NETWORK_HUB_FAQ = [
  { q: 'Hjælper I med router-opsætning til både private og virksomheder?', a: 'Ja, fra simpelt hjemme-WiFi til virksomhedsnetværk med flere access points.' },
  { q: 'Jeg er ikke sikker på, hvilken af disse der matcher mit udstyr — kan jeg bare spørge?', a: 'Ja, kontakt os, så peger vi dig mod den rette service eller hjælper bare direkte.' },
];
export function networkHubHtml() {
  const cards = [
    ['UniFi (Ubiquiti)', 'Opsætning, VLAN, netværk med flere access points', '/unifi-opsaetning/'],
    ['Netgear', 'Nighthawk- og Orbi-opsætning og fejlfinding', '/netgear-opsaetning/'],
    ['TP-Link', 'Archer-routere og Deco mesh-systemer', '/tp-link-opsaetning/'],
    ['ASUS-routere', 'Almindelige, gaming- og AiMesh-opsætninger', '/asus-router-opsaetning/'],
    ['Eero & Google Nest WiFi', 'Enkel mesh-systemopsætning', '/eero-google-nest-wifi-opsaetning/'],
  ].map(([t, d, h]) => `<a class="card card-link" href="${h}"><div class="card-icon brand-icon">${lucide.wifi}</div><h3>${esc(t)}</h3><p class="models">${esc(d)}</p><span class="arrow">Se →</span></a>`).join('');
  const faqHtml = NETWORK_HUB_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Netværk · Frederiksberg &amp; København</div>
    <h1>Opsætning &amp; support af netværksudstyr</h1><p class="lead">Fra en enkelt router til et fuldt netværk med flere access points.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Få netværkshjælp</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Netværksudstyr</span></div>
    <p>Uanset om du opsætter en ny router, fejlfinder en ustabil forbindelse eller vil have ordentlig netværksstyring til et hjem eller en mindre virksomhed, arbejder vi med alle de store mærker.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Mærker vi understøtter</div><h2>Vælg dit udstyr</h2><div class="grid grid-3">${cards}</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Netværksopsætning — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Er du i tvivl om, hvor du skal starte?</h2><p>Fortæl os, hvilket udstyr du har, og hvad der driller — så peger vi dig mod den rette service eller hjælper direkte.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Få netværkshjælp</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/wifi-og-netvaerksfejlfinding/">WiFi- &amp; netværksfejlfinding →</a><a href="/it-support-til-erhverv/">IT-support til erhverv →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}

// ---------- Websites & SEO hub ----------
export const WEBSITES_HUB_FAQ = [
  { q: 'Hvordan betaler kunder i udlandet?', a: 'Vi tager imod international bankoverførsel og kortbetaling. Betalingsdetaljer gøres klare, når vi aftaler projektets omfang.' },
  { q: 'Arbejder I på tværs af forskellige tidszoner?', a: 'Ja — vi aftaler kommunikationstider på forhånd, der passer til din placering.' },
  { q: 'Hvilken valuta er fakturaer i?', a: 'Typisk DKK eller EUR — vi kan drøfte, hvad der fungerer bedst for dig, når projektet starter.' },
  { q: 'Hvor lang tid tager det at bygge en hjemmeside?', a: 'Afhænger af omfanget — en simpel virksomhedsside er hurtigere end en specialbygget webshop. Vi giver dig en realistisk tidsplan som en del af projekttilbuddet.' },
  { q: 'Tilbyder I løbende vedligeholdelse, efter siden er lanceret?', a: 'Ja — opdateringer, sikkerhedsrettelser og små ændringer kan aftales som en løbende service frem for en engangsopgave.' },
  { q: 'Bygger I både hjemmesiden OG håndterer SEO, eller kun det ene?', a: 'Begge dele — nogle kunder vil have begge fra start, andre har allerede en side og vil bare have hjælp til SEO eller Ads.' },
  { q: 'Er dette kun for virksomheder, eller kan private også få bygget en personlig hjemmeside?', a: 'Primært rettet mod virksomheder, men kontakt os uanset, hvad du har brug for.' },
];
export function websitesHubHtml() {
  const cards = [
    ['Webdesign & udvikling', 'Moderne, hurtige, mobilvenlige sider — virksomhedssider, porteføljer eller simple webshops.', '/webdesign-og-udvikling/'],
    ['SEO-ydelser', 'Rigtig søgeordsanalyse, teknisk SEO og indholdsstrategi — ikke bare en månedlig rapport.', '/seo-ydelser/'],
    ['Google Ads-administration', 'Målrettede kampagner, styret ordentligt, så dit budget bruges på de rette søgninger.', '/google-ads-administration/'],
  ].map(([t, d, h]) => `<a class="card card-link" href="${h}"><h3>${esc(t)}</h3><p>${esc(d)}</p><span class="arrow">Læs mere →</span></a>`).join('');
  const faqHtml = WEBSITES_HUB_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const quote = `mailto:${site.emailBusiness}?subject=${encodeURIComponent('Forespørgsel om hjemmeside & SEO')}`;
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Erhverv · Hjemmesider &amp; SEO</div>
    <h1>Hjemmesider &amp; SEO</h1><p class="lead">En hjemmeside, der virker, og som findes af dem, der leder efter den.</p>
    <div class="cta-row"><a class="btn btn-white" href="${quote}">Få et tilbud</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Hjemmesider &amp; SEO</span></div>
    <p>Det er ikke nok at have en hjemmeside, hvis ingen finder den. Vi bygger moderne, hurtige hjemmesider og sørger så for, at de faktisk rangerer — gennem rigtigt SEO-arbejde og, hvor det giver mening, målrettede Google Ads. Det er ikke outsourcet til en skabelon eller en junior-kundeansvarlig — det samme team, der bygger din side, laver det tekniske SEO-arbejde bagved.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Hvad vi laver</div><h2>Tre måder vi hjælper på</h2><div class="grid grid-3">${cards}</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Hjemmesider &amp; SEO — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Vil du findes online?</h2><p>Fortæl os, hvad du har brug for — en ny side, bedre placeringer eller annoncekampagner, der faktisk konverterer. Vi afdækker det og giver et tilbud, uforpligtende.</p><div class="cta-row"><a class="btn btn-white" href="${quote}">Få et tilbud</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/it-support-til-erhverv/">IT-support til erhverv →</a><a href="/hosting/">Hosting →</a><a href="/domaener/">Domæner →</a><a href="/kontakt/">Kontakt →</a></div></div></div></section>`;
}
// ---------- Studerende (CBS & DTU) — student-facing SEO/FAQ page ----------
export const STUDENTS_FAQ = [
  { q: 'Ligger PCKlinik tæt på CBS?', a: 'Ja. Vores værksted på Falkoner Allé 108 ligger i gåafstand fra CBS på Solbjerg Plads og Frederiksberg campus — nemt at nå til fods, på cykel eller med metro, hvis din bærbare driller midt i en aflevering.' },
  { q: 'Skal jeg bestille tid, eller kan jeg bare komme forbi?', a: 'Ingen tidsbestilling nødvendig — bare kom forbi i åbningstiden, så kigger vi på den. Har du en stram deadline, så sig til, så prioriterer vi med ekspresfejlsøgning, hvor det er muligt.' },
  { q: 'Jeg læser på DTU i Lyngby — kan I stadig hjælpe?', a: 'Ja. DTU Lyngby ligger længere væk end vores værksted på Frederiksberg, men indsendelse dækker afstanden. Kontakt os, så aftaler vi det ud fra din situation.' },
  { q: 'Kan jeg låne en computer, mens min bliver repareret?', a: 'Efter tilgængelighed, ja — vi kan i nogle tilfælde låne dig en bærbar, mens din bliver repareret. Da vi kun har et begrænset antal lånecomputere, kan vi ikke garantere det, og det afhænger af, hvad der er ledigt. Spørg os, når du afleverer din computer.' },
  { q: 'Kan I hjælpe med backup, før jeg afslutter studiet eller flytter?', a: 'Ja. Vi hjælper med at sikre dine data — opgaver, projekter og noter — inden studieophold eller flytning, og vi fører backup- og sikkerhedsudstyr i vores butik. Se Backup & sikkerhed, eller kontakt os, så finder vi den rette løsning.' },
  { q: 'Reparerer I også university-ejede computere (CBS/DTU-udstyr), eller kun private?', a: 'Ja, vi reparerer også university-ejede enheder fra CBS, DTU og andre uddannelsesinstitutioner — ikke kun private computere. Kom forbi med din institution-udstedte laptop, så kigger vi på den på samme vilkår som private enheder.' },
  { q: 'Får studerende rabat på reparation?', a: 'Ja — studerende får 10% rabat på reparationsprisen. Vis blot dit studiekort (CBS, DTU eller anden uddannelsesinstitution), når du afleverer din computer.' },
];
export function studentsHtml() {
  const faqHtml = STUDENTS_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const services = [
    ['Skærmudskiftning', 'Revnet eller sort skærm på din bærbare? Skift til fast pris — en af de mest almindelige studenterreparationer.', '/udskiftning-af-skaerm/'],
    ['SSD-opgradering', 'Er din ældre bærbare blevet langsom? En SSD-opgradering giver markant hurtigere opstart — populær hos DTU- og CBS-studerende.', '/ssd-opgradering/'],
    ['Batteriskift', 'Holder batteriet ikke længere en forelæsning? Vi skifter det, så du kan arbejde uden en stikkontakt igen.', '/mac-batteriskift/'],
    ['Backup & datagendannelse', 'Sikr dine opgaver og projekter — før noget går galt, eller gendan dem, hvis det allerede er sket.', '/backup-og-datagendannelse/'],
  ].map(([t, d, h]) => `<a class="card card-link" href="${h}"><h3>${esc(t)}</h3><p>${esc(d)}</p><span class="arrow">Læs mere →</span></a>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Studerende · CBS &amp; DTU</div>
    <h1>Computerreparation til studerende — CBS &amp; DTU</h1>
    <p class="lead">Er din bærbare gået i stykker midt i semesteret? Vi reparerer PC og Mac for studerende ved CBS og DTU — hurtigt, til fast pris og i gåafstand fra Solbjerg Plads.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Studerende</span></div>
    <p>Vi ved, hvor galt det rammer, når computeren svigter lige op til en eksamen eller aflevering. Derfor tilbyder vi hurtig, ærlig computerreparation til studerende i København — uanset om du læser på CBS på Frederiksberg eller på DTU i Lyngby. Vores værksted ligger på Falkoner Allé 108, i gåafstand fra Solbjerg Plads, så en MacBook-reparation eller en bærbar med revnet skærm behøver ikke koste dig en hel dag.</p>
    <p>Fejlsøgning koster 300 kr. inkl. moms (3–4 dage), eller vælg ekspres for 600 kr. inkl. moms (1–2 timer) — reparationen klar inden for 24 timer, hvis der ikke skal bestilles specielle reservedele. Du får altid en fast pris, før vi går i gang, så der er ingen overraskelser på et studiebudget.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Tæt på campus</div><h2>Gåafstand fra CBS — og indsendelse fra DTU</h2>
    <p class="sub">For <strong>CBS-studerende</strong> er vi kun kort afstand fra Solbjerg Plads og Frederiksberg campus — kom forbi mellem forelæsninger. For <strong>DTU-studerende i Lyngby</strong> dækker vi afstanden med indsendelse, så du ikke selv skal køre hele vejen til Frederiksberg.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Populært hos studerende</div><h2>Det får studerende oftest lavet</h2>
    <div class="grid grid-4">${services}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Studerende — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Bærbar gået ned før en deadline?</h2><p>Kom forbi uden tidsbestilling, eller ring. Fejlsøgning 300 kr. inkl. moms (3–4 dage) eller ekspres 600 kr. inkl. moms (1–2 timer), fast pris før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/computerreparation-frederiksberg/">Computerreparation på Frederiksberg →</a><a href="/butik/backup-sikkerhed/">Backup &amp; sikkerhed →</a><a href="/macbook-reparation/">MacBook-reparation →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}

// ---------- Typiske reparationspriser (repair price ranges) ----------
export function priceRangesHtml() {
  const rows = [
    ['Skærm (MacBook)', 'fra 1.800 kr.'],
    ['Skærm (Windows-bærbar)', 'fra 1.500 kr.'],
    ['Batteri (MacBook)', 'fra 1.500 kr.'],
    ['Batteri (Windows-bærbar)', 'fra 800 kr.'],
    ['SSD-opgradering (256 GB)', 'fra 1.800 kr. (højere pris ved større kapacitet)'],
  ].map(([r, p]) => `<tr><td>${esc(r)}</td><td class="issue">${esc(p)}</td></tr>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Priser · Frederiksberg &amp; København</div>
    <h1>Typiske reparationspriser</h1><p class="lead">Vejledende fra-priser på de mest almindelige reparationer — inkl. reservedele og arbejdsløn.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Typiske reparationspriser</span></div>
    <p>Priserne nedenfor er vejledende <strong>fra-priser</strong> (startpriser) og gælder de mest almindelige reparationer. Den endelige pris afhænger af model og skadens omfang — men du får altid et fast tilbud, før vi går i gang, så der ikke er nogen overraskelser.</p>
    <p>Selve fejlsøgningen prissættes særskilt: standard koster 300 kr. inkl. moms (3–4 dage), eller ekspres 600 kr. inkl. moms (1–2 timer). Væskeskade har en fast pris på 600 kr. inkl. moms (4–5 dage, ingen ekspresmulighed).</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Vejledende priser</div><h2>Fra-priser på almindelige reparationer</h2>
    <div class="table-wrap" style="margin-top:20px"><table class="models"><thead><tr><th>Reparation</th><th>Vejledende pris</th></tr></thead><tbody>${rows}</tbody></table></div>
    <div class="trust-line" style="margin-top:24px"><strong>Alle priser er inkl. reservedele og arbejdsløn.</strong> SSD-prisen gælder 256 GB; større kapacitet koster mere. Fast tilbud, før vi går i gang.</div></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Vil du have en pris på din reparation?</h2><p>Kom forbi uden tidsbestilling eller kontakt os — vi laver en fejlsøgning og giver dig et fast tilbud, før noget arbejde går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/udskiftning-af-skaerm/">Skærmudskiftning →</a><a href="/mac-batteriskift/">Mac-batteriskift →</a><a href="/ssd-opgradering/">SSD-opgradering →</a><a href="/forsikringsreparation/">Forsikringsreparation →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}

// ---------- IT-rådgivning (erhverv) ----------
export const IT_RAADGIVNING_FAQ = [
  { q: 'Hvad er NIS2, og gælder det min virksomhed?', a: 'NIS2 er EU’s cybersikkerhedsdirektiv, nu i dansk lov. Det rammer ikke kun store virksomheder — kravene følger med ned i leverandørkæden, så I kan være omfattet via en kunde. Vi hjælper med at afklare det og med den tekniske del.' },
  { q: 'Hjælper I med at blive GDPR-klar?', a: 'Ja, med den praktiske IT-side: databeskyttelse, backup, adgangsstyring og dokumentation. Vi er ikke advokater, men vi får teknikken på plads.' },
  { q: 'Koster den første konsultation noget?', a: 'Nej. Den første konsultation er gratis og uforpligtende.' },
  { q: 'Er I bundet til bestemte produkter eller leverandører?', a: 'Nej. Vi rådgiver uafhængigt ud fra, hvad der er rigtigt for jer.' },
  { q: 'Rådgiver I også helt små virksomheder?', a: 'Ja — fra enkeltmandsvirksomheder til mindre virksomheder og klinikker.' },
];
export function itRaadgivningHtml() {
  const areas = [
    ['🛡️', 'Sikkerhed og drift', 'Hvor sårbar er jeres opsætning, og hvad skal der til for at sove roligt om natten.'],
    ['💾', 'Backup og gendannelse', 'Kan I komme videre, hvis en maskine dør, eller I bliver ramt af ransomware.'],
    ['🔑', 'Adgang og brugerstyring', 'Hvem har adgang til hvad, og hvad sker der, når en medarbejder stopper.'],
    ['📧', 'Microsoft 365, hosting og domæner', 'Det rigtige setup til jeres størrelse, uden at betale for mere end I bruger.'],
  ].map(([i, t, b]) => `<div class="card"><div class="card-icon">${i}</div><h3>${esc(t)}</h3><p>${esc(b)}</p></div>`).join('');
  const faqHtml = IT_RAADGIVNING_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Erhverv · IT-rådgivning</div>
    <h1>IT-rådgivning til din virksomhed</h1><p class="lead">Ærlig IT-rådgivning til små og mellemstore virksomheder i København og på Frederiksberg — GDPR, NIS2, og hvad der reelt giver mening for jer. Første konsultation er gratis.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book en konsultation</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>IT-rådgivning</span></div>
    <p>Har du styr på din virksomheds IT — eller er det bare noget, der kører, indtil det ikke gør? Hos PCKlinik giver vi ærlig IT-rådgivning til små og mellemstore virksomheder i København og på Frederiksberg. Ingen salgstale, ingen lange kontrakter for at få en snak — bare et klart svar på, hvad der giver mening for jer.</p>
    <p>Vi er et erfarent team med eget værksted på Falkoner Allé, og rådgivning er en fast del af "al din IT under ét tag": vi reparerer, vi sælger, vi rådgiver, og vi supporterer — så I har ét sted at gå til, og ét team, der kender jeres opsætning.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Det rådgiver vi om</div><h2>Fire områder, vi hjælper virksomheder med</h2><div class="grid grid-2">${areas}</div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="eyebrow">NIS2</div><h2>Gælder det din virksomhed?</h2>
    <p>NIS2 er EU’s nye direktiv om cybersikkerhed, og det er trådt i kraft i dansk lovgivning. Mange mindre virksomheder tror, det kun rammer de store — men kravene følger med ned i leverandørkæden, så I kan være omfattet, fordi en større kunde er det. Vi er ikke advokater, men vi hjælper med den tekniske side: at kortlægge jeres nuværende sikkerhed, forklare hvad NIS2 betyder i praksis for jeres IT, og få de rette tekniske foranstaltninger på plads.</p></div></section>
  <section class="section alt"><div class="wrap lead-copy"><div class="eyebrow">GDPR</div><h2>GDPR i praksis</h2>
    <p>GDPR handler ikke kun om en cookiebanner. Vi ser på, hvordan I opbevarer og beskytter persondata, om jeres backup og adgangsstyring holder, og hvad I skal kunne dokumentere. Konkret hjælp — ikke jura-jargon.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Sådan foregår det</div><h2>Fire trin, ingen bindinger</h2><div class="steps">
    <div class="step"><div class="num">1</div><h3>Gratis første konsultation</h3><p>Uforpligtende, så vi forstår jeres situation.</p></div>
    <div class="step"><div class="num">2</div><h3>Vi kigger på jeres opsætning</h3><p>Nuværende IT og sikkerhed gennemgås.</p></div>
    <div class="step"><div class="num">3</div><h3>I får en klar anbefaling</h3><p>Hvad haster, hvad kan vente, og hvad det koster. Ingen salgstale.</p></div>
    <div class="step"><div class="num">4</div><h3>I beslutter</h3><p>Vil I have os til at føre det ud i livet, gør vi det — ellers har I stadig en brugbar plan i hånden.</p></div></div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>IT-rådgivning — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Første konsultation er gratis</h2><p>Den første samtale koster ikke noget og forpligter til ingenting. Ring på <a href="${site.phoneHref}" style="color:#A9C1F0">${site.phone}</a> eller skriv til <a href="mailto:${site.emailBusiness}" style="color:#A9C1F0">${site.emailBusiness}</a>, så aftaler vi et tidspunkt — på Falkoner Allé, over video eller ude hos jer.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book en konsultation</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/it-support-til-erhverv/">IT-support til erhverv →</a><a href="/microsoft-365-erhverv/">Microsoft 365 til virksomheder →</a><a href="/it-support-frederiksberg/">IT-support på Frederiksberg →</a><a href="/it-support-koebenhavn/">IT-support i København →</a><a href="/fjernsupport/">Fjernsupport →</a><a href="/hosting/">Hosting →</a><a href="/domaener/">Domæner →</a><a href="/windows-10-erhverv-migrering/">Windows 10-migrering for virksomheder →</a><a href="/it-support-advokatkontor/">IT-support til advokatkontorer →</a><a href="/it-support-klinik/">IT-support til klinikker →</a><a href="/it-support-mindre-virksomheder/">IT-support til mindre virksomheder →</a><a href="/it-support-revisor-bogholder/">IT-support til revisorer &amp; bogholdere →</a><a href="/it-support-butik-og-restaurant/">IT-support til butikker &amp; restauranter →</a><a href="/automatisk-backup/">Automatisk Backup →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}

// ---------- Forsikringsreparation ----------
export const FORSIKRING_FAQ = [
  { q: 'Dækker min forsikring skade på computer eller Mac?', a: 'Ofte ja — indbo- og elektronikforsikringer dækker typisk pludselige skader som væske- og faldskade. Men det er dit forsikringsselskab, der afgør din konkrete sag.' },
  { q: 'Hvordan starter jeg en forsikringssag hos jer?', a: 'Kom forbi Falkoner Allé 108 eller send enheden ind. Vi fejlsøger og sender dig et tilbud med den nødvendige dokumentation.' },
  { q: 'Udsteder I den dokumentation, forsikringen kræver?', a: 'Ja — du får et specificeret tilbud og en faktura, som dit forsikringsselskab skal bruge.' },
  { q: 'Betaler forsikringen jer direkte?', a: 'Nej. Du får tilbuddet og fakturaen fra os og sender dem til dit forsikringsselskab; afregningen er mellem dig og selskabet.' },
  { q: 'Hvad med selvrisiko?', a: 'Selvrisikoen er en sag mellem dig og dit forsikringsselskab — den afhænger af din police.' },
];
export function forsikringsreparationHtml() {
  const faqHtml = FORSIKRING_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const damages = ['Væskeskade', 'Faldskade og knækkede skærme', 'Skader efter lynnedslag/overspænding', 'Skader i forbindelse med tyveri/indbrud'].map((d) => `<li>${esc(d)}</li>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Forsikringsreparation · Frederiksberg &amp; København</div>
    <h1>Reparation dækket af din forsikring</h1><p class="lead">Skadet computer eller Mac? Vi laver reparationer, der dækkes af din forsikring — du får et tilbud og en faktura til dit forsikringsselskab.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Forsikringsreparation</span></div>
    <p>Er din computer eller Mac blevet skadet — spildt væske, tabt på gulvet, ramt af et lynnedslag? Så er den ofte dækket af din indbo- eller elektronikforsikring. Vi hjælper hver uge kunder med forsikringssager, og vi gør processen så enkel som muligt.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Sådan foregår det</div><h2>Fem trin fra skade til reparation</h2><div class="steps">
    <div class="step"><div class="num">1</div><h3>Du kommer forbi</h3><p>Falkoner Allé 108, eller send din enhed til os fra resten af landet.</p></div>
    <div class="step"><div class="num">2</div><h3>Vi fejlsøger &amp; giver et tilbud</h3><p>Med præcis den dokumentation, dit forsikringsselskab skal bruge.</p></div>
    <div class="step"><div class="num">3</div><h3>Du får det godkendt</h3><p>Du sender tilbuddet til dit forsikringsselskab. (Selvrisiko er en sag mellem dig og selskabet.)</p></div>
    <div class="step"><div class="num">4</div><h3>Vi reparerer</h3><p>Efter godkendelse — fast pris, samme kvalitet som altid.</p></div>
    <div class="step"><div class="num">5</div><h3>Du afregner</h3><p>Du får fakturaen, som du afregner med dit forsikringsselskab.</p></div></div>
    <p class="sub" style="margin-top:20px">Kort sagt: du får tilbud og faktura fra os, og du sender dem videre til din forsikring. Vi holder det simpelt og reparerer maskinen — du er aldrig i tvivl om, hvad der sker.</p></div></section>
  <section class="section"><div class="wrap"><div class="callout"><strong>Ærligt om det:</strong> Vi håndterer ikke selve forsikringssagen for dig og kan ikke garantere, at din skade er dækket — det afgør dit forsikringsselskab. Men du får præcis den dokumentation, de skal bruge, så din sag står så stærkt som muligt.</div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Typiske skader</div><h2>Typiske forsikringsskader vi reparerer</h2><ul class="check-list">${damages}</ul></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Forsikringsreparation — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Klar til at starte din forsikringssag?</h2><p>Fejlsøgning 300 kr. inkl. moms (3–4 dage) eller ekspres for 600 kr. inkl. moms (1–2 timer). Fast pris, før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/vaeskeskade-reparation/">Væskeskade-reparation →</a><a href="/it-support-til-erhverv/">IT-support til erhverv →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}

// ---------- Reparere eller købe ny computer ----------
export const REPARERE_KOEBE_FAQ = [
  { q: 'Hvornår kan det betale sig at reparere frem for at købe ny?', a: 'Når maskinen ikke er for gammel og fejlen er afgrænset — fx SSD/RAM-opgradering, batteri eller skærm. Ligger reparationen under ca. halvdelen af en tilsvarende maskine, anbefaler vi som regel reparation.' },
  { q: 'Min computer er blevet langsom — skal jeg købe en ny?', a: 'Sjældent. Det skyldes ofte en fyldt disk eller for lidt RAM, og en SSD-/RAM-opgradering gør den hurtig igen til en brøkdel af prisen på en ny.' },
  { q: 'Hvor gammel er "for gammel" at reparere?', a: 'Der er ingen fast grænse, men over 5-6 år begynder dyre reparationer (fx bundkort) sjældent at kunne betale sig. Vi vurderer det konkret.' },
  { q: 'Kan I hjælpe med at overføre mine data til en ny maskine?', a: 'Ja, det gør vi som en fast del af servicen.' },
  { q: 'Tager I min gamle computer retur?', a: 'Ja. Vi køber brugte maskiner, og du kan bytte din gamle ind mod en ny eller refurbished. Er den ikke længere noget værd, tager vi den af hænderne på dig, sletter dine data sikkert og sender den til genbrug.' },
];
export function reparereEllerKoebeHtml() {
  const faqHtml = REPARERE_KOEBE_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const goodSigns = [
    'Maskinen er ikke ret gammel (typisk under 5-6 år) og fejlen er afgrænset: en SSD- eller RAM-opgradering, et batteriskift, en ny skærm eller en rens. Ofte små beløb, der giver maskinen flere år.',
    'En langsom computer skyldes tit bare en fyldt disk eller for lidt RAM — det er en billig opgradering, ikke en grund til at købe ny.',
  ].map((t) => `<li>${esc(t)}</li>`).join('');
  const buySigns = [
    'Maskinen er gammel, og fejlen er dyr (fx bundkort på en billig, ældre bærbar).',
    'Reparationen nærmer sig halvdelen af prisen på en tilsvarende ny eller refurbished maskine — så er pengene som regel bedre brugt på en nyere computer.',
  ].map((t) => `<li>${esc(t)}</li>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Guide · Reparation eller ny computer</div>
    <h1>Reparere eller købe ny computer?</h1><p class="lead">Det korte svar: det kommer an på fejlen og på maskinens alder — og vi siger det ærligt, også når reparation ikke kan betale sig.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Reparere eller købe ny computer</span></div>
    <p>Det korte svar: det kommer an på fejlen og på maskinens alder — og vi siger det ærligt, også når reparation ikke kan betale sig. Vi lever af at reparere, men vi vil hellere have en kunde, der stoler på os, end sælge en reparation, der ikke giver mening.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Reparere</div><h2>Hvornår kan det betale sig at reparere?</h2><ul class="check-list">${goodSigns}</ul></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Købe ny</div><h2>Hvornår kan det bedre betale sig at købe ny (eller refurbished)?</h2><ul class="check-list">${buySigns}</ul></div></section>
  <section class="section alt"><div class="wrap"><div class="trust-line"><strong>Vores tommelfingerregel:</strong> koster reparationen mindre end ca. halvdelen af en tilsvarende maskine, er reparation næsten altid det rigtige. Ligger den over, kigger vi på det sammen med dig.</div></div></section>
  <section class="section"><div class="wrap lead-copy">
    <p>Og skal du alligevel have en anden maskine, har vi testede <a href="/butik/computere/refurbished/">refurbished computere</a> i butikken — samme sted, samme team, og vi flytter gerne dine data over. Al din IT under ét tag.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Fejlsøgning &amp; pris</div><h2>Sådan finder vi ud af det</h2><p class="sub">Vi fejlsøger din computer (standard 300 kr. inkl. moms, 3–4 dage — eller ekspres 600 kr. inkl. moms, 1–2 timer) og giver dig et fast tilbud. Så kender du prisen på reparationen, før du beslutter dig — og vi siger ærligt, hvad vi selv ville gøre.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Reparere eller købe ny — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Er du i tvivl om din maskine?</h2><p>Fejlsøgning 300 kr. inkl. moms (3–4 dage) eller ekspres for 600 kr. inkl. moms (1–2 timer). Fast pris, før vi går i gang — og et ærligt svar på, om det kan betale sig.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="/butik/computere/refurbished/">Se refurbished computere →</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/butik/">Butik →</a><a href="/butik/computere/refurbished/">Refurbished computere →</a><a href="/ssd-opgradering/">SSD-opgradering →</a><a href="/grafikkort-fejl-baerbar/">Grafikkortfejl på bærbar →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}

// ---------- Hvor længe holder en MacBook? ----------
// Rebuild of a dead URL that still had 533 views on a redirect to
// /macbook-reparation/ — proven demand, wrong intent match. The 301 rule
// for this slug in public/_redirects must be removed in the SAME commit
// that adds this page to build.mjs, or the URL stays unreachable.
export const MACBOOK_LEVETID_FAQ = [
  { q: 'Hvor mange år holder en MacBook typisk?', a: '5–10 år ved normal brug er et realistisk udgangspunkt, men batteriets tilstand og fortsat softwareunderstøttelse betyder mere end alderen alene.' },
  { q: 'Hvordan ved jeg, om batteriet skal skiftes?', a: 'Gå til Systemindstillinger → Batteri → Batteristatus. Står der "Service anbefales", er kapaciteten faldet mærkbart.' },
  { q: 'Kan jeg opgradere RAM eller lagerplads i min MacBook?', a: 'På Apple Silicon (M1 og nyere) nej — det er integreret i chippen og fastlåst ved købet. På ældre Intel-modeller var det muligt på nogle modeller.' },
  { q: 'Hvornår kan jeg ikke længere opdatere min MacBook?', a: 'Typisk efter ca. 7–8 år stopper nye macOS-versioner; derefter kan der komme en periode med kun sikkerhedsopdateringer.' },
  { q: 'Skal jeg reparere eller købe en ny?', a: 'Det afhænger af fejlen og maskinens alder — se vores guide til at vælge. Vi siger ærligt, hvad vi selv ville gøre.' },
];
export function macbookLevetidHtml() {
  const faqHtml = MACBOOK_LEVETID_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const factors = [
    'Batteri: på nyere modeller er batteriet typisk designet til at bevare op til 80&nbsp;% kapacitet ved op til ca. 1000 opladningscyklusser. På ældre modeller er tallet lavere — ofte 300–500 cyklusser. Herefter mærkes faldet i dagligdagen.',
    'Softwareunderstøttelse: Apple opdaterer typisk en Mac til nye macOS-versioner i omkring 7–8 år. Derefter kommer der ofte sikkerhedsopdateringer i en kortere periode, men ingen nye funktioner.',
    'Generel slitage: tastatur, hængsler og porte kan svigte før elektronikken — særligt ved hyppig transport.',
  ].map((t) => `<li>${t}</li>`).join('');
  const signs = [
    'Den kan ikke længere opdateres til den nyeste macOS.',
    'Batteristatus viser "Service anbefales".',
    'En reparation ville koste tæt på det halve af en tilsvarende ny eller refurbished model.',
    'Den føles konsekvent langsom uden en konkret, løsbar årsag.',
  ].map((t) => `<li>${esc(t)}</li>`).join('');
  const extend = [
    'Batteriskift — ofte den enkeltfaktor, der giver mest ekstra levetid. <a href="/mac-batteriskift/">Se mac-batteriskift →</a>',
    'Rengøring — støv i blæser og porte er en overset årsag til overophedning og faldende ydelse.',
    'RAM og lager: på ældre Intel-MacBooks kunne visse modeller opgraderes. På Apple Silicon (M1 og nyere) er RAM og lager en fast del af chippen og kan ikke opgraderes bagefter — det skal vælges ved købet.',
  ].map((t) => `<li>${t}</li>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Guide · MacBook-levetid</div>
    <h1>Hvor længe holder en MacBook?</h1><p class="lead">De fleste MacBooks holder 5–10 år ved normal brug, men det er ikke ét tal, der gælder for alle.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Hvor længe holder en MacBook?</span></div>
    <p>De fleste MacBooks holder 5–10 år ved normal brug, men det er ikke ét tal, der gælder for alle. Det afhænger af batteriets tilstand, hvor længe Apple fortsat opdaterer den, og hvordan den er blevet passet undervejs.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Levetid</div><h2>Hvad afgør levetiden</h2><ul class="check-list">${factors}</ul></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Advarselstegn</div><h2>Tegn på, at den nærmer sig enden</h2><ul class="check-list">${signs}</ul></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Forlæng levetiden</div><h2>Hvad kan forlænge den</h2><ul class="check-list">${extend}</ul></div></section>
  <section class="section"><div class="wrap lead-copy">
    <p>Vi ser tit MacBooks, folk troede var færdige, som bare manglede et batteri. Og vi siger det ærligt den anden vej også: er maskinen 9 år gammel og bundkortet dødt, er pengene bedre brugt på en anden maskine.</p>
    <p>Usikker på, hvad der er rigtigst for din? <a href="/reparere-eller-koebe-ny-computer/">Se vores guide til at vælge →</a> Fejlsøgning koster 300 kr. inkl. moms (3–4 dage) eller ekspres 600 kr. inkl. moms (1–2 timer, reparationen klar inden for 24 timer).</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>MacBook-levetid — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Skal din MacBook reddes eller udskiftes?</h2><p>Fejlsøgning 300 kr. inkl. moms (3–4 dage) eller ekspres for 600 kr. inkl. moms (1–2 timer). Fast pris, før vi går i gang — og et ærligt svar på, om det kan betale sig.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="/mac-batteriskift/">Se mac-batteriskift →</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/mac-batteriskift/">Mac-batteriskift →</a><a href="/macbook-reparation/">MacBook-reparation →</a><a href="/reparere-eller-koebe-ny-computer/">Reparere eller købe ny computer? →</a><a href="/butik/computere/refurbished/">Refurbished computere →</a><a href="/batteriet-holder-ikke/">Batteriet holder ikke →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}
// ---------- Windows 10-klyngen (4 sider) ----------
// Fakta verificeret mod Microsofts egne sider 2026-08-06 (ikke fra
// hukommelse — ESU-priser og slutdatoer har ændret sig flere gange, senest
// stille og roligt i juni 2026, hvor forbruger-ESU blev forlænget fra
// 13. oktober 2026 til 12. oktober 2027 uden en formel pressemeddelelse).
// Kilder: learn.microsoft.com/windows/whats-new/extended-security-updates,
// microsoft.com/windows/extended-security-updates,
// microsoft.com/windows/windows-11-specifications.
const WINDOWS10_CHECK_PARAGRAPH = 'Kan din maskine køre Windows 11? Vi tjekker den for dig — standardfejlsøgning koster 300 kr. inkl. moms (3–4 dage), eller ekspres 600 kr. inkl. moms (1–2 timer). Du får en klar besked om, hvad din maskine kan, og hvad der bedst kan betale sig: opgradering, hardwareopgradering eller ny maskine.';
export const WINDOWS10_HUB_FAQ = [
  { q: 'Kan jeg bare blive ved med at bruge Windows 10?', a: 'Rent teknisk ja — maskinen bliver ikke slukket. Men uden sikkerhedsopdateringer bliver den gradvist mere sårbar over for nye trusler, især hvis du bruger den til bankting, mail eller arbejde.' },
  { q: 'Er det gratis at forlænge sikkerheden på Windows 10?', a: 'For private findes der gratis muligheder (fx ved at synkronisere PC-indstillinger til din Microsoft-konto), eller en mindre engangsbetaling. For virksomheder koster det pr. enhed pr. år, og prisen stiger for hvert år — det er en midlertidig løsning, ikke en plan.' },
  { q: 'Hvad er hurtigst — opgradere eller købe ny?', a: 'Kan maskinen køre Windows 11, er en opgradering ofte hurtigst og billigst. Er den for gammel til at understøttes, er en ny eller refurbished maskine ofte det bedre valg. Vi giver dig et ærligt bud efter fejlsøgning.' },
  { q: 'Hvorfor kan min computer ikke opgraderes til Windows 11?', a: 'Oftest fordi den mangler TPM 2.0 eller har en for gammel processor. Se vores guide: Kan min computer køre Windows 11?' },
];
export function windows10HubHtml() {
  const faqHtml = WINDOWS10_HUB_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const paths = [
    '<strong>Opgradér til Windows 11</strong> — hvis maskinen er på Microsofts kompatibilitetsliste, er opgraderingen normalt gratis og den hurtigste vej videre. <a href="/kan-min-computer-koere-windows-11/">Tjek om din computer kan →</a>',
    '<strong>Opgradér hardware og kør videre, mens du planlægger</strong> — nogle maskiner mangler kun et par ting (fx en manglende TPM-indstilling, der kan aktiveres i BIOS). Kombineret med en midlertidig sikkerhedsforlængelse (ESU) kan det købe dig tid, men det er en overgangsløsning, ikke et endepunkt.',
    '<strong>Køb ny eller refurbished</strong> — er maskinen for gammel til Windows 11, og er en hardwareopgradering ikke pengene værd, er en ny eller refurbished computer ofte den ærligste løsning. <a href="/butik/computere/refurbished/">Se refurbished computere →</a>',
  ].map((t) => `<li>${t}</li>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Guide · Windows 10</div>
    <h1>Windows 10 er ikke længere sikker — her er dine muligheder</h1><p class="lead">Windows 10 mistede support 14. oktober 2025. Maskinen virker stadig, men får ingen sikkerhedsopdateringer mere.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Windows 10 support er slut</span></div>
    <p>Windows 10 mistede support fra Microsoft den 14. oktober 2025. Det betyder ikke, at maskinen holder op med at virke — men den får ikke længere sikkerhedsopdateringer, og nye sårbarheder bliver ikke lukket. Jo længere tid der går, jo større er risikoen, især hvis du bruger maskinen til bankting, mail eller følsomme data.</p>
    <p>Enheder fra før omkring 2017–2018 kan typisk ikke opgraderes til Windows 11, fordi kravet om en TPM 2.0-sikkerhedschip udelukker dem — men det er den konkrete model og chip-generation, der afgør det, ikke årstallet alene.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Dine muligheder</div><h2>Tre veje videre</h2><ul class="check-list">${paths}</ul></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Tjek din maskine</div><h2>Kan din computer køre Windows 11?</h2>
    <p class="sub">${WINDOWS10_CHECK_PARAGRAPH}</p>
    <p class="sub">Du kan også selv tjekke det gratis med Microsofts PC Health Check-værktøj eller ved at se på TPM 2.0 og CPU-generation. Det, du betaler for hos os, er ikke selve tjekket — det er vurderingen af, hvad der så er det rigtige at gøre, og en fast pris på det.</p>
    <div class="cta-row"><a class="btn btn-primary" href="/kan-min-computer-koere-windows-11/">Se kravene til Windows 11 →</a></div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Windows 10 support er slut — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Usikker på, hvad din maskine kan?</h2><p>Fejlsøgning 300 kr. inkl. moms (3–4 dage) eller ekspres for 600 kr. inkl. moms (1–2 timer). Fast pris, før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="/butik/computere/refurbished/">Se refurbished computere →</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/kan-min-computer-koere-windows-11/">Kan min computer køre Windows 11? →</a><a href="/opgradering-til-windows-11/">Sådan opgraderer du til Windows 11 →</a><a href="/windows-10-erhverv-migrering/">Windows 10-migrering for virksomheder →</a><a href="/reparere-eller-koebe-ny-computer/">Reparere eller købe ny computer? →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}

export const WINDOWS11_KRAV_FAQ = [
  { q: 'Hvad kræver Windows 11 helt konkret?', a: 'En TPM 2.0-sikkerhedschip, UEFI med Secure Boot, en processor fra Microsofts kompatibilitetsliste, mindst 4 GB RAM og 64 GB lagerplads. De fleste computere fra de seneste år opfylder RAM- og lagerkravene uden problemer — det er TPM 2.0 og processoren, der oftest afgør det.' },
  { q: 'Hvordan tjekker jeg selv, om min computer har TPM 2.0?', a: 'Tryk Windows-tast + R, skriv tpm.msc og tryk Enter. Der står, om TPM er aktiveret, og hvilken version. Er den ikke aktiveret, kan den nogle gange slås til i BIOS/UEFI — det er ikke sikkert på alle maskiner.' },
  { q: 'Er der en nem måde at tjekke det hele på én gang?', a: 'Ja — Microsofts gratis PC Health Check-værktøj tjekker automatisk TPM, processor og de øvrige krav og giver dig et klart ja eller nej.' },
  { q: 'Hvad betyder det helt konkret, at min computer "ikke understøttes"?', a: 'Det betyder, at Microsoft ikke garanterer opdateringer eller support på den. Der findes uofficielle måder at omgå kravet på, men det er ikke noget, vi anbefaler til en maskine, du er afhængig af dagligt — du mister garantien for fremtidige opdateringer, og der kan opstå driver- og stabilitetsproblemer.' },
  { q: 'Hvorfor er det ofte omkring 2017–2018-modeller, der falder udenfor?', a: 'Fordi TPM 2.0 og de nødvendige processorgenerationer først blev udbredt omkring dér. Det er dog den konkrete model, ikke årstallet, der afgør det — nogle maskiner fra den periode er kompatible, andre er det ikke.' },
];
export function windows11KravHtml() {
  const faqHtml = WINDOWS11_KRAV_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const krav = [
    '<strong>TPM 2.0</strong> — en sikkerhedschip, der enten sidder fysisk på bundkortet eller er indbygget i processoren. Det hyppigste knastepunkt for ældre maskiner.',
    '<strong>UEFI med Secure Boot</strong> — en moderne opstartsstandard, som de fleste computere fra de seneste år har, men som skal være aktiveret i BIOS/UEFI.',
    '<strong>Kompatibel processor</strong> — en 64-bit processor på mindst 1 GHz med 2 eller flere kerner, fra Microsofts liste over understøttede processorer.',
    '<strong>4 GB RAM og 64 GB lagerplads</strong> — de fleste computere fra de seneste år opfylder det uden problemer.',
  ].map((t) => `<li>${t}</li>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Guide · Windows 11-krav</div>
    <h1>Kan min computer køre Windows 11?</h1><p class="lead">TPM 2.0 og processoren er oftest det, der afgør det — ikke alderen alene.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <a href="/windows-10-support-slut/">Windows 10 support er slut</a> › <span>Kan min computer køre Windows 11?</span></div>
    <p>Windows 11 stiller nogle krav, som ikke alle Windows 10-computere opfylder — særligt kravet om en TPM 2.0-sikkerhedschip. Her er, hvad der afgør det, og hvordan du selv kan tjekke din maskine.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Krav</div><h2>Det kræver Windows 11</h2><ul class="check-list">${krav}</ul></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Sådan tjekker du selv</div><h2>To måder at finde ud af det</h2>
    <p class="sub">Hurtigst: download Microsofts gratis <strong>PC Health Check</strong>-værktøj, som tjekker det hele automatisk. Vil du selv se detaljerne: tryk Windows-tast + R, skriv <strong>tpm.msc</strong> og tryk Enter for at se din TPM-status, og tjek din processormodel under Systemoplysninger op mod Microsofts kompatibilitetsliste.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="trust-line">Vi anbefaler ikke de uofficielle måder at omgå TPM-kravet på til en maskine, du er afhængig af hver dag — du mister garantien for fremtidige opdateringer, og der kan opstå ustabilitet. Er din maskine ikke kompatibel, giver vi dig et ærligt bud på, om en hardwareopgradering eller en ny maskine er den bedre vej.</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Er du i tvivl?</div><h2>Vi tjekker den for dig</h2><p class="sub">${WINDOWS10_CHECK_PARAGRAPH}</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Windows 11-krav — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Klar til at få tjekket din maskine?</h2><p>Fejlsøgning 300 kr. inkl. moms (3–4 dage) eller ekspres for 600 kr. inkl. moms (1–2 timer). Fast pris, før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="/opgradering-til-windows-11/">Sådan foregår opgraderingen →</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/windows-10-support-slut/">Windows 10 support er slut →</a><a href="/opgradering-til-windows-11/">Sådan opgraderer du til Windows 11 →</a><a href="/ssd-opgradering/">SSD-opgradering →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}

export const WINDOWS11_OPGRADERING_FAQ = [
  { q: 'Skal jeg tage backup, før jeg opgraderer?', a: 'Ja, altid — før du rører ved noget. En opgradering plejer at bevare dine filer og programmer, men en backup er din sikkerhed, hvis noget går galt undervejs.' },
  { q: 'Mister jeg mine filer og programmer ved opgraderingen?', a: 'Normalt ikke — en almindelig opgradering fra Windows 10 til 11 bevarer typisk filer, indstillinger og de fleste programmer. Nogle ældre eller specielle programmer kan dog kræve en gentilmelding eller ny installation bagefter.' },
  { q: 'Hvad er de mest almindelige fejl under en opgradering?', a: 'Utilstrækkelig lagerplads, forældede drivere, og opdateringer, der sætter sig fast. De fleste kan løses, men det kræver ofte teknisk fejlsøgning at finde ud af hvilken.' },
  { q: 'Hvornår er en ren installation bedre end en opgradering?', a: 'På en maskine, der har samlet mange år med programmer og systemfilrester, giver en ren installation ofte en hurtigere og mere stabil computer — men du skal geninstallere dine programmer bagefter. Vi flytter dine data over, uanset hvilken vej vi vælger.' },
  { q: 'Kan I gøre det for mig?', a: 'Ja — vi tager backup først, opgraderer eller geninstallerer, og flytter dine data tilbage, så du får en fungerende Windows 11-maskine uden selv at skulle rode med det.' },
];
export function windows11OpgraderingHtml() {
  const faqHtml = WINDOWS11_OPGRADERING_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const steps = [
    '<strong>Backup først</strong> — altid. Uanset hvor rutinemæssig en opgradering plejer at være, er en frisk backup din eneste garanti, hvis noget går galt. <a href="/backup-og-datagendannelse/">Se backup & datagendannelse →</a>',
    '<strong>Tjek pladsen</strong> — Windows 11 skal bruge plads til selve opgraderingen, ikke kun det færdige system.',
    '<strong>Opdatér drivere og Windows 10 først</strong> — de fleste opgraderingsfejl skyldes forældede drivere eller manglende Windows 10-opdateringer.',
    '<strong>Kør opgraderingen</strong> — via Windows Update eller Microsofts installationsværktøj.',
    '<strong>Tjek bagefter</strong> — at dine programmer, printere og øvrigt udstyr stadig virker som forventet.',
  ].map((t) => `<li>${t}</li>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Guide · Windows 11-opgradering</div>
    <h1>Sådan opgraderer du til Windows 11</h1><p class="lead">Backup først, altid — og vid, hvornår en ren installation er bedre end en opgradering.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <a href="/windows-10-support-slut/">Windows 10 support er slut</a> › <span>Sådan opgraderer du til Windows 11</span></div>
    <p>Er din computer kompatibel, er selve opgraderingen normalt ligetil. Her er, hvad du skal gøre — og gøre først.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Trin for trin</div><h2>Sådan gør du</h2><ul class="check-list">${steps}</ul></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Opgradering vs. ren installation</div><h2>Hvornår er en ren installation bedre?</h2>
    <p class="sub">På en maskine med mange år og mange installerede programmer bag sig kan systemfiler og rester fra gamle programmer bremse den, selv efter en opgradering. En ren installation starter helt forfra og giver ofte en hurtigere, mere stabil oplevelse — prisen er, at du skal geninstallere dine programmer bagefter. Vi hjælper med at flytte dine data over, uanset hvilken vej der giver mest mening for din maskine.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="trust-line"><strong>Vil du slippe for at rode med det selv?</strong> Vi tager backup, opgraderer eller geninstallerer, og flytter dine data tilbage — du får en fungerende Windows 11-maskine uden selv at skulle holde styr på hvert trin.</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Windows 11-opgradering — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Vil du have os til at klare opgraderingen?</h2><p>Fejlsøgning 300 kr. inkl. moms (3–4 dage) eller ekspres for 600 kr. inkl. moms (1–2 timer). Fast pris, før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="/reinstallation-af-system/">Se reinstallation af system →</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/windows-10-support-slut/">Windows 10 support er slut →</a><a href="/kan-min-computer-koere-windows-11/">Kan min computer køre Windows 11? →</a><a href="/backup-og-datagendannelse/">Backup & datagendannelse →</a><a href="/reinstallation-af-system/">Reinstallation af system →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}

export const WINDOWS10_ERHVERV_FAQ = [
  { q: 'Hvor lang tid har vi reelt til at planlægge en migrering?', a: 'Windows 10 mistede support 14. oktober 2025. Erhvervs-ESU kan forlænge sikkerhedsopdateringer i op til 3 år derefter, mod en pris pr. enhed, der stiger for hvert år — det giver jer tid til at planlægge, men er ikke en langsigtet løsning.' },
  { q: 'Skal vi bare købe ESU til hele maskinparken?', a: 'ESU er en fornuftig nødløsning for de maskiner, I ikke kan nå at udskifte med det samme — men prisen stiger år for år, og det løser ikke det underliggende problem. Vi anbefaler at bruge tiden til en faseopdelt udskiftning, ikke til at udskyde beslutningen.' },
  { q: 'Hvordan finder vi ud af, hvilke maskiner der kan opgraderes?', a: 'Vi kortlægger jeres maskinpark og tjekker hver enhed mod Windows 11-kravene, så I får et klart overblik over, hvad der kan opgraderes, hvad der skal udskiftes, og i hvilken rækkefølge det giver mest mening.' },
  { q: 'Har det betydning for GDPR eller NIS2, at vi kører videre på Windows 10?', a: 'Det kan det få — maskiner uden sikkerhedsopdateringer er sværere at forsvare i en dokumenteret risikovurdering. Se vores side om IT-rådgivning for GDPR/NIS2-vinklen.' },
  { q: 'Er refurbished en mulighed for en virksomhedsudskiftning?', a: 'Ja — det er ofte den billigste vej til nye, Windows 11-klare maskiner, med garanti efter kvalitetsgrad: A-kvalitet 3 år, B-kvalitet 2 år, C-kvalitet 1 år.' },
];
export function windows10ErhvervHtml() {
  const faqHtml = WINDOWS10_ERHVERV_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const steps = [
    '<strong>Kortlægning af maskinparken</strong> — vi gennemgår, hvilke maskiner der kan opgraderes til Windows 11, og hvilke der skal udskiftes.',
    '<strong>Sikkerheds- og compliance-vinklen</strong> — maskiner uden sikkerhedsopdateringer er en dårlig figur i en GDPR/NIS2-risikovurdering. <a href="/it-raadgivning/">Se IT-rådgivning →</a>',
    '<strong>ESU som midlertidig nødløsning</strong> — ikke en plan. Erhvervs-ESU koster pr. enhed pr. år, og prisen stiger for hvert år i op til 3 år — brug tiden til at planlægge, ikke til at udskyde.',
    '<strong>Faseopdelt udskiftning</strong> — i stedet for at udskifte hele parken på én gang, prioriterer vi de mest sårbare eller forretningskritiske maskiner først.',
    '<strong>Refurbished som budgetvej</strong> — testede, istandsatte maskiner med garanti efter kvalitetsgrad (A: 3 år, B: 2 år, C: 1 år) holder omkostningen nede uden at gå på kompromis med sikkerheden.',
  ].map((t) => `<li>${t}</li>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Erhverv · Windows 10-migrering</div>
    <h1>Windows 10-migrering for virksomheder</h1><p class="lead">ESU køber jer tid — ikke en plan. Sådan får I hele maskinparken sikkert videre til Windows 11.</p>
    <div class="cta-row"><a class="btn btn-white" href="/it-support-til-erhverv/">Se IT-supportaftaler →</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <a href="/windows-10-support-slut/">Windows 10 support er slut</a> › <span>Windows 10-migrering for virksomheder</span></div>
    <p>Windows 10 mistede support 14. oktober 2025. For en enkelt privat maskine er det en beslutning; for en hel maskinpark er det et projekt, der skal planlægges — for mange forældede maskiner samtidig er en reel sikkerheds- og compliance-risiko.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Sådan griber vi det an</div><h2>Fem trin til en sikker migrering</h2><ul class="check-list">${steps}</ul></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Windows 10-migrering — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Klar til at kortlægge jeres maskinpark?</h2><p>Kontakt os for en uforpligtende snak om jeres Windows 10-maskiner, og hvad der giver mest mening at gøre først.</p><div class="cta-row"><a class="btn btn-white" href="/it-support-til-erhverv/">Se IT-supportaftaler →</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/windows-10-support-slut/">Windows 10 support er slut →</a><a href="/it-raadgivning/">IT-rådgivning →</a><a href="/it-support-til-erhverv/">IT-support til erhverv →</a><a href="/automatisk-backup/">Automatisk Backup →</a><a href="/fjernsupport/">Fjernsupport →</a><a href="/butik/computere/refurbished/">Refurbished computere →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}

// ---------- B2B: IT-support Frederiksberg (flagskib) ----------
// Kernestrategi (2026-08-11 brief): vi lader København ligge og bygger ét
// stærkt Frederiksberg-område. Denne side er navet — alle branchesider
// (advokat/klinik/mindre-virksomheder/håndværkere m.fl.) linker hertil, og
// den linker tilbage til dem via "Din branche". Kerneargumentet på hver
// eneste sektion: konkurrenterne kører ud til Frederiksberg, vi ligger her
// — så ingen kørselsgebyr, ingen ventetid på en ledig tekniker, og virksomheder
// kan selv komme forbi. Erstatter den tidligere generiske services.js-side
// (samme URL, /it-support-frederiksberg/, så ingen redirect nødvendig).
export const IT_SUPPORT_FREDERIKSBERG_FAQ = [
  { q: 'Hvor hurtigt kan I være her, hvis noget går galt?', a: 'Vi ligger på Falkoner Allé 108, så for de fleste adresser på Frederiksberg er vi der på under 10 minutter — ikke en halv dag, som det tager en udkørende leverandør at finde en ledig tekniker. Mange sager løses dog hurtigere endnu via fjernsupport, uden at nogen skal ud af døren.' },
  { q: 'Koster det ekstra, at I kommer ud?', a: 'Nej, ikke fordi vi ligger tæt på. Konkurrenter, der kører ud fra et andet sted i byen, lægger enten et eksplicit udkaldsgebyr på, eller bager køretiden ind i timeprisen — I betaler for den, uanset hvad det hedder på fakturaen. Ligger I på Frederiksberg, er den udgift stort set væk.' },
  { q: 'Kan vi bare komme forbi med maskinen, hvis vi har travlt?', a: 'Ja. Er I på Frederiksberg, kan I gå, cykle eller køre forbi Falkoner Allé 108 i åbningstiden, uden at bestille tid. Ingen ventetid på, at en tekniker fra en "vi kører ud"-leverandør bliver ledig — I lægger maskinen, og vi går i gang.' },
  { q: 'Skal vi have en fast aftale, eller kan vi bare ringe, når vi har brug for hjælp?', a: 'Begge dele virker. En fast IT-supportaftale (fra 399 kr. pr. bruger pr. måned) giver ubegrænset support og garanteret svartid. Har I brug for hjælp mere sporadisk, sælger vi klippekort på 5, 10 eller 20 timer, som I bruger, når det passer jer.' },
  { q: 'Vi er kun 3 ansatte — er vi for små til at være kunde hos jer?', a: 'Nej. En stor del af vores erhvervskunder på Frederiksberg er små virksomheder uden egen IT-afdeling — nogle med under 5 ansatte. Et klippekort er ofte nok til at starte med; I skifter til en fast aftale, når behovet vokser.' },
  { q: 'Kan I hjælpe med både Mac og PC?', a: 'Ja. Mange af vores erhvervskunder kører en blanding — nogle medarbejdere på Mac, andre på Windows, alle på Microsoft 365. Vi supporterer og reparerer begge dele under samme aftale.' },
  { q: 'Hvad hvis en af vores maskiner går fysisk i stykker — skærm, batteri, tastatur?', a: 'Så reparerer vi den. I modsætning til leverandører, der kun supporterer software og sender hardware videre til en ekstern værkstedspartner, har vi eget værksted på Falkoner Allé med reservedele på hylden og syv teknikere, der selv skruer.' },
  { q: 'Kan I overtage IT-supporten fra vores nuværende leverandør?', a: 'Ja. Vi kortlægger, hvad I har i dag — udstyr, licenser, adgange — og overtager uden driftsstop undervejs. De fleste af vores erhvervskunder kommer fra en anden leverandør, ikke fra at have haft ingen.' },
];
export function itSupportFrederiksbergHtml() {
  const faqHtml = IT_SUPPORT_FREDERIKSBERG_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const problems = [
    'Ældre kontorejendomme med tykke mure og dårlig WiFi-dækning — løses med en ordentlig netværksopsætning, ikke en ny router fra en elektronikkæde.',
    'Blandede maskinparker — nogle medarbejdere på Mac, nogle på PC, alle på Microsoft 365.',
    'Ingen IT-ansvarlig — "ham der er god til computere" har også et rigtigt job at passe.',
    'Fem leverandører — én til mailen, én til hjemmesiden, én til kassesystemet. Ingen har det fulde overblik.',
  ].map((t) => `<li>${t}</li>`).join('');
  const ways = [
    ['1', 'Kom forbi', 'Falkoner Allé 108, uden aftale, i åbningstiden — I lægger maskinen, vi går i gang.'],
    ['2', 'Fjernsupport', 'Vi løser det meste med det samme, uden at nogen skal køre nogen steder.'],
    ['3', 'On-site', 'Vi kommer til jer. Fra Frederiksberg er det minutter, ikke en halv dags ventetid.'],
  ].map(([n, t, b]) => `<div class="step"><div class="num">${n}</div><h3>${esc(t)}</h3><p>${esc(b)}</p></div>`).join('');
  const branches = [
    ['/it-support-haandvaerkere/', 'Håndværkere', 'Mobilt udstyr, ordrestyring og fakturering fra bilen — IT der virker på pladsen, ikke kun på kontoret.'],
    ['/it-support-advokatkontor/', 'Advokatkontorer', 'Klientfortrolighed, adgangsstyring og backup, der virker under en frist.'],
    ['/it-support-klinik/', 'Klinikker', 'Oppetid i behandlingstiden, patientdata i strengeste GDPR-kategori.'],
    ['/it-support-mindre-virksomheder/', 'Mindre virksomheder', 'Én fast kontakt i stedet for fem leverandører at ringe rundt til.'],
    ['/it-support-revisor-bogholder/', 'Revisorer & bogholdere', 'Regnskabssystemer, der virker ved kvartalsafslutning, og backup med versionering.'],
    ['/it-support-butik-og-restaurant/', 'Butikker & restauranter', 'Kassesystem og betalingsterminal, der ikke går ned i myldretiden.'],
  ].map(([href, t, b]) => `<a class="card card-link" href="${href}"><h3>${esc(t)}</h3><p>${esc(b)}</p><span class="arrow">Se IT-support til ${esc(t.toLowerCase())} →</span></a>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Erhverv · Frederiksberg</div>
    <h1>IT-support til virksomheder på Frederiksberg</h1><p class="lead">De fleste IT-leverandører dækker Frederiksberg. Vi ligger her — på Falkoner Allé 108. Ingen kørsel at betale for, ingen ventetid på en ledig tekniker.</p>
    <div class="badges"><span class="badge check">Værksted på Falkoner Allé 108</span><span class="badge check">Fra 399 kr./bruger/md.</span><span class="badge check">7 mennesker, ikke et callcenter</span><span class="badge check">⭐ ${esc(site.reviewRating)}/5 · ${esc(site.reviewCount)} anmeldelser</span></div>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book en gratis IT-gennemgang</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>IT-support til virksomheder på Frederiksberg</span></div>
    <p>Vores værksted er på Falkoner Allé 108. Er I på Frederiksberg, er vi minutter væk — på cykel, i bil eller til fods. I betaler ikke for kørsel, og I venter ikke på, at en tekniker bliver ledig et andet sted i byen.</p>
    <p>Vi er syv mennesker, ikke et callcenter. Ringer I, taler I med en, der kender jeres opsætning — og som også er den, der skruer maskinen op, hvis den går i stykker.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Prissammenligningen</div><h2>En lavere månedspris er ikke det samme som en lavere regning</h2>
    <p class="sub">Nogle konkurrenter markedsfører en lavere månedspris. Vi matcher ikke — vi forklarer hvorfor: skal der en tekniker ud, koster kørslen, og den tid, det tager. Vi ligger på Frederiksberg, så der er ingen kørsel at betale for og ingen ventetid på, at nogen bliver ledig. Går hardwaren i stykker, sender vi den heller ikke videre — vi har eget værksted, syv teknikere og reservedele på hylden.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Områder vi dækker</div><h2>Hele Frederiksberg</h2>
    <p class="sub">Vi hjælper virksomheder i hele Frederiksberg: omkring Falkoner Allé, Gammel Kongevej, Godthåbsvej, Frederiksberg Allé, Smallegade, Peter Bangs Vej, Nordre Fasanvej, Howitzvej, Finsensvej og Roskildevej — og ved Frederiksberg Centret, Solbjerg Plads, Frederiksberg Have og Forum.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Vores kunder</div><h2>Virksomheder på Frederiksberg, typisk 2–30 ansatte</h2>
    <p class="sub">Advokat- og revisionskontorer, tandlæge- og lægeklinikker, håndværksvirksomheder, arkitekt- og designtegnestuer, konsulenthuse, butikker, caféer og foreninger.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Det vi faktisk ser</div><h2>Problemer, der går igen på Frederiksberg</h2><ul class="check-list">${problems}</ul></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Sådan får I hjælp</div><h2>Tre måder — I vælger</h2><div class="steps">${ways}</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Priser</div><h2>Fast aftale eller klippekort</h2>
    <p class="sub">En fast IT-supportaftale koster fra 399 kr. pr. bruger pr. måned (Starter), 599 kr. (Premium) eller 899 kr. (Exclusive), med garanteret svartid ned til 1 time. Ikke klar til en fast aftale? Køb i stedet et klippekort på 5, 10 eller 20 timer og brug dem, når I har brug for os — timeprisen falder, jo flere timer I køber. <a href="/it-support-til-erhverv/">Se alle pakker, svartider og klippekort-priser →</a></p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Din branche</div><h2>IT-support skræddersyet til jeres fag</h2>
    <p class="sub">Vi kender de problemer, der går igen i jeres branche — og bygger jeres aftale omkring dem.</p>
    <div class="grid grid-3">${branches}</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>IT-support på Frederiksberg — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Klar til en uforpligtende snak om jeres IT?</h2><p>Skriv til ${site.emailBusiness} eller ring, så kigger vi på jeres nuværende opsætning og finder de svage punkter — helt uforpligtende.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book en gratis IT-gennemgang</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/it-support-til-erhverv/">IT-support til erhverv (serviceaftale) →</a><a href="/it-raadgivning/">IT-rådgivning →</a><a href="/fjernsupport/">Fjernsupport →</a><a href="/on-site-tekniker/">On-site tekniker →</a><a href="/computerreparation-frederiksberg/">Computerreparation på Frederiksberg →</a><a href="/wifi-og-netvaerksfejlfinding/">WiFi- &amp; netværksfejlfinding →</a><a href="/automatisk-backup/">Automatisk Backup →</a><a href="/aabningstider/">Åbningstider →</a></div></div></div></section>`;
}

// ---------- B2B: Håndværkere ----------
// Angle: mobilt arbejde, ikke skrivebordsarbejde — udstyret er i bilen, på
// stilladset og i regnvejr, ikke på et kontor. Størst uudnyttet segment
// (2026-08-11 brief: "næsten ingen skriver IT-indhold til håndværkere").
export const IT_SUPPORT_HAANDVAERKERE_FAQ = [
  { q: 'Vi sidder aldrig ved et skrivebord — kan I overhovedet hjælpe os?', a: 'Ja, det er faktisk pointen. Vi sætter jeres mobile udstyr op — tablets og telefoner til pladsen, ikke kun stationære maskiner på kontoret — og sørger for, at ordre- og sagsstyring, fakturering og fotodokumentation virker, uanset hvor I står.' },
  { q: 'Kan I sætte vores ordre- eller sagsstyringssystem op, så det virker på farten?', a: 'Ja — Minuba, Ordrestyring, e-Komplet og lignende systemer sætter vi op, så I kan oprette og opdatere sager fra bilen eller pladsen, ikke kun fra kontoret.' },
  { q: 'Kan vi fakturere direkte fra bilen mellem to opgaver?', a: 'Ja, det er en af de ting, der giver mest mening at få sat rigtigt op — jo hurtigere en faktura sendes, jo hurtigere kommer pengene hjem.' },
  { q: 'Vi tager billeder på pladsen, men de ryger aldrig ind i sagen — kan det løses?', a: 'Ja. Vi sætter automatisk synkronisering op, så fotodokumentation lander i den rigtige sag med det samme, i stedet for at blive liggende på en medarbejders private telefon.' },
  { q: 'Hvad sker der, hvis en tablet eller telefon går i stykker eller ryger i vandet på pladsen?', a: 'Vi reparerer den, hvis det kan lade sig gøre, eller sætter en ny op med jeres data og systemer gendannet fra backup — er data ikke sikret først, er det den del, der for alvor koster tid.' },
  { q: 'Kan I anbefale udstyr, der faktisk kan tåle en værktøjskasse?', a: 'Ja — vi rådgiver om robust hardware til feltbrug i stedet for standardkontorudstyr, der ikke er lavet til en byggeplads.' },
  { q: 'Vi arbejder tit i kældre og på pladser uden ordentlig dækning — er det et problem?', a: 'Vi sætter systemerne op med offline-adgang, så I stadig kan arbejde uden forbindelse og synkronisere, så snart I er tilbage online.' },
];
export function itSupportHaandvaerkereHtml() {
  const faqHtml = IT_SUPPORT_HAANDVAERKERE_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const cards = [
    ['📱', 'Mobilt udstyr', 'Tablets og telefoner sat op til pladsen, ikke kun stationære maskiner på kontoret.'],
    ['📋', 'Ordre- og sagsstyring på farten', 'Minuba, Ordrestyring, e-Komplet og lignende sat op, så de virker fra bilen eller pladsen.'],
    ['🧾', 'Fakturering fra bilen', 'Send fakturaen, mens I stadig husker detaljerne — så pengene kommer hjem samme uge.'],
    ['📸', 'Fotodokumentation, der havner rigtigt', 'Billeder fra pladsen synkroniseres automatisk ind i sagen — ikke på en privat telefon.'],
    ['🛠️', 'Robust hardware', 'Udstyr, der kan tåle en værktøjskasse, en byggeplads og en regnvejrsdag.'],
    ['📶', 'Offline-adgang', 'Systemer sat op til at virke, selv når kælderen eller pladsen ikke har dækning.'],
  ].map(([i, t, b]) => `<div class="card"><div class="card-icon">${i}</div><h3>${esc(t)}</h3><p>${esc(b)}</p></div>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Erhverv · Håndværkere</div>
    <h1>IT-support til håndværksvirksomheder</h1><p class="lead">I sidder ikke ved et skrivebord. Udstyret er i bilen, på stilladset og i regnvejr — vi sætter det op, så det rent faktisk virker der.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book en gratis IT-gennemgang</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <a href="/it-support-frederiksberg/">IT-support på Frederiksberg</a> › <span>Håndværkere</span></div>
    <p>De fleste IT-leverandører tænker i skriveborde og kontorlokaler. Hos en håndværksvirksomhed foregår arbejdet et helt andet sted — i bilen mellem to opgaver, på stilladset, i en kundes kælder uden dækning. Vi bygger jeres IT-support omkring den virkelighed: mobilt udstyr, sagsstyring der virker på farten, og fakturering, der ikke venter til I er tilbage på kontoret.</p>
    <p>Mange af vores håndværkerkunder arbejder i de gamle ejendomme på Frederiksberg. Kører I forbi Falkoner Allé mellem to opgaver, kan I aflevere en maskine på vejen — ingen aftale nødvendig.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Derfor er IT ikke bare IT for en håndværksvirksomhed</div><h2>Seks ting, vi bygger jeres aftale omkring</h2><div class="grid grid-3">${cards}</div></div></section>
  <section class="section"><div class="wrap"><div class="callout"><strong>En rigtig sag:</strong> En VVS-virksomhed med 6 montører mistede tre ugers fotodokumentation, da en telefon røg i en spand vand — ingen af billederne var synkroniseret til sagen, de lå kun på telefonen. Vi satte automatisk synkronisering op, så det ikke kan ske igen.</div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Priser</div><h2>Fast aftale eller klippekort</h2>
    <p class="sub">Har I brug for løbende support til hele maskinparken, starter vores IT-supportpakker ved 399 kr. pr. bruger pr. måned. Er det mere sporadisk — en tablet der driller, en ny mand der skal sættes op — passer et klippekort på 5, 10 eller 20 timer ofte bedre. <a href="/it-support-til-erhverv/">Se alle pakker og priser →</a></p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>IT-support til håndværkere — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Klar til en uforpligtende snak om jeres IT?</h2><p>Skriv til ${site.emailBusiness} eller ring, så kigger vi på jeres nuværende opsætning og finder de svage punkter.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book en gratis IT-gennemgang</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/it-support-frederiksberg/">IT-support på Frederiksberg →</a><a href="/it-support-mindre-virksomheder/">IT-support til mindre virksomheder →</a><a href="/it-support-til-erhverv/">IT-support til erhverv →</a><a href="/automatisk-backup/">Automatisk Backup →</a><a href="/kontakt/">Kontakt &amp; booking →</a></div></div></div></section>`;
}

// ---------- B2B: Advokatkontorer ----------
// Angle: client confidentiality & professional liability — distinct from
// the klinik page's "uptime during treatment" angle and the mindre
// virksomheder page's "one point of contact" angle. Not a template swap.
export const IT_SUPPORT_ADVOKAT_FAQ = [
  { q: 'Kan I sikre, at vores klientkommunikation forbliver fortrolig?', a: 'Ja. Vi sætter kryptering og adgangsstyring op på mail og fildeling, så det kun er de rette medarbejdere, der kan se en given sags dokumenter.' },
  { q: 'Hvad sker der med adgange, når en fuldmægtig eller sekretær stopper?', a: 'Vi lukker og overdrager adgange med det samme, så en tidligere medarbejder ikke længere kan tilgå sagsmateriale, mail eller fildeling.' },
  { q: 'Hvor hurtigt kan I hjælpe, hvis noget går galt midt i en frist?', a: 'Vi ligger på Falkoner Allé 108, så for de fleste advokatkontorer på Frederiksberg er vi der på under 10 minutter. Svartiden er desuden garanteret efter jeres pakke — 1 arbejdsdag i Starter, 4 timer i Premium, 1 time i Exclusive — og går det virkelig galt, er vores backup testet på forhånd, så gendannelse er hurtig, ikke en gætteleg, når der er en frist på spil.' },
  { q: 'Hjælper I med GDPR- og NIS2-dokumentation for et advokatkontor?', a: 'Vi hjælper med den tekniske dokumentation — adgangslogs, backup-status og sikkerhedsforanstaltninger. Se også vores side om IT-rådgivning.' },
  { q: 'Rådgiver I os juridisk om vores forpligtelser som advokatkontor?', a: 'Nej — vi er ikke jurister. I ved bedre end os, hvad reglerne kræver. Vores opgave er, at teknikken lever op til det, I har lovet jeres klienter: sikker mail og fildeling, adgangsstyring, backup og ransomware-beredskab.' },
  { q: 'Hvad har I styr på om opbevaringspligt og journalisering?', a: 'Vi sørger for, at sagsdokumenter, mail og backup opbevares struktureret og kan genfindes — men den konkrete opbevaringspligt for jeres sagstyper er en beslutning, I selv (eller jeres brancheforening) fastlægger. Vi bygger teknikken, så I kan overholde den.' },
];
export function itSupportAdvokatkontorHtml() {
  const faqHtml = IT_SUPPORT_ADVOKAT_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const cards = [
    ['🔒', 'Sikker mail & fildeling', 'Kryptering og adgangsstyring, så klientdokumenter kun er tilgængelige for de medarbejdere, der skal se dem.'],
    ['🔑', 'Adgangsstyring', 'Klare rutiner for, hvad der sker med adgange, når en fuldmægtig, sekretær eller partner stopper — lukket med det samme.'],
    ['💾', 'Backup, der kan gendannes under tidspres', 'Testet backup af sager, dokumenter og mail, så en genskabelse midt i en frist ikke bliver endnu et problem.'],
    ['🛡️', 'Ransomware-beredskab', 'Endpoint-beskyttelse og overvågning, der er skruet sammen efter, at et advokatkontor er et attraktivt mål — et låst drev med klientsager er værst tænkelige scenarie.'],
    ['📋', 'Opbevaringspligt & journalisering', 'Struktureret opbevaring af sagsdokumenter, mail og backup, så I kan genfinde og dokumentere, når det bliver efterspurgt.'],
    ['📄', 'GDPR/NIS2-dokumentation', 'Den tekniske dokumentation, I skal kunne fremvise — adgangslogs, backup-status og sikkerhedsforanstaltninger.'],
  ].map(([i, t, b]) => `<div class="card"><div class="card-icon">${i}</div><h3>${esc(t)}</h3><p>${esc(b)}</p></div>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Erhverv · Advokatkontorer</div>
    <h1>IT-support til advokatkontorer</h1><p class="lead">Klientfortrolighed og professionsansvar stiller andre krav til IT end de fleste kontorer. Sikker mail og fildeling, stram adgangsstyring og backup, der virker under en frist — leveret af ét fast team på Frederiksberg.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book en gratis IT-gennemgang</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <a href="/it-support-frederiksberg/">IT-support på Frederiksberg</a> › <span>Advokatkontorer</span></div>
    <p>På et advokatkontor er en IT-fejl sjældent bare en gene — det kan være en sag, en frist eller en klients fortrolige dokumenter, der pludselig er i spil. Vi kender den forskel, og vi bygger jeres IT-support omkring den: hvem har adgang til hvad, hvor hurtigt kan I komme videre, hvis noget går galt, og kan I dokumentere, at det hele hænger sammen.</p>
    <p>Vi er ikke jurister, og vi rådgiver ikke om jeres advokatetiske forpligtelser. Det, vi gør, er at stå for teknikken bag dem — sikkert, testet og dokumenteret.</p>
    <p>Vores værksted er på Falkoner Allé 108. De fleste IT-leverandører kører ud til Frederiksberg — vi ligger her, så der er ingen kørsel at betale for og ingen ventetid på, at en tekniker bliver ledig et andet sted i byen.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Derfor er IT ikke bare IT på et advokatkontor</div><h2>Seks ting, vi bygger jeres aftale omkring</h2><div class="grid grid-3">${cards}</div></div></section>
  <section class="section"><div class="wrap"><div class="callout"><strong>Sagt tydeligt:</strong> Vi er ikke jurister — I ved bedre end os, hvad reglerne kræver. Vores opgave er, at teknikken lever op til det, I har lovet jeres klienter.</div></div></section>
  <section class="section alt"><div class="wrap"><div class="callout"><strong>En rigtig sag:</strong> Et advokatkontor på Frederiksberg med 8 medarbejdere havde en backup, der kørte fint hver nat — men da den skulle bruges, kunne den ikke gendannes. Vi satte en testet backup op i stedet, hvor gendannelse afprøves jævnligt, ikke kun antages at virke.</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Svartider</div><h2>Klar besked om, hvor hurtigt vi svarer</h2>
    <p class="sub">Med <strong>Starter</strong> har I svar inden for 1 arbejdsdag, med <strong>Premium</strong> inden for 4 timer, og med <strong>Exclusive</strong> inden for 1 time — alt i normal åbningstid. Mange advokatkontorer med faste tidsfrister vælger Premium eller Exclusive. <a href="/it-support-til-erhverv/">Se alle pakker og priser →</a></p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>IT-support til advokatkontorer — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Klar til en uforpligtende snak om jeres IT?</h2><p>Skriv til ${site.emailBusiness} eller ring, så kigger vi på jeres nuværende opsætning og finder de svage punkter.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book en gratis IT-gennemgang</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/it-support-frederiksberg/">IT-support på Frederiksberg →</a><a href="/it-support-revisor-bogholder/">IT-support til revisorer &amp; bogholdere →</a><a href="/it-support-til-erhverv/">IT-support til erhverv →</a><a href="/it-raadgivning/">IT-rådgivning →</a><a href="/microsoft-365-erhverv/">Microsoft 365 til virksomheder →</a><a href="/automatisk-backup/">Automatisk Backup →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}

// ---------- B2B: Klinikker ----------
// Angle: uptime during treatment hours & patient-data GDPR sensitivity —
// distinct from the advokatkontor page's confidentiality/liability angle.
export const IT_SUPPORT_KLINIK_FAQ = [
  { q: 'Kan I opdatere systemerne, uden at det går ud over vores åbningstid?', a: 'Ja. Vi planlægger opdateringer og vedligeholdelse uden for jeres behandlingstid, så computere og netværk er klar, når klinikken åbner.' },
  { q: 'Har I adgang til vores journalsystem?', a: 'Nej. Fagsupport på selve journalsystemet ligger hos jeres leverandør. Vi står for maskinerne, netværket, adgangsstyringen og backuppen omkring det.' },
  { q: 'Hvordan håndterer I patientdata sikkert?', a: 'Patientdata hører til den strengeste kategori under GDPR. Vi sætter kryptering, adgangsstyring og logning op, så det kun er de rette medarbejdere, der har adgang.' },
  { q: 'Kan patienter og gæster bruge vores WiFi uden risiko for klinikkens systemer?', a: 'Ja — vi adskiller gæste-WiFi fra klinikkens interne netværk, så gæstetrafik aldrig rører jeres systemer eller patientdata.' },
  { q: 'Hvad sker der, hvis en computer går ned midt i en behandling?', a: 'Svartiden følger jeres pakke: 1 arbejdsdag med Starter, 4 timer med Premium, 1 time med Exclusive. Klinikker med løbende patientkontakt vælger typisk Premium eller Exclusive.' },
];
export function itSupportKlinikHtml() {
  const faqHtml = IT_SUPPORT_KLINIK_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const cards = [
    ['⏱️', 'Oppetid i åbningstiden', 'Opdateringer og vedligeholdelse planlægges uden for jeres behandlingstid — ikke midt i en dag med patienter.'],
    ['🔐', 'Patientdata i strengeste GDPR-kategori', 'Kryptering, adgangsstyring og logning tilpasset, at patientdata er særligt følsomme oplysninger.'],
    ['💾', 'Testet backup', 'Backup af journaldata, billeder og administrative systemer, som vi rent faktisk afprøver — ikke bare sætter op og glemmer.'],
    ['📶', 'Netværk med adskilt gæste-WiFi', 'Patienters og gæsters WiFi holdes adskilt fra klinikkens interne netværk og journalsystem.'],
    ['🖥️', 'Udstyr udskiftet i tide', 'Vi holder øje med, hvornår computere og udstyr nærmer sig enden, så I skifter dem, før de svigter midt i en behandling.'],
  ].map(([i, t, b]) => `<div class="card"><div class="card-icon">${i}</div><h3>${esc(t)}</h3><p>${esc(b)}</p></div>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Erhverv · Klinikker</div>
    <h1>IT-support til klinikker</h1><p class="lead">Jeres drift står midt i en behandling — ikke ved skrivebordet. Vi holder computere, netværk og backup kørende omkring jeres journalsystem, med opdateringer uden for behandlingstiden.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book en gratis IT-gennemgang</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <a href="/it-support-frederiksberg/">IT-support på Frederiksberg</a> › <span>Klinikker</span></div>
    <p>På en klinik er en computer, der ikke virker, ikke bare en gene — det er en patient, der venter. Vi bygger jeres IT-support omkring den virkelighed: opdateringer, der ikke rammer midt i behandlingstiden, patientdata der er beskyttet efter bogen, og udstyr, der bliver skiftet, før det svigter.</p>
    <p>Vi rører ikke selve journalsystemet — det er jeres leverandørs fagområde. Vi står for maskinerne, netværket, adgangen og backuppen omkring det.</p>
    <p>Der ligger mange klinikker omkring Gammel Kongevej og Godthåbsvej. Vores værksted er på Falkoner Allé 108 — vi kan være der på få minutter, og går noget ned midt i en behandlingsdag, betyder det alt.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Derfor er IT ikke bare IT på en klinik</div><h2>Fem ting, vi bygger jeres aftale omkring</h2><div class="grid grid-3">${cards}</div></div></section>
  <section class="section"><div class="wrap"><div class="callout"><strong>Ærligt om det:</strong> Journalsystemets fagsupport ligger hos jeres leverandør — det er ikke os. Vi står for maskiner, netværk, adgang og backup omkring det, så resten fungerer, når journalsystemet skal bruges.</div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Svartider</div><h2>Klar besked om, hvor hurtigt vi svarer</h2>
    <p class="sub">Svartiden er garanteret efter pakke — <strong>Starter</strong> inden for 1 arbejdsdag, <strong>Premium</strong> inden for 4 timer, <strong>Exclusive</strong> inden for 1 time — alt i normal åbningstid. Klinikker med løbende patientkontakt vælger typisk Premium eller Exclusive. <a href="/it-support-til-erhverv/">Se alle pakker og priser →</a></p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>IT-support til klinikker — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Klar til en uforpligtende snak om jeres IT?</h2><p>Skriv til ${site.emailBusiness} eller ring, så kigger vi på jeres nuværende opsætning og finder de svage punkter.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book en gratis IT-gennemgang</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/it-support-frederiksberg/">IT-support på Frederiksberg →</a><a href="/it-support-butik-og-restaurant/">IT-support til butikker &amp; restauranter →</a><a href="/it-support-til-erhverv/">IT-support til erhverv →</a><a href="/it-raadgivning/">IT-rådgivning →</a><a href="/automatisk-backup/">Automatisk Backup →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}

// Standard closing CTA — used verbatim on all four fault-specific guides
// below, per the "resten af backloggen" brief. Do not alter the wording.
const FAULT_GUIDE_CTA = 'Kan du ikke løse det selv? Kom forbi Falkoner Allé 108 — ingen tidsbestilling nødvendig. Vi fejlsøger (300 kr. inkl. moms, 3–4 dage — eller ekspres 600 kr. inkl. moms, 1–2 timer med reparationen klar inden for 24 timer) og giver dig et fast tilbud, før vi går i gang. Ring 91 81 61 81.';

// ---------- B2B: Mindre virksomheder ----------
// Angle: no in-house IT department, no IT budget, juggling multiple
// vendors — distinct from the confidentiality (advokat) and uptime
// (klinik) angles above. 2026-08-11 brief renamed this from
// /it-support-mindre-virksomheder-frederiksberg/ to the shorter
// /it-support-mindre-virksomheder/ (no geo in the slug, matching the other
// branch pages) — old URL 301s here, see public/_redirects.
export const IT_SUPPORT_MINDRE_VIRKSOMHEDER_FAQ = [
  { q: 'Vi har ingen IT-afdeling — kan I være det for os?', a: 'Ja, det er præcis den rolle, vi går ind i for mindre virksomheder: én fast kontakt, der kender jeres opsætning, i stedet for at I selv skal koordinere mellem flere leverandører.' },
  { q: 'Hvor hurtigt kan I være on-site, hvis noget går galt?', a: 'Vi ligger på Falkoner Allé 108, midt på Frederiksberg, og er typisk fremme hos jer på få minutter. Kan det klares uden fremmøde, hjælper vi via fjernsupport med garanteret svartid efter jeres pakke.' },
  { q: 'Hjælper I med Microsoft 365 og e-mail?', a: 'Ja — opsætning, administration og fejlfinding af Microsoft 365, Outlook, Teams og OneDrive er en fast del af vores support.' },
  { q: 'Kan I overtage fra vores nuværende blanding af leverandører?', a: 'Ja. Vi kortlægger, hvem der gør hvad i dag, og samler det under én aftale, uden at I selv skal koordinere overgangen.' },
  { q: 'Skal vi have en fast aftale, selvom vi kun har brug for hjælp sjældent?', a: 'Nej. Er behovet sporadisk, er et klippekort på 5, 10 eller 20 timer ofte nok — I bruger dem, når I har brug for os. Det siger vi ærligt, selvom en fast aftale giver os mere at lave. I skifter til en aftale, når (og hvis) behovet vokser.' },
  { q: 'Har vi brug for enterprise-løsninger som en stor virksomhed?', a: 'Nej, sjældent. De fleste mindre virksomheder har det bedre med enkle, driftssikre løsninger end med et komplekst enterprise-setup, der kræver en fuldtidsansat til at vedligeholde. Vi anbefaler ikke mere, end I reelt har brug for.' },
  { q: 'Hvad koster det for en mindre virksomhed?', a: 'Vi har tre pakker fra 399 kr. pr. bruger pr. måned (ekskl. moms): Starter, Premium og Exclusive — eller et klippekort, hvis en fast aftale er for tidligt. Se priser og svartider på vores side om IT-support til erhverv.' },
];
export function itSupportMindreVirksomhederHtml() {
  const faqHtml = IT_SUPPORT_MINDRE_VIRKSOMHEDER_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const items = [
    'Backup, der rent faktisk virker — den hyppigste post på "hvad man som minimum bør have styr på".',
    'Adgangsstyring — hvem har adgang til hvad, og hvad sker der, når en medarbejder stopper.',
    'Opdateringer, der rent faktisk bliver installeret — ikke udskudt i månedsvis.',
    'Antivirus/endpoint-beskyttelse på alle maskiner, ikke kun nogle.',
    'Én, der kan svare, når noget går galt — ikke en søgning på Google klokken 16.55 fredag.',
  ].map((t) => `<li>${t}</li>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Erhverv · Mindre virksomheder</div>
    <h1>IT-support til mindre virksomheder</h1><p class="lead">2-10 ansatte, ingen IT-afdeling, intet IT-budget. Vi bliver jeres faste IT-kontakt — uden at sælge jer mere, end I har brug for.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book en gratis IT-gennemgang</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <a href="/it-support-frederiksberg/">IT-support på Frederiksberg</a> › <span>Mindre virksomheder</span></div>
    <p>I de fleste mindre virksomheder er det "ham der er god til computere" — som i øvrigt også har et rigtigt job at passe. Når noget går galt, ender I med at ringe rundt til fem forskellige leverandører: én til computere, én til mail, én til netværket, ingen af dem med det fulde overblik.</p>
    <p>Vi går ind som den ene faste kontakt, der kender jeres opsætning og tager sig af det hele: computere og udstyr, mail og Microsoft 365, backup og sikkerhed, netværk. Vores værksted er på Falkoner Allé 108 — vi er der på få minutter, hvis I har brug for os fysisk.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Hvad man som minimum bør have styr på</div><h2>Fem ting, vi altid tjekker først</h2><ul class="check-list">${items}</ul></div></section>
  <section class="section"><div class="wrap"><div class="callout"><strong>Ærligt sagt:</strong> I skal sjældent bruge enterprise-løsninger som en stor virksomhed. Og har I kun brug for hjælp sjældent, er et klippekort ofte nok — det siger vi, selvom en fast aftale giver os mere at lave. I skifter til en aftale, når behovet reelt vokser, ikke før.</div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Svartider</div><h2>Klar besked om, hvor hurtigt vi svarer</h2>
    <p class="sub">Svartiden går fra 1 arbejdsdag i <strong>Starter</strong>, til 4 timer i <strong>Premium</strong>, til 1 time i <strong>Exclusive</strong> — alt inden for normal åbningstid. Foretrækker I klippekort frem for en fast aftale, koster timerne 1.000/950/900 kr. ved 5/10/20 timer. <a href="/it-support-til-erhverv/">Se alle pakker og priser →</a></p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>IT-support til mindre virksomheder — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Klar til en uforpligtende snak om jeres IT?</h2><p>Skriv til ${site.emailBusiness} eller ring, så kigger vi på jeres nuværende opsætning og finder de svage punkter.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book en gratis IT-gennemgang</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/it-support-frederiksberg/">IT-support på Frederiksberg →</a><a href="/it-support-haandvaerkere/">IT-support til håndværkere →</a><a href="/it-support-til-erhverv/">IT-support til erhverv →</a><a href="/it-raadgivning/">IT-rådgivning →</a><a href="/microsoft-365-erhverv/">Microsoft 365 til virksomheder →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}

// ---------- B2B: Revisorer & bogholdere ----------
// Angle: tal, deadlines og andres penge — distinct from the confidentiality
// (advokat) and uptime (klinik) angles. Sister page to advokat per DEL 4
// ("begge fortrolige data, GDPR") — crosslinked both ways.
export const IT_SUPPORT_REVISOR_FAQ = [
  { q: 'Kan I sætte e-conomic, Dinero, Billy eller Uniconta op, så det bare virker?', a: 'Ja. Vi sætter systemet op, holder det opdateret og fejlsøger, når noget driller — så det virker, når I skal bruge det, ikke mindst ved kvartals- og årsafslutning.' },
  { q: 'Hvad sker der, hvis systemet går ned midt i en momsfrist eller årsafslutning?', a: 'Svartiden er garanteret efter jeres pakke — 1 arbejdsdag i Starter, 4 timer i Premium, 1 time i Exclusive. I pressede perioder som momsfrister og årsafslutning ved vi, at ventetid koster mere end normalt.' },
  { q: 'Kan I sikre, at kun de rette medarbejdere ser en given klients tal?', a: 'Ja. Vi sætter adgangsstyring op, så det er klart, hvem der kan se hvilke klienters regnskaber — og lukker adgange med det samme, når en medarbejder stopper.' },
  { q: 'Hvordan udveksler vi regnskabsmateriale sikkert med klienter?', a: 'Vi sætter kryptering og sikker fildeling op til udveksling af regnskabsmateriale, så følsomme tal ikke sendes i klartekst over mail.' },
  { q: 'Kan backuppen gendannes til et specifikt tidspunkt, ikke bare "seneste version"?', a: 'Ja — vi sætter backup med versionering op, så I kan gendanne til et konkret tidspunkt, hvis en fejl først opdages dage efter, den skete.' },
  { q: 'Rådgiver I os om skat eller regnskab?', a: 'Nej — vi er ikke revisorer eller bogholdere, og vi kender ikke jeres klienters regnskaber. Vi står for teknikken: at systemerne virker, at data er sikret, og at I kan dokumentere adgang og backup.' },
];
export function itSupportRevisorHtml() {
  const faqHtml = IT_SUPPORT_REVISOR_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const cards = [
    ['🧮', 'e-conomic, Dinero, Billy, Uniconta', 'Opsætning og fejlfinding af jeres regnskabssystem, så det virker ved kvartals- og årsafslutning — ikke midt i den.'],
    ['🔐', 'Sikker udveksling af regnskabsmateriale', 'Kryptering og sikker fildeling, når følsomt regnskabsmateriale skal deles med klienter.'],
    ['🔑', 'Adgangsstyring', 'Klare rammer for, hvem der må se hvilke klienters tal — og adgange, der lukkes med det samme, når nogen stopper.'],
    ['💾', 'Backup med versionering', 'Kan gendannes til et specifikt tidspunkt, ikke kun "seneste" — vigtigt, når en fejl først opdages dage efter.'],
    ['⏱️', 'Oppetid ved momsfrister og årsafslutning', 'Ekstra vagtsomhed i de perioder, hvor et nedbrud koster mest.'],
  ].map(([i, t, b]) => `<div class="card"><div class="card-icon">${i}</div><h3>${esc(t)}</h3><p>${esc(b)}</p></div>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Erhverv · Revisorer &amp; bogholdere</div>
    <h1>IT-support til revisorer og bogholdere</h1><p class="lead">Tal, deadlines og andres penge stiller andre krav til IT. Regnskabssystemer, der virker ved kvartalsafslutning, adgangsstyring på klienters tal, og backup, der kan gendannes til et specifikt tidspunkt.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book en gratis IT-gennemgang</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <a href="/it-support-frederiksberg/">IT-support på Frederiksberg</a> › <span>Revisorer &amp; bogholdere</span></div>
    <p>På et revisor- eller bogholderikontor er en IT-fejl sjældent bare en gene — det er en klients tal, en frist eller et regnskab, der pludselig er i spil. Vi bygger jeres IT-support omkring den virkelighed: at e-conomic, Dinero, Billy eller Uniconta rent faktisk virker, at kun de rette ser hvad de skal, og at backup kan gendannes, når det gælder.</p>
    <p>Vi er ikke revisorer, og vi rådgiver ikke om skat eller regnskab. Det, vi gør, er at stå for teknikken bag dem — sikkert, testet og dokumenteret.</p>
    <p>Der ligger en del revisor- og bogholderikontorer på Frederiksberg. Vores værksted er på Falkoner Allé 108 — vi er der på få minutter, når en momsfrist eller årsafslutning ikke kan vente.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Derfor er IT ikke bare IT på et revisor- eller bogholderikontor</div><h2>Fem ting, vi bygger jeres aftale omkring</h2><div class="grid grid-3">${cards}</div></div></section>
  <section class="section"><div class="wrap"><div class="callout"><strong>Sagt tydeligt:</strong> Vi er ikke revisorer eller bogholdere — vi kender ikke jeres klienters regnskaber. Vores opgave er, at systemerne virker, at data er sikret, og at I kan dokumentere adgang og backup.</div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Svartider</div><h2>Klar besked om, hvor hurtigt vi svarer</h2>
    <p class="sub">Med <strong>Starter</strong> har I svar inden for 1 arbejdsdag, med <strong>Premium</strong> inden for 4 timer, og med <strong>Exclusive</strong> inden for 1 time — alt i normal åbningstid. Mange revisor- og bogholderikontorer med faste frister vælger Premium eller Exclusive. <a href="/it-support-til-erhverv/">Se alle pakker og priser →</a></p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>IT-support til revisorer og bogholdere — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Klar til en uforpligtende snak om jeres IT?</h2><p>Skriv til ${site.emailBusiness} eller ring, så kigger vi på jeres nuværende opsætning og finder de svage punkter.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book en gratis IT-gennemgang</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/it-support-frederiksberg/">IT-support på Frederiksberg →</a><a href="/it-support-advokatkontor/">IT-support til advokatkontorer →</a><a href="/it-support-til-erhverv/">IT-support til erhverv →</a><a href="/it-raadgivning/">IT-rådgivning →</a><a href="/automatisk-backup/">Automatisk Backup →</a><a href="/kontakt/">Kontakt &amp; booking →</a></div></div></div></section>`;
}

// ---------- B2B: Butikker & restauranter ----------
// Angle: går kassen ned, står køen stille. Sister page to klinik per DEL 4
// ("begge har kunder i lokalet, oppetid kritisk") — crosslinked both ways.
export const IT_SUPPORT_BUTIK_RESTAURANT_FAQ = [
  { q: 'Hvad sker der, hvis kassesystemet går ned midt i myldretiden?', a: 'Vi rykker ud hurtigt i åbningstiden, fordi vi ved, en butik eller restaurant ikke kan vente til i morgen. Svartiden er garanteret efter jeres pakke, og vi prioriterer sager, hvor kassen står stille.' },
  { q: 'Kan gæster bruge vores WiFi, uden at det går ud over kassesystemets sikkerhed?', a: 'Ja — vi adskiller gæste-WiFi fra kassesystemet på netværksniveau, så gæstetrafik aldrig kan røre betalingsterminal eller lagerdata. Det er sikkerhedskritisk, ikke kun praktisk.' },
  { q: 'Hjælper I med bonprinter, scanner og kundedisplay?', a: 'Ja — det udstyr, der holder køen i gang, er en fast del af vores support, ikke kun computeren i baglokalet.' },
  { q: 'Kan I sætte lagerstyring op, så beholdningen stemmer med kassen?', a: 'Ja, vi sætter lagerstyring op og integrerer den med kassesystemet, så beholdningen opdateres automatisk i stedet for at blive talt manuelt.' },
  { q: 'Supporterer I selve kassesystemets software?', a: 'Fagsupport på selve kassesystemets software ligger typisk hos jeres kassesystemleverandør. Vi står for netværk, hardware og betalingsterminal omkring det, så det hele spiller sammen.' },
  { q: 'Hvor hurtigt kan I være der, hvis noget går galt i åbningstiden?', a: 'Vi ligger på Falkoner Allé 108, og for butikker og restauranter på Frederiksberg er vi typisk fremme på få minutter. Kan det klares uden fremmøde, hjælper vi via fjernsupport med det samme.' },
];
export function itSupportButikRestaurantHtml() {
  const faqHtml = IT_SUPPORT_BUTIK_RESTAURANT_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const cards = [
    ['💳', 'Kassesystem & betalingsterminal', 'Må aldrig gå ned i myldretiden — vi prioriterer sager, hvor kassen står stille.'],
    ['📶', 'Gæste-WiFi adskilt fra kassesystemet', 'Sikkerhedskritisk, ikke bare praktisk — gæstetrafik kan aldrig røre betalingsterminal eller lagerdata.'],
    ['🖨️', 'Bonprinter, scanner & kundedisplay', 'Udstyret, der holder køen i gang, ikke kun computeren i baglokalet.'],
    ['📦', 'Lagerstyring', 'Integreret med kassesystemet, så beholdningen stemmer, uden at nogen skal tælle manuelt.'],
    ['⚡', 'Hurtig udrykning i åbningstiden', 'Vi ved, en butik eller restaurant ikke kan vente til i morgen.'],
  ].map(([i, t, b]) => `<div class="card"><div class="card-icon">${i}</div><h3>${esc(t)}</h3><p>${esc(b)}</p></div>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Erhverv · Butikker &amp; restauranter</div>
    <h1>IT-support til butikker og restauranter</h1><p class="lead">Går kassen ned, står køen stille. Vi holder kassesystem, betalingsterminal, netværk og udstyr kørende — med hurtig udrykning, når det gælder åbningstiden.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book en gratis IT-gennemgang</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <a href="/it-support-frederiksberg/">IT-support på Frederiksberg</a> › <span>Butikker &amp; restauranter</span></div>
    <p>I en butik eller restaurant er en IT-fejl aldrig bare en gene — det er en kø, der står stille, eller et bord, der ikke kan betjenes. Vi bygger jeres IT-support omkring den virkelighed: kassesystem og betalingsterminal, der ikke går ned i myldretiden, gæste-WiFi holdt sikkert adskilt, og udstyr, der bare virker.</p>
    <p>Vi rører ikke selve kassesystemets software — det er typisk jeres leverandørs fagområde. Vi står for netværket, hardwaren og betalingsterminalen omkring det.</p>
    <p>Der ligger mange butikker og restauranter omkring Frederiksberg Centret, Gammel Kongevej og Værnedamsvej. Vores værksted er på Falkoner Allé 108 — vi er der på få minutter, hvis kassen går ned midt i myldretiden.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Derfor er IT ikke bare IT i en butik eller restaurant</div><h2>Fem ting, vi bygger jeres aftale omkring</h2><div class="grid grid-3">${cards}</div></div></section>
  <section class="section"><div class="wrap"><div class="callout"><strong>Ærligt om det:</strong> Fagsupport på selve kassesystemets software ligger hos jeres leverandør — det er ikke os. Vi står for netværk, hardware og betalingsterminal omkring det, så resten fungerer, når kunderne står i kø.</div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Svartider</div><h2>Klar besked om, hvor hurtigt vi svarer</h2>
    <p class="sub">Svartiden er garanteret efter pakke — <strong>Starter</strong> inden for 1 arbejdsdag, <strong>Premium</strong> inden for 4 timer, <strong>Exclusive</strong> inden for 1 time — alt i normal åbningstid. Butikker og restauranter med kunder i lokalet vælger typisk Premium eller Exclusive. <a href="/it-support-til-erhverv/">Se alle pakker og priser →</a></p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>IT-support til butikker og restauranter — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Klar til en uforpligtende snak om jeres IT?</h2><p>Skriv til ${site.emailBusiness} eller ring, så kigger vi på jeres nuværende opsætning og finder de svage punkter.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book en gratis IT-gennemgang</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/it-support-frederiksberg/">IT-support på Frederiksberg →</a><a href="/it-support-klinik/">IT-support til klinikker →</a><a href="/it-support-til-erhverv/">IT-support til erhverv →</a><a href="/it-raadgivning/">IT-rådgivning →</a><a href="/automatisk-backup/">Automatisk Backup →</a><a href="/kontakt/">Kontakt &amp; booking →</a></div></div></div></section>`;
}


// ---------- Fejlguide: Blå skærm (BSOD) ----------
export const BSOD_FAQ = [
  { q: 'Hvad betyder en blå skærm helt konkret?', a: 'Windows er stødt på en fejl, den ikke kan komme videre fra sikkert, og stopper med det samme for at undgå at gøre skaden større — det er en beskyttelsesmekanisme, ikke i sig selv beviset på en alvorlig fejl.' },
  { q: 'Hvor finder jeg stopkoden?', a: 'Den står øverst eller nederst på selve den blå skærm (fx "PAGE_FAULT_IN_NONPAGED_AREA"). Overlevede den ikke længe nok til at læse, finder du den samme information under Indstillinger → Windows Update → Avanceret fejlfinding → Pålidelighedshistorik, eller i Hændelsesfremviser.' },
  { q: 'Er en blå skærm altid tegn på en hardwarefejl?', a: 'Nej. Langt de fleste enkeltstående blå skærme skyldes en driver eller en Windows-opdatering, der ikke gik godt. Kommer den igen og igen, især med samme stopkode, peger det oftere mod RAM eller et drev på vej ud.' },
  { q: 'Kan jeg miste data ved en blå skærm?', a: 'Sjældent af selve den blå skærm alene — men hvis årsagen er et svigtende drev, bliver backup tidskritisk. Vi prioriterer datagendannelse, hvis fejlsøgningen peger i den retning.' },
  { q: 'Hvornår skal jeg stoppe med selv at fejlsøge og bringe den ind?', a: 'Hvis den samme stopkode kommer igen efter en driveropdatering, hvis du hører usædvanlig blæserstøj eller mærker overophedning, eller hvis Windows slet ikke kan starte op igen — så er det tid til at få den fejlsøgt hos os.' },
];
export function bsodHtml() {
  const faqHtml = BSOD_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const causes = [
    '<strong>RAM</strong> — en fejlende hukommelsesmodul er en af de hyppigste årsager til gentagne blå skærme, især med skiftende stopkoder.',
    '<strong>Drivere</strong> — særligt grafikkort- og netværksdrivere, ofte lige efter en Windows-opdatering eller et driverskift.',
    '<strong>Disk på vej ud</strong> — et svigtende drev kan give blå skærme, der ser tilfældige ud, men følger et mønster over tid.',
    '<strong>Overophedning</strong> — støvede blæsere eller tør kølepasta kan få systemet til at gå ned under belastning.',
    '<strong>Ny hardware eller opdatering</strong> — en nylig ændring er ofte det første sted, vi kigger, fordi det er det mest sandsynlige udgangspunkt.',
  ].map((t) => `<li>${t}</li>`).join('');
  const selfHelp = [
    'Genstart computeren — lyder banalt, men løser en del enkeltstående tilfælde.',
    'Har du lige installeret en ny driver eller opdatering? Prøv at rulle den tilbage.',
    'Tjek Windows Update for ventende opdateringer — nogle blå skærme skyldes en fejl, Microsoft allerede har rettet.',
    'Kør Windows’ indbyggede hukommelsestest (søg efter "Windows-hukommelsesdiagnose").',
    'Noter stopkoden, hver gang den optræder — kommer den igen med samme kode, er det en vigtig oplysning for os.',
  ].map((t) => `<li>${t}</li>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Hjælp · Blå skærm (BSOD)</div>
    <h1>Blå skærm — hvad det betyder, og hvad du kan gøre</h1><p class="lead">En "Blue Screen of Death" er ikke altid alvorligt — men gentager den sig, er det værd at kende forskellen. Sådan læser du den, og hvornår du skal have hjælp.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <a href="/fejlmeddelelser/">Fejlmeddelelser</a> › <span>Blå skærm (BSOD)</span></div>
    <p>En blå skærm er Windows' måde at stoppe sig selv på, når den støder på en fejl, den ikke kan komme videre fra uden risiko for at gøre skaden større. Det ser dramatisk ud, men er i virkeligheden en beskyttelsesmekanisme — spørgsmålet er, hvad der udløste den, og om det gentager sig.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Hyppigste årsager</div><h2>Fem ting, der oftest udløser en blå skærm</h2><ul class="check-list">${causes}</ul></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Hvad du selv kan prøve</div><h2>Før du bringer den ind</h2><ul class="check-list">${selfHelp}</ul></div></section>
  <section class="section alt"><div class="wrap"><div class="callout"><strong>Hvornår det er hardware:</strong> Kommer den samme stopkode igen efter en driveropdatering, eller optræder blå skærme sammen med usædvanlig blæserstøj eller varme, er sandsynligheden større for, at det er RAM, disk eller et andet hardwareproblem — og det er her, vi kan hjælpe med at isolere den præcise årsag.</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Blå skærm — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Løser det ikke problemet?</h2><p>${FAULT_GUIDE_CTA}</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/fejlmeddelelser/">Fejlmeddelelser →</a><a href="/harddisk-ssd-udskiftning/">Udskiftning af harddisk →</a><a href="/computer-vil-ikke-taende/">Computeren vil ikke tænde →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}

// ---------- Fejlguide: Grafikkortfejl på bærbar ----------
export const GPU_FEJL_FAQ = [
  { q: 'Hvad er artefakter, og hvordan ser de ud?', a: 'Farvede prikker, striber, forvrængede figurer eller flimrende mønstre på skærmen, mens computeren ellers virker. Det er typisk et tegn på, at grafikkortet leverer forkert billeddata.' },
  { q: 'Er det altid grafikkortet, når skærmen ser forvrænget ud?', a: 'Nej. Det kan også være selve skærmpanelet eller skærmkablet. Tilslutter du en ekstern skærm og ser det samme problem der, peger det mod grafikkortet frem for skærmen.' },
  { q: 'Kan jeg bare skifte grafikkortet i min bærbare?', a: 'Sjældent. På de fleste bærbare er grafikkortet loddet direkte på bundkortet og kan ikke udskiftes for sig — en reparation handler i praksis ofte om bundkortet.' },
  { q: 'Hvad kan jeg selv prøve, før jeg bringer den ind?', a: 'En ren geninstallation af grafikkortdriveren, et tjek af temperaturer under belastning, og en test med en ekstern skærm — det hjælper os med at indsnævre årsagen, selv hvis det ikke løser problemet.' },
  { q: 'Hvornår kan det betale sig at reparere frem for at købe ny?', a: 'Det afhænger af maskinens alder og pris på en tilsvarende reparation. Er fejlen isoleret og maskinen ikke for gammel, kan det ofte betale sig — vi giver en ærlig vurdering, før vi går i gang.' },
];
export function grafikkortFejlHtml() {
  const faqHtml = GPU_FEJL_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const symptoms = [
    'Artefakter — farvede prikker, striber eller forvrængede mønstre på skærmen.',
    'Sort skærm, men maskinen kører videre — blæserne spinner, tastaturbelysningen er tændt, men der kommer intet billede.',
    'Skærmen fryser eller flimrer under belastning (spil, video), men er stabil i almindelig brug.',
    'Farverne skifter eller bliver forkerte uden nogen åbenlys grund.',
  ].map((t) => `<li>${t}</li>`).join('');
  const selfHelp = [
    'Geninstallér grafikkortdriveren fra bunden (en ren afinstallation, ikke bare en opdatering).',
    'Tilslut en ekstern skærm — ser du det samme problem der, er det grafikkortet, ikke skærmen.',
    'Hold øje med temperaturer under belastning, hvis du har et overvågningsprogram — vedvarende høje temperaturer peger mod overophedning.',
    'Prøv sikker tilstand — ser billedet normalt ud der, er det ofte software/driver frem for hardware.',
  ].map((t) => `<li>${t}</li>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Hjælp · Grafikkortfejl</div>
    <h1>Grafikkortfejl på en bærbar — hvad det kan være</h1><p class="lead">Artefakter, striber eller sort skærm, mens maskinen ellers kører? Sådan skelner du driver fra overophedning fra reelt hardwaresvigt.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <a href="/fejlmeddelelser/">Fejlmeddelelser</a> › <span>Grafikkortfejl på bærbar</span></div>
    <p>Grafikkortfejl på en bærbar viser sig sjældent som "grafikkortet er dødt" med det samme — det starter typisk som artefakter, striber eller en skærm, der går sort, mens resten af maskinen tydeligvis stadig kører. Hvilket af disse tegn du ser, siger noget om, hvad der foregår.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Symptomer</div><h2>Sådan ser en grafikkortfejl typisk ud</h2><ul class="check-list">${symptoms}</ul></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Driver, overophedning eller hardwaresvigt?</div><h2>Tre forskellige årsager — tre forskellige løsninger</h2>
    <p class="sub">En forkert eller forældet driver giver ofte artefakter, der forsvinder efter en ren geninstallation. Overophedning viser sig typisk under belastning — spil eller tunge programmer — og retter sig, når maskinen køler ned eller efter en rensning. Et reelt hardwaresvigt er vedvarende, uanset hvad du gør i software, og kræver som regel en fysisk reparation.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Hvad du selv kan prøve</div><h2>Før du bringer den ind</h2><ul class="check-list">${selfHelp}</ul></div></section>
  <section class="section"><div class="wrap"><div class="callout"><strong>Hvorfor det ofte er en større reparation:</strong> På de fleste bærbare er grafikkortet loddet fast direkte på bundkortet — det er ikke et løst kort, man kan skifte ud for sig, som på en stationær. Er fejlen på selve chippen, handler reparationen derfor typisk om bundkortet som helhed.</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Grafikkortfejl — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Løser det ikke problemet?</h2><p>${FAULT_GUIDE_CTA}</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/bundkort-reparation/">Bundkortreparation →</a><a href="/rens-af-pc/">Rens af pc →</a><a href="/reparere-eller-koebe-ny-computer/">Reparere eller købe ny computer? →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}

// ---------- Fejlguide: MacBook Touch Bar virker ikke ----------
export const TOUCH_BAR_FAQ = [
  { q: 'Hvilke MacBook-modeller har en Touch Bar?', a: 'MacBook Pro-modeller fra 2016 til 2020 med Touch Bar (Intel). Apple droppede Touch Bar med overgangen til Apple Silicon (M1 og senere), så nyere MacBook Pro-modeller har den ikke.' },
  { q: 'Kan jeg selv genstarte Touch Bar uden at genstarte hele maskinen?', a: 'Ja, via Aktivitetsovervågning kan du finde og genstarte processen "Control Strip" — det løser en del tilfælde af software-hængning uden en fuld genstart.' },
  { q: 'Er det dyrt at få repareret Touch Bar?', a: 'Det afhænger af årsagen. En softwarefejl koster ikke noget ud over almindelig fejlsøgning. Er Touch Bar derimod fysisk skadet, hænger prisen ofte sammen med, at hele skærmenheden skal skiftes — vi giver en fast pris, før vi går i gang.' },
  { q: 'Kan væskeskade være årsagen, selvom resten af maskinen virker fint?', a: 'Ja. Touch Bar sidder tæt på tastaturet og kan være ramt af væske, selvom resten af maskinen tilsyneladende fungerer normalt.' },
  { q: 'Kan jeg bruge min MacBook normalt, selvom Touch Bar ikke virker?', a: 'I de fleste tilfælde ja — funktionstaster og lydstyrke kan typisk stadig styres via tastaturgenveje, mens du venter på reparation.' },
];
export function macbookTouchBarHtml() {
  const faqHtml = TOUCH_BAR_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const causes = [
    '<strong>Software-hængning</strong> — Touch Bar-processen ("Control Strip") sidder fast, ofte efter en opdatering eller lang tids brug uden genstart.',
    '<strong>macOS-fejl</strong> — en fejlbehæftet systemopdatering kan i sjældne tilfælde gøre Touch Bar ustabil.',
    '<strong>Væskeskade</strong> — Touch Bar sidder tæt på tastaturet og er sårbar over for spild, selv i små mængder.',
    '<strong>Defekt flexkabel</strong> — det tynde kabel, der forbinder Touch Bar til bundkortet, kan knække eller løsne sig, typisk efter en reparation eller stort slid.',
  ].map((t) => `<li>${t}</li>`).join('');
  const selfHelp = [
    'Genstart Touch Bar-processen via Aktivitetsovervågning (søg efter "Control Strip" og afslut processen — den genstarter automatisk).',
    'Tjek for macOS-opdateringer under Systemindstillinger → Generelt → Softwareopdatering.',
    'Nulstil SMC og NVRAM (kun på Intel-modeller — Apple Silicon har ikke disse nulstillinger på samme måde).',
    'Start i sikker tilstand for at se, om Touch Bar virker der — det indsnævrer, om det er software eller hardware.',
  ].map((t) => `<li>${t}</li>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Hjælp · MacBook Touch Bar</div>
    <h1>Touch Bar virker ikke — hvad du kan gøre</h1><p class="lead">Sort, frosset eller helt død Touch Bar på din MacBook Pro? Se de mest almindelige årsager, og hvad du selv kan prøve, før du bringer den ind.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <a href="/mac-reparation/">Mac-reparation</a> › <span>Touch Bar virker ikke</span></div>
    <p>Touch Bar findes på MacBook Pro-modeller fra 2016 til 2020 og kan holde op med at virke af flere forskellige grunde — fra en simpel software-hængning, der løses på et minut, til en fysisk skade, der kræver en reparation. Her er, hvad der oftest er årsagen, og hvad du kan tjekke selv, før du bringer den ind.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Hyppigste årsager</div><h2>Hvorfor Touch Bar stopper med at virke</h2><ul class="check-list">${causes}</ul></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Hvad du selv kan prøve</div><h2>Før du bringer den ind</h2><ul class="check-list">${selfHelp}</ul></div></section>
  <section class="section alt"><div class="wrap"><div class="callout"><strong>Hænger ofte sammen med skærmenheden:</strong> Touch Bar er fysisk en del af skærmenheden på disse modeller, ikke en løs komponent for sig. Er fejlen fysisk (fx et defekt flexkabel eller væskeskade), betyder det ofte, at hele skærmenheden skal skiftes eller repareres — vi ser altid på den konkrete maskine, før vi giver et tilbud.</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>MacBook Touch Bar — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Løser det ikke problemet?</h2><p>${FAULT_GUIDE_CTA}</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/macbook-reparation/">MacBook-reparation →</a><a href="/mac-skaermudskiftning/">Mac-skærmudskiftning →</a><a href="/vaeskeskade-reparation/">Væskeskade-reparation →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}

// ---------- Fejlguide: Batteriet holder ikke ----------
export const BATTERI_HOLDER_IKKE_FAQ = [
  { q: 'Hvordan tjekker jeg batteriets tilstand på Windows?', a: 'Åbn en kommandoprompt og skriv "powercfg /batteryreport" — det genererer en rapport med batteriets designkapacitet sammenlignet med dets nuværende maksimale kapacitet, så du kan se, hvor meget det reelt er faldet.' },
  { q: 'Hvordan tjekker jeg batteriets tilstand på en Mac?', a: 'Gå til Systemindstillinger → Batteri → Batteristatus. Der kan du se cyklustælleren og om der står "Normal" eller "Service anbefales".' },
  { q: 'Mit batteri er hævet — er det farligt?', a: 'Ja. Stop med at bruge maskinen med det samme, og kom forbi os hurtigst muligt. Et hævet batteri er en sikkerhedsrisiko, ikke bare et spørgsmål om kortere levetid.' },
  { q: 'Hvor tit skal et batteri skiftes?', a: 'Der er ingen fast tidsgrænse — det afhænger af antal opladningscyklusser og brugsmønster. Mærker du en tydelig forskel i dagligdagen, eller viser statusrapporten "Service anbefales", er det tid til at overveje et skift.' },
  { q: 'Kan jeg selv skifte batteriet?', a: 'Vi anbefaler det ikke selv — særligt ikke på MacBooks, hvor batteriet ofte er limet fast, og en forkert håndtering kan beskadige resten af maskinen. Vi skifter det sikkert og tester maskinen bagefter.' },
];
export function batterietHolderIkkeHtml() {
  const faqHtml = BATTERI_HOLDER_IKKE_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const checks = [
    '<strong>Windows:</strong> kør "powercfg /batteryreport" i en kommandoprompt for at se designkapacitet mod nuværende maksimal kapacitet.',
    '<strong>Mac:</strong> Systemindstillinger → Batteri → Batteristatus, for cyklustæller og status ("Normal" eller "Service anbefales").',
  ].map((t) => `<li>${t}</li>`).join('');
  const warning = [
    '<strong>Normalt slid:</strong> kortere tid mellem opladninger over tid er forventeligt og løses med et almindeligt batteriskift.',
    '<strong>Hævet eller bulnet batteri:</strong> stop brugen med det samme — det er en sikkerhedsrisiko, ikke bare et ydelsesproblem. Kom forbi os hurtigst muligt.',
  ].map((t) => `<li>${t}</li>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Hjælp · Batteriproblemer</div>
    <h1>Batteriet holder ikke længere — hvad du bør vide</h1><p class="lead">Batterier er sliddele, og alle mister kapacitet over tid. Sådan tjekker du, hvor slidt dit er — og hvornår det er mere end bare almindeligt slid.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Batteriet holder ikke</span></div>
    <p>Et batteri, der holder kortere tid end før, er som regel bare et sliddel, der har levet sit liv — det gælder alle bærbare, Windows såvel som Mac. Men der er forskel på almindeligt slid og et batteri, der reelt er en sikkerhedsrisiko, og det er værd at kunne se forskellen.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Sådan tjekker du batteriets tilstand</div><h2>Windows og Mac hver for sig</h2><ul class="check-list">${checks}</ul></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Normalt slid eller sikkerhedsrisiko?</div><h2>Kend forskellen</h2><ul class="check-list">${warning}</ul></div></section>
  <section class="section alt"><div class="wrap"><div class="callout"><strong>Hvornår kan et batteriskift betale sig:</strong> Næsten altid, hvis resten af maskinen fungerer fint — et batteriskift er en af de billigste måder at forlænge en bærbars levetid på. Se også vores guide til <a href="/hvor-laenge-holder-en-macbook/">hvor længe en MacBook holder</a>.</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Batteriproblemer — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Løser det ikke problemet?</h2><p>${FAULT_GUIDE_CTA}</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kom forbi med din enhed</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/mac-batteriskift/">Mac-batteriskift →</a><a href="/hvor-laenge-holder-en-macbook/">Hvor længe holder en MacBook? →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}

// ---------- Hvad er refurbished? ----------
// DRAFTED, NOT YET WIRED INTO build.mjs — see task #34 completion note.
// [Shan] must confirm before this page is published: acceptance limits
// (age/brand/condition), whether disposal/data-wiping costs anything, and
// whether the customer gets wipe documentation. Content below deliberately
// avoids all three — do not add specifics without Shan's sign-off, and
// never say "gratis" about disposal/wiping unless confirmed.
export const HVAD_ER_REFURBISHED_FAQ = [
  { q: 'Hvad er forskellen på brugt, refurbished og ny?', a: 'Brugt sælges typisk som den er, uden test eller garanti. Refurbished er testet og istandsat af os, med defekte eller slidte dele udskiftet, og sælges med garanti. Ny er uåbnet med fuld fabriksgaranti — og den højeste pris.' },
  { q: 'Hvor lang garanti får jeg på en refurbished computer?', a: 'Det afhænger af kvalitetsgraden: A-kvalitet 3 år, B-kvalitet 2 år, C-kvalitet 1 år.' },
  { q: 'Hvad bliver testet og udskiftet, før en computer sælges som refurbished?', a: 'Vi tester funktionen grundigt — batteri, skærm, tastatur og porte — rengør maskinen indvendigt og udvendigt, og udskifter de dele, der er slidte eller ikke lever op til vores standard, før den sættes til salg.' },
  { q: 'Passer en refurbished computer til mig?', a: 'Den passer godt, hvis du vil have god ydelse til en lavere pris og ikke insisterer på den allernyeste model. Skal du bruge den allernyeste hardware, eller vil du have oplevelsen af en uåbnet æske, er en ny maskine det rette valg i stedet.' },
  { q: 'Tager I min gamle computer i bytte eller retur?', a: 'Ja — vi køber brugte maskiner, tager byttehandel, og tager maskiner, der ikke længere er noget værd, af hænderne på dig med sikker datasletning og genbrug. Kontakt os for de konkrete vilkår for din maskine.' },
];
export function hvadErRefurbishedHtml() {
  const faqHtml = HVAD_ER_REFURBISHED_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const compare = [
    ['Brugt', 'Sælges som den er, typisk privat. Ingen test, ingen garanti, og du ved ikke, hvad du får, før du har den i hånden.'],
    ['Refurbished (PCKlinik)', 'Testet og istandsat af os. Defekte eller slidte dele udskiftet. Sælges med garanti efter kvalitetsgrad.'],
    ['Ny', 'Uåbnet, fuld fabriksgaranti, den allernyeste model — og den højeste pris.'],
  ].map(([t, b]) => `<div class="card"><h3>${esc(t)}</h3><p>${esc(b)}</p></div>`).join('');
  const warranty = [
    ['A-kvalitet', '3 år', 'Minimale tegn på brug, topstand.'],
    ['B-kvalitet', '2 år', 'Synlige, men mindre brugsspor. Fuldt funktionsdygtig.'],
    ['C-kvalitet', '1 år', 'Tydeligere brugsspor. Testet og fungerer fint, til den laveste pris.'],
  ].map(([g, y, b]) => `<div class="card"><h3>${esc(g)}</h3><p class="price">${esc(y)} <small>garanti</small></p><p>${esc(b)}</p></div>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Butik · Refurbished</div>
    <h1>Hvad er en refurbished computer?</h1><p class="lead">Refurbished er ikke det samme som brugt. Se forskellen, hvad vi tester og udskifter, og hvem en refurbished computer passer til — og hvem den ikke gør.</p>
    <div class="cta-row"><a class="btn btn-white" href="/butik/computere/refurbished/">Se refurbished computere →</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <a href="/butik/">Butik</a> › <span>Hvad er refurbished?</span></div>
    <p>"Refurbished" bliver ofte brugt løst om alt, der ikke er nyt — men der er stor forskel på en computer, der bare er brugt, og en, der er testet, istandsat og garanteret. Her er, hvad refurbished faktisk betyder hos os.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Brugt, refurbished eller ny?</div><h2>Tre forskellige ting</h2><div class="grid grid-3">${compare}</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Garanti efter kvalitetsgrad</div><h2>Garantien afhænger af standen — synligt og ærligt</h2><div class="grid grid-3">${warranty}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="callout"><strong>Hvem det passer til:</strong> God ydelse til en lavere pris, uden at gå på kompromis med at have en testet, garanteret maskine. <strong>Hvem det ikke passer til:</strong> Skal du bruge den absolut nyeste hardware, eller vil du have oplevelsen af en uåbnet æske, er en ny maskine det rette valg — det siger vi ærligt, fordi det er det, der i sidste ende sælger bedst.</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Din gamle maskine</div><h2>Vi tager også imod</h2><p class="sub">Vi køber brugte maskiner, tager byttehandel mod en refurbished eller ny computer, og tager maskiner, der ikke længere er noget værd, af hænderne på dig — med sikker datasletning og genbrug. <a href="/kontakt/">Kontakt os</a> for de konkrete vilkår for din maskine.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Refurbished computere — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Klar til at se udvalget?</h2><p>Testede, istandsatte computere med garanti efter kvalitetsgrad — god ydelse til en lavere pris.</p><div class="cta-row"><a class="btn btn-white" href="/butik/computere/refurbished/">Se refurbished computere →</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/butik/computere/refurbished/">Refurbished computere →</a><a href="/reparere-eller-koebe-ny-computer/">Reparere eller købe ny computer? →</a><a href="/baeredygtig-it-genbrug/">Bæredygtig IT & genbrug →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}

// ---------- Bæredygtig IT & genbrug ----------
// DRAFTED, NOT YET WIRED INTO build.mjs — see task #34 completion note.
// Same [Shan] confirmation gate as hvadErRefurbishedHtml() above: no
// acceptance limits, no disposal/wipe pricing, no documentation claims
// until confirmed. No invented environmental statistics (CO2 figures etc.)
// — only qualitative, defensible claims.
export const BAEREDYGTIG_GENBRUG_FAQ = [
  { q: 'Er reparation virkelig mere bæredygtigt end at købe nyt?', a: 'Ja — at forlænge levetiden på en computer, du allerede har, sparer de ressourcer og den produktion, en helt ny maskine ville kræve. Det er den grønneste mulighed, når det er teknisk og økonomisk forsvarligt.' },
  { q: 'Hvad sparer jeg ved at købe en refurbished computer i stedet for ny?', a: 'Du får en testet, fungerende maskine uden at en ny skal produceres fra bunden — og typisk til en lavere pris end en tilsvarende ny model.' },
  { q: 'Hvad sker der med min gamle maskine, hvis den ikke kan repareres?', a: 'Vi sletter dine data sikkert og sender maskinen til genbrug eller ansvarlig bortskaffelse, i stedet for at den ender som elektronikaffald.' },
  { q: 'Jeg har en gammel maskine liggende, fordi jeg er bekymret for mine data — hvad gør jeg?', a: 'Det er en meget almindelig grund til, at folk lader en gammel maskine ligge i skabet. Vi sletter data sikkert som en fast del af processen, når vi tager en maskine imod. Kontakt os for de konkrete vilkår.' },
  { q: 'Hvornår giver reparation mere mening end at købe refurbished eller ny?', a: 'Når fejlen er afgrænset og maskinen ikke er for gammel — se vores guide til at vælge mellem reparation og ny computer.' },
];
export function baeredygtigGenbrugHtml() {
  const faqHtml = BAEREDYGTIG_GENBRUG_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const steps = [
    ['1', 'Reparér, hvis det kan betale sig', 'Den grønneste mulighed er den maskine, du allerede har. Vi siger ærligt, om en reparation kan betale sig.'],
    ['2', 'Vælg refurbished, hvis du skal have noget andet', 'Testet og istandsat med garanti — uden at en ny maskine skal produceres fra bunden.'],
    ['3', 'Aflever den gamle sikkert, hvis den ikke kan reddes', 'Sikker datasletning og genbrug, i stedet for at den ender som elektronikaffald i en skuffe eller på et lager.'],
  ].map(([n, t, b]) => `<div class="step"><div class="num">${n}</div><h3>${esc(t)}</h3><p>${esc(b)}</p></div>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Bæredygtighed</div>
    <h1>Bæredygtig IT: reparér, genbrug — og når det ikke kan reddes</h1><p class="lead">Den mest bæredygtige computer er ofte den, du allerede har. Sådan tænker vi bæredygtighed ind i reparation, refurbished og det, der ikke længere kan reddes.</p>
    <div class="cta-row"><a class="btn btn-white" href="/reparere-eller-koebe-ny-computer/">Reparere eller købe ny? →</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Bæredygtig IT & genbrug</span></div>
    <p>Bæredygtig IT starter ikke med at købe grønnere — det starter med at bruge det, du allerede har, længere. Reparation og opgradering er den mulighed, der belaster miljøet mindst, fordi den ikke kræver, at en ny maskine bliver produceret.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Tre trin</div><h2>Sådan griber vi bæredygtighed an</h2><div class="steps">${steps}</div></div></section>
  <section class="section"><div class="wrap"><div class="callout"><strong>Datasletning er ofte det, der holder folk tilbage:</strong> Mange lader en gammel computer ligge i skabet, ikke fordi de vil beholde den, men fordi de er bekymrede for, hvad der sker med deres data. Sikker datasletning er en fast del af, hvordan vi tager maskiner imod til genbrug — så den bekymring ikke behøver at stå i vejen for at komme videre.</div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Bæredygtig IT — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Har du en maskine, der skal videre?</h2><p>Uanset om den skal repareres, byttes eller afleveres til sikker datasletning og genbrug — kom forbi eller ring.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Kontakt os</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/butik/computere/refurbished/">Refurbished computere →</a><a href="/reparere-eller-koebe-ny-computer/">Reparere eller købe ny computer? →</a><a href="/hvad-er-refurbished/">Hvad er refurbished? →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}
