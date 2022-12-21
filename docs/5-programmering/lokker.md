---
title: 5.4 Løkker
sidebar_position: 4
sidebar_label: 5.4 Løkker
description: Løkker brukes for å gjøre repetitive arbeidsoppgaver.
---

# Løkker

<iframe width="100%" height="500" src="https://www.youtube.com/embed/mgooqyWMTxk?start=0&end=37" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Datamaskiner er veldig gode på å repetere identiske eller lignende arbeidsoppgaver uten å gjøre feil, mens vi mennesker ikke alltid er like flinke. 
Det er en av grunnene til at datamaskiner ofte brukes for å automatisere gjentagende oppgaver.
I Python brukes løkker for å repetere arbeidsoppgaver.

## While-løkke

While-løkker kjører "så lenge" en betingelse er sann.
For eksempel bruker programmet under en while-løkke for å telle ned fra 5, og deretter si "lift off!":

```python
while betingelse:
    # kode som gjennomføres så lenge betingelsen er sann
```

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=n%20%3D%205%0Awhile%20n%20%3E%200%3A%0A%20%20%20%20print%28n%29%0A%20%20%20%20n%20-%3D%201%0Aprint%28%22Lift%20off!%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

:::tip

Trykk på Next-knappen et par ganger i vinduet over. Hva skjer?

:::

Så lenge `n` er større enn 0 skal programmet kjøre.

While-løkker brukes som oftest når vi ikke vet hvor lenge vi skal holde på.
F.eks helt til en spiller dør i et spill, eller så lenge spilleren ikke har gjettet riktig, som i eksemplet under.

```python
hemmelig = 5
gjett = int(input("Hvilket tall tenker jeg på? 1-100: "))

while hemmelig != gjett:
    gjett = int(input("Feil, prøv igjen! 1-100: "))

print("Riktig!")
```

<details>
<summary>Klikk for Pythontutor</summary>

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=hemmelig%20%3D%205%0Agjett%20%3D%20int%28input%28%22Hvilket%20tall%20tenker%20jeg%20p%C3%A5%3F%201-100%3A%20%22%29%29%0A%0Awhile%20hemmelig%20!%3D%20gjett%3A%0A%20%20%20%20gjett%20%3D%20int%28input%28%22Feil,%20pr%C3%B8v%20igjen!%201-100%3A%20%22%29%29%0A%0Aprint%28%22Riktig!%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

</details>

### Uendelige løkker

While-løkkene kjører så lenge betingelsen er sann (`True`). 
Hvis betingelsen aldri blir usann (`False`), vil en løkke kjøre for alltid. Slike løkker kalles *uendelige løkker* (fra eng. *infinite loops*).
Hvis vi ender opp i en uendelig løkke vil PCen fryse, og vi får ikke kjørt resten av programmet.

**Eksempel 1**:

```python
while True:
    print("Inn i evigheten!")
```

**Eksempel 2**:

```python
n = 20
while n > 0:
    print(n)
```

:::note

I eksempel 1 vil `True` alltid forbli `True`.

I eksempel 2 vil `n` alltid forbli større enn 0, fordi 20 er større enn 0.

:::

## For-løkke

En for-løkke gjentar en kode et bestemt antall ganger.
Hvis vi på forhånd vet hvor mange ganger en kode skal kjøre, kan vi bruke en for-løkke.

Løkken under vil telle fra 1 til 10.

```python
for i in range(1,11):
    print(i)
```

<details>
<summary>Klikk for Pythontutor</summary>

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=for%20i%20in%20range%281,11%29%3A%0A%20%20%20%20print%28i%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

</details>

`range()` er en innebygd funksjon som lager en rekke med tall. Rekken starter på det første tallet og slutter ett tall før det andre tallet. Eks: `range(1,3)` gir rekken `1` `2`. `range(5,7)` gir rekken `5` `6`.

Det er også mulig å droppe første tallet i range, slik `range(3)`, da lager range en rekke som starter på `0` og slutter før tallet mellom parantesene. Eks: `range(3)` gir rekken `0` `1` `2`

```python
# Teller fra 0 til 9
for i in range(10):
    print(i)
```

<details>
<summary>Klikk for Pythontutor</summary>

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Teller%20fra%200%20til%209%0Afor%20i%20in%20range%2810%29%3A%0A%20%20%20%20print%28i%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

