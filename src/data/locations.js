// Lokationssider — værkstedet ligger på Frederiksberg; nærområdesider er
// "vi betjener beboere i X", og fjernbyer bruger afhentning/levering/indsendelse.
export const locations = [
  {
        slug: 'computerreparation-koebenhavn', hub: true, name: 'København',
        title: 'Computerreparation i København | PCKlinik',
        description: 'PC- og Mac-reparation i København. Værksted på Frederiksberg. Fejlsøgning fra 300 kr., fast pris.',
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
        crosslinks: [{ label: 'IT-support til erhverv', href: '/it-support-til-erhverv/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  {
        slug: 'computerreparation-frederiksberg', name: 'Frederiksberg',
        title: 'Computerreparation på Frederiksberg | PCKlinik',
        description: 'PC- og Mac-reparation på Frederiksberg, tæt på CBS. Fejlsøgning fra 300 kr., fast pris.',
        h1: 'Computerreparation på Frederiksberg', subhead: 'Midt på Frederiksberg — gåafstand fra CBS',
        intro: [
                'Vores værksted ligger på Falkoner Allé 108 — få minutter fra Frederiksberg Centret og gåafstand fra metroen (Frederiksberg St. og Fasanvej St.), i samme område som Copenhagen Business School (CBS), der har omkring 2.400–3.000 internationale studerende om året. Hvis din bærbare går ned lige før en eksamen, er vi tæt nok på til faktisk at kunne hjælpe i tide.',
                'Standardfejlsøgning koster 300 kr. (2–4 dage), eller ekspres for 600 kr. (1–2 timer) — vigtigt, hvis du er på en stram deadline.',
              ],
        trustLine: 'Vi kender presset op til eksamen og deadlines — sig til, hvis du har en stram tidsplan, så gør vi, hvad vi kan med ekspresfejlsøgning.',
        faq: [
          { q: 'Er der en travlere tid på året for studerendes reparationer?', a: 'Ja, typisk omkring eksamensperioder — er du på en deadline, så sig til, så prioriterer vi med ekspresfejlsøgning, hvor det er muligt.' },
          { q: 'Ligger I tæt på CBS?', a: 'Ja, i samme område som CBS’ bygninger.' },
          { q: 'Kan I hjælpe, hvis jeg skal bruge min bærbare inden en eksamen?', a: 'Sig til om din deadline — ekspresfejlsøgning (600 kr., 1–2 timer) er den hurtigste mulighed, og vi er ærlige om, hvorvidt vi kan nå det.' },
              ],
        crosslinks: [{ label: 'Computerreparation til studerende (CBS & DTU)', href: '/studerende/' }, { label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'IT-support til erhverv', href: '/it-support-til-erhverv/' }, { label: 'Kontakt', href: '/kontakt/' }],
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
