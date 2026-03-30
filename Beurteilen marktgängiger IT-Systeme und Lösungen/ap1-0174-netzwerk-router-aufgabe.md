---
# Identity (stable; never change after publishing)
id: ap1-0174
slug: "netzwerk-router-aufgabe"

# Display
title: "Aufgabe eines Netzwerk-Routers"

# Classification / navigation (machine-side)
module: "Beurteilen marktgängiger IT-Systeme und Lösungen"
topics: ["Netzwerke"]
tags: ["definition","prüfungsrelevant"]

# Flashcard payload
card:
  type: definition
  question: "Wofür wird ein Netzwerk-Router verwendet?"
  answer: "Ein Netzwerk-Router verbindet mehrere Netzwerke miteinander und leitet Datenpakete zwischen ihnen weiter."
  examples:
    - "Ein Router verbindet ein Heimnetzwerk (LAN) mit dem Internet (WAN)."
    - "Ein Unternehmensrouter verbindet mehrere Standortnetzwerke über VPN."

# Lifecycle
status: published
created: "2026-03-12"
updated: "2026-03-12"
---

<!-- Optional: extra explanation, diagrams, tables, links, etc.
     Keep the "answer" concise; put longer context here if useful. -->

## Aufgabe eines Netzwerk-Routers

Ein **Netzwerk-Router** ist ein Netzwerkgerät, das **verschiedene Netzwerke miteinander verbindet** und den Datenverkehr zwischen ihnen steuert.  
Er sorgt dafür, dass **Datenpakete den richtigen Weg zum Zielnetzwerk finden**.

---

## Kernerklärung

Router arbeiten im **OSI-Modell auf Schicht 3 (Vermittlungsschicht / Network Layer)**.  
Sie analysieren **IP-Adressen** und entscheiden anhand von **Routingtabellen**, wohin ein Datenpaket weitergeleitet werden muss.

Zentrale Aufgaben eines Routers:

- **Verbinden verschiedener Netzwerke** (z. B. LAN und Internet)
- **Weiterleiten von Datenpaketen zwischen Netzwerken**
- **Bestimmen der optimalen Route** für Datenpakete
- **Segmentierung von Netzwerken**

Router werden häufig eingesetzt für:

- Verbindung eines **lokalen Netzwerks mit dem Internet**
- **VPN-Verbindungen** zwischen Standorten
- Verbindung verschiedener **Subnetze**

### Typische Einsatzbereiche

| Einsatzbereich | Beispiel |
|---|---|
| Heimnetzwerk | Router verbindet LAN mit dem Internet |
| Unternehmensnetz | Verbindung mehrerer Standorte über VPN |
| Provider-Netze | Weiterleitung von Daten zwischen großen Netzwerken |

---

## Praktisches Beispiel

Ein Unternehmen besitzt zwei Netzwerke:

- **Internes Firmennetzwerk (LAN)**
- **Internetverbindung (WAN)**

Der **Router verbindet beide Netzwerke**.  
Wenn ein Mitarbeiter eine Webseite aufruft:

1. Der Computer sendet ein Datenpaket.
2. Der Router erkennt die Zieladresse im Internet.
3. Das Paket wird über den Router an das **WAN/Internet** weitergeleitet.

---

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen

- Welche Aufgabe hat ein Router?
- Auf welcher OSI-Schicht arbeitet ein Router?
- Warum werden Router in Netzwerken eingesetzt?

### Antworten auf die typischen Prüfungsfragen

**Aufgabe eines Routers**

Ein Router verbindet mehrere Netzwerke und **leitet Datenpakete zwischen ihnen weiter**.

**OSI-Schicht**

Router arbeiten auf **Schicht 3 des OSI-Modells (Network Layer / Vermittlungsschicht)**.

**Warum Router eingesetzt werden**

- Verbindung verschiedener Netzwerke  
- Steuerung des Datenverkehrs  
- Bestimmung des optimalen Übertragungswegs  

---

## Merksatz

> Ein Router verbindet Netzwerke miteinander und leitet Datenpakete anhand von IP-Adressen zum richtigen Ziel weiter.