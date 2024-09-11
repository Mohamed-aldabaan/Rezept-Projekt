## Rezept-App

###  Übersicht:

Dies ist eine Webanwendung zum Verwalten von Rezepten, die mit einem React-Frontend und einem Express-Backend erstellt wurde. Die Daten werden in einer MongoDB-Datenbank gespeichert. Die Anwendung ermöglicht es, Rezepte hinzuzufügen, zu aktualisieren, anzuzeigen und Details zu einem bestimmten Rezept zu betrachten.

---

### Projektstruktur:
#### Frontend (React)
- React-Router wird verwendet, um durch die verschiedenen Seiten der Anwendung zu navigieren.
- Die Anwendung besteht aus mehreren Seitenkomponenten:
  - Home: Zeigt die Hauptseite an, auf der alle Rezepte aufgelistet sind.
  - RezeptDetails: Zeigt die Details eines ausgewählten Rezepts an.
  - AddRezept: Ermöglicht das Hinzufügen eines neuen Rezepts.
  - UpdateRezept: Ermöglicht das Bearbeiten eines vorhandenen Rezepts.
  - Layout: Stellt das Layout der Anwendung bereit und umschließt die Seiten.

---

#### Backend (Express)
- Express wird verwendet, um eine API bereitzustellen, die mit der MongoDB-Datenbank kommuniziert.
- Die Anwendung verwendet Mongoose, um mit der MongoDB zu interagieren.
- dotenv wird verwendet, um die Umgebungsvariablen zu laden (z.B. MongoDB-Verbindungs-URI).
- 
