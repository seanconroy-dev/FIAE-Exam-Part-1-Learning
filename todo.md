```markdown
# 📌 PT Klausur (Schydlo) – 16.04.

## Themen:
- UML Anwendungsfalldiagramm / Use Case
- UML Klassendiagramm
- Pseudocode

---

# 1. UML Anwendungsfalldiagramm (Use Case)

## 🔑 Zweck
Zeigt **was ein System tut** (keine technische Umsetzung!).

## 🔹 Bestandteile
- **Akteur (Actor)** → Nutzer oder externes System  
- **Use Case (Ellipse)** → Funktion (z. B. „Login“)  
- **Systemgrenze** → Rechteck um das System  

## 🔹 Beziehungen
- `<<include>>` → immer enthalten  
- `<<extend>>` → optional  

## 🧠 Beispiel
**Akteur:** Kunde  

**Use Cases:**
- Produkt suchen  
- Bestellen  
- Bezahlen  

👉 „Bezahlen“ kann `<<include>>` „Zahlungsdaten prüfen“ enthalten  

## ⚠️ Typische Fehler
- Technische Details einbauen ❌  
- Nicht aus User-Sicht denken ❌  
- Zu viele Details ❌  

---

# 2. UML Klassendiagramm

## 🔑 Zweck
Zeigt **Struktur des Systems (Klassen & Beziehungen)**

## 🔹 Aufbau einer Klasse
```
-----------------
| Klassenname   |
-----------------
| Attribute     |
-----------------
| Methoden      |
-----------------
```

## 🔹 Beziehungen
- **Assoziation** → normale Verbindung  
- **Aggregation** → loses Teil-Ganzes (◇)  
- **Komposition** → starkes Teil-Ganzes (◆)  
- **Vererbung** → Pfeil nach oben  

## 🔹 Sichtbarkeit
- `+` public  
- `-` private  
- `#` protected  

## 🧠 Beispiel
**Klasse:** Auto  
- Attribute: farbe, geschwindigkeit  
- Methode: fahren()  

**Beziehung:**
- Auto hat Motor → Komposition  

## ⚠️ Typische Fehler
- Methoden fehlen ❌  
- Falsche Pfeile ❌  
- Keine Multiplizitäten (z. B. 1..*, 0..1) ❌  

---

# 3. Pseudocode

## 🔑 Zweck
Algorithmen **verständlich und sprachunabhängig** beschreiben  

## 🔹 Grundstruktur
```
START
Eingabe ...
VERARBEITE ...
AUSGABE ...
END
```

## 🔹 Bedingungen
```
IF Bedingung THEN
   ...
ELSE
   ...
END IF
```

## 🔹 Schleifen

### FOR-Schleife
```
FOR i = 1 TO 10
   ...
END FOR
```

### WHILE-Schleife
```
WHILE Bedingung
   ...
END WHILE
```

## 🧠 Beispiel
```
START
Eingabe zahl
IF zahl > 0 THEN
   Ausgabe "positiv"
ELSE
   Ausgabe "negativ oder null"
END IF
END
```

## ⚠️ Typische Fehler
- Zu nah an echter Programmiersprache ❌  
- Unklare Struktur ❌  
- Fehlende Ein-/Ausgabe ❌  

---

# 🎯 Klausur-Tipps
- Use Case → **User-Sicht denken**
- Klassendiagramm → **Struktur + Beziehungen sauber darstellen**
- Pseudocode → **klar, logisch, sauber eingerückt**
```