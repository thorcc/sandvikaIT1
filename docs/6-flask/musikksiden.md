---
title: 6.5 Musikksiden
sidebar_position: 5
sidebar_label: 6.5 Musikksiden
description: Et eksempel på bruk av Flask.
---

# Eksempel - Musikksiden

## Filstruktur

- Spotify-bibliotek: [spotify.py](https://raw.githubusercontent.com/sandvika-VGS/sandvika-VGS.github.io/master/6-flask/spotify.py)

```
|
- static
|    |
|    - nav.css
|    - style.css
|
- templates
|   |
|   - mal.html
|   - sanger.html
|   - artister.html
|   - index.html
|
- app.py
- spotify.py
|
```

## App.py

```python
from flask import Flask, render_template # importerer flask-biblioteket
from spotify import weekly_top_songs_global


app = Flask(__name__) # oppretter en Flask-app

artistliste = ["Slowthai", "Shame", "Karpe", "Honningbarna"]
#sangliste = [
#    {"navn": "Hello", "artist": "Adele"},
#    {"navn": "Looking for Knives", "artist": "DYAN"}
#]
sangliste = weekly_top_songs_global()

@app.get("/") # oppretter en rute til /
def index(): # oppretter en funksjon index, denne funksjonen vil kjøre når vi besøker ruten definert på linjen over
    return render_template("index.html")

@app.get("/sanger") # oppretter en rute til "/sanger"
def sanger():
    return render_template("sanger.html", sanger=sangliste) # returnerer nettsiden "sanger.html"

@app.get("/artister") # oppretter en rute til "/artister"
def artister():
    return render_template("artister.html", artister=artistliste) # returnerer nettsiden "artister.html"

app.run(debug=True)
```

## mal.html

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Musikksiden</title>
    <link rel="stylesheet" href={{url_for("static", filename="style.css")}}>
    <link rel="stylesheet" href={{url_for("static", filename="nav.css")}}>
</head>
<body>
    <header>
        <nav>
            <a href="/">Hjem</a>
            <a href="/sanger">Sanger</a>
            <a href="/artister">Artister</a>
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

```html
{% extends "mal.html" %}

{% block innhold %}
    <h1>Hjem</h1>
{% endblock %}
```

## sanger.html

```html
{% extends "mal.html" %}

{% block innhold %}
    <h1>Sanger</h1>
    <ol>
        <li>Karpe - PAF.no</li>
        {% for sang in sanger %}
            <li>{{sang["artist"]}} - {{sang["navn"]}}</li>
        {% endfor %}
    </ol>
{% endblock %}
```

## artister.html

```html
{% extends "mal.html" %}

{% block innhold %}
    <h1>Artister</h1>

    <!-- Oppgave: Lag en liste med tre artister -->
    <ul>
        <li>Phoebe Bridges</li>
        <li>Injury Reserve</li>
        <li>Pulp</li>
        {% for artist in artister %}
            <li>{{artist}}</li>
        {% endfor %}
    </ul>
{% endblock %}
```
