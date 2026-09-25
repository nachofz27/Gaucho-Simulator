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
            {// ==========================================
// BASE DE DONNÉES - PALIERS 1 A 4 (PERSONNAGES & CHOIX)
// ==========================================

const gameEvents = [
// -------------------------------------------------------------
    // PERSONNAGE : LE GENDARME MOBILE DE SAINTE-SOLINE (Palier 1 — Score : 20 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Opposant
    // Thème : Écologie, Vivant & Territoires (theme-ecologie)
    // -------------------------------------------------------------
    {
        id: "sainte_soline_ecoutes_radio",
        characterId: "opp_gendarme_sainte_soline",
        characterName: "Le Gendarme Mobile de Sainte-Soline",
        tier: 1,
        scoreIndex: 20,
        theme: "theme-ecologie",
        titre: "Le stand de tir de Sainte-Soline",
        description: "Sainte-Soline, pluie de GM2L. À la radio, les flics lâchent : « Tirez tendu ! Faut qu'on les tue ! » Le gradé ricane : « J'espère que t'en as éborgné ! » Deux camarades s'écroulent.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE COUP DE PRESSION (Pari 50/50 — Focus Abonnés & Risque)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « « Faut qu'on les tue » ?! Vous prenez votre pied à estropier des manifestants pour une flaque de boue ? En 40 vous auriez été les premiers collabos de la ville ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Coup d'Éclat (50%)
                outcomeSuccess: {
                    impact: { followers: 1250, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Tu lui balances sa honte au visage sans baisser d'un millimètre. Le flic baisse les yeux et bégaye devant ton tel qui tourne. Le rush brut fait péter les vues sur les réseaux.",
                    tweets: [
                        { author: "Zack", handle: "@Zack_93", text: "Le flic qui fait le cow-boy à la radio et qui chie mou direct devant la caméra 💀🔥" },
                        { author: "Soulèvement de la Terre", handle: "@LesSDLT", text: "Ne jamais baisser les yeux face à leurs intimidations et leurs tirs illégaux !" },
                        { author: "Street Reporter", handle: "@CameraDirect34", text: "L'extrait audio capté au barrage est terrifiant de violence policière décomplexée." },
                        { author: "Passant Choqué", handle: "@CitoyenVigilant", text: "Des ordres radio pareils en démocratie... c'est glaçant." }
                    ]
                },
                
                // Issue B : La Répression Immédiate (50%)
                outcomeFailure: {
                    impact: { followers: -350, budget: -135, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Une botte dans les côtes, la tronche dans la glaise et un coup de lacrymo à bout portant. Tu te manges 135 € d'amende forfaitaire pour outrage.",
                    tweets: [
                        { author: "Militant Gazé", handle: "@BoueEtLutte", text: "Tabassé dans la boue par la mobile pour avoir ouvert sa gueule... justice nulle part." },
                        { author: "Syndicat Alliance (Section)", handle: "@PoliceLocale", text: "Outrage caractérisé envers les forces de l'ordre engagées sur une zone interdite." },
                        { author: "Legal Team Bassines", handle: "@AvocatsEau", text: "Encore une amende abusive distribuée sous la menace, recours en cours ⚖️" },
                        { author: "Krimo", handle: "@Krimo_93", text: "Ils gazent et ils verbalisent pour cacher leur panique, force aux blessés." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : SANG-FROID & RÉCUPÉRATION (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Reculez de dix mètres, soufflez, rincez-vous les yeux au sérum phy : ne tombez pas dans leur piège, on a besoin de tout le monde debout. »",
                impact: { followers: 250, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Tu refuses l'escalade, calmes la panique du groupe et fais respirer les camarades sous les arbres. Le cortège reprend son souffle sans gaspiller ses forces.",
                tweets: [
                    { author: "Camarade Soûlé", handle: "@GauchoVibes", text: "Garder la tête froide sous les lacrymos, se regrouper et tenir bon. Respect total à l'équipe." },
                    { author: "Street Medics", handle: "@SecoursLutte", text: "Merci pour le sang-froid : le sérum phy et le calme ont évité un mouvement de foule dangereux 🧴👏" },
                    { author: "Observatoire Bassines", handle: "@EauCommune", text: "Désamorcer le piège de la panique par l'organisation collective : exemplaire." },
                    { author: "Lucas", handle: "@Lucas_Gz", text: "Bien géré le repli stratégique, zéro blessé supplémentaire dans le groupe." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LA CAGNOTTE DE COMBAT (Focus Budget)
            // =========================================================
            {
                texte: "💶 « Laissez ces brutes aboyer : balancez le QR code sur les lives pour faire payer les soins d'urgence et les avocats par les réseaux ! »",
                impact: { followers: 200, budget: 60, energy: -3, credibility: 2, tension: 0 },
                consequenceText: "Pendant qu'ils bloquent le passage, tu transformes leur violence en cash : 60 € de dons directs tombent en dix minutes pour acheter des pansements et payer les consignations.",
                tweets: [
                    { author: "Caisse Solidarité Bassines", handle: "@AntiRep_Eau", text: "+60 € récoltés en direct pour ravitailler les street medics en compresses et pansements 🩹💸" },
                    { author: "Donateur Solidaire", handle: "@TerreEtEau", text: "Don envoyé direct pour les blessés de Sainte-Soline. Tenez bon !" },
                    { author: "Samy", handle: "@Samy_off", text: "Transformer leurs tirs tendus en trésorerie pour la lutte, bien joué l'équipe" },
                    { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "La solidarité populaire reste notre meilleure réponse logistique." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : LE CHEF D'ÉQUIPAGE DE CARCASSONNE (Palier 1 — Score : 20 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Opposant
    // Thème : Contre-Pouvoir, Médias & Antifascisme (theme-antifa)
    // -------------------------------------------------------------
    {
        id: "carcassonne_patrouille_raciste",
        characterId: "opp_flic_carcassonne",
        characterName: "Le Chef d'Équipage de Carcassonne",
        tier: 1,
        scoreIndex: 20,
        theme: "theme-antifa",
        titre: "La patrouille de la honte",
        description: "Révélations du Midi Libre sur la police de Carcassonne. Appelée pour un animal percuté sur la route, la patrouille rigole à l’accent colonial : « C’est peut-être un migrant… Un petit Kirikou de la savane. »",
        choix: [
            // =========================================================
            // CHOIX 1 : LE RHABILLAGE PUBLIC (Pari 50/50 — Focus Abonnés & Risque)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « « Un Kirikou de la savane » ?! Vous touchez un salaire public pour singer Michel Leeb et déshumaniser des morts ? Vous êtes la honte absolue de la République ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Coup d'Éclat (50%)
                outcomeSuccess: {
                    impact: { followers: 1250, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Ta vidéo de réaction avec l'extrait audio fait le tour des réseaux en deux heures. Pris de panique face au scandale national, le préfet annonce la suspension immédiate de l'agent.",
                    tweets: [
                        { author: "Nora", handle: "@Nora_B", text: "L'audio des flics de Carcassonne relayé partout... Ils assument plus du tout leurs blagues racistes là 💀" },
                        { author: "Collectif Antiraciste", handle: "@RiposteLocale", text: "Démanteler ce racisme d'État décomplexé devient une urgence vitale ✊" },
                        { author: "Midi Libre Infos", handle: "@MidiLibreActu", text: "Polémique nationale après la fuite des enregistrements d'une patrouille de police à Carcassonne." },
                        { author: "Yanis", handle: "@Yanis_K", text: "Le recadrage public est mérité, zéro tolérance pour ces propos infects." }
                    ]
                },
                
                // Issue B : La Répression Judiciaire (50%)
                outcomeFailure: {
                    impact: { followers: -350, budget: -135, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Les syndicats de police portent plainte en meute pour diffamation et harcèlement. Tu te prends une convocation au commissariat et 135 € de frais de dossier en urgence.",
                    tweets: [
                        { author: "Syndicat Alliance", handle: "@AlliancePolice", text: "Plainte déposée immédiatement contre les détracteurs cherchant à déstabiliser l'institution policière." },
                        { author: "Militant En Garde", handle: "@Vigilance_fr", text: "Convoqué pour avoir relayé un enregistrement authentique... l'inversion des rôles habituelle 😤" },
                        { author: "Avocats Libertés", handle: "@DefenseDroits", text: "Dossier solide en cours de constitution pour contester ces poursuites bâillons." },
                        { author: "Karim", handle: "@Karim_92", text: "Toujours les mêmes méthodes d'intimidation dès qu'on touche à un flic ripou." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LA RIPOSTE POLITIQUE POSÉE (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Éteignez les écrans deux minutes, respirez : on rédige un communiqué conjoint avec les assos antiracistes et on prépare le rassemblement de samedi sans s'épuiser dans le vide. »",
                impact: { followers: 250, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Tu évites le piège de la colère stérile sur Twitter. L'équipe se pose au local, prépare un texte béton et recharge ses batteries pour une mobilisation unie et massive.",
                tweets: [
                    { author: "Camarade Aude", handle: "@LutteCarcassonne", text: "Réponse collective, propre et coordonnée face au racisme institutionnel. La force tranquille." },
                    { author: "Solidaires 11", handle: "@SolidairesAude", text: "Front commun déposé avec toutes les organisations du département. Rendez-vous samedi !" },
                    { author: "Claire", handle: "@Claire_V", text: "Bravo pour la lucidité, pas de clash inutile mais un travail de fond qui paye." },
                    { author: "Réseau Vigilance", handle: "@AntiFascisme_fr", text: "Prendre le temps d'organiser la riposte sur le terrain plutôt que de s'épuiser en tweets." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LA CAISSE D'AIDE AUX EXILÉS (Focus Budget)
            // =========================================================
            {
                texte: "💶 « On va transformer leur racisme crasse en solidarité concrète : balancez une cagnotte d'urgence pour le collectif d'accueil des mineurs isolés du coin ! »",
                impact: { followers: 200, budget: 60, energy: -3, credibility: 2, tension: 0 },
                consequenceText: "L'indignation des gens se transforme en actes : les partages s'enchaînent et 60 € de dons tombent en quelques heures pour financer des kits d'hiver et des repas pour les exilés.",
                tweets: [
                    { author: "Collectif Solidarité Réfugiés", handle: "@AccueilExiles11", text: "+60 € rentrés pour le foyer d'accueil des exilés en réponse aux propos immondes de la police ✊💸" },
                    { author: "Donateur Engagé", handle: "@CitoyenDuMonde", text: "Participation envoyée direct. Mieux vaut financer l'accueil que d'écouter la haine." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Transformer leurs dérapages en carburant pour nos assos de terrain, c'est ça la vraie réponse !" },
                    { author: "Action Sociale Locale", handle: "@TerrainSolidaire", text: "Les fonds serviront dès ce soir pour distribuer des duvets et des repas chauds." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : FÉRIS BARKAT (BANLIEUES CLIMAT) (Palier 1 — Score : 20 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Allié
    // Thème : Écologie, Vivant & Territoires (theme-ecologie)
    // -------------------------------------------------------------
    {
        id: "banlieues_climat_feris_barkat",
        characterId: "allie_feris_barkat",
        characterName: "Féris Barkat (Banlieues Climat)",
        tier: 1,
        scoreIndex: 20,
        theme: "theme-ecologie",
        titre: "L'offensive populaire de Banlieues Climat",
        description: "Au local de Banlieues Climat, tu retrouves Féris Barkat en plein brief. Le quartier étouffe sous 40 °C sans îlot de fraîcheur : il faut choisir la stratégie pour bousculer la métropole avant l'été.",
        choix: [
            // =========================================================
            // CHOIX 1 : LA SOMMATION PUBLIQUE EN MAIRIE (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Féris, on débarque au conseil municipal avec 80 habitants pour exiger le déblocage immédiat du plan canicule et la végétalisation des cours d'école ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Coup de Pression Réussi (50%)
                outcomeSuccess: {
                    impact: { followers: 1250, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Pris au piège devant les caméras locales et la salle comble, le maire capitule et signe l'arrêté pour débitumer les cours et ouvrir les espaces climatisés.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Banlieues Climat qui fait plier le conseil municipal en direct, masterclass politique 🔥🏛️" },
                        { author: "Écologie Déter", handle: "@VertEtPopulaire", text: "L'écologie des quartiers qui arrache des victoires concrètes, magnifique !" },
                        { author: "Actu Quartier", handle: "@QuartierDirect", text: "Le maire a dû signer sous la pression populaire : les écoles seront végétalisées." },
                        { author: "Samira", handle: "@Samira_B", text: "Bravo à Féris et l'équipe, on lâche rien face aux promesses en l'air !" }
                    ]
                },
                
                // Issue B : L'Expulsion Autocratique (50%)
                outcomeFailure: {
                    impact: { followers: -350, budget: -135, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Le maire ajourne la séance, fait évacuer la salle par la police municipale et te colle un PV pour trouble à l'ordre public avec une campagne de com diffamatoire.",
                    tweets: [
                        { author: "Militant Local", handle: "@Terrain93", text: "Évacués par la municipale pour avoir réclamé des arbres... le mépris habituel des élus." },
                        { author: "Cabinet du Maire", handle: "@ComMairie", text: "Séance du conseil suspendue suite à des pressions inacceptables de collectifs militants." },
                        { author: "Inès", handle: "@Ines_L", text: "135 balles d'amende pour avoir demandé de ne pas crever de chaud, c'est une honte." },
                        { author: "Riposte Populaire", handle: "@CollectifPop", text: "La répression pour seule réponse à la précarité climatique. On reviendra plus nombreux." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE QG FRAÎCHEUR ET TRANSMISSION (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Posons-nous au local avec les bénévoles : on installe des brumisateurs d'urgence, on sert du thé glacé et on forme l'équipe aux gestes de survie thermique. »",
                impact: { followers: 250, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "L'espace devient un havre de fraîcheur solidaire. Tout le monde reprend des forces, les liens se resserrent et l'équipe repart reposée et soudée.",
                tweets: [
                    { author: "Bénévole Climat", handle: "@Solidaire_Est", text: "Thé glacé, entraide et organisation populaire face à la canicule : la force tranquille de Banlieues Climat 🧊🌱" },
                    { author: "Youssef", handle: "@Youssef_T", text: "Le local plein à craquer mais une ambiance posée et constructive. On recharge les batteries." },
                    { author: "Éco Solidaire", handle: "@ClimatPourTous", text: "Se protéger collectivement avant tout. Super moment de partage et d'apprentissage." },
                    { author: "Sarah", handle: "@Sarah_K", text: "C'est ça la vraie solidarité de terrain, zéro blabla, que du concret." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE RAPPORT NOIR DU BÉTON (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Féris, on sort un audit indépendant thermographique des barres HLM et on l'envoie à toutes les rédactions pour détruire les mensonges du bailleur. »",
                impact: { followers: 400, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "L'enquête de terrain prouve les 48 °C sous les toits sans isolation. L'expertise populaire de l'asso s'impose à la Une des journaux et cloue le bec aux technocrates.",
                tweets: [
                    { author: "Reporter Société", handle: "@MediasLibres", text: "Les relevés thermiques de Banlieues Climat font la Une : dossier en béton armé, respect total 📑📊" },
                    { author: "Lina", handle: "@Lina_Eco", text: "Impossible de nier la précarité thermique après un rapport pareil. Le bailleur est en sueur." },
                    { author: "Urbanisme Populaire", handle: "@BanlieuesDemain", text: "Preuves scientifiques à l'appui, Banlieues Climat démontre l'injustice climatique subie." },
                    { author: "Adem", handle: "@Adem_Zone", text: "Le travail d'enquête est chirurgical, aucune fake news possible. Chapeau l'équipe !" }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : MARCO, CAMARADE DE SECTION (Palier 1 — Score : 20 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Allié
    // Thème : Contre-Pouvoir, Médias & Antifascisme (theme-antifa)
    // -------------------------------------------------------------
    {
        id: "collage_nuit_camarade_marco",
        characterId: "allie_marco_militant",
        characterName: "Marco, camarade de section",
        tier: 1,
        scoreIndex: 20,
        theme: "theme-antifa",
        titre: "La session collage de nuit",
        description: "Trois heures du matin sur un boulevard désert. Vous terminez de maroufler une fresque contre les violences d'État quand une voiture banalisée de la BAC ralentit à votre niveau, vitre baissée.",
        choix: [
            // =========================================================
            // CHOIX 1 : ASSUMER SANS BRONCHER (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Finis de coller, calcule-les même pas. S'ils veulent descendre pour trois bouts de papier, ils vont assumer le ridicule devant la caméra. »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Sang-froid Payant (50%)
                outcomeSuccess: {
                    impact: { followers: 1250, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Tu sors ton tel et fixes le conducteur droit dans les yeux en filmant. Désarçonnés de voir que personne ne court, ils préfèrent accélérer pour éviter le scandale.",
                    tweets: [
                        { author: "Samy", handle: "@Samy_off", text: "La BAC qui tente d'intimider à 3h du mat et qui trace dès que ça sort le tel direct 💀📱" },
                        { author: "Action Graphique", handle: "@ColleursNuit", text: "Tenir la pose face à l'intimidation nocturne : l'affiche est posée, respect aux camarades." },
                        { author: "Nora", handle: "@Nora_B", text: "Ne jamais courir devant eux quand on est dans notre droit. Bien géré !" },
                        { author: "Réseau Antifa", handle: "@VigilanceNuit", text: "Visibilité maximale pour la fresque du centre-ville, elle claque." }
                    ]
                },
                
                // Issue B : La Descente Musclée (50%)
                outcomeFailure: {
                    impact: { followers: -350, budget: -135, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Les portières claquent. Contrôle musclé contre le mur, seau de colle renversé sur tes pompes et 135 € d'amende forfaitaire pour affichage illégal.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@GauchoVibes", text: "Contrôlé et verbalisé pour trois affiches... 135 balles de seum mais la fresque reste debout." },
                        { author: "Observatoire Police", handle: "@ViolencesLegales", text: "Mobiliser quatre agents de nuit pour de la farine et de l'eau, les priorités de la police..." },
                        { author: "Krimo", handle: "@Krimo_93", text: "135 balles direct pour intimidation, la routine des rondes de nuit." },
                        { author: "Section Locale", handle: "@LutteTerrain", text: "Force à l'équipe du collage, on prendra l'amende en charge avec la caisse commune." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : ESQUIVE PROPRE & RÉCUPÉRATION (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Laisse le seau derrière le muret, rentre les mains dans les poches et marche normal. On trace se poser au local, ça sert à rien de forcer. »",
                impact: { followers: 250, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Vous tracez sans courir dans la ruelle adjacente. La patrouille passe à côté sans s'arrêter. Au local, vous vous posez au chaud, café en main, sans stress.",
                tweets: [
                    { author: "Camarade Veille", handle: "@Nocturne_fr", text: "Repli propre, zéro embrouille et session réussie. La régularité du terrain, c'est ça qui paye ☕✊" },
                    { author: "Léo", handle: "@Leo_Mlt", text: "Savoir lâcher l'affaire au bon moment pour préserver l'énergie de l'équipe. Propre." },
                    { author: "Collectif Rue", handle: "@MursLibres", text: "Pas de blessé, pas d'amende, juste du terrain bien tenu. Bien joué les gars." },
                    { author: "Yanis", handle: "@Yanis_K", text: "Le débriefing au local avec le café brûlant à 4h, les meilleurs moments de militantisme." }
                ]
            },

            // =========================================================
            // CHOIX 3 : APPEL AUX RÉSEAUX & MATÉRIEL (Focus Budget)
            // =========================================================
            {
                texte: "💶 « Marco, prends la fresque en photo maintenant avant qu'elle soit arrachée et balance un appel de soutien pour refaire le plein de colle et d'encre ! »",
                impact: { followers: 200, budget: 60, energy: -3, credibility: 2, tension: 0 },
                consequenceText: "Le cliché de nuit tourne bien sur Instagram. Les soutiens envoient 60 € en quelques minutes pour financer les prochains rouleaux d'affiches et l'encre.",
                tweets: [
                    { author: "Caisse Graphisme", handle: "@PrintEtLutte", text: "+60 € rentrés cette nuit pour relancer les tirages de prints et le matos de collage 🎨💸" },
                    { author: "Adhérent Solidaire", handle: "@SoutienTerrain", text: "Petite contribution envoyée pour vos affiches. Continuez à faire vivre les murs !" },
                    { author: "Claire", handle: "@Claire_V", text: "Le visuel est magnifique, contente de participer pour le réapprovisionnement." },
                    { author: "Atelier Populaire", handle: "@SerigraphieLutte", text: "La commande de papier et de colle part dès demain matin grâce aux dons." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : LE DIRECTEUR RÉGIONAL DU CROUS (Palier 1 — Score : 20 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Opposant
    // Thème : Justice Sociale, Travail & Services Publics (theme-social)
    // -------------------------------------------------------------
    {
        id: "crous_precarite_apl_etudiants",
        characterId: "opp_directeur_crous",
        characterName: "Le Directeur régional du CROUS",
        tier: 1,
        scoreIndex: 20,
        theme: "theme-social",
        titre: "La colère des ventres vides",
        description: "Rassemblement devant le CROUS. Gel des APL, suppression des aides au logement pour les étudiants étrangers et files d’attente d’une heure pour un plateau-repas : les étudiants en colère bloquent les portes vitrées.",
        choix: [
            // =========================================================
            // CHOIX 1 : L'INTERPELLATION FRONTALE (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Vous nous faites bouffer des pâtes à l’eau et crever de froid dans 9 m² pendant que l'État racise les aides et gèle nos APL : venez regarder la faim dans les yeux ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Directeur Cède sous la Pression (50%)
                outcomeSuccess: {
                    impact: { followers: 1250, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Face à la pression du mégaphone et au cordon compact d'étudiants, la direction sort en sueur et accepte de recevoir une délégation sous les huées. La séquence devient virale.",
                    tweets: [
                        { author: "Inès", handle: "@Ines_Etu", text: "Le directeur du CROUS obligé de sortir de son bureau sous les huées des étudiants... la honte pour eux 🔥✊" },
                        { author: "Syndicat Étudiant", handle: "@UnionEtudiante", text: "Gel des APL et précarité organisée : on ne lâchera rien tant que tout le monde n'aura pas un toit et à manger !" },
                        { author: "Youssef", handle: "@Youssef_Univ", text: "L'énergie devant le resto U ce midi était incroyable, force à nous." },
                        { author: "Camarade Précaires", handle: "@VieDeGalere", text: "Quand on s'organise, ils sont obligés d'ouvrir les portes et de négocier." }
                    ]
                },
                
                // Issue B : La Répression sur le Parvis (50%)
                outcomeFailure: {
                    impact: { followers: -350, budget: -135, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "La police débarque pour dégager le parvis. Bousculades, matraques, tu te prends un coup de bouclier et un PV pour entrave à un établissement public.",
                    tweets: [
                        { author: "Étudiant Gazé", handle: "@FaimEtLutte", text: "Gazés sur le parvis du CROUS pour avoir dénoncé la précarité étudiante... République de la matraque." },
                        { author: "Rectorat Infos", handle: "@ComAcademie", text: "Blocage illégal évacué suite à des dégradations constatées sur les accès du CROUS." },
                        { author: "Mehdi", handle: "@Mehdi_L", text: "135 balles d'amende alors qu'on réclame juste un repas décent à 1 €, le délire total." },
                        { author: "Solidarité Internationale", handle: "@AccueilExiles", text: "Soutien total aux étudiants étrangers ciblés par la fin des aides au logement." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : L'AGORA & PAUSE SOLIDAIRE (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Asseyons-nous sur les marches : sortez les thermos, partagez le pain et les fruits, on reprend des forces avant de voter la reconduction du blocus. »",
                impact: { followers: 250, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "L'ambiance devient conviviale et déterminée. Un goûter autogéré s'organise sur le parvis, les étudiants échangent, le stress retombe et le moral est regonflé à bloc.",
                tweets: [
                    { author: "Militante AG", handle: "@AgoraFac", text: "Goûter populaire et assemblée générale devant le CROUS : c'est comme ça qu'on tient sur la durée ☕🍞" },
                    { author: "Samir", handle: "@Samir_Mlt", text: "Partager un café chaud et s'organiser calmement au lieu de foncer dans le tas. Top ambiance." },
                    { author: "Cuisine Ouverte", handle: "@CantineSolidaire", text: "La solidarité concrète entre étudiants, c'est notre meilleure arme contre l'isolement." },
                    { author: "Léa", handle: "@Lea_Fac", text: "On a rechargé les batteries ensemble, le blocus de demain matin est déjà calé !" }
                ]
            },

            // =========================================================
            // CHOIX 3 : LA RAFLE DE TICKETS REPAS (Focus Budget)
            // =========================================================
            {
                texte: "💶 « On bouge pas d'ici tant qu'on n'a pas arraché des carnets de repas gratuits d'urgence pour tous les étudiants étrangers privés d'APL ! »",
                impact: { followers: 200, budget: 60, energy: -3, credibility: 2, tension: 0 },
                consequenceText: "Sous la menace d'un blocage total du resto universitaire, l'administration lâche en urgence des bons d'achat et une enveloppe d'aide d'urgence de 60 € pour la caisse de solidarité.",
                tweets: [
                    { author: "Collectif Solidarité", handle: "@EntraideCrous", text: "Victoire immédiate : des dizaines de repas d'urgence arrachés au CROUS pour les camarades précaires 🍽️💸" },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "+60 € d'aides débloqués direct pour les repas d'urgence des étudiants sans papiers, merci l'équipe !" },
                    { author: "Claire", handle: "@Claire_V", text: "L'action directe qui paye tout de suite. Personne ne doit sauter de repas." },
                    { author: "Trésorerie Lutte", handle: "@CaisseFac", text: "Les bons d'achat sont déjà en cours de distribution aux camarades les plus isolés." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : L'ÉQUIPE D'HISTOIRES CRÉPUES (Palier 1 — Score : 20 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Allié
    // Thème : Émancipation, Féminisme & Droits Fondamentaux (theme-emancipation)
    // -------------------------------------------------------------
    {
        id: "histoires_crepues_intersectionnalite",
        characterId: "allie_histoires_crepues",
        characterName: "L'Équipe d'Histoires Crépues",
        tier: 1,
        scoreIndex: 20,
        theme: "theme-emancipation",
        titre: "Le carrefour des dominations avec Histoires Crépues",
        description: "En collab avec le média Histoires Crépues, tu coécris un format court pour vulgariser l'intersectionnalité : l'endroit précis où le racisme, le sexisme et l'exploitation de classe se percutent sur les mêmes personnes.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE PAVÉ DANS LA MARE POLITIQUE (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Prenons l’exemple direct de la femme de ménage racisée sous-payée : on nomme les patrons complices, on assume le terme d’intersectionnalité et on balance le teaser sans filtre ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Buzz Pédagogique (50%)
                outcomeSuccess: {
                    impact: { followers: 1250, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Le format est d'une franchise absolue. Le short explose les algorithmes, des dizaines de milliers de personnes comprennent le concept en 40 secondes et partagent en masse.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Histoires Crépues qui explique l'intersectionnalité avec la vraie vie des gens, zéro jargon, que de la vérité 👏🔥" },
                        { author: "Fatou", handle: "@Fatou_L", text: "Enfin une vidéo qui montre concrètement comment classe, race et genre se croisent sans baratin théorique." },
                        { author: "Média Alternatif", handle: "@LaLueur_Media", text: "La collab entre Histoires Crépues et le collectif pose les bases d'une vulgarisation populaire percutante." },
                        { author: "Kader", handle: "@Kader_93", text: "Ça fait fermer des bouches direct avec des exemples du quotidien, masterclass." }
                    ]
                },
                
                // Issue B : Le Raid de la Fachosphère (50%)
                outcomeFailure: {
                    impact: { followers: -350, budget: -135, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Une horde de comptes d'extrême droite et de polémistes s'acharne sur votre vidéo en raid coordonné. La plateforme restreint la visibilité du compte et vous engagez des frais de modération d'urgence.",
                    tweets: [
                        { author: "Militante Solidaire", handle: "@VeilleWeb", text: "Raid massif de la fachosphère sur la collab avec Histoires Crépues... ils ragent dès qu'on touche à leurs privilèges." },
                        { author: "Sentinelle Digitale", handle: "@SignalementNet", text: "Comptes trolls coordonnés pour faire sauter le compte du collectif suite à la vidéo sur l'intersectionnalité." },
                        { author: "Samir", handle: "@Samir_Mlt", text: "135 balles de frais pour blinder nos serveurs et modérer les menaces, ils ont le seum total." },
                        { author: "Camarade Lutte", handle: "@RiposteNet", text: "La haine qu'ils déversent prouve juste que la vidéo a tapé exactement là où ça fait mal." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LA SESSION D'ÉCRITURE POSÉE AU CAFÉ (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Posons les stylos : prenons le temps d'écouter les récits de chacun autour d'un thé à la menthe pour nourrir le script sans se presser. »",
                impact: { followers: 250, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "L'échange est riche, humain et apaisant. Chacun partage ses expériences de vie sans la pression du direct. Tu repars l'esprit clair et les batteries complètement rechargées.",
                tweets: [
                    { author: "Inès", handle: "@Ines_Etu", text: "Les discussions en coulisses avec Histoires Crépues font tellement de bien. Réfléchir ensemble pour mieux lutter ☕✨" },
                    { author: "Camarade Écoute", handle: "@CerclePopulaire", text: "Prendre le temps de partager nos vécus autour d'un thé, c'est là que naissent les plus beaux projets." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Ambiance超 posée au local, loin du bruit des réseaux. On ressort plus fort." },
                    { author: "Sarah", handle: "@Sarah_K", text: "Le respect des parcours et la fraternité, ça recharge les batteries pour des semaines." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LA BD EXPLICATIVE ULTRA-PÉDAGOGIQUE (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Dessinons l’intersectionnalité comme un carrefour routier accidentogène : rendons le concept tellement visuel et limpide que personne ne pourra plus le caricaturer. »",
                impact: { followers: 400, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "L'infographie façon bande dessinée est un chef-d’œuvre de vulgarisation. Des profs de fac, des éducateurs et des assos la reprennent comme support pédagogique officiel.",
                tweets: [
                    { author: "Revue Sociologique", handle: "@SciencesEtSociete", text: "L'infographie sur le carrefour des oppressions est une masterclass de clarté. Tout le monde comprend enfin l'intersectionnalité 📚🎨" },
                    { author: "Prof d'Histoire", handle: "@HistoireGeoLyc", text: "Support imprimé direct pour mes élèves : métaphore limpide, rigoureuse et percutante. Bravo !" },
                    { author: "Collectif Féministe", handle: "@FeminismePopulaire", text: "Quand la pédagogie visuelle détruit des années de désinformation médiatique en un coup d'œil." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "La crédibilité de l'infographie est intouchable, même leurs éditorialistes n'ont rien pu redire." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : LE CHEF DE CHANTIER DE L'A412 (Palier 1 — Score : 20 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Opposant
    // Thème : Écologie, Vivant & Territoires (theme-ecologie)
    // -------------------------------------------------------------
    {
        id: "a412_chablais_thomas_brail",
        characterId: "opp_chef_chantier_a412",
        characterName: "Le Chef de chantier de l'A412",
        tier: 1,
        scoreIndex: 20,
        theme: "theme-ecologie",
        titre: "Les arbres du Chablais face à l'A412",
        description: "Chantier de l'A412 à Perrignier. Thomas Brail vient d'être embarqué en garde à vue pour s'être interposé devant les abatteuses. Les tronçonneuses redémarrent pour raser le bois avant l'arrivée des recours.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE BLOCAGE PHYSIQUE DES ABATTEUSES (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Brail est au poste, alors c'est à nous de monter au front : encerclez les machines, personne ne touche à ces chênes centenaires ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Recul des Machines (50%)
                outcomeSuccess: {
                    impact: { followers: 1250, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Face à la chaîne humaine déterminée, les conducteurs coupent le contact et reculent. La vidéo du blocage en direct en solidarité avec Thomas Brail devient virale.",
                    tweets: [
                        { author: "Sentinelle Bois", handle: "@GNSALutte", text: "Après la garde à vue de Brail, le chantier de l'A412 totalement bloqué par la foule déter 🔥🌲" },
                        { author: "Camarade Savoie", handle: "@HauteSavoieLutte", text: "Les engins reculent enfin sous la pression populaire à Perrignier. Solidarité totale !" },
                        { author: "Écologie En Ligne", handle: "@DirectClimat", text: "Images impressionnantes du blocage citoyen face aux pelleteuses dans le Chablais." },
                        { author: "Nora", handle: "@Nora_B", text: "C'est ça la réponse collective face aux arrestations abusives, respect aux camarades." }
                    ]
                },
                
                // Issue B : La Charge dans la Boue (50%)
                outcomeFailure: {
                    impact: { followers: -350, budget: -135, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Les gendarmes chargent immédiatement pour dégager le périmètre. Tu es plaqué dans la boue et repars avec 135 € d'amende pour entrave à un chantier déclaré d'utilité publique.",
                    tweets: [
                        { author: "Observateur Terrain", handle: "@ChantierStop", text: "Répression brute sur l'A412 : 135 balles d'amende pour avoir protégé une forêt menacée." },
                        { author: "Gendarmerie 74", handle: "@ComSecurite74", text: "Intervention pour sécuriser le périmètre de chantier suite à des intrusions illégales d'opposants." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "Défendre le vivant traité comme un délit pénal direct. On ne pliera pas." },
                        { author: "Collectif Forêt", handle: "@ArbresEnVie", text: "L'intimidation financière habituelle pour briser les résistances écologistes." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE CAMP DE VEILLE CITOYENNE & CAFÉ CHAUD (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Installez les bâches et le thermos de café à la lisière : on relaie la surveillance des arbres à tour de rôle pour tenir sans s'épuiser. »",
                impact: { followers: 250, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "L’organisation collective permet de souffler. Autour d'un café chaud avec les riverains haut-savoyards, la fatigue retombe et le moral se renforce pour les prochains jours de lutte.",
                tweets: [
                    { author: "Habitant Chablais", handle: "@ChablaisProtege", text: "Organisation exemplaire dans les bois du Chablais : café, relais et vigilance citoyenne ☕🌲" },
                    { author: "Claire", handle: "@Claire_V", text: "S'organiser sur la durée avec les riverains, c'est le meilleur moyen de tenir tête aux bétonneurs." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Super moment d'échange au camp de veille, le moral de l'équipe est au top." },
                    { author: "Soutien Rural", handle: "@TerresVives", text: "La solidarité locale face aux projets absurdes d'autoroutes. Force aux veilleurs." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE SIGNALEMENT D'ESPÈCES PROTÉGÉES AU PARQUET (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Photographiez les nids et sortez l'inventaire LPO : faites constater par huissier le carnage illégal sur des espèces protégées en pleine nidification ! »",
                impact: { followers: 400, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "Le constat d'huissier prouve la destruction illégale d'habitats protégés. L'arrêté préfectoral est attaqué en urgence et la rigueur du dossier force la préfecture à ordonner une pause technique.",
                tweets: [
                    { author: "Juristes Environnement", handle: "@DroitDuVivant", text: "Constat d'huissier déposé sur l'A412 : le dossier environnemental est béton, le préfet obligé de temporiser 📑⚖️" },
                    { author: "Protection Oiseaux", handle: "@LPO_Actu", text: "Preuves irréfutables de destruction de zones de nidification transmises au procureur." },
                    { author: "Youssef", handle: "@Youssef_T", text: "Le droit utilisé comme bouclier écologique, les promoteurs ne s'y attendaient pas du tout." },
                    { author: "Revue Écolo", handle: "@PlaneteJustice", text: "Une victoire procédurale majeure qui prouve la légitimité totale des opposants sur place." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : TONTON MICHEL (Palier 1 — Score : 20 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Opposant
    // Thème : Émancipation, Féminisme & Droits Fondamentaux (theme-emancipation)
    // -------------------------------------------------------------
    {
        id: "repas_famille_tonton_michel",
        characterId: "opp_tonton_michel",
        characterName: "Tonton Michel",
        tier: 1,
        scoreIndex: 20,
        theme: "theme-emancipation",
        titre: "Le repas de famille du dimanche",
        description: "Fin de repas de famille. Tonton Michel pose son verre de rouge et balance avec assurance : « De toute façon, les immigrés viennent en France juste pour toucher les aides sans bosser. »",
        choix: [
            // =========================================================
            // CHOIX 1 : LE STOP NET À TABLE (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Michel, arrête deux secondes : sans les travailleurs immigrés, le BTP et les hôpitaux tournent plus demain matin. Renseigne-toi au lieu de répéter la télé. »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Recadrage Net (50%)
                outcomeSuccess: {
                    impact: { followers: 1250, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Il bégaye, incapable d'aligner un chiffre. Les cousins rigolent sous table et la vidéo du recadrage postée en story cartonne direct.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Le tonton réac remis à sa place en deux phrases au repas de famille, masterclass 💀🍷" },
                        { author: "Camarade Repas", handle: "@AntiRance75", text: "Ne rien laisser passer même aux déjeuners du dimanche, c'est ça la base." },
                        { author: "Inès", handle: "@Ines_Etu", text: "La tête de Michel quand la réalité économique lui explose au visage, pépite." },
                        { author: "Samy", handle: "@Samy_off", text: "Rappeler qui fait tourner le pays concrètement, net et sans bavure." }
                    ]
                },
                
                // Issue B : L'Explosion du Dimanche (50%)
                outcomeFailure: {
                    impact: { followers: -350, budget: -135, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Il tape du poing sur la table, renverse le plat et hurle que la jeunesse n'a plus de respect. Tes parents te collent la note du resto pour apaiser le drame.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@DimancheEnfer", text: "Repas de famille qui part en vrille totale, 135 balles de perdues pour avoir dit les termes." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "L'ego des darons dès qu'on touche à leurs certitudes de comptoir... insupportable." },
                        { author: "Claire", handle: "@Claire_V", text: "Ambiance plombée pour l'année, mais la vérité devait être dite." },
                        { author: "Yanis", handle: "@Yanis_K", text: "135 balles pour un plat de purée renversé par un tonton vexé, la taxe familiale habituelle." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : PRENDRE L'AIR DEHORS (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Laisse-le parler tout seul : prends le reste du dessert et sors te caler tranquille sur la terrasse avec les cousins pour couper court. »",
                impact: { followers: 250, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Tu ne perds pas ton souffle. Vous rigolez de ses clichés sur la terrasse au soleil, l'ambiance retombe et tu recharges tes batteries.",
                tweets: [
                    { author: "Camarade Zen", handle: "@ReposMental", text: "Zéro prise de tête avec les discours rances du dimanche, on préserve sa paix mentale 🍰☀️" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Manger sa part de tarte au calme dehors plutôt que de s'épuiser face à un mur. Meilleure décision." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Prendre du recul et souffler au soleil entre cousins, la force tranquille." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "La santé mentale avant tout, ne jamais donner de carburant aux provocations inutiles." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE CHIFFRE OFFICIEL SOUS LES YEUX (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Regarde le rapport de l'OCDE : l'immigration rapporte plus de cotisations et d'impôts à l'État que ce qu'elle ne coûte en prestations. Lis avant de parler. »",
                impact: { followers: 400, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "Chiffre officiel sous les yeux, il n'a plus d'argument et change de sujet pour parler météo. Tout le monde autour de la table apprécie le recadrage factuel.",
                tweets: [
                    { author: "Veille Éco", handle: "@StatsOfficielles", text: "Citer les données nettes de l'OCDE pour clouer le bec au cliché des allocs, net et sans bavure 📑☕" },
                    { author: "Kader", handle: "@Kader_93", text: "Les faits contre les fantasmes. Même Michel a fini par marmonner dans son café sans répondre." },
                    { author: "Fatou", handle: "@Fatou_L", text: "L'argumentation propre et sourcée : la seule méthode qui désarme les poncifs d'extrême droite." },
                    { author: "Solidarité Info", handle: "@VeriteSociale", text: "Démontage méthodique en règle, respect pour le calme olympien." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : LE DÉFENSEUR DES MILLIARDAIRES AU MICRO (Palier 1 — Score : 20 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Opposant
    // Thème : Justice Sociale, Travail & Services Publics (theme-social)
    // -------------------------------------------------------------
    {
        id: "taxation_milliardaires_taxe_zucman",
        characterId: "opp_cadre_liberal_micro",
        characterName: "Le Défenseur des milliardaires au micro",
        tier: 1,
        scoreIndex: 20,
        theme: "theme-social",
        titre: "Le mirage des premiers de cordée",
        description: "Micro-trottoir en plein quartier d'affaires. Tu abordes le partage des richesses et un cadre en costume t'interrompt, narquois : « Si on taxe nos ultra-riches, ils partent tous et c'est la faillite du pays ! »",
        choix: [
            // =========================================================
            // CHOIX 1 : LE STOP AU LARBINISME (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Tu touches 2 200 balles net, tu te tues le dos en open-space mais tu défends Bernard Arnault comme s'il allait t'adopter : réveille-toi, t'es un travailleur, pas un héritier ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Recadrage Percutant (50%)
                outcomeSuccess: {
                    impact: { followers: 1250, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Il bégaie, rouge écarlate, sous les rires des passants. L'extrait vidéo du recadrage cartonne sur TikTok et pose la question de l'aliénation au travail.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Le cadre qui prend la défense des milliardaires et se fait éteindre en direct... le syndrome de Stockholm économique 💀🏢" },
                        { author: "Boulot & Galère", handle: "@AntiAlienation", text: "Toucher le Smic amélioré et pleurer pour les ultra-riches, la pire arnaque mentale du siècle." },
                        { author: "Samy", handle: "@Samy_off", text: "La formule est légendaire, le gars est reparti tête basse vers sa tour de verre." },
                        { author: "Camarade Lutte", handle: "@RipostePopulaire", text: "Remettre les réalités de classe au centre du débat public, c'est comme ça qu'on avance." }
                    ]
                },
                
                // Issue B : L'Intervention de la Sécurité (50%)
                outcomeFailure: {
                    impact: { followers: -350, budget: -135, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Le mec s'emporte, appelle la sécurité du centre d'affaires et la police municipale vous confisque le micro avec 135 € d'amende pour tournage non autorisé.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@MicroTrottoirStop", text: "Sécurité privée mobilisée pour protéger la fierté d'un larbin des riches, 135 balles d'amende sur le parvis." },
                        { author: "Droit à l'Image", handle: "@EspacePublicLibre", text: "Interdiction de filmer dès qu'on pose les vraies questions économiques devant les banques..." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "135 balles de prune juste pour avoir démonté le mythe des premiers de cordée." },
                        { author: "Mehdi", handle: "@Mehdi_L", text: "Dès que l'ego d'un cadre est blessé, ça appelle la patrouille pour museler les critiques." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE CALCUL DEPUIS LA PRÉHISTOIRE (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Même en économisant 2 000 euros par jour sans rien dépenser depuis 300 000 ans, t'aurais toujours pas la fortune d'Arnault. Le mérite n'a rien à voir là-dedans, c'est juste de la rente. »",
                impact: { followers: 250, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Le vertige de l'échelle des grandeurs frappe tout le monde. Les passants s'arrêtent, écoutent le calcul et le mec se retrouve à court d'arguments face à l'évidence mathématique.",
                tweets: [
                    { author: "Pédagogie Pop", handle: "@CalculsLutte", text: "Poser le calcul du temps de travail nécessaire pour faire un milliard : la meilleure claque contre le mythe de la méritocratie ⏳📉" },
                    { author: "Sarah", handle: "@Sarah_K", text: "L'analogie des 300 000 ans fait réaliser le délire complet de l'accumulation indécente." },
                    { author: "Youssef", handle: "@Youssef_T", text: "Expliquer posément les ordres de grandeur, ça remet les pieds sur terre à tout le monde." },
                    { author: "Claire", handle: "@Claire_V", text: "Zéro cri, juste des maths implacables pour pulvériser le discours méritocratique." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LA TAXE ZUCMAN CHIFFRES SUR TABLE (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Gabriel Zucman propose juste 2 % d'impôt au-delà de 100 millions d'euros : 250 milliards récupérés pour les hôpitaux et les écoles sans que ces types ne perdent un seul repas. »",
                impact: { followers: 400, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "La rigueur de la démonstration cloue le bec aux poncifs libéraux. Les chiffres de Zucman sous les yeux, personne ne peut contester la faisabilité concrète du projet.",
                tweets: [
                    { author: "Économie Réelle", handle: "@JusticeFiscale", text: "Poser les données de Gabriel Zucman pour détruire le chantage à la fuite des capitaux : clair, net et scientifiquement inattaquable 📑📊" },
                    { author: "Observatoire Fiscal", handle: "@TaxeEquitable", text: "2 % au-delà de 100 millions : la mesure de bon sens qui financerait nos services publics en ruine." },
                    { author: "Fatou", handle: "@Fatou_L", text: "La démonstration est tellement solide que même les libéraux autour n'ont rien pu répliquer." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Citer les travaux de recherche rigoureux au lieu de fantasmer, c'est ça la crédibilité du mouvement." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : LE PORTE-PAROLE DU COLLECTIF IDENTITAIRE (Palier 1 — Score : 20 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Opposant
    // Thème : Émancipation, Féminisme & Droits Fondamentaux (theme-emancipation)
    // -------------------------------------------------------------
    {
        id: "passage_pieton_lgbt_riposte",
        characterId: "opp_porte_parole_identitaire",
        characterName: "Le Porte-parole du collectif d'extrême droite",
        tier: 1,
        scoreIndex: 20,
        theme: "theme-emancipation",
        titre: "Le passage piéton arc-en-ciel",
        description: "Au petit matin, un groupuscule identitaire recouvre de peinture noire les bandes arc-en-ciel peintes par la mairie. Alerté par des riverains, ton collectif arrive sur place alors qu'ils finissent leur dégradation.",
        choix: [
            // =========================================================
            // CHOIX 1 : BLOQUER LES DÉGRADEURS SUR LE FAIT (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Vous vous prenez pour des héros en repeignant du goudron à 6h du mat ? Posez vos rouleaux et assumez votre homophobie à visage découvert ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : La Fuite des Identitaires (50%)
                outcomeSuccess: {
                    impact: { followers: 1250, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Pris de court et filmés en gros plan, ils abandonnent leurs pots de peinture et s'enfuient en dissimulant leurs visages. La vidéo cumule des centaines de milliers de vues.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Les identitaires qui détériorent le passage piéton LGBT et qui détalent dès qu'ils sont filmés sans cagoule 💀🏳️‍🌈" },
                        { author: "Fiertés Locales", handle: "@CollectifLGBTRue", text: "Visages découverts et pots de peinture abandonnés sur le trottoir, zéro courage chez ces lâches." },
                        { author: "Inès", handle: "@Ines_Etu", text: "La riposte immédiate et sans trembler, c'est comme ça qu'on nettoie nos rues." },
                        { author: "Samy", handle: "@Samy_off", text: "Courir plus vite que le vent dès qu'une caméra s'allume, le classique des groupuscules." }
                    ]
                },
                
                // Issue B : L'Accrochage et la Prune (50%)
                outcomeFailure: {
                    impact: { followers: -350, budget: -135, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Une bousculade éclate, des coups sont échangés et la police municipale disperse tout le monde sans distinction. Tu finis avec un PV de 135 € pour trouble à l'ordre public.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@GazetteDuGoudron", text: "Amende pour trouble à l'ordre public alors qu'on empêchait une dégradation homophobe en plein jour... le monde à l'envers." },
                        { author: "Police Municipale Infos", handle: "@SecuriteUrbaine", text: "Intervention suite à une rixe entre deux groupes en centre-ville, verbalisations effectuées." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "135 balles d'amende pour avoir protégé un symbole de tolérance, justice à deux vitesses." },
                        { author: "Fatou", handle: "@Fatou_L", text: "Renvoyer dos à dos agresseurs d'extrême droite et citoyens mobilisés, la honte totale." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LA SESSION DE REPEINTE COLLECTIVE AUX CRAIES (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Sortez les boîtes de craies colorées du sac : on redessine par-dessus le noir avec les passants et les mômes du quartier dans la bonne humeur. »",
                impact: { followers: 250, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Des dizaines de riverains se joignent spontanément à l'atelier improvisé. En une heure, la chaussée est recouverte de couleurs et de messages de solidarité, reboostant l'énergie de l'équipe.",
                tweets: [
                    { author: "Habitante Solidaire", handle: "@VoisinsUnis", text: "Effacer la haine avec des craies de toutes les couleurs et les sourires du quartier : la plus belle réponse 🌈✨" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Les gamins qui dessinent par-dessus le goudron dégradé, c'était trop fort et tellement apaisant." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Transformer une provocation glauque en fête populaire de quartier, respect total à l'équipe." },
                    { author: "Claire", handle: "@Claire_V", text: "On a fait le plein d'énergie positive avec tout le voisinage réuni, superbe initiative." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE DÉPÔT DE PLAINTE GROUPÉ & CONSTAT D'HUISSIER (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Ne touchez à rien : faites constater la dégradation aggravée en réunion et déposez plainte immédiatement avec les assos LGBT locales pour discrimination. »",
                impact: { followers: 400, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "La plainte collective et les preuves matérielles obligent le parquet à ouvrir une enquête pour dégradation en raison de l'orientation sexuelle. L'extrême droite locale se retrouve acculée sur le terrain juridique.",
                tweets: [
                    { author: "Observatoire LGBT+", handle: "@DroitsPourTous", text: "Dépôt de plainte officiel pour dégradation homophobe avec les assos : l'impunité dans l'espace public, c'est terminé 📑⚖️" },
                    { author: "Juristes Engagés", handle: "@DroitEtLibertes", text: "Signalement article 40 et preuves vidéo déposés au parquet : délit de haine caractérisé." },
                    { author: "Youssef", handle: "@Youssef_T", text: "Les coincer méthodiquement sur le plan légal pour que la justice fasse son travail, propre et net." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Le recours juridique solide qui met les groupuscules réacs face à leurs responsabilités pénales." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : LE PORTE-PAROLE DU SYNDICAT POLICIER (Palier 1 — Score : 20 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Opposant
    // Thème : Contre-Pouvoir, Médias & Antifascisme (theme-antifa)
    // -------------------------------------------------------------
    {
        id: "manif_permis_de_tuer_presomption",
        characterId: "opp_porte_parole_syndicat_police",
        characterName: "Le Porte-parole du syndicat policier majoritaire",
        tier: 1,
        scoreIndex: 20,
        theme: "theme-antifa",
        titre: "Face au « permis de tuer »",
        description: "Manif unitaire contre la proposition de loi sur la « présomption de légitime défense » des policiers. Devant le cortège, un représentant syndical policier provocateur vient affirmer aux caméras que « la peur doit changer de camp ».",
        choix: [
            // =========================================================
            // CHOIX 1 : LA CHARGE AU MÉGAPHONE EN TÊTE DE CORTÈGE (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Présomption de légitime défense mon œil, vous réclamez un permis d'exécuter en toute impunité ! Vos armes tuent nos gosses et vous voulez qu'on applaudisse ?! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Direct TV Coupé (50%)
                outcomeSuccess: {
                    impact: { followers: 1250, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "La foule reprend tes slogans à l'unisson. Désarçonné et couvert par les huées du cortège, le syndicaliste doit couper court à son direct TV. La séquence enflamme les réseaux.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Le porte-parole du syndicat de flics incapable de bégayer un mot face au cortège déter 💀📢" },
                        { author: "Comité Vérité", handle: "@JusticeEtVerite", text: "Les mots justes au mégaphone : refuser l'impunité totale et rappeler le danger mortel de cette loi." },
                        { author: "Samy", handle: "@Samy_off", text: "Son direct télé a duré 15 secondes avant qu'il se fasse éteindre par le cortège, légendaire." },
                        { author: "Camarade Lutte", handle: "@RipostePopulaire", text: "La détermination populaire en direct sur les chaînes d'info, force à nous !" }
                    ]
                },
                
                // Issue B : La Charge de la BAC (50%)
                outcomeFailure: {
                    impact: { followers: -350, budget: -135, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "La BAC charge immédiatement pour exfiltrer le plateau télé. Tu te prends une salve de gaz au visage et un PV de 135 € pour participation à un attroupement hostile.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@GazetteDuGoudron", text: "Gazage immédiat dès qu'on dénonce le permis de tuer, 135 balles d'amende pour avoir crié au mégaphone." },
                        { author: "Observatoire Flicage", handle: "@ViolencesLegitimes", text: "Répression brutale d'un cortège pacifique venu contester la présomption de légitime défense." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "135 balles de racket pour avoir osé contredire un syndicaliste de police devant une caméra." },
                        { author: "Fatou", handle: "@Fatou_L", text: "Toujours les mêmes méthodes pour faire taire les voix contre les violences d'État." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LA CAMPAGNE DE PÉTITION EN LIGNE (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Laisse-le faire son show : lance immédiatement une pétition citoyenne nationale pour exiger le rejet total du texte et mobiliser les abstentionnistes depuis chez eux. »",
                impact: { followers: 250, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Sans t'épuiser dans l'affrontement physique, la pétition dépasse les 100 000 signatures en 48 heures. Le réseau de soutien s'élargit massivement et le moral remonte à bloc.",
                tweets: [
                    { author: "Coordination Citoyenne", handle: "@ContreLePermisDeTuer", text: "Plus de 100k signatures contre la loi sur la présomption de légitime défense, la mobilisation prend de l'ampleur ✍️✊" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Toucher des milliers de personnes qui ne défilent jamais grâce à la pétition, tactique efficace." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "On construit un rapport de force durable sans se brûler les ailes dans les nasses policières." },
                    { author: "Inès", handle: "@Ines_Etu", text: "La pétition cartonne sur tous les réseaux, la prise de conscience est massive." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LA VIDÉO D'ANALYSE JURIDIQUE ET FACTUELLE (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Publie une vidéo pédagogique décortiquant la loi de 2017 et les statistiques de tirs mortels : démontre point par point pourquoi cette présomption détruit l'État de droit. »",
                impact: { followers: 400, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "La vidéo est d'une rigueur clinique. Relayée par des magistrats, des avocats pénalistes et la Ligue des Droits de l'Homme, elle détruit tous les arguments sécuritaires du projet de loi.",
                tweets: [
                    { author: "Revue Juridique", handle: "@DroitEtSociete", text: "La vidéo d'analyse sur l'article L. 435-1 et les dérives de la légitime défense est indispensable. Clair, sourcé et implacable 📑⚖️" },
                    { author: "Avocat Engagé", handle: "@BarreauSolidaire", text: "Démontage impeccable du texte : la présomption de légitime défense est une négation de nos principes constitutionnels." },
                    { author: "Youssef", handle: "@Youssef_T", text: "Les chiffres officiels et le code pénal posés calmement sur la table : aucun syndicat ne peut répondre à ça." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Quand l'expertise juridique sert d'arme de défense populaire, bravo pour le boulot." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : L'ÉMISSAIRE DE L'AGENCE RÉGIONALE DE SANTÉ (Palier 1 — Score : 20 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Opposant
    // Thème : Justice Sociale, Travail & Services Publics (theme-social)
    // -------------------------------------------------------------
    {
        id: "hopital_public_urgence_ars",
        characterId: "opp_emissaire_ars",
        characterName: "L'Émissaire de l'Agence Régionale de Santé",
        tier: 1,
        scoreIndex: 20,
        theme: "theme-social",
        titre: "L'hémorragie de l'hôpital public",
        description: "Occupation du hall d'un hôpital public où les urgences ferment la nuit. L'émissaire de l'ARS débarque avec ses tableaux Excel pour justifier un nouveau plan d'économies devant des soignants à bout de souffle.",
        choix: [
            // =========================================================
            // CHOIX 1 : LA CONFRONTATION DIRECTE AU MÉGAPHONE (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Range tes tableaux de rentabilité : plus de 30 000 lits fermés en six ans et des gens qui meurent sur des brancards dans les couloirs, votre austérité tue nos proches ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : La Fuite de l'Émissaire (50%)
                outcomeSuccess: {
                    impact: { followers: 1250, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Les soignants et les familles reprennent les chiffres en chœur. Désarçonné, l'émissaire quitte le hall escorté sous les huées et la vidéo de l'occupation devient virale.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "L'émissaire de l'ARS dégagé du hall par les soignants après avoir voulu justifier la fermeture des urgences 💀🏥" },
                        { author: "Urgences En Lutte", handle: "@CollectifInterHosp", text: "Les chiffres qui font mal : 30 000 lits supprimés alors que les soignants s'épuisent. Bravo pour le coup d'éclat !" },
                        { author: "Samy", handle: "@Samy_off", text: "Le mec pensait faire un powerpoint peinard devant des gens qui font des gardes de 18h, la honte totale." },
                        { author: "Camarade Santé", handle: "@SantePublique75", text: "La santé n'est pas une marchandise, respect aux hospitaliers qui ne lâchent rien." }
                    ]
                },
                
                // Issue B : L'Évacuation par la Police (50%)
                outcomeFailure: {
                    impact: { followers: -350, budget: -135, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "La direction appelle la police pour libérer les locaux administratifs. L'intervention est rugueuse et tu écopes d'une amende de 135 € pour entrave au fonctionnement d'un établissement public.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@GazetteDuGoudron", text: "Des flics envoyés dans l'hôpital pour déloger ceux qui dénoncent le manque de soignants, 135 balles d'amende au compteur." },
                        { author: "Syndicat Soignant", handle: "@InfirmieresEnColere", text: "Faire intervenir les forces de l'ordre au milieu des brancards plutôt que d'embaucher, la dérive autoritaire absolue." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "135 balles de prune pour avoir rappelé que des gens meurent aux urgences faute de lits." },
                        { author: "Claire", handle: "@Claire_V", text: "Réprimer la contestation jusque dans le hall de nos hôpitaux... écœurant." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LA NUIT SOLIDAIRE AVEC LES GARDES DE NUIT (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Reste avec l'équipe de nuit : apporte des thermos de soupe chaude, relaie l'accueil des brancards et partage le quotidien exténuant des infirmières. »",
                impact: { followers: 250, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Une nuit d'entraide brute. La solidarité entre militants et soignants forge un respect mutuel immense et te redonne toute la force morale pour continuer le combat.",
                tweets: [
                    { author: "Soignante Épuisée", handle: "@NuitBlancheUrg", text: "Passer la nuit aux urgences avec les infirmières et des thermos de soupe : la fraternité ouvrière et soignante à l'état pur 🍲💉" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Voir de ses propres yeux la réalité des gardes sans moyens, ça soude la détermination d'une façon indélébile." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Le soutien concret sur le terrain auprès de ceux qui soignent, c'est là que réside la vraie force collective." },
                    { author: "Inès", handle: "@Ines_Etu", text: "Recharger ses batteries morales auprès des soignants héroïques, un moment d'humanité immense." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE RAPPORT NOIR DE LA CASSE HOSPITALIÈRE (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Dépose sur son bureau le dossier noir des urgences : 90 000 postes vacants, 40 % des effectifs en burn-out et la preuve comptable des milliards perdus dans la T2A. »",
                impact: { followers: 400, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "Les chiffres accablants et les rapports médicaux sont irréfutables. La presse locale s'empare du dossier et la direction est obligée de suspendre le projet de fermeture sous la pression publique.",
                tweets: [
                    { author: "Observatoire Médical", handle: "@DroitALaSante", text: "Poser les chiffres du désastre hospitalier noir sur blanc : 30 000 lits fermés documentés, l'ARS incapable d'aligner un seul contre-argument 📑🩺" },
                    { author: "Médecin Hospitalier", handle: "@PratiquePublique", text: "Rapport implacable sur la tarification à l'activité qui détruit nos services. Une victoire méthodologique majeure." },
                    { author: "Youssef", handle: "@Youssef_T", text: "Opposer les statistiques réelles et le burn-out documenté aux tableurs des technocrates : victoire par K.O." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Quand le dossier technique est inattaquable, l'administration est contrainte de reculer. Chapeau." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : LE DÉPUTÉ RN EN INTERVIEW (Palier 1 — Score : 20 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Opposant
    // Thème : Neutre / Médias & Satire (theme-neutre)
    // -------------------------------------------------------------
    {
        id: "interdiction_voile_glu_patate",
        characterId: "opp_depute_rn_interview",
        characterName: "Le Député RN en interview",
        tier: 1,
        scoreIndex: 20,
        theme: "theme-neutre",
        titre: "Le zapping Glu Patate sur la police du vêtement",
        description: "Glu Patate sort un montage assassin d'un député RN défendant l'interdiction du voile dans la rue. Zoom sur son bégaiement quand on lui demande comment la police différenciera un simple foulard d'un voile islamique.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CADRAGE FRONTAL DES DÉPUTÉS RN EN CITATION (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Vous allez mesurer les centimètres de tissu des femmes dans le métro ? Assumez votre islamophobie crasse au lieu d'inventer une police des fringues ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Député Lock ses Réponses (50%)
                outcomeSuccess: {
                    impact: { followers: 1250, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "La formule fait mouche et le tweet explose en citations. Glu Patate retweete ta punchline et le député RN visé finit par masquer ses réponses sous le flot de critiques.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Poser la question de la police des mœurs aux identitaires, ils bégayent tellement fort que le député a masqué ses mentions 💀👗" },
                        { author: "Glu Patate Fan", handle: "@PatatePower", text: "Le cadrage au millimètre, ils veulent littéralement créer des brigades de la sape en 2026." },
                        { author: "Samy", handle: "@Samy_off", text: "La panique totale dès qu'on met leur hypocrisie face à la réalité du quotidien." },
                        { author: "Inès", handle: "@Ines_Etu", text: "Dénoncer l'obsession islamophobe sans détour, le recadrage nécessaire sur les réseaux." }
                    ]
                },
                
                // Issue B : Le Raid de la Fachosphère (50%)
                outcomeFailure: {
                    impact: { followers: -350, budget: -135, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "La fachosphère déclenche un raid numérique massif contre ton compte avec signalements en masse. Tu perds ton après-midi et 135 € en sécurisation technique et modération d'urgence.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@RaidDefense", text: "Raid coordonné de bots d'extrême droite après avoir dénoncé l'islamophobie d'État, 135 balles de frais de sécurisation." },
                        { author: "Veille Réseaux", handle: "@StopCyberHaine", text: "Dès qu'on touche à leur fixette vestimentaire, la meute de faux comptes est lâchée..." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "135 balles dépensées pour filtrer des milliers d'insultes de comptes sans photo de profil, la fatigue." },
                        { author: "Claire", handle: "@Claire_V", text: "Solidarité face au harcèlement de masse, ne jamais baisser les yeux." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : L'ABSURDITÉ DU FLICAGE VESTIMENTAIRE EN DIRECT (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Prends des photos de foulards de mode, de bonnets d'hiver et d'écharpes : pose un quiz ironique à la commu pour montrer le délire total d'une telle loi. »",
                impact: { followers: 250, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "L'angle décalé cartonne sans prise de tête. Le ridicule de la proposition saute aux yeux de dizaines de milliers d'internautes, détendant l'atmosphère tout en ridiculisant l'extrême droite.",
                tweets: [
                    { author: "Humour Politique", handle: "@SatireDuJour", text: "Le quiz 'Foulard de mode ou délit RN ?' qui tourne partout, démonter le racisme par l'absurde c'est génial 🧕🧣" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Prouver en trois photos que leur loi est inapplicable sans basculer dans un régime autoritaire absurde." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Rire de leurs obsessions tout en posant le vrai problème, la pédagogie par l'humour ça marche toujours." },
                    { author: "Fatou", handle: "@Fatou_L", text: "Une bouffée d'air frais qui remet l'église au milieu du village sans s'épuiser dans des débats stériles." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE RAPPEL DES TEXTES CONSTITUTIONNELS ET EUROPÉENS (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Rappelle l'article 9 de la CEDH, l'article 10 de la Déclaration de 1789 et la jurisprudence du Conseil constitutionnel : cette loi viole l'égalité et la liberté de conscience. »",
                impact: { followers: 400, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "Le thread juridique est implacable. Cité par des magistrats, le Conseil d'État et des juristes constitutionnalistes, il démontre noir sur blanc l'inconstitutionnalité et le caractère discriminatoire du texte.",
                tweets: [
                    { author: "Revue Constitutionnelle", handle: "@JurisprudenceLibre", text: "Article 10 de la DDHC et article 9 de la CEDH sous les yeux : la démonstration juridique nette qui pulvérise le projet RN 📑⚖️" },
                    { author: "Avocat Engagé", handle: "@DroitsHumains75", text: "L'espace public appartient à tous et toutes. La liberté de conscience n'est pas négociable selon les humeurs électorales." },
                    { author: "Youssef", handle: "@Youssef_T", text: "Citer les textes fondateurs de notre droit pour calmer les délires liberticides, inattaquable." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Rigueur juridique totale : les arguments sont posés, aucune chaîne d'info ne peut contourner ça." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : CLÉMENT VIKTOROVITCH (Palier 1 — Score : 20 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Neutre / Allié critique
    // Thème : Neutre / Médias & Rhétorique (theme-neutre)
    // -------------------------------------------------------------
    {
        id: "chronique_viktorovitch_attal_bistrots",
        characterId: "allie_clement_viktorovitch",
        characterName: "Clément Viktorovitch",
        tier: 1,
        scoreIndex: 20,
        theme: "theme-neutre",
        titre: "Le décryptage rhétorique de Clément Viktorovitch",
        description: "Dans sa chronique vidéo, le politologue Clément Viktorovitch décortique le storytelling de Gabriel Attal. Il s'attaque au plan des « 1 000 bistrots » et à sa rhétorique creuse pour masquer l'abandon des services publics ruraux.",
        choix: [
            // =========================================================
            // CHOIX 1 : LA SATIRE DIRECTE SUR LE RÉARMEMENT DU ZINC (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Fermer les maternités et les gares pour promettre un ballon de rouge au comptoir : Gabriel Attal confond cohésion des territoires et open bar électoraliste ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : La Satire Virale (50%)
                outcomeSuccess: {
                    impact: { followers: 1250, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "La formule est reprise en masse et Viktorovitch la cite en story. Les macronistes s'enferment dans des éléments de langage ridicules pour tenter de défendre leur mesure.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Le plan des 1 000 bistrots transformé en risée nationale, la com' d'Attal prend l'eau de toutes parts 💀🍷" },
                        { author: "Clément Viktorovitch Fan", handle: "@RhetoriqueCritique", text: "Décortiquer les éléments de langage du pouvoir avec autant de justesse, c'est un régal absolu." },
                        { author: "Samy", handle: "@Samy_off", text: "Remplacer l'hôpital de proximité par un PMU subventionné, le génie français du quinquennat." },
                        { author: "Inès", handle: "@Ines_Etu", text: "La formule a fait mouche partout, la com' descendante ne prend plus du tout." }
                    ]
                },
                
                // Issue B : L'Intimidation Légale (50%)
                outcomeFailure: {
                    impact: { followers: -350, budget: -135, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Un député de la majorité menace de poursuites en diffamation pour atteinte à la réputation de l'opération. Tu engages 135 € en consultation juridique pour clore l'incident.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@PoursuitesExpress", text: "Menaces de procès d'un député vexé par une blague sur les bistrots ruraux, 135 balles de frais d'avocat." },
                        { author: "Observatoire Médias", handle: "@LibreCritique", text: "Sortir la menace judiciaire dès qu'un internaute souligne l'indigence d'une politique publique..." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "135 balles pour avoir rappelé qu'un bistrot ne soigne pas les urgences médicales, l'absurdité totale." },
                        { author: "Claire", handle: "@Claire_V", text: "Vouloir judiciariser l'ironie politique, preuve d'une fébrilité sans nom." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LA SESSION VISIONNAGE EN LIVE (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Lance un live communautaire pour savourer le démontage de Viktorovitch : analyse des figures de style, fous rires sur les tics de langage et bonne humeur garantie. »",
                impact: { followers: 250, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "La commu se régale devant les ralentis et les analyses sémantiques. Décortiquer le vide politique tout en rigolant redonne le moral et recharge l'énergie du groupe.",
                tweets: [
                    { author: "Viewer Politique", handle: "@StreamDrole", text: "Deux heures à rire des punchlines de Viktorovitch sur le vide sidéral de la macronie, le live le plus thérapeutique de la semaine ☕🍿" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Comprendre les pièges du storytelling politique en s'amusant, on en ressort toujours plus fort." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Moment de détente parfait avec le chat, la pédagogie par la déconstruction rhétorique." },
                    { author: "Camarade Zen", handle: "@EspritCritique", text: "Désamorcer le poison de la com' par l'analyse et la rigolade collective, rien de mieux." }
                ]
            },

            // =========================================================
            // CHOIX 3 : L'ANALYSE COMPARATIVE DES BUDGETS RURAUX (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Publie les chiffres réels : compare le coût dérisoire des 1 000 bistrots aux milliards coupés dans les lignes TER, les trésoreries de village et les écoles de campagne. »",
                impact: { followers: 400, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "La démonstration met en lumière l'illusionniste politique. Relayé par des collectifs de défense des services publics ruraux, ton post prouve l'opération d'enfumage budgétaire.",
                tweets: [
                    { author: "Collectif Ruralités", handle: "@ServicesPublicsPartout", text: "Mettre les budgets réels en face du coup de com' d'Attal : analyse implacable, les chiffres ne mentent pas 📑🚆" },
                    { author: "Youssef", handle: "@Youssef_T", text: "L'esbroufe du gouvernement confrontée aux fermetures de gares réelles : dossier carré, net et sourcé." },
                    { author: "Fatou", handle: "@Fatou_L", text: "Une vraie démonstration d'utilité publique qui démonte le mirage en trois graphiques." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Opposer des données budgétaires sérieuses au marketing politique, c'est ça le travail de fond." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : REGELEGORILA (Palier 1 — Score : 20 / 100)
    // Rareté : Pop-Culture / Stream | Alignement : Neutre / Allié critique
    // Thème : Neutre / Médias & Pop-culture (theme-neutre)
    // -------------------------------------------------------------
    {
        id: "top3_cinema_regelegorila",
        characterId: "allie_regelegorila",
        characterName: "regelegorila",
        tier: 1,
        scoreIndex: 20,
        theme: "theme-neutre",
        titre: "Le Top 3 ciné face à regelegorila",
        description: "Sur la plateforme rouge, l'influenceur regelegorila réagit aux Top 3 films de sa communauté. Tu décides de lui soumettre tes favoris pour voir s'il valide ta grille de lecture.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE TOP RADICAL & INSURRECTIONNEL (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Balance la trinité de combat : La Bataille d'Alger (Pontecorvo), La Chinoise (Godard) et Sorry to Bother You (Boots Riley). Radical, tranchant et sans concession. »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : L'Envolée Cinématographique et Politique (50%)
                outcomeSuccess: {
                    impact: { followers: 1250, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "regelegorila bondit de son fauteuil, valide la claque politique de Boots Riley et part dans une envolée de 20 minutes sur l'antifascisme au cinéma. L'extrait cartonne sur TikTok.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "regelegorila qui analyse 'Sorry to Bother You' en plein live après avoir lu ton top, la masterclass cinéma et lutte de classes 🦍🎬" },
                        { author: "Cinéphile Déter", handle: "@GrandAngleGauche", text: "Citer La Bataille d'Alger et Boots Riley d'un coup, regelegorila était en transe totale sur le stream." },
                        { author: "Samy", handle: "@Samy_off", text: "Le clip Twitch tourne partout, 20 minutes de pur décryptage de l'art engagé." },
                        { author: "Inès", handle: "@Ines_Etu", text: "Lier la forme esthétique aux combats politiques réels, exactement ce qu'on aime voir." }
                    ]
                },
                
                // Issue B : Le Raid Numérique Réac (50%)
                outcomeFailure: {
                    impact: { followers: -350, budget: -135, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Des raids de comptes réacs spamment le chat en vous traitant de 'wokes primaires'. Un modérateur fait une fausse manip et tu dois lâcher 135 € pour sécuriser les outils du live.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@TwitchGalere", text: "Raid de trolls d'extrême droite dès qu'on cite Pontecorvo et Boots Riley, 135 balles de sécurisation du serveur." },
                        { author: "Modo Fatigué", handle: "@ModoEnSueur", text: "Le chat a explosé sous les signalements automatiques, soirée de modération d'urgence..." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "135 balles pour réparer le bot anti-raid après avoir juste parlé de cinéma politique, l'enfer." },
                        { author: "Claire", handle: "@Claire_V", text: "La fragilité des fachos qui vrillent devant trois titres de films décoloniaux." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE TROLL INTERSTELLAR ASSUMÉ (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Balance le piège : Interstellar en numéro un, calé entre Inception et Tenet. Juste pour le voir hurler en direct sur Christopher Nolan et exploser de rire. »",
                impact: { followers: 250, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "regelegorila s'étouffe avec son café, pousse un cri du cœur théâtral contre Nolan et se lance dans une diatribe hilarante. Un pur moment de décompression collective sur le stream.",
                tweets: [
                    { author: "Viewer MortDeRire", handle: "@NolanTropSurcote", text: "regelegorila qui pète un câble en direct sur Interstellar pour la 50e fois, le troll était parfait j'ai pleuré de rire 🍿💀" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Le voir s'énerver pendant un quart d'heure sur les violons de Hans Zimmer, le meilleur moment de la semaine." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "La mauvaise foi légendaire de regelegorila sur Nolan, un classique qui fait un bien fou au moral." },
                    { author: "Stream En Folie", handle: "@ClipsTwitchFR", text: "Le clip où il hurle 'Mais arrêtez avec la bibliothèque spatiale !' a déjà 50k vues." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE TOP CINÉPHILE DE NICHE ABSOLUE (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Sors le top de connaisseur pur : Jeanne Dielman (Akerman), Yi Yi (Edward Yang) et Le Miroir (Tarkovski). Zéro posture, juste la grâce absolue du plan-séquence. »",
                impact: { followers: 400, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "Respect immédiat. regelegorila retire ses lunettes, pose ses mains à plat sur le bureau et salue un sans-faute de grand cinéphile. La commu Twitch valide ton statut de connaisseur pointu.",
                tweets: [
                    { author: "Cinéphile Pointu", handle: "@PlansSequences", text: "Citer Edward Yang et Chantal Akerman chez regelegorila et le laisser sans voix... la validation cinéphile ultime 📑🎥" },
                    { author: "Revue Critique", handle: "@LesCahiersPop", text: "Jeanne Dielman et Yi Yi dans le même top : respect absolu pour l'exigence formelle." },
                    { author: "Youssef", handle: "@Youssef_T", text: "Poser du Tarkovski et du cinéma taïwanais avec autant d'aisance, la crédibilité monte d'un cran direct." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Quand la cinéphilie exigeante met tout le monde d'accord dans le chat, c'est propre." }
                ]
            }
        ]
    },
// -------------------------------------------------------------
    // PERSONNAGE : LE DÉPUTÉ CLIMATOSCEPTIQUE (Palier 2 — Score : 40 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Opposant
    // Thème : Écologie, Vivant & Territoires (theme-ecologie)
    // -------------------------------------------------------------
    {
        id: "ademe_fonds_chaleur_austerite",
        characterId: "opp_depute_climatosceptique",
        characterName: "Le Député climatosceptique",
        tier: 2,
        scoreIndex: 40,
        theme: "theme-ecologie",
        titre: "L'ADEME dans le viseur de l'austérité",
        description: "Après un été 2026 caniculaire écrasant, le gouvernement et la droite sabrent de 30 % le Fonds Chaleur de l'ADEME. En point presse devant l'Assemblée, un député ricane au micro : « On n'a plus d'argent pour la bureaucratie verte ! »",
        choix: [
            // =========================================================
            // CHOIX 1 : L'INTERPELLATION AU MÉGAPHONE DEVANT LES CAMÉRAS (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Vous étouffez nos écoles sous 42 °C tout l'été et vous osez couper l'argent qui isole les bâtiments ? C'est de l'irresponsabilité criminelle au service des rentiers du fossile ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Recadrage Virale en Direct (50%)
                outcomeSuccess: {
                    impact: { followers: 1500, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Ton interpellation coupe net son numéro de com' en direct à la télé. Le député s'enfuit sous les huées et l'extrait cartonne sur les réseaux, repris par les profs et les soignants.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Cadrer les députés climatosceptiques sur le saccage du Fonds Chaleur après la canicule 2026, merci pour la claque en direct 💀🌡️" },
                        { author: "Profs En Surchauffe", handle: "@EcolesCanicule", text: "35 °C dans les classes en juin et ils sabrent l'ADEME. Bravo pour le coup d'éclat devant les caméras !" },
                        { author: "Samy", handle: "@Samy_off", text: "Le député qui bégaye et rentre direct au Palais Bourbon dès qu'on lui parle des 42 degrés réels, magistral." },
                        { author: "Camarade Écolo", handle: "@RiposteVerte", text: "Ne jamais laisser les destructeurs du climat faire leur promo sans riposte populaire." }
                    ]
                },
                
                // Issue B : L'Intervention du Service d'Ordre (50%)
                outcomeFailure: {
                    impact: { followers: -400, budget: -150, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "La sécurité parlementaire et la police te repoussent violemment hors du champ des caméras. Tu finis avec un PV de 150 € pour manifestation non déclarée aux abords de l'Assemblée.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@GazetteDuGoudron", text: "Expulsion musclée devant l'Assemblée pour avoir rappelé la réalité de la canicule, 150 balles d'amende." },
                        { author: "Observatoire Climat", handle: "@VeilleEcocide", text: "Protéger la com' des parlementaires fossiles par la matraque plutôt que d'isoler les logements..." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "150 balles de prune pour avoir crié une vérité scientifique élémentaire dans la rue." },
                        { author: "Claire", handle: "@Claire_V", text: "La peur panique du pouvoir dès qu'on conteste leurs coupes budgétaires mortifères." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : L'ATELIER D'OMBRAGE ET DE VÉGÉTALISATION POPULAIRE (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Organisons un chantier d'urgence avec les riverains : végétalisation de cours d'école, pose de brise-soleil artisanaux et partage d'une grande citronnade fraîche à l'ombre. »",
                impact: { followers: 300, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Une action concrète d'auto-défense climatique. Les habitants et les enfants retrouvent un espace vivable, et la chaleur humaine du quartier te redonne un boost d'énergie massif.",
                tweets: [
                    { author: "Habitant Solidaire", handle: "@QuartierFrais", text: "Pas besoin d'attendre leurs budgets : végétaliser le quartier ensemble et créer des îlots de fraîcheur solidaires, l'action qui fait du bien 🌿🍋" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Planter des arbres et fabriquer des toiles d'ombrage avec les voisins : l'écologie populaire en action." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Un après-midi au frais avec les mômes qui rigolent, ça recharge les batteries comme jamais." },
                    { author: "Inès", handle: "@Ines_Etu", text: "Répondre au mépris de l'État par l'auto-organisation et l'entraide de terrain, c'est ça la voie." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LA VIDÉO D'ENQUÊTE CHIFFRÉE SUR LE FONDS CHALEUR (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Publie une enquête vidéo sourcée : démontre comment chaque euro investi dans l'ADEME économise trois euros de soins hospitaliers et d'importations de gaz. »",
                impact: { followers: 450, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "L'argumentaire économique et scientifique est imparable. Les ingénieurs de l'ADEME et les climatologues relaient la vidéo, qui s'impose comme la référence du contre-débat parlementaire.",
                tweets: [
                    { author: "Ingénieurs Climat", handle: "@TransitionReelle", text: "Le dossier technique complet sur l'utilité vitale du Fonds Chaleur de l'ADEME : inattaquable, chiffré, d'utilité publique 📑📊" },
                    { author: "Économie Verte", handle: "@ComptaEcologique", text: "Démontrer point par point que sabrer l'ADEME coûte plus cher en soins et en énergie que de rénover : démonstration parfaite." },
                    { author: "Youssef", handle: "@Youssef_T", text: "Les graphiques et les données officielles sous le nez des députés austéritaires, ils n'ont rien pu répliquer." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Un travail d'analyse rigoureux qui démonte méthodiquement l'arnaque de la 'bureaucratie verte'." }
                ]
            }
        ]
    },
// -------------------------------------------------------------
    // PERSONNAGE : LE REPORTEUR DE FRONTIÈRES (Palier 2 — Score : 40 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Opposant
    // Thème : Contre-Pouvoir, Médias & Antifascisme (theme-antifa)
    // -------------------------------------------------------------
    {
        id: "micro_trottoir_frontieres_florentin",
        characterId: "opp_journaliste_frontieres",
        characterName: "Le Reporteur de Frontières",
        tier: 2,
        scoreIndex: 40,
        theme: "theme-antifa",
        titre: "En « direk » avec l'extrême droite",
        description: "En pleine manif antifasciste, le reporter de Frontières surgit micro tendu face caméra : « Nous sommes en dirèt avec l'estrême gauche ! Dites-nous, c'est quoi un facho en fait ? Définissez-le ! »",
        choix: [
            // =========================================================
            // CHOIX 1 : LA RIPOSTE FRONTALE FACE CAMÉRA (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Baisse ta bonnette : vous n'êtes pas des journalistes mais les supplétifs médiatiques de milliardaires réacs. Ton micro sert juste à fabriquer des boucs émissaires pour faire du clic ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Recadrage Net en Direct (50%)
                outcomeSuccess: {
                    impact: { followers: 1500, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Pris de court par ta repartie directe et filmé sous tous les angles par le cortège, il perd le fil de son conducteur et coupe précipitamment son dirèt sous les cris.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Le reporter de Frontières qui voulait piéger des gens en 'direk' et qui finit par bégayer en coupant son live 💀🎤" },
                        { author: "Observatoire Médias", handle: "@Acrimed_Like", text: "Rappeler calmement que Frontières est une officine de propagande réactionnaire, excellente réaction." },
                        { author: "Samy", handle: "@Samy_off", text: "Il est venu chercher du buzz, il est reparti avec une leçon de déontologie en direct." },
                        { author: "Camarade Antifa", handle: "@CortègeVénère", text: "Ne jamais laisser ces provocateurs intimider les manifestants dans nos rues." }
                    ]
                },
                
                // Issue B : La Bousculade Montée en Épingle (50%)
                outcomeFailure: {
                    impact: { followers: -400, budget: -150, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Son cadreur filme la tension de près. Ils montent un extrait tronqué de 15 secondes pour crier à l'agression sur les réseaux. Tu dois débourser 150 € en frais de constat d'huissier pour contrer la diffamation.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@AntiFakeNews", text: "Montage coupé de Frontières pour faire croire à une agression, 150 balles de constat pour rétablir la vérité." },
                        { author: "Frontières Alert", handle: "@FrontieresOfficiel", text: "Agression intolérable de notre équipe par l'estrême gauche intolérante en plein cœur de Paris !" },
                        { author: "Léo", handle: "@Leo_Mlt", text: "Le piège classique du micro tendu pour ensuite jouer les victimes sur CNews, insupportable." },
                        { author: "Claire", handle: "@Claire_V", text: "Solidarité face à leurs méthodes de manipulation vidéo habituelles." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE REFUS PUR ET SIMPLE DU CIRQUE MÉDIATIQUE (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Tourne les talons sans lui accorder un regard : rejoins les copains en chantant à tue-tête pour noyer son micro sous les slogans et garder ton calme. »",
                impact: { followers: 300, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Ignoré royalement, le reporter se retrouve à parler tout seul devant son objectif au milieu des chants partisans. Tu préserves ton énergie et l'ambiance collective reste joyeuse.",
                tweets: [
                    { author: "Manif Festive", handle: "@SouriresEnLutte", text: "Les snober totalement en chantant plus fort qu'eux : la meilleure manière d'éteindre les provocations 🎵✊" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Zéro contenu offert à leur chaîne YouTube, ils sont repartis bredouilles en dix minutes." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Ne pas mordre à l'hameçon et garder son énergie pour la mobilisation, tactique parfaite." },
                    { author: "Inès", handle: "@Ines_Etu", text: "L'indifférence totale face aux marchands de haine, ça les rend fous et ça nous protège." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LA DÉFINITION POLITIQUE DU FASCISME SUR LE FOND (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Prends le micro posément : définis le fascisme comme le nationalisme autoritaire, le tri des droits selon l'origine et la désignation d'un ennemi intérieur pour masquer la rapine sociale. »",
                impact: { followers: 450, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "La réponse est d'une clarté théorique implacable. Incapable d'obtenir un dérapage sensationnaliste ou un slogan creux, l'intervieweur est contraint de diffuser un échange où son idéologie est méthodiquement démontée.",
                tweets: [
                    { author: "Histoire & Politique", handle: "@SciencesPoPopulaire", text: "Poser la définition historique et politique du fascisme sans trembler devant Frontières : démonstration magistrale 📑⚖️" },
                    { author: "Youssef", handle: "@Youssef_T", text: "Sortir les concepts précis au lieu de s'énerver : le reporter n'avait strictement rien à répondre." },
                    { author: "Fatou", handle: "@Fatou_L", text: "Quand le fond politique détruit le piège médiatique en deux minutes chrono, magnifique." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Une leçon de pédagogie politique en pleine rue, inattaquable et très formateur." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : JEAN-PHILIPPE TANGUY (Palier 2 — Score : 40 / 100)
    // Rareté : Parlementaire / Député | Alignement : Opposant
    // Thème : Contre-Pouvoir, Médias & Antifascisme (theme-antifa)
    // -------------------------------------------------------------
    {
        id: "discours_tanguy_travail_rend_libre",
        characterId: "opp_jean_philippe_tanguy",
        characterName: "Jean-Philippe Tanguy",
        tier: 2,
        scoreIndex: 40,
        theme: "theme-antifa",
        titre: "L'écho sinistre de Jean-Philippe Tanguy",
        description: "En plein discours officiel, le député RN Jean-Philippe Tanguy lance sans sourciller : « Oui, le travail rend libre ! » L'emprunt direct au slogan des camps d'extermination nazis déclenche une onde de choc immédiate sur les réseaux.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE RAPPEL BRUT DU SLOGAN DES CAMPS (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « 'Arbeit macht frei' gravé sur les grilles d'Auschwitz. Vos références historiques puent la mort et la déportation : vous pouvez changer de logo, le fond reste le même ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : L'Indignation Générale et le Recul (50%)
                outcomeSuccess: {
                    impact: { followers: 1500, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Ton tweet explose et force les médias nationaux à questionner le député sur ses propos. Acculé, son groupe parlementaire tente maladroitement d'évoquer une 'maladresse de citation'.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Rappeler d'où vient 'le travail rend libre' mot pour mot, ils n'assument déjà plus leur propre provocation 💀📉" },
                        { author: "Mémoire Ouvrière", handle: "@ArchivesLutte", text: "Utiliser la devise des camps de la mort dans l'hémicycle en toute détente... Bravo pour le rappel sans filtre." },
                        { author: "Samy", handle: "@Samy_off", text: "Le RN qui tente de faire passer un slogan nazi pour un éloge du mérite, le masque est tombé en direct." },
                        { author: "Camarade Antifa", handle: "@AlerteVigilance", text: "Ne jamais laisser passer une seule tentative de réhabilitation ou de banalisation de ces horreurs." }
                    ]
                },
                
                // Issue B : La Contre-Offensive en Diffamation (50%)
                outcomeFailure: {
                    impact: { followers: -400, budget: -150, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Les juristes du parti attaquent en diffamation en plaidant une 'citation philosophique hors contexte'. Tu dois mobiliser 150 € d'honoraires pour faire valoir ta bonne foi avec un avocat.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@FraisDeDefense", text: "Attaqué pour avoir rappelé d'où vient la phrase sur Auschwitz, 150 balles de frais de défense juridique." },
                        { author: "Observatoire Médias", handle: "@VeilleIdeologique", text: "L'inversion totale : choquer avec des mots nazis puis poursuivre ceux qui pointent la référence." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "150 balles pour rappeler l'histoire élémentaire de la Seconde Guerre mondiale, un comble." },
                        { author: "Claire", handle: "@Claire_V", text: "Solidarité face à l'intimidation par les procès-bâillons du Rassemblement national." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LA DÉCONSTRUCTION DU TRAVAIL ET DE L'ALIÉNATION (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Demande aux ouvriers en burn-out, aux livreurs cassés à 25 ans et aux deux morts par jour au travail si le labeur les rend libres. Parlons émancipation réelle, temps libre et dignité ! »",
                impact: { followers: 300, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Le thread ouvre une conversation humaine et bienveillante sur le quotidien au travail. Des centaines de salariés partagent leurs témoignages, créant un espace de solidarité qui fait du bien à tout le monde.",
                tweets: [
                    { author: "Salarié Déter", handle: "@PauseSyndicale", text: "Deux morts par jour au travail en France : voilà la réalité du travail qui use et qui brise. Merci pour ce rappel essentiel ✊☕" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Prendre le contre-pied social pour parler de notre santé et de nos vies plutôt que de rester dans leur cirque, tellement reposant." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "L'émancipation passe par la réduction du temps de travail, pas par le culte de l'exploitation patronale." },
                    { author: "Inès", handle: "@Ines_Etu", text: "Les témoignages sous le tweet sont bouleversants, cette entraide collective redonne énormément de force." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE RECOURS JURIDIQUE ET LE SIGNALEMENT OFFICIEL (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Saisis le bureau de l'Assemblée nationale et adresse un signalement au procureur pour apologie de crimes contre l'humanité et banalisation de devises concentrationnaires. »",
                impact: { followers: 450, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "La démarche légale documentée oblige la présidence de séance à inscrire l'incident au procès-verbal officiel et pousse plusieurs associations mémorielles à se constituer parties civiles.",
                tweets: [
                    { author: "Mémoire & Droits", handle: "@JusticeHistorique", text: "Signalement officiel déposé après les propos de Tanguy : l'impunité parlementaire a des limites légales 📑⚖️" },
                    { author: "Avocat Engagé", handle: "@BarreauRépublicain", text: "La saisine est juridiquement solide : la banalisation de symboles de l'extermination n'a pas sa place dans la République." },
                    { author: "Youssef", handle: "@Youssef_T", text: "Frapper sur le terrain institutionnel pour qu'il y ait des traces écrites et des sanctions : méthode irréprochable." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Transformer l'indignation légitime en acte de procédure concret, le RN se retrouve piégé par le droit." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : LE BRIGADIER CURIEUX (Palier 2 — Score : 40 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Neutre
    // Thème : Neutre / Société & Pop-culture (theme-neutre)
    // -------------------------------------------------------------
    {
        id: "controle_casque_musique_rue",
        characterId: "opp_brigadier_curieux",
        characterName: "Le Brigadier curieux",
        tier: 2,
        scoreIndex: 40,
        theme: "theme-neutre",
        titre: "« Tu écoutes quoi dans ton casque ? »",
        description: "En plein contrôle inopiné au coin d'une rue piétonne, un policier en patrouille te fait signe de retirer ton casque audio et te demande sèchement : « Tu écoutes quoi ? »",
        choix: [
            // =========================================================
            // CHOIX 1 : LE TITRE ENGAGÉ « UN FACHO KO » (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « 'Un facho KO' - Soli»",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Second Degré Inattendu (50%)
                outcomeSuccess: {
                    impact: { followers: 1500, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Pris de court, le brigadier esquisse un rictus moqueur : « Au moins t'es franc, circule avant que mon collègue n'entende les paroles ! » La vidéo du culot cartonne sur TikTok.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Sortir 'Un facho KO' de Soli les yeux dans les yeux au brigadier et le voir sourire gêné, l'audace est totale 💀🥊" },
                        { author: "Samy", handle: "@Samy_off", text: "Le flic qui valide le son de Soli en scred, j'étais pas prêt pour cette timeline." },
                        { author: "Inès", handle: "@Ines_Etu", text: "Le sang-froid légendaire face à la patrouille, séquence culte." },
                        { author: "Camarade Rap", handle: "@KickEtLutte", text: "Les classiques qui résonnent dans les casques même devant l'uniforme, respect." }
                    ]
                },
                
                // Issue B : L'Outrage et la Fouille Complète (50%)
                outcomeFailure: {
                    impact: { followers: -400, budget: -150, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Son collègue se raidit immédiatement : « Vous nous traitez de quoi là ? Mains sur le capot ! » Contrôle tatillon de 45 minutes et PV de 150 € pour comportement provocateur.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@ControleSansFin", text: "45 minutes contre le capot pour avoir cité le son de Soli, 150 balles de prune au passage." },
                        { author: "Observatoire Police", handle: "@FouillesAbusives", text: "Quand les goûts musicaux deviennent un prétexte légal pour un contrôle d'intimidation..." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "150 balles pour une vanne sur un morceau, ils n'ont vraiment aucun second degré." },
                        { author: "Claire", handle: "@Claire_V", text: "La susceptibilité permanente dès qu'on sort des sentiers battus dans la rue." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE BRUIT BLANC RELAXANT (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Rien de bien méchant chef : 'Bruit de pluie relaxant sur les feuilles - Version 10 heures sans interruption'. Ça évite de péter un câble en ville. »",
                impact: { followers: 300, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Le flic te regarde avec des yeux ronds, éclate d'un rire franc et hoche la tête : « Je devrais essayer pendant mes nuits de garde... Bonne journée ! » Échange lunaire mais super détendant.",
                tweets: [
                    { author: "Adepte Du Chill", handle: "@ZenAttitude75", text: "Répondre '10h de bruit de pluie' aux flics pour désamorcer un contrôle, technique de moine shaolin 🌧️🎧" },
                    { author: "Sarah", handle: "@Sarah_K", text: "L'absurdité du quotidien qui transforme un contrôle relou en moment de rigolade, ça fait du bien." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Pas de prise de tête, un flic déstabilisé et de l'énergie gardée pour la suite." },
                    { author: "Fatou", handle: "@Fatou_L", text: "Le pouvoir pacificateur des vidéos de pluie de YouTube, validé par la police nationale." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LA PROSE SOCIALE DE MÉDINE (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « 'L'4mour' de Médine. C'est écrit au scalpel : ça parle de fraternité, des fractures de notre pays et de la dignité qu'on doit à chacun, peu importe d'où il vient. »",
                impact: { followers: 450, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "Intrigué, il te demande de lui faire écouter un couplet. Après une minute de rimes précises sur la relégation sociale, il rend l'écouteur, visiblement songeur : « C'est pas bête ce qu'il raconte. »",
                tweets: [
                    { author: "Rap & Politique", handle: "@PlumeSociale", text: "Faire écouter L'4mour de Médine à un brigadier en plein trottoir et le voir réfléchir sur les paroles : masterclass humaine 📑🎶" },
                    { author: "Youssef", handle: "@Youssef_T", text: "La puissance du texte qui traverse les préjugés et les uniformes. Respect pour la pédagogie." },
                    { author: "Nabil", handle: "@Nabil_Med", text: "Médine prescrit comme remède social en direct sur le pavé, magistral." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Quand la culture et la poésie engagée ouvrent une brèche même là où on ne l'attendait pas." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : LE MAIRE EN DÉAMBULATION (Palier 2 — Score : 40 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Opposant
    // Thème : Écologie, Vivant & Territoires (theme-ecologie)
    // -------------------------------------------------------------
    {
        id: "greenwashing_arbres_place_maire",
        characterId: "opp_maire_deambulation",
        characterName: "Le Maire en déambulation",
        tier: 2,
        scoreIndex: 40,
        theme: "theme-ecologie",
        titre: "L'illusion verte sur la place centrale",
        description: "En déambulation de quartier, le maire vante son bilan environnemental. Interpellé sur le vide de son plan climat, il désigne fièrement la dalle en béton : « Enfin voyons, nous venons tout juste de planter quatre érables ici ! »",
        choix: [
            // =========================================================
            // CHOIX 1 : L'ARRACHAGE DE L'ENFUMAGE DEVANT LES CAMÉRAS (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Quatre arbrisseaux dans des bacs en plastique pour masquer l'artificialisation de cinquante hectares en périphérie ? Votre bilan écologique est une mascarade indécente ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Maire Acculé en Direct (50%)
                outcomeSuccess: {
                    impact: { followers: 1500, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Pris au dépourvu devant les commerçants et la presse locale, l'élu balbutie avant d'écourter sa visite. La vidéo de l'interpellation devient virale et mobilise les collectifs de riverains.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Le maire qui pensait faire sa com' pépère avec 4 pauvres arbres et qui se prend la réalité des zones commerciales en pleine face 💀🌳" },
                        { author: "Habitant Vénère", handle: "@BétonStop", text: "Quatre arbres pour 50 hectares de terres agricoles coulées sous le goudron. Bravo pour le recadrage en règle !" },
                        { author: "Samy", handle: "@Samy_off", text: "Le maire qui range son sourire d'inauguration en deux secondes chrono, magique." },
                        { author: "Inès", handle: "@Ines_Etu", text: "Mettre les bétonneurs face à leurs mensonges publics sur le terrain, toujours." }
                    ]
                },
                
                // Issue B : L'Accusation d'Outrage à Élu (50%)
                outcomeFailure: {
                    impact: { followers: -400, budget: -150, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "La police municipale s'interpose pour couper court à l'échange. L'adjoint à la sécurité dresse un procès-verbal de 150 € pour trouble à l'ordre public lors d'un déplacement officiel.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@GazetteDuGoudron", text: "150 balles de prune pour avoir pointé l'hypocrisie du maire sur la place du village..." },
                        { author: "Observatoire Citoyen", handle: "@DemocratieLocale", text: "Interdire aux citoyens d'interroger les élus pendant leurs déambulations, quelle dérive autoritaire." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "150 balles pour avoir dit qu'un pot de fleurs n'était pas une forêt urbaine, lunaire." },
                        { author: "Claire", handle: "@Claire_V", text: "Solidarité : les élus locaux ne supportent plus d'être contredits sans micro complaisant." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LA PROPOSITION D'UN PLAN DE PLEINE TERRE (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Débâclons le bitume ensemble : donnez-nous l'autorisation d'aménager de véritables fosses en pleine terre et un couloir végétalisé géré avec les habitants pour rafraîchir la place. »",
                impact: { followers: 300, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "L'approche constructive séduit les riverains présents qui appuient le projet en direct. Débordé par l'enthousiasme du quartier, le maire accepte d'ouvrir une table ronde citoyenne.",
                tweets: [
                    { author: "Comité Riverains", handle: "@PlaceVerte75", text: "Proposer un vrai plan de pleine terre citoyen au lieu de juste râler : la dynamique de quartier prend direct 🌿🤝" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Transformer un coup de com' foireux en véritable opportunité de réaménagement populaire, superbe idée." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "La mobilisation positive qui rassemble tout le monde, ça donne un boost d'énergie incroyable." },
                    { author: "Fatou", handle: "@Fatou_L", text: "Des solutions concrètes pour casser le béton : le maire était obligé de dire oui devant les témoins." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE DÉCRYPTAGE PÉDAGOGIQUE DU GREENWASHING (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « C'est la définition même du greenwashing : un vernis publicitaire superficiel destiné à masquer l'absence totale de transition structurelle et la poursuite des pollutions. »",
                impact: { followers: 450, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "L'explication claire et posée fait taire la rhétorique municipale. Les journalistes locaux reprennent ton analyse pour dénoncer l'écart entre la communication verte et les choix d'aménagement réels.",
                tweets: [
                    { author: "Écologie & Décryptage", handle: "@StopGreenwash", text: "Définition limpide du greenwashing municipal posée sous le nez des caméras : clair, pédagogique et irréfutable 📑🌱" },
                    { author: "Youssef", handle: "@Youssef_T", text: "Expliquer calmement aux gens pourquoi quatre arbres en bacs relèvent de la tromperie publique, travail d'utilité publique." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "La pédagogie par l'exemple : poser le concept théorique en pleine situation réelle, niveau parfait." },
                    { author: "Diane", handle: "@Diane_Eco", text: "Un décryptage méthodique qui remet les pendules à l'heure : l'écologie ne se résume pas à de la décoration." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : LE MILITANT RN PROVOCATEUR (Palier 2 — Score : 40 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Opposant
    // Thème : Justice Sociale, Travail & Services Publics (theme-social)
    // -------------------------------------------------------------
    {
        id: "tractage_protection_enfance_rn",
        characterId: "opp_militant_rn_tractage",
        characterName: "Le Militant RN provocateur",
        tier: 2,
        scoreIndex: 40,
        theme: "theme-social",
        titre: "L'invective au coin du marché",
        description: "Pendant une session de tractage, un militant du Rassemblement national vient t'aboyer dessus devant les passants : « Vous refusez d'alourdir les peines contre les prédateurs d'enfants ! Vous protégez les pédophiles, assumez-le ! »",
        choix: [
            // =========================================================
            // CHOIX 1 : LE RENVOI DES AFFAIRES ET DU CANDIDAT CONDAMNÉ (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Balaye devant ta porte : votre parti a investi des candidats condamnés pour détention d'images pédopornographiques ! Votre morale à deux vitesses pue l'hypocrisie électorale ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : L'Agitateur Désarçonné (50%)
                outcomeSuccess: {
                    impact: { followers: 1500, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Face au rappel précis des faits et des investitures réelles de son mouvement, le militant devient rouge pivoine, bafouille et déguerpit sous les regards réprobateurs des badauds.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Lui rappeler les casseroles et les condamnations réelles des candidats RN sur le sujet, il a fui direct 💀🛑" },
                        { author: "Témoin Du Marché", handle: "@PlacePublique", text: "Le militant d'extrême droite qui voulait faire son cirque moralisateur et qui s'est fait sécher en deux phrases, propre." },
                        { author: "Samy", handle: "@Samy_off", text: "Quand on veut donner des leçons de justice, faut déjà vérifier le pedigree de ses propres listes." },
                        { author: "Inès", handle: "@Ines_Etu", text: "Recadrage net sans trembler devant la provocation, bravo pour le sang-froid." }
                    ]
                },
                
                // Issue B : L'Accrochage et la Rupture de Marché (50%)
                outcomeFailure: {
                    impact: { followers: -400, budget: -150, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Le ton monte brutalement. La sécurité du marché intervient pour dispersion immédiate. Tu dois payer 150 € d'amende municipale pour altercation et trouble de la tranquillité.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@GalereTractage", text: "Altercation avec un facho sur le marché, 150 balles de prune municipale pour trouble de tranquillité..." },
                        { author: "Veille Militante", handle: "@RiposteTerrain", text: "Le piège habituel de la surenchère verbale : ils provoquent et c'est le militant de gauche qui prend l'amende." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "150 balles de frais pour avoir répondu à un diffamateur, la police municipale a choisi son camp." },
                        { author: "Claire", handle: "@Claire_V", text: "Solidarité : ne jamais laisser leurs mensonges s'installer sur l'espace public." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE PLAN DE SECOURS ET DE PRÉVENTION MASSIVE (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Nous voulons des moyens réels : 10 000 éducateurs formés, le sauvetage de l'Aide Sociale à l'Enfance et un suivi psychologique intégralement pris en charge pour sauver les gosses. »",
                impact: { followers: 300, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Les passants s'arrêtent, écoutent et approuvent la nécessité d'agir sur la prévention et le soutien aux structures publiques. L'échange débouche sur un débat constructif et apaisé.",
                tweets: [
                    { author: "Collectif Enfance", handle: "@SauvonsLASE", text: "Mettre enfin les moyens sur la protection de l'enfance plutôt que sur les slogans répressifs : merci pour ce rappel 🤝👦" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Parler du sauvetage de l'Aide Sociale à l'Enfance et des soignants formés, c'est ça la vraie protection des victimes." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Répondre par des propositions concrètes et humaines au lieu de crier, les gens autour ont tout de suite compris." },
                    { author: "Fatou", handle: "@Fatou_L", text: "Une vraie discussion de fond sur le marché qui rassemble au lieu de diviser, très motivant pour la suite." }
                ]
            },

            // =========================================================
            // CHOIX 3 : L'ANALYSE DU PIÈGE DANS LE SILENCE INTRAFAMILIAL (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « 85 % des violences sont intrafamiliales : brandir la perpétuité sans moyens de détection arme le chantage des agresseurs sur les enfants et condamne les victimes au silence par peur de détruire le foyer. »",
                impact: { followers: 450, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "La rigueur criminologique et psychologique désamorce instantanément la calomnie. Des éducateurs et des juristes partagent l'échange, saluant une explication de fond courageuse et nécessaire.",
                tweets: [
                    { author: "Observatoire Justice", handle: "@CriminologieEtDroit", text: "Expliquer pourquoi la surenchère des peines sans accompagnement musèle les enfants victimes : argumentaire parfait et courageux 📑⚖️" },
                    { author: "Youssef", handle: "@Youssef_T", text: "Poser la réalité des chiffres intrafamiliaux pour faire taire la démagogie sécuritaire, niveau d'argumentation irréprochable." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "La protection des enfants exige de la lucidité scientifique, pas des coups de com' qui renforcent l'emprise des coupables." },
                    { author: "Alice", handle: "@Alice_Psy", text: "Démontrer le mécanisme d'omerta intrafamiliale avec cette clarté, un travail d'éducation populaire remarquable." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : TONTON MICHEL AU REPAS DE FAMILLE (Palier 2 — Score : 40 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Opposant
    // Thème : Émancipation, Féminisme & Droits Fondamentaux (theme-emancipation)
    // -------------------------------------------------------------
    {
        id: "conge_menstruel_tonton_michel",
        characterId: "opp_tonton_michel_repas",
        characterName: "Tonton Michel au dessert",
        tier: 2,
        scoreIndex: 40,
        theme: "theme-emancipation",
        titre: "Tonton Michel et le tabou menstruel",
        description: "Au dessert du dimanche, Tonton Michel balance son journal sur la table : « Maintenant elles veulent des congés payés pour leurs règles et des tampons gratuits ! Bientôt la Sécu va payer leurs crèmes de beauté ? »",
        choix: [
            // =========================================================
            // CHOIX 1 : LE MONOLOGUE BRUT SUR LA RÉALITÉ DES RÈGLES (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Le jour où tu saigneras pendant cinq jours d'affilée avec des crampes qui te plient en deux, des nausées, des migraines et 500 € par an de protections, tu viendras donner ton avis ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Silence de Plomb et la Victoire (50%)
                outcomeSuccess: {
                    impact: { followers: 1500, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Tonton Michel s'étouffe avec sa tarte, blêmit et se tait net. Tes cousines applaudissent sous la table et ton coup de gueule partagé sur les réseaux devient un hymne féministe.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Poser la réalité physique et financière des règles sans tabou devant le tonton réac, silence de mort à table 💀🩸" },
                        { author: "Cousine Solidaire", handle: "@FamilleLutte", text: "Le voir bégayer devant la description clinique des douleurs, merci pour le soulagement familial !" },
                        { author: "Samy", handle: "@Samy_off", text: "Remettre les réalités biologiques sous le nez de ceux qui parlent sans savoir, magistral." },
                        { author: "Inès", handle: "@Ines_Etu", text: "Casser le tabou des règles jusque dans les repas de famille, respect total pour le franc-parler." }
                    ]
                },
                
                // Issue B : La Crise à Table et la Casse Matérielle (50%)
                outcomeFailure: {
                    impact: { followers: -400, budget: -150, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Il tape du poing sur la table en criant à la vulgarité. La dispute explose, le café est renversé sur l'ordi familial et tu dois lâcher 150 € pour réparer le clavier.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@RepasDeFamilleEnfer", text: "Le repas de famille qui part en vrille totale dès qu'on parle de santé menstruelle, 150 balles de dégâts matériels." },
                        { author: "Veille Féministe", handle: "@SanteFemmes75", text: "La fragilité masculine à son paroxysme : hurler à la vulgarité pour ne pas affronter la douleur des femmes." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "150 balles de réparation parce qu'un adulte de 55 ans est incapable d'entendre le mot 'règles' sans exploser." },
                        { author: "Claire", handle: "@Claire_V", text: "Solidarité : déconstruire les tabous chez ses proches est souvent l'épreuve la plus usante." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE RAPPEL DU RESPECT DE LA VIE ET DES LIGNÉES (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Pense deux secondes à ta mère et à ta fille, Michel : sans ce cycle naturel, personne autour de cette table ne serait en vie aujourd'hui. Un peu de respect pour la santé des femmes de ta propre famille. »",
                impact: { followers: 300, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Touché sur la corde sensible et familiale, l'oncle baisse la tête sans trouver quoi répondre. L'ambiance reste sereine et le soutien complice de tes proches te redonne le sourire.",
                tweets: [
                    { author: "Pause Café Famille", handle: "@DimancheApaisé", text: "Rappeler calmement au tonton que sans cycle féminin il n'existerait même pas : l'argument imparable qui apaise tout le monde ☕❤️" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Désamorcer l'agressivité par le bon sens et l'attachement familial, la discussion s'est enfin calmée." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Garder son calme et toucher le cœur plutôt que d'entrer dans son jeu, ça préserve toute l'énergie." },
                    { author: "Fatou", handle: "@Fatou_L", text: "La complicité avec les tantes et les cousines à la fin du repas, le meilleur remontant possible." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LA COMPARAISON AVEC LES TRAITEMENTS MASCULINS (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « La Sécu rembourse intégralement les prothèses péniennes, le traitement de l'érection sous ordonnance et les opérations de confort masculin, mais les protections menstruelles de base seraient du luxe ? »",
                impact: { followers: 450, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "La comparaison clinique avec la prise en charge des dysfonctions érectiles et du confort masculin coupe court à toute mauvaise foi. Les données officielles de l'Assurance Maladie mettent tout le monde d'accord.",
                tweets: [
                    { author: "Observatoire Sécu", handle: "@DroitALaSantePourTous", text: "Comparer le remboursement de la santé masculine à l'absence de prise en charge des serviettes : la preuve comptable du deux poids deux mesures 📑💡" },
                    { author: "Youssef", handle: "@Youssef_T", text: "Poser les textes de l'Assurance Maladie sur la table du salon : le tonton est resté sans voix face aux faits." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "La démonstration par les remboursements de santé existants, c'est net, sourcé et imparable." },
                    { author: "Élise", handle: "@Elise_Droits", text: "Quand les données médico-économiques détruisent les préjugés sexistes en une minute chrono." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : L'INFLUENCEUR MASCULINISTE (Palier 2 — Score : 40 / 100)
    // Rareté : Pop-Culture / Réseaux | Alignement : Opposant
    // Thème : Émancipation, Féminisme & Droits Fondamentaux (theme-emancipation)
    // -------------------------------------------------------------
    {
        id: "pride_masculiniste_fragilite",
        characterId: "opp_influenceur_masculiniste",
        characterName: "L'Influenceur masculiniste",
        tier: 2,
        scoreIndex: 40,
        theme: "theme-emancipation",
        titre: "La panique morale devant la Pride",
        description: "En story, un créateur masculiniste aux muscles saillants filme le défilé de la Pride : « À quoi ça sert leur cirque ? Ils veulent détruire les repères virils et imposer leur idéologie partout dans l'espace public ! »",
        choix: [
            // =========================================================
            // CHOIX 1 : L'ATTAQUE FRONTALE SUR LA FRAGILITÉ VIRILE (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Si ta masculinité s'effondre devant trois paillettes et un drapeau arc-en-ciel, c'est pas la société qui a un problème, c'est ton ego en mousse ! Arrête de chialer et consulte ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : L'Influenceur Ridiculisé (50%)
                outcomeSuccess: {
                    impact: { followers: 1500, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "La réponse est reprise par des milliers de comptes. Ridiculisé devant sa commu muscu, l'influenceur supprime sa story en catastrophe face à l'avalanche de moqueries.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Cadrer les influenceurs virilistes sur leur insécurité permanente face à la Pride, il a désactivé ses stories en 10 minutes 💀💅" },
                        { author: "Adepte Du Zinc", handle: "@MuscuSansTox", text: "Avoir des pecs de 110 cm et paniquer devant un défilé de danseurs, la fragilité absolue." },
                        { author: "Samy", handle: "@Samy_off", text: "Le gars a passé sa vie à faire des tractions pour finir traumatisé par des confettis." },
                        { author: "Inès", handle: "@Ines_Etu", text: "Pointer du doigt la trouille des masculinistes dès qu'on sort de leurs cases étriquées, salutaire." }
                    ]
                },
                
                // Issue B : Le Harcèlement de Salle de Sport (50%)
                outcomeFailure: {
                    impact: { followers: -400, budget: -150, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Sa commu de fans toxiques organise un harcèlement ciblé sur tes comptes avec menaces physiques en MP. Tu dois lâcher 150 € pour porter plainte et faire constater les messages d'intimidation.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@StopCyberHaine", text: "Vague d'insultes de gros bras insécures après avoir recadré leur gourou muscu, 150 balles de constat d'huissier." },
                        { author: "Veille LGBT+", handle: "@PrideVigilance", text: "La haine viriliste qui bascule immédiatement dans la menace physique dès qu'on conteste leurs délires." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "150 balles pour sécuriser mes réseaux face à une meute de faux profils dopés aux protéines, l'enfer." },
                        { author: "Claire", handle: "@Claire_V", text: "Solidarité totale face aux attaques coordonnées des sphères masculinistes." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LA CÉLÉBRATION FESTIVE ET L'INVITATION À LÂCHER PRISE (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « La Pride c'est la fête, la musique et le droit de vivre sans masque : viens danser sur le char avec nous au lieu de serrer la mâchoire tout seul dans ta salle de muscu ! »",
                impact: { followers: 300, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "L'invitation bienveillante désamorce toute agressivité. Tu rejoins le cortège au son des basses, porté par la joie collective, les couleurs et les sourires de milliers de personnes fières.",
                tweets: [
                    { author: "Cortège En Fête", handle: "@PrideVibes", text: "Répondre à la haine par la fête et la danse collective sur le char : la meilleure énergie du monde 🏳️‍🌈🎶" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Lâcher prise au milieu de milliers de personnes libres et souriantes, ça guérit de toute la négativité des réseaux." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "La joie et la liberté sont nos meilleures armes face aux coincés du bulbe." },
                    { author: "Fatou", handle: "@Fatou_L", text: "Un après-midi magique qui recharge les batteries pour les six prochains mois !" }
                ]
            },

            // =========================================================
            // CHOIX 3 : LES DONNÉES MONDIALES ET LA RÉALITÉ DES VIOLENCES (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Ce n'est pas une idéologie, c'est de la survie : 64 pays criminalisent encore l'homosexualité, une dizaine appliquent la peine de mort, et les agressions physiques explosent chaque année en France. »",
                impact: { followers: 450, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "Le rappel des rapports de l'ILGA et du ministère de l'Intérieur est imparable. Ton thread est salué par des associations de défense des droits humains pour sa clarté pédagogique.",
                tweets: [
                    { author: "Droits Humains", handle: "@ILGA_Watch", text: "64 pays avec des lois pénales, peine de mort et agressions en hausse : les chiffres qui rappellent pourquoi la lutte est vitale 📑🏳️‍🌈" },
                    { author: "Youssef", handle: "@Youssef_T", text: "Rappeler le cadre pénal international et les risques réels vécus au quotidien : démonstration limpide." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Quand on oppose la réalité du droit international et des violences aux délires conspirationnistes, il n'y a plus de débat." },
                    { author: "Camille", handle: "@Camille_Soc", text: "Un rappel statistique d'utilité publique qui donne toute sa dimension politique et historique à la Pride." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : LE COLLECTIF COP'1 (Palier 2 — Score : 40 / 100)
    // Rareté : Terrain / Quotidien | Alignement : Neutre / Allié
    // Thème : Justice Sociale, Travail & Services Publics (theme-social)
    // -------------------------------------------------------------
    {
        id: "visibilite_solidarite_etudiante_cop1",
        characterId: "allie_benevole_cop1",
        characterName: "Le Bénévole de Cop'1",
        tier: 2,
        scoreIndex: 40,
        theme: "theme-social",
        titre: "Faire résonner la précarité étudiante",
        description: "L'association de solidarité étudiante Cop'1 te propose de porter leur combat dans le débat public : un étudiant sur deux saute des repas faute de budget, et les files d'attente s'allongent.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE PORTE-À-PORTE D'INTERPELLATION DANS LES BEAUX QUARTIERS (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Va tracter au pied des hôtels particuliers du 16e arrondissement : mettez la faim des étudiants sous les yeux de ceux qui concentrent la rente immobilière ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : L'Extrait Viral du Décalage Social (50%)
                outcomeSuccess: {
                    impact: { followers: 1500, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "La vidéo de confrontation polie mais cinglante face aux millionnaires qui refusent 5 € cartonne sur TikTok. La visibilité de Cop'1 bondit de 30 % en vingt-quatre heures.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Les héritiers de Neuilly qui bégayent face aux paniers repas de @cop1solidarites, le contraste est terrifiant 💀🥖" },
                        { author: "Étudiant Fanné", handle: "@FinDeMoisDèsLe5", text: "Leurs montres valent trois ans de notre budget bouffe. Bravo pour être allé leur rappeler la réalité !" },
                        { author: "Samy", handle: "@Samy_off", text: "La vidéo fait un bien fou : confronter l'arrogance des beaux quartiers sans filtre." },
                        { author: "Inès", handle: "@Ines_Etu", text: "Mettre la lutte des classes en images directes sur le trottoir, masterclass de com' de terrain." }
                    ]
                },
                
                // Issue B : L'Expulsion par la Sécurité Privée (50%)
                outcomeFailure: {
                    impact: { followers: -400, budget: -150, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Les vigiles privés des résidences appellent la brigade anticriminalité. Tu es contrôlé, refoulé du secteur et écope de 150 € d'amende pour quête non autorisée sur la voie publique.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@QuartiersBlindés", text: "Vigiles et police dès qu'on évoque la faim dans les quartiers riches, 150 balles de prune." },
                        { author: "Solidarité Jeunesse", handle: "@PrecariteZero", text: "Considérer des bénévoles qui parlent de solidarité comme une menace sécuritaire, quelle honte." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "150 balles d'amende pour avoir osé sonner chez des rentiers pour une asso étudiante, lunaire." },
                        { author: "Claire", handle: "@Claire_V", text: "Solidarité : la bourgeoisie défend ses trottoirs à coups de police municipale." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LA SENSIBILISATION DIRECTE DANS LES ÉTABLISSEMENTS (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Monte une tournée de sensibilisation dans les lycées et universités : distributions de kits d'urgence, écoute bienveillante et bris de la honte de la précarité. »",
                impact: { followers: 300, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "L'accueil est chaleureux et solidaire. Libérer la parole sur la galère des fins de mois sans jugement crée une vague de soutien mutuel qui recharge le moral des équipes.",
                tweets: [
                    { author: "Lycéen Solidaire", handle: "@CampusEntraide", text: "Parler ouvertement de nos galères de thunes sans tabou ni honte dans le hall de la fac, ça fait un bien fou 🤝📦" },
                    { author: "Sarah", handle: "@Sarah_K", text: "La solidarité concrète entre jeunes, les sourires pendant la distribution : le vrai cœur militant est là." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Voir des dizaines d'élèves s'inscrire pour devenir bénévoles à leur tour, immense dose d'énergie." },
                    { author: "Fatou", handle: "@Fatou_L", text: "L'auto-organisation étudiante en action : aucune leçon de morale, juste de l'entraide pure." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE DOSSIER VIDÉO DOCUMENTÉ SUR LA CASSE SOCIALE (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Réalise une vidéo d'enquête fouillée : croise les données de l'INSEE sur la pauvreté des 18-25 ans et démontre l'échec structurel des bourses du CROUS actuelles. »",
                impact: { followers: 450, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "Le travail d'investigation rigoureux est salué par la communauté universitaire et plusieurs médias indépendants, imposant le revenu d'autonomie dans le débat politique.",
                tweets: [
                    { author: "Revue Sociale", handle: "@EnquêtesPubliques", text: "L'enquête vidéo sur la faillite du système de bourses et le travail étudiant subi : travail rigoureux et accablant 📑📊" },
                    { author: "Youssef", handle: "@Youssef_T", text: "Démontrer par les chiffres de l'INSEE que la faim étudiante est une décision politique, dossier en béton armé." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Mettre la lumière sur le travail invisible de Cop'1 avec une analyse macro-économique sérieuse, bravo." },
                    { author: "Nabil", handle: "@Nabil_Med", text: "Quand les données scientifiques viennent appuyer l'urgence du terrain, les ministères n'ont plus d'excuses." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : VINCENT LAPIERRE (Palier 2 — Score : 40 / 100)
    // Rareté : Terrain / Vidéaste | Alignement : Opposant
    // Thème : Neutre / Médias & Satire (theme-neutre)
    // -------------------------------------------------------------
    {
        id: "micro_trottoir_vincent_lapierre",
        characterId: "opp_vincent_lapierre",
        characterName: "Vincent Lapierre",
        tier: 2,
        scoreIndex: 40,
        theme: "theme-neutre",
        titre: "L'art du micro-trottoir sauvage",
        description: "Au coin d'une avenue passante, le reporter identitaire Vincent Lapierre déambule avec son cadreur et son micro, cherchant des passants à cuisiner pour sa chaîne YouTube d'extrême droite.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE SURGISSEMENT DU BUISSON (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Cache-toi derrière un massif de haies, attends patiemment qu'il arrive à ta hauteur et surgis d'un coup sec en criant : 'BOUH !' »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Sursaut Mémorable et le Mème Viral (50%)
                outcomeSuccess: {
                    impact: { followers: 1500, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Pris par surprise, le reporter sursaute de façon spectaculaire avant d'esquisser un rire gêné face caméra. La séquence coupée tourne en boucle sur TikTok et devient le mème du mois.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Le saut de deux mètres de Lapierre quand le buisson a crié 'BOUH !' j'ai les larmes aux yeux 💀🌿" },
                        { author: "Roi Du Mème", handle: "@HumourSauvage", text: "La réf est validée, le cadrage est parfait, la séquence du sursaut est déjà immortelle." },
                        { author: "Samy", handle: "@Samy_off", text: "Désamorcer le sérieux des polémistes de droite par un simple 'Bouh', le génie absolu." },
                        { author: "Inès", handle: "@Ines_Etu", text: "Le moment le plus drôle de l'année sur les réseaux, son cadreur rigolait lui-même." }
                    ]
                },
                
                // Issue B : L'Accusation d'Agression et la Meute Numérique (50%)
                outcomeFailure: {
                    impact: { followers: -400, budget: -150, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Lapierre sursaute, panique et hurle à l'attaque physique coordonnée. Sa chaîne monte la scène en séquence d'agression dramatique. Tu dois payer 150 € pour sécuriser tes accès face aux raids.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@RaidIdentitaire", text: "Crier 'Bouh' requalifié en embuscade paramilitaire dans leur vidéo YouTube, 150 balles de sécurisation informatique." },
                        { author: "Front Vidéo", handle: "@MediaPatriote", text: "Nouvelle agression scandaleuse contre notre équipe de reportage par des militants masqués dans la végétation !" },
                        { author: "Léo", handle: "@Leo_Mlt", text: "150 balles de frais parce qu'un adulte a eu peur d'une feuille qui bouge, le niveau zéro de la virilité." },
                        { author: "Claire", handle: "@Claire_V", text: "Jouer les victimes martiales après avoir sursauté sur un trottoir, leur fond de commerce habituel." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LA VISITE IMMERSIVE DES RÉALITÉS POPULAIRES (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Propose-lui de ranger son micro pour venir rencontrer des familles et des collectifs d'entraide dans les cités voisines, pour voir la vraie solidarité à l'œuvre. »",
                impact: { followers: 300, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Après quelques réticences, il accepte de visiter un local solidaire sans caméra. L'échange franc et humain avec les mères de famille et les assos locales bouscule ses certitudes et apaise la tension.",
                tweets: [
                    { author: "Collectif Quartier", handle: "@EntraidePopulaire", text: "Ouvrir les portes et montrer la réalité de l'entraide sans filtre : les préjugés n'ont pas tenu une heure 🤝☕" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Faire tomber le sensationnalisme par la réalité brute de la vie des gens, une démarche forte." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Discuter calmement autour d'un thé et voir des barrières idéologiques vaciller, ça redonne foi en l'humain." },
                    { author: "Fatou", handle: "@Fatou_L", text: "La rencontre réelle sur le terrain plutôt que le clash stérile : la meilleure manière d'agir." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE DÉTOURNEMENT DE CHAMP VERS LE QR CODE SOLIDAIRE (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Réponds poliment à ses questions tout en brandissant bien en vue un QR code renvoyant vers la cagnotte d'urgence de l'association La Cloche pour les sans-abri. »",
                impact: { followers: 450, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "La vidéo fait des centaines de milliers de vues sur sa chaîne. Les spectateurs amusés par l'audace du piratage visuel flashent le code : plusieurs milliers d'euros sont récoltés pour les sans-abri.",
                tweets: [
                    { author: "Détournement Réussi", handle: "@HackCitoyen", text: "Détourner le champ de caméra de Lapierre pour financer les kits d'hiver de @LaClocheAsso : coup de maître 📑📲" },
                    { author: "Youssef", handle: "@Youssef_T", text: "Utiliser l'audimat d'extrême droite pour lever des fonds en direct pour les plus démunis, piratage de génie." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Transformer un piège médiatique en levée de fonds d'intérêt général : méthode irréprochable et efficace." },
                    { author: "Solène", handle: "@Solene_Action", text: "L'intelligence tactique en direct sur le web : du grand art militant !" }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : JEAN-MARC JANCOVICI (Palier 3 — Score : 60 / 100)
    // Rareté : Expert / Conférencier | Alignement : Neutre / Allié
    // Thème : Écologie, Vivant & Territoires (theme-ecologie)
    // -------------------------------------------------------------
    {
        id: "conference_jancovici_limites_physiques",
        characterId: "allie_jean_marc_jancovici",
        characterName: "Jean-Marc Jancovici",
        tier: 3,
        scoreIndex: 60,
        theme: "theme-ecologie",
        titre: "La leçon de physique de Jancovici",
        description: "Tu assistes à une grande conférence de Jean-Marc Jancovici sur la transition énergétique. Salle comble : devant graphiques et lois thermodynamiques, il démontre l'impossibilité d'une croissance infinie dans un monde clos.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE BRÛLOT VIDÉO CONTRE LE CAPITALISME THERMIQUE (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Poste une vidéo brûlante en sortie d'amphi : 'Jancovici prouve la fin du modèle. Les multinationales fossiles et leurs actionnaires sont des criminels en sursis !' »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : L'Offensive Populaire Déferlante (50%)
                outcomeSuccess: {
                    impact: { followers: 2000, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "La vidéo frappe fort et vite : le pont entre la rigueur de Jancovici et la colère politique radicale enflamme les réseaux. Le compteur de partages explose.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Traduire la thermodynamique de Jancovici en manifeste anticapitaliste clair et net, le post a mis le feu 💀⚡" },
                        { author: "Ingénieur Déter", handle: "@ShiftEtLutte", text: "Relier les limites physiques à la prédation des dividendes fossiles, démonstration implacable." },
                        { author: "Samy", handle: "@Samy_off", text: "Le choc entre la froideur des chiffres et la révolte sociale, 200k vues en 3 heures." },
                        { author: "Inès", handle: "@Ines_Etu", text: "C'est exactement cette synthèse qu'il faut porter pour secouer l'opinion." }
                    ]
                },
                
                // Issue B : La Cabale des Plateaux Réacs (50%)
                outcomeFailure: {
                    impact: { followers: -500, budget: -200, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Les plateaux d'extrême droite récupèrent ton clip pour dénoncer 'l'écoterrorisme d'extrême gauche qui instrumentalise la science'. Tu engages 200 € de frais pour sécuriser tes contenus face aux vagues de signalements.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@CibleDesPlateaux", text: "Passage en boucle chez Morandini pour avoir parlé de crime climatique, 200 balles de sécurisation juridique." },
                        { author: "Chroniqueur Énervé", handle: "@Editocrate", text: "Encore des agitateurs qui détournent les calculs d'ingénieurs pour justifier le sabotage économique !" },
                        { author: "Léo", handle: "@Leo_Mlt", text: "200 balles de frais parce que des éditorialistes fossiles ne supportent pas la loi de conservation de l'énergie." },
                        { author: "Claire", handle: "@Claire_V", text: "Solidarité : leur panique idéologique face aux vérités physiques les rend hystériques." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LA QUESTION SUR LE TRAVAIL ET LA PLANIFICATION (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Prends le micro dans la salle : interroge-le sur la réorganisation du travail manuel et des services publics dans une société sans pétrole abondant. »",
                impact: { followers: 400, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Jancovici salue une question essentielle et déroule dix minutes de réponse passionnante sur le retour des métiers de bras valorisés. L'amphi t'applaudit et la discussion te regonfle à bloc.",
                tweets: [
                    { author: "Étudiant Amphi", handle: "@SciencesEtAvenir75", text: "La question posée à Jancovici sur la revalorisation du travail manuel dans un monde bas-carbone : moment d'anthologie 👏🌿" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Penser concrètement l'après-pétrole pour les classes populaires au lieu des clichés technologiques, un régal." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Un échange d'une intelligence rare, ça fait du bien de respirer loin du bruit des polémiques." },
                    { author: "Fatou", handle: "@Fatou_L", text: "Sortir de la conférence avec les idées claires et le moral au sommet : énorme boost d'énergie." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE FACE-CAMÉRA SUR LE CONCEPT D'ESCLAVES ÉNERGÉTIQUES (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Demande-lui un face-caméra : vulgarisez le concept des 'esclaves énergétiques', prouvant que chaque Français consomme la puissance équivalente à 400 corps humains au travail. »",
                impact: { followers: 600, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "Jancovici accepte volontiers l'exercice. La pastille courte, dense et pédagogique frappe les esprits : elle devient une ressource scolaire et associative partagée par des milliers d'enseignants.",
                tweets: [
                    { author: "Pédagogie Climat", handle: "@ThermoPourTous", text: "Le concept des 400 esclaves énergétiques expliqué en 90 secondes avec @JMJancovici : limpide, éducatif et incontestable 📑💡" },
                    { author: "Youssef", handle: "@Youssef_T", text: "Faire comprendre la dépendance totale de notre civilisation aux machines par une analogie physique : masterclass." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "La crédibilité scientifique au service de l'éducation populaire, c'est du travail irréprochable." },
                    { author: "Hélène", handle: "@Helene_Prof", text: "Vidéo déjà partagée à mes élèves de terminale pour le cours sur les transitions énergétiques. Bravo !" }
                ]
            }
        ]
    },

    // -------------------------------------------------------------
    // PERSONNAGE : LE PLATEAU DE CNEWS (Palier 3 — Score : 60 / 100)
    // Rareté : Télévision / Médias | Alignement : Opposant
    // Thème : Contre-Pouvoir, Médias & Antifascisme (theme-antifa)
    // -------------------------------------------------------------
    {
        id: "piege_plateau_cnews_empire_bollore",
        characterId: "opp_presentateur_cnews",
        characterName: "Le Présentateur vedette de CNews",
        tier: 3,
        scoreIndex: 60,
        theme: "theme-antifa",
        titre: "Dans la fosse aux lions de CNews",
        description: "Invité sous prétexte de débattre de la jeunesse militante, tu découvres en régie le traquenard : six chroniqueurs d'extrême droite et de Valeurs Actuelles alignés autour de la table pour t'abattre en direct.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE DYNAMITAGE DE L'EMPIRE BOLLORÉ EN DIRECT (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Prends la parole dès la première question : balance en direct les scandales portuaires au Togo et en Guinée, le rachat prédateur de l'édition et la fabrique industrielle de la haine par Vincent Bolloré ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Sabotage Parfait et l'Expulsion Historique (50%)
                outcomeSuccess: {
                    impact: { followers: 2000, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Panique générale sur le plateau : le présentateur bafouille, hurle à l'outrage et coupe le signal pour lancer la pub pendant que la sécurité te sort du studio. La séquence non censurée prise au smartphone embrase le web.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Rappeler les affaires de corruption portuaire de Bolloré en Afrique en direct sur sa propre chaîne, moment historique 💀📺" },
                        { author: "Acrimed Officiel", handle: "@CritiqueMedias", text: "Faire sauter le verrou du silence éditorial sur le propriétaire de CNews en plein direct : du grand art militant." },
                        { author: "Samy", handle: "@Samy_off", text: "Le présentateur qui hurle pour couper l'antenne, ils n'ont pas assumé deux minutes de vérité." },
                        { author: "Inès", handle: "@Ines_Etu", text: "Aller dans la fosse aux lions pour leur cracher leurs casseroles au visage, respect éternel." }
                    ]
                },
                
                // Issue B : La Répression Judiciaire et Financière (50%)
                outcomeFailure: {
                    impact: { followers: -500, budget: -200, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Les juristes du groupe Vivendi déclenchent immédiatement une assignation pour diffamation et préjudice d'image. Tu dois avancer 200 € d'honoraires pour préparer ta défense avec un avocat du droit de la presse.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@BolloreProcès", text: "Assigné par les avocats de Vivendi pour avoir cité des décisions judiciaires publiques, 200 balles de frais de défense." },
                        { author: "Veille Presse", handle: "@LiberteInformer", text: "L'intimidation financière par les procédures-bâillons : la signature des milliardaires des médias." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "200 balles de frais d'avocat pour avoir nommé les ports africains, la justice des puissants en marche." },
                        { author: "Claire", handle: "@Claire_V", text: "Solidarité totale face à la machine judiciaire du groupe Bolloré." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE REFUS DU CIRQUE ET LE DÉPARTEUIL AVEC L'ÉQUIPE TECHNIQUE (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Dépose ton oreillette sur la table avant le jingle : salue chaleureusement les cadreurs et intermittents en coulisses et quitte le studio en dénonçant la mascarade sans leur donner une seconde de show. »",
                impact: { followers: 400, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Les techniciens te sourient avec connivence en te voyant claquer la porte. Laisser le plateau planté à la dernière minute avec un siège vide te procure un sentiment de victoire jubilatoire.",
                tweets: [
                    { author: "Technicien Médias", handle: "@RegieEnColère", text: "Planter le direct à 30 secondes du jingle et laisser les éditorialistes meubler dans le vide, merci pour ce fou rire 🚪☕" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Ne pas leur servir de punching-ball et garder toute sa force pour les vraies luttes : décision parfaite." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Le siège vide qui parle plus fort que tous leurs discours de haine réunis." },
                    { author: "Fatou", handle: "@Fatou_L", text: "La dignité face aux marchands de clash, un vrai soulagement pour le moral." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE DÉMONTAGE DU MONOPOLE ET DU CONTRÔLE DE L'ARCOM (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Reste calme et sors les rapports de l'Arcom : démontre en chiffres le temps de parole trusté par l'extrême droite et la concentration verticale des médias et de l'édition par un seul conglomérat. »",
                impact: { followers: 600, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "Les données officielles de l'autorité de régulation et les pourcentages de sanctions répétées clouent le bec des éditorialistes. L'échange devient une référence incontournable sur la pluralité médiatique.",
                tweets: [
                    { author: "Observatoire Médias", handle: "@PluralismeReel", text: "Aligner les données officielles de l'Arcom et les sanctions financières de CNews sous les yeux des éditorialistes : implacable 📑📺" },
                    { author: "Youssef", handle: "@Youssef_T", text: "Poser les chiffres de concentration de Vivendi sans s'énerver : le présentateur n'a pas su quoi opposer aux faits." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Une démonstration technique sur les monopoles d'opinion qui force le respect même des adversaires." },
                    { author: "Camille", handle: "@Camille_Soc", text: "Casser leur rhétorique par les rapports institutionnels de l'État : niveau d'exigence politique parfait." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : ROBERT MÉNARD (Palier 3 — Score : 60 / 100)
    // Rareté : Maire / Polémiste | Alignement : Opposant
    // Thème : Contre-Pouvoir, Médias & Antifascisme (theme-antifa)
    // -------------------------------------------------------------
    {
        id: "feria_beziers_post_menard",
        characterId: "opp_robert_menard",
        characterName: "Robert Ménard",
        tier: 3,
        scoreIndex: 60,
        theme: "theme-antifa",
        titre: "La litanie réac de la Feria de Béziers",
        description: "En pleine Feria de Béziers, Robert Ménard publie sur Instagram son manifeste d'un autre siècle : « On aime la messe, on aime les femmes, on aime les taureaux, on aime les flics... et on aime Sardou ! » Ton clavier démange.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CHOC SARDOU & L'APOLOGIE DU VIOL (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « 'On aime les femmes' et 'on aime Sardou' dans le même souffle ? Le même Sardou qui chantait vouloir 'violer des femmes' ? Votre beaufitude rance valide la culture du viol ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Bégaiement Municipal (50%)
                outcomeSuccess: {
                    impact: { followers: 2000, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Ton commentaire est propulsé en tête avec des milliers de mentions 'J'aime'. Incapable de justifier les paroles de son idole, le maire masque les commentaires sous les rires moqueurs du web.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Rappeler les textes immondes de Sardou sous le post patriarcal de Ménard, le roi de Béziers a éteint son téléphone 💀🍷" },
                        { author: "Féministe Du Sud", handle: "@RiposteOccitane", text: "Prétendre aimer les femmes tout en glorifiant des hymnes sexistes et la torture des taureaux : hypocrisie totale dégagée en un tweet." },
                        { author: "Samy", handle: "@Samy_off", text: "Ménard qui supprime les coms en panique, le coup de pied dans la fourmilière était parfait." },
                        { author: "Inès", handle: "@Ines_Etu", text: "Le vernis folklorique qui craque direct dès qu'on pose les vrais mots sur leur nostalgie toxique." }
                    ]
                },
                
                // Issue B : La Rétorsion Municipale et le Blocage (50%)
                outcomeFailure: {
                    impact: { followers: -500, budget: -200, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "La com' municipale te bloque et transmet ton identité pour diffamation de la ville. Tu débourseras 200 € en conseils juridiques pour faire annuler un signalement abusif.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@DefenseNumérique", text: "Menacé de poursuites par la mairie de Béziers pour avoir cité les paroles d'une chanson, 200 balles d'avocat..." },
                        { author: "Observatoire Libertés", handle: "@PoliceEtPouvoir", text: "L'intimidation institutionnelle d'un maire qui utilise l'appareil municipal pour faire taire les voix féministes." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "200 balles de frais pour avoir mis Ménard devant ses propres incohérences textuelles, du délire." },
                        { author: "Claire", handle: "@Claire_V", text: "Solidarité : les nostalgiques de l'ordre moral n'acceptent jamais qu'on leur renvoie leur miroir." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE MÉPRIS LACONIQUE ET TRANQUILLE (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Réponds simplement par deux mots en commentaire : 'Qui t'a demandé ?' et coupe tes notifications pour aller boire un verre au soleil avec les potes. »",
                impact: { followers: 400, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Ton 'ratio' laconique dépasse en quelques heures le nombre de likes de son propre post. L'absurdité de sa tirade s'effondre sans effort et tu passes une soirée détendue sans la moindre prise de tête.",
                tweets: [
                    { author: "Adepte Du Chill", handle: "@RatioSauvage", text: "Un simple 'Qui t'a demandé ?' pour humilier 50 ans de rhétorique réac sur Instagram, chef-d'œuvre de sobriété 🍷😎" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Ne pas lui donner l'attention dont il raffole et le renvoyer à son insignifiance : repos total." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Le ratio le plus propre et économique de l'année, respect éternel." },
                    { author: "Fatou", handle: "@Fatou_L", text: "Éteindre un égo surdimensionné en trois secondes sans transpirer, c'est ça qu'on veut." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE DÉMONTAGE DU SUPPLICE ANIMAL EN CORRIDA (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « 'Aimer les taureaux' en applaudissant leur lente agonie à coups de piques et d'épées ? Célébrer la torture publique d'un être sentient n'a rien d'une tradition culturelle. »",
                impact: { followers: 600, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "L'argumentation vétérinaire et éthique résonne largement. Des collectifs anti-corrida et des juristes partagent ta réponse pour rappeler que 75 % des Français réclament l'interdiction de ces spectacles.",
                tweets: [
                    { author: "Éthique Animale", handle: "@FinDeLaCorrida", text: "Démystifier le mensonge d''aimer les taureaux' quand on organise leur supplice sanglant : mise au point indispensable 📑🐂" },
                    { author: "Youssef", handle: "@Youssef_T", text: "Rappeler la réalité de la souffrance animale sans tomber dans l'invective : Ménard s'est pris le mur de la raison." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "L'éthique et la science face au sadisme déguisé en folklore, la cause avance d'un pas net." },
                    { author: "Camille", handle: "@Camille_Soc", text: "Une démonstration impeccable qui remet la cruauté institutionnalisée à sa vraie place : le passé." }
                ]
            }
        ]
    },

    // -------------------------------------------------------------
    // PERSONNAGE : L'ASSOCIATION GÉNÉRATION LUMIÈRE (Palier 3 — Score : 60 / 100)
    // Rareté : International / ONG | Alignement : Neutre / Allié
    // Thème : Émancipation, Féminisme & Droits Fondamentaux (theme-emancipation)
    // -------------------------------------------------------------
    {
        id: "congo_rdc_generation_lumiere_extractivisme",
        characterId: "allie_generation_lumiere",
        characterName: "Le Porte-Parole de Génération Lumière",
        tier: 3,
        scoreIndex: 60,
        theme: "theme-emancipation",
        titre: "Congo : le coût humain de nos batteries",
        description: "Tu rencontres l'équipe de Génération Lumière, engagée pour la justice environnementale en RDC. Face aux massacres à l'Est du pays et au silence médiatique en France, vous décidez de briser l'omerta.",
        choix: [
            // =========================================================
            // CHOIX 1 : L'ACCUSATION DE LA COMPLICITÉ AVEC KAGAME (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Dénonce frontalement l'accueil d'État réservé à Paul Kagame à Paris : le gouvernement déroule le tapis rouge au parrain des milices du M23 qui ensanglantent l'Est congolais ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : L'Électrochoc Politique et Diplomatique (50%)
                outcomeSuccess: {
                    impact: { followers: 2000, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "La vidéo confronte l'hypocrisie de la diplomatie française avec des preuves accablantes de l'ONU. Le clip fait le tour de la diaspora et pousse plusieurs députés à interpeller le Quai d'Orsay.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Mettre le nez de la diplomatie française dans sa complaisance avec Kagame pendant le massacre au Congo, frappe chirurgicale 💀🇨🇩" },
                        { author: "Diaspora Congolaise", handle: "@DeboutCongo", text: "Merci de briser ce silence complice en France. Le sang congolais ne doit plus couler dans l'indifférence !" },
                        { author: "Samy", handle: "@Samy_off", text: "Le Quai d'Orsay qui bégaie face aux rapports de l'ONU cités dans la vidéo, le travail est monumental." },
                        { author: "Inès", handle: "@Ines_Etu", text: "Nommer les responsables géopolitiques réels au lieu de parler d'un 'conflit ethnique lointain', Bravo !" }
                    ]
                },
                
                // Issue B : La Censure Algorithmique et le Shadowban (50%)
                outcomeFailure: {
                    impact: { followers: -500, budget: -200, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Visée par des signalements diplomatiques, la plateforme bride la portée de la vidéo pour 'contenu politique sensible'. Tu dois débourser 200 € en outils de diffusion alternatifs.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@CensureEnLigne", text: "Shadowban immédiat dès qu'on touche à la politique africaine de l'Élysée, 200 balles de frais de relance de réseau." },
                        { author: "Veille Géopolitique", handle: "@AfriqueVerite", text: "Le filtrage algorithmique tourne à plein régime quand on documente les soutiens militaires rwandais au M23." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "200 balles pour contourner la censure sur la tragédie du Kivu, l'impunité est totale." },
                        { author: "Claire", handle: "@Claire_V", text: "Solidarité : le courage de dénoncer les compromissions de l'État se paie toujours cher." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LA VALORISATION DES RÉSISTANCES ET DE LA FORÊT CONGOLAISE (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Tourne une capsule positive sur les héros du quotidien : les communautés locales qui protègent le bassin du Congo, deuxième poumon vert de la planète, avec Génération Lumière. »",
                impact: { followers: 400, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "La vidéo met en lumière la beauté des écosystèmes et la force des activistes sur place. Loin du misérabilisme, ce récit d'espoir et de courage solidaire redonne une énergie incroyable.",
                tweets: [
                    { author: "Écologie Panafricaine", handle: "@PoumonVertCongo", text: "Voir la jeunesse congolaise défendre la forêt équatoriale avec @Gen_Lumiere, quelle fierté et quelle force 🌿✊" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Sortir des récits de désespoir pour montrer ceux qui construisent l'avenir sur le terrain, inspirant au possible." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Un shoot d'espoir et de détermination collective qui rappelle pour quoi on se bat." },
                    { author: "Fatou", handle: "@Fatou_L", text: "La solidarité internationale dans ce qu'elle a de plus beau et de plus digne, un immense bol d'air." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE DÉCRYPTAGE DE L'EXTRACTIVISME ET DU COBALT (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Publie une enquête vidéo sur l'extractivisme : montre comment le néocolonialisme pille le cobalt et le coltan pour nos smartphones en condamnant les mineurs artisanaux à la misère. »",
                impact: { followers: 600, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "L'explication claire et documentée du concept d'extractivisme et de la chaîne de valeur des multinationales de la tech devient virale dans les milieux universitaires et militants.",
                tweets: [
                    { author: "Économie Politique", handle: "@MatièresPremières", text: "Définir l'extractivisme avec l'exemple concret des mines de cobalt en RDC : travail de vulgarisation magistral 📑🔋" },
                    { author: "Youssef", handle: "@Youssef_T", text: "Faire le lien direct entre nos téléphones en Occident et l'exploitation coloniale des ressources congolaises, net et limpide." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "La rigueur économique au service de la libération des peuples : une ressource pédagogique indispensable." },
                    { author: "Hawa", handle: "@Hawa_Droits", text: "Comprendre les racines matérielles de la guerre pour mieux la combattre, bravo pour ce travail de fond." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : PASCAL PRAUD (Palier 3 — Score : 60 / 100)
    // Rareté : Télévision / Animateur | Alignement : Opposant
    // Thème : Écologie, Vivant & Territoires (theme-ecologie)
    // -------------------------------------------------------------
    {
        id: "climatoscepticisme_pascal_praud_cnews",
        characterId: "opp_pascal_praud",
        characterName: "Pascal Praud",
        tier: 3,
        scoreIndex: 60,
        theme: "theme-ecologie",
        titre: "La « petite musique » de Pascal Praud",
        description: "En direct sur CNews, Pascal Praud balaie d'un revers de manche les alertes météo : « Un coup de chaud en juin n'a rien d'exceptionnel, le mois de mai était frisquet ! La petite musique du catastrophisme va encore retentir partout ! » Invité face à lui, tu dois réagir.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE COUP D'ÉCLAT DE LA CLIMATISATION COUPÉE (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Lève-toi en direct, contourne le pupitre et va couper l'interrupteur général de la clim du plateau : 'Voyons si vous tenez 20 minutes sous les projecteurs sans votre bulle thermique artificielle !' »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : La Panique Thermique et le Buzz Planétaire (50%)
                outcomeSuccess: {
                    impact: { followers: 2000, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "La température grimpe instantanément sous les spots. Les chroniqueurs suent à grosses gouttes et Praud s'étouffe de colère avant de rendre l'antenne. La vidéo du coup de chaud devient virale.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Couper la clim du studio de Praud pour lui faire vivre la canicule en direct, action de légende 💀🌡️" },
                        { author: "Téléspectateur Hilare", handle: "@ZapCanicule", text: "Voir les éditorialistes fondre sous leurs cravates en direct sur CNews, j'ai hurlé de rire." },
                        { author: "Samy", handle: "@Samy_off", text: "Praud qui bégaye en essuyant son front toutes les dix secondes, le symbole est parfait." },
                        { author: "Inès", handle: "@Ines_Etu", text: "La matérialité physique contre le blabla de plateau : 1-0 pour le réel." }
                    ]
                },
                
                // Issue B : L'Évacuation par la Sécurité et la Plainte (50%)
                outcomeFailure: {
                    impact: { followers: -500, budget: -200, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Le régisseur général appelle la sécurité du groupe Canal+. Tu es expulsé manu militari du bâtiment et reçois une assignation pour dégradation matérielle chiffrée à 200 € de frais d'avocat.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@FraisDeTribunal", text: "Expulsé du plateau par la sécurité pour avoir touché au thermostat, 200 balles de frais juridiques." },
                        { author: "Chroniqueur Réac", handle: "@OrdreEtPlateau", text: "Intrusion inacceptable et mise en danger des équipements techniques par un invité incontrôlable !" },
                        { author: "Léo", handle: "@Leo_Mlt", text: "200 balles de frais pour avoir mis le nez des climatosceptiques dans leur propre chaleur, la honte." },
                        { author: "Claire", handle: "@Claire_V", text: "Solidarité totale face aux procédures-bâillons des chaînes privées." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LA DÉMONSTRATION DU GIEC SUR LES VAGUES DE CHALEUR (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Sors calmement la synthèse du 6e rapport du GIEC : rappelle la multiplication par cinq des dômes de chaleur et la hausse tendancielle des températures moyennes mondiales. »",
                impact: { followers: 400, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Poser la rigueur scientifique face aux anecdotes de météo locale désarme totalement la mauvaise foi du plateau. Les explications claires et posées te redonnent une vraie force collective.",
                tweets: [
                    { author: "Collectif Climat", handle: "@GIEC_France", text: "Rappeler la différence élémentaire entre météo et climat à Pascal Praud : une bouffée d'air pur 📊🌿" },
                    { author: "Sarah", handle: "@Sarah_K", text: "La pédagogie scientifique sereine qui écrase l'hystérie des plateaux, ça fait un bien immense." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Garder son sang-froid et opposer la science aux humeurs du présentateur, démonstration parfaite." },
                    { author: "Fatou", handle: "@Fatou_L", text: "Voir les faits scientifiques rétablis en direct sans céder au piège du clash, grosse victoire morale." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LES CHIFFRES DE LA DÉSINFORMATION MÉDIATIQUE (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Cite l'enquête QuotaClimat, Data for Good et Science Feedback : prouve que CNews diffuse une fausse affirmation climatique toutes les 35 minutes de traitement du sujet. »",
                impact: { followers: 600, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "Les données d'études quantitatives indépendantes clouent le bec de l'équipe éditoriale. Le recadrage chiffré fait la une des observatoires des médias pour son exemplarité.",
                tweets: [
                    { author: "Observatoire Médias", handle: "@QuotaClimat_Like", text: "Balancer les données de QuotaClimat et Science Feedback sur le plateau même de CNews : coup de maître 📑📺" },
                    { author: "Youssef", handle: "@Youssef_T", text: "Une affirmation trompeuse toutes les 35 minutes : le chiffre officiel posé sous le nez de Praud, inattaquable." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "La méthode scientifique appliquée à l'analyse médiatique : un travail de crédibilité absolue." },
                    { author: "Diane", handle: "@Diane_Eco", text: "Démontrer méthodiquement la fabrique du déni sur son propre terrain, respect infini." }
                ]
            }
        ]
    },

    // -------------------------------------------------------------
    // PERSONNAGE : SARAH KNAFO (Palier 3 — Score : 60 / 100)
    // Rareté : Députée / Réseaux | Alignement : Opposant
    // Thème : Justice Sociale, Travail & Services Publics (theme-social)
    // -------------------------------------------------------------
    {
        id: "prix_pass_navigo_sarah_knafo",
        characterId: "opp_sarah_knafo",
        characterName: "Sarah Knafo",
        tier: 3,
        scoreIndex: 60,
        theme: "theme-social",
        titre: "Le Pass Navigo fantôme de Sarah Knafo",
        description: "Interrogée sur le coût de la vie en Île-de-France, la députée européenne Sarah Knafo affirme sans ciller que le forfait mensuel de transports en commun coûte « 52 € par an ». La déconnexion bourgeoisie explose sur Twitter.",
        choix: [
            // =========================================================
            // CHOIX 1 : L'INTERPELLATION SUR LA LIGNE DE MÉTRO INEXISTANTE (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Tweet assassin : '52 € par an ? Dis-nous plutôt par quelle ligne de métro tu es venue ce matin ? La ligne chauffeur de maître ou le taxi privé financé sur fonds publics ?' »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Ratio Foudroyant et les Mèmes en Rafale (50%)
                outcomeSuccess: {
                    impact: { followers: 2000, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Ton tweet récolte 50 000 likes en quelques heures. Les usagers des transports inondent les réponses de photos de leurs tickets réels, transformant la gaffe en symbole d'arrogance de classe.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "La ligne chauffeur privé pour Sarah Knafo, le tweet a foudroyé toute l'extrême droite parisienne 💀🚇" },
                        { author: "Galérien Ligne 13", handle: "@RATP_Survie", text: "52 balles par an alors qu'on lâche près de 90 balles par mois pour voyager tassés comme des sardines !" },
                        { author: "Samy", handle: "@Samy_off", text: "Le décalage des rentiers qui prétendent parler au nom du peuple, démasqué en direct." },
                        { author: "Inès", handle: "@Ines_Etu", text: "La bourgeoisie qui n'a jamais vu un tourniquet de métro de sa vie, séquence culte." }
                    ]
                },
                
                // Issue B : L'Attaque en Meute et le Signalement Coordonné (50%)
                outcomeFailure: {
                    impact: { followers: -500, budget: -200, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Les militants du parti lancent une campagne de signalement massif pour 'cyberharcèlement'. Ton compte est suspendu temporairement et tu dois investir 200 € pour récupérer l'accès.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@CompteRestreint", text: "Suspendu 48h par les bots d'extrême droite pour une vanne sur le métro, 200 balles pour débloquer la visibilité." },
                        { author: "Reconquête Veille", handle: "@PatrioteActu", text: "Harcèlement intolérable contre une élue courageuse ciblée par l'extrême gauche agressive !" },
                        { author: "Léo", handle: "@Leo_Mlt", text: "200 balles de frais de gestion de compte parce qu'ils n'assument pas de ne pas connaître le prix du train, ridicule." },
                        { author: "Claire", handle: "@Claire_V", text: "Solidarité : la meute numérique qui s'affole dès qu'on pointe leurs privilèges réels." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE PLAIDOYER POUR LE REPORT MODAL ÉCOLOGIQUE (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Rappelle l'impact collectif des transports : un passager en métro émet 50 fois moins de CO2 qu'en voiture individuelle. Partageons nos astuces et défendons nos réseaux du quotidien ! »",
                impact: { followers: 400, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Le fil déclenche un élan de soutien mutuel entre usagers qui partagent leurs trajets et l'attachement aux mobilités partagées. La communauté échange dans la bienveillance et retrouve de l'énergie.",
                tweets: [
                    { author: "Usager Rail", handle: "@TrainDuQuotidien", text: "50 fois moins d'émissions que la bagnole : le métro est notre bien commun le plus précieux 🚆🌿" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Remettre la valeur de notre travail et de nos choix écologiques au centre, ça fait du bien au moral." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Loin de leur mépris, la fierté d'utiliser des transports partagés tous les matins." },
                    { author: "Fatou", handle: "@Fatou_L", text: "Une vague d'entraide et de solidarité entre banlieusards qui redonne le sourire." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE MANIFESTE CHIFFRÉ POUR LA GRATUITÉ UNIVERSELLE (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Démontre la faisabilité de la gratuité totale des transports : financée par la hausse du versement mobilité employeurs et la fin des cadeaux fiscaux aux autoroutes privées. »",
                impact: { followers: 600, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "L'argumentaire économique s'appuie sur l'exemple de villes comme Dunkerque ou Montpellier. Le dossier est partagé par des urbanistes et des économistes des transports comme une proposition modèle.",
                tweets: [
                    { author: "Urbanisme & Société", handle: "@TransportsGratuits", text: "L'argumentaire économique pour la gratuité universelle des transports en commun : chiffré, solide et finançable 📑🚇" },
                    { author: "Youssef", handle: "@Youssef_T", text: "Financer le pass par la contribution des grands groupes plutôt que sur le pouvoir d'achat : démonstration imparable." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Passer de la bévue d'une politicienne à un vrai débat macro-économique de service public, grande classe." },
                    { author: "Élise", handle: "@Elise_Droits", text: "Un travail rigoureux qui replace la mobilité comme un droit humain fondamental et non comme une marchandise." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : L'ÉDITORIALISTE RÉACTIONNAIRE (Palier 3 — Score : 60 / 100)
    // Rareté : Télévision / Plateau | Alignement : Opposant
    // Thème : Émancipation, Féminisme & Droits Fondamentaux (theme-emancipation)
    // -------------------------------------------------------------
    {
        id: "iran_femmes_recuperation_plateau",
        characterId: "opp_editorialiste_plateau",
        characterName: "L'Éditorialiste réactionnaire",
        tier: 3,
        scoreIndex: 60,
        theme: "theme-emancipation",
        titre: "L'instrumentalisation de la révolte iranienne",
        description: "En direct sur un plateau télévisé, un polémiste instrumentalise la répression en Iran pour attaquer les féministes françaises : « Regardez le courage des Iraniennes ! Pendant ce temps, nos néo-féministes inventent des faux problèmes d'hommes blancs ! »",
        choix: [
            // =========================================================
            // CHOIX 1 : LA DÉNONCIATION DE LA RÉCUPÉRATION RACISTE (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Vous vous fichez des Iraniennes : vous utilisez leur supplice comme gourdin islamophobe tout en soutenant ici même le contrôle du corps des femmes et le recul de nos droits ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Double Jeu Réactionnaire Démonté (50%)
                outcomeSuccess: {
                    impact: { followers: 2000, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "La réponse sans détour fait mouche. L'éditorialiste se noie dans ses dénégations, tandis que des collectifs de la diaspora iranienne saluent un recadrage indispensable de l'hypocrisie d'extrême droite.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Dégager la fausse compassion des réacs pour les femmes iraniennes, frappe chirurgicale en direct 💀🔥" },
                        { author: "Femme Vie Liberté", handle: "@IranResistance", text: "Merci de rappeler que nos combats ne sont pas des alibis pour les obsessions xénophobes des plateaux parisiens." },
                        { author: "Samy", handle: "@Samy_off", text: "L'éditorialiste qui se prend son propre cynisme en pleine poire, le silence sur le plateau était pesant." },
                        { author: "Inès", handle: "@Ines_Etu", text: "Défendre l'émancipation universelle sans jamais laisser la droite instrumentaliser la souffrance des peuples." }
                    ]
                },
                
                // Issue B : Le Procès en Complaisance Télévisuelle (50%)
                outcomeFailure: {
                    impact: { followers: -500, budget: -200, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "La séquence est coupée et montée pour t'accuser d'indifférence envers les crimes des mollahs. La cabale médiatique te coûte 200 € en conseils d'avocat pour rédiger des droits de réponse.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@DroitDeReponse", text: "Montage fallacieux sur Twitter pour m'inventer une complaisance théocratique, 200 balles de frais de juriste." },
                        { author: "Veille Médias", handle: "@ManipPlateau", text: "L'inversion accusatoire classique : dénoncer la récupération politique devient un crime de lèse-majesté." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "200 balles pour contraindre ces menteurs à publier un rectificatif légal, l'usure permanente." },
                        { author: "Claire", handle: "@Claire_V", text: "Solidarité : ils n'ont aucun scrupule à instrumentaliser les martyres d'ailleurs pour calomnier ici." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE RASSEMBLEMENT SOLIDAIRE « FEMME, VIE, LIBERTÉ » (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Rejoins le rassemblement de la diaspora : écoute les récits poignants des exilées, chante le refrain de 'Baraye' en chœur et partage un thé brûlant dans la fraternité. »",
                impact: { followers: 400, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "La dignité et la ferveur du rassemblement balayent la rancœur des plateaux. Partager ces moments de sororité et d'écoute directe avec les premières concernées te ressource profondément.",
                tweets: [
                    { author: "Chant De Lutte", handle: "@BarayeParis", text: "Le slogan 'Jin, Jiyan, Azadî' scandé par des centaines de voix place de la République : une force inouïe 🕊️✊" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Loin des micros complaisants, la solidarité internationale concrète avec le peuple iranien qui résiste." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Entendre le courage de ces femmes qui risquent la potence pour une mèche de cheveux, ça remet tout en place." },
                    { author: "Fatou", handle: "@Fatou_L", text: "Une chaleur humaine bouleversante qui donne l'énergie de poursuivre toutes les luttes émancipatrices." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE DÉCRYPTAGE DU PATRIARCAT THÉOCRATIQUE (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Publie un dossier sourcé : démontre comment l'oppression patriarcale s'articule aux intérêts économiques de la caste des Gardiens de la révolution pour verrouiller tout un peuple. »",
                impact: { followers: 600, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "Ton thread d'analyse matérialiste et politique est largement partagé par des sociologues et spécialistes du Moyen-Orient, élevant le débat bien au-dessus des raccourcis habituels.",
                tweets: [
                    { author: "Revue Géopolitique", handle: "@MoyenOrientFocus", text: "Analyser le régime iranien par le prisme de l'économie politique et du contrôle des corps : dossier remarquable 📑🌍" },
                    { author: "Youssef", handle: "@Youssef_T", text: "Démontrer que le voile imposé est un verrou politique pour enrichir la caste militaire, analyse limpide et rigoureuse." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Sortir de l'essentialisme culturel pour poser les rapports de classe et de pouvoir réels en Iran, bravo." },
                    { author: "Soraya", handle: "@Soraya_Droits", text: "Un éclairage scientifique indispensable qui rend hommage à la lucidité révolutionnaire de la jeunesse iranienne." }
                ]
            }
        ]
    },

    // -------------------------------------------------------------
    // PERSONNAGE : CHARLES ALLONCLE (Palier 3 — Score : 60 / 100)
    // Rareté : Parlementaire / Député | Alignement : Opposant
    // Thème : Justice Sociale, Travail & Services Publics (theme-social)
    // -------------------------------------------------------------
    {
        id: "audiovisuel_public_charles_alloncle",
        characterId: "opp_charles_alloncle",
        characterName: "Charles Alloncle",
        tier: 3,
        scoreIndex: 60,
        theme: "theme-social",
        titre: "L'assaut budgétaire sur l'audiovisuel public",
        description: "À l'Assemblée, le député Charles Alloncle présente son rapport d'austérité : il réclame des coupes massives dans France Télévisions et Radio France, ouvrant la voie à une privatisation au profit des grands groupes industriels.",
        choix: [
            // =========================================================
            // CHOIX 1 : L'INTERPELLATION SUR LES ORDRES DES EMPIRES PRIVÉS (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Interpelle-le en salle des quatre colonnes : 'Vous n'êtes pas un député de la nation, vous êtes le fondé de pouvoir des milliardaires qui veulent privatiser l'information pour formater l'opinion !' »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : L'Élu Bégayant et l'Écho Virale (50%)
                outcomeSuccess: {
                    impact: { followers: 2000, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Pris de court devant les caméras des journalistes parlementaires, le rapporteur bafouille et s'enferme dans son bureau. L'extrait vidéo fait le tour des rédactions et électrise la contestation.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Pointer les valets de l'audiovisuel privé en plein cœur du Palais Bourbon, le député Alloncle a fui en régie 💀📺" },
                        { author: "Syndicat Médias", handle: "@SNJ_Public", text: "Rappeler les intérêts financiers derrière la casse de l'audiovisuel public : merci pour ce coup d'éclat salutaire !" },
                        { author: "Samy", handle: "@Samy_off", text: "Il venait vendre sa casse sociale en costard et il repart avec une étiquette de sous-traitant collée au dos." },
                        { author: "Inès", handle: "@Ines_Etu", text: "La bataille pour l'information libre commence par dénoncer les complaisances à la racine." }
                    ]
                },
                
                // Issue B : L'Incident de Séance et la Sanction (50%)
                outcomeFailure: {
                    impact: { followers: -500, budget: -200, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Les huissiers de l'Assemblée interviennent pour trouble aux travaux parlementaires. Tu es exclu des tribunes et dois régler 200 € de frais administratifs et de recours.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@TribunesFermées", text: "Expulsé de l'Assemblée pour avoir interpellé le rapporteur du budget des médias, 200 balles de frais de recours." },
                        { author: "Ordre Parlementaire", handle: "@PoliceDuPalais", text: "Rappel à l'ordre strict des visiteurs suite à une interpellation agressive contre un rapporteur spécial." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "200 balles pour avoir rappelé que sabrer Radio France servait les intérêts de trois oligarques..." },
                        { author: "Claire", handle: "@Claire_V", text: "Solidarité : l'institution protège scrupuleusement ceux qui organisent la destruction des biens communs." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE BOYCOTT MÉTHODIQUE DES SORTIES DE CHARLES ALLONCLE (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Lance une consigne de boycott viral : zappez systématiquement chaque intervention télévisée de Charles Alloncle pour assécher ses courbes d'audience et prouver l'inutilité de ses provocations. »",
                impact: { followers: 400, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "L'appel au boycott par le zapping coordonné prend immédiatement sur les réseaux. Les courbes d'audimat chutent dès qu'il prend la parole, t'offrant une victoire collective sans le moindre stress.",
                tweets: [
                    { author: "Télécommande Libre", handle: "@ZappeLeClash", text: "Zapper en masse dès que Charles Alloncle ouvre la bouche : l'audience plonge et nos cerveaux respirent 📺🔇" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Ne plus donner une seconde d'attention aux polémistes professionnels, le geste d'hygiène mentale par excellence." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Voir les courbes d'audimat s'effondrer dès qu'ils lancent leurs diatribes libérales, jubilatoire !" },
                    { author: "Fatou", handle: "@Fatou_L", text: "L'action collective la plus simple et efficace qui soit : priver le spectacle réac de son carburant." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE BILAN COÛT-BÉNÉFICE DU SERVICE PUBLIC (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Publie une contre-expertise économique : démontre que l'audiovisuel public coûte moins de 10 centimes par jour et par citoyen, finançant l'investigation, l'animation et le spectacle vivant sans pub. »",
                impact: { followers: 600, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "Les infographies chiffrées basées sur les comptes de la Cour des comptes démontent point par point le rapport Alloncle. Ton dossier devient le document de référence partagé par l'intersyndicale.",
                tweets: [
                    { author: "Observatoire Public", handle: "@ServicePublicInfo", text: "Démontrer que l'audiovisuel public coûte moins de 10 centimes par jour et préserve l'indépendance de l'info : travail magistral 📑📻" },
                    { author: "Youssef", handle: "@Youssef_T", text: "Face aux slogans de privatisation d'Alloncle, opposer le bilan réel de l'investigation et du documentaire en chiffres." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "La rigueur budgétaire pour défendre le bien commun face aux appétits spéculatifs : niveau parfait." },
                    { author: "Camille", handle: "@Camille_Soc", text: "Un plaidoyer irréfutable pour le droit des citoyens à une information soustraite à la loi du marché." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : LE COLLECTIF PALESTINE SOLIDARITÉ (Palier 4 — Score : 80 / 100)
    // Rareté : Historique / Sommet | Alignement : Neutre / Allié
    // Thème : Émancipation, Féminisme & Droits Fondamentaux (theme-emancipation)
    // -------------------------------------------------------------
    {
        id: "grande_fete_solidarite_palestine",
        characterId: "allie_collectif_palestine",
        characterName: "Le Collectif Palestine Solidarité",
        tier: 4,
        scoreIndex: 80,
        theme: "theme-emancipation",
        titre: "La grande soirée des peuples pour Gaza",
        description: "En plein cœur de la ville, tu organises avec des dizaines d'associations une immense fête populaire de soutien au peuple palestinien : concerts engagés, keffiehs, lectures de poèmes et partage d'un repas solidaire géant.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE DIRECT CLASH FACE AUX INTERDICTIONS PRÉFECTORALES (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Prends le micro face aux arrêtés d'interdiction préfectoraux : 'Vous pouvez envoyer la police, vous n'éteindrez ni le droit international, ni la mémoire de Gaza ! La complicité d'État doit cesser !' »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : L'Embrasement Populaire et la Victoire Morale (50%)
                outcomeSuccess: {
                    impact: { followers: 3000, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "La foule scande des slogans de liberté à l'unisson. La prise de parole retransmise en direct fait des millions de vues : la préfecture renonce à disperser et l'événement entre dans l'histoire des mobilisations.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Ce discours pour la Palestine devant des milliers de personnes qui refusent de baisser les yeux, frissons absolus 💀🇵🇸" },
                        { author: "Voix De Gaza", handle: "@SolidariteUniverselle", text: "La dignité face aux intimidations policières. La France populaire montre son vrai visage solidaire !" },
                        { author: "Samy", handle: "@Samy_off", text: "La préfecture a dû remballer ses arrêtés devant la marée humaine, moment historique." },
                        { author: "Inès", handle: "@Ines_Etu", text: "Faire trembler les lâchetés diplomatiques par la force du nombre et du droit, magistral." }
                    ]
                },
                
                // Issue B : La Répression Administrative et l'Amende Lourde (50%)
                outcomeFailure: {
                    impact: { followers: -700, budget: -250, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "La préfecture dresse un procès-verbal immédiat pour organisation de manifestation non autorisée. Tu écopes de 250 € de frais juridiques et d'amende pour contester la procédure.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@PV_Prefecture", text: "250 balles d'amende et de frais pour avoir lu un poème de Mahmoud Darwich sur une place publique..." },
                        { author: "Observatoire Libertés", handle: "@DroitDeManifester", text: "L'acharnement préfectoral contre les voix de la paix et de la solidarité internationale continue." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "250 balles de frais pour un événement culturel et pacifiste, l'autoritarisme ne se cache même plus." },
                        { author: "Claire", handle: "@Claire_V", text: "Solidarité totale : ils criminalisent la paix parce qu'elle expose leur propre faillite morale." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LA COMMUNION CULTURELLE ET LE REPAS PARTAGÉ (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Rejoins les cuisines populaires : partage le maqlouba géant avec les familles, écoute les récits des anciens et chante les hymnes de liberté dans une chaleur humaine inoubliable. »",
                impact: { followers: 600, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "La fête est d'une beauté bouleversante. Les larmes d'émotion se mêlent aux rires des enfants et aux danses traditionnelles de dabké. Cette fraternité vivante te recharge l'âme d'une énergie indestructible.",
                tweets: [
                    { author: "Fête Populaire", handle: "@DabkeEtPaix", text: "Les odeurs d'épices, les danses traditionnelles et la fraternité pure : Gaza dans tous les cœurs ce soir 🇵🇸✨" },
                    { author: "Sarah", handle: "@Sarah_K", text: "La beauté de cette soirée solidaire, voir toutes les générations réunies pour la justice, ça guérit de tout." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Une leçon d'humanité et de résistance par la culture, on en ressort avec une force immense." },
                    { author: "Fatou", handle: "@Fatou_L", text: "Ce n'est pas juste de la politique, c'est de l'amour et de la dignité partagée au plus haut niveau." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE PLAIDOYER POUR LES SANCTIONS ET LE DROIT DE L'ONU (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Présente une plateforme juridique solide : exige l'embargo immédiat sur les armes, la suspension de l'accord d'association UE-Israël et l'application stricte des arrêts de la Cour internationale de justice. »",
                impact: { followers: 900, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "Ton intervention pose le débat sur le terrain irréfutable des résolutions de l'ONU et des traités internationaux signés par la France. La tribune est reprise par des diplomates et juristes chevronnés.",
                tweets: [
                    { author: "Juristes Sans Frontières", handle: "@DroitInternational", text: "Rappeler les obligations légales de la France devant la CIJ et l'embargo sur les armements : dossier magistral 📑⚖️" },
                    { author: "Youssef", handle: "@Youssef_T", text: "Sortir de l'émotion pour imposer le droit international et les traités de l'UE, le plaidoyer est inattaquable." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "La rigueur juridique au service de la justice universelle : la tribune fait référence dans toutes les universités." },
                    { author: "Nabil", handle: "@Nabil_Med", text: "Démontrer que le soutien aux opprimés est une question de légalité internationale et non d'opinion, niveau d'exigence parfait." }
                ]
            }
        ]
    },

    // -------------------------------------------------------------
    // PERSONNAGE : LA FLAMBÉE DE L'ESSENCE (Palier 4 — Score : 80 / 100)
    // Rareté : Crise Sociale / Sommet | Alignement : Opposant / Système
    // Thème : Justice Sociale, Travail & Services Publics (theme-social)
    // -------------------------------------------------------------
    {
        id: "flambee_carburant_appel_gilets_jaunes",
        characterId: "opp_flambee_carburants",
        characterName: "Le Baril spéculatif",
        tier: 4,
        scoreIndex: 80,
        theme: "theme-social",
        titre: "2,20 € le litre : le retour de la colère jaune",
        description: "Le litre d'essence franchit la barre intenable des 2,20 € à la pompe. Dans les zones rurales et périurbaines, les travailleurs qui n'ont d'autre choix que leur voiture voient leur budget s'effondrer.",
        choix: [
            // =========================================================
            // CHOIX 1 : L'APPEL À LA REPRISE DES RONDS-POINTS (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « 'Ressortez les gilets jaunes des coffres ! Bloquons le pays pour exiger la justice fiscale et le blocage des prix !' Lance l'appel et fixe une date pour une grande journée d'action ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : La Date est Fixée et la Dynamique Déferle (50%)
                outcomeSuccess: {
                    impact: { followers: 3000, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "L'appel met le feu aux poudres. Des dizaines de groupes locaux se reforment en quelques heures sur les réseaux et la date que tu as proposée est reprise par tous les canaux militants.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "La date est calée, les ronds-points chauffent déjà sur Telegram, l'esprit des gilets jaunes renaît 💀🦺" },
                        { author: "Gilet Jaune Historique", handle: "@RondPointSud", text: "Le gilet est repassé et posé sur le tableau de bord. Rendez-vous à la date fixée pour la dignité !" },
                        { author: "Samy", handle: "@Samy_off", text: "L'appel a pris comme une traînée de poudre, le gouvernement commence déjà à paniquer." },
                        { author: "Inès", handle: "@Ines_Etu", text: "La convergence entre la fin du monde et la fin du mois, la colère populaire est plus légitime que jamais." }
                    ]
                },
                
                // Issue B : La Censure Algorithmique et le Shadowban Coordonné (50%)
                outcomeFailure: {
                    impact: { followers: -700, budget: -250, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Les algorithmes censurent ton message pour 'incitation au blocage économique'. Tu dois débourser 250 € dans des canaux de secours et de diffusion sécurisée pour contourner le bâillon numérique.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@AppelCensuré", text: "Appel au blocage supprimé en 30 minutes par les plateformes, 250 balles de serveurs alternatifs pour garder le contact." },
                        { author: "Veille Sociale", handle: "@ReseauCitoyen", text: "Le verrouillage numérique dès que le pouvoir sent revenir le spectre des gilets jaunes." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "250 balles de frais pour rétablir nos canaux de diffusion, la peur du pouvoir est palpable." },
                        { author: "Claire", handle: "@Claire_V", text: "Solidarité : ils censurent la colère parce qu'ils savent que leurs prix sont intenables." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE CHANT SATIRIQUE VIRAL CONTRE LA VIE CHÈRE (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Compose un refrain percutant et drôle sur ta guitare devant le totem de la station : transforme le désespoir de la pompe en hymne fédérateur à chanter tous ensemble ! »",
                impact: { followers: 600, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "La chanson fait un carton immédiat. Reprise sur TikTok par des milliers d'automobilistes à la pompe, elle transforme la déprime en éclat de rire collectif et t'apporte un élan de sympathie massif.",
                tweets: [
                    { author: "Refrain Populaire", handle: "@TubeDeLaPompe", text: "Le refrain qui tourne en boucle à chaque plein d'essence, mourir de rire au lieu de pleurer devant le compteur 🎸⛽" },
                    { author: "Sarah", handle: "@Sarah_K", text: "L'art populaire et l'humour pour redonner le sourire aux travailleurs du quotidien, magnifique initiative." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Rien de tel qu'une chanson qui fédère pour reprendre des forces et briser l'isolement de la galère." },
                    { author: "Fatou", handle: "@Fatou_L", text: "Tout le monde chante le couplet dans les bouchons ce matin, l'énergie est incroyable !" }
                ]
            },

            // =========================================================
            // CHOIX 3 : LA TAXATION DES SUPERPROFITS DE TOTAL ET LE BLOCAGE (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Détaille le plan d'urgence économique : taxe à 50 % sur les 20 milliards de superprofits de TotalEnergies pour financer le blocage immédiat du carburant à 1,70 € le litre. »",
                impact: { followers: 900, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "Ton plan de financement au centime près est relayé par des économistes atterrés et des syndicats de raffineurs. Il prouve que la baisse des prix est une question de courage politique, pas de fatalité.",
                tweets: [
                    { author: "Économie Réelle", handle: "@SuperprofitsTotal", text: "Prendre sur les dividendes de Pouyanné pour bloquer l'essence à 1,70 € : le plan de financement est imparable 📑📊" },
                    { author: "Youssef", handle: "@Youssef_T", text: "Démontrer par les chiffres que l'inflation à la pompe n'est que de la rapine actionnariale : travail d'utilité publique." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Une alternative macro-économique concrète qui cloue le bec aux éditorialistes du marché roi." },
                    { author: "Bastien", handle: "@Bastien_Syndic", text: "La justice fiscale expliquée simplement : faire payer les profiteurs de guerre pour soulager ceux qui bossent." }
                ]
            }
        ]
    },
    // -------------------------------------------------------------
    // PERSONNAGE : LA GRANDE SCÈNE DE LA FÊTE DE L'HUMA (Palier 4 — Score : 80 / 100)
    // Rareté : Historique / Sommet | Alignement : Allié / Populaire
    // Thème : Contre-Pouvoir, Médias & Antifascisme (theme-antifa)
    // -------------------------------------------------------------
    {
        id: "fete_huma_prise_de_parole_antifa",
        characterId: "allie_fete_de_lhuma",
        characterName: "La Fête de l'Humanité",
        tier: 4,
        scoreIndex: 80,
        theme: "theme-antifa",
        titre: "Face à la marée rouge et noire",
        description: "Invité sur la Grande Scène de la Fête de l'Humanité devant cent mille personnes en ébullition, un micro sans fil t'est tendu : la foule retient son souffle pour entendre ton message contre la montée du nationalisme.",
        choix: [
            // =========================================================
            // CHOIX 1 : LE CLASH NOMINATIF CONTRE LE RASSEMBLEMENT NATIONAL (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « 'Le Rassemblement national n'est pas le peuple, c'est l'escroquerie des milliardaires pour détruire la fraternité républicaine ! Nous ne les laisserons jamais passer !' »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : L'Embrasement de la Plaine et le Buzz Monstre (50%)
                outcomeSuccess: {
                    impact: { followers: 3000, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "Cent mille poings se lèvent d'un seul bloc sous les clameurs. La vidéo du discours fait le tour de la presse nationale et galvanise tous les comités antifascistes du pays.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Faire rugir 100 000 personnes contre le RN sur la grande scène de l'Huma, la séquence donne des frissons partout 💀🚩" },
                        { author: "Militant De L'Huma", handle: "@RougePopulaire", text: "Un discours historique qui remet les pendules à l'heure : pas un millimètre d'espace concédé aux fascistes !" },
                        { author: "Samy", handle: "@Samy_off", text: "La marée humaine qui reprend la phrase mot pour mot, c'était le moment le plus fort du week-end." },
                        { author: "Inès", handle: "@Ines_Etu", text: "La clarté politique portée avec le souffle des grands rassemblements populaires, magistral." }
                    ]
                },
                
                // Issue B : L'Assignation Judiciaire par l'Appareil du Parti (50%)
                outcomeFailure: {
                    impact: { followers: -700, budget: -250, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "Les députés du RN déclenchent immédiatement une citation directe en justice pour diffamation et injure publique. Tu dois mobiliser 250 € d'honoraires pour lancer ta défense légale.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@ProcesHuma", text: "Poursuivi en justice par le RN après un discours à la Fête de l'Huma, 250 balles de consignation au tribunal." },
                        { author: "Observatoire Médias", handle: "@LiberteExpression", text: "L'extrême droite qui utilise l'intimidation par les prétoires dès qu'elle est désignée pour ce qu'elle est." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "250 balles de frais pour avoir dit des vérités sous les projecteurs, la justice à l'épreuve de la censure politique." },
                        { author: "Claire", handle: "@Claire_V", text: "Solidarité : leur recours en diffamation prouve à quel point les mots ont touché le nerf." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE SLOGAN ANTIFASCISTE FÉDÉRATEUR (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Fais résonner le chant historique : 'Siamo tutti antifascisti !' Répète-le en chœur jusqu'à ce que la plaine entière chante d'une seule voix fraternelle et puissante. »",
                impact: { followers: 600, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Le grondement des basses et l'harmonie collective font trembler le sol. Cette communion antifasciste festive et populaire t'emplit d'une joie indestructible et d'une force immense.",
                tweets: [
                    { author: "Chœur Du Pavé", handle: "@ChantDesPartisans", text: "100 000 voix unies sur 'Siamo tutti antifascisti' : l'énergie de la liberté résonne jusqu'au ciel ✊🎶" },
                    { author: "Sarah", handle: "@Sarah_K", text: "Chanter ensemble sans peur ni haine, la solidarité pure qui te recharge le cœur pour des mois entiers." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "La plus belle fête populaire d'Europe, des sourires, de la fierté et zéro résignation." },
                    { author: "Fatou", handle: "@Fatou_L", text: "Ce chant partagé restera gravé dans les mémoires : la vraie gauche vivante est là." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE PLAIDOYER POUR LES JOURS HEUREUX ET LE CONSEIL DE LA RÉSISTANCE (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Prononce l'hommage solennel : 'Rappelons le programme des Jours Heureux du CNR. La Sécurité sociale, les retraites, l'émancipation ouvrière sont notre héritage inaliénable face aux faussaires.' »",
                impact: { followers: 900, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "La précision historique et la hauteur morale du propos suscitent une ovation debout de toute la plaine. La presse et les historiens saluent un rappel républicain magistral et fondateur.",
                tweets: [
                    { author: "Histoire & République", handle: "@MemoireCNR", text: "Rappeler le programme des Jours Heureux devant 100 000 personnes : la plus belle réponse aux révisionnistes 📑🏛️" },
                    { author: "Youssef", handle: "@Youssef_T", text: "La filiation directe avec Ambroise Croizat et la Résistance, ce discours avait le souffle des géants." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Une leçon d'histoire sociale d'une clarté absolue, la crédibilité républicaine à son sommet." },
                    { author: "Bastien", handle: "@Bastien_Syndic", text: "Lier la mémoire ouvrière aux batailles contemporaines : le texte circulera dans toutes les bourses du travail." }
                ]
            }
        ]
    },

    // -------------------------------------------------------------
    // PERSONNAGE : LE SOMMET MONDIAL DU CLIMAT (Palier 4 — Score : 80 / 100)
    // Rareté : Sommet International / Historique | Alignement : Opposant / Système
    // Thème : Écologie, Vivant & Territoires (theme-ecologie)
    // -------------------------------------------------------------
    {
        id: "sommet_cop_intrusion_lobbies_fossiles",
        characterId: "opp_sommet_climat_onu",
        characterName: "Le Sommet Mondial pour le Climat",
        tier: 4,
        scoreIndex: 80,
        theme: "theme-ecologie",
        titre: "L'intrusion dans le sanctuaire des pollueurs",
        description: "Alors que la COP31 réunit diplomates et multinationales, les négociations s'enlisent dans le blabla diplomatique sous la pression de milliers de lobbyistes pétroliers et gaziers. Ton collectif est sur place.",
        choix: [
            // =========================================================
            // CHOIX 1 : L'INTRUSION DIRECTE DANS LE PAVILLON PÉTROLIER (Pari 50/50 — Focus Abonnés & Tension)
            // Coût visible : -12% Énergie | Gain visible : +3% Tension 🔥
            // =========================================================
            {
                texte: "🔥 « Force les cordons de sécurité : fais irruption dans le pavillon VIP des multinationales fossiles pour dénoncer leurs chèques et asperger leurs maquettes de mélasse noire ! »",
                isClash: true,
                fixedCost: { energy: -12, tension: 3 },
                
                // Issue A : Le Sabotage Célébré et l'Écho Planétaire (50%)
                outcomeSuccess: {
                    impact: { followers: 3000, budget: 0, energy: -12, credibility: 4, tension: 3 },
                    consequenceText: "La panique gagne les dirigeants pétroliers qui fuient les caméras. L'image de la mélasse noire coulant sur leurs promesses de neutralité carbone fait la couverture des médias mondiaux.",
                    tweets: [
                        { author: "Nassim", handle: "@Nassim_QG", text: "Asperger les maquettes des pétroliers en plein sommet mondial sous l'œil des caméras internationales, quel cran 💀🛢️" },
                        { author: "Climat Guerilla", handle: "@DirectAction75", text: "Le vernis vert des multinationales n'a pas résisté à la mélasse : l'hypocrisie exposée à la face du monde !" },
                        { author: "Samy", handle: "@Samy_off", text: "Les lobbyistes en costard qui détallent devant trois militants déterminés, vidéo de l'année." },
                        { author: "Inès", handle: "@Ines_Etu", text: "La seule réponse légitime face à des criminels qui négocient l'habitabilité de notre terre." }
                    ]
                },
                
                // Issue B : L'Arrestation et la Répression Diplomatique (50%)
                outcomeFailure: {
                    impact: { followers: -700, budget: -250, energy: -12, credibility: -5, tension: 3 },
                    consequenceText: "La sécurité internationale de l'ONU intervient brutalement. Tu passes 24 heures en rétention et écopes d'une expulsion du territoire avec 250 € de frais consulaires et d'amende.",
                    tweets: [
                        { author: "Militant Poissé", handle: "@GardeAVueClimat", text: "Expulsé du sommet par la sécurité de l'ONU, 250 balles de frais de dossier consulaire..." },
                        { author: "Observatoire Répression", handle: "@AlerteCOP", text: "Quand les sommets climatiques protègent les pollueurs et embastillent les défenseurs du vivant." },
                        { author: "Léo", handle: "@Leo_Mlt", text: "250 balles pour avoir interrompu un cocktail de lobbyistes, la disproportion est écœurante." },
                        { author: "Claire", handle: "@Claire_V", text: "Solidarité : ils préfèrent enfermer la jeunesse plutôt que de renoncer à une goutte de pétrole." }
                    ]
                }
            },

            // =========================================================
            // CHOIX 2 : LE DIE-IN SILENCIEUX ET LA CHAÎNE HUMAINE (Focus Énergie)
            // =========================================================
            {
                texte: "📚 « Coordonne un die-in géant sur l'esplanade : des centaines de corps allongés en silence complet, reliant leurs mains pour symboliser la mémoire des victimes climatiques. »",
                impact: { followers: 600, budget: 0, energy: 15, credibility: 3, tension: 0 },
                consequenceText: "Ce silence recueilli et impressionnant fige les allées du sommet. L'émotion submerge les délégués internationaux qui s'arrêtent, émus. La force morale de l'action collective te ressource profondément.",
                tweets: [
                    { author: "Silence Pour Le Climat", handle: "@DieInSummit", text: "Le silence absolu de centaines de corps allongés sur le parvis : une puissance émotionnelle bouleversante 🕊️🌍" },
                    { author: "Sarah", handle: "@Sarah_K", text: "La dignité de cette chaîne humaine face au vacarme diplomatique, c'est ce qui nous tient debout." },
                    { author: "Mehdi", handle: "@Mehdi_L", text: "Voir des diplomates s'arrêter avec les larmes aux yeux, la force du pacifisme en action." },
                    { author: "Fatou", handle: "@Fatou_L", text: "Une sérénité et une paix partagée qui redonnent foi dans notre combat commun." }
                ]
            },

            // =========================================================
            // CHOIX 3 : LE CONTRE-DISCOURS FACE À LA PRESSE INTERNATIONALE (Focus Crédibilité)
            // =========================================================
            {
                texte: "🎓 « Convoque la presse mondiale : présente le contre-rapport d'experts indépendants exigeant l'interdiction légale immédiate de tout nouveau projet d'exploration pétrolière et gazière. »",
                impact: { followers: 900, budget: 0, energy: -4, credibility: 9, tension: 0 },
                consequenceText: "Devant des dizaines de micros internationaux, ta présentation rigoureuse s'appuie sur les scénarios de l'Agence Internationale de l'Énergie. Ton intervention fait la une des grands quotidiens mondiaux.",
                tweets: [
                    { author: "Presse Mondiale", handle: "@GlobalClimatWatch", text: "Présentation limpide des impératifs de l'AIE face à la presse internationale : démonstration d'utilité publique 📑🗞️" },
                    { author: "Youssef", handle: "@Youssef_T", text: "Porter la voix de la science devant les correspondants du monde entier : niveau d'exigence diplomatique parfait." },
                    { author: "Tariq", handle: "@Tariq_Campus", text: "Démontrer que le refus de nouveaux gisements est un impératif économique et physique, magistral." },
                    { author: "Diane", handle: "@Diane_Eco", text: "Un plaidoyer international d'une précision chirurgicale qui ridiculise les éléments de langage officiels." }
                ]
            }
        ]
    }

];

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
    // DÉBAT PALIER 4 : JORDAN BARDELLA (Score : 95)
    // Lieu : Le Grand Débat Décisif d'Entre-Deux-Tours (21h00)
    // =========================================================
    5: {
        id: "debate_tier_4_bardella",
        tier: 4,
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
