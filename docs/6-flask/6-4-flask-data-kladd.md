# Lagre og sende data

## Lagre Data

I kapittel 2.8 så vi kort på "form"-elementet, vi går nå tilbake til dette og viser hvordan vi kan ta imot og lagre informasjon fra brukere. Tanken er at man kan fylle ut html-elementene, hvorpå informasjonen sendes til app.py som håndterer den. Dette følger samme prinsipp som når vi gjør et kall på en rute, og app.py sender oss til ønsket nettside. Verdt å merke seg er at vi deler forespørslen/rutekall til serveren i to typer. Den første er såkalte er en request av type "get", som indikerer at vi ønsker å få noe tilbake fra serveren, for eksempel en ny nettside. Denne typen er standard, og vi trenger ikke presisere noe mer enn det vi allerede har gjort. Den andre forespørselen er kalles er av type "post", og brukes når vi ønsker å sende informasjon til serveren. Informasjonen vi skal sende via form-elementet sendes som "post", og dette må vi spesifisere når vi oppretter elementet. 

Vi setter opp et nytt Flask prosjekt, og tilsvarende forrige kapittel kan vi legge til siden *paamelding.html*, samt en rute "/paamelding" fra forsiden via app.py:

![Oppsettet](bilder/flaskoppsett.jpg)

*Vi setter opp Flask som i forrige delkapittel*

Nå kan vi lage et form-element i påmeldingssiden vår. Les mer om alle mulighetene du har for å samle informasjon på https://www.w3schools.com/html/html_form_elements.asp

```html
    <form action="/tilsendt_data" method="post">
        <label>Navn</label>
        <input name="navn" type="text" placeholder="Ditt navn">
        <label>Navn</label>
        <input name="alder" type="text" placeholder="Din alder">
        <select name="idrett">
            <option value="fotball">Fotball</option>
            <option value="basketball">Basketball</option>
            <option value="volleyball">Volleyball</option>
        </select>
    </form>
```

La oss bryte ned alt vi kan se her. 
- Selve form-elementet kan vi se på som en "konvolutt" som inneholder informasjon, `action`-attributtet forteller oss hvor informasjonen skal, enten til en ny nettside eller som i vårt tilfelle, en rute. Vi setter også `method` til post for å gjøre forespørselen vår om til en "post-melding". Da vet at serveren at den skal ta imot informasjon.

- Informasjonen i "form"-elementet sendes via "input" og "select"-element. Disse må alltid ha attributtene `name` og `value`, som er felter app.py forventer å ta imot. For tekst-feltene er det ikke "value"-attributter, verdien er nemlig det brukeren skriver inn i feltene.

- Label-elementene er rene tekst-element som vi kan bruke for å gi informasjon. Det finnes endel ekstra egenskaper for å koble sammen "label og "input" element, men vi bruker ikke disse. Vi kunne like gjerne brukt "p"-elementer istedet.