// Shared rich-page bodies (Mac Repair hub + Gaming) — imported by both
// build.mjs (dist renderer). Single source of truth; no Astro/view mirror.
import { site } from './site.js';
import { lucide } from './icons.js';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// ---------- Mac Repair hub ----------
export function macHubHtml() {
  const problems = ['Mac vil ikke tænde', 'Sort, flimrende eller misfarvet skærm', 'Batteri lader ikke, tømmes hurtigt eller er hævet', 'Computeren er blevet meget langsom', 'Tastaturtaster reagerer ikke korrekt', 'Overophedning eller usædvanlig blæserstøj', 'Væskeskade efter spild'];
  const problemsHtml = problems.map((p) => `<li>${esc(p)}</li>`).join('');
  const faq = MAC_HUB_FAQ;
  const faqHtml = faq.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Mac-reparation · Frederiksberg &amp; København</div>
    <h1>Mac-reparation i Frederiksberg &amp; København</h1><p class="lead">Alle Mac-modeller, ét værksted — bærbar eller stationær.</p>
    <div class="cta-row"><a class="btn btn-white" href="/contact/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Mac-reparation</span></div>
    <p>Uanset hvad der er galt med din Mac — en MacBook, iMac, Mac mini, Mac Studio eller Mac Pro — reparerer vi den. Vi fejlsøger det reelle problem først, giver dig en fast pris, før vi går i gang, og klarer de fleste reparationer hurtigt. Standardfejlsøgning er gratis (2–4 dage), eller vælg ekspres for 600 kr. (1–2 timer) — med reparation og levering inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Vores løfte</div><h2>Tre enkle trin</h2><div class="steps">
    <div class="step"><div class="num">1</div><h3>Book fejlsøgning</h3><p>Gratis (2–4 dage) eller ekspres (600 kr., 1–2 timer).</p></div>
    <div class="step"><div class="num">2</div><h3>Få en fast pris</h3><p>Du godkender prisen, før vi rører ved noget.</p></div>
    <div class="step"><div class="num">3</div><h3>Vi reparerer den</h3><p>De fleste reparationer klares samme dag — vi siger til, når den er klar.</p></div></div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Vælg din Mac</div><h2>Hvilken Mac har du?</h2><div class="grid grid-2">
    <a class="card card-link" href="/macbook-repair/"><div class="card-icon brand-icon">${lucide.laptop}</div><h3>MacBook (bærbar)</h3><p>Dækker MacBook Pro, MacBook Air og ældre MacBook-modeller — skærm, batteri, tastatur, logic board og mere.</p><span class="arrow">MacBook-reparation →</span></a>
    <a class="card card-link" href="/mac-desktop-repair/"><div class="card-icon brand-icon">${lucide.monitor}</div><h3>Stationær Mac</h3><p>Dækker iMac, Mac mini, Mac Studio og Mac Pro — opstartsproblemer, lagring, skærm/display, køling.</p><span class="arrow">Reparation af stationær Mac →</span></a>
  </div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Almindelige problemer vi ser</div><h2>Almindelige Mac-problemer, vi udbedrer</h2>
    <ul class="check-list">${problemsHtml}</ul>
    <p class="sub" style="margin-top:18px">Ser du et af disse, er det bedst at få kigget på det hurtigt — især ved væskeskade eller et hævet batteri.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Reparere eller udskifte?</div><h2>Kan det betale sig at reparere?</h2>
    <p class="sub">Vi giver dig altid et ærligt svar — ikke bare et reparationsoverslag. Hvis en reparation ikke giver økonomisk mening sammenlignet med at udskifte Mac’en, siger vi det ligeud og peger dig mod vores <a href="/shop/computers/refurbished/">istandsatte</a> og <a href="/shop/computers/new/">nye computere</a> i butikken, hvis det er den bedre løsning. Vores mål er det rette resultat for dig, ikke bare fakturerbart arbejde.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Mac-reparation — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Klar til at få kigget på din Mac?</h2><p>Gratis fejlsøgning (2–4 dage) eller ekspres for 600 kr. (1–2 timer). Fast pris, før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/contact/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/macbook-repair/">MacBook-reparation →</a><a href="/mac-desktop-repair/">Reparation af stationær Mac →</a><a href="/mac-battery-replacement/">Mac-batteriskift →</a><a href="/contact/">Kontakt & booking →</a></div></div></div></section>`;
}
export const MAC_HUB_FAQ = [
  { q: 'Tilbyder I en lånecomputer, mens min Mac bliver repareret?', a: 'Ikke i øjeblikket — spørg ved booking, hvis det er vigtigt for dig.' },
  { q: 'Er fejlsøgning gratis for både MacBook og stationær Mac?', a: 'Ja, samme gratis/ekspres-priser gælder på tværs af alle Mac-modeller.' },
  { q: 'Hvad koster en Mac-reparation?', a: 'Det afhænger af fejlen og modellen. Vi fejlsøger altid først og giver dig en fast pris, før vi går i gang — standardfejlsøgning er gratis (2–4 dage), eller ekspres for 600 kr. (1–2 timer).' },
  { q: 'Hvor lang tid tager en Mac-reparation?', a: 'Mange reparationer klares samme dag, især med ekspres fejlsøgning. Mere omfattende reparationer kan tage længere tid afhængigt af reservedele.' },
  { q: 'Kan alle Mac-computere repareres?', a: 'De fleste kan, men det afhænger af skadens omfang og modellens alder. Vi siger altid ærligt til, hvis en reparation ikke kan betale sig.' },
  { q: 'Betyder det noget, om min Mac er gammel?', a: 'Nej — vi reparerer Mac-computere på tværs af generationer, fra aktuelle Apple Silicon-modeller til meget ældre Intel-Mac.' },
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
    ['Lokalt værksted', 'baseret i Frederiksberg, on-site til alt, der kræver praktisk arbejde.'],
  ].map(([t, b]) => `<li><strong>${esc(t)}</strong>${esc(b)}</li>`).join('');
  const faq = GAMING_FAQ;
  const faqHtml = faq.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const buildQuote = `mailto:${site.emailConsumer}?subject=${encodeURIComponent('Tilbud på specialbygget pc')}`;
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Gaming-pc’er · Reparation, service &amp; specialbyggede</div>
    <h1>Gaming-pc — reparation, service &amp; specialbyggede</h1><p class="lead">Fra at udbedre en overophedet maskine til at bygge din drømme-pc fra bunden.</p>
    <div class="cta-row"><a class="btn btn-white" href="/contact/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${buildQuote}">Få et tilbud på en byggeopgave</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Gaming-pc’er</span></div>
    <p>Uanset om din gaming-pc overopheder, underpræsterer, eller du vil have en helt specialbygget maskine fra bunden, klarer PCKlinik det. Vi reparerer og servicerer gaming-stationære af enhver slags — samlefærdige eller selvbyggede — og vi bygger specialtilpassede gaming-pc’er efter dine ønsker til kunder, der vil have noget bygget rigtigt første gang.</p>
    <p><strong>Til reparation og service:</strong> standardfejlsøgning er gratis (2–4 dage), eller ekspres for 600 kr. (1–2 timer) — med reparation og levering inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.</p>
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
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Reparere, opgradere eller bygge fra bunden?</h2><p>Fejlsøgning er gratis (2–4 dage) eller ekspres (600 kr.). Specialbyggede maskiner er tilbudsbaserede — intet fejlsøgningsgebyr.</p><div class="cta-row"><a class="btn btn-white" href="/contact/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${buildQuote}">Få et tilbud på en byggeopgave</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/mac-desktop-repair/">Reparation af stationær Mac →</a><a href="/msi-repair/">MSI-reparation →</a><a href="/pc-cleaning/">PC-rensning →</a><a href="/contact/">Kontakt & booking →</a></div></div></div></section>`;
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
    <div class="cta-row"><a class="btn btn-white" href="/contact/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
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
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Har du en af disse fejl?</h2><p>Vi fejlsøger rodårsagen, ikke bare koden. Gratis fejlsøgning (2–4 dage) eller ekspres (600 kr., 1–2 timer), fast pris før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/contact/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/data-backup-and-recovery/">Backup & datagenskabelse →</a><a href="/hard-drive-replacement/">Udskiftning af harddisk →</a><a href="/system-installation/">Systeminstallation →</a><a href="/virus-removal/">Fjernelse af virus & malware →</a><a href="/contact/">Kontakt & booking →</a></div></div></div></section>`;
}

