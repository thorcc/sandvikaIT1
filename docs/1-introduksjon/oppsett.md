---
title: 1.1 Oppsett
sidebar_position: 2
sidebar_label: 1.1 Oppsett
description: Sett opp og gjør deg klar for IT her.
---

# Oppsett

Før vi begynner er det en del forberedelser vi skal gjøre i første time. Du trenger noen verktøy for å komme igang, vi legger også til noen nettsider med enda mer informasjon.

## Programmer
- [VS Code](https://code.visualstudio.com/)

Dette er editoren der vi skal gjøre det meste av arbeidet i faget. Akkurat som du har Word installert for å jobbe med dokumenter, trenger du en editor som kan håndtere filene vi skal jobbe med. VS Code er for tiden et av de mest populære valgene, og du kan laste programmet ned [her](https://code.visualstudio.com/).

- [Google Chrome](https://www.google.com/intl/no/chrome/) / [Firefox](https://www.mozilla.org/nb-NO/firefox/new/)

Mange av dere har Mac og bruker Safari som nettleser. Det meste går helt fint med denne, men av og til er det små problemer med feilsøking og kompabilitet som gjør at det er en fordel å ha en alternativ nettleser. Last ned en av disse hvis du ikke allerede har gjort det.

> [Hvordan endre standard nettleser på Mac?](https://support.apple.com/no-no/HT201607)

- [Python](https://www.python.org/downloads/)

## Extensions/Utvidelser

![Extensions i VS Code](./bilder/extensions.png ':size=200')

Vi går igjennom dette sammen i timen. Brukere av VS Code har laget utvidelsespakker som forenkler en del av arbeidet for oss. Disse kalles for extensions og lastes ned i VS Code:

De vi bruker mest og som vi laster ned allerede første dag er:
- open in browser 2.0.0
- Python

## Instillinger i VS Code

- Trykk CMD+Shift+P skriv "Open User Settings (JSON)"
- Fjern alt og lim inn koden under.

```json
{
  "[python]": {
    "editor.defaultFormatter": "ms-python.autopep8",
    "editor.suggestOnTriggerCharacters": false,
    "editor.autoClosingQuotes": "never",
    "editor.hover.enabled": false,
    "editor.occurrencesHighlight": "off",
    "editor.parameterHints.enabled": false,
    "editor.matchBrackets": "never",
    "editor.guides.indentation": false,
    "editor.quickSuggestions": {
      "comments": "off",
      "other": "off",
      "strings": "off"
    }
  },
  "accessibility.signals.terminalBell": {
    "sound": "on"
  },
  "breadcrumbs.enabled": false,
  "chat.disableAIFeatures": true,
  "diffEditor.diffAlgorithm": "advanced",
  "diffEditor.ignoreTrimWhitespace": false,
  "editor.colorDecorators": false,
  "editor.emptySelectionClipboard": false,
  "editor.folding": false,
  "editor.foldingHighlight": false,
  "editor.formatOnSave": false,
  "editor.lightbulb.enabled": "off",
  "editor.minimap.enabled": false,
  "editor.mouseWheelZoom": true,
  "editor.renderWhitespace": "boundary",
  "editor.selectionHighlight": false,
  "editor.stickyScroll.enabled": false,

  "explorer.autoOpenDroppedFile": false,
  "explorer.compactFolders": false,
  "extensions.ignoreRecommendations": true,
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000,
  "files.exclude": {
    "**/.*": true
  },
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,
  "problems.decorations.enabled": false,
  "problems.visibility": false,
  "python.terminal.executeInFileDir": true,
  "python.terminal.shellIntegration.enabled": false,
  "scm.countBadge": "off",
  "terminal.integrated.commandsToSkipShell": [
    "workbench.action.toggleSidebarVisibility"
  ],
  "terminal.integrated.enableVisualBell": true,
  "terminal.integrated.gpuAcceleration": "off",
  "terminal.integrated.persistentSessionReviveProcess": "never",
  "terminal.integrated.sendKeybindingsToShell": true,
  "terminal.integrated.shellIntegration.decorationsEnabled": "never",
  "terminal.integrated.shellIntegration.enabled": true,
  "terminal.integrated.showExitAlert": false,
  "terminal.integrated.tabs.description": "${task}${separator}${local}",
  "window.autoDetectColorScheme": true,
  "window.commandCenter": false,
  "workbench.editor.closeOnFileDelete": true,
  "workbench.editor.enablePreview": false,
  "workbench.layoutControl.enabled": false,
  "workbench.startupEditor": "none",
  "workbench.statusBar.visible": true,
  "workbench.tips.enabled": false,
  "workbench.welcomePage.walkthroughs.openOnInstall": false,
  "workbench.preferredLightColorTheme": "Default Light+"
}
```

## Nettressurser

- [MDN web docs](https://developer.mozilla.org/en-US/)
- [W3Schools](https://www.w3schools.com/)
- [Bilderedigering: Photopea](https://www.photopea.com/)
