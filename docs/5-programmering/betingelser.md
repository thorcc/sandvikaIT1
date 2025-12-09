---
title: 5.3 Betingelser
sidebar_position: 3
sidebar_label: 5.3 Betingelser
description: Betigelser legger til rette for logikk i programmering.
---

# Betingelser

![Hvilken vei](bilder/hvilken_vei.jpeg ':size=700')

*Hva slags kode skal kjøre?*

Livet består av mange valg. Det kan være de små valgene (Hva skal jeg ha på meg i dag?), eller større valg (Hva skal jeg studere?). Hva som skjer videre avhenger nok mye av valgene du stadig gjør. Dersom vi skal kunne programmere mer avansert, må vi også kunne gi datamaskingen muligheten til å kjøre forskjellige instrukser avhengig av ulike valg. Frem til nå har nemlig koden vår kjørt linje for linje. En betingelse derimot, består av et eller flere utsagn med tilhørende kode. Koden som hører vil bare kjøre dersom utsagnet stemmer (returner `True`). La oss legge til en betingelse på koden fra forrige side (der vi regner ut alderen til brukeren):

```python
navn = input("Hva heter du? ")
f_aar = int(input("Hvilket år er du født? "))

alder = 2022 - f_aar # Erstatt 2022 med riktig år om nødvendig

if alder > 17:
    print("Hei", navn, "du er myndig!")
```


<details>
<summary>Klikk for Pythontutor</summary>

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=navn%20%3D%20input%28%22Hva%20heter%20du%3F%20%22%29%0Af_aar%20%3D%20int%28input%28%22Hvilket%20%C3%A5r%20er%20du%20f%C3%B8dt%3F%20%22%29%29%0A%0Aalder%20%3D%202022%20-%20f_aar%20%23%20Erstatt%202022%20med%20riktig%20%C3%A5r%20om%20n%C3%B8dvendig%0A%0Aif%20alder%20%3E%2017%3A%0A%20%20%20%20print%28%22Hei%22,%20navn,%20%22du%20er%20myndig!%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

</details>


Vi ser her logikken bak en betingelse, skrevet som en *if-setning*. Vi regner ut alder, og så sjekker vi den matematiske ulikheten `alder > 17`. Dersom alder er større en 17 returnerer sjekken `True`, hvilket betyr at print instruksjonen kjører. Dersom betingelsen returnerer `False`, så skjer det ingenting. Vi bruker innhopp for å gruppere hvilken kode som hører til betingelsen.

Når vi lager en betingelse kan vi avslutte med `else`, altså kode som skal kjøre dersom det vi sjekker returnerer `False`:

```python
navn = input("Hva heter du? ")
f_aar = int(input("Hvilket år er du født? "))

alder = 2022 - f_aar

if alder > 17:
    print("Hei", navn, "du er myndig!")
else:
    print("Hei", navn, "du er dessverre ikke myndig enda")
```

<details>
<summary>Klikk for Pythontutor</summary>

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=navn%20%3D%20input%28%22Hva%20heter%20du%3F%20%22%29%0Af_aar%20%3D%20int%28input%28%22Hvilket%20%C3%A5r%20er%20du%20f%C3%B8dt%3F%20%22%29%29%0A%0Aalder%20%3D%202022%20-%20f_aar%0A%0Aif%20alder%20%3E%2017%3A%0A%20%20%20%20print%28%22Hei%22,%20navn,%20%22du%20er%20myndig!%22%29%0Aelse%3A%0A%20%20%20%20print%28%22Hei%22,%20navn,%20%22du%20er%20dessverre%20ikke%20myndig%20enda%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

</details>


## Flere betingelser

Vi kan teste flere utsagn samtidig. Anta at vi ønsker å sjekke om et tall ligger mellom 10 og 20. Da vil vi at tallet både skal være større enn 10, og *samtidig* være mindre enn 20. Vi kan skrive følgende:

```python
tall = int(input("Hvor mange poeng fikk du? "))

if tall > 10 and tall < 20:
    print("Dette tilsvarer middels måloppnåelse")
```