// ---------- Computeren vil ikke tænde (guide) ----------
export const WONT_TURN_ON_FAQ = [
  { q: 'Kan en defekt stikkontakt være den reelle årsag?', a: 'Ja — altid værd at teste en anden stikkontakt først.' },
  { q: 'Betyder en computer, der ikke vil tænde, altid datatab?', a: 'Nej — i de fleste tilfælde er problemet adskilt fra lagerdrevet, og dine data kan genskabes.' },
  { q: 'Min bærbare viser slet ingen livstegn — er det helt sikkert batteriet?', a: 'Ikke nødvendigvis — det kan være batteriet, opladeren eller ladeporten. Vi tester hver del for sig frem for at antage, da det spilder tid og penge at udskifte den forkerte del.' },
  { q: 'Blæserne kører, men jeg ser ingenting på skærmen — er det alvorligt?', a: 'Det er faktisk et af de mere reparerbare scenarier — selve computeren fungerer, det er et skærmspecifikt problem, hvilket ofte er en ligetil skærm- eller kabelreparation frem for et dybere hardwareproblem.' },
  { q: 'Mister jeg mine data, hvis min computer ikke vil tænde?', a: 'Ikke af den grund alene — men hvis et svigtende drev er den underliggende årsag, bliver backup eller genskabelse af data tidskritisk. Vi prioriterer det, hvis det er det, fejlsøgningen viser.' },
  { q: 'Skal jeg blive ved med selv at forsøge at tænde den, eller bringe den ind?', a: 'Nogle få grundlæggende tjek (opladerforbindelse, en anden stikkontakt) er fine at prøve. Ud over det, især hvis du hører bippen eller ser gentagne genstartsloops, anbefaler vi at bringe den ind frem for at risikere yderligere komplikationer.' },
];
export function computerWontTurnOnHtml() {
  const scen = [
    ['Scenarie 1: Ingen strøm overhovedet — ingen lys, ingen lyd, intet',
     'et strømproblem — opladeren, ladeporten, et fladt eller svigtet batteri eller (sjældnere) en dybere hardwarefejl.',
     'Lyser opladerens LED, når den er sat i? Viser den bærbare nogen ladeindikator overhovedet? Hvis der virkelig er nul livstegn, selv når den er sat direkte i en stikkontakt, er dette meget sandsynligt relateret til oplader, batteri eller ladeport.',
     'Vi tester opladeren, batteriet og ladeporten hver for sig for at isolere, hvilken der er svigtet — se vores sider om <a href="/mac-battery-replacement/">batteriskift</a> og <a href="/charging-port-repair/">reparation af ladeport</a> for de specifikke løsninger.'],
    ['Scenarie 2: Den tænder (blæsere kører, lys tændes) — men skærmen forbliver sort',
     'selve enheden fungerer, men noget forhindrer et billede — det kan være selve skærmen, grafikhardwaren eller en forbindelse mellem dem.',
     'Tilslut en ekstern skærm, hvis det er muligt. Hvis den eksterne skærm viser et billede, er det den indbyggede skærm, der er problemet, ikke resten af computeren.',
     'Vi isolerer, om det er skærmen, skærmkablet eller grafikhardwaren — se vores side om <a href="/screen-replacement/">skærmudskiftning</a>, hvis det viser sig at være selve skærmen.'],
    ['Scenarie 3: Den tænder og begynder at starte op, men bliver ikke færdig med at indlæse Windows eller macOS',
     'et software- eller styresystemsproblem — et beskadiget OS, et svigtende drev eller en Windows-/macOS-opdatering, der ikke blev fuldført korrekt.',
     'Sætter den sig fast på en logoskærm, viser en fejlmeddelelse eller looper tilbage til en sort skærm gentagne gange? Enhver vist fejlkode er nyttig information.',
     'Afhænger af årsagen — det kan være en <a href="/system-installation/">systeminstallation</a> (frisk OS-opsætning), en <a href="/hard-drive-replacement/">udskiftning af harddisk</a>, hvis drevet er svigtet, eller <a href="/data-backup-and-recovery/">datagenskabelse</a> først, hvis drevet er ved at svigte, og data ikke er sikkerhedskopieret. Se vores side om <a href="/error-messages/">fejlmeddelelser</a> for en specifik kode eller et symbol.'],
  ].map(([h, m, c, fx], i) => `<section class="section${i%2? ' alt':''}"><div class="wrap lead-copy"><h2>${esc(h)}</h2><p><strong>Hvad det som regel betyder:</strong> ${esc(m)}</p><p><strong>Hvad du skal tjekke først:</strong> ${esc(c)}</p><p><strong>Sådan udbedrer vi det:</strong> ${fx}</p></div></section>`).join('');
  const faqHtml = WONT_TURN_ON_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Hjælp · Vil ikke tænde</div>
    <h1>Vil computeren ikke tænde?</h1><p class="lead">Tre almindelige scenarier — og hvad hvert af dem som regel betyder.</p>
    <div class="cta-row"><a class="btn btn-white" href="/contact/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Computeren vil ikke tænde</span></div>
    <p>"Vil ikke tænde" kan faktisk betyde et par forskellige ting, og hver peger på en forskellig årsag. Før du antager det værste, hjælper det at vide, hvilken af disse tre situationer der matcher din:</p></div></section>
  ${scen}
  <section class="section alt"><div class="wrap"><div class="eyebrow">Fejlsøgning &amp; pris</div><h2>Gratis eller ekspres — dit valg</h2><p class="sub">Standardfejlsøgning er gratis (2–4 dage), eller ekspres for 600 kr. (1–2 timer) — med reparation og levering inden for 24 timer, hvis der ikke skal bestilles specielle reservedele. Du får en fast pris, før vi går i gang.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Vil ikke tænde — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Er du i tvivl om, hvilket scenarie der er dit?</h2><p>Kom forbi — gratis fejlsøgning (2–4 dage) eller ekspres (600 kr.). Vi isolerer årsagen, før vi giver pris.</p><div class="cta-row"><a class="btn btn-white" href="/contact/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/charging-port-repair/">Reparation af ladeport →</a><a href="/screen-replacement/">Skærmudskiftning →</a><a href="/error-messages/">Fejlmeddelelser →</a><a href="/faq/">Generel FAQ →</a></div></div></div></section>`;
}

// ---------- General FAQ (site-wide, grouped) ----------
const FAQ_GROUPS = [
  ['Generelt & proces', [
    ['Dækker indbo-/husforsikring typisk skader ved uheld?', 'Mange indboforsikringer dækker skader på bærbare ved uheld — værd at tjekke din konkrete police. Vi kan under alle omstændigheder lave en detaljeret faktura til brug for en forsikringssag.'],
    ['Kan I lave en faktura til udlægsrapporter eller refusion?', 'Ja — alle fakturaer kan laves med de nødvendige oplysninger til udlæg, virksomhedsrefusion eller administrative formål. Vi kan også lave fakturaen på engelsk, hvis det er nødvendigt.'],
    ['Hvad skal jeg gøre, før jeg bringer min enhed ind til reparation?', 'Hvis muligt: tag backup af vigtige data, fjern eventuelt cover eller tilbehør, og notér enhedens adgangskode, hvis vi skal teste den efter reparation. Ikke et krav, men det gør det hurtigere.'],
    ['Tilbyder I studierabat?', 'Kontakt os direkte for at spørge — værd at tjekke, især i betragtning af vores placering tæt på Copenhagen Business School.'],
    ['Taler I engelsk?', 'Ja — vi kan sagtens klare hele forløbet på engelsk, hvis det er nemmere for jer, fra første opkald eller e-mail til afhentning af den reparerede enhed.'],
    ['Hvordan fungerer fejlsøgning og reparation?', 'Vi fejlsøger det reelle problem først og giver dig derefter en fast pris, før noget reparationsarbejde starter. Standardfejlsøgning er gratis (2–4 dage), eller vælg ekspres for 600 kr. (1–2 timer) — med reparation og levering inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.'],
    ['Hvad hvis jeg skal bruge min enhed hurtigere end standardfejlsøgning?', 'Vælg ekspres fejlsøgning (600 kr., 1–2 timer) i stedet for den gratis standardmulighed. De fleste ekspresreparationer klares inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.'],
    ['Giver I garanti på reparationer?', 'Ja, reparationer kommer med garanti. Spørg ved booking om detaljerne for din type reparation.'],
    ['Er mine data sikre under reparation?', 'Ja. Vi tilgår eller deler ikke personlige data ud over det, der er nødvendigt for at gennemføre reparationen, og vi anbefaler under alle omstændigheder at tage backup af vigtige filer forinden.'],
    ['Skal jeg bestille tid, eller kan jeg bare møde op?', 'Fremmøde uden bestilling — ingen tidsbestilling nødvendig.'],
    ['Kan I hente og levere min computer?', 'Ja, afhentning og levering er muligt — kontakt os for detaljer ud fra din placering.'],
    ['Hvad hvis min enhed ikke kan repareres?', 'Så siger vi det ærligt. Hvis en reparation ikke kan betale sig sammenlignet med at udskifte, siger vi det frem for at opkræve for arbejde, der ikke kan svare sig — og kan pege dig mod istandsatte eller nye muligheder i vores <a href="/shop/">butik</a>, hvis det er den bedre vej.'],
    ['Hvordan ved jeg, om det kan betale sig at reparere min computer, eller om jeg bare skal udskifte den?', 'En almindelig tommelfingerregel: hvis reparationsprisen er mere end 25–50 % af en tilsvarende erstatning, er udskiftning som regel den bedre værdi — især på en ældre maskine. En 2–3 år gammel bærbar er næsten altid værd at reparere; en på 7–8 år kan have sværere-tilgængelige reservedele. Vi giver dig vores ærlige vurdering som en del af din faste pris.'],
    ['Hvilke betalingsmetoder tager I imod?', 'Kortbetaling og bankoverførsel.'],
  ]],
  ['Mærker vi reparerer', [
    ['Reparerer I Lenovo-bærbare?', 'Ja — ThinkPad (T14, T14s, X1 Carbon, P16 med flere), IdeaPad, Legion, Yoga og ThinkBook. Se <a href="/lenovo-repair/">Lenovo-reparation</a>.'],
    ['Reparerer I Acer-bærbare?', 'Ja — Aspire, Swift, Nitro og Predator-modeller. Se <a href="/acer-repair/">Acer-reparation</a>.'],
    ['Reparerer I HP-bærbare?', 'Ja — EliteBook, ProBook, Pavilion, Spectre og Omen. Se <a href="/hp-repair/">HP-reparation</a>.'],
    ['Reparerer I Dell-bærbare?', 'Ja — XPS, Latitude, Inspiron, Precision og Alienware. Se <a href="/dell-repair/">Dell-reparation</a>.'],
    ['Reparerer I Asus-bærbare?', 'Ja — ZenBook, Vivobook, ROG og TUF Gaming. Se <a href="/asus-repair/">Asus-reparation</a>.'],
    ['Reparerer I MSI-bærbare?', 'Ja — Katana, GF-serien, Stealth og Prestige. Vi er også et af de få værksteder i Danmark, der har MSI-dele på lager. Se <a href="/msi-repair/">MSI-reparation</a>.'],
    ['Reparerer I Huawei-bærbare?', 'Ja — MateBook D14, D15 og X Pro. Se <a href="/huawei-repair/">Huawei-reparation</a>.'],
    ['Reparerer I MacBook og stationære Mac?', 'Ja — alle MacBook-generationer (Intel og Apple Silicon), plus iMac, Mac mini, Mac Studio og Mac Pro. Se <a href="/mac-repair/">Mac-reparation</a>.'],
    ['Reparerer I Microsoft Surface-enheder?', 'Ja — Surface Pro, Surface Laptop og Surface Book, inklusive specialiseret digitizer- og touchskærm-reparation. Se <a href="/microsoft-surface-repair/">Microsoft Surface-reparation</a>.'],
    ['Reparerer I Samsung Galaxy Book-bærbare?', 'Ja — Galaxy Book3, Galaxy Book4 Pro, Galaxy Book3 360 og Galaxy Book Go. Se <a href="/samsung-repair/">Samsung-reparation</a>.'],
    ['Hvad med mærker, der ikke er nævnt her — Toshiba, Gigabyte, LG gram, Razer?', 'Vi reparerer stort set alle mærker og specialbyggede opsætninger — se <a href="/other-brands-repair/">Andre mærker & specialbyggede</a>.'],
    ['Bygger I specialbyggede gaming-pc’er, ikke kun reparerer dem?', 'Ja — fortæl os dit budget og formål, så anbefaler vi komponenter, bygger den og tester den før overdragelse. Se vores <a href="/gaming-pc-repair-and-build/">Gaming-pc</a>-side.'],
  ]],
  ['Services', [
    ['Kan I opgradere min gamle bærbar til en SSD?', 'Ja — ofte en af de mest mærkbare hastighedsforbedringer, du kan lave på en ældre maskine. Se <a href="/ssd-upgrade/">SSD-opgradering</a>.'],
    ['Reparerer I væskeskade?', 'Ja, på alle mærker og modeller. Væskeskade-fejlsøgning fungerer anderledes end vores standardpriser — det er en fast pris på 600 kr., tager 3–4 dage, og der er ingen ekspresmulighed, da en ordentlig vurdering tager tid. Se <a href="/liquid-damage-repair/">Væskeskade-reparation</a>.'],
    ['Kan I genskabe data fra en svigtet harddisk?', 'Ofte, ja — det afhænger af svigtets type og alvorlighed. Vi vurderer først og giver et ærligt svar. Se <a href="/data-backup-and-recovery/">Backup & datagenskabelse</a>.'],
    ['Fjerner I virus og malware?', 'Ja, på både pc og Mac. Se <a href="/virus-removal/">Fjernelse af virus & malware</a>.'],
    ['Renser I støv og påfører ny kølepasta?', 'Ja — en almindelig løsning på overophedning eller blæserstøj på både bærbare og stationære gaming-pc’er.'],
    ['Udbedrer I ladeporte?', 'Ja, på tværs af bærbar-mærker. Se <a href="/charging-port-repair/">Reparation af ladeport</a>.'],
  ]],
  ['IT-support til erhverv', [
    ['Kan en virksomhed sende flere enheder ind på én gang til reparation eller opsætning?', 'Ja — det er almindeligt for virksomheder og kobler sig til vores IT-support til erhverv ved større eller løbende behov.'],
    ['Tilbyder I løbende IT-support til virksomheder, ikke kun enkeltstående reparationer?', 'Ja — IT-supportaftaler til fast pris med ubegrænset support, overvågning og sikkerhed. Se vores side om <a href="/business-it-service-agreement/">IT-support til erhverv</a>.'],
    ['Hvad er forskellen på en enkeltstående reparation og en supportaftale?', 'En reparation er en enkelt løsning på et bestemt problem. En supportaftale er en løbende, fast månedlig ordning, der dækker ubegrænset support, overvågning og sikkerhed for jeres virksomhed — designet til at forebygge problemer frem for bare at udbedre dem bagefter.'],
  ]],
  ['Butik', [
    ['Sælger I computere, ikke kun reparerer dem?', 'Ja — nye og istandsatte computere samt backup- og sikkerhedsudstyr findes i vores <a href="/shop/">butik</a>.'],
    ['Er der garanti på istandsatte computere?', 'Ja — istandsatte computere kommer med garanti; se <a href="/shop/computers/refurbished/">butikken</a> for detaljer.'],
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
    <div class="cta-row"><a class="btn btn-white" href="/contact/">Kontakt os</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  ${sections}
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Har du stadig et spørgsmål?</h2><p>Ring, skriv eller kig forbi værkstedet på Falkoner Allé — vi svarer hurtigt.</p><div class="cta-row"><a class="btn btn-white" href="/contact/">Kontakt os</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></div></section>`;
}

