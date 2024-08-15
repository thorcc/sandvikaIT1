---
title: 2.1 Introduksjon
sidebar_position: 1
sidebar_label: 2.1 Introduksjon
description: En introduksjon til hvordan nettsider blir laget.
---

# HTML lager nettsider

Du har trolig vært på utallige nettsider hele livet uten å tenke særlig nøye gjennom hvordan de er laget. La oss få et innblikk ved å gjøre følgende:

- Velg en nettside du besøker ofte.

- Høyreklikk hvor som helst på siden.

- Velg "Undersøk" (engelsk: "Inspect") Alternativt: "Vis kildekode" (engelsk: "View source code")

- Hva ser du?

![alt text](./bilder/2_1%20-%20introduksjon/bilde.jpg) 

*Eksempel på kildekode*

Her er nok mye uforståelig tekst, som kan virke skremmende for en fersk IT 1 elev, men det er altså slik nettsiden er laget. Nettsiden er skrevet på et eget språk som vi kaller HTML. Dette språket skrives på en spesiell form der vi kan bestemme hva som skal være på nettsiden vår. Når en nettleser leser HTML-filer med slik tekst, tolker den teksten og lager nettsiden basert på det som er skrevet.


Fra [wikipedia.org](https://no.wikipedia.org/wiki/HTML): 
> HyperText Markup Language (HTML, hypertekstmarkeringsspråk) er et markeringsspråk for formatering av nettsider med hypertekst og annen informasjon som kan vises i en nettleser.
>
> HTML benyttes til å strukturere informasjon – angi noe tekst som overskrifter, avsnitt, lister og så videre – og kan, i en viss grad, brukes til å beskrive utseende og semantikk i et dokument.

Ved hjelp av HTML kan vi derfor ganske enkelt angi en overskrift, et bilde og litt tekst. Vi starter derfor kurset med å lære oss grunnleggende HTML. Nå består nettsider av langt mer avanserte komponenter enn tekst og bilder, men vi må begrense oss litt helt i starten. For å lage virkelig gode nettsider må man ikke bare kunne HTML godt, man bør faktisk beherske minimum 3(!) språk: 

1. HTML bestemmer hva som skal være med. 
2. CSS bestemmer hvordan siden skal se ut. 
3. Javascript hjelper oss med mer avansert interaksjon på nettsiden.

## Din første nettside

Den beste måten å lære både HTML (og det meste innen IT-fagene) er å prøve selv. Akkurat som når du skriver tekstfiler, skal vi nå skrive en HTML-fil. Teoretisk sett kan vi skrive en slik fil i skriveprogram du allerede er vant med å bruke, men med slike er det ikke mye hjelp å få. Derfor vil vi ha et eget program som er laget for å blant annet skrive HTML. Det finnes mange gode alternativ, såkalte *editorer*, og den mest populære er for tiden VS Code.

Prøv følgende:

- **Åpne VS Code.**

- **Opprett en ny fil:** Velg File og så "New File" *(Snarvei: ctrl-n / command-n)*

- **Lagre den nye filen som en HTML-fil:** Velg "Save as" *(Snarvei: ctrl-s / command-s)*. Navnet på fila kan for eksempel være `hjemmeside.html`. Vi må ha med punktum etter navnet og det er viktig at det som står etter punktum er `html`.

- **Kopier inn følgende tekst:**

```html
<!DOCTYPE html>
<html>
    <body>
        <h1>Hallo verden!</h1>
    </body>
</html>
```

- **Lagre siden på nytt.**

Hvis du har utvidelsen "Open in default browser" kan du nå høyreklikke og velge "Open in default browser". Dersom du ikke har dette alternativet, kan du finne fila i Utforsker/Finder og åpne den med en nettleser. Det siste alternativet er ganske slitsomt i lengden, så sørg for å få hjelp til å installere utvidelsen.

![Min første hjemmeside](./bilder/2_1%20-%20introduksjon/minside.png)

Forhåpentligvis ser det nå ut som på bildet. 

Gratulerer, du har laget din første hjemmeside! I neste kapittel ser vi nærmere på hva vi egentlig kopierte inn og hvordan vi kan legge til mer.
