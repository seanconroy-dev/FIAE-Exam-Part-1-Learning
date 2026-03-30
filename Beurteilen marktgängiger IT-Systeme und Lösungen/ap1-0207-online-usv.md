---
# Identity (stable; never change after publishing)
id: ap1-0207
slug: online-usv

# Display
title: "Online-USV – Bedeutung"

# Classification / navigation (machine-side)
module: "Beurteilen marktgängiger IT-Systeme und Lösungen"
topics: ["stromversorgung", "usv"]
tags: ["usv", "stromausfall", "online-usv"]

# Flashcard payload
card:
  type: definition
  question: "Wie funktioniert eine Online-USV?"
  answer: "Eine Online-USV versorgt Verbraucher dauerhaft über einen Wechselrichter und erzeugt ständig eine stabile Ausgangsspannung; bei Netzausfall erfolgt keine Umschaltzeit, da die Batterie bereits aktiv eingebunden ist."
  examples: []

# Lifecycle
status: published
created: "2026-03-17"
updated: "2026-03-17"
---

## Online-USV – Bedeutung
Die **Online-USV (USV-Klasse 1)** ist die hochwertigste Form der unterbrechungsfreien Stromversorgung.

- höchste Sicherheit  
- keine Umschaltzeit  
- konstante Stromqualität  

---

## Kernerklärung

### Eigenschaften der Online-USV

- Verbraucher werden **dauerhaft über Wechselrichter** versorgt  
- Netzspannung wird:
  - gleichgerichtet → Batterie  
  - wieder in stabile Wechselspannung umgewandelt  
- **keine Umschaltzeit** bei Stromausfall  
- Batterie ist **immer aktiv eingebunden**

### Vorteile

- Schutz vor:
  - Stromausfall  
  - Unterspannung / Überspannung  
  - Spannungsschwankungen  
  - Frequenzstörungen  
  - elektromagnetischen Einflüssen  

- liefert nahezu **perfekte Sinusspannung**

### Funktionsprinzip

```mermaid
flowchart LR
Netz --> Gleichrichter --> Batterie --> Wechselrichter --> Verbraucher
```

---

## Praktisches Beispiel

- Serverraum / Rechenzentrum:
  - kritische Systeme laufen über **Online-USV**
  - kein Ausfall bei Stromproblemen  

---

## Prüfungsrelevanz (AP1)

Sehr wichtig:

- Unterschied **Offline vs. Online USV**
- Vorteil: **keine Umschaltzeit**
- Einsatzbereiche (kritische Systeme)

---

### Typische Prüfungsfragen

- Was ist der Hauptvorteil einer Online-USV?
- Gibt es eine Umschaltzeit?
- Wovor schützt sie?

---

### Antworten auf die typischen Prüfungsfragen

**Hauptvorteil?**  
→ konstante Versorgung ohne Unterbrechung  

**Umschaltzeit?**  
→ keine  

**Schutz?**  
→ umfassend (alle Störungen)  

---

## Merksatz

**Online-USV: maximale Sicherheit ohne Unterbrechung.**