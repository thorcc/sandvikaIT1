---
sidebar_position: 7
sidebar_label: 5.7 Oppgaver
---

# Oppgaver med løsning

## Variabler og Datatyper

#### Oppgave 1.1

Print ut noen selvvalgte beskjeder. Prøv å se hva som skjer dersom du glemmer anførselstegnene.

 

#### Oppgave 1.2 

a ) Hva tror du skjer dersom vi kjører følgende kode? 

```python
a = 2
print(a + 2)
``` 

b) Hvorfor er det ingen anførselstegn i print-instruksjonen denne gangen?

<details>
    <summary>Klikk for Løsning</summary>

    Koden printer ut 4. Vi kan ikke bruke anførselstegn fordi det ikke er en streng vi skal printe ut

</details>



#### Oppgave 1.3

Se på følgende kode:

```python
lengde = 5
bredde = 7

areal = lengde*bredde

print("Arealet av rektangelet er", areal)
```
Hvorfor bruker vi variable for lengde og bredde? Kunne vi ikke bare ha skrevet arealet rett inn i print-funksjonen?

<details>
    <summary>Klikk for Løsning</summary>

    Variable gir bedre oversikt når man leser koden. Dersom man ønsker å regne areal for et annet rektangel er det mye lettere å endre på verdien på variablene enn å gå inn i resten av koden for å endre på tallene. Dette blir spesielt viktig jo større koden er.

</details>



#### Oppgave 1.4

Spør den du sitter nærmest om alder. Lagre både navn og alder i to forskjellige variabler. Print en tekst som skriver ut følgende tekst rikig: Hei *navn*, du er *alder* år.

<details>
    <summary>Klikk for Hint</summary>

    Lag et input-felt for navn og alder. Husk komma i mellom strenger og variable når du printer ut
</details>

<details>
    <summary>Klikk for Løsning</summary>

    navn = input("Hva heter du? ")
    alder = input("Hvor gammel er du? ")

    print("Hei", navn, "du er", alder, "år")

</details>

#### Oppgave 1.5

Lag et program som ber om to tall. Programmet skal deretter regne ut differansen mellom de to tallene og skrive ut svaret. Her er et eksempel på hvordan en kjøring av programmet kan se ut:
````
Oppgi verdien til x: 25
Oppgi verdien til y: 19
Differansen mellom x og y er 6.
````

<details>
<summary>Klikk for hint</summary>


> Husk at det som bruker skriver inn alltid blir tekst, du må konvertere til flyttall (float) eller heltall (int). Eks: `float(input("Oppgi verdien til x: "))`

</details>

<details>
<summary>Klikk for løsning</summary>


````python
x = float(input("Oppgi verdien til x: "))
y = float(input("Oppgi verdien til y: "))
diff = x - y
print("Differansen mellom x og y er ", diff)
````

</details>

#### Oppgave 1.6

![oppgave 5](./bilder/oppgave_5.png)

a) Forklar hva som er galt med denne koden? Hvorfor blir det feil? Rett opp koden slik at den kjører 

b) Skriv adressen ut på følgende to måter ved å bruke variabler: "Adressen er Kongens gate 432b" og "Gaten er Kongens Gate, husnummeret er 432, oppgang b" 

<details>
    <summary>Klikk for Løsning</summary>

    a) I linje 3 er b skrevet uten anførselstegn. Da leter programmet etter en variabel som heter b, somn ikke finnes.

    b) 
    
    gate = "Kongens gate"
    husnr = "432"
    oppgang = "b"

    print("Adressen er", gate + husnummer + oppgang)
    print("Gaten er", gate, ", husnummeret er", husnr, "oppgang", oppgang)

</details>



#### Oppgave 1.7

Du er på restaurant med venner, og på regningen er følgende informasjon:

Total pris for mat og drikke: 850 kr
Ungdomsrabatt: 25 % 
Tips: 10 %

a) Legg informasjonen inn i variabler som tall (ikke bruk %, det gir ikke mening når vi programmerer)

