---
# Identity (stable; never change after publishing)
id: ap1-0169
slug: host-bus-adapter

# Display
title: "Host Bus Adapter (HBA)"

# Classification / navigation (machine-side)
module: "Beurteilen marktgängiger IT-Systeme und Lösungen"
topics: ["Storage", "Hardware", "Schnittstellen"]
tags: ["prüfungsrelevant", "definition"]

# Flashcard payload
card:
  type: definition
  question: "Wie definiert man den Begriff Host Bus Adapter (HBA)?"
  answer: "Ein Host Bus Adapter (HBA) ist eine Netzwerkschnittstelle bzw. Erweiterungskarte in einem Server, die die Verbindung zwischen dem Host-System und externen Speichersystemen (Storage) ermöglicht."
  examples:
    - "Fibre Channel HBA für SAN-Systeme"
    - "iSCSI-HBA für Storage-Netzwerke"

# Lifecycle
status: published
created: "2026-03-12"
updated: "2026-03-12"
---

## Host Bus Adapter (HBA)

Ein **Host Bus Adapter (HBA)** ist eine **Hardware-Komponente in einem Server**, die dafür sorgt, dass ein Host-System mit **externen Speichergeräten (Storage-Systemen)** kommunizieren kann.

Der HBA fungiert dabei als **Schnittstelle zwischen Server und Speichernetzwerk**.

Er wird häufig in **Storage Area Networks (SAN)** eingesetzt.

---

## Typische Einsatzprotokolle

HBAs arbeiten häufig mit folgenden Technologien:

| Technologie | Beschreibung |
|---|---|
| SCSI | Klassisches Protokoll für Massenspeicher |
| ATA / SATA | Schnittstellen für Festplatten |
| Fibre Channel | Hochgeschwindigkeitsverbindung in SAN-Systemen |
| iSCSI | Übertragung von SCSI-Befehlen über IP-Netzwerke |
| Ethernet | Netzwerkbasierte Storage-Verbindungen |

---

## Funktionsprinzip

```mermaid
flowchart LR
A[Server / Host-System] --> B[Host Bus Adapter]
B --> C[Storage-Netzwerk]
C --> D[Speichersystem / SAN]
```

Der **HBA übernimmt die Kommunikation zwischen Server und Storage-System**.

---

## Beispiel aus der Praxis

Ein Unternehmen betreibt ein **Storage Area Network (SAN)**.

- Der Server besitzt eine **Fibre Channel HBA-Karte**  
- Diese verbindet den Server mit dem **SAN-Switch**  
- Über das SAN greift der Server auf **zentrale Speichersysteme** zu  

---

## Prüfungsrelevanz (AP1)

Typische Fragen:

- Definition **Host Bus Adapter**
- Einsatz in **Storage-Systemen oder SAN**
- Unterschied zu normalen **Netzwerkkarten (NIC)**

**Merksatz**

> Ein **Host Bus Adapter** verbindet einen Server mit externen Speicherlösungen und ermöglicht die Kommunikation mit Storage-Systemen.

---