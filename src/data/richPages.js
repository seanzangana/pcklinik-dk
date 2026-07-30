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
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Mac-reparation</span></div>
    <p>Uanset hvad der er galt med din Mac — en MacBook, iMac, Mac mini, Mac Studio eller Mac Pro — reparerer vi den. Vi fejlsøger det reelle problem først, giver dig en fast pris, før vi går i gang, og klarer de fleste reparationer hurtigt. Standardfejlsøgning koster 300 kr. (2–4 dage), eller vælg ekspres for 600 kr. (1–2 timer) — med reparation og levering inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Vores løfte</div><h2>Tre enkle trin</h2><div class="steps">
    <div class="step"><div class="num">1</div><h3>Book fejlsøgning</h3><p>300 kr. (2–4 dage) eller ekspres (600 kr., 1–2 timer).</p></div>
    <div class="step"><div class="num">2</div><h3>Få en fast pris</h3><p>Du godkender prisen, før vi rører ved noget.</p></div>
    <div class="step"><div class="num">3</div><h3>Vi reparerer den</h3><p>De fleste reparationer klares samme dag — vi siger til, når den er klar.</p></div></div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Vælg din Mac</div><h2>Hvilken Mac har du?</h2><div class="grid grid-2">
    <a class="card card-link" href="/macbook-reparation/"><div class="card-icon brand-icon">${lucide.laptop}</div><h3>MacBook (bærbar)</h3><p>Dækker MacBook Pro, MacBook Air og ældre MacBook-modeller — skærm, batteri, tastatur, logic board og mere.</p><span class="arrow">MacBook-reparation →</span></a>
    <a class="card card-link" href="/mac-stationaer-reparation/"><div class="card-icon brand-icon">${lucide.monitor}</div><h3>Stationær Mac</h3><p>Dækker iMac, Mac mini, Mac Studio og Mac Pro — opstartsproblemer, lagring, skærm/display, køling.</p><span class="arrow">Reparation af stationær Mac →</span></a>
  </div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Almindelige problemer vi ser</div><h2>Almindelige Mac-problemer, vi udbedrer</h2>
    <ul class="check-list">${problemsHtml}</ul>
    <p class="sub" style="margin-top:18px">Ser du et af disse, er det bedst at få kigget på det hurtigt — især ved væskeskade eller et hævet batteri.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Reparere eller udskifte?</div><h2>Kan det betale sig at reparere?</h2>
    <p class="sub">Vi giver dig altid et ærligt svar — ikke bare et reparationsoverslag. Hvis en reparation ikke giver økonomisk mening sammenlignet med at udskifte Mac’en, siger vi det ligeud og peger dig mod vores <a href="/butik/computere/refurbished/">istandsatte</a> og <a href="/butik/computere/nye/">nye computere</a> i butikken, hvis det er den bedre løsning. Vores mål er det rette resultat for dig, ikke bare fakturerbart arbejde.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Mac-reparation — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Klar til at få kigget på din Mac?</h2><p>Fejlsøgning 300 kr. (2–4 dage) eller ekspres for 600 kr. (1–2 timer). Fast pris, før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/macbook-reparation/">MacBook-reparation →</a><a href="/mac-stationaer-reparation/">Reparation af stationær Mac →</a><a href="/mac-batteriskift/">Mac-batteriskift →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}
