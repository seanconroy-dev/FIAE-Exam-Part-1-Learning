---
# Identity (stable; never change after publishing)
id: ap1-0253
slug: displayport-schnittstelle

# Display
title: "DisplayPort – Digitale Schnittstelle"

# Classification / navigation (machine-side)
module: "Entwickeln, Erstellen und Betreuen von IT_Lösungen"
topics: ["Hardware", "Schnittstellen", "Peripherie"]
tags: ["ap1", "displayport", "anschlüsse"]

# Flashcard payload
card:
  type: basic       # basic | multi | steps | definition | comparison
  question: "Um welchen digitalen Anschluss handelt es sich auf dem Bild?"
  answer: "DisplayPort (inkl. Mini-DisplayPort) – digitale Schnittstelle für Bild- und Tonübertragung."
  examples: ["Anschluss eines Monitors an den PC", "Verbindung Laptop zu externem Display"]

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-18"
updated: "2026-03-18"
---

## DisplayPort – Digitale Schnittstelle
DisplayPort ist eine digitale Schnittstelle zur Übertragung von Bild- und Tonsignalen.

Er wird häufig für Monitore und moderne Grafikkarten verwendet.

## Kernerklärung

- standardisierte, lizenzfreie Schnittstelle  
- überträgt **Bild und Ton digital**  
- unterstützt hohe Auflösungen (z. B. 4K, 8K)  
- Varianten:
  - DisplayPort (Standardgröße)  
  - Mini-DisplayPort  

### Eigenschaften im Vergleich

| Merkmal            | DisplayPort                |
|--------------------|---------------------------|
| Signal             | digital                   |
| Audioübertragung   | ja                        |
| Einsatz            | Monitore, GPUs, Laptops   |
| Varianten          | DP, Mini-DP               |

```mermaid
flowchart LR
A[Grafikkarte] -->|DisplayPort| B[Monitor]
A -->|Audio + Video| B
```

## Praktisches Beispiel

- Arbeitsplatz:
  - PC → Monitor via DisplayPort  
- Notebook:
  - Mini-DisplayPort → externer Bildschirm  

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Erkenne den Anschluss auf einem Bild
- Wofür wird DisplayPort verwendet?
- Was wird übertragen?

### Antworten auf die typischen Prüfungsfragen
- Anschluss: DisplayPort / Mini-DisplayPort  
- Verwendung: Verbindung von PC und Monitor  
- Übertragung: digitales Bild und Ton  

## Merksatz
DisplayPort ist eine moderne, digitale Schnittstelle für hochauflösende Bild- und Tonübertragung.