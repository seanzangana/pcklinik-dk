// Shared rich-page bodies (Mac Repair hub + Gaming) — imported by both
// build.mjs (dist renderer) and the matching Astro pages, so they never drift.
import { site } from './site.js';
import { lucide } from './icons.js';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// ---------- Mac Repair hub ----------
export function macHubHtml() {
  const problems = ['Mac won\'t turn on', 'Black, flickering, or discolored screen', 'Battery not charging, draining fast, or swollen', 'Computer has become very slow', 'Keyboard keys not responding correctly', 'Overheating or unusually loud fan noise', 'Liquid damage after a spill'];
  const problemsHtml = problems.map((p) => `<li>${esc(p)}</li>`).join('');
  const faq = [
    { q: "Do you offer a loaner device while my Mac is being repaired?", a: "Not currently — ask when you book if this matters to you." },
    { q: "Is diagnostics free for both MacBook and desktop Mac?", a: "Yes, the same free/express pricing applies across all Mac products." },
    { q: 'How much does Mac repair cost?', a: 'It depends on the fault and the model. We always diagnose first and give you a fixed quote before starting — standard diagnostics are free (2–4 days), or express for 600 kr (1–2 hours).' },
    { q: 'How long does a Mac repair take?', a: 'Many repairs are completed the same day, especially with express diagnostics. More involved repairs can take longer depending on parts availability.' },
    { q: 'Can every Mac be repaired?', a: "Most can, though it depends on the extent of the damage and the age of the model. We'll always tell you honestly if a repair isn't worthwhile." },
    { q: 'Does it matter if my Mac is old?', a: 'No — we repair Macs across generations, from current Apple Silicon models to much older Intel Macs.' },
  ];
  const faqHtml = faq.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Mac Repair · Frederiksberg &amp; Copenhagen</div>
    <h1>Mac Repair in Frederiksberg &amp; Copenhagen</h1><p class="lead">Every Mac, one workshop — laptop or desktop.</p>
    <div class="cta-row"><a class="btn btn-white" href="/contact/">Book diagnostics</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Call ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Home</a> › <span>Mac Repair</span></div>
    <p>Whatever's wrong with your Mac — a MacBook, iMac, Mac mini, Mac Studio, or Mac Pro — we repair it. We diagnose the actual problem first, give you a fixed quote before starting, and get most repairs done fast. Standard diagnostics are free (2–4 days), or choose express for 600 kr (1–2 hours) — with repair and delivery within 24 hours if no special parts need ordering.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Our Promise</div><h2>Three simple steps</h2><div class="steps">
    <div class="step"><div class="num">1</div><h3>Book diagnostics</h3><p>Free (2–4 days) or express (600 kr, 1–2 hours).</p></div>
    <div class="step"><div class="num">2</div><h3>Get a fixed quote</h3><p>You approve the price before we touch anything.</p></div>
    <div class="step"><div class="num">3</div><h3>We repair it</h3><p>Most repairs completed the same day — we let you know when it's ready.</p></div></div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Choose your Mac</div><h2>Which Mac do you have?</h2><div class="grid grid-2">
    <a class="card card-link" href="/macbook-repair/"><div class="card-icon brand-icon">${lucide.laptop}</div><h3>MacBook (laptop)</h3><p>Covers MacBook Pro, MacBook Air, and older MacBook models — screen, battery, keyboard, logic board, and more.</p><span class="arrow">MacBook repair →</span></a>
    <a class="card card-link" href="/mac-desktop-repair/"><div class="card-icon brand-icon">${lucide.monitor}</div><h3>Desktop Mac</h3><p>Covers iMac, Mac mini, Mac Studio, and Mac Pro — boot issues, storage, screen/display, cooling.</p><span class="arrow">Desktop Mac repair →</span></a>
  </div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Common problems we see</div><h2>Common Mac problems we fix</h2>
    <ul class="check-list">${problemsHtml}</ul>
    <p class="sub" style="margin-top:18px">If you're seeing one of these, the sooner it's looked at, the better the outcome — especially for liquid damage or a swollen battery.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Repair or replace?</div><h2>Is it worth repairing?</h2>
    <p class="sub">We'll always give you an honest answer — not just a repair estimate. If a repair doesn't make financial sense compared to replacing the Mac, we'll tell you plainly, and point you toward our <a href="/shop/computers/refurbished/">refurbished</a> and <a href="/shop/computers/new/">new computers</a> in the shop if that's the better option. Our goal is the right outcome for you, not just billable work.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Mac repair — common questions</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Ready to get your Mac looked at?</h2><p>Free diagnostics (2–4 days) or express for 600 kr (1–2 hours). Fixed quote before we start.</p><div class="cta-row"><a class="btn btn-white" href="/contact/">Book diagnostics</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Call ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Related</p><div class="crosslinks"><a href="/macbook-repair/">MacBook Repair →</a><a href="/mac-desktop-repair/">Desktop Mac Repair →</a><a href="/mac-battery-replacement/">Mac Battery Replacement →</a><a href="/contact/">Contact & booking →</a></div></div></div></section>`;
}
export const MAC_HUB_FAQ = [
  { q: "Do you offer a loaner device while my Mac is being repaired?", a: "Not currently — ask when you book if this matters to you." },
  { q: "Is diagnostics free for both MacBook and desktop Mac?", a: "Yes, the same free/express pricing applies across all Mac products." },
  { q: 'How much does Mac repair cost?', a: 'It depends on the fault and the model. We always diagnose first and give you a fixed quote before starting — standard diagnostics are free (2–4 days), or express for 600 kr (1–2 hours).' },
  { q: 'How long does a Mac repair take?', a: 'Many repairs are completed the same day, especially with express diagnostics. More involved repairs can take longer depending on parts availability.' },
  { q: 'Can every Mac be repaired?', a: "Most can, though it depends on the extent of the damage and the age of the model. We'll always tell you honestly if a repair isn't worthwhile." },
  { q: 'Does it matter if my Mac is old?', a: 'No — we repair Macs across generations, from current Apple Silicon models to much older Intel Macs.' },
];

// ---------- Gaming PC repair, service & custom builds ----------
export function gamingHtml() {
  const issues = [
    ['Overheating & cooling', 'dust buildup, failing fans, dried thermal paste, poor airflow. We clean, replace fans, and reapply thermal compound.'],
    ['GPU issues', 'artifacting, crashes under load, driver conflicts, physical GPU faults.'],
    ['Performance problems', 'stuttering, low FPS despite good hardware, often caused by thermal throttling, outdated drivers, or a misconfigured system.'],
    ['Power supply faults', 'random shutdowns, failure to boot, often a PSU nearing end of life.'],
    ['RAM & storage upgrades', 'adding memory, upgrading to SSD/NVMe for faster load times.'],
    ['Liquid cooling maintenance', 'for PCs with AIO or custom loops: pump checks, coolant, tubing inspection.'],
  ].map(([t, b]) => `<li><strong>${esc(t)}</strong> — ${esc(b)}</li>`).join('');
  const cards = [
    ['Cooling & Thermal Service', "Full clean-out, fan inspection/replacement, and thermal paste reapplication. The most common fix for a gaming PC that's gotten loud or hot."],
    ['GPU Diagnostics & Repair', 'Artifacting, crashing, or a card that\'s not detected? We diagnose and repair or advise on replacement.'],
    ['Performance Optimization', 'Stuttering or underperforming despite decent hardware? We check thermals, drivers, and configuration to get it running as intended.'],
    ['Upgrades', 'RAM, storage (SSD/NVMe), GPU, or PSU upgrades — component sourcing and installation.'],
  ].map(([t, b], i) => `<div class="card"><div class="card-icon">${['🌀','🎮','⚡','⬆️'][i]}</div><h3>${esc(t)}</h3><p>${esc(b)}</p></div>`).join('');
  const why = [
    ['Experienced with gaming hardware', 'GPUs, high-wattage PSUs, liquid cooling, and thermal management.'],
    ['Fixed Quote Before We Start', 'for both repairs and builds.'],
    ['Real Testing', 'every build is stress-tested before handover, not just assembled and shipped.'],
    ['Local Workshop', 'Frederiksberg-based, on-site for anything that needs hands-on work.'],
  ].map(([t, b]) => `<li><strong>${esc(t)}</strong>${esc(b)}</li>`).join('');
  const faq = [
    { q: "Do you help choose components for a build within a specific budget?", a: "Yes, that's part of the consultation process." },
    { q: "Can you upgrade an existing gaming PC's GPU rather than building new?", a: "Yes, GPU upgrades are a common request separate from a full build." },
    { q: 'Do you build custom gaming PCs from scratch?', a: "Yes. Tell us your budget and intended use, and we'll recommend components, build it, and test it before handover." },
    { q: 'My gaming PC is overheating — what does that usually mean?', a: 'Most often dust buildup or dried thermal paste. We do a full cooling service — clean-out, fan check, fresh thermal compound — which resolves the majority of overheating cases.' },
    { q: 'Can you upgrade my existing gaming PC instead of building a new one?', a: 'Yes — RAM, storage, GPU, and PSU upgrades are common requests, and often more cost-effective than a full rebuild.' },
    { q: 'Do you work on pre-built gaming PCs (not just custom builds)?', a: 'Yes, we repair and service pre-built gaming desktops from any manufacturer as well as self-built and custom rigs.' },
  ];
  const faqHtml = faq.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const buildQuote = `mailto:${site.emailConsumer}?subject=${encodeURIComponent('Custom PC build quote')}`;
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Gaming PCs · Repair, Service &amp; Custom Builds</div>
    <h1>Gaming PC Repair, Service &amp; Custom Builds</h1><p class="lead">From fixing an overheating rig to building your dream PC from scratch.</p>
    <div class="cta-row"><a class="btn btn-white" href="/contact/">Book diagnostics</a><a class="btn btn-ghost-light" href="${buildQuote}">Get a build quote</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Home</a> › <span>Gaming PCs</span></div>
    <p>Whether your gaming PC is overheating, underperforming, or you want a completely custom build from the ground up, PCKlinik handles it. We repair and service gaming desktops of every kind — pre-built or self-assembled — and we build custom gaming PCs to spec for customers who want something built right the first time.</p>
    <p><strong>For repairs and service:</strong> standard diagnostics are free (2–4 days), or express for 600 kr (1–2 hours) — with repair and delivery within 24 hours if no special parts need ordering.</p>
    <p><strong>For custom builds:</strong> it's a different process — no diagnostics involved. We discuss your budget, use case (gaming, streaming, editing), and preferences, then quote a fixed build price before ordering any parts.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Repair &amp; Service</div><h2>Common issues we fix</h2><ul class="why-list">${issues}</ul>
    <div class="grid grid-4" style="margin-top:32px">${cards}</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Custom PC Builds</div><h2>Want a PC built to your spec? We build it right.</h2>
    <p class="sub">We build custom gaming PCs from scratch — you tell us your budget and what you'll use it for (competitive gaming, streaming, video editing, or all three), and we recommend and source the right components, build it, manage cables properly, and test it thoroughly before it reaches you.</p>
    <div class="trust-line" style="margin-bottom:24px"><strong>What's included:</strong> component recommendation based on your budget and use case · full build and cable management · stress-testing and burn-in before handover · basic OS installation and driver setup if requested.</div>
    <div class="steps">
      <div class="step"><div class="num">1</div><h3>Consultation</h3><p>Tell us your budget and what you want the PC for.</p></div>
      <div class="step"><div class="num">2</div><h3>Fixed quote</h3><p>We recommend components and give you a fixed price before ordering anything.</p></div>
      <div class="step"><div class="num">3</div><h3>Build &amp; test</h3><p>We build it, test it under load, and hand it over ready to use.</p></div>
    </div>
    <div class="cta-row" style="margin-top:24px"><a class="btn btn-primary" href="${buildQuote}">Get a build quote</a></div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Why PCKlinik</div><h2>Built and repaired properly</h2><ul class="why-list">${why}</ul></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Gaming PCs — common questions</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Repair, upgrade, or build from scratch?</h2><p>Diagnostics are free (2–4 days) or express (600 kr). Custom builds are quote-based — no diagnostics fee.</p><div class="cta-row"><a class="btn btn-white" href="/contact/">Book diagnostics</a><a class="btn btn-ghost-light" href="${buildQuote}">Get a build quote</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Related</p><div class="crosslinks"><a href="/mac-desktop-repair/">Desktop Mac Repair →</a><a href="/msi-repair/">MSI Repair →</a><a href="/pc-cleaning/">PC Cleaning →</a><a href="/contact/">Contact & booking →</a></div></div></div></section>`;
}
export const GAMING_FAQ = [
  { q: "Do you help choose components for a build within a specific budget?", a: "Yes, that's part of the consultation process." },
  { q: "Can you upgrade an existing gaming PC's GPU rather than building new?", a: "Yes, GPU upgrades are a common request separate from a full build." },
  { q: 'Do you build custom gaming PCs from scratch?', a: "Yes. Tell us your budget and intended use, and we'll recommend components, build it, and test it before handover." },
  { q: 'My gaming PC is overheating — what does that usually mean?', a: 'Most often dust buildup or dried thermal paste. We do a full cooling service — clean-out, fan check, fresh thermal compound — which resolves the majority of overheating cases.' },
  { q: 'Can you upgrade my existing gaming PC instead of building a new one?', a: 'Yes — RAM, storage, GPU, and PSU upgrades are common requests, and often more cost-effective than a full rebuild.' },
  { q: 'Do you work on pre-built gaming PCs (not just custom builds)?', a: 'Yes, we repair and service pre-built gaming desktops from any manufacturer as well as self-built and custom rigs.' },
];


