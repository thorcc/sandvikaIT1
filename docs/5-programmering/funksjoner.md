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

> Merk: Funksjoner og prosedyrer trenger ikke har parametere, da defineres de med en tom parentes, slik `def funksjonsnavn():`

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
