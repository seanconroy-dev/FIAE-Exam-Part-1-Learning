---
# Identity (stable; never change after publishing)
id: ap1-0256
slug: downloadzeit-berechnung

# Display
title: "Downloadzeit berechnen – Beispiel"

# Classification / navigation (machine-side)
module: "Entwickeln, Erstellen und Betreuen von IT_Lösungen"
topics: ["Netzwerk", "Datenübertragung", "Berechnungen"]
tags: ["ap1", "download", "bandbreite", "rechnung"]

# Flashcard payload
card:
  type: steps       # basic | multi | steps | definition | comparison
  question: "Wie lange dauert der Download einer 2 GiB großen Datei über eine 50 Mbit/s ADSL-Verbindung?"
  answer: "≈ 5 Minuten und 44 Sekunden"
  examples: ["Downloadzeit bei gegebenen Datenmengen berechnen"]

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-18"
updated: "2026-03-18"
---

## Downloadzeit berechnen – Beispiel
Die Downloadzeit ergibt sich aus:

- **Dateigröße (in Bit)**
- **Übertragungsrate (in Bit/s)**

Formel:
- Zeit = Datenmenge / Geschwindigkeit

## Kernerklärung

### Schrittweise Berechnung

1. **GiB → Byte**
   - 2 GiB × 1024 = 2048 MiB  
   - 2048 MiB × 1024 = 2.097.152 KiB  
   - 2.097.152 KiB × 1024 = 2.147.483.648 Byte  

2. **Byte → Bit**
   - 2.147.483.648 Byte × 8 = 17.179.869.184 Bit  

3. **Zeit berechnen**
   - 17.179.869.184 Bit / 50.000.000 Bit/s  
   = 343,6 Sekunden  

4. **Umrechnung in Minuten**
   - 343,6 s ≈ 5 Minuten 44 Sekunden  

```mermaid
flowchart LR
A[2 GiB] --> B[Byte]
B --> C[Bit]
C --> D[Division durch Bandbreite]
D --> E[Zeit in Sekunden]
E --> F[Minuten + Sekunden]
```

## Praktisches Beispiel

- Download einer großen Datei:
  - ISO-Image (z. B. Linux)  
  - Geschwindigkeit abhängig von Leitung  

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Wie berechnet man Downloadzeiten?  
- Warum muss man in Bit umrechnen?  
- Welche Rolle spielt die Bandbreite?  

### Antworten auf die typischen Prüfungsfragen
- Zeit = Datenmenge / Bandbreite  
- weil Bandbreite in Bit/s angegeben ist  
- höhere Bandbreite → kürzere Zeit  

## Merksatz
Für Downloadzeiten immer: Daten in **Bit umrechnen** und durch **Bit/s teilen**.