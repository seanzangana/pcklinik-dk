// ============================================================================
// Repair-page content — 11 brand/device pages rendered by one template.
// Content faithful to the EN briefs (lenovo, brand-pages-batch-2, mac desktop).
// Images use predictable paths under /images/<slug>/ so a placeholder can be
// swapped for a real photo by replacing one file — no code change needed.
// ============================================================================

export const repairs = [
  // ------------------------------------------------------------------ LENOVO
  {
    slug: 'lenovo-repair',
    brand: 'Lenovo',
    title: 'Lenovo Repair: ThinkPad T14, IdeaPad, Legion | PCKlinik',
    description: 'Lenovo ThinkPad T14, T14s, X1 Carbon, IdeaPad 3/5 and Legion repair in Frederiksberg and Copenhagen. Free diagnostics, fixed quote. Call 91 81 61 81.',
    h1: 'Lenovo Repair in Frederiksberg & Copenhagen',
    h2: 'ThinkPad, IdeaPad, Legion, Yoga and ThinkBook — we repair them all',
    intro: [
      'Having problems with your Lenovo? At PCKlinik we repair every Lenovo series — <strong>ThinkPad T14, T14s, T16, X1 Carbon, X1 Yoga and P16</strong>, <strong>IdeaPad 3, IdeaPad 5 and IdeaPad Slim</strong>, <strong>Legion 5 and Legion Pro</strong>, and <strong>Yoga 7, Yoga Slim</strong> and <strong>ThinkBook</strong> — for individuals and businesses across Frederiksberg and Copenhagen.',
      "Whether it's a cracked screen on your <strong>ThinkPad T14</strong>, a loose hinge on your <strong>X1 Carbon</strong>, a battery that's given up on your <strong>IdeaPad 5</strong>, or a <strong>Legion</strong> overheating under load, we work through it methodically.",
      'We diagnose your Lenovo thoroughly and give you a fixed quote before we start — so you always know the cost before we touch the machine. Standard diagnostics are free (2–4 days), or choose express for 600 kr (1–2 hours) — with repair and delivery within 24 hours if no special parts need ordering. Most Lenovo repairs are completed the same day, right from our workshop on Falkoner Allé.',
    ],
    models: [
      { series: 'ThinkPad T-series (business)', models: 'T14, T14s, T14 Gen 4, T16', issue: 'Hinge damage, screen replacement, keyboard, battery' },
      { series: 'ThinkPad X-series (ultraportable)', models: 'X1 Carbon, X1 Yoga, X13', issue: 'Screen, hinges, touch panel (X1 Yoga)' },
      { series: 'ThinkPad P-series (workstation)', models: 'P16, P1, P14s', issue: 'Screen, cooling/fan, motherboard, graphics card faults' },
      { series: 'ThinkBook', models: 'ThinkBook 14, ThinkBook 15', issue: 'Battery, screen, slow performance' },
      { series: 'IdeaPad (consumer)', models: 'IdeaPad 3, IdeaPad 5, IdeaPad Slim 3', issue: 'Battery replacement, slow performance, software issues, boot problems' },
      { series: 'Legion (gaming)', models: 'Legion 5, Legion 5 Pro, Legion Slim 5', issue: 'Cooling, screen, battery under load, fan noise' },
      { series: 'Yoga (2-in-1)', models: 'Yoga 7, Yoga 9i, Yoga Slim 7', issue: 'Touch-screen repair (different from standard screen replacement), hinges' },
    ],
    services: [
      { title: 'Screen Replacement', body: 'Cracked or damaged screen on your <strong>ThinkPad T14, T14s, T16</strong> or <strong>IdeaPad 3/5</strong>? We replace it fast with quality parts. Got a <strong>Yoga 7</strong> or <strong>X1 Yoga</strong> with touch functionality? We handle touch-panel replacement too.' },
      { title: 'Battery Replacement', body: "Battery on your <strong>IdeaPad 3, IdeaPad 5, ThinkPad T14</strong> or <strong>Legion 5</strong> not holding a charge anymore? We'll replace it and restore proper battery life." },
      { title: 'Hinges & Chassis', body: 'Loose or cracked hinges are a classic fault on <strong>ThinkPad T14, T16, X1 Carbon</strong> and <strong>X1 Yoga</strong>. We repair or replace hinges and chassis parts, so the lid closes and sits properly again.' },
      { title: 'Cooling & Performance', body: 'Freezing or restarting during gaming or heavy tasks on your <strong>Legion 5, Legion 5 Pro</strong> or <strong>ThinkPad P16</strong>? We clean and repair the cooling system, and fix software issues causing instability on <strong>IdeaPad</strong> and <strong>ThinkBook</strong> models.' },
    ],
    whyHeading: 'Why Choose PCKlinik for Lenovo Repair?',
    whyIntro: 'With thousands of completed repairs and satisfied customers, PCKlinik is your go-to choice for <strong>ThinkPad, IdeaPad, Legion, Yoga</strong> and <strong>ThinkBook</strong> repair in Frederiksberg and Copenhagen.',
    why: [
      { title: 'Experienced Service', body: 'Deep experience with ThinkPad T14/T14s, X1 Carbon, IdeaPad 3/5, Legion 5 and Yoga models.' },
      { title: 'Fast Turnaround', body: "Most Lenovo repairs are done the same day — whether it's a T14 or a Legion 5 Pro." },
      { title: 'Fixed Quote Before We Start', body: 'No surprises.' },
      { title: 'Real People, Real Expertise', body: "A genuine team, not a call center — you always get a straight answer from someone who knows what they're talking about." },
    ],
    faq: [
      { q: "Do you offer a warranty on ThinkPad hinge repairs specifically?", a: "Yes, the same warranty as any other repair." },
      { q: "Can you fix a Lenovo that won't charge past a certain percentage?", a: "Usually a battery issue — we diagnose and replace as needed." },
      { q: 'How much does it cost to replace the screen on a Lenovo ThinkPad T14?', a: "It depends on the damage and model. Diagnostics are free (2–4 days) — or express for 600 kr (1–2 hours). We'll give you a fixed quote afterward, so you know the price before repair begins." },
      { q: 'Can you fix hinges on a ThinkPad X1 Carbon?', a: 'Yes, hinge damage is one of the most common faults on the X1 Carbon and X1 Yoga. We replace or repair hinges so the lid closes correctly again.' },
      { q: 'My Legion 5 overheats during gaming — can you help?', a: 'Yes. Overheating on Legion models is usually caused by dust in the cooling system or a fan that needs replacing. We clean and repair cooling on all Legion models.' },
      { q: 'Do you repair IdeaPad 3 and IdeaPad 5?', a: 'Yes, we repair all IdeaPad models — screen, battery, and software issues like slow boot or system crashes.' },
    ],
    photos: [
      { path: '/images/lenovo/thinkpad-t14-repair.jpg', alt: 'Lenovo ThinkPad T14 screen repair Frederiksberg' },
      { path: '/images/lenovo/x1-carbon-hinge.jpg', alt: 'Lenovo ThinkPad X1 Carbon hinge repair' },
      { path: '/images/lenovo/legion-5-cooling.jpg', alt: 'Lenovo Legion 5 cooling and fan repair' },
    ],
    crosslinks: [{ label: 'HP Repair', href: '/hp-repair/' }, { label: 'Dell Repair', href: '/dell-repair/' }],
    ctaPrimary: 'Book Lenovo diagnostics',
  },

  // -------------------------------------------------------------------- ACER
  {
    slug: 'acer-repair',
    brand: 'Acer',
    title: 'Acer Repair: Aspire, Nitro, Swift | PCKlinik',
    description: 'Acer Aspire 5, Nitro 5, Swift and Predator repair in Frederiksberg and Copenhagen. Free diagnostics, fixed quote. Call 91 81 61 81.',
    h1: 'Acer Repair in Frederiksberg & Copenhagen',
    h2: 'Aspire, Nitro, Swift and Predator — we repair them all',
    intro: [
      'Having problems with your Acer? At PCKlinik we repair every Acer series — <strong>Aspire 3, Aspire 5, Nitro 5, Swift 3, Swift 5</strong> and <strong>Predator Helios</strong> — for individuals and businesses in Frederiksberg and Copenhagen. Acer is known as one of the most reliable and affordable brands to repair, since parts are generally available and inexpensive.',
      "Whether it's a cracked screen on your <strong>Aspire 5</strong>, a battery that's run dry on your <strong>Swift 3</strong>, or a <strong>Nitro 5</strong> overheating during gaming, we work through it methodically. Diagnostics are free (2–4 days) or express for 600 kr (1–2 hours).",
    ],
    models: [
      { series: 'Aspire (everyday)', models: 'Aspire 3, Aspire 5, Aspire 7', issue: 'Battery replacement, slow performance, screen' },
      { series: 'Swift (ultraportable)', models: 'Swift 3, Swift 5, Swift Go', issue: 'Screen, hinges, battery' },
      { series: 'Nitro (budget gaming)', models: 'Nitro 5, Nitro 16', issue: 'Cooling, fan noise, screen' },
      { series: 'Predator (high-end gaming)', models: 'Predator Helios, Predator Triton', issue: 'Cooling, GPU faults, screen' },
      { series: 'Chromebook', models: 'Acer Chromebook 315', issue: 'Software/OS issues, battery' },
    ],
    services: [
      { title: 'Screen Replacement', body: 'Cracked screen on your <strong>Aspire 5</strong> or <strong>Swift 3</strong>? Fast replacement with quality parts.' },
      { title: 'Battery Replacement', body: "Battery on your <strong>Aspire 3</strong> or <strong>Swift 5</strong> not holding a charge? We'll replace it." },
      { title: 'Cooling & Fan', body: 'Overheating <strong>Nitro 5</strong> or <strong>Predator Helios</strong> during gaming? We clean and repair the cooling system.' },
      { title: 'Software & Diagnostics', body: 'Slow boot or system crashes on your <strong>Aspire</strong>? We fix software issues and optimize performance.' },
    ],
    whyHeading: 'Why Choose PCKlinik for Acer Repair?',
    why: [
      { title: 'Experienced Service', body: 'Deep experience with Aspire, Swift, Nitro and Predator.' },
      { title: 'Fast Turnaround', body: 'Most Acer repairs done the same day.' },
      { title: 'Fixed Quote Before We Start', body: 'No surprises.' },
      { title: 'Affordable', body: "Acer parts are inexpensive, and that's passed on to you." },
    ],
    faq: [
      { q: "Do you repair Acer Chromebooks, or only Windows models?", a: "Both." },
      { q: "Is Acer Predator cooling different from standard laptop cooling?", a: "Yes, higher-performance systems need more careful cleaning and thermal paste application, which we're experienced with." },
      { q: 'How much does it cost to replace a battery on an Acer Aspire 5?', a: "Diagnostics are free (2–4 days) or express for 600 kr (1–2 hours). You'll get a fixed quote before repair begins." },
      { q: 'Can you fix an Acer Nitro 5 that overheats?', a: 'Yes, overheating on Nitro and Predator models is usually dust or a fan issue.' },
      { q: 'Do you repair older Acer Aspire models?', a: 'Yes, regardless of age, as long as parts are available.' },
    ],
    photos: [
      { path: '/images/acer/aspire-5-screen.jpg', alt: 'Acer Aspire 5 screen repair Frederiksberg' },
      { path: '/images/acer/nitro-5-cooling.jpg', alt: 'Acer Nitro 5 cooling and fan repair' },
      { path: '/images/acer/swift-3-repair.jpg', alt: 'Acer Swift 3 screen replacement' },
    ],
    crosslinks: [{ label: 'Asus Repair', href: '/asus-repair/' }, { label: 'MSI Repair', href: '/msi-repair/' }],
    ctaPrimary: 'Book Acer diagnostics',
  },

  // ---------------------------------------------------------------------- HP
  {
    slug: 'hp-repair',
    brand: 'HP',
    title: 'HP Repair: EliteBook, Pavilion, Spectre | PCKlinik',
    description: 'HP EliteBook 840, Pavilion, Spectre x360 and Omen repair in Frederiksberg and Copenhagen. Free diagnostics, fixed quote. Call 91 81 61 81.',
    h1: 'HP Repair in Frederiksberg & Copenhagen',
    h2: 'EliteBook, Pavilion, Spectre and Omen — we repair them all',
    intro: [
      'Having problems with your HP? At PCKlinik we repair every HP series — <strong>EliteBook 840, EliteBook 850, Pavilion, Spectre x360</strong> and <strong>Omen</strong> — for individuals and businesses in Frederiksberg and Copenhagen. HP is one of the most common brands in Danish offices, and we have deep experience with both the business and consumer lines.',
      "Whether it's a cracked screen on your <strong>Pavilion</strong>, a loose hinge on your <strong>Spectre x360</strong>, or an <strong>EliteBook</strong> that won't boot, we work through it methodically. Diagnostics are free (2–4 days) or express for 600 kr (1–2 hours).",
    ],
    models: [
      { series: 'EliteBook (business)', models: 'EliteBook 840, EliteBook 850', issue: 'Keyboard, screen, hinges, battery' },
      { series: 'ProBook (mid-range business)', models: 'ProBook 450, ProBook 440', issue: 'Battery, screen, slow performance' },
      { series: 'Pavilion (consumer)', models: 'Pavilion 15, Pavilion x360', issue: 'Battery replacement, software issues' },
      { series: 'Spectre (premium 2-in-1)', models: 'Spectre x360', issue: 'Touch-screen, hinges' },
      { series: 'Omen (gaming)', models: 'Omen 16, Omen 17', issue: 'Cooling, screen, GPU faults' },
    ],
    services: [
      { title: 'Screen Replacement', body: 'Cracked screen on your <strong>EliteBook 840</strong> or <strong>Pavilion 15</strong>? Fast replacement. <strong>Spectre x360</strong> touch-screens handled separately.' },
      { title: 'Battery Replacement', body: "Battery on your <strong>EliteBook</strong> or <strong>Pavilion</strong> not holding a charge? We'll replace it." },
      { title: 'Keyboard & Hinges', body: 'Sticky keys or loose hinges on your <strong>EliteBook 840</strong>? We repair or replace.' },
      { title: 'Cooling & Performance', body: 'Overheating <strong>Omen 16</strong> during gaming? We clean the cooling system and fix software issues.' },
    ],
    whyHeading: 'Why Choose PCKlinik for HP Repair?',
    why: [
      { title: 'Experienced Service', body: 'Broad experience with EliteBook, ProBook, Pavilion, Spectre and Omen.' },
      { title: 'Fast Turnaround', body: 'Most HP repairs done the same day.' },
      { title: 'Fixed Quote Before We Start', body: 'No surprises.' },
      { title: 'Business Experience', body: 'We know the EliteBook and ProBook lines well from business customers.' },
    ],
    faq: [
      { q: "Can you repair a cracked hinge on an HP Spectre x360?", a: "Yes, 2-in-1 hinges are a repair we handle regularly." },
      { q: "Do you support older HP EliteBook models no longer sold new?", a: "Yes, age doesn't stop us if parts are available." },
      { q: 'Do you repair HP EliteBook for businesses?', a: 'Yes, we have deep experience with business models like EliteBook 840 and 850.' },
      { q: 'Can you replace the touch-screen on an HP Spectre x360?', a: 'Yes, touch-screen repair on the Spectre x360 is a different process from standard screen replacement.' },
      { q: 'My Omen overheats — can you help?', a: 'Yes, we clean and repair cooling on Omen models.' },
    ],
    photos: [
      { path: '/images/hp/elitebook-840-screen.jpg', alt: 'HP EliteBook 840 screen repair Frederiksberg' },
      { path: '/images/hp/spectre-x360-hinge.jpg', alt: 'HP Spectre x360 hinge repair' },
      { path: '/images/hp/omen-cooling.jpg', alt: 'HP Omen fan cleaning and cooling repair' },
    ],
    crosslinks: [{ label: 'Lenovo Repair', href: '/lenovo-repair/' }, { label: 'Dell Repair', href: '/dell-repair/' }],
    ctaPrimary: 'Book HP diagnostics',
  },

  // -------------------------------------------------------------------- DELL
  {
    slug: 'dell-repair',
    brand: 'Dell',
    title: 'Dell Repair: XPS, Latitude, Inspiron | PCKlinik',
    description: 'Dell XPS 13/15, Latitude, Inspiron and Precision repair in Frederiksberg and Copenhagen. Free diagnostics, fixed quote. Call 91 81 61 81.',
    h1: 'Dell Repair in Frederiksberg & Copenhagen',
    h2: 'XPS, Latitude, Inspiron and Precision — we repair them all',
    intro: [
      'Having problems with your Dell? At PCKlinik we repair every Dell series — <strong>XPS 13, XPS 15, Latitude 5440, Latitude 7440, Inspiron 15</strong> and <strong>Precision</strong> workstations — for individuals and businesses in Frederiksberg and Copenhagen.',
      "Whether it's a loose hinge on your <strong>XPS 13</strong> (a well-known Dell weak point), a battery that's run dry on your <strong>Inspiron</strong>, or a <strong>Latitude</strong> giving you trouble at work, we work through it methodically. Diagnostics are free (2–4 days) or express for 600 kr (1–2 hours).",
    ],
    models: [
      { series: 'XPS (premium consumer)', models: 'XPS 13, XPS 15', issue: 'Hinges, screen, battery' },
      { series: 'Latitude (business)', models: 'Latitude 5440, Latitude 7440, Latitude 5540', issue: 'Keyboard, battery, screen' },
      { series: 'Inspiron (budget consumer)', models: 'Inspiron 15, Inspiron 14', issue: 'Battery replacement, slow performance' },
      { series: 'Precision (workstation)', models: 'Precision 5570, Precision 3580', issue: 'Screen, cooling, graphics card' },
      { series: 'Alienware (gaming)', models: 'Alienware m16, Alienware x14', issue: 'Cooling, GPU faults, screen' },
    ],
    services: [
      { title: 'Screen Replacement', body: 'Cracked screen on your <strong>XPS 13</strong> or <strong>Inspiron 15</strong>? Fast replacement with quality parts.' },
      { title: 'Hinges & Chassis', body: 'Loose hinges are a known weak point on <strong>XPS 13/15</strong>. We repair or replace.' },
      { title: 'Battery Replacement', body: "Battery on your <strong>Latitude</strong> or <strong>Inspiron</strong> not holding a charge? We'll replace it." },
      { title: 'Cooling & Performance', body: 'Overheating <strong>Precision</strong> or <strong>Alienware</strong> under heavy load? We clean the cooling system.' },
    ],
    whyHeading: 'Why Choose PCKlinik for Dell Repair?',
    why: [
      { title: 'Experienced Service', body: 'Broad experience with XPS, Latitude, Inspiron, Precision.' },
      { title: 'Fast Turnaround', body: 'Most Dell repairs done the same day.' },
      { title: 'Fixed Quote Before We Start', body: 'No surprises.' },
      { title: 'Business Experience', body: 'We know the Latitude line well from business customers.' },
    ],
    faq: [
      { q: "Is the XPS 13 hinge issue covered under Dell's own warranty, or do I pay?", a: "Depends on your Dell warranty status — we repair it either way, but warranty coverage is between you and Dell." },
      { q: "Do you repair Dell Precision workstations?", a: "Yes, including graphics card and cooling diagnostics for workstation-class machines." },
      { q: 'Is the XPS 13 known for hinge problems?', a: "Yes, it's one of the most common Dell faults we see, and we repair it quickly." },
      { q: 'Do you repair Dell Latitude for businesses?', a: 'Yes, deep experience with Latitude 5440, 7440 and similar business models.' },
      { q: 'My Precision workstation is slow — can you help?', a: 'Yes, we diagnose both hardware and software on Precision models.' },
    ],
    photos: [
      { path: '/images/dell/xps-13-hinge.jpg', alt: 'Dell XPS 13 hinge repair Frederiksberg' },
      { path: '/images/dell/latitude-7440-battery.jpg', alt: 'Dell Latitude 7440 battery replacement' },
      { path: '/images/dell/inspiron-screen.jpg', alt: 'Dell Inspiron screen replacement' },
    ],
    crosslinks: [{ label: 'HP Repair', href: '/hp-repair/' }, { label: 'Lenovo Repair', href: '/lenovo-repair/' }],
    ctaPrimary: 'Book Dell diagnostics',
  },

  // -------------------------------------------------------------------- ASUS
  {
    slug: 'asus-repair',
    brand: 'Asus',
    title: 'Asus Repair: ZenBook, ROG, Vivobook | PCKlinik',
    description: 'Asus ZenBook 14, ROG Strix, TUF Gaming and Vivobook repair in Frederiksberg and Copenhagen. Free diagnostics, fixed quote. Call 91 81 61 81.',
    h1: 'Asus Repair in Frederiksberg & Copenhagen',
    h2: 'ZenBook, Vivobook, ROG and TUF — we repair them all',
    intro: [
      'Having problems with your Asus? At PCKlinik we repair every Asus series — <strong>ZenBook 14, Vivobook 15, ROG Strix, TUF Gaming</strong> and <strong>Chromebook</strong> — for individuals and businesses in Frederiksberg and Copenhagen. Asus computers are often built more compactly than many other brands, which takes real experience to repair correctly.',
      "Whether it's a cracked screen on your <strong>Vivobook</strong>, a battery that's run dry on your <strong>ZenBook</strong>, or a <strong>ROG Strix</strong> overheating during gaming, we work through it methodically. Diagnostics are free (2–4 days) or express for 600 kr (1–2 hours).",
    ],
    models: [
      { series: 'ZenBook (premium ultraportable)', models: 'ZenBook 14, ZenBook Pro', issue: 'Screen, battery, hinges' },
      { series: 'Vivobook (consumer)', models: 'Vivobook 15, Vivobook Go', issue: 'Battery replacement, slow performance' },
      { series: 'ROG (high-end gaming)', models: 'ROG Strix, ROG Zephyrus', issue: 'Cooling, GPU faults, screen' },
      { series: 'TUF Gaming (budget gaming)', models: 'TUF Gaming A15, TUF Gaming F15', issue: 'Cooling, fan noise, screen' },
      { series: 'Chromebook', models: 'Asus Chromebook Flip', issue: 'Software/OS issues' },
    ],
    services: [
      { title: 'Screen Replacement', body: 'Cracked screen on your <strong>Vivobook</strong> or <strong>ZenBook 14</strong>? Fast replacement.' },
      { title: 'Battery Replacement', body: "Battery on your <strong>ZenBook</strong> or <strong>Vivobook</strong> not holding a charge? We'll replace it." },
      { title: 'Cooling & Fan', body: 'Overheating <strong>ROG Strix</strong> or <strong>TUF Gaming</strong>? We clean and repair the cooling system.' },
      { title: 'Keyboard & Chassis', body: 'Sticky keys or damaged chassis on your <strong>ZenBook</strong>? We replace the compact chassis with precision.' },
    ],
    whyHeading: 'Why Choose PCKlinik for Asus Repair?',
    why: [
      { title: 'Experienced Service', body: '20+ years working with Asus, including the more compactly built models.' },
      { title: 'Fast Turnaround', body: 'Most Asus repairs done the same day.' },
      { title: 'Fixed Quote Before We Start', body: 'No surprises.' },
      { title: 'Access to Genuine Parts', body: 'Strong supplier network for ZenBook and ROG parts.' },
    ],
    faq: [
      { q: "Do you repair Asus ROG laptops with RGB keyboard issues?", a: "Yes, treated the same as any other keyboard fault." },
      { q: "Is Vivobook repair more affordable than ZenBook?", a: "Parts cost varies by model — we give a fixed quote after diagnostics either way." },
      { q: 'Why is Asus repair different from other brands?', a: 'Asus often builds more compactly, which takes real experience — we have it.' },
      { q: 'Can you fix an Asus ROG Strix that overheats?', a: 'Yes, we clean and repair cooling on ROG and TUF models.' },
      { q: 'Do you repair Asus Chromebooks?', a: 'Yes, both hardware and software issues.' },
    ],
    photos: [
      { path: '/images/asus/zenbook-14-screen.jpg', alt: 'Asus ZenBook 14 screen repair Frederiksberg' },
      { path: '/images/asus/rog-strix-cooling.jpg', alt: 'Asus ROG Strix cooling repair' },
      { path: '/images/asus/vivobook-battery.jpg', alt: 'Asus Vivobook battery replacement' },
    ],
    crosslinks: [{ label: 'Acer Repair', href: '/acer-repair/' }, { label: 'MSI Repair', href: '/msi-repair/' }],
    ctaPrimary: 'Book Asus diagnostics',
  },

  // --------------------------------------------------------------------- MSI
  {
    slug: 'msi-repair',
    brand: 'MSI',
    title: 'MSI Repair: Katana, GF63, Stealth | PCKlinik',
    description: 'MSI Katana, GF63, Stealth and Prestige repair in Frederiksberg and Copenhagen. Free diagnostics, fixed quote. Call 91 81 61 81.',
    h1: 'MSI Repair in Frederiksberg & Copenhagen',
    h2: 'Katana, GF63, Stealth and Prestige — we repair them all',
    intro: [
      "Having problems with your MSI gaming computer? At PCKlinik we repair every MSI series — <strong>Katana 15, GF63, Stealth, Prestige</strong> and <strong>Cyborg</strong> — for gamers and creative professionals in Frederiksberg and Copenhagen. We're one of the few workshops in Denmark that stocks MSI parts, meaning faster turnaround.",
      "Whether it's a <strong>GF63</strong> overheating during gaming, a cracked screen on your <strong>Katana 15</strong>, or a battery that's given up on your <strong>Stealth</strong>, we work through it methodically. Diagnostics are free (2–4 days) or express for 600 kr (1–2 hours).",
    ],
    models: [
      { series: 'Katana (mid-range gaming)', models: 'Katana 15, Katana 17', issue: 'Cooling, screen, fan noise' },
      { series: 'GF-series (budget gaming)', models: 'GF63, GF65', issue: 'Cooling, battery performance' },
      { series: 'Stealth (thin gaming)', models: 'Stealth 14, Stealth 16', issue: 'Hinges, battery, screen' },
      { series: 'Prestige (creator/business)', models: 'Prestige 13, Prestige 14', issue: 'Screen, battery' },
      { series: 'Cyborg (budget gaming)', models: 'Cyborg 15', issue: 'Cooling, screen' },
    ],
    services: [
      { title: 'Cooling & Fan', body: 'Overheating <strong>GF63</strong> or <strong>Katana 15</strong> during gaming? We clean and repair cooling — the most common MSI fault.' },
      { title: 'Screen Replacement', body: 'Cracked screen on your <strong>Katana</strong> or <strong>Stealth</strong>? Fast replacement.' },
      { title: 'Battery Replacement', body: "Battery on your <strong>Stealth</strong> or <strong>Prestige</strong> not holding a charge? We'll replace it." },
      { title: 'Software & Performance', body: 'Freezing or lagging MSI under heavy load? We diagnose and optimize.' },
    ],
    whyHeading: 'Why Choose PCKlinik for MSI Repair?',
    why: [
      { title: 'Gaming PC Specialists', body: 'One of the few workshops in Denmark stocking MSI parts.' },
      { title: 'Fast Turnaround', body: 'Most MSI repairs done the same day.' },
      { title: 'Fixed Quote Before We Start', body: 'No surprises.' },
      { title: 'High-Performance Hardware Experience', body: 'GPU, cooling and screens for gaming models.' },
    ],
    faq: [
      { q: "Do you carry MSI GPU replacement parts in stock?", a: "We have strong supplier relationships for MSI parts — contact us about your specific model." },
      { q: "Can you fix MSI laptop coil whine (a high-pitched noise)?", a: "We diagnose the cause — sometimes a driver/power setting fix, sometimes hardware-related." },
      { q: 'Why does my MSI GF63 overheat?', a: 'Usually dust in the cooling system or a fan that needs cleaning/replacing.' },
      { q: 'Do you stock MSI parts?', a: "Yes, we're one of the few Danish workshops with MSI parts in stock." },
      { q: 'Do you repair MSI Stealth models?', a: 'Yes, including the thinner Stealth models where hinges and battery are typical failure points.' },
    ],
    photos: [
      { path: '/images/msi/gf63-cooling.jpg', alt: 'MSI GF63 cooling and fan repair Frederiksberg' },
      { path: '/images/msi/katana-15-screen.jpg', alt: 'MSI Katana 15 screen repair' },
      { path: '/images/msi/stealth-battery.jpg', alt: 'MSI Stealth battery replacement' },
    ],
    crosslinks: [{ label: 'Asus Repair', href: '/asus-repair/' }, { label: 'Acer Repair', href: '/acer-repair/' }],
    ctaPrimary: 'Book MSI diagnostics',
  },

  // ------------------------------------------------------------------ HUAWEI
  {
    slug: 'huawei-repair',
    brand: 'Huawei',
    title: 'Huawei Repair: MateBook D14, X Pro | PCKlinik',
    description: 'Huawei MateBook D14, MateBook X Pro and MateBook 14 repair in Frederiksberg and Copenhagen. Free diagnostics, fixed quote. Call 91 81 61 81.',
    h1: 'Huawei Repair in Frederiksberg & Copenhagen',
    h2: 'MateBook D14, MateBook X Pro and MateBook 14 — we repair them all',
    intro: [
      'Having problems with your Huawei? At PCKlinik we repair every Huawei MateBook series — <strong>MateBook D14, MateBook D15, MateBook X Pro</strong> and <strong>MateBook 14</strong> — for individuals and businesses in Frederiksberg and Copenhagen.',
      "Whether it's a cracked screen on your <strong>MateBook D14</strong>, a charging port acting up on your <strong>MateBook X Pro</strong>, or a computer that freezes and restarts, we work through it methodically. Diagnostics are free (2–4 days) or express for 600 kr (1–2 hours).",
    ],
    models: [
      { series: 'MateBook D (budget consumer)', models: 'MateBook D14, MateBook D15', issue: 'Battery replacement, screen, slow performance' },
      { series: 'MateBook X (premium)', models: 'MateBook X Pro', issue: 'Screen, charging port, keyboard' },
      { series: 'MateBook (mid-range)', models: 'MateBook 14', issue: 'Battery, software' },
    ],
    services: [
      { title: 'Screen Replacement', body: 'Cracked or damaged screen on your <strong>MateBook D14</strong> or <strong>X Pro</strong>? Fast replacement.' },
      { title: 'Battery Replacement', body: "Battery not holding a charge? We'll replace it." },
      { title: 'Charging Port & Buttons', body: 'Charging issues or power-button faults on your <strong>MateBook X Pro</strong>? We repair or replace defective components.' },
      { title: 'Software & Diagnostics', body: 'Freezing, restarting or slow? We fix software issues and ensure stable operation.' },
    ],
    whyHeading: 'Why Choose PCKlinik for Huawei Repair?',
    why: [
      { title: 'Experienced Service', body: 'Deep experience repairing Huawei MateBook devices.' },
      { title: 'Fast Turnaround', body: 'Most Huawei repairs done the same day.' },
      { title: 'Fixed Quote Before We Start', body: 'No surprises.' },
      { title: 'Quality Parts', body: 'We use quality parts on every repair.' },
    ],
    faq: [
      { q: "Do you repair Huawei MateBook trackpads?", a: "Yes, diagnosed and repaired like any other component fault." },
      { q: "Is it hard to find parts for Huawei laptops in Denmark?", a: "Less common than major brands, but we have experience sourcing what's needed." },
      { q: 'Do you repair the Huawei MateBook X Pro?', a: 'Yes, including screen, charging port and battery.' },
      { q: 'My MateBook D14 keeps freezing — can you help?', a: 'Yes, we diagnose and fix both software and hardware issues.' },
      { q: 'How much does a MateBook battery replacement cost?', a: "Diagnostics are free (2–4 days) or express for 600 kr — you'll get a fixed quote afterward." },
    ],
    photos: [
      { path: '/images/huawei/matebook-d14-screen.jpg', alt: 'Huawei MateBook D14 screen repair Frederiksberg' },
      { path: '/images/huawei/matebook-x-pro-charging.jpg', alt: 'Huawei MateBook X Pro charging port repair' },
    ],
    crosslinks: [{ label: 'Lenovo Repair', href: '/lenovo-repair/' }],
    ctaPrimary: 'Book Huawei diagnostics',
  },

  // ----------------------------------------------------------------- MACBOOK
  {
    slug: 'macbook-repair',
    brand: 'MacBook',
    title: 'MacBook Repair: Pro, Air, M1/M2/M3 | PCKlinik',
    description: 'MacBook Pro 13"/14"/16" and MacBook Air M1/M2/M3 repair in Frederiksberg and Copenhagen. Free diagnostics, fixed quote. Call 91 81 61 81.',
    h1: 'MacBook Repair in Frederiksberg & Copenhagen',
    h2: 'MacBook Pro, MacBook Air and older models — we repair them all',
    intro: [
      'Is your MacBook broken? At PCKlinik we repair every MacBook model — from the latest <strong>MacBook Pro 14" and 16" with M3 chip</strong> and <strong>MacBook Air M1/M2/M3</strong>, to older models like the <strong>MacBook Pro 13" (A1278/A1286)</strong> — for individuals and businesses in Frederiksberg and Copenhagen.',
      "Whether it's a cracked screen on your <strong>MacBook Air M2</strong>, a swollen battery on an older <strong>MacBook Pro 13\"</strong>, or a keyboard fault on a <strong>MacBook Pro</strong> with the butterfly keyboard, we work through it methodically. Diagnostics are free (2–4 days) or express for 600 kr (1–2 hours) — with repair and delivery within 24 hours if no special parts need ordering. We offer a price guarantee on MacBook repairs, and many repairs like screen and battery replacement are completed within 1 hour.",
    ],
    models: [
      { series: 'MacBook Pro (latest, Apple Silicon)', models: 'MacBook Pro 14" M3, MacBook Pro 16" M3', issue: 'Screen, battery, logic board' },
      { series: 'MacBook Air (Apple Silicon)', models: 'MacBook Air M1, MacBook Air M2, MacBook Air M3', issue: 'Screen, battery' },
      { series: 'MacBook Pro (Intel, older)', models: 'MacBook Pro 13" A1278, MacBook Pro 15" A1286', issue: 'Battery (often swollen), hinges, logic board' },
      { series: 'MacBook (Intel, butterfly keyboard)', models: 'MacBook Pro 2016–2019', issue: 'Keyboard fault (known Apple issue), screen' },
    ],
    services: [
      { title: 'Screen Replacement', body: 'Cracked screen on your <strong>MacBook Air M1/M2</strong> or <strong>MacBook Pro 14"</strong>? We replace it with quality parts.' },
      { title: 'Battery Replacement', body: 'Swollen or worn-out battery on your <strong>MacBook Pro 13" A1278</strong> or newer <strong>MacBook Air</strong>? We replace it safely.' },
      { title: 'Keyboard Repair', body: 'Sticky or unresponsive keys on a <strong>MacBook Pro</strong> with the butterfly keyboard (2016–2019)? We fix the known issue.' },
      { title: 'Logic Board & Diagnostics', body: "MacBook won't boot? We diagnose logic board and other hardware faults on both Intel and Apple Silicon models." },
    ],
    whyHeading: 'Why Choose PCKlinik for MacBook Repair?',
    why: [
      { title: 'Experienced Service', body: 'Deep experience with both the latest Apple Silicon models and older Intel MacBooks.' },
      { title: 'Fast Turnaround', body: 'Screen and battery replacement often completed within 1 hour.' },
      { title: 'Fixed Quote Before We Start', body: 'No surprises.' },
      { title: 'Price Guarantee', body: 'We offer a price guarantee on MacBook repairs.' },
    ],
    faq: [
      { q: "Do you replace MacBook Pro speakers if they're distorted?", a: "Yes, speaker issues are diagnosed and repaired." },
      { q: "Can you fix a MacBook that won't recognize the charger?", a: "Yes — could be the charger, the port, or the logic board; we diagnose which." },
      { q: 'Do you repair the latest MacBook Pro with M3 chip?', a: 'Yes, we repair all MacBook models regardless of age or chip.' },
      { q: 'My battery on an old MacBook Pro 13" is swollen — is that dangerous?', a: 'A swollen battery should be replaced as soon as possible. Contact us for free diagnostics and a fixed quote.' },
      { q: 'Can you fix butterfly-keyboard issues on an older MacBook Pro?', a: "Yes, it's a known Apple issue on 2016–2019 models, and we have deep experience with it." },
    ],
    photos: [
      { path: '/images/macbook/air-m2-screen.jpg', alt: 'MacBook Air M2 screen repair Frederiksberg' },
      { path: '/images/macbook/pro-13-battery.jpg', alt: 'MacBook Pro 13 battery replacement' },
      { path: '/images/macbook/butterfly-keyboard.jpg', alt: 'MacBook Pro butterfly keyboard repair' },
    ],
    crosslinks: [{ label: 'Mac (desktop) Repair', href: '/mac-desktop-repair/' }, { label: 'Microsoft Surface Repair', href: '/microsoft-surface-repair/' }],
    ctaPrimary: 'Book MacBook diagnostics',
  },

  // ------------------------------------------------------- MICROSOFT SURFACE
  {
    slug: 'microsoft-surface-repair',
    brand: 'Microsoft Surface',
    title: 'Microsoft Surface Repair: Pro, Laptop, Book | PCKlinik',
    description: 'Microsoft Surface Pro, Surface Laptop and Surface Book repair in Frederiksberg and Copenhagen. Free diagnostics, fixed quote. Call 91 81 61 81.',
    h1: 'Microsoft Surface Repair in Frederiksberg & Copenhagen',
    h2: 'Surface Pro, Surface Laptop and Surface Book — we repair them all',
    intro: [
      'Having problems with your Microsoft Surface? At PCKlinik we repair every Surface model — <strong>Surface Pro 9, Surface Laptop 5, Surface Book 3</strong> and <strong>Surface Laptop Go</strong> — for individuals and businesses in Frederiksberg and Copenhagen. Surface devices take real expertise to repair correctly, given their compact, screen-integrated design.',
      "Whether it's a cracked touch-screen on your <strong>Surface Pro</strong>, a loose hinge on your <strong>Surface Book</strong>, or a charging port acting up on your <strong>Surface Laptop</strong>, we work through it methodically. Diagnostics are free (2–4 days) or express for 600 kr (1–2 hours).",
    ],
    models: [
      { series: 'Surface Pro (2-in-1 tablet)', models: 'Surface Pro 8, Surface Pro 9', issue: 'Touch-screen/digitizer, kickstand hinge, charging port' },
      { series: 'Surface Laptop', models: 'Surface Laptop 4, Surface Laptop 5', issue: 'Screen (known for delamination), battery, keyboard' },
      { series: 'Surface Book (detachable)', models: 'Surface Book 2, Surface Book 3', issue: 'Hinge/detach mechanism, battery' },
      { series: 'Surface Laptop Go', models: 'Surface Laptop Go 2, Go 3', issue: 'Battery, screen' },
    ],
    services: [
      { title: 'Screen & Touch/Digitizer', body: 'Cracked screen or unresponsive touch on your <strong>Surface Pro 9</strong>? We replace screen and digitizer — a more specialized repair than standard screen replacement.' },
      { title: 'Battery Replacement', body: "Battery on your <strong>Surface Laptop</strong> or <strong>Surface Book</strong> not holding a charge? We'll replace it." },
      { title: 'Hinge & Kickstand', body: 'Loose kickstand on your <strong>Surface Pro</strong>, or a detach mechanism acting up on your <strong>Surface Book</strong>? We repair it.' },
      { title: 'Charging Port & Software', body: 'Not charging correctly, or freezing? We diagnose and fix.' },
    ],
    whyHeading: 'Why Choose PCKlinik for Surface Repair?',
    why: [
      { title: 'Specialized Experience', body: 'Surface devices are built differently from standard laptops, requiring specific expertise.' },
      { title: 'Fast Turnaround', body: 'Most Surface repairs done the same day.' },
      { title: 'Fixed Quote Before We Start', body: 'No surprises.' },
      { title: 'Digitizer Repair Experience', body: 'We handle touch and digitizer repairs regularly.' },
    ],
    faq: [
      { q: "Do you repair Surface Pro Type Cover keyboards?", a: "The Type Cover is a separate accessory — we advise on replacement, and repair the Surface's own port if that's the actual issue." },
      { q: "Is Surface repair more expensive than standard laptop repair?", a: "Often somewhat more due to the specialized, tightly integrated design — we always give a fixed quote first." },
      { q: 'Can you repair the touch-screen on a Surface Pro?', a: 'Yes, digitizer and touch-screen repair on the Surface Pro is a specialized process we have experience with.' },
      { q: 'My Surface Laptop screen has dark spots/delamination — can it be fixed?', a: "Yes, it's a known Surface Laptop issue. We diagnose and give a fixed quote on screen replacement." },
      { q: "Do you repair the Surface Book's hinge mechanism?", a: 'Yes, both the standard hinge and the detach mechanism between screen and keyboard.' },
    ],
    photos: [
      { path: '/images/microsoft-surface/pro-9-digitizer.jpg', alt: 'Microsoft Surface Pro 9 screen and digitizer repair Frederiksberg' },
      { path: '/images/microsoft-surface/book-hinge.jpg', alt: 'Surface Book hinge repair' },
      { path: '/images/microsoft-surface/laptop-screen.jpg', alt: 'Surface Laptop screen replacement' },
    ],
    crosslinks: [{ label: 'MacBook Repair', href: '/macbook-repair/' }],
    ctaPrimary: 'Book Surface diagnostics',
  },

  // ----------------------------------------------------------------- SAMSUNG
  {
    slug: 'samsung-repair',
    brand: 'Samsung',
    title: 'Samsung Repair: Galaxy Book Pro, Go | PCKlinik',
    description: 'Samsung Galaxy Book3, Galaxy Book4 Pro and Galaxy Book Go repair in Frederiksberg and Copenhagen. Free diagnostics, fixed quote. Call 91 81 61 81.',
    h1: 'Samsung Repair in Frederiksberg & Copenhagen',
    h2: 'Galaxy Book3, Galaxy Book4 Pro and Galaxy Book Go — we repair them all',
    intro: [
      "Having problems with your Samsung Galaxy Book? At PCKlinik we repair every Samsung laptop model — <strong>Galaxy Book3, Galaxy Book4 Pro, Galaxy Book3 360</strong> and <strong>Galaxy Book Go</strong> — for individuals and businesses in Frederiksberg and Copenhagen. Samsung is a relatively new name in laptops, and we're among the few workshops in Copenhagen with real experience on the brand.",
      "Whether it's a cracked screen on your <strong>Galaxy Book3</strong>, an S Pen not registering on your <strong>Galaxy Book3 360</strong>, or a battery that's run dry, we work through it methodically. Diagnostics are free (2–4 days) or express for 600 kr (1–2 hours).",
    ],
    models: [
      { series: 'Galaxy Book (standard)', models: 'Galaxy Book3, Galaxy Book4', issue: 'Screen, battery' },
      { series: 'Galaxy Book Pro', models: 'Galaxy Book4 Pro, Galaxy Book4 Ultra', issue: 'Screen (AMOLED), battery' },
      { series: 'Galaxy Book 360 (2-in-1)', models: 'Galaxy Book3 360', issue: 'Touch-screen, S Pen faults, hinges' },
      { series: 'Galaxy Book Go (ARM, budget)', models: 'Galaxy Book Go', issue: 'Battery, software' },
    ],
    services: [
      { title: 'Screen Replacement', body: 'Cracked AMOLED screen on your <strong>Galaxy Book4 Pro</strong>? We replace it with quality parts.' },
      { title: 'Battery Replacement', body: "Battery on your <strong>Galaxy Book3</strong> or <strong>Galaxy Book Go</strong> not holding a charge? We'll replace it." },
      { title: 'Touch-Screen & S Pen', body: 'S Pen not registering correctly on your <strong>Galaxy Book3 360</strong>? We diagnose the touch module.' },
      { title: 'Software & Diagnostics', body: 'Freezing or slow? We fix software issues and ensure stable operation.' },
    ],
    whyHeading: 'Why Choose PCKlinik for Samsung Repair?',
    why: [
      { title: 'Early Samsung Experience', body: 'Among the few workshops in Copenhagen with real experience on the Galaxy Book series.' },
      { title: 'Fast Turnaround', body: 'Most Samsung repairs done the same day.' },
      { title: 'Fixed Quote Before We Start', body: 'No surprises.' },
      { title: 'AMOLED Screen Expertise', body: 'We handle the more delicate AMOLED panels with extra care.' },
    ],
    faq: [
      { q: "Do you repair Samsung Galaxy Book hinges?", a: "Yes." },
      { q: "If my S Pen stops working, is that covered under laptop repair?", a: "If the fault is in the Galaxy Book's touch module, yes — contact us and we'll diagnose it." },
      { q: 'Do you repair Samsung Galaxy Book laptops?', a: 'Yes, all models including Galaxy Book3, Book4 Pro and Book Go.' },
      { q: "My S Pen doesn't work on my Galaxy Book3 360 — can it be fixed?", a: 'Yes, we diagnose the touch module and find the cause.' },
      { q: 'Are AMOLED screens more expensive to repair?', a: 'Depends on the damage. We always diagnose first and give a fixed quote before starting.' },
    ],
    photos: [
      { path: '/images/samsung/galaxy-book4-pro-screen.jpg', alt: 'Samsung Galaxy Book4 Pro screen repair Frederiksberg' },
      { path: '/images/samsung/galaxy-book3-360-spen.jpg', alt: 'Samsung Galaxy Book3 360 S Pen repair' },
    ],
    crosslinks: [{ label: 'Microsoft Surface Repair', href: '/microsoft-surface-repair/' }],
    ctaPrimary: 'Book Samsung diagnostics',
  },

  // ------------------------------------------------------------- MAC DESKTOP
  {
    slug: 'mac-desktop-repair',
    brand: 'Desktop Mac',
    title: 'Desktop Mac Repair: iMac, Mac mini, Mac Studio | PCKlinik',
    description: 'iMac, Mac mini, Mac Studio and Mac Pro repair in Frederiksberg and Copenhagen. Free diagnostics, fixed quote. Call 91 81 61 81.',
    h1: 'Desktop Mac Repair in Frederiksberg & Copenhagen',
    h2: 'iMac, Mac mini, Mac Studio and Mac Pro — we repair them all',
    intro: [
      'Having problems with your desktop Mac? At PCKlinik we repair every Mac model — <strong>iMac 24" (M1/M3), iMac 27" (Intel), Mac mini (M2/M4), Mac Studio (M1 Max/Ultra, M2 Max/Ultra)</strong> and <strong>Mac Pro</strong> — for individuals and businesses in Frederiksberg and Copenhagen.',
      "Whether it's an <strong>iMac</strong> that won't boot, a <strong>Mac mini</strong> that's become suspiciously slow, or a <strong>Mac Studio</strong> making unusual fan noise, we work through it methodically. We diagnose your Mac thoroughly and give you a fixed quote before we start — so you always know the cost before we touch the machine. Standard diagnostics are free (2–4 days), or choose express for 600 kr (1–2 hours).",
      'Looking for MacBook (laptop) repair instead? We have a dedicated page for that — <a href="/macbook-repair/">see MacBook repair here</a>.',
    ],
    models: [
      { series: 'iMac', models: 'iMac 24" M1, iMac 24" M3, iMac 27" (Intel, older)', issue: "Won't power on, HDD/SSD faults, screen/backlight, fan noise" },
      { series: 'Mac mini', models: 'Mac mini M2, Mac mini M4, Mac mini (Intel, older)', issue: "Won't boot, SSD faults, slow performance, port issues" },
      { series: 'Mac Studio', models: 'Mac Studio M1 Max/Ultra, Mac Studio M2 Max/Ultra', issue: 'Overheating/fan noise, port issues, slow performance' },
      { series: 'Mac Pro', models: 'Mac Pro 2019 (Intel), Mac Pro M2 Ultra', issue: 'Power supply, GPU faults, RAM faults, boot issues' },
    ],
    services: [
      { title: 'Boot Issues & Diagnostics', body: "Won't your <strong>iMac</strong> or <strong>Mac mini</strong> boot, or does it show a flashing folder? We diagnose hardware and software systematically to find the cause." },
      { title: 'Hard Drive & SSD', body: 'Has your <strong>iMac</strong> or <strong>Mac Pro</strong> become slow, or has the hard drive failed entirely? We upgrade to SSD and recover your data where possible.' },
      { title: 'Screen & Backlight', body: 'Does your <strong>iMac</strong> have spots, dark areas, or uneven backlighting? We replace the display panel.' },
      { title: 'Cooling & Fan Noise', body: 'Is your <strong>Mac Studio</strong> or <strong>Mac Pro</strong> unusually loud, or overheating under heavy load? We clean and repair the cooling system.' },
    ],
    whyHeading: 'Why Choose PCKlinik for Mac Repair?',
    why: [
      { title: 'Experienced Service', body: 'We repair both the latest Apple Silicon models (M1, M2, M3, M4) and older Intel-based Macs.' },
      { title: 'Data Kept Safe', body: 'We never delete data without agreement, and offer backup before repair.' },
      { title: 'Fixed Quote Before We Start', body: 'No surprises.' },
      { title: 'Broad Mac Experience', body: 'From iMac and Mac mini to Mac Studio and Mac Pro.' },
    ],
    faq: [
      { q: "Do you repair iMac power supply issues?", a: "Yes, we diagnose and repair power-related faults on iMac and other desktop Macs." },
      { q: "Can a Mac mini be upgraded with more storage after purchase?", a: "Depends on the model generation — we can advise on what's possible for yours." },
      { q: "My iMac won't boot — what could it be?", a: 'It could be several things, from power supply to hard drive/SSD or logic board. We diagnose systematically and give you a fixed quote before we start.' },
      { q: 'Can you upgrade my older iMac with an SSD?', a: 'Yes, on older Intel iMacs, an SSD upgrade can make a significant difference in speed.' },
      { q: 'My Mac Studio is loud — is that normal?', a: "Not if it's unusually loud. It's often caused by dust in the cooling system, which we can clean and repair." },
      { q: 'Will I lose my data when you repair my Mac?', a: 'No, we never delete data without your permission, and we offer backup if needed.' },
    ],
    photos: [
      { path: '/images/mac/imac-24-repair.jpg', alt: 'iMac 24 repair at PCKlinik Frederiksberg' },
      { path: '/images/mac/mac-mini-ssd.jpg', alt: 'Mac mini SSD upgrade Frederiksberg' },
      { path: '/images/mac/mac-studio-cooling.jpg', alt: 'Mac Studio cooling and fan repair' },
    ],
    crosslinks: [{ label: 'MacBook Repair', href: '/macbook-repair/' }],
    ctaPrimary: 'Book Mac diagnostics',
  },

  // ---------------------------------------------- OTHER BRANDS & CUSTOM BUILDS
  // Catch-all page. No model table / photos / why block by design.
  {
    slug: 'other-brands-repair',
    brand: 'Other Brands & Custom Builds',
    title: 'Other Brands & Custom Build Repair | PCKlinik',
    description: 'Computer repair for Gigabyte, LG gram, Razer, custom-built desktops and any brand not listed — Frederiksberg and Copenhagen. Free diagnostics, fixed quote.',
    h1: 'Other Brands & Custom Build Repair',
    h2: "Don't see your brand listed? We repair it anyway.",
    intro: [
      "We repair every computer brand and setup, not just the ones with dedicated pages — including <strong>Gigabyte, Chromebook, MSI's less common lines, and other less-common brands</strong>, and fully <strong>custom-built desktop PCs</strong>. Whether it's a laptop from a brand we haven't listed individually, or a custom gaming rig built from scratch, we approach it the same way: thorough diagnostics, then a fixed quote before we start.",
      'Standard diagnostics are free (2–4 days), or express for 600 kr (1–2 hours) — with repair and delivery within 24 hours if no special parts need ordering.',
    ],
    services: [
      { title: 'Screen Replacement', body: 'Cracked or damaged screen, any brand.' },
      { title: 'Battery Replacement', body: "Won't hold a charge? We source batteries for brands beyond the major names too." },
      { title: 'Custom Desktop Repair', body: 'Built your own PC, or bought one custom-built? We diagnose and repair custom builds — GPU, cooling, motherboard issues included.' },
      { title: 'Diagnostics & Troubleshooting', body: "Not sure what's wrong, or don't see your brand listed? Bring it in — we'll figure it out." },
    ],
    faq: [
      { q: 'Do you repair brands not listed on your website?', a: 'Yes, we repair virtually every computer brand and custom-built setup, not just the ones with dedicated pages.' },
      { q: 'Can you fix a custom-built gaming PC?', a: 'Yes, including GPU, cooling, and motherboard diagnostics on custom builds.' },
      { q: 'Do you repair Gigabyte laptops?', a: 'Yes — Gigabyte (including their AORUS gaming line) is covered here, alongside any other brand not individually listed.' },
      { q: 'Do you repair Chromebooks?', a: 'Yes, across brands — Chromebook-specific issues (software, battery, screen) are handled the same way as any other laptop.' },
      { q: "I have a laptop from a brand I've genuinely never heard mentioned anywhere on your site — will you still take a look?", a: "Yes — this page exists specifically for that situation. Bring it in, we'll diagnose it the same way as any other brand." },
      { q: 'Do custom-built desktop PCs get the same free/express diagnostics pricing as branded laptops?', a: "Yes, the same pricing model applies regardless of whether it's a major brand, a lesser-known brand, or a custom build." },
    ],
    crosslinks: [{ label: 'MSI Repair', href: '/msi-repair/' }, { label: 'Mac (desktop) Repair', href: '/mac-desktop-repair/' }],
    ctaPrimary: 'Book diagnostics',
    ctaHeading: 'Got a brand we didn’t list, or a custom build?',
  },
  // ------------------------------------------------------- TOSHIBA / DYNABOOK
  {
    slug: 'toshiba-dynabook-repair',
    brand: 'Toshiba & Dynabook',
    title: 'Toshiba & Dynabook Repair | PCKlinik',
    description: 'Toshiba and Dynabook laptop repair — Satellite, Portégé, Tecra — in Frederiksberg and Copenhagen. Free diagnostics, fixed quote.',
    h1: 'Toshiba & Dynabook Repair in Frederiksberg & Copenhagen',
    h2: 'Satellite, Portégé, Tecra, and older Toshiba models',
    intro: [
      "Toshiba's laptop business was acquired by Sharp and rebranded as Dynabook, but we repair both the older Toshiba-branded models and the newer Dynabook lines. Whether it's an older Satellite that's still going strong, or a business-focused Portégé or Tecra, we diagnose and repair them the same way as every other brand.",
      'Standard diagnostics are free (2–4 days), or express for 600 kr (1–2 hours) — with repair and delivery within 24 hours if no special parts need ordering.',
    ],
    models: [
      { series: 'Satellite (consumer)', models: 'Satellite Pro, Satellite C/L series', issue: 'Battery, screen, slow performance' },
      { series: 'Portégé (ultraportable business)', models: 'Portégé X30, Portégé Z30', issue: 'Screen, hinges, battery' },
      { series: 'Tecra (business)', models: 'Tecra A50, Tecra X40', issue: 'Battery, keyboard, screen' },
    ],
    services: [
      { title: 'Screen Replacement', body: 'Cracked or damaged screen on any Toshiba/Dynabook model.' },
      { title: 'Battery Replacement', body: "Won't hold a charge? We source batteries even for older Toshiba models." },
      { title: 'Keyboard & Hinges', body: 'Common wear points on older Satellite and business-line models.' },
      { title: 'Diagnostics & Software', body: 'Slow performance or software issues, diagnosed and fixed.' },
    ],
    whyHeading: 'Why Choose PCKlinik for Toshiba & Dynabook Repair?',
    why: [
      { title: 'Old and new', body: 'We repair both legacy Toshiba models and current Dynabook lines.' },
      { title: 'Fast Turnaround', body: 'Most repairs done the same day.' },
      { title: 'Fixed Quote Before We Start', body: 'No surprises.' },
      { title: 'Parts Sourcing', body: 'We source batteries and parts even for older models, where available.' },
    ],
    faq: [
      { q: 'Do you still repair older Toshiba models, or only newer Dynabook ones?', a: "Both — age doesn't stop us from repairing it, as long as parts are available." },
      { q: 'Is Dynabook the same company as Toshiba?', a: "Dynabook is the rebranded successor to Toshiba's laptop business (acquired by Sharp) — we repair both under the same service." },
    ],
    crosslinks: [{ label: 'Other Brands & Custom Builds', href: '/other-brands-repair/' }, { label: 'Computerreparation i København', href: '/computerreparation-koebenhavn/' }],
    ctaPrimary: 'Book Toshiba diagnostics',
  },

  // ------------------------------------------------------------------ FUJITSU
  {
    slug: 'fujitsu-repair', brand: 'Fujitsu',
    title: 'Fujitsu Laptop Repair | PCKlinik',
    description: 'Fujitsu LIFEBOOK repair in Frederiksberg and Copenhagen. We also sell refurbished Fujitsu laptops. Free diagnostics, fixed quote.',
    h1: 'Fujitsu Repair in Frederiksberg & Copenhagen',
    h2: 'LIFEBOOK and other Fujitsu laptops — a brand we know well',
    intro: [
      "Fujitsu makes reliable, business-focused laptops that don't get as much attention as the bigger brands — but we know them well. We both repair Fujitsu laptops and sell refurbished Fujitsu units in our shop, so we're genuinely familiar with common failure points across their lineup, not just repairing them occasionally.",
      'Standard diagnostics are free (2–4 days), or express for 600 kr (1–2 hours) — with repair and delivery within 24 hours if no special parts need ordering.',
    ],
    models: [
      { series: 'LIFEBOOK (business)', models: 'LIFEBOOK U, LIFEBOOK E series', issue: 'Battery, screen, keyboard' },
      { series: 'LIFEBOOK (consumer/general)', models: 'LIFEBOOK A series', issue: 'Slow performance, battery, screen' },
    ],
    services: [
      { title: 'Screen Replacement', body: 'Cracked or damaged screens on any Fujitsu LIFEBOOK model.' },
      { title: 'Battery Replacement', body: 'Common on older LIFEBOOK units — we source replacements.' },
      { title: 'Keyboard Repair', body: 'Sticky or unresponsive keys, a frequent issue on well-used business units.' },
      { title: 'Diagnostics & Performance', body: 'Slow performance or software issues, diagnosed and fixed.' },
    ],
    whyHeading: 'Why Choose PCKlinik for Fujitsu Repair?',
    why: [
      { title: 'We know Fujitsu', body: 'We sell refurbished Fujitsu units, so we know the common issues first-hand.' },
      { title: 'Fast Turnaround', body: 'Most repairs done the same day.' },
      { title: 'Fixed Quote Before We Start', body: 'No surprises.' },
      { title: 'Parts Sourcing', body: 'Fujitsu parts are less common, but we have experience finding what is needed.' },
    ],
    faq: [
      { q: "Do you have refurbished Fujitsu laptops in stock right now?", a: "Stock varies — check our Shop page for current availability, or contact us directly." },
      { q: 'Do you actually see many Fujitsu laptops, or is this a rare request?', a: "We see them regularly — we sell refurbished Fujitsu units ourselves, so we're already familiar with the common issues." },
      { q: 'Are Fujitsu parts hard to source?', a: 'Less common than Lenovo/HP/Dell, but we have experience finding what is needed.' },
    ],
    crosslinks: [{ label: 'Refurbished Computers', href: '/shop/computers/refurbished/' }, { label: 'Other Brands & Custom Builds', href: '/other-brands-repair/' }],
    ctaPrimary: 'Book Fujitsu diagnostics',
  },
  // ------------------------------------------------------------------- LG GRAM
  {
    slug: 'lg-gram-repair', brand: 'LG gram',
    title: 'LG gram Laptop Repair | PCKlinik',
    description: 'LG gram laptop repair in Frederiksberg and Copenhagen. Screen, battery, keyboard. Free diagnostics, fixed quote.',
    h1: 'LG gram Repair in Frederiksberg & Copenhagen',
    h2: 'Ultra-lightweight laptops, properly repaired',
    intro: [
      "LG gram laptops are known for being exceptionally lightweight without sacrificing screen size — popular with students and professionals who travel often. That lightweight build uses different internal engineering than most laptops, which we've got experience with.",
      'Standard diagnostics are free (2–4 days), or express for 600 kr (1–2 hours) — with repair and delivery within 24 hours if no special parts need ordering.',
    ],
    services: [
      { title: 'Screen Replacement', body: "LG gram's large, thin displays repaired properly." },
      { title: 'Battery Replacement', body: 'Restore original battery life.' },
      { title: 'Hinge Repair', body: 'The ultra-light chassis design means hinges are a more common wear point than on heavier laptops.' },
      { title: 'Keyboard & Trackpad', body: 'Repair or replacement as needed.' },
    ],
    whyHeading: 'Why Choose PCKlinik for LG gram Repair?',
    why: [
      { title: 'Thin-chassis experience', body: 'We have the right tools and care for the ultra-light build.' },
      { title: 'Fast Turnaround', body: 'Most repairs done the same day.' },
      { title: 'Fixed Quote Before We Start', body: 'No surprises.' },
      { title: 'All generations', body: 'We repair both older and newer LG gram models.' },
    ],
    faq: [
      { q: "Is LG gram repair more expensive because of its unique lightweight design?", a: "Not necessarily more expensive, but it does require more careful handling due to the thin chassis — we always diagnose first and give a fixed quote before any work starts." },
      { q: 'Is LG gram harder to repair because it is so lightweight?', a: 'It requires care due to the thin chassis, but we have the right tools and experience for it.' },
      { q: 'Do you repair both older and newer LG gram models?', a: 'Yes, regardless of generation.' },
    ],
    crosslinks: [{ label: 'Other Brands & Custom Builds', href: '/other-brands-repair/' }, { label: 'Computerreparation i København', href: '/computerreparation-koebenhavn/' }],
    ctaPrimary: 'Book LG gram diagnostics',
  },
  // --------------------------------------------------------------- RAZER BLADE
  {
    slug: 'razer-blade-repair', brand: 'Razer Blade',
    title: 'Razer Blade Laptop Repair | PCKlinik',
    description: 'Razer Blade gaming laptop repair in Frederiksberg and Copenhagen. Screen, cooling, battery. Free diagnostics, fixed quote.',
    h1: 'Razer Blade Repair in Frederiksberg & Copenhagen',
    h2: 'Premium gaming laptops, repaired properly',
    intro: [
      'Razer Blade laptops pack high-performance gaming hardware into a thin aluminum chassis — which means cooling and thermal management matter even more than on typical gaming laptops. We repair Razer Blade screens, cooling systems, batteries, and more.',
      'Standard diagnostics are free (2–4 days), or express for 600 kr (1–2 hours) — with repair and delivery within 24 hours if no special parts need ordering.',
    ],
    services: [
      { title: 'Cooling & Thermal Service', body: 'The thin chassis design makes proper cooling maintenance especially important on Razer Blade models.' },
      { title: 'Screen Replacement', body: 'High-refresh-rate displays repaired with quality parts.' },
      { title: 'Battery Replacement', body: 'Restore battery life on older units.' },
      { title: 'GPU Diagnostics', body: 'Artifacting or crashes under load, diagnosed and repaired.' },
    ],
    whyHeading: 'Why Choose PCKlinik for Razer Blade Repair?',
    why: [
      { title: 'Thin-and-light gaming experience', body: 'We know the compact aluminum chassis and its thermal demands.' },
      { title: 'Fast Turnaround', body: 'Most repairs done the same day.' },
      { title: 'Fixed Quote Before We Start', body: 'No surprises.' },
      { title: 'All models', body: 'Standard and Studio Edition Razer Blade models.' },
    ],
    faq: [
      { q: "Do you repair Razer Blade's RGB keyboard lighting if it stops working?", a: "Yes — RGB lighting issues are diagnosed the same way as any other keyboard-related fault." },
      { q: 'Is a Razer Blade harder to repair than other gaming laptops?', a: 'The compact aluminum chassis requires more care, but we have experience with thin-and-light gaming laptop designs.' },
      { q: 'Do you work on both the standard and Studio Edition Razer Blade models?', a: 'Yes.' },
    ],
    crosslinks: [{ label: 'Gaming PCs & Custom Builds', href: '/gaming-pc-repair-and-build/' }, { label: 'Other Brands & Custom Builds', href: '/other-brands-repair/' }],
    ctaPrimary: 'Book Razer Blade diagnostics',
  },

];
