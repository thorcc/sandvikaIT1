---
title: Funksjoner
---

## Hallo, verden

```python
print("hallo, verden!")
```

## Innebygde funksjoner og argumenter

- Funksjoner er verb eller handlinger som datamaskinen – eller programmeringsspråket – vet hvordan den skal utføre.
- I `hallo.py`-programmet ditt vet datamaskinen hvordan den skal utføre `print`-funksjonen.
- `print`-funksjonen tar inn argumenter. I dette tilfellet, er `"hallo, verden!"` argumentene `print`-funksjonen tar inn.

## Egne funksjoner

- Vi kan også definere våre egne funksjoner med nøkkelordet `def`
- La oss lage en funksjon som hilser på folk:

```python
def hils():
    print("Hei sveis!")
    print("Ha en fin dag!")
hils()
```

```python
def hils(til):
    print("Hei", til)
    print("Ha en fin dag!")

hils("Thor")
```

- Det skjer ingenting når vi kjører programmet
- Det er fordi vi bare har lært datamaskinen hvordan den skal

## Bugs (feil)

- En stor del av koding handler om _Bugs_. Bugs er feil i koden, som vi må løse.
- Det kunne jo vært at vi glemte en parentes i `hallo.py`, slik at vi skrev `print("hallo, verden"`. Da ville _kompilatoren_ gitt oss enn feilmelding i terminalen.
- Veldig mange bugs kan løses ved å lese feilmeldingene kompilatoren gir.
- Dessvere er det ikke alltid like lett å tolke feilmeldingene fra kompilatoren, men med litt trening og erfaring blir man god.

## Forbedring av hallo, verden

- Vi kan lage en personlig vri på `hallo.py`.
- Vi legger til en ny funksjon `input` som tar en spørsmål som argument.
- Vi endrer koden til:

```python
input("Hva heter du? ")
print("hallo, verden!")
```

- Foreløpig får vi ikke gjort noe med brukerens svar på spørsmålet vårt. For å gjøre det må vi innføre et nytt konsept, nemlig _variabler_.

## Variabler

- En variabel er bare en beholder for en verdi i et program
- I programmet vårt kan vi legge til en variabel som husker hva brukeren svarte på spørsmålet vi stilte

```python
navn = input("Hva heter du? ")
print("hallo, verden!")
```

- [Python Tutor](https://pythontutor.com/render.html#code=navn%20%3D%20input%28%22Hva%20heter%20du%3F%20%22%29%0Aprint%28%22hallo,%20verden!%22%29&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%22hei%22%5D&textReferences=false)

- I programmering har likhetstegnet `=` en spesiell betydning. Det putter det som er på høyre side av tegnet inn i det som står på venstre side. Vi sier at vi tilordner verdien på høyre side av likhetstegnet til nøkkelordet på venstre side av likhetstegnet.
- I vårt program tilordnes verdien som returneres fra `input("Hva heter du? ")` til nøkkelordet `navn`
- Se eksempel på [Python Tutor](https://pythontutor.com/render.html#code=navn%20%3D%20input%28%22Hva%20heter%20du%3F%20%22%29%0Aprint%28%22hallo,%20verden!%22%29&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%22hei%22%5D&textReferences=false)
- Vi endrer koden:

```python
navn = input("Hva heter du? ")
print("hallo, navn")
```

- Noen funksjoner kan ta flere argumenter.
- `print`-funksjonen er en sånn funksjon.
- `print`-funksjonen har ingen begrensning på antall argumenter, og den printer argumentene ut på samme linje.
- Argmuentene skilles med komma.
- Pass på at du setter komma riktig!

```python
navn = input("Hva heter du? ")
print("hallo,", navn, "?")
```

## Oppgave

```python
a = 10
b = 20
a = b
print(a)
print(b)
```

## Kommentarer

- Kommentarer er en fin måte å gi forklaringer på hva programmer gjør.
- Se på kommentarer som notater for deg selv og andre.
- Kommentarer skrives etter `#`, da vil resten av linjen _kommenteres ut_, som vil si at den ikke vil kjøre.
- La oss legge til en kommentar i programmet vårt:

```python
# spør om brukerens navn
navn = input("Hva heter du? ")
print("hallo, ", navn)
```

## Pseudokode

- Kommentarer kan være veldig nyttige i planleggingen av et program.
- De kan fungere som en spesiell _to-do_-liste for hva du skal programmere i programmet ditt.
- Slike kommentarer som beskriver stegene i et program kalles for _pseudokode_
- Pseudokode kan være veldig hjelpsomt, særlig når du ikke vet hvordan du skal løse et problem.
- En pseudokode for `hallo.py` kunne for eksempel vært:

```python
# Spør om brukerens navn
# Print hallo og brukerens navn
```

- Man kan godt la pseudokoden bli stående når koden er ferdig. Programmet vårt blir da:

```python
# Spør om brukerens navn
navn = input("Hva heter du? ")

# Print hallo og brukerens navn
print("hallo, ", navn)
```

## Oppgaver

1. Få en pseudokode og skriv koden
2. Få en kode og skriv pseudokode
3. Areal av firkant
   a. Skriv pseudokode
   b. Skriv koden

## Koden bør være lesbar/forståelig for andre

- Når du skriver kode for å løse et problem, er det som regel veldig mange måter å løse problemet på.
- Uansett hvordan du velger å løse et problem, bør du alltid ha som mål at koden skal være lesbar for andre.
- Hvis koden ikke gir mening når du leser den, bør du legge på kommentarer som forklarer hva koden gjør (eller skrive koden på en annen måte)

## Strenger og formatering

- En tekst i Python kalles for en _streng_
- `f-strenger` er en spesiell type strenger, som lar oss blande tekst og variabler på en elegant måte
- `f-strenger` skrives som vanlig tekst, altså mellom anførselstegn `""`, bare at vi putter en `f` foran, slik: `f"Hei på deg!"`, variabler puttes mellom krøllparenteser `{}`, slik `f"Hei {navn}!"`.

```python
# Spør om brukerens navn
navn = input("Hva heter du? ")
# Print hallo og brukerens navn
print(f"hallo, {navn}!")
```
