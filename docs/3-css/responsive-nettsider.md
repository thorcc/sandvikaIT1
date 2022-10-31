---
title: 3.7 Responsive nettsider
sidebar_position: 7
sidebar_label: 3.7 Responsive nettsider
description: Lag nettsider som er tilgjengelig for alle.
---

# Responsive nettsider

En responsiv nettside er en nettside hvor innholdet automatisk tilpasses størrelsen på skjermen eller nettleservinduet.
Elementene på nettsiden vil automatisk krympes, strekkes eller flyttes for å tilpasse størrelsen de har tilgjengelig.
Under er et eksempel på hvordan www.nytimes.com ser ut med forskjellig skjermstørrelser.

![PC-versjon](./bilder/3_7%20-%20responsive-nettsider/pc.png ':size=800')
*PC-versjon*

![Tablet-versjon](./bilder/3_7%20-%20responsive-nettsider/tablet.png ':size=400')
*Tablet-versjon*

![Mobil-versjon](./bilder/3_7%20-%20responsive-nettsider/mobil.png ':size=200')
*Mobil-versjon*

## Vanlige skjermstørrelser

Regelverket for universell utforming sier at nettsider skal kunne brukes av alle, og som designere vet vi ikke hva slags skjerm brukerne våre har.
Derfor er det viktig at vi lager nettsider som ser bra ut på alle typer skjermer.
Les mer om universell utforming og responsivt design på [uu.difi.no](https://uu.difi.no/krav-og-regelverk/kom-i-gang/hvordan-teste-universell-utforming-av-ditt-nettsted#forstoerring).

Under kan du se en oversikt over de mest vanlige skjermstørrelsene. 

![Vanlige skjermstørrelser](./bilder/3_7%20-%20responsive-nettsider/breakpoints.png)
*Vanlige skjermstørrelser. [Hentet fra freecodecamp](https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/)*.

## Responsive nettsider med CSS


### % skalerer elementer etter skjermstørrelsen 

For at elementer skal skaleres etter størrelsen på skjermen, kan vi bruke enheten % på `width`.
I koden under vil bildene alltid ta 100% av plassen de har fått.

````css
img{
    width: 100%;
}
````

:::info

Eksperttips: Det er også mulig å bruke `max-width`.

I eksemplet under er main 900px i bredden så lenge skjermstørrelsen er stor nok. Hvis skjermstørrelsen er under 900px, vil main skaleres etter skjermen.
```css
main{
    width: 900px;
    max-width: 100%;
}
```

:::

### Media queries

Media queries brukes når CSS-kode bare skal gjelde hvis en spesiell betingelse er oppfylt.
Det kan for eksempel være at en grid skal vise fire bilder i bredden på store skjermer, men bare ett bilde i bredden på små.

#### Skrivemåte
````css
@media (betingelse){
    /* CSS-kode som skal gjelde hvis betingelsen er oppfylt */
}
````

#### max- og min-width

Det finnes mange typer media queries og du kan lese om alle på [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries).
I IT 1 er vi mest interessert i `max-width` og `min-width`, siden disse lar oss lage CSS som kun gjelder for gitte skjermbredder.

````css
/* Minimum bredde, gjelder fra verdi og oppover */
@media (min-width: 1200px) {
  div {
    background-color: yellow;
  }
}

/* Maks bredde, gjelder opp til verdi  */
@media (max-width: 900px) {
  div {
    background-color: blue;
  }
}
````

### Eksempel - Responsiv grid

Vi kan lage en grid responsiv ved å endre antall elementer som vises i bredden.

```css
.grid{
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(4, 1fr);
}
@media(max-width: 900px){
    .grid{
        grid-template-columns: 1fr 1fr 1fr;
    }
}
@media(max-width: 700px){
    .grid{
        grid-template-columns: 1fr 1fr;
    }
}
```

Koden over gir nettsiden under:

![Eksempel på responsiv grid](./bilder/3_7%20-%20responsive-nettsider/grid-eksempel.png ':size=400')

### Eksempel - Responsiv navigasjonsbar med flex

For å gjøre en navigasjonsbar responsiv kan vi endre på `flex-direction`.

````css
nav {
  display: flex;
  justify-content: space-around;
}

@media (max-width: 900px) {
  nav {
    flex-direction: column;
    align-items: center;
  }
}
````

### Eksperttips: Responsiv nettside uten media-query

Hentet fra [CSS-tricks.com - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/).

I eksempelet under gjør linjen `grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));` nettsiden responsiv.

Den gjør at elementene i gridden er det som er minst av 200px og maks 100% av plassen de har fått i gridden.
I dette tilfellet betyr det at hvis nettleservinduet er under 200px, tar boksene hele nettleservinduet.
`repeat` og `auto-fill` gjør at gridden fylles med så mange elementer det er plass til.

<!-- <p class="codepen" data-height="434" data-theme-id="light" data-default-tab="css,result" data-user="thorcc" data-slug-hash="KKarxGY" style="height: 434px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Responsiv nettside med grid">
  <span>See the Pen <a href="https://codepen.io/thorcc/pen/KKarxGY">
  Responsiv nettside med grid</a> by thorcc (<a href="https://codepen.io/thorcc">@thorcc</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script> -->
