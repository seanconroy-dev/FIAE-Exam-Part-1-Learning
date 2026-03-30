---
# Identity (stable; never change after publishing)
id: ap1-0219
slug: usv-zeitdifferenz-zusatzlast

# Display
title: "USV: Zeitdifferenz bei zusätzlicher Last berechnen"

# Classification / navigation (machine-side)
module: "Beurteilen marktgängiger IT-Systeme und Lösungen"
topics: ["USV", "Leistungsberechnung", "Kapazität"]
tags: ["ap1", "berechnung", "stromversorgung"]

# Flashcard payload
card:
  type: basic       # basic | multi | steps | definition | comparison
  question: "Wie stark verkürzt sich die Überbrückungszeit einer USV, wenn neben 1,2 kW Last weitere 400 W hinzukommen (20 Batterien à 12 V / 4,5 Ah)?"
  answer: "Die Überbrückungszeit verkürzt sich um 14 Minuten."
  examples: []

# Lifecycle
status: published      # draft | published | deprecated
created: "2026-03-18"
updated: "2026-03-18"
---

## USV: Zeitdifferenz bei zusätzlicher Last berechnen

Eine USV (unterbrechungsfreie Stromversorgung) stellt bei Stromausfall Energie bereit.  
Die verfügbare Zeit hängt direkt von der angeschlossenen Last ab: **höhere Last → kürzere Laufzeit**.

## Kernerklärung

Gegeben:
- Batterien: 20 × 12 V × 4,5 Ah  
- Anfangslast: 1200 VA (≈ 1,2 kW)
- Zusatzlast: +400 W → Gesamtlast: 1600 VA

### Berechnung der Laufzeit

| Zustand                | Rechnung                                      | Ergebnis        |
|-----------------------|-----------------------------------------------|-----------------|
| Vor Zusatzlast        | (20 × 12 V × 4,5 Ah) / 1200 VA = 0,9 h        | 54 Minuten      |
| Nach Zusatzlast       | (20 × 12 V × 4,5 Ah) / 1600 VA = 0,675 h      | 40,5 Minuten    |
| Differenz             | 54 min − 40 min                               | **14 Minuten**  |

→ Die zusätzliche Last reduziert die Laufzeit.

## Praktisches Beispiel
Ein Serverraum wird durch eine USV abgesichert:
- Ohne Zusatzsysteme: 54 Minuten Überbrückung
- Nach Erweiterung (z. B. zusätzlicher Storage): nur noch 40 Minuten

➡️ Konsequenz: Entweder größere USV oder weniger Last notwendig.

```mermaid
flowchart LR
A[Batteriekapazität konstant] --> B[Last steigt]
B --> C[Laufzeit sinkt]
C --> D[Überbrückungszeit verkürzt sich]
```

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Wie beeinflusst zusätzliche Last die USV-Laufzeit?
- Wie berechnet man die Überbrückungszeit einer USV?
- Wie groß ist die Zeitdifferenz bei Laständerung?

### Antworten auf die typischen Prüfungsfragen
- Mehr Last → kürzere Laufzeit (umgekehrt proportional)
- Formel:  
  **Zeit = (Kapazität in Wh) / Leistung in W**
- Differenz ergibt sich aus den beiden Laufzeiten (alt vs. neu)

## Merksatz
**Je höher die Last, desto kürzer die Überbrückungszeit einer USV.**