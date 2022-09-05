---
sidebar_position: 2
sidebar_label: 3.2 Selektorer
---

# Ulike Selektorer i CSS


## To viktige attributter

Vi utvider nettsiden vår med en ny del om for eksempel sommerferien og introduserer samtidig to nye attributter nemlig `class` og `id`. Vi legger derfor til følgende tekst til nettsiden:

```html
<section class="norefjell">
    <h1 class="norefjell">Fjelltur i sommerferien</h1>
    <img src="fjelltopp.jpg" alt="bilde av en fjelltopp" id="fjelltopp">
    <p class="norefjell">I sommer gikk vi en tur til på fjellet.</p>
</section>
```
*Se etter de to nye attributtene*

`class` og `id` bruker vi ofte. Sistnevnte brukes for å identifisere ett enkelt og unikt element, mens class brukes tilsvarende for en gruppe elementer. Da følger det at ingen elementer kan ha samme id, mens mange elementer kan ha samme klasse (til og med om de ikke er av samme type). I eksempelet over har vi gitt bildet en egen id, mens vi har gruppert h1 og p sammen ved at de har samme klasse.


Nå kan vi bruke selektorer for å peke på en id eller en klasse i stedet for å endre på alle element samtidig.

## Class-Selektor

Når vi skal endre stil på en klasse i CSS kan vi ikke bare skrive navnet på den, da leter nettleseren nemlig etter ett element med det navnet. Vi legger bare på et punktum foran navnet så vil selektoren peke på en klasse.

```css
.norefjell{
    font-family:cursive;
    color: blue;
}
```
*Legg merke til punktumet foran, det indikerer at du skal endre på alle elementer som har klassen "norefjell"*

## Id-Selektor

Tilsvarende som class-selektoren har vi også en egen skrivemåte for id-selektoren:

```css
#fjelltopp{
    border: solid red 2px;
}
```

*Denne css-koden endrer bare på fjelltopp-bildet, ingen eventuelle andre bilder på nettsiden.*

Vi bruker altså # foran navnet for å velge et element med en id-attributt.

Vår eksempel-nettside ser nå ut som følger:


```html
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Min Side</title>
            <style>
                body{
                     background-color: lightgrey;
                }
                p{
                    font-size: 24px;
                    color: red;
                }
                .norefjell{
                    font-family:cursive;
                    color: blue;
                }
                #fjelltopp{
                    border: solid red 2px;
                }
            </style>
        </head>
        <body>
            <h1>Hallo verden!</h1>
            <p>Katten min er veldig gretten</p>
            <p>Den er også veldig lat</p>
            <p>Her er et bilde av katten min:</p>
            <img src="minkatt.jpg" alt="katten min">
            <section class="norefjell">
                <h1 class="norefjell">Fjelltur i sommerferien</h1>
                <img src="fjelltopp.jpg" alt="bilde av en fjelltopp" id="fjelltopp">
                <p class="norefjell">I sommer gikk vi en tur til på fjellet.</p>
            </section>
        </body>
    </html>
```


## Selektorer for barn og etterkommere

I kap 2.4 så vi på nøstede elementer som barn og etterkommere. Vi kan bruke slike relasjoner som selektorer for raskt å endre på en bestemt gruppe av elementer.

```css
main>p{
    color: black;
}
```
Denne selektoren endrer alle p - element som er direkte barn av main.

```css
main p{
    color: black;
}
```
Her endrer vi alle p - element som ligger innenfor main, altså både barn og etterkommere.

Vi kan kombinere disse selektorene med selektorer for klasse/id.


## Pseudoselektor

For å sette stil på **deler** av et HTML-element, kan vi bruke **pseudoselektor**.
Med pseudoselektorer kan vi for eksempel sette stil kun på første bokstav i en tekst, eller hele første linje i et avsnitt.

Koden under endrer stil på første bokstav i avsnittet #norefjell:

```css
#norefjell::first-letter{
    font-size: 64px;
}
```

Vi kan også bruke pseudoselektorer for å sette inn innhold før eller etter elementer.
For å sette inn « » før og etter et sitat kan vi gjøre følgende:

```css
q::before{
    content: "«";
}
q::after{
    content: "»";
}
```

En oversikt over vanlige pseudoselektorer:

| Pseudoselektor  | Beksrivelse |
|-----------------|-------------|
|`::first-letter` |den første bokstaven i et element|
|`::first-line`   |den første linjen i et element|
|`::selection`    |del av elementet som er markert av bruker|
|`::before`       |setter inn innhold før elementet|
|`::after`        |setter inn innhold etter elementet|

## Pseudoklasse

Med pseudoselektor kan vi sette stil på elementer når de er i en bestemt tilstand.
En tilstand er for eksempel når musepekeren er over et element, mens en annen er når et element er i fokus.

For å endre størrelsen på et bilde når pekeren er over bildet kan vi gjøre følgende:

```css
#fjelltopp:hover{
    width: 200px;
}
```

En oversikt over vanlige pseudoklasser:

| Pseudoklasse     | Beksrivelse |
|------------------|-------------|
|`:hover`          |musepekeren er over elementet|
|`:active`         |elementet er klikket på|
|`:focus`          |elementet er i fokus|
|`:checked`        |en radioknapp eller flervalgsboks er valgt|
|`:nth-child(even)` |velger annen hvert element, partall|
|`:nth-child(odd)` |velger annen hvert element, oddetall|

