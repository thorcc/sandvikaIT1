---
sidebar_position: 3
sidebar_label: 5.3 Betingelser
---

# Betingelser.

![Hvilken vei](bilder/hvilken_vei.jpeg ':size=700')

*Hva slags kode skal kjøre*

Livet består av mange valg. Det kan være de små valgene (hva skal jeg ha på meg idag?), eller større valg (Hva skal jeg studere?). Hva som skjer videre avhenger nok mye av valgene du til stadig gjør. Dersom vi skal kunne programmere mer avansert, må vi også kunne gi datamaskingen muligheten til å kjøre forskjellige instrukser avhengig av ulike valg. Frem til nå har nemlig koden vår kjørt linje for linje. En betingelse derimot, består av et eller flere utsagn med tilhørende kode. Koden som hører vil bare kjøre dersom utsagnet stemmer (returner True). La oss legge til en betingelse på koden fra forrige side (der vi regner ut alderen til brukeren):


```PYTHON
navn = input("Hva heter du? )
f_aar = int(input("Hvilket år er du født? "))

let alder = 2021 - fødselsår;

if alder > 17:
    print("Hei", navn, "du er myndig!")
```

Vi ser her logikken bak en betingelse, skrevet som en `if-setning`. Vi regner ut alder, og så sjekker vi den matematiske ulikheten `alder > 17`. Dersom alder er større en 17 returnerer sjekken **True**, hvilket betyr at print instruksjonen kjører. Dersom betingelsen returnerer **False**, så skjer det ingenting. Vi bruker innhopp for å gruppere hvilken kode som hører til betingelsen. 

Når vi lager en betingelse kan vi avslutte med `else`, altså kode som skal kjøre dersom det vi sjekker returnerer **False**:

```PYTHON
navn = input("Hva heter du? ")
f_aar = int(input("Hvilket år er du født? "))

let alder = 2021 - fødselsår

if alder > 17:
    print("Hei", navn, "du er myndig!")
else:
    print("Hei", navn, "du er desverre ikke myndig enda")
```

## Flere Betingelser

Vi kan teste flere utsagn samtidig. Anta at vi ønsker å sjekke om et tall ligger mellom 10 og 20. Da vil vi at tallet både skal være større enn 10, og *samtidig* være mindre enn 20. Vi kan skrive følgende:

```PYTHON
tall = input("Hvor mange poeng fikk du?")

if tall > 10 and tall < 20:
    print("Dette tilsvarer middels måloppnåelse")

``` 

Her må begge betingelsene være sanne samtidig for at koden skal kjøre. 

Hvis vi skal lage ferdig koden (0 - 10 poeng er lav måloppnåelse mens 20 - 30 tilsvarer høy), så kan vi kjede sammen flere betingelser. Setningsoppbygningen foregår da som `if - elif - else`. Her starter "if" instruksjonen, elif står for "else if" der vi kan sjekke andre betingelser (vi kan ha flere av disse etter hverandre), mens "else" avslutter. Det er lettest å se i praksis:

```PYTHON
tall = input("Hvor mange poeng fikk du?")

if tall >= 0 and and tall < 10:
    print("Dette tilsvarer lav måloppnåelse")
elif tall > 10 and tall <= 20
    print("Dette tilsvarer middels måloppnåelse")
elif tall > 20 and tall <= 30:
    print("Dette tilsvarer høy måloppnåelse")
else:
    print("Du må skrive inn poeng mellom 0 og 30!")

``` 

Det er viktig at vi har innhopp på all kode som tilhører hver del av if-elif setningen. Legg merke til at vi strengt tatt kunne ha laget nye if-setninger for hver sjekk i stedet, men det anses som dårlig kode. Da ville man kunne ha havnet i flere sjekker samtidig, og det ønsker vi å unngå. Ved å bruke elif og else, kobler vi alt sammen til samme betingelse.

## Operatorer i en betingelse

I eksempelene ovenfor sjekket vi en matematisk ulikhet, men vi har langt større spillerom en det. La oss først se nærmere på å undersøke likheter, det byr nemlig på et unikt problem når vi koder. I matematikken bruker vi jo et likhetstegn for å vise (eller regne på ukjentene) at utsagnene på begge sider av likhetstegnet er det samme, men når vi koder bruker vi likhetstegnet for å deklarere en variabel! Dermed kan vi ikke lage en betingelse som for eksempel sjekker `if alder = 17:`, fordi da overskriver vi den eksisterende verdien av alder til 17. Vi bruker derfor doble likhetstegn for å undersøke om noe er likt. Koden der vi sjekket alder kan dermed skrives om til for eksempel:

```PYTHON
navn = input("Hva heter du? ")
f_aar = int(input("Hvilket år er du født? "))

let alder = 2021 - fødselsår

if alder == 18:
    print("Gratulerer", navn, "du ble/blir myndig i år!")

```

Når vi lager en betingelse er vi heller ikke begrenset til matematiske utsagn, vi kan like gjerne sjekke strenger:

```PYTHON
svar = input("Har du forstått if-setninger nå? ")

if svar == "ja":
    print("Bra jobbet!")
elif svar == "nei":
    print("Ikke gi opp, du vil snart knekke koden!")
else:
    print("Du må svare ja eller nei!")
```

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


