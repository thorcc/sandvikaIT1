---
title: 6.3 Lage mal
sidebar_position: 3
sidebar_label: 6.3 Lage mal
description: Lag maler for HTML i Flask.
---

# Lage Mal med Flask

### block og extends

Etterhvert som vi legger til flere html-filer dukker et tilsvarende problem som da vi lagde prosjektet før jul. Det er veldig mye av det vi skriver html/css som er helt likt for hver nettside. Faktisk så er jo stort sett hele skjelettet samt header og footer elementene identiske. Rammeverk er ment for å hjelpe oss, og Flask er bygd på en modul, kalt `jinja` som har muligheter for å forenkle slikt dobbeltarbeid. Vi gjør dette ved å opprette en mal for alt som er felles for sidene på nettstedet vårt, så lar vi alle nye nettsider "arve" kode fra malen.

Vi starter med å opprette en ny html-fil i templates mappa. Vi kan kalle den for hva vi vil, men det er vanlig å bruke `mal.html` eller `layout.html` på engelsk. Denne siden skal inneholde alt som vi regner med kommer til å være felles for prosjektet og kan se ut som følger:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flask - VGS</title>
    <style>
        /* Vi legger in eventuell css her eller lenker til en egen fil */
    </style>
</head>
<body>
    <header>
        <!-- Vi legger inn alt som har med nav-bar/toppfanen å gjøre -->
    </header>
    <main>
        {% block hoveddel %}

        {% endblock %}
    </main>
    <footer>
        <!-- Vi legger inn alt som har med footeren her -->
    </footer>
</body>
</html>

```

Symbolene `{% %}` er en snarvei de som har laget jinja har bestemt at skal brukes for å kalle på verktøyene som følger med jinja. Ved å skrive `{% block valgfrittnavn %} {% endblock %}` så holder vi av plass som andre nettsider kan fylle med eget innhold. Alle andre nettsider vi lager kan nå hente denne felles delen fra mal.html. Forsiden vår, index.html, kan dermed endres til følgende:

```HMTL

{% extends "mal.html %}

{% block hoveddel %}

    <h1>Velkommen til mitt nettsted</h1>
    <p>Her fylles vi på med all html-kode som unik for forsiden</p>

{% endblock %}


```

Vi arver all felles kode fra "mal.html" ved å bruke "extend". Så fyller blokken der vi holdt av plass med det innholdet som hører til forsiden. Alle andre sider vi lager kan bygges på samme måte, og vi slipper på denne måten masse dobbeltarbeid. I mal fila kan du legge til så mange slike blokker du selv vil, for eksempel kan det være lurt å separere css koden din. Det som er felles legges i malen, mens vi setter av blokker så sidene kan skrive egen css for seg selv. 