// ---------- Common Error Messages & Codes (help/reference page) ----------
export const ERROR_FAQ = [
  { q: "Do error codes mean the same thing on every Windows version?", a: "Largely yes, though some codes are more common on certain versions — we diagnose the actual cause regardless of code." },
  { q: "Can an error code appear intermittently without being serious?", a: "Occasionally, though repeated occurrences of the same error are worth having checked." },
  { q: 'Should I try to fix an error code myself before bringing it in?', a: "Basic steps (a restart, checking for obvious cable/connection issues) are fine to try. Beyond that, especially for BSODs or kernel panics, we'd recommend bringing it in rather than risking further data loss from repeated troubleshooting attempts." },
  { q: "Does a blue screen or kernel panic mean I've lost my data?", a: 'Not necessarily — these are safety mechanisms, not data-destroying events by themselves. The risk comes from an underlying failing drive, which is exactly what we check first.' },
  { q: 'Can you tell what’s wrong just from the error code?', a: 'The code narrows down the possibilities, but we always verify with actual diagnostics rather than assuming — the same code can point to several different root causes.' },
];
const STOP_CODES = [
  ['MEMORY_MANAGEMENT', 'Faulty RAM, corrupted system files, or a bad driver'],
  ['PAGE_FAULT_IN_NONPAGED_AREA', 'Faulty RAM, failing drive, or driver conflict'],
  ['CRITICAL_PROCESS_DIED', 'A core Windows process crashed — corrupted system files or a bad driver update'],
  ['SYSTEM_THREAD_EXCEPTION_NOT_HANDLED', 'Usually a driver issue, often graphics or network drivers'],
  ['IRQL_NOT_LESS_OR_EQUAL', 'Driver conflict or faulty RAM'],
  ['KERNEL_SECURITY_CHECK_FAILURE', 'Corrupted system files or driver issue'],
  ['DPC_WATCHDOG_VIOLATION', 'Driver or storage controller issue, especially after Windows updates'],
  ['VIDEO_TDR_FAILURE', 'Graphics driver crash or failing GPU'],
  ['WHEA_UNCORRECTABLE_ERROR', 'Hardware fault — often CPU, RAM, or motherboard'],
  ['INACCESSIBLE_BOOT_DEVICE', "Windows can't access the boot drive — failing drive or driver/BIOS setting issue"],
  ['Hex codes (e.g. 0x0000007E, 0x0000008E, 0x0000007B)', 'Older-style codes, same general causes as above — driver, hardware, or corrupted files'],
];
const winSubs = [
  ['“Your PC ran into a problem and needs to restart”', "The everyday-language version of a stop code error (Windows 10/11's friendlier BSOD wording). Same underlying causes as above."],
  ['Computer won’t boot / stuck on startup logo', 'Can point to a corrupted operating system, a failing drive, or a hardware fault preventing Windows from loading. We diagnose whether it’s a quick software fix or something more serious.'],
  ['“Operating System Not Found” / boot device errors', 'Usually means the computer can’t find a working drive with an operating system on it — often a failing or disconnected hard drive/SSD, sometimes a BIOS/boot order setting.'],
  ['Frequent freezing or random restarts (no error message)', 'Often overheating (dust buildup, failing fans), failing RAM, or a drive nearing failure — same root causes as BSOD errors, just without a specific code shown.'],
];
const macSubs = [
  ['Kernel panic', 'The Mac equivalent of a Windows BSOD — macOS hits a critical error and restarts to protect itself. A single occasional panic usually isn’t urgent, but repeated panics point to a real hardware or software problem — often faulty memory, a failing drive, or incompatible software.'],
  ['Prohibitory symbol (circle with a line through it) at startup', 'Means macOS can’t boot from any available drive — often due to corrupted system files, a failing drive, or (on Intel Macs) startup disk selection issues.'],
  ['Spinning wheel / beachball that won’t go away', 'Usually indicates the system or an app is overloaded — could be a failing drive, insufficient free storage, or a specific app hanging rather than the whole system.'],
  ['Folder with a question mark at startup', 'Means the Mac can’t find a valid startup disk — commonly a failing drive or a corrupted macOS installation, not necessarily a fully dead drive.'],
  ['Gray screen at startup (no progress)', 'Can indicate a startup disk issue, incompatible startup items, or in some cases a hardware fault preventing the boot process from completing.'],
];
export function errorMessagesHtml() {
  const rows = STOP_CODES.map(([c, m]) => `<tr><td><code>${esc(c)}</code></td><td class="issue">${esc(m)}</td></tr>`).join('');
  const wsubs = winSubs.map(([h, p]) => `<h3 style="margin-top:26px">${esc(h)}</h3><p>${esc(p)}</p>`).join('');
  const msubs = macSubs.map(([h, p]) => `<h3 style="margin-top:26px">${esc(h)}</h3><p>${esc(p)}</p>`).join('');
  const faqHtml = ERROR_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Help · Error Messages</div>
    <h1>Common Error Messages &amp; What They Mean</h1><p class="lead">Windows and Mac errors, explained plainly.</p>
    <div class="cta-row"><a class="btn btn-white" href="/contact/">Book diagnostics</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Call ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Home</a> › <span>Error Messages</span></div>
    <p>Seeing a cryptic error message or code is unsettling, especially when it stops you from using your computer at all. Below are the most common Windows and Mac errors we're asked about — what they generally mean, and what we do to fix them. We always diagnose the specific cause rather than guessing, since the same error message can have several different underlying causes.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Windows</div><h2>Windows errors</h2>
    <div class="lead-copy"><h3>Blue Screen of Death (BSOD)</h3><p>Windows displays a blue screen with an error code when it hits a critical error it can't recover from safely. The specific code is a clue, not a full diagnosis — we test the actual hardware and check system logs rather than relying on the code alone.</p></div>
    <div class="table-wrap" style="margin-top:20px"><table class="models"><thead><tr><th>Error code</th><th>What it usually points to</th></tr></thead><tbody>${rows}</tbody></table></div>
    <div class="lead-copy"><h3 style="margin-top:26px">Windows 11-specific issues</h3>
      <ul class="check-list" style="grid-template-columns:1fr">
        <li><strong>“This PC can't run Windows 11”</strong> — usually a missing TPM 2.0 chip, Secure Boot not enabled in BIOS, or incompatible CPU. We can check whether your machine can be made compatible or advise honestly if it can't.</li>
        <li>Update-related freezes or rollback loops after a Windows 11 feature update — often driver incompatibility with the new update.</li>
      </ul>
      ${wsubs}
    </div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">Mac</div><h2>Mac errors</h2><div class="lead-copy">${msubs}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Error messages — common questions</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Got one of these errors?</h2><p>We diagnose the root cause, not just the code. Free diagnostics (2–4 days) or express (600 kr, 1–2 hours), fixed quote before we start.</p><div class="cta-row"><a class="btn btn-white" href="/contact/">Book diagnostics</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Call ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Related</p><div class="crosslinks"><a href="/data-backup-and-recovery/">Data Backup & Recovery →</a><a href="/hard-drive-replacement/">Hard Drive Replacement →</a><a href="/system-installation/">System Installation →</a><a href="/virus-removal/">Virus &amp; Malware Removal →</a><a href="/contact/">Contact & booking →</a></div></div></div></section>`;
}

