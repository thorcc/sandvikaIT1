---
sidebar_position: 3
sidebar_label: 6.3 Lage mal
---

# Lage mal med Flask

## Opprette filer og mapper

1. Lag en ny mappe `filmsiden` i VS Code
2. Høyreklikk på mappen `filmsiden` og velg `Create Flask`
3. Opprett en ny mappe `static` i mappen `filmsiden`
4. Opprett to filer, `nav.css` og `style.css` i mappen `static`
5. Opprett to filer, `mal.html` og `film.html` i mappen `templates`

Nå har vi fått denne filstrukturen:

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
|   - filmer.html (ny)
|   - index.html
|
- app.py
- requirements.txt
- venv
|   |
|   -...
|
```

## Lage en mal - mal.html

- Lim koden under inn i `mal.html`

```html

<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href={{url_for("static", filename="style.css")}}>
    <link rel="stylesheet" href={{url_for("static", filename="nav.css")}}>
    <title>Filmsiden</title>
</head>
<body>
    <nav>
        <a href="/">Hjem</a>
        <a href="/filmer">Filmer</a>
    </nav>
    <main>
        {% block innhold %}{% endblock %}
    </main>
</body>
</html>

```

Fila `mal.html` inneholder nå en mal for HTML-sider.
Koden herfra vil kjøre på alle undersidene som *arver* denne koden.
Tre ting i koden er annerledes en vanlig HTML-kode.

1. Under `href` i lenkene til CSS-filene `nav.css` og `style.css` står det `{{url_for("static", filename="style.css")}}`. Denne linja sier til Flask at at fila `style.css` ligger i mappen `static`. Dette må gjøres for alle *statiske* filer på nettstedet, altså filer som ikke hentes fra *back-end* eller en database.
2. Inne i `<main>` står det `{% block innhold %}{% endblock %}`, denne linja forteller Flask at her skal det komme noe innhold fra et annet sted. I dette eksempelet skal innholdet komme fra HTML-filene `index.html` og `filmer.html`. 
3. Adressene (href) på lenkene er litt annerledes. Hjem har `href="/"` og filmer har `href="/filmer"`. Det er fordi vi nå lager en dynamisk nettside som skal kjøre på en server, og på servere er vanlig skrivemåte for *ruter* (lokale URL-er) å starte med `/` etterfulgt av rutenavn (nettsidenavn). 


## *Arve* en mal i HTML-filer

### index.html

- Fjern all koden i `index.html`, og lim inn koden under

```html
{% extends "mal.html" %}

{% block innhold %}
    <h1>Hjem</h1>
    <p>Velkommen til Filmsiden</p>
{% endblock %}
```

På første linje i koden står det `{% extends "mal.html" %}`, her forteller vi Flask at denne HTML-fila skal arve malen fra fila `mal.html`.

Videre står det `{% block innhold %}`, her forteller vi Flask at det skal komme en *blokk* med innhold, denne blokken inneholder litt HTML-kode før den avsluttes med `{% endblock %}`.

Når Flask generer koden for denne fila henter den HTML-koden fra `mal.html`, og bytter `{% block innhold %}{% endblock %}` med det som står inne i `{% block innhold %}{% endblock %}` i `index.html`.

> Oppgave: Kjør nettstedet ved å høyreklikke på mappen `filmsiden` og velg `Flask run`. Når nettsiden kjører, høyreklikker du på nettsiden og velger `vis sidekilde` (chrome). Studer koden, ser du hva Flask har gjort?

### filmer.html

- Lim koden under inn i `filmer.html`

````html
{% extends "mal.html" %}

{% block innhold %}
    <h1>Filmer</h1>
    <p>
        Film, også kalt spillefilm eller levende bilder, er en rekke av 
        fotografiske enkeltbilder, som når de vises i en rask rekkefølge, 
        skaper en illusjon av bevegelse som kalles phi-fenomenet. 
        Denne optiske illusjonen oppstår ettersom publikum oppfatter en 
        kontinuerlig bevegelse mellom adskilte objekter som blir sett i 
        rask rekkefølge. 
    </p>
{% endblock %}
````

> Vi har enda ikke laget *ruten* til `filmer`, derfor får vi feilmelding når vi prøver å klikke på lenken i navigasjonsbaren

## Ruting i Python

- Lim koden under inn i `app.py`

````python
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/filmer")
def filmer():
    return render_template("filmer.html")

````

Denne koden lager de to rutene `/` og `/filmer`.

## CSS-filer

- Lim koden under inn i `nav.css`

```css
nav{
    display: flex;
    justify-content: center;
    gap: 20px;
}
```

- Lim koden under inn i `style.css`

```css
body{
    font-family: 'Courier New', Courier, monospace;
}
main{
    width: 400px;
    margin: auto;
}
```