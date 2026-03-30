---
# Identity (stable; never change after publishing)
id: ap1-0249
slug: lastenheft-inhalt

# Display
title: "Lastenheft"

# Classification / navigation (machine-side)
module: "Entwickeln, Erstellen und Betreuen von IT_Lösungen"
topics: ["Projektmanagement", "Anforderungen", "Dokumentation"]
tags: ["ap1", "lastenheft", "anforderungen"]

# Flashcard payload
card:
  type: definition       # basic | multi | steps | definition | comparison
  question: "Welche Inhalte enthält ein Lastenheft?"
  answer: "Das Lastenheft beschreibt die Gesamtheit der Anforderungen (funktional und nicht-funktional) des Auftraggebers an das zu entwickelnde Produkt."
  examples: ["Funktionale Anforderungen eines Systems", "Lieferumfang und Lieferzeiten eines Projekts"]

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-18"
updated: "2026-03-18"
---

## Lastenheft
Das Lastenheft ist ein zentrales Dokument im Projektmanagement.

Es beschreibt die Anforderungen aus Sicht des Auftraggebers.

## Kernerklärung

- beschreibt **was** umgesetzt werden soll  
- wird vom **Auftraggeber** erstellt  
- enthält:
  - funktionale Anforderungen (z. B. Systemfunktionen)
  - nicht-funktionale Anforderungen (z. B. Performance, Sicherheit)
  - gesetzliche Vorgaben und Richtlinien  
  - Rahmenbedingungen (z. B. Kosten, Zeit, Lieferumfang)

- dient als:
  - Grundlage für Angebote und Ausschreibungen  
  - Basis für das Pflichtenheft  

- ist für beide Parteien:
  - rechtlich bindend (nach Abnahme)

```mermaid
flowchart LR
A[Lastenheft Was?] --> B[Pflichtenheft Wie?]
```

## Praktisches Beispiel

- Lastenheft:
  - „System muss Benutzer verwalten können“
  - „Max. Antwortzeit: 2 Sekunden“
  - „Lieferung bis 31.12.“

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Was steht im Lastenheft?
- Wer erstellt das Lastenheft?
- Unterschied zum Pflichtenheft?

### Antworten auf die typischen Prüfungsfragen
- Anforderungen (Was soll gemacht werden)  
- Auftraggeber  
- Lastenheft = Was, Pflichtenheft = Wie  

## Merksatz
Das Lastenheft beschreibt das „Was“, das Pflichtenheft das „Wie“.