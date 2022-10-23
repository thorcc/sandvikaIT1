# sandvika.it - Nettbok i IT1

[www.sandvika.it](https://www.sandvika.it)

- Tekst på knapper og lignende kan endres i [./i18n/no/code.json](./i18n/no/code.json)
- Fagstoff ligger i [./docs](./docs/)

Alle .md-filer bør starte med frontmatter, slik:

```markdown
---
title: 1.2 Filer og mapper
sidebar_position: 2
sidebar_label: 1.2 Filer og mapper
description: Lær hvordan filer og mapper fungerer og samarbeider.
---

# Filer og Mapper

```
Egenskapen `title` blir inkludert for å unngå at filnavnet blir brukt som overskrift.
I tillegg er `description` en beskrivelse over hva siden handler om.
Hold denne kort, slik at den vises i sin helhet i oversikten over underkapitler når noen trykker på en kategori.
