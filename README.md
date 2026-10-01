# Portfolio

Site portfolio statique (HTML / CSS / JavaScript, sans installation ni build), prêt à être publié gratuitement avec **GitHub Pages**.

## Structure

```
portfolio/
├── index.html              Page d'accueil (accueil, à propos, projets, contact)
├── projet.html             Page détaillée d'un projet (générée automatiquement)
├── data/
│   ├── profil.js           ✏️ Tes infos : nom, présentation, compétences, contacts
│   └── projets.js          ✏️ Tes projets (+ le MODÈLE à copier)
├── assets/
│   ├── css/style.css       Styles (change --accent pour la couleur principale)
│   ├── js/main.js          Logique d'affichage
│   └── img/projets/        Images de tes projets (un dossier par projet)
└── AJOUTER-UN-PROJET.md    📘 Guide pas à pas pour ajouter un projet
```

**Tu modifies uniquement les fichiers du dossier `data/`** (et tu ajoutes tes images).

## Voir le site en local

Double-clique sur `index.html`, il s'ouvre dans ton navigateur. C'est tout.

## Ajouter un projet

Voir **[AJOUTER-UN-PROJET.md](AJOUTER-UN-PROJET.md)**.

## Mettre le site en ligne (GitHub Pages)

1. Sur GitHub, va dans **Settings → Pages**.
2. *Source* : **Deploy from a branch**, branche `main`, dossier `/ (root)` → **Save**.
3. Après 1 à 2 minutes, le site est disponible à l'adresse `https://romcle.github.io/portfolio/`.

Fonctionnalités : thème clair / sombre, filtres par technologie, responsive mobile, pages projet avec galerie et liens.