b) Bruk variablene for total pris og ungdomsrabatt til å regne ut rabatten.

c) Trekk fra rabatt og bruk så variabelen for tips til å regne ut tips. 

d) Legg på tips, og skriv ut summen for måltidet etter både rabatt og tips 

e) Lag en variabel for antall personer, og skriv ut pris per person samt antall personer.

<details>
<summary>Klikk for Hint</summary>
<p>


````
- Lag de tre variablene

- Husk prosentformlene: pris*rabatt/100 gir selve rabatten

- Lag egne variable for alle mellomregningen.

- Bruk mellomregningene til å regne ut det som skal betales

- print ut alle variable du er usikre på underveis så er det lettere å finne ut om matematikken stemmer
````

</p>
</details>


<details><summary>Klikk for løsning</summary>
<p>


````python
# Her regner vi tips før rabatt, man kan argumentere for at det kan gjøres motsatt

pris = 850
rabatt_prosent = 25
tips = 10
ant_pers = 3

rabatt_kr = pris*rabatt_prosent/100
tips_kr = pris*tips_kr

totalt = pris - rabatt_kr + tips_kr/100
per_pers = totalt/ant_pers

print("Pris etter rabatt og tips er", totalt, "det blir", per_pers, "kr per person")
````

</p>
</details>



#### Oppgave 1.8

Formelen for å regne Fahrenheit om til Celsius er C = (F-32)*5/9. Lag et program som spør brukeren om temperaturen i fahrenheit. Regn om til Celsius og skriv en beskjed som sier hvor mange grader Celsius det tilsvarer. 

<details><summary>Klikk for hint</summary>
<p>

````
Lag en input som tar inn temperatur, husk å gjøre om til desimaltall

Regn ut Celsius med formelen, lagre i en ny variabel

Skriv ut variabelen sammen med input variabelen i en passende tekst

````

</p>
</details>


<details><summary>Klikk for Løsning</summary>
<p>

````python
f_heit = float(input("Hvor mange Fahrenheit? "))
celsius = (f_heit-32)*5/9

print(f_heit, "Fahrenheit tilsvarer, celsius, "grader Celsius")
````

</p>
</details>



#### Oppgave 1.9

Endre på koden i oppgave 6 slik at alle variablene skrives inn som input, det vil si at vi selv kan velge totalpris, rabatt, tips og antall personer 

<details>
<summary>Klikk for Løsning</summary>
<p>

````python
pris = float(input("Hva kostet måltidet? "))
rabatt_prosent = float(input("Har du eventuell rabatt? "))
tips = float(input("Vil du gi tips (oppgi i prosent) "))
ant_pers = float(input("Hvor mange er dere? "))

rabatt_kr = pris*rabatt_prosent/100
tips_kr = pris*tips_kr

totalt = pris - rabatt_kr + tips_kr/100
per_pers = totalt/ant_pers

print("Pris etter rabatt og tips er", totalt, "det blir", per_pers, "kr per person")
````

</p>
</details>


#### Oppgave 1.10

**HANDLETUR**

Lag et program som regner ut totalpris for en bruker etter å ha vært på handletur. De varene det er mulig å kjøpe er brød, melk, ost og yoghurt.

Prisene er som følger:
```
Brød: 20 kr.
Melk: 15 kr.
Ost: 40 kr.
Youghurt: 12 kr.
```

Eksempel på bruk av programmet:
```
Hei! Velkommen til IT-butikken.
Hvor mange brød vil du ha?
> 2
Hvor mange melk vil du ha?
> 1
Hvor mange ost vil du ha?
> 1
Hvor mange yoghurt vil du ha?
> 3
Du skal betale: 131 kr.
```

<details>
<summary>Løsning</summary>
<p>

````python
#priser
brød = 20
melk = 15
ost = 40
youghurt = 12

# handling
print("-- Velkommen til IT-butikken --")
print("Hvor mange brød vil du ha?")
ant_brød = int(input("> "))
print("Hvor mange melk vil du ha?")
ant_melk = int(input("> "))
print("Hvor mange oster vil du ha?")
ant_ost = int(input("> "))
print("Hvor mange yoghurt vil du ha?")
ant_yoghurt = int(input("> "))

# utregning av pris
pris = brød * ant_brød + melk * ant_melk + ost * ant_ost + youghurt * ant_yoghurt
print("Du skal betale ", pris, " kr.")
print("-- Takk for handelen --")
````

</p>
</details>

## Betingelser

#### Oppgave 2.1

Med variablene a = 3, b = 7 og c = "7", d = 3.  
Hvilke utfall gir testene nedenfor? (True, False eller noe annet?)  
a)	`a < b`  
b)	`a > b`    
c)	`b >= c`  
d)  `a = c`  
e)  `a == d`  
f)  `a > d or a == d`  
g)  `a > d and a == d`  


