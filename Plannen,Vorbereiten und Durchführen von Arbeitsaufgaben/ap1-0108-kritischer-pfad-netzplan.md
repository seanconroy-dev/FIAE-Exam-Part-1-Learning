---
# Identity (stable; never change after publishing)
id: ap1-0108
slug: kritischer-pfad-netzplan

# Display
title: Kritischer Pfad im Netzplan

# Classification / navigation (machine-side)
module: "Plannen,Vorbereiten und Durchführen von Arbeitsaufgaben"
topics: ["Netzplan", "Terminplanung"]
tags: ["prüfungsrelevant", "definition", "netzplantechnik"]

# Flashcard payload
card:
  type: definition
  question: "Erkläre den Begriff kritischer Pfad beim Netzplan."
  answer: |
    Der **kritische Pfad** ist die **längste Abfolge voneinander abhängiger Vorgänge** in einem Netzplan.

    Er bestimmt die **Mindestdauer eines Projekts**, da sich jede Verzögerung auf diesem Pfad **direkt auf die Gesamtdauer des Projekts auswirkt**.

    Vorgänge auf dem kritischen Pfad besitzen **keinen zeitlichen Puffer**.
  examples:
    - "Analyse → Entwicklung → Test → Deployment bilden den kritischen Pfad eines Softwareprojekts."
    - "Verzögert sich eine Aktivität auf dem kritischen Pfad, verschiebt sich der gesamte Projektabschluss."

# Lifecycle
status: published
created: "2026-03-10"
updated: "2026-03-10"
---

## Kritischer Pfad im Netzplan

Der **kritische Pfad** ist ein zentrales Konzept der **Netzplantechnik** im Projektmanagement.  
Er beschreibt den **längsten Weg durch ein Projektnetzwerk**, also die Abfolge von Vorgängen, die die **Gesamtdauer des Projekts bestimmt**.

Alle Aktivitäten auf diesem Pfad sind **kritisch**, da sie **keine zeitliche Reserve (Puffer)** besitzen.

## Eigenschaften des kritischen Pfads

| Eigenschaft | Bedeutung |
|---|---|
| Längster Weg im Netzplan | Bestimmt die minimale Projektdauer |
| Kein Zeitpuffer | Verzögerungen wirken sich sofort auf das Projektende aus |
| Kritische Vorgänge | Alle Aktivitäten auf diesem Pfad sind zeitkritisch |

```mermaid
flowchart LR
A[Projektstart] --> B[Analyse]
B --> C[Entwicklung]
C --> D[Test]
D --> E[Projektende]
```

Der dargestellte Ablauf bildet den **kritischen Pfad**, da alle Vorgänge **nacheinander ohne Puffer** stattfinden.

## Pufferzeiten im Vergleich

| Vorgang | Bedeutung |
|---|---|
| Kritischer Vorgang | Pufferzeit = 0 |
| Nicht kritischer Vorgang | besitzt zeitliche Reserve |

**Merksatz:**

> Beim **kritischen Pfad ist der Gesamtpuffer gleich Null.**

## Beispiel aus der IT

Projekt: **Einführung eines neuen Servers**

| Schritt | Dauer |
|---|---|
| Planung | 1 Tag |
| Installation | 2 Tage |
| Konfiguration | 2 Tage |
| Test | 1 Tag |

Diese Schritte können nicht parallel erfolgen und bilden daher den **kritischen Pfad**, der die **Gesamtprojektdauer bestimmt**.

## Prüfungsrelevanz (AP1)

Typische Prüfungsfragen:

- „Was ist der kritische Pfad?“
- „Welche Bedeutung hat der kritische Pfad im Netzplan?“

Wichtige Stichworte für die Antwort:

- längster Weg
- bestimmt Projektdauer
- kein Puffer
- Verzögerung → Projekt verzögert sich

## Häufige Fehler

| Fehler | Erklärung |
|---|---|
| Kritischer Pfad mit beliebigem Projektweg verwechseln | Nur der **längste Weg ohne Puffer** ist kritisch |
| Pufferzeit vergessen | Kritischer Pfad hat **Puffer = 0** |
| Mehrere kritische Pfade ignorieren | In komplexen Projekten können mehrere existieren |