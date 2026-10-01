/* =========================================================
   TES INFORMATIONS PERSONNELLES
   ---------------------------------------------------------
   Modifie uniquement les valeurs entre guillemets.
   Laisse un champ vide ("") pour le masquer sur le site.
   ========================================================= */

window.PROFIL = {
  nom: "Romain Clerc",
  titre: "Élève ingénieur",                  // ex : "Élève ingénieur en mécanique"
  accroche: "Je conçois, je teste et je documente des projets techniques. Voici une sélection de ce que j'ai réalisé.",
  photo: "",                                   // ex : "assets/img/photo.jpg"
  localisation: "France",

  aPropos: [
    "Écris ici un premier paragraphe sur toi : ta formation, ton école, ta spécialité.",
    "Un deuxième paragraphe : ce qui te motive, le type de stage / d'emploi que tu recherches.",
  ],

  // Compétences regroupées par catégorie (ajoute ou supprime librement)
  competences: {
    "Langages": ["Python", "C", "MATLAB"],
    "Outils": ["Git", "SolidWorks", "Linux"],
    "Domaines": ["Mécanique des fluides", "Intelligence artificielle"],
  },

  // Liens de contact (laisse "" pour masquer)
  contact: {
    email: "romainclerc618@gmail.com",
    github: "https://github.com/romcle",
    linkedin: "",                              // ex : "https://www.linkedin.com/in/ton-profil"
    cv: "",                                    // ex : "assets/cv.pdf"
  },
};
