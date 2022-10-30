---
title: "Oppgaver: Løkker"
sidebar_position: 3
sidebar_label: Løkker
description: "Oppgaver: Løkker"
---

# Løkker

## Oppgave 3.1

a) Bruk en while-løkke til å printe ut alle tallene fra 0 til og med 100

b) Bruk en for-løkke til å printe ut alle tallene fra 0 til og med 100

c) Bruk en for-løkke til å printe ut alle partallene fra og med 400 til og med 600

<details>
<summary>Klikk for Løsning</summary>

````python
# a) 

tall = 0
while tall < 101:
    print(tall)
    tall = tall + 1 # Kan alternativt skrive tall += 1

# b)

for tall in range(101):
    print(tall)

# c) 

for tall in range(400, 601,2):
    print(tall)
````

</details>

## Oppgave 3.2

a) Forklar hva følgende kode gjør:

````python
sum = 0 
n = 200

for tall in range(1,n+1):
    sum = sum + tall

print(sum)
````
b) Lag et program som regner ut summen av de n første oddetallene. La bruker bestemme n.

<details>
    <summary>Klikk for Løsning</summary>

    a) tall er løkkas variabel, og vil starte på 1 og slutte når den er n (som her er 200). 
    
    Den øker med 1 hver gang løkka kjøres. 

    sum øker med tall for hver gang, altså regner vi summen av de 200 første tallene

    b)

</details>

## Oppgave 3.3

Ta frem koden koden for Stein - Saks - Papir. Legg på funksjonalitet slik at programmet spør om man vil spille en gang til etter et spill. Hvis "ja" så spiller man om igjen, ellers stopper programmet.

<details>
    <summary>Klikk for Hint</summary>
   
    Hint:

    Lag en variabel som du setter til "ja"
    
    Legg en while-løkke rundt programmet som sjekker om variabelen er "ja".

    På slutten av spillet (i løkka), oppdaterer du variabelen med en input der du spør om det skal spilles om igjen


</details>
<details>
    <summary>Klikk for Løsning</summary>
    
    kommer

</details>
