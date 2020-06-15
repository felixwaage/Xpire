# Xpire
Xpire - Manage your fridge and get rich!

Verfügbar unter: https://felixwaage.github.io/Xpire/ 

# Version 1

- Manuelles Eingeben des Mindesthaltbarkeitsdatum
  - Obst und Gemüse Erfahrungswerte
  - Produktsuche
- Erinnerung an verfallende Lebensmittel

# Version 2

- Automatische Erkennung des Mindesthaltbarkeitsdatum
- Scannen des Barcodes zur Produktidentifikation
- Mitgliederverwaltung
- Tipps für die Lagerung automatisch anzeigen
- Status für das Produkt

# Technologien

- PWA 
- Frontend: React; Backend: NestJS
- Lokale Entwicklung
- lokale Datenspeicherung: JSON-File

# ToDo's - bis 29.05.

- Produktdatenbank (Felix) - done
- JSON-File aus der PWA offline speichern (Fabio & Jonas) - done
- Push-Benachrichtigungen aus der PWA möglich? (Milena & Yvonne) - done
- Grundlagen PWA-Entwicklung mit React (alle) - done
- Logo (Andrea) - done
- [Mockups für die App](https://www.figma.com/proto/8NyI8CqalWfT71Fh6t4z6P/Xpire?node-id=4%3A19&scaling=min-zoom) (Verena und Andrea) - done
- Push-Benachrichtigungen (Yvonne) - in progress
- Http-Requests (Felix) - done
- App-Icon (Milena) - done
- IndexedDB (Fabio & Jonas) - done
- Deployment des Projekts als GitHub-Page (Milena) - done

- hinzufügen eines Produktes bis 19.06. 
  - Verena macht das Frontend
  - Milena & Yvonne & Felix sprechen sich ab
 
 - anlegen der Datenbank bis 19.06. (Jonas & Fabio)
  - "DB-Model" und Implementierung

# Ergebnisse
## Produkt-API

Es gibt den Service Openfoodfacts: https://world.openfoodfacts.org/
Dieser bietet sowohl eine API als auch die Möglichkeit zur Kopie einer eigenen Datenbank an.

Beispiel: https://world.openfoodfacts.org/api/v0/product/4316268552370.json

## Indexed-DB

LokiJS - Library zum Zugriff auf IndexedDB
https://github.com/techfort/LokiJS

- LokiJS hat nichts mit der nativen IndexedDB im Browser zu tun
- LokiJS ist einfach :)!
- Insert --> done
- Die Daten der werden zum aktuellen stand nicht dauerhaft gespeichert

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

## Mockups für die Version 1

Link: https://www.figma.com/proto/8NyI8CqalWfT71Fh6t4z6P/Xpire?node-id=4%3A2&scaling=min-zoom

## App-Icon

- Verschieden große Icons müssen hinterglegt werden
- Testen ist notwendig --> Deployment auf Github-Pages abwarten

## Deployment auf GitHub-Pages
- github-pg branch 
- es muss ein neuer productiv build erzeugt werden, damit dies deployed wird
- npm run deploy

# Implementierung
## ListView
- Liste (MaterialUI)

## nächste Schritte
- delete product 
- show product
- update product
## Add-Product-Page (Verena)
- Produkte hinzufügen

## Datenbank und Datenspeicherung (Jonas & Fabio)
- Datenbankmodel
- Datenzugriffe

## Konzept (Milena, Yvonne, Verena und Felix)

## Seminararbeit (Andrea)


# Compatibility

| Feature | Android | iOS |
| ------ | ------ | ------ |
| Icons on Homescreen | Yes | Yes |
| Push-Notifications | Yes | ? |

