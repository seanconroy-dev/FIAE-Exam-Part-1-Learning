# FIAE-Exam-Part-1-Learning

Learning materials and resources for preparing for the **AP1 exam (IT professions)**.

Structured learning cards  
Flashcard-based learning  
Exam-focused content

**Live Website:** https://seanconroy-dev.github.io/FIAE-Exam-Part-1-Learning

---

## Preview

![App Preview](https://raw.githubusercontent.com/seanconroy-dev/FIAE-Exam-Part-1-Content/ecb6c01d2154634dff603b5d9bb06090b433d75c/assets/Preview_final.gif)

## Screenshot

![Main Page](https://raw.githubusercontent.com/seanconroy-dev/FIAE-Exam-Part-1-Content/ecb6c01d2154634dff603b5d9bb06090b433d75c/assets/FrontPage.png)

---

# Folder Structure

| Folder | Description |
|--------|--------------|
| [Plannen,Vorbereiten und Durchführen von Arbeitsaufgaben](./Plannen,Vorbereiten%20und%20Durchführen%20von%20Arbeitsaufgaben/) | Planning and execution of IT tasks |
| [Informieren und Beraten von Kunden und Kundinnen](./Informieren%20und%20Beraten%20von%20Kunden%20und%20Kundinnen/) | Customer communication and consulting |
| [Beurteilen marktgängiger IT-Systeme und Lösungen](./Beurteilen%20marktgängiger%20IT-Systeme%20und%20Lösungen/) | Analysis and evaluation of IT systems |
| [Entwickeln, Erstellen und Betreuen von IT_Lösungen](./Entwickeln,%20Erstellen%20und%20Betreuen%20von%20IT_Lösungen/) | Development and maintenance of IT solutions |
| [Qualitätssichernde Maßnahmen](./Qualitätssichernde%20Maßnahmen/) | Quality assurance and management |
| [IT-Sicherheit und Datenschutz, Ergonomie](./IT-Sicherheit%20und%20Datenschutz,%20Ergonomie/) | IT security, data protection, and ergonomics |
| [Auftragsabschluss und Leistungenerbringen](./Auftragsabschluss%20und%20Leistungenerbringen/) | Project completion and service delivery |

---

# Frontmatter Template

Each learning card uses a fixed YAML frontmatter.  
This schema is stable and must not be changed after publication.

```yaml
# Identity (stable; never change after publishing)
id: ap1-0000
slug: ""

# Display
title: ""

# Classification / navigation (machine-side)
module: ""          # must match one top-level folder name exactly
topics: []          # e.g. ["Netzwerke", "OSI"]
tags: []            # e.g. ["exam-relevant", "definition"]

# Flashcard payload
card:
  type: basic       # basic | multi | steps | definition | comparison
  question: ""
  answer: ""
  examples: []      # optional

# Lifecycle
status: draft       # draft | published | deprecated
created: "2026-03-10"
updated: "2026-03-10"
```

The actual learning content follows after the frontmatter.

---

# File Name Convention

Files follow a strict naming pattern:

    <module-folder>/ap1-0001-<slug>.md

Example:

    Beurteilen marktgängiger IT-Systeme und Lösungen/ap1-0071-usv-aufgaben.md

Rules:

- The **ID in the filename must match the ID in the frontmatter**
- The **slug should be short, unique, and lowercase**
- Words must be separated by **hyphens**

---

# Note Style Guidelines

The repository has evolved over time.

- **Frontmatter schema is immutable**
- **Existing notes must not be reformatted**, except to fix factual errors
- **Notes before `ap1-0072` may use an older format**
- **New notes must follow the current structure**

---

# Structure of New Notes

New notes should follow this structure:

    ## Overview
    ## Core Explanation
    ## Practical Example
    ## Exam Relevance (AP1)
    ### Typical Exam Questions
    ### Answers to Typical Questions
    ## Key Takeaway

This structure supports:

- fast revision
- conceptual understanding
- preparation for typical exam questions

---

# Flashcard Rules

The flashcard in the frontmatter is used for **active recall (e.g., Anki)**.

Therefore:

- `card.answer` must be **short and exam-ready**
- longer explanations belong **only in the note body**
- examples can optionally be added in `examples`

Goal:

    Flashcard = fast recall  
    Note content = understanding and context

---

# Style Guidelines

When writing new notes:

- Language: **German**
- Style: **precise, neutral, exam-oriented**
- No conversational tone
- Prefer **short paragraphs and bullet points**
- Use tables for **comparisons or classifications**
- Use **Mermaid diagrams** for processes and relationships

Goal: a **clear, structured, and repeatable learning system for the AP1 exam**
