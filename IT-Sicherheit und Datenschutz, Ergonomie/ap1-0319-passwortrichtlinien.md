---
# Identity (stable; never change after publishing)
id: ap1-0319
slug: "passwortrichtlinien"

# Display
title: "Sichere Passwortrichtlinien"

# Classification / navigation (machine-side)
module: "IT-Sicherheit und Datenschutz, Ergonomie"
topics: ["passwort", "authentifizierung", "sicherheit"]
tags: ["ap1", "grundlagen", "richtlinien"]

# Flashcard payload
card:
  type: basic
  question: "Welche Kriterien muss eine sichere Passwortrichtlinie erfüllen?"
  answer: "Mindestlänge, Komplexität (Groß-/Kleinbuchstaben, Zahlen, Sonderzeichen), keine einfachen Begriffe, regelmäßige Änderung, Begrenzung von Loginversuchen und optional MFA."
  examples: []

# Lifecycle
status: published       # draft | published | deprecated
created: "2026-03-27"
updated: "2026-03-27"
---

## Sichere Passwortrichtlinien
Eine sichere Passwortrichtlinie definiert Regeln zur Erstellung und Nutzung von Passwörtern, um unbefugten Zugriff auf Systeme zu verhindern.

Sie ist ein zentraler Bestandteil der IT-Sicherheit.

## Kernerklärung

### Wichtige Kriterien

- **Mindestlänge:** z. B. 10–15 Zeichen  
- **Komplexität:** Kombination aus  
  - Groß- und Kleinbuchstaben  
  - Zahlen  
  - Sonderzeichen  
- **Keine einfachen Inhalte:**  
  - keine Namen oder Standardbegriffe (z. B. „meyer2012“)  
- **Regelmäßige Änderung:** alle 30–90 Tage  
- **Keine Wiederverwendung alter Passwörter**  
- **Loginversuche begrenzen:** z. B. max. 3 Versuche pro Minute  
- **Kontosperrung:** bei zu vielen Fehlversuchen (z. B. 24 Stunden)  
- **MFA (Multi-Faktor-Authentifizierung):** optional zusätzlich  

### Ziel der Richtlinie

| Ziel                | Bedeutung |
|---------------------|----------|
| Schutz vor Angriffen | Verhindert Brute-Force und Erraten |
| Zugriffskontrolle    | Nur berechtigte Nutzer erhalten Zugang |
| Datensicherheit      | Schutz sensibler Informationen |

```mermaid
flowchart LR
    A[Starkes Passwort] --> B[Schutz vor Zugriff]
    B --> C[Datensicherheit]
```

## Praktisches Beispiel
Ein Unternehmen verlangt:

- mindestens 12 Zeichen  
- Mischung aus Buchstaben, Zahlen und Sonderzeichen  
- Sperrung nach 3 Fehlversuchen  

Ergebnis: deutlich erhöhte Sicherheit gegenüber einfachen Passwörtern.

## Prüfungsrelevanz (AP1)

### Typische Prüfungsfragen
- Welche Anforderungen gibt es an sichere Passwörter?  
- Warum sind Passwortrichtlinien wichtig?  

### Antworten auf die typischen Prüfungsfragen
- Länge, Komplexität, keine einfachen Begriffe  
- Begrenzung von Loginversuchen  
- regelmäßige Änderung und MFA  

## Merksatz
**Ein sicheres Passwort ist lang, komplex und wird durch zusätzliche Schutzmaßnahmen ergänzt.**