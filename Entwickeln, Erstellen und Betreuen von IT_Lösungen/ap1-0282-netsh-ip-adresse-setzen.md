---
# Identity (stable; never change after publishing)
id: ap1-0282
slug: netsh-ip-adresse-setzen

# Display
title: "Windows – IPv4-Adresse mit netsh setzen"

# Classification / navigation (machine-side)
module: "Entwickeln, Erstellen und Betreuen von IT_Lösungen"
topics: ["Windows", "Netzwerk", "Konfiguration"]
tags: ["ap1", "netsh", "ip", "ipv4"]

# Flashcard payload
card:
  type: basic       # basic | multi | steps | definition | comparison
  question: "Welches Kommando richtet eine IPv4-Adresse (192.168.0.1/24) mit Gateway 192.168.0.254 für den Adapter LAN-Verbindung ein?"
  answer: "netsh interface ip set address name=\"LAN-Verbindung\" address=192.168.0.1 mask=255.255.255.0 gateway=192.168.0.254"
  examples: ["netsh interface ip set address name=\"LAN-Verbindung\" address=192.168.0.1 mask=255.255.255.0 gateway=192.168.0.254"]

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-18"
updated: "2026-03-18"
---

## Windows – IPv4-Adresse mit netsh setzen
Mit dem Windows-Befehl **netsh** können Netzwerkparameter wie IP-Adresse, Subnetzmaske und Gateway direkt über die Kommandozeile gesetzt werden.

## Kernerklärung

### Aufbau des Befehls

```bash
netsh interface ip set address name="<Adaptername>" address=<IP> mask=<Subnetzmaske> gateway=<Gateway>
```

### Wichtige Bestandteile

| Parameter       | Bedeutung                         |
|----------------|----------------------------------|
| name           | Name des Netzwerkadapters        |
| address        | IPv4-Adresse                     |
| mask           | Subnetzmaske                     |
| gateway        | Standardgateway                  |

### Voraussetzungen

- Kommandozeile oder PowerShell **als Administrator starten**
- Richtiger Adaptername muss bekannt sein (z. B. „LAN-Verbindung“)

```mermaid
flowchart LR
A[Administrator öffnen] --> B[netsh Befehl]
B --> C[IP gesetzt]
```

## Praktisches Beispiel

```bash
netsh interface ip set address name="LAN-Verbindung" address=192.168.0.1 mask=255.255.255.0 gateway=192.168.0.254
```

→ Setzt:
- IP: 192.168.0.1  
- Subnetz: /24  
- Gateway: 192.168.0.254  

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Wie setzt man eine statische IP per CLI unter Windows?  
- Welche Parameter benötigt netsh?  
- Was bedeutet die Subnetzmaske 255.255.255.0?  

### Antworten auf die typischen Prüfungsfragen
- Mit netsh interface ip set address  
- name, address, mask, gateway  
- /24-Netz (256 Adressen, 254 nutzbar)  

## Merksatz
netsh setzt IPs direkt – aber nur mit Adminrechten.