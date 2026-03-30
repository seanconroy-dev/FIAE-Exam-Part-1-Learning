---
# Identity (stable; never change after publishing)
id: ap1-0102
slug: projektplanungs-werkzeuge

# Display
title: Werkzeuge zur Planung und Überwachung eines Projekts

# Classification / navigation (machine-side)
module: "Plannen,Vorbereiten und Durchführen von Arbeitsaufgaben"
topics: ["Projektplanung"]
tags: ["prüfungsrelevant", "werkzeuge", "planung"]

# Flashcard payload
card:
  type: multi
  question: "Welche Werkzeuge eignen sich zur Planung und Überwachung von Projekten?"
  answer: |
    Typische Werkzeuge zur Planung und Überwachung eines Projekts sind:

    - **Netzplan** – Stellt Abhängigkeiten zwischen Aufgaben dar und hilft, den kritischen Pfad zu bestimmen.
    - **Gantt-Diagramm** – Visualisiert Aufgaben, Zeiträume und den Projektfortschritt in einer Zeitachse.
    - **Projektstrukturplan (PSP)** – Zerlegt ein Projekt hierarchisch in Teilaufgaben und Arbeitspakete.
  examples:
    - "Ein Gantt-Diagramm zur Planung der einzelnen Phasen einer Softwareentwicklung."
    - "Ein Netzplan zur Analyse der Abhängigkeiten zwischen Projektaufgaben."
    - "Ein Projektstrukturplan zur Aufteilung eines IT-Projekts in Module und Arbeitspakete."

# Lifecycle
status: published
created: "2026-03-10"
updated: "2026-03-10"
---

## Werkzeuge zur Planung und Überwachung eines Projekts

Für die **Planung und Kontrolle eines Projekts** werden verschiedene Werkzeuge eingesetzt.  
Diese helfen dabei, **Aufgaben zu strukturieren, Abhängigkeiten zu erkennen und den Fortschritt zu überwachen**.

Die drei wichtigsten Werkzeuge im Projektmanagement sind:

- **Projektstrukturplan (PSP)**
- **Netzplan**
- **Gantt-Diagramm**

Sie werden häufig **kombiniert eingesetzt**, da jedes Werkzeug einen anderen Fokus hat.

## Die wichtigsten Projektmanagement-Werkzeuge

| Werkzeug | Zweck | Darstellung |
|---|---|---|
| Projektstrukturplan (PSP) | Zerlegt ein Projekt in Teilaufgaben | Hierarchische Baumstruktur |
| Netzplan | Zeigt Abhängigkeiten zwischen Aufgaben | Netzwerkdiagramm |
| Gantt-Diagramm | Stellt Zeitplanung und Fortschritt dar | Balkendiagramm auf Zeitachse |

## Zusammenhang der Werkzeuge

```mermaid
flowchart LR
A[Projektstrukturplan] --> B[Arbeitspakete definieren]
B --> C[Netzplan]
C --> D[Abhängigkeiten bestimmen]
D --> E[Gantt-Diagramm]
E --> F[Zeitplan und Fortschritt überwachen]
```

Typischer Ablauf:

1. **Projektstrukturplan** erstellt die Struktur des Projekts.
2. **Netzplan** analysiert Abhängigkeiten zwischen den Aufgaben.
3. **Gantt-Diagramm** zeigt den zeitlichen Ablauf.

## Beispiel aus der IT

Projekt: **Einführung eines neuen Ticketsystems**

- **PSP:** Aufteilung in Analyse, Installation, Konfiguration, Schulung
- **Netzplan:** Installation muss vor der Konfiguration abgeschlossen sein
- **Gantt-Diagramm:** Zeitliche Darstellung der Projektphasen über mehrere Wochen

## Prüfungsrelevanz (AP1)

Sehr typische Prüfungsfrage:

> „Mit welchen Werkzeugen kann man ein Projekt planen und überwachen?“

Erwartete Antwort:

- Projektstrukturplan (PSP)
- Netzplan
- Gantt-Diagramm

Diese drei Begriffe solltest du **auswendig kennen**.

## Häufige Fehler

| Fehler | Erklärung |
|---|---|
| PSP mit Netzplan verwechseln | PSP strukturiert Aufgaben, Netzplan zeigt Abhängigkeiten |
| Gantt-Diagramm als Strukturdiagramm verstehen | Es zeigt hauptsächlich **Zeitplanung**, nicht Hierarchie |
| Nur ein Werkzeug nennen | In Prüfungen werden meist **alle drei** erwartet |