// ---------- Network Equipment hub ----------
export const NETWORK_HUB_FAQ = [
  { q: 'Hjælper I med router-opsætning til både private og virksomheder?', a: 'Ja, fra simpelt hjemme-WiFi til virksomhedsnetværk med flere access points.' },
  { q: 'Jeg er ikke sikker på, hvilken af disse der matcher mit udstyr — kan jeg bare spørge?', a: 'Ja, kontakt os, så peger vi dig mod den rette service eller hjælper bare direkte.' },
];
export function networkHubHtml() {
  const cards = [
    ['UniFi (Ubiquiti)', 'Opsætning, VLAN, netværk med flere access points', '/unifi-setup-support/'],
    ['Netgear', 'Nighthawk- og Orbi-opsætning og fejlfinding', '/netgear-setup-support/'],
    ['TP-Link', 'Archer-routere og Deco mesh-systemer', '/tp-link-setup-support/'],
    ['ASUS-routere', 'Almindelige, gaming- og AiMesh-opsætninger', '/asus-router-setup-support/'],
    ['Eero & Google Nest WiFi', 'Enkel mesh-systemopsætning', '/eero-google-nest-wifi-setup/'],
  ].map(([t, d, h]) => `<a class="card card-link" href="${h}"><div class="card-icon brand-icon">${lucide.wifi}</div><h3>${esc(t)}</h3><p class="models">${esc(d)}</p><span class="arrow">Se →</span></a>`).join('');
  const faqHtml = NETWORK_HUB_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Netværk · Frederiksberg &amp; København</div>
    <h1>Opsætning &amp; support af netværksudstyr</h1><p class="lead">Fra en enkelt router til et fuldt netværk med flere access points.</p>
    <div class="cta-row"><a class="btn btn-white" href="/contact/">Få netværkshjælp</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Netværksudstyr</span></div>
    <p>Uanset om du opsætter en ny router, fejlfinder en ustabil forbindelse eller vil have ordentlig netværksstyring til et hjem eller en mindre virksomhed, arbejder vi med alle de store mærker.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Mærker vi understøtter</div><h2>Vælg dit udstyr</h2><div class="grid grid-3">${cards}</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Netværksopsætning — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Er du i tvivl om, hvor du skal starte?</h2><p>Fortæl os, hvilket udstyr du har, og hvad der driller — så peger vi dig mod den rette service eller hjælper direkte.</p><div class="cta-row"><a class="btn btn-white" href="/contact/">Få netværkshjælp</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/wifi-network-troubleshooting/">WiFi- &amp; netværksfejlfinding →</a><a href="/business-it-service-agreement/">IT-support til erhverv →</a><a href="/contact/">Kontakt & booking →</a></div></div></div></section>`;
}

