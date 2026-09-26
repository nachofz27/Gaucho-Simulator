// ==========================================
// BASE DE DONNÉES DU LORE & DES FICHES PROFILS
// ==========================================
const LORE_DATABASE = {
    // --- PALIER 1 ---
    "opp_gendarme_sainte_soline": {
        category: "Forces de l'ordre & Répression",
        bio: "Le 25 mars 2023 à Sainte-Soline (Deux-Sèvres), la mobilisation contre les mégabassines vire au drame : plus de 5 000 grenades lacrymogènes et explosives (GM2L) sont tirées en moins de deux heures par les gendarmes, faisant plus de 200 blessés parmi les manifestants, dont plusieurs éborgnés et deux personnes plongées dans le coma (Serge et Mickaël). Les enregistrements radio de la gendarmerie, révélés par la presse, attestent d'ordres d'une brutalité inouïe (« Tirez tendu ! », « Faut qu'on les tue ! ») et de tirs de LBD effectués depuis des quads en mouvement en violation flagrante des doctrines de maintien de l'ordre. Le SAMU et les secours d'urgence ont été bloqués sur ordre du commandement, retardant l'évacuation des blessés graves pendant près de deux heures.",
        sources: [
            { label: "Enquête vidéo & révélations sonores (Le Monde)", url: "https://www.lemonde.fr/planete/video/2023/04/10/sainte-soline-notre-reconstitution-visuelle-de-la-bataille-des-bassines_6168984_3244.html" },
            { label: "Révélations audio de Mediapart sur les tirs et les secours", url: "https://www.mediapart.fr/journal/france/110423/sainte-soline-les-enregistrements-qui-accablent-les-gendarmes" },
            { label: "Rapport de la Ligue des Droits de l'Homme (LDH)", url: "https://www.ldh-france.org/rapport-des-observateurs-sur-la-manifestation-de-sainte-soline/" }
        ]
    },
    
    "opp_flic_carcassonne": {
        category: "Institution policière & Racisme d'État",
        bio: "Une vidéo enregistrée par la caméra-piéton d'un équipage de la police municipale de Carcassonne et révélée par Midi Libre dévoile la tenue de propos ouvertement racistes. Dépêché pour un signalement d'animal percuté sur la chaussée, l'un des agents lance en singeant un accent stéréotypé : « C'est peut-être un migrant (...) Un petit Kirikou dans la savane ». Les enregistrements captés par leur matériel de dotation ont provoqué une vive polémique, entraînant l'ouverture d'une enquête judiciaire par le parquet ainsi que des procédures administratives.",
        sources: [
            { label: "Révélations de Midi Libre sur les enregistrements de la police municipale", url: "https://www.midilibre.fr" },
            { label: "Article de presse sur l'ouverture d'enquête et les réactions officielles", url: "https://france3-regions.francetvinfo.fr" }
        ]
    },

    "allie_feris_barkat": {
        category: "Écologie populaire & Banlieues",
        bio: "Originaire de Strasbourg, Féris Barkat est le cofondateur de l'association Banlieues Climat, lancée pour reconnecter les quartiers populaires aux enjeux écologiques sans discours moralisateur ou technocratique. Reconnu pour sa pédagogie de terrain percutante, il a notamment enseigné et donné des modules de cours sur l'écologie populaire et la justice environnementale à l'université Sorbonne Nouvelle. Son mouvement forme des centaines de jeunes des cités aux réalités du dérèglement climatique (précarité thermique des passoires HLM, manque d'îlots de fraîcheur, pollutions industrielles subies), en faisant de l'écologie un vecteur d'émancipation sociale, de formation professionnelle et de reprise de pouvoir sur leur cadre de vie.",
        sources: [
            { label: "Site officiel de l'association Banlieues Climat", url: "https://banlieuesclimat.com/" },
            { label: "Portrait et interview de Féris Barkat (France Inter)", url: "https://www.radiofrance.fr/franceinter/podcasts/la-terre-au-carre/la-terre-au-carre-du-jeudi-08-juin-2023-3882747" },
            { label: "Reportage StreetPress sur l'école populaire du climat", url: "https://www.streetpress.com/sujet/1687189196-banlieues-climat-feris-barkat-ecologie-populaire-quartiers" }
        ]
    },
    "allie_marco_militant": {
        category: "Militantisme de terrain",
        bio: "Loin d'une simple posture théorique, le militantisme de terrain constitue le moteur historique des transformations sociopolitiques. Qu'il s'exprime par l'action syndicale, la désobéissance civile, l'organisation de grèves ou la sensibilisation locale, l'engagement collectif permet de sortir les revendications de l'invisibilité et d'instaurer un rapport de force face aux institutions. Historiquement, l'essentiel des conquis sociaux — réduction du temps de travail, libertés civiles ou droits des minorités — n'a pas émergé spontanément des assemblées parlementaires, mais de la pression constante exercée par des personnes mobilisées sur le pavé, prêtes à braver la répression pour faire vaciller l'ordre établi.",
        sources: [
            { label: "Analyse sociologique sur l'action collective et les mouvements sociaux", url: "https://shs.cairn.info/sociologie-des-comportements-politiques--9782200634711-page-198" },
            { label: "Recherche sur l'histoire sociale des mobilisations et des engagements", url: "https://histoire-sociale.cnrs.fr/la-recherche/axe-1-2/" }
        ]
    },
   "opp_directeur_crous": {
        category: "Administration & Logement étudiant",
        bio: "Entre gel des aides au logement face à l'inflation et mesures d'austérité budgétaire, les structures du CROUS incarnent l'abandon institutionnel de la jeunesse précaire. La saturation chronique des parcs de logements universitaires, conjuguée à des coupes dans les budgets de fonctionnement, engendre des files d'attente interminables aux restaurants universitaires pour obtenir un repas décent. Les réformes ciblant les aides directes et la précarisation accrue des étudiants internationaux aggravent une crise matérielle majeure, transformant l'accès élémentaire à l'alimentation et au toit en un parcours d'épuisement quotidien.",
        sources: [
            { label: "Article de presse sur la crise du logement étudiant et la précarité universitaire", url: "https://www.humanite.fr" },
            { label: "Analyse sur les conditions de vie et les files d'attente aux distributions alimentaires étudiantes", url: "https://www.mediapart.fr" }
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
        bio: "Porté par le groupe concessionnaire et l'État entre Machilly et Thonon-les-Bains en Haute-Savoie, le projet d'autoroute A412 cristallise l'opposition entre expansion des infrastructures routières et urgence écologique. Traversant des dizaines d'hectares de forêts, de terres agricoles et de zones humides, ce chantier de 16,5 kilomètres menace des continuités écologiques majeures. Des militants du Groupe national de surveillance des arbres (GNSA), dont l'arboriste Thomas Brail, multiplient les actions de désobéissance civile directe et d'occupation pour entraver les abatteuses, dénonçant un modèle dépassé de tout-voiture qui sacrifie les écosystèmes au profit d'intérêts industriels privés.",
        sources: [
            { label: "Article d'analyse sur l'opposition citoyenne au chantier de l'A412", url: "https://lareleveetlapeste.fr/a412-les-citoyens-sopposent-aux-abatteuses-pour-sauver-lune-des-dernieres-forets-naturelles-du-bas-chablais/" },
            { label: "Enquête sur les impacts environnementaux et agricoles du projet d'autoroute", url: "https://fakirpresse.info/lautoroute-contre-les-gens-et-le-reblochon/" }
        ]
    },
    "opp_tonton_michel": {
        category: "Sociologie du quotidien",
        bio: "La cellule familiale constitue la première instance de socialisation politique, transmettant de manière diffuse mais profonde des visions du monde, des valeurs morales et des réflexes partisans. Loin de débats théoriques abstraits, c'est souvent lors des repas de famille — symbolisés par la figure stéréotypée du « tonton » aux remarques réactionnaires — que se heurtent les appartenances de classe, les clivages générationnels et l'incorporation inconsciente des hiérarchies sociales. La famille fonctionne ainsi comme un espace paradoxal d'apprentissage du conformisme ou de rupture idéologique, où l'adhésion ou la révolte politique se négocient d'abord dans l'intimité domestique.",
        sources: [
            { label: "Recherche sociologique sur la socialisation politique familiale et le vote", url: "https://shs.cairn.info/revue-francaise-de-science-politique-2015-4-page-643" },
            { label: "Dossier pédagogique sur les mécanismes de la socialisation primaire", url: "https://ses.ens-lyon.fr/articles/la-socialisation-politique-des-enfants" }
        ]
    },
    "opp_cadre_liberal_micro": {
        category: "Économie & Fiscalité",
        bio: "Théorisée par l'économiste Gabriel Zucman, la taxe sur les ultra-riches propose un impôt plancher de 2 % sur le patrimoine des plus grandes fortunes (au-delà de 100 millions d'euros ou milliardaires selon les déclinaisons). Conçue pour corriger une régressivité fiscale où les plus fortunés s'acquittent d'un taux effectif d'imposition bien plus faible que les classes moyennes, elle rapporterait entre 15 et 25 milliards d'euros par an en France et près de 250 milliards au niveau mondial. Défendue par des cadres libéraux pourtant non concernés par cette infime tranche (0,001 % de la population), la menace d'un exil fiscal massif relève du mythe : des dispositifs comme l'exit tax ou des mesures de taxation ciblée — à l'image du projet new-yorkais soutenu par Zohran Mamdani et Zucman visant les résidences secondaires de luxe (Pied-à-terre tax) pour lever des centaines de millions de dollars — prouvent que la fuite des capitaux peut être neutralisée juridiquement.",
        sources: [
            { label: "Rapport de Gabriel Zucman pour le G20 sur la taxation des milliardaires", url: "https://gabriel-zucman.eu/files/report-g20.pdf" },
            { label: "Analyse économique de l'OFCE sur la taxe Zucman et l'impôt plancher", url: "https://www.ofce.fr/wp/2026/6/" }
        ]
    },
   "opp_porte_parole_identitaire": {
        category: "Extrême droite & Droits LGBT+",
        bio: "La résurgence des groupuscules d'extrême droite violents — qu'ils gravitent autour de groupements néofascistes ou de collectifs dissous comme l'Alvarium, la Division Martel ou les Zouaves Paris — s'accompagne d'une multiplication des actions ciblant les minorités et les personnes LGBT+. Derrière un discours pseudo-légaliste sur la défense de l'ordre moral ou identitaire, ces militants mènent des dégradations coordonnées (recouvrement systématique de passages piétons et fresques arc-en-ciel à la peinture noire) mais aussi des agressions physiques, des ratonnades visant des personnes racisées et des expéditions punitives contre les personnes sans-abri. L'homophobie et la transphobie constituent des piliers de leur propagande haineuse, articulée autour du rejet violent de toute remise en cause des normes patriarcales et suprémacistes.",
        sources: [
            { label: "Rapport de la Commission nationale consultative des droits de l'homme (CNCDH) sur les violences d'extrême droite", url: "https://www.cncdh.fr" },
            { label: "Enquête journalistique sur les agressions commises par les réseaux ultranationalistes et néofascistes", url: "https://www.mediapart.fr" },
            { label: "Rapport annuel de SOS Homophobie sur les attaques et dégradations anti-LGBT+", url: "https://www.sos-homophobie.org" }
        ]
    },
    "opp_porte_parole_syndicat_police": {
        category: "Législation & Violences d'État",
        bio: "Portée par plusieurs syndicats de police et des formations de droite comme d'extrême droite, la revendication d'une « présomption de légitime défense » — souvent qualifiée de « permis de tuer » par ses détracteurs et les ONG — vise à renverser la charge de la preuve en cas d'ouverture de feu. Depuis l'adoption de l'article L. 435-1 du Code de la sécurité intérieure en 2017, le nombre de tirs mortels lors de refus d'obtempérer a connu une hausse dramatique, documentée par de multiples enquêtes indépendantes. Instaurer une présomption de légalité a priori entraverait l'accès à la justice pour les familles de victimes et affaiblirait le contrôle judiciaire. Historiquement et sociologiquement, accorder l'impunité juridique aux dépositaires de la force publique constitue le premier rouage d'une dérive autoritaire, où le monopole de la violence légitime théorisé dans l'État de droit bascule vers une logique de répression d'exception, caractéristique des régimes policiers et fascistes.",
        sources: [
            { label: "Dossier d'Amnesty International sur les dérives de la présomption de légitime défense pour les forces de l'ordre", url: "https://www.amnesty.fr/reperes/loi-presomption-de-legitime-defense-des-policiers-les-intox/" },
            { label: "Tribune du Syndicat de la Magistrature sur l'usage des armes à feu et l'État de droit", url: "https://www.syndicat-magistrature.fr" },
            { label: "Rapport parlementaire et analyse juridique sur l'application de l'article L. 435-1 du Code de la sécurité intérieure", url: "https://www.assemblee-nationale.fr" }
        ]
    },
   "opp_emissaire_ars": {
        category: "Hôpital public & Santé",
        bio: "L'hôpital public traverse une crise structurelle profonde, accentuée par des années de politiques de tarification à l'activité (T2A), de fermetures continues de lits et de coupes budgétaires sous les mandats Macron. Le manque criant de moyens matériels et humains engendre une saturation permanente des services d'urgences, des délais de prise en charge démesurés et des conditions de travail délétères pour les soignants, provoquant une vague massive de démissions. Cette gestion managériale pilotée par les Agences régionales de santé (ARS) délaisse la logique de service public universel au profit d'une logique comptable, avec des conséquences tragiques sur la prise en charge et une mortalité évitable documentée aux urgences.",
        sources: [
            { label: "Rapport de la Cour des comptes sur les tensions et finances de l'hôpital public", url: "https://www.ccomptes.fr" },
            { label: "Enquêtes de terrain de Mediapart sur la dégradation des urgences hospitalières", url: "https://www.mediapart.fr" },
            { label: "Données de la DREES sur les capacités hospitalières et les fermetures de lits en France", url: "https://drees.solidarites-sante.gouv.fr" }
        ]
    },
    "opp_depute_rn_interview": {
        category: "Laïcité dévoyée & Libertés",
        bio: "La volonté du Rassemblement national d'interdire le port du foulard islamique dans l'ensemble de l'espace public constitue une rupture avec les principes fondateurs de l'État de droit et de la laïcité républicaine, garantie par la loi de 1905 comme la liberté de conscience et de culte. Sous couvert d'émancipation féministe, cette proposition impose une contrainte étatique sur le corps et les choix vestimentaires des femmes musulmanes, restreignant leur liberté d'aller et venir sous peine d'amende. Sur le plan pratique et juridique, une telle interdiction ouvre la voie à un contrôle arbitraire et policier des apparences, multipliant inévitablement les contrôles au faciès et les discriminations systémiques visant les minorités racisées.",
        sources: [
            { label: "Avis de la Commission nationale consultative des droits de l'homme sur la laïcité et les libertés fondamentales", url: "https://www.cncdh.fr" },
            { label: "Analyse juridique de la Ligue des droits de l'Homme sur les dérives liberticides des projets anti-voile", url: "https://www.ldh-france.org" }
        ]
    },
    "allie_clement_viktorovitch": {
        category: "Analyse rhétorique & Médias",
        bio: "Docteur en science politique, enseignant et vulgarisateur, Clément Viktorovitch est spécialisé dans l'analyse du discours et la rhétorique politique. À la télévision comme sur le web, il décortique les mécanismes de persuasion, les sophismes et les éléments de langage employés par les responsables publics pour contourner le débat démocratique. En parallèle, l'opération politique des « 1 000 cafés » ou des échanges dans les bistrots portée par la macronie pour renouer avec la ruralité a suscité de vives critiques : souvent réduite à une stratégie de pure communication pour esquiver la contestation sociale, l'initiative a été raillée pour ses bilans mitigés et des réunions publiques désertées, parfois organisées devant une poignée d'élus et de militants.",
        sources: [
            { label: "Chaîne YouTube officielle de Clément Viktorovitch", url: "https://www.youtube.com/@clementviktorovitch" },
            { label: "Article de presse sur le dispositif des bistrots ruraux et les bilans politiques", url: "https://www.lemonde.fr" }
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
    "opp_emissaire_ars": {
        category: "Hôpital public & Santé",
        bio: "L'hôpital public traverse une crise structurelle profonde, accentuée par des années de politiques de tarification à l'activité (T2A), de fermetures continues de lits et de coupes budgétaires sous les mandats Macron. Le manque criant de moyens matériels et humains engendre une saturation permanente des services d'urgences, des délais de prise en charge démesurés et des conditions de travail délétères pour les soignants, provoquant une vague massive de démissions. Cette gestion managériale pilotée par les Agences régionales de santé (ARS) délaisse la logique de service public universel au profit d'une logique comptable, avec des conséquences tragiques sur la prise en charge et une mortalité évitable documentée aux urgences.",
        sources: [
            { label: "Rapport de la Cour des comptes sur les tensions et finances de l'hôpital public", url: "https://www.ccomptes.fr" },
            { label: "Enquêtes de terrain de Mediapart sur la dégradation des urgences hospitalières", url: "https://www.mediapart.fr" },
            { label: "Données de la DREES sur les capacités hospitalières et les fermetures de lits en France", url: "https://drees.solidarites-sante.gouv.fr" }
        ]
    },
    "opp_depute_rn_interview": {
        category: "Laïcité dévoyée & Libertés",
        bio: "La volonté du Rassemblement national d'interdire le port du foulard islamique dans l'ensemble de l'espace public constitue une rupture avec les principes fondateurs de l'État de droit et de la laïcité républicaine, garantie par la loi de 1905 comme la liberté de conscience et de culte. Sous couvert d'émancipation féministe, cette proposition impose une contrainte étatique sur le corps et les choix vestimentaires des femmes musulmanes, restreignant leur liberté d'aller et venir sous peine d'amende. Sur le plan pratique et juridique, une telle interdiction ouvre la voie à un contrôle arbitraire et policier des apparences, multipliant inévitablement les contrôles au faciès et les discriminations systémiques visant les minorités racisées.",
        sources: [
            { label: "Avis de la Commission nationale consultative des droits de l'homme sur la laïcité et les libertés fondamentales", url: "https://www.cncdh.fr" },
            { label: "Analyse juridique de la Ligue des droits de l'Homme sur les dérives liberticides des projets anti-voile", url: "https://www.ldh-france.org" }
        ]
    },
    "allie_clement_viktorovitch": {
        category: "Analyse rhétorique & Médias",
        bio: "Docteur en science politique, enseignant et vulgarisateur, Clément Viktorovitch est spécialisé dans l'analyse du discours et la rhétorique politique. À la télévision comme sur le web, il décortique les mécanismes de persuasion, les sophismes et les éléments de langage employés par les responsables publics pour contourner le débat démocratique. En parallèle, l'opération politique des « 1 000 cafés » ou des échanges dans les bistrots portée par la macronie pour renouer avec la ruralité a suscité de vives critiques : souvent réduite à une stratégie de pure communication pour esquiver la contestation sociale, l'initiative a été raillée pour ses bilans mitigés et des réunions publiques désertées, parfois organisées devant une poignée d'élus et de militants.",
        sources: [
            { label: "Chaîne YouTube officielle de Clément Viktorovitch", url: "https://www.youtube.com/@clementviktorovitch" },
            { label: "Article de presse sur le dispositif des bistrots ruraux et les bilans politiques", url: "https://www.lemonde.fr" }
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
    "opp_maire_deambulation": {
        category: "Aménagement urbain & Greenwashing",
        bio: "Procédé de communication trompeur, le greenwashing (ou écoblanchiment) consiste pour une collectivité, un responsable politique ou une entreprise à mobiliser les codes et l'esthétique de l'écologie pour masquer l'absence d'engagements environnementaux réels. Dans la gestion municipale, il se traduit fréquemment par des opérations cosmétiques très médiatisées — installation de jardinières, réfection d'une place minérale avec quelques arbrisseaux ou communication sur des micro-forêts urbaines — pendant que se poursuivent l'artificialisation des sols périphériques, le tout-voiture et la densification bétonnée. Dans le monde corporatif, cette stratégie vise à capter des labels RSE avantageux et à s'acheter une respectabilité sociétale sans remettre en cause des modèles économiques extractivistes et polluants.",
        sources: [
            { label: "Guide de l'ADEME pour identifier et prévenir les pratiques de greenwashing", url: "https://www.ademe.fr" },
            { label: "Enquête journalistique sur les dérives de l'écoblanchiment dans l'aménagement urbain", url: "https://reporterre.net" }
        ]
    },
    "opp_militant_rn_tractage": {
        category: "Protection de l'enfance & Récupération",
        bio: "Les débats parlementaires sur le durcissement pénal des infractions pédo-criminelles cristallisent une opposition nette entre logique de surenchère répressive et impératif de protection effective des victimes. Face aux initiatives de la droite et de l'extrême droite visant à empiler des peines planchers ou la perpétuité, la gauche — notamment La France insoumise — dénonce un populisme pénal inefficace qui fait l'économie des moyens matériels pour la justice, l'Aide sociale à l'enfance et la pédopsychiatrie. Juridiquement et criminologiquement, la sévérité maximale sans nuance comporte un risque pervers majeur : acculer l'agresseur (très majoritairement issu du cercle intrafamilial), renforçant ainsi la terreur, le chantage, le huis clos et la loi du silence exercés sur l'enfant pour éviter toute dénonciation.",
        sources: [
            { label: "Rapport de la Commission indépendante sur l'inceste et les violences sexuelles faites aux enfants (CIIVISE)", url: "https://www.ciivise.fr" },
            { label: "Analyse parlementaire et juridique sur la surenchère pénale face aux violences sexuelles", url: "https://www.assemblee-nationale.fr" }
        ]
    },
    "opp_tonton_michel_repas": {
        category: "Santé menstruelle & Précarité",
        bio: "Texte de présentation / contexte en attente...",
        sources: []
    },
   "opp_influenceur_masculiniste": {
        category: "Masculinisme & Réseaux sociaux",
        bio: "Propulsée par les algorithmes de TikTok, YouTube ou Instagram, la « manosphère » réunit des créateurs de contenu qui diffusent une idéologie ouvertement antiféministe et patriarcale, à l'image des figures internationales comme Andrew Tate ou de leurs émules francophones. Prétendant réhabiliter une « masculinité alpha » perdue à coup de pseudo-développement personnel, de culte de la performance financière et de fixation sur le corps musclé, ces influenceurs véhiculent des discours de haine décomplexés, la banalisation du viol et le contrôle systématique du corps des femmes. Ce phénomène séduit de jeunes garçons en exploitant leurs insécurités affectives pour les radicaliser vers une misogynie violente et assumée.",
        sources: [
            { label: "Rapport du Haut Conseil à l'Égalité entre les femmes et les hommes sur le masculinisme et la haine en ligne", url: "https://www.haut-conseil-egalite.gouv.fr" },
            { label: "Enquête sociologique sur les dérives et le recrutement des réseaux masculinistes", url: "https://www.mediapart.fr" }
        ]
    },
    "allie_benevole_cop1": {
        category: "Solidarité & Précarité étudiante",
        bio: "Fondée en 2020 par des étudiants pour les étudiants, l'association Cop1 - Solidarités Étudiantes lutte contre la précarité croissante qui frappe la jeunesse universitaire à travers toute la France. Entièrement gratuite et apartisane, la structure organise des distributions massives et hebdomadaires de paniers de denrées alimentaires, de produits d'hygiène et de matériel de première nécessité, sans distinction de nationalité ou de statut. Au-delà de l'aide d'urgence, Cop1 brise l'isolement social en accompagnant les étudiants dans l'accès aux droits, le soutien psychologique, l'insertion professionnelle et l'accès à la culture.",
        sources: [
            { label: "Faire un don ou soutenir les actions de l'association Cop1", url: "https://cop1.fr/faire-un-don/" },
            { label: "Site officiel de Cop1 - Solidarités Étudiantes", url: "https://cop1.fr" }
        ]
    },
    "opp_vincent_lapierre": {
        category: "Vidéaste d'extrême droite",
        bio: "Ancien collaborateur d'Alain Soral au sein d'Égalité & Réconciliation et fondateur du média en ligne « Le Média pour Tous », Vincent Lapierre illustre la stratégie des propagandistes d'extrême droite s'autoproclamant « reporters de terrain ». Équipé d'un micro lors de cortèges syndicaux ou de rassemblements antifascistes, il utilise la méthode de la provocation calculée pour susciter des réactions hostiles et fabriquer des images de victimisation. Sous couvert d'une prétendue « réinformation » populaire, ses séquences réductrices servent à alimenter la panique morale sur l'immigration, légitimer les thèses identitaires et banaliser le discours nationaliste auprès d'un public jeune.",
        sources: []
    },

    // --- PALIER 3 ---
    "allie_jean_marc_jancovici": {
        category: "Énergie & Climat",
        bio: "Ingénieur, enseignant et président du think tank The Shift Project, Jean-Marc Jancovici est une figure centrale de la vulgarisation des enjeux physiques du dérèglement climatique et de la transition énergétique. Développeur du premier Bilan Carbone pour l'ADEME et co-auteur de la bande dessinée Le Monde sans fin, il théorise l'intime corrélation entre consommation d'énergies fossiles et croissance du PIB, démontrant que nos sociétés thermo-industrielles sont confrontées à une contraction physique inévitable. Fervent défenseur de l'atome civil comme énergie décarbonée de transition et promoteur d'une planification axée sur la sobriété matérielle, ses travaux appellent à une réorganisation structurelle de l'économie pour sortir du mirage des croissances infinies dans un monde aux ressources finies.",
        sources: [
            { label: "Site officiel de vulgarisation et publications de Jean-Marc Jancovici", url: "https://jancovici.com" },
            { label: "Travaux et rapports de prospective énergétique du Shift Project", url: "https://theshiftproject.org" }
        ]
    },
    "opp_presentateur_cnews": {
        category: "Empire médiatique & Médias de masse",
        bio: "Pilier de la stratégie d'hégémonie culturelle déployée par le milliardaire Vincent Bolloré à travers son empire (groupe Canal+, Vivendi, Hachette, Europe 1, Le JDD), CNews a transformé le paysage audiovisuel en appliquant les recettes sensationnalistes et polarisantes de l'américaine Fox News. Sous couvert d'émissions de débats, l'antenne privilégie les figures d'extrême droite, les intervenants de publications réactionnaires (Valeurs actuelles, Frontières) et des rhétoriques ouvertement climatosceptiques ou complotistes. Régulièrement sanctionnée et mise en demeure par l'Arcom pour des manquements graves au pluralisme politique, diffusion de fausses informations et propos haineux sans contradiction, la chaîne agit comme un levier idéologique puissant au service de la panique morale et de la normalisation du discours nationaliste.",
        sources: [
            { label: "Enquête approfondie de Télérama sur les coulisses et l'idéologie de l'empire Bolloré", url: "https://www.telerama.fr" },
            { label: "Décisions et sanctions de l'Arcom visant la chaîne CNews", url: "https://www.arcom.fr" },
            { label: "Dossier de Mediapart sur la concentration des médias et la stratégie politique de Bolloré", url: "https://www.mediapart.fr" }
        ]
    },
    "opp_robert_menard": {
        category: "Politique locale & Réaction",
        bio: "Maire de Béziers depuis 2014, élu avec l'appui de l'extrême droite après avoir cofondé Reporters sans frontières, Robert Ménard a fait de sa commune un laboratoire des politiques réactionnaires et de la provocation médiatique continue. Multipliant les arrêtés polémiques et les campagnes d'affichage municipal agressives, il s'est notamment illustré par la tentative illégale de fichage confessionnel des élèves scolarisés, l'armement ostentatoire et la militarisation de la police municipale (« désormais les policiers ont un nouvel ami »), l'instauration de couvre-feux pour les mineurs, l'installation récurrente de crèches de la Nativité en mairie ou encore son refus illégal de célébrer des mariages mixtes, instrumentalisant l'action municipale pour nourrir les paniques identitaires.",
        sources: [
            { label: "Enquête de presse sur la gestion municipale et les dérives de Robert Ménard à Béziers", url: "https://www.mediapart.fr" },
            { label: "Article du Monde sur les condamnations et polémiques judiciaires du maire de Béziers", url: "https://www.lemonde.fr" }
        ]
    },
    "allie_generation_lumiere": {
        category: "Solidarité internationale & Congo",
        bio: "Cofondée et présidée par David Maenda Kithoko, Génération Lumière est une organisation écologiste décoloniale luttant à l'intersection de la justice environnementale, des droits humains et du numérique. L'association alerte sur le coût humain et écologique de la transition énergétique des pays du Nord en République démocratique du Congo (RDC), où l'extraction effrénée du cobalt, du cuivre et du coltan alimente les nouvelles technologies au détriment des populations locales. Ces richesses minérales attisent les conflits armés meurtriers dans l'Est du pays, impliquant la rébellion du M23 soutenue par le Rwanda, tandis que l'Union européenne et la France continuent de nouer des accords stratégiques d'approvisionnement en matières premières sans contraindre les multinationales à cesser le pillage et le travail forcé dans les mines.",
        sources: [
            { label: "Faire un don ou soutenir les actions de l'association Génération Lumière", url: "https://www.helloasso.com/associations/generation-lumiere" },
            { label: "Enquête et entretien de Ritimo avec David Kithoko sur l'extractivisme en RDC", url: "https://www.ritimo.org/No-Congo-No-Future-entretien-avec-David-Kithoko" },
            { label: "Rapport d'Amnesty International sur les expulsions forcées et l'exploitation minière en RDC", url: "https://www.amnesty.fr" }
        ]
    },
    "opp_pascal_praud": {
        category: "Télévision & Climatodénialisme",
        bio: "Figure centrale du dispositif médiatique de Vincent Bolloré à la tête de L'Heure des Pros sur CNews et sur Europe 1, Pascal Praud incarne la dérive sensationnaliste et réactionnaire du débat télévisuel. Spécialiste des coups de gueule calibrés et du recadrage agressif des voix dissidentes, il s'est illustré par des sorties climatosceptiques notoires (moquant les prévisions scientifiques en assimilant dérèglement climatique et simple météo de saison face à des climatologues), des dérapages sur l'immigration et la banalisation des paniques morales d'extrême droite. Cumulant les rappels à l'ordre et les condamnations de l'Arcom pour manquements à la rigueur de l'information et absence de maîtrise de l'antenne, ses émissions fonctionnent comme une tribune quotidienne de légitimation des obsessions identitaires.",
        sources: [
            { label: "Dossier critique de Télérama sur les méthodes et polémiques de Pascal Praud", url: "https://www.telerama.fr" },
            { label: "Enquête de Mediapart sur l'antenne de CNews et le rôle pivot de Pascal Praud", url: "https://www.mediapart.fr" }
        ]
    },
    "opp_sarah_knafo": {
        category: "Transports & Déconnexion sociale",
        bio: "Députée européenne et figure stratégique du parti d'extrême droite Reconquête, Sarah Knafo articule son discours autour de la surenchère nationaliste et de la dénonciation des services publics. Ancienne magistrate à la Cour des comptes passée par les cercles du pouvoir, elle incarne une ligne ultralibérale et identitaire en rupture complète avec le quotidien des usagers des transports collectifs et des classes populaires. Évoluant dans le premier cercle d'Éric Zemmour (condamné à de multiples reprises pour provocation à la haine raciale et religieuse) et entourée de réseaux de militants radicaux issus de la mouvance nationaliste, elle instrumentalise la question des mobilités et des libertés individuelles pour flatter l'individualisme bourgeois tout en rejetant les impératifs de transition écologique et de solidarité territoriale.",
        sources: [
            { label: "Portrait et enquête de Mediapart sur l'ascension politique de Sarah Knafo", url: "https://www.mediapart.fr" },
            { label: "Article du Monde sur la trajectoire et les réseaux de l'eurodéputée Reconquête", url: "https://www.lemonde.fr" }
        ]
    },
    "opp_editorialiste_plateau": {
        category: "Féminisme universel & Récupération",
        bio: "Depuis le soulèvement historique « Femme, Vie, Liberté » consécutif au meurtre de Mahsa Amini, les femmes iraniennes mènent une résistance héroïque contre l'apartheid de genre imposé par la République islamique. Bravant l'intensification brutale de la répression — surveillance algorithmique, passages à tabac par la police des mœurs, vagues d'exécutions et durcissement des peines de prison visant les figures militantes —, elles défient l'oppression théocratique au péril de leur vie. Sur les plateaux télévisés occidentaux, ce combat universel pour l'émancipation corporelle et les libertés fondamentales est pourtant régulièrement dévoyé par des éditorialistes réactionnaires, qui instrumentalisent le calvaire des Iraniennes pour nourrir un discours islamophobe domestique tout en méprisant les luttes féministes locales.",
        sources: [
            { label: "Rapports et alertes d'Amnesty International sur la répression des femmes en Iran", url: "https://www.amnesty.fr" },
            { label: "Dossier de Human Rights Watch sur les violences d'État et les droits humains en Iran", url: "https://www.hrw.org" }
        ]
    },
    "opp_charles_alloncle": {
        category: "Audiovisuel public & Démantèlement",
        bio: "Député ciottiste allié au Rassemblement national et rapporteur d'une commission d'enquête parlementaire sur l'audiovisuel public, Charles Alloncle (parfois confondu dans le débat public avec le chroniqueur Charles Consigny) a porté un réquisitoire virulent contre France Télévisions et Radio France. Préconisant des coupes budgétaires massives, la suppression de chaînes et l'ouverture à une privatisation partielle sous couvert d'économies et de « neutralité », ses travaux ont été dénoncés par les syndicats et les professionnels de la culture comme une tentative de mise au pas idéologique. Face aux appétits des conglomérats privés et à la concentration des médias entre les mains de milliardaires, l'audiovisuel public demeure pourtant un garant indispensable de l'indépendance de l'information, de la création artistique et de l'accès universel à la culture.",
        sources: [
            { label: "Analyse critique de la SACD dénonçant le rapport parlementaire sur l'audiovisuel public", url: "https://www.sacd.fr/fr/rapport-alloncle-un-projet-de-demantelement-de-laudiovisuel-public" },
            { label: "Article de Public Sénat sur les propositions et les polémiques du rapport Alloncle", url: "https://www.publicsenat.fr/actualites/parlementaire/rapport-polemique-de-charles-alloncle-diminuer-dun-quart-les-activites-de-laudiovisuel-public-ne-me-semble-pas-raisonnable" }
        ]
    },

    // --- PALIER 4 ---
    "allie_collectif_palestine": {
        category: "Droit international & Solidarité",
        bio: "Depuis des décennies d'occupation militaire et de colonisation forcenée en Cisjordanie — rythmées par les destructions de foyers, les expulsions forcées et l'accaparement des terres par des colons armés sous escorte de Tsahal —, le peuple palestinien fait face à un système d'oppression structurelle documenté par l'ONU et les ONG comme un crime d'apartheid. Dans la bande de Gaza, l'offensive militaire menée par l'armée israélienne a pris des proportions génocidaires caractérisées par l'élimination de dizaines de milliers de civils, dont une écrasante majorité d'enfants et de femmes, l'anéantissement délibéré du système de soins et le ciblage d'infrastructures vitales. L'usage délibéré de la famine comme arme de guerre et le blocage systématique des convois d'aide humanitaire bafouent l'ensemble des conventions internationales et les ordonnances de la Cour internationale de Justice. Face à l'inertie complice et au deux poids, deux mesures des chancelleries occidentales, les mouvements de solidarité internationale, les soignants et les reporters locaux sur le terrain documentent sans relâche le massacre au péril de leur propre vie, réclamant un cessez-le-feu permanent, la levée du blocus et des sanctions immédiates.",
        sources: [
            { label: "Rapports de Francesca Albanese, Rapporteuse spéciale de l'ONU sur la situation des droits de l'homme dans les territoires palestiniens occupés", url: "https://www.ohchr.org" },
            { label: "Ordonnances et mesures conservatoires de la Cour internationale de Justice concernant l'application de la Convention sur le génocide", url: "https://www.icj-cij.org" },
            { label: "Rapport d'Amnesty International qualifiant le régime israélien d'apartheid contre les Palestiniens", url: "https://www.amnesty.fr" },
            { label: "Enquêtes de terrain et documentation des crimes de guerre par Human Rights Watch", url: "https://www.hrw.org" },
            { label: "Compte d'information et reportages sur le terrain du photojournaliste Motaz Azaiza", url: "https://www.instagram.com/motaz_azaiza" },
            { label: "Témoignages et couvertures d'urgence de la journaliste Bisan Owda sur le quotidien des civils", url: "https://www.instagram.com/wizard_bisan1" },
            { label: "Soutien et urgence humanitaire sur le terrain avec Médecins Sans Frontières", url: "https://www.msf.fr" },
            { label: "Faire un don d'urgence aux équipes de Médecins du Monde mobilisées à Gaza et en Cisjordanie", url: "https://donner.medecinsdumonde.org" }
        ]
    },
    "opp_flambee_carburants": {
        category: "Justice fiscale & Mouvements sociaux",
        bio: "L'envolée récurrente des cours des carburants à la pompe met en lumière la dépendance brutale de nos modèles économiques aux énergies fossiles ainsi que la vulnérabilité des ménages des zones périurbaines et rurales. Directement tributaire des tensions géopolitiques, des blocus et des risques de perturbation du trafic maritime dans les détroits stratégiques du Moyen-Orient (Ormuz, Bab-el-Mandeb), cette flambée des prix pèse lourdement sur les budgets populaires alors que les compagnies pétrolières continuent d'enregistrer des superprofits records. Cette situation ravive le traumatisme et la mémoire politique du soulèvement des Gilets jaunes, né à l'automne 2018 d'une taxe carbone jugée profondément injuste. Le mouvement a démontré que la transition écologique ne peut être imposée par une fiscalité régressive qui punit les travailleurs contraints d'utiliser leur voiture sans leur offrir d'alternatives ferroviaires ou de transports publics viables, transformant la question de l'énergie en un front central de la lutte des classes.",
        sources: [
            { label: "Dossier sociologique de référence sur l'origine et les dynamiques du mouvement des Gilets jaunes", url: "https://shs.cairn.info" },
            { label: "Analyses de l'INSEE sur l'impact de la facture énergétique et des carburants sur les ménages modestes", url: "https://www.insee.fr" },
            { label: "Enquête du Monde Diplomatique sur la dépendance automobile, la relégation spatiale et la colère sociale", url: "https://www.monde-diplomatique.fr" }
        ]
    },
    "allie_fete_de_lhuma": {
        category: "Histoire sociale & Rassemblements",
        bio: "Créée en 1930 par Marcel Cachin, directeur du journal L'Humanité fondé par Jean Jaurès, la Fête de l'Humanité s'est imposée comme le plus grand rassemblement populaire, politique et culturel de France. Conçue à l'origine pour financer le quotidien communiste et briser l'hégémonie de la presse bourgeoise, la manifestation est portée par l'engagement bénévole de milliers de militants, d'associations, de syndicats et d'organisations de jeunesse. Chaque année en septembre, ce festival à prix d'entrée volontairement accessible combine concerts d'artistes internationaux, débats politiques de premier plan, solidarité ouvrière et rencontres citoyennes. Plus qu'un simple événement festif, la Fête de l'Huma constitue un sanctuaire vivant de la mémoire des luttes sociales, du Front populaire aux combats contemporains, permettant aux gauches et aux mouvements populaires de confronter leurs idées et de refaire le monde loin de l'entre-soi des élites.",
        sources: [
            { label: "Site officiel de la Fête de l'Humanité et billetterie solidaire", url: "https://fete.humanite.fr" },
            { label: "Dossier d'archives et repères historiques sur les origines de la Fête de l'Humanité", url: "https://www.humanite.fr" },
            { label: "Recherche historique du CNRS sur la culture politique et populaire de la Fête de l'Huma", url: "https://histoire-sociale.cnrs.fr" }
        ]
    },
    "opp_sommet_climat_onu": {
        category: "Géopolitique & Lobbies fossiles",
        bio: "Les sommets annuels de la Convention-cadre des Nations unies sur les changements climatiques (COP) se sont mués au fil des années en vitrines géantes de l'impuissance politique et du greenwashing étatique. Malgré les cris d'alarme répétés du Groupe d'experts intergouvernemental sur l'évolution du climat (GIEC) attestant de l'accélération des canicules extrêmes, des mégafeux, des inondations dévastatrices et du basculement irréversible de points de non-retour planétaires, ces conférences peinent à imposer une sortie contraignante du charbon, du pétrole et du gaz. L'omniprésence record des lobbyistes des multinationales de l'énergie fossile au sein même des délégations et l'accueil régulier des négociations par des pétromonarchies autoritaires neutralisent les décisions d'urgence. Cette incapacité diplomatique à contraindre le capital fossile nourrit en retour le désespoir citoyen, laissant le champ libre à une désinformation en ligne croissante qui tente de relativiser le consensus scientifique pour préserver les rentes industrielles.",
        sources: [
            { label: "Synthèse officielle du 6e rapport d'évaluation du GIEC (IPCC) sur l'état du climat", url: "https://www.ipcc.ch" },
            { label: "Rapports de l'Organisation météorologique mondiale sur les records mondiaux de températures", url: "https://wmo.int" },
            { label: "Enquêtes de Corporate Europe Observatory sur l'influence des lobbies fossiles au sein des COP", url: "https://corporateeurope.org" },
            { label: "Analyses de l'Observatoire du climat sur la trajectoire des émissions de gaz à effet de serre", url: "https://www.notre-affaire-a-tous.org" }
        ]
    },
};