---
title: 3.3 Boks-modellen
sidebar_position: 3
sidebar_label: 3.3 Boks-modellen
description: Bruk boks-modellen for å vise HTML-elementer.
---

# Enkel posisjonering

## Boks-modellen

Vi har sett at vi kan endre farge og størrelse på HTML-elementene våre. Når det gjelder posisjonering og layout, så må vi starte med å lære oss fire viktige css-egenskaper som *alle* HTML-element består av. For å forstå hvordan disse fungerer er det lurt å forestille seg hvert HTML-element som en egen boks, der denne består av:

* Content: Innholdet, altså delen der tekst og bilder vises.
* Padding: Et område som ligger rundt innholdet.
* Border: En grense som ligger rundt både innhold og padding.
* Margin: Et område på utsiden av border.

Det kan kanskje være litt forvirrende å se for seg hvordan dette fungerer, når du for eksempel skriver en overskrift inne i et `h1`-element har du hverken sett spor av hverken bokser eller de andre begrepene. Det er fordi vi kun har vært oppmerksomme på innholdsbiten av elementet! La oss se på et eksempel som lett visualiserer boks-modellen. 

Vi starter med en overskrift, og setter en annen bakgrunnsfarge på denne enn resten av nettsiden:

![alt text](./bilder/3_3%20-%20cssboksen/cssoverskrift0.png)

<details>
    <summary>Klikk for å se html/css-kode</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            background-color: rgb(164, 164, 238);
        }
        h1{
            background-color: rgb(223, 109, 128);
        }

    </style>
</head>
<body>
    <h1>Hei internett</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Accusantium velit sed nam rem ullam repellendus sequi ex tenetur vitae sunt,
    sit consectetur magnam laudantium impedit! Quod ab voluptatibus provident inventore?</p>
</body>
</html>
```

</details>

Vi ser at innholdsdelen av `h1`-elementet er farget rosa. La oss legge til litt padding og se hva som skjer:

```css
h1{
    background-color: pink;
    padding: 20px;
}
```

Enheten `px` står for piksler (billedpunkter) og er en enhet for lengde som brukes for skjermer/digitale bilder. Vi ser nærmere på dette i kap 4.2.

![alt text](./bilder/3_3%20-%20cssboksen/cssoverskrift.png)

Vi ser altså at ved å øke padding fra 0 til 20 piksler, fikk vi mer "luft" rundt teksten i innholds-området. La oss videre se på border-egenskapen. Denne har tre verdier vi må definere før vi ser en effekt og vi kan definere alle på en gang:

```css
h1{
    background-color: pink;
    padding: 20px;
    border: solid black 1px;
}
```

![alt text](./bilder/3_3%20-%20cssboksen/cssoverskrift2.png)

Til slutt setter vi på margin, tilsvarende som padding:

```css
h1{
    background-color: rgb(223, 109, 128);
    padding: 20px;
    border: solid black 1px;
    margin: 20px;
}
```
![alt text](./bilder/3_3%20-%20cssboksen/cssoverskrift3.png)

Vi ser en marg på alle sider av HTMl-elementet.

Oppsummert kan vi altså si at alle elementer har følgende boksmodell:

![alt text](./bilder/3_3%20-%20cssboksen/cssboks.png)

Vi kan også finjustere enda mer ved å bruke left-, right-, top- eller bottom foran de nye egenskapene! For eksempel vil `margin-left: 20px;` bare lage venstremarg, mens `border-bottom: solid black 1px;` vil bare lage en understrek.

## Marg på hele siden

Følgende teknikk gir oss en fin marg på hele nettsiden vår:

```css
body{
    width: 80%;
    margin: auto;
}
```
Her sider vi at bredden til body skal være 80% av hele skjermen, også vil auto-verdien sørge for å midtstille ved å legge 10% på hver side. Legg merke til at vi kunne fått samme effekt ved å sette både `margin-left` og `margin-right` til 10% hver.

## Div-elementet

Et HTML-element vi bruker veldig mye fremover er `div`-elementet. Dette elementet har satt alle delene av boks-modellen til 0, slik at vi kan se på det som en nøytral boks rundt innholdet. Elementet passer godt dersom det ikke er naturlig å bruke semantiske element, og brukes som regel for å gruppere elementer når vi skal igang med mer avanserte CSS-teknikker. Siden `div`-elementet er helt nøytralt kan det av og til være lurt å legge til id-attributter for å gi en beskrivelse av hva du bruker de til.

## Oppgaver

1. Lag et `p`-element med teksten `innhold` og gjenskap CSS-boksen med padding, margin og border.
   - Tips: `border: solid 1px black;`
2. Lag en nettside som inneholder tre avsnitt med tekst, teksten skal ha 10% marg på høyre og venstre side.
    - Tekst kan du finne på wikipedia, eks: [no.wikipedia.org/wiki/Parlamentarisme](https://no.wikipedia.org/wiki/Parlamentarisme)
3. Kopier koden under og legg på CSS slik at de får riktige egenskaper

```html
<div>
    <section>
        <p>Hei - Jeg skal ha lilla bakgrunnsfarge og 40px padding rundt hele innholdet</p>
    </section>
    <p>Hallo! - Jeg skal ha rosa bakgrunnsfarge, 0px marg over og under og 15px marg på venstre og høyre side</p>
</div>
<p>Dette var rart! - Jeg skal ha hvit bakgrunnsfarge og en svart linje over og under<p>
```
