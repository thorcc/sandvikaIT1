Når vi skal sette opp en struktur som beskrevet i forrige avsnitt, så er det enkelte filer og mapper som må ha spesifikke navn og ligge riktig i forhold til hverandre for at rammeverket skal fungere. Vi lager en prosjektmappe med valgfritt navn og legger følgende inn i denne:

- app.py er en python fil som skal fungere som serveren vår. Denne fungerer som et sentralbord og skal håndtere alle forespørsler fra brukere av siden vår.

- templates er en mappe som skal inneholde alle html filene våre

- static er en mappe som skal inneholde alle bildene og eventuelle css-filer.


**bilde**

Flask er et hjelpeverktøy som krever relativt lite for å sette opp. Vi gjør legger inn følgende tre linjer i app.py:

```python
from flask import Flask, render_template

app = flask(__name__)

# Vi kommer til å skrive inn all annen serverkode her

app.run(debug=True)

```

Vi kan nå kjøre python-koden og vil få servert følgende resultat

**bilde**

Vi ser at vi har fått en nettadresse. Det er denne vi skal bruke for å se på nettstedet vårt heretter, "open in browser" utvidelsen vi brukte tidligere vil ikke lenger fungere. 

Dersom vi følger på adressen nå får vi en feilmelding tilbake. Selv om serveren er skrudd på, har den ingen instruksjoner/kosw for hva som skal skje når noen besøker adressen, og det finnes jo heller ingen nettsider å vise!

Vi starter derfor å lage forsiden til nettstedet vårt. Vi oppretter en html-fil og legger denne i "templates" mappa. I denne html-fila legger vi inn et standard skjelett og en overskrift som for eksempel:

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

Vi må fortsatt ikke i mål, vi må nå legge inn kode i app.py som skal koble nettadressen vår opp til nettsiden vi akkurat laget. Denne kalles for en rute og kan se ut som følger:

```python
from flask import Flask, render_template

app = flask(__name__)

@app.get("/")
def rute_forside():
    return render_template("index.html")

app.run(debug=True)
```

Det er endel kode her som kan være vanskelig å forstå før man blir vant til rammeverket. Når vi klikker på Flask-lenka så sender vi en forespørsel til app.py om at vi ønsker å besøke forsiden til nettstedet (se figuren i kap 6.1!). De som lager Flask har bestemt at forespørselen til forsiden alltid skal være på formen "/". Ruta vi lagde håndterer forespørselen ved at funksjonen "rute_forside()" kjøres. Dermed leveres html fila tilbake til bruker.

La oss lage enda en nettside, vi lager en ny html-fil som vi lagrer i "templates", for eksempel `nyside.thml`. For å nå denne siden legger vi inn et a-element på forsiden vår.

Vi kan ikke lenger lage lenken til som før: `<a href="nyside.html>Les mer her</a>` fordi det forutsetter at brukeren har lastet ned nyside.html på forhånd. Som isted må vi sende en forespørsel til app.py og lage ei ny rute der som håndterer forespørselen. Navnet på ruta bestemmer vi selv. Vi kan for eksempel skrive `<a href="/nyside">Les mer her</a>` slik at forsiden nå ser ut som følgende:

````html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flask - VGS</title>
</head>
<body>
    <h1>Hallo, Verden!</h1>
    <a href="/nyside">Les mer her</a>
</body>
</html>
````

Vi har kalt ruten vår for `/nyside`. Neste steg er å gå til app.py og lage den ferdig på samme måte som isted:



```python
from flask import Flask, render_template # importerer det som trengs fra Flask-biblioteket

app = Flask(__name__) # oppretter en `Flask`-app, som lagres i variabelen `app`

@app.route("/")  # Allerede eksisterende rute til forsiden vår
def index(): 
    return render_template("index.html") 

@app.route("/nyside") # Her skriver vi ruta til vår nye nettside på samme måte
def side2():
    return render_template("nyside.html")
```

Det kan være lurt å trene litt ved å lage et par html nettsider til, og koble de sammen på nettstedet ved hjelp av ruter.