---
# Identity (stable; never change after publishing)
id: ap1-0075
slug: "osi-schichten-1-4"

# Display
title: "Die 4 transportorientierten Schichten des OSI-Modells"

# Classification / navigation (machine-side)
module: "Beurteilen marktgängiger IT-Systeme und Lösungen"
topics: ["Netzwerke"]
tags: ["definition","prüfungsrelevant"]

# Flashcard payload
card:
  type: multi
  question: "Nenne die 4 transportorientierten Schichten des OSI-Modells und erläutere deren Aufgaben."
  answer: |
    **Schicht 1 – Bitübertragungsschicht (Physical Layer)**  
    Stellt die physische Verbindung her und überträgt Bits über das Übertragungsmedium.

    **Schicht 2 – Sicherungsschicht (Data Link Layer)**  
    Sorgt für eine zuverlässige Datenübertragung und organisiert Frames sowie Fehlererkennung.

    **Schicht 3 – Vermittlungsschicht (Network Layer)**  
    Verantwortlich für die logische Adressierung (IP) und das Routing von Datenpaketen zwischen Netzwerken.

    **Schicht 4 – Transportschicht (Transport Layer)**  
    Stellt eine zuverlässige Ende-zu-Ende-Datenübertragung sicher und segmentiert Daten.
  examples:
    - "Schicht 1: Netzwerkkabel oder Glasfaser übertragen elektrische oder optische Signale."
    - "Schicht 2: Switches organisieren Datenübertragung im lokalen Netzwerk."
    - "Schicht 3: Router leiten Datenpakete zwischen verschiedenen Netzwerken weiter."
    - "Schicht 4: TCP sorgt für eine zuverlässige Datenübertragung zwischen Anwendungen."

# Lifecycle
status: draft
created: "2026-03-12"
updated: "2026-03-12"
---

<!-- Optional: extra explanation, diagrams, tables, links, etc.
     Keep the "answer" concise; put longer context here if useful. -->

## Die 4 transportorientierten Schichten des OSI-Modells

Das **OSI-Modell (Open Systems Interconnection)** beschreibt die Kommunikation in Netzwerken in **sieben Schichten**.  
Die **unteren vier Schichten** werden oft als **transportorientierte Schichten** bezeichnet, da sie für die technische Übertragung von Daten verantwortlich sind.

---

## Kernerklärung

Die transportorientierten Schichten übernehmen unterschiedliche Aufgaben bei der Übertragung von Daten in Netzwerken.

| Schicht | Name | Hauptaufgabe |
|---|---|---|
| 1 | Bitübertragungsschicht (Physical Layer) | Übertragung von Bits über physische Medien |
| 2 | Sicherungsschicht (Data Link Layer) | Fehlererkennung, Framebildung und Zugriff auf das Übertragungsmedium |
| 3 | Vermittlungsschicht (Network Layer) | Routing und logische Adressierung (z. B. IP) |
| 4 | Transportschicht (Transport Layer) | Ende-zu-Ende-Kommunikation und Segmentierung von Daten |

Typische Komponenten oder Protokolle pro Schicht:

- **Schicht 1:** Netzwerkkabel, Hub, Repeater  
- **Schicht 2:** Switch, MAC-Adressen, Ethernet  
- **Schicht 3:** Router, IP-Protokoll  
- **Schicht 4:** TCP, UDP, Ports

---

## Praktisches Beispiel

Beim Aufruf einer Webseite läuft die Kommunikation über mehrere OSI-Schichten:

1. **Schicht 4 (Transport):** TCP stellt eine Verbindung zum Webserver her.  
2. **Schicht 3 (Network):** IP bestimmt den Weg der Datenpakete zum Zielnetzwerk.  
3. **Schicht 2 (Data Link):** Ethernet organisiert die Übertragung im lokalen Netzwerk.  
4. **Schicht 1 (Physical):** Bits werden über Kabel oder WLAN übertragen.

---

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen

- Welche Aufgaben haben die transportorientierten Schichten des OSI-Modells?
- Welche Schicht ist für Routing verantwortlich?
- Welche Schicht kümmert sich um die physische Datenübertragung?

### Antworten auf die typischen Prüfungsfragen

**Aufgaben der transportorientierten Schichten**

- Schicht 1: Physische Übertragung von Bits  
- Schicht 2: Sicherung der Datenübertragung und Framebildung  
- Schicht 3: Routing und logische Adressierung  
- Schicht 4: Ende-zu-Ende-Transport von Daten

**Routing**

Die **Vermittlungsschicht (Layer 3)** übernimmt Routing zwischen Netzwerken.

**Physische Datenübertragung**

Die **Bitübertragungsschicht (Layer 1)** ist für die physische Übertragung der Bits zuständig.

---

## Merksatz

> Die unteren vier OSI-Schichten sorgen dafür, dass Daten physisch übertragen, gesichert, geroutet und zuverlässig zwischen Systemen transportiert werden.