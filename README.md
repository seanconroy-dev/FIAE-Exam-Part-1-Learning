# Ap1-Learning

Lernmaterialien und Ressourcen zur Vorbereitung auf die **AP1-Prüfung (IT-Berufe)**.

Dieses Repository enthält strukturierte Lernkarten und ergänzende Erklärungen für die Inhalte der Abschlussprüfung Teil 1.

🌐 **Live-Website:** [https://seanconroy-dev.github.io/Ap1-Learning](https://seanconroy-dev.github.io/Ap1-Learning)

---

# Ordnerstruktur

| Ordner | Beschreibung |
|--------|--------------|
| [Plannen,Vorbereiten und Durchführen von Arbeitsaufgaben](./Plannen,Vorbereiten%20und%20Durchführen%20von%20Arbeitsaufgaben/) | Planung und Durchführung von IT-Arbeitsaufgaben |
| [Informieren und Beraten von Kunden und Kundinnen](./Informieren%20und%20Beraten%20von%20Kunden%20und%20Kundinnen/) | Kundenkommunikation und Beratung |
| [Beurteilen marktgängiger IT-Systeme und Lösungen](./Beurteilen%20marktgängiger%20IT-Systeme%20und%20Lösungen/) | Analyse und Bewertung von IT-Systemen |
| [Entwickeln, Erstellen und Betreuen von IT_Lösungen](./Entwickeln,%20Erstellen%20und%20Betreuen%20von%20IT_Lösungen/) | Entwicklung und Betreuung von IT-Lösungen |
| [Qualitätssichernde Maßnahmen](./Qualitätssichernde%20Maßnahmen/) | Qualitätssicherung und -management |
| [IT-Sicherheit und Datenschutz, Ergonomie](./IT-Sicherheit%20und%20Datenschutz,%20Ergonomie/) | IT-Sicherheit, Datenschutz und Ergonomie |
| [Auftragsabschluss und Leistungenerbringen](./Auftragsabschluss%20und%20Leistungenerbringen/) | Auftragsabschluss und Leistungserbringung |

---

# Frontmatter Template

Jede Lernkarte verwendet ein festes YAML-Frontmatter.  
**Dieses Schema ist stabil und darf nach Veröffentlichung nicht verändert werden.**

    ---
    # Identity (stable; never change after publishing)
    id: ap1-0000
    slug: ""

    # Display
    title: ""

    # Classification / navigation (machine-side)
    module: ""          # must match one top-level folder name exactly
    topics: []          # e.g. ["Netzwerke", "OSI"]
    tags: []            # e.g. ["prüfungsrelevant", "definition"]

    # Flashcard payload
    card:
      type: basic       # basic | multi | steps | definition | comparison
      question: ""
      answer: ""
      examples: []      # optional; see example below

    # Lifecycle
    status: draft       # draft | published | deprecated
    created: "2026-03-10"
    updated: "2026-03-10"
    ---

Nach dem Frontmatter folgt der eigentliche Lerninhalt.

---

# File Name Convention

Dateien folgen einem festen Namensschema:

    <module-folder>/ap1-0001-<slug>.md

Beispiel:

    Beurteilen marktgängiger IT-Systeme und Lösungen/ap1-0071-usv-aufgaben.md

Regeln:

- Die **ID im Dateinamen muss der ID im Frontmatter entsprechen**
- Der **Slug sollte kurz, eindeutig und kleingeschrieben sein**
- Wörter werden mit **Bindestrichen getrennt**

---

# Note Style Guidelines

Das Repository hat sich im Laufe der Zeit weiterentwickelt.

- **Frontmatter-Schema ist unveränderlich**
- **Bestehende Notizen dürfen nicht nachträglich umformatiert werden**, außer zur Korrektur fachlicher Fehler
- **Notizen vor `ap1-0072` können ein älteres Format besitzen**
- **Neue Notizen müssen dem aktuellen Stil folgen**

---

# Inhaltliche Struktur neuer Notizen

Neue Notizen sollten folgende Struktur verwenden:

    ## Überblick
    ## Kernerklärung
    ## Praktisches Beispiel
    ## Prüfungsrelevanz (AP1)
    ### Typische Prüfungsfragen
    ### Antworten auf die typischen Prüfungsfragen
    ## Merksatz

Diese Struktur unterstützt:

- schnelles Wiederholen
- Verständnis der Konzepte
- Vorbereitung auf typische Prüfungsfragen

---

# Flashcard-Regeln

Die Flashcard im Frontmatter dient dem **aktiven Lernen (z. B. mit Anki)**.

Deshalb gilt:

- `card.answer` muss **kurz und prüfungstauglich** sein
- längere Erklärungen gehören **nur in den Body der Notiz**
- Beispiele können optional im Feld `examples` ergänzt werden

Ziel:

    Flashcard = schnelle Wiederholung
    Notiztext = Verständnis und Kontext

---

# Stilrichtlinien

Beim Schreiben neuer Notizen gelten folgende Regeln:

- Sprache: **Deutsch**
- Stil: **präzise, neutral, prüfungsorientiert**
- Keine Umgangssprache oder Konversationsstil
- **kurze Absätze und Stichpunkte bevorzugen**
- Tabellen bei **Vergleichen oder Klassifikationen**
- **Mermaid-Diagramme**, wenn Prozesse oder Zusammenhänge dargestellt werden können

Ziel ist ein **klar strukturiertes, leicht wiederholbares Lernsystem für die AP1-Prüfung**.
