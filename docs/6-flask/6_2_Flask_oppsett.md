---
title: 6.2 Flask og HTML
sidebar_position: 2
sidebar_label: 6.2 Flask og HTML
description: Se hvordan Flask og HTML samarbeider.
---

# Start med Flask

### Mapper og Filer

Før du starter med flask må du installere det. Snakk med læreren din for hjelp til dette

Når vi skal sette opp rammeverket, så er det enkelte filer og mapper som må ha spesifikke navn og ligge riktig i forhold til hverandre for at det skal fungere. Vi lager en prosjektmappe med valgfritt navn og legger følgende inn i denne:

- `app.py` er en python fil og fungerer som serveren vår. Vi kan se på fila som et sentralbord vi programmerer. Her skal vi håndtere alle forespørsler fra brukere av siden vår.

- `templates` er en mappe som skal inneholde alle html filene våre

- `static` er en mappe som skal inneholde alle bildene og eventuelle css-filer.


![Fil og mappestruktur](./bilder/struktur.png)

 Vi legger så inn følgende tre linjer i app.py:

```python
from flask import Flask, render_template, request

app = flask(__name__)

# Vi kommer til å skrive inn all annen serverkode her

app.run(debug=True)

```

Det kreves ikke mye kode for å sette opp serveren i app.py, men vi venter med å forklare hva som skjer. Prøv å kjøre kan nå kjøre python-koden og du får servert følgende resultat

![Flask kjøres](./bilder/flask_server.png)

Vi ser at vi har fått tilgang til en nettadresse, `http://127.0.0.1:5000`. Dette er forsiden til nettstedet vårt så lenge vi kjører serveren (app.py). Det er denne vi skal bruke heretter, "open in browser" utvidelsen vi brukte tidligere vil ikke lenger fungere. 



### Ruter

Dersom vi besøker adressen Flask ga oss får vi en feilmelding tilbake. Selv om serveren er skrudd på, har den ingen instruksjoner for hva som skal skje når noen besøker nettstedet, og det finnes jo heller ingen nettsider å vise.

Vi starter derfor å lage forsiden til nettstedet vårt. Vi oppretter en html-fil og legger denne i `templates` mappa. Så skriver vi et standard skjelett og en overskrift som for eksempel:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Heisann!</h1>
</body>
</html>
```

Vi er fortsatt ikke i mål, vi må nå legge inn kode i app.py som skal koble URL-en vår opp til html-fila vi akkurat laget. Dette kalles for en rute og ser ut som følger:

```python
from flask import Flask, render_template, request

app = flask(__name__)

@app.get("/") # Navnet på ruta står inni parentesen
def rute_forside():
    return render_template("index.html")

app.run(debug=True)
```

De som lager Flask har bestemt at ruta til forsiden alltid skal hete "/". Nå vil funksjonen "rute_forside()" kjøres hver gang noen besøker denne siden. Da sørger ruta for at html fila leveres tilbake.

Vi kan følge samme prinsipp for nye nettsider. Vi lager en ny html-fil i "templates"-mappa, for eksempel `nyside.html`, og fyller den med litt tekst. Så skriver vi en tilsvarende rute i app.py:

```python
from flask import Flask, render_template # importerer det som trengs fra Flask-biblioteket

app = Flask(__name__) # oppretter en `Flask`-app, som lagres i variabelen `app`

@app.route("/")  # Rute til forsiden vår
def index(): 
    return render_template("index.html") 

@app.route("/nyside") # Her skriver vi ruta til vår nye nettside
def side2():
    return render_template("nyside.html")
```

Dersom vi legger på /nyside i URL-en til forsiden `(http://127.0.0.1:5000/nyside)` skal vi havne på den nye nettsiden!

### Lenker som Ruter

Vi vet fra tidligere at vi kan koble sammen sidene med ett a-element, og dette fungerer som tidligere, med ett viktig unntak. I href-attributtene kan vi ikke lenger skrive den lokale stien til filene våre, vi må heller skrive inn navnet på ruta vi ønsker å nå i app.py.

Se på a-elementet vi har lagt til i forsiden for å se hvordan:

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <nav>
        <a href="/nyside">Side 2</a>
    </nav>
    <h1>Heisann!</h1>
</body>
</html>
```


### Oppgave 6.2.1

a) Lag et nytt Flask prosjekt: Sett opp templates mappa og app.py som beskrevet i dette kapittelet.

b) Legg til tre html-filer til templates-mappa: `gull.html`, `sølv.html` og `bronse.html`. Fyll de med noe enkel tekst.

c) Lag en felles nav-bar på alle tre sidene. Legg til a-element som kobler alle sammen ved hjelp av ruter i app.py 

