---
# Identity (stable; never change after publishing)
id: ap1-0206
slug: standby-offline-usv

# Display
title: "Standby-/Offline-USV – Bedeutung"

# Classification / navigation (machine-side)
module: "Beurteilen marktgängiger IT-Systeme und Lösungen"
topics: ["stromversorgung", "usv"]
tags: ["usv", "stromausfall", "hardware"]

# Flashcard payload
card:
  type: definition
  question: "Was bedeutet der Begriff Standby- oder Offline-USV?"
  answer: "Eine Standby-/Offline-USV versorgt Geräte im Normalbetrieb direkt aus dem Netz und schaltet bei Stromausfall mit kurzer Verzögerung (ca. 4–10 ms) auf Batterie um; sie schützt nur begrenzt vor Spannungsschwankungen."
  examples: []

# Lifecycle
status: published
created: "2026-03-17"
updated: "2026-03-17"
---

## Standby-/Offline-USV – Bedeutung

Eine **USV (unterbrechungsfreie Stromversorgung)** schützt IT-Systeme vor Stromausfällen.

Die einfachste Variante ist die:

- **Standby- bzw. Offline-USV**

---

## Kernerklärung

### Eigenschaften der Standby-/Offline-USV

- Normalbetrieb:
  - Geräte werden **direkt vom Stromnetz** versorgt  
- Bei Stromausfall:
  - Umschaltung auf **Batteriebetrieb**  
- Umschaltzeit:
  - ca. **4–10 ms**  

### Einschränkungen

- schützt nur gegen:
  - Stromausfälle  
  - kurze Spannungsschwankungen  
- schützt **nicht zuverlässig** gegen:
  - Unterspannung  
  - Überspannung  
  - Spannungsspitzen  

### Funktionsprinzip

```mermaid
flowchart LR
Netz -->|Normalbetrieb| Verbraucher
Netz --> USV
USV -->|bei Ausfall| Verbraucher
```

---

## Praktisches Beispiel

- Heim-PC mit günstiger USV:
  - Bei Stromausfall bleibt der PC kurzzeitig an  
  - Zeit zum **sicheren Herunterfahren**  

---

## Prüfungsrelevanz (AP1)

Wichtig:

- Unterschied zwischen **Offline-, Line-Interactive- und Online-USV**
- Umschaltzeit verstehen
- Einschränkungen kennen

---

### Typische Prüfungsfragen

- Wie funktioniert eine Offline-USV?
- Wie lange dauert die Umschaltung?
- Welche Schutzwirkung hat sie?

---

### Antworten auf die typischen Prüfungsfragen

**Funktionsweise?**  
→ Netzbetrieb + Umschaltung auf Batterie  

**Umschaltzeit?**  
→ ca. 4–10 ms  

**Schutz?**  
→ begrenzt (v. a. gegen Stromausfall)  

---

## Merksatz

**Offline-USV: einfach, günstig – aber nur begrenzter Schutz.**