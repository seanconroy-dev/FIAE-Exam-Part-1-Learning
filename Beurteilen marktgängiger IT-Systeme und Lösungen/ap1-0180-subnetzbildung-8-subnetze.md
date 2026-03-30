---
# Identity (stable; never change after publishing)
id: ap1-0180
slug: "subnetzbildung-8-subnetze"

# Display
title: "Subnetzbildung: 192.168.30.0/24 in 8 Subnetze"

# Classification / navigation (machine-side)
module: "Beurteilen marktgängiger IT-Systeme und Lösungen"
topics: ["Netzwerke", "IPv4", "Subnetting"]
tags: ["prüfungsrelevant","berechnung"]

# Flashcard payload
card:
  type: steps
  question: "Wie lautet die Subnetzmaske, wenn das Netzwerk 192.168.30.0/24 in 8 Subnetze aufgeteilt wird, und wie viele Host-IP-Adressen stehen insgesamt zur Verfügung?"
  answer: |
    8 Subnetze = 2³ → 3 zusätzliche Netzbits

    Neue Subnetzmaske: 255.255.255.224 (/27)

    Hosts pro Subnetz: 32 − 2 = 30  
    Nutzbare Hosts gesamt: 8 × 30 = 240
  examples:
    - "Ein /24 Netz wird zu /27 erweitert, um 8 Subnetze zu erzeugen."
    - "Jedes Subnetz enthält 30 nutzbare Hostadressen."

# Lifecycle
status: published
created: "2026-03-14"
updated: "2026-03-14"
---

<!-- Optional: extra explanation, diagrams, tables, links, etc.
     Keep the "answer" concise; put longer context here if useful. -->

## Subnetzbildung: 192.168.30.0/24 in 8 Subnetze"

Bei der **Subnetzbildung** wird ein Netzwerk in mehrere kleinere Teilnetze aufgeteilt.  
Dies verbessert die **Struktur, Sicherheit und Verwaltung von Netzwerken**.

Im Beispiel wird das Netzwerk **192.168.30.0/24** in **8 Subnetze** unterteilt.

---

## Kernerklärung

### Schritt 1 – Anzahl der benötigten Subnetze

Benötigt: **8 Subnetze**

Formel:

Subnetze = 2ⁿ

2³ = **8**

→ **3 zusätzliche Bits** werden für die Subnetzbildung benötigt.

---

### Schritt 2 – Neue Subnetzmaske

Ausgangsnetz:

/24 → 255.255.255.0

Neue Maske:

24 + 3 = **/27**

Subnetzmaske:

**255.255.255.224**

---

### Schritt 3 – Hosts pro Subnetz

Ein /27 Netz besitzt:

2⁵ = **32 Adressen pro Subnetz**

Davon sind:

- 1 **Netzadresse**
- 1 **Broadcastadresse**

Nutzbare Hosts:

32 − 2 = **30 Hosts**

---

### Ergebnisübersicht

| Eigenschaft | Wert |
|---|---|
| Ursprüngliches Netz | 192.168.30.0/24 |
| Anzahl Subnetze | 8 |
| Neue Maske | /27 |
| Subnetzmaske | 255.255.255.224 |
| Hosts pro Subnetz | 30 |
| Nutzbare Hosts gesamt | 240 |

---

## Praktisches Beispiel

Die Subnetze entstehen in **32er-Schritten**:

| Subnetz | Netzadresse | Hostbereich | Broadcast |
|---|---|---|---|
| 1 | 192.168.30.0 | 192.168.30.1 – 192.168.30.30 | 192.168.30.31 |
| 2 | 192.168.30.32 | 192.168.30.33 – 192.168.30.62 | 192.168.30.63 |
| 3 | 192.168.30.64 | 192.168.30.65 – 192.168.30.94 | 192.168.30.95 |
| 4 | 192.168.30.96 | 192.168.30.97 – 192.168.30.126 | 192.168.30.127 |
| 5 | 192.168.30.128 | 192.168.30.129 – 192.168.30.158 | 192.168.30.159 |
| 6 | 192.168.30.160 | 192.168.30.161 – 192.168.30.190 | 192.168.30.191 |
| 7 | 192.168.30.192 | 192.168.30.193 – 192.168.30.222 | 192.168.30.223 |
| 8 | 192.168.30.224 | 192.168.30.225 – 192.168.30.254 | 192.168.30.255 |

---

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen

- Wie viele Bits werden für 8 Subnetze benötigt?
- Welche Subnetzmaske ergibt sich bei 8 Subnetzen aus einem /24 Netz?
- Wie viele Hosts pro Subnetz sind möglich?

### Antworten auf die typischen Prüfungsfragen

**Benötigte Bits**

8 Subnetze = **2³** → **3 zusätzliche Bits**

**Subnetzmaske**

/24 + 3 = **/27**  
→ **255.255.255.224**

**Hosts pro Subnetz**

2⁵ = 32 Adressen  
32 − 2 = **30 Hosts**

---

## Merksatz

> Für n Subnetze müssen so viele Bits ausgeliehen werden, dass **2ⁿ ≥ benötigte Subnetze** gilt.