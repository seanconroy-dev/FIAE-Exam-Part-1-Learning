---
# Identity (stable; never change after publishing)
id: ap1-0278
slug: chmod-linux-dateiberechtigungen

# Display
title: "chmod – Dateiberechtigungen in Linux"

# Classification / navigation (machine-side)
module: "Entwickeln, Erstellen und Betreuen von IT_Lösungen"
topics: ["Linux", "Dateisystem", "Berechtigungen"]
tags: ["ap1", "chmod", "linux", "rechte"]

# Flashcard payload
card:
  type: basic       # basic | multi | steps | definition | comparison
  question: "Was bewirkt der Befehl chmod in einem Linux-Betriebssystem und wie wird er verwendet?"
  answer: "chmod dient zum Ändern von Dateiberechtigungen (lesen, schreiben, ausführen) für Benutzer, Gruppe und andere – symbolisch oder oktal."
  examples: ["chmod 770 test.txt", "chmod u+x script.sh"]

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-18"
updated: "2026-03-18"
---

## chmod – Dateiberechtigungen in Linux
Der Befehl **chmod** (change mode) wird verwendet, um die **Zugriffsrechte von Dateien und Verzeichnissen** in Linux/Unix-Systemen zu ändern.

## Kernerklärung

### Grundprinzip
- Rechte werden für drei Gruppen vergeben:
  - **User (u)** – Besitzer  
  - **Group (g)** – Gruppe  
  - **Others (o)** – alle anderen  

- Rechtearten:
  - **r (read)** – lesen  
  - **w (write)** – schreiben  
  - **x (execute)** – ausführen  

### Darstellungsformen

| Schreibweise | Bedeutung |
|-------------|----------|
| Symbolisch  | z. B. `u+r`, `g-w`, `o+x` |
| Oktal       | z. B. `7 7 0` |

### Oktale Werte

| Wert | Bedeutung        | Binär |
|------|-----------------|------|
| 7    | rwx (voll)      | 111  |
| 6    | rw-             | 110  |
| 5    | r-x             | 101  |
| 4    | r--             | 100  |
| 3    | -wx             | 011  |
| 2    | -w-             | 010  |
| 1    | --x             | 001  |
| 0    | ---             | 000  |

```mermaid
flowchart LR
A[Datei] --> B[chmod]
B --> C[User Rechte]
B --> D[Group Rechte]
B --> E[Others Rechte]
```

## Praktisches Beispiel

```bash
chmod 770 test.txt
```

Bedeutung:
- User: rwx  
- Group: rwx  
- Others: ---  

Symbolisch:
```bash
chmod u+rwx,g+rwx,o-rwx test.txt
```

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Was macht chmod?  
- Was bedeuten r, w, x?  
- Unterschied symbolisch vs. oktal?  

### Antworten auf die typischen Prüfungsfragen
- Ändert Dateiberechtigungen  
- Lesen, Schreiben, Ausführen  
- Zwei Darstellungsarten für Rechte  

## Merksatz
chmod steuert, wer was mit einer Datei machen darf.