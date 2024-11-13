# SportSee - Dashboard de Coaching

Tableau de bord analytique pour visualiser les données sportives des utilisateurs.

## Description

SportSee est une application de coaching qui permet de visualiser les statistiques d'entraînement des utilisateurs, incluant:

-   L'activité quotidienne
-   La durée moyenne des sessions
-   Les performances par type d'activité
-   Le score du jour
-   Les données nutritionnelles clés

## Installation

### Prérequis

-   [API SportSee](https://github.com/OpenClassrooms-Student-Center/SportSee)
-   Node.js (version 18 ou supérieure recommandée)
-   npm ou pnpm

### Étapes d'installation

1. Lancer le projet

-   Forker le repository
-   Cloner le projet votre ordinateur

2. Installer les dépendances

```bash
npm install
```

3. Démarrer le serveur de développement

```bash
npm run dev
```

L'application sera accessible à l'adresse http://localhost:3000

## Structure du Projet

```bash
sportsee/
├── src/
│   ├── app/            # Pages de l'application
│   ├── components/     # Composants réutilisables
│   ├── services/       # Services et appels API
│   ├── assets/         # Images et ressources statiques
│   └── mockedData/     # Données de test
├── public/            # Fichiers publics
└── ...
```

## Technologies Utilisées

-   [React](https://reactjs.org/)
-   [Next.js](https://nextjs.org/)
-   [Recharts](https://recharts.org/en-US/)
-   [Tailwind CSS](https://tailwindcss.com/)