<details>
<summary>Klikk for Pythontutor</summary>

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=tall%20%3D%20input%28%22Hvor%20mange%20poeng%20fikk%20du%3F%20%22%29%0A%0Aif%20tall%20%3E%2010%20and%20tall%20%3C%2020%3A%0A%20%20%20%20print%28%22Dette%20tilsvarer%20middels%20m%C3%A5loppn%C3%A5else%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

</details>


Her må begge betingelsene være sanne samtidig for at koden skal kjøre.

Hvis vi skal lage ferdig koden (0 - 10 poeng er lav måloppnåelse mens 20 - 30 tilsvarer høy), så kan vi kjede sammen flere betingelser. Setningsoppbygningen foregår da som *if - elif - else*. Her starter "if" instruksjonen, elif står for "else if" der vi kan sjekke andre betingelser (vi kan ha flere av disse etter hverandre), mens "else" avslutter. Det er lettest å se i praksis:

```python
tall = int(input("Hvor mange poeng fikk du? "))

if tall >= 0 and tall < 10:
    print("Dette tilsvarer lav måloppnåelse")
elif tall > 10 and tall <= 20:
    print("Dette tilsvarer middels måloppnåelse")
elif tall > 20 and tall <= 30:
    print("Dette tilsvarer høy måloppnåelse")
else:
    print("Du må skrive inn poeng mellom 0 og 30!")
```

<details>
<summary>Klikk for Pythontutor</summary>

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=tall%20%3D%20input%28%22Hvor%20mange%20poeng%20fikk%20du%3F%20%22%29%0A%0Aif%20tall%20%3E%3D%200%20and%20tall%20%3C%2010%3A%0A%20%20%20%20print%28%22Dette%20tilsvarer%20lav%20m%C3%A5loppn%C3%A5else%22%29%0Aelif%20tall%20%3E%2010%20and%20tall%20%3C%3D%2020%3A%0A%20%20%20%20print%28%22Dette%20tilsvarer%20middels%20m%C3%A5loppn%C3%A5else%22%29%0Aelif%20tall%20%3E%2020%20and%20tall%20%3C%3D%2030%3A%0A%20%20%20%20print%28%22Dette%20tilsvarer%20h%C3%B8y%20m%C3%A5loppn%C3%A5else%22%29%0Aelse%3A%0A%20%20%20%20print%28%22Du%20m%C3%A5%20skrive%20inn%20poeng%20mellom%200%20og%2030!%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

</details>


Det er viktig at vi har innhopp på all kode som tilhører hver del av if-elif setningen. Legg merke til at vi strengt tatt kunne ha laget nye if-setninger for hver sjekk i stedet, men det anses som dårlig kode. Da ville man kunne ha havnet i flere sjekker samtidig, og det ønsker vi å unngå. Ved å bruke elif og else, kobler vi alt sammen til samme betingelse.

## Operatorer i en betingelse

I eksempelene ovenfor sjekket vi en matematisk ulikhet, men vi har langt større spillerom en det. La oss først se nærmere på å undersøke likheter, det byr nemlig på et unikt problem når vi koder. I matematikken bruker vi jo et likhetstegn for å vise (eller regne på ukjentene) at utsagnene på begge sider av likhetstegnet er det samme, men når vi koder bruker vi likhetstegnet for å *deklarere* en variabel! Dermed kan vi ikke lage en betingelse som for eksempel sjekker `if alder = 17:`, fordi da overskriver vi den eksisterende verdien av alder til 17. Vi bruker derfor doble likhetstegn for å undersøke om noe er likt. Koden der vi sjekket alder kan dermed skrives om til for eksempel:

```python
navn = input("Hva heter du? ")
f_aar = int(input("Hvilket år er du født? "))

alder = 2022 - f_aar

if alder == 18:
    print("Gratulerer", navn, "du ble/blir myndig i år!")

```