// ---------- Computer Won't Turn On (guide) ----------
export const WONT_TURN_ON_FAQ = [
  { q: "Could a faulty power outlet be the actual cause?", a: "Yes — always worth testing a different outlet first." },
  { q: "Does a computer that won't turn on always mean data loss?", a: "No — in most cases the issue is separate from the storage drive, and your data is recoverable." },
  { q: 'My laptop shows no signs of life at all — is it definitely the battery?', a: 'Not necessarily — it could be the battery, the charger, or the charging port. We test each separately rather than assuming, since replacing the wrong part wastes time and money.' },
  { q: 'The fans are spinning but I see nothing on screen — is this serious?', a: "It's actually one of the more fixable scenarios — the core computer is working, it's a display-specific issue, which is often a straightforward screen or cable repair rather than a deeper hardware problem." },
  { q: "Will I lose my data if my computer won't turn on?", a: "Not from the fact that it won't turn on by itself — but if a failing drive is the underlying cause, backing up or recovering data becomes time-sensitive. We prioritize this if that's what diagnostics reveal." },
  { q: 'Should I keep trying to turn it on myself, or bring it in?', a: "A few basic checks (charger connection, a different outlet) are fine to try. Beyond that, especially if you hear beeping or see repeated restart loops, we'd recommend bringing it in rather than risking further complications." },
];
export function computerWontTurnOnHtml() {
  const scen = [
    ['Scenario 1: No power at all — no lights, no sound, nothing',
     'a power issue — the charger, the charging port, a drained or failed battery, or (less often) a deeper hardware fault.',
     "Is the charger's LED lit when plugged in? Does the laptop show any charging indicator at all? If there's genuinely zero sign of life even when plugged directly into a wall outlet, this is very likely charger, battery, or charging port related.",
     'We test the charger, battery, and charging port separately to isolate which one has failed — see our <a href="/mac-battery-replacement/">Battery Replacement</a> and <a href="/charging-port-repair/">Charging Port Repair</a> pages for those specific fixes.'],
    ['Scenario 2: It powers on (fans spin, lights come on) — but the screen stays black',
     "the device itself is working, but something's preventing a display — could be the screen itself, the graphics hardware, or a connection issue between them.",
     'Connect to an external monitor if possible. If the external monitor shows an image, the built-in screen itself is the problem, not the rest of the computer.',
     'We isolate whether it\'s the screen, the display cable, or the graphics hardware — see our <a href="/screen-replacement/">Screen Replacement</a> page if it turns out to be the display itself.'],
    ["Scenario 3: It powers on and starts booting, but won't finish loading Windows or macOS",
     'a software or operating-system-level problem — a corrupted OS, a failing drive, or a Windows/macOS update that didn\'t complete properly.',
     'Does it get stuck on a logo screen, show an error message, or loop back to a black screen repeatedly? Any error code shown is useful information.',
     'Depends on the cause — could be a <a href="/system-installation/">System Installation</a> (fresh OS setup), a <a href="/hard-drive-replacement/">Hard Drive Replacement</a> if the drive has failed, or <a href="/data-backup-and-recovery/">Data Recovery</a> first if the drive is failing and data isn\'t backed up. See our <a href="/error-messages/">Error Messages</a> page for a specific code or symbol.'],
  ].map(([h, m, c, fx], i) => `<section class="section${i%2? ' alt':''}"><div class="wrap lead-copy"><h2>${esc(h)}</h2><p><strong>What it usually means:</strong> ${esc(m)}</p><p><strong>What to check first:</strong> ${esc(c)}</p><p><strong>How we fix it:</strong> ${fx}</p></div></section>`).join('');
  const faqHtml = WONT_TURN_ON_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Help · Won't turn on</div>
    <h1>Computer Won't Turn On?</h1><p class="lead">Three common scenarios — and what each one usually means.</p>
    <div class="cta-row"><a class="btn btn-white" href="/contact/">Book diagnostics</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Call ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Home</a> › <span>Computer Won't Turn On</span></div>
    <p>"Won't turn on" can actually mean a few different things, and each points to a different cause. Before assuming the worst, it helps to know which of these three situations matches yours:</p></div></section>
  ${scen}
  <section class="section alt"><div class="wrap"><div class="eyebrow">Diagnostics &amp; pricing</div><h2>Free or express — your choice</h2><p class="sub">Standard diagnostics are free (2–4 days), or express for 600 kr (1–2 hours) — with repair and delivery within 24 hours if no special parts need ordering. You get a fixed quote before we start.</p></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Won't turn on — common questions</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Not sure which scenario is yours?</h2><p>Bring it in — free diagnostics (2–4 days) or express (600 kr). We isolate the cause before quoting.</p><div class="cta-row"><a class="btn btn-white" href="/contact/">Book diagnostics</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Call ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Related</p><div class="crosslinks"><a href="/charging-port-repair/">Charging Port Repair →</a><a href="/screen-replacement/">Screen Replacement →</a><a href="/error-messages/">Error Messages →</a><a href="/faq/">General FAQ →</a></div></div></div></section>`;
}