// ---------- Websites & SEO hub ----------
export const WEBSITES_HUB_FAQ = [
  { q: 'Hvordan betaler kunder i udlandet?', a: 'Vi tager imod international bankoverførsel og kortbetaling. Betalingsdetaljer gøres klare, når vi aftaler projektets omfang.' },
  { q: 'Arbejder I på tværs af forskellige tidszoner?', a: 'Ja — vi aftaler kommunikationstider på forhånd, der passer til jeres placering.' },
  { q: 'Hvilken valuta er fakturaer i?', a: 'Typisk DKK eller EUR — vi kan drøfte, hvad der fungerer bedst for jer, når projektet starter.' },
  { q: 'Hvor lang tid tager det at bygge en hjemmeside?', a: 'Afhænger af omfanget — en simpel virksomhedsside er hurtigere end en specialbygget webshop. Vi giver jer en realistisk tidsplan som en del af projekttilbuddet.' },
  { q: 'Tilbyder I løbende vedligeholdelse, efter siden er lanceret?', a: 'Ja — opdateringer, sikkerhedsrettelser og små ændringer kan aftales som en løbende service frem for en engangsopgave.' },
  { q: 'Bygger I både hjemmesiden OG håndterer SEO, eller kun det ene?', a: 'Begge dele — nogle kunder vil have begge fra start, andre har allerede en side og vil bare have hjælp til SEO eller Ads.' },
  { q: 'Er dette kun for virksomheder, eller kan private også få bygget en personlig hjemmeside?', a: 'Primært rettet mod virksomheder, men kontakt os uanset, hvad du har brug for.' },
];
export function websitesHubHtml() {
  const cards = [
    ['Webdesign & udvikling', 'Moderne, hurtige, mobilvenlige sider — virksomhedssider, porteføljer eller simple webshops.', '/website-design-development/'],
    ['SEO-ydelser', 'Rigtig søgeordsanalyse, teknisk SEO og indholdsstrategi — ikke bare en månedlig rapport.', '/seo-services/'],
    ['Google Ads-administration', 'Målrettede kampagner, styret ordentligt, så jeres budget bruges på de rette søgninger.', '/google-ads-management/'],
  ].map(([t, d, h]) => `<a class="card card-link" href="${h}"><h3>${esc(t)}</h3><p>${esc(d)}</p><span class="arrow">Læs mere →</span></a>`).join('');
  const faqHtml = WEBSITES_HUB_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const quote = `mailto:${site.emailBusiness}?subject=${encodeURIComponent('Forespørgsel om hjemmeside & SEO')}`;
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Erhverv · Hjemmesider &amp; SEO</div>
    <h1>Hjemmesider &amp; SEO</h1><p class="lead">En hjemmeside, der virker, og som findes af dem, der leder efter den.</p>
    <div class="cta-row"><a class="btn btn-white" href="${quote}">Få et tilbud</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Hjemmesider &amp; SEO</span></div>
    <p>Det er ikke nok at have en hjemmeside, hvis ingen finder den. Vi bygger moderne, hurtige hjemmesider og sørger så for, at de faktisk rangerer — gennem rigtigt SEO-arbejde og, hvor det giver mening, målrettede Google Ads. Det er ikke outsourcet til en skabelon eller en junior-kundeansvarlig — den samme person, der bygger din side, laver det tekniske SEO-arbejde bagved.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Hvad vi laver</div><h2>Tre måder vi hjælper på</h2><div class="grid grid-3">${cards}</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Hjemmesider &amp; SEO — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Vil du findes online?</h2><p>Fortæl os, hvad du har brug for — en ny side, bedre placeringer eller annoncekampagner, der faktisk konverterer. Vi afdækker det og giver et tilbud, uforpligtende.</p><div class="cta-row"><a class="btn btn-white" href="${quote}">Få et tilbud</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/business-it-service-agreement/">IT-support til erhverv →</a><a href="/contact/">Kontakt →</a></div></div></div></section>`;
}