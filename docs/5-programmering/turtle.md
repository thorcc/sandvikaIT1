---
title: 5.9 Tegning med Turtle
sidebar_position: 9
sidebar_label: 5.9 Tegning med Turtle
description: Tegning med Turtle.
---

# Turtle

Turtle er en innebygged modul i Python som lar oss tegne ved hjelp av en skilpadde.

## Oppsett

```python
from turtle import * # importerer alt fra turtle-modulen

# koden din her!

exitonclick() # venter med å avslutte vinduet
```

## Enkel tegning

Send skilpadden forover med 100 steg:

```python
forward(100)
```

Nå vil du se et vindu med en strek som er tegnet av skilpadden, som beveger seg mot høyre.
Du kan nå endre retningen på skilpadden, slik at den snur 120 grader mot venstre:

```python
left(120)
```

La oss tegne en trekant:

```python
forward(100)
left(120)
forward(100)
```

<details>
<summary>Hele koden</summary>

```python
from turtle import *

forward(100)
left(120)
forward(100)
left(120)
forward(100)

exitonclick()
```

</details>

Eksprementer med kommandoene `backward(antall_steg)` og `right(antall_grader)`.


## Posisjon

Send skilpadden tilbake til start-posisjonen:

```python
home()
```

Start-posisjonen er midt på skjermen, i punktet `(0, 0)`.
Hvis du ønsker å hente skilpaddens posisjon kan du gjøre det med:

```python
x, y = pos()
```

Du kan hoppe til et spesifikt koordinat ved:

```python
goto(50, 100)
```

`goto(x,y)` tegner en strek, det er også mulig å hoppe uten å tegne strek:

```python
teleport(150,50)
```

## Fart

Skilpaddens fart kan være er et heltall fra og med 0 til og med 10, og kan settes med `speed(ny_fart)`:

```python
speed(5)
```

Skilpaddens fart følger en litt merkelig skala:

```
fastest: 0
fast: 10
normal: 6
slow: 3
slowest: 1
```


## Farger

```python
color('red')
fillcolor('yellow')
```

## Eksempel

```python
from turtle import *

color("red")
begin_fill()
teller = 0

while teller < 4:
    forward(100)
    right(90)
    teller += 1

end_fill()

exitonclick()

```
