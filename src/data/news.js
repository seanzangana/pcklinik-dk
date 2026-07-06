// Nyheder (rendered statically). Newest first. Native Danish content.
export const news = [
  {
    slug: 'saadan-ved-du-om-dit-baerbare-batteri-skal-skiftes',
    title: 'Sådan ved du, om dit bærbare batteri skal skiftes',
    date: '2026-07-05',
    category: 'Guides',
    description: 'Fem klare tegn på, at batteriet i din bærbare er på vej ud — og hvordan du tjekker dets reelle sundhed, før du bruger penge.',
    body: `
<p>Batterier i bærbare slides op. Det er helt normalt — de er sliddele, og efter et par hundrede opladninger holder de simpelthen mindre end før. Det svære er at vide, hvornår et svindende batteri er gået fra "lidt irriterende" til "skift det nu". Her er de tegn, der er værd at holde øje med.</p>
<h2>1. Det tømmes hurtigt, selv fra fuld opladning</h2>
<p>Det mest oplagte. Fik du før seks-syv timer, og leder du nu efter en oplader efter halvanden time, er batteriets kapacitet faldet. Et lille fald hvert år er forventeligt. Et pludseligt eller kraftigt fald er ikke.</p>
<h2>2. Den slukker ved 30 % eller 40 %</h2>
<p>Et sundt batteri kører ned til en lav procent, før den bærbare går i dvale. Et træt batteri kan fejllæse sin egen opladning og slukke for tidligt — du er på 35 %, og skærmen bliver sort uden varsel. Det er et stærkt tegn på, at cellerne er ved at svigte.</p>
<h2>3. Den virker kun i stikket</h2>
<p>Hvis maskinen straks dør, når du tager opladeren ud, holder batteriet næsten ingenting. Nogle kører en bærbar sådan i månedsvis, men det gør en bærbar computer til en stationær, der dør ved hvert strømsvigt.</p>
<h2>4. Batteriet er hævet</h2>
<p>Dette handler om sikkerhed, ikke kun bekvemmelighed. Hvis trackpad’en føles hævet, kabinettet buler ud, eller den bærbare vipper på et fladt bord, så stop med at bruge den og kom forbi. Et hævet batteri er en reel risiko og bør ikke blive siddende i maskinen.</p>
<h2>5. Systemet melder dårlig batterisundhed</h2>
<p>På en Mac: hold Alternativ (Option) nede og klik på batteri-ikonet, eller tjek Systemindstillinger → Batteri → Batterisundhed. På Windows: åbn en kommandoprompt og kør <code>powercfg /batteryreport</code> for at se designkapacitet over for nuværende kapacitet. Er det nuværende tal langt under det oprindelige, bekræfter tallene det, du allerede kan mærke.</p>
<h2>Værd at skifte batteriet — eller den bærbare?</h2>
<p>På de fleste maskiner er et batteriskift hurtigt og langt billigere end en ny computer, så det kan sagtens betale sig, hvis resten af den bærbare er fin. På en meget gammel maskine med andre problemer er det måske ikke det. Vi giver altid et ærligt svar som en del af den faste pris i stedet for at presse en udskiftning på dig, du ikke har brug for.</p>
<p>Har du set nogle af disse tegn, klarer vi batteriskift til bærbare og MacBook — se vores side om <a href="/mac-battery-replacement/">Mac-batteriskift</a>, eller <a href="/contact/">kontakt os</a>, så tjekker vi batteriets reelle sundhed for dig.</p>
`,
  },
  {
    slug: 'de-mest-almindelige-mac-opstartsskaerme-og-hvad-de-betyder',
    title: 'De mest almindelige Mac-opstartsskærme, og hvad de betyder',
    date: '2026-07-03',
    category: 'Guides',
    description: 'En mappe med et spørgsmålstegn, en cirkel med en streg, en lås — her er, hvad ikonerne på en Mac-opstartsskærm faktisk fortæller dig.',
    body: `
<p>Når en Mac ikke vil starte normalt op, viser den ofte et symbol i stedet for skrivebordet. Hvert symbol peger på et forskelligt problem, og at vide hvad er hvad sparer en masse gætteri. Her er dem, vi ser oftest.</p>
<h2>En mappe med et blinkende spørgsmålstegn</h2>
<p>Mac’en kan ikke finde et system at starte op fra. Det betyder som regel, at startdisken ikke bliver fundet, eller at macOS mangler eller er beskadiget. Nogle gange er det en løs diskforbindelse; nogle gange er selve disken ved at svigte. Er dine filer ikke sikkerhedskopieret, er det her, du bør stoppe og få det tjekket i stedet for at eksperimentere.</p>
<h2>En cirkel med en streg igennem (forbudsskilt)</h2>
<p>Mac’en fandt et system, men kan ikke bruge det — ofte fordi macOS-versionen ikke er kompatibel med maskinen, eller installationen er beskadiget. En geninstallation løser det som regel, men årsagen er værd at få bekræftet først.</p>
<h2>En låseskærm, der beder om firmware- eller PIN-kode</h2>
<p>Dette er en sikkerhedsfunktion, ikke en fejl. Mac’en er låst på hardwareniveau og skal bruge den korrekte kode. Er det din maskine, og har du glemt koden, kan gendannelse være omstændelig — og har du købt Mac’en brugt, mens den stadig var låst, er det en snak, du skal tage med sælgeren.</p>
<h2>En statuslinje, der aldrig bliver færdig</h2>
<p>Mac’en forsøger at indlæse, men sætter sig fast undervejs — typisk et software- eller opdateringsproblem, nogle gange en disk, der har svært ved at læse. Sætter den sig fast samme sted længe ved hvert forsøg, løser det ikke sig selv.</p>
<h2>En globus, eller en roterende globus</h2>
<p>Mac’en forsøger at starte op over internettet (Internet Recovery), fordi den ikke kunne starte fra den indbyggede disk. Det peger igen på et manglende eller beskadiget system på disken.</p>
<h2>Hvad du skal gøre</h2>
<p>Nogle af disse har sikre gør-det-selv-trin, men flere — især spørgsmålstegns-mappen og en fastlåst statuslinje — kan involvere en disk, der er ved at svigte, hvor hver ekstra genstart er en lille risiko for dine data. Ser du nogle af disse, dækker vores <a href="/error-messages/">Fejlmeddelelser</a>-guide flere koder, og vores <a href="/mac-repair/">Mac-reparation</a>-team kan diagnosticere præcis, hvad symbolet betyder for din maskine. Er du i tvivl, så <a href="/contact/">kontakt os</a>, før dataene bliver sværere at redde.</p>
`,
  },
  {
    slug: '3-2-1-backup-reglen-og-hvorfor-den-betyder-noget',
    title: '3-2-1-backup-reglen, og hvorfor den betyder noget',
    date: '2026-07-01',
    category: 'Guides',
    description: 'En enkel, huskbar regel for at tage backup af dine data ordentligt — så én fejl, tyveri eller forglemmelse aldrig sletter det hele.',
    body: `
<p>De fleste, der mister data, ignorerede ikke backup med vilje. De havde én kopi på den bærbare og nogle gange en ekstra på en disk lige ved siden af. Så svigtede den bærbare, blev stjålet, eller en ransomware-infektion krypterede begge på én gang. 3-2-1-reglen findes for at gøre det scenarie næsten umuligt, og den er nem at huske.</p>
<h2>Tre kopier af dine data</h2>
<p>Behold dine arbejdsfiler plus to backups. Pointen er redundans: dør én kopi, har du stadig to. Én backup er bedre end ingen, men en enkelt backup, der svigter på det forkerte tidspunkt, efterlader dig med ingenting.</p>
<h2>På to forskellige typer medier</h2>
<p>Hav ikke begge backups på samme slags ting. En ekstern harddisk og en cloud-konto, for eksempel — ikke to USB-nøgler fra samme parti. Forskellige medier svigter på forskellige måder, så ved at sprede på to typer kan en enkelt fejl ikke tage begge på én gang.</p>
<h2>Én kopi opbevaret et andet sted</h2>
<p>Det er den del, folk springer over, og den er den vigtigste. Er alle dine kopier ét sted, kan en brand, oversvømmelse, indbrud eller en spildt kop kaffe hen over bordet tage det hele. En kopi et andet sted — cloud-backup eller en disk opbevaret et andet sted — overlever alt, hvad der sker med dit hjem eller kontor.</p>
<h2>Sådan ser det ud i praksis</h2>
<p>En almindelig, nem opsætning: dine filer ligger på den bærbare (kopi et), en ekstern disk derhjemme tager backup automatisk (kopi to, andet medie), og en cloud-backuptjeneste holder en tredje kopi et andet sted. Sæt de automatiske op én gang, og de kører stille i baggrunden. Det er hele pointen — en backup, du skal huske at tage, er en backup, du før eller siden glemmer.</p>
<h2>Den ene ting, der er værd at tjekke</h2>
<p>En backup, du aldrig har testet, er endnu ikke rigtig en backup. Åbn en gang imellem en fil fra backuppen for at bekræfte, at den faktisk gendannes. Det tager et minut og er forskellen på "jeg har en backup" og "jeg havde det, jeg troede var en backup".</p>
<p>Vil du hellere have det sat ordentligt og automatisk op — så det bare kører, uden du tænker over det — er det præcis, hvad vores <a href="/data-backup-and-recovery/">Backup &amp; datagenskabelse</a>-service gør. Og har du allerede mistet noget, så <a href="/contact/">kontakt os</a> hurtigt; jo før vi kigger, jo bedre er oddsene for at få det tilbage.</p>
`,
  },
];
