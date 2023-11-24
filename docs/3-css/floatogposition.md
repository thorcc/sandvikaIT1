---
title: 3.7 Position
sidebar_position: 7
sidebar_label: 3.7 Position
description: CSS-position
---

# Float og Position

Før grid og flex var en del av hverdagen var det langt mer kronglete å få plassert elementer slik vi ville ha de på nettsiden vår. I starten fantes ikke CSS i det hele tatt og da brukte man stort sett bare usynlige tabeller som man fylte med innhold. Når CSS ble introdusert var det med relativt begrensede muligheter for plassering. Da brukte man veldig ofte egenskapene `float` og `position`. Etterhvert som flex (og til slutt grid) ble utviklet, brukes de andre egenskapene mindre enn før, men det er fortsatt en del nyttige ting vi kan gjøre med dem!


## Position

Position er en CSS-egenskap der man presist bestemmer hvor et element skal ligge ved å "dytte" det på plass. Egenskapen kan ha en av flere verdier, og vi skal gå igjennom de viktigste her:

* `position: static;`
* `position: relative;`
* `positive: absolute;`
* `position: fixed;`

## position: static

Alle elementene er i utgangspunktet satt til å være statiske. Det betyr at de følger de vanlige plasserings-reglene slik vi er vant til. Block-elementer legger seg under hverandre og inline-elementer legger seg ved siden av hverandre. Det er derfor som regel ingen grunn til å sette noen elementer til static, men det er greit å vite at verdien finnes. Statiske elementer kan heller ikke "dyttes" slik de andre kan.

#### Eksempel

For å få en god forståelse av hvordan de andre verdiene fungerer lager vi først kode for noen "bokser":

```html
<div class="forelder">
    <div class="boks" id="en">En</div>
    <div class="boks" id="to">To</div>
    <div class="boks" id="tre">Tre</div>
    <div class="boks" id="fire">Fire</div>
</div>
```

Med påfølgende CSS:

```css
.forelder{
    border: dotted black 2px;
    display: inline-block;
}

.boks{
    display: inline-block;
    background: lightblue;
    width: 100px;
    height: 100px;
}

#tre{
    background: pink;
}
```

:::note

Legg merke til at inline-block (i motsetning til bare inline), lar oss sette høyde og bredde på elementene. Alternativt kunne vi brukt flex, men eksempelet er best når elementene ikke er dynamiske.

:::

![Static](./bilder/3_6%20-%20floatogposition/position1.png)

## position: relative

En relativ posisjon lar oss flytte på plasseringen på et element basert på der det allerede ligger. Hvis vi setter relativ posisjon følger det de vanlige reglene (statisk), men vi kan nå "dytte" elementet i alle retninger:

```css
#tre{
    background: pink;
    position: relative;
    left: 25px;
    top: 25px;
}
```

Vi "dytter" altså elementet 25 piksler nedover (fra toppen), og 25 piksler mot høyre (fra venstre). Da ser det ut som følger:

![Relative](./bilder/3_6%20-%20floatogposition/position2.png)

## position: absolute 

Legg merke til at den relative posisjonen av boksen etterlater et tomrom der den opprinnelig var. Med absolutt posisjonering blir det motsatt. Da fjernes boksen fra sin opprinnelige posisjon og legger seg der hvor forelderen starter. Vi kan så dytte den på samme måte og får følgende effekt:

```css
#tre{
    background: pink;
    position: relative;
    left: 25px;
    top: 25px;
}
```

![Absolutt](./bilder/3_6%20-%20floatogposition/position3.png)

## relativ og absolute kombinert

Et problem med absolutt posisjonering er at elementene ofte ikke oppfører seg "riktig" når vi endrer på størrelsen av skjermen. Det er også litt forvirrende å forstå hvordan man får flyttet et absolutt posisjonert element dit man vil. Dersom vi ønsker å begrense området et absolutt kan eksistere i, må vi lage en forelder som rammer inn både området og absolutt-elementet. Se på følgende eksempel der vi ønsker å legge tekst over et bilde:

```html
<div id="ramme">
    <img src="bilde" alt="Et stort landskap">
    <p>Tekst oppå bildet</p>

</div>
```
Ved å bygge opp elementene som følger kan vi sette forelder-elementet til position relative og p-elementet til position:absolute. Da vil posisjoneringen av p-elementet bestemmes av forelderen som følger:

```css
#ramme{
    position: relative;
}

#ramme>p{
    position: absolute;
    bottom: 20%;
    left: 20%;
    z-index: 2; /*tvinger elementet til å ligge oppå bildet */
}

```

I dette kurset vil du stort sett alltid bruke position: absolute sammen med en relativ forelder.







#### Eksempel: Drop-down meny

La oss bruke det vi har sett på av relativ og absolutt posisjonering for å lage et drop-down meny. Vi ser av tipset ovenfor at vi må ha et *relativt forelder element* og *absolutte barn*. Drop-down menyen vår skal bestå av en synlig lenke og tre skjulte lenker som skal dukke opp når vi holder musepekeren over den synlige lenken:

```html
<div class="dropdown">
    <a href="#">Klær</a>
    <div class="usynlig">
        <a href="#">Jakker</a>
        <a href="#">Kjoler</a>
        <a href="#">Topper</a>
    </div>
</div>
```

La oss nå legge på CSS. Siden `a`-elementene skal legge seg under hverandre endrer vi disse fra `inline` til `block`-elementer. `dropdown`-klassen skal være relativ og `usynlig`-klassen skal være absolutt. Da vil barna automatisk legge seg under "Klær". Vi gjør lenkene usynlige ved å sette `display: none;` på usynlig-klassen. Legg merke til den siste selektoren, når vi holder musepekeren over det relative elementet så skal de usynlige barna dukke opp ved at vi endrer de til `display: block;`.

```css
.dropdown{
    position: relative;
}
.usynlig{
    position: absolute;
    display: none;
}
.usynlig a{
    display: block;
}
.dropdown:hover .usynlig{
    display: block;
}
```

Prøv selv med å skrive koden du ser over. Prøv så å lage en ordentlig navigasjonsbar med drop-down meny (farger, bakgrunn, padding etc). Legg merke til at det finnes mange alternative måter å lage langt mer spenstige drop-down menyer på, men det venter vi med for nå.

## position: fixed

Med denne verdien låser vi et element på plass uansett hvordan vi scroller på siden. Tenk deg for eksempel en navbar som alltid er med på toppen av siden uansett hvor langt ned du har kommet. Da må du sette header elementet til fixed, men i tillegg må vi sørge for at headeren alltid kommer over resten av nettsiden. Det gjør vi ved å øke z-indeksen. Prøv selv med en navigasjonsbar du har laget, legg til følgende inn i CSS koden din:

```css
header{
    position: fixed;
    z-index: 2;
    width: 100%; /* Vi endrer på de grunnleggende egenskapene til header, og må da spesifisere bredden.
}
```

## Oppgaver

**3.7.1**

Til denne oppgaven får du en pakke av læreren din med video og bilder fra pexels.com

Lag en forenklet versjon av https://www.visitnorway.com/

a. Bruk flex til å lage en navigasjonsfane

b. Posisjoner en tekst oppå en video

c. Bruk grid eller flex for å gjenskape en bilderekke

d. Bruk grid eller flex for å lage den blå boksen med lenker