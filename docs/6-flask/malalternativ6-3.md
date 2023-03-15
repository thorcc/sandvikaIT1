# Lage Mal med Flask

### 

I prosjektet før jul er det en stort sjanse for at det ble veldig mye kopiering mellom de ulike nettsidene du lagde. Faktisk så var jo stort sett hele skjelettet samt header og footer elementende identiske. Jinja modulen som er innebygd i Flask har et system der vi slipper å kopiere gjentagende html hele tiden.

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

Symbolene `{% %}` er en snarvei de som har laget jinja har bestemt at skal brukes for å kalle på verktøyene som følger med den pakka. Ved å skrive `{% block valgfrittnavn %} {% endblock %}` så holder vi av plass som andre nettsider kan fylle med eget innhold. Alle andre nettsider vi lager kan nå hente denne felles delen fra mal.html. Forsiden vår, index.html, kan dermed endres til følgende:

```HMTL

{% extends "mal.html %}

{% block hoveddel %}

    <h1>Velkommen til mitt nettsted</h1>
    <p>Her fylles vi på med all html-kode som unik for forsiden</p>

{% endblock %}


```

Først arver vi all felles kode fra "mal.html" ved å bruke "extend". Så fyller blokken der vi holdt av plass med det innholdet som hører til forsiden. Alle andre sider vi lager kan nå bygges på samme måte, og vi slipper dermed å kopiere alt som er felles for alle sidene slik som før.
