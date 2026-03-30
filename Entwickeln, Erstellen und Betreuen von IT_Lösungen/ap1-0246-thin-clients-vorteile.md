---
# Identity (stable; never change after publishing)
id: ap1-0246
slug: thin-clients-vorteile

# Display
title: "Vorteile von Thin Clients"

# Classification / navigation (machine-side)
module: "Entwickeln, Erstellen und Betreuen von IT_Lösungen"
topics: ["Client-Server", "Virtualisierung", "Hardware"]
tags: ["ap1", "thin-client", "vorteile", "vdI"]

# Flashcard payload
card:
  type: basic       # basic | multi | steps | definition | comparison
  question: "Welchen Nutzen haben Thin Clients in einer IT-Landschaft, die auf Desktop-Virtualisierung setzt?"
  answer: "Geringer Stromverbrauch, leise, wenig Platzbedarf, leicht austauschbar, flexibel einsetzbar, geringes Gewicht, umweltfreundlich, sicher durch read-only System."
  examples: ["Thin Client im Büro statt Desktop-PC", "VDI-Umgebung mit zentralen Servern"]

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-18"
updated: "2026-03-18"
---

## Vorteile von Thin Clients
Thin Clients sind schlanke Endgeräte, die hauptsächlich zur Verbindung mit zentralen Servern oder virtuellen Desktops genutzt werden.

Sie bieten viele Vorteile gegenüber klassischen PCs.

## Kernerklärung

### Vorteile von Thin Clients

- geringer Stromverbrauch  
- geräuschloser Betrieb (keine Lüfter)  
- geringer Platzbedarf  
- leicht austauschbar  
- flexibel einsetzbar (kein lokales OS notwendig)  
- geringes Gewicht  
- umweltfreundlich (weniger Material, weniger Abwärme)  
- hohe Sicherheit durch read-only Betriebssystem  

```mermaid
flowchart LR
A[Thin Client] --> B[Server / VDI]
B --> C[Virtueller Desktop]
```

## Praktisches Beispiel

- Unternehmen nutzt VDI:
  - Mitarbeiter arbeiten an Thin Clients
  - Anwendungen laufen auf zentralem Server
  - Geräte sind leicht austauschbar bei Defekt

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Was sind Vorteile von Thin Clients?
- Warum sind Thin Clients energieeffizient?
- Welche Rolle spielen sie in der Virtualisierung?

### Antworten auf die typischen Prüfungsfragen
- Stromsparend, leise, platzsparend, sicher  
- Weniger leistungsstarke Hardware nötig  
- Zugriff auf zentrale virtuelle Desktops  

## Merksatz
Thin Clients sind sparsam, leise und sicher – die Rechenleistung liegt im Server.