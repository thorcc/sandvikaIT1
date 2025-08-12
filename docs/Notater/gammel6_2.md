


# Introduksjon til Flask

## Installer Flask

For at du skal slippe å knote for mye med installering og oppsett av Flask har vi laget en utvidelse i VS-Code, denne heter `Flask-vgs`. Start med å installere denne.

:::info

I VS Code ligger utvidelser under ikonet med fire firkanter på menyen til venstre.

:::


Lag en ny mappe i VS Code, høyreklikk på mappen og velg `Create Flask`. Installasjonen kan ta ett minutt eller to, så smør deg med tålmodighet.
Hele Flask-mappa du nå har opprettet tilsvarer filer og mapper som i virkeligheten ligger på en ekstern server, og for oss er de viktigste `app.py` og `templates/index.html`. Førstnevnte er selve sentralen eller "hjernen" til nettstedet vårt altså fila som håndterer alle kommunikasjon med brukere av nettstedet. Det er her vi skal skrive serverkoden vår. I templates-mappa legger vi alle html-filene våre, der ligger skjelettet til forsiden vår allerede.  

## Ruter

Når vi kjører Flask-prosjektet ("serveren") så får vi tilgang til en URL/lenke. Denne er ikke lenger direkte koblet til en nettside, men sender en forespørsel til app.py som leverer forsiden tilbake til nettleseren vår. Dette kalles for en `rute`. Ruten til forsiden vår er allerede laget, og det er bestemt at den skal kalles for `"/"`. Vi ser følgende kode i app.py:

```python
from flask import Flask, render_template

@app.route("/")
def index():
    return render_template("index.html")
```

Dette er den enkleste ruten vi kan lage, det er en python-funksjon som kjører dersom noen sender forespørselen `"/"` til serveren, som betyr at de ønsker å besøke forsiden. Funksjonen returnerer da selve nettsiden tilbake slik at nettleseren kan vise innholdet til index.html. Nettsiden i seg selv kan vi lage akkurat på samme måte som tidligere, med et lite unntak. Alle filer som hører med, altså bilder, videoer, css-filer og liknende skal ligge i en mappe kalt `static`. Denne lager vi selv, og må være på samme nivå som templates-mappa.

Oppsummert har vi fra starten app.py med en fungerende rute til forsiden index.html. Vi kan legge på bilder og css for å gjøre forsiden penere, og må da passe på å legge alle filer i en egen mappe vi kaller for "static". Når vi jobber med å bygge forsiden vår vil vi på et eller annet tidspunkt trolig ønske å lenke til en ny side. Vi lager en ny html-fil som vi lagrer i "templates", for eksempel `nyside.thml` og ønsker å lage et a-element på forsiden så vi kan koble til den nye nettsiden.

Vi kan ikke lenger lage lenken til som før: `<a href="nyside.html>Les mer her</a>` fordi det forutsetter at brukeren har lastet ned nyside.html på forhånd. Vi må altså i stedet lage en `rute`. Navnet på ruta bestemmer vi selv, for eksempel kan vi skrive `<a href="/nyside">Les mer her</a>`:

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

Vi har nå kalt ruten vår for `nyside` og bruker `/` for å indikere at nyside skal legge seg bak på nettsidens adresse. Neste steg er da å gå til app.py, slik at vi kan kode ferdig ruten `"/nyside"`:



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

- `@app.route("/")` lager altså en *rute* på nettadressen, og bestemmes av det som returneres av funksjonen under. Ruten `"/"` tilsvarer nettadressen `http://127.0.0.1:5000/` som er den Flask har laget til nettstedet vårt. Vår nye rute vil dermed tilsvare nettadressen `http://127.0.0.1:5000/nyside`

- `return render_template("nyside.html")`, returnerer html-filen `nyside.html`. Med andre ord vi sendte `"/nyside"` via href til app.py, da sendes nettsiden `nyside.html` tilbake. Denne interaksjonen mellom front-end og back-end tilsvarer nå en lenke mellom nettsidene våre.

Selv om vi fortsatt kjører alt fra samme datamaskin, later nå flask som at vi jobber opp mot en server ved å la applikasjonen bygge et såkalt "virtual enviroment". Slik kan vi se hvordan nettstedet ville ha fungert i virkeligheten. Dersom vi "skrur av" serveren (ctrl-c) så vil ikke nettsidene våre fungere lenger. Ved å høyreklikke på prosjektmappa og velge "Run Flask" så starter vi "serveren" og kan sjekke ut nettsidene våre igjen.

:::info
I `app.py` skrives Python-koden til applikasjonen.
Koden som skrives her er koden til *serveren*, slik kode kalles ofte *back-end*, fordi 
denne koden ligger *bak* og brukeren aldri ser denne koden.
:::


| app.py | forside.html |
|:---|:---|
|from flask import Flask, render_template <br/><br/>app = Flask(\_\_name\_\_)<br/><br/>@app.get("/")<br/> def rute_forside(): <br/>&emsp;&emsp; navn = Lisa <br/> &emsp;&emsp; return render_template("forside.html, navn = navn)<br/><br/>app.run(debug="True") | <\!DOCTYPE html> <br/>\<html lang="en"><br/>\<head><br/>&emsp;&emsp;\<meta charset="UTF-8"\><br/>&emsp;&emsp;\<title>Mitt Prosjekt\</title>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<br/>\</head><br/>\<body><br/>&emsp;&emsp;\<h1>Heisann {{navn}}!\</h1><br/>\</body><br/>\</html>|