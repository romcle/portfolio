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
     id: "my-project",                 // unique, minuscules, tirets, sans accents
     titre: "Project title",
     resume: "One sentence that makes people want to click.",
     date: "2026-06",                  // AAAA-MM (sert au tri, le plus récent en premier)
     periode: "",                      // optionnel : texte affiché à la place de la date, ex "2025 – 2026"
     contexte: "School project",       // School project, Internship, Personal, Hackathon…
     tags: ["Python", "Robotics"],     // servent aux filtres de la page d'accueil
     image: "assets/img/projets/my-project/cover.jpg",   // "" = image par défaut
     enAvant: false,                   // true = mis en avant (badge ★)

     // ---- Page détaillée (tout est optionnel) ----
     role: "What YOU did in the project",
     equipe: "Solo / team of 4",
     duree: "3 months",
     sections: [
       { titre: "Context", texte: "The starting problem." },
       { titre: "What I did", texte: "Your approach and technical choices." },
       { titre: "Results", texte: "Numbers, what works, what you learned." },
     ],
     galerie: [
       { src: "assets/img/projets/my-project/photo1.jpg", legende: "Caption" },
     ],
     liens: [
       { label: "Source code", url: "https://github.com/..." },
       { label: "Report (PDF)", url: "assets/docs/report.pdf" },
     ],
   },
   ---------------------------------------------------------------- */

window.PROJETS = [
  {
    id: "watteco-lorawan-config",
    titre: "LoRaWAN sensor configuration generator",
    resume: "A Java tool that generates the JSON configuration files used to set up LoRaWAN sensors.",
    date: "2026-06",
    periode: "Jun. – Jul. 2026",
    contexte: "Internship · Watteco",
    tags: ["Java", "IoT", "LoRaWAN", "JSON"],
    image: "",
    enAvant: true,

    role: "IoT Software Development Intern",
    equipe: "",
    duree: "2 months",
    sections: [
      { titre: "Context", texte: "Watteco designs LoRaWAN sensors. Setting them up relies on JSON configuration files loaded by a dedicated application." },
      { titre: "What I did", texte: "I developed a Java tool that generates these JSON configuration files, so sensors can be configured without writing the files by hand." },
      { titre: "Results", texte: "À COMPLÉTER : ce que l'outil a apporté (temps gagné, erreurs évitées, utilisateurs…) et ce que tu as appris." },
    ],
    galerie: [],
    liens: [],
  },

  {
    id: "elenga-water-drop",
    titre: "Firefighting “water drop” release system",
    resume: "Rapid extinguishing of incipient fires with a single water drop — I designed the remote-controlled release system in CAD.",
    date: "2026-05",
    periode: "2025 – 2026",
    contexte: "School project · Elenga Technologies",
    tags: ["CAD", "3DEXPERIENCE", "MATLAB", "Mechatronics"],
    image: "",
    enAvant: true,

    role: "Design of the release system in CAD, with remote-controlled opening",
    equipe: "Team of 11 students",
    duree: "1 academic year",
    sections: [
      { titre: "Context", texte: "First-year engineering project at SeaTech for Elenga Technologies: extinguishing incipient fires quickly by dropping a single “water drop”." },
      { titre: "What I did", texte: "I designed the release system in CAD, including a remote-controlled opening mechanism." },
      { titre: "Team study", texte: "The team also modelled the drop (MATLAB, ABAQUS) and studied which extinguishing liquids to use." },
      { titre: "Results", texte: "À COMPLÉTER : prototype, tests, résultats obtenus, ce que tu as appris." },
    ],
    galerie: [],
    liens: [],
  },

  {
    id: "tipe-glacier-ice",
    titre: "Glacier ice transport for drinking water",
    resume: "CPGE research project (TIPE) on transporting glacier ice to supply drinking water.",
    date: "2025-06",
    periode: "2023 – 2025",
    contexte: "Research project (TIPE)",
    tags: ["Physics", "Modelling"],
    image: "",
    enAvant: false,

    role: "",
    equipe: "",
    duree: "",
    sections: [
      { titre: "Context", texte: "À COMPLÉTER : la question de départ de ton TIPE." },
      { titre: "What I did", texte: "À COMPLÉTER : modélisation, expériences, simulations." },
      { titre: "Results", texte: "À COMPLÉTER : conclusions principales." },
    ],
    galerie: [],
    liens: [],
  },
];
