---
title: 4.1 Informasjon som strøm
sidebar_position: 1
sidebar_label: 4.1 Informasjon som strøm
description: Strøm kan bli brukt til å oppbevare informasjon.
---

# Informasjon som strøm

Har du noen gang tenkt over hvordan en datamaskin egentlig fungerer? De fleste av oss ville nok vært svar skyldig dersom vi fikk et slikt spørsmål. Man kunne kanskje resonnert seg til at elektronikk må være involvert, ettersom maskinene går på strøm. Noen har kanskje hørt at alt består av nullere og enere, uten å tenke så mye mer på hva det innebærer. La oss derfor starte der; i utviklingen av elektroniske datamaskiner fant man fort ut at den enkleste og billigste måten å lagre informasjon nettopp var ved hjelp av to tilstander: "strøm av (0)" og "strøm på (1)".

Så hvordan kan vi lagre informasjon ved hjelp av dette? For å lettere illustrere la oss først se på et eksempel fra virkeligheten. Når den katolske kirke skal velge ny pave, låser kardinalene seg i en konklave der tradisjonen tilsier at de blir værende til de har blitt enige. Måten de signaliserer til omverdenen på er ved hjelp av røyken i pipa. Dersom det kommer svart røyk ut av pipa, har de enda ikke valgt en ny pave, og forsamlingen utenfor må vente et døgn til. Dersom det kommer hvit røyk ut av pipa, har de bestemt seg og jubelen kan slippes løs. Ved å se på svart røyk som tilstand 0, og hvit røyk som tilstand 1, kan vi altså overføre informasjon til omverdenen ved hjelp av to tilstander.

## Bits og Bytes

Hva skjer når vi øker antallet komponenter som kan ha strøm på eller av? Da øker også mengden av informasjon vi kan lagre. Med to komponenter har vi plutselig fire muligheter:


|   1   |   2   |   3   |   4   |
| :---: | :---: | :---: | :---: |
| $00$  | $01$  | $10$  | $11$  |
| Av-Av | Av-På | På-Av | På-På |

:::tip

Hva skjer når vi øker til tre? 

Gå inn på https://bits-og-bytes.netlify.app/  

Sett antall lysbrytere til tre, og undersøk hvor mange mulige kombinasjoner du kan lage. Hva med fire? Nå begynner det kanskje å bli uoversiktlig, men det er et mønster her. 

:::

De som kan sin sannsynlighet vet vi at vi kan gange antall muligheter per brytere med seg selv tilsvarende antall brytere vi har.

| Antall brytere | Antall muligheter |
| :------------: | :---------------: |
|      $1$       |     $2^1 = 2$     |
|      $2$       |     $2^2 = 4$     |
|      $3$       |     $2^3 = 8$     |
|      $4$       |    $2^4 = 16$     |
|      ...       |        ...        |
|      $8$       |    $2^8 = 256$    |

Slik kan vi fortsette. Vi ser fort at for hver nye "lysbryter" vi legger til så øker informasjonen vi kan lagre med det dobbelte.

Dersom en av tilstandene vi kan lagre ser ut som følger:


import BitsOgBytes from '@site/src/components/BitsOgBytes/BitsOgBytes'

<BitsOgBytes bits={[1, 1, 0, 1, 0, 1, 0, 1]}/>

Denne tallfølgen er et eksempel på binære tall (binary digit), og vi kaller derfor hver "bryter" for en *bit*. 8 bit (som altså gir 256 mulige tilstander) kalles for en *byte*. Nå for tiden består en datamaskin av mange milliarder bytes, så det er mye informasjon som i teorien kan lagres. Vi skal i kapittelet se nærmere på hvordan vi kan gjøre bilder, symboler og lyd om til bits og bytes, slik at disse kan lagres på datamaskinen. For å gjøre dette må vi ha en litt dypere forståelse av totallsystemet.
