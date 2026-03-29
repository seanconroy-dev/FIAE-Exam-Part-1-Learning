---
# Identity (stable; never change after publishing)
id: ap1-0202
slug: "unterschied-datensicherheit-datenschutz"

# Display
title: "Unterschied zwischen Datensicherheit und Datenschutz"

# Classification / navigation (machine-side)
module: "it-sicherheit"
topics: ["datensicherheit", "datenschutz", "grundlagen"]
tags: ["ap1", "sicherheit", "recht", "cia"]

# Flashcard payload
card:
  type: basic
  question: "Worin unterscheiden sich Datensicherheit und Datenschutz?"
  answer: "Datensicherheit schützt alle Daten technisch und organisatorisch (Vertraulichkeit, Integrität, Verfügbarkeit), während Datenschutz speziell personenbezogene Daten und die Rechte der betroffenen Personen schützt."
  examples: []

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-25"
updated: "2026-03-25"
---

## Unterschied zwischen Datensicherheit und Datenschutz
Datensicherheit und Datenschutz werden oft verwechselt, verfolgen aber unterschiedliche Ziele.

- **Datensicherheit** → Schutz aller Daten  
- **Datenschutz** → Schutz personenbezogener Daten und der Menschen dahinter  

## Kernerklärung

### Datensicherheit
- Ziel: Schutz von Daten vor Verlust, Manipulation und Zugriff
- Gilt für **alle Daten**
- Fokus auf technische und organisatorische Maßnahmen
- Schutzziele:
  - Vertraulichkeit  
  - Integrität  
  - Verfügbarkeit  
  - (zusätzlich: Authentizität)

### Datenschutz
- Ziel: Schutz von **personenbezogenen Daten**
- Fokus auf:
  - Rechte der betroffenen Personen
  - Informationspflichten
  - gesetzliche Vorgaben (z. B. DSGVO)

### Vergleich

| Aspekt            | Datensicherheit                          | Datenschutz                              |
|-------------------|------------------------------------------|------------------------------------------|
| Fokus             | Alle Daten                               | Personenbezogene Daten                   |
| Ziel              | Schutz vor Verlust/Manipulation          | Schutz der Privatsphäre                  |
| Maßnahmen         | Technisch + organisatorisch              | Rechtlich + organisatorisch              |
| Beispiel          | Firewall, Backup                         | Einwilligung, Auskunftsrecht             |

```mermaid
flowchart LR
    A[IT-Schutz] --> B[Datensicherheit]
    A --> C[Datenschutz]
    B --> D[Alle Daten schützen]
    C --> E[Personen schützen]
```

## Praktisches Beispiel
- **Datensicherheit:** Backup eines Servers verhindert Datenverlust  
- **Datenschutz:** Kundendaten dürfen nur mit Einwilligung verarbeitet werden  

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Was ist der Unterschied zwischen Datensicherheit und Datenschutz?
- Welche Daten betrifft der Datenschutz?
- Nenne die Schutzziele der Datensicherheit.

### Antworten auf die typischen Prüfungsfragen
- Datensicherheit schützt alle Daten technisch, Datenschutz schützt personenbezogene Daten rechtlich.  
- Nur personenbezogene Daten.  
- Vertraulichkeit, Integrität, Verfügbarkeit.

## Merksatz
**Datensicherheit schützt Daten – Datenschutz schützt Menschen.**