---
# Identity (stable; never change after publishing)
id: ap1-0316
slug: "grossvater-vater-sohn-backup"

# Display
title: "Großvater-Vater-Sohn-Prinzip (Backup-Rotation)"

# Classification / navigation (machine-side)
module: "IT-Sicherheit und Datenschutz, Ergonomie"
topics: ["backup", "datensicherung", "strategie"]
tags: ["ap1", "backup", "rotation", "konzept"]

# Flashcard payload
card:
  type: basic
  question: "Wie gestaltet sich ein vollständiger Backup-Plan nach dem Großvater-Vater-Sohn-Prinzip?"
  answer: "Das Großvater-Vater-Sohn-Prinzip nutzt eine Backup-Rotation: tägliche inkrementelle Backups (Sohn), wöchentliche Vollbackups (Vater) und monatliche Vollbackups (Großvater)."
  examples: []

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-27"
updated: "2026-03-27"
---

## Großvater-Vater-Sohn-Prinzip (Backup-Rotation)
Das **Großvater-Vater-Sohn-Prinzip (GFS)** ist ein Rotationsschema für Backups.

Es kombiniert verschiedene Sicherungsintervalle, um:
- Datenverlust zu minimieren  
- Speicher effizient zu nutzen  
- mehrere Wiederherstellungspunkte zu ermöglichen  

## Kernerklärung

### Struktur des GFS-Prinzips

| Ebene        | Häufigkeit        | Art des Backups        | Zweck                          |
|--------------|------------------|------------------------|--------------------------------|
| Sohn         | täglich          | inkrementell           | aktuelle Änderungen sichern     |
| Vater        | wöchentlich      | Vollbackup             | stabile Zwischenstände          |
| Großvater    | monatlich        | Vollbackup             | langfristige Archivierung       |

### Typische Umsetzung
- **4× Sohn-Medien** → tägliche Backups (z. B. Mo–Do)  
- **4× Vater-Medien** → wöchentliche Backups  
- **12× Großvater-Medien** → monatliche Backups  

```mermaid
flowchart LR
  Sohn["Tag 1-4: Sohn, inkrementell"] --> Vater["Woche: Vater, Vollbackup"]
  Vater --> Grossvater["Monat: Großvater, Vollbackup"]
```

## Praktisches Beispiel
Ein Unternehmen sichert seine Daten wie folgt:

- Montag–Donnerstag: inkrementelle Backups  
- Freitag: Vollbackup (wöchentlich)  
- Monatsende: zusätzliches Vollbackup für Archiv  

 So sind sowohl kurzfristige als auch langfristige Wiederherstellungen möglich.

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Was ist das Großvater-Vater-Sohn-Prinzip?  
- Welche Backup-Arten werden verwendet?  

### Antworten auf die typischen Prüfungsfragen
- Rotationsschema mit drei Ebenen  
- Kombination aus inkrementellen und Vollbackups  
- Ziel: Sicherheit + Effizienz  

## Merksatz
**Sohn = täglich, Vater = wöchentlich, Großvater = monatlich.**