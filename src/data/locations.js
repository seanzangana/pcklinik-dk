// Lokationssider — værkstedet ligger på Frederiksberg; nærområdesider er
// "vi betjener beboere i X", og fjernbyer bruger indsendelse (post/kurér).
// NB: PCKlinik tilbyder ikke afhentning/levering som ydelse (bekræftet af
// Shan 2026-08-06) — skriv det aldrig ind igen, kunden kommer selv forbi
// eller sender enheden med post/kurér, hvis afstanden er for stor.
export const locations = [
  {
        slug: 'computerreparation-koebenhavn', hub: true, name: 'København',
        title: 'Computerreparation i København | 4,9★ · PCKlinik',
        description: 'PC- og Mac-reparation i hele København. 4,9★ hos 494 kunder på Google. Fejlsøgning fra 300 kr. inkl. moms, fast pris — du får prisen, før vi går i gang.',
        h1: 'Computerreparation i København', subhead: 'Værksted på Frederiksberg — kort afstand fra det meste af centrum',
        intro: [
                'Vi reparerer PC og Mac for privatpersoner og virksomheder i hele København. Vores værksted ligger på Frederiksberg, kun kort afstand fra det meste af centrum. Standardfejlsøgning koster 300 kr. inkl. moms (3–4 dage), eller ekspres for 600 kr. inkl. moms (1–2 timer) — reparationen klar inden for 24 timer, hvis der ikke skal bestilles specielle reservedele.',
                'Vi betjener hele byen direkte, plus resten af Danmark via fjernsupport til IT-supportaftaler. Du får altid en fast pris, før vi går i gang.',
              ],
        faq: [
          { q: 'Hvor ligger værkstedet?', a: 'Falkoner Allé 108, Frederiksberg.' },
          { q: 'Kalder I det computerreparation eller computer reparation?', a: 'Begge dele — "computerreparation" og "computer reparation" (og "pc reparation") dækker det samme hos os. Vi reparerer både stationære pc’er og bærbare i hele København, med fast pris før vi går i gang.' },
          { q: 'Skal jeg bestille tid, før jeg kommer forbi?', a: 'Nej — du er velkommen til at kigge ind i åbningstiden uden at bestille tid først.' },
          { q: 'Betjener I både privatpersoner og virksomheder?', a: 'Ja — ud over reparation af enkelte enheder tilbyder vi IT-supportaftaler til virksomheder. Se siden om IT-support til erhverv.' },
              ],
        areas: ['computerreparation-frederiksberg', 'computerreparation-vesterbro', 'computerreparation-oesterbro', 'computerreparation-amager', 'computerreparation-indre-by', 'computerreparation-christianshavn', 'computerreparation-vanloese', 'computerreparation-valby', 'computerreparation-nordvest', 'computerreparation-broenshoej', 'computerreparation-bispebjerg'],
        // NOT individual city pages — those were killed as a doorway-page pattern
        // (near-duplicate stubs, only city name + km swapped). Links to the
        // existing /fjernsupport/ service page instead (expanded 2026-07-30 to
        // also cover indsendelse/send-in for hardware issues, not just remote
        // software support) — no need for a second, near-duplicate page.
        remoteAreas: {
                areaNames: ['Helsingør', 'Hillerød', 'Roskilde', 'Køge', 'Nykøbing Falster'],
                href: '/fjernsupport/',
        },
        crosslinks: [{ label: 'IT-support i København', href: '/it-support-koebenhavn/' }, { label: 'Mac-reparation i København', href: '/mac-reparation-koebenhavn/' }, { label: 'IT-support til erhverv', href: '/it-support-til-erhverv/' }, { label: 'Storkøbenhavn og omegn', href: '/computerreparation-storkoebenhavn/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  {
        slug: 'mac-reparation-koebenhavn', name: 'København',
        title: 'Mac-reparation i København | PCKlinik',
        description: 'Mac-reparation i hele København — MacBook, iMac, Mac mini & Mac Studio. Uafhængigt værksted, ærlig rådgivning. Fejlsøgning fra 300 kr. inkl. moms',
        h1: 'Mac-reparation i København', subhead: 'Uafhængigt Mac-værksted på Frederiksberg — betjener hele byen',
        intro: [
                'Vi reparerer Mac for privatpersoner og virksomheder i hele København — MacBook, iMac, Mac mini, Mac Studio og Mac Pro, uanset alder eller model. Vores værksted ligger på Frederiksberg, kun kort afstand fra det meste af centrum, og vi betjener hele byen — du er velkommen til at komme forbi, uanset hvilken bydel du bor i.',
                'Vi er et <strong>uafhængigt Mac-værksted</strong> — ikke en Apple-autoriseret forhandler. Det betyder, at vi fejlsøger og reparerer på komponentniveau i stedet for automatisk at udskifte hele dele, og at vi ofte er 30-50 % billigere end et officielt Apple-værksted. Vi lægger ikke pres på dig for at opgradere eller købe nyt — vi siger ærligt til, om en reparation kan betale sig, eller om det er billigere at udskifte maskinen.',
                'Standardfejlsøgning koster 300 kr. inkl. moms (3–4 dage), eller ekspres for 600 kr. inkl. moms (1–2 timer). Du får altid en fast pris, før vi går i gang — og prisgaranti på MacBook-reparationer.',
              ],
        trustLine: 'Vi er ikke Apple-autoriserede, og det siger vi ligeud — til gengæld får du en tekniker, der ser på komponentniveau, ærlig rådgivning, intet upsalgspres, og ofte en pris, der er 30-50 % lavere end et officielt Apple-værksted.',
        faq: [
          { q: 'Er I Apple-autoriserede?', a: 'Nej — vi er et uafhængigt værksted. Det betyder typisk en billigere og hurtigere reparation, fordi vi kan arbejde på komponentniveau i stedet for kun at udskifte hele dele. Har din Mac stadig Apple-garanti, bør du tjekke, om en reparation hos os påvirker den.' },
          { q: 'Hvilke Mac-modeller reparerer I?', a: 'Alle — MacBook (Intel og Apple Silicon), iMac, Mac mini, Mac Studio og Mac Pro, uanset alder.' },
          { q: 'Hvad koster en Mac-reparation i København?', a: 'Standardfejlsøgning er 300 kr. inkl. moms (3–4 dage), ekspres er 600 kr. inkl. moms (1–2 timer). Du får en fast pris, før vi går i gang, uanset fejlens omfang — og prisgaranti på MacBook-reparationer.' },
          { q: 'Kan det betale sig at reparere en ældre Mac?', a: 'Ofte ja. Vi giver dig et ærligt svar ud fra fejlens omfang og maskinens alder — ikke bare en automatisk anbefaling om at skifte den ud.' },
              ],
        crosslinks: [{ label: 'Mac-reparation (oversigt)', href: '/mac-reparation/' }, { label: 'MacBook-reparation', href: '/macbook-reparation/' }, { label: 'Computerreparation i København', href: '/computerreparation-koebenhavn/' }, { label: 'IT-support i København', href: '/it-support-koebenhavn/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  {
        slug: 'computerreparation-frederiksberg', name: 'Frederiksberg',
        title: 'Computerreparation på Frederiksberg | PCKlinik',
        description: 'PC- og Mac-reparation på Frederiksberg — værksted på Falkoner Allé 108. Kom forbi uden aftale. Fejlsøgning fra 300 kr. inkl. moms, fast pris.',
        h1: 'Computerreparation på Frederiksberg', subhead: 'Falkoner Allé 108 — kom forbi uden aftale',
        badges: ['Fremmøde uden bestilling — kom bare forbi', 'Falkoner Allé 108 — gåafstand fra metroen'],
        intro: [
                'Vores værksted ligger på Falkoner Allé 108, få minutter fra Frederiksberg Centret og i gåafstand fra både Frederiksberg St. og Fasanvej St. Du kan komme forbi uden at bestille tid først. Vi er et hold på syv, og du taler med den tekniker, der rent faktisk kigger på din maskine — ikke et callcenter.',
                'Vi har kunder fra hele det nære Frederiksberg — omkring Gammel Kongevej, Godthåbsvej, Frederiksberg Allé, Smallegade, Peter Bangs Vej, Nordre Fasanvej, Howitzvej og Finsensvej, og fra Frederiksberg Centret, Solbjerg Plads, Frederiksberg Have og Forum.',
                'Vi laver alt inden for computere og IT under ét tag: <strong>reparation</strong> af PC og Mac, <strong>køb</strong> af nye og refurbished maskiner, <strong>rådgivning</strong> om hvad der bedst kan betale sig at gøre, og løbende <strong>support</strong> — fjernsupport, on-site-tekniker, hosting, domæner og backup.',
                'Kunderne, vi ser i butikken, spænder bredt: studerende fra CBS med en eksamen lige om hjørnet, ansatte fra kontorerne ved Solbjerg Plads, mindre virksomheder i kvarteret, der har brug for en fast IT-aftale, og naboer, der bare lige er gået forbi.',
                'Standardfejlsøgning koster 300 kr. inkl. moms (3–4 dage), eller ekspres for 600 kr. inkl. moms (1–2 timer). Du får en fast pris, før vi går i gang.',
                'Studerende på CBS? Vi ligger tæt på, og har du en eksamen om få dage, så sig til — vi har ekspresfejlsøgning. <a href="/studerende/">Se hvad vi tilbyder studerende →</a>',
              ],
        trustLine: 'Vi holder til på Frederiksberg selv — de fleste kunder her er naboer, mindre virksomheder i kvarteret og folk, der lige er gået forbi.',
        faq: [
          { q: 'Laver I bærbar reparation, eller kun stationære pc’er?', a: 'Begge dele. Bærbar reparation, pc reparation og Mac-reparation — vi tager alle typer computere ind på Falkoner Allé 108, uanset mærke.' },
          { q: 'Kan jeg komme forbi uden at bestille tid?', a: 'Ja. Du er velkommen til at kigge ind på Falkoner Allé 108 i åbningstiden — kan vi nå at kigge på maskinen med det samme, gør vi det.' },
          { q: 'Hvor tæt ligger I på metroen?', a: 'Gåafstand fra både Frederiksberg St. og Fasanvej St., og få minutter fra Frederiksberg Centret.' },
          { q: 'Hvor kan jeg parkere, når jeg kommer forbi?', a: 'Der er gadeparkering i nærheden af Falkoner Allé. Kommer du med metro eller S-tog, ligger vi i gåafstand fra både Frederiksberg St. og Fasanvej St.' },
          { q: 'Hvad koster det at få set på maskinen?', a: 'Standardfejlsøgning er 300 kr. inkl. moms (3–4 dage), ekspres er 600 kr. inkl. moms (1–2 timer). Du får en fast pris, før vi går i gang.' },
          { q: 'Hjælper I også virksomheder på Frederiksberg?', a: 'Ja — vi laver fast IT-support til mindre virksomheder i området, både som fjernsupport og med en tekniker ude hos jer.' },
              ],
        crosslinks: [{ label: 'Computer- og Mac-reparation', href: '/computer-reparation/' }, { label: 'IT-support til erhverv', href: '/it-support-til-erhverv/' }, { label: 'IT-support på Frederiksberg', href: '/it-support-frederiksberg/' }, { label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'Computerreparation til studerende (CBS & DTU)', href: '/studerende/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  {
        slug: 'computerreparation-vesterbro', name: 'Vesterbro',
        title: 'Computerreparation på Vesterbro | PCKlinik',
        description: 'PC- og Mac-reparation til beboere på Vesterbro. Værksted i nærliggende Frederiksberg. Fejlsøgning fra 300 kr. inkl. moms',
        h1: 'Computerreparation på Vesterbro', subhead: 'Kort afstand fra vores værksted på Frederiksberg',
        intro: [
                'Vi betjener beboere på Vesterbro fra vores værksted i det nærliggende Frederiksberg. Standardfejlsøgning koster 300 kr. inkl. moms (3–4 dage), eller ekspres for 600 kr. inkl. moms (1–2 timer).',
                'Du får altid en fast pris, før vi går i gang.',
              ],
        faq: [
          { q: 'Er værkstedet nemt at nå fra Vesterbro uden bil?', a: 'Ja — vi ligger kort afstand væk i nabolaget Frederiksberg, nemt med metro, bus eller cykel.' },
          { q: 'Hvor langt er der fra Vesterbro til værkstedet?', a: 'Meget kort afstand — nemt med metro, bus eller cykel.' },
          { q: 'Hvad koster en reparation?', a: 'Fejlsøgning 300 kr. inkl. moms (3–4 dage) eller ekspres for 600 kr. inkl. moms (1–2 timer), altid med fast pris, før vi går i gang.' },
              ],
        crosslinks: [{ label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'Mac-reparation i København', href: '/mac-reparation-koebenhavn/' }, { label: 'IT-support til erhverv', href: '/it-support-til-erhverv/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  {
        slug: 'computerreparation-vanloese', name: 'Vanløse',
        title: 'Computerreparation i Vanløse | PCKlinik',
        description: 'PC- og Mac-reparation til beboere i Vanløse. Værksted på Frederiksberg. Fejlsøgning fra 300 kr. inkl. moms, fast pris.',
        h1: 'Computerreparation i Vanløse', subhead: 'Reparation, kort afstand fra Vanløse',
        intro: ['Vi betjener beboere i Vanløse fra vores værksted på Frederiksberg. Standardfejlsøgning koster 300 kr. inkl. moms (3–4 dage), eller ekspres for 600 kr. inkl. moms (1–2 timer).'],
        faq: [
          { q: 'Hvad er den hurtigste måde at få mit device til jer fra Vanløse?', a: 'Kom forbi direkte til værkstedet på Frederiksberg — det er den hurtigste måde.' },
          { q: 'Hvad koster en reparation?', a: 'Fejlsøgning 300 kr. inkl. moms (3–4 dage) eller ekspres for 600 kr. inkl. moms (1–2 timer), altid med fast pris, før vi går i gang.' },
              ],
        crosslinks: [{ label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'IT-support til erhverv', href: '/it-support-til-erhverv/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  {
        slug: 'computerreparation-valby', name: 'Valby',
        title: 'Computerreparation i Valby | PCKlinik',
        description: 'PC- og Mac-reparation til beboere i Valby. Værksted på Frederiksberg. Fejlsøgning fra 300 kr. inkl. moms, fast pris.',
        h1: 'Computerreparation i Valby', subhead: 'Reparation, kort afstand fra Valby',
        intro: ['Vi betjener beboere i Valby fra vores værksted på Frederiksberg. Standardfejlsøgning koster 300 kr. inkl. moms (3–4 dage), eller ekspres for 600 kr. inkl. moms (1–2 timer).'],
        faq: [
          { q: 'Hvad er den hurtigste måde at få mit device til jer fra Valby?', a: 'Kom forbi direkte til værkstedet på Frederiksberg — det er den hurtigste måde.' },
          { q: 'Hvad koster en reparation?', a: 'Fejlsøgning 300 kr. inkl. moms (3–4 dage) eller ekspres for 600 kr. inkl. moms (1–2 timer), altid med fast pris, før vi går i gang.' },
              ],
        crosslinks: [{ label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'IT-support til erhverv', href: '/it-support-til-erhverv/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  {
        slug: 'computerreparation-nordvest', name: 'Nordvest (NV)',
        title: 'Computerreparation i Nordvest | PCKlinik',
        description: 'PC- og Mac-reparation til beboere i Nordvest (NV). Værksted på Frederiksberg. Fejlsøgning fra 300 kr. inkl. moms, fast pris.',
        h1: 'Computerreparation i Nordvest (NV)', subhead: 'Reparation, kort afstand fra Nordvest',
        intro: ['Vi betjener beboere i Nordvest fra vores værksted på Frederiksberg. Standardfejlsøgning koster 300 kr. inkl. moms (3–4 dage), eller ekspres for 600 kr. inkl. moms (1–2 timer).'],
        faq: [
          { q: 'Hvad er den hurtigste måde at få mit device til jer fra Nordvest?', a: 'Kom forbi direkte til værkstedet på Frederiksberg — det er den hurtigste måde.' },
          { q: 'Hvad koster en reparation?', a: 'Fejlsøgning 300 kr. inkl. moms (3–4 dage) eller ekspres for 600 kr. inkl. moms (1–2 timer), altid med fast pris, før vi går i gang.' },
              ],
        crosslinks: [{ label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'IT-support til erhverv', href: '/it-support-til-erhverv/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  {
        slug: 'computerreparation-oesterbro', name: 'Østerbro',
        title: 'Computerreparation på Østerbro | PCKlinik',
        description: 'PC- og Mac-reparation for beboere på Østerbro. Værksted på Falkoner Allé 108 — kom forbi uden aftale. Fejlsøgning fra 300 kr. inkl. moms Ring 91 81 61 81.',
        h1: 'Computerreparation på Østerbro', subhead: 'Kort tur med Cityringen (M3) til Frederiksberg',
        intro: [
                'Bor eller arbejder du på Østerbro, og driller din computer eller Mac? Med Cityringen (M3) er du på Frederiksberg St. på under 15 minutter, og vores værksted ligger få minutters gang derfra på Falkoner Allé 108. Du kan komme forbi uden at bestille tid.',
                'Vi laver alt inden for computere og IT under ét tag: <strong>reparation</strong> af PC og Mac, <strong>køb</strong> af nye og refurbished maskiner, <strong>rådgivning</strong> om hvad der bedst kan betale sig, og løbende <strong>support</strong> til virksomheder. Vi ser en del Mac-brugere og hjemmearbejdspladser fra Østerbro — bærbare, der skal holde til daglig pendling, og maskiner, der en mandag morgen pludselig ikke vil starte.',
                'Standardfejlsøgning koster 300 kr. inkl. moms (3–4 dage), eller ekspres for 600 kr. inkl. moms (1–2 timer, reparationen klar inden for 24 timer). Du får altid en fast pris, før vi går i gang.',
              ],
        faq: [
          { q: 'Hvor lang tid tager turen fra Østerbro?', a: 'Med Cityringen (M3) er du på Frederiksberg St. på under 15 minutter, og vores værksted ligger få minutters gang derfra på Falkoner Allé 108.' },
          { q: 'Reparerer I MacBook?', a: 'Ja — vi ser mange Mac-brugere fra Østerbro. Vi reparerer alle MacBook-generationer, samt iMac, Mac mini, Mac Studio og Mac Pro.' },
          { q: 'Kan jeg komme forbi uden at bestille tid?', a: 'Ja — du er velkommen til at kigge ind i åbningstiden uden at bestille tid først.' },
          { q: 'Hjælper I virksomheder på Østerbro?', a: 'Ja — ud over reparation af enkelte enheder tilbyder vi faste IT-supportaftaler til virksomheder, uanset hvor i byen I holder til.' },
              ],
        crosslinks: [{ label: 'MacBook-reparation', href: '/macbook-reparation/' }, { label: 'Mac-reparation i København', href: '/mac-reparation-koebenhavn/' }, { label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  {
        slug: 'computerreparation-amager', name: 'Amager',
        title: 'Computerreparation på Amager | PCKlinik',
        description: 'PC- og Mac-reparation for beboere på Amager. Værksted på Falkoner Allé 108 — kom forbi uden aftale. Fejlsøgning fra 300 kr. inkl. moms Ring 91 81 61 81.',
        h1: 'Computerreparation på Amager', subhead: 'Metro hele vejen til Frederiksberg',
        intro: [
                'Fra Amager er der metro hele vejen — M1 eller M2 mod centrum og videre til Frederiksberg St., så er du få minutters gang fra vores værksted på Falkoner Allé 108.',
                'Vi laver alt inden for computere og IT under ét tag: <strong>reparation</strong> af PC og Mac, <strong>køb</strong> af nye og refurbished maskiner, <strong>rådgivning</strong> og løbende <strong>support</strong>. Vi hjælper både familier, studerende fra KUA og Ørestad og de mange mindre virksomheder på Amager. Kom forbi uden aftale, så kigger vi på maskinen.',
                'Standardfejlsøgning koster 300 kr. inkl. moms (3–4 dage), eller ekspres for 600 kr. inkl. moms (1–2 timer, reparationen klar inden for 24 timer). Du får altid en fast pris, før vi går i gang.',
              ],
        faq: [
          { q: 'Hvordan kommer jeg til værkstedet fra Amager?', a: 'Med metro — M1 eller M2 mod centrum og videre til Frederiksberg St., få minutters gang fra Falkoner Allé 108.' },
          { q: 'Har I noget til studerende, der skal bruge deres computer til en eksamen?', a: 'Ja — vælg ekspresfejlsøgning (600 kr. inkl. moms, 1–2 timer), så er den klar inden for 24 timer. Se også vores side for studerende.' },
          { q: 'Hvor hurtigt er min computer klar?', a: 'Ekspres (600 kr. inkl. moms) er klar inden for 24 timer. Standard (300 kr. inkl. moms) tager 3–4 dage. Du får altid en forventet tid.' },
          { q: 'Reparerer I alle mærker?', a: 'Ja — alle større PC- og Mac-mærker samt specialbyggede computere.' },
              ],
        crosslinks: [{ label: 'Computerreparation til studerende (CBS & DTU)', href: '/studerende/' }, { label: 'Computer reparation (oversigt)', href: '/computer-reparation/' }, { label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  {
        slug: 'computerreparation-indre-by', name: 'Indre By',
        title: 'Computerreparation i Indre By | PCKlinik',
        description: 'PC- og Mac-reparation for beboere og virksomheder i Indre By. Værksted på Falkoner Allé 108. Ekspresfejlsøgning fra 600 kr. inkl. moms. Ring 91 81 61 81.',
        h1: 'Computerreparation i Indre By', subhead: 'Metro eller cykeltur ad Gammel Kongevej til Falkoner Allé 108',
        intro: [
                'Fra Indre By er der ikke langt: metro til Frederiksberg St. eller en kort cykeltur ad Gammel Kongevej, så står du ved Falkoner Allé 108.',
                'Vi laver alt inden for computere og IT under ét tag: <strong>reparation</strong>, <strong>køb</strong>, <strong>rådgivning</strong> og løbende <strong>support</strong>. Mange af vores kunder fra Indre By er kontorer og mindre butikker, hvor maskinen skal virke nu. Derfor tilbyder vi ekspresfejlsøgning (600 kr. inkl. moms, 1–2 timer) med reparationen klar inden for 24 timer, hvis det haster.',
                'Standardfejlsøgning koster 300 kr. inkl. moms (3–4 dage). Du får altid en fast pris, før vi går i gang.',
              ],
        faq: [
          { q: 'Hvor hurtigt kan det gå?', a: 'Vælg ekspresfejlsøgning (600 kr. inkl. moms, 1–2 timer), så er reparationen klar inden for 24 timer. Standard (300 kr. inkl. moms) tager 3–4 dage.' },
          { q: 'Kan I hjælpe virksomheder i Indre By?', a: 'Ja — ud over enkeltreparationer tilbyder vi faste IT-supportaftaler til virksomheder, med garanteret svartid.' },
          { q: 'Hvad koster fejlsøgning?', a: 'Standard er 300 kr. inkl. moms (3–4 dage), ekspres er 600 kr. inkl. moms (1–2 timer). Du får en fast pris, før vi går i gang.' },
          { q: 'Skal jeg bestille tid?', a: 'Nej — du er velkommen til at komme forbi i åbningstiden uden at bestille tid først.' },
              ],
        crosslinks: [{ label: 'IT-support til erhverv', href: '/it-support-til-erhverv/' }, { label: 'Computer reparation (oversigt)', href: '/computer-reparation/' }, { label: 'Mac-reparation i København', href: '/mac-reparation-koebenhavn/' }, { label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  {
        slug: 'computerreparation-christianshavn', name: 'Christianshavn',
        title: 'Computerreparation på Christianshavn | PCKlinik',
        description: 'PC- og Mac-reparation for beboere og selvstændige på Christianshavn. Værksted på Falkoner Allé 108. Fejlsøgning fra 300 kr. inkl. moms Ring 91 81 61 81.',
        h1: 'Computerreparation på Christianshavn', subhead: 'Kort tur med M1/M2 til Frederiksberg',
        intro: [
                'Christianshavn ligger få metrostationer fra Frederiksberg — M1 eller M2, og en kort gåtur fra Frederiksberg St. til Falkoner Allé 108.',
                'Vi laver alt inden for computere og IT under ét tag: <strong>reparation</strong>, <strong>køb</strong>, <strong>rådgivning</strong> og løbende <strong>support</strong>. Vi hjælper en del selvstændige og kreative erhverv fra Christianshavn, hvor Mac ofte er arbejdsredskabet. Går den ned, står arbejdet stille — vi siger ærligt, hvor hurtigt vi kan have den klar.',
                'Standardfejlsøgning koster 300 kr. inkl. moms (3–4 dage), eller ekspres for 600 kr. inkl. moms (1–2 timer, reparationen klar inden for 24 timer).',
              ],
        faq: [
          { q: 'Reparerer I MacBook og iMac?', a: 'Ja — alle MacBook-generationer, samt iMac, Mac mini, Mac Studio og Mac Pro.' },
          { q: 'Hvor hurtigt kan I have den klar?', a: 'Ekspres (600 kr. inkl. moms) er klar inden for 24 timer. Standard (300 kr. inkl. moms) tager 3–4 dage.' },
          { q: 'Kan jeg komme forbi uden aftale?', a: 'Ja — du er velkommen til at kigge ind i åbningstiden uden at bestille tid.' },
          { q: 'Hjælper I selvstændige og små virksomheder?', a: 'Ja — vi ser en del selvstændige og kreative erhverv, og tilbyder også faste IT-supportaftaler, hvis I har brug for løbende hjælp.' },
              ],
        crosslinks: [{ label: 'Mac-reparation (oversigt)', href: '/mac-reparation/' }, { label: 'MacBook-reparation', href: '/macbook-reparation/' }, { label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  {
        slug: 'computerreparation-broenshoej', name: 'Brønshøj',
        title: 'Computerreparation i Brønshøj | PCKlinik',
        description: 'PC- og Mac-reparation for beboere i Brønshøj. Værksted på Falkoner Allé 108, kort vej via Frederikssundsvej. Fejlsøgning fra 300 kr. inkl. moms',
        h1: 'Computerreparation i Brønshøj', subhead: 'Kort vej ad Frederikssundsvej til Falkoner Allé 108',
        intro: [
                'Fra Brønshøj er der kort vej ned ad Frederikssundsvej til Falkoner Allé 108 — i bil, bus eller på cykel.',
                'Vi ser mange familiecomputere fra Brønshøj: maskiner, der er blevet langsomme, harddiske, der begynder at svigte, og bærbare, der trænger til en SSD-opgradering frem for at blive skiftet ud. Vi laver alt inden for computere og IT under ét tag: <strong>reparation</strong>, <strong>køb</strong>, <strong>rådgivning</strong> og løbende <strong>support</strong>.',
                'Standardfejlsøgning koster 300 kr. inkl. moms (3–4 dage), eller ekspres for 600 kr. inkl. moms (1–2 timer, reparationen klar inden for 24 timer).',
              ],
        faq: [
          { q: 'Kan det betale sig at reparere en gammel familiecomputer?', a: 'Ofte ja — vi giver dig altid et ærligt svar ud fra fejlens omfang og maskinens alder. Se vores guide: Reparere eller købe ny computer.' },
          { q: 'Kan I redde mine billeder og filer?', a: 'I mange tilfælde ja. Fortæl os om problemet, når du kommer forbi, så vurderer vi mulighederne.' },
          { q: 'Hvad koster fejlsøgning?', a: 'Standard er 300 kr. inkl. moms (3–4 dage), ekspres er 600 kr. inkl. moms (1–2 timer). Du får en fast pris, før vi går i gang.' },
          { q: 'Hvordan kommer jeg bedst til værkstedet fra Brønshøj?', a: 'Ned ad Frederikssundsvej til Falkoner Allé 108 — i bil, bus eller på cykel.' },
              ],
        crosslinks: [{ label: 'Reparere eller købe ny computer?', href: '/reparere-eller-koebe-ny-computer/' }, { label: 'SSD-opgradering', href: '/ssd-opgradering/' }, { label: 'Backup & datagendannelse', href: '/backup-og-datagendannelse/' }, { label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  {
        slug: 'computerreparation-bispebjerg', name: 'Bispebjerg',
        title: 'Computerreparation i Bispebjerg | PCKlinik',
        description: 'PC- og Mac-reparation for beboere i Bispebjerg. Værksted på Falkoner Allé 108 — kom forbi uden aftale. Fejlsøgning fra 300 kr. inkl. moms',
        h1: 'Computerreparation i Bispebjerg', subhead: 'Kort tur til Falkoner Allé 108',
        intro: [
                'Bispebjerg ligger tæt på — kort tur til Falkoner Allé 108, og du kan komme forbi uden at bestille tid.',
                'Vi ser mange kunder fra Bispebjerg og Nordvest, hvor spørgsmålet oftest er: kan den reddes, eller er det spildte penge? Vi siger det ærligt — også når reparation ikke kan betale sig. Vi laver alt inden for computere og IT under ét tag: <strong>reparation</strong>, <strong>køb</strong>, <strong>rådgivning</strong> og løbende <strong>support</strong>.',
                'Standardfejlsøgning koster 300 kr. inkl. moms (3–4 dage), eller ekspres for 600 kr. inkl. moms (1–2 timer, reparationen klar inden for 24 timer).',
              ],
        faq: [
          { q: 'Kan det betale sig at reparere min computer?', a: 'Det afhænger af fejlen og maskinens alder — vi giver dig altid et ærligt svar, også når det bedre kan betale sig at købe en anden. Se vores guide: Reparere eller købe ny computer.' },
          { q: 'Hvad koster fejlsøgning?', a: 'Standard er 300 kr. inkl. moms (3–4 dage), ekspres er 600 kr. inkl. moms (1–2 timer). Du får en fast pris, før vi går i gang.' },
          { q: 'Sælger I refurbished computere?', a: 'Ja — testede og istandsatte computere med garanti efter kvalitetsgrad: A-kvalitet 3 år, B-kvalitet 2 år, C-kvalitet 1 år.' },
          { q: 'Hvornår er min computer klar?', a: 'Ekspres er klar inden for 24 timer. Standard tager 3–4 dage. Du får altid en forventet tid.' },
              ],
        crosslinks: [{ label: 'Computerreparation i Nordvest', href: '/computerreparation-nordvest/' }, { label: 'Reparere eller købe ny computer?', href: '/reparere-eller-koebe-ny-computer/' }, { label: 'Refurbished computere', href: '/butik/computere/refurbished/' }, { label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'Kontakt', href: '/kontakt/' }],
  },
  {
        slug: 'computerreparation-storkoebenhavn', name: 'Storkøbenhavn',
        title: 'Computerreparation i Storkøbenhavn | PCKlinik',
        description: 'Kunder fra hele Storkøbenhavn kommer til vores værksted på Falkoner Allé 108 — eller sender maskinen ind. Fast pris efter fejlsøgning. Ring 91 81 61 81.',
        h1: 'Computerreparation i Storkøbenhavn', subhead: 'Ét værksted på Frederiksberg — kunder fra hele Storkøbenhavn',
        intro: [
                'Vi har ét værksted — på Falkoner Allé 108 på Frederiksberg — men vores kunder kommer fra hele Storkøbenhavn: Rødovre, Hvidovre, Gentofte, Hellerup, Glostrup, Herlev, Gladsaxe, Ballerup, Lyngby og videre ud.',
                'Hvorfor tager folk turen? Fordi vi er et rigtigt værksted med et erfarent hold på syv, ikke en kæde. Du taler med den tekniker, der reparerer din maskine. Du får en fast pris, før vi går i gang. Og vi siger ærligt fra, når en reparation ikke kan betale sig — også selvom det koster os opgaven.',
                'Fra det meste af Storkøbenhavn er du hos os på 15–25 minutter i bil, og der er gode forbindelser med metro og S-tog til Frederiksberg.',
                'Kan du ikke komme forbi? Så send din computer eller Mac til os. Vi fejlsøger, sender dig et fast tilbud, og sender maskinen retur, når den er klar. Se <a href="/fjernsupport/">fjernsupport</a> for fjernsupport til virksomheder.',
                'Vi laver alt inden for computere og IT under ét tag: <strong>reparation</strong>, <strong>køb</strong>, <strong>rådgivning</strong> og løbende <strong>support</strong>. Standardfejlsøgning koster 300 kr. inkl. moms (3–4 dage), eller ekspres for 600 kr. inkl. moms (1–2 timer, reparationen klar inden for 24 timer). Har du en gammel maskine, køber vi den, tager den i bytte mod en refurbished eller ny computer, eller tager den af hænderne på dig med sikker datasletning og genbrug, hvis den ikke er noget værd. Vores refurbished computere kommer med garanti efter kvalitetsgrad: A-kvalitet 3 år, B-kvalitet 2 år, C-kvalitet 1 år.',
              ],
        faq: [
          { q: 'Kommer der kunder fra hele Storkøbenhavn?', a: 'Ja — fra Rødovre, Hvidovre, Gentofte, Hellerup, Glostrup, Herlev, Gladsaxe, Ballerup, Lyngby og resten af omegnen. Vi har kun det ene værksted, på Falkoner Allé 108.' },
          { q: 'Kan jeg sende min maskine ind i stedet for at komme forbi?', a: 'Ja. Kontakt os først for forsendelsesinstruktioner, så fejlsøger vi og sender dig et fast tilbud, før vi går i gang.' },
          { q: 'Hvor lang tid tager det?', a: 'Standard er 3–4 dage, ekspres (600 kr. inkl. moms) er klar inden for 24 timer. Ved indsendelse begynder tiden at tælle, når maskinen når frem til værkstedet.' },
          { q: 'Hvorfor ikke bare bruge et værksted i min egen by?', a: 'Det må du gerne — men mange af vores kunder fra omegnen vælger os for erfaringen, den faste pris og op til 3 års garanti på A-kvalitets refurbished computere. Du taler desuden altid med det samme hold, der kender din maskine.' },
          { q: 'Hjælper I også virksomheder uden for København?', a: 'Ja — via fjernsupport til IT-supportaftaler, uanset hvor i landet virksomheden ligger.' },
              ],
        crosslinks: [{ label: 'Fjernsupport', href: '/fjernsupport/' }, { label: 'Refurbished computere', href: '/butik/computere/refurbished/' }, { label: 'København (oversigt)', href: '/computerreparation-koebenhavn/' }, { label: 'Kontakt', href: '/kontakt/' }],
        areaServedOverride: ['Rødovre', 'Hvidovre', 'Gentofte', 'Hellerup', 'Glostrup', 'Herlev', 'Gladsaxe', 'Ballerup', 'Lyngby', { '@type': 'Place', name: 'Storkøbenhavn' }],
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
