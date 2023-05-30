---
title: 5.8 Filhåndtering
sidebar_position: 5
sidebar_label: 5.8 Filhåndtering
description: Vi kan lagre og hente frem data, til og fra egne filer.
---

# Filhåndtering

Vi har sett på mange forskjellige måter å lagre data som variable på når vi programmerer. Fra enkle strenger og tall til lister og sammensatte ordbøker. Vi har likevel ikke en permanent løsning på å lagre dataene, fordi variablene forsvinner når vi lukker programmet. I dette kapittelet skal vi se hvordan vi kan lagre dataene mer permanent ved å skrive de til en fil. Vi skal også se hvordan vi kan hente data fra tilsvarende filer og bruke de i programmene vi lager. 

## Filtyper
La oss først ta en titt på filtypene som vanligvis brukes for større datamengder. Den enkleste er en ren tekstfil på formen `fil.txt`. Denne har ikke noe som helst krav til hva vi skriver i fila, og hvor enkelt det er å lese dataene herfra avhenger helt og holdent av hvordan de er lagret. Et annet eksempel er såkalte `csv`-filer, der csv står for `comma separated values`. Dette er også en tekstfil, men vi skal bruke komma (eller andre symboler) for å separere dataene vi skriver i den. Den er da også kompatibel med regneark, som vil kunne vise dataene i hver sin celle.

Når vi åpner slike filer med python er det ofte litt jobb å få skilt dataene fra hverandre, konvertert de til riktig type og å få lagt de i respektive lister eller variable. Du vil jobbe en del med slike problem i IT-2.

En mer avansert filtype er en såkalt `json` fil. Json-filer er en standard filtype for å overføre data med, men den er strengere på hvordan disse skal skrives. Reglene vi følger er heldigvis de samme som vi er vant til når vi skriver lister eller ordbøker i Python. Når vi for eksempel lager en ordbok med informasjon over venner og bekjente, er det nøyaktig samme struktur disse dataene skal lagres med i en json fil. Det gjør det lettere for oss å overføre slike data frem og tilbake, vi kan importere noen standard metoder (funksjoner) som hjelper oss.

## Lagre data i json

La oss først starte i Python og lage en litt avansert ordbok for venner og bekjente. Den ligner ganske mye på den vi så på i kapittel XX, men med små forskjeller:

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

Vi ønsker å legge til flere venner etterhvert, og vi har behov for å lagre alt sammen mer permanent. Vi velger derfor å skrive ordboka inn i en json fil, da importerer vi først noen hjelpefunksjoner i starten av programmet:

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

Vi importerer json, og skriver inn tre nye linjer. Den første er generell uansett hvilken filtype vi jobber med og sørger for at vi har tilgang til en fil kalt "venner.json". Det kan være litt forvirrende siden fila ikke eksisterer enda, men i så fall vil programmet lage en slik fil i mappa vi jobber i. Vi legger på et "w" argument for å tillate oss å skrive data til fila. Vi må være litt forsiktige fordi med "w" vil vi faktisk overskriver alt som hadde stått i fila fra før (dersom den hadde eksistert). Neste linje `json.dump` "dumper" ordboka venner inn i variabelen "fil", altså kopierer ordboka inn i json-fila som akkurat ble opprettet. Vi legger på "indent = 4" slik at dataene ser ut som vi er vant til, i stedet for å ligge på en linje. Til slutt lukker vi fila. Prøv selv og se på json fila etter at den er opprettet. Forhåpentligvis ser du at ordboka ser nøyaktig lik ut som i python.


## Hente data fra json

Når vi nå har informasjonen om venner lagret i en egen fil, trenger vi ikke lenger å opprette ordboka i Python, vi kan istedet hente den fra fila. Det gjøres på ganske lik måte som når vi lagrer data:

```python

import json

fil = open("venner.json", "r")
data = json.load(fil)

print(data)
```

Vi ser at vi åpner fila på samme måte som i forrige eksempel, med unntak av at vi setter på "r" for read istedet for "w". Vi ønsker altså å lese dataene og står ikke i fare for å overskrive noe. Vi bruker `load` i stedet for dump, for å laste inn dataene og ser at når vi printer disse så er de på ordbok-formen vi originalt lagret dataene som.
