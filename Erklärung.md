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
- CORS-Middleware wird verwendet, um den Zugriff des Frontends auf das Backend zu ermöglichen.

#### API-Routen
Die folgenden Routen werden im RezeptRouter definiert und von den entsprechenden Controller-Funktionen verarbeitet:
- GET /api/rezepte: Ruft alle Rezepte ab.
- GET /api/:id
: Ruft ein bestimmtes Rezept anhand der ID ab.
- POST /api/: Erstellt ein neues Rezept.
PUT /api/rezepte/:id
: Aktualisiert ein bestehendes Rezept basierend auf der ID.
- DELETE /api/:id
: Löscht ein Rezept basierend auf der ID.

#### Installation und Ausführung:

##### Voraussetzungen:
 - Node.js und npm
 - MongoDB
##### Schritte:
- Backend einrichten:
1.  Erstelle eine .env-Datei im Hauptverzeichnis und füge deine MongoDB-URI hinzu:
    ```js
        MONGODB_URI=deine_mongodb_uri
    ```
2. Installiere die Abhängigkeiten:
    ```js
        npm install
    ```
3. Navigiere zu richtigen datei; hier zun src.
4. Starte den Server:
    ```js
        node server.js
        // oder 
        nodemon server.js
    ```

- Frontend einrichten:
 1. Wechsle in das Frontend-Verzeichnis und installiere die Abhängigkeiten:
    ```js
        npm install
    ```