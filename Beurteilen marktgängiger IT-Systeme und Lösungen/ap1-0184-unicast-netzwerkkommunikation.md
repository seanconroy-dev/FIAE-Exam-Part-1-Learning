---
# Identity (stable; never change after publishing)
id: ap1-0184
slug: "unicast-netzwerkkommunikation"

# Display
title: "Unicast in der Netzwerkkommunikation"

# Classification / navigation (machine-side)
module: "Beurteilen marktgängiger IT-Systeme und Lösungen"
topics: ["Netzwerktechnik", "Kommunikationsarten", "IP-Netzwerke"]
tags: ["unicast","netzwerkkommunikation","ip"]

# Flashcard payload
card:
  type: definition
  question: "Was versteht man unter dem Begriff Unicast in der Netzwerkkommunikation?"
  answer: "Unicast bezeichnet eine Punkt-zu-Punkt-Kommunikation im Netzwerk, bei der ein Sender Daten gezielt an genau einen Empfänger über dessen IP-Adresse sendet."
  examples:
    - "Webserver sendet eine Webseite an einen einzelnen Client"
    - "SSH-Verbindung zwischen Administrator-PC und Server"
    - "Dateiübertragung zwischen zwei Rechnern"

# Lifecycle
status: published
created: "2026-03-14"
updated: "2026-03-16"
---

<!-- Optional: extra explanation, diagrams, tables, links, etc.
     Keep the "answer" concise; put longer context here if useful. -->

## Unicast in der Netzwerkkommunikation

**Unicast** ist die häufigste Form der **Netzwerkkommunikation**.  
Dabei wird eine **direkte Verbindung zwischen genau einem Sender und einem Empfänger** aufgebaut.

Der Sender adressiert dabei **explizit die IP-Adresse eines bestimmten Geräts** im Netzwerk.

---

## Kernerklärung

Bei **Unicast-Kommunikation** sendet ein Gerät Daten **nur an ein einzelnes Zielgerät**.

Eigenschaften:

- Punkt-zu-Punkt-Kommunikation
- eindeutige Zieladresse (IP-Adresse)
- Daten werden **nicht an andere Geräte im Netzwerk verteilt**

Typischer Ablauf:

1. Der Sender kennt die **IP-Adresse des Empfängers**.
2. Die Datenpakete werden gezielt an dieses Gerät geschickt.
3. Nur dieses Gerät verarbeitet die Nachricht.

---

## Praktisches Beispiel

Ein Benutzer ruft eine Webseite auf:

```mermaid
graph LR
Client[Client PC] -->|HTTP Request| Server[Webserver]
Server -->|HTTP Response| Client
```

Ablauf:

1. Der **Client sendet eine Anfrage** an den Webserver.
2. Der **Webserver antwortet nur diesem Client**.
3. Andere Geräte im Netzwerk erhalten diese Daten nicht.

---

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen

- Was versteht man unter **Unicast**?
- Wie viele Empfänger gibt es bei einer **Unicast-Kommunikation**?
- Welche Adresse wird für die Zielbestimmung verwendet?

### Antworten auf die typischen Prüfungsfragen

**Definition**

Unicast ist eine **Punkt-zu-Punkt-Kommunikation zwischen genau zwei Netzwerkgeräten**.

**Empfänger**

Es gibt **genau einen Empfänger**.

**Adressierung**

Die Kommunikation erfolgt über die **IP-Adresse des Zielgeräts**.

---

## Merksatz

> **Unicast = 1 Sender → 1 Empfänger**