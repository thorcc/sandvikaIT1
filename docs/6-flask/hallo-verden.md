# Kom i gang med Flask

## 1. Installere Flask

1. Lag en ny terminal i VS Code
   - `Terminal -> New Terminal`
2. Installer Flask
   - Skriv følgende i terminalen og trykk enter:
      - Windows: `pip install Flask`
      - Mac: `pip3 install Flask`

## 2. Ditt første prosjekt

```python
from flask import Flask # importerer Flask fra flask-biblioteket

app = Flask(__name__) # oppretter en flask-app

# lager en rute for / (som betyr at den kan nås på http://127.0.0.1:5000/)
# ruten vil vise det som returneres av funksjonen som er definert under @app.route("/")
@app.route("/")
def hallo_verden():
    return "<p>Hallo, verden!</p>"


# lager en rute for /ha-en-fin-dag (som betyr at den vil kjøre på http://127.0.0.1:5000/ha-en-fin-dag)
@app.route("/ha-en-fin-dag")
def hallo_verden():
    return "<h1>Ha en fin dag!</h1>"

# starter en webserver i test-modus som kjører på port 5000
# webserveren vil nå kjøre på http://127.0.0.1:5000
app.run(debug=True, port=5000) 
```
