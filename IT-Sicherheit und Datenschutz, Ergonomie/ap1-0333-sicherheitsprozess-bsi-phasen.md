---
# Identity (stable; never change after publishing)
id: ap1-0333
slug: "sicherheitsprozess-bsi-phasen"

# Display
title: "Phasen des Sicherheitsprozesses nach BSI IT-Grundschutz"

# Classification / navigation (machine-side)
module: "IT-Sicherheit und Datenschutz, Ergonomie"
topics: ["bsi", "sicherheitsprozess"]
tags: ["ap1", "it-sicherheit", "grundschutz"]

# Flashcard payload
card:
  type: basic
  question: "Aus welchen Phasen besteht der Sicherheitsprozess laut BSI IT-Grundschutz?"
  answer: "Initiierung, Erstellung einer Sicherheitskonzeption, Umsetzung der Sicherheitskonzeption sowie Aufrechterhaltung und kontinuierliche Verbesserung."
  examples: []

# Lifecycle
status:  published       # draft | published | deprecated
created: "2026-03-28"
updated: "2026-03-28"
---

## Phasen des Sicherheitsprozesses nach BSI IT-Grundschutz

Der Sicherheitsprozess nach BSI IT-Grundschutz beschreibt den strukturierten Aufbau und Betrieb eines Informationssicherheitsmanagements (ISMS).

## Kernerklärung

### Phasen des Sicherheitsprozesses

1. **Initiierung**
   - Verantwortung durch Leitungsebene
   - Planung und Organisation der Sicherheit
   - Festlegung von Richtlinien

2. **Erstellung der Sicherheitskonzeption**
   - Analyse der IT-Systeme
   - Definition von Maßnahmen und Schutzbedarf

3. **Umsetzung der Sicherheitskonzeption**
   - Einführung der geplanten Sicherheitsmaßnahmen

4. **Aufrechterhaltung und kontinuierliche Verbesserung**
   - Betrieb der Sicherheitsmaßnahmen
   - Regelmäßige Überprüfung und Optimierung

### Zusammenhang

```mermaid
flowchart LR
    A[Initiierung] --> B[Sicherheitskonzeption]
    B --> C[Umsetzung]
    C --> D[Betrieb & Verbesserung]
    D --> A
```

## Praktisches Beispiel

Ein Unternehmen führt ein ISMS ein:

- Leitung definiert Sicherheitsziele  
- IT erstellt ein Sicherheitskonzept  
- Maßnahmen (Firewall, MFA) werden umgesetzt  
- Regelmäßige Audits verbessern das System  

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Nenne die Phasen des BSI-Sicherheitsprozesses  
- Warum ist kontinuierliche Verbesserung wichtig?  

### Antworten auf die typischen Prüfungsfragen
- Initiierung, Konzeption, Umsetzung, Verbesserung  
- Bedrohungen ändern sich ständig → Anpassung notwendig  

## Merksatz
**Sicherheit ist ein Prozess, kein Zustand.**