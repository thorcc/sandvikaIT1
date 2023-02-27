

obs: påbegynnende kapittel i mellom programmering og flask. Langt unna ferdig

# Hva har vi lært?

Frem til nå har vi jobbet mye med de grunnleggende byggesteinene for utvikling av webapplikasjoner.

- Html som er selve nettsidens språk der vi bestemmer hva slags innhold som skal vises.
- Css der vi plasserer elementene og generelt bestemmer hvordan utseendet skal være
- Javascript er et programmeringsspråk som er skreddersydd for gi flere valgmuligheter og interaktive nettsider.

Nå har vi riktignok ikke sett på javascript enda, men i stedet brukt python for å lære oss grunnleggende programmering. Heldigvis er det ikke så vanskelig å lære seg flere programmeringsspråk når man har kontroll på det første. I tillegg skal vi se at også Python gir oss nye muligheter i utvikling av nettsider.

Selv om vi dermed teoretisk har muligheter til å lage rimelig flotte nettsider er vi fortsatt langt unna virkeligheten. En webutvikler benytter seg av mange verktøy som er ukjente for oss, og det er langt mer som må være på plass før en bedrift kan legge ut en fullt fungerende nettside. I dette kapittelet skal vi ta et steg nærmere virkeligheten og lage nettsidene våre på en litt mer avansert måte.

# Nye begrep

Se for deg nettsiden til en nettbank. Alt som har med utseende og hvordan din interaksjon som bruker av nettsiden fungerer er noe vi kaller for `front-end`. Det er her vi har jobbet så langt. I arbeidslivet finnes det i tillegg masse hjelpeverktøy som gjør jobben enklere for en front-end utvikler. Blant annet ferdiglagde pakker som kalles for `rammeverk`. Språkene som brukes er fortsatt de samme, men rammeverkene gjør samme jobb raskere og mer effektiv. Arbeidsgivere som søker etter front-end utviklere vil ofte sette opp rammeverk de ønsker at søkere er kjent med, så det kan være lurt å eksperimentere litt med disse på egenhånd!

Når du i nettbanken har fylt ut det du trenger for å logge deg på, så må denne informasjonen sendes og behandles. Nettbanken programmeres til sjekke om alt av autentisering stemmer, henter frem relevant informasjon de har om deg og dine kontoer, og sende det tilbake for å generere en nettside som er unik for deg. Hele denne prosessen skjer usynlig for oss brukere og kalles for `back-end`. De som jobber med back-end delen av en nettside bruker ofte litt mer tradisjonelle programmeringsspråk (for eksempel C#, Ruby og Python). Back-end delen av en webapplikasjon deles videre i to, en server som håndterer forespørsler og svar mot klienten (bruker) og en `database` som har all data/informasjon som bedriften trenger. Akkurat som med front-end delen av nettsiden finnes det egne rammeverk for back-end arbeidet.

![web-app](bilder/webapp.png)

Når utseende på en nettside endres som en følge av informasjon vi sender til systemet så kalles det for en `dynamisk` nettside. Det er en motsetning til nettsidene vi har laget hittil som alltid er like for alle som besøker de. Disse kalles for `statiske` nettsider. Fremover skal vi lage noen dynamiske nettsider ved hjelp av et back-end rammeverk som kalles for Flask. Da bruker vi python som programmeringsspråk.
