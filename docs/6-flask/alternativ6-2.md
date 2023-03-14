# Introduksjon til Flask

## Installer utvidelse

Installer utvidelsen `Flask-VGS` i VS Code.

:::info

I VS Code ligger utvidelser under ikonet med fire firkanter på menyen til venstre.

:::


Lag en ny mappe i VS Code, høyreklikk på mappen og velg `Create Flask`. Installasjonen kan ta ett minutt eller to, så smør deg med tålmodighet.
Når du har installert Flask har det dukket endel mapper og to nye filer i prosjektmappen, for oss er de viktigste `app.py` og `templates/index.html`.

### Flask

Alle nettsidene vi skal lage skal ligge i mappen `templates` og forsiden bør hete `index.html`. Denne ble allerede laget da vi installerte Flask modulen, og vi ser at skjelettet foreløpig ser ganske likt ut som før. Vi kan nå lett legge til nye overskrifter og tekst, men lenker, bilder og css blir anderledes nå som vi jobber i et Flask-miljø. Tenk deg at hele mappen med prosjektet er noe som ligger back-end, altså brukeren ikke har tilgang til. Vi kan da for eksempel ikke lenger lage en lenke til en ny side der vi skriver `<a href="nyside.html>Trykk her</a>` fordi det forutsetter at brukeren allerede har lastet ned den nye siden! Vi lager istedet en forespørsel eller `rute`. En slik rute sender en beskjed til serveren om at vi ønsker å gå til `nyside.html`, denne kan da sende nettsiden til oss slik at vi faktisk får tilgang til innholdet vi ønsker. Vi legger på en rute på forsiden ved å skrive a-elementet som følger:

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
    <a href="/nyside">Klikk her!</a>
</body>
</html>
````

Vi har nå kalt ruten vår for `nyside` og bruker `/` for å indikere at nyside skal legge seg bak på nettsidens adresse. Neste steg er da å kode hvordan ruten skal behandles og hvilken respons serveren skal gi. 


### app.py

Når vi skal lage nettsider i Flask så må altså all informasjon gå via noe vi programmerer i back-end, her er det `app.py` som er "hjernen" eller sentralen som behandler alt som skal skje. Vi lagde en rute som vi kalte `nyside`og ønsker at serveren skal sende html-fila til den nye siden tilbake.

:::info
I `app.py` skrives Python-koden til applikasjonen.
Koden som skrives her er koden til *serveren*, slik kode kalles ofte *back-end*, fordi 
denne koden ligger *bak* og brukeren aldri ser denne koden.
:::

```python
from flask import Flask, render_template # importerer det som trengs fra Flask-biblioteket

app = Flask(__name__) # oppretter en `Flask`-app, som lagres i variabelen `app`

@app.route("/") 
def index(): 
    return render_template("index.html") 

@app.route("/nyside")
def side2():
    return render_template("nyside.html")
```

- Den første ruten, nemlig `"/"` var allerede laget fra før, den fører til forsiden vår. Uten denne ville vi ikke hatt tilgang til nettstedet vårt i første omgang. Vi har så laget en ny rute under, nemlig `/nyside`.

- `@app.route("/")` lager altså en *rute* på nettadressen, og bestemmes av det som returneres av funksjonen under. Ruten `"/"` tilsvarer nettadressen `http://127.0.0.1:5000/` som er den Flask har laget til nettstedet vårt. Vår nye rute vil dermed tilsvare nettadressen `http://127.0.0.1:5000/nyside`

- `return render_template("nyside.html")`, returnerer html-filen `nyside.html`. Med andre ord vi sendte `"/nyside"` via href til app.py, da sendes nettsiden `nyside.html` tilbake. Denne interaksjonen mellom front-end og back-end tilsvarer nå en lenke mellom nettsidene våre.

Selv om vi fortsatt kjører alt fra samme datamaskin, later nå flask som at vi jobber opp mot en server ved å la applikasjonen bygge et såkalt "virtual enviroment". Slik kan vi se hvordan nettstedet ville ha fungert i virkeligheten. Dersom vi "skrur av" serveren (ctrl-c) så vil ikke nettsidene våre fungere lenger. Ved å høyreklikke på prosjektmappa og velge "Run Flask" så starter vi "serveren" og kan sjekke ut nettsidene våre igjen.

![]()

Følg lenka slik at du får åpnet nettstedet. Nå kan du surfe og inspisere som vanlig.

### Statiske filer

Vi har sett på hvordan vi lenker sammen nettsider ved å gå via backend med flask. Hva da med eksterne filer, slik som bilder og css-filene våre? Disse skal jo heller ikke ligge åpent for brukeren, så også her må vi gjøre det litt anderledes. Flask er bygd opp på en måte der disse filene skal ligge i en spesifikk mappe som kalles `static`. Vi oppretter denne mappa i prosjektet vårt (på samme nivå som for eksempel templates mappa). Legg inn et bilde i static-mappa, og lag img-taggen et sted på forsiden vår. Tidligere har vi skrevet en sti til bildet i src-attributten til bilde-elementet, dette ville nok fungert nå også men det er langt mer raskt og effektivt å bruke en innebygd innstruks:

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
    <a href="/side2">Klikk her!</a>
    <img src='{{url_for("static", filename="mitt_bilde.jpg")}}' alt="Alternativ bildetekst">
</body>
</html>
````

Vi forklarer ikke logikken i den koblingen akkurat nå, men alle bilder og eventuelt andre filer skal altså ligge i static-mappa og kobles til på denne måten. Det eneste du trenger å forandre er navnet i filename.

### Oppgave