<details>
<summary>Klikk for Pythontutor</summary>

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=navn%20%3D%20input%28%22Hva%20heter%20du%3F%20%22%29%0Af_aar%20%3D%20int%28input%28%22Hvilket%20%C3%A5r%20er%20du%20f%C3%B8dt%3F%20%22%29%29%0A%0Aalder%20%3D%202022%20-%20f_aar%0A%0Aif%20alder%20%3D%3D%2018%3A%0A%20%20%20%20print%28%22Gratulerer%22,%20navn,%20%22du%20ble/blir%20myndig%20i%20%C3%A5r!%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

</details>


Når vi lager en betingelse er vi heller ikke begrenset til matematiske utsagn, vi kan like gjerne sjekke strenger:

```python
svar = input("Har du forstått if-setninger nå? ")

if svar == "ja":
    print("Bra jobbet!")
elif svar == "nei":
    print("Ikke gi opp, du vil snart knekke koden!")
else:
    print("Du må svare ja eller nei!")
```

<details>
<summary>Klikk for Pythontutor</summary>

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=svar%20%3D%20input%28%22Har%20du%20forst%C3%A5tt%20if-setninger%20n%C3%A5%3F%20%22%29%0A%0Aif%20svar%20%3D%3D%20%22ja%22%3A%0A%20%20%20%20print%28%22Bra%20jobbet!%22%29%0Aelif%20svar%20%3D%3D%20%22nei%22%3A%0A%20%20%20%20print%28%22Ikke%20gi%20opp,%20du%20vil%20snart%20knekke%20koden!%22%29%0Aelse%3A%0A%20%20%20%20print%28%22Du%20m%C3%A5%20svare%20ja%20eller%20nei!%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

</details>

Følgende tabell er en fin oppsummering og oversikt over de ulike operatorene vi kan bruke når vi skal sette opp en betingelse:

| Operator | Betydning            |
| -------- | -------------------- |
| `==`     | lik                  |
| `!=`     | ikke lik             |
| `<`      | mindre enn           |
| `>`      | større enn           |
| `<=`     | mindre enn eller lik |
| `>=`     | større enn eller lik |
| `and`    | og                   |
| `or`     | eller                |
| `not`    | ikke                 |
| `in`     | i                    |

## Samlinger

Med `in`-operatoren er det mulig å sjekke om noe er i en samling.

#### Strenger

`in`-operatoren er veldig fin for å sjekke om noe er i en tekst, koden under sjekker om `programmere` er et eller annet sted i brukerens svar.
Husk at en string (tekst) er egentlig bare en samling med tegn.

```python
brukersvar = input("Skriv et par setninger om hva du liker å gjøre på fritiden: ")
if "programmere" in brukersvar:
    print("Kult!")
```

#### Lister

Lister er Koden under sjekker om brukerens input er i listen med fotballag.

```python
brukersvar = input("Hva er favorittlaget ditt?")
brukersvar = brukersvar.lower() # tips: gjør brukerinput til små bokstaver, slik at vi ikke trenger sjekke for store bokstaver
if brukersvar in ["arsenal", "start", "sheffield wednesday"]:
    print("Kult!")
```

#### Ordbøker

I ordbøker kan vi bruke `in` for å sjekke om en nøkkel finnes i ordboken.

```python
telefonbok = {
    "ravi": 99323454,
    "thor": 97605931
}

navn = input("Hvem vil du se nummeret til? ")
navn = navn.lower()

if navn in ordbok:
    print(f"{navn} har telefonnummer: {telefonbok[navn]}")
else:
    print(f"{navn} finnes ikke i telefonboken")
```

#### En vanlig misforståelse

Betingelsene som står før og etter `and` eller `or` er to selvstendige som ikke har noe med hverandre å gjøre.
Under er et eksempel på en typisk feil mange IT1-elever gjør.

```python
import random
tall = random.randint(1,20)

# En vanlig feil
if tall == 1 or 10:
    print("Denne linjen vil kjøres uansett hvilken verdi tall har")

# Dette blir riktig
if tall == 1 or tall == 10:
    print("Denne vil kjøre kun hvis tall er lik 1 eller 10")
```