export const MAC_HUB_FAQ = [
  { q: 'Tilbyder I en lånecomputer, mens min Mac bliver repareret?', a: 'Ikke i øjeblikket — spørg ved booking, hvis det er vigtigt for dig.' },
  { q: 'Koster fejlsøgning det samme for både MacBook og stationær Mac?', a: 'Ja, samme standard-/ekspres-priser gælder på tværs af alle Mac-modeller.' },
  { q: 'Hvad koster en Mac-reparation?', a: 'Det afhænger af fejlen og modellen. Vi fejlsøger altid først og giver dig en fast pris, før vi går i gang — standardfejlsøgning er 300 kr. (2–4 dage), eller ekspres for 600 kr. (1–2 timer).' },
  { q: 'Hvor lang tid tager en Mac-reparation?', a: 'Mange reparationer klares samme dag, især med ekspresfejlsøgning. Mere omfattende reparationer kan tage længere tid afhængigt af reservedele.' },
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
    ['Lokalt værksted', 'baseret i Frederiksberg, on-site til alt, der kræver praktisk arbejde.'],
  ].map(([t, b]) => `<li><strong>${esc(t)}</strong>${esc(b)}</li>`).join('');
  const faq = GAMING_FAQ;
  const faqHtml = faq.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const buildQuote = `mailto:${site.emailConsumer}?subject=${encodeURIComponent('Tilbud på specialbygget pc')}`;
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Gaming-pc’er · Reparation, service &amp; specialbyggede</div>
    <h1>Gaming-pc — reparation, service &amp; specialbyggede</h1><p class="lead">Fra at udbedre en overophedet maskine til at bygge din drømme-pc fra bunden.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${buildQuote}">Få et tilbud på en byggeopgave</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Gaming-pc’er</span></div>
    <p>Uanset om din gaming-pc overopheder, underpræsterer, eller du vil have en helt specialbygget maskine fra bunden, klarer PCKlinik det. Vi reparerer og servicerer gaming-stationære af enhver slags — samlefærdige eller selvbyggede — og vi bygger specialtilpassede gaming-pc’er efter dine ønsker til kunder, der vil have noget bygget rigtigt første gang.</p>
    <p><strong>Til reparation og service:</strong> standardfejlsøgning er 300 kr. (2–4 dage), eller ekspres for 600 kr. (1–2 timer) — med reparation og levering inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.</p>
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
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Reparere, opgradere eller bygge fra bunden?</h2><p>Fejlsøgning koster 300 kr. (2–4 dage) eller ekspres (600 kr.). Specialbyggede maskiner er tilbudsbaserede — intet fejlsøgningsgebyr.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${buildQuote}">Få et tilbud på en byggeopgave</a></div></div>
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
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
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
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Har du en af disse fejl?</h2><p>Vi fejlsøger rodårsagen, ikke bare koden. Fejlsøgning 300 kr. (2–4 dage) eller ekspres (600 kr., 1–2 timer), fast pris før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/backup-og-datagendannelse/">Backup & datagendannelse →</a><a href="/harddisk-ssd-udskiftning/">Udskiftning af harddisk →</a><a href="/reinstallation-af-system/">Systeminstallation →</a><a href="/virus-og-malwarefjernelse/">Fjernelse af virus & malware →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
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
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Computeren vil ikke tænde</span></div>
    <p>"Vil ikke tænde" kan faktisk betyde et par forskellige ting, og hver peger på en forskellig årsag. Før du antager det værste, hjælper det at vide, hvilken af disse tre situationer der matcher din:</p></div></section>
  ${scen}
  <section class="section alt"><div class="wrap"><div class="eyebrow">Fejlsøgning &amp; pris</div><h2>Standard eller ekspres — dit valg</h2><p class="sub">Standardfejlsøgning koster 300 kr. (2–4 dage), eller ekspres for 600 kr. (1–2 timer) — med reparation og levering inden for 24 timer, hvis der ikke skal bestilles specielle reservedele. Du får en fast pris, før vi går i gang.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Vil ikke tænde — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Er du i tvivl om, hvilket scenarie der er dit?</h2><p>Kom forbi — fejlsøgning 300 kr. (2–4 dage) eller ekspres (600 kr.). Vi isolerer årsagen, før vi giver pris.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/ladestik-reparation/">Reparation af ladeport →</a><a href="/udskiftning-af-skaerm/">Skærmudskiftning →</a><a href="/fejlmeddelelser/">Fejlmeddelelser →</a><a href="/faq/">Generel FAQ →</a></div></div></div></section>`;
}

