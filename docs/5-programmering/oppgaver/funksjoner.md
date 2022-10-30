---
title: "Oppgaver: Funksjoner"
sidebar_position: 5
sidebar_label: Funksjoner
description: "Oppgaver: Funksjoner"
---

# Funksjoner

## Oppgave 5.1

Lag en funksjon som returnerer en tilfeldig rgb-farge. Eks: “rgb(100,155,200)” - Tallene i rgb går fra 0 til 255

<details>
    <summary>Klikk for Løsning</summary>
    
    kommer

</details>

## Oppgave 5.2

Lag en minibank med Python. Når programmet starter skal brukeren bli presentert med en meny som ser slik ut: 

````
--- Velkommen til minibanken --- 
Hva ønsker du? Trykk på en tast for å velge. 
 
S: Se saldo 

U: Ta ut penger 

I: Sette inn penger 

1. Lag minibanken med bare en bruker og en konto 

2. Utfordring: legg til funksjonalitet for flere brukere og/eller konti 

3. Utfordring: legg til funksjonalitet for å overføre mellom brukere og/eller konti 

````

<details>
    <summary>Klikk for Løsning</summary>
<p>

Løsning:

a) Denne kan gjøres på mange forskjellige måter, dette er bare et forslag:

````python

konto = 0
bank = True

while bank == True:
    oppdrag = input("Hva ønsker du? Trykk på en tast for å velge.\n S: Se Saldo.\n U: Ta ut penger. \n I: Sette inn penger. \n A: Avslutt\n")
    
    if oppdrag.upper() == "S":
        print("Din saldo er:", konto, "kr\n")

    elif oppdrag.upper() == "U":
        beløp = float(input("Hvor mye vil du ta ut? "))
        if konto >= beløp:
            konto -= beløp
            print( "\nDin saldo er nå", konto, "kr\n")
        else:
            print("\nDu kan ikke ta ut mer enn du har på konto.")
    
    elif oppdrag.upper() == "I":
        beløp = float(input("Hvor mye vil du sette inn? "))
        konto = konto + beløp
        print("\n", beløp, " kr er satt in på din konto.")
    
    elif oppdrag.upper() == "A":
        print("Takk for besøket, velkommen tilbake.")
        bank = False
    
    else:
        print("Ugyldig valg")
    
````

</p>
</details>
