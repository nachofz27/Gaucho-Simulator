// =========================================================
// BASE DE DONNÉES DES DÉBATS (GAUCHO SIMULATOR)
// 4 Paliers avec décor personnalisé par adversaire et tirage pondéré
// =========================================================

window.DEBATES_DATABASE = {

    // =========================================================
    // PALIER 1 : NOTORIÉTÉ LOCALE (Terrain, Fac, Quartier)
    // =========================================================
    1: [
        {
            id: "debat_1_kevin",
            tier: 1,
            weight: 40, // Très fréquent (40% de chance au P1)
            characterName: "Kevin l'Incel",
            characterRole: "Étudiant aigri de L2 & militant masculiniste",
            arenaName: "Salle 104 • Faculté des Lettres",
            arenaThemeClass: "theme-amphi-cours",
            arenaDecorHtml: `
                <div class="tier-decor-badge">🎓 Salle 104 • Faculté des Lettres</div>
                <div class="chalk-doodle">📝 TD de Droit • Fin de séance agitée</div>
            `,
            opponentAttack: "« Le féminisme d'État a détruit le marché de la séduction ! Les femmes ne veulent que des mecs blindés et vos théories wokes ruinent nos facs ! »",
            choix: [
                {
                    texte: "Démonter posément ses arguments avec les statistiques de l'INSEE sur les violences et inégalités réelles.",
                    strategyName: "Rigueur sociologique",
                    successOddsBonus: 10,
                    outcomeSuccess: {
                        impact: { followers: 1200, credibility: 8, energy: -5, tension: 5 },
                        consequenceText: "La salle applaudit. Kevin bafouille, range ses affaires précipitamment et quitte le cours sous les sourires moqueurs.",
                        tweets: [
                            { author: "Camarade Amphi", handle: "@L2_Lettres", text: "Masterclass en TD de socio ! Le mascu du fond s'est pris le mur de la réalité 👏" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -300, credibility: -6, energy: -15, tension: 15 },
                        consequenceText: "Le chargé de TD vous coupe la parole en disant que 'ce n'est pas le lieu pour faire de la politique'. Malaise dans la rangée.",
                        tweets: [
                            { author: "Étudiant Neutre", handle: "@FacDeDroit", text: "Encore un TD annulé parce que ça part en clash politique stérile..." }
                        ]
                    }
                },
                {
                    texte: "« Kevin, si personne ne te parle, c'est pas le complot mondialiste, c'est juste que tu passes 14h par jour sur le 18-25 ! »",
                    strategyName: "Punchline cassante",
                    successOddsBonus: -5,
                    outcomeSuccess: {
                        impact: { followers: 2500, credibility: 2, energy: -10, tension: 20 },
                        consequenceText: "Un 'Ouuuuh' collectif retentit dans l'amphi. La vidéo de ta répartie tourne déjà sur le canal Telegram de la promo !",
                        tweets: [
                            { author: "Memes Étudiants", handle: "@UnivMemes", text: "La clim monumentale posée en TD de 16h, on n'était pas prêts 🥶" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -500, credibility: -10, energy: -20, tension: 25 },
                        consequenceText: "Ton attaque perso passe mal auprès des indécis. Le chargé de TD menace de vous envoyer tous les deux en conseil de discipline.",
                        tweets: [
                            { author: "Observateur Fac", handle: "@EtudiantMoyen", text: "L'extrême gauche en fac, ça ne sait plus qu'insulter sans argumenter." }
                        ]
                    }
                },
                {
                    texte: "Prendre le reste de la classe à témoin et organiser un vote improvisé pour la caisse de solidarité.",
                    strategyName: "Démocratie directe",
                    successOddsBonus: 5,
                    outcomeSuccess: {
                        impact: { followers: 1800, budget: 50, credibility: 12, energy: -5, tension: 10 },
                        consequenceText: "Trente mains se lèvent en ta faveur. Trois personnes te demandent comment rejoindre ton collectif à la sortie du cours.",
                        tweets: [
                            { author: "Syndicat Étudiant", handle: "@SolidairesUniv", text: "Nouvelle recrue affûtée dans la section ! La relève est là." }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -200, credibility: -4, energy: -10, tension: 5 },
                        consequenceText: "La majorité des étudiants regarde son téléphone avec indifférence. Le vote tombe à plat.",
                        tweets: [
                            { author: "Étudiant Las", handle: "@VieEtudiante", text: "Laissez-nous juste rentrer chez nous s'il vous plaît..." }
                        ]
                    }
                }
            ]
        },
        {
            id: "debat_1_vigile",
            tier: 1,
            weight: 35, // Fréquent (35% de chance)
            characterName: "Le Vigile Zélé du Centre Commercial",
            characterRole: "Chef de la sécurité privée d'un mall périurbain",
            arenaName: "Galerie Marchande • Allée Centrale",
            arenaThemeClass: "theme-galerie-commerciale",
            arenaDecorHtml: `
                <div class="tier-decor-badge">🛒 Galerie Commerciale • Devant les escaliers</div>
                <div class="chalk-doodle">📹 Vidéosurveillance active • Talkie-walkie qui grésille</div>
            `,
            opponentAttack: "« Circulez avec vos autocollants et vos tracts ! Ici c'est une propriété privée, la politique et la mendicité militante sont strictement interdites par la direction ! »",
            choix: [
                {
                    texte: "Lui rappeler qu'en tant que travailleur de la sécurité sous-payé, ses droits sont défendus par la convention collective que tu distribues.",
                    strategyName: "Conscience de classe",
                    successOddsBonus: 10,
                    outcomeSuccess: {
                        impact: { followers: 1500, credibility: 10, energy: -5, tension: 5 },
                        consequenceText: "Le vigile baisse les yeux, coupe son talkie et te glisse discrètement : 'Faites vite avant que mon chef de secteur n'arrive'.",
                        tweets: [
                            { author: "Client Galerie", handle: "@ShopperLocal", text: "L'échange entre le militant et l'agent de sécurité était touchant de vérité. Solidarité ouvrière." }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -400, credibility: -5, energy: -12, tension: 15 },
                        consequenceText: "L'agent s'énerve de plus belle, appelle deux collègues et vous expulse manu militari sur le parking sous la pluie.",
                        tweets: [
                            { author: "Témoin Parking", handle: "@MidiQuotidien", text: "Expulsion un peu brutale de militants devant l'hypermarché ce midi." }
                        ]
                    }
                },
                {
                    texte: "Inviter les clients à boycotter les enseignes du centre commercial qui refusent l'expression citoyenne.",
                    strategyName: "Agitation directe",
                    successOddsBonus: -5,
                    outcomeSuccess: {
                        impact: { followers: 2800, budget: 40, credibility: 4, energy: -10, tension: 20 },
                        consequenceText: "Plusieurs clients s'arrêtent, prennent fait et cause pour toi et refusent d'entrer dans les magasins !",
                        tweets: [
                            { author: "Collectif Boycott", handle: "@ConsoResponsable", text: "Bravo pour l'agitation devant le temple de la surconsommation ✊" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -600, credibility: -8, energy: -15, tension: 25 },
                        consequenceText: "Les passants pressés vous invectivent en voulant juste faire leurs courses du samedi.",
                        tweets: [
                            { author: "Client Pressé", handle: "@SamediCourses", text: "Insupportable de se faire harceler par des militants quand on veut juste acheter du pain." }
                        ]
                    }
                },
                {
                    texte: "Sortir calmement l'autorisation municipale de distribution sur le domaine public attenant.",
                    strategyName: "Recours légal",
                    successOddsBonus: 5,
                    outcomeSuccess: {
                        impact: { followers: 1600, credibility: 12, energy: -5, tension: 5 },
                        consequenceText: "Le vigile constate qu'il n'a aucun pouvoir légal sur le parvis extérieur et retourne à sa loge.",
                        tweets: [
                            { author: "Legal Team", handle: "@AvocatsLutte", text: "Connaître les limites du domaine public privé : l'arme fatale sur le terrain." }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -300, credibility: -4, energy: -8, tension: 10 },
                        consequenceText: "Le document est froissé et l'agent refuse de le lire, campant sur ses positions.",
                        tweets: [
                            { author: "Passant Curieux", handle: "@MidiCentre", text: "Dialogue de sourds total devant les portes automatiques." }
                        ]
                    }
                }
            ]
        }
    ],

    // =========================================================
    // PALIER 2 : INFLUENCE RÉGIONALE (Web, Réseaux, Rassemblements)
    // =========================================================
    2: [
        {
            id: "debat_2_nemesis",
            tier: 2,
            weight: 30, // 30% de chance au P2
            characterName: "Militante du Collectif Némésis",
            characterRole: "Porte-parole du féminisme identitaire & xénophobe",
            arenaName: "Parvis de la Fac • Cercle de débat sauvage",
            arenaThemeClass: "theme-parvis-manif",
            arenaDecorHtml: `
                <div class="tier-decor-badge">🟣 Parvis Universitaire • Fumigènes & Mégaphones</div>
                <div class="chalk-doodle">📱 Live TikTok hostile en cours • 200 étudiants en cercle</div>
            `,
            opponentAttack: "« Vous prétendez défendre les femmes, mais votre gauche refuse de voir que l'insécurité et les agressions sexuelles sont importées par l'immigration massive ! »",
            choix: [
                {
                    texte: "« Posons les statistiques du ministère de la Justice : 85% des violences sexistes et sexuelles ont lieu dans le cercle familial ou par des proches, quelle que soit leur nationalité. »",
                    strategyName: "Démontage Statistique",
                    successOddsBonus: 10,
                    outcomeSuccess: {
                        impact: { followers: 7500, budget: 80, energy: 10, credibility: 16, tension: 0 },
                        consequenceText: "Un démontage clinique et irréfutable. Incapables d'opposer la moindre source, les militantes remballent leur matériel.",
                        tweets: [
                            { author: "Sociologue Genre", handle: "@SocioGenreFR", text: "Rappeler les données réelles de l'INSEE et de la justice face à la manipulation identitaire : parfait 📊👏" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -1800, budget: 0, energy: -14, credibility: -7, tension: 0 },
                        consequenceText: "Elle te coupe la parole en boucle avec des faits divers tragiques, rendant le débat inaudible.",
                        tweets: [
                            { author: "Militante Némésis", handle: "@Nemesis_Off", text: "L'extrême gauche préfère réciter des statistiques froides plutôt que d'entendre les victimes !" }
                        ]
                    }
                },
                {
                    texte: "« Instrumentaliser les femmes pour vendre votre racisme alors que vos partis sont remplis d'agresseurs, c'est le sommet de l'hypocrisie. »",
                    strategyName: "Clash Frontal",
                    successOddsBonus: 0,
                    outcomeSuccess: {
                        impact: { followers: 16000, budget: 120, energy: -16, credibility: 6, tension: 0 },
                        consequenceText: "La réponse coupe net son cadrage. Le direct s'interrompt brutalement sous les acclamations des étudiants.",
                        tweets: [
                            { author: "Zack", handle: "@Zack_93", text: "Némésis qui voulait faire son TikTok de propagande et qui repart en pleurant ptdrrr 😭💀" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -4500, budget: 0, energy: -20, credibility: -8, tension: 0 },
                        consequenceText: "Leur cadreuse isole un geste brusque de ta main et sort un clip ralenti titré 'Les antifas menacent nos militantes'.",
                        tweets: [
                            { author: "Collectif Némésis", handle: "@Nemesis_Off", text: "REGARDEZ : les militants de gauche agressent des jeunes femmes en plein jour." }
                        ]
                    }
                },
                {
                    texte: "« Pendant vos sketchs TikTok, nous collectons des fonds pour le planning familial menacé par vos amis de droite ! »",
                    strategyName: "Collecte Populaire",
                    successOddsBonus: 5,
                    outcomeSuccess: {
                        impact: { followers: 8500, budget: 450, energy: 6, credibility: 8, tension: 0 },
                        consequenceText: "Contre-pied parfait : 450 € récoltés sur le parvis en 15 minutes pour le refuge local !",
                        tweets: [
                            { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+450 € récoltés pour le refuge féministe face aux provocations réacs ! 💜💸" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -2200, budget: -60, energy: -12, credibility: -6, tension: 0 },
                        consequenceText: "L'ambiance est trop électrique et confuse pour tenir la caisse solidaire.",
                        tweets: [
                            { author: "Étudiant Pressé", handle: "@CampusLive", text: "Ça criait trop fort pour comprendre qui organisait quoi." }
                        ]
                    }
                }
            ]
        },
        {
            id: "debat_2_crypto",
            tier: 2,
            weight: 35, // 35% de chance
            characterName: "Maxime Crypto-Raffiot",
            characterRole: "Influenceur dropshipping & ultra-libéral expatrié",
            arenaName: "Live Débat TikTok • 18.5k viewers",
            arenaThemeClass: "theme-live-stream",
            arenaDecorHtml: `
                <div class="tier-decor-badge tiktok-badge">🔴 LIVE STREAM DIRECT • 18.5k spectateurs</div>
                <div class="tiktok-floating-hearts"><span class="heart-fx">💎</span><span class="heart-fx">🚀</span><span class="heart-fx">🔥</span></div>
            `,
            opponentAttack: "« La France est un enfer fiscal pour les bosseurs ! Pendant que vous réclamez le RSA universel pour dormir, moi je charbonne 80h par semaine à Dubaï ! »",
            choix: [
                {
                    texte: "Lui rappeler publiquement le montant exact des subventions publiques perçues par son entreprise avant son exil fiscal.",
                    strategyName: "Révélation dossier",
                    successOddsBonus: 10,
                    outcomeSuccess: {
                        impact: { followers: 12000, budget: 150, credibility: 10, energy: -10, tension: 15 },
                        consequenceText: "Le chat explose de spams 'CLIMATISEUR' et 'ESCROC'. Maxime coupe précipitamment son micro en direct.",
                        tweets: [
                            { author: "Actu Stream", handle: "@ActuStream", text: "L'influenceur de Dubaï humilié en direct sur ses aides d'État touchées en France 💀" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -2000, credibility: -8, energy: -20, tension: 20 },
                        consequenceText: "Ses modérateurs bannissent tes réponses et lancent leurs bots pour signaler ton compte.",
                        tweets: [
                            { author: "Team Crypto", handle: "@DubaiGrind", text: "Le gauchiste rase les murs face au réalisme entrepreneurial !" }
                        ]
                    }
                },
                {
                    texte: "Disséquer son modèle d'arnaque pyramidale et inviter ses viewers à fonder des coopératives de travailleurs.",
                    strategyName: "Vulgarisation choc",
                    successOddsBonus: 5,
                    outcomeSuccess: {
                        impact: { followers: 18000, credibility: 15, energy: -15, tension: 20 },
                        consequenceText: "Le live dépasse les 40 000 curieux. Des dizaines d'abonnés annulent leur formation payante dans le chat !",
                        tweets: [
                            { author: "Alerte Ponzi", handle: "@StopArnaques", text: "Analyse chirurgicale de l'arnaque dropshipping. Du grand art militant." }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -3000, credibility: -5, energy: -25, tension: 15 },
                        consequenceText: "Trop pointu pour TikTok : le chat décroche et l'algorithme fait chuter l'audience.",
                        tweets: [
                            { author: "Zappeur Web", handle: "@TrendScout", text: "Ça parlait droit des sociétés sur TikTok, c'était interminable." }
                        ]
                    }
                },
                {
                    texte: "« Garde tes NFT : nous on organise la grève des livreurs à vélo qui font vivre ton business de flemmard ! »",
                    strategyName: "Front de classe",
                    successOddsBonus: -5,
                    outcomeSuccess: {
                        impact: { followers: 22000, budget: 350, credibility: 8, energy: -10, tension: 25 },
                        consequenceText: "Des centaines de coursiers relaient le clash : la caisse des livreurs reçoit 350 € de dons en direct !",
                        tweets: [
                            { author: "Coursiers En Colère", handle: "@LivreursUnis", text: "Rappeler la réalité matérielle des exploités face aux rentiers de Dubaï : merci camarade !" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -3500, credibility: -10, energy: -20, tension: 25 },
                        consequenceText: "Maxime se moque de la précarité des travailleurs et ses viewers applaudissent son cynisme.",
                        tweets: [
                            { author: "Fan Dropship", handle: "@CashMachine", text: "Les perdants parlent de grève, les gagnants investissent !" }
                        ]
                    }
                }
            ]
        }
    ],

    // =========================================================
    // PALIER 3 : ENVERGURE NATIONALE (Médias, Plateaux TV, Matinales)
    // =========================================================
    3: [
        {
            id: "debat_3_messiha",
            tier: 3,
            weight: 35, // 35% de chance au P3
            characterName: "Jean Messiha",
            characterRole: "Polémiste d'extrême droite & agitateur de plateaux",
            arenaName: "Plateau TV Régional • Le Grand Face-à-Face du Soir",
            arenaThemeClass: "theme-plateau-debat",
            arenaDecorHtml: `
                <div class="tier-decor-badge tv-badge">📺 ÉDITION SPÉCIALE • Face-à-Face en Direct</div>
                <div class="tv-breaking-chiron"><span class="chiron-flash">DIRECT</span> TENSIONS SUR LES VALEURS DE LA RÉPUBLIQUE</div>
            `,
            opponentAttack: "« Vous, l'extrême gauche, vous êtes les fossoyeurs de notre nation ! Vous encouragez le chaos, la haine de la police et la submersion pour détruire la France ! »",
            choix: [
                {
                    texte: "« Jean, hurler sur tous les plateaux pour faire oublier que ton seul fait d'armes c'est d'avoir gratté ta com' sur une cagnotte de la division, c'est ridicule. »",
                    strategyName: "Clash Frontal",
                    successOddsBonus: 0,
                    outcomeSuccess: {
                        impact: { followers: 65000, budget: 400, energy: -20, credibility: 8, tension: 0 },
                        consequenceText: "Messiha devient écarlate, renverse son verre d'eau en direct et hurle sur la régie. L'extrait cartonne sur les réseaux.",
                        tweets: [
                            { author: "Zack", handle: "@Zack_93", text: "MESSIHA QUI RENVERSE SON VERRE D'EAU TELLEMENT IL A LE SEUM JE MEURS 😭😭💀🌊" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -18000, budget: 0, energy: -25, credibility: -10, tension: 0 },
                        consequenceText: "Le présentateur prend sa défense et te coupe le micro en qualifiant tes propos d'inacceptables.",
                        tweets: [
                            { author: "Présentateur TV", handle: "@PlateauDirect", text: "Rappel à l'ordre ferme : nous refusons les attaques personnelles sur notre antenne." }
                        ]
                    }
                },
                {
                    texte: "« Déconstruisons la mascarade : pendant que vous hystérisez les débats sur l'identité, les 500 plus grandes fortunes ont triplé leur patrimoine en pillant l'État. »",
                    strategyName: "Recentrage Économique",
                    successOddsBonus: 10,
                    outcomeSuccess: {
                        impact: { followers: 32000, budget: 250, energy: -12, credibility: 20, tension: 0 },
                        consequenceText: "Une magistrale démonstration d'économie politique. Messiha est hors-jeu et ne trouve rien à répliquer.",
                        tweets: [
                            { author: "Revue Regards", handle: "@Regards_fr", text: "Recadrer Messiha sur le partage des richesses : démonstration magistrale 📊👏" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -7000, budget: 0, energy: -18, credibility: -9, tension: 0 },
                        consequenceText: "Il rugit par-dessus tes explications et rend l'exposé totalement inaudible pour le public.",
                        tweets: [
                            { author: "Téléspectateur", handle: "@ZappingSoir", text: "Impossible de suivre avec le vacarme permanent sur ce plateau." }
                        ]
                    }
                },
                {
                    texte: "« Nos militants ne crient pas dans un micro doré : nous finançons des cantines populaires et des accès aux soins dans les déserts médicaux ! »",
                    strategyName: "Valorisation de Terrain",
                    successOddsBonus: 5,
                    outcomeSuccess: {
                        impact: { followers: 35000, budget: 1400, energy: 8, credibility: 10, tension: 0 },
                        consequenceText: "L'appel résonne fort chez les téléspectateurs : 1 400 € de dons versés sur la caisse du mouvement !",
                        tweets: [
                            { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+1 400 € de dons pour nos cantines suite au passage télé ! Merci à tous 🍲💸" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -9000, budget: -150, energy: -15, credibility: -8, tension: 0 },
                        consequenceText: "Le présentateur menace de couper le signal pour publicité clandestine non autorisée.",
                        tweets: [
                            { author: "Régie TV", handle: "@PlateauDirect", text: "Rappel : la collecte de fonds en direct est strictement encadrée par l'Arcom." }
                        ]
                    }
                }
            ]
        },
        {
            id: "debat_3_retailleau",
            tier: 3,
            weight: 20, // Plus rare (20% de chance au P3)
            characterName: "Bruno Retailleau",
            characterRole: "Ministre régalien de l'Ordre autoritaire",
            arenaName: "Plateau National • Édition Spéciale 20h30",
            arenaThemeClass: "theme-studio-ministeriel",
            arenaDecorHtml: `
                <div class="tier-decor-badge radio-badge"><span class="on-air-pulse">🔴 EN DIRECT</span> ÉDITION SPÉCIALE • ORDRE RÉGALIEN</div>
                <div class="audio-vumeter-bars"><span class="vubar"></span><span class="vubar"></span><span class="vubar"></span></div>
            `,
            opponentAttack: "« L'État de droit n'est ni intangible ni sacré lorsqu'il empêche de protéger nos concitoyens ! Votre laxisme désarme nos forces face à l'ensauvagement ! »",
            choix: [
                {
                    texte: "« Déclarer que l'État de droit n'est pas sacré quand on est ministre de l'Intérieur, c'est déchirer la Constitution pour paver la voie au fascisme. »",
                    strategyName: "Offensive Constitutionnelle",
                    successOddsBonus: 0,
                    outcomeSuccess: {
                        impact: { followers: 180000, budget: 1200, energy: -24, credibility: 10, tension: 0 },
                        consequenceText: "Retailleau est figé. L'extrait est repris en boucle sur tous les réseaux comme une leçon de droit constitutionnel.",
                        tweets: [
                            { author: "Ligue Droits Homme", handle: "@LDH_France", text: "Rappel constitutionnel indispensable : l'État de droit est le fondement de la République." }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -45000, budget: 0, energy: -28, credibility: -12, tension: 0 },
                        consequenceText: "Retailleau prend une mine martiale et te reproche d'insulter les forces de police devant deux millions de citoyens.",
                        tweets: [
                            { author: "Édito Figaro", handle: "@LeFigaro_Pol", text: "Bruno Retailleau a su maintenir l'autorité de l'État face aux invectives militantes." }
                        ]
                    }
                },
                {
                    texte: "« Supprimer la police de proximité, asphyxier les tribunaux et précariser les éducateurs crée le désordre que vous prétendez combattre. »",
                    strategyName: "Contre-Bilan Chiffré",
                    successOddsBonus: 10,
                    outcomeSuccess: {
                        impact: { followers: 90000, budget: 800, energy: -16, credibility: 25, tension: 0 },
                        consequenceText: "Une démonstration structurelle implacable. Les syndicats de magistrats saluent publiquement la rigueur de ton intervention.",
                        tweets: [
                            { author: "Magistrat Engagé", handle: "@JusticeIndé", text: "Une analyse brillante de l'asphyxie budgétaire des tribunaux 📊👏" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -20000, budget: 0, energy: -22, credibility: -10, tension: 0 },
                        consequenceText: "Le ministre balaie ton argumentation d'un revers de main en martelant des slogans sécuritaires simplistes.",
                        tweets: [
                            { author: "Téléspectateur", handle: "@AvisCitoyen", text: "Un peu trop abstrait et comptable face aux urgences du quotidien." }
                        ]
                    }
                },
                {
                    texte: "« Face à vos milliards d'euros en matériel répressif, nous finançons l'autodéfense juridique et les caisses de grève pour les droits de tous ! »",
                    strategyName: "Résistance Populaire",
                    successOddsBonus: 5,
                    outcomeSuccess: {
                        impact: { followers: 95000, budget: 3500, energy: 10, credibility: 12, tension: 0 },
                        consequenceText: "La ferveur militante explose : 3 500 € récoltés en un temps record pour la caisse anti-répression !",
                        tweets: [
                            { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+3 500 € collectés pendant le duel avec Retailleau ! Le peuple s'auto-organise 🪧💸" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -25000, budget: -500, energy: -20, credibility: -9, tension: 0 },
                        consequenceText: "Le ministre menace publiquement de lancer une procédure de dissolution administrative contre ton mouvement.",
                        tweets: [
                            { author: "Place Beauvau", handle: "@Interieur_Gov", text: "Signalement engagé auprès du parquet pour examen des activités de ce groupement." }
                        ]
                    }
                }
            ]
        }
    ],

    // =========================================================
    // PALIER 4 : RAYONNEMENT INTERNATIONAL (Le Grand Débat Décisif / Boss Mondiaux)
    // =========================================================
    4: [
        {
            id: "debat_4_bardella",
            tier: 4,
            weight: 50, // Le boss final classique (50% de chance au P4)
            characterName: "Jordan Bardella",
            characterRole: "Candidat du bloc nationalitaire / Boss de la Finale",
            arenaName: "Le Grand Débat Décisif • Studio 1 France Télévisions",
            arenaThemeClass: "theme-finale-presidentielle",
            arenaDecorHtml: `
                <div class="tier-decor-badge tv-badge">👑 LE GRAND DÉBAT DÉCISIF • AUDIENCE 10M CITOYENS</div>
                <div class="tv-breaking-chiron"><span class="chiron-flash">DIRECT 2027</span> LE CHOIX DE NATION • 48H DU VOTE FINAL</div>
            `,
            opponentAttack: "« Vous incarnez le chaos, la ruine fiscale et la submersion de notre patrie. Les Français doivent choisir entre la fierté retrouvée et votre tyrannie woke désordonnée ! »",
            choix: [
                {
                    texte: "« Jordan, ta fierté nationale c'est de servir la soupe aux milliardaires comme Bolloré tout en votant contre le SMIC et la retraite à 60 ans des ouvriers ! »",
                    strategyName: "Démolition de l'Imposture Sociale",
                    successOddsBonus: 0,
                    outcomeSuccess: {
                        impact: { followers: 500000, budget: 5000, energy: -30, credibility: 15, tension: 0 },
                        consequenceText: "La formule foudroie Bardella en mondovision. Privé de ses fiches préparées, il bafouille et perd ses nerfs devant 10 millions de spectateurs.",
                        tweets: [
                            { author: "Zack", handle: "@Zack_93", text: "BARDELLA DÉTRUIT EN DIRECT DEVANT 10 MILLIONS DE PERSONNES C'EST LE CLASH DU SIÈCLE 😭😭💀👑" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -120000, budget: 0, energy: -35, credibility: -15, tension: 0 },
                        consequenceText: "Bardella esquive avec un sourire narquois et récite une formule choc sur 'la haine des gauchistes', reprise en boucle sur les réseaux de droite.",
                        tweets: [
                            { author: "Frontières Média", handle: "@Frontieres_Off", text: "TRIOMPHE : Jordan Bardella terrasse son contradicteur lors du débat présidentiel !" }
                        ]
                    }
                },
                {
                    texte: "« Posons le programme de la rupture populaire : blocage immédiat des prix des aliments de base, bifurcation écologique et justice fiscale intégrale. »",
                    strategyName: "Programme Commun de Rupture",
                    successOddsBonus: 10,
                    outcomeSuccess: {
                        impact: { followers: 250000, budget: 3500, energy: -20, credibility: 35, tension: 0 },
                        consequenceText: "Une prestation magistrale d'homme d'État populaire. La clarté de tes mesures économiques convainc des millions d'indécis.",
                        tweets: [
                            { author: "Gabriel Zucman", handle: "@gabriel_zucman", text: "Une démonstration de rigueur fiscale et de justice économique qui redéfinit l'avenir du pays 📊👏" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -50000, budget: 0, energy: -25, credibility: -12, tension: 0 },
                        consequenceText: "Bardella te taxe d'utopiste dépensier avec des slogans simplistes sur la dette qui sèment le doute chez les modérés.",
                        tweets: [
                            { author: "Édito Éco Capital", handle: "@Eco_France", text: "Un programme de rupture qui inquiète les marchés et les chefs d'entreprise." }
                        ]
                    }
                },
                {
                    texte: "« Le pouvoir est dans la rue : nous appelons le peuple travailleur à remplir les caisses et à déferler vendredi soir pour la Marche historique ! »",
                    strategyName: "Appel au Soulèvement Populaire",
                    successOddsBonus: 5,
                    outcomeSuccess: {
                        impact: { followers: 300000, budget: 10000, energy: 15, credibility: 20, tension: 0 },
                        consequenceText: "L'appel provoque une marée de dons : 10 000 € affluent en une heure, sécurisant la logistique totale de la Marche de vendredi soir !",
                        tweets: [
                            { author: "Trésorier de Section", handle: "@CaisseSolidaire", text: "+10 000 € DE DONS EN DIRECT ! Les cars et sonos pour vendredi soir sont financés 🪧💸👑" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -70000, budget: -1000, energy: -30, credibility: -12, tension: 0 },
                        consequenceText: "Les présentateurs crient à la sédition anti-démocratique et coupent prématurément le débat.",
                        tweets: [
                            { author: "Chroniqueur Élysée", handle: "@EditoParis", text: "Un appel quasi insurrectionnel en pleine finale électorale qui choque les institutions." }
                        ]
                    }
                }
            ]
        },
        {
            id: "debat_4_trump",
            tier: 4,
            weight: 10, // Boss secret très rare (10% de chance au P4 !)
            characterName: "Donald Trump",
            characterRole: "Président des USA & Tycoon de l'Oligarchie Globale",
            arenaName: "Bureau Ovale • Sommet de Crise Internationale",
            arenaThemeClass: "theme-sommet-mondial",
            arenaDecorHtml: `
                <div class="tier-decor-badge us-badge">🦅 LIVE CNN WORLDWIDE • 45M Viewers • Sommet de Crise</div>
                <div class="tv-breaking-chiron"><span class="chiron-flash">WORLD ALERT</span> DIPLOMATIC STANDOFF AT THE OVAL OFFICE</div>
            `,
            opponentAttack: "« Your socialist movement is a disaster! You want to destroy business, ban oil and bring communism to Europe. We made deals with real leaders, not radicals! »",
            choix: [
                {
                    texte: "« Le monde n'est pas un casino de promoteur en faillite, Donald : tes forages et tes guerres pour le pétrole détruisent la seule planète qu'on a. »",
                    strategyName: "Clash Planétaire Écologiste",
                    successOddsBonus: 0,
                    outcomeSuccess: {
                        impact: { followers: 700000, budget: 6000, energy: -35, credibility: 20, tension: 0 },
                        consequenceText: "Trump quitte le pupitre furieux en marmonnant 'FAKE NEWS!'. Les images de sa déroute font le tour de tous les journaux télévisés de la planète.",
                        tweets: [
                            { author: "BBC Breaking", handle: "@BBCBreaking", text: "Dramatic scenes at the Oval Office as Trump walks away from bilateral debate 🌍💥" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -150000, budget: 0, energy: -40, credibility: -18, tension: 0 },
                        consequenceText: "Trump réplique avec des insultes bien huilées relayées par les médias conservateurs mondiaux.",
                        tweets: [
                            { author: "Fox News Live", handle: "@FoxAlerts", text: "Trump crushes European socialist in fiery showdown." }
                        ]
                    }
                },
                {
                    texte: "Dénoncer l'impérialisme des traités de libre-échange et opposer la souveraineté alimentaire et énergétique solidaire des peuples.",
                    strategyName: "Manifeste Internationaliste",
                    successOddsBonus: 10,
                    outcomeSuccess: {
                        impact: { followers: 400000, budget: 4500, energy: -25, credibility: 40, tension: 0 },
                        consequenceText: "Un discours salué par les mouvements altermondialistes des cinq continents. Tu deviens l'icône mondiale de la rupture démocratique.",
                        tweets: [
                            { author: "Naomi Klein", handle: "@NaomiAKlein", text: "A historic, principled speech against corporate empire. Courage is back on the world stage." }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -80000, budget: 0, energy: -30, credibility: -15, tension: 0 },
                        consequenceText: "Les commentateurs financiers dénoncent un discours anti-occidental irresponsable.",
                        tweets: [
                            { author: "Wall Street Post", handle: "@MarketDaily", text: "Radical rhetoric sparks investor anxiety over future international alliances." }
                        ]
                    }
                },
                {
                    texte: "Lancer un appel direct aux syndicats américains et aux ouvriers des usines automobiles à converger dans une grève transatlantique.",
                    strategyName: "Grève Générale Mondiale",
                    successOddsBonus: 5,
                    outcomeSuccess: {
                        impact: { followers: 500000, budget: 12000, energy: 20, credibility: 25, tension: 0 },
                        consequenceText: "L'appel devient viral chez les travailleurs de Détroit et du monde entier : 12 000 € de soutien affluent de la diaspora et des syndicats !",
                        tweets: [
                            { author: "UAW Labor Union", handle: "@UAW_Workers", text: "Solidarity with our French comrades! One struggle, one fight worldwide ✊🇺🇸🇫🇷" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -100000, budget: -1500, energy: -35, credibility: -15, tension: 0 },
                        consequenceText: "La diplomatie américaine menace la France de sanctions douanières immédiates.",
                        tweets: [
                            { author: "Reuters Global", handle: "@ReutersWorld", text: "Diplomatic row escalates following calls for international industrial action." }
                        ]
                    }
                }
            ]
        }
    ]
};