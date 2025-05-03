# ☕ **Bean**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## 📚 **Table des matières**

- [✨ Présentation](#-présentation)
- [🛠️ Stack Technique](#️-stack-technique)
- [📸 Aperçu](#-aperçu)
- [🚀 Lancer localement](#-lancer-localement)
- [📋 Fonctionnalités principales](#-fonctionnalités-principales)
- [⚠️ Remarque](#️-remarque)

---

## ✨ **Présentation**

Une application moderne pour gérer les commandes d'un **coffee shop** ☕, offrant une expérience utilisateur fluide, intuitive et rapide. Les utilisateurs peuvent parcourir le menu, ajouter des articles à leur panier, personnaliser leurs choix, puis passer à la caisse.

---

## 🛠️ **Stack Technique**

- **Frontend** : React.js
- **Backend** : Node.js + Express.js
- **Base de données** : MongoDB
- **Paiement** : Stripe API (ou autre service)

---

## 📸 **Aperçu**

> (https://bean-cwax.vercel.app)

---

## 🚀 **Lancer localement**

```bash
# 1. Cloner le dépôt
git clone https://github.com/Sara-Mediouni/Bean.git
# 2. Accéder au projet
cd bean

# 3. Installer les dépendances
cd frontend && npm install
cd backend && npm install
cd admin && npm install
# 4. Configurer le backend
Créer un fichier `.env` dans `/backend` avec :
- MONGO_URI = votre URI MongoDB
- STRIPE_API_KEY = votre clé API Stripe
- JWT_SECRET = votre clé secrète JWT

# 5. Lancer l'application
# Démarrer backend
nodemon server

# Démarrer frontend (dans un autre terminal)
npm run dev
---
```

## 📋 Fonctionnalités principales
 -☕Parcourir un menu de boissons.

 -🛒 Ajouter des articles au panier, personnaliser les tailles, garnitures, etc.

 -💳 Passer à la caisse via un système de paiement sécurisé.

 -🏷️ Confirmation et historique des commandes.

 -📊 Visualiser les informations de la commande avant de finaliser.

 ## ⚠️ Remarque
MongoDB est nécessaire pour stocker les informations sur les produits et les utilisateurs.

Stripe est utilisé pour le système de paiement. Vous pouvez remplacer cette API par un autre service de paiement selon vos besoins.

Assurez-vous d'avoir bien configuré votre fichier .env pour que l'application fonctionne correctement.
