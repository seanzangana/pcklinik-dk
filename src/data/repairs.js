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
    whyIntro: 'Hos PCKlinik får du et fast værksted på Frederiksberg med et team, der kender Lenovo-modellerne godt — fra <strong>ThinkPad</strong> og <strong>IdeaPad</strong> til <strong>Legion</strong>, <strong>Yoga</strong> og <strong>ThinkBook</strong>.',
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
      { series: 'Chromebook', models: 'Asus Chromebook Flip', issue: 'Software-/OS-problemer' },
    ],
    services: [
      { title: 'Skærmudskiftning', body: 'Revnet skærm på din <strong>Vivobook</strong> eller <strong>ZenBook 14</strong>? Hurtig udskiftning.' },
      { title: 'Batteriskift', body: 'Holder batteriet på din <strong>ZenBook</strong> eller <strong>Vivobook</strong> ikke på strøm? Det skifter vi.' },
      { title: 'Køling & blæser', body: 'Overopheder din <strong>ROG Strix</strong> eller <strong>TUF Gaming</strong>? Vi renser og reparerer kølesystemet.' },
      { title: 'Tastatur & kabinet', body: 'Klistrede taster eller beskadiget kabinet på din <strong>ZenBook</strong>? Vi udskifter det kompakte kabinet med præcision.' },
    ],
    whyHeading: 'Hvorfor vælge PCKlinik til Asus-reparation?',
    why: [
      { title: 'Erfaren service', body: '20+ års erfaring med Asus, inklusive de mere kompakt byggede modeller.' },
      { title: 'Hurtig ekspedition', body: 'Vælger du ekspres, er din Asus-reparation klar inden for 24 timer. Standard tager 3–4 dage.' },
      { title: 'Fast pris, før vi starter', body: 'Ingen overraskelser.' },
      { title: 'Adgang til originale reservedele', body: 'Stærkt leverandørnetværk til ZenBook- og ROG-dele.' },
    ],
    faq: [
      { q: 'Reparerer I Asus ROG-bærbare med problemer i RGB-tastaturet?', a: 'Ja, det behandles som enhver anden tastaturfejl.' },
      { q: 'Er reparation af Vivobook billigere end ZenBook?', a: 'Reservedelsprisen varierer efter model — vi giver en fast pris efter fejlsøgning uanset hvad.' },
      { q: 'Hvorfor er Asus-reparation anderledes end andre mærker?', a: 'Asus bygger ofte mere kompakt, hvilket kræver reel erfaring — og den har vi.' },
      { q: 'Kan I reparere en Asus ROG Strix, der overopheder?', a: 'Ja, vi renser og reparerer køling på ROG- og TUF-modeller.' },
      { q: 'Reparerer I Asus Chromebooks?', a: 'Ja, både hardware- og softwareproblemer.' },
    ],
    photos: [
      { path: '/images/asus/zenbook-14-screen.jpg', alt: 'Asus ZenBook 14 skærmreparation Frederiksberg' },
      { path: '/images/asus/rog-strix-cooling.jpg', alt: 'Asus ROG Strix kølereparation' },
      { path: '/images/asus/vivobook-battery.jpg', alt: 'Asus Vivobook batteriskift' },
    ],
    crosslinks: [{ label: 'Acer-reparation', href: '/acer-reparation/' }, { label: 'MSI-reparation', href: '/msi-reparation/' }],
    ctaPrimary: 'Kom forbi med din enhed',
  },

  // --------------------------------------------------------------------- MSI
  {
    slug: 'msi-reparation',
    brand: 'MSI',
    title: 'MSI-reparation: Katana, GF63, Stealth | PCKlinik',
    description: 'Reparation af MSI Katana, GF63, Stealth og Prestige på Frederiksberg og i København. Fejlsøgning fra 300 kr., fast pris. Ring 91 81 61 81.',
    h1: 'MSI-reparation på Frederiksberg & København',
    h2: 'Katana, GF63, Stealth og Prestige — vi reparerer dem alle',
    intro: [
      'Har du problemer med din MSI-gamingcomputer? Hos PCKlinik reparerer vi alle MSI-serier — <strong>Katana 15, GF63, Stealth, Prestige</strong> og <strong>Cyborg</strong> — for gamere og kreative fagfolk på Frederiksberg og i København. Vi er et af de få værksteder i Danmark, der har MSI-dele på lager, hvilket betyder hurtigere ekspedition.',
      'Uanset om det er en <strong>GF63</strong>, der overopheder under gaming, en revnet skærm på din <strong>Katana 15</strong> eller et batteri, der har givet op på din <strong>Stealth</strong>, arbejder vi os metodisk igennem det. Fejlsøgning koster 300 kr. (3–4 dage) eller ekspres for 600 kr. (1–2 timer).',
    ],
    models: [
      { series: 'Katana (mellemklasse gaming)', models: 'Katana 15, Katana 17', issue: 'Køling, skærm, blæserstøj' },
      { series: 'GF-serie (budget-gaming)', models: 'GF63, GF65', issue: 'Køling, batteriydelse' },
      { series: 'Stealth (tynd gaming)', models: 'Stealth 14, Stealth 16', issue: 'Hængsler, batteri, skærm' },
      { series: 'Prestige (creator/erhverv)', models: 'Prestige 13, Prestige 14', issue: 'Skærm, batteri' },
      { series: 'Cyborg (budget-gaming)', models: 'Cyborg 15', issue: 'Køling, skærm' },
    ],
    services: [
      { title: 'Køling & blæser', body: 'Overopheder din <strong>GF63</strong> eller <strong>Katana 15</strong> under gaming? Vi renser og reparerer køling — den mest almindelige MSI-fejl.' },
      { title: 'Skærmudskiftning', body: 'Revnet skærm på din <strong>Katana</strong> eller <strong>Stealth</strong>? Hurtig udskiftning.' },
      { title: 'Batteriskift', body: 'Holder batteriet på din <strong>Stealth</strong> eller <strong>Prestige</strong> ikke på strøm? Det skifter vi.' },
      { title: 'Software & ydelse', body: 'Fryser eller hakker din MSI under tung belastning? Vi fejlsøger og optimerer.' },
    ],
    whyHeading: 'Hvorfor vælge PCKlinik til MSI-reparation?',
    why: [
      { title: "Specialister i gaming-pc'er", body: 'Et af de få værksteder i Danmark med MSI-dele på lager.' },
      { title: 'Hurtig ekspedition', body: 'Vælger du ekspres, er din MSI-reparation klar inden for 24 timer. Standard tager 3–4 dage.' },
      { title: 'Fast pris, før vi starter', body: 'Ingen overraskelser.' },
      { title: 'Erfaring med højtydende hardware', body: 'GPU, køling og skærme til gaming-modeller.' },
    ],
    faq: [
      { q: 'Har I MSI-GPU-reservedele på lager?', a: 'Vi har stærke leverandørforhold til MSI-dele — kontakt os om din konkrete model.' },
      { q: 'Kan I udbedre coil whine (en højfrekvent hyletone) på en MSI-bærbar?', a: 'Vi fejlsøger årsagen — nogle gange en driver-/strømindstilling, nogle gange hardware-relateret.' },
      { q: 'Hvorfor overopheder min MSI GF63?', a: 'Som regel støv i kølesystemet eller en blæser, der skal renses/skiftes.' },
      { q: 'Har I MSI-dele på lager?', a: 'Ja, vi er et af de få danske værksteder med MSI-dele på lager.' },
      { q: 'Reparerer I MSI Stealth-modeller?', a: 'Ja, inklusive de tyndere Stealth-modeller, hvor hængsler og batteri er typiske fejlpunkter.' },
    ],
    photos: [
      { path: '/images/msi/gf63-cooling.jpg', alt: 'MSI GF63 køling og blæserreparation Frederiksberg' },
      { path: '/images/msi/katana-15-screen.jpg', alt: 'MSI Katana 15 skærmreparation' },
      { path: '/images/msi/stealth-battery.jpg', alt: 'MSI Stealth batteriskift' },
    ],
    crosslinks: [{ label: 'Asus-reparation', href: '/asus-reparation/' }, { label: 'Acer-reparation', href: '/acer-reparation/' }],
    ctaPrimary: 'Kom forbi med din enhed',
  },

  // ------------------------------------------------------------------ HUAWEI
  {
    slug: 'huawei-reparation',
    brand: 'Huawei',
    title: 'Huawei-reparation: MateBook D14, X Pro | PCKlinik',
    description: 'Reparation af Huawei MateBook D14, MateBook X Pro og MateBook 14 på Frederiksberg og i København. Fejlsøgning fra 300 kr., fast pris. Ring 91 81 61 81.',
    h1: 'Huawei-reparation på Frederiksberg & København',
    h2: 'MateBook D14, MateBook X Pro og MateBook 14 — vi reparerer dem alle',
    intro: [
      'Har du problemer med din Huawei? Hos PCKlinik reparerer vi alle Huawei MateBook-serier — <strong>MateBook D14, MateBook D15, MateBook X Pro</strong> og <strong>MateBook 14</strong> — for privatpersoner og virksomheder på Frederiksberg og i København.',
      'Uanset om det er en revnet skærm på din <strong>MateBook D14</strong>, en ladeport, der driller på din <strong>MateBook X Pro</strong>, eller en computer, der fryser og genstarter, arbejder vi os metodisk igennem det. Fejlsøgning koster 300 kr. (3–4 dage) eller ekspres for 600 kr. (1–2 timer).',
    ],
    models: [
      { series: 'MateBook D (budget-forbruger)', models: 'MateBook D14, MateBook D15', issue: 'Batteriskift, skærm, langsom ydelse' },
      { series: 'MateBook X (premium)', models: 'MateBook X Pro', issue: 'Skærm, ladeport, tastatur' },
      { series: 'MateBook (mellemklasse)', models: 'MateBook 14', issue: 'Batteri, software' },
    ],
    services: [
      { title: 'Skærmudskiftning', body: 'Revnet eller beskadiget skærm på din <strong>MateBook D14</strong> eller <strong>X Pro</strong>? Hurtig udskiftning.' },
      { title: 'Batteriskift', body: 'Holder batteriet ikke på strøm? Det skifter vi.' },
      { title: 'Ladeport & knapper', body: 'Ladeproblemer eller fejl i tænd/sluk-knappen på din <strong>MateBook X Pro</strong>? Vi reparerer eller udskifter defekte komponenter.' },
      { title: 'Software & fejlsøgning', body: 'Fryser, genstarter eller er langsom? Vi retter softwareproblemer og sikrer stabil drift.' },
    ],
    whyHeading: 'Hvorfor vælge PCKlinik til Huawei-reparation?',
    why: [
      { title: 'Erfaren service', body: 'Solid erfaring med reparation af Huawei MateBook-enheder.' },
      { title: 'Hurtig ekspedition', body: 'Vælger du ekspres, er din Huawei-reparation klar inden for 24 timer. Standard tager 3–4 dage.' },
      { title: 'Fast pris, før vi starter', body: 'Ingen overraskelser.' },
      { title: 'Kvalitetsdele', body: 'Vi bruger kvalitetsdele ved hver reparation.' },
    ],
    faq: [
      { q: 'Reparerer I trackpads på Huawei MateBook?', a: 'Ja, det fejlsøges og repareres som enhver anden komponentfejl.' },
      { q: 'Er det svært at skaffe reservedele til Huawei-bærbare i Danmark?', a: 'Mindre almindeligt end de store mærker, men vi har erfaring med at skaffe det nødvendige.' },
      { q: 'Reparerer I Huawei MateBook X Pro?', a: 'Ja, inklusive skærm, ladeport og batteri.' },
      { q: 'Min MateBook D14 bliver ved med at fryse — kan I hjælpe?', a: 'Ja, vi fejlsøger og retter både software- og hardwareproblemer.' },
      { q: 'Hvad koster et batteriskift til en MateBook?', a: 'Fejlsøgning koster 300 kr. (3–4 dage) eller ekspres for 600 kr. — du får en fast pris bagefter.' },
    ],
    photos: [
      { path: '/images/huawei/matebook-d14-screen.jpg', alt: 'Huawei MateBook D14 skærmreparation Frederiksberg' },
      { path: '/images/huawei/matebook-x-pro-charging.jpg', alt: 'Huawei MateBook X Pro ladeportreparation' },
    ],
    crosslinks: [{ label: 'Lenovo-reparation', href: '/lenovo-reparation/' }],
    ctaPrimary: 'Kom forbi med din enhed',
  },

  // ----------------------------------------------------------------- MACBOOK
  {
    slug: 'macbook-reparation',
    brand: 'MacBook',
    title: 'MacBook-reparation: Pro, Air, M1/M2/M3 | PCKlinik',
    description: 'Reparation af MacBook Pro 13"/14"/16" og MacBook Air M1/M2/M3 på Frederiksberg og i København. Fejlsøgning fra 300 kr., fast pris. Ring 91 81 61 81.',
    h1: 'MacBook-reparation på Frederiksberg & København',
    h2: 'MacBook Pro, MacBook Air og ældre modeller — vi reparerer dem alle',
    intro: [
      'Er din MacBook i stykker? Hos PCKlinik reparerer vi alle MacBook-modeller — fra den nyeste <strong>MacBook Pro 14" og 16" med M3-chip</strong> og <strong>MacBook Air M1/M2/M3</strong> til ældre modeller som <strong>MacBook Pro 13" (A1278/A1286)</strong> — for privatpersoner og virksomheder på Frederiksberg og i København.',
      'Uanset om det er en revnet skærm på din <strong>MacBook Air M2</strong>, et hævet batteri på en ældre <strong>MacBook Pro 13"</strong> eller en tastaturfejl på en <strong>MacBook Pro</strong> med butterfly-tastaturet, arbejder vi os metodisk igennem det. Fejlsøgning koster 300 kr. (3–4 dage) eller ekspres for 600 kr. (1–2 timer) — reparationen klar inden for 24 timer, hvis der ikke skal bestilles specielle reservedele. Vi giver prisgaranti på MacBook-reparationer, og mange reparationer som skærm- og batteriskift klares inden for 1 time.',
    ],
    models: [
      { series: 'MacBook Pro (nyeste, Apple Silicon)', models: 'MacBook Pro 14" M3, MacBook Pro 16" M3', issue: 'Skærm, batteri, logic board' },
      { series: 'MacBook Air (Apple Silicon)', models: 'MacBook Air M1, MacBook Air M2, MacBook Air M3', issue: 'Skærm, batteri' },
      { series: 'MacBook Pro (Intel, ældre)', models: 'MacBook Pro 13" A1278, MacBook Pro 15" A1286', issue: 'Batteri (ofte hævet), hængsler, logic board' },
      { series: 'MacBook (Intel, butterfly-tastatur)', models: 'MacBook Pro 2016–2019', issue: 'Tastaturfejl (kendt Apple-problem), skærm' },
    ],
    services: [
      { title: 'Skærmudskiftning', body: 'Revnet skærm på din <strong>MacBook Air M1/M2</strong> eller <strong>MacBook Pro 14"</strong>? Vi skifter den med kvalitetsdele.' },
      { title: 'Batteriskift', body: 'Hævet eller udslidt batteri på din <strong>MacBook Pro 13" A1278</strong> eller nyere <strong>MacBook Air</strong>? Vi skifter det sikkert.' },
      { title: 'Tastaturreparation', body: 'Klistrede eller ureagerende taster på en <strong>MacBook Pro</strong> med butterfly-tastaturet (2016–2019)? Vi udbedrer det kendte problem.' },
      { title: 'Logic board & fejlsøgning', body: 'Vil din MacBook ikke starte? Vi fejlsøger logic board og andre hardwarefejl på både Intel- og Apple Silicon-modeller.' },
    ],
    whyHeading: 'Hvorfor vælge PCKlinik til MacBook-reparation?',
    why: [
      { title: 'Erfaren service', body: 'Solid erfaring med både de nyeste Apple Silicon-modeller og ældre Intel-MacBooks.' },
      { title: 'Hurtig ekspedition', body: 'Skærm- og batteriskift klares ofte inden for 1 time.' },
      { title: 'Fast pris, før vi starter', body: 'Ingen overraskelser.' },
      { title: 'Prisgaranti', body: 'Vi giver prisgaranti på MacBook-reparationer.' },
    ],
    faq: [
      { q: 'Skifter I højttalere i MacBook Pro, hvis de er forvrængede?', a: 'Ja, højttalerproblemer fejlsøges og repareres.' },
      { q: 'Kan I udbedre en MacBook, der ikke vil genkende opladeren?', a: 'Ja — det kan være opladeren, porten eller logic board; vi fejlsøger, hvad det er.' },
      { q: 'Reparerer I den nyeste MacBook Pro med M3-chip?', a: 'Ja, vi reparerer alle MacBook-modeller uanset alder eller chip.' },
      { q: 'Batteriet på min gamle MacBook Pro 13" er hævet — er det farligt?', a: 'Et hævet batteri bør skiftes hurtigst muligt. Kontakt os for fejlsøgning og en fast pris.' },
      { q: 'Kan I udbedre butterfly-tastaturproblemer på en ældre MacBook Pro?', a: 'Ja, det er et kendt Apple-problem på 2016–2019-modeller, og vi har solid erfaring med det.' },
    ],
    photos: [
      { path: '/images/macbook/air-m2-screen.jpg', alt: 'MacBook Air M2 skærmreparation Frederiksberg' },
      { path: '/images/macbook/pro-13-battery.jpg', alt: 'MacBook Pro 13 batteriskift' },
      { path: '/images/macbook/butterfly-keyboard.jpg', alt: 'MacBook Pro butterfly-tastaturreparation' },
    ],
    crosslinks: [{ label: 'Mac (stationær)-reparation', href: '/mac-stationaer-reparation/' }, { label: 'Hvor længe holder en MacBook?', href: '/hvor-laenge-holder-en-macbook/' }, { label: 'Microsoft Surface-reparation', href: '/microsoft-surface-reparation/' }],
    ctaPrimary: 'Kom forbi med din enhed',
  },

  // ------------------------------------------------------- MICROSOFT SURFACE
  {
    slug: 'microsoft-surface-reparation',
    brand: 'Microsoft Surface',
    title: 'Microsoft Surface-reparation: Pro, Laptop, Book | PCKlinik',
    description: 'Reparation af Microsoft Surface Pro, Surface Laptop og Surface Book på Frederiksberg og i København. Fejlsøgning fra 300 kr., fast pris. Ring 91 81 61 81.',
    h1: 'Microsoft Surface-reparation på Frederiksberg & København',
    h2: 'Surface Pro, Surface Laptop og Surface Book — vi reparerer dem alle',
    intro: [
      'Har du problemer med din Microsoft Surface? Hos PCKlinik reparerer vi alle Surface-modeller — <strong>Surface Pro 9, Surface Laptop 5, Surface Book 3</strong> og <strong>Surface Laptop Go</strong> — for privatpersoner og virksomheder på Frederiksberg og i København. Surface-enheder kræver reel ekspertise at reparere korrekt på grund af deres kompakte, skærmintegrerede design.',
      'Uanset om det er en revnet touchskærm på din <strong>Surface Pro</strong>, et løst hængsel på din <strong>Surface Book</strong> eller en ladeport, der driller på din <strong>Surface Laptop</strong>, arbejder vi os metodisk igennem det. Fejlsøgning koster 300 kr. (3–4 dage) eller ekspres for 600 kr. (1–2 timer).',
    ],
    models: [
      { series: 'Surface Pro (2-i-1 tablet)', models: 'Surface Pro 8, Surface Pro 9', issue: 'Touchskærm/digitizer, kickstand-hængsel, ladeport' },
      { series: 'Surface Laptop', models: 'Surface Laptop 4, Surface Laptop 5', issue: 'Skærm (kendt for delaminering), batteri, tastatur' },
      { series: 'Surface Book (aftageligt)', models: 'Surface Book 2, Surface Book 3', issue: 'Hængsel/aftagningsmekanisme, batteri' },
      { series: 'Surface Laptop Go', models: 'Surface Laptop Go 2, Go 3', issue: 'Batteri, skærm' },
    ],
    services: [
      { title: 'Skærm & touch/digitizer', body: 'Revnet skærm eller ureagerende touch på din <strong>Surface Pro 9</strong>? Vi skifter skærm og digitizer — en mere specialiseret reparation end almindelig skærmudskiftning.' },
      { title: 'Batteriskift', body: 'Holder batteriet på din <strong>Surface Laptop</strong> eller <strong>Surface Book</strong> ikke på strøm? Det skifter vi.' },
      { title: 'Hængsel & kickstand', body: 'Løs kickstand på din <strong>Surface Pro</strong>, eller en aftagningsmekanisme, der driller på din <strong>Surface Book</strong>? Det reparerer vi.' },
      { title: 'Ladeport & software', body: 'Lader ikke korrekt, eller fryser? Vi fejlsøger og retter.' },
    ],
    whyHeading: 'Hvorfor vælge PCKlinik til Surface-reparation?',
    why: [
      { title: 'Specialiseret erfaring', body: 'Surface-enheder er bygget anderledes end almindelige bærbare og kræver specifik ekspertise.' },
      { title: 'Hurtig ekspedition', body: 'Vælger du ekspres, er din Surface-reparation klar inden for 24 timer. Standard tager 3–4 dage.' },
      { title: 'Fast pris, før vi starter', body: 'Ingen overraskelser.' },
      { title: 'Erfaring med digitizer-reparation', body: 'Vi håndterer touch- og digitizer-reparationer jævnligt.' },
    ],
    faq: [
      { q: 'Reparerer I Type Cover-tastaturer til Surface Pro?', a: 'Type Cover er et separat tilbehør — vi rådgiver om udskiftning og reparerer Surfacens egen port, hvis det er den reelle fejl.' },
      { q: 'Er Surface-reparation dyrere end almindelig reparation af bærbare?', a: 'Ofte lidt dyrere på grund af det specialiserede, tæt integrerede design — vi giver altid en fast pris først.' },
      { q: 'Kan I reparere touchskærmen på en Surface Pro?', a: 'Ja, digitizer- og touchskærm-reparation på Surface Pro er en specialiseret proces, vi har erfaring med.' },
      { q: 'Min Surface Laptop-skærm har mørke pletter/delaminering — kan det udbedres?', a: 'Ja, det er et kendt Surface Laptop-problem. Vi fejlsøger og giver en fast pris på skærmudskiftning.' },
      { q: 'Reparerer I hængselmekanismen på Surface Book?', a: 'Ja, både det almindelige hængsel og aftagningsmekanismen mellem skærm og tastatur.' },
    ],
    photos: [
      { path: '/images/microsoft-surface/pro-9-digitizer.jpg', alt: 'Microsoft Surface Pro 9 skærm- og digitizer-reparation Frederiksberg' },
      { path: '/images/microsoft-surface/book-hinge.jpg', alt: 'Surface Book hængselreparation' },
      { path: '/images/microsoft-surface/laptop-screen.jpg', alt: 'Surface Laptop skærmudskiftning' },
    ],
    crosslinks: [{ label: 'MacBook-reparation', href: '/macbook-reparation/' }],
    ctaPrimary: 'Kom forbi med din enhed',
  },

  // ----------------------------------------------------------------- SAMSUNG
  {
    slug: 'samsung-reparation',
    brand: 'Samsung',
    title: 'Samsung-reparation: Galaxy Book Pro, Go | PCKlinik',
    description: 'Reparation af Samsung Galaxy Book3, Book4 Pro og Book Go på Frederiksberg og i København. Fejlsøgning fra 300 kr., fast pris. Ring 91 81 61 81.',
    h1: 'Samsung-reparation på Frederiksberg & København',
    h2: 'Galaxy Book3, Galaxy Book4 Pro og Galaxy Book Go — vi reparerer dem alle',
    intro: [
      'Har du problemer med din Samsung Galaxy Book? Hos PCKlinik reparerer vi alle Samsung-bærbare — <strong>Galaxy Book3, Galaxy Book4 Pro, Galaxy Book3 360</strong> og <strong>Galaxy Book Go</strong> — for privatpersoner og virksomheder på Frederiksberg og i København. Samsung er et relativt nyt navn inden for bærbare, og vi er blandt de få værksteder i København med reel erfaring med mærket.',
      'Uanset om det er en revnet skærm på din <strong>Galaxy Book3</strong>, en S Pen, der ikke registreres på din <strong>Galaxy Book3 360</strong>, eller et løbet tørt batteri, arbejder vi os metodisk igennem det. Fejlsøgning koster 300 kr. (3–4 dage) eller ekspres for 600 kr. (1–2 timer).',
    ],
    models: [
      { series: 'Galaxy Book (standard)', models: 'Galaxy Book3, Galaxy Book4', issue: 'Skærm, batteri' },
      { series: 'Galaxy Book Pro', models: 'Galaxy Book4 Pro, Galaxy Book4 Ultra', issue: 'Skærm (AMOLED), batteri' },
      { series: 'Galaxy Book 360 (2-i-1)', models: 'Galaxy Book3 360', issue: 'Touchskærm, S Pen-fejl, hængsler' },
      { series: 'Galaxy Book Go (ARM, budget)', models: 'Galaxy Book Go', issue: 'Batteri, software' },
    ],
    services: [
      { title: 'Skærmudskiftning', body: 'Revnet AMOLED-skærm på din <strong>Galaxy Book4 Pro</strong>? Vi skifter den med kvalitetsdele.' },
      { title: 'Batteriskift', body: 'Holder batteriet på din <strong>Galaxy Book3</strong> eller <strong>Galaxy Book Go</strong> ikke på strøm? Det skifter vi.' },
      { title: 'Touchskærm & S Pen', body: 'Registreres S Pen ikke korrekt på din <strong>Galaxy Book3 360</strong>? Vi fejlsøger touchmodulet.' },
      { title: 'Software & fejlsøgning', body: 'Fryser eller langsom? Vi retter softwareproblemer og sikrer stabil drift.' },
    ],
    whyHeading: 'Hvorfor vælge PCKlinik til Samsung-reparation?',
    why: [
      { title: 'Tidlig Samsung-erfaring', body: 'Blandt de få værksteder i København med reel erfaring med Galaxy Book-serien.' },
      { title: 'Hurtig ekspedition', body: 'Vælger du ekspres, er din Samsung-reparation klar inden for 24 timer. Standard tager 3–4 dage.' },
      { title: 'Fast pris, før vi starter', body: 'Ingen overraskelser.' },
      { title: 'Ekspertise i AMOLED-skærme', body: 'Vi håndterer de mere sarte AMOLED-paneler med ekstra omhu.' },
    ],
    faq: [
      { q: 'Reparerer I hængsler på Samsung Galaxy Book?', a: 'Ja.' },
      { q: 'Hvis min S Pen holder op med at virke, er det så dækket af reparation af den bærbare?', a: 'Hvis fejlen sidder i Galaxy Bookens touchmodul, ja — kontakt os, så fejlsøger vi det.' },
      { q: 'Reparerer I Samsung Galaxy Book-bærbare?', a: 'Ja, alle modeller inklusive Galaxy Book3, Book4 Pro og Book Go.' },
      { q: 'Min S Pen virker ikke på min Galaxy Book3 360 — kan det udbedres?', a: 'Ja, vi fejlsøger touchmodulet og finder årsagen.' },
      { q: 'Er AMOLED-skærme dyrere at reparere?', a: 'Det afhænger af skaden. Vi fejlsøger altid først og giver en fast pris, før vi går i gang.' },
    ],
    photos: [
      { path: '/images/samsung/galaxy-book4-pro-screen.jpg', alt: 'Samsung Galaxy Book4 Pro skærmreparation Frederiksberg' },
      { path: '/images/samsung/galaxy-book3-360-spen.jpg', alt: 'Samsung Galaxy Book3 360 S Pen-reparation' },
    ],
    crosslinks: [{ label: 'Microsoft Surface-reparation', href: '/microsoft-surface-reparation/' }],
    ctaPrimary: 'Kom forbi med din enhed',
  },

  // ------------------------------------------------------------- MAC DESKTOP
  {
    slug: 'mac-stationaer-reparation',
    brand: 'Mac (stationær)',
    title: 'Stationær Mac: iMac, Mac mini, Mac Studio | PCKlinik',
    description: 'Reparation af iMac, Mac mini, Mac Studio og Mac Pro på Frederiksberg og i København. Fejlsøgning fra 300 kr., fast pris. Ring 91 81 61 81.',
    h1: 'Reparation af stationær Mac på Frederiksberg & København',
    h2: 'iMac, Mac mini, Mac Studio og Mac Pro — vi reparerer dem alle',
    intro: [
      'Har du problemer med din stationære Mac? Hos PCKlinik reparerer vi alle Mac-modeller — <strong>iMac 24" (M1/M3), iMac 27" (Intel), Mac mini (M2/M4), Mac Studio (M1 Max/Ultra, M2 Max/Ultra)</strong> og <strong>Mac Pro</strong> — for privatpersoner og virksomheder på Frederiksberg og i København.',
      'Uanset om det er en <strong>iMac</strong>, der ikke vil starte, en <strong>Mac mini</strong>, der er blevet mistænkeligt langsom, eller en <strong>Mac Studio</strong>, der laver usædvanlig blæserstøj, arbejder vi os metodisk igennem det. Vi laver en grundig fejlsøgning af din Mac og giver dig en fast pris, før vi går i gang — så du altid kender prisen, før vi rører ved maskinen. Standardfejlsøgning koster 300 kr. (3–4 dage), eller vælg ekspres for 600 kr. (1–2 timer).',
      'Leder du efter reparation af MacBook (bærbar) i stedet? Det har vi en dedikeret side til — <a href="/macbook-reparation/">se MacBook-reparation her</a>.',
    ],
    models: [
      { series: 'iMac', models: 'iMac 24" M1, iMac 24" M3, iMac 27" (Intel, ældre)', issue: 'Vil ikke tænde, HDD/SSD-fejl, skærm/baggrundslys, blæserstøj' },
      { series: 'Mac mini', models: 'Mac mini M2, Mac mini M4, Mac mini (Intel, ældre)', issue: 'Vil ikke starte, SSD-fejl, langsom ydelse, portproblemer' },
      { series: 'Mac Studio', models: 'Mac Studio M1 Max/Ultra, Mac Studio M2 Max/Ultra', issue: 'Overophedning/blæserstøj, portproblemer, langsom ydelse' },
      { series: 'Mac Pro', models: 'Mac Pro 2019 (Intel), Mac Pro M2 Ultra', issue: 'Strømforsyning, GPU-fejl, RAM-fejl, opstartsproblemer' },
    ],
    services: [
      { title: 'Opstartsproblemer & fejlsøgning', body: 'Vil din <strong>iMac</strong> eller <strong>Mac mini</strong> ikke starte, eller viser den en blinkende mappe? Vi fejlsøger hardware og software systematisk for at finde årsagen.' },
      { title: 'Harddisk & SSD', body: 'Er din <strong>iMac</strong> eller <strong>Mac Pro</strong> blevet langsom, eller er harddisken svigtet helt? Vi opgraderer til SSD og gendanner dine data, hvor det er muligt.' },
      { title: 'Skærm & baggrundslys', body: 'Har din <strong>iMac</strong> pletter, mørke områder eller ujævnt baggrundslys? Vi udskifter skærmpanelet.' },
      { title: 'Køling & blæserstøj', body: 'Er din <strong>Mac Studio</strong> eller <strong>Mac Pro</strong> usædvanlig larmende eller overopheder under tung belastning? Vi renser og reparerer kølesystemet.' },
    ],
    whyHeading: 'Hvorfor vælge PCKlinik til Mac-reparation?',
    why: [
      { title: 'Erfaren service', body: 'Vi reparerer både de nyeste Apple Silicon-modeller (M1, M2, M3, M4) og ældre Intel-baserede Mac-computere.' },
      { title: 'Dine data holdes sikre', body: 'Vi sletter aldrig data uden aftale og tilbyder backup før reparation.' },
      { title: 'Fast pris, før vi starter', body: 'Ingen overraskelser.' },
      { title: 'Bred Mac-erfaring', body: 'Fra iMac og Mac mini til Mac Studio og Mac Pro.' },
    ],
    faq: [
      { q: 'Reparerer I strømforsyningsproblemer i iMac?', a: 'Ja, vi fejlsøger og reparerer strømrelaterede fejl på iMac og andre stationære Mac-computere.' },
      { q: 'Kan en Mac mini opgraderes med mere lagerplads efter køb?', a: 'Det afhænger af modelgenerationen — vi kan rådgive om, hvad der er muligt for din.' },
      { q: 'Min iMac vil ikke starte — hvad kan det være?', a: 'Det kan være flere ting, fra strømforsyning til harddisk/SSD eller logic board. Vi fejlsøger systematisk og giver dig en fast pris, før vi går i gang.' },
      { q: 'Kan I opgradere min ældre iMac med en SSD?', a: 'Ja, på ældre Intel-iMacs kan en SSD-opgradering gøre en markant forskel i hastighed.' },
      { q: 'Min Mac Studio er larmende — er det normalt?', a: 'Ikke hvis den er usædvanlig larmende. Det skyldes ofte støv i kølesystemet, som vi kan rense og reparere.' },
      { q: 'Mister jeg mine data, når I reparerer min Mac?', a: 'Nej, vi sletter aldrig data uden din tilladelse, og vi tilbyder backup, hvis det er nødvendigt.' },
    ],
    photos: [
      { path: '/images/mac/imac-24-repair.jpg', alt: 'iMac 24 reparation hos PCKlinik Frederiksberg' },
      { path: '/images/mac/mac-mini-ssd.jpg', alt: 'Mac mini SSD-opgradering Frederiksberg' },
      { path: '/images/mac/mac-studio-cooling.jpg', alt: 'Mac Studio køling og blæserreparation' },
    ],
    crosslinks: [{ label: 'MacBook-reparation', href: '/macbook-reparation/' }],
    ctaPrimary: 'Kom forbi med din enhed',
  },

  // ---------------------------------------------- OTHER BRANDS & CUSTOM BUILDS
  // Opsamlingsside. Ingen modeltabel / fotos / why-blok efter design.
  {
    slug: 'andre-maerker-reparation',
    brand: 'Andre mærker & specialbyggede',
    title: 'Reparation af andre mærker & specialbyggede | PCKlinik',
    description: 'Reparation af Gigabyte, LG gram, Razer og specialbyggede — samt ethvert mærke, der ikke er nævnt. Fejlsøgning fra 300 kr., fast pris.',
    h1: 'Reparation af andre mærker & specialbyggede',
    h2: 'Kan du ikke se dit mærke på listen? Vi reparerer det alligevel.',
    intro: [
      'Vi reparerer alle computermærker og opsætninger, ikke kun dem med dedikerede sider — inklusive <strong>Gigabyte, Chromebook, MSI’s mindre udbredte serier og andre mindre almindelige mærker</strong> samt fuldt <strong>specialbyggede stationære pc’er</strong>. Uanset om det er en bærbar fra et mærke, vi ikke har nævnt særskilt, eller en specialbygget gaming-maskine bygget fra bunden, griber vi det an på samme måde: grundig fejlsøgning og derefter en fast pris, før vi går i gang.',
      'Standardfejlsøgning koster 300 kr. (3–4 dage), eller ekspres for 600 kr. (1–2 timer) — reparationen klar inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.',
    ],
    services: [
      { title: 'Skærmudskiftning', body: 'Revnet eller beskadiget skærm, uanset mærke.' },
      { title: 'Batteriskift', body: 'Holder ikke på strøm? Vi skaffer også batterier til mærker ud over de store navne.' },
      { title: 'Reparation af specialbyggede stationære', body: 'Bygget din egen pc, eller købt en specialbygget? Vi fejlsøger og reparerer specialbyggede maskiner — GPU, køling og bundkortproblemer inkluderet.' },
      { title: 'Fejlsøgning & problemløsning', body: 'Er du i tvivl om, hvad der er galt, eller kan du ikke se dit mærke på listen? Kom forbi — så finder vi ud af det.' },
    ],
    faq: [
      { q: 'Reparerer I mærker, der ikke er nævnt på jeres hjemmeside?', a: 'Ja, vi reparerer stort set alle computermærker og specialbyggede opsætninger, ikke kun dem med dedikerede sider.' },
      { q: 'Kan I reparere en specialbygget gaming-pc?', a: 'Ja, inklusive GPU-, køle- og bundkortfejlsøgning på specialbyggede maskiner.' },
      { q: 'Reparerer I Gigabyte-bærbare?', a: 'Ja — Gigabyte (inklusive deres AORUS-gamingserie) er dækket her, sammen med ethvert andet mærke, der ikke er nævnt særskilt.' },
      { q: 'Reparerer I Chromebooks?', a: 'Ja, på tværs af mærker — Chromebook-specifikke problemer (software, batteri, skærm) håndteres på samme måde som enhver anden bærbar.' },
      { q: 'Jeg har en bærbar fra et mærke, jeg aldrig har set nævnt nogen steder på jeres side — vil I stadig kigge på den?', a: 'Ja — denne side findes netop til den situation. Kom forbi, så fejlsøger vi den på samme måde som ethvert andet mærke.' },
      { q: 'Får specialbyggede stationære pc’er samme standard-/ekspresfejlsøgningspris som mærkevarebærbare?', a: 'Ja, samme prismodel gælder, uanset om det er et stort mærke, et mindre kendt mærke eller en specialbygget maskine.' },
    ],
    crosslinks: [{ label: 'MSI-reparation', href: '/msi-reparation/' }, { label: 'Mac (stationær)-reparation', href: '/mac-stationaer-reparation/' }],
    ctaPrimary: 'Kom forbi med din enhed',
    ctaHeading: 'Har du et mærke, vi ikke har nævnt, eller en specialbygget maskine?',
  },
  // ------------------------------------------------------- TOSHIBA / DYNABOOK
  {
    slug: 'toshiba-dynabook-reparation',
    brand: 'Toshiba & Dynabook',
    title: 'Toshiba- & Dynabook-reparation | PCKlinik',
    description: 'Reparation af Toshiba- og Dynabook-bærbare — Satellite, Portégé, Tecra — på Frederiksberg og i København. Fejlsøgning fra 300 kr., fast pris.',
    h1: 'Toshiba- & Dynabook-reparation på Frederiksberg & København',
    h2: 'Satellite, Portégé, Tecra og ældre Toshiba-modeller',
    intro: [
      'Toshibas bærbar-forretning blev overtaget af Sharp og omdøbt til Dynabook, men vi reparerer både de ældre Toshiba-mærkede modeller og de nyere Dynabook-serier. Uanset om det er en ældre Satellite, der stadig kører fint, eller en erhvervsfokuseret Portégé eller Tecra, fejlsøger og reparerer vi dem på samme måde som ethvert andet mærke.',
      'Standardfejlsøgning koster 300 kr. (3–4 dage), eller ekspres for 600 kr. (1–2 timer) — reparationen klar inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.',
    ],
    models: [
      { series: 'Satellite (forbruger)', models: 'Satellite Pro, Satellite C/L-serie', issue: 'Batteri, skærm, langsom ydelse' },
      { series: 'Portégé (ultrabærbar erhverv)', models: 'Portégé X30, Portégé Z30', issue: 'Skærm, hængsler, batteri' },
      { series: 'Tecra (erhverv)', models: 'Tecra A50, Tecra X40', issue: 'Batteri, tastatur, skærm' },
    ],
    services: [
      { title: 'Skærmudskiftning', body: 'Revnet eller beskadiget skærm på enhver Toshiba-/Dynabook-model.' },
      { title: 'Batteriskift', body: 'Holder ikke på strøm? Vi skaffer batterier selv til ældre Toshiba-modeller.' },
      { title: 'Tastatur & hængsler', body: 'Almindelige slidpunkter på ældre Satellite- og erhvervsmodeller.' },
      { title: 'Fejlsøgning & software', body: 'Langsom ydelse eller softwareproblemer, fejlsøgt og udbedret.' },
    ],
    whyHeading: 'Hvorfor vælge PCKlinik til Toshiba- & Dynabook-reparation?',
    why: [
      { title: 'Gammelt og nyt', body: 'Vi reparerer både ældre Toshiba-modeller og aktuelle Dynabook-serier.' },
      { title: 'Hurtig ekspedition', body: 'Vælger du ekspres, er reparationen klar inden for 24 timer. Standard tager 3–4 dage.' },
      { title: 'Fast pris, før vi starter', body: 'Ingen overraskelser.' },
      { title: 'Fremskaffelse af reservedele', body: 'Vi skaffer batterier og dele selv til ældre modeller, hvor det er muligt.' },
    ],
    faq: [
      { q: 'Reparerer I stadig ældre Toshiba-modeller, eller kun nyere Dynabook?', a: 'Begge dele — alder stopper os ikke fra at reparere den, så længe der er reservedele.' },
      { q: 'Er Dynabook det samme firma som Toshiba?', a: 'Dynabook er den omdøbte efterfølger til Toshibas bærbar-forretning (overtaget af Sharp) — vi reparerer begge under samme service.' },
    ],
    crosslinks: [{ label: 'Andre mærker & specialbyggede', href: '/andre-maerker-reparation/' }, { label: 'Computerreparation i København', href: '/computerreparation-koebenhavn/' }],
    ctaPrimary: 'Kom forbi med din enhed',
  },

  // ------------------------------------------------------------------ FUJITSU
  {
    slug: 'fujitsu-reparation', brand: 'Fujitsu',
    title: 'Reparation af Fujitsu-bærbare | PCKlinik',
    description: 'Reparation af Fujitsu LIFEBOOK på Frederiksberg og i København. Vi sælger også istandsatte Fujitsu-bærbare. Fejlsøgning fra 300 kr., fast pris.',
    h1: 'Fujitsu-reparation på Frederiksberg & København',
    h2: 'LIFEBOOK og andre Fujitsu-bærbare — et mærke, vi kender godt',
    intro: [
      'Fujitsu laver driftssikre, erhvervsfokuserede bærbare, der ikke får så meget opmærksomhed som de store mærker — men vi kender dem godt. Vi både reparerer Fujitsu-bærbare og sælger istandsatte Fujitsu-enheder i vores butik, så vi er reelt fortrolige med almindelige fejlpunkter på tværs af serien, ikke kun reparerer dem lejlighedsvis.',
      'Standardfejlsøgning koster 300 kr. (3–4 dage), eller ekspres for 600 kr. (1–2 timer) — reparationen klar inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.',
    ],
    models: [
      { series: 'LIFEBOOK (erhverv)', models: 'LIFEBOOK U, LIFEBOOK E-serie', issue: 'Batteri, skærm, tastatur' },
      { series: 'LIFEBOOK (forbruger/generel)', models: 'LIFEBOOK A-serie', issue: 'Langsom ydelse, batteri, skærm' },
    ],
    services: [
      { title: 'Skærmudskiftning', body: 'Revnede eller beskadigede skærme på enhver Fujitsu LIFEBOOK-model.' },
      { title: 'Batteriskift', body: 'Almindeligt på ældre LIFEBOOK-enheder — vi skaffer erstatninger.' },
      { title: 'Tastaturreparation', body: 'Klistrede eller ureagerende taster, et hyppigt problem på velbrugte erhvervsenheder.' },
      { title: 'Fejlsøgning & ydelse', body: 'Langsom ydelse eller softwareproblemer, fejlsøgt og udbedret.' },
    ],
    whyHeading: 'Hvorfor vælge PCKlinik til Fujitsu-reparation?',
    why: [
      { title: 'Vi kender Fujitsu', body: 'Vi sælger istandsatte Fujitsu-enheder, så vi kender de almindelige problemer på første hånd.' },
      { title: 'Hurtig ekspedition', body: 'Vælger du ekspres, er reparationen klar inden for 24 timer. Standard tager 3–4 dage.' },
      { title: 'Fast pris, før vi starter', body: 'Ingen overraskelser.' },
      { title: 'Fremskaffelse af reservedele', body: 'Fujitsu-dele er mindre almindelige, men vi har erfaring med at finde det nødvendige.' },
    ],
    faq: [
      { q: 'Har I istandsatte Fujitsu-bærbare på lager lige nu?', a: 'Lageret varierer — se vores butiksside for aktuel tilgængelighed, eller kontakt os direkte.' },
      { q: 'Ser I faktisk mange Fujitsu-bærbare, eller er det en sjælden henvendelse?', a: 'Vi ser dem jævnligt — vi sælger selv istandsatte Fujitsu-enheder, så vi er allerede fortrolige med de almindelige problemer.' },
      { q: 'Er Fujitsu-dele svære at skaffe?', a: 'Mindre almindelige end Lenovo/HP/Dell, men vi har erfaring med at finde det nødvendige.' },
    ],
    crosslinks: [{ label: 'Refurbished computere', href: '/butik/computere/refurbished/' }, { label: 'Andre mærker & specialbyggede', href: '/andre-maerker-reparation/' }],
    ctaPrimary: 'Kom forbi med din enhed',
  },
  // ------------------------------------------------------------------- LG GRAM
  {
    slug: 'lg-gram-reparation', brand: 'LG gram',
    title: 'Reparation af LG gram-bærbare | PCKlinik',
    description: 'Reparation af LG gram-bærbare på Frederiksberg og i København. Skærm, batteri, tastatur. Fejlsøgning fra 300 kr., fast pris.',
    h1: 'LG gram-reparation på Frederiksberg & København',
    h2: 'Ultralette bærbare, repareret ordentligt',
    intro: [
      'LG gram-bærbare er kendt for at være usædvanligt lette uden at gå på kompromis med skærmstørrelsen — populære hos studerende og fagfolk, der rejser meget. Den lette konstruktion bruger en anden intern ingeniørkunst end de fleste bærbare, hvilket vi har erfaring med.',
      'Standardfejlsøgning koster 300 kr. (3–4 dage), eller ekspres for 600 kr. (1–2 timer) — reparationen klar inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.',
    ],
    services: [
      { title: 'Skærmudskiftning', body: 'LG grams store, tynde skærme repareret ordentligt.' },
      { title: 'Batteriskift', body: 'Genskab den oprindelige batterilevetid.' },
      { title: 'Hængselreparation', body: 'Det ultralette kabinetdesign betyder, at hængsler er et mere almindeligt slidpunkt end på tungere bærbare.' },
      { title: 'Tastatur & trackpad', body: 'Reparation eller udskiftning efter behov.' },
    ],
    whyHeading: 'Hvorfor vælge PCKlinik til LG gram-reparation?',
    why: [
      { title: 'Erfaring med tynde kabinetter', body: 'Vi har det rette værktøj og den rette omhu til den ultralette konstruktion.' },
      { title: 'Hurtig ekspedition', body: 'Vælger du ekspres, er reparationen klar inden for 24 timer. Standard tager 3–4 dage.' },
      { title: 'Fast pris, før vi starter', body: 'Ingen overraskelser.' },
      { title: 'Alle generationer', body: 'Vi reparerer både ældre og nyere LG gram-modeller.' },
    ],
    faq: [
      { q: 'Er LG gram-reparation dyrere på grund af det unikke lette design?', a: 'Ikke nødvendigvis dyrere, men det kræver mere forsigtig håndtering på grund af det tynde kabinet — vi fejlsøger altid først og giver en fast pris, før vi går i gang.' },
      { q: 'Er LG gram sværere at reparere, fordi den er så let?', a: 'Det kræver omhu på grund af det tynde kabinet, men vi har det rette værktøj og den rette erfaring.' },
      { q: 'Reparerer I både ældre og nyere LG gram-modeller?', a: 'Ja, uanset generation.' },
    ],
    crosslinks: [{ label: 'Andre mærker & specialbyggede', href: '/andre-maerker-reparation/' }, { label: 'Computerreparation i København', href: '/computerreparation-koebenhavn/' }],
    ctaPrimary: 'Kom forbi med din enhed',
  },
  // --------------------------------------------------------------- RAZER BLADE
  {
    slug: 'razer-blade-reparation', brand: 'Razer Blade',
    title: 'Reparation af Razer Blade-bærbare | PCKlinik',
    description: 'Reparation af Razer Blade gaming-bærbare på Frederiksberg og i København. Skærm, køling, batteri. Fejlsøgning fra 300 kr., fast pris.',
    h1: 'Razer Blade-reparation på Frederiksberg & København',
    h2: 'Premium gaming-bærbare, repareret ordentligt',
    intro: [
      'Razer Blade-bærbare pakker højtydende gaming-hardware ind i et tyndt aluminiumskabinet — hvilket betyder, at køling og termisk styring betyder endnu mere end på typiske gaming-bærbare. Vi reparerer Razer Blade-skærme, kølesystemer, batterier og meget mere.',
      'Standardfejlsøgning koster 300 kr. (3–4 dage), eller ekspres for 600 kr. (1–2 timer) — reparationen klar inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.',
    ],
    services: [
      { title: 'Køling & termisk service', body: 'Det tynde kabinetdesign gør ordentlig kølevedligeholdelse særligt vigtig på Razer Blade-modeller.' },
      { title: 'Skærmudskiftning', body: 'Skærme med høj opdateringsfrekvens repareret med kvalitetsdele.' },
      { title: 'Batteriskift', body: 'Genskab batterilevetiden på ældre enheder.' },
      { title: 'GPU-fejlsøgning', body: 'Artefakter eller nedbrud under belastning, fejlsøgt og repareret.' },
    ],
    whyHeading: 'Hvorfor vælge PCKlinik til Razer Blade-reparation?',
    why: [
      { title: 'Erfaring med tynde gaming-bærbare', body: 'Vi kender det kompakte aluminiumskabinet og dets termiske krav.' },
      { title: 'Hurtig ekspedition', body: 'Vælger du ekspres, er reparationen klar inden for 24 timer. Standard tager 3–4 dage.' },
      { title: 'Fast pris, før vi starter', body: 'Ingen overraskelser.' },
      { title: 'Alle modeller', body: 'Standard- og Studio Edition-modeller af Razer Blade.' },
    ],
    faq: [
      { q: 'Reparerer I Razer Blades RGB-tastaturbelysning, hvis den holder op med at virke?', a: 'Ja — problemer med RGB-belysning fejlsøges på samme måde som enhver anden tastaturrelateret fejl.' },
      { q: 'Er en Razer Blade sværere at reparere end andre gaming-bærbare?', a: 'Det kompakte aluminiumskabinet kræver mere omhu, men vi har erfaring med tynde og lette gaming-bærbardesign.' },
      { q: 'Arbejder I på både standard- og Studio Edition-modellerne af Razer Blade?', a: 'Ja.' },
    ],
    crosslinks: [{ label: 'Gaming-pc’er & specialbyggede', href: '/gaming-pc-reparation/' }, { label: 'Andre mærker & specialbyggede', href: '/andre-maerker-reparation/' }],
    ctaPrimary: 'Kom forbi med din enhed',
  },

];