<details>
<summary>Klikk for Pythontutor</summary>

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=import%20random%0Atall%20%3D%20random.randint%281,20%29%0A%0A%23%20En%20vanlig%20feil%0Aif%20tall%20%3D%3D%201%20or%2010%3A%0A%20%20%20%20print%28%22Denne%20linjen%20vil%20kj%C3%B8res%20uansett%20hvilken%20verdi%20tall%20har%22%29%0A%0A%23%20Dette%20blir%20riktig%0Aif%20tall%20%3D%3D%201%20or%20tall%20%3D%3D%2010%3A%0A%20%20%20%20print%28%22Denne%20vil%20kj%C3%B8re%20kun%20hvis%20tall%20er%20lik%201%20eller%2010%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

</details>

## Oppgaver

### Oppgave 5.3.1

Med variablene a = 3, b = 7 og c = "7", d = 3.
Hvilke utfall gir testene nedenfor? (True, False eller noe annet?)
a)	`a < b`
b)	`a > b`
c)	`b >= c`
d)  `a = c`
e)  `a == d`
f)  `a > d or a == d`
g)  `a > d and a == d`

<details>
<summary>Klikk for løsning</summary>

a) True

b) False

c) Feilmelding

d) Det er ikke en test, verdien av a settes til "7"

e) True

f) True

g) False

</details>

### Oppgave 5.3.2

Bytt ut `# din kode her` slik at `Morna Erna` skrives ut

```python
statsminister = "Jonas Gahr Støre"

if # din kode her
    print("Morna Erna")
else:
    print("Morna Jonas")
```

<details>
<summary>Klikk for hint</summary>

`a == "Gro Harlem"` sjekker om a er lik teksten "Gro Harlem"

</details>

<details>
<summary>Klikk for løsning</summary>

```python
statsminister = "Jonas Gahr Støre"

if statsminister == "Jonas Gahr Støre":
    print("Morna Erna")
else:
    print("Morna Jonas")
```

</details>

### Oppgave 5.3.3

Slottet har installert et nytt alarmsystem, som kun slipper folk som heter `Kong Harald` inn dørene. Lag et program som sjekker om en brukeren heter `Kong Harald`, og sier velkommen hvis det stemmer, ellers skal programmet si `Ha deg vekk!`.

<details>
<summary>Klikk for hint</summary>

Du kan starte med denne koden:

```python
print("Velkommen til slottet")
print("Hva heter du?")
navn = input("Navn: ")

# Her skal du sjekke om navn er lik `Kong Harald`
```

</details>

<details>
<summary>Klikk for løsning</summary>

```python
navn = input("Navn: ")
if navn == "Kong Harald":
    print("Velkommen!")
else:
    print("Ha deg vekk!")
```

</details>

### Oppgave 5.3.4

I fornøyelsesparken Titusenfryd må man være minst 100 cm høy for å kjøre berg-og-dal-banen Thundercoaster. Skriv et program med en if-setning som tester om en person er høy nok.

<details>
<summary>Klikk for løsning</summary>

```python
høyde = int(input("Hvor høy er du? (cm): "))

if høyde >= 100:
    print("Gratulerer, du kan kjøre Thundercoaster")
```

</details>

### Oppgave 5.3.5

Lag en variabel `hemmelig` med et tall mellom 1 og 10. Be brukeren gjette tallet. Dersom brukeren gjetter riktig, skriver du ut "Gratulerer! Du gjettet riktig". Ved feil skriver du "Beklager, du gjettet feil". Ta vare på koden, du skal bruke den senere.

<details>
<summary>Klikk for hint</summary>

Bruk en betingelse. Husk `==` for å sjekke likhet når du lager en betingelse.

</details>

<details>
<summary>Klikk for løsning</summary>

```python
riktig = 4
gjett = int(input("Gjett et tall mellom 1 og 10"))

if gjett == riktig:
    print("Du klarte det")
else:
    print("Beklager, prøv igjen")
```

