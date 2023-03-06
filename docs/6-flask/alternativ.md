# Introduksjon til Flask

## Installer utvidelse

Installer utvidelsen `Flask-VGS` i VS Code.

:::info

I VS Code ligger utvidelser under ikonet med fire firkanter på menyen til venstre.

:::


Lag en ny mappe i VS Code, høyreklikk på mappen og velg `Create Flask`. Installasjonen kan ta ett minutt eller to, så smør deg med tålmodighet.
Når du har installert Flask har det dukket endel mapper og to nye filer i prosjektmappen, for oss er de viktigste `app.py` og `templates/index.html`.

### Front-end

Alle nettsidene vi skal lage skal ligge i mappen `templates` og forsiden bør hete `index.html`. Derfor er denne allerede laget når vi installerte Flask modulen. La oss undersøke hvor mye som blir anderledes enn før. Vi starter med å legge på noe tekst på forsiden, for eksempel en overskrift. Adressen som har ring rundt seg i bildet over er den vi har fått tildelt for nettstedet vårt. Vi kan følge denne og se at overskriften ser ut som den skal. Vi går så videre til lenker. Lag en ny html-fil i templates mappa,målet er å koble forsiden vår til denne. Vi kan ikke lenger skrive lenkene som før, der vi bare skriv stien til den nye nettsiden i href-attributten til lenka, for all slik informasjon skal gå via back-end. Vi lager istedet en såkalt snarvei eller `rute` til vår nye side:

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
</body>
</html>
````

Vi har kalt ruten vår for `side2` og bruker `\` for å indikere at side2 skal legge seg bak på nettsidens adresse. Koden som definerer hvordan denne ruten skap oppføre seg skrives er noe vi skal behandle i back-end delen av web-applikasjonen vår.


### Back-end

Når vi skal lage nettsider i Flask så må altså all informasjon gå via noe vi programmerer i back-end, her er det `app.py` som er "hjernen" eller sentralen som behandler alt som skal skje. Dersom vi trykker på en lenke til en annen nettside på vårt nettsted må det først sendes en såkalt `request` til app.py som eventuelt tar oss videre til den nye siden.

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

@app.route("/side2")
def side2():
    return render_template("side2.html")
```

- Her er det nå definert to ruter, nemlig forsiden og en rute til side2 som vi lagde

- `@app.route("/")` lager en *rute* på nettadressen, som viser det som returneres av funksjonen under. Ruten `"/"` tilsvarer nettadressen `http://127.0.0.1:5000/` som er naturlig å bruke til forsiden vår. Dermed vil ruten til side2 tilsvare nettadressen `http://127.0.0.1:5000/side2`
- `return render_template("side2.html")`, returnerer html-filen `side2.html`. Med andre ord vi sendte `"/side2"` via href til app.py, da sendes nettsiden `side2.html` tilbake. Denne interaksjonen mellom front-end og back-end tilsvarer nå en lenke mellom nettsider.

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


