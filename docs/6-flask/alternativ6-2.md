# Introduksjon til Flask

### Installer Flask

For at du skal slippe å knote for mye med installering og oppsett av Flask har vi laget en utvidelse i VS-Code, denne heter `Flask-vgs`. Start med å installere denne.

:::info

I VS Code ligger utvidelser under ikonet med fire firkanter på menyen til venstre.

:::


Lag en ny mappe i VS Code, høyreklikk på mappen og velg `Create Flask`. Installasjonen kan ta ett minutt eller to, så smør deg med tålmodighet.
Når du har installert Flask har det dukket endel mapper og to nye filer i prosjektmappen, for oss er de viktigste `app.py` og `templates/index.html`.

### Ruter

Alle nettsidene vi skal lage skal ligge i mappen `templates` og forsiden bør hete `index.html`. Denne ble allerede laget da vi installerte Flask modulen, og vi ser at skjelettet, altså html-koden er lik det du er vant til. Vi kan legge til overskrifter og tekst, men lenker, bilder og css blir litt anderledes nå som vi jobber i et Flask-miljø. Tenk deg at hele mappen med prosjektet er noe som ligger back-end, altså brukeren ikke har tilgang til. Vi kan da for eksempel ikke lenger lage en lenke til en ny side der vi skriver `<a href="nyside.html>Trykk her</a>` fordi det forutsetter at brukeren har lastet ned nyside.html på forhånd. Vi lager istedet en forespørsel eller `rute`. En slik rute sender en beskjed til serveren om at vi ønsker å gå til nyside.html, serveren må da være kodet til å respondere ved å sende nettsiden til oss. Vi legger på en rute på forsiden ved å skrive a-elementet som følger:

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


#### app.py

Når vi skal lage nettsider i Flask så må altså all informasjon gå via noe vi programmerer i back-end, her er det `app.py` som har serverkoden og som behandler alt som skal skje. Vi lagde akkurat en rute som vi kalte `nyside`og ønsker at serveren skal sende html-fila til den nye siden tilbake.


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

:::info
I `app.py` skrives Python-koden til applikasjonen.
Koden som skrives her er koden til *serveren*, slik kode kalles ofte *back-end*, fordi 
denne koden ligger *bak* og brukeren aldri ser denne koden.
:::

![]()

Følg lenka slik at du får åpnet nettstedet. Nå kan du surfe og inspisere som vanlig.

### Statiske filer

Vi har sett på hvordan vi lenker sammen nettsider ved å gå via backend med flask. Hva da med eksterne filer, slik som bilder og css-filene våre? Disse skal jo heller ikke ligge åpent for brukeren, så også her må vi gjøre det litt anderledes. Flask er bygd opp på en måte der disse filene skal ligge i en spesifikk mappe som kalles `static`. Vi oppretter denne mappa i prosjektet vårt (på samme nivå som for eksempel templates mappa). Legg inn et bilde i static-mappa, og lag img-taggen et sted på forsiden vår. 
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
    <img src='../static/mittbilde.jpg' alt="Alternativ bildetekst">
</body>
</html>
````