<details><summary>Klikk for Løsning</summary>
<p>

````
    Løsning

    a) True  
    b) False  
    c) Feilmelding  
    d) Det er ikke en test, verdien av a settes til "7"
    e) True
    f) True
    g) False
````

</p>
</details>

#### Oppgave 2.2

Bytt ut `# din kode her` slik at `Morna Erna` skrives ut

````python
statsminister = "Jonas Gahr Støre"

if # din kode her
    print("Morna Erna")
else:
    print("Morna Jonas")

````

<details>
<summary>Klikk for Hint</summary>
<p>

> `a == "Gro Harlem"` sjekker om a er lik teksten "Gro Harlem"

</p>
</details>


<details>
<summary>Klikk for Løsning</summary>

````python
statsminister = "Jonas Gahr Støre"

if statsminister == "Jonas Gahr Støre":
    print("Morna Erna")
else:
    print("Morna Jonas")
````

</details>

#### Oppgave 2.3

Slottet har installert et nytt alarmsystem, som kun slipper folk som heter `Kong Harald` inn dørene. Lag et program som sjekker om en brukeren heter `Kong Harald`, og sier velkommen hvis det stemmer, ellers skal programmet si `Ha deg vekk!`.

<details>
    <summary>Klikk for Hint</summary>
    Hint

    Du kan starte med denne koden:
    
    print("Velkommen til slottet")
    print("Hva heter du?")
    navn = input("Navn: ")

    # Her skal du sjekke om navn er lik `Kong Harald`

</details>
<details>
    <summary>Klikk for Løsning</summary>
    Løsning

    navn = input("Navn: ")
    if navn == "Kong Harald":
        print("Velkommen!")
    else:
        print("Ha deg vekk!")

</details>

#### Oppgave 2.4

I fornøyelsesparken Titusenfryd må man være minst 100 cm høy for å kjøre berg-og-dal-banen Thundercoaster. Skriv et program med en if-setning som tester om en person er høy nok.

<details>
    <summary>Klikk for Løsning</summary>
    Løsning

    høyde = int(input("Hvor høy er du? (cm): "))

    if høyde >= 100:
        print("Gratulerer, du kan kjøre Thundercoaster")

</details>

#### Oppgave 2.5

Lag en variabel `hemmelig` med et tall mellom 1 og 10. Be brukeren gjette tallet. Dersom brukeren gjetter riktig er riktig, skriver du ut "Gratulerer! Du gjettet riktig". Ved feil skriver du "Beklager, du gjettet feil". Ta vare på koden, du skal bruke den senere. 

<details>
<summary>Klikk for Hint</summary>


> Bruk en betingelse. Husk `==` for å sjekke likhet når du lager en betingelse.

</details>
<details>
<summary>Klikk for Løsning</summary>


````python
riktig = 4
gjett = int(input("Gjett et tall mellom 1 og 10"))

if gjett == riktig:
    print("Du klarte det")
else:
    print("Beklager, prøv igjen")
````

</details>

#### Oppgave 2.6

Hos friske mennesker varierer kroppstemperaturen vanligvis mellom 36.5 og 37.5 grader. Lag et program som avgjør om en persons kroppstemperatur ligger under, innenfor eller over normal kroppstemperatur. Programmet skal skrive ut passende beskjed.

