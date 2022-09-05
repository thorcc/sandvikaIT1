---
sidebar_position: 5
sidebar_label: 2.5 Vanlige HTML-elementer
---

# Vanlige HTML-elementer

Vi oppsummerer html-delen av kapittelet ved å se på de vanligste elementene man bør kunne, noen av de har du allerede sett før, mens andre introduseres som nye her.

## Overskrifter - headings

```html
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```
Overskriftene går fra h1 (aller størst) til h6 (minste overskrift). Dersom vi ønsker andre typer overskrifter må vi bruke CSS.

## Avsnitt - paragraph

```html
<p>Dette er et avsnitt</p>
```

## Tekst - som inline element

```html
<span>Et element som kan brukes for ren tekst</span>
```

## Lenker

```html
<a href="https://viken.no/sandvika-vgs/">Min VGS</a>
```

a-elementet står for anker. Her må vi minimum ha med en href attributt for at det skal fungere.

## Bilder

```html
<img src="mittBilde.png" alt="Mitt bilde">
```

img-elementet er et eksempel på et element som kun trenger en åpnings-tagg. I tillegg må src attributten være med for at bildet skal fungere. I src kan man enten refere til bildets navn på pc-en eller til en nettadresse for et bilde på internett.

## Lister

**Uordnet/punktliste**

```html
<ul>
    <li>technologists</li>
    <li>thinkers</li>
    <li>builders</li>
</ul>
```

**Ordnet/tall-liste**

```html
<ol>
    <li>technologists</li>
    <li>thinkers</li>
    <li>builders</li>
</ol>
```

Listene består av li element som er nøstet inn i elementet som bestemmer hva slags type liste som skal være med. 


## Youtube eller Google Maps

Vi henter koden fra kilden. Se etter "Share" og så "embed". Herfra får du hele elementet for youtube/google maps, som du kan kopiere rett inn i html fila di.

![Bilde: Embed fra google](./bilder/2_5%20-%20elementer/embed.png)

## Hente innhold fra bruker

![Bilde - Utseende til form](./bilder/2_5%20-%20elementer/form.png)

Eksempel på form-element

`form` elementet er en ramme for andre element som tar for seg det å hente informasjon fra bruker, såkalt `input` element. Vi får ikke enda laget noe funksjonalitet med disse men vi kan bygge opp utseende til nettsiden ved hjelp av elementene.

```html
<form action="resultat.html">
    <label for="f_navn">Fornavn</label>
    <input id="f_navn" type="text">
    <label for="e_navn">Etternavn</label>
    <input id="e_navn" type="text">
    <input type="submit" value="Registrer">
</form>
```

* label elementene er beskrivelse/tekst. De er koblet sammen til hvert sitt input element ved at for-attributten til label er lik id-attributten til input (navnene velger vi selv).

* input elementet her er tekst, men kan være mange forskjellige typer, se mer på https://www.w3schools.com/html/html_forms.asp

* når vi trykker på knappen for å registrere sendes informasjonen til det som står i action-attributtet til form elementet.

## De resterende elementene?

For en mer fullstendig liste over elementer som finnes kan du se videre på https://www.w3schools.com/tags/default.asp, men du kommer langt med det vi har vært gjennom her. Nå begynner nok de aller fleste IT-1 elever å bli mer interessert i å endre på utseende og posisjonering av elementer på nettsiden sin, og da må vi over på det andre språket vi skal lære oss i faget nemlig CSS.