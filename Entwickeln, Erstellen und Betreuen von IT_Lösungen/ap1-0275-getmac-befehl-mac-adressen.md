---
# Identity (stable; never change after publishing)
id: ap1-0275
slug: getmac-befehl-mac-adressen

# Display
title: "getmac – MAC-Adressen anzeigen"

# Classification / navigation (machine-side)
module: "Entwickeln, Erstellen und Betreuen von IT_Lösungen"
topics: ["Netzwerk", "Diagnose", "Hardware"]
tags: ["ap1", "getmac", "mac", "netzwerk"]

# Flashcard payload
card:
  type: basic       # basic | multi | steps | definition | comparison
  question: "Welches Befehlszeilenkommando zeigt die MAC-Adressen der Netzwerkadapter an?"
  answer: "getmac -v – zeigt die MAC-Adressen der Netzwerkadapter inklusive zusätzlicher Informationen (z. B. Name und Transportprotokoll)."
  examples: ["getmac", "getmac -v"]

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-18"
updated: "2026-03-18"
---

## getmac – MAC-Adressen anzeigen
Der Befehl **getmac** dient zur Anzeige der **physikalischen Adressen (MAC-Adressen)** aller Netzwerkadapter eines Systems.

## Kernerklärung

- getmac zeigt:
  - **MAC-Adresse (Physikalische Adresse)**
  - **Netzwerkadapter (z. B. Ethernet, WLAN, virtuell)**
  - Optional mit `-v`:
    - zusätzliche Details (z. B. Transportname)

- Einsatz:
  - Identifikation von Geräten im Netzwerk  
  - Fehleranalyse bei Netzwerkproblemen  

```mermaid
flowchart LR
A[Netzwerkadapter] --> B[getmac]
B --> C[MAC-Adresse]
B --> D[Adapter-Infos]
```

## Praktisches Beispiel

```bash
getmac -v
```

Ergebnis:
- Liste aller Netzwerkadapter  
- Anzeige der jeweiligen MAC-Adressen  
- Zusatzinfos zu virtuellen und physischen Adaptern  

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Was zeigt der Befehl getmac an?  
- Was ist eine MAC-Adresse?  
- Unterschied zwischen IP und MAC?  

### Antworten auf die typischen Prüfungsfragen
- Physikalische Adressen der Netzwerkadapter  
- Eindeutige Hardware-Adresse eines Geräts  
- IP = logisch, MAC = physisch  

## Merksatz
getmac zeigt die Hardware-Adresse – jede Netzwerkkarte hat ihre eigene MAC.