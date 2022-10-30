---
title: "Oppgaver: Lister og ordbøker"
sidebar_position: 4
sidebar_label: Lister og ordbøker
description: "Oppgaver: Lister og ordbøker"
---

# Lister og ordbøker

## Oppgave 4.1

a) Lag ei liste med navn på fagene du har i år. Alle elementene i lista skal være strenger.

b) Print ut favorittfaget ditt med en tilhørende tekst

c) Legg til noen fag du hadde forrige skoleår i lista

d) Finn lengden av lista uten selv å måtte telle den

<details>
    <summary>Klikk for Løsning</summary>
    
    Løsning:

    fag = ["norsk", "matematikk", "historie", "gym", "informasjonsteknologi", "fysikk", "engelsk"]

    print("mitt favorittfag er ", fag[4])

    fag.append("naturfag")
    fag.append("geografi")
    fag.append("samfunnsfag")

    print("antall fag:", len(fag))

</details>

## Oppgave 4.2

Bruk lista med fag fra oppgave 4.1

Lag en input der brukeren kan skrive inn et fag

Sjekk om faget ligger i lista. Hvis ja skriv at du har faget, hvis nei skriver du ut beskjed om at du ikke har det.

Eksperttips: Dersom variabelen tekst er en streng vil tekst.lower() gjøre om hele teksten til små bokstaver.

<details>
    <summary>Klikk for Løsning</summary>
    
    Løsning:

    fag = ["norsk", "matematikk", "historie", "gym", "informasjonsteknologi", "fysikk", "engelsk"]

    sjekk = input("Hvilket fag vil du sjekke? ")
    
    if sjekk in fag:
        print("Jeg kan dette faget!")
    else:
        print("Beklager, jeg har ikke hatt", sjekk)

</details>

## Oppgave 4.3

a) Lag følgende liste med tall: [1,3,5,6]

b) Legg til tallet 8 på slutten av lista

c) Legg til tallet 4 mellom 3 og 5 i lista

d) Endre tallet 4, slik at det står som “fire” i stedet.

e) Fjern “fire” fra lista

f) Print lengden av lista

<details>
    <summary>Klikk for Løsning</summary>
    
    Løsning:

    tall = [1,3,5,6]
    tall.append(8)
    tall.instert(2,4)
    tall[2] = "fire"
    tall.remove("fire")


</details>

## Oppgave 4.4

Legg alle julekarakterene inn i ei liste (som tall!)

Bruk `sum(liste)` og `len(liste)` til å regne gjennomsnittet. Rund av til to desimaler.

Print en passende tekst

Finn på et passende snitt til en utdanning du vil søke på. Sjekk om du kommer inn eller ikke. Print ut en passende tekst

<details>
    <summary>Klikk for Løsning</summary>
    
    Løsning:

    karakterer = [4,4,5,5,3,6,5,4,3,2,4,3] # Tilfeldig både mhp karakter og antall fag

    snitt = sum(karakterer)/len(karakterer)

    print("Mitt karaktersnitt er:", snitt)

    if snitt > 4.8:
        print("Hurra, jeg kommer inn")
    else:
        print("Jeg må nok forbedre karakterene mine")

</details>

## Oppgave 4.5

Norske bilnummer har to (store) bokstaver og fem tall.

Du skal lage et program der man enten kan legge til eller sjekke et bilnummer.

Legg en while-løkke rundt programmet så det gjentar seg. Enten ved å sette `while True:` eller ved å spørre om brukeren vil fortsette.

Lag en liste der du legger inn noen få fiktive bilnummer.

Spør først brukeren om de vil legge til eller sjekke et nummer. 

Hvis de vil legge til, ta inn det nye nummeret og legg det i lista.

Hvis de vil sjekke, ta inn nummeret og sjekk om det ligger i lista. Skriv ut en passende tekst.

<details>
    <summary>Klikk for Hint</summary>
   
    Hint:

    Lag ei liste, enten tom eller med noen tilfeldige bilnummer du selv fyller inn

    Lag en input der du spør etter en bokstav for å legge til eller sjekke nr

    Lag en betingelse der du tester bokstaven fra input.

    Skriv kode for å hendholdsvis legge til eller sjekke i riktig sted i betingelsen


