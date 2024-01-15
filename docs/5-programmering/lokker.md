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

```python
while betingelse:
    # kode som gjennomføres så lenge betingelsen er sann
```

For eksempel bruker programmet under en while-løkke for å telle ned fra 5, og deretter si "lift off!":

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

## For-løkker

En for-løkke er en løkke som kan brukes for å gå gjennom *ting*, for eksempel kan vi bruke en for-løkke for å gå gjennom hver bokstav i en tekst, hver *ting* i en liste eller hvert opplslagsord i en ordbok.

Koden under bruker en for-løkke og går gjennom hver bokstav i teksten `Ja, vi elsker` og teller antall mellomrom.

<iframe width="100%" height="400" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=antall_mellomrom%20%3D%200%0Afor%20bokstav%20in%20%22Ja,%20vi%20elsker%22%3A%0A%20%20%20%20if%20bokstav%20%3D%3D%20%22%20%22%3A%0A%20%20%20%20%20%20%20%20antall_mellomrom%20%2B%3D%201%0Aprint%28antall_mellomrom%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

Inne i en for-løkke lages en variabel, for eksempel `bokstav`.
For hver runde i løkken oppdateres variabelsen verdi, i eksempelene over har variabelen `bokstav` først verdien `"J"`, så `"a"`, så `","`, så `" "` og så videre.
Følg med på hva som skjer i minnet (global frame) i eksempelet under.

<iframe width="100%" height="400" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=for%20bokstav%20in%20%22Ja,%20vi%20elsker%22%3A%0A%20%20%20%20print%28bokstav%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

Vi kan også bruke for-løkker for å gå gjennom lister.
Da vil variabelen vi oppretter i løkken få verdiene til hvert element i listen, en verdi om gangen.
Legg merke til hvilke verdier variabelen `elev` har i eksempelet under.

> En liste i python skrives mellom firkantparenteser `["dette", "er", "en", "liste"]`.  
> Firkantparenteser skrives med `option/alt` + `shift` + `8` på mac.  
> Firkantparenteser skrives med `Alt gr` + `8` på windows.

<iframe width="100%" height="300" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=for%20elev%20in%20%5B%22Erling%22,%20%22Ada%22,%20%22Caroline%22%5D%3A%0A%20%20%20%20print%28elev%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

Det er også mulig å bruke for-løkker på lister med tall.
Eksempelet under skriver ut syv-gangen.

```python
print("7-gangen")
for tall in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
    gange = 7 * tall
    print(f"7 * {tall} = {gange}")
```

<details>
<summary>Klikk for Pythontutor</summary>

<iframe width="100%" height="300" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=print%28%227-gangen%22%29%0Afor%20tall%20in%20%5B1,%202,%203,%204,%205,%206,%207,%208%20,%209,%2010%5D%3A%0A%20%20%20%20gange%20%3D%207%20*%20tall%0A%20%20%20%20print%28f%227%20*%20%7Btall%7D%20%3D%20%7Bgange%7D%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

</details>

I lengden blir det litt slitsomt å skrive alle tallene i listen.
Vi kan heller bruke den innebygde funksjonen `range(start, slutt_før)`, som gir oss et intervall fra og med `start` opp til `slutt_før`.

> `range()` er en innebygd funksjon som lager en rekke med tall.
> Rekken starter på det første tallet  og slutter ett tall før det andre tallet. Eks: `range(1,3)` gir rekken `1` `2`.
> `range(5,7)` gir rekken `5` `6`.
> Det er også mulig å droppe første tallet i range, slik `range(3)`, da lager range en rekke som starter på `0` og slutter før tallet mellom parantesene. Eks: `range(3)` gir rekken `0` `1` `2`

```python
print("7-gangen")
for tall in range(1,11):
    gange = 7 * tall
    print(f"7 * {tall} = {gange}")
```

<details>
<summary>Klikk for Pythontutor</summary>