</details>

### Oppgave 5.3.6

Hos friske mennesker varierer kroppstemperaturen vanligvis mellom 36.5 og 37.5 grader. Lag et program som avgjør om en persons kroppstemperatur ligger under, innenfor eller over normal kroppstemperatur. Programmet skal skrive ut passende beskjed.

<details>
<summary>Klikk for løsning</summary>

```python
temp = int(input("Temperatur (celsius): "))

if temp > 37.5:
    print("Du har høyere kroppstemperatur enn vanlig")
elif temp < 36.5:
    print("Du har lavere kroppstemperatur enn vanlig")
else:
    print("Du har helt normal kroppstemperatur")
```

</details>

### Oppgave 5.3.7

a) Lag et program der bruker kan skrive inn poengsummen sin for en matematikkeksamen. Programmet skal skrive ut karakteren på eksamen når vi bruker følgende skala (maks 60 poeng):

| Karakter | 1   | 2   | 3   | 4   | 5   | 6   |
| -------- | --- | --- | --- | --- | --- | --- |
| Poeng    |     | 12  | 24  | 35  | 45  | 56  |

b) Endre koden slik at programmet skriver ut "Ugyldig poengsum" dersom man ikke skriver inn et tall mellom 0 og 60

<details>
<summary>Klikk for hint</summary>

Her må du ha flere betingelser i samme if-setning, husk at du kan legge til elif-betingelser etter if- setningen for at de er koblet sammen.

</details>

<details>
<summary>Klikk for løsning</summary>

```python
poeng = int(input("Hvor mange poeng fikk du? "))

if poeng > 60 or poeng < 0:
    print("Du har skrevet inn en ugyldig poengsum")
elif poeng >= 56:
    print("Du fikk karakter 6")
elif poeng >= 45:
    print("Du fikk karakter 5")
elif poeng >= 35:
    print("Du fikk karakter 4")
elif poeng >= 24:
    print("Du fikk karakter 3")
elif poeng >= 12:
    print("Du fikk karakter 2")
else:
    print("Beklager du fikk 1 - Ikke bestått")
```

</details>

### Oppgave 5.3.8

Lag en tekstbasert versjon av "Stein - Saks - Papir", der du kan spille mot datamaskinen.

Programmet kan skrive ut følgende:
```
Hva velger du?
1: Stein
2: Saks
3: Papir
Ditt valg (1,2,3):
```
Programmet må sjekke brukerens valg mot datamaskinens valg.

Her kan du ha behov for å trekke tilfeldige heltall, og da må vi importere en instruks utenifra.

Start koden med

```python
from random import *

# Nå vil instruksen randint(start, slutt) trekke et tilfeldig heltall i området du spesifiserer
```

<details>
<summary>Klikk for hint</summary>

- Ta imot et tall mellom 1 og 3 fra bruker
- Trekk et tall mellom 1 og 3 for datamaskinen
- Sammenlign tallene med en betingelse der du sjekker valgene opp mot hverandre og skriv ut resultatet.

For eksempel hvis brukeren skriver 1 (Stein) og datamaskinen velger 2 (Saks) så skriver du ut "Du vant, motstanderen valgte saks!".

</details>

<details>
<summary>Klikk for løsning</summary>

```python
from random import *
print("Hva velger du?")
print("1: Stein")
print("2: Saks")
print("3: Papir")
spiller_valg = int(input("Ditt valg (1,2,3): "))

data_valg = randint(1,3)

if spiller_valg == data_valg:
    print("Uavgjort!")
elif spiller_valg == 1 and data_valg == 2:
    print("Du vant, mostanderen valgte saks!")
elif spiller_valg == 1 and data_valg == 3:
    print("Du tapte, mostanderen valgte papir!")
elif spiller_valg == 2 and data_valg == 1:
    print("Du tapte, mostanderen valgte stein!")
elif spiller_valg == 2 and data_valg == 3:
    print("Du vant, mostanderen valgte papir!")
elif spiller_valg == 3 and data_valg == 1:
    print("Du vant, mostanderen valgte stein!")
elif spiller_valg == 3 and data_valg == 2:
    print("Du tapte, mostanderen valgte saks!")
else:
    print("Du har valgt feil!")
```

