# Ajouter un nouveau projet

Tu n'as besoin de modifier **qu'un seul fichier** : `data/projets.js`.
La carte sur la page d'accueil et la page détaillée du projet sont générées automatiquement.

## 1. Préparer les images

Crée un dossier au nom de ton projet dans `assets/img/projets/` :

```
assets/img/projets/
└── robot-suiveur/
    ├── cover.jpg   ← image de la carte (format paysage, ~1600×900)
    ├── photo1.jpg
    └── photo2.jpg
```

Conseils : JPG ou WebP, moins de 500 Ko par image (compresse-les avec https://squoosh.app).

## 2. Copier le modèle

Ouvre `data/projets.js`, copie ce bloc et colle-le **juste après** `window.PROJETS = [` :

```js
  {
    id: "robot-suiveur",
    titre: "Line-following robot",
    resume: "An autonomous robot that follows a black line at 1 m/s.",
    date: "2026-05",
    periode: "",
    contexte: "School project",
    tags: ["C", "Arduino", "Electronics"],
    image: "assets/img/projets/robot-suiveur/cover.jpg",
    enAvant: false,

    role: "Microcontroller programming and PID tuning.",
    equipe: "Team of 3",
    duree: "2 months",
    sections: [
      { titre: "Context", texte: "..." },
      { titre: "What I did", texte: "..." },
      { titre: "Results", texte: "..." },
    ],
    galerie: [
      { src: "assets/img/projets/robot-suiveur/photo1.jpg", legende: "The final prototype" },
    ],
    liens: [
      { label: "Source code", url: "https://github.com/romcle/robot-suiveur" },
    ],
  },
```

## 3. Les champs expliqués

Le site est en anglais : écris le contenu de tes projets en anglais.

| Champ | Obligatoire | Description |
|---|---|---|
| `id` | ✅ | Identifiant unique : minuscules, tirets, sans accents ni espaces. Sert dans l'URL (`projet.html?id=robot-suiveur`). |
| `titre` | ✅ | Le nom du projet. |
| `resume` | ✅ | Une phrase affichée sur la carte. |
| `date` | ✅ | Format `AAAA-MM`. Les projets sont triés du plus récent au plus ancien. |
| `periode` | | Texte affiché à la place de la date, ex. `"2025 – 2026"` ou `"Jun. – Jul. 2026"`. |
| `contexte` | | School project, Internship, Personal, Hackathon… |
| `tags` | | Technologies / domaines. Chaque tag devient un **filtre** sur la page d'accueil. |
| `image` | | Image de couverture. Si vide, un visuel avec les initiales est affiché. |
| `enAvant` | | `true` pour afficher le badge « ★ Featured ». |
| `role`, `equipe`, `duree` | | Affichés dans l'encadré à droite de la page projet. |
| `sections` | | Paragraphes de la page projet. Utilise `\n` dans `texte` pour changer de paragraphe. Ajoute autant de sections que tu veux. |
| `galerie` | | Liste d'images avec légende. |
| `liens` | | Boutons vers le code, un rapport PDF, une vidéo… |

> 💡 Une section dont le texte commence par **`À COMPLÉTER`** est **masquée** sur le site. Pratique pour préparer un projet petit à petit sans rien publier d'inachevé.

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
