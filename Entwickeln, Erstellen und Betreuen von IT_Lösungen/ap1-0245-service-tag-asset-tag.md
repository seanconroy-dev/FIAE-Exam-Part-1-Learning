---
# Identity (stable; never change after publishing)
id: ap1-0245
slug: service-tag-asset-tag

# Display
title: "Service-Tag und Asset-Tag"

# Classification / navigation (machine-side)
module: "Entwickeln, Erstellen und Betreuen von IT_Lösungen"
topics: ["Hardware", "Inventarisierung", "IT-Betrieb"]
tags: ["ap1", "asset", "service-tag", "inventar"]

# Flashcard payload
card:
  type: definition       # basic | multi | steps | definition | comparison
  question: "Wie definiert man die Begriffe Service-Tag und Asset-Tag?"
  answer: "Ein Service- bzw. Asset-Tag ist eine eindeutige Kennzeichnung (z. B. Seriennummer, Barcode oder QR-Code) zur Identifikation und Verwaltung von Hardware."
  examples: ["Aufkleber mit Barcode auf einem Laptop", "Service-Tag bei Dell-Geräten"]

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-18"
updated: "2026-03-18"
---

## Service-Tag und Asset-Tag
Service-Tags bzw. Asset-Tags dienen der eindeutigen Identifikation von IT-Geräten.

Sie sind ein wichtiger Bestandteil der IT-Verwaltung und Inventarisierung.

## Kernerklärung

- **Asset-Tag / Service-Tag**
  - eindeutige Kennzeichnung eines Geräts
  - meist als Etikett auf der Hardware angebracht
  - enthält z. B.:
    - Seriennummer
    - Barcode
    - QR-Code

- **Zweck**
  - Bestandskontrolle
  - Inventarisierung
  - Nachverfolgung von Geräten
  - Support (z. B. Garantieabfragen)

```mermaid
flowchart LR
A[Gerät] --> B[Asset-Tag]
B --> C[Inventarsystem]
C --> D[Verwaltung & Tracking]
```

## Praktisches Beispiel

- Laptop im Unternehmen:
  - erhält einen Aufkleber mit QR-Code
  - wird im Inventarsystem erfasst
  - kann jederzeit eindeutig identifiziert werden

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Wofür werden Asset-Tags verwendet?
- Was enthalten Service-Tags?
- Warum sind sie wichtig im Unternehmen?

### Antworten auf die typischen Prüfungsfragen
- Zur Identifikation und Verwaltung von Hardware  
- Seriennummern, Barcodes oder QR-Codes  
- Für Inventarisierung, Kontrolle und Nachverfolgung  

## Merksatz
Asset-Tags machen Hardware eindeutig identifizierbar und verwaltbar.