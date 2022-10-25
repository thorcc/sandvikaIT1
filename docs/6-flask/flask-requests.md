---
title: 6.4 Requests
sidebar_position: 4
sidebar_label: 6.4 Requests
description: Lær om samarbeid mellom bruker og server i Flask.
---

# Requests i Flask

1. Lag en ny mappe `huskeliste` i VS Code
2. Høyreklikk på mappen `huskeliste` og velg `Create Flask`

## Lage skjema (form) som sender info til serveren (app.py)

- Lim koden under inn i `templates/index.html`

````html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Huskeliste</title>
</head>
<body>
    <h1>Huskeliste</h1>
    <form action="/" method="post">
        <label for="gjoremaal">Gjøremål:</label>
        <input type="text" name="gjoremaal">
        <button type="submit">Send inn</button>
    </form>
    <ul>
        {% for gjoremaal in liste %}
            <li>{{gjoremaal}}</li>
        {% endfor %}
    </ul>
</body>
</html>
````

Koden inneholder en overskrift (h1), et skjema (form) og en liste (ul) som skal fylles med gjøremål.

I åpningstaggen til skjemaet står det `<form action="/" method="post">`.
Attributten `action="/"` sier hvor brukeren skal bli sendt etter skjemaet er sendt inn, `"/"` betyr hovedsiden (index.html). 
Attributten `method="post"` forteller at dette skjemaet skal sende (poste) noe info til serveren.

Videre har skjemaet en merkelapp (label) som viser teksten `Gjøremål:` på nettsiden.
Deretter et input-felt som har attributten `name="gjoemaal"`.
Nederst i skjemaet er en knapp med `type="submit"` som gjør at skjemaet sendes inn når denne knappen trykkes på.


## Ta imot info fra nettsiden på serveren (app.py)

- Lim koden under inn i `app.py`

```python
from flask import Flask, render_template, request

app = Flask(__name__)

liste = []

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == "POST":
        gjoremaal = request.form["gjoremaal"]
        liste.append(gjoremaal)
    return render_template("index.html", liste=liste)
```