</details>

### Oppgave 5.3.9

Gitt at verdien av b = False, og verdien av x = 0. Hva er sannhetsverdien (True eller False) til følgende uttrykk?
1.  `b`
2.	`x == 0`
3.	`b and x == 0`
4.	`b or x == 0`
5.	`not b and x == 0`
6.	`not b or x == 0`
7.	`b and x != 0`
8.	`b or x != 0`
9.	`not b and x != 0`
10.	`not b or x != 0`

<details>
<summary>Klikk for hint</summary>


- `x == y`: gir True hvis x og y er like, ellers False
- `x != y`: gir True hvis x og y IKKE er like, ellers False
- `x and y`: gir True hvis både x og y er True
- `x or y`: gir True hvis en av x og y er True
- `not x`: gir True hvis x er False

</details>
<details>
<summary>Klikk for løsning</summary>

1. False
2. True
3. False (Hver side av "and" må være True, her er høyresiden True (x == 0), mens venstresiden (x) er False)
4. True (Bare en side av "or" må være True, her er høyresiden True (x == 0), mens venstresiden (x) er False)
5. True
6. True
7. False
8. False
9. False
10. True

</details>

### Oppgave 5.3.10

**SJAMAN-PROGRAMMET**

Lag et program som skriver ut tekster med personlige spådomer. Hvilken tekst som skal skrives ut avhenger av verdiene i variablene: kjønn, fødselsår og navn.

Et eksempel på en spådom kan være:
`Kjære Trine Skei Grande, denne måneden vil du motta en gave fra en ukjent. Unngå pengespill og gatekjøkkenmat. Dette gjelder spesielt deg som er dame og født i 1969.`

<details>
<summary>Klikk for løsning</summary>

Leddsetningen som kommer etter "Kjære ...", har vi bestemt å kalle intro her.

Du kan gjerne bytte ut påstander/introduksjoner i de utvalgte variablene.
Det som kommer under er bare et eksempel.
```python
from random import choice

intro = [
    "denne måneden vil du motta en gave fra en ukjent",
    "dette året vil være flott",
    "i morgen vil du møte kjæresten din",
    "du spiste frokost i dag"
]

generelle_pastander = [
    "Unngå pengespill og gatekjøkkenmat",
    "Unngå å kjøre bil, det kan være farlig",
    "Ikke ta imot penger fra ukjente",
    "Kjøp noe som gir deg litt ro i livet"
]

navn = input("Hva er navnet ditt? ")
f_aar = int(input("Hvor gammel er du? "))
kjonn = input("Hva er kjønnet ditt? ")

tilfeldig_intro = choice(intro)
tilfeldig_pastand = choice(generelle_pastander)

# Denne printen bruker en f-string, som gjør det mulig å gjøre en slik print oversiktlig.
print(f"Kjære {navn}, {tilfeldig_intro}. {tilfeldig_pastand}. Dette gjelder spesielt deg som er {kjonn} og født i {2023 - f_aar}.")

# Dette er en annen måte på å skrive samme print på, men denne er mindre oversiktlig.
# Fjern kommentaren for å bruke denne.
# print("Kjære", navn + ",", tilfeldig_intro + ".", tilfeldig_pastand + ". Dette gjelder spesielt deg som er", kjonn, "og født i", str(2023 - f_aar) + ".")
```

</details>

### Oppgave 5.3.11

**SKUDDÅR**

Lag et program som avgjør om et årstall er skuddår eller ikke.
> Tips: for å sjekke om tall er delelig på 4, bruk modulo. Eks: `tall % 4 == 0` gir True hvis tallet er delelig på 4.

a) Bruk reglene som gjaldt fra 8 e.kr til 1582:
- Et år er et skuddår hvis årstallet er delelig på 4.

