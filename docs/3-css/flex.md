---
title: 3.4 Flex
sidebar_position: 4
sidebar_label: 3.4 Flex
description: Bli kjent med flex som åpner flere muligheter for utseende.
---

# Flex

## Plassering av elementer

Hittil har vi sett litt hvordan man kan endre stil på elementene vi ønsker, og vi har jobbet med egenskapene til "Boks-modellen". Ettersom man har hatt et ønske om å ha bedre kontroll over hvordan elementer skal plasseres, er det utviklet flere mer avanserte teknikker som vi nå skal se nærmere på. Den første av disse kalles `flex`. Vi bruker gjerne flex når vi skal posisjonere elementer i en dimensjon, altså på en linje eller en rad. 


## Posisjonering av lenker med Flex

Som vanlig er det best å starte med et eksempel. De aller fleste nettsteder du besøker består av mange undersider, og har da en felles fane der du lett kan navigere deg rundt. La oss bruke flex til å lage en slik fane med lenker på toppen av nettsidene våre. Det er naturlig å skrive denne koden i et header element, før resten innholdet som vi legger i main-elementet:

```html
<body>
    <header>
        <nav>
            <a href="...">Lenke 1</a>
            <a href="...">Lenke 2</a>
            <a href="...">Lenke 3</a>
            <a href="...">Lenke 4</a>
            <a href="...">Lenke 5</a>
        </nav>
    </header>
    <main>
        (...)
    </main>
</body>
```
Uten CSS ser det ikke spesielt imponerende ut:

![alt text](./bilder/3_4%20-%20flex/navbar1.png)

Vi skal nå vise hvordan vi ganske enkelt kan posisjonere lenke slik vi ønsker ved hjelp av flex i CSS. Da trenger vi alltid et element som forelder for det vi skal posisjonere. Vi ser av koden i eksempelet over, at nav-elementet passer fint som en slik forelder.

![alt text](./bilder/3_4%20-%20flex/flexboks.png)

Vi starter med å skru på flex på forelder elementet.

```css
nav{
    display: flex;
}
```

Legg merke til at ingenting endrer seg enda, vi har bare satt igang verktøyet og må nå vite hvilke muligheter vi har tilgjengelig.

## Flex - Egenskaper.

Når flex er "skrudd på" får vi endel nye egenskaper å forholde oss til:

* `flex-direction`: row / column. Her bestemmer vi om fleks-elementene skal plasseres langs en rad eller kolonne. Standardinnstillingen er `row` altså horisontalt, og vi trenger derfor ikke denne egenskapen med mindre lenkene våre skal ligge vertikalt.

* `justify-content:` flex-start / flex-end / center / space-between /space-around. Den viktigste egenskapen for posisjonering. Vi ser nærmere på denne i eksempler nedenfor.

* `align-items:` flex-start / flex-end / center /baseline. Her bestemmer vi hvordan elementene skal legge seg i "motsatt retning" av det vi valgte i "flex-direction". Dersom vi har lagt elementene på en rad, vil align-items justere de i høyden. Motsatt vil elementer i en kolonne kunne justeres horisontalt. 

## Eksempler

I eksemplene som kommer det flere regelsett for CSS, og noen av egenskapene er kanskje nye for deg. Det er veldig lurt å prøve å lage de samme fanene selv, og eksperimentere med verdiene. Hva skjer når du endrer på ting, eller fjerner egenskaper. Ved å utforske koden på denne måten, vil du lære veldig mye om hvordan css og flex fungerer! 

### Alternativ 1 - Horisontal Spredning

La oss pynte på navigasjonsfanen vår, se nøye på hver egenskap og resultatet og prøv å avgjøre hva hver linje gjør.

```css
nav{
    background-color: lightgrey;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: solid black 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav a{
    color: black;
    text-decoration: none;
}
```

*Med resultatet*

![alt text](./bilder/3_4%20-%20flex/navbar2.png)



> Vi ser at "space-around" gjør at barna til nav fyller hele skjermen, men like mye luft på 
> hver side. `text-decoration: none;` er en egenskap som fjerner understreken på lenkene. 

### Alternativ 2 - Horisontalt Venstrestilt

En annen variant er å legge padding på selve lenkene, og bruke "flex-start" i stedet. Flex-start legger alle elementene ved begynnelsen, og padding sørger for at det er luft i mellom:

```css
nav{
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: solid black 2px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

nav a{
    text-decoration: none;
    color: black;
    padding-right: 30px;
}
```

*Resultat:*

![alt text](./bilder/3_4%20-%20flex/navbar3.png)



### Alternativ 3 - Mobil/Vertikal

For en nettside til mobiltelefon, er det beste som regel å ha fleks-elementene i en kolonne. Vi endrer flex-direction så lenkene kommer under hverandre. Vi bruker som i forrige eksempel padding for luft mellom lenkene, og til slutt så sentrerer vi lenkene horisontalt ved hjelp av align-items:

```css
nav{
    background-color: lightgray;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: solid black 2px;
    border-top: solid black 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
}  
nav a{
    text-decoration: none;
    color: black;
    padding-bottom: 10px;
}
```
*Resultat:*

![alt text](./bilder/3_4%20-%20flex/navbar5.png)

### Alternativ 4 - Horisontalt i grupper

Ofte er det vanlig å ha lenker til nettstedet til venstre, og innlogging eller min side til høyre. Vi nøster lenkene slik at det bare blir to fleks-barn og legger `space-between` på disse:

```html
<body>
    <header>
        <nav class="flex-container">
            <div id="venstre-lenker">
                <a href="...">Lenke 1</a>
                <a href="...">Lenke 2</a>
                <a href="...">Lenke 3</a>
                <a href="...">Lenke 4</a>
            </div>
            <div id="høyre-lenker">
                <a href="...">Lenke 5</a>
                <a href="...">Lenke 6</a>
            </div>
        </nav>
    </header>
</body>
```

```css
nav{
    background-color: lightgray;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: solid black 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}  
nav a{
    color: black;
    text-decoration: none;
    padding-right: 30px;
}
```

*Resultat*

![alt text](./bilder/3_4%20-%20flex/navbar4.png)


> I eksemplene ovenfor har vi brukt padding for luft mellom elementene. Alternativt kan man 
> bestemme størrelsen til et fleks-element ved å bruke egenskapen `flex-basis`. Les mer om 
> denne her: https://mastery.games/post/the-difference-between-width-and-flex-basis/

## Oppgave 1 - TV2 Plays pakkevelger

Bruk Flex og gjenskap [TV2 Plays pakkevelger](https://play.tv2.no/pakker)

- Tips: fonten `Helvetica` er ganske lik TV2 Plays

## Oppgave 2 - Spotifys nettside

Gjenskap [Spotifys nettside](https://open.spotify.com/) 

- Tips: fonten `Montserrat` er ganske lik Spotifys, du finner den på [Google Fonts: montserrat](https://fonts.google.com/specimen/Montserrat)
