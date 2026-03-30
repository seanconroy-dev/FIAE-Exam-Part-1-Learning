---
# Identity (stable; never change after publishing)
id: ap1-0359
slug: blackbox-whitebox-test

# Display
title: "Black-Box- vs. White-Box-Test"

# Classification / navigation (machine-side)
module: "auftragsabwicklung-und-leistungserbringung"
topics: ["softwareentwicklung", "testen"]
tags: ["blackbox", "whitebox", "softwaretest"]

# Flashcard payload
card:
  type: basic
  question: "Wie unterscheiden sich in der Anwendungsentwicklung Black-Box-Test und White-Box-Test?"
  answer: "Beim Black-Box-Test wird das äußere Verhalten ohne Kenntnis des Codes getestet. Beim White-Box-Test wird die interne Struktur und Logik des Quellcodes überprüft."
  examples: []

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-29"
updated: "2026-03-29"
---

## Black-Box- vs. White-Box-Test

Black-Box- und White-Box-Tests sind zwei grundlegende **Testmethoden in der Softwareentwicklung**.

- Unterschied: **Sicht von außen vs. Blick ins Innere**

## Kernerklärung

### Black-Box-Test

- Tester kennt den Code **nicht**
- Fokus: **Eingaben → erwartete Ausgaben**
- Testet das **sichtbare Verhalten** des Systems

Frage: *Funktioniert es aus Nutzersicht?*

---

### White-Box-Test

- Tester kennt den Code **genau**
- Fokus: **Logik, Algorithmen, Code-Struktur**
- Testet die **interne Funktionsweise**

Frage: *Ist der Code korrekt implementiert?*

---

### Vergleich

| Kriterium        | Black-Box-Test              | White-Box-Test              |
|------------------|----------------------------|-----------------------------|
| Codekenntnis     | ❌ nicht nötig             | ✅ erforderlich              |
| Fokus            | Verhalten (Input/Output)   | interne Logik               |
| Perspektive      | Nutzer                     | Entwickler                  |
| Ziel             | Funktion prüfen            | Codequalität prüfen         |

---

### Zusammenhang

```mermaid
flowchart LR
    A[Benutzer-Eingabe] --> B[Black-Box-Test]
    B --> C[System]
    C --> D[White-Box-Test]
    D --> E[Code / Logik]
```

## Praktisches Beispiel

- **Black-Box-Test**  
  Du gibst falsches Passwort ein → System zeigt Fehlermeldung  
  ✔️ Verhalten wird geprüft  

- **White-Box-Test**  
  Du prüfst den Login-Code → Bedingungen und Sicherheitslogik  
  ✔️ Code wird geprüft  

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Unterschied Black-Box / White-Box?
- Wer verwendet welche Methode?
- Was wird jeweils getestet?

### Antworten auf die typischen Prüfungsfragen
- Black-Box = ohne Codewissen, White-Box = mit Codewissen  
- Black-Box → Tester / Nutzerperspektive  
- White-Box → Entwicklerperspektive  
- Verhalten vs. interne Logik  

## Merksatz

**Black-Box = außen schauen, White-Box = innen prüfen**