b) Endre programmet fra oppgave a) slik at du bruker reglene som er litt mer korrekt:
- Et år er et skuddår hvis:
    - årstallet er delelig på 4, eks: 2012 var skuddår, men ikke 2014
    - men ikke hvis årstallet er delelig på 100, eks: 1900 var ikke skuddår
    - men likevel hvis det er også er delelig på 400, eks: 2000 var skuddår

c) Lag et skuddårsprogram med komplette regler:
- Regler for skuddår:
    - før 46 f.kr: Ingen skuddår
    - 45 f.kr – 9 f.kr: Skuddår hvis delelig på 3
    - 8 f.kr – 7 e.kr: Ingen skuddår (pause)
    - 8 e.kr – 1581: Skuddår hvis delelig på 4
    - fra 1582: delelig på 4, men ikke på 100, unntatt delelig på 400

<details>
<summary>Klikk for løsning</summary>

a)
```python
aar = int(input("Skriv inn et år: "))

if aar % 4 == 0:
    print("Året er et skuddår!")
else:
    print("Året er ikke et skuddår.")
```

b)
```python
aar = int(input("Skriv inn et år: "))

if aar % 4 == 0:
    if aar % 400 == 0:
        print("Året er et skuddår!")
    elif aar % 100 == 0:
        print("Året er ikke et skuddår!")
    else:
        print("Året er et skuddår!")
else:
    print("Året er ikke et skuddår.")
```

c)
```python
print("Bruk negative tall for år f.Kr.")
aar = int(input("Skriv inn et år: "))

# Definer svarene slik at vi slipper å skrive disse flere ganger i koden.
info_sant = "Året er et skuddår!"
info_usant = "Året er ikke et skuddår."

# Ingen skuddår før 46 f.Kr. og ingen skuddår mellom 8 f.Kr. - 7 e.Kr.
if aar <= -46 or (aar >= -8 and aar <= 7):
    print(info_usant)

# Skuddår mellom 45 f.Kr. og 9 f.Kr. hvis delelig på 3.
if aar >= -45 and aar <= -9:
    if aar % 3 == 0:
        print(info_sant)
    else:
        print(info_usant)

# Skuddår mellom 8 e.Kr. og 1581 e.Kr. hvis delelig på 4.
if aar >= 8 and aar <= 1581:
    if aar % 4 == 0:
        print(info_sant)
    else:
        print(info_usant)

# Skuddår etter 1582 hvis delelig på 4, ikke hvis delelig på 100, unntatt hvis også delelig på 400.
if aar >= 1582:
    if aar % 4 == 0:
        if aar % 400 == 0:
            print(info_sant)
        elif aar % 100 == 0:
            print(info_usant)
        else:
            print(info_sant)
    else:
        print(info_usant)
```

</details>

### Oppgave 5.3.12



> "Ja vel, da," sa datamaskinen og ble still et øyeblikk. De to mennene klarte ikke sitte i ro. Spenningen var uutholdelig.
>
> "Dere kommer helt sikkert ikke til å like det," gjentok Dypsindige Tenker.
>
> "Fortell oss det!"
>
> "Ja vel, da" sa Dypsindige Tenker. "Svaret på det store spørsmålet ..."
>
> "Ja ...!"
>
> "Om livet, universet og alt mulig ..." sa Dypsindige Tenker.
>
> "Ja ...!"
>
> "Er ..." sa Dypsindige Tenker og tok en liten pause igjen.
>
> "Ja ...!"
>
> "Er ..."
>
> "Ja ... !!! ...?"
>
> "Førtito," sa Dypsindige Tenker med uendelig tyngde og ro.
>
>  -- Haikerens guide til Galaksen, Douglas Adams

Lag en fil `dyp.py` og lag et program som spør brukeren om svaret på Det store spørsmålet om livet, universet og alt mulig, og svar ja hvis brukeren svarer `42`, `førtito` eller `to og førti`, ellers svar nei.
