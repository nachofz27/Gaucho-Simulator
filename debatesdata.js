// =========================================================
// BASE DE DONNÉES DES DÉBATS PAR PALIERS (GAUCHO SIMULATOR)
// =========================================================
window.DEBATES_DATABASE = {
    // PALIER 1 : La Salle de TD / Le Fond du Cours (Faculté)
    1: [
        {
            id: "debat_1_kevin",
            tier: 1,
            arenaName: "Salle 104 • Faculté des Lettres",
            tierLabel: "Palier 1 : Clash Universitaire",
            characterName: "Kevin l'Incel",
            characterRole: "Étudiant aigri de L2 & militant masculiniste",
            opponentAttack: "Le féminisme a détruit le marché de la séduction ! Vous voulez interdire aux hommes d'exister et vos théories du genre détruisent les facs !",
            choix: [
                {
                    texte: "Démonter posément ses arguments avec des statistiques de l'INSEE sur les inégalités.",
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
                    texte: "L'attaquer frontalement sur son aigreur personnelle devant toute la classe.",
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
                    texte: "Prendre le reste de la classe à témoin et organiser un vote improvisé.",
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
        }
    ],

    // PALIER 2 : Le Live TikTok / Réseaux Sociaux
    2: [
        {
            id: "debat_2_crypto",
            tier: 2,
            arenaName: "Live Débat TikTok • 18.5k viewers",
            tierLabel: "Palier 2 : Duel Numérique",
            characterName: "Maxime Crypto-Raffiot",
            characterRole: "Influenceur dropshipping & ultra-libéral",
            opponentAttack: "La France est un enfer fiscal ! Pendant que vous demandez le RSA universel, moi je bosse 80 heures par semaine à Dubaï !",
            choix: [
                {
                    texte: "Lui rappeler publiquement le montant de ses aides d'État reçues avant son exil.",
                    strategyName: "Révélation dossier",
                    successOddsBonus: 10,
                    outcomeSuccess: {
                        impact: { followers: 12000, credibility: 10, budget: 150, energy: -10, tension: 15 },
                        consequenceText: "Le chat explose de spams 'CLIMATISEUR' et 'ESCROC'. Maxime coupe précipitamment son micro en direct.",
                        tweets: [
                            { author: "Veille Réseaux", handle: "@ActuStream", text: "Un influenceur de Dubaï humilié en direct sur ses subventions publiques 💀" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -2000, credibility: -8, energy: -20, tension: 20 },
                        consequenceText: "Ses modérateurs bloquent tes messages dans le chat. Ses fans floodent tes propres vidéos avec des signalements de masse.",
                        tweets: [
                            { author: "Team Crypto", handle: "@DubaiGrind", text: "Le gauchiste rase les murs face au réalisme entrepreneurial !" }
                        ]
                    }
                },
                {
                    texte: "Disséquer son modèle économique d'arnaque pyramidale en direct.",
                    strategyName: "Vulgarisation choc",
                    successOddsBonus: 5,
                    outcomeSuccess: {
                        impact: { followers: 18000, credibility: 15, energy: -15, tension: 20 },
                        consequenceText: "Le live dépasse les 40 000 spectateurs. Plusieurs de ses clients résilient leur abonnement en direct dans les commentaires !",
                        tweets: [
                            { author: "Alerte Ponzi", handle: "@StopArnaques", text: "Analyse chirurgicale de l'arnaque dropshipping. Du grand art militant." }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -3000, credibility: -5, energy: -25, tension: 15 },
                        consequenceText: "Trop technique. Le chat s'ennuie, poste des emojis de sommeil et l'algorithme coupe le pic d'audience.",
                        tweets: [
                            { author: "Zappeur Web", handle: "@TrendScout", text: "Ça parlait fiscalité sur TikTok... C'était assommant." }
                        ]
                    }
                },
                {
                    texte: "Inviter ses viewers à boycotter ses formations et à rejoindre une coopérative.",
                    strategyName: "Agit-prop de masse",
                    successOddsBonus: -10,
                    outcomeSuccess: {
                        impact: { followers: 25000, budget: 400, credibility: 8, energy: -10, tension: 25 },
                        consequenceText: "Le serveur Discord de ton organisation sature sous l'afflux de 300 nouveaux inscrits en rupture avec le mirage libéral.",
                        tweets: [
                            { author: "Reconversion Pro", handle: "@ExTrader", text: "J'ai quitté la crypto ce soir après ce live. Merci pour l'électrochoc." }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -4000, credibility: -12, energy: -20, tension: 30 },
                        consequenceText: "Le streamer te coupe le live et t'accuse de faire du prosélytisme illégal. La commu hostile te prend pour cible.",
                        tweets: [
                            { author: "Dubaï Fan", handle: "@HustleFr", text: "Le gaucho venu gratter du buzz sur le dos du boss, pathétique." }
                        ]
                    }
                }
            ]
        }
    ],

    // PALIER 3 : La Grande Conférence Universitaire
    3: [
        {
            id: "debat_3_prof",
            tier: 3,
            arenaName: "Grand Amphi Richelieu • Sorbonne",
            tierLabel: "Palier 3 : Tribune Académique",
            characterName: "Pr. Édouard De La Roncière",
            characterRole: "Essayiste médiatique & académicien réactionnaire",
            opponentAttack: "Votre égalitarisme aveugle est une insulte au génie français ! Vous détruisez notre langue et notre culture millénaire par culpabilisme !",
            choix: [
                {
                    texte: "Citer ses propres écrits de jeunesse où il défendait l'exact opposé.",
                    strategyName: "Contradiction d'archives",
                    successOddsBonus: 10,
                    outcomeSuccess: {
                        impact: { followers: 35000, credibility: 20, energy: -15, tension: 15 },
                        consequenceText: "Silence de mort à la tribune. Le professeur rougit, cherche ses notes et avale trois gorgées d'eau tremblotantes.",
                        tweets: [
                            { author: "Revue Historique", handle: "@HistoireCritique", text: "La Roncière atomisé par ses propres thèses de 1984. Un moment de grâce intellectuelle." }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -5000, credibility: -10, energy: -20, tension: 20 },
                        consequenceText: "L'académicien botte en touche avec du mépris littéraire et retourne le public bourgeois de la salle en sa faveur.",
                        tweets: [
                            { author: "Le Figaro Tribune", handle: "@DebatIdees", text: "La jeunesse radicale impuissante face à l'éloquence de nos grands clercs." }
                        ]
                    }
                },
                {
                    texte: "Défendre l'histoire populaire et ouvrière de la France contre son récit aristocratique.",
                    strategyName: "Histoire par le bas",
                    successOddsBonus: 5,
                    outcomeSuccess: {
                        impact: { followers: 45000, budget: 300, credibility: 18, energy: -20, tension: 20 },
                        consequenceText: "Une ovation debout venue des balcons d'étudiants fait vibrer les moulures de l'amphithéâtre. Le camp d'en face est sonné.",
                        tweets: [
                            { author: "Front Social", handle: "@MemoirePopulaire", text: "Frissons à la Sorbonne. La Commune de Paris revit ce soir !" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -8000, credibility: -12, energy: -25, tension: 25 },
                        consequenceText: "Le modérateur conservateur coupe ton micro pour 'dépassement excessif du temps académique imparti'.",
                        tweets: [
                            { author: "Chroniqueur Salon", handle: "@LettresModernes", text: "Un meeting syndical improvisé dans un lieu de savoir... Quel saccage." }
                        ]
                    }
                },
                {
                    texte: "Déposer ostensiblement un livre de sociologie critique sur son pupitre et refuser de polémiquer.",
                    strategyName: "Coup d'éclat symbolique",
                    successOddsBonus: -15,
                    outcomeSuccess: {
                        impact: { followers: 60000, credibility: 10, energy: -5, tension: 35 },
                        consequenceText: "L'image du livre posé devant l'académicien médusé fait la une des gazettes numériques. Symbole d'une rupture générationnelle.",
                        tweets: [
                            { author: "Politis Web", handle: "@LutteImages", text: "Le geste fort : la jeunesse refuse de dialoguer avec les rentiers du siècle passé." }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -15000, credibility: -25, energy: -15, tension: 30 },
                        consequenceText: "La presse fustige une 'attitude sectaire et incapable d'affronter la contradiction intellectuelle'.",
                        tweets: [
                            { author: "Éditorialiste", handle: "@LePointPoint", text: "Quand l'extrême gauche capitule devant l'érudition, elle claque la porte." }
                        ]
                    }
                }
            ]
        }
    ],

    // PALIER 4 : Le Studio Radio National
    4: [
        {
            id: "debat_4_matinale",
            tier: 4,
            arenaName: "Studio 1 • Grande Matinale Ondes Nationales",
            tierLabel: "Palier 4 : Matinale Radio",
            characterName: "Christian Barbier-Fou",
            characterRole: "Éditorialiste néolibéral aux 12 chroniques quotidiennes",
            opponentAttack: "Votre programme, c'est le Venezuela en pire ! Si vous gagnez, la bourse s'effondre à 9h02 et les usines délocalisent en Allemagne avant midi !",
            choix: [
                {
                    texte: "Démontrer point par point le coût exorbitant du capital et de l'évasion fiscale pour l'économie.",
                    strategyName: "Bataille du chiffrage",
                    successOddsBonus: 10,
                    outcomeSuccess: {
                        impact: { followers: 80000, budget: 800, credibility: 25, energy: -20, tension: 15 },
                        consequenceText: "Barbier-Fou perd pied sur ses propres fiches économiques. L'intervieweur principal doit recadrer son propre collègue !",
                        tweets: [
                            { author: "Alternatives Eco", handle: "@AlterEco", text: "100 milliards de fraude fiscale rappelés en direct sur la matinale. Implacable." }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -15000, credibility: -12, energy: -30, tension: 20 },
                        consequenceText: "Il noie le poisson en empilant des termes boursiers techniques jusqu'au jingle du flash info de 8h30.",
                        tweets: [
                            { author: "Audit Marchés", handle: "@BourseDirect", text: "L'amateurisme économique des révolutionnaires étalé au grand jour." }
                        ]
                    }
                },
                {
                    texte: "Lui balancer le montant de ses jetons de présence au conseil d'administration d'un géant du CAC 40.",
                    strategyName: "Conflit d'intérêts",
                    successOddsBonus: 0,
                    outcomeSuccess: {
                        impact: { followers: 120000, budget: 500, credibility: 18, energy: -15, tension: 35 },
                        consequenceText: "Gros malaise en studio. Les techniciens en régie s'étouffent de rire derrière la vitre. L'extrait cartonne sur les réseaux.",
                        tweets: [
                            { author: "Arrêt sur Images", handle: "@MediasCritique", text: "L'éditorialiste 'neutre' rattrapé par ses chèques d'actionnaire en plein direct 💣" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -20000, credibility: -20, energy: -25, tension: 40 },
                        consequenceText: "Le directeur de l'antenne monte au créneau et menace de bannir ton mouvement des ondes du service public.",
                        tweets: [
                            { author: "Association Médias", handle: "@PresseLibre", text: "Attaque ad hominem inacceptable dans une matinale d'information." }
                        ]
                    }
                },
                {
                    texte: "Prendre à témoin les travailleurs précaires de la radio qui nettoient le studio à l'aube.",
                    strategyName: "Front de classe",
                    successOddsBonus: 5,
                    outcomeSuccess: {
                        impact: { followers: 95000, budget: 1200, credibility: 22, energy: -15, tension: 25 },
                        consequenceText: "Coup de génie oratoire : le standard téléphonique est submergé d'auditeurs ouvriers qui soutiennent ton appel.",
                        tweets: [
                            { author: "CGT Radio France", handle: "@SyndicatOndes", text: "Merci de rendre visibles les invisibles de nos régies et de nos rédactions." }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -12000, credibility: -10, energy: -20, tension: 25 },
                        consequenceText: "L'éditorialiste te taxe de 'démagogie larmoyante' et lance la météo pour couper court.",
                        tweets: [
                            { author: "Auditeur Moyen", handle: "@RadioReveil", text: "On veut des infos le matin, pas des cours de morale." }
                        ]
                    }
                }
            ]
        }
    ],

    // PALIER 5 : Le Grand Débat Télévisé Prime Time
    5: [
        {
            id: "debat_5_primetime",
            tier: 5,
            arenaName: "Plateau 1 • 20h50 En Direct National • 4.2M Téléspectateurs",
            tierLabel: "Palier 5 : Le Duel Décisif",
            characterName: "Stanislas De Val-Montant",
            characterRole: "Candidat du bloc bourgeois & favori des oligarques",
            opponentAttack: "Vous représentez le chaos, la guerre civile et la ruine de la République ! La France ne se laissera pas détruire par vos hordes de bloqueurs !",
            choix: [
                {
                    texte: "Regarder droit dans la caméra et prononcer l'adresse historique au peuple qui travaille.",
                    strategyName: "Appel au Peuple",
                    successOddsBonus: 5,
                    outcomeSuccess: {
                        impact: { followers: 300000, budget: 2500, credibility: 30, energy: -20, tension: 40 },
                        consequenceText: "Moment de bascule historique. Le silence sur le plateau est total. La courbe des sondages s'inverse en direct devant les sondeurs médusés !",
                        tweets: [
                            { author: "Direct Sondage", handle: "@IpsosOpinion", text: "Bascule sans précédent : +12 points d'adhésion en 4 minutes de temps de parole !" },
                            { author: "Voix Populaire", handle: "@LaMarche2027", text: "Les larmes aux yeux devant la télé. Cette fois, la victoire est à portée de main." }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -50000, credibility: -25, energy: -40, tension: 45 },
                        consequenceText: "Une hésitation d'une seconde, un mot buté... Les commentateurs dépeignent une tirade creuse et improvisée.",
                        tweets: [
                            { author: "Décryptage TV", handle: "@PolitiqueHebdo", text: "Le grand discours a fait pschitt. L'insolence a ses limites face à la stature présidentielle." }
                        ]
                    }
                },
                {
                    texte: "Pousser le candidat oligarchique à la faute en l'acculant sur le train de vie de ses parrains milliardaires.",
                    strategyName: "Pression maximale",
                    successOddsBonus: 10,
                    outcomeSuccess: {
                        impact: { followers: 450000, budget: 3500, credibility: 25, energy: -25, tension: 50 },
                        consequenceText: "K.O. debout ! De Val-Montant s'énerve, frappe du poing sur son pupitre et insulte la régie en direct devant 4 millions de Français !",
                        tweets: [
                            { author: "France Info TV", handle: "@AlertesDirect", text: "FLASH : Incident majeur en direct, le favori perd ses nerfs en plein prime time !" },
                            { author: "Génération Lutte", handle: "@VictoirePopu", text: "Il a implosé en direct live ! Rendez les clés de l'Élysée !" }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -80000, credibility: -30, energy: -35, tension: 50 },
                        consequenceText: "Tu frôles la diffamation en direct. Les animateurs te somment de retirer tes propos sous peine d'interruption du signal.",
                        tweets: [
                            { author: "Chroniqueur Élysée", handle: "@PouvoirEnPlace", text: "Une violence verbale inédite qui discrédite définitivement toute prétention à gouverner." }
                        ]
                    }
                },
                {
                    texte: "Proposer solennellement la proclamation immédiate de la 6e République et la convocation de la Constituante.",
                    strategyName: "Rupture constituante",
                    successOddsBonus: -5,
                    outcomeSuccess: {
                        impact: { followers: 500000, budget: 5000, credibility: 35, energy: -30, tension: 60 },
                        consequenceText: "Onde de choc politique ! Les cortèges sauvages descendent fêter l'annonce dans les grandes villes avant même la fin de l'émission.",
                        tweets: [
                            { author: "Dépêche AFP", handle: "@AFP", text: "Scènes de liesse populaire à Paris, Lyon et Marseille après le débat du 2nd tour." }
                        ]
                    },
                    outcomeFailure: {
                        impact: { followers: -100000, credibility: -35, energy: -40, tension: 60 },
                        consequenceText: "Panique des marchés et matraquage médiatique unanime : le spectre du désordre fait reculer les indécis.",
                        tweets: [
                            { author: "Éco Marchés", handle: "@LeMondeEco", text: "Les annonces constitutionnelles sèment la panique auprès des partenaires européens." }
                        ]
                    }
                }
            ]
        }
    ]
};