---
title: 6.1 Introduksjon
sidebar_position: 1
sidebar_label: 6.1 Introduksjon
description: Velkommen til Flask!
---

# Introduksjon til Flask

## 6.0 Installer utvidelse

Installer utvidelsen `Flask-VGS` i VS Code.

> I VS Code ligger utvidelser under ikonet med fire firkanter på menyen til venstre.

## 6.1 Hallo, Verden!

Lag en ny mappe i VS Code, høyreklikk på mappen og velg `Create Flask`.
Når `Create Flask` er ferdig har det dukket to nye filer i prosjektmappen, det er filene `app.py` og `templates/index.html`.


###  6.1.1 Back-end

I `app.py` skrives Python-koden til applikasjonen.
Koden som skrives her er koden til *serveren*, slik kode kalles ofte *back-end*, fordi 
denne koden ligger *bak* og brukeren aldri ser denne koden.

````python
from flask import Flask, render_template # importerer det som trengs fra Flask-biblioteket

app = Flask(__name__) # oppretter en `Flask`-app, som lagres i variabelen `app`

@app.route("/") #lager en rute på nettadressen, som viser det som returneres av funksjonen under
def index(): # lager en funksjon med navn `index`, funksjonen kjøres når ruten som er definert på linjen over blir besøkt
    navn = "Sandvika" # oppretter en lokal variabel `navn` med verdien `"Sandvika"`
    return render_template("index.html", navn=navn) # returnerer html-filen `index.html`, hvor {{navn}} blir Sandvika

````
- `@app.route("/")` lager en *rute* på nettadressen, som viser det som returneres av funksjonen under. Eks: ruten `"/"` tilsvarer nettadressen `http://127.0.0.1:5000/`, og `"/registrer"` tilsvarer nettadressen `http://127.0.0.1:5000/registrer`  
- `return render_template("index.html", navn=navn)`, returnerer html-filen `index.html`, hvor `{{navn}}` byttes ut med verdien til variabelen navn.

### 6.1.2 Front-end

I mappen `templates` ligger filen `index.html`, som inneholder nesten vanlig HTML-kode.
Forskjellen fra vanlig HTML er `{{navn}}`.
De doble krøllparentesene `{{}}` forteller flask at den skal hente noe fra serveren (app.py).
I dette eksempelet hentes verdien i variabelen `navn` fra serveren.


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
    <h1>Hallo, {{navn}}!</h1>
</body>
</html>
````


### 6.1.3 Oppgave

1. Bytt ut verdien på variabelen `navn` i `app.py` til ditt eget navn, start serveren på nytt ved å velge `run Flask` og sjekk nettsiden `http://127.0.0.1:5000`.
2. Kopier koden under inn i `app.py`, start serveren på nytt og sjekk nettsiden `http://127.0.0.1:5000/kongen`

```python
@app.route("/kongen") 
def kongen(): 
    navn = "Kong Harald"
    return render_template("index.html", navn=navn) 

```

3. Lag en ny rute med navnet til den du sitter ved siden av, som returnerer en nettside som sier "Hallo, NAVN!"