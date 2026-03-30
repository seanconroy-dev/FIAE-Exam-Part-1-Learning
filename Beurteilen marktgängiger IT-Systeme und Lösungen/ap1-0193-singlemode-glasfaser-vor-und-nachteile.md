---
# Identity (stable; never change after publishing)
id: ap1-0193
slug: singlemode-glasfaser-vor-und-nachteile

# Display
title: "Vor- und Nachteile von Singlemode-Glasfasern"

# Classification / navigation (machine-side)
module: "Beurteilen marktgängiger IT-Systeme und Lösungen"
topics: ["netzwerktechnik", "glasfaser", "physikalische-uebertragung"]
tags: ["glasfaser", "singlemode", "lichtwellenleiter"]

# Flashcard payload
card:
  type: basic
  question: "Nenne Vor- und Nachteile von Singlemode-Glasfasern."
  answer: "Vorteile: geringe Signaldämpfung, kaum Laufzeitverschiebungen, große Übertragungsdistanzen, hohe Bandbreiten. Nachteile: teurere Laser zur Lichteinspeisung, aufwendigere Herstellung der Glasfasern, hohe Präzision beim Verbinden (Stecker/Spleißen) erforderlich."
  examples: []

# Lifecycle
status: published
created: "2026-03-14"
updated: "2026-03-16"
---

## Vor- und Nachteile von Singlemode-Glasfasern

**Singlemode-Glasfasern** werden vor allem in **Weitverkehrsnetzen und Backbone-Verbindungen** eingesetzt.  
Durch ihren **sehr kleinen Faserkern** wird nur ein Lichtmodus übertragen, wodurch Signalverzerrungen stark reduziert werden.

Das ermöglicht **sehr hohe Bandbreiten und große Reichweiten**, bringt aber auch **höhere Kosten und Anforderungen bei Installation und Technik** mit sich.

---

## Kernerklärung

Singlemode-Glasfasern besitzen einen **sehr kleinen Kern (ca. 9 µm)**. Dadurch wird das Licht nahezu geradlinig übertragen.

### Vorteile

- **geringe Dämpfung des Signals**
- **kaum Laufzeitverschiebungen (Dispersion)**
- **sehr große Übertragungsdistanzen möglich**
- **sehr hohe Bandbreiten**

### Nachteile

- **teure Laser** für die Lichteinspeisung erforderlich
- **aufwendigere Herstellung der Glasfasern**
- **hohe Präzision beim Verbinden** der Fasern (Stecker oder Spleißen)

---

## Praktisches Beispiel

Singlemodefasern werden typischerweise eingesetzt bei:

| Einsatzbereich | Grund |
|---|---|
| Internet-Backbone | sehr große Entfernungen |
| Provider-Netze | hohe Bandbreiten |
| Glasfaseranschlüsse (FTTH) | stabile Langstreckenübertragung |

```mermaid
flowchart LR
A[Singlemode Glasfaser] --> B[Sehr kleiner Kern]
B --> C[Ein Lichtmodus]
C --> D[Geringe Dispersion]
D --> E[Große Reichweite]
```

---

## Prüfungsrelevanz (AP1)

Dieses Thema gehört zu den **Grundlagen der physikalischen Netzwerktechnik**.

Typische Prüfungsaufgaben:

- **Vor- und Nachteile von Singlemodefasern aufzählen**
- Unterschiede zwischen **Singlemode und Multimode**
- Zusammenhang zwischen **Kerndurchmesser und Reichweite**

---

### Typische Prüfungsfragen

- Warum erreicht Singlemode größere Entfernungen als Multimode?
- Welche Nachteile haben Singlemode-Glasfasern?
- Warum sind Singlemode-Verbindungen oft teurer?

---

### Antworten auf die typischen Prüfungsfragen

**Warum größere Reichweite?**  
→ Durch den kleinen Kern wird nur **ein Lichtmodus** übertragen, wodurch **kaum Dispersion entsteht**.

**Welche Nachteile gibt es?**  
→ **Teure Laser**, **aufwendige Herstellung**, **hohe Präzision beim Verbinden notwendig**.

**Warum sind sie teurer?**  
→ Die **Sende-/Empfangstechnik (Laser)** und die **Installation** sind komplexer.

---

## Merksatz

**Singlemode: große Reichweite und hohe Bandbreite – dafür teurer und technisch anspruchsvoller.**