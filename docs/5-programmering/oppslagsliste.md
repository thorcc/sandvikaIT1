---
title: 5.8 Oppslagsliste
sidebar_position: 8
sidebar_label: 5.8 Oppslagsliste
description: En oversikt over ofte brukte datatyper og annet nyttig i Python.
---

# Jukseark - Python

## Datatyper

| Navn (norsk)           | Navn (engelsk) | Eksempel                              | Konvertere til |
| ---------------------- | -------------- | ------------------------------------- | -------------- |
| Heltall                | Integer        | `37`                                  | `int()`        |
| Flyttall (desimaltall) | Float          | `23.5`                                | `float()`      |
| Streng (tekst)         | String         | `"Hei" eller 'Hei'`                   | `str()`        |
| Liste                  | List           | `["Oslo", "Bergen", "Alta"]`          | `list()`       |
| Ordbok                 | Dictionary     | `{"navn": "Asker", "fylke": "Viken"}` | `dict()`       |

## Tall og matte

| Operator | Operasjon             | Eksempel        |
| -------- | --------------------- | --------------- |
| `+`      | Addisjon              | `2 + 2 = 4`     |
| `-`      | Subtraksjon           | `5 - 2 = 3`     |
| `*`      | Multiplikasjon        | `3 * 3 = 9`     |
| `/`      | Divisjon              | `22 / 8 = 2.75` |
| `//`     | Heltallsdivisjon      | `22 // 8 = 2`   |
| `**`     | Eksponent (opphøyd i) | `2 ** 3 = 8`    |
| `%`      | Modulo/Rest           | `22 % 8 = 6`    |

## Tekst

```python
tekst = "Hei"
setning = "Hallo, verden!"
```

| Metode / Operasjon                      | Resultat               | Beskrivelse                        |
| --------------------------------------- | ---------------------- | ---------------------------------- |
| `"Hei" + "Hallo"`                       | `"HeiHallo"`           | Konkatenering                      |
| `len(tekst)`                            | `3`                    | Lengde på tekst                    |
| `tekst.upper()`                         | `"HEI"`                | Gjør alle bokstaver store          |
| `tekst.lower()`                         | `"hei"`                | Gjør alle bokstaver små            |
| `setning.split(",")`                    | `["Hallo", " verden"]` | Deler tekst i en liste             |
| `setning.split(" ")`                    | `["Hallo,", "verden"]` | Deler tekst i en liste             |
| `setning.count("e")`                    | `2`                    | Tell antall forekomster i en tekst |
| `tekst.replace("e", "a")`               | `Hai`                  | Erstatter en verdi i teksten       |
| `setning.replace("verden", "Sandvika")` | `Hallo, Sandvika!`     | Erstatter en verdi i teksten       |

Oversikt over alle tekst-metodene: https://www.w3schools.com/python/python_ref_string.asp

## If-setninger

### If

```python
navn = "Harald"
if navn == "Sonja":
    print("Hei Sonja")
```

### If-else

```python
navn = "Harald"
if navn == "Sonja":
    print("Hei Sonja")
else:
    print("Hallo ukjente person")
```

### If-elif

```python
navn = "Harald"
if navn == "Sonja":
    print("Hei Sonja")
elif navn == "Harald":
    print("Hei Harald")
```

### If-elif-else

```python
navn = "Harald"
if navn == "Sonja":
    print("Hei Sonja")
elif navn == "Harald":
    print("Hei Harald")
else:
    print("Hallo ukjente person")
```

### If-elif-elif-else

> Det er ingen begrensning på hvor mange elif man kan ha i en if-setning.

```python
navn = "Harald"
if navn == "Sonja":
    print("Hei Sonja")
elif navn == "Harald":
    print("Hei Harald")
elif navn == "Haakon":
    print("Hei Haakon")
else:
    print("Hallo ukjente person")
```

### Sammenligninger

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

## Løkker

### While-løkke

```python
# Teller fra 5 til 1, og skriver ut "Lift off"
i = 5
while i > 0:
    print(i)
print("Lift off")
```

### For-løkke med range

```python
# Teller fra 0 til 9
for i in range(10):
    print(i)
```

```python
# Teller fra 5 til 9
for i in range(5,10):
    print(i)
```

