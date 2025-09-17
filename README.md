# MyContacts_ER

MyContacts_ER est une application web full-stack permettant de gérer un carnet de contacts. Elle est composée d'un client web interactif et d'un serveur API, développés respectivement en JavaScript, HTML et CSS.

## 📦 Structure du projet

Le dépôt est organisé en deux répertoires principaux :

client/ : Contient l'interface utilisateur (UI) de l'application.

server/ : Contient le backend API pour la gestion des contacts.

## 🚀 Prérequis

Node.js (version recommandée : 14.x ou supérieure)

npm ou yarn pour la gestion des dépendances

## ⚙️ Installation
1. Cloner le dépôt
```bash   
git clone https://github.com/Zelyns/MyContacts_ER.git
cd MyContacts_ER
```
3. Installer les dépendances
Pour le client :
```bash
cd client
npm install
```
Pour le serveur :
```bash
cd ../server
npm install
```

## 🧪 Lancer l'application en mode développement
Démarrer le serveur
```bash
cd server
npm start
```
Démarrer le client
```bash
cd ../client
npm start
```

L'application sera accessible à l'adresse http://localhost:3000
.

## 📄 Fonctionnalités

Ajouter, modifier et supprimer des contacts

Recherche rapide de contacts

Interface utilisateur responsive

## 🛠️ Technologies utilisées

Frontend :
- React : bibliothèque JavaScript pour construire des interfaces utilisateur.

- React DOM : rendu des composants React dans le navigateur.

- React Router DOM : gestion de la navigation et des routes côté client.

- React Scripts : scripts et configuration pour un projet créé avec Create React App.

Backend :
-  Node.js : environnement d’exécution JavaScript côté serveur.

- Express : framework pour créer des serveurs web et des API REST.

- Express-session : gestion des sessions côté serveur.

- Body-parser : parse les requêtes HTTP (JSON, formulaire).

- Cors : permet les requêtes cross-origin depuis le frontend.

- Dotenv : gestion des variables d’environnement.
