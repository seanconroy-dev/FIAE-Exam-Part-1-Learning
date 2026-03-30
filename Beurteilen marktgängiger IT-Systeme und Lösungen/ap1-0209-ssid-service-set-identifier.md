---
# Identity (stable; never change after publishing)
id: ap1-0209
slug: ssid-service-set-identifier

# Display
title: "SSID (Service Set Identifier)"

# Classification / navigation (machine-side)
module: "Beurteilen marktgängiger IT-Systeme und Lösungen"
topics: ["wlan", "grundlagen"]
tags: ["ssid", "wlan", "802.11"]

# Flashcard payload
card:
  type: definition
  question: "Erkläre den Begriff SSID (Service Set Identifier)."
  answer: "Die SSID ist der frei wählbare Name eines WLANs (Funknetzwerks) gemäß IEEE 802.11, dient zur Identifikation des Netzwerks und kann bis zu 32 ASCII-Zeichen lang sein."
  examples: ["MeinWLAN", "Firma-Gastnetz"]

# Lifecycle
status: published
created: "2026-03-17"
updated: "2026-03-17"
---

## SSID (Service Set Identifier)

Die **SSID (Service Set Identifier)** ist der sichtbare Name eines WLAN-Netzwerks.

- dient zur **Identifikation eines Funknetzes**
- wird von Access Points ausgesendet
- Benutzer wählen anhand der SSID ihr Netzwerk aus

---

## Kernerklärung

### Eigenschaften der SSID

- Bestandteil des **IEEE 802.11 Standards**
- frei wählbarer Netzwerkname
- maximale Länge:
  - **32 ASCII-Zeichen**
- Groß- und Kleinschreibung wird berücksichtigt

### Funktion

- identifiziert ein WLAN eindeutig innerhalb eines Bereichs
- bildet eine Art **Broadcast-Domäne** für Funknetze

### Erweiterung: Multi-SSID

- ein Access Point kann mehrere SSIDs bereitstellen
- ermöglicht:
  - Trennung von Netzwerken (z. B. Gäste / intern)

| SSID | Zweck |
|---|---|
| FirmenWLAN | internes Netzwerk |
| GästeWLAN | Internetzugang für Besucher |

---

## Praktisches Beispiel

Ein Router sendet mehrere WLANs:

- **HomeNetz** → privates Netzwerk  
- **HomeNetz-Gast** → isoliertes Gästenetz  

→ beide laufen über denselben Access Point, aber unterschiedliche SSIDs

---

## Prüfungsrelevanz (AP1)

Wichtige Punkte:

- SSID = **Name des WLANs**
- gehört zu **IEEE 802.11**
- max. **32 Zeichen**
- ermöglicht **Netztrennung (Multi-SSID)**

---

### Typische Prüfungsfragen

- Was ist eine SSID?
- Welche maximale Länge hat eine SSID?
- Wozu dient eine SSID?
- Was ist eine Multi-SSID?

---

### Antworten auf die typischen Prüfungsfragen

**Was ist eine SSID?**  
→ Name eines WLANs  

**Maximale Länge?**  
→ 32 ASCII-Zeichen  

**Wozu dient sie?**  
→ Identifikation eines Funknetzwerks  

**Multi-SSID?**  
→ mehrere WLANs über einen Access Point  

---

## Merksatz

**SSID = der Name, unter dem du ein WLAN findest.**