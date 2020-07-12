# Xpire
Xpire - Manage your fridge and get rich!

Verfügbar unter: https://felixwaage.github.io/Xpire/

# Version 1

- Manuelles Eingeben des Mindesthaltbarkeitsdatum
  - Erfahrungswerte für Obst und Gemüse
  - Produktsuche
- Erinnerung an verfallende Lebensmittel per Benachrichtigung

# Version 2

- Automatische Erkennung des Mindesthaltbarkeitsdatum
- Scannen des Barcodes zur Produktidentifikation
- Mitgliederverwaltung
- Tipps für die Lagerung automatisch anzeigen
- Status für das Produkt

# Technologien

- PWA
- Frontend: React; Backend: nicht benötigt
- Lokale Entwicklung
- Lokale Datenspeicherung: IndexedDB

# Mockups für die Version 1

Link: https://www.figma.com/proto/8NyI8CqalWfT71Fh6t4z6P/Xpire?node-id=4%3A2&scaling=min-zoom

# Erkenntnisse
## Produkt-API

Es gibt den Service Openfoodfacts: https://world.openfoodfacts.org/
Dieser bietet sowohl eine API als auch die Möglichkeit zur Kopie einer eigenen Datenbank an.

Beispiel: https://world.openfoodfacts.org/api/v0/product/4316268552370.json

## Indexed-DB

Dexie - Library zum Zugriff auf IndexedDB
https://dexie.org/

## Push-Benachrichtigungen aus der PWA

Keine Push-Benachrichtigungen auf Apple geräten. In Chrome trotzdem möglich auch unter Apple.
Link: https://medium.com/better-programming/everything-you-need-to-know-about-pwas-push-notifications-e870bb54e14f

Folgende Bestandteile sind notwendig:
- Push-API (verwendet die Push-Serives der Webbrowser)
- Notifaction-API (erstellen der Nachricht)
- Service Worker (muss im Browser registriert werden)

- Es sind Zustimmungen des Nutzer notwendig (lediglich wenige Zeilen Code)

## Grundlagen PWA mit React

Link:

## App-Icon

- Verschieden große Icons müssen hinterglegt werden
- Testen ist notwendig --> Deployment auf Github-Pages abwarten

## Deployment auf GitHub-Pages
- github-pg branch
- es muss ein neuer productiv build erzeugt werden, damit dies deployed wird
- npm run deploy

## Compatibility

| Feature | Android | iOS |
| ------ | ------ | ------ |
| Icons on Homescreen | Yes | Yes |
| Push-Notifications | Yes | ? |
