---
# Identity (stable; never change after publishing)
id: ap1-0247
slug: pflichtenheft-definition

# Display
title: "Pflichtenheft"

# Classification / navigation (machine-side)
module: "Entwickeln, Erstellen und Betreuen von IT_Lösungen"
topics: ["Projektmanagement", "Anforderungen", "Dokumentation"]
tags: ["ap1", "pflichtenheft", "lastenheft", "projekt"]

# Flashcard payload
card:
  type: definition       # basic | multi | steps | definition | comparison
  question: "Wie definiert man den Begriff Pflichtenheft?"
  answer: "Ein Pflichtenheft beschreibt detailliert, wie und womit der Auftragnehmer die Anforderungen des Auftraggebers umsetzt („Wie und womit“)."
  examples: ["Technische Umsetzung eines Systems", "Detailplanung eines IT-Projekts"]

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-18"
updated: "2026-03-18"
---

## Pflichtenheft
Das Pflichtenheft ist ein zentrales Dokument im Projektmanagement.

Es konkretisiert die Anforderungen aus dem Lastenheft und beschreibt die Umsetzung.

## Kernerklärung

- beschreibt **wie** und **womit** Anforderungen umgesetzt werden  
- wird vom **Auftragnehmer** erstellt  
- basiert auf dem **Lastenheft** (Was soll gemacht werden?)  
- enthält:
  - technische Lösungen  
  - konkrete Umsetzungsschritte  
  - eingesetzte Technologien  

- ist für beide Seiten:
  - rechtlich bindend  
  - Grundlage für die Umsetzung  

- Änderungen:
  - nur mit Zustimmung beider Parteien möglich  

```mermaid
flowchart LR
  lastenheft["Lastenheft (Was?)"] --> pflichtenheft["Pflichtenheft (Wie?)"]
  pflichtenheft --> umsetzung["Umsetzung"]
```

## Praktisches Beispiel

- Lastenheft:
  - „System soll Benutzer verwalten können“

- Pflichtenheft:
  - Webanwendung mit Login-System  
  - Datenbank (z. B. MySQL)  
  - Authentifizierung über Passwort-Hashing  

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Unterschied Lastenheft vs. Pflichtenheft?
- Wer erstellt das Pflichtenheft?
- Was beschreibt es?

### Antworten auf die typischen Prüfungsfragen
- Lastenheft = Was, Pflichtenheft = Wie  
- Auftragnehmer  
- Konkrete Umsetzung und Technologien  

## Merksatz
Lastenheft sagt „Was“, Pflichtenheft erklärt „Wie“.