// ---------- General FAQ (site-wide, grouped) ----------
const FAQ_GROUPS = [
  ['General & Process', [
    ["Does home/contents insurance typically cover accidental damage repairs?", "Many home insurance policies cover accidental damage to laptops — worth checking your specific policy. We can provide a detailed invoice for insurance claim purposes either way."],
    ["Can you provide an invoice in English for expense reports or reimbursement?", "Yes — all invoices are available in English, which is useful for expense claims, company reimbursement, or embassy administrative purposes."],
    ["What should I do before bringing my device in for repair?", "If possible: back up important data, remove any case or accessories, and note your device's passcode if we'll need to test it after repair. Not required, but it speeds things up."],
    ["Do you offer any discount for students?", "Contact us directly to ask — worth checking, especially given our location near Copenhagen Business School."],
    ['Do you speak English?', 'Yes — our entire service is in English, from your first call or email through to picking up your repaired device. No Danish required.'],
    ['How does diagnostics and repair work?', 'We diagnose the actual problem first, then give you a fixed quote before any repair work starts. Standard diagnostics are free (2–4 days), or choose express for 600 kr (1–2 hours) — with repair and delivery within 24 hours if no special parts need ordering.'],
    ['What if I need my device back faster than standard diagnostics?', 'Choose express diagnostics (600 kr, 1–2 hours) instead of the free standard option. Most express repairs are completed within 24 hours if no special parts need ordering.'],
    ['Do you offer a warranty on repairs?', 'Yes, repairs come with a warranty. Ask at the time of booking for specifics on your repair type.'],
    ['Is my data safe during repair?', "Yes. We don't access or share personal data beyond what's necessary to complete the repair, and we recommend backing up important files beforehand regardless."],
    ['Do I need an appointment, or can I walk in?', 'Walk-in service — no appointment needed.'],
    ['Can you pick up and deliver my computer?', 'Yes, pickup and delivery is available — contact us for details based on your location.'],
    ['What if my device can\'t be repaired?', "We'll tell you honestly. If repair isn't cost-effective compared to replacement, we'll say so rather than charging for work that isn't worthwhile — and can point you toward refurbished or new options in our <a href=\"/shop/\">shop</a> if that's the better path."],
    ['How do I know if it\'s worth repairing my computer, or if I should just replace it?', 'A common rule of thumb: if the repair cost is more than 25–50% of a comparable replacement, replacement is usually the better value — especially on an older machine. A 2–3 year old laptop is almost always worth repairing; a 7–8 year old one may have harder-to-source parts. We give you our honest opinion as part of your fixed quote.'],
    ['What payment methods do you accept?', 'Card payments and bank transfer.'],
  ]],
  ['Brands We Repair', [
    ['Do you repair Lenovo laptops?', 'Yes — ThinkPad (T14, T14s, X1 Carbon, P16 and more), IdeaPad, Legion, Yoga, and ThinkBook. See <a href="/lenovo-repair/">Lenovo Repair</a>.'],
    ['Do you repair Acer laptops?', 'Yes — Aspire, Swift, Nitro, and Predator models. See <a href="/acer-repair/">Acer Repair</a>.'],
    ['Do you repair HP laptops?', 'Yes — EliteBook, ProBook, Pavilion, Spectre, and Omen. See <a href="/hp-repair/">HP Repair</a>.'],
    ['Do you repair Dell laptops?', 'Yes — XPS, Latitude, Inspiron, Precision, and Alienware. See <a href="/dell-repair/">Dell Repair</a>.'],
    ['Do you repair Asus laptops?', 'Yes — ZenBook, Vivobook, ROG, and TUF Gaming. See <a href="/asus-repair/">Asus Repair</a>.'],
    ['Do you repair MSI laptops?', "Yes — Katana, GF-series, Stealth, and Prestige. We're also one of the few workshops in Denmark that stocks MSI parts. See <a href=\"/msi-repair/\">MSI Repair</a>."],
    ['Do you repair Huawei laptops?', 'Yes — the MateBook D14, D15, and X Pro. See <a href="/huawei-repair/">Huawei Repair</a>.'],
    ['Do you repair MacBook and Mac desktops?', 'Yes — every MacBook generation (Intel and Apple Silicon), plus iMac, Mac mini, Mac Studio, and Mac Pro. See <a href="/mac-repair/">Mac Repair</a>.'],
    ['Do you repair Microsoft Surface devices?', 'Yes — Surface Pro, Surface Laptop, and Surface Book, including specialized digitizer and touch-screen repair. See <a href="/microsoft-surface-repair/">Microsoft Surface Repair</a>.'],
    ['Do you repair Samsung Galaxy Book laptops?', 'Yes — Galaxy Book3, Galaxy Book4 Pro, Galaxy Book3 360, and Galaxy Book Go. See <a href="/samsung-repair/">Samsung Repair</a>.'],
    ['What about brands not listed here — Toshiba, Gigabyte, LG gram, Razer?', 'We repair virtually every brand and custom-built setup — see <a href="/other-brands-repair/">Other Brands & Custom Builds</a>.'],
    ['Do you build custom gaming PCs, not just repair them?', "Yes — tell us your budget and intended use, and we'll recommend components, build it, and test it before handover. See our <a href=\"/gaming-pc-repair-and-build/\">Gaming PC</a> page."],
  ]],
  ['Services', [
    ['Can you upgrade my old laptop to an SSD?', 'Yes — often one of the most noticeable speed improvements you can make to an older machine. See <a href="/ssd-upgrade/">SSD Upgrade</a>.'],
    ['Do you repair liquid damage?', "Yes, for any brand or model. Liquid damage diagnostics work differently from our standard pricing — it's a flat 600 kr, takes 3–4 days, and there's no express option, since a proper assessment takes time. See <a href=\"/liquid-damage-repair/\">Liquid Damage Repair</a>."],
    ['Can you recover data from a failed hard drive?', 'Often, yes — depends on the type and severity of the failure. We assess first and give an honest answer. See <a href="/data-backup-and-recovery/">Data Backup & Recovery</a>.'],
    ['Do you remove viruses and malware?', 'Yes, on both PC and Mac. See <a href="/virus-removal/">Virus & Malware Removal</a>.'],
    ['Do you clean dust and reapply thermal paste?', 'Yes — a common fix for overheating or fan noise on both laptops and desktop gaming PCs.'],
    ['Do you fix charging ports?', 'Yes, across laptop brands. See <a href="/charging-port-repair/">Charging Port Repair</a>.'],
  ]],
  ['Business IT Support', [
    ["Can a company send multiple devices in at once for repair or setup?", "Yes — this is common for businesses, and ties into our Business IT Support service for larger or ongoing needs."],
    ['Do you offer ongoing IT support for businesses, not just one-off repairs?', 'Yes — fixed-price IT service agreements with unlimited support, monitoring, and security. See our <a href="/business-it-service-agreement/">Business IT Support</a> page.'],
    ["What's the difference between a one-off repair and a service agreement?", 'A repair is a single fix for a specific problem. A service agreement is an ongoing, fixed monthly arrangement covering unlimited support, monitoring, and security for your business — designed to prevent problems rather than just fix them after the fact.'],
  ]],
  ['Shop', [
    ['Do you sell computers, not just repair them?', 'Yes — new and refurbished computers, plus backup and security equipment, are available in our <a href="/shop/">shop</a>.'],
    ['Are refurbished computers guaranteed?', 'Yes — refurbished computers come with a warranty; see the <a href="/shop/computers/refurbished/">shop</a> for specifics.'],
  ]],
];
const stripTags = (h) => h.replace(/<[^>]+>/g, '');
export const GENERAL_FAQ = FAQ_GROUPS.flatMap(([, items]) => items.map(([q, a]) => ({ q, a: stripTags(a) })));
export function faqPageHtml() {
  const sections = FAQ_GROUPS.map(([title, items], i) => {
    const rows = items.map(([q, a]) => `<details><summary>${esc(q)}</summary><div class="answer">${a}</div></details>`).join('');
    return `<section class="section${i%2? ' alt':''}"><div class="wrap"><div class="eyebrow">${esc(title)}</div><div class="faq" style="max-width:900px">${rows}</div></div></section>`;
  }).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Help · FAQ</div>
    <h1>Frequently Asked Questions</h1><p class="lead">Everything about our repairs, brands, services, business IT, and shop — answered in English.</p>
    <div class="cta-row"><a class="btn btn-white" href="/contact/">Contact us</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Call ${site.phone}</a></div></div></section>
  ${sections}
  <section class="section"><div class="wrap"><div class="cta-band"><h2>Still have a question?</h2><p>Call, email, or stop by the workshop on Falkoner Allé — we respond quickly, in English.</p><div class="cta-row"><a class="btn btn-white" href="/contact/">Contact us</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Call ${site.phone}</a></div></div></div></section>`;
}

// ---------- Network Equipment hub ----------
export const NETWORK_HUB_FAQ = [
  { q: 'Do you help with router setup for both homes and businesses?', a: 'Yes, from simple home WiFi to multi-access-point business networks.' },
  { q: "I'm not sure which of these matches my equipment — can I just ask?", a: "Yes, contact us and we'll point you to the right service, or just help directly." },
];
export function networkHubHtml() {
  const cards = [
    ['UniFi (Ubiquiti)', 'Setup, VLANs, multi-access-point networks', '/unifi-setup-support/'],
    ['Netgear', 'Nighthawk and Orbi setup and troubleshooting', '/netgear-setup-support/'],
    ['TP-Link', 'Archer routers and Deco mesh systems', '/tp-link-setup-support/'],
    ['ASUS Routers', 'Standard, gaming, and AiMesh setups', '/asus-router-setup-support/'],
    ['Eero & Google Nest WiFi', 'Simple mesh system setup', '/eero-google-nest-wifi-setup/'],
  ].map(([t, d, h]) => `<a class="card card-link" href="${h}"><div class="card-icon brand-icon">${lucide.wifi}</div><h3>${esc(t)}</h3><p class="models">${esc(d)}</p><span class="arrow">View →</span></a>`).join('');
  const faqHtml = NETWORK_HUB_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Network · Frederiksberg &amp; Copenhagen</div>
    <h1>Network Equipment Setup &amp; Support</h1><p class="lead">From a single router to a full multi-access-point network.</p>
    <div class="cta-row"><a class="btn btn-white" href="/contact/">Get network help</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Call ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Home</a> › <span>Network Equipment</span></div>
    <p>Whether you're setting up a new router, troubleshooting a flaky connection, or want proper network management for a home or small business, we work with all the major brands.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">Brands we support</div><h2>Choose your equipment</h2><div class="grid grid-3">${cards}</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Network setup — common questions</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Not sure where to start?</h2><p>Tell us your equipment and what's going wrong — we'll point you to the right service or help directly.</p><div class="cta-row"><a class="btn btn-white" href="/contact/">Get network help</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Call ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Related</p><div class="crosslinks"><a href="/wifi-network-troubleshooting/">WiFi &amp; Network Troubleshooting →</a><a href="/business-it-service-agreement/">Business IT Support →</a><a href="/contact/">Contact & booking →</a></div></div></div></section>`;
}

