---
# Identity (stable; never change after publishing)
id: ap1-0286
slug: uml-verhaltensdiagramme

# Display
title: "UML-Verhaltensdiagramme und deren Zweck"

# Classification / navigation (machine-side)
module: "Entwickeln, Erstellen und Betreuen von IT_Lösungen"
topics: ["UML", "Modellierung", "Diagramme"]
tags: ["ap1", "uml", "verhaltensdiagramme"]

# Flashcard payload
card:
  type: basic       # basic | multi | steps | definition | comparison
  question: "Welche UML-Verhaltensdiagramme gibt es und welchem Zweck dienen sie?"
  answer: "Aktivitätsdiagramm (Abläufe), Zustandsdiagramm (Zustände/Übergänge), Use-Case-Diagramm (Anwendungsfälle), Sequenzdiagramm (zeitliche Interaktionen), Kommunikationsdiagramm (Beziehungen), Interaktionsübersichtsdiagramm (Prozessübersicht), Zeitverlaufsdiagramm (Zustandsänderungen über Zeit)."
  examples: ["Sequenzdiagramm für Login-Prozess", "Aktivitätsdiagramm eines Bestellablaufs"]

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-18"
updated: "2026-03-18"
---

## UML-Verhaltensdiagramme und deren Zweck
**UML-Verhaltensdiagramme** beschreiben das **dynamische Verhalten** eines Systems, also Abläufe, Zustände und Interaktionen.

## Kernerklärung

### Wichtige UML-Verhaltensdiagramme

| Diagramm                     | Zweck                                               |
|-----------------------------|-----------------------------------------------------|
| Aktivitätsdiagramm          | Ablauf von Aktivitäten und Prozessen darstellen     |
| Zustandsdiagramm            | Zustände und Zustandsübergänge eines Objekts        |
| Use-Case-Diagramm           | Anwendungsfälle und Akteure                         |
| Sequenzdiagramm             | Zeitliche Abfolge von Interaktionen                 |
| Kommunikationsdiagramm      | Interaktionen mit Fokus auf Beziehungen             |
| Interaktionsübersichtsdiagramm | Kombination/Übersicht von Abläufen             |
| Zeitverlaufsdiagramm        | Zustandsänderungen über die Zeit                    |

### Einordnung

```mermaid
flowchart LR
A[UML] --> B[Strukturdiagramme]
A --> C[Verhaltensdiagramme]
C --> D[Aktivität]
C --> E[Sequenz]
C --> F[Use Case]
```

## Praktisches Beispiel

- **Login-Prozess**
  - Aktivitätsdiagramm: zeigt Ablauf  
  - Sequenzdiagramm: zeigt Kommunikation zwischen Client und Server  

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Nenne UML-Verhaltensdiagramme  
- Unterschied Sequenz vs. Kommunikationsdiagramm?  
- Wofür nutzt man Aktivitätsdiagramme?  

### Antworten auf die typischen Prüfungsfragen
- Aktivität, Zustand, Use Case, Sequenz etc.  
- Sequenz = zeitlich, Kommunikation = Beziehungen  
- Prozess- und Ablaufdarstellung  

## Merksatz
Verhaltensdiagramme zeigen, was ein System tut – nicht wie es aufgebaut ist.