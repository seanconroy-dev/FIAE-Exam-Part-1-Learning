---
# Identity (stable; never change after publishing)
id: ap1-0270
slug: wlan-sicherheitsmethoden-verschluesselung

# Display
title: "WLAN – Sicherheitsmethoden und Verschlüsselung"

# Classification / navigation (machine-side)
module: "Entwickeln, Erstellen und Betreuen von IT_Lösungen"
topics: ["Netzwerk", "WLAN", "Sicherheit"]
tags: ["ap1", "wlan", "wpa2", "wpa3", "verschluesselung"]

# Flashcard payload
card:
  type: basic       # basic | multi | steps | definition | comparison
  question: "Welche Sicherheitsmethoden und Verschlüsselungsstandards kommen beim Einsatz eines Unternehmens-WLANs zum Schutz der Datensicherheit in Frage?"
  answer: "Sicherheitsmethoden: WPA (unsicher), WPA2-Personal/Enterprise, WPA3-Personal/Enterprise (mit RADIUS). Verschlüsselung: AES, TKIP und SAE."
  examples: ["WPA3-Enterprise mit RADIUS", "WPA2-Personal im Heimnetz"]

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-18"
updated: "2026-03-18"
---

## WLAN – Sicherheitsmethoden und Verschlüsselung
Für sichere WLANs müssen geeignete **Authentifizierungs- und Verschlüsselungsverfahren** eingesetzt werden, um unbefugten Zugriff zu verhindern.

## Kernerklärung

### Sicherheitsmethoden

| Methode              | Bewertung / Einsatz                 |
|---------------------|-----------------------------------|
| WPA                 | veraltet, unsicher                 |
| WPA2-Personal       | Standard im Heimnetz               |
| WPA2-Enterprise     | mit RADIUS, Unternehmen           |
| WPA3-Personal       | moderner Standard                 |
| WPA3-Enterprise     | höchste Sicherheit, mit RADIUS    |

---

### Verschlüsselungsstandards

| Standard | Beschreibung                     |
|----------|---------------------------------|
| AES      | sicherer Standard               |
| TKIP     | veraltet, unsicher              |
| SAE      | moderner Authentifizierungsmechanismus (WPA3) |

```mermaid
flowchart LR
A[WLAN Zugriff] --> B[Authentifizierung WPA2/WPA3]
B --> C[Verschlüsselung AES/SAE]
C --> D[Sicherer Zugriff]
```

## Praktisches Beispiel

- Unternehmen:
  - WPA3-Enterprise + RADIUS-Server  
- Zuhause:
  - WPA2/WPA3-Personal mit starkem Passwort  

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Welche WLAN-Standards sind sicher?  
- Unterschied WPA2 vs. WPA3  
- Welche Verschlüsselung wird verwendet?  

### Antworten auf die typischen Prüfungsfragen
- WPA2 und WPA3 (WPA unsicher)  
- WPA3 = moderner und sicherer  
- AES (modern), TKIP (veraltet), SAE (WPA3)  

## Merksatz
WPA2/WPA3 mit AES (und SAE bei WPA3) sorgen für ein sicheres WLAN.