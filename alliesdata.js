// =============================================================
// BASE DE DONNÉES DES ALLIÉS (alliesdata.js)
// 4 Paliers de rareté x 10 Alliés = 40 Figures de Lutte
// 4 Luttes équilibrées (10 cartes chacune) :
// 🔴 Travail, Social & Anticapitalisme
// 🌿 Écologie, Vivant & Territoires
// 🟣 Émancipation, Féminisme & Droits Civiques
// 📢 Contre-Pouvoir, Médias & Antifascisme
// =============================================================

const ALLIES_DATABASE = [

    // =============================================================
    // PALIER 1 : MILITANT DE TERRAIN (Indices 1 à 10)
    // Rareté : Vert (#16a34a)
    // Bonus : Apport fixe (+5 000 à +15 000 manifestants)
    // =============================================================
    {
        id: "zawa_prod",
        name: "Zawa Prod (Dany & Raz)",
        role: "Duettistes du Live Twitch",
        tier: 1,
        rarityName: "Militant de Terrain",
        rarityColor: "#16a34a",
        scoreIndex: 1,
        archetype: "Contre-Pouvoir, Médias & Antifascisme",
        bonusType: "flat",
        bonusValue: 5000,
        bio: "Pionniers des lives politiques interactifs et nocturnes, maîtres de la déconstruction des récits dominants."
    },
    {
        id: "glupatate",
        name: "Glupatate",
        role: "Monteur Satirique",
        tier: 1,
        rarityName: "Militant de Terrain",
        rarityColor: "#16a34a",
        scoreIndex: 2,
        archetype: "Contre-Pouvoir, Médias & Antifascisme",
        bonusType: "flat",
        bonusValue: 6000,
        bio: "Monteur indépendant, créateur des zappings mèmes les plus viraux pour ridiculiser les éditorialistes réactionnaires."
    },
    {
        id: "regelegorila",
        name: "Regelegorila",
        role: "Streamer Populaire",
        tier: 1,
        rarityName: "Militant de Terrain",
        rarityColor: "#16a34a",
        scoreIndex: 3,
        archetype: "Contre-Pouvoir, Médias & Antifascisme",
        bonusType: "flat",
        bonusValue: 7000,
        bio: "Streamer et créateur web, célèbre pour ses réactions directes, ses tier-lists politiques tranchées et sans filtre."
    },
    {
        id: "histoires_crepues",
        name: "Histoires Crépues",
        role: "Pédagogue Décolonial",
        tier: 1,
        rarityName: "Militant de Terrain",
        rarityColor: "#16a34a",
        scoreIndex: 4,
        archetype: "Émancipation, Féminisme & Droits Civiques",
        bonusType: "flat",
        bonusValue: 8000,
        bio: "Créateur de formats vidéo percutants dédiés à l'histoire coloniale, à l'antiracisme et à la mémoire des luttes."
    },
    {
        id: "alma_dufour",
        name: "Alma Dufour",
        role: "Tacticienne Anti-Multinationales",
        tier: 1,
        rarityName: "Militant de Terrain",
        rarityColor: "#16a34a",
        scoreIndex: 5,
        archetype: "Écologie, Vivant & Territoires",
        bonusType: "flat",
        bonusValue: 9000,
        bio: "Ancienne porte-parole écologiste, stratège des blocages d'entrepôts Amazon devenue députée de rupture."
    },
    {
        id: "banlieue_climat",
        name: "Banlieue Climat",
        role: "Écologistes Populaires",
        tier: 1,
        rarityName: "Militant de Terrain",
        rarityColor: "#16a34a",
        scoreIndex: 6,
        archetype: "Écologie, Vivant & Territoires",
        bonusType: "flat",
        bonusValue: 10000,
        bio: "Association formatrice de la jeunesse des quartiers aux enjeux climatiques, alliant justice environnementale et sociale."
    },
    {
        id: "clement_viktorovitch",
        name: "Clément Viktorovitch",
        role: "Analyste Rhétorique",
        tier: 1,
        rarityName: "Militant de Terrain",
        rarityColor: "#16a34a",
        scoreIndex: 7,
        archetype: "Contre-Pouvoir, Médias & Antifascisme",
        bonusType: "flat",
        bonusValue: 11000,
        bio: "Docteur en sciences politiques, spécialiste du décryptage de la parole politique et de la novlangue autoritaire."
    },
    {
        id: "ludovic_franceschet",
        name: "Ludovic Franceschet",
        role: "Éboueur Éducateur",
        tier: 1,
        rarityName: "Militant de Terrain",
        rarityColor: "#16a34a",
        scoreIndex: 8,
        archetype: "Écologie, Vivant & Territoires",
        bonusType: "flat",
        bonusValue: 12000,
        bio: "Agent de propreté parisien et figure des réseaux, sensibilisateur populaire infatigable à la propreté urbaine et au respect des agents."
    },
    {
        id: "contre_attaque",
        name: "Contre-Attaque (ex-Nantes Révoltée)",
        role: "Média Autonome",
        tier: 1,
        rarityName: "Militant de Terrain",
        rarityColor: "#16a34a",
        scoreIndex: 9,
        archetype: "Contre-Pouvoir, Médias & Antifascisme",
        bonusType: "flat",
        bonusValue: 13500,
        bio: "Collectif d'information de rue et d'investigation militante, sentinelle contre les dérives policières et autoritaires."
    },
    {
        id: "raphael_arnault",
        name: "Raphaël Arnault",
        role: "Militant Antifasciste",
        tier: 1,
        rarityName: "Militant de Terrain",
        rarityColor: "#16a34a",
        scoreIndex: 10,
        archetype: "Contre-Pouvoir, Médias & Antifascisme",
        bonusType: "flat",
        bonusValue: 15000,
        bio: "Porte-parole de la Jeune Garde devenu député, artisan de l'autodéfense populaire face aux violences d'extrême droite."
    },

    // =============================================================
    // PALIER 2 : CADRE DE LUTTE (Indices 11 à 20)
    // Rareté : Bleu (#2563eb)
    // Bonus : Multiplicateur modéré (+15% à +25% de manifestants)
    // =============================================================
    {
        id: "jean_jouzel",
        name: "Jean Jouzel",
        role: "Climatologue Prix Nobel",
        tier: 2,
        rarityName: "Cadre de Lutte",
        rarityColor: "#2563eb",
        scoreIndex: 11,
        archetype: "Écologie, Vivant & Territoires",
        bonusType: "multiplier",
        bonusValue: 0.15,
        bio: "Glaciologue émérite, ancien vice-président du GIEC et pionnier de la preuve scientifique du réchauffement par les carottes de glace."
    },
    {
        id: "youssef_swatts",
        name: "Youssef Swatt's",
        role: "Plume Poétique & Rap",
        tier: 2,
        rarityName: "Cadre de Lutte",
        rarityColor: "#2563eb",
        scoreIndex: 12,
        archetype: "Émancipation, Féminisme & Droits Civiques",
        bonusType: "multiplier",
        bonusValue: 0.16,
        bio: "Rappeur et auteur humaniste, vainqueur de Nouvelle École, maniant la sincérité textuelle et la dignité des quartiers."
    },
    {
        id: "medine",
        name: "Médine",
        role: "Poète Contestataire",
        tier: 2,
        rarityName: "Cadre de Lutte",
        rarityColor: "#2563eb",
        scoreIndex: 13,
        archetype: "Contre-Pouvoir, Médias & Antifascisme",
        bonusType: "multiplier",
        bonusValue: 0.18,
        bio: "Rappeur havrais indépendant, cible privilégiée des plateaux réactionnaires pour sa plume subversive et ses concerts engagés."
    },
    {
        id: "waly_dia",
        name: "Waly Dia",
        role: "Satiriste sans Concession",
        tier: 2,
        rarityName: "Cadre de Lutte",
        rarityColor: "#2563eb",
        scoreIndex: 14,
        archetype: "Contre-Pouvoir, Médias & Antifascisme",
        bonusType: "multiplier",
        bonusValue: 0.19,
        bio: "Humoriste sniper du système politique, bête noire des oligarques et des directeurs d'antenne frileux."
    },
    {
        id: "salome_saque",
        name: "Salomé Saqué",
        role: "Journaliste de Combat",
        tier: 2,
        rarityName: "Cadre de Lutte",
        rarityColor: "#2563eb",
        scoreIndex: 15,
        archetype: "Écologie, Vivant & Territoires",
        bonusType: "multiplier",
        bonusValue: 0.20,
        bio: "Grand reporter chez Blast, voix de la jeunesse précarisée et vulgarisatrice implacable des crises climatiques."
    },
    {
        id: "camille_etienne",
        name: "Camille Étienne",
        role: "Sentinelle Écologiste",
        tier: 2,
        rarityName: "Cadre de Lutte",
        rarityColor: "#2563eb",
        scoreIndex: 16,
        archetype: "Écologie, Vivant & Territoires",
        bonusType: "multiplier",
        bonusValue: 0.21,
        bio: "Militante pour la justice climatique et contre les fonds fossiles, adepte de la désobéissance civile ciblée."
    },
    {
        id: "bally_bagayoko",
        name: "Bally Bagayoko",
        role: "Maire Populaire de Saint-Denis",
        tier: 2,
        rarityName: "Cadre de Lutte",
        rarityColor: "#2563eb",
        scoreIndex: 17,
        archetype: "Travail, Social & Anticapitalisme",
        bonusType: "multiplier",
        bonusValue: 0.22,
        bio: "Militant associatif et élu de Seine-Saint-Denis, défenseur historique du service public et des habitants des cités populaires."
    },
    {
        id: "sandrine_rousseau",
        name: "Sandrine Rousseau",
        role: "Écoféministe Radicale",
        tier: 2,
        rarityName: "Cadre de Lutte",
        rarityColor: "#2563eb",
        scoreIndex: 18,
        archetype: "Écologie, Vivant & Territoires",
        bonusType: "multiplier",
        bonusValue: 0.23,
        bio: "Économiste et députée, théoricienne du ralentissement écologique, de la grève des devoirs et de la déconstruction patriarcale."
    },
    {
        id: "jean_marc_jancovici",
        name: "Jean-Marc Jancovici",
        role: "Ingénieur de la Contrainte Carbone",
        tier: 2,
        rarityName: "Cadre de Lutte",
        rarityColor: "#2563eb",
        scoreIndex: 19,
        archetype: "Écologie, Vivant & Territoires",
        bonusType: "multiplier",
        bonusValue: 0.24,
        bio: "Créateur du Bilan Carbone et du Shift Project, vulgarisateur de la finitude énergétique et de la sobriété matérielle."
    },
    {
        id: "rima_hassan",
        name: "Rima Hassan",
        role: "Juriste des Peuples Opprimés",
        tier: 2,
        rarityName: "Cadre de Lutte",
        rarityColor: "#2563eb",
        scoreIndex: 20,
        archetype: "Émancipation, Féminisme & Droits Civiques",
        bonusType: "multiplier",
        bonusValue: 0.25,
        bio: "Juriste en droit international, réfugiée palestinienne et eurodéputée portant sans faillir la voix des colonisés."
    },

    // =============================================================
    // PALIER 3 : POIDS LOURD (Indices 21 à 30)
    // Rareté : Violet (#9333ea)
    // Bonus : Multiplicateur solide (+35% à +50% de manifestants)
    // =============================================================
    {
        id: "jean_luc_melenchon",
        name: "Jean-Luc Mélenchon",
        role: "Tribun de l'Insoumission",
        tier: 3,
        rarityName: "Poids Lourd",
        rarityColor: "#9333ea",
        scoreIndex: 21,
        archetype: "Travail, Social & Anticapitalisme",
        bonusType: "multiplier",
        bonusValue: 0.35,
        bio: "Orateur de masse et théoricien de l'ère du peuple, promoteur de la 6e République et de la bifurcation écologique."
    },
    {
        id: "greta_thunberg",
        name: "Greta Thunberg",
        role: "Voix Planétaire du Climat",
        tier: 3,
        rarityName: "Poids Lourd",
        rarityColor: "#9333ea",
        scoreIndex: 22,
        archetype: "Écologie, Vivant & Territoires",
        bonusType: "multiplier",
        bonusValue: 0.36,
        bio: "Instigatrice des grèves scolaires mondiales pour le climat, visage de la désobéissance internationale contre les lobbys fossiles."
    },
    {
        id: "nathalie_arthaud",
        name: "Nathalie Arthaud",
        role: "Porte-Voix des Travailleurs",
        tier: 3,
        rarityName: "Poids Lourd",
        rarityColor: "#9333ea",
        scoreIndex: 23,
        archetype: "Travail, Social & Anticapitalisme",
        bonusType: "multiplier",
        bonusValue: 0.38,
        bio: "Enseignante d'économie et porte-parole de Lutte Ouvrière, intransigeante sur l'expropriation des banques et le contrôle ouvrier."
    },
    {
        id: "renaud",
        name: "Renaud",
        role: "Chanteur Enragé du Peuple",
        tier: 3,
        rarityName: "Poids Lourd",
        rarityColor: "#9333ea",
        scoreIndex: 24,
        archetype: "Travail, Social & Anticapitalisme",
        bonusType: "multiplier",
        bonusValue: 0.40,
        bio: "Poète gouailleur des pavés, auteur d'Hexagone et de Germinal, symbole intemporel de l'antimilitarisme ouvrier."
    },
    {
        id: "philippe_poutou",
        name: "Philippe Poutou",
        role: "Ouvrier sans Filtre",
        tier: 3,
        rarityName: "Poids Lourd",
        rarityColor: "#9333ea",
        scoreIndex: 25,
        archetype: "Travail, Social & Anticapitalisme",
        bonusType: "multiplier",
        bonusValue: 0.42,
        bio: "Ouvrier de l'usine Ford Blanquefort, porte-parole anticapitaliste légendaire pour ses clims mémorables aux corrompus."
    },
    {
        id: "gabriel_zucman",
        name: "Gabriel Zucman",
        role: "Traqueur des Paradis Fiscaux",
        tier: 3,
        rarityName: "Poids Lourd",
        rarityColor: "#9333ea",
        scoreIndex: 26,
        archetype: "Travail, Social & Anticapitalisme",
        bonusType: "multiplier",
        bonusValue: 0.44,
        bio: "Économiste mondialement primé, artisan du projet d'impôt mondial sur les ultra-milliardaires et pourfendeur de l'évasion fiscale."
    },
    {
        id: "ambroise_croizat",
        name: "Ambroise Croizat",
        role: "Bâtisseur de la Sécu",
        tier: 3,
        rarityName: "Poids Lourd",
        rarityColor: "#9333ea",
        scoreIndex: 27,
        archetype: "Travail, Social & Anticapitalisme",
        bonusType: "multiplier",
        bonusValue: 0.46,
        bio: "Ouvrier métallurgiste et ministre communiste du Travail, architecte et fondateur du système universel de Sécurité Sociale en 1945."
    },
    {
        id: "zohran_mamdani",
        name: "Zohran Mamdani",
        role: "Socialiste Municipal US",
        tier: 3,
        rarityName: "Poids Lourd",
        rarityColor: "#9333ea",
        scoreIndex: 28,
        archetype: "Travail, Social & Anticapitalisme",
        bonusType: "multiplier",
        bonusValue: 0.48,
        bio: "Élu de New York, fer de lance de la gratuité des transports en commun, du gel des loyers et des droits syndicaux."
    },
    {
        id: "theodora",
        name: "Theodora",
        role: "Boss Lady de la Pop Urbaine",
        tier: 3,
        rarityName: "Poids Lourd",
        rarityColor: "#9333ea",
        scoreIndex: 29,
        archetype: "Émancipation, Féminisme & Droits Civiques",
        bonusType: "multiplier",
        bonusValue: 0.49,
        bio: "Artiste novatrice et indépendante, pulvérisant les codes de la musique urbaine par l'affirmation féministe et la liberté stylistique."
    },
    {
        id: "svante_arrhenius",
        name: "Svante Arrhenius",
        role: "Pionnier de l'Effet de Serre",
        tier: 3,
        rarityName: "Poids Lourd",
        rarityColor: "#9333ea",
        scoreIndex: 30,
        archetype: "Écologie, Vivant & Territoires",
        bonusType: "multiplier",
        bonusValue: 0.50,
        bio: "Prix Nobel suédois ayant modélisé et démontré dès 1896 le lien direct entre rejets industriels de carbone et hausse des températures."
    },

    // =============================================================
    // PALIER 4 : LÉGENDE HISTORIQUE (Indices 31 à 40)
    // Rareté : Doré (#d97706)
    // Bonus : Multiplicateur historique (+55% à +100% de cortège)
    // =============================================================
    {
        id: "gisele_halimi",
        name: "Gisèle Halimi",
        role: "Avocate Insoumise",
        tier: 4,
        rarityName: "Légende Historique",
        rarityColor: "#d97706",
        scoreIndex: 31,
        archetype: "Émancipation, Féminisme & Droits Civiques",
        bonusType: "multiplier",
        bonusValue: 0.60,
        bio: "Avocate historique du procès de Bobigny, signataire du Manifeste des 343 et pionnière de la dépénalisation de l'avortement."
    },
    {
        id: "thomas_sankara",
        name: "Thomas Sankara",
        role: "Président Martyr Panafricain",
        tier: 4,
        rarityName: "Légende Historique",
        rarityColor: "#d97706",
        scoreIndex: 32,
        archetype: "Travail, Social & Anticapitalisme",
        bonusType: "multiplier",
        bonusValue: 0.65,
        bio: "Leader révolutionnaire burkinabé, champion de l'auto-suffisance alimentaire, de la reforestation et du refus de la dette coloniale."
    },
    {
        id: "patrice_lumumba",
        name: "Patrice Lumumba",
        role: "Flambeau de l'Indépendance",
        tier: 4,
        rarityName: "Légende Historique",
        rarityColor: "#d97706",
        scoreIndex: 33,
        archetype: "Émancipation, Féminisme & Droits Civiques",
        bonusType: "multiplier",
        bonusValue: 0.70,
        bio: "Héros national de l'indépendance congolaise, assassiné pour avoir refusé la mainmise néocoloniale sur les richesses de son pays."
    },
    {
        id: "martin_luther_king",
        name: "Martin Luther King Jr.",
        role: "Apôtre de la Justice Civique",
        tier: 4,
        rarityName: "Légende Historique",
        rarityColor: "#d97706",
        scoreIndex: 34,
        archetype: "Émancipation, Féminisme & Droits Civiques",
        bonusType: "multiplier",
        bonusValue: 0.75,
        bio: "Pasteur et figure monumentale de la lutte pour les droits civiques, de la non-violence radicale et de la marche des pauvres."
    },
    {
        id: "salvador_allende",
        name: "Salvador Allende",
        role: "Président de la Voie Démocratique",
        tier: 4,
        rarityName: "Légende Historique",
        rarityColor: "#d97706",
        scoreIndex: 35,
        archetype: "Travail, Social & Anticapitalisme",
        bonusType: "multiplier",
        bonusValue: 0.80,
        bio: "Président socialiste chilien démocratiquement élu, mort l'arme à la main lors du coup d'État militaire appuyé par la CIA en 1973."
    },
    {
        id: "rosa_parks",
        name: "Rosa Parks",
        role: "Étincelle de la Dignité Civique",
        tier: 4,
        rarityName: "Légende Historique",
        rarityColor: "#d97706",
        scoreIndex: 36,
        archetype: "Émancipation, Féminisme & Droits Civiques",
        bonusType: "multiplier",
        bonusValue: 0.85,
        bio: "Couturière et militante dont le refus historique de céder sa place dans un bus ségrégué déclencha le boycott de Montgomery."
    },
    {
        id: "karl_marx",
        name: "Karl Marx",
        role: "Théoricien de l'Émancipation Prolétarienne",
        tier: 4,
        rarityName: "Légende Historique",
        rarityColor: "#d97706",
        scoreIndex: 37,
        archetype: "Travail, Social & Anticapitalisme",
        bonusType: "multiplier",
        bonusValue: 0.90,
        bio: "Philosophe et économiste, auteur du Capital, théoricien de la lutte des classes et du renversement du mode de production capitaliste."
    },
    {
        id: "louise_michel",
        name: "Louise Michel",
        role: "La Vierge Rouge de la Commune",
        tier: 4,
        rarityName: "Légende Historique",
        rarityColor: "#d97706",
        scoreIndex: 38,
        archetype: "Travail, Social & Anticapitalisme",
        bonusType: "multiplier",
        bonusValue: 0.95,
        bio: "Institutrice révolutionnaire, héroïne des barricades de la Commune de Paris 1871, militante anarchiste et pédagogue populaire."
    },
    {
        id: "angela_davis",
        name: "Angela Davis",
        role: "Icône Révolutionnaire Abolitionniste",
        tier: 4,
        rarityName: "Légende Historique",
        rarityColor: "#d97706",
        scoreIndex: 39,
        archetype: "Émancipation, Féminisme & Droits Civiques",
        bonusType: "multiplier",
        bonusValue: 1.00,
        bio: "Philosophe marxiste, figure des Black Panthers et théoricienne mondiale de l'abolitionnisme carcéral et de l'antiracisme."
    },
    {
        id: "jean_moulin",
        name: "Jean Moulin",
        role: "Unificateur de la Résistance",
        tier: 4,
        rarityName: "Légende Historique",
        rarityColor: "#d97706",
        scoreIndex: 40,
        archetype: "Contre-Pouvoir, Médias & Antifascisme",
        bonusType: "multiplier",
        bonusValue: 1.00,
        bio: "Préfet républicain et président du Conseil national de la Résistance, mort sous la torture sans jamais trahir ses camarades."
    }
];
