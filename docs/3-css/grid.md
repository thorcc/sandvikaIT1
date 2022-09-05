---
sidebar_position: 5
sidebar_label: 3.5 Grid
---

# Grid

Grid er en annen teknikk for å plassere elementer slik vi vil. Både grid og fleks har mye overlappende funksjonalitet, begge deler kan gi de samme resultatene. Så hva skal vi bruke til hvilket formål? En tommelfingerregel er at fleks egner seg best for å jobbe i en dimensjon, mens grid er veldig håndterbart når ting skal plasseres i to dimensjoner. Det er fordi grid fungerer som et slags rutenett.


## HTML

På samme måte som med flex, må vi alltid ha en forelder rundt alt vi skal plassere sammen i en grid. I koden under har vi et section-element med id grid rundt elementene som skal plasseres ut på nettsiden. 

```HTML
<section id="grid">
    <div class="boks">1</div>
    <div class="boks">2</div>
    <div class="boks">3</div>
    <div class="boks">4</div>
    <div class="boks">5</div>
    <div class="boks">6</div>
    <div class="boks">7</div>
    <div class="boks">8</div>
</section>
```

## CSS

Vi bruker en selektor for id-en grid, og akkurat som med fleks må vi først "skru på" grid:

```CSS
#grid{
  display: grid;
}
```

Nå kan vi lage et rutenett til alle barna av elementet ovenfor. Den enkleste måten å gjøre det på er ved å bruke `grid-template-columns`:

```css
#grid{
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
.boks{
  border: 1px solid black;
}
```

Ved å bruke følgende kode lager vi et rutenett med tre i bredden. Hver rad vil fylles med tre elementer med en gitt bredde. Dersom det er flere elementer vil disse legge seg under på en ny rad med tre elementer. Slik fylles nettsiden til alle elementene er lagt i det angitte rutenettet. 

Vi bruker gap for å lage litt luft mellom grid-elementene. Gap fyller bare luft *i mellom* elementene, i motsetning til margin som ville lagt luft på høyre/venstre side.

Vi legger også en border rundt selve elementene, slik at det er lettere å se selve rutenettet:

<details><summary>Klikk for å se hele koden</summary>
<p>

```html
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            #grid{
                display: grid;
                grid-template-columns: 200px 200px 200px;
                gap: 10px;
            }
            .boks{
                border: 1px solid black;
            }
        </style>
    </head>
    <body>
        <section id="grid">
            <div class="boks">1</div>
            <div class="boks">2</div>
            <div class="boks">3</div>
            <div class="boks">4</div>
            <div class="boks">5</div>
            <div class="boks">6</div>
            <div class="boks">7</div>
            <div class="boks">8</div>
        </section>
    </body>
    </html>
```

</p>
</details>

!["Bilde- første grid:"](./bilder/3_5%20-%20grid/grid0.png)

Vi satte bredden på rutenettet vårt til 200px, da "låser" vi bredden på rutenettet, noe som ikke er å anbefale. Vi ønsker at elementene skal justere seg selv i bredden avhengig av hvor bred skjermen er. Vi kan alternativt bruke prosenter istedet, men for å slippe å regne så bruker vi heler `deler (fractions)` når vi lager rutenettet. Vi endrer derfor CSS-koden vår:

```CSS
#grid{ 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
.boks{
  border: 1px solid black;
}
```

*Undersøk hvordan nettsiden ser ut nå. Hva skjer når du endrer størrelsen på vinduet?*

> Skal man ha mange elementer i bredden, kan man bruke repeat.
> Eks: `repeat(4,1fr)`, som tilsvarer `1fr 1fr 1fr 1fr`


