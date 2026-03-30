---
# Identity (stable; never change after publishing)
id: ap1-0267
slug: wlan-sicherheitsmassnahmen

# Display
title: "WLAN-Sicherheit – Schutzmaßnahmen"

# Classification / navigation (machine-side)
module: "Entwickeln, Erstellen und Betreuen von IT_Lösungen"
topics: ["Netzwerk", "Sicherheit", "WLAN"]
tags: ["ap1", "wlan", "sicherheit", "netzwerk"]

# Flashcard payload
card:
  type: basic       # basic | multi | steps | definition | comparison
  question: "Welche Maßnahmen eignen sich zur Absicherung einer drahtlosen Netzwerkverbindung (WLAN/WiFi)?"
  answer: "Durch WPA2/WPA3-Verschlüsselung, Einsatz eines RADIUS-Servers, MAC-Filter (Whitelist), Client-Zertifikate und VPN-Verbindungen."
  examples: ["WPA3-geschütztes WLAN", "Firmen-WLAN mit RADIUS-Authentifizierung"]

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-18"
updated: "2026-03-18"
---

## WLAN-Sicherheit – Schutzmaßnahmen
Ein WLAN muss gegen unbefugten Zugriff geschützt werden, da es **drahtlos und damit leichter angreifbar** ist als kabelgebundene Netzwerke.

## Kernerklärung

Typische Sicherheitsmaßnahmen:

- **Verschlüsselung**
  - WPA2 / WPA3  
- **Authentifizierung**
  - z. B. über RADIUS-Server  
- **Zugriffskontrolle**
  - MAC-Filter (Whitelist)  
- **Zertifikate**
  - Client-Zertifikate zur Identitätsprüfung  
- **Sichere Verbindungen**
  - Nutzung von VPN  

```mermaid
flowchart LR
A[Client verbindet sich] --> B[Authentifizierung]
B --> C[Verschlüsselung aktiv]
C --> D[Zugriff erlaubt]
```

## Praktisches Beispiel

- Unternehmen:
  - WPA3 + RADIUS für Mitarbeiter  
  - Gäste-WLAN getrennt  

- Privathaushalt:
  - WPA2/WPA3 aktivieren  
  - starkes Passwort setzen  

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Nenne Maßnahmen zur WLAN-Sicherung  
- Warum ist WPA3 besser als WPA2?  
- Welche Rolle spielt RADIUS?  

### Antworten auf die typischen Prüfungsfragen
- Verschlüsselung, Authentifizierung, Zugriffskontrolle  
- höhere Sicherheit, moderner Standard  
- zentrale Benutzerverwaltung  

## Merksatz
Ein sicheres WLAN braucht Verschlüsselung, Authentifizierung und Zugriffskontrolle.