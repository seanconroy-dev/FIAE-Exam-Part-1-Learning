---
# Identity (stable; never change after publishing)
id: ap1-0114
slug: cpu-cache-grundlagen

# Display
title: "CPU-Cache – Grundlagen"

# Classification / navigation (machine-side)
module: "hardware"
topics: ["cpu", "speicher"]
tags: ["cache", "l1", "l2", "l3"]

# Flashcard payload
card:
  type: definition
  question: "Erläutere den Begriff des CPU-Caches."
  answer: "Der CPU-Cache ist ein schneller Zwischenspeicher direkt im Prozessor, der häufig benötigte Daten speichert, um Zugriffszeiten zu verkürzen. Er besteht aus mehreren Ebenen (L1, L2, L3) mit unterschiedlicher Größe und Geschwindigkeit."
  examples: []

# Lifecycle
status: draft
created: "2026-03-17"
updated: "2026-03-17"
---

## CPU-Cache – Grundlagen

Der **CPU-Cache** ist ein extrem schneller Speicher im Prozessor:

- dient als **Zwischenspeicher**  
- verkürzt Zugriffszeiten auf Daten  
- entlastet den Arbeitsspeicher (RAM)  

---

## Kernerklärung

Der CPU-Cache speichert häufig benötigte Daten und Befehle direkt im Prozessor, sodass diese schneller verfügbar sind als aus dem RAM.

### Cache-Level

| Level | Eigenschaften |
|---|---|
| L1 | sehr schnell, sehr klein |
| L2 | langsamer als L1, größer |
| L3 | am langsamsten, aber am größten |

- **L1-Cache**:
  - schnellster Zugriff  
  - kleinste Kapazität  

- **L2-Cache**:
  - mittlere Geschwindigkeit  
  - größere Kapazität  

- **L3-Cache**:
  - größte Kapazität  
  - langsamster Cache (aber schneller als RAM)  

---

### Funktionsprinzip

```mermaid
flowchart LR
CPU --> L1
L1 --> L2
L2 --> L3
L3 --> RAM
RAM --> Speicher
```

- Daten werden zuerst im **L1** gesucht  
- dann **L2 → L3 → RAM**  
- Ziel: möglichst selten auf langsamen RAM zugreifen  

---

## Praktisches Beispiel

- Programm startet:
  - häufig genutzte Befehle landen im Cache  
- CPU greift schneller darauf zu → höhere Performance  

---

## Prüfungsrelevanz (AP1)

Wichtig:

- Definition des CPU-Caches  
- Unterschiede der Cache-Level (L1, L2, L3)  
- Zusammenhang mit Performance  

---

### Typische Prüfungsfragen

- Was ist der CPU-Cache?
- Warum verbessert er die Leistung?
- Welche Cache-Level gibt es?

---

### Antworten auf die typischen Prüfungsfragen

**Was ist das?**  
→ schneller Zwischenspeicher in der CPU  

**Warum schneller?**  
→ kürzere Zugriffszeiten als RAM  

**Welche Level?**  
→ L1 (schnell), L2 (mittel), L3 (groß)  

---

## Merksatz

**Je näher an der CPU, desto schneller – aber auch kleiner (L1 → L3).**