// Lokationssider — værkstedet ligger i Frederiksberg; nærområdesider er
// "vi betjener beboere i X", og fjernbyer bruger afhentning/levering/indsendelse.
export const locations = [
  {
    slug: 'computerreparation-koebenhavn', hub: true, name: 'København',
    title: 'Computerreparation i København | PCKlinik',
    description: 'PC- og Mac-reparation i København. Værksted i Frederiksberg. Gratis fejlsøgning, fast pris.',
    h1: 'Computerreparation i København', subhead: 'Værksted i Frederiksberg — kort afstand fra det meste af centrum',
    intro: [
      'Vi reparerer PC og Mac for privatpersoner og virksomheder i hele København. Vores værksted ligger i Frederiksberg, kun kort afstand fra det meste af centrum. Standardfejlsøgning er gratis (2–4 dage), eller ekspres for 600 kr. (1–2 timer) — med reparation og levering inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.',
      'Vi betjener hele byen direkte, plus resten af Danmark via fjernsupport til IT-supportaftaler. I får altid en fast pris, før vi går i gang.',
    ],
    faq: [
      { q: 'Hvor ligger værkstedet?', a: 'Falkoner Allé 108, Frederiksberg.' },
      { q: 'Tilbyder I afhentning og levering i København?', a: 'Ja, kontakt os for detaljer ud fra jeres placering.' },
      { q: 'Betjener I både privatpersoner og virksomheder?', a: 'Ja — udover reparation af enkelte enheder tilbyder vi IT-supportaftaler til virksomheder. Se siden om IT-support til erhverv.' },
    ],
    areas: ['computerreparation-frederiksberg', 'computerreparation-vesterbro', 'computerreparation-vanloese', 'computerreparation-valby', 'computerreparation-nordvest'],
    crosslinks: [{ label: 'IT-support til erhverv', href: '/business-it-service-agreement/' }, { label: 'Kontakt', href: '/contact/' }],
  },
  {
    slug: 'computerreparation-frederiksberg', name: 'Frederiksberg',
    title: 'Computerreparation i Frederiksberg | PCKlinik',
    description: 'PC- og Mac-reparation i Frederiksberg, tæt på CBS. Gratis fejlsøgning, fast pris.',
    h1: 'Computerreparation i Frederiksberg', subhead: 'Midt i Frederiksberg — gåafstand fra CBS',
    intro: [
      'Vores værksted ligger på Falkoner Allé, midt i Frederiksberg — samme område som Copenhagen Business School (CBS), der har omkring 2.400–3.000 internationale studerende om året. Hvis din bærbare går ned lige før en eksamen, er vi tæt nok på til faktisk at kunne hjælpe i tide.',
      'Standardfejlsøgning er gratis (2–4 dage), eller ekspres for 600 kr. (1–2 timer) — vigtigt, hvis I er på en stram deadline.',
    ],
    trustLine: 'Vi kender presset op til eksamen og deadlines — sig til, hvis I har en stram tidsplan, så gør vi, hvad vi kan med ekspres fejlsøgning.',
    faq: [
      { q: 'Er der en travlere tid på året for studerendes reparationer?', a: 'Ja, typisk omkring eksamensperioder — er I på en deadline, så sig til, så prioriterer vi med ekspres fejlsøgning, hvor det er muligt.' },
      { q: 'Ligger I tæt på CBS?', a: 'Ja, i samme område som CBS’ bygninger.' },
      { q: 'Kan I hjælpe, hvis jeg skal bruge min bærbare inden en eksamen?', a: 'Sig til om jeres deadline — ekspres fejlsøgning (600 kr., 1–2 timer) er den hurtigste mulighed, og vi er ærlige om, hvorvidt vi kan nå det.' },
    ],
    crosslinks: [{ label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'IT-support til erhverv', href: '/business-it-service-agreement/' }, { label: 'Kontakt', href: '/contact/' }],
  },
  {
    slug: 'computerreparation-vesterbro', name: 'Vesterbro',
    title: 'Computerreparation i Vesterbro | PCKlinik',
    description: 'PC- og Mac-reparation til beboere i Vesterbro. Værksted i nærliggende Frederiksberg. Gratis fejlsøgning.',
    h1: 'Computerreparation i Vesterbro', subhead: 'Kort afstand fra vores værksted i Frederiksberg',
    intro: [
      'Vi betjener beboere i Vesterbro fra vores værksted i det nærliggende Frederiksberg. Standardfejlsøgning er gratis (2–4 dage), eller ekspres for 600 kr. (1–2 timer).',
      'I får altid en fast pris, før vi går i gang.',
    ],
    faq: [
      { q: 'Er værkstedet nemt at nå fra Vesterbro uden bil?', a: 'Ja — vi ligger kort afstand væk i nabolaget Frederiksberg, nemt med metro, bus eller cykel.' },
      { q: 'Hvor langt er der fra Vesterbro til værkstedet?', a: 'Meget kort afstand — nemt med metro, bus eller cykel.' },
      { q: 'Hvad koster en reparation?', a: 'Gratis fejlsøgning (2–4 dage) eller ekspres for 600 kr. (1–2 timer), altid med fast pris, før vi går i gang.' },
    ],
    crosslinks: [{ label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'IT-support til erhverv', href: '/business-it-service-agreement/' }, { label: 'Kontakt', href: '/contact/' }],
  },
  {
    slug: 'computerreparation-vanloese', name: 'Vanløse',
    title: 'Computerreparation i Vanløse | PCKlinik',
    description: 'PC- og Mac-reparation til beboere i Vanløse. Værksted i Frederiksberg. Gratis fejlsøgning, fast pris.',
    h1: 'Computerreparation i Vanløse', subhead: 'Reparation, kort afstand fra Vanløse',
    intro: ['Vi betjener beboere i Vanløse fra vores værksted i Frederiksberg. Standardfejlsøgning er gratis (2–4 dage), eller ekspres for 600 kr. (1–2 timer).'],
    faq: [
      { q: 'Hvad er den hurtigste måde at få mit device til jer fra Vanløse?', a: 'Kom forbi direkte, eller spørg om afhentning/levering afhængigt af jeres placering.' },
      { q: 'Hvad koster en reparation?', a: 'Gratis fejlsøgning (2–4 dage) eller ekspres for 600 kr. (1–2 timer), altid med fast pris, før vi går i gang.' },
    ],
    crosslinks: [{ label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'IT-support til erhverv', href: '/business-it-service-agreement/' }, { label: 'Kontakt', href: '/contact/' }],
  },
  {
    slug: 'computerreparation-valby', name: 'Valby',
    title: 'Computerreparation i Valby | PCKlinik',
    description: 'PC- og Mac-reparation til beboere i Valby. Værksted i Frederiksberg. Gratis fejlsøgning, fast pris.',
    h1: 'Computerreparation i Valby', subhead: 'Reparation, kort afstand fra Valby',
    intro: ['Vi betjener beboere i Valby fra vores værksted i Frederiksberg. Standardfejlsøgning er gratis (2–4 dage), eller ekspres for 600 kr. (1–2 timer).'],
    faq: [
      { q: 'Hvad er den hurtigste måde at få mit device til jer fra Valby?', a: 'Kom forbi direkte, eller spørg om afhentning/levering afhængigt af jeres placering.' },
      { q: 'Hvad koster en reparation?', a: 'Gratis fejlsøgning (2–4 dage) eller ekspres for 600 kr. (1–2 timer), altid med fast pris, før vi går i gang.' },
    ],
    crosslinks: [{ label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'IT-support til erhverv', href: '/business-it-service-agreement/' }, { label: 'Kontakt', href: '/contact/' }],
  },
  {
    slug: 'computerreparation-nordvest', name: 'Nordvest (NV)',
    title: 'Computerreparation i Nordvest | PCKlinik',
    description: 'PC- og Mac-reparation til beboere i Nordvest (NV). Værksted i Frederiksberg. Gratis fejlsøgning, fast pris.',
    h1: 'Computerreparation i Nordvest (NV)', subhead: 'Reparation, kort afstand fra Nordvest',
    intro: ['Vi betjener beboere i Nordvest fra vores værksted i Frederiksberg. Standardfejlsøgning er gratis (2–4 dage), eller ekspres for 600 kr. (1–2 timer).'],
    faq: [
      { q: 'Hvad er den hurtigste måde at få mit device til jer fra Nordvest?', a: 'Kom forbi direkte, eller spørg om afhentning/levering afhængigt af jeres placering.' },
      { q: 'Hvad koster en reparation?', a: 'Gratis fejlsøgning (2–4 dage) eller ekspres for 600 kr. (1–2 timer), altid med fast pris, før vi går i gang.' },
    ],
    crosslinks: [{ label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'IT-support til erhverv', href: '/business-it-service-agreement/' }, { label: 'Kontakt', href: '/contact/' }],
  },
  {
    slug: 'computerreparation-helsingoer', name: 'Helsingør',
    title: 'Computerreparation til kunder i Helsingør | PCKlinik',
    description: 'PC- og Mac-reparation til Helsingør — afhentning, levering eller indsendelse. Værksted i Frederiksberg. Gratis fejlsøgning.',
    h1: 'Computerreparation — Helsingør', subhead: 'Vi har allerede kunder fra Helsingør — sådan fungerer det',
    intro: [
      'Helsingør ligger cirka 45 km fra vores værksted i Frederiksberg — for langt til et hurtigt besøg, men vi har allerede rigtige kunder herfra. De fleste aftaler enten afhentning/levering eller indsendelse, i stedet for personligt fremmøde, selvom I naturligvis er velkomne, hvis I alligevel er i København.',
      'Standardfejlsøgning er gratis (2–4 dage), eller ekspres for 600 kr. (1–2 timer) — med reparation og levering inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.',
    ],
    faq: [
      { q: 'Tilbyder I afhentning og levering til Helsingør?', a: 'Ja, kontakt os for at aftale det ud fra jeres placering.' },
      { q: 'Kan jeg sende mit device i stedet?', a: 'Ja, kontakt os først for instruktioner, inden I sender noget.' },
    ],
    crosslinks: [{ label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'Kontakt', href: '/contact/' }],
  },
  {
    slug: 'computerreparation-hillerod', name: 'Hillerød',
    title: 'Computerreparation til kunder i Hillerød | PCKlinik',
    description: 'PC- og Mac-reparation til Hillerød — afhentning, levering eller indsendelse. Værksted i Frederiksberg. Gratis fejlsøgning.',
    h1: 'Computerreparation — Hillerød', subhead: 'Afhentning, levering eller indsendelse for kunder i Hillerød',
    intro: ['Hillerød ligger cirka 35 km fra vores værksted i Frederiksberg. Vi arrangerer afhentning/levering eller indsendelse for kunder i denne afstand, ved siden af gratis (2–4 dage) eller ekspres (600 kr., 1–2 timer) fejlsøgning.'],
    faq: [
      { q: 'Er afhentning/levering muligt for Hillerød?', a: 'Ja, kontakt os for at aftale det ud fra jeres placering.' },
      { q: 'Kan jeg sende mit device i stedet?', a: 'Ja, kontakt os først for forsendelsesinstruktioner, inden I sender noget.' },
    ],
    crosslinks: [{ label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'Kontakt', href: '/contact/' }],
  },
  {
    slug: 'computerreparation-roskilde', name: 'Roskilde',
    title: 'Computerreparation til kunder i Roskilde | PCKlinik',
    description: 'PC- og Mac-reparation til Roskilde — afhentning, levering eller indsendelse. Værksted i Frederiksberg. Gratis fejlsøgning.',
    h1: 'Computerreparation — Roskilde', subhead: 'Afhentning, levering eller indsendelse for kunder i Roskilde',
    intro: ['Roskilde ligger cirka 35 km fra vores værksted i Frederiksberg. Vi arrangerer afhentning/levering eller indsendelse for kunder i denne afstand, ved siden af gratis (2–4 dage) eller ekspres (600 kr., 1–2 timer) fejlsøgning.'],
    faq: [
      { q: 'Er afhentning/levering muligt for Roskilde?', a: 'Ja, kontakt os for at aftale det ud fra jeres placering.' },
      { q: 'Kan jeg sende mit device i stedet?', a: 'Ja, kontakt os først for forsendelsesinstruktioner, inden I sender noget.' },
    ],
    crosslinks: [{ label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'Kontakt', href: '/contact/' }],
  },
  {
    slug: 'computerreparation-koege', name: 'Køge',
    title: 'Computerreparation til kunder i Køge | PCKlinik',
    description: 'PC- og Mac-reparation til Køge — afhentning, levering eller indsendelse. Værksted i Frederiksberg. Gratis fejlsøgning.',
    h1: 'Computerreparation — Køge', subhead: 'Afhentning, levering eller indsendelse for kunder i Køge',
    intro: ['Køge ligger cirka 40 km fra vores værksted i Frederiksberg. Vi arrangerer afhentning/levering eller indsendelse for kunder i denne afstand, ved siden af gratis (2–4 dage) eller ekspres (600 kr., 1–2 timer) fejlsøgning.'],
    faq: [
      { q: 'Er afhentning/levering muligt for Køge?', a: 'Ja, kontakt os for at aftale det ud fra jeres placering.' },
      { q: 'Kan jeg sende mit device i stedet?', a: 'Ja, kontakt os først for forsendelsesinstruktioner, inden I sender noget.' },
    ],
    crosslinks: [{ label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'Kontakt', href: '/contact/' }],
  },
  {
    slug: 'computerreparation-nykoebing-falster', name: 'Nykøbing Falster',
    title: 'Computerreparation til kunder i Nykøbing Falster | PCKlinik',
    description: 'PC- og Mac-reparation til Nykøbing Falster — indsendelse eller aftalt levering. Værksted i Frederiksberg. Gratis fejlsøgning.',
    h1: 'Computerreparation — Nykøbing Falster', subhead: 'Længere væk, men vi har allerede rigtige kunder herfra',
    intro: [
      'Nykøbing Falster ligger cirka 130 km fra vores værksted i Frederiksberg — virkelig langt væk, men vi har allerede rigtige kunder fra dette område. På denne afstand er indsendelse normalt den mest praktiske løsning, selvom levering/afhentning kan aftales afhængigt af jeres konkrete situation.',
      'Standardfejlsøgning er gratis (2–4 dage), eller ekspres for 600 kr. (1–2 timer) — leveringstiden starter, når jeres device faktisk når frem til værkstedet.',
    ],
    faq: [
      { q: 'Kan det virkelig betale sig at sende et device så langt for reparation?', a: 'Vi har allerede kunder, der gør præcis det — kontakt os, så er vi ærlige omkring, om det giver mening for jeres konkrete situation.' },
      { q: 'Hvordan fungerer indsendelse?', a: 'Kontakt os først for forsendelsesinstruktioner og en idé om processen, inden I sender noget.' },
    ],
    crosslinks: [{ label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'Kontakt', href: '/contact/' }],
  },
];