<details>
    <summary>Klikk for Løsning</summary>
    Løsning

    temp = int(input("Temperatur (celsius): "))

    if temp > 37.5:
        print("Du har høyere kroppstemperatur enn vanlig")
    elif temp < 36.5:
        print("Du har lavere kroppstemperatur enn vanlig")
    else:
        print("Du har helt normal kroppstemperatur")
</details>


#### Oppgave 2.7

a) Lag et program der bruker kan skrive inn poengsummen sin for en matematikkeksamen. Programmet skal skrive ut karakteren på eksamen når vi bruker følgende skala (maks 60 poeng): 

| Karakter | 1   | 2   | 3   | 4   | 5   | 6   |
| -------- | --- | --- | --- | --- | --- | --- |
| Poeng    |     | 12  | 24  | 35  | 45  | 56  |

b) Endre koden slik at programmet skriver ut "Ugyldig poengsum" dersom man ikke skriver inn et tall mellom 0 og 60

<details>
<summary>Klikk for Hint</summary>


> Her må du ha flere betingelser i samme if-setning, husk at du kan legge til elif-betingelser etter if- setningen for at de er koblet sammen.

</details>
<details>
<summary>Klikk for Løsning</summary>

````python
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
````
</details>


#### Oppgave 2.8

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
<summary>Klikk for Hint</summary>

```
Ta imot et tall mellom 1 og 3 fra bruker
Trekk et tall mellom 1 og 3 for datamaskinen

Sammenlign tallene med en betingelse der du sjekker valgene opp mot hverandre og skriv ut resultatet. 

For eksempel hvis bruker skriver 1 (Stein) og datamaskinen velger 2 (Saks) så skriver du ut "Du vant, motstanderen valgte saks!"
```
</details>

<details>
<summary>Klikk for løsning</summary>

````python
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
````
</details>

#### Oppgave 2.9

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
    <summary>Klikk for Hint</summary>
    Hint

    x == y : gir True hvis x og y er like, ellers False
    x != y : gir True hvis x og y IKKE er like, ellers False
    x and y: gir True hvis både x og y er True
    x or y : gir True hvis en av x og y er True
    not x  : gir True hvis x er False
    

</details>
<details>
    <summary>Klikk for Løsning</summary>
    Løsning

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

#### Oppgave 2.10

**SJAMAN-PROGRAMMET**

Lag et program som skriver ut tekster med personlige spådomer. Hvilken tekst som skal skrives ut avhenger av verdiene i variablene: kjønn, fødselsår og navn.  
Et eksempel på en spådom kan være:  
`Kjære Trine Skei Grande, denne måneden vil du motta en gave fra en ukjent. Unngå pengespill og gatekjøkkenmat. Dette gjelder spesielt deg som er dame og født i 1969.`

#### Oppgave 2.11

**SKUDDÅR**

Lag et program som avgjør om et årstall er skuddår eller ikke.  
> Tips: for å sjekke om tall er delelig på 4, bruk modulo. Eks: tall % 4 == 0 gir true hvis tallet er delelig på 4.

1. Bruk reglene som gjaldt fra 8 e.kr til 1582:
   - Et år er et skuddår hvis årstallet er delelig på 4.

2. Endre programmet fra `1.` slik at du bruker reglene som er litt mer korrekt enn `1.`:
   - Et år er et skuddår hvis: 
     - årstallet er delelig på 4, eks: 2012 var skuddår, men ikke 2014
     - men ikke hvis årstallet er delelig på 100, eks: 1900 var ikke skuddår
     - men likevel hvis det er også er delelig på 400, eks: 2000 var skuddår

3. Lag et skuddårsprogram med komplette regler:
   - Regler for skuddår:
     -  før 46 f.kr: Ingen skuddår
     -  45 f.kr – 9 f.kr: Skuddår hvis delelig på 3
     -  8 f.kr – 7 e.kr: Ingen skuddår (pause)
     -  8 e.kr – 1581: Skuddår hvis delelig på 4
     -  fra 1582: delelig på 4, men ikke på 100, unntatt delelig på 400