// ---------- General FAQ (site-wide, grouped) ----------
const FAQ_GROUPS = [
  ['Generelt & proces', [
    ['Dækker indbo-/husforsikring typisk skader ved uheld?', 'Mange indboforsikringer dækker skader på bærbare ved uheld — værd at tjekke din konkrete police. Vi kan under alle omstændigheder lave en detaljeret faktura til brug for en forsikringssag.'],
    ['Kan I lave en faktura til udlægsrapporter eller refusion?', 'Ja — alle fakturaer kan laves med de nødvendige oplysninger til udlæg, virksomhedsrefusion eller administrative formål. Vi kan også lave fakturaen på engelsk, hvis det er nødvendigt.'],
    ['Hvad skal jeg gøre, før jeg bringer min enhed ind til reparation?', 'Hvis muligt: tag backup af vigtige data, fjern eventuelt cover eller tilbehør, og notér enhedens adgangskode, hvis vi skal teste den efter reparation. Ikke et krav, men det gør det hurtigere.'],
    ['Tilbyder I studierabat?', 'Kontakt os direkte for at spørge — værd at tjekke, især i betragtning af vores placering tæt på Copenhagen Business School.'],
    ['Taler I engelsk?', 'Ja — vi kan sagtens klare hele forløbet på engelsk, hvis det er nemmere for dig, fra første opkald eller e-mail til afhentning af den reparerede enhed.'],
    ['Hvordan fungerer fejlsøgning og reparation?', 'Vi fejlsøger det reelle problem først og giver dig derefter en fast pris, før noget reparationsarbejde starter. Standardfejlsøgning koster 300 kr. (2–4 dage), eller vælg ekspres for 600 kr. (1–2 timer) — med reparation og levering inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.'],
    ['Hvad hvis jeg skal bruge min enhed hurtigere end standardfejlsøgning?', 'Vælg ekspresfejlsøgning (600 kr., 1–2 timer) i stedet for standardmuligheden (300 kr.). De fleste ekspresreparationer klares inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.'],
    ['Giver I garanti på reparationer?', 'Ja, reparationer kommer med garanti. Spørg ved booking om detaljerne for din type reparation.'],
    ['Er mine data sikre under reparation?', 'Ja. Vi tilgår eller deler ikke personlige data ud over det, der er nødvendigt for at gennemføre reparationen, og vi anbefaler under alle omstændigheder at tage backup af vigtige filer forinden.'],
    ['Skal jeg bestille tid, eller kan jeg bare møde op?', 'Fremmøde uden bestilling — ingen tidsbestilling nødvendig.'],
    ['Kan I hente og levere min computer?', 'Ja, afhentning og levering er muligt — kontakt os for detaljer ud fra din placering.'],
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
    ['Reparerer I væskeskade?', 'Ja, på alle mærker og modeller. Væskeskade-fejlsøgning fungerer anderledes end vores standardpriser — det er en fast pris på 600 kr., tager 3–4 dage, og der er ingen ekspresmulighed, da en ordentlig vurdering tager tid. Se <a href="/vaeskeskade-reparation/">Væskeskade-reparation</a>.'],
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
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/it-support-til-erhverv/">IT-support til erhverv →</a><a href="/kontakt/">Kontakt →</a></div></div></div></section>`;
}
// ---------- Studerende (CBS & DTU) — student-facing SEO/FAQ page ----------
export const STUDENTS_FAQ = [
  { q: 'Ligger PCKlinik tæt på CBS?', a: 'Ja. Vores værksted på Falkoner Allé 108 ligger i gåafstand fra CBS på Solbjerg Plads og Frederiksberg campus — nemt at nå til fods, på cykel eller med metro, hvis din bærbare driller midt i en aflevering.' },
  { q: 'Skal jeg bestille tid, eller kan jeg bare komme forbi?', a: 'Ingen tidsbestilling nødvendig — bare kom forbi i åbningstiden, så kigger vi på den. Har du en stram deadline, så sig til, så prioriterer vi med ekspresfejlsøgning, hvor det er muligt.' },
  { q: 'Jeg læser på DTU i Lyngby — kan I stadig hjælpe?', a: 'Ja. DTU Lyngby ligger længere væk end vores værksted i Frederiksberg, men afhentning/levering eller indsendelse dækker afstanden. Kontakt os, så aftaler vi det ud fra din situation.' },
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
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book en reparation</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Studerende</span></div>
    <p>Vi ved, hvor galt det rammer, når computeren svigter lige op til en eksamen eller aflevering. Derfor tilbyder vi hurtig, ærlig computerreparation til studerende i København — uanset om du læser på CBS på Frederiksberg eller på DTU i Lyngby. Vores værksted ligger på Falkoner Allé 108, i gåafstand fra Solbjerg Plads, så en MacBook-reparation eller en bærbar med revnet skærm behøver ikke koste dig en hel dag.</p>
    <p>Fejlsøgning koster 300 kr. (2–4 dage), eller vælg ekspres for 600 kr. (1–2 timer) — med reparation og levering inden for 24 timer, hvis der ikke skal bestilles specielle reservedele. Du får altid en fast pris, før vi går i gang, så der er ingen overraskelser på et studiebudget.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Tæt på campus</div><h2>Gåafstand fra CBS — og afhentning til DTU</h2>
    <p class="sub">For <strong>CBS-studerende</strong> er vi kun kort afstand fra Solbjerg Plads og Frederiksberg campus — kom forbi mellem forelæsninger. For <strong>DTU-studerende i Lyngby</strong> dækker vi afstanden med afhentning/levering eller indsendelse, så du ikke selv skal transportere maskinen hele vejen.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Populært hos studerende</div><h2>Det får studerende oftest lavet</h2>
    <div class="grid grid-4">${services}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Studerende — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Bærbar gået ned før en deadline?</h2><p>Kom forbi uden tidsbestilling, eller ring. Fejlsøgning 300 kr. (2–4 dage) eller ekspres 600 kr. (1–2 timer), fast pris før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book en reparation</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/computerreparation-frederiksberg/">Computerreparation i Frederiksberg →</a><a href="/butik/backup-sikkerhed/">Backup &amp; sikkerhed →</a><a href="/macbook-reparation/">MacBook-reparation →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
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
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book en reparation</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Typiske reparationspriser</span></div>
    <p>Priserne nedenfor er vejledende <strong>fra-priser</strong> (startpriser) og gælder de mest almindelige reparationer. Den endelige pris afhænger af model og skadens omfang — men du får altid et fast tilbud, før vi går i gang, så der ikke er nogen overraskelser.</p>
    <p>Selve fejlsøgningen prissættes særskilt: standard koster 300 kr. (2–4 dage), eller ekspres 600 kr. (1–2 timer). Væskeskade har en fast pris på 600 kr. (3–4 dage, ingen ekspresmulighed).</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Vejledende priser</div><h2>Fra-priser på almindelige reparationer</h2>
    <div class="table-wrap" style="margin-top:20px"><table class="models"><thead><tr><th>Reparation</th><th>Vejledende pris</th></tr></thead><tbody>${rows}</tbody></table></div>
    <div class="trust-line" style="margin-top:24px"><strong>Alle priser er inkl. reservedele og arbejdsløn.</strong> SSD-prisen gælder 256 GB; større kapacitet koster mere. Fast tilbud, før vi går i gang.</div>
    <div class="trust-line" style="margin-top:12px">Kan du ikke komme forbi værkstedet? Afhentning og levering kan aftales — <a href="/kontakt/">kontakt os</a>, så finder vi en løsning ud fra din placering.</div></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Vil du have en pris på din reparation?</h2><p>Kom forbi uden tidsbestilling eller kontakt os — vi laver en fejlsøgning og giver dig et fast tilbud, før noget arbejde går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book en reparation</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/udskiftning-af-skaerm/">Skærmudskiftning →</a><a href="/mac-batteriskift/">Mac-batteriskift →</a><a href="/ssd-opgradering/">SSD-opgradering →</a><a href="/kontakt/">Kontakt & booking →</a></div></div></div></section>`;
}

// ---------- Fault-specific guides ----------
// Each guide gives real, standalone help first (works even if the reader
// never books anything) and ends with the same shared CTA block. This is
// deliberate: it's what earns trust and ranks — the sales pitch is last,
// not first. See build.mjs for the Article+FAQPage schema wiring.
const guideCta = () => `<section class="section alt"><div class="wrap"><div class="cta-band"><h2>Kan du ikke løse det selv?</h2><p>Kom forbi Falkoner Allé 108, eller send din computer til os fra resten af landet. Vi fejlsøger (300 kr., 2–4 dage — eller ekspres 600 kr., 1–2 timer) og giver dig et fast tilbud, før vi går i gang.</p><div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div>`;

// ---- Blå skærm (BSOD) ----
export const BSOD_FAQ = [
  { q: 'Er en blå skærm altid tegn på et alvorligt problem?', a: 'Nej. Nogle BSOD’er skyldes en enkelt driveropdatering, der gik galt, og forsvinder efter en driver-tilbagerulning eller genstart. Andre peger på et svigtende drev eller RAM — det er derfor stopkoden og mønsteret (én gang vs. gentaget) betyder noget.' },
  { q: 'Mister jeg mine filer, hvis jeg får en blå skærm?', a: 'Ikke i sig selv — BSOD er et sikkerhedsstop, ikke en sletning. Hvis den underliggende årsag er et svigtende drev, bliver det tidskritisk at få taget backup, men selve den blå skærm sletter ikke dine data.' },
  { q: 'Skal jeg bare genstarte, når jeg ser en blå skærm?', a: 'Ved en enkeltstående BSOD er en genstart fin. Kommer den igen — især gentagne gange med samme stopkode — bør du stoppe med at genstarte blindt og i stedet notere koden og fejlsøge årsagen, da gentagne genstarter kan forværre et drev, der er ved at svigte.' },
  { q: 'Hvordan finder jeg stopkoden, hvis skærmen forsvinder for hurtigt?', a: 'Windows gemmer koden i Pålidelighedsovervågning (søg efter "Vis pålidelighedshistorik") og i Hændelsesviseren under Windows-logfiler → System. Der kan du også se koden i ro og mag efter genstart.' },
  { q: 'Kan et opdateret grafikkort-driver forårsage blå skærm?', a: 'Ja, det er en af de hyppigste årsager, især efter en Windows- eller GPU-driveropdatering. En ren geninstallation af driveren eller en tilbagerulning til den forrige version løser ofte problemet.' },
];
export function blaaSkaermHtml() {
  const faqHtml = BSOD_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Hjælp · Blå skærm</div>
    <h1>Blå skærm på Windows — sådan finder du fejlen</h1><p class="lead">Hvad en BSOD faktisk betyder, og hvordan du selv kommer videre i fejlsøgningen.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Blå skærm (BSOD)</span></div>
    <p>En "Blue Screen of Death" (BSOD) er ikke tilfældig — det er Windows, der bevidst stopper sig selv, fordi den er stødt på en fejl, den ikke kan komme sikkert videre fra uden risiko for at beskadige dine data eller hardware. Det er ubehageligt at se, men det er faktisk et sikkerhedstiltag, ikke selve skaden.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Første skridt</div><h2>Sådan læser du stopkoden</h2><div class="lead-copy">
    <p>Skærmen viser typisk en kort tekst som <code>CRITICAL_PROCESS_DIED</code> eller <code>MEMORY_MANAGEMENT</code> — det er stopkoden, og den er dit vigtigste spor. Forsvandt skærmen for hurtigt til, at du nåede at læse den? Søg efter "Vis pålidelighedshistorik" i Windows, eller åbn Hændelsesviseren (Windows-logfiler → System) — begge steder logger Windows koden, så du kan finde den i ro og mag.</p></div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Hyppige årsager</div><h2>Hvad ligger typisk bag</h2><div class="lead-copy">
    <ul class="check-list" style="grid-template-columns:1fr">
      <li><strong>RAM-fejl</strong> — defekt eller løs hukommelse er en af de hyppigste årsager til gentagne, uforudsigelige BSOD'er.</li>
      <li><strong>Driverproblemer</strong> — især grafikdrivere. En driveropdatering, der ikke passer med resten af systemet, kan udløse gentagne nedbrud.</li>
      <li><strong>Disk på vej ud</strong> — et svigtende drev kan give BSOD'er relateret til fil- eller systemlæsning.</li>
      <li><strong>Overophedning</strong> — støv og dårlig køling kan få systemet til at fejle under belastning.</li>
      <li><strong>Ny hardware eller en frisk opdatering</strong> — timing er et vigtigt spor: begyndte det, lige efter du installerede noget nyt?</li>
    </ul></div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Selvhjælp</div><h2>Det kan du selv prøve</h2><div class="lead-copy">
    <ul class="check-list" style="grid-template-columns:1fr">
      <li>Notér stopkoden — du får brug for den, uanset om du løser det selv eller bringer maskinen ind.</li>
      <li>Rul den seneste driveropdatering tilbage, især hvis fejlen startede efter en opdatering.</li>
      <li>Kør Windows' indbyggede hukommelsestest ("Windows Memory Diagnostic") for at udelukke RAM.</li>
      <li>Tjek diskens helbred (fx via <code>chkdsk</code> eller producentens diagnosticeringsværktøj) for tegn på et svigtende drev.</li>
      <li>Afinstallér den seneste Windows-opdatering, hvis fejlen begyndte lige efter den blev installeret.</li>
    </ul></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="eyebrow">Hvornår er det hardware</div><h2>Hvornår skal den på værksted</h2>
    <p>Kommer den samme stopkode igen efter en driver-tilbagerulning, eller peger hukommelsestesten eller disktjekket på en fejl, er det tid til en fysisk fejlsøgning. Det gælder især, hvis maskinen også opfører sig unormalt på andre måder — uventede genstarter, meget langsom ydelse, eller lyde fra drevet.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Blå skærm — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  ${guideCta()}
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/fejlmeddelelser/">Fejlmeddelelser &amp; koder →</a><a href="/harddisk-ssd-udskiftning/">Udskiftning af harddisk →</a><a href="/computer-vil-ikke-taende/">Computeren vil ikke tænde →</a><a href="/rens-af-pc/">PC-rensning &amp; støvfjernelse →</a></div></div></div></section>`;
}

// ---- Grafikkort-fejl på bærbar ----
export const GRAFIKKORT_FAQ = [
  { q: 'Kan jeg selv skifte grafikkortet på min bærbare?', a: 'Sjældent. På de fleste bærbare er grafikchippen loddet direkte på bundkortet — det er ikke et udskifteligt kort som i en stationær pc. Reparation betyder derfor typisk reparation eller udskiftning af selve bundkortet.' },
  { q: 'Hvordan ved jeg, om det er driveren eller selve hardwaren?', a: 'Start med en ren geninstallation af grafikdriveren. Forsvinder problemet, var det softwaren. Vender det tilbage, især under belastning som spil eller video, peger det mere mod et hardwareproblem.' },
  { q: 'Kan overophedning permanent skade et grafikkort?', a: 'Ja — gentagen overophedning slider loddepunkterne omkring grafikchippen, hvilket er en almindelig årsag til, at fejl, der startede som lejlighedsvise artefakter, med tiden bliver til et fast nedbrud.' },
  { q: 'Er det bedre at reparere eller udskifte hele maskinen ved et grafikkortsvigt?', a: 'Det afhænger af maskinens alder og værdi. Vi giver dig en ærlig vurdering af, om en reparation kan betale sig, eller om du er bedre stillet med en anden maskine.' },
  { q: 'Virker det, hvis jeg tilslutter en ekstern skærm?', a: 'Det er en god diagnosticeringstest. Virker den eksterne skærm fint, mens den indbyggede stadig fejler, kan det pege på et skærm- eller kabelproblem frem for selve grafikkortet — men viser den eksterne skærm de samme artefakter, peger det mere mod selve grafikhardwaren.' },
];
export function grafikkortFejlHtml() {
  const faqHtml = GRAFIKKORT_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Hjælp · Grafikkort-fejl</div>
    <h1>Grafikkort-fejl på bærbar computer</h1><p class="lead">Typiske symptomer, og hvordan du skelner driverproblem fra hardwaresvigt.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Grafikkort-fejl på bærbar</span></div>
    <p>Et grafikkort, der er ved at fejle, giver sjældent ét entydigt symptom — det starter ofte lejlighedsvist og bliver værre over tid. At kende de typiske tegn hjælper dig med at afgøre, om det er noget, du selv kan rette, eller om maskinen skal fejlsøges fysisk.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Symptomer</div><h2>Sådan ser en grafikkort-fejl typisk ud</h2><div class="lead-copy">
    <ul class="check-list" style="grid-template-columns:1fr">
      <li><strong>Artefakter og striber</strong> — farvede prikker, linjer eller mønstre, der ikke burde være der.</li>
      <li><strong>Forvrænget billede</strong> — teksturer eller vinduer, der ser "smeltede" eller forkert tegnede ud.</li>
      <li><strong>Sort skærm, men maskinen kører</strong> — du kan høre blæserne og se tastaturets baggrundslys, men der kommer intet billede.</li>
      <li><strong>Nedbrud under spil eller video</strong> — systemet fryser eller genstarter specifikt, når grafikken belastes.</li>
      <li><strong>Ekstern skærm opfører sig anderledes end den indbyggede</strong> — et vigtigt diagnosticeringsspor, se FAQ.</li>
    </ul></div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Selvhjælp</div><h2>Det kan du selv teste</h2><div class="lead-copy">
    <ul class="check-list" style="grid-template-columns:1fr">
      <li>Lav en ren geninstallation af grafikdriveren (afinstallér helt, genstart, installér den nyeste stabile version).</li>
      <li>Tilslut en ekstern skærm for at se, om problemet følger med eller forsvinder.</li>
      <li>Hold øje med temperaturer under belastning, hvis du har et overvågningsværktøj — usædvanligt høje temperaturer peger mod køling/overophedning.</li>
      <li>Test i sikker tilstand (safe mode) — kører maskinen stabilt der, styrker det mistanken om et driver- eller softwareproblem frem for hardware.</li>
    </ul></div></div></section>
  <section class="section alt"><div class="wrap lead-copy"><div class="eyebrow">Hvorfor det er anderledes på en bærbar</div><h2>Loddet fast — hvad det betyder for reparation</h2>
    <p>På de fleste bærbare computere er grafikchippen loddet direkte fast til bundkortet, i modsætning til stationære pc'er, hvor grafikkortet er et separat, udskifteligt kort. Det betyder, at en grafikkort-fejl på en bærbar som regel er en <a href="/bundkort-reparation/">bundkortreparation</a>, ikke en simpel udskiftning af en enkelt komponent — og at vi altid vurderer ærligt, om det kan betale sig at reparere, eller om <a href="/reparere-eller-koebe-ny-computer/">en anden maskine</a> giver bedre mening for pengene.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Grafikkort-fejl — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  ${guideCta()}
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/bundkort-reparation/">Bundkortreparation →</a><a href="/rens-af-pc/">PC-rensning &amp; støvfjernelse →</a><a href="/udskiftning-af-skaerm/">Skærmudskiftning →</a><a href="/gaming-pc-reparation/">Gaming-pc-reparation →</a></div></div></div></section>`;
}

// ---- MacBook Touch Bar virker ikke ----
export const TOUCHBAR_FAQ = [
  { q: 'Hvilke MacBook-modeller har Touch Bar?', a: 'Touch Bar findes på udvalgte MacBook Pro-modeller fra 2016 til 2020 (både Intel- og de tidlige M1-modeller). Nyere MacBook Pro-modeller er gået tilbage til fysiske funktionstaster.' },
  { q: 'Kan jeg nulstille SMC/NVRAM på alle MacBook-modeller med Touch Bar?', a: 'Nej — det er kun muligt på Intel-baserede modeller. Apple Silicon-modeller (M1 og nyere) håndterer det automatisk og har ikke den samme manuelle nulstillingsprocedure.' },
  { q: 'Er en frossen Touch Bar altid tegn på et hardwareproblem?', a: 'Nej, ofte er det software — en hængende proces eller en macOS-fejl efter en opdatering. En genstart eller opdatering løser mange tilfælde. Bliver problemet ved efter det, er det mere sandsynligt hardware.' },
  { q: 'Hvorfor skal Touch Bar og skærm vurderes samlet?', a: 'Fordi Touch Bar-modulet på mange modeller er fysisk og elektrisk forbundet til skærmenheden. Er skaden forårsaget af et fald eller væske, er det ofte mest effektivt at vurdere og reparere dem sammen frem for hver for sig.' },
  { q: 'Kan væskeskade være årsagen, selv hvis resten af Mac’en virker fint?', a: 'Ja — Touch Bar er en af de mest følsomme komponenter ved væskeskade, netop fordi den sidder eksponeret øverst på tastaturet. Den kan fejle, selv hvis resten af maskinen fortsat fungerer normalt.' },
];
export function touchBarHtml() {
  const faqHtml = TOUCHBAR_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Hjælp · Touch Bar</div>
    <h1>MacBook Touch Bar virker ikke</h1><p class="lead">Almindelige årsager, hvad du selv kan prøve, og hvornår det er hardware.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>MacBook Touch Bar virker ikke</span></div>
    <p>Touch Bar findes på udvalgte MacBook Pro-modeller fra 2016–2020. Når den holder op med at reagere, er det ikke altid en hardwarefejl — men det er værd at vide, hvad du selv kan tjekke, før du antager det værste.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Hyppige årsager</div><h2>Hvad ligger typisk bag</h2><div class="lead-copy">
    <ul class="check-list" style="grid-template-columns:1fr">
      <li><strong>Software-hængning</strong> — Touch Bar-processen kan gå i stå uden at resten af systemet påvirkes.</li>
      <li><strong>macOS-fejl</strong> — særligt efter en systemopdatering, der ikke afsluttede korrekt.</li>
      <li><strong>Væskeskade</strong> — Touch Bar sidder eksponeret øverst på tastaturet og er derfor særligt udsat.</li>
      <li><strong>Defekt flexkabel eller display-modul</strong> — Touch Bar er fysisk forbundet til skærmenheden på mange modeller.</li>
    </ul></div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Selvhjælp</div><h2>Det kan du selv prøve</h2><div class="lead-copy">
    <ul class="check-list" style="grid-template-columns:1fr">
      <li>Genstart Touch Bar-processen: luk TouchBarServer og ControlStrip via Aktivitetsovervågning, eller genstart maskinen.</li>
      <li>Installér seneste macOS-opdatering — mange Touch Bar-fejl er allerede rettet af Apple i senere versioner.</li>
      <li>Nulstil SMC/NVRAM (kun Intel-modeller — se FAQ).</li>
      <li>Test i sikker tilstand for at se, om Touch Bar reagerer der — hjælper med at afgøre software vs. hardware.</li>
    </ul></div></div></section>
  <section class="section alt"><div class="wrap lead-copy"><div class="eyebrow">Hvornår er det hardware</div><h2>Hvornår skal den vurderes fysisk</h2>
    <p>Løser genstart, opdatering og nulstilling ikke problemet — eller er der tegn på væskeskade eller et fald — bør Touch Bar og skærm vurderes samlet, da de ofte hænger fysisk sammen. Se også vores sider om <a href="/mac-skaermudskiftning/">Mac-skærmudskiftning</a> og <a href="/vaeskeskade-reparation/">væskeskade-reparation</a>.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Touch Bar — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  ${guideCta()}
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/macbook-reparation/">MacBook-reparation →</a><a href="/mac-skaermudskiftning/">Mac-skærmudskiftning →</a><a href="/vaeskeskade-reparation/">Væskeskade-reparation →</a><a href="/mac-tastaturudskiftning/">MacBook-tastaturudskiftning →</a></div></div></div></section>`;
}

// ---- Batteriet holder ikke ----
export const BATTERY_FAQ = [
  { q: 'Hvor mange opladninger holder et batteri typisk?', a: 'De fleste bærbar- og Mac-batterier er dimensioneret til omkring 300–500 fulde opladningscyklusser, før kapaciteten falder mærkbart. Det svarer typisk til et par års normal brug, afhængigt af, hvor ofte du oplader.' },
  { q: 'Hvordan tjekker jeg mit batteris tilstand selv?', a: 'På Windows kan du generere en batterirapport ved at skrive "powercfg /batteryreport" i en kommandoprompt. På Mac finder du cyklustæller og status under Systemindstillinger → Batteri → Batteritilstand, hvor et "Service anbefales"-flag betyder, at kapaciteten er faldet mærkbart.' },
  { q: 'Er et bulnet batteri farligt?', a: 'Ja — stop med at bruge maskinen med det samme, hvis batteriet hæver eller bulner, og undgå at trykke eller punktere det. Kontakt os, så vi kan udskifte det sikkert.' },
  { q: 'Kan jeg forlænge batteriets levetid?', a: 'Delvis — at undgå konstant 100 %-opladning, undgå ekstrem varme, og ikke lade batteriet bunde helt ud ofte kan bremse slidet en smule, men batterier er sliddele og skal før eller siden skiftes uanset brugsmønster.' },
  { q: 'Hvornår kan det bedre betale sig at skifte hele maskinen frem for kun batteriet?', a: 'Hvis maskinen i øvrigt er langsom, gammel eller har andre begyndende problemer, kan et batteriskift alene være spildte penge. Vi giver dig en ærlig vurdering af, om et batteriskift eller en anden maskine giver bedst mening.' },
];
export function batterietHolderIkkeHtml() {
  const faqHtml = BATTERY_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Hjælp · Batteri</div>
    <h1>Batteriet holder ikke — skal det skiftes?</h1><p class="lead">Sådan tjekker du batteriets tilstand, og hvornår et skift kan betale sig.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Batteriet holder ikke</span></div>
    <p>Batterier er sliddele — de holder ikke evigt, uanset mærke eller pris. Typisk er et bærbar- eller Mac-batteri dimensioneret til omkring 300–500 fulde opladningscyklusser, før kapaciteten falder mærkbart. Spørgsmålet er sjældent "hvorfor," men snarere: er det normalt slid, eller er noget galt?</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Selvhjælp</div><h2>Sådan tjekker du batteriets tilstand</h2><div class="lead-copy">
    <ul class="check-list" style="grid-template-columns:1fr">
      <li><strong>Windows:</strong> skriv <code>powercfg /batteryreport</code> i en kommandoprompt for at generere en detaljeret batterirapport med aktuel vs. oprindelig kapacitet.</li>
      <li><strong>Mac:</strong> gå til Systemindstillinger → Batteri → Batteritilstand — her ser du cyklustælleren og et eventuelt "Service anbefales"-flag.</li>
    </ul></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="eyebrow">Normalt slid eller advarselstegn</div><h2>Hvornår er det bare slid — og hvornår skal du stoppe med det samme</h2>
    <p><strong>Holder kortere end før:</strong> det er normalt slid. Det er en god anledning til at overveje et batteriskift, men ikke en akut situation.</p>
    <p><strong>Batteriet hæver eller bulner:</strong> det er ikke normalt slid — det er en sikkerhedsrisiko. Stop med at bruge maskinen med det samme, undgå at trykke eller punktere batteriet, og kontakt os hurtigst muligt.</p></div></section>
  <section class="section alt"><div class="wrap lead-copy"><div class="eyebrow">Er det pengene værd</div><h2>Kan et batteriskift betale sig?</h2>
    <p>For de fleste maskiner, der ellers fungerer godt, er et batteriskift en af de reparationer, der giver mest værdi for pengene — det forlænger maskinens brugstid markant til en forholdsvis lav pris. Er maskinen derimod i forvejen gammel eller har andre problemer, giver vi dig en ærlig vurdering af, om et batteriskift alene er den bedste løsning, eller om <a href="/reparere-eller-koebe-ny-computer/">en anden maskine</a> giver bedre mening.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Batteri — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  ${guideCta()}
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/mac-batteriskift/">Mac-batteriskift →</a><a href="/macbook-reparation/">MacBook-reparation →</a><a href="/reparere-eller-koebe-ny-computer/">Reparere eller købe ny computer? →</a></div></div></div></section>`;
}

// ---- Reparere eller købe ny computer? ----
// Genopbygger en URL, der historisk har eksisteret på sitet (nu 404) —
// se konkurrent-keyword-gap-rapporten, punkt 3. Ren beslutningsguide, ikke
// en salgsside: giver et ærligt, selvstændigt svar først. Krydslinket fra
// grafikkort-fejl- og batteri-guiderne ovenfor (var døde links, indtil
// denne side blev bygget) samt fra /reparationspriser/.
export const REPARERE_ELLER_KOEBE_FAQ = [
  { q: 'Hvornår kan det ikke betale sig at reparere en computer?', a: 'Typisk når reparationsprisen nærmer sig prisen på en tilsvarende ny eller refurbished maskine, eller når en gammel maskine har flere problemer på én gang — så er der stor risiko for, at det næste går i stykker kort efter.' },
  { q: 'Er en refurbished computer et godt alternativ til en reparation?', a: 'Ofte ja, særligt hvis din nuværende maskine er over 5-6 år gammel eller har et bundkorts- eller strømrelateret problem. En professionelt istandsat maskine med garanti koster typisk mindre end en tilsvarende ny.' },
  { q: 'Hvad gør I, hvis I vurderer, at en reparation ikke kan betale sig?', a: 'Vi siger det ærligt, i stedet for at sælge dig en reparation, der ikke giver mening. Du er velkommen til at høre om nye eller refurbished alternativer i vores butik — men det er dit valg, ikke et krav.' },
  { q: 'Kan I hjælpe med at flytte mine data til en ny maskine?', a: 'Ja, dataflytning kan indgå som en del af opsætningen af en ny eller refurbished maskine — kontakt os, så aftaler vi det konkret.' },
  { q: 'Skal jeg betale for en fejlsøgning, selvom jeg måske ender med at købe en ny computer alligevel?', a: 'Ja, fejlsøgningen (300 kr. standard, 600 kr. ekspres) er det, der giver os grundlaget for at rådgive dig ærligt — uden den kan hverken du eller vi vide, om reparation kan betale sig.' },
];
export function repareEllerKoebeNyComputerHtml() {
  const faqHtml = REPARERE_ELLER_KOEBE_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Hjælp · Beslutning</div>
    <h1>Skal du reparere din computer — eller købe en ny?</h1><p class="lead">Et ærligt svar afhænger af tre ting: reparationens pris, maskinens alder, og hvad du reelt har brug for. Her er, hvordan du selv regner på det.</p>
    <div class="cta-row"><a class="btn btn-white" href="/kontakt/">Book fejlsøgning</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Ring ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Forside</a> › <span>Reparere eller købe ny computer?</span></div>
    <p>Det er sjældent et spørgsmål med ét rigtigt svar — men der er en enkel tommelfingerregel, der rammer rigtigt i de fleste tilfælde: <strong>hold reparationsprisen op mod prisen på en tilsvarende maskine</strong> (ny eller refurbished), og tag maskinens alder med i regnestykket.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Tommelfingerreglen</div><h2>Sådan regner du på det</h2><div class="lead-copy">
    <p>Koster reparationen under ca. en tredjedel til halvdelen af prisen på en tilsvarende maskine, og er din nuværende computer under 4-5 år gammel, kan reparationen som regel betale sig. Nærmer reparationsprisen sig 60-70 % eller mere af en ny maskine — eller er computeren i forvejen 6+ år gammel med mere end ét problem — begynder en ny eller refurbished maskine typisk at give bedre mening.</p></div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Spørgsmål der afgør det</div><h2>Stil dig selv disse spørgsmål</h2><div class="lead-copy">
    <ul class="check-list" style="grid-template-columns:1fr">
      <li><strong>Hvor gammel er maskinen?</strong> — jo ældre, jo mindre giver en enkeltstående, dyr reparation mening.</li>
      <li><strong>Er dette den eneste fejl, eller et symptom på noget større?</strong> — flere samtidige problemer er et advarselstegn.</li>
      <li><strong>Dækker maskinens ydelse dine behov i forvejen, uafhængigt af fejlen?</strong> — hvis den allerede er for langsom til det, du bruger den til, løser en reparation ikke det underliggende problem.</li>
      <li><strong>Er det en enkeltstående hændelse (tab, væske) eller almindeligt slid?</strong> — en enkeltskade på en ellers god maskine taler for reparation.</li>
      <li><strong>Kan dine data reddes under alle omstændigheder?</strong> — det bør aldrig i sig selv afgøre valget, men det er godt at vide på forhånd.</li>
    </ul></div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Reparation giver ofte mening</div><h2>Når reparation næsten altid betaler sig</h2><div class="lead-copy">
    <p>Et enkelt komponentsvigt — skærm, batteri, tastatur, ladeport — på en ellers velfungerende maskine, især hvis den er under 4-5 år gammel. Her er reparation typisk den billigste og hurtigste vej tilbage til en maskine, der virker som før.</p></div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Ny eller refurbished giver ofte mening</div><h2>Når en anden maskine giver bedre mening</h2><div class="lead-copy">
    <p>Bundkortsvigt eller gentagne fejl på en i forvejen ældre, lavtspecificeret maskine. En maskine der allerede er for langsom til det, du reelt bruger den til. Eller flere uafhængige problemer på samme tid, hvor der er stor risiko for, at det næste går i stykker kort efter reparationen. I de tilfælde kan en refurbished maskine med garanti ofte give mere computer for pengene end en reparation.</p></div></div></section>
  <section class="section alt"><div class="wrap lead-copy"><div class="eyebrow">Vores tilgang</div><h2>Vores ærlige vurdering</h2>
    <p>Vi lever af reparationer — men vi anbefaler ikke en reparation, der ikke kan betale sig. Fejlsøgningen giver os det faktiske grundlag for at rådgive dig ærligt, og siger vi, at en anden maskine giver mere mening, siger vi det, uanset om vi tjener mindre på det. Vi sælger også nye og professionelt istandsatte (refurbished) computere i butikken, hvis det ender med at være den rette vej for dig.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Reparere eller købe ny — ofte stillede spørgsmål</h2><div class="faq">${faqHtml}</div></div></section>
  ${guideCta()}
    <div style="margin-top:32px"><p class="eyebrow">Relateret</p><div class="crosslinks"><a href="/reparationspriser/">Typiske reparationspriser →</a><a href="/butik/computere/refurbished/">Refurbished computere →</a><a href="/backup-og-datagendannelse/">Backup &amp; datagendannelse →</a><a href="/garanti/">Garanti →</a></div></div></div></section>`;
}
