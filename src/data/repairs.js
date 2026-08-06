// ============================================================================
// Reparationssider — 16 mærke-/enhedssider renderet af én skabelon (repairBody).
// Native dansk indhold. Mærke- og modelnavne bevares på engelsk efter normal
// dansk konvention. Billeder ligger under /images/<slug>/ så en placeholder kan
// udskiftes med et rigtigt foto ved at erstatte én fil — ingen kodeændring.
// ============================================================================

export const repairs = [
  // ------------------------------------------------------------------ LENOVO
  {
    slug: 'lenovo-reparation',
    brand: 'Lenovo',
    title: 'Lenovo-reparation: ThinkPad T14, IdeaPad, Legion | PCKlinik',
    description: 'Reparation af Lenovo ThinkPad, IdeaPad og Legion på Frederiksberg og i København. Fejlsøgning fra 300 kr. Ring 91 81 61 81.',
    h1: 'Lenovo-reparation på Frederiksberg & København',
    h2: 'ThinkPad, IdeaPad, Legion, Yoga og ThinkBook — vi reparerer dem alle',
    intro: [
      'Har du problemer med din Lenovo? Hos PCKlinik reparerer vi alle Lenovo-serier — <strong>ThinkPad T14, T14s, T16, X1 Carbon, X1 Yoga og P16</strong>, <strong>IdeaPad 3, IdeaPad 5 og IdeaPad Slim</strong>, <strong>Legion 5 og Legion Pro</strong> samt <strong>Yoga 7, Yoga Slim</strong> og <strong>ThinkBook</strong> — for privatpersoner og virksomheder på Frederiksberg og i København.',
      'Uanset om det er en revnet skærm på din <strong>ThinkPad T14</strong>, et løst hængsel på din <strong>X1 Carbon</strong>, et batteri, der har givet op på din <strong>IdeaPad 5</strong>, eller en <strong>Legion</strong>, der overopheder under belastning, arbejder vi os metodisk igennem det.',
      'Vi laver en grundig fejlsøgning af din Lenovo og giver dig en fast pris, før vi går i gang — så du altid kender prisen, før vi rører ved maskinen. Standardfejlsøgning koster 300 kr. (3–4 dage), eller vælg ekspres for 600 kr. (1–2 timer) — reparationen klar inden for 24 timer, hvis der ikke skal bestilles specielle reservedele. Reparationen foregår direkte på vores værksted på Falkoner Allé.',
    ],
    models: [
      { series: 'ThinkPad T-serie (erhverv)', models: 'T14, T14s, T14 Gen 4, T16', issue: 'Hængselskade, skærmudskiftning, tastatur, batteri' },
      { series: 'ThinkPad X-serie (ultrabærbar)', models: 'X1 Carbon, X1 Yoga, X13', issue: 'Skærm, hængsler, touchpanel (X1 Yoga)' },
      { series: 'ThinkPad P-serie (workstation)', models: 'P16, P1, P14s', issue: 'Skærm, køling/blæser, bundkort, grafikkortfejl' },
      { series: 'ThinkBook', models: 'ThinkBook 14, ThinkBook 15', issue: 'Batteri, skærm, langsom ydelse' },
      { series: 'IdeaPad (forbruger)', models: 'IdeaPad 3, IdeaPad 5, IdeaPad Slim 3', issue: 'Batteriskift, langsom ydelse, softwareproblemer, opstartsproblemer' },
      { series: 'Legion (gaming)', models: 'Legion 5, Legion 5 Pro, Legion Slim 5', issue: 'Køling, skærm, batteri under belastning, blæserstøj' },
      { series: 'Yoga (2-i-1)', models: 'Yoga 7, Yoga 9i, Yoga Slim 7', issue: 'Touchskærm-reparation (adskiller sig fra almindelig skærmudskiftning), hængsler' },
    ],
    services: [
      { title: 'Skærmudskiftning', body: 'Revnet eller beskadiget skærm på din <strong>ThinkPad T14, T14s, T16</strong> eller <strong>IdeaPad 3/5</strong>? Vi skifter den hurtigt med kvalitetsdele. Har du en <strong>Yoga 7</strong> eller <strong>X1 Yoga</strong> med touchfunktion? Vi klarer også udskiftning af touchpanel.' },
      { title: 'Batteriskift', body: 'Holder batteriet på din <strong>IdeaPad 3, IdeaPad 5, ThinkPad T14</strong> eller <strong>Legion 5</strong> ikke længere på strøm? Vi skifter det og genskaber ordentlig batterilevetid.' },
      { title: 'Hængsler & kabinet', body: 'Løse eller revnede hængsler er en klassisk fejl på <strong>ThinkPad T14, T16, X1 Carbon</strong> og <strong>X1 Yoga</strong>. Vi reparerer eller udskifter hængsler og kabinetdele, så låget lukker og sidder ordentligt igen.' },
      { title: 'Køling & ydelse', body: 'Fryser eller genstarter maskinen under gaming eller tunge opgaver på din <strong>Legion 5, Legion 5 Pro</strong> eller <strong>ThinkPad P16</strong>? Vi renser og reparerer kølesystemet og retter softwareproblemer, der giver ustabilitet på <strong>IdeaPad</strong>- og <strong>ThinkBook</strong>-modeller.' },
    ],
    whyHeading: 'Hvorfor vælge PCKlinik til Lenovo-reparation?',
    whyIntro: 'Med tusindvis af gennemførte reparationer og tilfredse kunder er PCKlinik dit oplagte valg til reparation af <strong>ThinkPad, IdeaPad, Legion, Yoga</strong> og <strong>ThinkBook</strong> på Frederiksberg og i København.',
    why: [
      { title: 'Erfaren service', body: 'Solid erfaring med ThinkPad T14/T14s, X1 Carbon, IdeaPad 3/5, Legion 5 og Yoga-modeller.' },
      { title: 'Hurtig ekspedition', body: 'Vælger du ekspres, er din Lenovo klar inden for 24 timer — uanset om det er en T14 eller en Legion 5 Pro. Standard tager 3–4 dage.' },
      { title: 'Fast pris, før vi starter', body: 'Ingen overraskelser.' },
      { title: 'Rigtige mennesker, rigtig ekspertise', body: 'Et ægte team, ikke et callcenter — du får altid et ærligt svar fra en, der ved, hvad de taler om.' },
    ],
    faq: [
      { q: 'Giver I garanti specifikt på reparation af ThinkPad-hængsler?', a: 'Ja, samme garanti som på enhver anden reparation.' },
      { q: 'Kan I reparere en Lenovo, der ikke vil lade op over en bestemt procent?', a: 'Som regel et batteriproblem — vi laver fejlsøgning og skifter efter behov.' },
      { q: 'Hvad koster det at skifte skærmen på en Lenovo ThinkPad T14?', a: 'Det afhænger af skaden og modellen. Fejlsøgning koster 300 kr. (3–4 dage) — eller ekspres for 600 kr. (1–2 timer). Vi giver dig en fast pris bagefter, så du kender prisen, før reparationen går i gang.' },
      { q: 'Kan I reparere hængsler på en ThinkPad X1 Carbon?', a: 'Ja, hængselskader er en af de mest almindelige fejl på X1 Carbon og X1 Yoga. Vi udskifter eller reparerer hængsler, så låget lukker korrekt igen.' },
      { q: 'Min Legion 5 overopheder under gaming — kan I hjælpe?', a: 'Ja. Overophedning på Legion-modeller skyldes som regel støv i kølesystemet eller en blæser, der skal skiftes. Vi renser og reparerer køling på alle Legion-modeller.' },
      { q: 'Reparerer I IdeaPad 3 og IdeaPad 5?', a: 'Ja, vi reparerer alle IdeaPad-modeller — skærm, batteri og softwareproblemer som langsom opstart eller systemnedbrud.' },
    ],
    photos: [
      { path: '/images/lenovo/thinkpad-t14-repair.jpg', alt: 'Lenovo ThinkPad T14 skærmreparation Frederiksberg' },
      { path: '/images/lenovo/x1-carbon-hinge.jpg', alt: 'Lenovo ThinkPad X1 Carbon hængselreparation' },
      { path: '/images/lenovo/legion-5-cooling.jpg', alt: 'Lenovo Legion 5 køling og blæserreparation' },
    ],
    crosslinks: [{ label: 'HP-reparation', href: '/hp-reparation/' }, { label: 'Dell-reparation', href: '/dell-reparation/' }],
    ctaPrimary: 'Kom forbi med din enhed',
  },

  // -------------------------------------------------------------------- ACER
  {
    slug: 'acer-reparation',
    brand: 'Acer',
    title: 'Acer-reparation: Aspire, Nitro, Swift | PCKlinik',
    description: 'Reparation af Acer Aspire 5, Nitro 5, Swift og Predator på Frederiksberg og i København. Fejlsøgning fra 300 kr., fast pris. Ring 91 81 61 81.',
    h1: 'Acer-reparation på Frederiksberg & København',
    h2: 'Aspire, Nitro, Swift og Predator — vi reparerer dem alle',
    intro: [
      'Har du problemer med din Acer? Hos PCKlinik reparerer vi alle Acer-serier — <strong>Aspire 3, Aspire 5, Nitro 5, Swift 3, Swift 5</strong> og <strong>Predator Helios</strong> — for privatpersoner og virksomheder på Frederiksberg og i København. Acer er kendt som et af de mest driftssikre og prisvenlige mærker at reparere, da reservedele generelt er tilgængelige og billige.',
      'Uanset om det er en revnet skærm på din <strong>Aspire 5</strong>, et løbet tørt batteri på din <strong>Swift 3</strong> eller en <strong>Nitro 5</strong>, der overopheder under gaming, arbejder vi os metodisk igennem det. Fejlsøgning koster 300 kr. (3–4 dage) eller ekspres for 600 kr. (1–2 timer).',
    ],
    models: [
      { series: 'Aspire (hverdag)', models: 'Aspire 3, Aspire 5, Aspire 7', issue: 'Batteriskift, langsom ydelse, skærm' },
      { series: 'Swift (ultrabærbar)', models: 'Swift 3, Swift 5, Swift Go', issue: 'Skærm, hængsler, batteri' },
      { series: 'Nitro (budget-gaming)', models: 'Nitro 5, Nitro 16', issue: 'Køling, blæserstøj, skærm' },
      { series: 'Predator (high-end gaming)', models: 'Predator Helios, Predator Triton', issue: 'Køling, GPU-fejl, skærm' },
      { series: 'Chromebook', models: 'Acer Chromebook 315', issue: 'Software-/OS-problemer, batteri' },
    ],
    services: [
      { title: 'Skærmudskiftning', body: 'Revnet skærm på din <strong>Aspire 5</strong> eller <strong>Swift 3</strong>? Hurtig udskiftning med kvalitetsdele.' },
      { title: 'Batteriskift', body: 'Holder batteriet på din <strong>Aspire 3</strong> eller <strong>Swift 5</strong> ikke på strøm? Det skifter vi.' },
      { title: 'Køling & blæser', body: 'Overopheder din <strong>Nitro 5</strong> eller <strong>Predator Helios</strong> under gaming? Vi renser og reparerer kølesystemet.' },
      { title: 'Software & fejlsøgning', body: 'Langsom opstart eller systemnedbrud på din <strong>Aspire</strong>? Vi retter softwareproblemer og optimerer ydelsen.' },
    ],
    whyHeading: 'Hvorfor vælge PCKlinik til Acer-reparation?',
    why: [
      { title: 'Erfaren service', body: 'Solid erfaring med Aspire, Swift, Nitro og Predator.' },
      { title: 'Hurtig ekspedition', body: 'Vælger du ekspres, er din Acer-reparation klar inden for 24 timer. Standard tager 3–4 dage.' },
      { title: 'Fast pris, før vi starter', body: 'Ingen overraskelser.' },
      { title: 'Prisvenligt', body: 'Acer-reservedele er billige, og det kommer dig til gode.' },
    ],
    faq: [
      { q: 'Reparerer I Acer Chromebooks, eller kun Windows-modeller?', a: 'Begge dele.' },
      { q: 'Er køling i Acer Predator anderledes end i almindelige bærbare?', a: 'Ja, højtydende systemer kræver mere omhyggelig rensning og påføring af kølepasta, hvilket vi har erfaring med.' },
      { q: 'Hvad koster det at skifte batteriet på en Acer Aspire 5?', a: 'Fejlsøgning koster 300 kr. (3–4 dage) eller ekspres for 600 kr. (1–2 timer). Du får en fast pris, før reparationen går i gang.' },
      { q: 'Kan I reparere en Acer Nitro 5, der overopheder?', a: 'Ja, overophedning på Nitro- og Predator-modeller skyldes som regel støv eller en blæser.' },
      { q: 'Reparerer I ældre Acer Aspire-modeller?', a: 'Ja, uanset alder, så længe der er reservedele.' },
    ],
    photos: [
      { path: '/images/acer/aspire-5-screen.jpg', alt: 'Acer Aspire 5 skærmreparation Frederiksberg' },
      { path: '/images/acer/nitro-5-cooling.jpg', alt: 'Acer Nitro 5 køling og blæserreparation' },
      { path: '/images/acer/swift-3-repair.jpg', alt: 'Acer Swift 3 skærmudskiftning' },
    ],
    crosslinks: [{ label: 'Asus-reparation', href: '/asus-reparation/' }, { label: 'MSI-reparation', href: '/msi-reparation/' }],
    ctaPrimary: 'Kom forbi med din enhed',
  },

  // ---------------------------------------------------------------------- HP
  {
    slug: 'hp-reparation',
    brand: 'HP',
    title: 'HP-reparation: EliteBook, Pavilion, Spectre | PCKlinik',
    description: 'Reparation af HP EliteBook 840, Pavilion, Spectre x360 og Omen på Frederiksberg og i København. Fejlsøgning fra 300 kr., fast pris. Ring 91 81 61 81.',
    h1: 'HP-reparation på Frederiksberg & København',
    h2: 'EliteBook, Pavilion, Spectre og Omen — vi reparerer dem alle',
    intro: [
      'Har du problemer med din HP? Hos PCKlinik reparerer vi alle HP-serier — <strong>EliteBook 840, EliteBook 850, Pavilion, Spectre x360</strong> og <strong>Omen</strong> — for privatpersoner og virksomheder på Frederiksberg og i København. HP er et af de mest udbredte mærker på danske kontorer, og vi har solid erfaring med både erhvervs- og forbrugerserierne.',
      'Uanset om det er en revnet skærm på din <strong>Pavilion</strong>, et løst hængsel på din <strong>Spectre x360</strong> eller en <strong>EliteBook</strong>, der ikke vil starte, arbejder vi os metodisk igennem det. Fejlsøgning koster 300 kr. (3–4 dage) eller ekspres for 600 kr. (1–2 timer).',
    ],
    models: [
      { series: 'EliteBook (erhverv)', models: 'EliteBook 840, EliteBook 850', issue: 'Tastatur, skærm, hængsler, batteri' },
      { series: 'ProBook (mellemklasse erhverv)', models: 'ProBook 450, ProBook 440', issue: 'Batteri, skærm, langsom ydelse' },
      { series: 'Pavilion (forbruger)', models: 'Pavilion 15, Pavilion x360', issue: 'Batteriskift, softwareproblemer' },
      { series: 'Spectre (premium 2-i-1)', models: 'Spectre x360', issue: 'Touchskærm, hængsler' },
      { series: 'Omen (gaming)', models: 'Omen 16, Omen 17', issue: 'Køling, skærm, GPU-fejl' },
    ],
    services: [
      { title: 'Skærmudskiftning', body: 'Revnet skærm på din <strong>EliteBook 840</strong> eller <strong>Pavilion 15</strong>? Hurtig udskiftning. Touchskærme på <strong>Spectre x360</strong> håndteres særskilt.' },
      { title: 'Batteriskift', body: 'Holder batteriet på din <strong>EliteBook</strong> eller <strong>Pavilion</strong> ikke på strøm? Det skifter vi.' },
      { title: 'Tastatur & hængsler', body: 'Klistrede taster eller løse hængsler på din <strong>EliteBook 840</strong>? Vi reparerer eller udskifter.' },
      { title: 'Køling & ydelse', body: 'Overopheder din <strong>Omen 16</strong> under gaming? Vi renser kølesystemet og retter softwareproblemer.' },
    ],
    whyHeading: 'Hvorfor vælge PCKlinik til HP-reparation?',
    why: [
      { title: 'Erfaren service', body: 'Bred erfaring med EliteBook, ProBook, Pavilion, Spectre og Omen.' },
      { title: 'Hurtig ekspedition', body: 'Vælger du ekspres, er din HP-reparation klar inden for 24 timer. Standard tager 3–4 dage.' },
      { title: 'Fast pris, før vi starter', body: 'Ingen overraskelser.' },
      { title: 'Erfaring med erhverv', body: 'Vi kender EliteBook- og ProBook-serierne godt fra erhvervskunder.' },
    ],
    faq: [
      { q: 'Kan I reparere et revnet hængsel på en HP Spectre x360?', a: 'Ja, 2-i-1-hængsler er en reparation, vi håndterer jævnligt.' },
      { q: 'Understøtter I ældre HP EliteBook-modeller, der ikke længere sælges nye?', a: 'Ja, alder stopper os ikke, hvis der er reservedele.' },
      { q: 'Reparerer I HP EliteBook til virksomheder?', a: 'Ja, vi har solid erfaring med erhvervsmodeller som EliteBook 840 og 850.' },
      { q: 'Kan I skifte touchskærmen på en HP Spectre x360?', a: 'Ja, touchskærm-reparation på Spectre x360 er en anden proces end almindelig skærmudskiftning.' },
      { q: 'Min Omen overopheder — kan I hjælpe?', a: 'Ja, vi renser og reparerer køling på Omen-modeller.' },
    ],
    photos: [
      { path: '/images/hp/elitebook-840-screen.jpg', alt: 'HP EliteBook 840 skærmreparation Frederiksberg' },
      { path: '/images/hp/spectre-x360-hinge.jpg', alt: 'HP Spectre x360 hængselreparation' },
      { path: '/images/hp/omen-cooling.jpg', alt: 'HP Omen blæserrensning og kølereparation' },
    ],
    crosslinks: [{ label: 'Lenovo-reparation', href: '/lenovo-reparation/' }, { label: 'Dell-reparation', href: '/dell-reparation/' }],
    ctaPrimary: 'Kom forbi med din enhed',
  },

  // -------------------------------------------------------------------- DELL
  {
    slug: 'dell-reparation',
    brand: 'Dell',
    title: 'Dell-reparation: XPS, Latitude, Inspiron | PCKlinik',
    description: 'Reparation af Dell XPS 13/15, Latitude, Inspiron og Precision på Frederiksberg og i København. Fejlsøgning fra 300 kr., fast pris. Ring 91 81 61 81.',
    h1: 'Dell-reparation på Frederiksberg & København',
    h2: 'XPS, Latitude, Inspiron og Precision — vi reparerer dem alle',
    intro: [
      'Har du problemer med din Dell? Hos PCKlinik reparerer vi alle Dell-serier — <strong>XPS 13, XPS 15, Latitude 5440, Latitude 7440, Inspiron 15</strong> og <strong>Precision</strong>-workstations — for privatpersoner og virksomheder på Frederiksberg og i København.',
      'Uanset om det er et løst hængsel på din <strong>XPS 13</strong> (et velkendt svagt punkt hos Dell), et løbet tørt batteri på din <strong>Inspiron</strong> eller en <strong>Latitude</strong>, der driller på arbejdet, arbejder vi os metodisk igennem det. Fejlsøgning koster 300 kr. (3–4 dage) eller ekspres for 600 kr. (1–2 timer).',
    ],
    models: [
      { series: 'XPS (premium forbruger)', models: 'XPS 13, XPS 15', issue: 'Hængsler, skærm, batteri' },
      { series: 'Latitude (erhverv)', models: 'Latitude 5440, Latitude 7440, Latitude 5540', issue: 'Tastatur, batteri, skærm' },
      { series: 'Inspiron (budget-forbruger)', models: 'Inspiron 15, Inspiron 14', issue: 'Batteriskift, langsom ydelse' },
      { series: 'Precision (workstation)', models: 'Precision 5570, Precision 3580', issue: 'Skærm, køling, grafikkort' },
      { series: 'Alienware (gaming)', models: 'Alienware m16, Alienware x14', issue: 'Køling, GPU-fejl, skærm' },
    ],
    services: [
      { title: 'Skærmudskiftning', body: 'Revnet skærm på din <strong>XPS 13</strong> eller <strong>Inspiron 15</strong>? Hurtig udskiftning med kvalitetsdele.' },
      { title: 'Hængsler & kabinet', body: 'Løse hængsler er et kendt svagt punkt på <strong>XPS 13/15</strong>. Vi reparerer eller udskifter.' },
      { title: 'Batteriskift', body: 'Holder batteriet på din <strong>Latitude</strong> eller <strong>Inspiron</strong> ikke på strøm? Det skifter vi.' },
      { title: 'Køling & ydelse', body: 'Overopheder din <strong>Precision</strong> eller <strong>Alienware</strong> under tung belastning? Vi renser kølesystemet.' },
    ],
    whyHeading: 'Hvorfor vælge PCKlinik til Dell-reparation?',
    why: [
      { title: 'Erfaren service', body: 'Bred erfaring med XPS, Latitude, Inspiron og Precision.' },
      { title: 'Hurtig ekspedition', body: 'Vælger du ekspres, er din Dell-reparation klar inden for 24 timer. Standard tager 3–4 dage.' },
      { title: 'Fast pris, før vi starter', body: 'Ingen overraskelser.' },
      { title: 'Erfaring med erhverv', body: 'Vi kender Latitude-serien godt fra erhvervskunder.' },
    ],
    faq: [
      { q: 'Er hængselproblemet på XPS 13 dækket af Dells egen garanti, eller betaler jeg selv?', a: 'Det afhænger af din garantistatus hos Dell — vi reparerer det uanset hvad, men garantidækning er mellem dig og Dell.' },
      { q: 'Reparerer I Dell Precision-workstations?', a: 'Ja, inklusive grafikkort- og kølefejlsøgning på maskiner i workstation-klassen.' },
      { q: 'Er XPS 13 kendt for hængselproblemer?', a: 'Ja, det er en af de mest almindelige Dell-fejl, vi ser, og vi reparerer den hurtigt.' },
      { q: 'Reparerer I Dell Latitude til virksomheder?', a: 'Ja, solid erfaring med Latitude 5440, 7440 og lignende erhvervsmodeller.' },
      { q: 'Min Precision-workstation er langsom — kan I hjælpe?', a: 'Ja, vi fejlsøger både hardware og software på Precision-modeller.' },
    ],
    photos: [
      { path: '/images/dell/xps-13-hinge.jpg', alt: 'Dell XPS 13 hængselreparation Frederiksberg' },
      { path: '/images/dell/latitude-7440-battery.jpg', alt: 'Dell Latitude 7440 batteriskift' },
      { path: '/images/dell/inspiron-screen.jpg', alt: 'Dell Inspiron skærmudskiftning' },
    ],
    crosslinks: [{ label: 'HP-reparation', href: '/hp-reparation/' }, { label: 'Lenovo-reparation', href: '/lenovo-reparation/' }],
    ctaPrimary: 'Kom forbi med din enhed',
  },

  // -------------------------------------------------------------------- ASUS
  {
    slug: 'asus-reparation',
    brand: 'Asus',
    title: 'Asus-reparation: ZenBook, ROG, Vivobook | PCKlinik',
    description: 'Reparation af Asus ZenBook 14, ROG Strix, TUF Gaming og Vivobook på Frederiksberg og i København. Fejlsøgning fra 300 kr., fast pris. Ring 91 81 61 81.',
    h1: 'Asus-reparation på Frederiksberg & København',
    h2: 'ZenBook, Vivobook, ROG og TUF — vi reparerer dem alle',
    intro: [
      'Har du problemer med din Asus? Hos PCKlinik reparerer vi alle Asus-serier — <strong>ZenBook 14, Vivobook 15, ROG Strix, TUF Gaming</strong> og <strong>Chromebook</strong> — for privatpersoner og virksomheder på Frederiksberg og i København. Asus-computere er ofte bygget mere kompakt end mange andre mærker, hvilket kræver reel erfaring at reparere korrekt.',
      'Uanset om det er en revnet skærm på din <strong>Vivobook</strong>, et løbet tørt batteri på din <strong>ZenBook</strong> eller en <strong>ROG Strix</strong>, der overopheder under gaming, arbejder vi os metodisk igennem det. Fejlsøgning koster 300 kr. (3–4 dage) eller ekspres for 600 kr. (1–2 timer).',
    ],
    models: [
      { series: 'ZenBook (premium ultrabærbar)', models: 'ZenBook 14, ZenBook Pro', issue: 'Skærm, batteri, hængsler' },
      { series: 'Vivobook (forbruger)', models: 'Vivobook 15, Vivobook Go', issue: 'Batteriskift, langsom ydelse' },
      { series: 'ROG (high-end gaming)', models: 'ROG Strix, ROG Zephyrus', issue: 'Køling, GPU-fejl, skærm' },
      { series: 'TUF Gaming (budget-gaming)', models: 'TUF Gaming A15, TUF Gaming F15', issue: 'Køling, blæserstøj, skærm' },
      { series:
