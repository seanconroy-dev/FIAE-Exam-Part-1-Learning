---
# Identity (stable; never change after publishing)
id: ap1-0103
slug: netzplan-projektmanagement

# Display
title: Netzplan im Projektmanagement

# Classification / navigation (machine-side)
module: "Plannen,Vorbereiten und Durchführen von Arbeitsaufgaben"
topics: ["Projektplanung", "Netzplan"]
tags: ["prüfungsrelevant", "definition", "planung"]

# Flashcard payload
card:
  type: definition
  question: "Erkläre den Begriff Netzplan im Projektmanagement."
  answer: |
    Ein **Netzplan** ist ein Planungswerkzeug im Projektmanagement zur **Terminplanung von Projekten**.

    Er stellt **Vorgänge (Arbeitsschritte), deren Dauer sowie ihre logischen Abhängigkeiten** grafisch dar.  
    Die einzelnen Vorgänge werden meist **als Knoten/Rechtecke dargestellt und mit Pfeilen verbunden**.

    Mithilfe des Netzplans lassen sich außerdem:
    - **kritische Pfade**
    - **Pufferzeiten**
    - **Gesamtprojektlaufzeiten**

    bestimmen und analysieren.
  examples:
    - "Darstellung der Abhängigkeit zwischen Analyse, Entwicklung und Testphase eines Softwareprojekts."
    - "Berechnung des kritischen Pfades bei der Einführung eines neuen IT-Systems."

# Lifecycle
status: published
created: "2026-03-10"
updated: "2026-03-10"
---

## Netzplan im Projektmanagement

Der **Netzplan** ist ein zentrales Werkzeug der **Projektterminplanung**.  
Er hilft dabei, **alle Arbeitsschritte eines Projekts in ihrer logischen Reihenfolge darzustellen**.

Dabei werden zwei wichtige Informationen kombiniert:

- **Zeitliche Reihenfolge der Aufgaben**
- **Abhängigkeiten zwischen den Aufgaben**

So kann man erkennen, **welche Aufgaben parallel laufen können und welche zwingend voneinander abhängen**.

## Grundprinzip eines Netzplans

Ein Netzplan besteht aus:

| Element | Bedeutung |
|---|---|
| Vorgang | Eine Aufgabe oder Aktivität im Projekt |
| Pfeile | Zeigen Abhängigkeiten zwischen Vorgängen |
| Dauer | Zeit, die ein Vorgang benötigt |

Typischerweise werden **Vorgänge als Kästen dargestellt**, die durch **Pfeile verbunden sind**.

```mermaid
flowchart LR
A[Analyse] --> B[Planung]
B --> C[Entwicklung]
C --> D[Test]
D --> E[Deployment]
```

## Kritischer Pfad

Der **kritische Pfad** ist die **längste Abfolge voneinander abhängiger Vorgänge** im Projekt.

Eigenschaften:

- Bestimmt die **Gesamtdauer des Projekts**
- **Keine Pufferzeit vorhanden**
- Verzögerungen führen direkt zu einer **Projektverzögerung**

```mermaid
flowchart LR
A[Projektstart] --> B[Analyse]
B --> C[Entwicklung]
C --> D[Test]
D --> E[Projektende]
```

## Pufferzeiten

Nicht alle Vorgänge sind kritisch. Manche besitzen **Zeitreserven (Puffer)**.

Arten von Pufferzeiten:

| Puffer | Bedeutung |
|---|---|
| Gesamtpuffer | Zeit, um die sich ein Vorgang verzögern kann, ohne das Projektende zu verschieben |
| Freier Puffer | Zeit, um die sich ein Vorgang verzögern kann, ohne den nächsten Vorgang zu verzögern |

## Beispiel aus der IT

Projekt: **Einführung eines neuen Monitoring-Systems**

| Vorgang | Dauer |
|---|---|
| Analyse | 2 Tage |
| Installation | 1 Tag |
| Konfiguration | 2 Tage |
| Test | 1 Tag |

Der Netzplan zeigt:

- welche Schritte **nacheinander** erfolgen müssen
- welche **parallel** möglich sind
- welche Schritte **kritisch** sind

## Prüfungsrelevanz (AP1)

Der Netzplan gehört zu den **klassischen Grundlagen im Projektmanagement**.

Typische Prüfungsfragen:

- „Was ist ein Netzplan?“
- „Wozu dient ein Netzplan?“
- „Was ist der kritische Pfad?“

Wichtige Stichworte, die in der Antwort vorkommen sollten:

- Terminplanung
- Abhängigkeiten
- grafische Darstellung
- kritischer Pfad
- Pufferzeiten

## Häufige Fehler

| Fehler | Erklärung |
|---|---|
| Netzplan mit Gantt-Diagramm verwechseln | Gantt zeigt Zeitachsen, Netzplan zeigt Abhängigkeiten |
| Kritischer Pfad nicht erwähnen | Er ist eines der wichtigsten Ergebnisse des Netzplans |
| Netzplan nur als Zeitplan beschreiben | Er zeigt **auch logische Abhängigkeiten** |