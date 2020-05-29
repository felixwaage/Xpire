# Xpire
Xpire - Manage your fridge and get rich!

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
- Mockups für die App (evtl. Verena und Andrea) - in Progress

# Ergebnisse
## Produkt-API

Es gibt den Service Openfoodfacts: https://world.openfoodfacts.org/
Dieser bietet sowohl eine API als auch die Möglichkeit zur Kopie einer eigenen Datenbank an.

Beispiel: https://world.openfoodfacts.org/api/v0/product/4316268552370.json

## Lokale Datenspeicherung

LokiJS - Library zum Zugriff auf IndexedDB
https://github.com/techfort/LokiJS

## Push-Benachrichtigungen aus der PWA

Keine Push-Benachrichtigungen auf Apple geräten. In Chrome trotzdem möglich auch unter Apple.
Link: https://medium.com/better-programming/everything-you-need-to-know-about-pwas-push-notifications-e870bb54e14f

## Grundlagen PWA mit React

Link: 
