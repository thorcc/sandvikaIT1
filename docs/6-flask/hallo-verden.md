---
sidebar_position: 7
sidebar_label: 6.7 Hallo, verden
---

# Kom i gang med Flask

## 1. Opprette et nytt prosjekt

1. Lag en ny terminal i VS Code
   1. `Terminal -> New Terminal`
2. Lag en ny mappe med terminalen
   1. Skriv  `mkdir mappenavn`
3. Gå inn i mappen med terminalen
   1. Sriv `cd mappenavn`
4. Lag et nytt virtuelt prorgrammeringsmiljø i mappen
   1. Windows: `py -3 -m venv venv`
   2. Mac: `python3 -m venv venv`
5. Aktiver miljøet
   1. Windows: `venv\Scripts\activate`
   2. Mac: `. venv/bin/activate`
6. Installer Flask
   1. `pip install Flask`

## 2. Åpne et tidligere prosjekt

1. Lag en ny terminal i VS Code
   1. `Terminal -> New Terminal`
2. Gå inn i prosjekt-mappen med terminalen
   1. Sriv `cd mappenavn`
3. Aktiver miljøet
   1. Windows: `venv\Scripts\activate`
   2. Mac: `. venv/bin/activate`

## 3. Ditt første prosjekt

1. Lag en ny fil `app.py` i prosjektmappen
2. Lim inn koden under i `app.py`:

```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

```

3. Skriv `flask run` i terminalen
4. Gå inn på nettsiden `http://127.0.0.1:5000/` i nettleseren din
