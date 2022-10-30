---
title: 6.2 Flask og HTML
sidebar_position: 2
sidebar_label: 6.2 Flask og HTML
description: Se hvordan Flask og HTML samarbeider.
---

# Flask og HTML

## Enkle verdier

For å hente noe fra serveren brukes doble krøllparanteser `{{}}` i HTML-koden.
For eksempel:

````html
<h1>Hallo, {{navn}}</h1>
````

For at dette skal fungere må serveren (app.py) knytte en verdi til nøkkelordet `navn`, slik at serveren kan bytte ut `{{navn}}` med verdien.
Det kan for eksempel gjøres slik:

````python
@app.route("/")
def index(): 
    return render_template("index.html", navn="Trygve Slagsvold Vedum")
````

I eksempelet over sender serveren en HMTL-fil der alle `{{navn}}` i fila er byttet med teksten `Trygve Slagsvold Vedum`.


## Lister og løkker i HTML

Det er også mulig å bruke lister i Flask og HTML.
Serverkoden under inneholder listen `huskeliste`, som knyttes til nøkkelordet `huskeliste`.

````python
huskeliste = ["Gjøre lekser", "Spise middag"]

@app.route("/")
def index(): 
    return render_template("index.html", huskeliste=huskeliste)
````

Huskeliste er nå en liste, og for å skrive ut listen på nettsiden er det mulig å bruke en for-løkke.
For-løkker i Flask og HTML skrives på følgende måte:

````html
<ul>
    {% for listepunkt in huskeliste %}
        <li>{{listepunkt}}</li>
    {% endfor %}
<ul>
````
