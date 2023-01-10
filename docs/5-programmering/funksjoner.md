---
title: 5.6 Funksjoner
sidebar_position: 6
sidebar_label: 5.6 Funksjoner
description: Del opp og gjenbruk kode enklere med funksjoner.
---

# Funksjoner og prosedyrer

Funksjoner og prosedyrer kan ses på som mindre delprogrammer i programmet.
De defineres med `def valgfritt_navn(parameter1, parameter2, ...)`, og all etterfølgende kode som har innrykk er med i funksjonen.

Eks:

```python
def areal_trekant(grunnlinje, høyde):
    return grunnlinje * høyde / 2
```

Funksjoner og prosedyrer må *kalles opp* for at de skal kjøre, det gjøres med `funksjonsnavn(parameter1, parameter2, ...)`

```python
areal = areal_trekant(10, 5) # Funksjonskall
print("Arealet av trekanten er", areal)
```

:::note

Funksjoner og prosedyrer trenger ikke å ha parametere, da defineres de med en tom parentes, slik:

```python
def funksjonsnavn():
    # kode her...
```

:::

## Funksjoner vs. prosedyrer

En funksjon returnerer noe, mens en prosedyre ikke returnerer noe, ellers er de like.
Prosedyrer og funksjoner defineres og kjøres på samme måte.

```python
def si_hei(navn):
    # En prosedyre
    print("Hei " + navn)

si_hei("Erna") # Skriver ut Hei Erna

def velkomstmelding(navn):
    # En funksjon
    return "Hei " + navn

melding = velkomstmelding("Jonas") # melding får verdien "Hei Jonas"
print(melding) # Skriver ut Hei Jonas
```

## Oppgaver

### Oppgave 5.6.1

Lag en funksjon som returnerer en tilfeldig rgb-farge. Eks: “rgb(100,155,200)” - Tallene i rgb går fra 0 til 255

<details>
<summary>Klikk for løsning</summary>

```python
from random import randint

def tilfeldig_farge():
    farge_liste = []

    for i in range(3):
        tilfeldig_tall = randint(0, 255)
        farge_liste.append(tilfeldig_tall)

    farge = f"rgb({farge_liste[0]}, {farge_liste[1]}, {farge_liste[2]})"

    return farge
```

</details>

### Oppgave 5.6.2

Lag en minibank med Python. Når programmet starter skal brukeren bli presentert med en meny som ser slik ut: 

```
--- Velkommen til minibanken --- 
Hva ønsker du? Trykk på en tast for å velge. 
 
S: Se saldo 

U: Ta ut penger 

I: Sette inn penger 

1. Lag minibanken med bare en bruker og en konto 

2. Utfordring: legg til funksjonalitet for flere brukere og/eller konti 

3. Utfordring: legg til funksjonalitet for å overføre mellom brukere og/eller konti 
```

<details>
<summary>Klikk for løsning</summary>

Denne kan gjøres på mange forskjellige måter, dette er bare et forslag:

```python
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
```

</details>
