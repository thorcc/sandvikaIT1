---
title: 5.6 Funksjoner
sidebar_position: 6
sidebar_label: 5.6 Funksjoner
description: Del opp og gjenbruk kode enklere med funksjoner.
---

# Behovet for struktur i koden

Med verktøyene vi har lært til nå i IT1 – variabler, løkker og if-setninger – kan vi faktisk programmere *alt*.
Vi kan lage alle dataspill du noen gang har spilt, alle nettsider du noen gang har besøkt, til og med alle chatbotter du noen gang har brukt for å jukse på innleveringer i norsk.
Men hvis vi faktisk skal lage noen av disse tingene, kun med verktøyene vi har lært til nå i IT1, kommer det til å bli utrolig krevende, og grunnen til at det blir krevende er mangelen på struktur.

Frem til nå har vi laget programmer som for det meste kjører kode linje for linje, ovenfra og nedover.
Med løkker klarer vi å få datamaskinen til å gjenta linjer med kode, og med if-setninger klarer vi å få datamaskinen til å hoppe over linjer med kode, men datamaskinen kjører fortsatt koden ovenfra og nedover.
De aller første digitale datamaskinene som ble laget på 40-tallet hadde bare de verktøyene vi har lært til nå.
Og når programmene er relativt små, går det som regel greit, men når programmene blir større og koden lengre, blir det fort krevende å jobbe med koden.

For å enklere strukturere koden i større programmer ble det derfor ganske raskt introdusert et konsept i programmering kalt *subrutiner*.
Subrutiner er at noen gitte linjer i et program skal kunne kalles og brukes andre steder i programmet. Når man jobber med slike subrutiner vil man ofte støte på noen ulike begrep, nemlig *funksjoner*, *prosedyrer* og *metoder*. Alle disse begrepene er mer eller mindre er varianter av det samme, og vi skal jobbe med de to førstnevnte her. 

:::info

Generelt kan man si at prosedyrer er funksjoner som ikke returnerer en egen verdi, mens metoder er en funksjon som må kobles til et objekt. Objekter og metoder er en stor del av IT2. Resten av programmeringen i IT1 og IT2 handler faktisk bare om å strukturere kode.

:::

## Funksjoner


Funksjoner og prosedyrer kan ses på som mindre delprogrammer i programmet. La oss se nærmere på hvordan vi setter opp en funksjon. Et viktig moment å forstå da er at når maskinen kjører funksjonen vi definerer så *vil ikke koden inne i funksjonen kjøre!* Den må kalles opp senere i programmet (men kan da hentes frem flere ganger). Vi definerer en enkel funksjon ved å skrive følgende `def valgfritt_navn():`. Inne i parentesene kan vi legge inn argument, noe vi skal se eksempler på etterpå. Som vanlig brukes kolon for å starte funksjonen og all kode som skal være med i linjene nedenfor må ha innrykk.


Eks:

```python
def hilsen():
    print("Hei alle sammen, dette er en funksjon. Strengt tatt en prosedyre siden det ikke returneres noe.")
```

Funksjoner og prosedyrer må nå *kalles opp* for at de skal kjøre, det gjøres med `funksjonsnavn()`. 

```python
hilsen()
```

Her er det spesifikt parentesene som gjør at datamaskinen gjenkjenner dette som en funksjon, i stedet for en variabel. Når funksjonen kalles, vil koden inne i funksjonen kjøres. Legg merke til at du har kalt opp mange funksjoner andre har laget allerede. Faktisk er den første instruksjonen du lærte i kurset, nemlig print("..."), en funksjon! Den skrives jo med parenteser.

## Parametere

Når vi skal lage funksjoner har vi ofte behov for å sende med litt informasjon. Tenk deg for eksempel at du skal lage en funksjon som skal regne arealet av en trekant. Det ville vært rimelig klønete å lage en egen funksjon for alle forskjellige trekanter der ute. Vi lager i stedet en der vi sender med grunnlinje og høyde og regner ut arealet basert på informasjonen vi får:

```python
def areal_trekant(g_linje, h):
    areal = g_linje*h/2
    return areal

```

Vi har nå "lovet" at informasjon om grunnlinje og høyde skal følge med i funksjonskallet. Parameterne `g_linje` og `h` vil da fungere som variable med verdiene vi sender i funksjonskallet. Uten disse vil ikke kallet fungere:

```python
areal = areal_trekant(10,5) # Funksjonskallet. Verdien som returneres lagres i variabelen areal
print("Arealet av trekanten er", areal)
```

*Ved å legge inn nye tall i funksjonskallet vil resultatet endre seg!*


:::info

**Parametere og argumenter**