</details>

## While vs. for

I mange tilfeller kan vi velge om vi skal bruke for eller while.
I eksemplet under brukes både en while-løkke og en for-løkke for å telle til 10.

```python
# ---- While ----
i = 1
while i < 11:
    print(i)
    i += 1

# ---- For -----
for i in range(11):
    print(i)
```

<details>
<summary>Klikk for Pythontutor</summary>

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20----%20While%20----%0Ai%20%3D%201%0Awhile%20i%20%3C%2011%3A%0A%20%20%20%20print%28i%29%0A%20%20%20%20i%20%2B%3D%201%0A%0A%23%20----%20For%20-----%0Afor%20i%20in%20range%2811%29%3A%0A%20%20%20%20print%28i%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

</details>

Selv om det er mulig å bruke begge typene løkker for å løse samme problem, er det noen tilfeller hvor vi oftere bruker for, og andre tilfeller hvor vi oftere bruker while. 
For-løkker brukes som oftest når vi vet hvor mange ganger vi skal gjenta en kode, mens While-løkker brukes oftest når vi ikke vet hvor mange ganger vi skal gjenta en kode.

## Lister og løkker

En for-løkke kan brukes for å gå gjennom alle *tingene* i en liste.

```python
liste = [1, 2, "Hei", True]
for i in liste:
    print(i)
```

<details>
<summary>Klikk for Pythontutor</summary>
    

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=liste%20%3D%20%5B1,%202,%20%22Hei%22,%20True%5D%0Afor%20i%20in%20liste%3A%0A%20%20%20%20print%28i%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>


</details>

## Ordbøker og løkker

For-løkker kan også brukes for å gå gjennom ordbøker.
For å få ut både nøkler og verdier må man gå gjennom innholdet i ordboken, det gjøres med `.items()`, se eksempel under.

```python
fotballspiller = {
    "fornavn": "Ada",
    "etternavn": "Hegerberg",
    "alder": 26,
    "klubb": "Lyon"
}
for nøkkel, verdi in fotballspiller.items():
    print(nøkkel, ":", verdi)
```

<details>
<summary>Klikk for Pythontutor</summary>

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=fotballspiller%20%3D%20%7B%0A%20%20%20%20%22fornavn%22%3A%20%22Ada%22,%0A%20%20%20%20%22etternavn%22%3A%20%22Hegerberg%22,%0A%20%20%20%20%22alder%22%3A%2026,%0A%20%20%20%20%22klubb%22%3A%20%22Lyon%22%0A%7D%0Afor%20n%C3%B8kkel,%20verdi%20in%20fotballspiller.items%28%29%3A%0A%20%20%20%20print%28n%C3%B8kkel,%20%22%3A%22,%20verdi%29%0A&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

</details>


## Oppgaver

### Oppgave 3.1

a) Bruk en while-løkke til å printe ut alle tallene fra 0 til og med 100

b) Bruk en for-løkke til å printe ut alle tallene fra 0 til og med 100

c) Bruk en for-løkke til å printe ut alle partallene fra og med 400 til og med 600

<details>
<summary>Klikk for løsning</summary>

```python
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
```

</details>

### Oppgave 3.2

a) Forklar hva følgende kode gjør:

```python
sum = 0 
n = 200

for tall in range(1,n+1):
    sum = sum + tall

print(sum)
```

b) Lag et program som regner ut summen av de n første oddetallene. La bruker bestemme n.

<details>
<summary>Klikk for løsning</summary>

a) tall er løkkas variabel, og vil starte på 1 og slutte når den er n (som her er 200). 

Den øker med 1 hver gang løkka kjøres. 

sum øker med tall for hver gang, altså regner vi summen av de 200 første tallene

b) Kommer

</details>

### Oppgave 3.3

Ta frem koden koden for Stein - Saks - Papir. Legg på funksjonalitet slik at programmet spør om man vil spille en gang til etter et spill. Hvis "ja" så spiller man om igjen, ellers stopper programmet.

<details>
<summary>Klikk for hint</summary>

- Lag en variabel som du setter til "ja"
- Legg en while-løkke rundt programmet som sjekker om variabelen er "ja".
- På slutten av spillet (i løkka), oppdaterer du variabelen med en input der du spør om det skal spilles om igjen

</details>

<details>
<summary>Klikk for løsning</summary>
    
Kommer

</details>
