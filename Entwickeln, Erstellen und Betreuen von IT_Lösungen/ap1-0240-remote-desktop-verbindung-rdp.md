---
# Identity (stable; never change after publishing)
id: ap1-0240
slug: remote-desktop-verbindung-rdp

# Display
title: "Remote Desktop Verbindung (RDP) – Funktionsweise"

# Classification / navigation (machine-side)
module: "Entwickeln, Erstellen und Betreuen von IT_Lösungen"
topics: ["Netzwerk", "Remotezugriff", "Protokolle"]
tags: ["ap1", "rdp", "remote-desktop"]

# Flashcard payload
card:
  type: basic       # basic | multi | steps | definition | comparison
  question: "Wie funktioniert eine Remote Desktop Verbindung?"
  answer: "Eine Remote Desktop Verbindung (RDP) ermöglicht den Fernzugriff auf einen Computer über Netzwerk (Port 3389), wobei Bildschirminhalte übertragen und lokale Eingaben (Maus, Tastatur) sowie Ressourcen genutzt werden."
  examples: ["Fernwartung eines PCs", "Zugriff auf Firmenserver von zuhause"]

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-18"
updated: "2026-03-18"
---

## Remote Desktop Verbindung (RDP) – Funktionsweise
Eine Remote Desktop Verbindung ermöglicht es, einen entfernten Computer so zu bedienen, als säße man direkt davor.

- Häufig genutzt im IT-Support und bei virtuellen Desktops  
- Standardprotokoll: RDP (Remote Desktop Protocol)  

## Kernerklärung

- Verbindung über Netzwerkprotokoll **RDP (Microsoft)**
- Kommunikation über **TCP/UDP Port 3389**
- Übertragen wird:
  - Bildschirminhalt des entfernten Systems
- Lokale Eingaben werden gesendet:
  - Maus
  - Tastatur
- Zusätzlich nutzbar:
  - Audio
  - Laufwerke
  - Drucker
  - Zwischenablage

```mermaid
flowchart LR
A[Client] -->|Eingaben senden| B[Server]
B -->|Bildschirmdaten| A
```

### Funktionsprinzip

1. Client baut Verbindung zum Server auf  
2. Server sendet Bildschirminhalte  
3. Client sendet Eingaben zurück  
4. Ressourcen werden optional weitergeleitet  

## Praktisches Beispiel

Ein IT-Administrator greift auf einen Firmen-PC zu:

- Verbindung über RDP  
- Sieht den Desktop des entfernten Rechners  
- Führt Wartungsarbeiten durch  

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Was ist RDP?
- Über welchen Port läuft RDP?
- Welche Daten werden übertragen?

### Antworten auf die typischen Prüfungsfragen
- Protokoll für Fernzugriff auf Computer  
- Port 3389 (TCP/UDP)  
- Bildschirmdaten + Eingaben + Ressourcen  

## Merksatz
RDP überträgt Bildschirm und Eingaben, sodass ein entfernter PC wie lokal bedient werden kann.