// ---------- Websites & SEO hub ----------
export const WEBSITES_HUB_FAQ = [
  { q: "How do international clients pay?", a: "We accept international bank transfer and card payments. Payment details are made clear when we agree on the project scope." },
  { q: "Do you work across different time zones?", a: "Yes — we agree on communication times upfront that work for your location." },
  { q: "What currency are invoices in?", a: "Typically EUR or Danish kroner — we can discuss what works best for you when the project starts." },
  { q: "How long does it take to build a website?", a: "Depends on scope — a simple business site is faster than a custom webshop. We'll give you a realistic timeline as part of the project quote." },
  { q: "Do you offer ongoing maintenance after the site launches?", a: "Yes — updates, security patches, and small changes can be arranged as an ongoing service rather than a one-time build." },
  { q: 'Do you build the website AND handle the SEO, or just one or the other?', a: 'Either — some clients want both from the start, others already have a site and just want SEO or Ads help.' },
  { q: 'Is this only for businesses, or can individuals get a personal website built too?', a: 'Primarily aimed at businesses, but contact us regardless of what you need.' },
];
export function websitesHubHtml() {
  const cards = [
    ['Website Design & Development', 'Modern, fast, mobile-friendly sites — business sites, portfolios, or simple webshops.', '/website-design-development/'],
    ['SEO Services', 'Real keyword research, technical SEO, and content strategy — not just a monthly report.', '/seo-services/'],
    ['Google Ads Management', 'Targeted campaigns managed properly, with your budget spent on the right searches.', '/google-ads-management/'],
  ].map(([t, d, h]) => `<a class="card card-link" href="${h}"><h3>${esc(t)}</h3><p>${esc(d)}</p><span class="arrow">Learn more →</span></a>`).join('');
  const faqHtml = WEBSITES_HUB_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer">${esc(f.a)}</div></details>`).join('');
  const quote = `mailto:${site.emailBusiness}?subject=${encodeURIComponent('Websites & SEO enquiry')}`;
  return `  <section class="hero"><div class="wrap"><div class="eyebrow">Business · Websites &amp; SEO</div>
    <h1>Websites &amp; SEO</h1><p class="lead">A website that works, found by the people looking for it.</p>
    <div class="cta-row"><a class="btn btn-white" href="${quote}">Get a quote</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Call ${site.phone}</a></div></div></section>
  <section class="section"><div class="wrap lead-copy"><div class="crumbs"><a href="/">Home</a> › <span>Websites &amp; SEO</span></div>
    <p>Having a website isn't enough if nobody finds it. We build modern, fast websites, then make sure they actually rank — through real SEO work and, where it makes sense, targeted Google Ads. This isn't outsourced to a template or a junior account manager — the same person building your site does the technical SEO work behind it.</p></div></section>
  <section class="section alt"><div class="wrap"><div class="eyebrow">What we do</div><h2>Three ways we help</h2><div class="grid grid-3">${cards}</div></div></section>
  <section class="section"><div class="wrap"><div class="eyebrow">FAQ</div><h2>Websites &amp; SEO — common questions</h2><div class="faq">${faqHtml}</div></div></section>
  <section class="section alt"><div class="wrap"><div class="cta-band"><h2>Want to be found online?</h2><p>Tell us what you need — a new site, better rankings, or ad campaigns that actually convert. We scope it and quote it, no obligation.</p><div class="cta-row"><a class="btn btn-white" href="${quote}">Get a quote</a><a class="btn btn-ghost-light" href="${site.phoneHref}">📞 Call ${site.phone}</a></div></div>
    <div style="margin-top:32px"><p class="eyebrow">Related</p><div class="crosslinks"><a href="/business-it-service-agreement/">Business IT Support →</a><a href="/contact/">Contact →</a></div></div></div></section>`;
}
