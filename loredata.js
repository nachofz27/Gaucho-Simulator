// ==========================================
// BASE DE DONNÉES DU LORE & DES FICHES PROFILS
// ==========================================
const LORE_DATABASE = {
    // --- PALIER 1 ---
    "opp_gendarme_sainte_soline": {
        category: "Forces de l'ordre & Répression",
        bio: "Texte de présentation / contexte en attente...",
        sources: [
            { label: "Rapport ou article à sourcer", url: "" }
        ]
    },
    "opp_flic_carcassonne": {
        category: "Institution policière",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "allie_feris_barkat": {
        category: "Écologie populaire & Banlieues",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "allie_marco_militant": {
        category: "Militantisme de terrain",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_directeur_crous": {
        category: "Administration & Logement étudiant",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "allie_histoires_crepues": {
        category: "Média & Éducation populaire",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_chef_chantier_a412": {
        category: "Lutte écologiste & Désobéissance",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_tonton_michel": {
        category: "Sociologie du quotidien",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_cadre_liberal_micro": {
        category: "Économie & Fiscalité",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_porte_parole_identitaire": {
        category: "Extrême droite & Droits LGBT+",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_porte_parole_syndicat_police": {
        category: "Législation & Violences d'État",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_emissaire_ars": {
        category: "Hôpital public & Santé",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_depute_rn_interview": {
        category: "Laïcité dévoyée & Libertés",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "allie_clement_viktorovitch": {
        category: "Analyse rhétorique & Médias",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "allie_regelegorila": {
        category: "Pop-culture & Cinéma",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },

    // --- PALIER 2 ---
    "opp_depute_climatosceptique": {
        category: "Transition écologique & Austérité",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_journaliste_frontieres": {
        category: "Média de propagande d'extrême droite",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_jean_philippe_tanguy": {
        category: "Parlementaire RN & Idéologie",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_brigadier_curieux": {
        category: "Culture populaire & Contrôles",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_maire_deambulation": {
        category: "Aménagement urbain & Greenwashing",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_militant_rn_tractage": {
        category: "Protection de l'enfance & Récupération",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_tonton_michel_repas": {
        category: "Santé menstruelle & Précarité",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_influenceur_masculiniste": {
        category: "Masculinisme & Réseaux sociaux",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "allie_benevole_cop1": {
        category: "Solidarité & Précarité étudiante",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_vincent_lapierre": {
        category: "Vidéaste d'extrême droite",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },

    // --- PALIER 3 ---
    "allie_jean_marc_jancovici": {
        category: "Énergie & Climat",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_presentateur_cnews": {
        category: "Empire médiatique & Bolloré",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_robert_menard": {
        category: "Politique locale & Réaction",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "allie_generation_lumiere": {
        category: "Solidarité internationale & Congo",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_pascal_praud": {
        category: "Télévision & Climatodénialisme",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_sarah_knafo": {
        category: "Transports & Déconnexion sociale",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_editorialiste_plateau": {
        category: "Féminisme universel & Récupération",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_charles_alloncle": {
        category: "Audiovisuel public & Démantèlement",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },

    // --- PALIER 4 ---
    "allie_collectif_palestine": {
        category: "Droit international & Solidarité",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_flambee_carburants": {
        category: "Justice fiscale & Mouvements sociaux",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "allie_fete_de_lhuma": {
        category: "Histoire sociale & Rassemblements",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
    "opp_sommet_climat_onu": {
        category: "Géopolitique & Lobbies fossiles",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    }
};