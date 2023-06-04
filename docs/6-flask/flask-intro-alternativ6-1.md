
## Hva har vi lært?

Frem til nå har vi jobbet mye med de grunnleggende byggesteinene for utvikling av webapplikasjoner nemlig html og css. Disse er ikke programmeringsspråk, men er en måte og strukturere og posisjonere innholdet en nettside har. Vi har også sett på grunnleggende programmering ved hjelp av python. Alternativt kunn vi ha jobbet med Javascript, et populært programmeringsspråk for web-utvilkere som er tilrettelagt for å lett kunne lage interaktive nettsider. Vi valgte Python fordi det er enklere å forholde seg til, men dersom du behersker Python er det ikke spesielt vanskelig å lære seg grunnleggende Javascript på egenhånd.

Vi har nå teoretisk gode muligheter og verktøy for å lage fine nettsider, men vi er fortsatt et stykke unna virkeligheten. Html, css- og mediefilene vi lager må for eksempel ligge lagret på datamaskinen for at de skal kunne vises. Heldigvis er det ikke slik med internettet du er vant med. Dersom du besøker en nettavis slipper du jo å laste ned alle bildene og filene på forhånd. Så hvordan fungerer det? Filene eksisterer fortsatt, men de ligger på en server. Når vi skriver eller klikker på en lenke på nettet kommuniserer vi med en slik server, som gir nettleseren all informasjon som til enhver tid trengs for å kunne vise nettsiden. I dette kapittelet skal vi forsiktig nærme oss denne måten å lage nettsteder på. Vi starter med litt teori om hvordan det hele fungerer.

:::info

Definisjon av en server: En server (også kjent som en tjener) er en programvare som tilbyr («serverer») en eller flere tjenester til andre datamaskiner (klienter) over et datanettverk.  

:::

## Nye begrep

#### Front-end og Back-end

For å få bedre oversikt over miljøet rundt en web-applikasjon er det endel nye begrepep vi bør kjenne til. Alt som har med utseende og hvordan din interaksjon som **bruker** av en nettside fungerer er noe vi kaller for `front-end`. Det er på dette nivået vi har jobbet så langt. Som sagt har ikke brukeren tilgang til noen av filene våre, de ligger på sin egen `server`. Det må dermed foregå kommunikasjon mellom din datamaskin og serveren. Alt som behandles på serveren og tilslutt sendes tilbake til din datamaskin er "usynlige" prosesser som kalles for `back-end`. 

Se for deg at du besøker nettbanken din. Når du i har fylt ut det du trenger for å logge deg på, så sendes informasjonen til en server for å behandles. Serveren er programmert til sjekke om din autentisering stemmer, hente frem relevant informasjon om deg og dine kontoer, for så å sende alt tilbake og generere en nettside som er unik for deg. Skillet mellom hva som skjer på din datamaskin, mot det som skjer usynlig for deg kan illustreres ved følgende bilde:

![web-app](bilder/webapp.png)

Bildet ovenfor er en enkel modell over hva som skjer. Legg merke til at back-end delen er delt i to, nemlig serveren som hånderer alle forespørsler og en `database` som har all informasjonen nettstedet trenger. Selv om disse to er delt i to betyr ikke det nødvendigvis at de er fysisk separert. Det er snarere forskjellig språk og programvare som håndterer de ulike delene. Nettbankens server kommuniserer dermed med databasen for å få all din kontoinformasjon før dette sendes tilbake til din skjerm.

#### Statiske og Dynamiske Nettsider

Når utseende på en nettside endres som en følge av informasjon vi sender til systemet så kalles det for en `dynamisk` nettside. Det er en motsetning til nettsidene vi har laget hittil som alltid er like for alle som besøker de. Disse kalles for `statiske` nettsider. 

#### Rammeverk/Flask

For å raskt kunne sette opp en slik arkitektur og utvikle nettsidene våre så effektivt som mulig finnes det en masse forskjellige hjelpeverktøy tilgjengelig. En kategori av slike verktøy kalles for `rammeverk`. Det finnes mange rammeverk som hjelper med de ulike delene vi har sett på(css, front-end, back-end), og dermed  er det preferanse som avgjør ulike bedrifter/utviklere ender opp med å bruke. Som med mye annet i IT-verdenen er det mest jobb å lære seg de første rammeverkene, deretter blir det stadig lettere.

*legg til bilde med oversikt?*

I resten av kapittelet skal vi lage noen dynamiske nettsider der vi skal bruke et rammeverk. Vi har valgt oss Flask, mest fordi det bruker Python som programmeringsspråk, og fordi det er relativt enkelt å forholde seg til. Flask er et rammeverk for back-end delen av en nettside, det hjelper oss med å bygge opp tidligere nevnte kommunikasjon mellom bruker og server. Vi jobber fortsatt på vår egen datamaskin, men bruker Flask til å sette opp et såkalt virtuelt miljø der vi styrer både serveren og brukeropplevelsen samtidig. I neste delkapittel ser vi nærmere på hvordan vi installerer alt vi trenger, og de grunnleggende prinsippene vi bruker.