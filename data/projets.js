/* =========================================================
   TES PROJETS
   ---------------------------------------------------------
   Pour ajouter un projet :
     1. Copie le bloc MODÈLE ci-dessous (de { à },)
     2. Colle-le en haut de la liste window.PROJETS
     3. Remplis les champs
     4. Mets tes images dans  assets/img/projets/<id>/
   Le guide complet est dans AJOUTER-UN-PROJET.md

   ---------------------------- MODÈLE ----------------------------
   {
     id: "mon-projet",                 // unique, minuscules, tirets, sans accents
     titre: "Titre du projet",
     resume: "Une phrase qui donne envie de cliquer.",
     date: "2026-06",                  // AAAA-MM (sert au tri, le plus récent en premier)
     contexte: "Projet d'école",       // Projet d'école, Stage, Perso, Hackathon…
     tags: ["Python", "IA"],           // servent aux filtres de la page d'accueil
     image: "assets/img/projets/mon-projet/couverture.jpg",   // "" = image par défaut
     enAvant: false,                   // true = mis en avant (badge ★)

     // ---- Page détaillée (tout est optionnel) ----
     role: "Ce que TU as fait dans le projet",
     equipe: "Seul / 4 personnes",
     duree: "3 mois",
     sections: [
       { titre: "Contexte", texte: "Le problème de départ." },
       { titre: "Ce que j'ai fait", texte: "Ta démarche, tes choix techniques." },
       { titre: "Résultats", texte: "Chiffres, ce qui marche, ce que tu as appris." },
     ],
     galerie: [
       { src: "assets/img/projets/mon-projet/photo1.jpg", legende: "Légende" },
     ],
     liens: [
       { label: "Code source", url: "https://github.com/..." },
       { label: "Rapport (PDF)", url: "assets/docs/rapport.pdf" },
     ],
   },
   ---------------------------------------------------------------- */

window.PROJETS = [
  {
    id: "exemple-projet",
    titre: "Projet exemple",
    resume: "Ceci est un projet de démonstration. Remplace-le par ton premier vrai projet.",
    date: "2026-06",
    contexte: "Projet d'école",
    tags: ["Python", "Exemple"],
    image: "",
    enAvant: true,

    role: "Conception et développement de l'ensemble du projet.",
    equipe: "4 personnes",
    duree: "3 mois",
    sections: [
      { titre: "Contexte", texte: "Explique ici le problème ou l'objectif du projet." },
      { titre: "Ce que j'ai fait", texte: "Décris ta démarche, les outils utilisés et tes choix.\nCe texte est un 2e paragraphe : dans le fichier, il est séparé du précédent par \\n." },
      { titre: "Résultats", texte: "Mets en avant des résultats concrets et ce que tu en as appris." },
    ],
    galerie: [],
    liens: [
      { label: "Code source", url: "https://github.com/romcle" },
    ],
  },
];
