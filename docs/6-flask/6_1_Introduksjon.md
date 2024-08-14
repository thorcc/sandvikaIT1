---
title: 6.1 Introduksjon
sidebar_position: 1
sidebar_label: 6.1 Introduksjon
description: Velkommen til Flask!
---


## Veien videre

Frem til nå har vi jobbet mye med de grunnleggende byggesteinene for utvikling av webapplikasjoner nemlig html og css. Disse er ikke programmeringsspråk, men er en måte og strukturere og posisjonere innholdet en nettside har. Vi har også sett på grunnleggende programmering ved hjelp av python. Alternativt kunne vi ha jobbet med Javascript, et populært programmeringsspråk for web-utvilkere som er tilrettelagt for å lett kunne lage interaktive nettsider. Vi valgte Python fordi du har jobbet med det tidligere og fordi det er relativt enkelt og forholde seg til. Det viktigste er uansett å lære seg grunnleggende programmering, dersom du behersker Python er det ikke spesielt vanskelig å lære seg Javascript eller andre språk på egenhånd.

Selv om vi har muligheten til å lage relativt imponerende nettsted nå, er vi fortsatt et stykke unna virkeligheten. Html, css- og mediefilene vi har laget til nå må for eksempel ligge lagret på datamaskinen for at de skal kunne vises. Heldigvis er det ikke slik vi er vant med internettet. Dersom du besøker en nettavis slipper du jo å laste ned alle bildene og filene på forhånd. Så hvordan fungerer det da? Filene eksisterer fortsatt, men de ligger på en server. Når vi skriver eller klikker på en lenke på nettet kommuniserer vi med en slik server, som gir nettleseren all informasjon som til enhver tid trengs for å kunne vise nettsiden. I dette kapittelet skal vi forsiktig nærme oss denne måten å lage nettsteder på. Vi starter med litt teori om hvordan det hele fungerer.

:::info

Definisjon av en server: En server (også kjent som en tjener) er en programvare som tilbyr («serverer») en eller flere tjenester til andre datamaskiner (klienter) over et datanettverk.  

:::

## Nye begrep

#### Front-end og Back-end

For å få bedre oversikt over miljøet rundt en web-applikasjon er det endel nye begrepep vi bør kjenne til. Alt som har med utseende og hvordan din interaksjon som **bruker** av en nettside fungerer er noe vi kaller for `front-end`. Det er på dette nivået vi har jobbet så langt. Som sagt har ikke brukeren tilgang til noen av filene våre, de ligger på sin egen `server`. Det må dermed foregå kommunikasjon mellom din datamaskin og serveren. Alt som behandles på serveren og tilslutt sendes tilbake til din datamaskin er "usynlige" prosesser som kalles for `back-end`. 

Se for deg at du besøker nettbanken din. Når du i har fylt ut det du trenger for å logge deg på, så sendes informasjonen til en server for å behandles. Serveren er programmert til sjekke om din autentisering stemmer, hente frem relevant informasjon om deg og dine kontoer, for så å sende alt tilbake og generere en nettside som er unik for deg. Hvordan det som skjer på din datamaskin og det som skjer usynlig mot serveren kan illustreres ved følgende bilde:

![web-app](bilder/webapp.png)

Bildet ovenfor er en enkel modell. Vi logger inn og sender informasjon om brukernavn og passord til nettbankens server. Denne kommuniserer med en `database` for å få all din kontoinformasjon før dette sendes tilbake til din skjerm. 

Legg merke til at back-end delen er delt i to, nemlig serveren som hånderer alle forespørsler  databasen som har all informasjonen nettstedet trenger. Selv om disse to er delt i to betyr ikke det nødvendigvis at de er fysisk separert. Det er snarere forskjellig språk og programvare som håndterer de ulike delene. 

#### Statiske og Dynamiske Nettsider

Når utseende på en nettside endres som en følge av informasjon vi sender til systemet så kalles det for en `dynamisk` nettside. Det er en motsetning til nettsidene vi har laget hittil som alltid er like for alle som besøker de. Disse kalles for `statiske` nettsider. 

#### Rammeverk/Flask

For å raskt kunne sette opp en slik arkitektur og utvikle nettsidene våre så effektivt som mulig finnes det en masse forskjellige hjelpeverktøy tilgjengelig. En kategori av slike verktøy kalles for `rammeverk`. Det finnes mange rammeverk som hjelper med de ulike delene vi har sett på(css, front-end, back-end), og dermed  er det preferanse som avgjør ulike bedrifter/utviklere ender opp med å bruke. Som med mye annet i IT-verdenen er det mest jobb å lære seg de første rammeverkene, deretter blir det stadig lettere.



I resten av kapittelet skal vi lage noen dynamiske nettsider der vi skal bruke et rammeverk. Vi har valgt oss Flask, mest fordi det bruker Python som programmeringsspråk, og fordi det er relativt enkelt å forholde seg til sammenlignet med tilsvarende rammeverk.

Flask gir oss i grove trekk tre nye muligheter:

- **Interaksjon mellom nettside og serverkode:** Vi må lære å skrive såkalte `ruter` (engelsk: route). Med disse kan vi sende informasjon mellom bruker og server.

- **Enkel Python programmering i html-filer:** Et alternativ til javascript, slik at vi kan kode mer avanserte nettsider.

- **Verktøy for å unngå dobbeltarbeid:** Vi kan definere maler slik at vi slipper å skrive samme html- og css kode mer enn en gang.

Vi skal se på hver av disse for seg, og så vise hvordan man lager avanserte nettsted ved å kombinere prinsippene.
