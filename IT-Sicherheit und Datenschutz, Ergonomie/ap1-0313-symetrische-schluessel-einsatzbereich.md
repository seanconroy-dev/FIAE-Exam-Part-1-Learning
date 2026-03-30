---
# Identity (stable; never change after publishing)
id: ap1-0313
slug: "symmetrische-schluessel-einsatzbereiche"

# Display
title: "Einsatzbereiche symmetrischer Schlüssel"

# Classification / navigation (machine-side)
module: "IT-Sicherheit und Datenschutz, Ergonomie"
topics: ["kryptografie", "verschluesselung", "symmetrisch"]
tags: ["ap1", "grundlagen", "sicherheit", "aes", "des"]

# Flashcard payload
card:
  type: basic
  question: "In welchen Bereichen und Verfahren werden symmetrische Schlüssel eingesetzt?"
  answer: "Einsatzbereiche: WLAN (WPA2/WPA3), VPN (z. B. OpenVPN), IPsec, SSH, SRTP, WiMAX. Verfahren: AES, Triple-DES, Blowfish, SHA-2."
  examples: []

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-25"
updated: "2026-03-25"
---

## Einsatzbereiche symmetrischer Schlüssel

Symmetrische Verschlüsselung wird häufig in Netzwerken eingesetzt, um Daten schnell und effizient zu schützen.

Sie nutzt **denselben Schlüssel** zum Ver- und Entschlüsseln.

## Kernerklärung

### Einsatzbereiche
- Wireless LAN (**WPA2 / WPA3**)  
- VPN (z. B. OpenVPN)  
- IPsec  
- SSH  
- SRTP (z. B. VoIP)  
- WiMAX  

### Typische Verfahren
| Verfahren        | Beschreibung                     |
|-----------------|---------------------------------|
| AES             | Standardverfahren, sehr sicher   |
| Triple-DES      | älteres Verfahren               |
| Blowfish        | Alternative zu DES              |
| SHA-2           | Hashverfahren (für Integrität)  |

```mermaid
flowchart LR
    A[Daten] --> B[Symmetrischer Schlüssel]
    B --> C[Verschlüsselung]
    C --> D[Übertragung]
    D --> E[Entschlüsselung]
```

## Praktisches Beispiel
- WLAN-Passwort (WPA2/WPA3)  
→ Daten werden mit **AES** verschlüsselt  

- VPN-Verbindung (OpenVPN)  
→ Sichere Kommunikation über das Internet  

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Nenne Einsatzbereiche symmetrischer Verschlüsselung  
- Nenne typische Verfahren  

### Antworten auf die typischen Prüfungsfragen
- WLAN, VPN, IPsec, SSH, SRTP  
- AES, Triple-DES, Blowfish (ggf. SHA-2 ergänzend für Hashing)  

## Merksatz
**Symmetrische Verschlüsselung ist schnell und wird vor allem in Netzwerken eingesetzt.**