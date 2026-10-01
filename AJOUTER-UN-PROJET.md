# Ajouter un nouveau projet

Tu n'as besoin de modifier **qu'un seul fichier** : `data/projets.js`.
La carte sur la page d'accueil et la page détaillée du projet sont générées automatiquement.

## 1. Préparer les images

Crée un dossier au nom de ton projet dans `assets/img/projets/` :

```
assets/img/projets/
└── robot-suiveur/
    ├── couverture.jpg   ← image de la carte (format paysage, ~1600×900)
    ├── photo1.jpg
    └── photo2.jpg
```

Conseils : JPG ou WebP, moins de 500 Ko par image (compresse-les avec https://squoosh.app).

## 2. Copier le modèle

Ouvre `data/projets.js`, copie ce bloc et colle-le **juste après** `window.PROJETS = [` :

```js
  {
    id: "robot-suiveur",
    titre: "Robot suiveur de ligne",
    resume: "Un robot autonome capable de suivre une ligne noire à 1 m/s.",
    date: "2026-05",
    contexte: "Projet d'école",
    tags: ["C", "Arduino", "Électronique"],
    image: "assets/img/projets/robot-suiveur/couverture.jpg",
    enAvant: false,

    role: "Programmation du microcontrôleur et réglage du PID.",
    equipe: "3 personnes",
    duree: "2 mois",
    sections: [
      { titre: "Contexte", texte: "..." },
      { titre: "Ce que j'ai fait", texte: "..." },
      { titre: "Résultats", texte: "..." },
    ],
    galerie: [
      { src: "assets/img/projets/robot-suiveur/photo1.jpg", legende: "Le prototype final" },
    ],
    liens: [
      { label: "Code source", url: "https://github.com/romcle/robot-suiveur" },
    ],
  },
```

## 3. Les champs expliqués

| Champ | Obligatoire | Description |
|---|---|---|
| `id` | ✅ | Identifiant unique : minuscules, tirets, sans accents ni espaces. Sert dans l'URL (`projet.html?id=robot-suiveur`). |
| `titre` | ✅ | Le nom du projet. |
| `resume` | ✅ | Une phrase affichée sur la carte. |
| `date` | ✅ | Format `AAAA-MM`. Les projets sont triés du plus récent au plus ancien. |
| `contexte` | | Projet d'école, Stage, Perso, Hackathon… |
| `tags` | | Technologies / domaines. Chaque tag devient un **filtre** sur la page d'accueil. |
| `image` | | Image de couverture. Si vide, un visuel avec les initiales est affiché. |
| `enAvant` | | `true` pour afficher le badge « ★ À la une ». |
| `role`, `equipe`, `duree` | | Affichés dans l'encadré à droite de la page projet. |
| `sections` | | Paragraphes de la page projet. Utilise `\n` dans `texte` pour changer de paragraphe. Ajoute autant de sections que tu veux. |
| `galerie` | | Liste d'images avec légende. |
| `liens` | | Boutons vers le code, un rapport PDF, une vidéo… |

## 4. Vérifier

- Ouvre `index.html` dans ton navigateur : la carte doit apparaître.
- Clique dessus pour voir la page détaillée.
- Si la page est blanche : il manque sûrement une **virgule** ou un **guillemet** dans `data/projets.js`
  (appuie sur F12 → onglet *Console* pour voir l'erreur et la ligne).

## 5. Publier

```bash
git add .
git commit -m "Ajout du projet Robot suiveur"
git push
```

Le site en ligne se met à jour en 1 à 2 minutes.

## Astuces pour bien présenter un projet

- **Le résumé** doit dire *quoi* + *un résultat* : « Robot autonome qui suit une ligne à 1 m/s ».
- **Ton rôle** : précise ce que *toi* tu as fait, surtout pour un projet de groupe.
- **Des chiffres** : précision obtenue, temps gagné, note, classement…
- **Une image vaut mieux qu'un paragraphe** : photo du prototype, capture, schéma, courbe de résultats.
