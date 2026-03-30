---
# Identity (stable; never change after publishing)
id: ap1-0161
slug: ein-und-ausgabegeraete

# Display
title: "Ein- und Ausgabegeräte"

# Classification / navigation (machine-side)
module: "Beurteilen marktgängiger IT-Systeme und Lösungen"
topics: ["Hardware", "Peripherie"]
tags: ["prüfungsrelevant", "grundlagen"]

# Flashcard payload
card:
  type: basic
  question: "Ordne folgende IT-Komponenten als Ein- oder Ausgabegeräte ein: Drucker, Scanner, Maus, Display, Touchpad."
  answer: "Eingabegeräte: Scanner, Maus, Touchpad. Ausgabegeräte: Drucker, Display."
  examples:
    - "Maus → Eingabegerät"
    - "Scanner → Eingabegerät"
    - "Touchpad → Eingabegerät"
    - "Drucker → Ausgabegerät"
    - "Display → Ausgabegerät"

# Lifecycle
status: published
created: "2026-03-12"
updated: "2026-03-12"
---

## Ein- und Ausgabegeräte
In der Informatik unterscheidet man zwischen **Eingabegeräten (Input Devices)** und **Ausgabegeräten (Output Devices)**.

- **Eingabegeräte** übertragen Daten oder Befehle **vom Benutzer zum Computer**.
- **Ausgabegeräte** geben Informationen **vom Computer an den Benutzer** aus.

---

## Zuordnung der Geräte

| Gerät | Kategorie | Begründung |
|---|---|---|
| Scanner | Eingabegerät | Digitalisiert Dokumente und Bilder für den Computer |
| Maus | Eingabegerät | Überträgt Bewegungen und Klicks an den Computer |
| Touchpad | Eingabegerät | Eingabe über Fingerbewegungen |
| Drucker | Ausgabegerät | Gibt digitale Daten als physisches Dokument aus |
| Display | Ausgabegerät | Zeigt Informationen visuell an |

---

## Prinzip der Datenrichtung

```mermaid
flowchart LR

User --> Eingabegeräte
Eingabegeräte --> Computer
Computer --> Ausgabegeräte
Ausgabegeräte --> User
```

---

## Beispiele für Eingabegeräte

- Maus  
- Tastatur  
- Touchpad  
- Scanner  
- Mikrofon  

Diese Geräte **übermitteln Daten an den Computer**.

---

## Beispiele für Ausgabegeräte

- Monitor / Display  
- Drucker  
- Lautsprecher  
- Beamer  

Diese Geräte **geben Informationen vom Computer aus**.

---

## Prüfungsrelevanz (IHK / AP1)

Sehr häufige Grundlagenfrage:

- **Zuordnung von Hardware zu Input oder Output**
- Verständnis der **Datenflussrichtung**

**Merksatz**

> Eingabegeräte senden Daten **zum Computer**, Ausgabegeräte geben Informationen **vom Computer** aus.

---

## Sonderfall: Ein-/Ausgabegeräte

Einige Geräte können **beides gleichzeitig** sein, z. B.:

- **Touchscreen** (Eingabe + Anzeige)
- **Headset** (Mikrofon + Lautsprecher)

---