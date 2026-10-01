/* =========================================================
   TES INFORMATIONS PERSONNELLES
   ---------------------------------------------------------
   Modifie uniquement les valeurs entre guillemets.
   Laisse un champ vide ("") pour le masquer sur le site.
   ========================================================= */

window.PROFIL = {
  nom: "Romain Clerc",
  titre: "Robotics & Mechatronics engineering student · SeaTech",
  accroche: "Curious and hands-on, I enjoy turning theory into working systems, from IoT tools to prototypes.",
  photo: "",                                   // ex : "assets/img/photo.jpg"
  localisation: "Toulon, France",

  // Bandeau de disponibilité affiché en haut de la page ("" pour le masquer)
  disponibilite: "Looking for an internship · April 27 – August 26, 2027",

  aPropos: [
    "I'm a second-year engineering student in Robotics & Mechatronics at SeaTech (Toulon), after two years of intensive Maths & Physics preparatory classes (CPGE MPSI/MP) at Lycée Carnot in Dijon.",
    "I like projects where software meets hardware: during my internship at Watteco I built a Java tool to configure LoRaWAN sensors, and in my first-year project I designed a remote-controlled release system for a firefighting “water drop”.",
    "I'm looking for an internship from April 27 to August 26, 2027 in robotics, mechatronics or embedded / IoT systems.",
  ],

  // Compétences regroupées par catégorie (ajoute ou supprime librement)
  competences: {
    "Programming": ["Java", "Python", "C", "BASIC"],
    "Engineering tools": ["3DEXPERIENCE (CAD)", "ROS", "MATLAB / Simulink"],
    "IoT": ["LoRaWAN", "JSON"],
    "Languages": ["French (native)", "English C1 · TOEIC 985/990"],
  },

  // Parcours (formation + expériences), du plus récent au plus ancien
  parcours: [
    { periode: "2025 – 2028", titre: "Engineering degree – Robotics & Mechatronics", lieu: "SeaTech, La Garde" },
    { periode: "Jun. – Jul. 2026", titre: "IoT Software Development Intern", lieu: "Watteco, La Seyne-sur-Mer" },
    { periode: "2023 – 2025", titre: "Intensive Maths & Physics classes (CPGE MPSI/MP)", lieu: "Lycée Carnot, Dijon" },
    { periode: "2020 – 2023", titre: "French Baccalauréat – high honours", lieu: "Lycée Sainte-Marie, Lons-le-Saunier" },
  ],

  // Centres d'intérêt (une ligne chacun)
  interets: [
    "Climbing — outdoor crags, route setting at my former club",
    "Aviation — BIA aeronautics certificate, trial flight, A320 simulator",
    "Running, skiing, hiking",
  ],

  // Liens de contact (laisse "" pour masquer)
  contact: {
    email: "romain_clerc@icloud.com",
    github: "https://github.com/romcle",
    linkedin: "https://www.linkedin.com/in/romainclercseatech/",
    cv: "assets/cv/Romain_Clerc_CV_EN.pdf",
  },
};
