---
title: 6.4 Python i html-fil
sidebar_position: 4
sidebar_label: 6.4 Python i html
description: Vi bruker Flask til å kode avansert interaksjon i html-filene
---

# Vi koder mer avanserte Nettsider

I dette delkapittelet forutsettes det at du har vært gjennom kapittel 6.2 og 6.3 og kan sette opp en enkel nettside med Flask. Det forutsettes også at du har grei kontroll på de grunnleggende programmerings-teknikkene vi har vært gjennom. Målet er nå nemlig å kombinere dette for å lage langt mer avanserte funksjonalitet. Vi ønsker å programmere nettsidene våre, ikke bare i 'app.py', men på selve html-fila.

:::info

Mye av det vi skal gjennom i dette delkapittelet kunne vært løst mer elegant med javascript. Da kan man kode rett inn i et script-element i hmtl-filene istedet for å bruke Flask.  Dersom du ønsker å gå mer i dybden med webdesign etter videregående kan det være smart å se nærmere på javascript. Det finnes mange gode ressurser på nettet for å komme igang, for eksempel https://runestone.academy/ns/books/published/JS4Python/index.html

:::

Start ved å opprette et Flask prosjekt slik du forhåpentligvis har prøvd noen ganger nå. (Legg merke til at vi sender et navn fra app.py til forsiden og skriver det ut der):

| app.py | forside.html |
|:---|:---|
|from flask import Flask, render_template <br><br>app = Flask(\_\_name\_\_)<br><br>@app.get("/")<br> def rute_forside(): <br>&emsp;&emsp; navn = Lisa <br> &emsp;&emsp; return render_template("forside.html, navn = navn)<br><br>app.run(debug="True") | <\!DOCTYPE html> <br>\<html lang="en"><br>\<head><br>&emsp;&emsp;\<meta charset="UTF-8"><br>&emsp;&emsp;\<title>Mitt Prosjekt\</title>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<br>\</head><br>\<body><br>&emsp;&emsp;\<h1>Heisann {{navn}}!\</h1><br>\</body><br>\</html>|

*Det aller enkleste oppsettet for en forside med Flask. Husk å opprette mappestrukturene der filene skal ligge på riktig måte*

Vi ønsker å programmere rett inn i html-fila vår. Dersom vi hadde lært javascript kunne vi ha laget et `<script></script>`- element og begynt å kode. Slik funksjonalitet finnes ikke innebygd for python, men vi kan få det til likevel. Det gjør vi ved å bruke spesielle symboler fra Flask (slik vi brukte `{{ }}`for å hente variable i forrige kapittel). Vi skal nå bruke symbolene `{% %}`. 

:::info

Hvorfor bruker man så mange rare symboler? Hvorfor bruker vi av og til `{{ }}` og andre ganger `{% %}`? Hva er forskjellen? Dette kan frustrere mang en VGS elev som prøver å lære seg IT-1. Når det er mange systemer som skal virke sammen og alt skal oversettes til 0 og 1, så blir det fort innviklet. Selv erfarene utviklere må sette seg inn i "bruksanvisningen" når de lærer seg nye verktøy. 

:::

### Betingelser

La oss legge til en betingelse som sjekker navnet vi får tilsendt. Vi endrer litt på html-fila:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mitt Prosjekt</title>       
</head>
<body>
    {% if navn == "Lisa" %} <!--Her trenger vi ikke doble parenteser rundt navn fordi vi allerede skriver python, ikke html -->
        <h1>Heisann {{navn}}! Velkommen tilbake</h1>
    {% endif %}
    {% else %}
        <h1>Hvem er du? Kanskje du skal lage en bruker?</h1>
    {% endif %}
</body>
</html>
```

*Prøv å bytte navn i app.py til noe annet enn Lisa. Sjekk at overskriften til forsiden isåfall endrer seg*











































