---
title: 5.8 Filhåndtering
sidebar_position: 8
sidebar_label: 5.8 Filhåndtering
description: Vi kan lagre og hente frem data, til og fra egne filer.
---

# Filhåndtering

Vi har sett på mange forskjellige måter å lagre data som variable på når vi programmerer. Fra enkle strenger og tall til lister og sammensatte ordbøker. Vi har likevel ikke en permanent løsning på å lagre dataene, fordi variablene forsvinner når vi lukker programmet. I dette kapittelet skal vi se hvordan vi kan lagre dataene mer permanent ved å skrive de til en fil. Vi skal også se hvordan vi kan hente data fra tilsvarende filer og bruke de i programmene vi lager. 

## Filtyper
La oss først ta en titt på filtypene som vanligvis brukes for større datamengder. Den enkleste er en ren tekstfil på formen `fil.txt`. Denne har ikke noe som helst krav til hva vi skriver i fila, og hvor enkelt det er å lese dataene herfra avhenger helt og holdent av hvordan de er lagret. Et annet eksempel er såkalte `csv`-filer, der csv står for `comma separated values`. Dette er også en tekstfil, men vi skal bruke komma (eller andre symboler) for å separere dataene vi skriver i den. Den er da også kompatibel med regneark, som vil kunne vise dataene i hver sin celle.

En mer avansert filtype er en såkalt `json` fil. Json-filer er en standard filtype for å overføre data med, men den er strengere på hvordan disse skal skrives. Reglene vi følger er heldigvis de samme som vi er vant til når vi skriver lister eller ordbøker i Python. Når vi for eksempel lager en ordbok med informasjon over venner og bekjente, er det nøyaktig samme struktur disse dataene skal lagres med i en json fil. Det gjør det lettere for oss å overføre slike data frem og tilbake, vi kan importere noen standard metoder (funksjoner) som hjelper oss.

## Åpne filer

Uansett hvilken filtype vi skal forholde oss til så bruker vi:
```python
#fil = open("filnavn.filtype","bokstav")
#for eksempel:
fil = open("bolig_oslo_2022.csv","r")
```
- I eksempelet står bokstaven `"r (read)"`, som åpner en eksisterende fil med ønske om å lese dataene i fila. Det å åpne fila med lesetilgang er standard, så om vi ønsker kan vi droppe det siste argumentet.

- Tilsvarende kan vi bruke `"w" (write)` istedet for å åpne en fil som vi skal skrive til. Denne fila trenger ikke eksistere fra før, i så tilfelle vil programmet vårt lage den. Det er kanskje like greit fordi "w" innebærer at man vil overskrive innholdet i eksisterende fila.

- Dersom man ønsker å legge til (ikke overskrive) innhold i en eksisterende fil kan man bruke `"a" (append)` i stedet.

- Det finnes alternative bokstaver og kombinasjoner man kan bruke, men dette er de viktigste for vår del. De kan du lese om på egenhånd.

Nå har du altså tilgang til filas innhold (enten for å lese fra eller skrive til den) i Python. Dersom vi leser data, handler det da om å vite hva slags format dataene kommer i slik at man kan lagre den i egnede variable. Dette kan være litt styrete, og når det gjelder "txt"-filer eller "csv"-filer så ser vi nærmere på det i IT-2. 



## Lagre data i json

Fordelen med json filer er at formatet er så strengt at vi vet at dataen kommer i form av en liste eller en ordbok. La oss først starte i Python og lage en litt avansert ordbok for venner og bekjente. (Den ligner ganske mye på den vi så på i kapittel 4.6, men med små forskjeller):

```python

venner = {
    "Ola Nordmann":{
        "alder": 18,
        "telefon": "22222222",
        "hobby": ["venner","håndball","kino"]
    },
    "Kari Nordmann":{
        "alder": 17,
        "telefon": "22223333",
        "hobby": ["venner","fotball","kino"]  
    }
}

```

Vi ønsker å legge til flere venner etterhvert, og samtidig lagre ordboka i en json fil. Vi importerer derfor vi først noen hjelpefunksjoner i starten av programmet, så legger vi til kode:

```python
import json

venner = {
    "Ola Nordmann":{
        "alder": 18,
        "telefon": "22222222",
        "hobby": ["venner","håndball","kino"]
    },
    "Kari Nordmann":{
        "alder": 17,
        "telefon": "22223333",
        "hobby": ["venner","fotball","kino"]  
    }
}

fil = open("venner.json", "w")
json.dump(venner,fil, indent = 4)
fil.close()
```
`json.dump` "dumper" ordboka venner inn i variabelen "fil", altså kopierer ordboka inn i json-fila som akkurat ble opprettet. Vi legger på "indent = 4" slik at dataene ser ut som vi er vant til, i stedet for å ligge på en linje. Til slutt lukker vi fila. Prøv selv og se på json fila etter at den er opprettet. Forhåpentligvis ser du at ordboka ser nøyaktig lik ut som i python.


## Hente data fra json

Når vi nå har informasjonen om venner lagret i en egen fil, trenger vi ikke lenger å opprette ordboka i Python, vi kan istedet hente den fra fila. Det gjøres på ganske lik måte som når vi lagrer data:

```python

import json

fil = open("venner.json", "r")
data = json.load(fil)

print(data)
```

Vi ser at vi åpner fila på samme måte som i forrige eksempel, med unntak av at vi setter på "r" for read istedet for "w". Vi ønsker altså å lese dataene og står ikke i fare for å overskrive noe. Vi bruker `load` i stedet for dump, for å laste inn dataene og ser at når vi printer disse så er de på ordbok-formen vi originalt lagret dataene som.
