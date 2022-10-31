---
title: 5.5 Lister
sidebar_position: 5
sidebar_label: 5.5 Lister
description: Når vi skal gruppere og organisere informasjon, bruker vi lister.
---

# Lister

Når vi skal utnytte datamaskinens evnte til å håndtere store mengder informasjon veldig raskt trenger vi muligheten til å lagre og gruppere informasjon sammen på en god måte. Da er lister og ordbøker (eng: dictionaries) gode verktøy, og derfor en ny type variabel vi skal lære å håndtere i dette kapittelet. Vi må da se på hvordan vi oppretter slike variable, hvordan vi kan hente all eller spesifikk informasjon og hvordan vi enkelt kan endre eksisterende informasjon. I tillegg skal vi se nærmere en del eksempler der vi kombinerer løkker med lister for å få til endel litt mer avansert interaksjon.

## Opprette lister

La oss starte enkelt ved å opprette et par lister. Vi starter som en hvilken som helst annen variabel ved å bestemme oss for et navn og så deklarere med likhetstegnet:

```python
skole_liste = ["Sandvika", "Valler", "Nesbru"]
karakter_liste = [4, 3, 2]
tom_liste = []
```

Vi ser at det er klammeparentesene som forteller python at vi har laget ei liste. Selve liste-elementene separeres med komma. Som vi kan se av eksempelet kan vi lagre informasjon i form av både tall og strenger (vi kan også blande typer i en og samme liste). La oss undersøke våre nyopprettede variabler ved å printe de ut, samt sjekke hva slags type de er lagret som:

![Bilde: Skrive ut lista](./bilder/liste_output.png)

Som forventet er variabelen registrert av typen liste, og når vi printer den ut får vi hele listen. Neste steg er da å se nærmere på hvordan vi kan hente ut deler av listen. 

## Element i lister

La oss se nærmere på listen over skoler: `["Sandvika", "Valler", "Nesbru"]`. En slik liste er **ordnet**, det vil si at rekkefølgen vi har lagret skolene er en del av listen. Dermed vet vi at Sandvika ligger først i listen, mens Nesbru ligger sist (uten at det har noe mer å si akkurat nå). I dette tilfellet sier vi at Sandvika ligger på plass nummer 0, Valler ligger på plass nummer 1 og Nesbru på plass nr 2. Det er tre element i lista, men vi teller alltid fra 0 når vi skal angi hvilken plass et element ligger på:



| skole_liste | `"Sandvika"` | `"Valler"` | `"Nesbru"` |
| ----------- | ------------ | ---------- | ---------- |
| indeks      | 0            | 1          | 2          |


Dette betyr at dersom vi skal hente ut Sandvika, så må vi huske at det ligger først, altså på plass null! Vi skriver følgende:


![Bilde: Hente ut element på plass 0](./bilder/indeks_output.png)


Tilsvarende kan vi hente ut de andre skolene dersom det trengs. Pass på at dersom du glemmer deg og prøver å hente ut element nr 3, så får du en feil. Datamaskinen prøver å finne det fjerde elementet i lista, men det finnes jo bare tre.



## Oppsummering


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
