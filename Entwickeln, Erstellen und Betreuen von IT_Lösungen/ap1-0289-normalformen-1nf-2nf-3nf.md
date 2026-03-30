---
# Identity (stable; never change after publishing)
id: ap1-0289
slug: normalformen-1nf-2nf-3nf

# Display
title: "Normalformen (1NF, 2NF, 3NF) und ihr Zweck"

# Classification / navigation (machine-side)
module: "Entwickeln, Erstellen und Betreuen von IT_Lösungen"
topics: ["Normalisierung", "DB-Design"]
tags: ["ap1", "datenbank", "normalformen"]

# Flashcard payload
card:
  type: basic       # basic | multi | steps | definition | comparison
  question: "Welche ersten drei Normalformen gibt es und was ist ihr Zweck?"
  answer: "1NF: atomare Werte; 2NF: volle funktionale Abhängigkeit vom Schlüssel; 3NF: keine transitive Abhängigkeit. Zweck: Vermeidung von Datenredundanzen."
  examples: []

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-18"
updated: "2026-03-18"
---

## Normalformen (1NF, 2NF, 3NF) und ihr Zweck
Die Normalisierung ist ein zentraler Bestandteil des Datenbankdesigns und dient dazu, **Redundanzen zu vermeiden** und die Datenqualität zu verbessern.

## Kernerklärung

### Zweck der Normalisierung
- Vermeidung von **Datenredundanz**
- Verbesserung der **Datenkonsistenz**
- Vermeidung von **Anomalien** (Einfüge-, Änderungs-, Löschanomalien)

### Die ersten drei Normalformen

| Normalform | Bedingung | Ziel |
|------------|----------|------|
| 1NF        | Alle Attribute sind atomar | Keine mehrfachen Werte |
| 2NF        | Jedes Nichtschlüsselattribut ist voll funktional abhängig vom Primärschlüssel | Vermeidung partieller Abhängigkeiten |
| 3NF        | Keine transitiven Abhängigkeiten | Weitere Redundanzvermeidung |

```mermaid
flowchart LR
A[Unnormalisierte Tabelle] --> B[1NF]
B --> C[2NF]
C --> D[3NF]
```

## Praktisches Beispiel

**Vor Normalisierung:**
- Tabelle: Kunde (ID, Name, Produkt1, Produkt2)

**Nach 1NF:**
- Tabelle wird aufgeteilt → keine mehrfachen Werte mehr

**Nach 2NF:**
- Trennung von Kunden- und Produktdaten

**Nach 3NF:**
- Entfernung indirekter Abhängigkeiten (z. B. Ort abhängig von PLZ)

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Was ist das Ziel der Normalisierung?  
- Unterschiede zwischen 1NF, 2NF und 3NF  
- Was sind transitive Abhängigkeiten?  

### Antworten auf die typischen Prüfungsfragen
- Ziel: Redundanz vermeiden  
- 1NF: atomar  
- 2NF: volle Abhängigkeit  
- 3NF: keine indirekten Abhängigkeiten  

## Merksatz
1NF: atomar – 2NF: voll abhängig – 3NF: keine indirekten Abhängigkeiten.