<iframe width="100%" height="350" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=print%28%227-gangen%22%29%0Afor%20tall%20in%20range%281,11%29%3A%0A%20%20%20%20gange%20%3D%207%20*%20tall%0A%20%20%20%20print%28f%227%20*%20%7Btall%7D%20%3D%20%7Bgange%7D%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

</details>

Legg merke til at range slutter én før den siste verdien som sendes inn.
Løkken under vil altså telle fra 1 til 10 – ikke fra 1 til 11!

```python
for tall in range(1,11):
    print(tall)
```

<details>
<summary>Klikk for Pythontutor</summary>

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=for%20i%20in%20range%281,11%29%3A%0A%20%20%20%20print%28i%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

</details>

## While vs. for

I mange tilfeller kan vi velge om vi skal bruke *for* eller *while*.
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

Selv om det er mulig å bruke begge typene løkker for å løse samme problem, er det noen tilfeller hvor vi oftere bruker *for*, og andre tilfeller hvor vi oftere bruker *while*.
For-løkker brukes som oftest når vi vet hvor mange ganger vi skal gjenta en kode, mens While-løkker brukes oftest når vi ikke vet hvor mange ganger vi skal gjenta en kode.

## Ordbøker og løkker

For-løkker kan også brukes for å gå gjennom hver nøkkel i ordbøker.
Vi skal se mer på ordbøker i neste kapittel.

```python
fotballspiller = {
    "fornavn": "Ada",
    "etternavn": "Hegerberg",
    "alder": 26,
    "klubb": "Lyon"
}
for nøkkel in fotballspiller:
    print(f"{nøkkel}: {fotballspiller[nøkkel]}")
```

<details>
<summary>Klikk for Pythontutor</summary>

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=fotballspiller%20%3D%20%7B%0A%20%20%20%20%22fornavn%22%3A%20%22Ada%22,%0A%20%20%20%20%22etternavn%22%3A%20%22Hegerberg%22,%0A%20%20%20%20%22alder%22%3A%2026,%0A%20%20%20%20%22klubb%22%3A%20%22Lyon%22%0A%7D%0Afor%20n%C3%B8kkel%20in%20fotballspiller%3A%0A%20%20%20%20print%28f%22%7Bn%C3%B8kkel%7D%3A%20%7Bfotballspiller%5Bn%C3%B8kkel%5D%7D%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

</details>

## Oppgaver

### Oppgave 5.4.1

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

### Oppgave 5.4.2

a) Forklar hva følgende kode gjør:

```python
sum = 0 
n = 200

for tall in range(1,n+1):
    sum = sum + tall

print(sum)
```

b) Lag et program som regner ut summen av de `n` første oddetallene. La bruker bestemme `n`.

<details>
<summary>Klikk for løsning</summary>

a) `tall` er løkkas variabel, og vil starte på 1 og slutte når den er `n` (som her er 200).

Den øker med 1 hver gang løkka kjøres.

`sum` øker med tall for hver gang, altså regner vi summen av de 200 første tallene.

b)
```python
n = int(input("Skriv inn et tall: "))
n_sum = 0
oddetall = 1

for i in range(n):
    n_sum = n_sum + oddetall
    oddetall = oddetall + 2

print("Summen av de første", n, "oddetall er:", n_sum)
```

</details>

### Oppgave 5.4.3

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

### Oppgave 5.4.4

Lag din egen Chatbot. 

**Eksempel på bruk av Chatbot** 
`````
Hei jeg er chatbotten Thorsen 2000, hva lurer du på?
> Hvor mye koster en bitcoin?
1 Bitcoin koster 171 061 kr.
Lurer du på noe annet?
> Hvordan er været i Bergen?
Det er 6 grader og regn
Lurer du på noe annet?
> Hva er klokka?
Klokka er 09:39 
> Hva er hovedstaden i Argentina?
Det vet jeg ikke.
Lurer du på noe annet?
> Nei
Den er grei. Ha en fin dag.
`````