## Løkker

#### Oppgave 3.1

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



#### Oppgave 3.2


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



#### Oppgave 3.3

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


## Lister og ordbøker

#### Oppgave 4.1

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



#### Oppgave 4.2

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



#### Oppgave 4.3

a) Lag følgende liste med tall: [1,3,5,6]

b) Legg til tallet 8 på slutten av lista

c) Legg til tallet 4 mellom 3 og 5 i lista

d) Endre tallet 4, slik at det står som “fire” istedet.

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



#### Oppgave 4.4

Legg alle julekarakterene inn i ei liste (som tall!)

Bruk sum(liste) og len(liste) til å regne gjennomsnittet. Rund av til to desimaler.

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

#### Oppgave 4.5

Norske bilnummer har to (store) bokstaver og fem tall 

Du skal lage et program der man enten kan legge til eller sjekke et bilnummer. 

Legg en while-løkke rundt programmet så det gjentar seg. Enten ved å sette while True: eller ved å spørre om brukeren vil fortsette

Lag en liste der du legger inn noen få fiktive bilnummer.

Spør først brukeren om de vil legge til eller sjekke et nummer. 

Hvis de vil legge til, ta inn det nye nummeret og legg det i lista.

Hvis de vil sjekke, ta inn nummeret og sjekk om det ligger i lista. Skriv ut en passende tekst



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


#### Oppgave 4.6

Opprett en liste mineTall med tallene 9, 3, 1 og 2 

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

#### Oppgave 4.7

Lag en ordbok med info om den du sitter ved siden av. 

Print navn og alder fra ordboken. 

<details>
    <summary>Klikk for Løsning</summary>
    
    kommer

</details>


#### Oppgave 4.8

Ordboken under har navn på land som egenskaper og fargene på flagget til landene som verdier. 

flagg = { 
    norge : ["rødt", "hvitt", "blått"], 
    sverige : ["blått", "gult"], 
    danmark : ["rødt", "hvitt"], 
    finland : ["hvitt", "blått"], 
    japan : ["rødt", "hvitt"], 
    gabon : ["grønt", "gult", "blått"], 
    chile : ["blått", "hvitt", "rødt"] 
} 

OBS! Merk at vi kan skrive ordbøker og lister over flere linjer, så lenge vi passer på komma og avsluttende “]” eller “}”, som i flagg over. 

Bruk flagg["egenskap"], og legg til et nytt land i ordboken 

Legg til kode slik at brukeren kan skrive inn et land, også printes fargene til landets flagg. Hvis brukeren skriver inn et land som ikke eksisterer i ordboken, skal programmet gi en feilmelding som forteller at vi ikke har lagret info om dette landet. 

<details>
    <summary>Klikk for Løsning</summary>
    
    kommer

</details>


#### Oppgave 4.9

Lag en liste bakeri, og fyll listen med følgende varer som ordbøker, hvor navn og pris er nøkler. 

* Croissant 25 
* Grovbrød 40 
* Kneipp 20 
* Rosinbolle 20 
* Baguette 10 

Print innholdet i hele bakeri-et som en meny med en linje per vare, med navn og pris 

Tips: for-løkke 

Øk prisen på croissant med 10, uten å endre tidligere kode. 

Skriv ut listen med innhold på nytt, og sjekk at croissantens pris er endret riktig. 

Lag en funksjon meny(liste) som du kan kalle på for å utføre oppgave 1 og 4, og endre programmet ditt til å kjøre denne funksjonen i stedet. 

<details>
    <summary>Klikk for Løsning</summary>
    
    kommer

</details>


## Funksjoner

#### Oppgave 5.1

Lag en funksjon som returnerer en tilfeldig rgb-farge. Eks: “rgb(100,155,200)” - Tallene i rgb går fra 0 til 255

<details>
    <summary>Klikk for Løsning</summary>
    
    kommer

</details>


#### Oppgave 5.2

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
