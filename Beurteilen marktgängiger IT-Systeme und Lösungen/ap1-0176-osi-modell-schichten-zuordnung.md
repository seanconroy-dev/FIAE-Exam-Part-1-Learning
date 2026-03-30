---
# Identity (stable; never change after publishing)
id: ap1-0176
slug: "osi-modell-schichten-zuordnung"

# Display
title: "Zuordnung von Protokollen und Komponenten zu den OSI-Schichten"

# Classification / navigation (machine-side)
module: "Beurteilen marktgängiger IT-Systeme und Lösungen"
topics: ["Netzwerke", "OSI"]
tags: ["prüfungsrelevant", "definition"]

# Flashcard payload
card:
  type: comparison
  question: "Welchen Schichten des OSI-Modells lassen sich typische Protokolle und Netzwerkkomponenten zuordnen?"
  answer: |
    **Schicht 7 – Anwendung:** DNS, DHCP  
    **Schicht 6 – Darstellung:** IMAPS, SMTPS, HTTPS  
    **Schicht 5 – Sitzung:** Sitzungsverwaltung (keine konkreten Beispiele im Kartensatz)  
    **Schicht 4 – Transport:** TCP, UDP  
    **Schicht 3 – Vermittlung:** IP, ICMP – Router, Layer-3-Switch  
    **Schicht 2 – Sicherung:** IEEE 802.3 – Switch  
    **Schicht 1 – Bitübertragung:** 1000BASE-T – Netzwerkkabel, Hub
  examples:
    - "Router arbeiten typischerweise auf OSI-Schicht 3."
    - "Ein Switch arbeitet hauptsächlich auf Schicht 2."
    - "HTTPS gehört zur Anwendungsebene des OSI-Modells."

# Lifecycle
status: published
created: "2026-03-14"
updated: "2026-03-14"
---

<!-- Optional: extra explanation, diagrams, tables, links, etc.
     Keep the "answer" concise; put longer context here if useful. -->

## Zuordnung von Protokollen und Komponenten zu den OSI-Schichten

Das **OSI-Modell (Open Systems Interconnection)** unterteilt Netzwerkkommunikation in **sieben Schichten**.  
Jede Schicht erfüllt eine spezifische Aufgabe und verwendet typische **Protokolle und Netzwerkkomponenten**.

Für Prüfungen ist es wichtig, **Protokolle und Hardware den richtigen Schichten zuordnen zu können**.

---

## Kernerklärung

| OSI-Schicht | Bezeichnung | Typische Protokolle | Typische Komponenten |
|---|---|---|---|
| 7 | Anwendung (Application) | DNS, DHCP | Layer-4-7-Switch (Content Switch) |
| 6 | Darstellung (Presentation) | IMAPS, SMTPS, HTTPS | – |
| 5 | Sitzung (Session) | Sitzungsverwaltung | – |
| 4 | Transport (Transport) | TCP, UDP | – |
| 3 | Vermittlung (Network) | IP, ICMP | Router, Switch Layer 3 |
| 2 | Sicherung (Data Link) | IEEE 802.3 | Switch |
| 1 | Bitübertragung (Physical) | 1000BASE-T | Netzwerkkabel, Hub |

Wichtige Grundprinzipien:

- **Protokolle definieren Kommunikationsregeln**
- **Hardware arbeitet auf bestimmten OSI-Schichten**
- Daten werden beim Senden **von oben nach unten durch die Schichten verarbeitet**

---

## Praktisches Beispiel

Beim Aufruf einer Webseite passiert Folgendes:

1. **Schicht 7 (Anwendung):** DNS ermittelt die IP-Adresse eines Servers.  
2. **Schicht 4 (Transport):** TCP baut eine Verbindung auf.  
3. **Schicht 3 (Network):** IP bestimmt den Weg durch das Netzwerk.  
4. **Schicht 2 (Data Link):** Ethernet organisiert Frames im lokalen Netzwerk.  
5. **Schicht 1 (Physical):** Bits werden über das Netzwerkkabel übertragen.

```mermaid
flowchart LR
A[Anwendungsschicht] --> B[Transportschicht]
B --> C[Vermittlungsschicht]
C --> D[Sicherungsschicht]
D --> E[Bitübertragungsschicht]
```

---

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen

- Welche Protokolle gehören zur Transportschicht?
- Auf welcher OSI-Schicht arbeitet ein Router?
- Welche Komponenten gehören zur Bitübertragungsschicht?

### Antworten auf die typischen Prüfungsfragen

**Protokolle der Transportschicht**

- TCP  
- UDP  

**OSI-Schicht eines Routers**

- Router arbeiten auf **Schicht 3 (Vermittlungsschicht)**.

**Komponenten der Bitübertragungsschicht**

- Netzwerkkabel  
- Hub  

---

## Merksatz

> Je höher die OSI-Schicht, desto näher liegt sie an der Anwendung – je niedriger die Schicht, desto näher an der physischen Hardware.