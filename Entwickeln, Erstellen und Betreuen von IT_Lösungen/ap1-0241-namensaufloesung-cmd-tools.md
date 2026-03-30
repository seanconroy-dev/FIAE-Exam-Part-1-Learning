---
# Identity (stable; never change after publishing)
id: ap1-0241
slug: namensaufloesung-cmd-tools

# Display
title: "Namensauflösung prüfen mit CMD und PowerShell"

# Classification / navigation (machine-side)
module: "Entwickeln, Erstellen und Betreuen von IT_Lösungen"
topics: ["Netzwerk", "DNS", "Diagnose"]
tags: ["ap1", "dns", "cmd", "powershell"]

# Flashcard payload
card:
  type: basic       # basic | multi | steps | definition | comparison
  question: "Welche Kommandozeilen-Werkzeuge eignen sich zur Überprüfung der Namensauflösung in einer Windows-Umgebung?"
  answer: "Mit CMD: ping -a, nslookup, tracert. Mit PowerShell: Resolve-DnsName."
  examples: ["nslookup google.de", "ping -a 8.8.8.8"]

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-18"
updated: "2026-03-18"
---

## Namensauflösung prüfen mit CMD und PowerShell
Zur Überprüfung der Namensauflösung (DNS) stehen in Windows verschiedene Kommandozeilen-Tools zur Verfügung.

Diese helfen dabei, Domainnamen in IP-Adressen aufzulösen und Netzwerkprobleme zu analysieren.

## Kernerklärung

### CMD-Tools

- **ping -a**
  - zeigt den Hostnamen zu einer IP-Adresse
- **nslookup**
  - fragt DNS-Server gezielt ab
- **tracert**
  - zeigt den Weg (Routing) zu einem Ziel und kann DNS-Probleme sichtbar machen

### PowerShell

- **Resolve-DnsName**
  - modernes Tool zur DNS-Abfrage
  - detailliertere Ausgabe als nslookup

```mermaid
flowchart LR
A[Domainname] --> B[DNS-Server]
B --> C[IP-Adresse]
```

## Praktisches Beispiel

```bash
nslookup google.de
```

Ergebnis:
- zeigt die IP-Adresse von google.de  
- zeigt den verwendeten DNS-Server  

```bash
ping -a 8.8.8.8
```

Ergebnis:
- löst IP-Adresse zurück in Hostnamen auf  

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Welche Tools prüfen DNS?
- Unterschied nslookup und ping?
- Was macht Resolve-DnsName?

### Antworten auf die typischen Prüfungsfragen
- ping -a, nslookup, tracert, Resolve-DnsName  
- nslookup fragt DNS direkt, ping testet Erreichbarkeit + Namensauflösung  
- PowerShell-Tool für detaillierte DNS-Abfragen  

## Merksatz
DNS-Probleme prüft man mit nslookup, ping oder Resolve-DnsName.