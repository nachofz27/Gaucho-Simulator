// ==========================================
// BASE DE DONNÉES DU LORE & DES FICHES PROFILS
// ==========================================
//
// FICHIER CORRIGÉ — voir le message de Claude pour le détail complet.
// Légende des commentaires sur les sources :
//   [VÉRIFIÉ]     -> lien testé aujourd'hui (trouvé dans une recherche web ou confirmé actif), pointe vers un contenu précis
//   [À VÉRIFIER]  -> lien de niveau "page d'accueil" d'une institution réelle et sérieuse, mais pas revérifié
//                    individuellement aujourd'hui faute de temps ; à remplacer par un article précis si possible
//   [NOUVEAU]     -> source ajoutée par Claude pour remplacer un lien mort ou halluciné
//
const LORE_DATABASE = {
    // --- PALIER 1 ---
    "opp_gendarme_sainte_soline": {
        category: "Forces de l'ordre & Répression",
        bio: "Le 25 mars 2023 à Sainte-Soline (Deux-Sèvres), la mobilisation contre les mégabassines vire au drame : plus de 5 000 grenades lacrymogènes et explosives (GM2L) sont tirées en moins de deux heures par les gendarmes, faisant plus de 200 blessés parmi les manifestants, dont plusieurs éborgnés et deux personnes plongées dans le coma (Serge et Mickaël). Les enregistrements radio de la gendarmerie, révélés par la presse, attestent d'ordres d'une brutalité inouïe (« Tirez tendu ! », « Faut qu'on les tue ! ») et de tirs de LBD effectués depuis des quads en mouvement en violation flagrante des doctrines de maintien de l'ordre. Le SAMU et les secours d'urgence ont été bloqués sur ordre du commandement, retardant l'évacuation des blessés graves pendant près de deux heures.",
        sources: [
            // [NOUVEAU][VÉRIFIÉ] L'article Le Monde d'origine (2023) est introuvable/mort. Remplacé par l'enquête vidéo la plus complète et la plus citée sur le sujet (nov. 2025, "Faut qu'on les tue").
            { label: "Enquête vidéo Mediapart/Libération sur les vidéos des gendarmes (Politis)", url: "https://www.politis.fr/articles/2025/11/sainte-soline-la-violence-des-gendarmes-en-images/" },
            { label: "« Faut qu'on les tue » : les vidéos des gendarmes à Sainte-Soline (Reporterre)", url: "https://reporterre.net/Faut-qu-on-les-tue-les-videos-des-gendarmes-a-Sainte-Soline-revelees-par-Mediapart-et-Liberation" },
            // [NOUVEAU][VÉRIFIÉ] Communiqué LDH du 7/11/2025 (le lien "rapport-des-observateurs" d'origine n'a pas pu être confirmé)
            { label: "Communiqué de la Ligue des Droits de l'Homme sur les révélations de novembre 2025", url: "https://www.ldh-france.org/wp-content/uploads/2025/11/CP-LDH-Sainte-Soline-7-11-2025-site.pdf" }
        ]
    },

    "opp_flic_carcassonne": {
        category: "Institution policière & Racisme d'État",
        bio: "Une vidéo enregistrée par la caméra-piéton d'un équipage de la police municipale de Carcassonne et révélée par Midi Libre dévoile la tenue de propos ouvertement racistes, sexistes et complotistes par plusieurs agents (novembre 2025, révélé en septembre 2026). L'un des policiers, membre du service d'ordre du Rassemblement national, est celui qui en profère le plus. L'affaire a provoqué une vive polémique, entraînant l'ouverture d'une enquête judiciaire par le parquet, une enquête administrative (IGA) ordonnée par le ministre de l'Intérieur, ainsi que l'exclusion de l'agent du RN.",
        sources: [
            // [NOUVEAU][VÉRIFIÉ] Les liens d'origine (midilibre.fr et france3-regions.francetvinfo.fr) pointaient vers des pages d'accueil génériques, pas vers l'article.
            { label: "Public Sénat : les obligations des policiers municipaux mis en cause", url: "https://www.publicsenat.fr/actualites/politique/propos-racistes-a-carcassonne-quelles-sont-les-obligations-des-policiers-municipaux-mis-en-cause" },
            { label: "LCP : réactions politiques après la diffusion de la vidéo", url: "https://lcp.fr/actualites/propos-racistes-d-un-policier-municipal-a-carcassonne-les-nouveaux-maires-rn-peuvent-ils" }
        ]
    },

    "allie_feris_barkat": {
        category: "Écologie populaire & Banlieues",
        bio: "Originaire de Strasbourg, Féris Barkat est le cofondateur de l'association Banlieues Climat, lancée pour reconnecter les quartiers populaires aux enjeux écologiques sans discours moralisateur ou technocratique. Reconnu pour sa pédagogie de terrain percutante, il a notamment enseigné et donné des modules de cours sur l'écologie populaire et la justice environnementale à l'université Sorbonne Nouvelle. Son mouvement forme des centaines de jeunes des cités aux réalités du dérèglement climatique (précarité thermique des passoires HLM, manque d'îlots de fraîcheur, pollutions industrielles subies), en faisant de l'écologie un vecteur d'émancipation sociale, de formation professionnelle et de reprise de pouvoir sur leur cadre de vie.",
        sources: [
            { label: "Site officiel de l'association Banlieues Climat", url: "https://banlieuesclimat.com/" },
            // [VÉRIFIÉ] Retrouvé cité (URL tronquée identique) sur un site tiers référençant ce podcast précis ; conservé.
            { label: "Podcast France Inter, « La Terre au carré » : quelle écologie pour les quartiers populaires ?", url: "https://www.radiofrance.fr/franceinter/podcasts/la-terre-au-carre/la-terre-au-carre-du-jeudi-08-juin-2023-3882747" },
            // [NOUVEAU][VÉRIFIÉ] Le lien StreetPress d'origine n'a pas pu être confirmé ; remplacé par un article Politis vérifié et très complet.
            { label: "Politis : comment l'association Banlieues Climat fait vivre l'écologie populaire", url: "https://www.politis.fr/articles/2023/12/comment-lassociation-banlieues-climat-de-feris-berkat-fait-vivre-lecologie-populaire" }
        ]
    },
    "allie_marco_militant": {
        category: "Militantisme de terrain",
        bio: "Loin d'une simple posture théorique, le militantisme de terrain constitue le moteur historique des transformations sociopolitiques. Qu'il s'exprime par l'action syndicale, la désobéissance civile, l'organisation de grèves ou la sensibilisation locale, l'engagement collectif permet de sortir les revendications de l'invisibilité et d'instaurer un rapport de force face aux institutions. Historiquement, l'essentiel des conquis sociaux — réduction du temps de travail, libertés civiles ou droits des minorités — n'a pas émergé spontanément des assemblées parlementaires, mais de la pression constante exercée par des personnes mobilisées sur le pavé, prêtes à braver la répression pour faire vaciller l'ordre établi.",
        sources: [
            // [À VÉRIFIER] Format d'URL cohérent avec de vrais articles Cairn/CNRS mais non revérifié individuellement aujourd'hui.
            { label: "Analyse sociologique sur l'action collective et les mouvements sociaux (Cairn)", url: "https://shs.cairn.info/sociologie-des-comportements-politiques--9782200634711-page-198" },
            { label: "Recherche sur l'histoire sociale des mobilisations (CNRS)", url: "https://histoire-sociale.cnrs.fr/la-recherche/axe-1-2/" }
        ]
    },
   "opp_directeur_crous": {
        category: "Administration & Logement étudiant",
        bio: "Entre gel des aides au logement face à l'inflation et mesures d'austérité budgétaire, les structures du CROUS incarnent l'abandon institutionnel de la jeunesse précaire. La saturation chronique des parcs de logements universitaires, conjuguée à des coupes dans les budgets de fonctionnement, engendre des files d'attente interminables aux restaurants universitaires pour obtenir un repas décent. Les réformes ciblant les aides directes et la précarisation accrue des étudiants internationaux aggravent une crise matérielle majeure, transformant l'accès élémentaire à l'alimentation et au toit en un parcours d'épuisement quotidien.",
        sources: [
            // [NOUVEAU][VÉRIFIÉ] Les liens d'origine (humanite.fr et mediapart.fr) étaient de simples pages d'accueil.
            { label: "L'Étudiant : la hausse de la précarité étudiante, comment en est-on arrivé là ?", url: "https://www.letudiant.fr/lifestyle/aides-financieres/hausse-de-la-precarite-etudiante-comment-en-est-on-arrive-la.html" },
            { label: "L'Étudiant : 46% des étudiants précaires ne mangent pas à leur faim (étude OVE)", url: "https://www.letudiant.fr/educpros/actualite/selon-l-ove-46-des-etudiants-precaires-ne-mangent-pas-a-leur-faim.html" }
        ]
    },
    "allie_histoires_crepues": {
        category: "Média & Éducation populaire",
        bio: "Fondé par l'artiste et chercheur Seumboy Vrainom :€, Histoires Crépues est un média d'éducation populaire et de déconstruction historique. À travers la vidéo courte et un minutieux travail d'archives, le projet vulgarise l'histoire coloniale française, la pensée décoloniale et l'écologie politique. En abordant des thématiques souvent invisibilisées dans les programmes scolaires traditionnels — massacres coloniaux, représentations raciales ou extraction des ressources —, il offre des outils théoriques accessibles pour penser les séquelles contemporaines de l'impérialisme.",
        sources: [
            { label: "Chaîne YouTube officielle Histoires Crépues", url: "https://www.youtube.com/@histoirescrepues" },
            { label: "Compte Instagram du média Histoires Crépues", url: "https://www.instagram.com/histoirescrepues" }
        ]
    },
    "opp_chef_chantier_a412": {
        category: "Lutte écologiste & Désobéissance",
        bio: "Porté par le concessionnaire Amedea (filiale d'Eiffage) et l'État entre Machilly et Thonon-les-Bains en Haute-Savoie, le projet d'autoroute A412 cristallise l'opposition entre expansion des infrastructures routières et urgence écologique. Traversant des dizaines d'hectares de forêts, de terres agricoles et de zones humides, ce chantier de 16,5 kilomètres menace des continuités écologiques majeures. Depuis le lancement des travaux de défrichement en 2026, des militants multiplient les blocages et les actions de désobéissance civile pour entraver les engins, dénonçant un modèle dépassé de tout-voiture qui sacrifie les écosystèmes au profit d'intérêts industriels privés.",
        sources: [
            // [NOUVEAU][VÉRIFIÉ] Les liens d'origine (lareleveetlapeste.fr, fakirpresse.info) n'ont pas pu être confirmés ; remplacés par une couverture récente et vérifiée du chantier réel (2026).
            { label: "Lyon Capitale : la police disperse les premiers blocages contre l'A412", url: "https://www.lyoncapitale.fr/?p=517474" },
            { label: "Lyon Capitale : l'autoroute du Chablais avance malgré les oppositions", url: "https://www.lyoncapitale.fr/?p=452658" }
        ]
    },
    "opp_tonton_michel": {
        category: "Sociologie du quotidien",
        bio: "La cellule familiale constitue la première instance de socialisation politique, transmettant de manière diffuse mais profonde des visions du monde, des valeurs morales et des réflexes partisans. Loin de débats théoriques abstraits, c'est souvent lors des repas de famille — symbolisés par la figure stéréotypée du « tonton » aux remarques réactionnaires — que se heurtent les appartenances de classe, les clivages générationnels et l'incorporation inconsciente des hiérarchies sociales. La famille fonctionne ainsi comme un espace paradoxal d'apprentissage du conformisme ou de rupture idéologique, où l'adhésion ou la révolte politique se négocient d'abord dans l'intimité domestique.",
        sources: [
            // [À VÉRIFIER] Non revérifiés individuellement aujourd'hui.
            { label: "Recherche sociologique sur la socialisation politique familiale et le vote (Cairn)", url: "https://shs.cairn.info/revue-francaise-de-science-politique-2015-4-page-643" },
            { label: "Dossier pédagogique sur les mécanismes de la socialisation primaire (ENS Lyon)", url: "https://ses.ens-lyon.fr/articles/la-socialisation-politique-des-enfants" }
        ]
    },
    "opp_cadre_liberal_micro": {
        category: "Économie & Fiscalité",
        bio: "Théorisée par l'économiste Gabriel Zucman, la taxe sur les ultra-riches propose un impôt plancher de 2 % sur le patrimoine des plus grandes fortunes (au-delà de 100 millions d'euros ou milliardaires selon les déclinaisons). Conçue pour corriger une régressivité fiscale où les plus fortunés s'acquittent d'un taux effectif d'imposition bien plus faible que les classes moyennes, elle rapporterait entre 15 et 25 milliards d'euros par an en France et près de 250 milliards au niveau mondial. Défendue par des cadres libéraux pourtant non concernés par cette infime tranche (0,01 % de la population), la menace d'un exil fiscal massif relève du mythe : des dispositifs comme l'exit tax ou des mesures de taxation ciblée prouvent que la fuite des capitaux peut être neutralisée juridiquement.",
        sources: [
            // [NOUVEAU][VÉRIFIÉ] Le lien d'origine "gabriel-zucman.eu/files/report-g20.pdf" n'existe pas ; voici la véritable adresse du rapport, hébergé par l'EU Tax Observatory.
            { label: "Rapport officiel de Gabriel Zucman pour le G20 (EU Tax Observatory)", url: "https://www.taxobservatory.eu/www-site/uploads/2024/06/report-g20.pdf" },
            // [NOUVEAU][VÉRIFIÉ] Le lien d'origine "ofce.fr/wp/2026/6/" n'a pas pu être confirmé.
            { label: "Politis : la taxe Zucman, une évidence qui s'impose", url: "https://www.politis.fr/articles/2025/06/parti-pris-taxe-zucman-une-evidence-qui-commence-enfin-a-simposer/" }
        ]
    },
   "opp_porte_parole_identitaire": {
        category: "Extrême droite & Droits LGBT+",
        bio: "La résurgence des groupuscules d'extrême droite violents — qu'ils gravitent autour de groupements néofascistes ou de collectifs dissous comme l'Alvarium, la Division Martel ou les Zouaves Paris — s'accompagne d'une multiplication des actions ciblant les minorités et les personnes LGBT+. Derrière un discours pseudo-légaliste sur la défense de l'ordre moral ou identitaire, ces militants mènent des dégradations coordonnées (recouvrement systématique de passages piétons et fresques arc-en-ciel à la peinture noire) mais aussi des agressions physiques, des ratonnades visant des personnes racisées et des expéditions punitives contre les personnes sans-abri. L'homophobie et la transphobie constituent des piliers de leur propagande haineuse, articulée autour du rejet violent de toute remise en cause des normes patriarcales et suprémacistes.",
        sources: [
            // [À VÉRIFIER] Domaines réels et sérieux (CNCDH, Mediapart, SOS Homophobie) mais pointant vers la page d'accueil ; à remplacer par l'article/rapport précis de votre choix.
            { label: "Commission nationale consultative des droits de l'homme (CNCDH)", url: "https://www.cncdh.fr" },
            { label: "Mediapart — enquêtes sur les réseaux ultranationalistes", url: "https://www.mediapart.fr" },
            { label: "Rapport annuel de SOS Homophobie", url: "https://www.sos-homophobie.org" }
        ]
    },
    "opp_porte_parole_syndicat_police": {
        category: "Législation & Violences d'État",
        bio: "Portée par plusieurs syndicats de police et des formations de droite comme d'extrême droite, la revendication d'une « présomption de légitime défense » — souvent qualifiée de « permis de tuer » par ses détracteurs et les ONG — vise à renverser la charge de la preuve en cas d'ouverture de feu. Le 7 juillet 2026, l'Assemblée nationale a adopté en première lecture une proposition de loi instaurant une présomption d'usage légitime de l'arme pour les policiers et gendarmes, par 313 voix contre 199, avec le soutien du gouvernement. Depuis l'adoption de l'article L. 435-1 du Code de la sécurité intérieure en 2017, le nombre de tirs mortels lors de refus d'obtempérer a déjà été multiplié par cinq. Une telle présomption entraverait l'accès à la justice pour les familles de victimes et affaiblirait le contrôle judiciaire.",
        sources: [
            // [VÉRIFIÉ] Lien d'origine confirmé actif et exact.
            { label: "Amnesty International France : « Loi présomption de légitime défense des policiers », les intox", url: "https://www.amnesty.fr/reperes/loi-presomption-de-legitime-defense-des-policiers-les-intox/" },
            // [NOUVEAU][VÉRIFIÉ] Remplace les liens d'origine (syndicat-magistrature.fr, assemblee-nationale.fr) qui étaient génériques.
            { label: "Politis : dossier « Un permis de tuer pour les policiers » (2026)", url: "https://www.politis.fr/dossiers/un-permis-de-tuer-pour-les-policiers/" },
            { label: "Note de plaidoyer commune Amnesty International France / LDH (juillet 2026)", url: "https://www.ldh-france.org/wp-content/uploads/2026/07/Note-de-plaidoyer-presomption-de-legalite-de-lusage-des-armes-AIF-LDH-003.pdf" }
        ]
    },
   "opp_emissaire_ars": {
        category: "Hôpital public & Santé",
        bio: "L'hôpital public traverse une crise structurelle profonde, accentuée par des années de politiques de tarification à l'activité (T2A), de fermetures continues de lits et de coupes budgétaires. Le manque criant de moyens matériels et humains engendre une saturation permanente des services d'urgences, des délais de prise en charge démesurés et des conditions de travail délétères pour les soignants, provoquant une vague massive de démissions. Cette gestion managériale pilotée par les Agences régionales de santé (ARS) délaisse la logique de service public universel au profit d'une logique comptable, avec des conséquences tragiques sur la prise en charge et une mortalité évitable documentée aux urgences.",
        sources: [
            // [À VÉRIFIER] Domaines réels (Cour des comptes, Mediapart, DREES) mais pages d'accueil génériques ; à remplacer par le rapport/article précis de votre choix.
            { label: "Rapport de la Cour des comptes sur les finances de l'hôpital public", url: "https://www.ccomptes.fr" },
            { label: "Enquêtes de Mediapart sur la dégradation des urgences hospitalières", url: "https://www.mediapart.fr" },
            { label: "Données de la DREES sur les capacités hospitalières", url: "https://drees.solidarites-sante.gouv.fr" }
        ]
    },
    "opp_depute_rn_interview": {
        category: "Laïcité dévoyée & Libertés",
        bio: "La volonté du Rassemblement national d'interdire le port du foulard islamique dans l'ensemble de l'espace public constitue une rupture avec les principes fondateurs de l'État de droit et de la laïcité républicaine, garantie par la loi de 1905 comme la liberté de conscience et de culte. Sous couvert d'émancipation féministe, cette proposition impose une contrainte étatique sur le corps et les choix vestimentaires des femmes musulmanes. En 2026, le RN envisage de faire passer cette mesure par référendum plutôt que par la voie parlementaire classique, face aux doutes exprimés en interne sur sa constitutionnalité.",
        sources: [
            // [NOUVEAU][VÉRIFIÉ] Remplace le lien générique ldh-france.org.
            { label: "Avis de la CNCDH sur la laïcité et les libertés fondamentales", url: "https://www.cncdh.fr/sites/default/files/2021-04/Avis%20la%C3%AFcit%C3%A9-AP-26%2009%202013.pdf" },
            { label: "Sud Radio : le référendum du RN sur l'interdiction du voile peut-il aboutir ? (2026)", url: "https://www.sudradio.fr/societe/interdiction-du-voile-le-referendum-du-rn-peut-il-vraiment-aboutir" }
        ]
    },
    "allie_clement_viktorovitch": {
        category: "Analyse rhétorique & Médias",
        bio: "Docteur en science politique, enseignant et vulgarisateur, Clément Viktorovitch est spécialisé dans l'analyse du discours et la rhétorique politique. À la télévision comme sur le web, il décortique les mécanismes de persuasion, les sophismes et les éléments de langage employés par les responsables publics pour contourner le débat démocratique.",
        sources: [
            { label: "Chaîne YouTube officielle de Clément Viktorovitch", url: "https://www.youtube.com/@clementviktorovitch" }
            // NOTE : le second point de la bio (opération « 1 000 cafés ») et sa source (lemonde.fr générique) ont été retirés du fait de l'absence de lien précis vérifiable ; à réintégrer avec un article spécifique si vous le souhaitez.
        ]
    },
    "allie_regelegorila": {
        category: "Pop-culture & Cinéma",
        bio: "Créateur de contenu et critique cinéma actif sur YouTube, TikTok et Instagram, Regelegorila aborde les œuvres audiovisuelles populaires et le cinéma d'auteur avec un regard engagé. À travers ses analyses de films, de séries et de tropes narratifs, il déconstruit les idéologies sous-jacentes des productions contemporaines, abordant régulièrement des thématiques de lutte des classes, de justice sociale et de représentations politiques dans la pop-culture.",
        sources: [
            { label: "Chaîne YouTube officielle de Regelegorila", url: "https://www.youtube.com/@RegeleGorila" },
            { label: "Compte Instagram officiel de Regelegorila", url: "https://www.instagram.com/regelegorila" }
        ]
    },

    // --- PALIER 2 ---
    "opp_maire_deambulation": {
        category: "Aménagement urbain & Greenwashing",
        bio: "Procédé de communication trompeur, le greenwashing (ou écoblanchiment) consiste pour une collectivité, un responsable politique ou une entreprise à mobiliser les codes et l'esthétique de l'écologie pour masquer l'absence d'engagements environnementaux réels. Dans la gestion municipale, il se traduit fréquemment par des opérations cosmétiques très médiatisées — installation de jardinières, réfection d'une place minérale avec quelques arbrisseaux ou communication sur des micro-forêts urbaines — pendant que se poursuivent l'artificialisation des sols périphériques, le tout-voiture et la densification bétonnée.",
        sources: [
            // [À VÉRIFIER] Domaines réels (ADEME, Reporterre) mais pages génériques.
            { label: "Guide de l'ADEME pour identifier et prévenir le greenwashing", url: "https://www.ademe.fr" },
            { label: "Reporterre — enquêtes sur l'écoblanchiment municipal", url: "https://reporterre.net" }
        ]
    },
    "opp_militant_rn_tractage": {
        category: "Protection de l'enfance & Récupération",
        bio: "Les débats parlementaires sur le durcissement pénal des infractions pédo-criminelles cristallisent une opposition nette entre logique de surenchère répressive et impératif de protection effective des victimes. Face aux initiatives de la droite et de l'extrême droite visant à empiler des peines planchers ou la perpétuité, la gauche dénonce un populisme pénal inefficace qui fait l'économie des moyens matériels pour la justice, l'Aide sociale à l'enfance et la pédopsychiatrie. La CIIVISE a formulé 82 recommandations en 2023, dont la mise en œuvre reste très incomplète, en particulier sur le volet judiciaire.",
        sources: [
            // [NOUVEAU][VÉRIFIÉ] Lien direct vers un document officiel confirmé actif de la CIIVISE (juin 2026).
            { label: "CIIVISE : bilan de la mise en œuvre des 82 recommandations (juin 2026)", url: "https://ciivise.fr/sites/ciivise/files/2026-06/Communiqu%C3%A9%20de%20presse%20-%20Bilan%20de%20mise%20en%20oeuvre%20des%20recommandations%20de%20la%20CIIVISE.pdf" },
            { label: "Site officiel de la CIIVISE", url: "https://ciivise.fr" }
        ]
    },
    "opp_tonton_michel_repas": {
        category: "Santé menstruelle & Précarité",
        // ATTENTION : cette fiche était vide dans le fichier d'origine ("Texte de présentation / contexte en attente...", sources: []).
        // Claude n'a pas inventé de contenu ni de sources : il faut nous préciser l'angle exact (précarité menstruelle ? tabou familial au repas ?)
        // pour qu'on puisse proposer un texte et des sources réelles.
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
   "opp_influenceur_masculiniste": {
        category: "Masculinisme & Réseaux sociaux",
        bio: "Propulsée par les algorithmes de TikTok, YouTube ou Instagram, la « manosphère » réunit des créateurs de contenu qui diffusent une idéologie ouvertement antiféministe et patriarcale, à l'image des figures internationales comme Andrew Tate ou de leurs émules francophones. Prétendant réhabiliter une « masculinité alpha » perdue à coup de pseudo-développement personnel, de culte de la performance financière et de fixation sur le corps musclé, ces influenceurs véhiculent des discours de haine décomplexés, la banalisation du viol et le contrôle systématique du corps des femmes.",
        sources: [
            // [À VÉRIFIER] Domaines réels mais génériques.
            { label: "Haut Conseil à l'Égalité entre les femmes et les hommes — rapport sur le masculinisme", url: "https://www.haut-conseil-egalite.gouv.fr" },
            { label: "Mediapart — enquête sur les réseaux masculinistes", url: "https://www.mediapart.fr" }
        ]
    },
    "allie_benevole_cop1": {
        category: "Solidarité & Précarité étudiante",
        bio: "Fondée en 2020 par des étudiants pour les étudiants, l'association Cop1 - Solidarités Étudiantes lutte contre la précarité croissante qui frappe la jeunesse universitaire à travers toute la France. Entièrement gratuite et apartisane, la structure organise des distributions massives et hebdomadaires de paniers de denrées alimentaires, de produits d'hygiène et de matériel de première nécessité, sans distinction de nationalité ou de statut.",
        sources: [
            // [VÉRIFIÉ] Site confirmé réel et actif.
            { label: "Faire un don ou soutenir les actions de l'association Cop1", url: "https://cop1.fr/faire-un-don/" },
            { label: "Site officiel de Cop1 - Solidarités Étudiantes", url: "https://cop1.fr" }
        ]
    },
    "opp_vincent_lapierre": {
        category: "Vidéaste d'extrême droite",
        bio: "Ancien collaborateur d'Alain Soral au sein d'Égalité & Réconciliation et fondateur du média en ligne « Le Média pour Tous », Vincent Lapierre illustre la stratégie des propagandistes d'extrême droite s'autoproclamant « reporters de terrain ». Équipé d'un micro lors de cortèges syndicaux ou de rassemblements antifascistes, il utilise la méthode de la provocation calculée pour susciter des réactions hostiles et fabriquer des images de victimisation.",
        sources: [
            // [NOUVEAU][VÉRIFIÉ] La fiche d'origine n'avait aucune source. Ajout d'une source de référence, sourcée elle-même.
            { label: "Fiche Wikipédia sourcée de Vincent Lapierre", url: "https://fr.wikipedia.org/wiki/Vincent_Lapierre" }
        ]
    },

    // --- PALIER 3 ---
    "allie_jean_marc_jancovici": {
        category: "Énergie & Climat",
        bio: "Ingénieur, enseignant et président du think tank The Shift Project, Jean-Marc Jancovici est une figure centrale de la vulgarisation des enjeux physiques du dérèglement climatique et de la transition énergétique. Développeur du premier Bilan Carbone pour l'ADEME et co-auteur de la bande dessinée Le Monde sans fin, il théorise l'intime corrélation entre consommation d'énergies fossiles et croissance du PIB.",
        sources: [
            { label: "Site officiel de vulgarisation de Jean-Marc Jancovici", url: "https://jancovici.com" },
            { label: "Travaux et rapports du Shift Project", url: "https://theshiftproject.org" }
        ]
    },
    "opp_presentateur_cnews": {
        category: "Empire médiatique & Médias de masse",
        bio: "Pilier de la stratégie d'hégémonie culturelle déployée par le milliardaire Vincent Bolloré à travers son empire (groupe Canal+, Vivendi, Hachette, Europe 1, Le JDD), CNews a transformé le paysage audiovisuel en appliquant les recettes sensationnalistes et polarisantes de l'américaine Fox News. Le 12 juin 2026, l'Arcom a mis en demeure la chaîne pour manquement grave et durable à ses obligations de pluralisme, après avoir visionné 168 heures de programmes ; une précédente mise en demeure avait déjà visé la chaîne concernant sa couverture des municipales.",
        sources: [
            // [NOUVEAU][VÉRIFIÉ] Remplace les liens génériques (Télérama, Arcom, Mediapart) par des articles précis et très récents (juin 2026).
            { label: "CBnews : l'Arcom met en demeure CNews (juin 2026)", url: "https://www.cbnews.fr/node/101681" },
            { label: "Ozap/Puremédias : « un traitement univoque de l'actualité »", url: "https://www.ozap.com/actu/un-traitement-univoque-de-lactualite-larcom-met-cnews-en-demeure-pour-manquement-a-ses-obligations-en-matiere-de-pluralisme/655599" }
        ]
    },
    "opp_robert_menard": {
        category: "Politique locale & Réaction",
        bio: "Maire de Béziers depuis 2014, élu avec l'appui de l'extrême droite après avoir cofondé Reporters sans frontières, Robert Ménard a fait de sa commune un laboratoire des politiques réactionnaires et de la provocation médiatique continue. Il s'est notamment illustré par la tentative de fichage confessionnel des élèves scolarisés (2015, sur la base des prénoms), l'armement ostentatoire de la police municipale, l'instauration de couvre-feux pour les mineurs, et l'installation récurrente de crèches de la Nativité en mairie.",
        sources: [
            // [NOUVEAU][VÉRIFIÉ] Remplace les liens génériques (Mediapart, Le Monde).
            { label: "Euronews : Robert Ménard avoue le fichage des enfants musulmans dans les écoles", url: "https://fr.euronews.com/2015/05/05/robert-menard-maire-de-beziers-avoue-fichage-enfants-musulmans-dans-les-ecoles" },
            { label: "Europe 1 : Ménard compte les élèves musulmans par leurs prénoms", url: "https://www.europe1.fr/node/363715" }
        ]
    },
    "allie_generation_lumiere": {
        category: "Solidarité internationale & Congo",
        bio: "Cofondée et présidée par David Maenda Kithoko, Génération Lumière est une organisation écologiste décoloniale luttant à l'intersection de la justice environnementale, des droits humains et du numérique. L'association alerte sur le coût humain et écologique de la transition énergétique des pays du Nord en République démocratique du Congo (RDC), où l'extraction effrénée du cobalt, du cuivre et du coltan alimente les nouvelles technologies au détriment des populations locales, dans un contexte de conflit armé impliquant le M23 soutenu par le Rwanda.",
        sources: [
            { label: "Faire un don ou soutenir les actions de l'association Génération Lumière", url: "https://www.helloasso.com/associations/generation-lumiere" },
            // [NOUVEAU][VÉRIFIÉ] Remplace le lien Ritimo non confirmé par deux entretiens Reporterre vérifiés et récents.
            { label: "Reporterre : « La guerre la plus meurtrière après la Seconde Guerre mondiale » — entretien avec David Maenda Kithoko (2026)", url: "https://reporterre.net/La-guerre-la-plus-meurtriere-apres-la-Seconde-Guerre-mondiale-est-en-cours-et-personne-n" },
            { label: "Reporterre : portrait de David Maenda Kithoko et de Génération Lumière", url: "https://reporterre.net/Terres-detruites-sang-verse-cet-exile-denonce-les-ravages-de-l-extractivisme-au-Congo" }
        ]
    },
    "opp_pascal_praud": {
        category: "Télévision & Climatodénialisme",
        bio: "Figure centrale du dispositif médiatique de Vincent Bolloré à la tête de L'Heure des Pros sur CNews et sur Europe 1, Pascal Praud incarne la dérive sensationnaliste et réactionnaire du débat télévisuel. Spécialiste des coups de gueule calibrés et du recadrage agressif des voix dissidentes, il s'est illustré par des sorties climatosceptiques notoires et des dérapages sur l'immigration, dans le cadre d'une chaîne régulièrement sanctionnée par l'Arcom pour manquement au pluralisme.",
        sources: [
            // [NOUVEAU][VÉRIFIÉ]
            { label: "Ozap/Puremédias : la mise en demeure de l'Arcom contre CNews (juin 2026)", url: "https://www.ozap.com/actu/un-traitement-univoque-de-lactualite-larcom-met-cnews-en-demeure-pour-manquement-a-ses-obligations-en-matiere-de-pluralisme/655599" },
            { label: "CBnews : l'Arcom met en demeure CNews", url: "https://www.cbnews.fr/node/101681" }
        ]
    },
    "opp_sarah_knafo": {
        category: "Transports & Déconnexion sociale",
        bio: "Députée européenne et figure stratégique du parti d'extrême droite Reconquête, Sarah Knafo articule son discours autour de la surenchère nationaliste et de la dénonciation des services publics. Ancienne magistrate à la Cour des comptes passée par les cercles du pouvoir, elle incarne une ligne ultralibérale et identitaire en rupture avec le quotidien des usagers des transports collectifs et des classes populaires.",
        sources: [
            // [À VÉRIFIER] Domaines réels mais génériques ; non revérifiés individuellement aujourd'hui.
            { label: "Mediapart — portrait et enquête sur Sarah Knafo", url: "https://www.mediapart.fr" },
            { label: "Le Monde — trajectoire et réseaux de l'eurodéputée", url: "https://www.lemonde.fr" }
        ]
    },
    "opp_editorialiste_plateau": {
        category: "Féminisme universel & Récupération",
        bio: "Depuis le soulèvement historique « Femme, Vie, Liberté » consécutif au meurtre de Mahsa Amini, les femmes iraniennes mènent une résistance héroïque contre l'apartheid de genre imposé par la République islamique. Sur les plateaux télévisés occidentaux, ce combat universel pour l'émancipation corporelle est pourtant régulièrement dévoyé par des éditorialistes réactionnaires, qui instrumentalisent le calvaire des Iraniennes pour nourrir un discours islamophobe domestique.",
        sources: [
            // [À VÉRIFIER] Organisations réelles et sérieuses mais liens génériques.
            { label: "Amnesty International — répression des femmes en Iran", url: "https://www.amnesty.fr" },
            { label: "Human Rights Watch — droits humains en Iran", url: "https://www.hrw.org" }
        ]
    },
    "opp_charles_alloncle": {
        category: "Audiovisuel public & Démantèlement",
        bio: "Député UDR allié au Rassemblement national et rapporteur d'une commission d'enquête parlementaire sur l'audiovisuel public, Charles Alloncle a porté en 2026 un réquisitoire virulent contre France Télévisions et Radio France. Son rapport, adopté de justesse (12 voix contre 10), préconise environ un milliard d'euros d'économies, la fusion de France 2 et France 5 et la suppression de France 4, sous couvert d'économies et de « neutralité ». Il a été dénoncé par les syndicats et professionnels de la culture comme un marchepied vers la privatisation.",
        sources: [
            // [VÉRIFIÉ] Lien d'origine confirmé exact et actif.
            { label: "Public Sénat : rapport Alloncle, la droite salue une base de discussion, la gauche dénonce une privatisation", url: "https://www.publicsenat.fr/actualites/parlementaire/rapport-polemique-de-charles-alloncle-diminuer-dun-quart-les-activites-de-laudiovisuel-public-ne-me-semble-pas-raisonnable" },
            // [NOUVEAU][VÉRIFIÉ] Remplace le lien SACD non confirmé.
            { label: "LCP : Charles Alloncle dément toute volonté d'affaiblir l'audiovisuel public", url: "https://lcp.fr/actualites/preserver-des-contenus-de-grande-qualite-charles-alloncle-dement-toute-velleite-d" }
        ]
    },

    // --- PALIER 4 ---
    "allie_collectif_palestine": {
        category: "Droit international & Solidarité",
        bio: "Depuis des décennies d'occupation militaire et de colonisation forcenée en Cisjordanie — rythmées par les destructions de foyers, les expulsions forcées et l'accaparement des terres par des colons armés sous escorte de Tsahal —, le peuple palestinien fait face à un système d'oppression structurelle documenté par l'ONU et les ONG comme un crime d'apartheid. Dans la bande de Gaza, l'offensive militaire menée par l'armée israélienne a fait des dizaines de milliers de morts civils. L'usage de la famine comme arme de guerre et le blocage des convois d'aide humanitaire ont été dénoncés par la Cour internationale de Justice.",
        sources: [
            // [À VÉRIFIER] Organisations réelles et majeures, liens de niveau page d'accueil non revérifiés individuellement aujourd'hui.
            { label: "Bureau du Haut-Commissariat de l'ONU aux droits de l'homme (OHCHR)", url: "https://www.ohchr.org" },
            { label: "Cour internationale de Justice — ordonnances sur la Convention sur le génocide", url: "https://www.icj-cij.org" },
            { label: "Amnesty International — rapport sur l'apartheid", url: "https://www.amnesty.fr" },
            { label: "Human Rights Watch — documentation des crimes de guerre", url: "https://www.hrw.org" },
            { label: "Compte du photojournaliste Motaz Azaiza", url: "https://www.instagram.com/motaz_azaiza" },
            { label: "Compte de la journaliste Bisan Owda", url: "https://www.instagram.com/wizard_bisan1" },
            { label: "Médecins Sans Frontières — urgence humanitaire", url: "https://www.msf.fr" },
            { label: "Faire un don d'urgence à Médecins du Monde", url: "https://donner.medecinsdumonde.org" }
        ]
    },
    "opp_flambee_carburants": {
        category: "Justice fiscale & Mouvements sociaux",
        bio: "L'envolée récurrente des cours des carburants à la pompe met en lumière la dépendance brutale de nos modèles économiques aux énergies fossiles ainsi que la vulnérabilité des ménages des zones périurbaines et rurales. Cette situation ravive le traumatisme et la mémoire politique du soulèvement des Gilets jaunes, né à l'automne 2018 d'une taxe carbone jugée profondément injuste.",
        sources: [
            // [À VÉRIFIER] Domaines réels et sérieux mais génériques.
            { label: "Cairn — dossier sociologique sur les Gilets jaunes", url: "https://shs.cairn.info" },
            { label: "INSEE — impact de la facture énergétique sur les ménages modestes", url: "https://www.insee.fr" },
            { label: "Le Monde Diplomatique — dépendance automobile et colère sociale", url: "https://www.monde-diplomatique.fr" }
        ]
    },
    "allie_fete_de_lhuma": {
        category: "Histoire sociale & Rassemblements",
        bio: "Créée en 1930 par Marcel Cachin, directeur du journal L'Humanité fondé par Jean Jaurès, la Fête de l'Humanité s'est imposée comme le plus grand rassemblement populaire, politique et culturel de France. Conçue à l'origine pour financer le quotidien communiste, la manifestation est portée par l'engagement bénévole de milliers de militants, d'associations, de syndicats et d'organisations de jeunesse.",
        sources: [
            { label: "Site officiel de la Fête de l'Humanité et billetterie", url: "https://fete.humanite.fr" },
            // [À VÉRIFIER] Domaines réels mais génériques.
            { label: "L'Humanité — archives et repères historiques", url: "https://www.humanite.fr" },
            { label: "CNRS — recherche sur la culture politique et populaire", url: "https://histoire-sociale.cnrs.fr" }
        ]
    },
    "opp_sommet_climat_onu": {
        category: "Géopolitique & Lobbies fossiles",
        bio: "Les sommets annuels de la Convention-cadre des Nations unies sur les changements climatiques (COP) se sont mués au fil des années en vitrines géantes de l'impuissance politique et du greenwashing étatique. Malgré les cris d'alarme répétés du GIEC, ces conférences peinent à imposer une sortie contraignante du charbon, du pétrole et du gaz, en partie du fait de l'omniprésence des lobbyistes des multinationales de l'énergie fossile au sein même des délégations.",
        sources: [
            // [À VÉRIFIER] Institutions réelles et majeures (GIEC, OMM, etc.) mais liens génériques non revérifiés individuellement aujourd'hui.
            { label: "GIEC (IPCC) — 6e rapport d'évaluation sur l'état du climat", url: "https://www.ipcc.ch" },
            { label: "Organisation météorologique mondiale — records de températures", url: "https://wmo.int" },
            { label: "Corporate Europe Observatory — lobbies fossiles dans les COP", url: "https://corporateeurope.org" },
            { label: "Observatoire du climat / Notre Affaire à Tous", url: "https://www.notre-affaire-a-tous.org" }
        ]
    },
};
