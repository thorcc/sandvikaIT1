---
title: 2.4 Stuktur
sidebar_position: 4
sidebar_label: 2.4 Struktur
description: Strukturer nettsiden din for å gjøre den oversiktlig.
---

# Strukturering av nettsiden

## Block elementer vs. inline elementer

Når vi skal strukturere en nettside bør vi vite hvordan elementene våre legger seg på siden.
De fleste elementene vi bruker på nettsiden vil i utgangspunktet være enten et `block`-element eller et `inline`-element.

- Et `block`-element vil stå på en egen linje på nettsiden. Ingen elementer vil legge seg ved siden av disse. Disse elementene har ofte inline-elementer inne i seg. Eksempler på slike elementer er avsnitt (p-elementet) og lister.
- Et `inline`-element ligger inne i block-elementer, og vil ikke ligge på en egen linje. Eksempler på slike elementer er lenker og bilder.

Konsekvensen av dette er for eksempel at et bilde og en lenke vil legge seg ved siden av hverandre, mens overskrifter og avsnitt vil oppta hele plassen alene. Alle elementene legger seg i den rekkefølgen de er skrevet i html-fila. I kapittel 3 skal vi se at vi kan endre egenskapene til et element, slik at vi for eksempel kan gjøre om et inline-element til å være et blokk-element i stedet. Da får vi mer kontroll over hvordan nettsiden vår skal se ut.

## Semantiske elementer

For å enklere kunne strukturere nettsider bruker vi semantiske elementer, det vil si elementer med tagger som sier noe om innholdet i elementet.
Disse elementene er `block`-elementer, og de har ikke har noe eget innhold, de brukes kun til struktur.
De mest vanlige semantiske taggene er:

| Tag       | Beksrivelse |
|-----------|-------------|
|`<header>` |topptekst|
|`<main>`   |hovedinnhold|
|`<footer>` |bunntekst|
|`<section>`|samler innhold som hører sammen|
|`<article>`|selvstendig innhold|
|`<div>`    |diverse innhold|

En vanlig strukturering av nettsiden med semantsike elementer ser slik ut:

![Semantiske tagger](./bilder/2_4%20-%20struktur/semantiske-tagger.png)

I nyere tid skrives ikke HTML nødvendigvis manuelt, og da brukes ikke de semantiske elementene så ofte, men i IT 1 så kan det være veldig lurt å ha de med som en slags disposisjon for hvordan nettsiden skal se ut. Disse elementene vil også fungere som gode grupperinger når vi skal endre på utseende til nettsiden vår i kapittel 3.

## Barn og etterkommere

Når vi nøster elementer kan det være greit å ha et språk som raskt gir oversikt over hvordan sammenhengen mellom elementene er. Se på følgende eksempel:

```html
<body>
    <header>
        <nav>
            <a href="index.html">Hjem</a>
        </nav>
    </header>
    <main>
        <section>
            <h2>Hei</h2>
            <p>tekst om meg selv.</p>
        </section>
        <section>
            <h2>Katten min</h2>
            <p>Bilder av katten min:</p>
            <img src="katt1.png">
            <img src="katt2.png">
            <img src="katt3.png">
        </section>
    </main>
    <footer>
        <p>Laget på Sandvika VGS</p>
    </footer>
</body>
```

Her ligger det mange element nøstet inn under hverandre, `main` ligger rett under body og omtales derfor som *barn* av body. Det ligger to `section` element inne i `main`, og disse vil derfor være *barn* av main og *etterkommere* av body. Tilsvarende har det første section elementet to barn, mens det andre har fem. Alle disse syv er etterkommere av både main og body. Når vi senere skal endre utseende og posisjon på elementene våre er det viktig at vi har oversikt over relasjonene deres.

## Oppgaver

2.5 Lag et nettsted om skolen, bruk [skolens nettside](https://viken.no/sandvika-vgs/) som inspirasjon
    - Nettstedet skal bestå av minst fire undersider, f.eks:
      - index.html
      - fag.html
      - lærere.html
      - om-skolen.html
      - kontakt-oss.html
    - Tekst til nettstedet finner du på skolens nettsted
    - Bilder finner du på internett
