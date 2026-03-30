---
# Identity (stable; never change after publishing)
id: ap1-0312
slug: "hashfunktionen-anwendungen"

# Display
title: "Anwendungen von Hashfunktionen"

# Classification / navigation (machine-side)
module: "IT-Sicherheit und Datenschutz, Ergonomie"
topics: ["kryptografie", "hashfunktionen", "integritaet"]
tags: ["ap1", "grundlagen", "sicherheit", "hash"]

# Flashcard payload
card:
  type: basic
  question: "Welche Anwendungen oder Verfahren verwenden kryptografische Hashfunktionen?"
  answer: "Integritätsprüfungen, Prüfsummen, Sitzungsschlüssel-Erzeugung, Einmal-Passwörter, digitale Signaturen (Authentifizierung) und Passwortspeicherung."
  examples: []

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-25"
updated: "2026-03-25"
---

## Anwendungen von Hashfunktionen
Kryptografische Hashfunktionen werden in vielen Bereichen der IT-Sicherheit eingesetzt.

Sie dienen vor allem zur Sicherstellung von Integrität und Authentizität.

## Kernerklärung

### Typische Einsatzbereiche
- **Integritätsprüfungen**
- **Erzeugung von Prüfsummen**
- **Erzeugung von Sitzungsschlüsseln**
- **Generatoren für Einmal-Passwörter (OTP)**
- **Digitale Signaturen (Authentifizierung)**
- **Speichern von Passwörtern (gehasht)**

### Zweck
- Daten unverändert? → Hashvergleich  
- Identität prüfen → Signatur  
- Geheimnisse schützen → Passwort-Hash  

```mermaid
flowchart LR
    A[Daten] --> B[Hashfunktion]
    B --> C[Hashwert]
    C --> D[Vergleich / Prüfung]
```

## Praktisches Beispiel
- Download einer Datei mit Prüfsumme  
- Vergleich des Hashwerts → Manipulation erkennbar  

Oder:

- Passwort wird **nicht im Klartext**, sondern als Hash gespeichert  

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Nenne Anwendungen von Hashfunktionen  
- Wofür werden Hashwerte genutzt?  

### Antworten auf die typischen Prüfungsfragen
- Integritätsprüfung, Prüfsummen, Passwortspeicherung, Signaturen, OTP  
- Zum Nachweis der Unverändertheit und zur Authentifizierung  

## Merksatz
**Hashfunktionen prüfen Integrität und schützen sensible Daten.**