// ==========================================
// BASE DE DONNÉES - PALIER 1 (LOCAL & QUOTIDIEN)
// ==========================================

const gameEvents = [// -------------------------------------------------------------
    // PERSONNAGE : LE TONTON RACISTE (Palier 1 — Score : 10 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Opposant
    // Thème : Antifascisme & Droites (theme-antifa)
    // -------------------------------------------------------------
    {
        id: "tonton_saucisson_halal",
        characterId: "opp_tonton_raciste",
        characterName: "Le Tonton Raciste",
        tier: 1,
        scoreIndex: 10,
        theme: "theme-antifa",
        titre: "La panique du saucisson de tofu halal",
        description: "En plein repas de famille au moment du fromage, ton oncle brandit une tranche de saucisson : « Bientôt avec vos délires de wokes, on sera obligés de bouffer du saucisson de tofu certifié halal et d'apprendre l'arabe en maternelle ! » Tout le monde soupire autour de la table en attendant ta réaction.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH / PROVOCATION (Pari à double issue)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Si le tofu te fait peur, dis-toi que c'est l'agro-industrie capitaliste qui détruit les éleveurs, pas le boucher du coin ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Coup d'Éclat (50%)
                outcomeSuccess: {
                    impact: { followers: 800, budget: 0, energy: -12, credibility: 3, tension: 3 },
                    consequenceText: "Tonton s'étouffe avec son bout de pain sous les rires de la table. Ton petit cousin a tout filmé en douce et la vidéo cartonne auprès des jeunes.",
                    tweets: [
                        { author: "Cousin Enzo", handle: "@Enzo_Off", text: "Le tonton en PLS devant l'analyse matérialiste du saucisson, j'ai tout filmé sous la table 😭💀" },
                        { author: "Tonton Gérard", handle: "@Gerard_Patriote34", text: "On ne peut plus manger tranquillement en famille sans se faire insulter par la jeunesse endoctrinée !" },
                        { author: "Maman", handle: "@Brigitte_Maman", text: "Merci d'avoir remis ton oncle à sa place, il devenait vraiment lourd après le deuxième verre." },
                        { author: "Groupe Famille", handle: "@Famille_Infos", text: "Rappel : merci de laisser la politique à la porte pour le dessert svp 🙏" }
                    ]
                },
                
                // Issue B : Le Bad Buzz / Faux pas (50%)
                outcomeFailure: {
                    impact: { followers: -300, budget: 0, energy: -12, credibility: -4, tension: 3 },
                    consequenceText: "Tu t'emportes un peu trop fort, la grand-mère verse une larme et le repas familial tourne au règlement de comptes généralisé.",
                    tweets: [
                        { author: "Tonton Gérard", handle: "@Gerard_Patriote34", text: "Voilà l'intolérance de la gauche ! Incapable de débattre sans crier sur sa propre famille !" },
                        { author: "Maman", handle: "@Brigitte_Maman", text: "Tu as fait pleurer mamie avec tes histoires... C'était vraiment pas le moment." },
                        { author: "Cousin Enzo", handle: "@Enzo_Off", text: "Grosse ambiance au repas de famille, la table s'est vidée en 5 minutes chrono 😬" },
                        { author: "Tata Sylvie", handle: "@Sylvie_Zen", text: "La prochaine fois je viens pas si c'est pour revivre ce genre de dispute." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE FOND & LA DÉCONSTRUCTION (Crédibilité & Repos)
            // =========================================================
            {
                texte: "📚 Poser calmement les chiffres réels de l'agro-industrie et des fermes-usines sans t'énerver.",
                impact: { followers: 300, budget: 0, energy: 6, credibility: 4, tension: 0 },
                consequenceText: "Tu déconstruis la panique morale calmement. Ton oncle n'a plus d'arguments et se concentre sagement sur sa salade.",
                tweets: [
                    { author: "Maman", handle: "@Brigitte_Maman", text: "Très fière de ton calme aujourd'hui, tu as su lui expliquer les choses posément." },
                    { author: "Tata Sylvie", handle: "@Sylvie_Zen", text: "Enfin un repas où on apprend des choses intéressantes sans que les assiettes volent." },
                    { author: "Cousin Enzo", handle: "@Enzo_Off", text: "Tonton qui cherche des contre-arguments sur Google pendant 20 minutes sans rien trouver mdr." },
                    { author: "Tonton Gérard", handle: "@Gerard_Patriote34", text: "De toute façon les chiffres de leurs rapports officiels sont tous manipulés..." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LA LOGISTIQUE / GAIN FINANCIER (Budget de section)
            // =========================================================
            {
                texte: "💶 Lui parier 20 € qu'il est incapable de citer un seul produit halal présent dans son supermarché de village.",
                impact: { followers: 150, budget: 20, energy: -2, credibility: 1, tension: 0 },
                consequenceText: "Pris au piège, il refuse de vérifier et te glisse un billet de 20 € pour que tu passes à autre chose. Une rentrée de fonds inattendue pour la section.",
                tweets: [
                    { author: "Cousin Enzo", handle: "@Enzo_Off", text: "Prendre 20 balles à son tonton réac sur un pari impossible, le braquage légal 💸😂" },
                    { author: "Tonton Gérard", handle: "@Gerard_Patriote34", text: "Tiens, prends ton argent pour tes tracts et laisse-nous manger la bûche !" },
                    { author: "Maman", handle: "@Brigitte_Maman", text: "Ne dépense pas ces 20 euros dans des bêtises au moins !" },
                    { author: "Tata Sylvie", handle: "@Sylvie_Zen", text: "Au moins ça a eu le mérite d'écourter le débat, merci pour le calme retrouvé." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : LE POLICIER CON (Palier 1 — Score : 15 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Opposant
    // Thème : Police & Libertés (theme-repression)
    // -------------------------------------------------------------
    {
        id: "policier_con_politique_chiffre",
        characterId: "opp_policier_con",
        characterName: "Le Policier Con",
        tier: 1,
        scoreIndex: 15,
        theme: "theme-repression",
        titre: "Le quota de PV avant la fin de service",
        description: "En plein tractage tranquille devant une bouche de métro, un gardien de la paix au regard vide s'arrête devant toi. La main sur le ceinturon, il cherche visiblement n'importe quel prétexte pour aligner sa dernière amende de la journée : « Dépôt sauvage de tracts sur l'espace public, entrave à la circulation des piétons, ou je vous trouve autre chose ? On a des objectifs à boucler, jeune homme. »",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH / PROVOCATION (Pari à double issue)
            // Coût visible : -14% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Pour classer sans suite 80% des plaintes pour violences sexuelles y'a du monde, mais pour racketter les militants ça fait des heures sup' ! »",
                isClash: true,
                fixedCost: { energy: -14, tension: 3 },
                
                // Issue A : Le Coup d'Éclat (50%)
                outcomeSuccess: {
                    impact: { followers: 900, budget: 0, energy: -14, credibility: 4, tension: 3 },
                    consequenceText: "La punchline claque tellement fort que les passants s'arrêtent et applaudissent. Pris de court et mal à l'aise devant les téléphones qui filment, l'agent marmonne un truc inaudible et trace sa route.",
                    tweets: [
                        { author: "Usager du Métro", handle: "@LigneB_Rider", text: "Le flic qui voulait gratter son PV et qui se prend la réalité des commissariats en pleine face devant tout le monde 😭💀" },
                        { author: "Collectif Féministe Local", handle: "@RiposteFem34", text: "Rappeler les chiffres du mépris des plaintes pour VSS en plein contrôle de rue : merci camarade 💜" },
                        { author: "Témoin du Matin", handle: "@MetroDirect", text: "Le policier qui bégaye et qui range son carnet à souches à la vitesse de l'éclair, pépite." },
                        { author: "Syndicat Alliance (Section)", handle: "@PoliceLocale", text: "Encore une provocation intolérable envers nos collègues qui ne font qu'appliquer les consignes hiérarchiques." }
                    ]
                },
                
                // Issue B : Le Bad Buzz / Faux pas (50%)
                outcomeFailure: {
                    impact: { followers: -200, budget: -135, energy: -14, credibility: -4, tension: 3 },
                    consequenceText: "Touché dans son ego, il appelle direct du renfort à la radio. Tu finis plaqué contre le mur du métro et écopes d'une amende pour 'abandon d'ordures' et d'un contrôle de sac minutieux.",
                    tweets: [
                        { author: "Syndicat Alliance (Section)", handle: "@PoliceLocale", text: "Outrage et rébellion caractérisés. Nos agents ont rétabli l'ordre avec professionnalisme." },
                        { author: "Militant Fatigué", handle: "@MetroLutte", text: "Bordel l'amende pour un tract tombé par terre... Ils avaient vraiment un quota à remplir aujourd'hui." },
                        { author: "Usager du Métro", handle: "@LigneB_Rider", text: "C'est parti en vrille pour rien du tout, 3 bagnoles de flics débarquées en 2 minutes." },
                        { author: "Legal Team Section", handle: "@AvocatsLutte", text: "Amende abusive signalée, on prépare la contestation auprès de l'officier du ministère public." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE FOND & LA DÉCONSTRUCTION (Crédibilité & Calme)
            // =========================================================
            {
                texte: "📚 Lui tendre la jurisprudence du Conseil constitutionnel sur la liberté d'expression politique sur la voie publique.",
                impact: { followers: 350, budget: 0, energy: 6, credibility: 5, tension: 0 },
                consequenceText: "Face à un texte de loi imprimé et surligné en jaune, le cerveau de l'agent surchauffe. Incapable de trouver la moindre faille légale, il souffle et s'en va contrôler le titre de transport d'un ado.",
                tweets: [
                    { author: "Étudiant Droit Public", handle: "@DroitEnLutte", text: "Sortir la décision du Conseil constitutionnel sur le trottoir, le contre-sort ultime anti-zèle policier 📜✨" },
                    { author: "Témoin du Matin", handle: "@MetroDirect", text: "Le flic qui regarde la feuille comme si c'était écrit en hiéroglyphes mdr." },
                    { author: "Barreau Solidaire", handle: "@AvocatDuPeuple", text: "Rappel : la distribution manuelle de tracts d'opinion n'est soumise à aucune autorisation préalable." },
                    { author: "Usager du Métro", handle: "@LigneB_Rider", text: "Calme, propre, efficace. Le flic a préféré fuir." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LA LOGISTIQUE / SOLIDARITÉ (Budget & Base)
            // =========================================================
            {
                texte: "💶 Vendre symboliquement le journal de lutte à 2 € aux usagers pour requalifier la distribution en colportage de presse.",
                impact: { followers: 180, budget: 30, energy: -2, credibility: 2, tension: 0 },
                consequenceText: "La manœuvre juridique est imparable : tu encaisses 30 € nets auprès des passants solidaires sous les yeux du policier impuissant qui ne peut pas verbaliser la presse.",
                tweets: [
                    { author: "Lecteur Solidaire", handle: "@MidiCitoyen", text: "J'ai pris 2 exemplaires du journal juste pour faire rager l'agent resté planté sur le trottoir 🗞️💸" },
                    { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+30 € dans la caisse grâce à la vente militante improvisée !" },
                    { author: "Témoin du Matin", handle: "@MetroDirect", text: "Esquiver le flic en montant une vente de journaux en 10 secondes, masterclass logistique." },
                    { author: "Syndicat Alliance (Section)", handle: "@PoliceLocale", text: "Vente à la sauvette déguisée sous couvert d'activité militante à surveiller de près." }
                ]
            }
        ]
    },
   // -------------------------------------------------------------
    // PERSONNAGE : LE CRS DE SAINTE-SOLINE (Palier 1 — Score : 20 / 100)
    // Rareté : Terrain / Maintien de l'Ordre | Alignement : Opposant
    // Thème : Police & Libertés (theme-repression)
    // -------------------------------------------------------------
    {
        id: "crs_sainte_soline_provoc",
        characterId: "opp_crs_sainte_soline",
        characterName: "Le CRS de Sainte-Soline",
        tier: 1,
        scoreIndex: 20,
        theme: "theme-repression",
        titre: "Fanfaronnade au barrage de filtrage",
        description: "En marge d'un rassemblement pour la défense de l'eau, un CRS en équipement lourd contrôle ton sac à dos. Voyant tes tracts, il ricane avec ses collègues : « Tu veux faire le malin comme les zozos dans les Deux-Sèvres ? On sait très bien comment calmer les écolos avec nos GM2L. »",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH / PROVOCATION (Pari à double issue)
            // Coût visible : -15% Énergie | Gain visible : +4% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Les tirs tendus de LBD et les 5 000 grenades en deux heures sur des gens au sol, c'est ça votre fierté militaire ? »",
                isClash: true,
                fixedCost: { energy: -15, tension: 4 },
                
                // Issue A : Le Coup d'Éclat (50%)
                outcomeSuccess: {
                    impact: { followers: 950, budget: 0, energy: -15, credibility: 4, tension: 4 },
                    consequenceText: "Désarçonné par ton rappel factuel des rapports de la LDH sur les tirs illégaux, l'agent perd contenance et te rend tes affaires sous le regard des témoins.",
                    tweets: [
                        { author: "Camarade Observateur", handle: "@LegalTeamLocale", text: "Rappel direct des tirs tendus de Sainte-Soline au barrage : le CRS n'a pas su quoi répondre 👏🛡️" },
                        { author: "Militant Eau Publique", handle: "@BassinesNonMerci", text: "Ne jamais baisser les yeux face aux intimidations sur le terrain !" },
                        { author: "Street Reporter 34", handle: "@TerrainDirect", text: "Tension palpable au point de contrôle, échange verbal très tendu mais les militants restent droits." },
                        { author: "Passant Anonyme", handle: "@CitoyenVigilant", text: "Bien répondu. Les violences de Sainte-Soline ne sont pas un sujet de rigolade." }
                    ]
                },
                
                // Issue B : Le Bad Buzz / Répression (50%)
                outcomeFailure: {
                    impact: { followers: -250, budget: -135, energy: -15, credibility: -5, tension: 4 },
                    consequenceText: "Il prend la mouche instantanément, te colle une amende forfaitaire pour outrage et fouille méticuleusement tout ton matériel pendant 45 minutes.",
                    tweets: [
                        { author: "Alliance Police Locale", handle: "@PoliceSecurite34", text: "Outrage et provocation envers nos effectifs lors d'un contrôle de routine. Tolérance zéro." },
                        { author: "Camarade Observateur", handle: "@LegalTeamLocale", text: "Attention, amende abusive tombée au barrage filtrant, besoin d'aide pour le recours !" },
                        { author: "Militant Fatigué", handle: "@LutteQuotidienne", text: "135 balles d'amende pour avoir rappelé les faits... La caisse de solidarité va encore devoir payer." },
                        { author: "Passant Anonyme", handle: "@CitoyenVigilant", text: "Ça a chauffé inutilement, ils ont bloqué tout le passage pendant une heure." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE FOND & LA DÉCONSTRUCTION (Crédibilité & Calme)
            // =========================================================
            {
                texte: "📚 Lui citer calmement les alertes de la Ligue des Droits de l'Homme et de l'ONU sur l'usage disproportionné de la force.",
                impact: { followers: 400, budget: 0, energy: 5, credibility: 5, tension: 0 },
                consequenceText: "Tu restes imperturbable en citant les synthèses juridiques. Face à ton professionnalisme, les agents abrègent le contrôle sans incident.",
                tweets: [
                    { author: "Observatoire des Libertés", handle: "@ObsLibertés", text: "L'autodéfense juridique calme et rigoureuse reste la meilleure arme en contrôle." },
                    { author: "Juriste Militant", handle: "@DroitManif", text: "Rappeler les rapports internationaux désarme souvent l'arbitraire du terrain." },
                    { author: "Militant Eau Publique", handle: "@BassinesNonMerci", text: "Contrôle passé sans encombre grâce à un calme olympien." },
                    { author: "Passant Anonyme", handle: "@CitoyenVigilant", text: "Impressionnant le sang-froid face aux provocations des forces de l'ordre." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LA LOGISTIQUE / CAISSE D'AUTODÉFENSE (Budget de lutte)
            // =========================================================
            {
                texte: "💶 Proposer discrètement aux manifestants autour d'alimenter la caisse collective d'entraide juridique anti-répression.",
                impact: { followers: 200, budget: 45, energy: -3, credibility: 2, tension: 0 },
                consequenceText: "La scène d'intimidation motive les témoins : plusieurs personnes scannent le QR code de la caisse d'autodéfense juridique du collectif.",
                tweets: [
                    { author: "Caisse d'Autodéfense", handle: "@AntiRepLocale", text: "+45 € récoltés sur le piquet pour financer les frais d'avocats des camarades !" },
                    { author: "Camarade Solidaire", handle: "@SolidariteTerrain", text: "Transformer une tentative d'intimidation en soutien financier pour la lutte 💶✊" },
                    { author: "Militant Eau Publique", handle: "@BassinesNonMerci", text: "La solidarité financière est notre meilleur bouclier collectif." },
                    { author: "Passant Anonyme", handle: "@CitoyenVigilant", text: "Don effectué pour soutenir les jeunes face aux abus policiers." }
                ]
            }
        ]
    },
// -------------------------------------------------------------
    // PERSONNAGE : LE MEILLEUR POTE DU COLLECTIF (Palier 1 — Score : 10 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Allié
    // Thème : Antifascisme & Droites (theme-antifa)
    // -------------------------------------------------------------
    {
        id: "meilleur_pote_recouvrement_affiches",
        characterId: "ally_meilleur_pote",
        characterName: "Le Meilleur Pote du Collectif",
        tier: 1,
        scoreIndex: 10,
        theme: "theme-antifa",
        titre: "L'expédition collage à 3h du matin",
        description: "Ton pote de toujours débarque chez toi en sueur avec un seau de colle de 10 litres et un escabeau bancal : « Gros, les identitaires ont tapissé tous les panneaux de la mairie avec leurs affiches sur 'l'insécurité'. J'ai imprimé 200 affiches 'Solidarité & Logement pour tous', on part repeindre le centre-ville avant le lever du jour ? »",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH / PROVOCATION CONJOINTE (Pari à double issue)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « On recouvre TOUT et on pose une banderole géante 'Ici c'est la France populaire et antiraciste' sur le pont ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Coup de Maître (50%)
                outcomeSuccess: {
                    impact: { followers: 850, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "La banderole est parfaitement accrochée et les panneaux sont impeccables. Au réveil, la photo du pont au lever du soleil enflamme les réseaux de la ville.",
                    tweets: [
                        { author: "Pote de Nuit", handle: "@ColleurNocturne", text: "Mission accomplie en 45 min chrono avec le frérot ! Le pont est magnifique ce matin 🔥🌉" },
                        { author: "Collectif Quartier Libre", handle: "@QuartierSolidaire", text: "La réponse visuelle parfaite aux provocations d'extrême droite. Bravo l'équipe de nuit 👏" },
                        { author: "Passant du Matin", handle: "@FootingAurore", text: "La banderole géante vue depuis la rocade, grosse frappe visuelle." },
                        { author: "Compte Anonyme Réac", handle: "@PatrioteLocal", text: "Ces militants d'extrême gauche salissent nos villes au milieu de la nuit sans impunité..." }
                    ]
                },
                
                // Issue B : Le Faux Pas / Course-poursuite (50%)
                outcomeFailure: {
                    impact: { followers: -150, budget: -30, energy: -12, credibility: -3, tension: 3 },
                    consequenceText: "La patrouille de la BAC surgit au coin de la rue. Vous devez sprinter dans les ruelles sombres en abandonnant le seau de colle et la moitié des affiches dans le caniveau.",
                    tweets: [
                        { author: "Pote de Nuit", handle: "@ColleurNocturne", text: "Record du monde du 400m haies en pleine nuit avec un seau de colle dans chaque main 😭🏃‍♂️" },
                        { author: "Section Locale", handle: "@Militants34", text: "Attention camarades, présence policière renforcée autour de la mairie ce soir." },
                        { author: "Veille Municipale", handle: "@ActuVille", text: "Tentative d'affichage non autorisé interrompue par la police municipale." },
                        { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "Encore 30 balles de papier et de colle perdus dans la fuite... Faites attention les gars." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE FOND & L'AFFICHAGE LÉGAL (Crédibilité & Énergie)
            // =========================================================
            {
                texte: "📚 « On reste strictement sur les panneaux d'expression libre et on colle l'infographie sur la crise du logement. »",
                impact: { followers: 300, budget: 0, energy: 5, credibility: 5, tension: 0 },
                consequenceText: "Collage propre, légal et ciblé. Les passants du matin s'arrêtent pour lire les données précises sur les résidences secondaires et les loyers abusifs.",
                tweets: [
                    { author: "Comité Logement", handle: "@DroitAuToitLocal", text: "Les panneaux d'expression libre enfin utilisés pour des vraies infos d'utilité publique 🏠📊" },
                    { author: "Pote de Nuit", handle: "@ColleurNocturne", text: "Travail propre et sans bavure. Pas de bavure, que des faits." },
                    { author: "Riverain Réveillé", handle: "@VoisinDuCentre", text: "Infographie très claire sur les loyers affichée devant la boulangerie, instructif." },
                    { author: "Étudiant Locataire", handle: "@Precaire34", text: "Merci de rappeler que 60% de nos bourses partent dans des passoires thermiques." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LA LOGISTIQUE / CANTINE & RÉCUP' (Budget & Entraide)
            // =========================================================
            {
                texte: "💶 « Fabriquons notre propre colle à base de farine et d'eau pour économiser le budget de la section. »",
                impact: { followers: 150, budget: 25, energy: -2, credibility: 2, tension: 0 },
                consequenceText: "Une marmite de colle maison prête en 20 minutes pour 2 € au lieu de 25 € en magasin de bricolage. Une vraie économie de guerre pour le groupe.",
                tweets: [
                    { author: "Pote de Nuit", handle: "@ColleurNocturne", text: "Tuto colle à la farine validé par la street : économique, écologique et ça colle pour 10 ans 🌾🪧" },
                    { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "25 € économisés sur les fournitures grâce à la débrouille militante !" },
                    { author: "Atelier Populaire", handle: "@BricoLutte", text: "La transmission des techniques d'autonomie logistique, la base du militantisme de terrain." },
                    { author: "Militant Gourmand", handle: "@CantineSolidaire", text: "Ça sentait un peu la crêpe pendant tout le collage mais ça a tenu impeccablement." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : LE MEILLEUR POTE DU COLLECTIF (Palier 1 — Score : 10 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Allié
    // Thème : Antifascisme & Droites (theme-antifa)
    // -------------------------------------------------------------
    {
        id: "meilleur_pote_recouvrement_affiches",
        characterId: "ally_meilleur_pote",
        characterName: "Le Meilleur Pote du Collectif",
        tier: 1,
        scoreIndex: 10,
        theme: "theme-antifa",
        titre: "L'expédition collage à 3h du matin",
        description: "Ton pote de toujours débarque chez toi en sueur avec un seau de colle de 10 litres et un escabeau bancal : « Gros, les identitaires ont tapissé tous les panneaux de la mairie avec leurs affiches sur 'l'insécurité'. J'ai imprimé 200 affiches 'Solidarité & Logement pour tous', on part repeindre le centre-ville avant le lever du jour ? »",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH / PROVOCATION CONJOINTE (Pari à double issue)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « On recouvre TOUT et on pose une banderole géante 'Ici c'est la France populaire et antiraciste' sur le pont ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Coup de Maître (50%)
                outcomeSuccess: {
                    impact: { followers: 850, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "La banderole est parfaitement accrochée et les panneaux sont impeccables. Au réveil, la photo du pont au lever du soleil enflamme les réseaux de la ville.",
                    tweets: [
                        { author: "Pote de Nuit", handle: "@ColleurNocturne", text: "Mission accomplie en 45 min chrono avec le frérot ! Le pont est magnifique ce matin 🔥🌉" },
                        { author: "Collectif Quartier Libre", handle: "@QuartierSolidaire", text: "La réponse visuelle parfaite aux provocations d'extrême droite. Bravo l'équipe de nuit 👏" },
                        { author: "Passant du Matin", handle: "@FootingAurore", text: "La banderole géante vue depuis la rocade, grosse frappe visuelle." },
                        { author: "Compte Anonyme Réac", handle: "@PatrioteLocal", text: "Ces militants d'extrême gauche salissent nos villes au milieu de la nuit sans impunité..." }
                    ]
                },
                
                // Issue B : Le Faux Pas / Course-poursuite (50%)
                outcomeFailure: {
                    impact: { followers: -150, budget: -30, energy: -12, credibility: -3, tension: 3 },
                    consequenceText: "La patrouille de la BAC surgit au coin de la rue. Vous devez sprinter dans les ruelles sombres en abandonnant le seau de colle et la moitié des affiches dans le caniveau.",
                    tweets: [
                        { author: "Pote de Nuit", handle: "@ColleurNocturne", text: "Record du monde du 400m haies en pleine nuit avec un seau de colle dans chaque main 😭🏃‍♂️" },
                        { author: "Section Locale", handle: "@Militants34", text: "Attention camarades, présence policière renforcée autour de la mairie ce soir." },
                        { author: "Veille Municipale", handle: "@ActuVille", text: "Tentative d'affichage non autorisé interrompue par la police municipale." },
                        { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "Encore 30 balles de papier et de colle perdus dans la fuite... Faites attention les gars." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE FOND & L'AFFICHAGE LÉGAL (Crédibilité & Énergie)
            // =========================================================
            {
                texte: "📚 « On reste strictement sur les panneaux d'expression libre et on colle l'infographie sur la crise du logement. »",
                impact: { followers: 300, budget: 0, energy: 5, credibility: 5, tension: 0 },
                consequenceText: "Collage propre, légal et ciblé. Les passants du matin s'arrêtent pour lire les données précises sur les résidences secondaires et les loyers abusifs.",
                tweets: [
                    { author: "Comité Logement", handle: "@DroitAuToitLocal", text: "Les panneaux d'expression libre enfin utilisés pour des vraies infos d'utilité publique 🏠📊" },
                    { author: "Pote de Nuit", handle: "@ColleurNocturne", text: "Travail propre et sans bavure. Pas de bavure, que des faits." },
                    { author: "Riverain Réveillé", handle: "@VoisinDuCentre", text: "Infographie très claire sur les loyers affichée devant la boulangerie, instructif." },
                    { author: "Étudiant Locataire", handle: "@Precaire34", text: "Merci de rappeler que 60% de nos bourses partent dans des passoires thermiques." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LA LOGISTIQUE / CANTINE & RÉCUP' (Budget & Entraide)
            // =========================================================
            {
                texte: "💶 « Fabriquons notre propre colle à base de farine et d'eau pour économiser le budget de la section. »",
                impact: { followers: 150, budget: 25, energy: -2, credibility: 2, tension: 0 },
                consequenceText: "Une marmite de colle maison prête en 20 minutes pour 2 € au lieu de 25 € en magasin de bricolage. Une vraie économie de guerre pour le groupe.",
                tweets: [
                    { author: "Pote de Nuit", handle: "@ColleurNocturne", text: "Tuto colle à la farine validé par la street : économique, écologique et ça colle pour 10 ans 🌾🪧" },
                    { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "25 € économisés sur les fournitures grâce à la débrouille militante !" },
                    { author: "Atelier Populaire", handle: "@BricoLutte", text: "La transmission des techniques d'autonomie logistique, la base du militantisme de terrain." },
                    { author: "Militant Gourmand", handle: "@CantineSolidaire", text: "Ça sentait un peu la crêpe pendant tout le collage mais ça a tenu impeccablement." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : CHARLES CONSIGNY (Palier 2 — Score : 35 / 100)
    // Rareté : Régional / Cadre | Alignement : Opposant
    // Thème : Médias & Clashs (theme-medias)
    // -------------------------------------------------------------
    {
        id: "consigny_appel_grandes_gueules",
        characterId: "opp_charles_consigny",
        characterName: "Charles Consigny",
        tier: 2,
        scoreIndex: 35,
        theme: "theme-medias",
        titre: "L'appel en direct aux « Grandes Gueules »",
        description: "Sur RMC, Charles Consigny dérape en direct en banalisant les agressions en soirée et en affirmant qu'une « main aux fesses en boîte de nuit, ce n'est pas une agression sexuelle ». Le standard des auditeurs ouvre l'antenne : ton appel passe en direct face à lui devant des centaines de milliers d'auditeurs.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH / PROVOCATION EN DIRECT (Pari 50/50)
            // Coût visible : -18% Énergie | Gain visible : +6% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Maître Consigny, être avocat et ignorer l'article 222-22 du Code pénal qui qualifie ça d'agression sexuelle, c'est une faute professionnelle ou juste du mépris patriarcal ? »",
                isClash: true,
                fixedCost: { energy: -18, tension: 6 },
                
                // Issue A : Le Coup d'Éclat (50%)
                outcomeSuccess: {
                    impact: { followers: 3600, budget: 0, energy: -18, credibility: 6, tension: 6 },
                    consequenceText: "Silence de mort dans le studio. Consigny s'embourbe dans des explications confuses tandis que les animateurs coupent court, mal à l'aise. L'extrait audio tourne en boucle sur les réseaux.",
                    tweets: [
                        { author: "Auditeur RMC", handle: "@AbonneGrandesGueules", text: "L'auditeur qui a séché Consigny en direct sur le Code pénal, incroyable moment de radio 📻💀" },
                        { author: "Collectif Féministe", handle: "@NousToutes_Off", text: "Rappel salutaire : toucher sans consentement EST une agression sexuelle selon la loi. Merci pour l'intervention 💜" },
                        { author: "Zapping Web", handle: "@MediaDirectFR", text: "Charles Consigny mis en difficulté sur le plateau après son dérapage sur les boîtes de nuit." },
                        { author: "Étudiante en Droit", handle: "@JuristeLutte", text: "Citer l'article 222-22 en direct à la radio nationale, masterclass juridique !" }
                    ]
                },
                
                // Issue B : Le Coupure Micro / Bad Buzz (50%)
                outcomeFailure: {
                    impact: { followers: -700, budget: 0, energy: -18, credibility: -6, tension: 6 },
                    consequenceText: "Les animateurs te coupent la parole immédiatement, défendent leur chroniqueur en criant à la censure et te raccrochent au nez en te traitant de « militant sectaire ».",
                    tweets: [
                        { author: "Fan des GG", handle: "@RMC_Toujours", text: "Bien fait de lui couper le micro à cet agitateur, on ne vient pas agresser les chroniqueurs à l'antenne !" },
                        { author: "Auditeur RMC", handle: "@AbonneGrandesGueules", text: "Micro coupé dès qu'un auditeur pose une vraie question de droit... classique sur RMC." },
                        { author: "Veille Audiovisuelle", handle: "@ArcomWatch", text: "Nouveau signalement pour coupure de parole abusive lors d'un débat contradictoire." },
                        { author: "Militant sous Choc", handle: "@RadioLutte", text: "Raccroché au nez en 15 secondes chrono dès qu'on sort le Code pénal." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE FOND & LA PÉDAGOGIE SUR LE CONSENTEMENT (Crédibilité & Repos)
            // =========================================================
            {
                texte: "📚 Expliquer posément l'impact de la culture du viol et les démarches judiciaires des victimes pour sensibiliser les auditeurs.",
                impact: { followers: 1400, budget: 0, energy: 8, credibility: 8, tension: 0 },
                consequenceText: "Ton ton calme et pédagogique impose le respect en studio. Même les animateurs les plus réacs sont contraints d'approuver ton recadrage sur le consentement.",
                tweets: [
                    { author: "Auditeur RMC", handle: "@AbonneGrandesGueules", text: "Intervention d'une clarté exemplaire ce matin sur le consentement. Bravo à cette personne." },
                    { author: "Psychologue Sociale", handle: "@SanteMentaleLutte", text: "Poser calmement les réalités du traumatisme à une heure de grande écoute, travail d'utilité publique." },
                    { author: "Planning Familial", handle: "@PlanningFam", text: "La pédagogie face aux propos réactionnaires : indispensable pour faire reculer les violences." },
                    { author: "Passant Informé", handle: "@CitoyenDirect", text: "Débat enfin élevé par un auditeur censé au milieu des polémiques habituelles." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LA LOGISTIQUE / APPEL AUX DONS EN DIRECT (Budget & Base)
            // =========================================================
            {
                texte: "💶 Profiter des 30 secondes d'antenne pour donner le nom d'un collectif d'aide juridique aux victimes avant de raccrocher.",
                impact: { followers: 700, budget: 180, energy: -4, credibility: 3, tension: 0 },
                consequenceText: "Le standard est pris de court : le nom de la structure d'entraide est diffusé en direct et leur cagnotte de soutien juridique reçoit 180 € de dons d'auditeurs.",
                tweets: [
                    { author: "Collectif Solidarité", handle: "@AideVictimes34", text: "Pic de connexions et plusieurs dons reçus suite au passage sur RMC ! Merci camarade 💸✊" },
                    { author: "Auditeur RMC", handle: "@AbonneGrandesGueules", text: "Le coup de com' solidaire glissé en direct à l'antenne, bien joué !" },
                    { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "Transformer un espace médiatique toxique en soutien financier concret pour les luttes." },
                    { author: "Régie RMC", handle: "@GrandesGueulesOff", text: "Rappel à l'ordre : les appels à la générosité non autorisés sont proscrits à l'antenne." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : CHARLES ALLONCLE (Palier 2 — Score : 43 / 100)
    // Rareté : Régional / Cadre | Alignement : Opposant
    // Thème : Médias & Clashs (theme-medias)
    // -------------------------------------------------------------
    {
        id: "alloncle_commission_audiovisuel",
        characterId: "opp_charles_alloncle",
        characterName: "Charles Alloncle",
        tier: 2,
        scoreIndex: 43,
        theme: "theme-medias",
        titre: "La vidéo riposte au rapport Alloncle",
        description: "Le député ciottiste-RN Charles Alloncle publie les conclusions de sa commission d'enquête sur l'audiovisuel public, préconisant la privatisation totale de France Télévisions et Radio France sous prétexte d'un prétendu « parti pris idéologique permanent ». Face à cette offensive contre l'information libre, ton collectif allume la caméra pour publier une vidéo de contre-attaque sur les réseaux.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH / PROVOCATION FACE CAMÉRA (Pari 50/50)
            // Coût visible : -18% Énergie | Gain visible : +6% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Alloncle veut liquider le service public pour offrir les chaînes sur un plateau d'argent à son patron milliardaire Bolloré ! »",
                isClash: true,
                fixedCost: { energy: -18, tension: 6 },
                
                // Issue A : Le Coup de Maître (50%)
                outcomeSuccess: {
                    impact: { followers: 3500, budget: 0, energy: -18, credibility: 6, tension: 6 },
                    consequenceText: "La formule percutante et sans filtre fait mouche : la vidéo dépasse les 200 000 vues en quelques heures. Les syndicats de journalistes de l'audiovisuel public relaient ton coup de gueule en masse.",
                    tweets: [
                        { author: "SNJ Radio France", handle: "@SNJ_RF", text: "Merci pour ce rappel indispensable : la privatisation de l'audiovisuel public n'est qu'un cadeau aux empires médiatiques privés !" },
                        { author: "Charles Alloncle Fan", handle: "@UnionDesDroites", text: "L'extrême gauche incapable d'accepter qu'on mette fin au gaspillage de l'argent des contribuables !" },
                        { author: "Média Critique", handle: "@DecodageInfo", text: "La vidéo du collectif démonte parfaitement les véritables intérêts financiers derrière le rapport Alloncle 📺💥" },
                        { author: "Citoyen Vigilant", handle: "@InfoLibreFR", text: "Le service public de l'information n'est pas à vendre, soutien total à la riposte !" }
                    ]
                },
                
                // Issue B : Le Bad Buzz / Raid Numérique (50%)
                outcomeFailure: {
                    impact: { followers: -750, budget: 0, energy: -18, credibility: -6, tension: 6 },
                    consequenceText: "Alloncle partage ton clip sur son compte X en te qualifiant de « propagandiste subventionné ». Une vague de comptes militants de droite dure vient signaler la vidéo en masse, limitant sa visibilité.",
                    tweets: [
                        { author: "Charles Alloncle", handle: "@CAlloncle", text: "Voici le visage de ceux qui défendent un système d'information partisan payé par vos impôts. Nous irons jusqu'au bout !" },
                        { author: "Militant sous Pression", handle: "@JeunesLutte", text: "Shadowban direct après le retweet d'Alloncle, ils ont lancé leurs bots sur la vidéo..." },
                        { author: "Observatoire Médias", handle: "@VeilleAudiovisuel", text: "Le débat sur l'avenir de l'audiovisuel public s'envenime brutalement sur les réseaux sociaux." },
                        { author: "Citoyen Vigilant", handle: "@InfoLibreFR", text: "Attaques personnelles au lieu de débattre du fond du rapport, méthodes classiques." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE FOND & LA DÉCONSTRUCTION DU MODÈLE (Crédibilité & Repos)
            // =========================================================
            {
                texte: "📚 Décortiquer dans la vidéo le coût de l'information privée et l'importance démocratique d'un service public indépendant.",
                impact: { followers: 1350, budget: 0, energy: 8, credibility: 8, tension: 0 },
                consequenceText: "Une vidéo posée, graphique et ultra-sourcée avec des données de l'Arcom et des comparatifs européens. L'analyse est saluée par des universitaires et des collectifs citoyens.",
                tweets: [
                    { author: "Acrimed", handle: "@acrimed_info", text: "Excellente analyse pédagogique sur les enjeux de l'audiovisuel public face aux appétits des oligarques 📊👏" },
                    { author: "Étudiant Sciences Po", handle: "@SciencePoLutte", text: "Une vidéo de 5 minutes qui remet les pendules à l'heure avec des vraies sources, travail remarquable." },
                    { author: "Journaliste Indé", handle: "@PlumeLibre", text: "Prendre le temps d'expliquer le modèle économique de l'information : salutaire face aux fake news." },
                    { author: "Citoyen Vigilant", handle: "@InfoLibreFR", text: "Partagé autour de moi, c'est limpide et sans agressivité inutile." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LA LOGISTIQUE / APPEL À LA CAISSE D'INFO (Budget & Base)
            // =========================================================
            {
                texte: "💶 Intégrer un appel en fin de vidéo pour financer l'impression d'un journal citoyen papier autonome.",
                impact: { followers: 650, budget: 170, energy: -4, credibility: 3, tension: 0 },
                consequenceText: "La vidéo sert de levier concret : tu collectes 170 € en quelques heures pour imprimer 1 000 exemplaires du canard de lutte distribué dans les gares et les facs.",
                tweets: [
                    { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+170 € récoltés grâce à l'appel en vidéo pour le prochain tirage papier ! Merci aux camarades 🗞️💸" },
                    { author: "Lecteur Engagé", handle: "@JournalPopu", text: "Don envoyé pour soutenir la presse alternative et indépendante face aux projets de privatisation !" },
                    { author: "Militant Terrain", handle: "@DistribAction", text: "On prépare la distribution sur les marchés dès réception des tirages papier." },
                    { author: "Citoyen Vigilant", handle: "@InfoLibreFR", text: "Créer nos propres médias pour ne plus dépendre des milliardaires, c'est la seule issue." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : LOUIS SARKOZY (Palier 2 — Score : 40 / 100)
    // Rareté : Régional / Cadre | Alignement : Opposant
    // Thème : Médias & Clashs (theme-medias)
    // -------------------------------------------------------------
    {
        id: "louis_sarkozy_mangue_colombie",
        characterId: "opp_louis_sarkozy",
        characterName: "Louis Sarkozy",
        tier: 2,
        scoreIndex: 40,
        theme: "theme-medias",
        titre: "L'épopée mystique de la mangue colombienne",
        description: "En pleine interview vidéo, Louis Sarkozy raconte avec un sérieux papal son grand moment d'illumination : après une virée à cheval dans la jungle en Colombie, il a croqué dans une mangue et a découvert que « jamais de sa vie un fruit n'avait eu un tel goût », découvrant visiblement ce qu'est un produit frais cueilli mûr. Glupatate en tire un zapping légendaire sur les fils d'aristos déconnectés de la réalité terrestre, et tout le monde attend ton repost.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH / MOQUERIE SUR LES PRIVILÈGES (Pari 50/50)
            // Coût visible : -18% Énergie | Gain visible : +6% Tension 🔥
            // =========================================================
            {
                texte: "🔥 Reposter : « Traverser l'Atlantique en jet pour découvrir à 25 ans qu'un fruit qui n'a pas mûri dans un frigo à Neuilly a du goût... Le niveau d'assistanat bourgeois est fascinant. »",
                isClash: true,
                fixedCost: { energy: -18, tension: 6 },
                
                // Issue A : Le Coup de Maître (50%)
                outcomeSuccess: {
                    impact: { followers: 3800, budget: 0, energy: -18, credibility: 6, tension: 6 },
                    consequenceText: "Ton tweet explose et cumule 25 000 retweets en 2 heures. Le contraste entre le safari équestre du fils d'ancien président et la vie des gens normaux fait hurler de rire tout le réseau.",
                    tweets: [
                        { author: "Glupatate", handle: "@glupatate", text: "Le repost qui achève la dynastie Sarkozy sur une histoire de mangue sauvage 😭💀🥭" },
                        { author: "Jeune Débrouillard", handle: "@SMICardDeLutte", text: "Mdrr le mec découvre la photosynthèse et la maturation des fruits à cheval en Colombie, je pleure." },
                        { author: "Louis Sarkozy Fanclub", handle: "@JeunesseDroitier", text: "C'est juste une belle anecdote poétique sur l'aventure, pourquoi toujours cette jalousie de classe ?" },
                        { author: "Maraîcher Bio", handle: "@TerreNourriciere", text: "Passez aux marchés locaux goûter des vrais fruits de saison, pas besoin d'aller en Colombie en hélico !" }
                    ]
                },
                
                // Issue B : Le Raid Numérique / Bad Buzz (50%)
                outcomeFailure: {
                    impact: { followers: -800, budget: 0, energy: -18, credibility: -6, tension: 6 },
                    consequenceText: "Les réseaux d'aristos parisiens et la droite d'affaires s'organisent pour t'accuser d'« aigreur sociale » et signaler ton compte, ce qui bride temporairement la portée de tes posts.",
                    tweets: [
                        { author: "Cercle Neuilly Auteuil", handle: "@EliteFrancaise", text: "L'extrême gauche incapable de comprendre le goût de l'aventure et l'ouverture sur le monde." },
                        { author: "Militant sous les Feux", handle: "@GauchoVibes", text: "Les fils à papa qui débarquent en com' pour défendre le droit inaliénable de manger des mangues à cheval 🙄" },
                        { author: "Glupatate", handle: "@glupatate", text: "Le ratio est violent mais l'espace commentaires est devenu un champ de bataille d'héritiers." },
                        { author: "Observatoire Com' Pol", handle: "@ComPolFR", text: "Guerre culturelle inattendue sur les réseaux autour de l'anecdote de Louis Sarkozy." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE FOND & LA DÉCONSTRUCTION DU MODÈLE (Crédibilité & Repos)
            // =========================================================
            {
                texte: "📚 Reposter en pointant l'empreinte carbone et l'absurdité du tourisme de luxe colonial des ultra-riches.",
                impact: { followers: 1400, budget: 0, energy: 8, credibility: 8, tension: 0 },
                consequenceText: "Une publication posée qui analyse le contraste entre le bilan carbone des safaris d'aristos et les efforts demandés aux classes populaires pour le climat. L'argument fait mouche chez les militants écolos.",
                tweets: [
                    { author: "Écologie & Territoires", handle: "@EcoloSociale", text: "Rappeler que l'empreinte carbone d'un seul week-end de luxe dépasse celle d'une vie entière au SMIC : limpide 🌍📊" },
                    { author: "Glupatate", handle: "@glupatate", text: "Transformer un mème sur une mangue en démonstration écologique imparable, bien joué !" },
                    { author: "Étudiant Agro", handle: "@AgroLutte", text: "L'agro-industrie mondiale et le tourisme extractiviste résumés en une vidéo." },
                    { author: "Citoyen Réfléchi", handle: "@BonSensPopulaire", text: "Une critique de fond sur l'injustice climatique sans tomber dans l'insulte gratuite." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LA LOGISTIQUE / PROMOTION DES MARCHÉS POPULAIRES (Budget & Base)
            // =========================================================
            {
                texte: "💶 Reposter en faisant la promo du panier paysan solidaire de ta section locale vendu à prix coûtant.",
                impact: { followers: 700, budget: 150, energy: -4, credibility: 3, tension: 0 },
                consequenceText: "Tu profites du buzz pour lancer un appel aux circuits courts : 150 € de commandes de paniers de fruits locaux solidaires sont enregistrées pour la coopérative de quartier.",
                tweets: [
                    { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+150 € de commandes pour la coopérative paysanne grâce au détournement du buzz ! 🥕💸" },
                    { author: "Habitant du Quartier", handle: "@ConsommerLocal", text: "Commande passée direct ! Des vraies pommes et poires locales plutôt que des délires en jet privé." },
                    { author: "Glupatate", handle: "@glupatate", text: "Faire de la retape pour les paniers bios paysans sur le dos de Louis Sarkozy, pur génie logistique !" },
                    { author: "Maraîcher Solidaire", handle: "@AMAPLocale", text: "Merci pour le coup de projecteur sur nos récoltes de saison !" }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : JORDAN FLORENTIN (Palier 2 — Score : 38 / 100)
    // Rareté : Régional / Cadre | Alignement : Opposant
    // Thème : Médias & Clashs (theme-medias)
    // -------------------------------------------------------------
    {
        id: "jordan_florentin_manif_direte",
        characterId: "opp_jordan_florentin",
        characterName: "Jordan Florentin (Frontières)",
        tier: 2,
        scoreIndex: 38,
        theme: "theme-medias",
        titre: "Le guet-apens « en direète » de Frontières",
        description: "En plein cortège syndical, Jordan Florentin déboule avec son micro mousse crade et son cadreur en panique. Yeux écarquillés face caméra, il hurle : « Regardez, on est en direète au milieu de l'esttrême gauche violente ! » Il te plante son micro sous le nez : « Bonjour ! Est-ce que vous condamnez les dégradations de vos milices antifas ? Est-ce que vous avez un travail ? »",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH / HUMILIATION BRUTALE (Pari 50/50)
            // Coût visible : -18% Énergie | Gain visible : +6% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Jordan, articule déjà ton 'en direète' avant de parler d'économie, et demande à ton patron milliardaire pourquoi il te sous-paie pour faire le clown en manif. »",
                isClash: true,
                fixedCost: { energy: -18, tension: 6 },
                
                // Issue A : Le Coup de Maître (50%)
                outcomeSuccess: {
                    impact: { followers: 4200, budget: 0, energy: -18, credibility: 6, tension: 6 },
                    consequenceText: "Il bégaye en live, devient tout rouge et son cadreur baisse l'objectif. Le rush non coupé fuite sur Telegram : Jordan est en sueur complète.",
                    tweets: [
                        { author: "Zack", handle: "@Zack_93", text: "MDRRRR IL L'A SÉCHÉ EN DIREÈTE 😭😭😭" },
                        { author: "Jordan Florentin", handle: "@JordanFlrtn", text: "AGRESSION VERBALE : l'esttrême gauche refuse le débat démocratique et menace nos équipes." },
                        { author: "Anonyme", handle: "@User849204", text: "ferme ta gueule jordan sérieux" },
                        { author: "Mème Antifa", handle: "@NoPasaran_Memes", text: "Le cadreur de Frontières qui filme ses propres chaussures tellement il a honte ptdrrr" }
                    ]
                },
                
                // Issue B : Le Montage Manipulé / Bad Buzz (50%)
                outcomeFailure: {
                    impact: { followers: -900, budget: 0, energy: -18, credibility: -6, tension: 6 },
                    consequenceText: "Il coupe ta réponse au montage, ne garde que ton regard noir et sort un TikTok à 500k vues titré : « MENACÉ DE MORT PAR L'ESTTRÊME GAUCHE ». La meute identitaire débarque sous tes posts.",
                    tweets: [
                        { author: "Frontières Média", handle: "@Frontieres_Off", text: "ENQUÊTE : Nos journalistes pris pour cible par les milices d'ultra-gauche en plein Paris." },
                        { author: "Patriote_88", handle: "@Fdesouche_Fan", text: "Ces racailles de gauchistes méritent la prison ferme." },
                        { author: "Camarade Soûlé", handle: "@AntiFlic34", text: "Le mec monte ses vidéos avec les pieds pour chialer chez Hanouna derrière, insupportable." },
                        { author: "Samy", handle: "@Samy_off", text: "wAllah jordan t'es la plus grosse victime de France" }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE TROLL DE FOND / INDIFÉRENCE GLACIALE (Crédibilité & Repos)
            // =========================================================
            {
                texte: "📚 Le fixer dans les yeux en silence pendant 40 secondes en mangeant une merguez, ruinant son cadrage pour l'éternité.",
                impact: { followers: 1600, budget: 0, energy: 8, credibility: 8, tension: 0 },
                consequenceText: "Zéro son exploitable, pas une bribe d'insulte à couper au montage. Jordan s'énerve tout seul devant ton calme absolu et part chercher une autre cible.",
                tweets: [
                    { author: "Camarade Barbecue", handle: "@MerguezLutte", text: "Mâcher sa merguez dans les yeux de Jordan Florentin sans lâcher un mot : masterclass d'autodéfense 🌭💀" },
                    { author: "Lucas", handle: "@Lucas_Gz", text: "Le vent du siècle mdrrr il a buggé pendant 1 minute" },
                    { author: "Observatoire Médias", handle: "@ObsMediasFR", text: "Technique redoutable : priver le polémiste de matière sensationnaliste neutralise le piège." },
                    { author: "Jordan Florentin", handle: "@JordanFlrtn", text: "Le mépris effrayant des militants d'esttrême gauche face à nos micros." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE DÉTOURNEMENT LOGISTIQUE (Budget & Base)
            // =========================================================
            {
                texte: "💶 Tendre la boîte de caisse de grève pile devant son objectif pour que son million d'abonnés voie le QR code de don.",
                impact: { followers: 800, budget: 190, energy: -4, credibility: 3, tension: 0 },
                consequenceText: "Son cadreur zoome par réflexe : le QR code de la caisse syndicale passe en plein écran sur son live. 190 € de dons rentrent grâce à sa propre comm'.",
                tweets: [
                    { author: "Trésorier CGT", handle: "@Caisse_CGT", text: "+190 balles sur la caisse de grève grâce au live de Frontières, merci pour le sponsoring les réacs 💸✊" },
                    { author: "Karim", handle: "@Krimo_Paris", text: "Il a transformé le micro de Jordan en terminal de carte bleue ptdrrrr génie" },
                    { author: "Abonné Frontières", handle: "@DroitierVrai", text: "Pourquoi notre journaliste cadre la cagnotte des gauchistes ??? Supprimez !" },
                    { author: "Jordan Florentin", handle: "@JordanFlrtn", text: "Racket organisé et intimidation commerciale en plein cortège." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : REGELEGORILA (Palier 2 — Score : 45 / 100)
    // Rareté : Régional / Web | Alignement : Allié
    // Thème : Médias & Clashs (theme-medias)
    // -------------------------------------------------------------
    {
        id: "regelegorila_top3_cinema",
        characterId: "ally_regelegorila",
        characterName: "Regelegorila",
        tier: 2,
        scoreIndex: 45,
        theme: "theme-medias",
        titre: "Le Top 3 Cinéma face à Regelegorila",
        description: "Regelegorila te croise en convention et braque son micro : « Bon le sang, t'es là pour la lutte mais t'as intérêt d'avoir du goût. Balance ton Top 3 films de tous les temps, pas le droit de mentir, la commu va juger direct ! »",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH / PROVOCATION ANTI-FACHO (Pari 50/50)
            // Coût visible : -18% Énergie | Gain visible : +6% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « La Bataille d'Alger, Pride et La Haine : que des bangers qui font chialer l'extrême droite et les flics. »",
                isClash: true,
                fixedCost: { energy: -18, tension: 6 },
                
                // Issue A : Le Coup de Maître (50%)
                outcomeSuccess: {
                    impact: { followers: 4500, budget: 0, energy: -18, credibility: 6, tension: 6 },
                    consequenceText: "Regelegorila hurle « MASTERCLASS ABSOLUE ! » face caméra en validant le tier S. Le TikTok tape le million de vues en une nuit et régale tout le Twitter cinéphile de gauche.",
                    tweets: [
                        { author: "Regelegorila", handle: "@Regelegorila", text: "CE TOP 3 C'EST DU POULET PUR TIER S DIRECT ON DISPUTE MÊME PAS 🔥🦍" },
                        { author: "Cinéphile_94", handle: "@CineLover94", text: "La Bataille d'Alger cité en plein TikTok, enfin quelqu'un avec du vrai cinéma dans les veines." },
                        { author: "Jordan_Fdesouche", handle: "@PatrioteRage", text: "Encore de la propagande antifa déguisée en critique cinéma, insupportable." },
                        { author: "Yanis", handle: "@Yanis_K", text: "Mdrrr la tête de Rege quand il a entendu La Haine, il était en transe" }
                    ]
                },
                
                // Issue B : Le Faux Pas / Raid Réac (50%)
                outcomeFailure: {
                    impact: { followers: -800, budget: 0, energy: -18, credibility: -6, tension: 6 },
                    consequenceText: "Rege valide fort le top, mais les comptes de ciné-droite et les fans de blockbuster militariste viennent pourrir l'espace commentaires en t'accusant d'être un 'militant sans âme qui ne regarde que des tracts en vidéo'.",
                    tweets: [
                        { author: "FilmBro_FR", handle: "@AlphaCinema", text: "Le mec choisit ses films comme son programme électoral, zéro sensibilité artistique que de la posture." },
                        { author: "Regelegorila", handle: "@Regelegorila", text: "Les coms qui ragent sur la sélection détendez-vous deux secondes c'est que du cinéma mdr" },
                        { author: "Maxime", handle: "@Max_Cine", text: "Top 3 trop prévisible pour un militant, fallait mettre du Audiard un peu" },
                        { author: "Sarah", handle: "@Sarah_Stras", text: "Laissez-le respirer la sélection est très lourde" }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LES CLASSIQUES DU RÉEL / FOND & SOCIAL (Crédibilité & Repos)
            // =========================================================
            {
                texte: "📚 « Moi, Daniel Blake de Ken Loach, Ressources Humaines de Laurent Cantet et La Classe Ouvrière va au Paradis. »",
                impact: { followers: 1800, budget: 0, energy: 8, credibility: 8, tension: 0 },
                consequenceText: "Rege hoche la tête avec un profond respect pour la rigueur cinéphile. Le milieu étudiant et les cinéphiles pointus partagent la vidéo comme une recommandation de référence.",
                tweets: [
                    { author: "Regelegorila", handle: "@Regelegorila", text: "Respect énorme pour Ken Loach, là on est sur du cinéma qui prend aux tripes 🎬👏" },
                    { author: "Critique_Cahiers", handle: "@CinephileEngage", text: "Citer Elio Petri et Cantet chez Regelegorila, belle passerelle entre pop culture et chefs-d'œuvre sociaux." },
                    { author: "Lucas", handle: "@Lucas_Gz", text: "Moi, Daniel Blake m'a brisé le cœur en deux, top validé direct" },
                    { author: "Étudiante Art", handle: "@BeauxArtsLutte", text: "Enfin des vraies reco de cinéma politique et sensible." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE DÉTOURNEMENT CINÉ-CLUB SOLIDAIRE (Budget & Base)
            // =========================================================
            {
                texte: "💶 « Germinal, Parasite et Les Misérables de Ladj Ly... et d'ailleurs on projette Ladj Ly ce samedi à 5 € pour la caisse de grève ! »",
                impact: { followers: 900, budget: 220, energy: -4, credibility: 3, tension: 0 },
                consequenceText: "Rege kiffe le coup de promo pour le ciné-club militant : l'annonce génère 220 € de préventes immédiates pour la séance solidaire du week-end.",
                tweets: [
                    { author: "Regelegorila", handle: "@Regelegorila", text: "Allez soutenir leur ciné-club ce samedi si vous êtes dans le coin, force à eux ! 🍿✊" },
                    { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+220 € de places vendues pour la projection de samedi grâce au passage chez Rege ! 💸🎟️" },
                    { author: "Nabil", handle: "@Nabil_93", text: "Parasite dans le top c'est obligatoire, masterclass" },
                    { author: "Ciné-Club Populaire", handle: "@SeanceLutte", text: "La billetterie est quasi complète pour samedi, merci pour la force !" }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : JEAN MESSIHA (Palier 3 — Score : 58 / 100)
    // Rareté : National / Web & Médias | Alignement : Opposant
    // Thème : Antifascisme & Droites (theme-antifa)
    // -------------------------------------------------------------
    {
        id: "messiha_cagnotte_polemique",
        characterId: "opp_jean_messiha",
        characterName: "Jean Messiha",
        tier: 3,
        scoreIndex: 58,
        theme: "theme-antifa",
        titre: "La leçon de morale de Jean Messiha sur les réseaux",
        description: "En direct sur X dans un Space à 20 000 auditeurs, Jean Messiha hurle dans ses écouteurs en accusant la jeunesse de gauche d'être « des parasites assistés qui détruisent la France et refusent de travailler ». Tu montes à la tribune vocale pour prendre la parole devant toute son audience.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH / ATTAQUE FRONTALE SUR LA CAGNOTTE (Pari 50/50)
            // Coût visible : -20% Énergie | Gain visible : +8% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Jean, donner des leçons de travail quand ton plus grand exploit économique c'est d'avoir gratté une commission sur une cagnotte en ligne, c'est gonflé. »",
                isClash: true,
                fixedCost: { energy: -20, tension: 8 },
                
                // Issue A : Le Coup de Maître (50%)
                outcomeSuccess: {
                    impact: { followers: 14000, budget: 0, energy: -20, credibility: 8, tension: 8 },
                    consequenceText: "Silence de mort dans le Space pendant 5 secondes. Messiha pète un câble en direct, t'insulte en boucle et finit par couper le live en panique. Le replay tourne partout.",
                    tweets: [
                        { author: "Krimo", handle: "@Krimo_93", text: "IL A ÉTEINT MESSIHA EN 10 SECONDES DANS SON PROPRE SPACE JE SUIS MORT 😭💀" },
                        { author: "Jean Messiha", handle: "@JeanMessiha", text: "Diffamation honteuse de l'extrême gauche en panique totale. Mes avocats sont saisis !" },
                        { author: "Anonyme", handle: "@User99312", text: "ferme là jean va compter tes sous" },
                        { author: "Mème Politique", handle: "@ZappingPolFR", text: "Le ragequit le plus rapide de l'histoire des Spaces Twitter, masterclass absolue." }
                    ]
                },
                
                // Issue B : Le Ban du Space / Raid Numérique (50%)
                outcomeFailure: {
                    impact: { followers: -3500, budget: 0, energy: -20, credibility: -8, tension: 8 },
                    consequenceText: "Ses modos te coupent le micro instantanément. Messiha te traite de 'racaille antifa' pendant 15 minutes en direct sans contradiction et lance sa commu sur ton compte.",
                    tweets: [
                        { author: "Patriote_Vrai", handle: "@FranceReconquete", text: "Bravo Jean d'avoir dégagé ce provocateur d'extrême gauche sans lui laisser d'antenne !" },
                        { author: "Militant sous Raid", handle: "@GauchoVibes", text: "Micro coupé en 2 secondes, par contre les insultes derrière en roue libre... quelle bande de lâches." },
                        { author: "Zack", handle: "@Zack_93", text: "Messiha qui aboie tout seul dès qu'on lui pose une vraie question classique" },
                        { author: "Observatoire Com'", handle: "@MediaWatchFR", text: "Clash violent lors d'un direct sur les réseaux sociaux, comptes signalés en masse." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE FOND & LA DÉCONSTRUCTION DU TRAVAIL (Crédibilité & Repos)
            // =========================================================
            {
                texte: "📚 Détailler calmement les chiffres de la précarité étudiante, des non-recours aux droits et des exonérations de cotisations patronales.",
                impact: { followers: 6500, budget: 0, energy: 10, credibility: 10, tension: 0 },
                consequenceText: "Ton exposé rigoureux et sourcé contraste violemment avec ses vociférations. Les auditeurs indécis saluent ta tenue et tes données économiques.",
                tweets: [
                    { author: "Étudiant Éco", handle: "@EcoCritique", text: "Poser les chiffres de l'INSEE face aux délires de Messiha : un contraste saisissant 📊👏" },
                    { author: "Auditeur Neutre", handle: "@CitoyenDirect", text: "L'intervenant de gauche a été remarquable de calme et de précision ce soir." },
                    { author: "Salomé Saqué Fan", handle: "@JeunesseClimat", text: "La rigueur des faits détruit le bruit médiatique, bravo pour l'intervention." },
                    { author: "Jean Messiha", handle: "@JeanMessiha", text: "Chiffres bidonnés de la technocratie de gauche. La réalité du terrain vous rattrapera !" }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE DÉTOURNEMENT LOGISTIQUE (Budget & Base)
            // =========================================================
            {
                texte: "💶 Épingler le lien de la caisse de grève pour les soignants et les cheminots directement dans le chat du Space.",
                impact: { followers: 3000, budget: 450, energy: 5, credibility: 4, tension: 0 },
                consequenceText: "La provocation réussit : plusieurs centaines d'auditeurs curieux cliquent sur le lien et 450 € sont versés à la caisse de solidarité ouvrière.",
                tweets: [
                    { author: "Trésorier CGT", handle: "@Caisse_CGT", text: "+450 € récoltés sur le Space de Messiha pour les grévistes ! Merci pour le coup de pub involontaire 💸✊" },
                    { author: "Auditeur Hilare", handle: "@LiveTrackerFR", text: "Infiltrer son live pour faire financer les syndicats, le move est magistral." },
                    { author: "Modo Space", handle: "@AdminPatriote", text: "Supprimez ces liens gauchistes immédiatement du fil de discussion !" },
                    { author: "Samy", handle: "@Samy_off", text: "braquage de caisse en direct ptdrrr génie" }
                ]
            }
        ]
    },

    // -------------------------------------------------------------
    // PERSONNAGE : MANUEL VALLS (Palier 3 — Score : 62 / 100)
    // Rareté : National / Poids Lourd Déchu | Alignement : Opposant
    // Thème : Médias & Clashs (theme-medias)
    // -------------------------------------------------------------
    {
        id: "valls_lecon_republique",
        characterId: "opp_manuel_valls",
        characterName: "Manuel Valls",
        tier: 3,
        scoreIndex: 62,
        theme: "theme-medias",
        titre: "La leçon de morale républicaine de Manuel Valls",
        description: "Sur un plateau de débat, Manuel Valls tape du poing sur la table avec un air sévère : « La gauche radicale a trahi les valeurs républicaines et le sens de l'État ! » Il te fixe droit dans les yeux en t'accusant d'être « un danger pour les institutions de la République ».",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH / RAPPEL DU PARCOURS ÉLECTORAL (Pari 50/50)
            // Coût visible : -20% Énergie | Gain visible : +8% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Manuel, parler de fidélité à la République après avoir trahi le PS, ciré les pompes de Macron, perdu à Barcelone et tenté de gratter un poste à chaque remaniement, c'est indécent. »",
                isClash: true,
                fixedCost: { energy: -20, tension: 8 },
                
                // Issue A : Le Coup de Maître (50%)
                outcomeSuccess: {
                    impact: { followers: 16000, budget: 0, energy: -20, credibility: 8, tension: 8 },
                    consequenceText: "Valls devient livide, tente de bafouiller sur 'son sens du devoir' et perd totalement ses moyens. L'extrait vidéo cumule 1 million de vues sur TikTok en 2 heures.",
                    tweets: [
                        { author: "Malaise TV", handle: "@MalaiseTV", text: "Le rappel du CV complet de Manuel Valls en direct... sa tête à la fin 💀😭" },
                        { author: "Vallsiste Inconditionnel", handle: "@Manuel_2027", text: "Attaques personnelles indignes face à un homme d'État qui a servi la France." },
                        { author: "Hugo", handle: "@Hugo_L", text: "Le mec s'est pris le tarif Barcelone aller-retour sans escale mdrrr" },
                        { author: "PolitiMeme", handle: "@ZapPol", text: "Valls renvoyé à ses défaites électorales en 15 secondes chrono, coup de grâce." }
                    ]
                },
                
                // Issue B : Le Cadrage Hostile / Bad Buzz (50%)
                outcomeFailure: {
                    impact: { followers: -4000, budget: 0, energy: -20, credibility: -8, tension: 8 },
                    consequenceText: "Le présentateur prend immédiatement la défense de l'ancien Premier ministre et te recadre sèchement sur 'le respect dû aux anciens serviteurs de l'État', coupant court à ta prise de parole.",
                    tweets: [
                        { author: "Chroniqueur Élysée", handle: "@EditoParis", text: "Inadmissible manque de respect envers un ancien Premier ministre sur un plateau de télévision." },
                        { author: "Militant sous Tension", handle: "@FrontGauche", text: "Les journalistes qui volent au secours de Valls dès qu'on lui rappelle son bilan... pathétique." },
                        { author: "Spectateur", handle: "@TV_Direct", text: "Le débat a tourné au règlement de comptes de cour d'école, dommage." },
                        { author: "Lina", handle: "@Lina_92", text: "Valls protégé par le système comme d'habitude" }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE FOND & LE BILAN SOCIAL DU 49.3 (Crédibilité & Repos)
            // =========================================================
            {
                texte: "📚 Lui rappeler le recours systématique au 49.3 pour imposer la Loi Travail et la fracturation historique de la gauche sous son mandat.",
                impact: { followers: 7000, budget: 0, energy: 10, credibility: 10, tension: 0 },
                consequenceText: "Une argumentation politique implacable et sans invective. Tu démontres que la dérive autoritaire actuelle prend racine dans les choix antidémocratiques de son gouvernement.",
                tweets: [
                    { author: "Revue Regards", handle: "@Regards_fr", text: "Rappeler le péché originel de la Loi Travail et des 49.3 face à Valls : une mise au point politique salutaire 📚👏" },
                    { author: "Syndicaliste CGT", handle: "@CGT_Cheminots", text: "On n'a pas oublié les violences de 2016 sous son gouvernement. Bravo pour le rappel des faits." },
                    { author: "Étudiant Histoire", handle: "@HistoireLutte", text: "Démontage politique très propre, sans insulte, que des faits historiques." },
                    { author: "Manuel Valls", handle: "@manuelvalls", text: "Réformer le pays demande du courage. La posture contestataire n'a jamais créé un seul emploi." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE DÉTOURNEMENT LOGISTIQUE (Budget & Base)
            // =========================================================
            {
                texte: "💶 Lancer une souscription parodique 'Un aller simple pour Barcelone' au profit des caisses de solidarité du mouvement.",
                impact: { followers: 3500, budget: 500, energy: 5, credibility: 4, tension: 0 },
                consequenceText: "La blague prend instantanément sur les réseaux : la cagnotte satirique récolte 500 € nets reversés aux caisses de grève locales.",
                tweets: [
                    { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+500 € collectés pour la caisse militante grâce à la cagnotte satirique ! Merci Manuel ✈️💸" },
                    { author: "Militant Hilare", handle: "@GauchoParis", text: "J'ai mis 5 balles pour la blague, meilleure utilisation de mon argent cette semaine." },
                    { author: "Samy", handle: "@Samy_off", text: "Prenez lui un pass Navigo zone 5 plutôt ptdrrr" },
                    { author: "Observatoire du Web", handle: "@BuzzWatchFR", text: "L'art du crowdfunding satirique maîtrisé à la perfection par les militants de gauche." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : ÉRIC CIOTTI (Palier 3 — Score : 65 / 100)
    // Rareté : National / Ténor | Alignement : Opposant
    // Thème : Antifascisme & Droites (theme-antifa)
    // -------------------------------------------------------------
    {
        id: "ciotti_barricade_siege_lr",
        characterId: "opp_eric_ciotti",
        characterName: "Éric Ciotti",
        tier: 3,
        scoreIndex: 65,
        theme: "theme-antifa",
        titre: "La prise d'otage du bureau d'Éric Ciotti",
        description: "En direct sur les réseaux après son ralliement au RN, Éric Ciotti poste une vidéo depuis son bureau barricadé à double tour au siège LR : « L'extrême gauche et les traîtres veulent m'expulser, mais je tiendrai cette forteresse pour l'union des droites ! » Les mèmes pleuvent et tout le monde attend ton commentaire en dessous de son post.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH / HUMILIATION DU RETRANCHEMENT (Pari 50/50)
            // Coût visible : -20% Énergie | Gain visible : +8% Tension 🔥
            // =========================================================
            {
                texte: "🔥 Commenter : « Éric, s'enfermer à clé dans un bureau avec des gâteaux pour gratter trois circo à Bardella, c'est pas Fort Alamo, c'est juste la garderie des traîtres. »",
                isClash: true,
                fixedCost: { energy: -20, tension: 8 },
                
                // Issue A : Le Coup de Maître (50%)
                outcomeSuccess: {
                    impact: { followers: 15000, budget: 0, energy: -20, credibility: 8, tension: 8 },
                    consequenceText: "Ton commentaire tape 30 000 likes en une heure. Ciotti est contraint de désactiver les réponses sous son tweet devant l'avalanche de moqueries.",
                    tweets: [
                        { author: "Zack", handle: "@Zack_93", text: "LA GARDERIE DES TRAÎTRES JE VAIS M'ÉVANOUIR 😭💀" },
                        { author: "Éric Ciotti", handle: "@ECiotti", text: "Inadmissible harcèlement de l'extrême gauche contre notre courageuse démarche d'union nationale !" },
                        { author: "Anonyme", handle: "@User91823", text: "ouvre la porte eric t'as 60 ans sois digne" },
                        { author: "Mème Politique", handle: "@ZapPolFR", text: "Le ratio légendaire sous le tweet d'enfermement de Ciotti, l'histoire est en marche." }
                    ]
                },
                
                // Issue B : Le Raid Numérique / Bad Buzz (50%)
                outcomeFailure: {
                    impact: { followers: -3800, budget: 0, energy: -20, credibility: -8, tension: 8 },
                    consequenceText: "Les militants ciottistes et l'extrême droite organisent un raid massif sur tes réseaux pour te traiter de « voyou sans respect pour les élus de la nation ».",
                    tweets: [
                        { author: "Les Amis d'Éric", handle: "@CiottiUnion", text: "Soutien total à notre président face aux attaques ignobles des nervis de gauche !" },
                        { author: "Militant sous Raid", handle: "@FrontPopu34", text: "Ça lâche la meute de bots dès qu'on se fout de la gueule du verrouillage de porte mdr." },
                        { author: "Lucas", handle: "@Lucas_Gz", text: "Les coms sont devenus un zoo ambulant" },
                        { author: "Veille Droite", handle: "@ActuDroite", text: "Vives tensions numériques suite à l'accord d'union nationale." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE FOND & LA DÉCONSTRUCTION DE L'ALLIANCE (Crédibilité & Repos)
            // =========================================================
            {
                texte: "📚 Analyser l'effondrement moral de la droite républicaine qui valide le programme de régression sociale du RN.",
                impact: { followers: 6800, budget: 0, energy: 10, credibility: 10, tension: 0 },
                consequenceText: "Une tribune chirurgicale qui démontre comment la droite dite 'gaulliste' a définitivement plié le genou devant les logiques identitaires pour sauver ses postes.",
                tweets: [
                    { author: "Revue Regards", handle: "@Regards_fr", text: "Une analyse limpide de la faillite idéologique de la droite traditionnelle face au péril fasciste 📚👏" },
                    { author: "Historien Pol", handle: "@HistoireDroite", text: "Rappeler les digues historiques de 1945 pour éclairer la trahison contemporaine : travail salutaire." },
                    { author: "Étudiante Droit", handle: "@JuristeDeGauche", text: "Poser le fond politique plutôt que le spectacle, merci pour cette mise au point." },
                    { author: "Citoyen Éclairé", handle: "@PenseurLibre", text: "L'opportunisme électoral résumé en une analyse implacable." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE DÉTOURNEMENT LOGISTIQUE / STICKERS (Budget & Base)
            // =========================================================
            {
                texte: "💶 Sortir le pack de stickers « Touche pas à mon siège » et des pancartes parodiques vendus sur les stands militants.",
                impact: { followers: 3200, budget: 480, energy: 5, credibility: 4, tension: 0 },
                consequenceText: "Les stickers montrant Ciotti barricadé avec sa clé s'arrachent sur les piquets et les facs : 480 € nets récoltés pour la caisse de collage de la section.",
                tweets: [
                    { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+480 € dans la caisse de collage grâce aux stickers 'Barricade de Ciotti' ! 🪧💸" },
                    { author: "Colleur de Nuit", handle: "@EquipeNocturne", text: "On en a collé 300 sur les panneaux de la ville, le rendu est hilarant !" },
                    { author: "Samy", handle: "@Samy_off", text: "J'en ai collé un sur la porte de ma chambre mdrrrr" },
                    { author: "Militant Terrain", handle: "@DistribAction", text: "Rupture de stock sur les packs de stickers militants, on relance l'impression." }
                ]
            }
        ]
    },

    // -------------------------------------------------------------
    // PERSONNAGE : CLÉMENT VIKTOROVITCH (Palier 3 — Score : 65 / 100)
    // Rareté : National / Web & Médias | Alignement : Allié
    // Thème : Décryptage du Discours (theme-medias)[cite: 1]
    // -------------------------------------------------------------
    {
        id: "viktorovitch_analyse_novlangue",
        characterId: "ally_clement_viktorovitch",
        characterName: "Clément Viktorovitch",
        tier: 3,
        scoreIndex: 65,
        theme: "theme-medias",
        titre: "L'atelier décryptage avec Clément Viktorovitch",
        description: "Clément Viktorovitch t'invite sur son plateau d'analyse pour une masterclass consacrée aux pièges du lexique néolibéral : « Le pouvoir utilise 'pédagogie' pour dire imposition autoritaire, et 'dialogue social' pour écraser les grèves. Quelle est votre riposte rhétorique face à cette novlangue ? »",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH / DÉMOLITION DES ÉDITOCRATES (Pari 50/50)
            // Coût visible : -20% Énergie | Gain visible : +8% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « La novlangue ne sert qu'à anesthésier la lutte des classes : appelons un patron voyou un voleur et un ministre d'austérité un saboteur de services publics ! »",
                isClash: true,
                fixedCost: { energy: -20, tension: 8 },
                
                // Issue A : Le Coup de Maître (50%)
                outcomeSuccess: {
                    impact: { followers: 16500, budget: 0, energy: -20, credibility: 8, tension: 8 },
                    consequenceText: "Clément sourit en validant la radicalité assumée : « Nommer le conflit, c'est déjà résister. » L'extrait fait 800k vues sur TikTok et régale les militants en recherche de clarté.",
                    tweets: [
                        { author: "Clément Viktorovitch", handle: "@clem_viktor", text: "Déconstruire la novlangue patronale pour réarmer le discours populaire : une séquence d'une grande clarté rhétorique 📚👑" },
                        { author: "Étudiant Philo", handle: "@PhiloSociale", text: "La claque aux éditorialistes de plateau, pas de jargon tiède, que des vérités !" },
                        { author: "Édito Panique", handle: "@ChroniqueurCNews", text: "Encore un appel à la haine sociale sur les médias indépendants de gauche." },
                        { author: "Yanis", handle: "@Yanis_K", text: "Viktorovitch qui valide la punchline avec un sourire glacé c'est trop satisfaisant" }
                    ]
                },
                
                // Issue B : Le Faux Pas / Débat Trop Abstrait (50%)
                outcomeFailure: {
                    impact: { followers: -3200, budget: 0, energy: -20, credibility: -8, tension: 8 },
                    consequenceText: "La formule est un peu trop violente pour l'audience habituelle de l'émission. Des spectateurs et des modérés te reprochent de 'fermer la porte au débat constructif'.",
                    tweets: [
                        { author: "Auditeur Déçu", handle: "@NuanceEtDébat", text: "Dommage de tomber dans l'invective binaire sur une émission qui cherche justement l'élévation du débat." },
                        { author: "Militant Rad", handle: "@GauchoPur", text: "On ne s'excuse pas de nommer les ennemis de classe, les centristes restez chez vous." },
                        { author: "Clément Viktorovitch", handle: "@clem_viktor", text: "La conflictualité fait partie intégrante du jeu démocratique, même si les formes font débat." },
                        { author: "Lina", handle: "@Lina_92", text: "C'était un peu sec mais au moins c'est honnête" }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE FOND & LA DÉCONSTRUCTION DU DISCOURS (Crédibilité & Repos)
            // =========================================================
            {
                texte: "📚 Décortiquer méthodiquement le lexique managérial en fournissant un guide de désintoxication des éléments de langage gouvernementaux.",
                impact: { followers: 7500, budget: 0, energy: 10, credibility: 10, tension: 0 },
                consequenceText: "Une démonstration pédagogique de haut vol. Le lexique comparatif que tu présentes en direct est partagé par des syndicats et des profs dans toute la France.",
                tweets: [
                    { author: "Clément Viktorovitch", handle: "@clem_viktor", text: "Un travail remarquable d'hygiène intellectuelle et de décryptage des sophismes politiques 👏📊" },
                    { author: "Professeur SES", handle: "@EnseignantEngagé", text: "Je vais diffuser cet extrait direct à mes élèves pour le cours sur les médias et la politique." },
                    { author: "Syndicat FSU", handle: "@FSU_Officiel", text: "Un outil précieux pour nos délégués face au jargon managérial des directions." },
                    { author: "Citoyen Éclairé", handle: "@PenseurLibre", text: "Brillant, précis, sans bavure. On en redemande." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE DÉTOURNEMENT LOGISTIQUE / MANUEL POPULAIRE (Budget & Base)
            // =========================================================
            {
                texte: "💶 Présenter le petit livret 'Petit manuel d'autodéfense intellectuelle' édité par la section et vendu à 5 € en soutien aux caisses.",
                impact: { followers: 3600, budget: 520, energy: 5, credibility: 4, tension: 0 },
                consequenceText: "Le coup de projecteur chez Clément fait exploser les commandes du livret : 520 € de bénéfices nets rentrent dans la caisse d'éducation populaire.",
                tweets: [
                    { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+520 € de livrets d'autodéfense vendus en direct ! Merci à Clément et à la commu 📚💸" },
                    { author: "Lecteur Engagé", handle: "@LivreEnLutte", text: "Commande passée direct ! L'éducation populaire c'est la base de tout." },
                    { author: "Clément Viktorovitch", handle: "@clem_viktor", text: "Soutien total aux initiatives d'émancipation intellectuelle par le livre et le terrain !" },
                    { author: "Samy", handle: "@Samy_off", text: "Le braquage de librairie légal validé" }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : PASCAL PRAUD (Palier 4 — Score : 78 / 100)
    // Rareté : National / Poids Lourd Médiatique | Alignement : Opposant
    // Thème : Médias & Clashs (theme-medias)
    // -------------------------------------------------------------
    {
        id: "praud_extinction_lumiere_climat",
        characterId: "opp_pascal_praud",
        characterName: "Pascal Praud (CNews)",
        tier: 4,
        scoreIndex: 78,
        theme: "theme-medias",
        titre: "L'hystérie climatique dans « L'Heure des Pros »",
        description: "En plein direct sur CNews, Pascal Praud s'énerve tout seul en agitant ses fiches : « Mais enfin ! Il fait -2°C ce matin à Romorantin et les écolos osent nous parler de réchauffement climatique ! C'est le délire des punaises de lit et des Khmers verts qui veulent interdire à la France qui travaille de rouler au diesel ! » La séquence devient virale et tout le web attend ta réplique.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH / DÉMOLITION SCIENTIFIQUE BRUTALE (Pari 50/50)
            // Coût visible : -24% Énergie | Gain visible : +8% Tension 🔥
            // =========================================================
            {
                texte: "🔥 Reposter : « Confondre météo du matin à Romorantin et dérèglement climatique mondial à 60 ans passés, c'est pas une ligne éditoriale Pascal, c'est juste un certificat d'incompétence payé par un milliardaire. »",
                isClash: true,
                fixedCost: { energy: -24, tension: 8 },
                
                // Issue A : Le Coup de Maître (50%)
                outcomeSuccess: {
                    impact: { followers: 48000, budget: 0, energy: -24, credibility: 8, tension: 8 },
                    consequenceText: "Ton tweet fracasse les records avec 50 000 partages. Plusieurs climatologues renommés citent ta réponse et Praud passe son émission du lendemain à se justifier péniblement.",
                    tweets: [
                        { author: "Glupatate", handle: "@glupatate", text: "Praud éteint en 2 lignes par la commu climatique j'en pleure 😭💀🌡️" },
                        { author: "Pascal Praud (Parodie)", handle: "@PraudOff", text: "C'est inouï ! On ne peut plus donner la température d'un village sans que l'extrême gauche hystérique nous insulte !" },
                        { author: "Climatologue CNRS", handle: "@ScienceClimat", text: "Rappel salutaire : la météo locale n'est pas le climat global. Merci pour ce recadrage net." },
                        { author: "Zack", handle: "@Zack_93", text: "Praud en sueur sur son siège en cuir à 9h du matin masterclass" }
                    ]
                },
                
                // Issue B : Le Raid Numérique / Bad Buzz (50%)
                outcomeFailure: {
                    impact: { followers: -11000, budget: 0, energy: -24, credibility: -8, tension: 8 },
                    consequenceText: "Praud consacre 20 minutes de son direct à citer ton compte à l'antenne, te traitant de « représentant de la police de la pensée ». Une horde de retraités furieux inonde tes mentions.",
                    tweets: [
                        { author: "Chroniqueur CNews", handle: "@Edito_Ordre", text: "L'intolérance permanente des Khmers verts qui refusent la liberté d'expression de Pascal Praud." },
                        { author: "Militant sous les Feux", handle: "@FrontClimat", text: "20 minutes sur CNews pour nous insulter en direct parce qu'on a rappelé la physique élémentaire 🙄" },
                        { author: "Gérard_83", handle: "@PatrioteVar", text: "Bien dit Pascal ! Ces gauchistes veulent nous obliger à manger des insectes !" },
                        { author: "Arcom Watch", handle: "@ArcomDirect", text: "Nouveaux signalements massifs pour manque de rigueur scientifique sur l'antenne de CNews." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE FOND & L'INFOGRAPHIE DU GIEC (Crédibilité & Repos)
            // =========================================================
            {
                texte: "📚 Publier un thread pédagogique rigoureux superposant les courbes de température de Météo-France et les rapports du GIEC.",
                impact: { followers: 21000, budget: 0, energy: 10, credibility: 12, tension: 0 },
                consequenceText: "Une réponse scientifique irréprochable. Le fil devient la ressource virale de référence pour contrer le climatoscepticisme médiatique.",
                tweets: [
                    { author: "Réseau Action Climat", handle: "@RAC_France", text: "Une démonstration limpide et factuelle qui démonte les fausses vérités des plateaux d'opinion 📊👏" },
                    { author: "Étudiant Agro", handle: "@JeunesseTerre", text: "Thread d'utilité publique à envoyer à tous ses proches sceptiques." },
                    { author: "Citoyen Éclairé", handle: "@PenseurLibre", text: "Opposer la science et la rationalité aux cris de plateau : la seule méthode qui gagne." },
                    { author: "Scientifique Indé", handle: "@LaboLutte", text: "Merci de populariser les graphiques du GIEC avec autant de pédagogie." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE DÉTOURNEMENT LOGISTIQUE (Budget & Base)
            // =========================================================
            {
                texte: "💶 Lancer un appel à financer des capteurs thermiques citoyens et des bâches isolantes pour les squats de précaires.",
                impact: { followers: 9500, budget: 900, energy: 5, credibility: 4, tension: 0 },
                consequenceText: "Le buzz permet de lever 900 € en quelques heures pour acheter du matériel d'isolation d'urgence destiné aux mal-logés.",
                tweets: [
                    { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+900 € collectés grâce au contre-buzz Praud ! Les kits d'isolation pour les squats sont achetés 🏠💸" },
                    { author: "Collectif Droit au Toit", handle: "@DAL_Local", text: "La solidarité concrète face au mépris bourgeois : merci aux camarades pour les fonds !" },
                    { author: "Donateur Engagé", handle: "@SoutienFroid", text: "Don envoyé direct pour aider les sans-abris face au froid réel." },
                    { author: "Samy", handle: "@Samy_off", text: "Financer des chauffages sur le dos de CNews c'est trop fort" }
                ]
            }
        ]
    },

    // -------------------------------------------------------------
    // PERSONNAGE : SARAH KNAFO (Palier 4 — Score : 80 / 100)
    // Rareté : National / Poids Lourd Électoral | Alignement : Opposant
    // Thème : Antifascisme & Droites (theme-antifa)
    // -------------------------------------------------------------
    {
        id: "knafo_intox_chiffres_ue",
        characterId: "opp_sarah_knafo",
        characterName: "Sarah Knafo",
        tier: 4,
        scoreIndex: 80,
        theme: "theme-antifa",
        titre: "L'intox budgétaire de Sarah Knafo sur l'Algérie",
        description: "Sur son compte officiel, la députée européenne de Reconquête Sarah Knafo balance une vidéo ultra-produite affirmant avec aplomb que « la France verse 800 millions d'euros d'aide publique au développement par an à l'Algérie », chiffre totalement inventé et démenti dans la foulée par les données officielles de l'OCDE et du ministère des Affaires étrangères.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH / AFFICHAGE DU MENSONGE BRUTAL (Pari 50/50)
            // Coût visible : -24% Énergie | Gain visible : +8% Tension 🔥
            // =========================================================
            {
                texte: "🔥 Commenter : « Sortir de l'ENA et être infoutue de lire un rapport de l'OCDE sans multiplier les chiffres par dix pour exciter sa base xénophobe, c'est de l'incompétence ou de la fraude ? »",
                isClash: true,
                fixedCost: { energy: -24, tension: 8 },
                
                // Issue A : Le Coup de Maître (50%)
                outcomeSuccess: {
                    impact: { followers: 50000, budget: 0, energy: -24, credibility: 8, tension: 8 },
                    consequenceText: "La note de la communauté Twitter s'affiche instantanément sous son tweet avec ta réponse en tête. Son mensonge est exposé en pleine lumière dans toute la presse.",
                    tweets: [
                        { author: "FactCheck Politique", handle: "@FactCheckFR", text: "DÉSINTOX : Les 800M€ annoncés par Sarah Knafo sont faux (chiffre réel : environ 130M€ sur plusieurs années, essentiellement des bourses étudiantes)." },
                        { author: "Zack", handle: "@Zack_93", text: "Elle s'est pris la Community Note dans les dents en 15 minutes chrono ptdrrr 💀📜" },
                        { author: "Sarah Knafo", handle: "@SarahKnafo", text: "La technocratie bruxelloise et l'extrême gauche s'allient pour masquer la vérité aux Français !" },
                        { author: "Anonyme", handle: "@User4892", text: "Arrête d'inventer des chiffres Sarah ça devient gênant" }
                    ]
                },
                
                // Issue B : Le Raid Numérique / Bad Buzz (50%)
                outcomeFailure: {
                    impact: { followers: -12500, budget: 0, energy: -24, credibility: -8, tension: 8 },
                    consequenceText: "L'équipe numérique de Reconquête lâche ses armées de faux comptes certifiés pour te harceler et polluer ton compte de messages xénophobes.",
                    tweets: [
                        { author: "Jeunes avec Knafo", handle: "@ReconqueteJeunes", text: "Soutien total à Sarah face à la diffamation organisée des gauchistes !" },
                        { author: "Militant sous Raid", handle: "@LuttePopulaire", text: "Les bots de Zemmour qui débarquent par centaines dès qu'on sort les vrais rapports de l'OCDE..." },
                        { author: "Lucas", handle: "@Lucas_Gz", text: "Leurs comptes à drapeaux qui spamment sans lire un seul chiffre mdr" },
                        { author: "Observatoire Com' Pol", handle: "@ComPolFR", text: "Bataille rangée de désinformation sous la publication de la députée européenne." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE FOND & LE RAPPORT BUDGÉTAIRE RÉEL (Crédibilité & Repos)
            // =========================================================
            {
                texte: "📚 Publier le tableau officiel détaillant la réalité de l'aide publique : formation, bourses universitaires et projets d'accès à l'eau.",
                impact: { followers: 23000, budget: 0, energy: 10, credibility: 12, tension: 0 },
                consequenceText: "Une déconstruction budgétaire chirurgicale. Les universitaires et journalistes d'investigation relaient ton thread pour rétablir la vérité sur la coopération internationale.",
                tweets: [
                    { author: "Économie & Développement", handle: "@DevEco_FR", text: "Une mise au point salutaire sur les mécanismes de l'APD et la coopération universitaire franco-algérienne 📊👏" },
                    { author: "Étudiante Relations Inter", handle: "@GeoPolLutte", text: "Le démontage factuel et sourcé : la seule réponse digne face à la propagande." },
                    { author: "Citoyen Éclairé", handle: "@PenseurLibre", text: "Limpide. Merci de remettre la rigueur au cœur du débat public." },
                    { author: "Journaliste Info", handle: "@PlumeDirect", text: "Les chiffres officiels opposés aux approximations politiques : travail propre." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE DÉTOURNEMENT LOGISTIQUE (Budget & Base)
            // =========================================================
            {
                texte: "💶 Lancer une cagnotte de soutien aux étudiants étrangers précaires privés de bourses par les coupes budgétaires.",
                impact: { followers: 10000, budget: 950, energy: 5, credibility: 4, tension: 0 },
                consequenceText: "La mobilisation contre l'intox permet de lever 950 € d'urgence pour payer des repas et des loyers d'étudiants étrangers isolés.",
                tweets: [
                    { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+950 € récoltés pour la caisse de solidarité avec les étudiants étrangers ! 🍲💸" },
                    { author: "Union Étudiante", handle: "@UnionEtud", text: "La solidarité concrète face au poison identitaire : merci pour les fonds d'urgence !" },
                    { author: "Étudiant Solidaire", handle: "@CrousPourTous", text: "Don envoyé avec fierté pour contrer leurs discours de haine." },
                    { author: "Samy", handle: "@Samy_off", text: "Chaque mensonge de Knafo remplit la caisse des camarades merci la team" }
                ]
            }
        ]
    },

    // -------------------------------------------------------------
    // PERSONNAGE : PIERRE-ÉDOUARD STÉRIN (Palier 4 — Score : 88 / 100)
    // Rareté : National / Oligarque Réac | Alignement : Opposant
    // Thème : Antifascisme & Droites (theme-antifa)
    // -------------------------------------------------------------
    {
        id: "sterin_projet_pericles",
        characterId: "opp_pierre_edouard_sterin",
        characterName: "Pierre-Édouard Stérin",
        tier: 4,
        scoreIndex: 88,
        theme: "theme-antifa",
        titre: "L'offensive du milliardaire du « Projet Périclès »",
        description: "Des fuites révèlent le « Projet Périclès » du milliardaire exilé fiscal Pierre-Édouard Stérin (fondateur de Smartbox) : un plan secret à 150 millions d'euros pour financer des médias d'extrême droite, racheter des écoles privées et faire gagner le bloc nationalitaire d'ici 2027. L'affaire fait la Une des journaux d'investigation.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH / MISE EN CAUSE DU FINANCEMENT OCCULTE (Pari 50/50)
            // Coût visible : -24% Énergie | Gain visible : +8% Tension 🔥
            // =========================================================
            {
                texte: "🔥 Reposter : « Se barrer en Belgique pour pas payer d'impôts et utiliser sa fortune de vendeur de coffrets cadeaux pour acheter la démocratie française, c'est pas du patriotisme Stérin, c'est de l'ingérence d'oligarque. »",
                isClash: true,
                fixedCost: { energy: -24, tension: 8 },
                
                // Issue A : Le Coup de Maître (50%)
                outcomeSuccess: {
                    impact: { followers: 55000, budget: 0, energy: -24, credibility: 8, tension: 8 },
                    consequenceText: "La formule fait l'effet d'une bombe : plus de 60 000 retweets. Le boycott citoyen des marques liées à son fonds d'investissement est lancé partout en France.",
                    tweets: [
                        { author: "Mediapart Fil", handle: "@Mediapart", text: "Projet Périclès : comment le milliardaire Pierre-Édouard Stérin tente de racheter l'hégémonie culturelle pour l'extrême droite." },
                        { author: "Zack", handle: "@Zack_93", text: "LE VENDEUR DE SMARTBOX QUI VEUT INSTALLER LE FASCISME JE VAIS CÂBLER 😭💀📦" },
                        { author: "Avocat d'Affaires", handle: "@LegalCorporate", text: "Cette campagne de boycott diffamatoire fera l'objet de poursuites judiciaires immédiates." },
                        { author: "Krimo", handle: "@Krimo_93", text: "Boycott direct de toutes ses boîtes, plus un centime aux oligarques" }
                    ]
                },
                
                // Issue B : La Menace Judiciaire / Bad Buzz (50%)
                outcomeFailure: {
                    impact: { followers: -13000, budget: -500, energy: -24, credibility: -8, tension: 8 },
                    consequenceText: "Le cabinet d'avocats de Stérin t'envoie une mise en demeure express avec menace de plainte en diffamation à 100 000 €, forçant la section à engager des frais d'avocat d'urgence.",
                    tweets: [
                        { author: "Communiqué Périclès", handle: "@FondsInvest", text: "Mise au point : toute atteinte à l'honneur de nos dirigeants donnera lieu à des poursuites pénales sans délai." },
                        { author: "Legal Team Section", handle: "@AvocatsLutte", text: "Procédure-bâillon classique du grand patronat pour faire taire les militants. On ne pliera pas ⚖️" },
                        { author: "Militant sous Pression", handle: "@FrontPopu34", text: "Les milliardaires attaquent au porte-monnaie dès qu'on dévoile leurs plans secrets." },
                        { author: "Observatoire Médias", handle: "@ObsMediasFR", text: "La judiciarisation de la critique des oligarques s'accélère en France." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE FOND & LA CARTOGRAPHIE DES RÉSEAUX (Crédibilité & Repos)
            // =========================================================
            {
                texte: "📚 Publier un organigramme détaillé démontrant les liens financiers directs entre fonds d'investissement, médias réactionnaires et instituts de formation identitaires.",
                impact: { followers: 24000, budget: 0, energy: 10, credibility: 12, tension: 0 },
                consequenceText: "Une cartographie d'investigation saluée par la presse indépendante. Ton travail de documentation devient la référence partagée par tous les collectifs antifascistes.",
                tweets: [
                    { author: "L'Humanité", handle: "@humanite_fr", text: "Enquête citoyenne : l'organigramme détaillé des financements de l'extrême droite mis à nu 📊👏" },
                    { author: "Chercheur Socio", handle: "@SocioExtrDroites", text: "Travail de documentation remarquable sur les réseaux d'influence du capitalisme réactionnaire." },
                    { author: "Citoyen Éclairé", handle: "@PenseurLibre", text: "Une clarté d'enquête indispensable pour comprendre comment l'argent façonne l'opinion." },
                    { author: "Journaliste Indé", handle: "@InfoLibreFR", text: "Partage massif de cette infographie, le travail de fond paie toujours." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE DÉTOURNEMENT LOGISTIQUE (Budget & Base)
            // =========================================================
            {
                texte: "💶 Lancer une souscription pour financer des contre-formations citoyennes et populaires gratuites dans les quartiers.",
                impact: { followers: 11000, budget: 1100, energy: 5, credibility: 4, tension: 0 },
                consequenceText: "L'indignation populaire face au plan des milliardaires génère 1 100 € de dons directs pour financer l'université populaire du mouvement.",
                tweets: [
                    { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+1 100 € collectés pour l'Université Populaire ! L'émancipation contre leurs écoles de riches 🎓💸" },
                    { author: "Formateur Militant", handle: "@AteliersLutte", text: "Les premières sessions d'autodéfense économique et juridique sont complètes pour le mois prochain !" },
                    { author: "Donateur Solidaire", handle: "@EducationDuPeuple", text: "Mettre son argent dans l'éducation populaire plutôt que dans leurs coffrets cadeaux, validé." },
                    { author: "Samy", handle: "@Samy_off", text: "150 millions pour eux mais le peuple sait s'organiser" }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : RIMA HASSAN (Palier 4 — Score : 78 / 100)
    // Rareté : National / Poids Lourd Juridique | Alignement : Allié
    // Thème : Droit International (theme-international)
    // -------------------------------------------------------------
    {
        id: "rima_hassan_agora_universite",
        characterId: "ally_rima_hassan",
        characterName: "Rima Hassan",
        tier: 4,
        scoreIndex: 78,
        theme: "theme-international",
        titre: "L'Agora interdite pour le droit international",
        description: "Une conférence universitaire de Rima Hassan sur la Palestine et les traités internationaux est annulée en urgence par la présidence de la fac sous pression préfectorale. Rima refuse de plier et t'invite à transformer l'interdiction en assemblée générale sauvage sur la place publique.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH / DÉFICTION FRONTALE DE L'INTERDICTION (Pari 50/50)
            // Coût visible : -24% Énergie | Gain visible : +8% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « La présidence de fac tremble devant trois préfets ? Posons les mégaphones au milieu du parvis et faisons résonner le droit international jusqu'au ministère ! »",
                isClash: true,
                fixedCost: { energy: -24, tension: 8 },
                
                // Issue A : Le Coup de Maître (50%)
                outcomeSuccess: {
                    impact: { followers: 58000, budget: 0, energy: -24, credibility: 8, tension: 8 },
                    consequenceText: "3 000 étudiants s'assoient dans un silence impressionnant sur la place. Les vidéos du meeting en plein air deviennent virales dans toute l'Europe et ridiculisent la tentative de censure.",
                    tweets: [
                        { author: "Rima Hassan", handle: "@RimaHas", text: "On n'interdit pas la voix du droit international et de la justice par arrêté. Merci pour cette démonstration digne 🕊️✌️" },
                        { author: "Zack", handle: "@Zack_93", text: "3000 personnes assises en 10 minutes chrono, la censure préfectorale en larmes 😭" },
                        { author: "Amnesty France", handle: "@AmnestyFR", text: "La liberté académique et d'expression pacifique une nouvelle fois réaffirmée par la jeunesse." },
                        { author: "Édito Panique", handle: "@ChroniqueurCNews", text: "Rassemblement sauvage toléré en plein centre-ville, où est l'autorité de l'État ?" }
                    ]
                },
                
                // Issue B : Le Blocus Policier / Bad Buzz (50%)
                outcomeFailure: {
                    impact: { followers: -14000, budget: -400, energy: -24, credibility: -8, tension: 8 },
                    consequenceText: "La préfecture déploie 10 cars de CRS pour nasser le parvis. Les gaz lacrymogènes dispersent le rassemblement et les médias d'opinion titrent sur des 'tensions provoquées par l'ultra-gauche'.",
                    tweets: [
                        { author: "Préfecture Info", handle: "@PrefPolice", text: "Dispersion d'un attroupement non déclaré suite au non-respect de l'interdiction administrative." },
                        { author: "Militant Gazé", handle: "@EtuLutte", text: "Nasser une conférence de droit international avec des CRS, le niveau de panique du pouvoir..." },
                        { author: "Lucas", handle: "@Lucas_Gz", text: "Ça a gazé direct même pas eu le temps de brancher le micro" },
                        { author: "Rima Hassan", handle: "@RimaHas", text: "La répression ne fera jamais taire le droit des peuples à l'autodétermination." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE FOND & LA DÉCONSTRUCTION JURIDIQUE (Crédibilité & Repos)
            // =========================================================
            {
                texte: "📚 Co-animer un cours magistral improvisé citant les arrêts de la Cour Internationale de Justice (CIJ) et les conventions de Genève.",
                impact: { followers: 26000, budget: 0, energy: 10, credibility: 12, tension: 0 },
                consequenceText: "Un moment de grande rigueur intellectuelle diffusé en direct sur Twitch : des juristes et universitaires du monde entier saluent la tenue irréprochable du débat.",
                tweets: [
                    { author: "Rima Hassan", handle: "@RimaHas", text: "Rappeler les traités internationaux et les résolutions de l'ONU : la seule boussole qui vaille 📚⚖️" },
                    { author: "Étudiant Droit Inter", handle: "@JuristeMonde", text: "Le niveau académique de l'intervention était stratosphérique, rien à voir avec les caricatures de plateau." },
                    { author: "Lina", handle: "@Lina_92", text: "Poser les textes de loi calmement, meilleure manière de les faire taire." },
                    { author: "Citoyen Éclairé", handle: "@PenseurLibre", text: "Démonstration juridique limpide et digne. Bravo." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE DÉTOURNEMENT LOGISTIQUE (Budget & Base)
            // =========================================================
            {
                texte: "💶 Mettre en place un stand de vente de keffiehs solidaires et de brochures dont les bénéfices vont aux convois humanitaires.",
                impact: { followers: 12000, budget: 1200, energy: 5, credibility: 4, tension: 0 },
                consequenceText: "Le rassemblement solidaire génère 1 200 € nets versés directement aux équipes médicales d'urgence sur le terrain.",
                tweets: [
                    { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+1 200 € collectés pour le convoi médical d'urgence grâce au rassemblement ! 🇵🇸💸" },
                    { author: "Secours Populaire Partenaire", handle: "@AideUrgence", text: "Merci pour cette solidarité concrète qui permettra d'acheminer du matériel médical." },
                    { author: "Samy", handle: "@Samy_off", text: "La solidarité internationale en actes, propre et net" },
                    { author: "Donateur Engagé", handle: "@PaixEtJustice", text: "Don envoyé avec le cœur pour les populations civiles." }
                ]
            }
        ]
    },

    // -------------------------------------------------------------
    // PERSONNAGE : JORDAN BARDELLA (Palier 5 — Score : 94 / 100)
    // Rareté : Légendaire / Némésis National | Alignement : Opposant
    // Thème : Antifascisme & Droites (theme-antifa)
    // -------------------------------------------------------------
    {
        id: "bardella_incursion_tolbiac",
        characterId: "opp_jordan_bardella",
        characterName: "Jordan Bardella",
        tier: 5,
        scoreIndex: 94,
        theme: "theme-antifa",
        titre: "L'incursion sous haute sécurité à l'université",
        description: "Jordan Bardella débarque par surprise dans le hall d'une fac avec 15 gardes du corps en costume et des caméras pour tourner un TikTok sur 'le délabrement des universités à cause de la gauche'. Tu parviens à t'infiltrer au premier rang du cordon de sécurité, micro à la main.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH / LE RAPPEL DE LA LÉGENDE DE TOLBIAC (Pari 50/50)
            // Coût visible : -30% Énergie | Gain visible : +10% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Jordan ! C'est vrai qu'à Tolbiac tu t'étais chié dessus tellement t'avais peur des étudiants en AG ou c'est juste une rumeur de couloir ? »",
                isClash: true,
                fixedCost: { energy: -30, tension: 10 },
                
                // Issue A : Le Coup de Maître (50%)
                outcomeSuccess: {
                    impact: { followers: 150000, budget: 0, energy: -30, credibility: 10, tension: 10 },
                    consequenceText: "Le hall explose dans un fou rire assourdissant repris par 500 étudiants. Bardella perd son sourire plaqué, rougit violemment et ses gorilles l'évacuent en courant vers sa berline. La vidéo devient le mème absolu de l'année.",
                    tweets: [
                        { author: "Zack", handle: "@Zack_93", text: "IL LUI A VRAIMENT DEMANDÉ EN FACE POUR TOLBIAC JE MEURS SUR PLACE 😭😭💀💩" },
                        { author: "Mème Antifa", handle: "@NoPasaran_Memes", text: "L'évacuation d'urgence de Jordan escorté par 15 gardes du corps après la question fatidique ptdrrr" },
                        { author: "Jordan Bardella", handle: "@J_Bardella", text: "L'extrême gauche universitaire confirme sa déchéance totale. Nous remettrons de l'ordre dans nos facultés !" },
                        { author: "Krimo", handle: "@Krimo_93", text: "Son costard repassé à 2000 balles a pas résisté au trauma de Tolbiac mdrrr" }
                    ]
                },
                
                // Issue B : L'Évacuation Musclée / Bad Buzz (50%)
                outcomeFailure: {
                    impact: { followers: -35000, budget: 0, energy: -30, credibility: -10, tension: 10 },
                    consequenceText: "Ses gardes du corps te ceinturent violemment, t'arrachent ton téléphone et te jettent dehors. Son équipe monte un clip de comm' où Jordan affirme 'avoir fait face avec courage aux agitateurs'.",
                    tweets: [
                        { author: "Frontières Média", handle: "@Frontieres_Off", text: "EXCLUSIF : Jordan Bardella agressé par des milices d'ultra-gauche lors de son déplacement universitaire." },
                        { author: "Militant Balancé", handle: "@FacEnLutte", text: "Ses gardes du corps privés qui jouent les cow-boys dans une fac publique, scandale absolu !" },
                        { author: "Patriote_92", handle: "@France_Ordre", text: "Jordan impérial face aux provocations immatures de l'extrême gauche." },
                        { author: "Lucas", handle: "@Lucas_Gz", text: "Ils ont coupé la question au montage évidemment" }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE FOND & LE BILAN DES VOTES RN (Crédibilité & Repos)
            // =========================================================
            {
                texte: "📚 Lui tendre la liste officielle des votes du RN contre le repas Crous à 1€, contre la hausse des bourses et contre le gel des loyers étudiants.",
                impact: { followers: 70000, budget: 0, energy: 12, credibility: 15, tension: 0 },
                consequenceText: "Face aux feuilles de votes de l'Assemblée nationale, Bardella bafouille et tente de changer de sujet sur l'insécurité. La démonstration de son imposture sociale fait le tour des syndicats étudiants.",
                tweets: [
                    { author: "Union Étudiante", handle: "@UnionEtud", text: "Rappeler les votes du RN contre le repas à 1€ directement sous le nez de Bardella : imparable 📊👏" },
                    { author: "Étudiante Précaire", handle: "@CrousEnLutte", text: "Le mec vient faire sa promo dans une fac après avoir voté contre toutes nos aides sociales, honteux." },
                    { author: "FactCheck Politique", handle: "@FactCheckFR", text: "Vérification : les députés RN ont bien rejeté l'extension du repas à 1€ pour tous les étudiants." },
                    { author: "Citoyen Éclairé", handle: "@PenseurLibre", text: "La confrontation par les actes législatifs réels, la seule méthode qui détruit le populisme." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE DÉTOURNEMENT LOGISTIQUE (Budget & Base)
            // =========================================================
            {
                texte: "💶 Organiser un péage solidaire spontané sur le parvis en distribuant des sandwichs gratuits aux étudiants pendant son direct.",
                impact: { followers: 35000, budget: 2500, energy: -5, credibility: 5, tension: 0 },
                consequenceText: "L'opération de solidarité éclipse totalement son coup de com' : des centaines d'étudiants viennent manger et 2 500 € de dons affluent en ligne pour la cantine de lutte.",
                tweets: [
                    { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+2 500 € récoltés pour la cantine gratuite en direct pendant la visite de Bardella ! 🥪💸" },
                    { author: "Étudiant Affamé", handle: "@FacSolidaire", text: "Pendant qu'il fait des TikToks pour les vieux, les camarades régalent tout le campus !" },
                    { author: "Samy", handle: "@Samy_off", text: "Nourrir la fac sur le dos de sa venue, masterclass logistique" },
                    { author: "Donateur Solidaire", handle: "@EntraidePopu", text: "Don envoyé pour soutenir l'auto-organisation étudiante face aux marchands de haine." }
                ]
            }
        ]
    },

    // -------------------------------------------------------------
    // PERSONNAGE : BENYAMIN NETANYAHOU (Palier 5 — Score : 98 / 100)
    // Rareté : Légendaire / Criminel de Guerre International | Alignement : Opposant
    // Thème : Droit International (theme-international)
    // -------------------------------------------------------------
    {
        id: "netanyahou_manif_cpi_gaza",
        characterId: "opp_benyamin_netanyahou",
        characterName: "Benyamin Netanyahou",
        tier: 5,
        scoreIndex: 98,
        theme: "theme-international",
        titre: "La marée humaine contre l'impunité du criminel de guerre",
        description: "En pleine marche internationale rassemblant 200 000 personnes pour exiger l'application des mandats d'arrêt de la Cour Pénale Internationale (CPI) contre Benyamin Netanyahou et l'arrêt du génocide à Gaza, tu prends la tête du cortège devant l'ambassade sous le regard des agences de presse mondiales.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH / APPEL MONDIAL AUX SANCTIONS DIRECTES (Pari 50/50)
            // Coût visible : -30% Énergie | Gain visible : +10% Tension 🔥
            // =========================================================
            {
                texte: "🔥 Prendre le mégaphone face aux caméras internationales : « Netanyahou n'est pas un chef d'État, c'est un criminel de guerre génocidaire qui doit finir en cellule à La Haye avec tous ses complices armés par l'Occident ! »",
                isClash: true,
                fixedCost: { energy: -30, tension: 10 },
                
                // Issue A : Le Coup de Maître (50%)
                outcomeSuccess: {
                    impact: { followers: 180000, budget: 0, energy: -30, credibility: 10, tension: 10 },
                    consequenceText: "La déclaration est reprise en ouverture des JT de la BBC, d'Al Jazeera et de CNN. Les chancelleries occidentales sont acculées et plusieurs pays européens annoncent la suspension de leurs accords d'armement.",
                    tweets: [
                        { author: "Al Jazeera English", handle: "@AJEnglish", text: "Massive protests in Europe demanding immediate enforcement of ICC arrest warrants against Benjamin Netanyahu ⚖️🕊️" },
                        { author: "Zack", handle: "@Zack_93", text: "LA DÉCLARATION EN DIRECT SUR LES MÉDIAS DU MONDE ENTIER ON LÂCHE RIEN 🇵🇸🔥" },
                        { author: "Porte-Parole Diplomatique", handle: "@GovSpox_IL", text: "Ces déclarations antisémites et haineuses bafouent le droit d'Israël à se défendre." },
                        { author: "Krimo", handle: "@Krimo_93", text: "La Haye pour le criminel de guerre, pas d'autre issue possible" }
                    ]
                },
                
                // Issue B : La Répression et la Censure / Bad Buzz (50%)
                outcomeFailure: {
                    impact: { followers: -40000, budget: -1000, energy: -30, credibility: -10, tension: 10 },
                    consequenceText: "Les lobbys diplomatiques et les chaînes d'information en continu déclenchent une campagne de diabolisation internationale, coupant tes accès aux grands médias et exigeant des poursuites pour 'apologie du terrorisme'.",
                    tweets: [
                        { author: "Édito Conservateur", handle: "@DiplomatieWatch", text: "Des propos d'une gravité inouïe qui menacent l'équilibre diplomatique international." },
                        { author: "Militant sous Attaque", handle: "@SolidariteGaza", text: "Accuser de terrorisme tous ceux qui exigent l'application du droit international : la ficelle est trop grosse." },
                        { author: "Legal Team CPI", handle: "@AvocatsDroitsHumains", text: "Rappel : exiger le respect des mandats de la CPI est un devoir juridique, non une infraction ⚖️" },
                        { author: "Lucas", handle: "@Lucas_Gz", text: "Les plateaux télé en panique dès qu'on cite la Cour Pénale Internationale" }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE FOND & LE RAPPORT DE L'ONU SUR LE GÉNOCIDE (Crédibilité & Repos)
            // =========================================================
            {
                texte: "📚 Égrener au micro le rapport détaillé de Francesca Albanese (ONU) documentant les crimes de guerre, la destruction des hôpitaux et la famine organisée.",
                impact: { followers: 85000, budget: 0, energy: 12, credibility: 15, tension: 0 },
                consequenceText: "Un réquisitoire implacable et bouleversant. Le silence recueilli de la marée humaine donne des frissons à toute la place et force les journalistes à reprendre les données factuelles de l'ONU.",
                tweets: [
                    { author: "Francesca Albanese Fan", handle: "@UN_SpecialRapporteur", text: "Rappeler les faits documentés par les experts indépendants des Nations Unies : le seul rempart contre la propagande 📜🕊️" },
                    { author: "Médecin Sans Frontières", handle: "@MSF_France", text: "Témoignage capital sur l'effondrement du système de santé à Gaza sous les bombardements." },
                    { author: "Étudiante en Droit", handle: "@JuristeLutte", text: "La rigueur des faits juridiques et humains face à la barbarie. Un discours historique." },
                    { author: "Citoyen Éclairé", handle: "@PenseurLibre", text: "L'Histoire jugera ceux qui ont documenté les crimes et ceux qui ont fermé les yeux." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE DÉTOURNEMENT LOGISTIQUE (Budget & Base)
            // =========================================================
            {
                texte: "💶 Coordonner l'appel mondial de collecte pour financer l'envoi d'un convoi humanitaire et de bateaux de secours d'urgence.",
                impact: { followers: 45000, budget: 4000, energy: -5, credibility: 5, tension: 0 },
                consequenceText: "La foule répond instantanément : 4 000 € collectés sur le piquet pour financer des vivres, de l'eau potable et des kits médicaux d'urgence pour les réfugiés.",
                tweets: [
                    { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+4 000 € récoltés en 2 heures de cortège pour le convoi humanitaire de Gaza ! 🚢🍞💸" },
                    { author: "Croissant-Rouge Partenaire", handle: "@RedCrescentLutte", text: "Une aide financière vitale pour acheminer de la farine et des perfusions d'urgence." },
                    { author: "Samy", handle: "@Samy_off", text: "Chaque euro récolté c'est un coup direct porté au blocus criminel" },
                    { author: "Donateur Solidaire", handle: "@PeupleEnMarche", text: "La solidarité concrète du peuple quand les gouvernements se taisent." }
                ]
            }
        ]
    }
]
const DEBATES_DATABASE = {

    // =========================================================
    // DÉBAT PALIER 1 : L'INCEL DU FOND DE LA CLASSE (Score : 15)
    // =========================================================
    1: {
        id: "debate_tier_1_incel",
        tier: 1,
        arena: "🏛️ Salle de TD — Débat improvisé de fin de cours",
        title: "Duel d'amphi face à l'Incel du fond de la classe",
        characterName: "Kévin, l'Incel du fond de la classe",
        characterRole: "Pilier des forums masculinistes & redpill autoproclamé",
        contextStory: "La fin du TD de droit constitutionnel part en vrille. Kévin se lève au milieu des rangées, tape du poing sur la table et t'interpelle devant 80 étudiants médusés. Tout le monde s'arrête de ranger ses affaires pour assister au face-à-face.",
        opponentAttack: "« Votre féminisme d'État détruit les hommes ! Les femmes ne veulent que les mecs blindés pendant que nous, on est écrasés par le matriarcat mondialiste ! »",
        
        choix: [
            // =====================================================
            // 1. FOCUS NOTORIÉTÉ / CLASH VIRAL (+Abonnés ++)
            // =====================================================
            {
                texte: "💥 « Kévin, si aucune meuf te parle, c'est pas le matriarcat mondialiste, c'est juste que t'es chiant et que tu passes 14h par jour sur le 18-25. »",
                strategyName: "Clash Frontal (Focus Abonnés)",
                successOddsBonus: 0,
                outcomeSuccess: {
                    impact: { followers: 4500, budget: 30, energy: -12, credibility: 4, tension: 0 },
                    consequenceText: "L'amphi explose de rire. Kévin range son sac à dos en vitesse et quitte la salle rouge écarlate. La vidéo prise au premier rang tape 100k vues sur TikTok.",
                    tweets: [
                        { author: "Étudiant Amphi C", handle: "@FacDroit_Live", text: "KÉVIN S'EST FAIT ÉTEINDRE EN PLEIN TD DEVANT TOUT LE MONDE 😭😭💀" },
                        { author: "Kévin", handle: "@RedPill_Alpha", text: "L'intolérance des féministes prouve une nouvelle fois la véracité de mes théories." },
                        { author: "Déléguée de promo", handle: "@Sarah_Promo", text: "Merci d'avoir remis ce relou à sa place, enfin un TD qui respire !" },
                        { author: "Mème Étudiant", handle: "@CampusVibes", text: "Le ratio en direct dans les rangées de la fac, masterclass." }
                    ]
                },
                outcomeFailure: {
                    impact: { followers: -1500, budget: 0, energy: -18, credibility: -8, tension: 0 },
                    consequenceText: "L'attaque personnelle met mal à l'aise une partie de l'amphi. Le chargé de TD intervient pour te recadrer sèchement et te demande de sortir de la salle.",
                    tweets: [
                        { author: "Chargé de TD", handle: "@DroitPublic_Fac", text: "Rappel : les attaques ad hominem n'ont pas leur place dans une enceinte universitaire." },
                        { author: "Kévin", handle: "@RedPill_Alpha", text: "Victime de harcèlement en amphi pour avoir simplement posé des vérités sociologiques." },
                        { author: "Étudiant Témoin", handle: "@AmphiDirect", text: "C'est parti trop loin pour rien, l'ambiance était lourde de fou." },
                        { author: "Sarah", handle: "@Sarah_Stras", text: "Dommage de lui donner l'occasion de jouer les victimes..." }
                    ]
                }
            },

            // =====================================================
            // 2. FOCUS CRÉDIBILITÉ / DÉCONSTRUCTION DU FOND (+Crédibilité ++)
            // =====================================================
            {
                texte: "📚 « Déconstruisons calmement : le patriarcat enferme les hommes dans des injonctions de compétition marchande au lieu de créer du lien social. »",
                strategyName: "Pédagogie Sociale (Focus Crédibilité)",
                successOddsBonus: 10,
                outcomeSuccess: {
                    impact: { followers: 1500, budget: 20, energy: -8, credibility: 12, tension: 0 },
                    consequenceText: "Une démonstration brillante et inclusive : tu démontres comment la société capitaliste exploite la solitude. Même les potes de Kévin hochent la tête et applaudissent.",
                    tweets: [
                        { author: "Étudiante Socio", handle: "@SocioFac", text: "Désamorcer la haine masculiniste par l'analyse matérialiste du patriarcat : limpide et nécessaire 👏📚" },
                        { author: "Camarade Amphi", handle: "@LutteEtudiante", text: "Une vraie leçon d'éducation populaire donnée directement entre deux cours." },
                        { author: "Chargé de TD", handle: "@DroitPublic_Fac", text: "Débat très bien tenu et argumenté, c'est ce qu'on attend d'étudiants en droit." },
                        { author: "Lucas", handle: "@Lucas_Gz", text: "Même Kévin a pas su quoi répondre tellement c'était bien expliqué." }
                    ]
                },
                outcomeFailure: {
                    impact: { followers: -400, budget: 0, energy: -12, credibility: -6, tension: 0 },
                    consequenceText: "Ton propos est jugé trop universitaire et abstrait. Kévin te coupe la parole en boucle avec des slogans agressifs et le débat s'enlise.",
                    tweets: [
                        { author: "Kévin", handle: "@RedPill_Alpha", text: "Du blabla sociologique creux incapable de répondre à la détresse masculine réelle." },
                        { author: "Étudiant Pressé", handle: "@Rattrapages2027", text: "On voulait juste partir manger au Crous, le débat interminable..." },
                        { author: "Témoin Amphi", handle: "@FacDroit_Live", text: "Ça s'est perdu dans des concepts abstraits, dommage." },
                        { author: "Camarade Soûlé", handle: "@MilitantFatigué", text: "Essayer d'éduquer un troll d'extrême droite en 5 minutes : mission impossible." }
                    ]
                }
            },

            // =====================================================
            // 3. FOCUS BUDGET / RALLIEMENT DE LUTTE (+Budget ++)
            // =====================================================
            {
                texte: "💶 « Si tu veux parler de vraies souffrances, viens plutôt à l'AG financer la caisse de solidarité pour les bourses et les loyers précaires ! »",
                strategyName: "Appel de Solidarité (Focus Budget)",
                successOddsBonus: 5,
                outcomeSuccess: {
                    impact: { followers: 1800, budget: 120, energy: 8, credibility: 5, tension: 0 },
                    consequenceText: "Tu déplaces le sujet sur les conditions matérielles réelles : 20 étudiants rejoignent le comité et versent 120 € de cotisations dans la caisse de solidarité.",
                    tweets: [
                        { author: "Union Étudiante", handle: "@UnionEtud", text: "Transformer une provocation incel en appel massif à l'AG pour le repas à 1€ : masterclass syndicale 🪧🔥" },
                        { author: "Étudiant Précaire", handle: "@CrousPourTous", text: "Bien d'accord, on galère tous à boucler le mois, c'est ça la vraie lutte !" },
                        { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+120 € de cotisations étudiantes récoltées après le débat d'amphi ! 💸" },
                        { author: "Kévin", handle: "@RedPill_Alpha", text: "Encore une récupération marxiste de nos problèmes..." }
                    ]
                },
                outcomeFailure: {
                    impact: { followers: -500, budget: -30, energy: -10, credibility: -5, tension: 0 },
                    consequenceText: "La redirection est perçue comme de la langue de bois militante. Kévin te lance un 'Tu réponds pas à ma question !' qui fait mouche auprès de quelques curieux.",
                    tweets: [
                        { author: "Kévin", handle: "@RedPill_Alpha", text: "Esquive totale du sujet dès qu'on touche aux tabous du système !" },
                        { author: "Étudiant Neutre", handle: "@CitoyenFac", text: "La réponse était un peu trop hors-sujet / tract de syndicat." },
                        { author: "Camarade Amphi", handle: "@LutteEtudiante", text: "Difficile de recentrer sur le social quand l'ambiance est hystérisée." },
                        { author: "Sarah", handle: "@Sarah_Stras", text: "Il fallait le recadrer sur le sexisme d'abord." }
                    ]
                }
            }
        ]
    },
    // =========================================================
    // DÉBAT PALIER 2 : MILITANTE DU COLLECTIF NÉMÉSIS (Score : 42)
    // Lieu : Parvis de l'université / Rassemblement improvisé
    // =========================================================
    2: {
        id: "debate_tier_2_nemesis",
        tier: 2,
        arena: "🏛️ Parvis de la Fac — Cercle de débat sauvage",
        title: "Face-à-face sous tension avec le Collectif Némésis",
        characterName: "Militante du Collectif Némésis",
        characterRole: "Porte-parole du féminisme identitaire & xénophobe",
        contextStory: "Trois militantes de Némésis débarquent sur le campus avec des fumigènes roses et une banderole hostile à l'immigration pour filmer des micros-trottoirs piégés. Une foule de 200 étudiants les encercle immédiatement. La porte-parole te repère et braque son stabilisateur de smartphone sur ton visage.",
        opponentAttack: "« Vous prétendez défendre les femmes, mais votre gauche refuse de voir que l'insécurité et les agressions sexuelles sont importées par l'immigration massive ! »",
        
        choix: [
            // =====================================================
            // 1. FOCUS NOTORIÉTÉ / CLASH VIRAL (+Abonnés ++)
            // =====================================================
            {
                texte: "💥 « Instrumentaliser les violences faites aux femmes pour vendre votre racisme alors que vous votez pour des partis truffés d'agresseurs, c'est le sommet de l'hypocrisie. »",
                strategyName: "Clash Frontal (Focus Abonnés)",
                successOddsBonus: 0,
                outcomeSuccess: {
                    impact: { followers: 16000, budget: 120, energy: -16, credibility: 6, tension: 0 },
                    consequenceText: "La réponse coupe net son cadrage. Désarçonnée, elle bafouille devant son live TikTok tandis que le parvis applaudit. Le clip non coupé fait 350 000 vues en soirée.",
                    tweets: [
                        { author: "Zack", handle: "@Zack_93", text: "Némésis qui voulait faire son TikTok de propagande et qui repart en pleurant ptdrrr 😭💀" },
                        { author: "Collectif Féministe Fac", handle: "@NousToutesCampus", text: "Remise au point salutaire : le féminisme ne sera JAMAIS un outil de haine raciste 💜" },
                        { author: "Militante Némésis", handle: "@Nemesis_Off", text: "Agressée verbalement par les milices d'extrême gauche sur le campus !" },
                        { author: "Étudiant Témoin", handle: "@FacEnLutte", text: "La vitesse à laquelle elle a éteint son stabilisateur c'était hilarant." }
                    ]
                },
                outcomeFailure: {
                    impact: { followers: -4500, budget: 0, energy: -20, credibility: -8, tension: 0 },
                    consequenceText: "Leur cadreuse isole un geste brusque de ta main et publie un montage ralenti titré « Les antifas menacent nos militantes », déclenchant un raid de comptes identitaires.",
                    tweets: [
                        { author: "Collectif Némésis", handle: "@Nemesis_Off", text: "REGARDEZ : les hommes de gauche menacent physiquement de jeunes femmes en plein jour." },
                        { author: "Militant sous Raid", handle: "@Campus34", text: "Leur montage malhonnête tourne chez tous les influenceurs réacs, signalez en masse 🛑" },
                        { author: "Lucas", handle: "@Lucas_Gz", text: "Elles coupent 90% de la discussion comme d'hab..." },
                        { author: "Observatoire Médias", handle: "@ComPolFR", text: "Vives tensions numériques après l'action sur le campus." }
                    ]
                }
            },

            // =====================================================
            // 2. FOCUS CRÉDIBILITÉ / DÉCONSTRUCTION DU FOND (+Crédibilité ++)
            // =====================================================
            {
                texte: "📚 « Posons les statistiques du ministère de la Justice : plus de 85% des violences sexistes et sexuelles sont commises dans le cercle familial ou par des proches, quelle que soit leur nationalité. »",
                strategyName: "Démontage Statistique (Focus Crédibilité)",
                successOddsBonus: 10,
                outcomeSuccess: {
                    impact: { followers: 7500, budget: 80, energy: 10, credibility: 16, tension: 0 },
                    consequenceText: "Un démontage clinique et irréfutable. Incapables d'opposer la moindre source scientifique, les militantes finissent par remballer leur banderole sous les huées cordiales des étudiants.",
                    tweets: [
                        { author: "Sociologue Genre", handle: "@SocioGenreFR", text: "Rappeler les données réelles de l'INSEE et de la justice face à la manipulation identitaire : parfait 📊👏" },
                        { author: "Étudiante en Droit", handle: "@JuristeLutte", text: "Démontage propre, sourcé, sans crier. Tout le cercle d'amphi a validé." },
                        { author: "Citoyen Éclairé", handle: "@PenseurLibre", text: "La rigueur des chiffres détruit les paniques morales en 3 minutes." },
                        { author: "Lina", handle: "@Lina_92", text: "Elles ont bégayé sur les stats de la justice mdrrr" }
                    ]
                },
                outcomeFailure: {
                    impact: { followers: -1800, budget: 0, energy: -14, credibility: -7, tension: 0 },
                    consequenceText: "Elle te coupe la parole en boucle en hurlant des faits divers tragiques. L'avalanche émotionnelle brouille ton argumentation devant les passants hésitants.",
                    tweets: [
                        { author: "Militante Némésis", handle: "@Nemesis_Off", text: "L'extrême gauche préfère réciter des statistiques froides plutôt que d'entendre la souffrance des victimes !" },
                        { author: "Passant Amphi", handle: "@CitoyenDirect", text: "Le débat est devenu inaudible avec les cris de part et d'autre." },
                        { author: "Camarade Soûlé", handle: "@MilitantFatigué", text: "Impossible d'aligner trois phrases face à leur stratégie de harcèlement vocal." },
                        { author: "Sarah", handle: "@Sarah_Stras", text: "Elles cherchent juste le buzz émotionnel..." }
                    ]
                }
            },

            // =====================================================
            // CAISSE POPULAIRE (+Budget ++)
            // =====================================================
            {
                texte: "💶 « Pendant que vous faites vos sketchs TikTok, nous on collecte des fonds pour le planning familial et les hébergements d'urgence menacés par vos amis de droite ! »",
                strategyName: "Collecte Populaire (Focus Budget)",
                successOddsBonus: 5,
                outcomeSuccess: {
                    impact: { followers: 8500, budget: 450, energy: 6, credibility: 8, tension: 0 },
                    consequenceText: "Le contre-pied est parfait : les étudiants sortent leurs pièces et scannent la cagnotte. 450 € sont récoltés en direct pour le refuge féministe local.",
                    tweets: [
                        { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+450 € récoltés sur le parvis en direct pendant le contre-rassemblement ! 💜💸" },
                        { author: "Refuge Féministe 34", handle: "@SolidariteFemmes", text: "Un immense merci aux étudiants mobilisés pour ce don précieux face à la haine !" },
                        { author: "Samy", handle: "@Samy_off", text: "Faire financer le planning familial sur le dos de Némésis, coup de maître" },
                        { author: "Étudiant Solidaire", handle: "@CampusUni", text: "La solidarité concrète qui terrasse leur cinéma réac." }
                    ]
                },
                outcomeFailure: {
                    impact: { followers: -2200, budget: -60, energy: -12, credibility: -6, tension: 0 },
                    consequenceText: "La militante te traite de 'marchand du militantisme' et le bruit de la foule empêche de tenir le stand de don correctement.",
                    tweets: [
                        { author: "Militante Némésis", handle: "@Nemesis_Off", text: "L'extrême gauche qui vient mendier de l'argent en plein rassemblement..." },
                        { author: "Étudiant Pressé", handle: "@CampusLive", text: "Ça criait trop fort pour comprendre qui organisait quoi." },
                        { author: "Militant Terrain", handle: "@DistribAction", text: "Ambiance trop chaotique pour tenir la caisse de solidarité." },
                        { author: "Krimo", handle: "@Krimo_93", text: "Fallait juste les dégager du parvis directement." }
                    ]
                }
            }
        ]
    },

    // =========================================================
    // DÉBAT PALIER 3 : JEAN MESSIHA (Score : 58)
    // Lieu : Plateau d'une chaîne d'info locale / Débat de 19h
    // =========================================================
    3: {
        id: "debate_tier_3_messiha",
        tier: 3,
        arena: "📺 Plateau TV Régional — Le Grand Face-à-Face du Soir",
        title: "Clash en direct face à Jean Messiha",
        characterName: "Jean Messiha",
        characterRole: "Polémiste d'extrême droite & agitateur de plateaux",
        contextStory: "Le studio sent le maquillage chaud et les projecteurs halogènes. Face à toi sur la table en plexiglas, Jean Messiha ajuste sa cravate en tapotant nerveusement sur son téléphone. Dès le générique de fin, l'animateur lance le thème de l'insécurité et lui donne la parole en premier.",
        opponentAttack: "« Vous, l'extrême gauche, vous êtes les fossoyeurs de notre nation ! Vous encouragez le chaos, la haine de la police et la submersion migratoire pour détruire 1 500 ans d'histoire de France ! »",
        
        choix: [
            // =====================================================
            // 1. FOCUS NOTORIÉTÉ / CLASH VIRAL (+Abonnés ++)
            // =====================================================
            {
                texte: "💥 « Jean, hurler sur tous les plateaux pour faire oublier que ton seul fait d'armes c'est d'avoir pris ta com' sur une cagnotte de la division, c'est ridicule. »",
                strategyName: "Clash Frontal (Focus Abonnés)",
                successOddsBonus: 0,
                outcomeSuccess: {
                    impact: { followers: 65000, budget: 400, energy: -20, credibility: 8, tension: 0 },
                    consequenceText: "Messiha devient écarlate, coupe l'animateur pour hurler et renverse son verre d'eau en direct. L'extrait zappé devient le clip le plus vu de la soirée sur le web politique.",
                    tweets: [
                        { author: "Zack", handle: "@Zack_93", text: "MESSIHA QUI RENVERSE SON VERRE D'EAU TELLEMENT IL A LE SEUM JE MEURS 😭😭💀🌊" },
                        { author: "Jean Messiha", handle: "@JeanMessiha", text: "Attaques personnelles ignobles de l'extrême gauche en panique totale. Mes avocats sont saisis !" },
                        { author: "Malaise TV", handle: "@MalaiseTV", text: "Le silence de mort sur le plateau régional après la punchline... historique." },
                        { author: "Krimo", handle: "@Krimo_93", text: "Il l'a éteint en 10 secondes chrono sur son propre terrain télévisuel." }
                    ]
                },
                outcomeFailure: {
                    impact: { followers: -18000, budget: 0, energy: -25, credibility: -10, tension: 0 },
                    consequenceText: "Le présentateur prend immédiatement fait et cause pour Messiha et te coupe le micro en te reprochant « des propos diffamatoires indignes d'un débat télévisé ».",
                    tweets: [
                        { author: "Présentateur TV", handle: "@PlateauDirect", text: "Rappel à l'ordre ferme : nous refusons les attaques personnelles sur notre antenne." },
                        { author: "Jean Messiha", handle: "@JeanMessiha", text: "La racaille d'extrême gauche une nouvelle fois démasquée et muselée en direct !" },
                        { author: "Militant sous Tension", handle: "@FrontGauche", text: "Le présentateur qui vole au secours de Messiha dès qu'on le bouscule, classique..." },
                        { author: "Spectateur", handle: "@TV_Direct", text: "Coupure de micro trop rapide, on n'a rien pu entendre." }
                    ]
                }
            },

            // =====================================================
            // 2. FOCUS CRÉDIBILITÉ / DÉCONSTRUCTION DU FOND (+Crédibilité ++)
            // =====================================================
            {
                texte: "📚 « Déconstruisons la mascarade : pendant que vous hystérisez les débats sur l'identité, les 500 plus grandes fortunes ont triplé leur patrimoine en privatisant les services publics. »",
                strategyName: "Recentrage Économique (Focus Crédibilité)",
                successOddsBonus: 10,
                outcomeSuccess: {
                    impact: { followers: 32000, budget: 250, energy: -12, credibility: 20, tension: 0 },
                    consequenceText: "Une magistrale leçon d'économie politique : tu poses les données de la fiscalité et des inégalités en ignorant ses provocations. Le plateau est forcé de suivre ton cadrage.",
                    tweets: [
                        { author: "Revue Regards", handle: "@Regards_fr", text: "Recadrer Messiha sur le partage des richesses et les services publics : une démonstration magistrale 📊👏" },
                        { author: "Étudiant Éco", handle: "@EcoCritique", text: "La clarté des chiffres opposée à ses cris de bête blessée, masterclass de sang-froid." },
                        { author: "Citoyen Éclairé", handle: "@PenseurLibre", text: "Enfin un débatteur qui refuse de plonger dans la boue identitaire." },
                        { author: "Salomé Saqué Fan", handle: "@JeunesseClimat", text: "Poser le fond économique reste la meilleure arme antifasciste." }
                    ]
                },
                outcomeFailure: {
                    impact: { followers: -7000, budget: 0, energy: -18, credibility: -9, tension: 0 },
                    consequenceText: "Messiha te coupe la parole avec des rugissements constants. L'animateur laisse faire le vacarme et ton exposé économique devient inaudible pour les téléspectateurs.",
                    tweets: [
                        { author: "Jean Messiha", handle: "@JeanMessiha", text: "Le catéchisme marxiste balayé par la réalité du bon sens français !" },
                        { author: "Téléspectateur", handle: "@ZappingSoir", text: "Impossible de suivre les explications avec le polémiste qui hurle par-dessus." },
                        { author: "Camarade Soûlé", handle: "@MilitantFatigué", text: "Ces plateaux sont des traquenards conçus pour empêcher toute pensée construite." },
                        { author: "Yanis", handle: "@Yanis_K", text: "Trop de bruit, pas assez d'impact visuel dommage." }
                    ]
                }
            },

            // =====================================================
            // 3. FOCUS BUDGET / SOUSCRIPTION DE LUTTE (+Budget ++)
            // =====================================================
            {
                texte: "💶 « Nos militants agissent concrètement : nous finançons des cantines populaires et des permanences d'accès aux droits dans les quartiers désertés par l'État ! »",
                strategyName: "Valorisation de Terrain (Focus Budget)",
                successOddsBonus: 5,
                outcomeSuccess: {
                    impact: { followers: 35000, budget: 1400, energy: 8, credibility: 10, tension: 0 },
                    consequenceText: "La mise en valeur des actions de solidarité résonne auprès du public : l'appel à soutenir les cantines génère 1 400 € de dons sur le site du collectif.",
                    tweets: [
                        { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+1 400 € de dons pour les cantines populaires suite au passage télé ! Merci à tous 🍲💸" },
                        { author: "Habitant Quartier", handle: "@SolidaritePopu", text: "Pendant qu'ils parlent sur les plateaux, vous nourrissez les gens. Don envoyé !" },
                        { author: "Samy", handle: "@Samy_off", text: "Transformer un piège CNews en levée de fonds pour les daronnes, quel crack" },
                        { author: "Donateur Engagé", handle: "@EntraideDirecte", text: "Soutien total à vos permanences juridiques et sociales de terrain." }
                    ]
                },
                outcomeFailure: {
                    impact: { followers: -9000, budget: -150, energy: -15, credibility: -8, tension: 0 },
                    consequenceText: "L'animateur te coupe sèchement en déclarant qu'il est interdit de faire des appels financiers à l'antenne, te menaçant d'un signalement à l'Arcom.",
                    tweets: [
                        { author: "Régie TV", handle: "@PlateauDirect", text: "Rappel à la loi : la propagande de collecte de fonds est interdite durant nos débats politiques." },
                        { author: "Jean Messiha", handle: "@JeanMessiha", text: "Ils viennent faire la manche en direct à la télévision, quelle honte absolue !" },
                        { author: "Militant Terrain", handle: "@DistribAction", text: "L'Arcom brandie direct dès qu'on parle de solidarité ouvrière..." },
                        { author: "Krimo", handle: "@Krimo_93", text: "La télé des milliardaires a peur de la moindre caisse de grève." }
                    ]
                }
            }
        ]
    },
    // =========================================================
    // DÉBAT PALIER 4 : BRUNO RETAILLEAU (Score : 85)
    // Lieu : Grand Plateau d'Édition Spéciale / 20h30 National
    // =========================================================
    4: {
        id: "debate_tier_4_retailleau",
        tier: 4,
        arena: "🏛️ Plateau National de Grande Écoute — Édition Spéciale 20h30",
        title: "Duel régalien face à Bruno Retailleau",
        characterName: "Bruno Retailleau",
        characterRole: "Ministre de l'Intérieur / Figure de l'ordre autoritaire",
        contextStory: "Deux millions de téléspectateurs sont branchés. Face à toi, costume sombre impeccable et regard d'acier, Bruno Retailleau incarne le virage ultra-sécuritaire de l'État. Les projecteurs chauffent le studio, le présentateur vedette annonce un débat sans concession sur 'l'État de droit et l'immigration'.",
        opponentAttack: "« L'État de droit n'est ni intangible ni sacré lorsqu'il empêche de protéger les Français ! Votre laxisme complice désarme nos forces de l'ordre face à l'ensauvagement de la société. »",
        
        choix: [
            // =====================================================
            // 1. FOCUS NOTORIÉTÉ / CLASH VIRAL (+Abonnés ++)
            // =====================================================
            {
                texte: "💥 « Déclarer que l'État de droit n'est pas sacré quand on est ministre de l'Intérieur, c'est déchirer la Constitution pour faire la courte échelle au fascisme. »",
                strategyName: "Offensive Constitutionnelle (Focus Abonnés)",
                successOddsBonus: 0,
                outcomeSuccess: {
                    impact: { followers: 180000, budget: 1200, energy: -24, credibility: 10, tension: 0 },
                    consequenceText: "La punchline frappe en plein cœur : Retailleau se crispe, tente d'invoquer la jurisprudence mais s'embourbe en direct. L'extrait est repris instantanément en tête de tous les flux d'actualité.",
                    tweets: [
                        { author: "Zack", handle: "@Zack_93", text: "IL A MIS RETAILLEAU AU PIQUET DEVANT 2 MILLIONS DE PERSONNES JE PLEURE 😭😭💀🏛️" },
                        { author: "Bruno Retailleau (Officiel)", handle: "@B_Retailleau", text: "La bien-pensance juridique ne nous empêchera pas de mener la guerre totale contre la délinquance." },
                        { author: "Ligue des Droits de l'Homme", handle: "@LDH_France", text: "Rappel constitutionnel indispensable : l'État de droit est le fondement de la République." },
                        { author: "Krimo", handle: "@Krimo_93", text: "Le ministre qui bégaye sur la Constitution en direct à 20h30, masterclass absolue." }
                    ]
                },
                outcomeFailure: {
                    impact: { followers: -45000, budget: 0, energy: -28, credibility: -12, tension: 0 },
                    consequenceText: "Retailleau reprend l'ascendant en jouant la carte de la gravité d'État : 'Vos leçons de morale insultent la mémoire des victimes.' Les éditorialistes de droite saluent sa fermeté.",
                    tweets: [
                        { author: "Édito Figaro", handle: "@LeFigaro_Pol", text: "Bruno Retailleau a su maintenir l'autorité de l'État face aux invectives militantes." },
                        { author: "Militant sous les Feux", handle: "@FrontPopu34", text: "Le cadrage sécuritaire du plateau était totalement verrouillé en sa faveur..." },
                        { author: "Lucas", handle: "@Lucas_Gz", text: "Retailleau a esquivé le fond en sortant la carte émotionnelle direct." },
                        { author: "Observatoire Médias", handle: "@ArcomWatch", text: "Débat d'une violence verbale rare sur l'antenne nationale." }
                    ]
                }
            },

            // =====================================================
            // 2. FOCUS CRÉDIBILITÉ / DÉCONSTRUCTION DU FOND (+Crédibilité ++)
            // =====================================================
            {
                texte: "📚 « Déconstruisons votre bilan : détruire la police de proximité, couper les crédits de la justice et précariser les éducateurs crée le désordre que vous prétendez combattre. »",
                strategyName: "Contre-Bilan Régalien (Focus Crédibilité)",
                successOddsBonus: 10,
                outcomeSuccess: {
                    impact: { followers: 90000, budget: 800, energy: -16, credibility: 25, tension: 0 },
                    consequenceText: "Une démonstration structurelle implacable : chiffres des effectifs d'enquêteurs, délais judiciaires et budgets de prévention à l'appui. Même le présentateur reconnaît la solidité du dossier.",
                    tweets: [
                        { author: "Magistrat Engagé", handle: "@JusticeIndé", text: "Une analyse brillante de l'asphyxie budgétaire des tribunaux face aux postures martiales 📊👏" },
                        { author: "Syndicat FSU", handle: "@FSU_Officiel", text: "Rappeler le rôle indispensable des services publics dans la prévention : merci !" },
                        { author: "Citoyen Éclairé", handle: "@PenseurLibre", text: "Le calme, la précision, les chiffres réels : Retailleau n'avait aucun argument solide en face." },
                        { author: "Salomé Saqué Fan", handle: "@JeunesseClimat", text: "Poser le fond régalien sans hurler, c'est comme ça qu'on gagne la bataille des idées." }
                    ]
                },
                outcomeFailure: {
                    impact: { followers: -20000, budget: 0, energy: -22, credibility: -10, tension: 0 },
                    consequenceText: "L'avalanche de chiffres techniques lasse une partie du grand public. Le ministre balaie ton argumentation d'un revers de main en martelant des formules chocs sur l'autorité.",
                    tweets: [
                        { author: "Téléspectateur", handle: "@AvisCitoyen", text: "Un peu trop abstrait et comptable face à l'urgence du quotidien." },
                        { author: "Bruno Retailleau (Officiel)", handle: "@B_Retailleau", text: "Les Français n'attendent pas des tableaux Excel mais de la fermeté et des actes." },
                        { author: "Camarade Soûlé", handle: "@MilitantFatigué", text: "Dur de faire de la pédagogie budgétaire en 2 minutes de temps de parole..." },
                        { author: "Yanis", handle: "@Yanis_K", text: "Il fallait taper plus fort sur ses déclarations polémiques." }
                    ]
                }
            },

            // =====================================================
            // 3. FOCUS BUDGET / CAISSE POPULAIRE (+Budget ++)
            // =====================================================
            {
                texte: "💶 « Pendant que vous dépensez des milliards en matériel répressif, le peuple organise l'entraide : nous finançons des permanences d'urgence sociale partout en France ! »",
                strategyName: "Appel de Résistance Populaire (Focus Budget)",
                successOddsBonus: 5,
                outcomeSuccess: {
                    impact: { followers: 95000, budget: 3500, energy: 10, credibility: 12, tension: 0 },
                    consequenceText: "Le contraste entre l'armement policier et la solidarité populaire touche des milliers de foyers : 3 500 € de dons affluent en quelques minutes sur la caisse du mouvement.",
                    tweets: [
                        { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+3 500 € collectés pendant le duel avec Retailleau ! Le peuple soutient ses propres réseaux 🪧💸" },
                        { author: "Habitant Banlieue", handle: "@QuartierDebout", text: "Face à leur matraque, notre solidarité. Don envoyé pour les permanences sociales !" },
                        { author: "Samy", handle: "@Samy_off", text: "Financer la résistance sociale sur le temps d'antenne de Retailleau, magnifique" },
                        { author: "Donateur Solidaire", handle: "@EntraideDuPeuple", text: "Soutien inconditionnel à vos actions concrètes de terrain." }
                    ]
                },
                outcomeFailure: {
                    impact: { followers: -25000, budget: -500, energy: -20, credibility: -9, tension: 0 },
                    consequenceText: "Retailleau saute sur l'occasion pour menacer de dissoudre tes structures associatives en les accusant d'entretenir un séparatisme anti-républicain.",
                    tweets: [
                        { author: "Ministère Intérieur", handle: "@Place_Beauvau", text: "Signalement engagé auprès du parquet pour examen des activités de financement de ce groupement." },
                        { author: "Legal Team Section", handle: "@AvocatsLutte", text: "Menaces de dissolution abusives en direct à la télévision, nous saisissons le Conseil d'État ⚖️" },
                        { author: "Militant sous Pression", handle: "@GauchoVibes", text: "L'intimidation d'État en direct dès qu'on évoque la solidarité ouvrière..." },
                        { author: "Krimo", handle: "@Krimo_93", text: "Ils ont peur de l'auto-organisation populaire, rien de neuf." }
                    ]
                }
            }
        ]
    },

    // =========================================================
    // DÉBAT PALIER 5 : JORDAN BARDELLA (Score : 95)
    // Lieu : Le Grand Débat Décisif d'Entre-Deux-Tours (21h00)
    // =========================================================
    5: {
        id: "debate_tier_5_bardella",
        tier: 5,
        arena: "👑 Le Grand Débat Décisif — Face-à-Face Historique de Finale",
        title: "L'affrontement suprême face à Jordan Bardella",
        characterName: "Jordan Bardella",
        characterRole: "Candidat du bloc nationalitaire / Boss Final",
        contextStory: "Le plateau circulaire est baigné d'une lumière bleue et blanche glaciale. Dix millions de Français sont devant leur écran à 48 heures du dénouement. Jordan Bardella, coaché par ses conseillers en com', s'assied en face de toi avec son sourire calibré pour la caméra. C'est l'ultime échange, celui qui peut sceller la bascule du pays.",
        opponentAttack: "« Vous incarnez le chaos, la ruine économique et la submersion de notre patrie. Les Français ont le choix entre notre fierté nationale retrouvée et votre tyrannie woke et désordonnée ! »",
        
        choix: [
            // =====================================================
            // 1. FOCUS NOTORIÉTÉ / CLASH DU SIÈCLE (+Abonnés +++)
            // =====================================================
            {
                texte: "💥 « Jordan, ta fierté nationale c'est de servir la soupe aux milliardaires comme Bolloré et Stérin tout en votant contre les salaires et la retraite à 60 ans des ouvriers ! »",
                strategyName: "Démolition de l'Imposture Sociale (Focus Abonnés)",
                successOddsBonus: 0,
                outcomeSuccess: {
                    impact: { followers: 500000, budget: 5000, energy: -30, credibility: 15, tension: 0 },
                    consequenceText: "La formule foudroie Bardella en mondovision. Privé de ses fiches préparées, il bafouille, perd son calme et tente d'interrompre sans succès. Le moment de bascule électorale est acté.",
                    tweets: [
                        { author: "Zack", handle: "@Zack_93", text: "BARDELLA DÉTRUIT EN DIRECT DEVANT 10 MILLIONS DE FRANÇAIS C'EST LE CLASH DU SIÈCLE 😭😭💀👑" },
                        { author: "Jordan Bardella", handle: "@J_Bardella", text: "Face aux mensonges éhontés de l'extrême gauche, nous rétablirons la grandeur de la France !" },
                        { author: "Mediapart Fil", handle: "@Mediapart", text: "Débat final : l'imposture sociale du Rassemblement national mise à nu lors d'un échange décisif." },
                        { author: "Krimo", handle: "@Krimo_93", text: "Il l'a renvoyé à ses fiches TikTok en direct à 21h, historique." }
                    ]
                },
                outcomeFailure: {
                    impact: { followers: -120000, budget: 0, energy: -35, credibility: -15, tension: 0 },
                    consequenceText: "Bardella esquive avec un sourire narquois et récite une formule choc sur 'la peur de la gauche qui perd pied', reprise en boucle par les médias de droite dès le lendemain matin.",
                    tweets: [
                        { author: "Frontières Média", handle: "@Frontieres_Off", text: "TRIOMPHE : Jordan Bardella terrasse le candidat de l'extrême gauche lors du débat présidentiel !" },
                        { author: "Militant Écœuré", handle: "@FrontPopu34", text: "Les éléments de langage rodés ont fonctionné sur les indécis... La bataille finale sera serrée." },
                        { author: "Lucas", handle: "@Lucas_Gz", text: "Il a déroulé sa com' sans jamais répondre aux questions sociales..." },
                        { author: "Observatoire Sondages", handle: "@DirectPolls", text: "Resserrement extrême des intentions de vote à l'issue du face-à-face télévisé." }
                    ]
                }
            },

            // =====================================================
            // 2. FOCUS CRÉDIBILITÉ / LE PROJET POPULAIRE (+Crédibilité +++)
            // =====================================================
            {
                texte: "📚 « Présentons le projet de justice : blocage des prix des biens de première nécessité, bifurcation écologique intégrale et redistribution des 100 milliards d'évasion fiscale. »",
                strategyName: "Démonstration du Programme Commun (Focus Crédibilité)",
                successOddsBonus: 10,
                outcomeSuccess: {
                    impact: { followers: 250000, budget: 3500, energy: -20, credibility: 35, tension: 0 },
                    consequenceText: "Une prestation magistrale d'homme d'État populaire. La clarté de tes propositions économiques rassure les indécis et démontre que l'alternative de gauche est prête à gouverner dès demain.",
                    tweets: [
                        { author: "Gabriel Zucman", handle: "@gabriel_zucman", text: "Une démonstration de rigueur fiscale et de justice économique qui redéfinit l'avenir du pays 📊👏" },
                        { author: "Revue Regards", handle: "@Regards_fr", text: "La supériorité éclatante du projet social face au vide sidéral du programme nationalitaire." },
                        { author: "Citoyen Éclairé", handle: "@PenseurLibre", text: "Précis, digne, rassembleur. On tient notre président populaire." },
                        { author: "Salomé Saqué", handle: "@salomesaque", text: "L'écologie et la justice sociale posées comme seules priorités réelles : salutaire." }
                    ]
                },
                outcomeFailure: {
                    impact: { followers: -50000, budget: 0, energy: -25, credibility: -12, tension: 0 },
                    consequenceText: "Bardella te taxe d''utopiste dépensier' et martèle des slogans simplistes sur la dette publique qui instillent le doute chez les téléspectateurs modérés.",
                    tweets: [
                        { author: "Édito Éco Capital", handle: "@Eco_France", text: "Un programme de rupture qui inquiète les marchés et le patronat face au réalisme affiché." },
                        { author: "Jordan Bardella", handle: "@J_Bardella", text: "La ruine fiscale promise aux classes moyennes par l'extrême gauche une nouvelle fois confirmée." },
                        { author: "Étudiant Éco", handle: "@EcoCritique", text: "Difficile d'expliquer un budget d'investissement face à des punchlines de droite..." },
                        { author: "Lina", handle: "@Lina_92", text: "Le projet est solide mais le temps manquait pour tout détailler." }
                    ]
                }
            },

            // =====================================================
            // 3. FOCUS BUDGET / LE TRÉSOR DE GUERRE FINAL (+Budget +++)
            // =====================================================
            {
                texte: "💶 « Le véritable pouvoir n'est pas dans ce studio : nous appelons le peuple travailleur à remplir les caisses de grève et à déferler vendredi pour la marche historique ! »",
                strategyName: "Appel au Soulèvement Populaire (Focus Budget)",
                successOddsBonus: 5,
                outcomeSuccess: {
                    impact: { followers: 300000, budget: 10000, energy: 15, credibility: 20, tension: 0 },
                    consequenceText: "L'appel en direct à l'auto-organisation populaire provoque une marée de dons : 10 000 € affluent en une heure, sécurisant la logistique totale de la marche du vendredi soir.",
                    tweets: [
                        { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+10 000 € DE DONS EN DIRECT ! Les cars et les sonos pour vendredi soir sont intégralement financés 🪧💸👑" },
                        { author: "Intersyndicale", handle: "@SyndicatsUnis", text: "Appel massif entendu ! Tout le monde dans la rue vendredi soir pour sceller la victoire !" },
                        { author: "Samy", handle: "@Samy_off", text: "10K dans la caisse sur le temps de parole de Bardella, on a braqué la finale" },
                        { author: "Donateur Solidaire", handle: "@PeupleEnMarche", text: "Vendredi soir on fait l'Histoire ensemble. Tout le monde à Paris !" }
                    ]
                },
                outcomeFailure: {
                    impact: { followers: -70000, budget: -1000, energy: -30, credibility: -12, tension: 0 },
                    consequenceText: "Les présentateurs et la classe politique crient à l''insurrection anti-démocratique' et à la tentative de subversion du scrutin républicain.",
                    tweets: [
                        { author: "Chroniqueur Élysée", handle: "@EditoParis", text: "Un appel quasi insurrectionnel en pleine finale électorale qui choque les institutions républicaines." },
                        { author: "Jordan Bardella", handle: "@J_Bardella", text: "L'extrême gauche prépare le désordre et le blocage du pays face à notre victoire annoncée !" },
                        { author: "Militant sous Pression", handle: "@FrontPopu34", text: "La bourgeoisie hurle à l'émeute dès que le peuple s'organise pour manifester." },
                        { author: "Krimo", handle: "@Krimo_93", text: "On sera là vendredi peu importe leurs leçons de morale." }
                    ]
                }
            }
        ]
    }
};
// =========================================================
// CATALOGUE LOGISTIQUE DE LA MANIF (MATÉRIEL & SERVICES)
// =========================================================
const MARCH_LOGISTICS_ITEMS = [
    {
        id: "fumi_bengale",
        name: "Fumigènes & Feux de Bengale",
        icon: "🎆",
        cost: 120,
        desc: "+8 000 manifestants physiques grâce à la viralité des images enflammées.",
        type: "flat_boost",
        value: 8000
    },
    {
        id: "camion_sono",
        name: "Camion Sono & Groupe Électrogène",
        icon: "🔊",
        cost: 350,
        desc: "L'Allié s'exprime sur le toit : multiplie par 1,5 le bonus d'affluence de ton Allié !",
        type: "ally_multiplier",
        multiplier: 1.5
    },
    {
        id: "caisse_merguez",
        name: "Merguez & Tofu Marinés (Caisse CGT)",
        icon: "🌭",
        cost: 200,
        desc: "Ravitaillement militant : redonne +25% d'énergie pour éviter le coup de pompe final.",
        type: "energy_boost",
        energyVal: 25
    },
    {
        id: "banderole_renforcee",
        name: "Banderole de Tête Renforcée",
        icon: "🪧",
        cost: 180,
        desc: "+10% de Crédibilité politique perçue sur les photos de Une de presse.",
        type: "cred_boost",
        credVal: 10
    },
    {
        id: "serigraphie_stickers",
        name: "Kit Sérigraphie & Stickers Sauvages",
        icon: "🎨",
        cost: 90,
        desc: "Convertit les abonnés du Feed X : +1 500 manifestants par tranche de 10k abonnés.",
        type: "followers_conversion",
        rate: 1500
    },
    {
        id: "section_juridique",
        name: "Section Juridique & Huissiers",
        icon: "⚖️",
        cost: 400,
        desc: "Protection totale du cortège : neutralise les malus de forte tension (>70%).",
        type: "anti_repression"
    },
    {
        id: "batucada",
        name: "Batucada Infatigable (15 percus)",
        icon: "🥁",
        cost: 250,
        desc: "Ambiance survoltée : multiplicateur brut de +12% sur l'ensemble du cortège.",
        type: "cortege_multiplier",
        pct: 1.12
    },
    {
        id: "street_medics",
        name: "Street Médics & Caisse de Secours",
        icon: "⛑️",
        cost: 300,
        desc: "Sécurité solidaire : +15% sur le cortège si ton Énergie est sous les 50%.",
        type: "low_energy_boost",
        pct: 1.15
    },
    {
        id: "observateurs_inter",
        name: "Délégation d'Observateurs Inter",
        icon: "🌍",
        cost: 500,
        desc: "Couverture mondiale : double l'impact de ta Crédibilité sur le cortège final.",
        type: "cred_double_impact"
    },
    {
        id: "confettis_paillettes",
        name: "Paillettes & Confettis Biodégradables",
        icon: "✨",
        cost: 80,
        desc: "+5 000 jeunes et étudiants venus fêter la convergence des luttes.",
        type: "flat_boost",
        value: 5000
    }
];