Parameterne er variablene som *tas inn* i funksjonen, disse kan være hva som helst, mens argumentene er de faktiske verdiene som blir sendt inn i et funksjonskall. Se eksempelet under:

```python
def min_funksjon(parameter1, parameter2):
    # kode som gjør noe med parameterne


min_funksjon("Dette er argument 1", "Dette er argument 2")
```

:::

Filmen under viser hvordan parametere og argumenter henger sammen, og hvordan det kunne se ut å sette inn verdier mens koden kjører.
Legg også merke til at vi kan lagre returnerte verdier fra funksjoner i variabler, som vist i nestsiste linje i videoen.

import ReactPlayer from 'react-player'
import video from './bilder/functions.mp4'

<ReactPlayer url={video} controls width="100%" />
<br />


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

*Ser du hvorfor det ene eksempelet er en prosedyre, mens det andre er en funksjon?*


## Oppgaver

### Oppgave 5.6.1

a) Lag en funksjon som tar inn to verdier, der disse er katetene i en rettvinklet trekant. Funksjonen skal regne ut lengde til hypotenusen og returnere denne.

b) Endre på funksjonen slik brukeren kan bestemme om det er hypotenus eller en katet som skal regnes ut. Programmet skal returnere riktig svar avhengig av brukerens ønsker.

<details>
<summary>Klikk for løsning</summary>

```python
from math import sqrt

def hypotenus(katet1, katet2):
    return sqrt(katet1 ** 2 + katet2 ** 2)

# Testing:
print(hypotenus(3,4)) # -> 5.0
print(hypotenus(6,8)) # -> 10.0
```

</details>



### Oppgave 5.6.2

a) Lag en funksjon `kalkulator(tall1, operasjon, tall2)` som tar inn to tall og en regneopreasjon (+,-,*,/), og returnerer resultatet av tallene og regneoperasjonen.
b) **Frivillig:** Hvis du lagde chatbotten i kapittel 4, legg til kalkulatoren som et valg i den. 


<details>
<summary>Klikk for løsning</summary>

```python
def kalkulator(tall1, operasjon, tall2):
    if operasjon == "+":
        return tall1 + tall2
    elif operasjon == "-":
        return tall1 - tall2
    elif operasjon == "*":
        return tall1 * tall2
    elif operasjon == "/":
        return tall1 / tall2

# Testing
print(kalkulator(3, "+", 2)) # -> 5

```

</details>


### Oppgave 5.6.3

Lag en funksjon `gjennomsnitt(talliste)` som tar inn en liste av tall og returnerer gjennomsnittet av tallene i listen.  

<details>
<summary>Klikk for løsning</summary>

```python
def gjennomsnitt(talliste):
    sum_tall = sum(talliste)
    antall_tall = len(talliste)
    return sum_tall / antall_tall

talliste = [1,2,3,4,5]
resultat = gjennomsnitt(talliste)
print(resultat)
```

</details>

### Oppgave 5.6.4

Lag en funksjon `sjekk_partall(tall)` som tar inn et tall og returnerer `true` om det er et partall og `false` hvis det er et oddetall  

<details>
<summary>Klikk for løsning</summary>

```python
def sjekk_partall(tall):
    if tall % 2 == 0:
        return True
    else:
        return False

result = sjekk_partall(4)
print(result) # Output : True

result = sjekk_partall(5)
print(result) # Output : False
```

Alternativ løsning:

```python
def sjekk_partall(tall):
    return tall % 2 == 0

result = sjekk_partall(4)
print(result) # Output : True

result = sjekk_partall(5)
print(result) # Output : False
```

</details>


### Oppgave 5.6.5

Lag en funksjon `antall_vokaler(tekst)` som tar inn en tekststreng og returnerer antall vokaler i teksten 


<details>
<summary>Klikk for løsning</summary>

```python
def antall_vokaler(tekst):
    vokaler = "aeiouyæøå"
    vokal_teller = 0
    for bokstav in tekst:
        if bokstav.lower() in vokaler:
            vokal_teller += 1
    return vokal_teller

resultat = antall_vokaler("hei på deg")
print(resultat) # Output : 4
```

</details>



### Oppgave 5.6.6

Lag en funksjon som returnerer en tilfeldig rgb-farge. Eks: “rgb(100,155,200)” - Tallene i rgb går fra 0 til 255

<details>
<summary>Klikk for løsning</summary>

```python
from random import randint

def tilfeldig_farge():
    r = randint(0, 255)
    g = randint(0, 255)
    b = randint(0, 255)

    return f"rgb({r},{g},{b})"

# Testing
print(tilfeldig_farge())
print(tilfeldig_farge())
print(tilfeldig_farge())
```

</details>

### Oppgave 5.6.7

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