</details>
<details>
    <summary>Klikk for Løsning</summary>
    
    Løsning:

    bilskilt = ["AB12345", "BT12345"]
    fortsett = "ja"

    while fortsett.lower() == "ja":
        valg = input("Vil du (S)jekke eller (L)egge til et nummer? ")
        if valg.upper() == "S":
            nummer = input("Skriv inn nummeret du vil sjekke: ")
            if nummer in bilskilt:
                print("Nummeret finnes registrert")
            else:
                print("Nummeret finnes ikke i vårt register")
        elif valg.upper() == "L":
            nummer = input("Skriv inn nummeret du vil legge til: ")
            bilskilt.append(nummer)
        else:
            print("Du må velge S eller L!")
        fortsett = input("Vil du fortsette (ja/nei)?")

</details>

## Oppgave 4.6

Opprett en liste `mineTall` med tallene 9, 3, 1 og 2.

* Bruk liste-metoder for å endre listeen til å bare inneholde tallene 3 og 1. 
* Legg til tallet 2 mellom tallene 3 og 1. 
* Legg til stringen “Stilig” på indeks 3 og boolean-en true på indeks 5. 
* To-dimensjonal liste, gjør følgende: 
* Lag en liste 
* Lag tre nye lister inne i listen 
* Legg til tallene 1, 2, 3 i den første listen 
* Legg til tallene 4, 5, 6 i den andre listen 
* Legg til tallene 7, 8, 9 i den tredje listen 
* Skriv ut tallene 1, 3, 5 og 9 fra listen 

<details>
<summary>Klikk for Løsning</summary>
    

````python
mineTall = [9, 3, 1, 2]
mineTall.remove(9)
mineTall.remove(2)
mineTall.insert(1, 2) # sett inn 2 på indeks 1
mineTall.insert(3, "stilig")
mineTall.insert(5, True)
print(mineTall)

liste2d = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]

print(liste2d[0][0], liste2d[0][2], liste2d[1][1], liste2d[2][2])
````

</details>

## Oppgave 4.7

Lag en ordbok med info om den du sitter ved siden av. 

Print navn og alder fra ordboken. 

<details>
    <summary>Klikk for Løsning</summary>
    
    kommer

</details>


## Oppgave 4.8

Ordboken under har navn på land som egenskaper og fargene på flagget til landene som verdier. 

```python
flagg = { 
    "norge": ["rødt", "hvitt", "blått"], 
    "sverige": ["blått", "gult"], 
    "danmark": ["rødt", "hvitt"], 
    "finland": ["hvitt", "blått"], 
    "japan": ["rødt", "hvitt"], 
    "gabon": ["grønt", "gult", "blått"], 
    "chile": ["blått", "hvitt", "rødt"] 
}
```

OBS! Merk at vi kan skrive ordbøker og lister over flere linjer, så lenge vi passer på komma og avsluttende “]” eller “}”, som i flagg over. 

Bruk flagg["egenskap"], og legg til et nytt land i ordboken 

Legg til kode slik at brukeren kan skrive inn et land, og så printes fargene til landets flagg. Hvis brukeren skriver inn et land som ikke eksisterer i ordboken, skal programmet gi en feilmelding som forteller at vi ikke har lagret info om dette landet. 

<details>
    <summary>Klikk for Løsning</summary>
    
    kommer

</details>


#### Oppgave 4.9

Lag en liste `bakeri`, og fyll listen med følgende varer som ordbøker, hvor navn og pris er nøkler. 

* Croissant 25 
* Grovbrød 40 
* Kneipp 20 
* Rosinbolle 20 
* Baguette 10 

Print innholdet i hele `bakeri`-et som en meny med en linje per vare, med navn og pris 

Tips: for-løkke 

Øk prisen på croissant med 10, uten å endre tidligere kode. 

Skriv ut listen med innhold på nytt, og sjekk at croissantens pris er endret riktig. 

Lag en funksjon meny(liste) som du kan kalle på for å utføre oppgave 1 og 4, og endre programmet ditt til å kjøre denne funksjonen i stedet. 

<details>
    <summary>Klikk for Løsning</summary>
    
    kommer

</details>
