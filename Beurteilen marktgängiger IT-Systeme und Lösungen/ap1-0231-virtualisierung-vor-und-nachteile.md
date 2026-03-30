---
# Identity (stable; never change after publishing)
id: ap1-0231
slug: virtualisierung-vor-und-nachteile-cloud

# Display
title: "Vor- und Nachteile der Virtualisierung (inkl. Cloud)"

# Classification / navigation (machine-side)
module: "Beurteilen marktgängiger IT-Systeme und Lösungen"
topics: ["Virtualisierung", "Cloud Computing"]
tags: ["Vorteile", "Nachteile", "Server", "Kosten", "Skalierung"]

# Flashcard payload
card:
  type: basic
  question: "Nenne die Vor- und Nachteile der Virtualisierung von Servern und Desktops auch unter Berücksichtigung von Cloudangeboten."
  answer: "Vorteile: Stromersparnis, Skalierbarkeit, Redundanz, schnelle Provisionierung, kaum Kapazitätsgrenzen, Nutzung günstiger Angebote, keine Investitionskosten (Cloud), längere Software-Lebensdauer. Nachteile: Nicht immer kostengünstig im 24/7-Betrieb, höhere Latenzen, begrenzte Selbstadministration, Individualisierung eingeschränkt, nicht überall verfügbar."
  examples: []

# Lifecycle
status: published
created: "2026-03-29"
updated: "2026-03-29"
---

## Virtualisierung: Vor- und Nachteile (inkl. Cloud)

Virtualisierung ermöglicht es, mehrere virtuelle Systeme auf einer physischen Hardware zu betreiben. In Kombination mit Cloud-Angeboten wird Infrastruktur flexibel, skalierbar und oft kosteneffizient bereitgestellt.

## Kernerklärung

### Vorteile
- **Stromersparnis** durch bessere Hardwareauslastung  
- **Skalierbarkeit**: Ressourcen flexibel anpassbar  
- **Redundanz / Ausfallsicherheit** durch verteilte Systeme  
- **Schnelle Bereitstellung** (Provisionierung) von Servern  
- **Kaum Kapazitätsgrenzen** in der Cloud  
- **Kostenvorteile** durch Pay-as-you-go-Modelle  
- **Keine Anfangsinvestitionen** (Cloud statt eigener Hardware)  
- **Verlängerung der Lebensdauer alter Software** durch virtuelle Umgebungen  

### Nachteile
- **Nicht immer günstiger im Dauerbetrieb (24/7)**  
- **Höhere Latenzen** durch Virtualisierungsschichten oder Cloud-Zugriff  
- **Eingeschränkte Kontrolle** (z. B. bei Cloud-Anbietern)  
- **Nicht vollständige Selbstadministration möglich**  
- **Individuallösungen eingeschränkt**  
- **Abhängigkeit vom Anbieter / Verfügbarkeit je nach Region**

### Vergleichstabelle

| Aspekt            | Virtualisierung lokal        | Cloud-Lösung                  |
|------------------|-----------------------------|-------------------------------|
| Kosten           | Hohe Anfangsinvestition     | Pay-as-you-go                 |
| Skalierbarkeit   | Begrenzt durch Hardware     | Nahezu unbegrenzt             |
| Kontrolle        | Hoch                        | Eingeschränkt                 |
| Verfügbarkeit    | Eigenverantwortung          | Anbieterabhängig              |
| Wartung          | Eigenleistung               | Oft durch Anbieter übernommen |

## Praktisches Beispiel
Ein Unternehmen betreibt früher 10 physische Server.  
Durch Virtualisierung laufen alle Systeme auf 2 leistungsstarken Hosts.

Zusätzlich werden Lastspitzen über Cloud-Server abgefangen:

```mermaid
graph LR
A[Physische Server früher] --> B[Virtualisierte Hosts]
B --> C[Cloud Erweiterung]
C --> D[Flexible Skalierung]
```

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Nennen Sie Vorteile der Virtualisierung.
- Welche Nachteile entstehen durch Cloud-Nutzung?
- Warum ist Virtualisierung skalierbar?
- Wann ist Virtualisierung wirtschaftlich sinnvoll?

### Antworten auf die typischen Prüfungsfragen
- Vorteile: bessere Ressourcennutzung, Skalierbarkeit, schnelle Bereitstellung  
- Nachteile: Abhängigkeit, Latenzen, eingeschränkte Kontrolle  
- Skalierbarkeit: Ressourcen können dynamisch zugewiesen werden  
- Wirtschaftlich: besonders bei variabler Last und geringer Anfangsinvestition  

## Merksatz
**Virtualisierung spart Ressourcen und erhöht Flexibilität – Cloud verstärkt das, bringt aber Abhängigkeiten mit sich.**