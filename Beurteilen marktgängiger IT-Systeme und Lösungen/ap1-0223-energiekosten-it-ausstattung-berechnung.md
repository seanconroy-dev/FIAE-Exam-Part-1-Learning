---
# Identity (stable; never change after publishing)
id: ap1-0223
slug: energiekosten-it-ausstattung-berechnung

# Display
title: "Energiekosten von IT-Ausstattung berechnen"

# Classification / navigation (machine-side)
module: "Beurteilen marktgängiger IT-Systeme und Lösungen"
topics: ["Energieverbrauch", "Kostenberechnung", "Leistung"]
tags: ["ap1", "berechnung", "energie"]

# Flashcard payload
card:
  type: basic       # basic | multi | steps | definition | comparison
  question: "Berechne die jährlichen Energiekosten für eine IT-Ausstattung (Arbeitsstationen, Drucker, Server) bei einem Strompreis von 0,30 €/kWh."
  answer: "Die jährlichen Energiekosten betragen 8.373,30 €."
  examples: []

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-18"
updated: "2026-03-18"
---

## Energiekosten von IT-Ausstattung berechnen
Die Energiekosten von IT-Systemen werden berechnet aus:
- **Leistung (Watt)**
- **Betriebszeit (Stunden)**
- **Strompreis (€/kWh)**

Ziel: Gesamtverbrauch (kWh) → Kosten berechnen

## Kernerklärung

### Gegeben:
- 25 Arbeitsstationen: 300 W, 9 h/Tag, 206 Tage
- 3 Drucker: 200 W, 24 h/Tag, 365 Tage
- 2 Server: 500 W, fast durchgehend (−10 h Wartung/Jahr)
- Strompreis: **0,30 €/kWh**

### Berechnung

| Gerät            | Verbrauch (kWh/Jahr) |
|------------------|----------------------|
| Arbeitsstationen | 13.905 kWh           |
| Drucker          | 5.256 kWh            |
| Server           | 8.750 kWh            |
| **Gesamt**       | **27.911 kWh**       |

### Kosten
- 27.911 kWh × 0,30 € = **8.373,30 €**

## Praktisches Beispiel
Ein Unternehmen möchte seine Stromkosten senken:
- Austausch alter PCs → weniger Watt
- Server virtualisieren → weniger Geräte

➡️ Ergebnis: geringerer Energieverbrauch → niedrigere Kosten

```mermaid
flowchart LR
A[Leistung in Watt] --> B[Betriebszeit]
B --> C[Energieverbrauch kWh]
C --> D[Kosten €]
```

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Wie berechnet man kWh aus Watt?
- Wie berechnet man Energiekosten?
- Welche Faktoren beeinflussen den Verbrauch?

### Antworten auf die typischen Prüfungsfragen
- kWh = (Watt × Stunden) / 1000
- Kosten = kWh × Preis pro kWh
- Anzahl Geräte, Leistung, Laufzeit

## Merksatz
**Energiekosten = Leistung × Zeit × Preis – je länger und stärker ein Gerät läuft, desto teurer wird es.**