```python
# Teller fra 5 til 15 med steg på 2 (5,7,9,11,13,15)
for i in range(5,16, 2):
    print(i)
```

```python
# Teller fra 10 til 6 med steg på -1 (10,9,8,7,6)
for i in range(10,5,-1):
    print(i)
```

## For-løkke og liste

```python
# Skriver ut landene i listen
liste = ["Norge", "Sverige", "Danmark"]
for land in liste:
    print(land)
```

## For-løkke og ordbok

```python
# Skriver ut nøkler og verdier fra listen
ordbok = {
    "navn": "Sandvika VGS",
    "fylke": "Viken"
}

for nøkkel, verdi in ordbok.items():
    print(nøkkel, ":", verdi)
```

## Lister


```python
skole_liste = ["Sandvika", "Valler", "Nesbru"]
karakter_liste = [4, 3, 2]
```

| skole_liste | `"Sandvika"` | `"Valler"` | `"Nesbru"` |
| ----------- | ------------ | ---------- | ---------- |
| indeks      | 0            | 1          | 2          |

| Metode / Operasjon               | Resultat                                      | Beskrivelse                                       |
| -------------------------------- | --------------------------------------------- | ------------------------------------------------- |
| `skole_liste[1]`                 | `"Valler`                                     | Hent ut det som ligger på indeks `1`              |
| `skole_liste[2] = "Stabekk" `    | `["Sandvika", "Valler", "Stabekk"]`           | Sett det som ligger på indeks `2` til `"Stabekk"` |
| `skole_liste[-1]`                | `"Nesbru"`                                    | Hent ut det som ligger `-1` fra slutten av listen |
| `skole_liste[-2]`                | `"Valler"`                                    | Hent ut det som ligger `-2` fra slutten av listen |
| `len(skole_liste)`               | `3`                                           | Lengden av listen                                 |
| `skole_liste + karakter_liste`   | `["Sandvika", "Valler", "Stabekk", 4, 3, 2]`  | Slå sammen lister                                 |
| `"Valler" in skole_liste`        | `True`                                        | Sjekk om noe er i listen                          |
| `"Nesbru" not in skole_liste`    | `False`                                       | Sjekk om noe ikke er i listen                     |
| `skole_liste.index("Sandvika")`  | `0`                                           | Finn plassering til noe i listen                  |
| `skole_liste.append("Stabekk")`  | `["Sandvika", "Valler", "Nesbru", "Stabekk"]` | Legg noe til på slutten av listen                 |
| `skole_liste.insert(1, "Rud")`   | `["Sandvika", "Rud", "Valler", "Nesbru"]`     | Sett noe inn i listen på en gitt indeks           |
| `skole_liste.remove("Valler")`   | `["Sandvika", "Nesbru"]`                      | Fjern noe fra listen                              |
| `skole_liste.pop(2)`             | `["Sandvika", "Valler"]`                      | Fjern det som ligger på indeks `2` fra listen     |
| `skole_liste.sort()`             | `["Nesbru", "Sandvika", "Valler"]`            | Sorter listen etter ASCII-tabellen                |
| `skole_liste.sort(reverse=True)` | `["Valler", "Sandvika", "Nesbru"]`            | Sorter listen motsatt vei etter ASCII-tabellen    |
| `" og ".join(skole_liste)`       | `"Valler og Sandvika og Nesbru"`              | Slår listen sammen til en tekst                   |
| `",".join(skole_liste)`          | `"Valler,Sandvika,Nesbru"`                    | Slår listen sammen til en tekst                   |

## Ordbøker

```python
hovedsteder = {
    "Norge": "Oslo",
    "Danmark": "København",
    "Sverige": "Stockholm"
}
```

Ordbøker er som oppslagsverk, de har nøkler og verdier. En ordbok defineres i Python med krøllparenteser `{}`.
Inne i ordboken skrives nøkler og tilhørende verdier, slik: `"Norge": "Oslo"`, her er `Norge` nøkkelen og `Oslo` verdien.
Nå kan vi slå opp `Norge` i ordboken med `hovedsteder["Norge"]` og vi får verdien `Oslo`.


## Funksjoner og prosedyrer

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

### Funksjoner vs. prosedyrer

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
