
# Hva har vi lært?

Frem til nå har vi jobbet mye med de grunnleggende byggesteinene for utvikling av webapplikasjoner nemlig html og css. Disse er ikke programmeringsspråk, men er en måte og strukturere og posisjonere innholdet en nettside har. Vi har også sett på grunnleggende programmering, i dette kurset python. Javascript er et annet programmeringsspråk som er tilrettelagt for å lett kunne lage interaktive nettsider. Javascript vil være forholdsvis enkelt å lære seg dersom man behersker det vi har vært gjennom med Python godt.

Selv om vi dermed teoretisk har muligheter til å lage rimelig flotte nettsider er vi fortsatt et stykke unna virkeligheten. For å kunne se gjennom nettstedene vi har laget, må vi ha alle filene og bildene liggende på datamaskinen vår. Tilsvarende dersom læreren din skal vurdere nettstedet ditt må du sende alle filene på forhånd. Slik er det jo ikke i virkeligheten, klikker du deg inn på en nettavis slipper du heldigvis å laste ned alle bildene og filene på forhånd. Vi kommuniserer med en server som gir nettleseren html-kode, bilder og annen informasjon som til enhver tid trengs for nettsidene vi besøker.

# Nye begrep

### Front-end og Back-end

Alt som har med utseende og hvordan din interaksjon som bruker av en nettside fungerer er noe vi kaller for `front-end`. Det er på dette nivået vi har jobbet så langt. I virkeligheten ligger som sagt filene til nettsidene du besøker på en egen `server`. Det må dermed foregå kommunikasjon mellom din datamaskin og serveren. 

:::info

Definisjon av en server: En server (også kjent som en tjener) er en programvare som tilbyr («serverer») en eller flere tjenester til andre datamaskiner (klienter) over et datanettverk.  

:::

Et annet mer omfattende eksempel er når du besøker nettbanken din. Når du i har fylt ut det du trenger for å logge deg på, så sendes informasjonen til en server for å behandles. Serveren er programmert til sjekke om din autentisering stemmer, hente frem relevant informasjon om deg og dine kontoer, for så å sende alt tilbake og generere en nettside som er unik for deg. Hele denne prosessen skjer usynlig for oss brukere og kalles derfor for `back-end`. 

![web-app](bilder/webapp.png)

Bildet ovenfor er en enkel modell over hva som skjer. Legg merke til at back-end delen er delt i to, nemlig serveren som hånderer alle forespørsler og en `database` som har all informasjonen nettstedet trenger. Selv om disse to er delt i to betyr ikke det nødvendigvis at de er fysisk separert. Det er snarere forskjellig språk og programvare som håndterer de ulike delene. Nettbanken kommuniserer dermed med databasen for å få all din kontoinformasjon før dette sendes tilbake til din skjerm.

### Statiske og Dynamiske Nettsider

Når utseende på en nettside endres som en følge av informasjon vi sender til systemet så kalles det for en `dynamisk` nettside. Det er en motsetning til nettsidene vi har laget hittil som alltid er like for alle som besøker de. Disse kalles for `statiske` nettsider. 

### Rammeverk/Flask

Alle disse ulike delene har i tillegg masse forskjellige hjelpeverktøy som gjør jobben enklere for de som jobber med front-end, back-end eller begge deler. Blant annet ferdiglagde pakker som kalles for `rammeverk`. Språkene som brukes er fortsatt de samme, men rammeverkene gjør samme jobb raskere og mer effektiv. 

![bilde med oversikt over rammeverk?]()

I resten av kapittelet skal vi lage noen dynamiske nettsider der vi også skal programmere back-end serveren. Vi skal bruke et rammeverk som kalles for Flask for å hjelpe oss. 
