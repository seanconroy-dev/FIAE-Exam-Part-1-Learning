---
# Identity (stable; never change after publishing)
id: ap1-0320
slug: "security-by-design"

# Display
title: "Security by Design"

# Classification / navigation (machine-side)
module: "IT-Sicherheit und Datenschutz, Ergonomie"
topics: ["entwicklung", "sicherheit", "prinzipien"]
tags: ["ap1", "grundlagen", "softwareentwicklung"]

# Flashcard payload
card:
  type: basic
  question: "Was versteht man im Bereich der Entwicklung unter dem Begriff Security by Design?"
  answer: "Security by Design bedeutet, dass Sicherheitsanforderungen bereits in der Entwicklungsphase berücksichtigt werden, um Sicherheitslücken von Anfang an zu vermeiden."
  examples: []

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-27"
updated: "2026-03-27"
---

## Security by Design
Security by Design ist ein grundlegendes Prinzip in der Software- und Systementwicklung.

Ziel ist es, Sicherheitsaspekte nicht nachträglich zu ergänzen, sondern von Anfang an in die Entwicklung zu integrieren.

## Kernerklärung

- Sicherheitsanforderungen werden **frühzeitig (Designphase)** berücksichtigt  
- Sicherheitslücken sollen **von Beginn an vermieden** werden  
- Nachträgliche Anpassungen sind:
  - teurer  
  - aufwendiger  
  - können Projekte verzögern  

### Vergleich: Mit vs. ohne Security by Design

| Ansatz                  | Eigenschaften |
|------------------------|--------------|
| Mit Security by Design | Sicherheit von Anfang an integriert |
| Ohne Security by Design | Sicherheitslücken werden später behoben |

```mermaid
flowchart LR
    A[Planung & Design] --> B[Entwicklung]
    B --> C[Test]
    C --> D[Produkt]
    A -->|Security integriert| D
```

## Praktisches Beispiel
Ein Entwickler plant eine Webanwendung:

- Passwortverschlüsselung wird direkt eingeplant  
- Eingaben werden validiert (z. B. Schutz vor SQL-Injection)  
- Zugriffskontrollen werden von Anfang an integriert  

Ergebnis: Weniger Sicherheitslücken und geringere Nachbesserungskosten.

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Was bedeutet Security by Design?  
- Warum ist Security by Design wichtig?  

### Antworten auf die typischen Prüfungsfragen
- Sicherheitsanforderungen werden bereits in der Entwicklungsphase berücksichtigt  
- Dadurch werden Sicherheitslücken frühzeitig vermieden und Kosten reduziert  

## Merksatz
**Sicherheit von Anfang an einbauen statt später teuer nachrüsten.**