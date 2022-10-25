---
title: 4.2 Totallsystemet
sidebar_position: 2
sidebar_label: 4.2 Totallsystemet
description: "Totallsystemet: Noe essensielt for datamaskiner."
---

# Tallsystem

I forrige delkapittel så vi på et eksempel på et 8 bits system der vi hadde 8 strømbrytere vi kunne skru av og på. Vi regnet oss frem til at det da var 256 mulige kombinasjoner bryterene kunne ha. Det kan være lurt å gjøre en slik rekke med 0 og 1 om til et vanlig tall. For eksempel bør det jo være slik at hvis vi skrur på alle bryterene: 
> 1111 1111 

så tilsvarer det 255 (vi starter jo å telle fra 0).

Vi må altså kunne regne tall gitt på et totallsystem om til et titallsystem. La oss først se litt nærmere på hvordan titallsystemet, som vi jo er veldig vant med, egentlig fungerer:
Vi kaller det for et titallsystem fordi vi har 10 unike symboler vi kan bruke for tallene våre (fra 0 til 9). Når vi har vi teller og kommer til 9 har vi "brukt opp" symbolene våre. Da setter vi et 1-tall på "tierplassen" og 0 på enerplassen. Symbolkombinasjonen 1 og 0, altså 10, lærer vi allerede som barn at tilsvarer ti. Tilsvarende fungerer systemet for hver potens av ti, vi fortsetter med en hundreplass, tusenplass og så videre. For oss virker det så naturlig at det er vanskelig å tenke seg at det er noe vi har funnet opp! Trolig er det fordi det er naturlig å telle på fingrene at vi utviklet et titallsystem 

> Mayaindianerene brukte et 20 tallsystem, kan du tenke deg hvorfor?

Hvis vi skulle brukt den samme logikken for å lage et femtallsystem har vi nå bare 5 unike symboler tilgjengelig, altså 0 1 2 3 4. Når vi har kommet til 4 har vi igjen "brukt opp" symbolene våre og må skrive 10. Nå kan ikke 1-tallet representere en tier, vi har jo bare kommet til 4. Dermed har vi nå et 1-tall på **femmer** plassen. Vi teller altså som følger i et femtallsystem:

| Femtallsystemet | Titallsystemet |
|:------------------:|:-----------------:|
|0                 |0                |
|1                 |1                |
|2                 |2                |
|3                 |3                |
|4                 |4                |
|10                |5                |
|11                |6                |
|...               |...              |
|14                |9                |
|20                |10               |
|21                |11               |
|...               |...              |
|44                |24               |
|100               |25               |


Et annet tallsystem som vi ofte bruker for farger er 16-tallsystemet. Da trenger vi 16 unike symboler for tallene fra 0 til 15. Vi har jo ikke så mange, så vi bruker bokstaver:

| Sekstentallsystemet | Titallsystemet |
|:----------------:|:-------------------:|
|0                 |0                    |
|1                 |1                    |
|2                 |2                    |
|3                 |3                    |
|4                 |4                    |
|...               |...                  |
|9                 |9                    |
|A                 |10                   |
|B                 |11                   |
|...               |...                  |
|F                 |15                   |
|10                |16                   |
|...               |...                  |
|FF                |255                  |


I et totallsystem er logikken helt lik, vi har bare to unike symboler, nemlig 0 og 1. Når vi har "brukt opp" disse må vi introdusere en ny plass, altså toerplassen. Tabellen vil da se slik ut:

| Totallsystemet | Titallsystemet  |
|:-----------------|----------------:|
|0                 |0                |
|1                 |1                |
|10                |2                |
|11                |3                |
|100               |4                |
|101               |5                |
|110               |6                |
|111               |7                |
|1000              |8                |
|...               |...              |
|1111 1111         |255              |

:::note

Det kan virke vanskelig å regne om når tallene blir store, men husk at hvert siffer i et titallsystem er en potens av 10: 10-er plassen er 10^1, hundreplassen er 10^2 etc.
Tilsvarende er hver plass en toerpotens i et totallsystem. Vi kan altså regne om for eksempel 1101 1011 ved å regne: 

| $2^7 = 128$ | $2^6 = 64$ | $2^5 = 32$ | $2^4 = 16$ | $2^3 = 8$ | $2^2 = 4$ | $2^1 = 2$ | $2^0 = 1$ | Sum |
|:-----------:|:----------:|:----------:|:----------:|:---------:|:---------:|:---------:|:---------:|:-----:|
|1          |1         |0         |1         |1        |0        |1        |1        |219  |

:::

:::note

## Notasjon

For å vise hvilket tallsystem et tall er oppgitt i, er det vanlig å bruke subskript.
Subskript er et litt mindre tall som ligger til høyre for selve tallet.
For eksempel er tallet $101_{2}$ oppgitt i totallsystemet, mens $101_{10}$ er oppgitt i titallsystemet.

:::

Vi skal ikke regne mye på slike tallsystem i dette faget, men det er fint å ha en viss forståelse av hvordan strømkomponentene i en datamaskin kan gjøres om til en rekke med 0 og 1, som igjen kan gjøres om til "vanlige" tall.


:::tip

1. Hva er $16_{10}$ i totallsystemet?
2. Hva er $101_{2}$ i titallsystemet?
3. Hva er $101_{10}$ i totallsystemet?
4. Hva er $53_{10}$ i totallsystemet?
5. Hva er $10000001_{2}$ i titallsystemet? 
6. Hvilken verdi i titallsystemet har de ulike plassene i tallet $11111111_{2}$?
:::
