---
title: 6.6 Filmsiden
sidebar_position: 6
sidebar_label: 6.6 Filmsiden
description: Et eksempel på bruk av Flask.
---

# Eksempel: Filmsiden - Ruter med parametere

## Filstruktur

- [imdb_top250.json](https://raw.githubusercontent.com/sandvika-VGS/sandvika-VGS.github.io/master/6-flask/imdb_top250.json)

```
|
- static (ny)
|    |
|    - nav.css (ny)
|    - style.css (ny)
|
- templates
|   |
|   - mal.html (ny)
|   - film.html (ny)
|   - index.html
|
- app.py
- imdb_top250.json (ny)
- requirements.txt
- venv
|   |
|   -...
|
```

## app.py

```python
from flask import Flask, render_template
import json

app = Flask(__name__)

# -- Leser fil ---
fil = open("imdb_top250.json", encoding="utf-8") # må ha encoding="utf-8" for å tolke tegn som æ,ø,å i filen
filmliste = json.load(fil)
# ---


# -- Ruter --

@app.route("/")
def index():
    return render_template("index.html", filmer=filmliste)

@app.route("/film/<id>")
def film(id):
    # id er en string med 1 + plassering til film i listen
    filmnummer = int(id) - 1 # konverterer id til et heltall (int) og trekker fra 1
    return render_template("film.html", film=filmliste[filmnummer])

# ---
```

## mal.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filmsiden</title>
    <link rel="stylesheet" href='{{url_for("static", filename="nav.css")}}'>
    <link rel="stylesheet" href='{{url_for("static", filename="style.css")}}'>
</head>
<body>
    <header>
        <nav>
            <a href="/">Hjem</a>
        </nav>
    </header>
    <main>
        {% block innhold %}
        {% endblock %}
    </main>
</body>
</html>
```

## index.html

Denne siden inneholder en for-løkke som går gjennom listen filmer, og lager et listepunkt for hver film, listepunktet inneholder en lenke som peker på ruten `/film/{{loop.index}}`, der `loop.index` er antall ganger løkken har kjørt.

```html
{% extends "mal.html" %}

{% block innhold %}
    <h1>Filmsiden</h1>
    
    <h2>Filmer</h2>
    <ol>
        {% for film in filmer %}
            <li>
                <!-- {{loop.index}} er en teller som teller hvor mange ganger løkka har kjørt (starter på 1) -->
                <a href="/film/{{loop.index}}">{{film["navn"]}}</a>
            </li>
        {% endfor %}
    </ol>
{% endblock %}
```

## film.html

Når brukeren går inn på ruten `/film/<id>`, får brukeren denne siden med informasjon om filmen som ligger på plass `id - 1` i listen `filmliste` fra `app.py`.

```html
{% extends "mal.html" %}

{% block innhold %}
    <h1>{{film["navn"]}}</h1>
    <img src='{{film["bilde"]}}' alt='Bilde av {{film["navn"]}}'>
    <p>
        {{film["beskrivelse"]}}
    </p>
    <ul>
        <li>Dato: {{film["dato"]}}</li>
        <li>Karakter: {{film["karakter"]}}</li>
    </ul>
{% endblock %}
```

## Eksperttips: film.html med all info

```html
{% extends "mal.html" %}

{% block innhold %}
    <h1>{{film["navn"]}}</h1>
    <img src='{{film["bilde"]}}' alt="">
    <p>
        {{film["beskrivelse"]}}
    </p>
    <ul>
        <li>Dato: {{film["dato"]}}</li>
        <li>Karakter: {{film["karakter"]}}</li>
        <li>Sjangere:
            <ul>
                {% for sjanger in film["sjangere"] %}
                    <li>{{sjanger}}</li>
                {% endfor %}
            </ul>
        </li>
        <li>
            {% if film["regissører"]|length == 1 %}
                Regissør: {{film["regissører"][0]}}
            {% elif film["regissører"]|length == 2 %}
                Regissører: {{film["regissører"][0]}} og {{film["regissører"][1]}}
            {% else %}
                Regissører: {{", ".join(film["regissører"])}}
            {% endif %}
        </li>
    </ul>

    <iframe width="600" height="400" src='{{film["trailer"]}}' frameborder="0"></iframe>
    
{% endblock %}
```
