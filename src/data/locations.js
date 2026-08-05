// Lokationssider — værkstedet ligger på Frederiksberg; nærområdesider er
// "vi betjener beboere i X", og fjernbyer bruger afhentning/levering/indsendelse.
export const locations = [
  {
        slug: 'computerreparation-koebenhavn', hub: true, name: 'København',
        title: 'Computerreparation i København | 4,9★ · PCKlinik',
        description: 'PC- og Mac-reparation i hele København. 4,9★ hos 493 kunder på Google. Fejlsøgning fra 300 kr., fast pris — du får prisen, før vi går i gang.',
        h1: 'Computerreparation i København', subhead: 'Værksted på Frederiksberg — kort afstand fra det meste af centrum',
        intro: [
                'Vi reparerer PC og Mac for privatpersoner og virksomheder i hele København. Vores værksted ligger på Frederiksberg, kun kort afstand fra det meste af centrum. Standardfejlsøgning koster 300 kr. (2–4 dage), eller ekspres for 600 kr. (1–2 timer) — med reparation og levering inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.',
                'Vi betjener hele byen direkte, plus resten af Danmark via fjernsupport til IT-supportaftaler. Du får altid en fast pris, før vi går i gang.',
              ],
        faq: [
          { q: 'Hvor ligger værkstedet?', a: 'Falkoner Allé 108, Frederiksberg.' },
          { q: 'Tilbyder I afhentning og levering i København?', a: 'Ja, kontakt os for detaljer ud fra din placering.' },
          { q: 'Betjener I både privatpersoner og virksomheder?', a: 'Ja — ud over reparation af enkelte enheder tilbyder vi IT-supportaftaler til virksomheder. Se siden om IT-support til erhverv.' },
              ],
        areas: ['computerreparation-frederiksberg', 'computerreparation-vesterbro', 'computerreparation-vanloese', 'computerreparation-valby', 'computerreparation-nordvest'],
        // NOT individual city pages — those were killed as a doorway-page pattern
        // (near-duplicate stubs, only city name + km swapped). Links to the
        // existing /fjernsupport/ service page instead (expanded 2026-07-30 to
        // also cover indsendelse/send-in for hardware issues, not just remote
        // software support) — no need for a second, near-duplicate page.
        remoteAreas: {
                areaNames: ['Helsingør', 'Hillerød', 'Roskilde', 'Køge', 'Nykøbing Falster'],
                href: '/fjernsupport/',
        },
        crosslinks: [{ label: 'IT-support i København', href: '/it-support-koebenhavn/' }, { label: 'Mac-reparation i København', href: '/mac-reparation-koebenhavn/' }, { label: 'IT-support til erhverv', href: '/it-support-til-erhverv/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  {
        slug: 'mac-reparation-koebenhavn', name: 'København',
        title: 'Mac-reparation i København | PCKlinik',
        description: 'Mac-reparation i hele København — MacBook, iMac, Mac mini & Mac Studio. Uafhængigt værksted, ærlig rådgivning. Fejlsøgning fra 300 kr.',
        h1: 'Mac-reparation i København', subhead: 'Uafhængigt Mac-værksted på Frederiksberg — betjener hele byen',
        intro: [
                'Vi reparerer Mac for privatpersoner og virksomheder i hele København — MacBook, iMac, Mac mini, Mac Studio og Mac Pro, uanset alder eller model. Vores værksted ligger på Frederiksberg, kun kort afstand fra det meste af centrum, og vi kan aftale afhentning/levering eller indsendelse for resten af byen.',
                'Vi er et <strong>uafhængigt Mac-værksted</strong> — ikke en Apple-autoriseret forhandler. Det betyder, at vi fejlsøger og reparerer på komponentniveau i stedet for automatisk at udskifte hele dele. Vi lægger ikke pres på dig for at opgradere eller købe nyt — vi siger ærligt til, om en reparation kan betale sig, eller om det er billigere at udskifte maskinen.',
                'Standardfejlsøgning koster 300 kr. (2–4 dage), eller ekspres for 600 kr. (1–2 timer). Du får altid en fast pris, før vi går i gang.',
              ],
        trustLine: 'Vi er ikke Apple-autoriserede, og det siger vi ligeud — til gengæld får du en tekniker, der ser på komponentniveau, ærlig rådgivning og intet upsalgspres.',
        faq: [
          { q: 'Er I Apple-autoriserede?', a: 'Nej — vi er et uafhængigt værksted. Det betyder typisk en billigere og hurtigere reparation, fordi vi kan arbejde på komponentniveau i stedet for kun at udskifte hele dele. Har din Mac stadig Apple-garanti, bør du tjekke, om en reparation hos os påvirker den.' },
          { q: 'Hvilke Mac-modeller reparerer I?', a: 'Alle — MacBook (Intel og Apple Silicon), iMac, Mac mini, Mac Studio og Mac Pro, uanset alder.' },
          { q: 'Hvad koster en Mac-reparation i København?', a: 'Standardfejlsøgning er 300 kr. (2–4 dage), ekspres er 600 kr. (1–2 timer). Du får en fast pris, før vi går i gang, uanset fejlens omfang.' },
          { q: 'Kan I hente og bringe min Mac i København?', a: 'Ja, kontakt os for detaljer ud fra din placering — ellers kan du komme forbi værkstedet på Frederiksberg.' },
          { q: 'Kan det betale sig at reparere en ældre Mac?', a: 'Ofte ja. Vi giver dig et ærligt svar ud fra fejlens omfang og maskinens alder — ikke bare en automatisk anbefaling om at skifte den ud.' },
              ],
        crosslinks: [{ label: 'Mac-reparation (oversigt)', href: '/mac-reparation/' }, { label: 'MacBook-reparation', href: '/macbook-reparation/' }, { label: 'Computerreparation i København', href: '/computerreparation-koebenhavn/' }, { label: 'IT-support i København', href: '/it-support-koebenhavn/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  {
        slug: 'computerreparation-frederiksberg', name: 'Frederiksberg',
        title: 'Computerreparation på Frederiksberg | PCKlinik',
        description: 'PC- og Mac-reparation på Frederiksberg — værksted på Falkoner Allé 108. Kom forbi uden aftale. Fejlsøgning fra 300 kr., fast pris.',
        h1: 'Computerreparation på Frederiksberg', subhead: 'Falkoner Allé 108 — kom forbi uden aftale',
        intro: [
                'Vores værksted ligger på Falkoner Allé 108, få minutter fra Frederiksberg Centret og i gåafstand fra både Frederiksberg St. og Fasanvej St. Du kan komme forbi uden at bestille tid først. Vi er et hold på syv, og du taler med den tekniker, der rent faktisk kigger på din maskine — ikke et callcenter.',
                'Vi laver alt inden for computere og IT under ét tag: <strong>reparation</strong> af PC og Mac, <strong>køb</strong> af nye og refurbished maskiner, <strong>rådgivning</strong> om hvad der bedst kan betale sig at gøre, og løbende <strong>support</strong> — fjernsupport, on-site-tekniker, hosting, domæner og backup.',
                'Standardfejlsøgning koster 300 kr. (2–4 dage), eller ekspres for 600 kr. (1–2 timer). Du får en fast pris, før vi går i gang.',
                'Studerende på CBS? Vi ligger tæt på, og har du en eksamen om få dage, så sig til — vi har ekspresfejlsøgning. <a href="/studerende/">Se hvad vi tilbyder studerende →</a>',
              ],
        trustLine: 'Vi holder til på Frederiksberg selv — de fleste kunder her er naboer, mindre virksomheder i kvarteret og folk, der lige er gået forbi.',
        faq: [
          { q: 'Kan jeg komme forbi uden at bestille tid?', a: 'Ja. Du er velkommen til at kigge ind på Falkoner Allé 108 i åbningstiden — kan vi nå at kigge på maskinen med det samme, gør vi det.' },
          { q: 'Hvor tæt ligger I på metroen?', a: 'Gåafstand fra både Frederiksberg St. og Fasanvej St., og få minutter fra Frederiksberg Centret.' },
          { q: 'Hvad koster det at få set på maskinen?', a: 'Standardfejlsøgning er 300 kr. (2–4 dage), ekspres er 600 kr. (1–2 timer). Du får en fast pris, før vi går i gang.' },
          { q: 'Hjælper I også virksomheder på Frederiksberg?', a: 'Ja — vi laver fast IT-support til mindre virksomheder i området, både som fjernsupport og med en tekniker ude hos jer.' },
              ],
        crosslinks: [{ label: 'Computer- og Mac-reparation', href: '/computer-reparation/' }, { label: 'IT-support til erhverv', href: '/it-support-til-erhverv/' }, { label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'Computerreparation til studerende (CBS & DTU)', href: '/studerende/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  {
        slug: 'computerreparation-vesterbro', name: 'Vesterbro',
        title: 'Computerreparation på Vesterbro | PCKlinik',
        description: 'PC- og Mac-reparation til beboere på Vesterbro. Værksted i nærliggende Frederiksberg. Fejlsøgning fra 300 kr.',
        h1: 'Computerreparation på Vesterbro', subhead: 'Kort afstand fra vores værksted på Frederiksberg',
        intro: [
                'Vi betjener beboere på Vesterbro fra vores værksted i det nærliggende Frederiksberg. Standardfejlsøgning koster 300 kr. (2–4 dage), eller ekspres for 600 kr. (1–2 timer).',
                'Du får altid en fast pris, før vi går i gang.',
              ],
        faq: [
          { q: 'Er værkstedet nemt at nå fra Vesterbro uden bil?', a: 'Ja — vi ligger kort afstand væk i nabolaget Frederiksberg, nemt med metro, bus eller cykel.' },
          { q: 'Hvor langt er der fra Vesterbro til værkstedet?', a: 'Meget kort afstand — nemt med metro, bus eller cykel.' },
          { q: 'Hvad koster en reparation?', a: 'Fejlsøgning 300 kr. (2–4 dage) eller ekspres for 600 kr. (1–2 timer), altid med fast pris, før vi går i gang.' },
              ],
        crosslinks: [{ label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'IT-support til erhverv', href: '/it-support-til-erhverv/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  {
        slug: 'computerreparation-vanloese', name: 'Vanløse',
        title: 'Computerreparation i Vanløse | PCKlinik',
        description: 'PC- og Mac-reparation til beboere i Vanløse. Værksted på Frederiksberg. Fejlsøgning fra 300 kr., fast pris.',
        h1: 'Computerreparation i Vanløse', subhead: 'Reparation, kort afstand fra Vanløse',
        intro: ['Vi betjener beboere i Vanløse fra vores værksted på Frederiksberg. Standardfejlsøgning koster 300 kr. (2–4 dage), eller ekspres for 600 kr. (1–2 timer).'],
        faq: [
          { q: 'Hvad er den hurtigste måde at få mit device til jer fra Vanløse?', a: 'Kom forbi direkte, eller spørg om afhentning/levering afhængigt af din placering.' },
          { q: 'Hvad koster en reparation?', a: 'Fejlsøgning 300 kr. (2–4 dage) eller ekspres for 600 kr. (1–2 timer), altid med fast pris, før vi går i gang.' },
              ],
        crosslinks: [{ label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'IT-support til erhverv', href: '/it-support-til-erhverv/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  {
        slug: 'computerreparation-valby', name: 'Valby',
        title: 'Computerreparation i Valby | PCKlinik',
        description: 'PC- og Mac-reparation til beboere i Valby. Værksted på Frederiksberg. Fejlsøgning fra 300 kr., fast pris.',
        h1: 'Computerreparation i Valby', subhead: 'Reparation, kort afstand fra Valby',
        intro: ['Vi betjener beboere i Valby fra vores værksted på Frederiksberg. Standardfejlsøgning koster 300 kr. (2–4 dage), eller ekspres for 600 kr. (1–2 timer).'],
        faq: [
          { q: 'Hvad er den hurtigste måde at få mit device til jer fra Valby?', a: 'Kom forbi direkte, eller spørg om afhentning/levering afhængigt af din placering.' },
          { q: 'Hvad koster en reparation?', a: 'Fejlsøgning 300 kr. (2–4 dage) eller ekspres for 600 kr. (1–2 timer), altid med fast pris, før vi går i gang.' },
              ],
        crosslinks: [{ label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'IT-support til erhverv', href: '/it-support-til-erhverv/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  {
        slug: 'computerreparation-nordvest', name: 'Nordvest (NV)',
        title: 'Computerreparation i Nordvest | PCKlinik',
        description: 'PC- og Mac-reparation til beboere i Nordvest (NV). Værksted på Frederiksberg. Fejlsøgning fra 300 kr., fast pris.',
        h1: 'Computerreparation i Nordvest (NV)', subhead: 'Reparation, kort afstand fra Nordvest',
        intro: ['Vi betjener beboere i Nordvest fra vores værksted på Frederiksberg. Standardfejlsøgning koster 300 kr. (2–4 dage), eller ekspres for 600 kr. (1–2 timer).'],
        faq: [
          { q: 'Hvad er den hurtigste måde at få mit device til jer fra Nordvest?', a: 'Kom forbi direkte, eller spørg om afhentning/levering afhængigt af din placering.' },
          { q: 'Hvad koster en reparation?', a: 'Fejlsøgning 300 kr. (2–4 dage) eller ekspres for 600 kr. (1–2 timer), altid med fast pris, før vi går i gang.' },
              ],
        crosslinks: [{ label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'IT-support til erhverv', href: '/it-support-til-erhverv/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  ];
// The 5 individual remote-city pages (Helsingør, Hillerød, Roskilde, Køge,
// Nykøbing Falster) were removed 2026-07-30 — they were a doorway-page
// pattern (near-identical template, only city name + km swapped; 3 of 5
// were word-for-word identical besides that). Consolidated into the
// existing /fjernsupport/ page (src/data/services.js), expanded to also
// cover indsendelse/send-in, not just remote software support — no need
// for a second, near-duplicate page. 301s from the old URLs live in
// public/_redirects.
