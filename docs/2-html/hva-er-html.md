---
sidebar_position: 2
sidebar_label: 2.2 Hvordan skrive HTML
---

## HTML består av Elementer

HTML kalles for et markeringsspråk og brukes til å strukturere innhold på nettsider. HTML består av `elementer`, disse må skrives på en spesifikk måte slik at nettleseren skal forstå språket. Se igjen på:
```html
    <!DOCTYPE html>
    <html>
        <body>
            <h1>Hallo verden!</h1>
        </body>
    </html>
``` 
I hjemmesiden vi lagde i forrige avsnitt er det tre element: `html`, `body` og `h1`. Elementenes oppbygning kan man generelt beskrive som følgende:

![Et HTML-element](./bilder/2_2%20-%20hva_er_html/element.png)  

1. **Åpningstaggen:** Denne består av navnet på elementet (i dette tilfellet h1), pakket inn i "krokodillemunner".
2. **Lukketaggen:** Denne er lik som åpningstaggen, bare at vi legger til en skråstrek før navnet på elementet.
3. **Innholdet:** I mellom taggene er innholdet i elementet, som i dette tilfellet bare er tekst.
4. **Hele elementet:** Åpningstaggen, lukketaggen og innholdet utgjør til sammen hele elementet.

Når vi skal lære oss html så vil mye av jobben bestå av å vite hvilke elementer som finnes, hvordan de skrives og hva slags funksjon de har. For eksempel er `h1` elementet et såkalt header-element, altså en overskrift. Vi kan lage mindre overskrifter ved å bruke `h2` element, helt ned til `h6`.

Hva med `html` og `body`? De er begge en del av "skjelettet" til en html-fil. Dette skjelettet er det vanlig å starte hver gang vi skal lage en nettside. VS-Code hjelper oss med å sette det opp:

**Lag en ny html fil feks "minside.html". Start ved å skrive html og du vil se at du får opp noen forslag:**

![Vs-Code skriver skjelettet](./bilder/2_2%20-%20hva_er_html/html5.png)

**Velg det midterste alternativet, html:5, og du vil få følgende tekst:**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    
    </body>
</html>

```

Dette er altså den grunnleggende oppbyggingen av en html fil.

`Html`-elementet ligger rundt hele html-fila vår slik at nettleseren vet hva som skal tolkes. 

`Head`-elementet består av såkalt meta-informasjon, altså informasjon nettleseren skal ha, men som ikke skal synes på selve siden. Vi ser nærmere på dette senere  

`Body`-elementet ligger rundt alt innholdet som faktisk skal vises på nettsiden vår. Inne i body-elementet kan vi nå legge til overskrifter, tekst, bilder og annet innhold.

La oss legge til en overskrift igjen. Legg merke til at siden vi bruker VS-Code så slipper vi å skrive krokodillemunnene og de andre symbolene selv. Dersom du bare skriver *h1* så vil du få opp et alternativ, og når du velger dette vil elementet skrives for deg. Nå trenger du bare å legge til innholdet, altså selve teksten i overskriften.

Vi kan også legge til litt tekst, da er `p`-elementet kjekt å bruke. All tekst vi skriver som innhold i dette elementet vil lage et avsnitt (paragraph). Ved å legge flere p-element etter hverandre får vi flere avsnitt under hverandre


```html
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Min Side</title>
        </head>
        <body>
            <h1>Hallo verden!</h1>
            <p>Katten min er veldig gretten</p>
            <p>Den er også veldig lat</p>
        </body>
    </html>
```
**Eksperimenter ved å sette inn noen overskrifter og paragrafer i body-elementet. Skriv for eksempel noen linjer om ferien din**



## Nøstede elementer

Du ser nå kanskje at vi ofte har lagt elementer inne i elementer, dette kalles *nøsting*.
Hvis vi har lyst til å understreke at katten vår er veldig gretten, kan vi sette "veldig" i et `<strong>` element, det vil gjøre at "veldig" blir skrevet med fet skrift på nettsiden.

```html
<p>Katten min er <strong>veldig</strong> gretten.</p>
```

> OBS!
>
> Her må du passe på at du nøster riktig. Dette blir feil:
>
> ```html
> <p>Katten min er <strong>veldig gretten.</p></strong>
> ```
>
> Elementene må åpnes og lukkes korrekt, slik at de er innenfor eller utenfor hverandre.
> Hvis de overlapper, slik som i koden over, vil nettleseren din prøve å tippe hva du mener, og det blir ofte feil.

Når vi skriver html, viser vi hvilke elementer som er nøstet i hverandre ved inhopp:

```html
<body>
    <h1>Min Sommerferie</h1>
</body>
```
_Siden h1 har "hoppet" et hakk inn, er det lett å se at det ligger nøstet inn i body elementet_

## Attributter

Når vi legger til et element så vil vi ofte ha behov for å legge til litt ekstra informasjon. Dersom vi for eksempel skal legge til et bilde på nettsiden så må vi fortelle hvilket bilde og hvor det finnes. Slik informasjon vi legger til som en `attributter`. I dette tilfellet skal vi lage et bilde-element`img` (image), med en attributt `src` (source). I html ser det ut som følger:

![HTML-element med attributt](./bilder/2_2%20-%20hva_er_html/attributt.png)  

`src` attributtet er altså kilden til bildet, for at dette skal vises **må du ha et bilde med samme navn i samme mappe som html fila**. `alt` attributtet er eventuell tekst som vil synes dersom bildet av en eller annen grunn ikke kan vises. Legg også merke til at img-elementet er litt spesielt da det bare består av en åpnings-tagg. Det er fordi når vi har fylt ut src-attributtet så trenger vi ikke noe mer innhold til bildet, og vi trenger da heller ingen lukke-tagg.

> Du kan alternativt legge til nettadressen til et bildet på internett i src-attributten, men da 
> bryter du som regel opphavsrett, og bildet vil forsinne dersom originalen blir borte.

Vi har nå laget en nettside med overskrift tekst og bilder, for eksempel:

```html
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Min Side</title>
        </head>
        <body>
            <h1>Hallo verden!</h1>
            <p>Katten min er veldig gretten</p>
            <p>Den er også veldig lat</p>
            <p>Her er et bilde av katten min:</p>
            <img src="minkatt.jpg" alt="katten min">
        </body>
    </html>
```
Vi skal i neste avsnitt se litt nærmere på lenker (2.3), og så på strukturering av nettsiden (2.4). Siste del av dette kapittelet er en oppsummering av de mest brukte elementene (2.5). Mange begynner nå å bli mer interessert i å gjøre utseende på nettsiden bedre. Da må vi se nærmere på CSS, som vi tar for oss i Kap 3. 
