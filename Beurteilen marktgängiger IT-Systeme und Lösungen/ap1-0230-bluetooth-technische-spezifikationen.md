---
# Identity (stable; never change after publishing)
id: ap1-0230
slug: bluetooth-spezifikationen-reichweite-datenrate-frequenz

# Display
title: "Bluetooth: Reichweite, Datenrate und Frequenzbereich"

# Classification / navigation (machine-side)
module: "Beurteilen marktgängiger IT-Systeme und Lösungen"
topics: ["bluetooth", "funktechnik"]
tags: ["ap1", "netzwerke", "drahtlos", "ism-band"]

# Flashcard payload
card:
  type: basic
  question: "Welche technischen Spezifikationen hat Bluetooth in Bezug auf Reichweite, Datentransferrate und Frequenzbereich?"
  answer: "Reichweite: Klasse 1 ≈ 200 m (100 mW), Klasse 2 ≈ 20 m (2,5 mW), Klasse 3 ≈ 10 m (1 mW). Datentransferrate: Basic Rate ≈ 1 MBit/s, Enhanced Data Rate ≈ 2–3 MBit/s. Frequenzbereich: 2,402–2,480 GHz (ISM-Band)."
  examples: []

# Lifecycle
status: draft
created: "2026-03-18"
updated: "2026-03-30"
---

## Bluetooth: Reichweite, Datenrate und Frequenzbereich

Bluetooth ist ein drahtloser Kommunikationsstandard im **ISM-Band**, der sich durch unterschiedliche Reichweitenklassen, Datenraten und Betriebsmodi (Classic vs. Low Energy) auszeichnet.

## Kernerklärung

### 1. Reichweite (abhängig von Sendeleistung)
| Klasse | Sendeleistung | Reichweite (typisch) |
|--------|--------------|----------------------|
| Klasse 1 | 100 mW (20 dBm) | ca. 200 m |
| Klasse 2 | 2,5 mW (4 dBm) | ca. 20 m |
| Klasse 3 | 1 mW (0 dBm) | ca. 10 m |

➡️ Höhere Leistung = größere Reichweite, aber höherer Energieverbrauch.

---

### 2. Datentransferrate
| Modus | Datenrate (brutto) |
|------|-------------------|
| Basic Rate (BR) | ca. 1 MBit/s |
| Enhanced Data Rate (EDR) | ca. 2–3 MBit/s |

➡️ EDR verbessert die Effizienz und Geschwindigkeit gegenüber BR.

---

### 3. Frequenzbereich
- **2,402 – 2,480 GHz**
- Lizenzfreies **ISM-Band**
- Nutzung von **Frequenzsprungverfahren (FHSS)** zur Störungsreduktion

---

### 4. Bluetooth-Versionen
- **Bluetooth Classic (1.x – 3.x)** → höhere Datenrate
- **Bluetooth Low Energy (BLE, ab 4.x)** → energieeffizient, geringere Datenrate

---

## Praktisches Beispiel
- **Bluetooth-Kopfhörer (Klasse 2)**  
  → Reichweite ca. 10–20 m, ausreichend für Wohnung

- **Industrieanwendung (Klasse 1)**  
  → größere Reichweite bis 200 m erforderlich

---

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Welche Reichweitenklassen gibt es bei Bluetooth?
- Welche Datenraten unterstützen BR und EDR?
- In welchem Frequenzbereich arbeitet Bluetooth?
- Warum nutzt Bluetooth das ISM-Band?

### Antworten auf die typischen Prüfungsfragen
- 3 Klassen: 1 (200 m), 2 (20 m), 3 (10 m)
- BR: 1 MBit/s, EDR: 2–3 MBit/s
- 2,402–2,480 GHz
- Lizenzfrei, weltweit nutzbar

---

## Merksatz
**Bluetooth = 2,4 GHz ISM-Band + Klassen für Reichweite + BR/EDR für Datenrate.**