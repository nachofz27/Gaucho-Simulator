document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // CONNEXION SUPABASE (CLASSEMENT EN LIGNE)
    // ==========================================
    const SUPABASE_URL = 'https://yjiajcxokjsoxhsdxlly.supabase.co';
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqaWFqY3hva2pzb3hoc2R4bGx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0MDEwMjgsImV4cCI6MjEwNDk3NzAyOH0.whCA3b2pre--mGh0ZSG96vU9N94UnL8-0PQwW-6aZ7A';
    const supabaseClient = (typeof supabase !== 'undefined') 
        ? supabase.createClient(SUPABASE_URL, SUPABASE_KEY) 
        : null;
window.supabaseClient = supabaseClient;
    let deviceId = localStorage.getItem('player_device_id');
    if (!deviceId) {
        deviceId = 'dev_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
        localStorage.setItem('player_device_id', deviceId);
    }
    
    // ==========================================
    // 1. ÉTAT DU JEU
    // ==========================================
    let gameState = {
        turn: 0,
        selectedCharacter: null,
        stats: {
            followers: 5000,
            budget: 1000,
            energy: 100,
            credibility: 25,
            tension: 0
        },
        highestOpponentName: "Aucun contradicteur affronté",
        highestOpponentScore: 0,
        selectedAlly: null,
        historyEventsSeen: [],
        purchasedLogistics: [],
        completedDebates: [],
        timeline: [
            "Début Septembre 2026 (Rentrée sociale)",
            "Mi-Septembre 2026",
            "Fin Septembre 2026",
            "Début Octobre 2026",
            "Mi-Octobre 2026",
            "Fin Octobre 2026",
            "Début Novembre 2026",
            "Mi-Novembre 2026",
            "Fin Novembre 2026",
            "Début Décembre 2026",
            "Mi-Décembre 2026 (Repas de section)",
            "Fin Décembre 2026 (Fêtes en famille)",
            "Début Janvier 2027 (Vœux de combat)",
            "Mi-Janvier 2027",
            "Fin Janvier 2027",
            "Début Février 2027",
            "Mi-Février 2027",
            "Fin Février 2027",
            "Début Mars 2027 (Entrée en campagne)",
            "Mi-Mars 2027",
            "Fin Mars 2027 (Sprint du 1er Tour)",
            "Début Avril 2027 (Dernière ligne droite)",
            "Mi-Avril 2027 (1er Tour de l'Élection)",
            "Fin Avril 2027 (Entre-deux-tours)",
            "Début Mai 2027 (2nd Tour Décisif)"
        ]
    };
    window.gameState = gameState;
    
    let currentCalculatedScore = 0;
    let currentTierName = "Palier 1 : Militant de Section";

    // ==========================================
    // 2. SÉLECTION DES ÉLÉMENTS DU DOM
    // ==========================================
    const screens = document.querySelectorAll('.screen');
    const btnStart = document.getElementById('btn-start');
    const charButtons = document.querySelectorAll('.char-card');
    const btnNextTurn = document.getElementById('btn-next-turn');
    const btnRestart = document.getElementById('btn-restart');
    const btnEndToMenu = document.getElementById('btn-end-to-menu');
    if (btnEndToMenu) {
        btnEndToMenu.addEventListener('click', () => {
            showScreen('screen-menu');
        });
    }
    const btnMenuLeaderboard = document.getElementById('btn-menu-leaderboard');
    const liveMilitantTier = document.getElementById('live-militant-tier');
    const btnSoundChar = document.getElementById('btn-sound-character');

    
    const dateDisplay = document.getElementById('current-date');
    const statFollowers = document.getElementById('stat-followers');
    const statBudget = document.getElementById('stat-budget');
    const statEnergy = document.getElementById('stat-energy');
    const statCredibility = document.getElementById('stat-credibility');
    const statEnergyText = document.getElementById('stat-energy-text');
    const statEnergyFill = document.getElementById('stat-energy-fill');
    const statTensionText = document.getElementById('stat-tension-text');
    const statTensionFill = document.getElementById('stat-tension-fill');

    const debateArenaBadge = document.getElementById('debate-arena-badge');
    const debateTierTag = document.getElementById('debate-tier-tag');
    const debateTitle = document.getElementById('debate-title');
    const debateOpponentName = document.getElementById('debate-opponent-name');
    const debateOpponentDesc = document.getElementById('debate-opponent-desc');
    const debateDesc = document.getElementById('debate-desc');
    const debateOddsVal = document.getElementById('debate-odds-val');
    const btnStartDuel = document.getElementById('btn-start-duel');
    
    const eventCard = document.getElementById('event-card');
    const eventTitle = document.getElementById('event-title');
    const eventDesc = document.getElementById('event-description');
    const choicesContainer = document.getElementById('choices-container');
    const eventThemeBadge = document.getElementById('event-theme-badge');
    const eventCharacterTag = document.getElementById('event-character-tag');
    const eventCharacterName = document.getElementById('event-character-name');
    const eventDescription = document.getElementById('event-description');
    
    const tweetsContainer = document.getElementById('tweets-container');
    const socialPanel = document.getElementById('social-feed-panel');
    const btnToggleFeed = document.getElementById('btn-toggle-feed-mobile');
    const btnCloseFeed = document.getElementById('btn-close-feed');
    
    const resultText = document.getElementById('result-text');
    const resultImpacts = document.getElementById('result-impacts');
    const btnCharBack = document.getElementById('btn-character-back');
    if (btnCharBack) {
        btnCharBack.addEventListener('click', () => {
            showScreen('screen-menu');
        });
    }
    
    const endTitle = document.getElementById('end-title');
    const endBadge = document.getElementById('end-badge');
    const finalScoreDisplay = document.getElementById('final-score');
    const scoreRank = document.getElementById('score-rank');
    const endNarrative = document.getElementById('end-narrative');
    const saveScoreForm = document.getElementById('save-score-form');
    const playerPseudoInput = document.getElementById('player-pseudo');
    const btnSaveScore = document.getElementById('btn-save-score');
    const btnViewLeaderboard = document.getElementById('btn-view-leaderboard');
    
    const leaderboardBody = document.getElementById('leaderboard-body');
    const btnBackMenu = document.getElementById('btn-back-menu');
    const btnClearScores = document.getElementById('btn-clear-scores');

    // Gestion de la modale Mentions légales & Crédits
    const modalLegal = document.getElementById('modal-legal');
    const btnOpenLegal = document.getElementById('btn-open-legal');
    const btnCloseLegal = document.getElementById('btn-close-legal');
    const btnCloseLegalBottom = document.getElementById('btn-close-legal-bottom');

    if (btnOpenLegal && modalLegal) {
        btnOpenLegal.addEventListener('click', () => {
            modalLegal.classList.add('active');
        });
    }

    const closeLegal = () => {
        if (modalLegal) modalLegal.classList.remove('active');
    };

    if (btnCloseLegal) btnCloseLegal.addEventListener('click', closeLegal);
    if (btnCloseLegalBottom) btnCloseLegalBottom.addEventListener('click', closeLegal);
    
    // Fermer en cliquant en dehors de la carte
    if (modalLegal) {
        modalLegal.addEventListener('click', (e) => {
            if (e.target === modalLegal) closeLegal();
        });
    }

    // Gestion de la boîte à idées
    const modalFeedback = document.getElementById('modal-feedback');
    const btnOpenFeedback = document.getElementById('btn-open-feedback');
    const btnCloseFeedback = document.getElementById('btn-close-feedback');
    const btnCancelFeedback = document.getElementById('btn-cancel-feedback');

    if (btnOpenFeedback && modalFeedback) {
        btnOpenFeedback.addEventListener('click', () => {
            modalFeedback.classList.add('active');
        });
    }

    const closeFeedbackModal = () => {
        if (modalFeedback) modalFeedback.classList.remove('active');
    };

    if (btnCloseFeedback) btnCloseFeedback.addEventListener('click', closeFeedbackModal);
    if (btnCancelFeedback) btnCancelFeedback.addEventListener('click', closeFeedbackModal);

    if (modalFeedback) {
        modalFeedback.addEventListener('click', (e) => {
            if (e.target === modalFeedback) closeFeedbackModal();
        });
    }



// ==========================================
// SYSTÈME DE PALIERS & TITRES DYNAMIQUES
// ==========================================
function getCurrentTierNumber() {
    const followers = Math.max(0, (gameState && gameState.stats) ? (gameState.stats.followers || 0) : 0);
    let tier = 1;

    if (followers >= 200000) tier = 4;
    else if (followers >= 60000) tier = 3;
    else if (followers >= 15000) tier = 2;
    else tier = 1;

    if (gameState) {
        if (!gameState.highestTierReached || tier > gameState.highestTierReached) {
            gameState.highestTierReached = tier;
        }
        return gameState.highestTierReached;
    }

    return tier;
}
// ==========================================
// COMPATIBILITÉ SCORE / PIVOT PREMIER TOUR
// ==========================================
function calculateUnderTheHoodScore() {
    if (!gameState || !gameState.stats) return 0;
    const followers = Math.max(0, gameState.stats.followers || 0);
    const cred = Math.max(1, gameState.stats.credibility || 50);
    // Score pondéré notoriété x crédibilité
    return Math.round(followers * (cred / 50));
}

function getDynamicTier() {
    const tier = getCurrentTierNumber();
    switch (tier) {
        case 4: return "Poids Lourd National (Palier 4)";
        case 3: return "Porte-Parole Médiatique (Palier 3)";
        case 2: return "Figure Locale & Régionale (Palier 2)";
        case 1: return "Militant de Section (Palier 1)";
        default: return "Militant de Section (Palier 1)";
    }
}


    // ==========================================
    // 3. GESTION DES ÉCRANS
    // ==========================================
    function showScreen(screenId) {
        screens.forEach(screen => {
            screen.classList.remove('active');
        });
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
        }
    }
    window.showScreen = showScreen;
    window.playTurn = playTurn;
    window.updateStatsUI = updateStatsUI;

    // ==========================================
    // 4. FORMATAGE ET UTILITAIRES
    // ==========================================
    function formatFollowers(count) {
        if (count >= 1_000_000) {
            return (count / 1_000_000).toFixed(1).replace('.0', '').replace('.', ',') + 'M followers';
        }
        if (count >= 1_000) {
            return (count / 1_000).toFixed(1).replace('.0', '').replace('.', ',') + 'k followers';
        }
        return Math.round(count) + ' followers';
    }

    function appendImpactList(text, value) {
        if (!resultImpacts) return;
        const li = document.createElement('li');
        li.textContent = text;
        li.style.color = value > 0 ? '#22c55e' : '#ef4444';
        resultImpacts.appendChild(li);
    }

    // ==========================================
    // 5. INITIALISATION & TOURS DE JEU
    // ==========================================
   // Dictionnaire des statistiques de départ par archétype
    const CHARACTER_STARTING_STATS = {
        'syndicaliste': {
            followers: 4000,
            budget: 900,
            energy: 80,
            credibility: 35,
            tension: 3
        },
        'écolo': {
            followers: 5000,
            budget: 1000,
            energy: 90,
            credibility: 20,
            tension: 0
        },
        'etudiant_bloqueur': {
            followers: 7000,
            budget: 700,
            energy: 100,
            credibility: 20,
            tension: 5
        },
        'feministe': {
            followers: 5000,
            budget: 1000,
            energy: 100,
            credibility: 25,
            tension: 3
        },
        'queer': {
            followers: 7000,
            budget: 1000,
            energy: 100,
            credibility: 25,
            tension: 0
        },
        'anticolonial': {
            followers: 5000,
            budget: 1000,
            energy: 100,
            credibility: 25,
            tension: 0
        },
        'attache_parlementaire': {
            followers: 8000,
            budget: 1200,
            energy: 100,
            credibility: 30,
            tension: 0
        }
    };

    function initGame(charType) {
        gameState.turn = 0;
        gameState.selectedCharacter = charType;
        
        // Attribution des stats uniques de l'archétype choisi
        const baseStats = CHARACTER_STARTING_STATS[charType] || {
            followers: 5000,
            budget: 1000,
            energy: 100,
            credibility: 25,
            tension: 0
        };

        gameState.stats = { ...baseStats };
        
        gameState.completedDebates = [];
        gameState.historyEventsSeen = [];
        gameState.highestOpponentName = "Aucun (Lutte autonome)";
        gameState.highestOpponentScore = 0;
        gameState.selectedAlly = null;

        // Nettoyage visuel obligatoire pour repartir à zéro
        const eventCard = document.getElementById('event-card');
        const choicesContainer = document.getElementById('choices-container');
        const packZone = document.getElementById('pack-opening-zone');
        const allyCardRevealed = document.getElementById('ally-card-revealed');
        const packsContainer = document.querySelector('.packs-container');

        if (eventCard) eventCard.style.display = '';
        if (choicesContainer) choicesContainer.style.display = '';
        if (packZone) packZone.style.display = 'none';
        if (allyCardRevealed) allyCardRevealed.style.display = 'none';
        if (packsContainer) packsContainer.style.display = 'grid';

        updateStatsUI();
        showScreen('screen-game');
        playTurn();
    }


        if (tweetsContainer) {
            tweetsContainer.innerHTML = `
                <div id="feed-placeholder" style="text-align: center; padding: 24px 10px; color: #7A6662; font-style: italic; font-size: 0.84rem; line-height: 1.4;">
                    📢 Les réseaux sont calmes pour l'instant... Les premières réactions à tes choix apparaîtront ici !
                </div>
            `;
        }
    
    function updateStatsUI() {
        if (dateDisplay) {
    const rawDate = gameState.timeline[gameState.turn] || '';
    if (rawDate.includes('(')) {
        const parts = rawDate.split('(');
        const mainDate = parts[0].trim();
        const subDate = '(' + parts[1].trim();
        dateDisplay.innerHTML = `<span class="date-main">${mainDate}</span><span class="date-sub">${subDate}</span>`;
    } else {
        dateDisplay.innerHTML = `<span class="date-main">${rawDate}</span>`;
    }
}
        
        // Mise à jour du compteur d'abonnés dans le feed X
        if (statFollowers) {
            statFollowers.textContent = formatFollowers(gameState.stats.followers);
        }
        
        if (statBudget) statBudget.textContent = `${Math.round(gameState.stats.budget).toLocaleString('fr-FR')} €`;

        // Énergie (Jauge + Chiffre)
        const energy = Math.max(0, Math.min(100, Math.round(gameState.stats.energy)));
        if (statEnergyText) statEnergyText.textContent = `${energy}%`;
        if (statEnergyFill) {
            statEnergyFill.style.width = `${energy}%`;
            if (energy > 50) {
                statEnergyFill.style.backgroundColor = '#22c55e';
            } else if (energy > 25) {
                statEnergyFill.style.backgroundColor = '#f97316';
            } else {
                statEnergyFill.style.backgroundColor = '#ef4444';
            }
        }

        // Tension / Conflictualité 🔥
        const tension = Math.max(0, Math.min(100, Math.round(gameState.stats.tension || 0)));
        if (statTensionText) statTensionText.textContent = `${tension}%`;
        if (statTensionFill) {
            statTensionFill.style.width = `${tension}%`;
            if (tension >= 80) {
                statTensionFill.style.backgroundColor = '#dc2626';
            } else if (tension >= 45) {
                statTensionFill.style.backgroundColor = '#ea580c';
            } else {
                statTensionFill.style.backgroundColor = '#f59e0b';
            }
        }

        // Calcul du seuil de débat restant
        const statTensionNext = document.getElementById('stat-tension-next');
        if (statTensionNext) {
            const debateThresholds = [
                { level: 1, minTension: 15 },
                { level: 2, minTension: 35 },
                { level: 3, minTension: 60 },
                { level: 4, minTension: 85 }
            ];

            // Trouver le prochain palier non encore disputé
            const nextTarget = debateThresholds.find(
                d => !gameState.completedDebates.includes(d.level)
            );

            if (!nextTarget) {
                statTensionNext.textContent = "Arène max atteinte 👑";
            } else {
                const diff = nextTarget.minTension - tension;
                if (diff <= 0) {
                statTensionNext.innerHTML = `Débat suiv.= <span style="font-size: 0.65rem;">0 🔥</span>`;
                statTensionNext.style.color = "#dc2626";
            } else {
                statTensionNext.innerHTML = `Débat suiv.= <span style="font-size: 0.65rem;">${diff} 🔥</span>`;
                statTensionNext.style.color = "#ea580c";
            }
            }
        }

        // Crédibilité
        const cred = Math.max(0, Math.min(100, Math.round(gameState.stats.credibility)));
        if (statCredibility) {
            statCredibility.textContent = `${cred}%`;
            if (cred >= 90) statCredibility.style.color = '#d97706';
            else if (cred >= 70) statCredibility.style.color = '#15803d';
            else if (cred >= 50) statCredibility.style.color = '#16a34a';
            else if (cred >= 30) statCredibility.style.color = '#ea580c';
            else if (cred >= 15) statCredibility.style.color = '#dc2626';
            else statCredibility.style.color = '#18181b';
        }

        // Mise à jour du Statut en temps réel en haut à droite
        if (liveMilitantTier) {
            liveMilitantTier.textContent = getDynamicTier();
        }
    }

    function pickWeightedDebate(debatesList) {
        if (!debatesList || debatesList.length === 0) return null;
        if (debatesList.length === 1) return debatesList[0];

        // Tirage au sort basé sur le poids 'weight' de chaque ennemi
        const totalWeight = debatesList.reduce((sum, d) => sum + (d.weight || 10), 0);
        let randomNum = Math.random() * totalWeight;

        for (const item of debatesList) {
            const w = item.weight || 10;
            if (randomNum < w) {
                return item;
            }
            randomNum -= w;
        }
        return debatesList[debatesList.length - 1];
    }

   function playTurn() {
        updateStatsUI();

        if (gameState.stats.energy <= 0) {
            triggerGameOver("Burn-out militant. Tu as craqué sous la pression médiatique et policière.");
            return;
        }

        if (gameState.turn === 20 && !gameState.historyEventsSeen.includes('pivot_premier_tour')) {
            triggerFirstRoundPivotEvent();
            return;
        }

        if (gameState.turn === 23) {
            triggerPackOpeningPhase();
            return;
        }

        if (gameState.turn >= 24) {
            triggerFinalMarchVictory();
            return;
        }

        const tension = gameState.stats.tension || 0;
        const currentTier = getCurrentTierNumber();

        // Les débats ne se déclenchent que si le palier est atteint ET la tension suffisante
        const debateThresholds = [
            { level: 1, minTension: 25, requiredTier: 1 },
            { level: 2, minTension: 45, requiredTier: 2 },
            { level: 3, minTension: 65, requiredTier: 3 },
            { level: 4, minTension: 80, requiredTier: 4 }
        ];

        // Détection du débat éligible non encore disputé
        const eligibleDebate = debateThresholds.find(d => 
            currentTier >= d.requiredTier &&
            tension >= d.minTension &&
            !gameState.completedDebates.includes(d.level)
        );

        if (eligibleDebate && typeof DEBATES_DATABASE !== 'undefined' && DEBATES_DATABASE[eligibleDebate.level]) {
            const rawTierData = DEBATES_DATABASE[eligibleDebate.level];
            let pickedDebate = null;

            if (Array.isArray(rawTierData)) {
                const unplayed = rawTierData.filter(d => !gameState.completedDebates.includes(d.id));
                const pool = unplayed.length > 0 ? unplayed : rawTierData;
                pickedDebate = (typeof pickWeightedDebate === 'function') ? pickWeightedDebate(pool) : pool[0];

                if (pickedDebate && pickedDebate.id) {
                    gameState.completedDebates.push(pickedDebate.id);
                }
            } else {
                pickedDebate = rawTierData;
            }

            if (pickedDebate) {
                gameState.completedDebates.push(eligibleDebate.level);
                setupDebateScreen(pickedDebate, eligibleDebate.level);
                return;
            }
        }

        // =========================================================
        // SÉLECTION DES ÉVÉNEMENTS : PALIER STRICT + BRASSAGE ALÉATOIRE
        // =========================================================

        // 1. Filtrage strict : palier actuel et carte non vue
        let availableEvents = gameEvents.filter(e => 
            (e.tier || 1) === currentTier && !gameState.historyEventsSeen.includes(e.id)
        );

        // 2. Si le palier en cours est épuisé, on prend ce qui reste dans l'ensemble du jeu sans doublon
        if (availableEvents.length === 0) {
            availableEvents = gameEvents.filter(e => 
                !gameState.historyEventsSeen.includes(e.id)
            );
        }

        // 3. Sécurité si toutes les cartes ont été jouées
        if (availableEvents.length === 0) {
            triggerFinalMarchVictory();
            return;
        }

        // 4. ANTI-RÉPÉTITION DU THÈME : on élimine le thème du tour précédent si d'autres thèmes existent
        const lastTheme = gameState.lastEventTheme;
        let diversePool = availableEvents.filter(e => e.theme !== lastTheme);

        // Si tout ce qui reste a le même thème, on reprend la liste
        if (diversePool.length === 0) {
            diversePool = availableEvents;
        }

        // 5. BRASSAGE FISHER-YATES (véritable aléatoire, brise l'ordre d'écriture du fichier)
        for (let i = diversePool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = diversePool[i];
            diversePool[i] = diversePool[j];
            diversePool[j] = temp;
        }

        // 6. Prise de la première carte mélangée et mémorisation
        const selectedEvent = diversePool[0];
        gameState.currentEvent = selectedEvent;
        gameState.lastEventTheme = selectedEvent.theme;
        gameState.historyEventsSeen.push(selectedEvent.id);

        displayEvent(gameState.currentEvent);
    }

// 1. Définition des compatibilités (Quel profil matche quel thème)
    const characterThemeAffinity = {
        'écolo': ['theme-ecologie', 'theme-ecolo'],
        'syndicaliste': ['theme-social'],
        'etudiant_bloqueur': ['theme-social'],
        'feministe': ['theme-emancipation', 'theme-feminisme'],
        'queer': ['theme-emancipation', 'theme-feminisme'],
        'anticolonial': ['theme-emancipation', 'theme-feminisme'],
        'attache_parlementaire': ['theme-ecologie', 'theme-ecolo'] // l'attaché a un bonus écolo selon ta demande
    };

    // 2. Calcul du multiplicateur selon le palier (1.5 / 2 / 2.5 / 4)
    function getCompatibilityMultiplier(eventTheme, eventTier) {
        const charType = gameState.selectedCharacter;
        if (!charType) return 1.0;

        // Si le thème est neutre (ou non répertorié), tout le monde a la même chose (x1.0)
        if (!eventTheme || eventTheme === 'theme-neutre' || eventTheme === 'theme-medias') {
            return 1.0;
        }

        const allowedThemes = characterThemeAffinity[charType] || [];
        const isCompatible = allowedThemes.includes(eventTheme);

        if (!isCompatible) return 1.0;

        // Multiplicateurs progressifs selon le palier
        switch (Number(eventTier)) {
            case 1: return 1.5;
            case 2: return 2.0;
            case 3: return 2.5;
            case 4: return 4.0;
            default: return 1.0;
        }
    }

    function setupDebateScreen(debateObj, tier) {
        const screenDebate = document.getElementById('screen-debate');
        if (!screenDebate || !debateObj) return;

        // 1. Bascule propre des écrans
        showScreen('screen-debate');

        // 2. Injection des classes de thème : spécifique à l'adversaire ou liée au palier
        const characterTheme = debateObj.arenaThemeClass || `arena-char-${debateObj.id || 'standard'}`;
        screenDebate.className = `screen active arena-tier-${tier} ${characterTheme}`;

        const playerArchName = getSelectedArchetypeName();
        const cred = Math.max(5, Math.min(95, Math.round(gameState.stats.credibility)));

        if (tier >= gameState.highestOpponentScore) {
            gameState.highestOpponentScore = tier;
            gameState.highestOpponentName = debateObj.characterName;
        }

        // 3. Décor dédié au personnage s'il existe dans debatesdata.js, sinon bandeau par défaut
        let decorElementsHtml = '';
        if (debateObj.arenaDecorHtml) {
            decorElementsHtml = debateObj.arenaDecorHtml;
        } else {
            const defaultBadgeIcon = { 1: '🎓', 2: '📱', 3: '📺', 4: '👑' }[tier] || '🎙️';
            decorElementsHtml = `
                <div class="tier-decor-badge">
                    ${defaultBadgeIcon} ${debateObj.arenaName || 'Débat Contradictoire'}
                </div>
                <div class="chalk-doodle">⚡ Face-à-face politique</div>
            `;
        }

        const attackText = (debateObj.opponentAttack || '').replace(/«|»/g, '');

        screenDebate.innerHTML = `
            <div class="arcade-arena">
                <div class="tier-ambiance-wrapper">
                    ${decorElementsHtml}
                </div>

                <div class="arena-top-hud">
                    <div class="fighter-hud player-hud">
                        <div class="hud-name">${playerArchName}</div>
                        <div class="health-bar-frame">
                            <div class="health-fill player-health-fill" style="width: ${cred}%;"></div>
                        </div>
                        <span class="health-val-tag">${cred}% CRÉDIBILITÉ</span>
                    </div>

                    <div class="arena-versus-badge">
                        <span>VS</span>
                    </div>

                    <div class="fighter-hud opp-hud">
                        <div class="hud-name">${debateObj.characterName}</div>
                        <div class="health-bar-frame">
                            <div class="health-fill opp-health-fill" id="opp-hp-bar" style="width: 100%;"></div>
                        </div>
                        <span class="health-val-tag" id="opp-hp-text">100% ASSURANCE</span>
                    </div>
                </div>

                <div class="arena-stage">
                    <div class="stage-spotlight"></div>
                    <div class="stage-center-icon">🎙️</div>
                    <div class="stage-center-fx" id="stage-fx"></div>

                    <div class="comic-attack-bubble" id="comic-bubble">
                        <div class="bubble-speaker-tag">ATTAQUE DE ${(debateObj.characterName || 'ADVERSAIRE').toUpperCase()}</div>
                        <p class="bubble-text">« ${attackText} »</p>
                    </div>
                </div>

                <div class="arena-deck-zone" id="debate-deck"></div>
            </div>
        `;

        const deckContainer = document.getElementById('debate-deck');
        const cardThemes = ['card-red', 'card-blue', 'card-gold'];

        (debateObj.choix || []).forEach((choix, idx) => {
            const finalOdds = Math.max(5, Math.min(95, cred + (choix.successOddsBonus || 0)));
            const cardEl = document.createElement('div');
            cardEl.className = `action-skill-card ${cardThemes[idx % 3]}`;

            cardEl.innerHTML = `
                <div class="skill-card-top">
                    <span class="skill-badge-type">${choix.strategyName || 'RIPOSTE'}</span>
                    <span class="skill-odds-tag">🎲 ${finalOdds}% succès</span>
                </div>
                <div class="skill-card-desc">${choix.texte}</div>
            `;

            cardEl.onclick = () => resolveArcadeDebateRound(choix, finalOdds, debateObj);
            deckContainer.appendChild(cardEl);
        });
    }

    function resolveArcadeDebateRound(choix, winChance, debateObj) {
        const roll = Math.random() * 100;
        const isSuccess = roll <= winChance;
        const result = isSuccess ? choix.outcomeSuccess : choix.outcomeFailure;
        const impact = result.impact || {};

        gameState.stats.followers += impact.followers || 0;
        gameState.stats.budget += impact.budget || 0;
        gameState.stats.energy += impact.energy || 0;
        gameState.stats.credibility += impact.credibility || 0;
        gameState.stats.tension = (gameState.stats.tension || 0) + (impact.tension || 0);

        gameState.stats.energy = Math.max(0, Math.min(100, gameState.stats.energy));
        gameState.stats.credibility = Math.max(0, Math.min(100, gameState.stats.credibility));
        gameState.stats.tension = Math.max(0, Math.min(100, gameState.stats.tension));
        gameState.stats.followers = Math.max(0, gameState.stats.followers);

        triggerFloatingStatFeedback(impact);
        updateStatsUI();
        updateTweetsFeed(result.tweets || []);

        const oppHpBar = document.getElementById('opp-hp-bar');
        const oppHpText = document.getElementById('opp-hp-text');
        const comicBubble = document.getElementById('comic-bubble');
        const deckContainer = document.getElementById('debate-deck');
        const stageFx = document.getElementById('stage-fx');

        if (isSuccess) {
            if (stageFx) stageFx.innerHTML = '<span class="hit-text hit-critical">K.O. RHÉTORIQUE !</span>';
            if (oppHpBar) oppHpBar.style.width = '0%';
            if (oppHpText) oppHpText.textContent = '0% DÉSTABILISÉ';
        } else {
            if (stageFx) stageFx.innerHTML = '<span class="hit-text hit-blocked">CONTRE ADVERSE !</span>';
            if (oppHpBar) oppHpBar.style.width = '100%';
        }

        if (comicBubble) {
            comicBubble.className = `comic-attack-bubble ${isSuccess ? 'bubble-triumph' : 'bubble-defeat'}`;
            comicBubble.innerHTML = `
                <div class="bubble-speaker-tag">${isSuccess ? '🏆 VICTOIRE DU DÉBAT' : '⚠️ REVERS DANS L\'ARÈNE'}</div>
                <p class="bubble-text">${result.consequenceText}</p>
            `;
        }

        let badgesHtml = '';
        const addBadge = (valText, isPositive) => {
            badgesHtml += `<span class="consequence-badge ${isPositive ? 'badge-gain' : 'badge-loss'}">${valText}</span>`;
        };

        if (impact.followers) addBadge(`${impact.followers > 0 ? '+' : ''}${formatFollowers(impact.followers)}`, impact.followers > 0);
        if (impact.budget) addBadge(`${impact.budget > 0 ? '+' : ''}${impact.budget} €`, impact.budget > 0);
        if (impact.energy) addBadge(`${impact.energy > 0 ? '+' : ''}${impact.energy}% Énergie`, impact.energy > 0);
        if (impact.credibility) addBadge(`${impact.credibility > 0 ? '+' : ''}${impact.credibility}% Crédibilité`, impact.credibility > 0);
        if (impact.tension) addBadge(`${impact.tension > 0 ? '+' : ''}${impact.tension}% Tension 🔥`, impact.tension < 0);

        if (deckContainer) {
            deckContainer.innerHTML = `
                <div class="arcade-victory-panel">
                    <div class="consequence-badges-row">${badgesHtml}</div>
                    <button id="btn-exit-arena" class="btn-arcade-continue">
                        Continuer la Marche ➔
                    </button>
                </div>
            `;

            const btnExit = document.getElementById('btn-exit-arena');
            if (btnExit) {
                btnExit.onclick = () => {
                    screenDebate = document.getElementById('screen-debate');
                    if (screenDebate) screenDebate.className = 'screen';
                    showScreen('screen-game');
                    gameState.turn++;
                    if (gameState.turn >= gameState.timeline.length) {
                        endGame();
                    } else {
                        playTurn();
                    }
                };
            }
        }
    }
    // ==========================================
    // THEMES ET TRADUCTION DE L'AFFICHAGE & COULEURS
    // ==========================================
    const themeConfig = {
        'theme-ecologie':     { label: '🌿 Écologie & Terres',          color: '#16a34a' }, // Vert
        'theme-emancipation': { label: '🟣 Émancipation & Droits',       color: '#9333ea' }, // Violet
        'theme-social':       { label: '🍞 Justice Sociale & Travail',  color: '#dc2626' }, // Rouge
        'theme-antifa':       { label: '🏴 Antifascisme & Libertés',    color: '#18181b' }, // Noir
        'theme-neutre':       { label: '⚖️ Société & Médias',           color: '#71717a' }, // Gris
        'theme-default':      { label: '📢 Lutte Populaire',            color: '#dc2626' }
    };

    function getThemeData(themeId) {
        return themeConfig[themeId] || themeConfig['theme-default'];
    }

    function getThemeLabel(themeId) {
        return themeLabels[themeId] || themeLabels['theme-default'];
    }

    // Dictionnaire des émojis par profil pour le badge de compatibilité
    const characterEmojis = {
        'syndicaliste': '📢',
        'écolo': '🍃',
        'etudiant_bloqueur': '🪧',
        'feministe': '🟣',
        'queer': '🏳️‍🌈',
        'anticolonial': '✊🏾',
        'attache_parlementaire': '🏛️'
    };
function displayEvent(event) {
        if (!event) return;

        const themeData = getThemeData(event.theme);
        const tier = event.tier || 1;
        const multiplier = getCompatibilityMultiplier(event.theme, tier);
        const isCompat = multiplier > 1.0;

       // 1. Badge de thème propre
        if (eventThemeBadge) {
            eventThemeBadge.textContent = themeData.label;
            eventThemeBadge.className = `badge-event-theme ${event.theme || ''}`;
            eventThemeBadge.style.backgroundColor = `${themeData.color}15`;
            eventThemeBadge.style.color = themeData.color;
            eventThemeBadge.style.borderColor = themeData.color;
        }

        // 2. Gestion de la carte, du fond teinté et du badge étoile
        if (eventCard) {
            eventCard.style.setProperty('border-color', themeData.color, 'important');
            eventCard.style.setProperty('box-shadow', `0 4px 20px ${themeData.color}33`, 'important');

            // Nettoyage systématique : on détruit tout ancien badge présent
            const existingBadge = eventCard.querySelector('.compat-badge-floating-tl');
            if (existingBadge) {
                existingBadge.remove();
            }

            if (isCompat) {
                // Fond teinté uniquement en cas de compatibilité
                eventCard.style.setProperty('background-color', `${themeData.color}11`, 'important');

                // Création et injection du badge UNIQUEMENT si compatible
                const badgeStar = document.createElement('div');
                badgeStar.className = 'compat-badge-floating-tl';
                badgeStar.innerHTML = `⭐ <span style="font-size:0.75rem; margin-left:4px; font-weight:800;">x${multiplier}</span>`;
                badgeStar.style.borderColor = themeData.color;
                badgeStar.style.color = themeData.color;
                eventCard.prepend(badgeStar);
            } else {
                // Fond blanc net sans badge
                eventCard.style.setProperty('background-color', '#FFFFFF', 'important');
            }
        }

        if (eventCharacterTag) {
            eventCharacterTag.textContent = `👤 ${event.characterName || 'Événement'}`;
        }
        
        if (eventTitle) eventTitle.textContent = event.titre;
        if (eventDescription) eventDescription.textContent = event.description;

        // Rendu des choix... (reste inchangé)
        if (choicesContainer) {
            choicesContainer.innerHTML = '';
            
            (event.choix || []).forEach((choix) => {
                const btn = document.createElement('button');
                btn.className = 'btn-choice';

                let costEnergy = 0;
                let costTension = 0;

                if (choix.fixedCost) {
                    costEnergy = choix.fixedCost.energy || 0;
                    costTension = choix.fixedCost.tension || 0;
                } else if (choix.impact) {
                    costEnergy = choix.impact.energy || 0;
                    costTension = choix.impact.tension || 0;
                }

                let badgesHtml = '';
                if (costEnergy !== 0) {
                    const isGain = costEnergy > 0;
                    const bgStyle = isGain ? "rgba(34,197,94,0.12)" : "rgba(220,38,38,0.1)";
                    const textColor = isGain ? "#15803d" : "#dc2626";
                    const prefix = isGain ? "+" : "";
                    badgesHtml += `<span class="badge-cost" style="background: ${bgStyle}; color: ${textColor};">⚡ ${prefix}${costEnergy}% Énergie</span>`;
                }
                if (costTension > 0) {
                    badgesHtml += `<span class="badge-cost" style="background: rgba(234,88,12,0.1); color: #ea580c;">🔥 +${costTension}% Tension</span>`;
                }
                if (choix.isClash) {
                    badgesHtml += `<span class="badge-cost" style="background: rgba(147,51,234,0.1); color: #9333ea;">🎲 Quitte ou Double</span>`;
                }

                btn.innerHTML = `
                    <div class="choice-text" style="font-weight: 700;">${choix.texte}</div>
                    ${badgesHtml ? `<div class="choice-costs" style="margin-top: 6px; display: flex; gap: 8px;">${badgesHtml}</div>` : ''}
                `;

                btn.onclick = () => resolveChoice(choix);
                choicesContainer.appendChild(btn);
            });
        }

        showScreen('screen-game');
    }

    // ==========================================
    // 6. FEED RÉSEAUX SOCIAUX (INTERACTIONS COMPLÈTES)
    // ==========================================
    function updateTweetsFeed(tweetsList) {
        if (!tweetsContainer) return;

        const placeholder = document.getElementById('feed-placeholder');
        if (placeholder) placeholder.remove();

        tweetsContainer.innerHTML = '';
        
        const count = tweetsList ? tweetsList.length : 0;
        
        // Gestion de la pastille : masquée si 0, visible dès 1 tweet
        const feedCountEl = document.getElementById('feed-notif-count');
        if (feedCountEl) {
            feedCountEl.textContent = count;
            if (count > 0) {
                feedCountEl.style.display = 'inline-flex';
            } else {
                feedCountEl.style.display = 'none';
            }
        }

        if (!tweetsList || tweetsList.length === 0) {
            tweetsContainer.innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem; text-align: center; padding: 25px 0;">Aucune réaction sur le fil pour le moment...</p>';
            return;
        }

        const relativeTimes = ["à l'instant", "1m", "4m", "12m", "35m", "1h", "2h"];

        tweetsList.forEach((t, index) => {
            const tweetEl = document.createElement('div');
            tweetEl.className = 'tweet-card-pro';
            
            const initial = (t.author && t.author.length > 0) ? t.author.trim().charAt(0).toUpperCase() : '👤';

// Palette de couleurs variées pour les profils
const avatarColors = [
    'linear-gradient(135deg, #770720, #4a0404)', // Bordeaux
    'linear-gradient(135deg, #2563eb, #1e40af)', // Bleu
    'linear-gradient(135deg, #16a34a, #15803d)', // Vert
    'linear-gradient(135deg, #d97706, #b45309)', // Ambre
    'linear-gradient(135deg, #9333ea, #7e22ce)', // Violet
    'linear-gradient(135deg, #ea580c, #c2410c)', // Orange
    'linear-gradient(135deg, #0d9488, #0f766e)'  // Sarcelle
];
// Choix stable basé sur les lettres du nom de l'auteur
let hash = 0;
for (let i = 0; i < (t.author || '').length; i++) {
    hash = t.author.charCodeAt(i) + ((hash << 5) - hash);
}
const bgAvatar = avatarColors[Math.abs(hash) % avatarColors.length];
            
            let fakeLikes = Math.floor(Math.random() * 450) + 12;
            let fakeRts = Math.floor(fakeLikes * 0.35) + 3;
            const fakeReplies = Math.floor(fakeLikes * 0.12) + 1;
            const timeLabel = relativeTimes[index] || `${index + 2}h`;

            tweetEl.innerHTML = `
                <div class="tweet-pro-layout">
                    <div class="tweet-avatar" style="background: ${bgAvatar};">${initial}</div>
                    <div class="tweet-pro-content">
                        <div class="tweet-pro-header">
                            <span class="tweet-name-pro">${t.author}</span>
                            <span class="tweet-handle-pro">${t.handle}</span>
                            <span class="tweet-dot-pro">·</span>
                            <span class="tweet-time-pro">${timeLabel}</span>
                        </div>
                        <p class="tweet-text-pro">${t.text}</p>
                        <div class="tweet-actions-bar">
                            <span class="tweet-action-item">💬 ${fakeReplies}</span>
                            <span class="tweet-action-item btn-rt-action" data-rt="false">
                                <span class="rt-icon">🔁</span> <span class="rt-count">${fakeRts}</span>
                            </span>
                            <span class="tweet-action-item btn-like-action" data-liked="false">
                                <span class="like-icon">🤍</span> <span class="like-count">${fakeLikes}</span>
                            </span>
                            <span class="tweet-action-item">📊</span>
                        </div>
                    </div>
                </div>
            `;

            // Interaction Retweet (Vert)
            const rtBtn = tweetEl.querySelector('.btn-rt-action');
            const rtCountEl = tweetEl.querySelector('.rt-count');
            rtBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isRt = rtBtn.getAttribute('data-rt') === 'true';
                if (!isRt) {
                    rtBtn.setAttribute('data-rt', 'true');
                    rtBtn.classList.add('retweeted');
                    fakeRts++;
                    rtCountEl.textContent = fakeRts;
                } else {
                    rtBtn.setAttribute('data-rt', 'false');
                    rtBtn.classList.remove('retweeted');
                    fakeRts--;
                    rtCountEl.textContent = fakeRts;
                }
            });

            // Interaction Like (Rouge)
            const likeBtn = tweetEl.querySelector('.btn-like-action');
            const likeIcon = tweetEl.querySelector('.like-icon');
            const likeCountEl = tweetEl.querySelector('.like-count');
            likeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isLiked = likeBtn.getAttribute('data-liked') === 'true';
                if (!isLiked) {
                    likeBtn.setAttribute('data-liked', 'true');
                    likeBtn.classList.add('liked');
                    likeIcon.textContent = '❤️';
                    fakeLikes++;
                    likeCountEl.textContent = fakeLikes;
                } else {
                    likeBtn.setAttribute('data-liked', 'false');
                    likeBtn.classList.remove('liked');
                    likeIcon.textContent = '🤍';
                    fakeLikes--;
                    likeCountEl.textContent = fakeLikes;
                }
            });

            tweetsContainer.appendChild(tweetEl);
        });
    }
    
    // ==========================================
    // 7. RÉSOLUTION DIRECTE SUR LA MÊME INTERFACE
    // ==========================================
   function resolveChoice(choix) {
        let resultData = choix;

        if (choix.isClash && choix.outcomeSuccess && choix.outcomeFailure) {
            const roll = Math.random() * 100;
            const winChance = 50;
            resultData = (roll <= winChance) ? choix.outcomeSuccess : choix.outcomeFailure;
        }

        const rawImpact = resultData.impact || {};
        
        // --- MULTIPLICATEUR DE COMPATIBILITÉ ---
        const tier = gameState.currentEvent ? (gameState.currentEvent.tier || 1) : 1;
        const theme = gameState.currentEvent ? gameState.currentEvent.theme : '';
        const multiplier = getCompatibilityMultiplier(theme, tier);

        // On applique le multiplicateur sur les gains et pertes de ressources
        const impact = {
            followers: rawImpact.followers ? Math.round(rawImpact.followers * multiplier) : 0,
            budget: rawImpact.budget ? Math.round(rawImpact.budget * multiplier) : 0,
            energy: rawImpact.energy ? Math.round(rawImpact.energy * multiplier) : 0,
            credibility: rawImpact.credibility ? Math.round(rawImpact.credibility * multiplier) : 0,
            tension: rawImpact.tension || 0 // La tension ne subit généralement pas le boost, ou tu peux le multiplier aussi
        };
        // ---------------------------------------

        // Application des stats dans le gameState...
        gameState.stats.followers += impact.followers;
        gameState.stats.budget += impact.budget;
        gameState.stats.energy += impact.energy;
        gameState.stats.credibility += impact.credibility;
        gameState.stats.tension = (gameState.stats.tension || 0) + impact.tension;


        gameState.stats.energy = Math.max(0, Math.min(100, gameState.stats.energy));
        gameState.stats.credibility = Math.max(0, Math.min(100, gameState.stats.credibility));
        gameState.stats.tension = Math.max(0, Math.min(100, gameState.stats.tension));
        gameState.stats.followers = Math.max(0, gameState.stats.followers);

        // Déclenchement des petits chiffres flottants sur le bandeau du haut
        triggerFloatingStatFeedback(impact);

        updateStatsUI();
        updateTweetsFeed(resultData.tweets || []);

        

        // Remplacement du contenu directement dans la carte et la zone de choix
        displayInPlaceConsequence(resultData.consequenceText || "Action effectuée.", impact);
    }

    function triggerFloatingStatFeedback(impact) {
        const statElements = {
            budget: document.getElementById('stat-budget'),
            energy: document.getElementById('stat-energy-text'),
            credibility: document.getElementById('stat-credibility'),
            tension: document.getElementById('stat-tension-text'),
            followers: document.getElementById('stat-followers')
        };

        const createFloater = (targetEl, text, isPositive, flashBackground = true) => {
            if (!targetEl) return;
            const pill = targetEl.closest('.stat-pill-compact, .stat-followers-social') || targetEl;
            
            // Coloration temporaire du fond uniquement si demandé (pas pour les abonnés)
            if (flashBackground) {
                pill.classList.remove('pill-flash-gain', 'pill-flash-loss');
                void pill.offsetWidth;
                pill.classList.add(isPositive ? 'pill-flash-gain' : 'pill-flash-loss');
                
                setTimeout(() => {
                    pill.classList.remove('pill-flash-gain', 'pill-flash-loss');
                }, 1800);
            }

            // Chiffre flottant au-dessus
            const floater = document.createElement('span');
            floater.className = `floating-stat-num ${isPositive ? 'float-gain' : 'float-loss'}`;
            floater.textContent = text;
            pill.appendChild(floater);

            setTimeout(() => floater.remove(), 2200);
        };

        if (impact.budget) createFloater(statElements.budget, `${impact.budget > 0 ? '+' : ''}${impact.budget}€`, impact.budget > 0, true);
        if (impact.energy) createFloater(statElements.energy, `${impact.energy > 0 ? '+' : ''}${impact.energy}%⚡`, impact.energy > 0, true);
        if (impact.credibility) createFloater(statElements.credibility, `${impact.credibility > 0 ? '+' : ''}${impact.credibility}%📜`, impact.credibility > 0, true);
        if (impact.tension) createFloater(statElements.tension, `${impact.tension > 0 ? '+' : ''}${impact.tension}%🔥`, impact.tension < 0, true);
        
        // Flottant sur les abonnés (sans flash de fond)
        if (impact.followers) {
            const formatted = formatFollowers(Math.abs(impact.followers));
            createFloater(statElements.followers, `${impact.followers > 0 ? '+' : '-'}${formatted}`, impact.followers > 0, false);
        }
    }

    function displayInPlaceConsequence(consequenceText, impact) {
        if (!eventDescription || !choicesContainer) return;

        // Calcul du bilan pour teinter l'encadré
        let positivePoints = 0;
        let negativePoints = 0;

        if (impact.followers > 0) positivePoints++; else if (impact.followers < 0) negativePoints++;
        if (impact.budget > 0) positivePoints++; else if (impact.budget < 0) negativePoints++;
        if (impact.energy > 0) positivePoints++; else if (impact.energy < 0) negativePoints++;
        if (impact.credibility > 0) positivePoints++; else if (impact.credibility < 0) negativePoints++;
        if (impact.tension < 0) positivePoints++; else if (impact.tension > 0) negativePoints++;

        let moodClass = "mood-neutral";
        if (negativePoints > positivePoints) {
            moodClass = "mood-danger"; // Dominante négative
        } else if (positivePoints > negativePoints) {
            moodClass = "mood-success"; // Dominante positive
        }

        // Insertion du texte de conséquence avec son fond d'ambiance
        eventDescription.innerHTML = `
            <div class="consequence-box ${moodClass}">
                <p class="consequence-text-live">${consequenceText}</p>
            </div>
        `;

        // Badges d'impacts
        let badgesHtml = '';
        const addBadge = (valText, isPositive) => {
            badgesHtml += `<span class="consequence-badge ${isPositive ? 'badge-gain' : 'badge-loss'}">${valText}</span>`;
        };

        if (impact.followers) addBadge(`${impact.followers > 0 ? '+' : ''}${formatFollowers(impact.followers)}`, impact.followers > 0);
        if (impact.budget) addBadge(`${impact.budget > 0 ? '+' : ''}${impact.budget} €`, impact.budget > 0);
        if (impact.energy) addBadge(`${impact.energy > 0 ? '+' : ''}${impact.energy}% Énergie`, impact.energy > 0);
        if (impact.credibility) addBadge(`${impact.credibility > 0 ? '+' : ''}${impact.credibility}% Crédibilité`, impact.credibility > 0);
        if (impact.tension) addBadge(`${impact.tension > 0 ? '+' : ''}${impact.tension}% Tension 🔥`, impact.tension < 0);

        choicesContainer.innerHTML = `
            <div class="consequence-feedback-zone">
                <div class="consequence-badges-row">${badgesHtml}</div>
                <button id="btn-continue-direct" class="btn-primary btn-continue-pulse">
                    Continuer la lutte ➔
                </button>
            </div>
        `;

        const btnContinue = document.getElementById('btn-continue-direct');
        if (btnContinue) {
            btnContinue.addEventListener('click', () => {
                gameState.turn++;
                if (gameState.turn >= gameState.timeline.length) {
                    endGame();
                } else {
                    playTurn();
                }
            });
        }
    }

    // ==========================================
    // 8. CALCUL DU SCORE & FIN DE PARTIE
    // ==========================================
    function calculateFinalCareer() {
        const followers = Math.max(0, gameState.stats.followers);
        const budget = gameState.stats.budget;
        const cred = Math.max(0, Math.min(100, gameState.stats.credibility));

        let tierMult = 1.0;
        if (followers >= 500000) {
            currentTierName = "Palier 5 : Icône Internationale 🌍";
            tierMult = 3.0;
        } else if (followers >= 100000) {
            currentTierName = "Palier 4 : Poids Lourd National 🏛️";
            tierMult = 2.0;
        } else if (followers >= 25000) {
            currentTierName = "Palier 3 : Porte-Parole Régional 📢";
            tierMult = 1.5;
        } else if (followers >= 5000) {
            currentTierName = "Palier 2 : Figure Locale 🚩";
            tierMult = 1.2;
        } else {
            currentTierName = "Palier 1 : Militant de Section 🪧";
            tierMult = 1.0;
        }

        const rawBase = Math.max(0, (followers * 0.5) + (budget * 2));
        const credFactor = 0.5 + (cred / 100);
        currentCalculatedScore = Math.round(rawBase * credFactor * tierMult);

        let rankTitle = "🥉 Militant du Dimanche";
        if (currentCalculatedScore >= 300000) rankTitle = "👑 Légende de la Révolution";
        else if (currentCalculatedScore >= 150000) rankTitle = "🎖️ Stratège de la Rupture";
        else if (currentCalculatedScore >= 60000) rankTitle = "🥇 Porte-Parole Craint des Plateaux";
        else if (currentCalculatedScore >= 15000) rankTitle = "🥈 Cadre de Terrain";

        let narrative = "";
        if (followers >= 100000 && cred < 35) {
            narrative = "Tu as fait des millions de vues et de buzz, mais ta crédibilité est en lambeaux. La gauche syndicale te boycotte et tu finis chroniqueur chez Hanouna.";
        } else if (currentCalculatedScore >= 200000) {
            narrative = "Triomphe politique total ! Ta ligne a conquis l'hégémonie culturelle et bousculé les oligarchies. Une force incontournable pour 2027.";
        } else if (followers < 10000) {
            narrative = "Ta notoriété est restée cantonnée à l'échelle locale. Tu tiens ta section d'une main de fer, mais les plateaux nationaux t'ont ignoré.";
        } else {
            narrative = "Une campagne solide et combative. Tu as posé des bases durables pour les prochaines luttes à venir.";
        }

        return { score: currentCalculatedScore, tier: currentTierName, rank: rankTitle, text: narrative };
    }

    function endGame() {
        showScreen('screen-endgame');
        const verdict = calculateFinalCareer();

        if (endBadge) endBadge.textContent = verdict.tier;
        if (finalScoreDisplay) finalScoreDisplay.textContent = verdict.score.toLocaleString('fr-FR');
        if (scoreRank) scoreRank.textContent = verdict.rank;
        if (endNarrative) endNarrative.textContent = verdict.text;
        if (saveScoreForm) saveScoreForm.style.display = "flex";
    }

    function triggerGameOver(reason) {
        showScreen('screen-end');
        gameState.finalCalculatedScore = 0;

        const marchCountEl = document.getElementById('final-march-count');
        const marchVerdictEl = document.getElementById('final-march-verdict');
        const recapArchetypeEl = document.getElementById('recap-archetype');
        const recapStatusEl = document.getElementById('recap-status');
        const recapNemesisEl = document.getElementById('recap-nemesis');
        const recapAllyEl = document.getElementById('recap-ally');
        const saveBox = document.querySelector('.save-box');

        // Textes d'ambiance de la carte centrale
        const scoreHeroLabel = document.querySelector('.score-hero-label');
        const scoreHeroSub = document.querySelector('.score-hero-sub');
        if (scoreHeroLabel) scoreHeroLabel.textContent = "ISSUE DE LA CAMPAGNE";
        if (scoreHeroSub) scoreHeroSub.textContent = reason;

        // Gros texte PERDU rouge
        if (marchCountEl) {
            marchCountEl.textContent = "PERDU";
            marchCountEl.classList.add('gameover-burnout-text');
        }
        if (marchVerdictEl) {
            marchVerdictEl.textContent = "💀 BURN-OUT MILITANT DÉFINITIF";
            marchVerdictEl.classList.add('verdict-burnout');
        }
        
        if (recapArchetypeEl) recapArchetypeEl.textContent = getSelectedArchetypeName();
        if (recapStatusEl) recapStatusEl.textContent = "❌ Épuisement total";
        if (recapNemesisEl) recapNemesisEl.textContent = gameState.highestOpponentName || "La Répression";
        if (recapAllyEl) recapAllyEl.textContent = "Aucun soutien";

        // Application de l'ambiance rouge agressive sur la carte Némésis
        const nemesisCard = document.querySelector('.dash-card.nemesis-theme');
        if (nemesisCard) {
            nemesisCard.classList.add('nemesis-burnout-active');
        }

        if (saveBox) saveBox.style.display = "none";
    }

    // ==========================================
    // 9. LEADERBOARD (LOCALSTORAGE)
    // ==========================================
   function getLeaderboard() {
        try {
            const data = JSON.parse(localStorage.getItem('gaucho_leaderboard'));
            return Array.isArray(data) ? data : [];
        } catch (e) {
            return [];
        }
    }

    function saveScore(pseudo) {
        const board = getLeaderboard();
        const archName = gameState.selectedCharacter ? (gameState.selectedCharacter.name || gameState.selectedCharacter) : 'Militant';
        const allyName = gameState.selectedAlly ? gameState.selectedAlly.name : 'Aucun';

        board.push({
    pseudo: pseudo || 'Camarade Anonyme',
    character: archName,
    ally: allyName,
    nemesis: gameState.highestOpponentName || 'Aucun', // Garde la clé 'nemesis' pour ne pas casser le localStorage existant
    score: gameState.finalCalculatedScore || 0,
    date: new Date().toLocaleDateString('fr-FR')
});

        board.sort((a, b) => b.score - a.score);
        localStorage.setItem('gaucho_leaderboard', JSON.stringify(board.slice(0, 20)));
    }
// ==========================================
    // DICTIONNAIRE DE TRADUCTION DES ARCHÉTYPES
    // ==========================================
    const archetypeNames = {
        'syndicaliste': "📢 Syndicaliste CGT",
        'écolo': "🍃 L'Écolo Extrémiste",
        'etudiant_bloqueur': "🪧 L'Étudiant.e Bloqueur.se",
        'feministe': "🟣 La Féministe Intersectionnelle",
        'queer': "🏳️‍🌈 Queer Radical.e",
        'anticolonial': "✊🏾 Militant.e Anticolonial.e",
        'attache_parlementaire': "🏛️ L'Attaché.e Parlementaire",
    };

    function getSelectedArchetypeName() {
        if (!gameState.selectedCharacter) return "Militant de Base";
        if (typeof gameState.selectedCharacter === 'object' && gameState.selectedCharacter.name) {
            return gameState.selectedCharacter.name;
        }
        return archetypeNames[gameState.selectedCharacter] || gameState.selectedCharacter;
    }
   function renderLeaderboard() {
        const body = document.getElementById('leaderboard-body');
        if (!body) return;
        
        body.innerHTML = '';
        const board = getLeaderboard();
        
        if (board.length === 0) {
            body.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:24px; color:#71717a; font-weight:600;">Aucun rassemblement consigné dans les archives.</td></tr>';
            return;
        }

        board.forEach((entry, idx) => {
            if (!entry) return;
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>#${idx + 1}</strong></td>
                <td><strong>${entry.pseudo || 'Camarade Anonyme'}</strong></td>
                <td>${entry.character || 'Militant'}</td>
                <td><span style="color:#d97706; font-weight:700;">${entry.ally || '—'}</span></td>
                <td><span style="color:#dc2626; font-weight:700;">${entry.nemesis || '—'}</span></td>
                <td><strong>${Number(entry.score || 0).toLocaleString('fr-FR')}</strong></td>
            `;
            body.appendChild(tr);
        });
    }
    // ==========================================
    // CLASSEMENT NATIONAL EN LIGNE (SUPABASE)
    // ==========================================
    async function saveScoreOnline(pseudo) {
        // 1. Sauvegarde d'abord en local (cet appareil)
        saveScore(pseudo);

        if (!supabaseClient) return;

        const archName = getSelectedArchetypeName();
        const allyName = gameState.selectedAlly ? gameState.selectedAlly.name : 'Aucun';
        const nemesisName = gameState.highestOpponentName || 'Aucun';
        const scoreVal = gameState.finalCalculatedScore || 0;
        const playerPseudo = pseudo || 'Camarade Anonyme';

        try {
            // Vérifie si cet appareil a déjà un score
            const { data: existingEntry } = await supabaseClient
                .from('national_leaderboard')
                .select('*')
                .eq('device_id', deviceId)
                .maybeSingle();

            if (existingEntry) {
                // On met à jour seulement si le nouveau score est meilleur
                if (scoreVal >= existingEntry.score) {
                    await supabaseClient
                        .from('national_leaderboard')
                        .update({
                            pseudo: playerPseudo,
                            character: archName,
                            ally: allyName,
                            nemesis: nemesisName,
                            score: scoreVal,
                            created_at: new Date().toISOString()
                        })
                        .eq('device_id', deviceId);
                }
            } else {
                // Première partie enregistrée pour cet appareil
                await supabaseClient
                    .from('national_leaderboard')
                    .insert([{
                        pseudo: playerPseudo,
                        character: archName,
                        ally: allyName,
                        nemesis: nemesisName,
                        score: scoreVal,
                        device_id: deviceId
                    }]);
            }
        } catch (err) {
            console.error("Erreur d'envoi du score national :", err);
        }

        // Affiche directement le classement national
        renderNationalLeaderboard();
    }
    // ==========================================
    // RENDU NATIONAL AVEC ÉPINGLE DU JOUEUR (TOP 50 + POSITION)
    // ==========================================
    async function renderNationalLeaderboard() {
        const body = document.getElementById('leaderboard-body');
        const subTitle = document.getElementById('leaderboard-subtitle');
        const clearBtn = document.getElementById('btn-clear-scores');

        // Masquer obligatoirement le bouton effacer sur le classement national
        if (clearBtn) clearBtn.style.display = 'none';
        if (subTitle) subTitle.textContent = "Les 50 plus grandes mobilisations de France.";
        if (!body) return;

        body.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:24px; color:#71717a;">Chargement du cortège national... ⏳</td></tr>';

        if (!supabaseClient) {
            body.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:24px; color:#dc2626;">Connexion à la base en ligne indisponible.</td></tr>';
            return;
        }

        try {
            // 1. Récupération du Top 50
            const { data: topData, error } = await supabaseClient
                .from('national_leaderboard')
                .select('*')
                .order('score', { ascending: false })
                .limit(50);

            if (error || !topData || topData.length === 0) {
                body.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:24px; color:#71717a;">Aucun score consigné pour le moment. Sois le premier !</td></tr>';
                return;
            }

            body.innerHTML = '';
            let playerInTop50 = false;

            topData.forEach((entry, idx) => {
                const isMe = entry.device_id === deviceId;
                if (isMe) playerInTop50 = true;

                const tr = document.createElement('tr');
                if (isMe) tr.className = 'leaderboard-my-row';

                tr.innerHTML = `
                    <td><strong>#${idx + 1}</strong></td>
                    <td><strong>${entry.pseudo || 'Camarade Anonyme'}${isMe ? ' ⭐ (Toi)' : ''}</strong></td>
                    <td>${entry.character || 'Militant'}</td>
                    <td><span style="color:#d97706; font-weight:700;">${entry.ally || '—'}</span></td>
                    <td><span style="color:#dc2626; font-weight:700;">${entry.nemesis || '—'}</span></td>
                    <td><strong>${Number(entry.score || 0).toLocaleString('fr-FR')}</strong></td>
                `;
                body.appendChild(tr);
            });

            // 2. Si le joueur a déjà joué mais est hors du Top 50, calcul du rang exact
            if (!playerInTop50 && deviceId) {
                const { data: myEntry } = await supabaseClient
                    .from('national_leaderboard')
                    .select('*')
                    .eq('device_id', deviceId)
                    .maybeSingle();

                if (myEntry) {
                    const { count: higherCount } = await supabaseClient
                        .from('national_leaderboard')
                        .select('*', { count: 'exact', head: true })
                        .gt('score', myEntry.score);

                    const exactRank = (higherCount || 0) + 1;

                    const trDivider = document.createElement('tr');
                    trDivider.innerHTML = `<td colspan="6" style="text-align:center; padding:6px; background:#f4f4f5; color:#71717a; font-size:0.75rem; font-weight:800;">• • • TA POSITION NATIONALE • • •</td>`;
                    body.appendChild(trDivider);

                    const trMe = document.createElement('tr');
                    trMe.className = 'leaderboard-my-row';
                    trMe.innerHTML = `
                        <td><strong>#${exactRank}</strong></td>
                        <td><strong>${myEntry.pseudo || 'Camarade Anonyme'} ⭐ (Toi)</strong></td>
                        <td>${myEntry.character || 'Militant'}</td>
                        <td><span style="color:#d97706; font-weight:700;">${myEntry.ally || '—'}</span></td>
                        <td><span style="color:#dc2626; font-weight:700;">${myEntry.nemesis || '—'}</span></td>
                        <td><strong>${Number(myEntry.score || 0).toLocaleString('fr-FR')}</strong></td>
                    `;
                    body.appendChild(trMe);
                }
            }
        } catch (e) {
            body.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:24px; color:#dc2626;">Erreur de chargement du classement.</td></tr>';
        }
    }

    // Gestion des clics d'onglets (sans re-déclarer avec const)
    const elTabNational = document.getElementById('tab-national-scores');
    const elTabLocal = document.getElementById('tab-local-scores');

    if (elTabNational) {
        elTabNational.onclick = () => {
            elTabNational.classList.add('active');
            if (elTabLocal) elTabLocal.classList.remove('active');
            if (btnClearScores) btnClearScores.style.display = 'none';
            renderNationalLeaderboard();
        };
    }

    if (elTabLocal) {
        elTabLocal.onclick = () => {
            elTabLocal.classList.add('active');
            if (elTabNational) elTabNational.classList.remove('active');
            if (btnClearScores) btnClearScores.style.display = 'inline-block';
            const subTitle = document.getElementById('leaderboard-subtitle');
            if (subTitle) subTitle.textContent = "Historique des parties jouées sur cet appareil.";
            renderLeaderboard();
        };
    }

    // ==========================================
    // 10. ÉCOUTEURS D'ÉVÉNEMENTS
    // ==========================================
    if (btnStart) {
        btnStart.addEventListener('click', () => {
            showScreen('screen-character');
        });
    }

    charButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const charType = e.currentTarget.dataset.type;
            initGame(charType);
        });
    });

    if (btnToggleFeed && socialPanel) {
        btnToggleFeed.addEventListener('click', () => {
            socialPanel.classList.toggle('mobile-open');
            
            // Marquer comme lu : masquer la pastille dès l'ouverture
            if (socialPanel.classList.contains('mobile-open')) {
                const feedCountEl = document.getElementById('feed-notif-count');
                if (feedCountEl) {
                    feedCountEl.style.display = 'none';
                    feedCountEl.textContent = '0';
                }
            }
        });
    }

    if (btnCloseFeed && socialPanel) {
        btnCloseFeed.addEventListener('click', () => {
            socialPanel.classList.remove('mobile-open');
        });
    }

    if (btnNextTurn) {
        btnNextTurn.addEventListener('click', () => {
            gameState.turn++;
            if (gameState.turn >= gameState.timeline.length) {
                endGame();
            } else {
                showScreen('screen-game');
                playTurn();
            }
        });
    }

    if (btnRestart) {
        btnRestart.addEventListener('click', () => {
            showScreen('screen-menu');
        });
    }

   if (btnSaveScore) {
        btnSaveScore.addEventListener('click', () => {
            const inputEl = document.getElementById('player-name') || document.getElementById('player-pseudo');
            const pseudo = inputEl ? inputEl.value.trim() : '';
            
            // Envoi en ligne + local
            saveScoreOnline(pseudo);
            
            const saveBox = document.querySelector('.save-box');
            if (saveBox) saveBox.style.display = "none";
            
            showScreen('screen-leaderboard');
        });
    }

    if (btnViewLeaderboard) {
        btnViewLeaderboard.addEventListener('click', () => {
            renderLeaderboard();
            showScreen('screen-leaderboard');
        });
    }

    if (btnMenuLeaderboard) {
        btnMenuLeaderboard.addEventListener('click', () => {
            renderLeaderboard();
            showScreen('screen-leaderboard');
        });
    }

    if (btnBackMenu) {
        btnBackMenu.addEventListener('click', () => {
            showScreen('screen-menu');
        });
    }

    if (btnClearScores) {
        btnClearScores.addEventListener('click', () => {
            if (confirm("Supprimer tous les scores enregistrés sur cet appareil ?")) {
                localStorage.removeItem('gaucho_leaderboard');
                renderLeaderboard();
            }
        });
    }
   
   
    // ==========================================
    // GESTION DU BOUTON RÈGLES & À PROPOS
    // ==========================================
    const btnAbout = document.getElementById('btn-about');
    const btnAboutBack = document.getElementById('btn-about-back');
    const btnAboutClose = document.getElementById('btn-about-close');

    if (btnAbout) {
        btnAbout.addEventListener('click', () => {
            showScreen('screen-about');
        });
    }

    if (btnAboutBack) {
        btnAboutBack.addEventListener('click', () => {
            showScreen('screen-menu');
        });
    }

    if (btnAboutClose) {
        btnAboutClose.addEventListener('click', () => {
            showScreen('screen-menu');
        });
    }

    function weightedAllyPick(allyList) {
        if (!allyList || allyList.length === 0) return null;
        if (allyList.length === 1) return allyList[0];

        const weightedPool = allyList.map(ally => {
            const weight = Math.pow(Math.max(5, 110 - (ally.scoreIndex || 50)), 2);
            return { ally, weight };
        });

        const totalWeight = weightedPool.reduce((sum, item) => sum + item.weight, 0);
        let randomNum = Math.random() * totalWeight;

        for (const item of weightedPool) {
            if (randomNum < item.weight) {
                return item.ally;
            }
            randomNum -= item.weight;
        }
        return weightedPool[weightedPool.length - 1].ally;
    }

    function triggerFirstRoundPivotEvent() {
        gameState.historyEventsSeen.push('pivot_premier_tour');
        
        const score = calculateUnderTheHoodScore();
        let firstRoundPercent = 0;
        let situationNarrative = "";

        if (score >= 250000) {
            firstRoundPercent = (27.5 + (Math.random() * 3.5)).toFixed(1).replace('.', ',');
            situationNarrative = `🔥 RAZ-DE-MARÉE POPULAIRE : Le mouvement vire en tête du 1er tour avec ${firstRoundPercent}% des suffrages ! Le bloc oligarchique est sous le choc, la qualification en finale est triomphale.`;
        } else if (score >= 60000) {
            firstRoundPercent = (22.0 + (Math.random() * 2.8)).toFixed(1).replace('.', ',');
            situationNarrative = `🗳️ QUALIFICATION SOLIDE : Deuxième place décrochée avec ${firstRoundPercent}% des voix ! L'extrême droite est en embuscade, la bataille de l'entre-deux-tours s'annonce historique.`;
        } else {
            firstRoundPercent = (19.8 + (Math.random() * 1.5)).toFixed(1).replace('.', ',');
            situationNarrative = `⚡ QUALIFICATION SUR LE FIL : À 0,3% près, le mouvement arrache la 2e place avec ${firstRoundPercent}% des voix face au bloc libéral ! Chaque voix va compter pour le second tour.`;
        }

        const pivotEvent = {
            id: "event_pivot_1er_tour",
            tier: getCurrentTierNumber(),
            theme: "theme-antifa",
            characterName: "Soirée Électorale 2027",
            titre: "Résultats du 1er Tour de l'Élection Présidentielle",
            description: situationNarrative,
            choix: [
                {
                    texte: "🔥 Lancer l'appel à la grève générale et au rassemblement populaire pour l'entre-deux-tours.",
                    impact: { followers: 50000, budget: 500, energy: -20, credibility: 5, tension: 15 },
                    consequenceText: "La ferveur populaire monte d'un cran. Les comités de quartier s'organisent jour et nuit.",
                    tweets: [
                        { author: "France 2027 Info", handle: "@DirectElection", text: `Le mouvement qualifié avec ${firstRoundPercent}% ! Scène de liesse populaire sur la place publique 🚩🗳️` },
                        { author: "Militant Déterminé", handle: "@FrontPopu", text: "On ne lâche rien jusqu'au vendredi soir de la Grande Marche !" }
                    ]
                },
                {
                    texte: "🤝 Tendre la main aux forces syndicales et écologistes pour sceller l'union de combat.",
                    impact: { followers: 35000, budget: 1200, energy: 10, credibility: 10, tension: 5 },
                    consequenceText: "Les signatures de ralliement affluent. La caisse de campagne se remplit pour la dernière ligne droite.",
                    tweets: [
                        { author: "Intersyndicale", handle: "@SyndicatsUnis", text: "Appel unanime à faire bloc pour la justice fiscale et sociale !" }
                    ]
                }
            ]
        };

        gameState.currentEvent = pivotEvent;
        displayEvent(pivotEvent);
    }

    function triggerPackOpeningPhase() {
        const eventCard = document.getElementById('event-card');
        const choicesContainer = document.getElementById('choices-container');
        const packZone = document.getElementById('pack-opening-zone');
        const buyPack1 = document.getElementById('buy-pack-1');
        const buyPack2 = document.getElementById('buy-pack-2');

        if (eventCard) eventCard.style.display = 'none';
        if (choicesContainer) choicesContainer.style.display = 'none';
        if (packZone) packZone.style.display = 'block';

        const playerTier = getCurrentTierNumber();
        const standardPrices = { 1: 100, 2: 200, 3: 350, 4: 600 };
        const costPack1 = standardPrices[playerTier] || 200;
        const premiumPrices = { 1: 400, 2: 750, 3: 1300, 4: 2200 };
        const costPack2 = premiumPrices[playerTier] || 750;

        const priceTag1 = document.querySelector('#btn-pack-standard .pack-price');
        const priceTag2 = document.querySelector('#btn-pack-premium .pack-price');
        if (priceTag1) priceTag1.textContent = `${costPack1.toLocaleString('fr-FR')} €`;
        if (priceTag2) priceTag2.textContent = `${costPack2.toLocaleString('fr-FR')} €`;

        if (buyPack1) {
            buyPack1.disabled = gameState.stats.budget < costPack1;
            buyPack1.onclick = () => resolvePackPick(1, costPack1);
        }

        if (buyPack2) {
            buyPack2.disabled = gameState.stats.budget < costPack2;
            buyPack2.onclick = () => resolvePackPick(2, costPack2);
        }
    }

    function resolvePackPick(packType, cost) {
        if (typeof ALLIES_DATABASE === 'undefined') return;

        gameState.stats.budget -= cost;
        updateStatsUI();

        let candidates = [];
        const playerTier = getCurrentTierNumber();

        if (packType === 1) {
            candidates = ALLIES_DATABASE.filter(a => a.tier === playerTier);
        } else {
            const playerArch = (gameState.selectedCharacter?.name || '').toLowerCase();
            candidates = ALLIES_DATABASE.filter(a => 
                a.archetype.toLowerCase().includes(playerArch) || 
                playerArch.includes(a.archetype.toLowerCase())
            );
            if (candidates.length === 0) {
                candidates = ALLIES_DATABASE;
            }
        }

        const chosenAlly = weightedAllyPick(candidates);
        gameState.selectedAlly = chosenAlly;
        saveAllyToCollection(chosenAlly.id);
        displayRevealedAlly(chosenAlly);
    }

    function displayRevealedAlly(ally) {
        document.querySelector('.packs-container').style.display = 'none';
        const box = document.getElementById('ally-card-revealed');
        const badge = document.getElementById('ally-rarity-badge');
        const name = document.getElementById('ally-name');
        const role = document.getElementById('ally-role');
        const bio = document.getElementById('ally-bio');
        const bonusTag = document.getElementById('ally-bonus-display');
        const synergyTag = document.getElementById('ally-synergy-tag');
        const btnContinue = document.getElementById('btn-continue-march');

        if (box) box.style.display = 'block';
        if (badge) {
            badge.textContent = ally.rarityName;
            badge.style.backgroundColor = ally.rarityColor;
        }
        if (name) name.textContent = ally.name;
        if (role) role.textContent = ally.role;
        if (bio) bio.textContent = ally.bio;

        const playerArch = (gameState.selectedCharacter?.name || '').toLowerCase();
        const hasSynergy = ally.archetype.toLowerCase().includes(playerArch) || playerArch.includes(ally.archetype.toLowerCase());

        let bonusText = '';
        if (ally.bonusType === 'flat') {
            const val = hasSynergy ? ally.bonusValue * 2 : ally.bonusValue;
            bonusText = `+${val.toLocaleString('fr-FR')} manifestants`;
        } else {
            const val = hasSynergy ? Math.round(ally.bonusValue * 200) : Math.round(ally.bonusValue * 100);
            bonusText = `+${val}% de cortège`;
        }

        if (bonusTag) bonusTag.textContent = bonusText;
        if (synergyTag) synergyTag.style.display = hasSynergy ? 'block' : 'none';

        if (btnContinue) {
            btnContinue.onclick = () => {
                openLogisticsScreen();
            };
        }
    }

    function saveAllyToCollection(allyId) {
        let collection = JSON.parse(localStorage.getItem('unlocked_allies_collection') || '[]');
        if (!collection.includes(allyId)) {
            collection.push(allyId);
            localStorage.setItem('unlocked_allies_collection', JSON.stringify(collection));
        }
    }
// =========================================================
    // ÉTAPE LOGISTIQUE DU CORTÈGE FINAL
    // =========================================================
    function openLogisticsScreen() {
        showScreen('screen-logistics');
        gameState.purchasedLogistics = [];
        renderLogisticsGrid();
    }

    function renderLogisticsGrid() {
        const grid = document.getElementById('logistics-items-grid');
        const budgetVal = document.getElementById('logistics-budget-val');
        if (!grid || !budgetVal) return;

        budgetVal.textContent = `${gameState.stats.budget} €`;
        grid.innerHTML = '';

        MARCH_LOGISTICS_ITEMS.forEach(item => {
            const isBought = gameState.purchasedLogistics.includes(item.id);
            const canAfford = gameState.stats.budget >= item.cost;

            const card = document.createElement('div');
            card.className = `logistics-card ${isBought ? 'bought' : ''} ${!isBought && !canAfford ? 'disabled' : ''}`;

            card.innerHTML = `
                <div class="logistics-card-top">
                    <span class="logistics-icon">${item.icon}</span>
                    <span class="logistics-cost">${item.cost} €</span>
                </div>
                <div class="logistics-card-name">${item.name}</div>
                <div class="logistics-card-desc">${item.desc}</div>
                <button class="btn-toggle-buy ${isBought ? 'btn-refund' : 'btn-buy'}" ${!isBought && !canAfford ? 'disabled' : ''}>
                    ${isBought ? 'Retirer ↩' : 'Financer +'}
                </button>
            `;

            const btnAction = card.querySelector('.btn-toggle-buy');
            btnAction.onclick = () => {
                if (isBought) {
                    gameState.stats.budget += item.cost;
                    gameState.purchasedLogistics = gameState.purchasedLogistics.filter(id => id !== item.id);
                } else {
                    if (gameState.stats.budget >= item.cost) {
                        gameState.stats.budget -= item.cost;
                        gameState.purchasedLogistics.push(item.id);
                    }
                }
                updateStatsUI();
                renderLogisticsGrid();
            };

            grid.appendChild(card);
        });
    }

    // Écouteur pour valider les achats et lancer le cortège
    const btnLaunchMarch = document.getElementById('btn-launch-final-march');
    if (btnLaunchMarch) {
        btnLaunchMarch.addEventListener('click', () => {
            triggerFinalMarchVictory();
        });
    }
    function animateScoreCounter(targetElement, targetValue, duration = 2200) {
        if (!targetElement) return;
        
        let startTimestamp = null;
        const startValue = 0;

        function step(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Effet d'amorti (ralentit sur la fin)
            const easeOutQuad = 1 - (1 - progress) * (1 - progress);
            const currentScore = Math.floor(easeOutQuad * (targetValue - startValue) + startValue);

            targetElement.textContent = `${currentScore.toLocaleString('fr-FR')} manifestants`;

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                targetElement.textContent = `${targetValue.toLocaleString('fr-FR')} manifestants`;
            }
        }

        window.requestAnimationFrame(step);
    }
    function triggerFinalMarchVictory() {
        showScreen('screen-end');

        // --- 0. RÉINITIALISATION PROPRE DU BANDEAU ET DE LA BOÎTE D'ENREGISTREMENT ---
        const scoreHeroLabel = document.querySelector('.score-hero-label');
        const scoreHeroSub = document.querySelector('.score-hero-sub');
        const saveBox = document.querySelector('.save-box');
        const nemesisCard = document.querySelector('.dash-card.nemesis-theme');
        const marchCountEl = document.getElementById('final-march-count');
        const marchVerdictEl = document.getElementById('final-march-verdict');

        if (scoreHeroLabel) scoreHeroLabel.textContent = "AFFLUENCE DU CORTÈGE POPULAIRE";
        if (scoreHeroSub) scoreHeroSub.textContent = "Estimation de la préfecture et des syndicats";
        
        // Rétablir le formulaire de pseudo masqué par un éventuel game over
        if (saveBox) saveBox.style.display = 'flex';

        // Nettoyer les styles de défaite
        if (nemesisCard) nemesisCard.classList.remove('nemesis-burnout-active');
        if (marchCountEl) marchCountEl.classList.remove('gameover-burnout-text');
        if (marchVerdictEl) marchVerdictEl.classList.remove('verdict-burnout');

        // 1. Application des bonus d'équipements achetés
        let bonusFlatCortege = 0;
        let allyMult = 1.0;
        let overallMult = 1.0;
        let credMultiplierImpact = 1.0;
        let ignoreHighTensionRepression = false;

        (gameState.purchasedLogistics || []).forEach(itemId => {
            const item = (typeof MARCH_LOGISTICS_ITEMS !== 'undefined') 
                ? MARCH_LOGISTICS_ITEMS.find(i => i.id === itemId) 
                : null;
            if (!item) return;

            if (item.type === 'flat_boost') {
                bonusFlatCortege += item.value;
            } else if (item.type === 'ally_multiplier') {
                allyMult *= item.multiplier;
            } else if (item.type === 'cred_boost') {
                gameState.stats.credibility = Math.min(100, gameState.stats.credibility + item.credVal);
            } else if (item.type === 'followers_conversion') {
                const chunks = Math.floor((gameState.stats.followers || 0) / 10000);
                bonusFlatCortege += (chunks * item.rate);
            } else if (item.type === 'anti_repression') {
                ignoreHighTensionRepression = true;
            } else if (item.type === 'cortege_multiplier') {
                overallMult *= item.pct;
            } else if (item.type === 'cred_double_impact') {
                credMultiplierImpact = 2.0;
            }
        });

        // 2. NOUVEAU CALCUL SANS ÉNERGIE + BONUS DU PALIER FINAL
        const baseFollowers = Math.max(1000, gameState.stats.followers || 0);
        const credFactor = Math.max(0.3, ((gameState.stats.credibility || 50) / 50) * credMultiplierImpact);
        
        // Multiplicateur selon le statut de fin de partie
        const finalTier = getCurrentTierNumber();
        const tierMultiplierMap = {
            1: 1.0,  // Militant de section
            2: 1.3,  // Figure locale
            3: 1.7,  // Porte-parole médiatique
            4: 2.2   // Poids lourd national
        };
        const tierBonus = tierMultiplierMap[finalTier] || 1.0;

        // Calcul de base : Abonnés × Crédibilité × Statut de Palier + Logistique
        let finalScore = (baseFollowers * 1.5 * credFactor * tierBonus) + bonusFlatCortege;

        // 3. Prise en compte de l'allié avec multiplicateur de synergie
        const currentAlly = gameState.selectedAlly;
        if (currentAlly) {
            const synergyMult = (gameState.allySynergy && gameState.allySynergy.active) 
                ? gameState.allySynergy.multiplier 
                : 1.0;

            if (currentAlly.bonusType === 'flat') {
                finalScore += (currentAlly.bonusValue * synergyMult * allyMult);
            } else {
                finalScore *= (1 + (currentAlly.bonusValue * synergyMult * allyMult));
            }
        }

        // 4. Malus répression (annulé si section juridique présente)
        if (!ignoreHighTensionRepression && (gameState.stats.tension || 0) > 75) {
            finalScore *= 0.85;
        }

        // 5. Multiplicateur global
        finalScore = Math.max(500, Math.round(finalScore * overallMult));
        gameState.finalCalculatedScore = finalScore;

        // 6. Défilement animé du score final
        const scoreElement = document.getElementById('final-march-count') 
                           || document.getElementById('final-score') 
                           || document.getElementById('final-cortege-score');

        if (scoreElement) {
            animateScoreCounter(scoreElement, finalScore, 2400);
        }

        // Verdict narratif sous le score
        if (marchVerdictEl) {
            if (finalScore >= 500000) marchVerdictEl.textContent = "🔥 MARÉE POPULAIRE HISTORIQUE";
            else if (finalScore >= 150000) marchVerdictEl.textContent = "🚩 DÉFERLANTE CITOYENNE";
            else marchVerdictEl.textContent = "✊ MOBILISATION DE COMBAT";
        }

        // Récapitulatif des cartes
        const recapArchetype = document.getElementById('recap-archetype');
        if (recapArchetype) recapArchetype.textContent = getSelectedArchetypeName();

        // Récapitulatif Allié avec Émoji, Nom et Badge Synergie
        const recapAlly = document.getElementById('recap-ally');
        if (recapAlly) {
            if (currentAlly) {
                const themeInfo = (typeof ALLY_THEMES !== 'undefined' && ALLY_THEMES[currentAlly.theme])
                    ? ALLY_THEMES[currentAlly.theme]
                    : { label: 'Lutte Populaire', icon: '📢', color: '#dc2626' };

                const isSynergy = gameState.allySynergy && gameState.allySynergy.active;
                const synMult = isSynergy ? gameState.allySynergy.multiplier : 1;

                recapAlly.innerHTML = `
                    <span style="font-size: 1.15rem; margin-right: 4px;">${themeInfo.icon}</span>
                    <strong style="color: #18181b;">${currentAlly.name}</strong>
                    <span style="background: ${themeInfo.color}15; color: ${themeInfo.color}; border: 1px solid ${themeInfo.color}; padding: 2px 7px; border-radius: 999px; font-size: 0.72rem; font-weight: 800; margin-left: 6px;">
                        ${themeInfo.label}
                    </span>
                    ${isSynergy ? `<span style="background: #fef08a; color: #854d0e; border: 1px solid #facc15; padding: 2px 7px; border-radius: 999px; font-size: 0.7rem; font-weight: 800; margin-left: 4px;">✨ Synergie x${synMult}</span>` : ''}
                `;
            } else {
                recapAlly.textContent = 'Aucun';
            }
        }

        const recapNemesis = document.getElementById('recap-nemesis');
        if (recapNemesis) recapNemesis.textContent = gameState.highestOpponentName || 'Aucun';

        const recapStatus = document.getElementById('recap-status');
        if (recapStatus) recapStatus.textContent = getDynamicTier();

        renderLeaderboard();
    }
    window.triggerFinalMarchVictory = triggerFinalMarchVictory;

    const btnCollection = document.getElementById('btn-collection');
    const btnCollectionBack = document.getElementById('btn-collection-back');
    const btnEndToCollection = document.getElementById('btn-end-to-collection');
    const collectionFilters = document.querySelectorAll('.filter-btn');

    if (btnCollection) btnCollection.addEventListener('click', () => openCollectionScreen('all'));
    if (btnEndToCollection) btnEndToCollection.addEventListener('click', () => openCollectionScreen('all'));
    if (btnCollectionBack) btnCollectionBack.addEventListener('click', () => showScreen('screen-menu'));

    collectionFilters.forEach(btn => {
        btn.addEventListener('click', (e) => {
            collectionFilters.forEach(b => {
                b.classList.remove('active');
                b.style.borderColor = '';
                b.style.backgroundColor = '';
                b.style.color = '';
            });

            const targetBtn = e.currentTarget;
            targetBtn.classList.add('active');

            const tier = targetBtn.dataset.tier;
            if (tier !== 'all' && rarityConfig[tier]) {
                const conf = rarityConfig[tier];
                targetBtn.style.borderColor = conf.color;
                targetBtn.style.backgroundColor = `${conf.color}18`;
                targetBtn.style.color = conf.color;
            } else {
                targetBtn.style.borderColor = 'var(--primary)';
                targetBtn.style.backgroundColor = 'var(--primary)';
                targetBtn.style.color = '#FFFFFF';
            }

            renderCollectionGrid(tier);
        });
    });

    function openCollectionScreen(tierFilter = 'all') {
        showScreen('screen-collection');
        renderCollectionGrid(tierFilter);
    }

    // =========================================================
    // COLLECTION DES CAMARADES : RENDU & COMPTEURS PAR ONGLETS
    // =========================================================
    const rarityConfig = {
        1: { name: "Militant de Terrain", color: "#16a34a" },  // Vert
        2: { name: "Cadre de Lutte",       color: "#2563eb" },  // Bleu
        3: { name: "Poids Lourd",          color: "#9333ea" },  // Violet
        4: { name: "Légende Historique",   color: "#d97706" }   // Doré
    };

    // Applique immédiatement la bordure et la couleur à chaque bouton
    collectionFilters.forEach(btn => {
        const tier = btn.dataset.tier;
        if (tier !== 'all' && rarityConfig[tier]) {
            const conf = rarityConfig[tier];
            btn.style.border = `2px solid ${conf.color}`;
            btn.style.color = conf.color;
            btn.style.backgroundColor = 'transparent';
        } else {
            btn.style.border = '2px solid var(--primary)';
            btn.style.color = '#FFFFFF';
            btn.style.backgroundColor = 'var(--primary)';
        }

        btn.addEventListener('click', (e) => {
            const targetBtn = e.currentTarget;

            // Réinitialise l'état inactif tout en conservant les bordures colorées
            collectionFilters.forEach(b => {
                b.classList.remove('active');
                const bTier = b.dataset.tier;
                if (bTier !== 'all' && rarityConfig[bTier]) {
                    b.style.backgroundColor = 'transparent';
                    b.style.color = rarityConfig[bTier].color;
                } else {
                    b.style.backgroundColor = 'transparent';
                    b.style.color = '#a1a1aa';
                }
            });

            // Active le bouton sélectionné avec un fond plein ou teinté
            targetBtn.classList.add('active');
            const clickedTier = targetBtn.dataset.tier;

            if (clickedTier !== 'all' && rarityConfig[clickedTier]) {
                const conf = rarityConfig[clickedTier];
                targetBtn.style.backgroundColor = conf.color;
                targetBtn.style.color = '#FFFFFF';
            } else {
                targetBtn.style.backgroundColor = 'var(--primary)';
                targetBtn.style.color = '#FFFFFF';
            }

            renderCollectionGrid(clickedTier);
        });
    });
// Dictionnaire des thèmes de lutte pour les alliés
   const ALLY_THEMES = {
        'theme-ecologie':     { label: 'Écologie & Terres',          icon: '🌿', color: '#16a34a' },
        'theme-emancipation': { label: 'Émancipation & Droits',       icon: '✊', color: '#9333ea' },
        'theme-antifa':       { label: 'Antifascisme & Libertés',    icon: '🔻', color: '#18181b' },
        'theme-social':       { label: 'Justice Sociale & Travail',  icon: '🥖', color: '#dc2626' }
    };

    function renderCollectionGrid(tierFilter = 'all') {
        if (typeof ALLIES_DATABASE === 'undefined') return;

        const grid = document.getElementById('collection-grid');
        const countText = document.getElementById('collection-count-text');

        const rawUnlockedIds = JSON.parse(localStorage.getItem('unlocked_allies_collection') || '[]');
        const validUnlockedIds = rawUnlockedIds.filter(id => ALLIES_DATABASE.some(a => a.id === id));

        if (validUnlockedIds.length !== rawUnlockedIds.length) {
            localStorage.setItem('unlocked_allies_collection', JSON.stringify(validUnlockedIds));
        }

        const totalUnlocked = validUnlockedIds.length;
        const totalAllies = ALLIES_DATABASE.length;

        if (countText) {
            if (tierFilter === 'all') {
                countText.innerHTML = `Débloqués : <strong>${totalUnlocked} / ${totalAllies}</strong>`;
            } else {
                const tierNum = parseInt(tierFilter, 10);
                const conf = rarityConfig[tierNum] || { name: "Catégorie", color: "#770720" };
                const tierAllies = ALLIES_DATABASE.filter(a => a.tier === tierNum);
                const tierUnlockedCount = tierAllies.filter(a => validUnlockedIds.includes(a.id)).length;
                
                countText.innerHTML = `
                    <span style="color: ${conf.color}; font-weight: 800;">${conf.name} :</span>
                    <strong>${tierUnlockedCount} / ${tierAllies.length}</strong>
                    <span style="opacity: 0.6; font-size: 0.76rem; margin-left: 6px;">(Total : ${totalUnlocked}/${totalAllies})</span>
                `;
            }
        }

        // 1. Filtrage
        let list = [...ALLIES_DATABASE];
        if (tierFilter !== 'all') {
            list = list.filter(a => a.tier === parseInt(tierFilter, 10));
        }

        // Tri : palier croissant (Tier 1 -> Tier 4)
        // et au sein du palier : du MOINS rare au PLUS rare (scoreIndex décroissant)
        list.sort((a, b) => {
            if (a.tier !== b.tier) {
                return a.tier - b.tier;
            }
            return (b.scoreIndex || 0) - (a.scoreIndex || 0);
        });

        if (!grid) return;
        grid.innerHTML = '';

        list.forEach(ally => {
            const isUnlocked = validUnlockedIds.includes(ally.id);
            const conf = rarityConfig[ally.tier] || { name: "Allié", color: "#64748b" };
            const themeInfo = ALLY_THEMES[ally.theme] || { label: 'Lutte Populaire', icon: '📢', color: conf.color };
            const card = document.createElement('div');

            const displayTopPct = ally.topPct || "Top 50%";

            if (isUnlocked) {
                card.className = 'ally-collection-card unlocked';
                card.style.borderColor = conf.color;
                card.style.boxShadow = `0 2px 10px ${conf.color}22`;

                card.innerHTML = `
                    <div class="card-status-banner" style="background-color: ${conf.color};">
                        ${conf.name.toUpperCase()}
                    </div>
                    <div class="card-main-info">
                        <div class="card-name-title">${ally.name}</div>
                        <div class="card-role-sub">${ally.role}</div>
                    </div>
                    <div class="card-footer-rarity">
                        <span class="card-theme-icon" title="${themeInfo.label}">${themeInfo.icon}</span>
                        <span class="card-rarity-tag" style="color: ${conf.color}; font-weight: 700;">${displayTopPct}</span>
                    </div>
                `;

                card.onclick = () => openAllyModal(ally, conf);
            } else {
                card.className = 'ally-collection-card locked';
                card.style.borderColor = `${conf.color}44`;
                card.style.backgroundColor = `${conf.color}0a`;

                card.innerHTML = `
                    <div class="locked-icon" style="color: ${conf.color};">🔒</div>
                    <div class="locked-text" style="color: ${conf.color};">???</div>
                    <div class="locked-tier-label" style="color: ${conf.color};">
                        ${conf.name} • ${displayTopPct}
                    </div>
                `;
            }
            grid.appendChild(card);
        });
    }
    function openAllyModal(ally, conf) {
        const overlay = document.getElementById('ally-modal-overlay');
        const modalBody = document.getElementById('modal-body');
        if (!overlay || !modalBody) return;

        let bonusText = '';
        if (ally.bonusType === 'flat') {
            bonusText = `+${Number(ally.bonusValue).toLocaleString('fr-FR')} manifestants`;
        } else {
            bonusText = `+${Math.round(ally.bonusValue * 100)}% de cortège`;
        }

        const themeInfo = ALLY_THEMES[ally.theme] || { label: 'Lutte Populaire', icon: '📢', color: conf.color };
        const realTopPct = ally.topPct || "Top 50%";

        modalBody.innerHTML = `
            <div class="modal-header-layout" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <div class="modal-badge-wrapper" style="display: flex; gap: 8px; align-items: center;">
                    <span class="card-tier-pill" style="background-color: ${conf.color}; color: #fff; padding: 3px 8px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">${conf.name}</span>
                    <span class="modal-top-tag" style="color: ${conf.color}; font-weight: 800; font-size: 0.8rem;">${realTopPct}</span>
                </div>
                <div class="modal-theme-tag" style="background: ${themeInfo.color}18; color: ${themeInfo.color}; border: 1px solid ${themeInfo.color}; padding: 3px 8px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">
                    ${themeInfo.icon} ${themeInfo.label}
                </div>
            </div>
            <h3 class="modal-ally-name" style="margin: 0 0 4px 0;">${ally.name}</h3>
            <div class="modal-ally-role" style="color: #71717a; font-size: 0.85rem; margin-bottom: 12px;">${ally.role}</div>
            <p class="modal-ally-bio" style="font-style: italic; margin-bottom: 16px;">« ${ally.bio} »</p>
            <div class="modal-bonus-box">
                <span class="modal-bonus-title">Impact sur le Cortège :</span>
                <span class="modal-bonus-val">${bonusText}</span>
            </div>
        `;

        overlay.style.display = 'flex';
    }
    // Gestion de la fermeture de la modale Allié
    const allyOverlay = document.getElementById('ally-modal-overlay');
    const allyCloseBtn = document.getElementById('btn-close-ally-modal') || document.querySelector('.close-ally-modal');

    function closeAllyModal() {
        if (allyOverlay) {
            allyOverlay.style.display = 'none';
        }
    }

    if (allyCloseBtn) {
        allyCloseBtn.addEventListener('click', closeAllyModal);
    }

    // Permet aussi de fermer en cliquant à côté de la modale (sur le fond sombre)
    if (allyOverlay) {
        allyOverlay.addEventListener('click', (e) => {
            if (e.target === allyOverlay) {
                closeAllyModal();
            }
        });
    }
// =========================================================
    // GESTION AUDIO UNIVERSELLE (FONCTIONNE SUR TOUS LES ÉCRANS)
    // =========================================================
    const bgMusic = document.getElementById('bg-music');
    const allSoundButtons = document.querySelectorAll('.btn-sound-toggle');
    let isMuted = false;
    let hasStartedMusic = false;

    if (bgMusic) {
        bgMusic.volume = 0.35;
    }

    function toggleAudio(e) {
        if (e) e.stopPropagation();
        if (!bgMusic) return;

        if (bgMusic.paused) {
            bgMusic.play().then(() => {
                isMuted = false;
                hasStartedMusic = true;
                updateAllSoundButtons();
            }).catch(() => {});
        } else {
            isMuted = !isMuted;
            bgMusic.muted = isMuted;
            updateAllSoundButtons();
        }
    }

    function updateAllSoundButtons() {
        const icon = (isMuted || (bgMusic && bgMusic.paused)) ? '🔇' : '🔊';
        document.querySelectorAll('.btn-sound-toggle').forEach(btn => {
            btn.textContent = icon;
        });
    }

    // Écouteur sur tous les boutons son de l'application
    allSoundButtons.forEach(btn => {
        btn.addEventListener('click', toggleAudio);
    });

    // Déclenchement automatique au premier clic de l'utilisateur
    document.addEventListener('click', () => {
        if (!hasStartedMusic && bgMusic && !isMuted) {
            bgMusic.play().then(() => {
                hasStartedMusic = true;
                updateAllSoundButtons();
            }).catch(() => {});
        }
    }, { once: true });
});
// Gestion universelle de la fermeture de la modale Allié
    function closeAllyModal() {
        const overlay = document.getElementById('ally-modal-overlay');
        if (overlay) {
            overlay.style.display = 'none';
        }
    }

    // Capture tous les clics sur la croix ou ses éléments enfants
    document.addEventListener('click', (e) => {
        if (
            e.target.id === 'btn-close-ally-modal' ||
            e.target.closest('#btn-close-ally-modal') ||
            e.target.classList.contains('close-ally-modal') ||
            e.target.closest('.close-ally-modal') ||
            e.target.id === 'modal-close-btn'
        ) {
            e.preventDefault();
            e.stopPropagation();
            closeAllyModal();
        }
    });

    // Rendre la fonction accessible en ligne pour les onclick HTML
    window.closeAllyModal = closeAllyModal;

    // Correspondance entre profil joueur et thème d'allié
    function getPlayerThemeAffinity() {
        const charType = (typeof gameState !== 'undefined' && gameState.selectedCharacter) 
            ? (gameState.selectedCharacter.id || gameState.selectedCharacter) 
            : '';

        switch(charType) {
            case 'écolo': return 'theme-ecologie';
            case 'syndicaliste':
            case 'etudiant_bloqueur': return 'theme-social';
            case 'feministe':
            case 'queer':
            case 'anticolonial': return 'theme-emancipation';
            case 'attache_parlementaire': return 'theme-ecologie';
            default: return 'theme-social';
        }
    }

    // Tirage pondéré parmi une liste de cartes selon leur dropWeight
    function pickWeightedAlly(pool) {
        if (!pool || pool.length === 0) return null;
        const totalWeight = pool.reduce((acc, curr) => acc + (curr.dropWeight || 10), 0);
        let roll = Math.random() * totalWeight;

        for (const ally of pool) {
            const w = ally.dropWeight || 10;
            if (roll <= w) return ally;
            roll -= w;
        }
        return pool[0];
    }

    // Fonction de tirage selon le pack choisi
    function drawAllyFromPack(packType) {
        if (typeof ALLIES_DATABASE === 'undefined') return null;

        const playerTheme = getPlayerThemeAffinity();
        let eligiblePool = [];

        if (packType === 'family') {
            // PACK AFFINITÉ : Uniquement de sa famille thématique, tous paliers confondus
            // Les raretés basses tombent plus souvent grâce au dropWeight
            eligiblePool = ALLIES_DATABASE.filter(a => a.theme === playerTheme);
        } else {
            // PACK STANDARD : N'importe qui dans la base
            // (La probabilité favorise les paliers 1 et 2 via le dropWeight)
            eligiblePool = [...ALLIES_DATABASE];
        }

        const pickedAlly = pickWeightedAlly(eligiblePool);
        if (!pickedAlly) return null;

        // Détection de la compatibilité
        const isSynergy = pickedAlly.theme === playerTheme;

        // Multiplicateur de Synergie selon la rareté : P1 = x2, P2 = x3, P3 = x4, P4 = x5
        let synergyMultiplier = 1;
        if (isSynergy) {
            switch(pickedAlly.tier) {
                case 1: synergyMultiplier = 2; break;
                case 2: synergyMultiplier = 3; break;
                case 3: synergyMultiplier = 4; break;
                case 4: synergyMultiplier = 5; break;
                default: synergyMultiplier = 2;
            }
        }

        // Sauvegarde de l'allié tiré et déblocage dans la collection
        gameState.selectedAlly = pickedAlly;
        gameState.allySynergy = {
            active: isSynergy,
            multiplier: synergyMultiplier,
            theme: playerTheme
        };

        const unlocked = JSON.parse(localStorage.getItem('unlocked_allies_collection') || '[]');
        if (!unlocked.includes(pickedAlly.id)) {
            unlocked.push(pickedAlly.id);
            localStorage.setItem('unlocked_allies_collection', JSON.stringify(unlocked));
        }

        return { ally: pickedAlly, isSynergy, synergyMultiplier };
    }
function displayPackResult(drawResult) {
        const container = document.getElementById('pack-result-display');
        if (!container || !drawResult) return;

        const { ally, isSynergy, synergyMultiplier } = drawResult;
        const conf = (typeof rarityConfig !== 'undefined' && rarityConfig[ally.tier]) 
            ? rarityConfig[ally.tier] 
            : { name: "Allié", color: "#64748b" };
        
        const themeInfo = (typeof ALLY_THEMES !== 'undefined' && ALLY_THEMES[ally.theme])
            ? ALLY_THEMES[ally.theme]
            : { label: 'Lutte Populaire', icon: '📢', color: conf.color };

        // Calcul du bonus affiché
        let bonusText = '';
        if (ally.bonusType === 'flat') {
            const finalVal = ally.bonusValue * synergyMultiplier;
            bonusText = `+${finalVal.toLocaleString('fr-FR')} manifestants`;
        } else {
            const finalPct = Math.round(ally.bonusValue * synergyMultiplier * 100);
            bonusText = `+${finalPct}% de cortège`;
        }

        container.innerHTML = `
            <div class="booster-card-wrapper ${isSynergy ? 'synergy-glow-effect' : ''}" style="border-color: ${conf.color};">
                ${isSynergy ? `
                    <div class="synergy-shining-badge">
                        ✨ SYNERGIE TOTALE : ${themeInfo.label.toUpperCase()} (x${synergyMultiplier}) ✨
                    </div>
                ` : ''}

                <div class="booster-header" style="background: ${conf.color};">
                    <span>${conf.name.toUpperCase()}</span>
                    <span>${ally.topPct}</span>
                </div>

                <div class="booster-content">
                    <!-- Badge du thème bien visible au-dessus du nom -->
                    <div class="booster-theme-pill" style="color: ${themeInfo.color}; border: 1.5px solid ${themeInfo.color}; background: ${themeInfo.color}15;">
                        ${themeInfo.icon} ${themeInfo.label}
                    </div>

                    <h2 class="booster-name">${ally.name}</h2>
                    <div class="booster-role">${ally.role}</div>
                    <p class="booster-bio">« ${ally.bio} »</p>

                    <div class="booster-impact-box ${isSynergy ? 'synergy-impact' : ''}">
                        <div class="impact-label">
                            ${isSynergy ? `⭐ Synergie ${themeInfo.icon} activée (Bonus x${synergyMultiplier}) :` : 'Impact Standard :'}
                        </div>
                        <div class="impact-val">${bonusText}</div>
                    </div>
                </div>
            </div>
        `;
    }
        const container = document.getElementById('pack-result-display');
        if (!container || !drawResult) return;

        const { ally, isSynergy, synergyMultiplier } = drawResult;
        const conf = (typeof rarityConfig !== 'undefined' && rarityConfig[ally.tier]) 
            ? rarityConfig[ally.tier] 
            : { name: "Allié", color: "#64748b" };
        
        const themeInfo = (typeof ALLY_THEMES !== 'undefined' && ALLY_THEMES[ally.theme])
            ? ALLY_THEMES[ally.theme]
            : { label: 'Lutte', icon: '✊', color: conf.color };

        // Calcul du bonus final après application du super-bonus de synergie
        let bonusText = '';
        if (ally.bonusType === 'flat') {
            const finalVal = ally.bonusValue * synergyMultiplier;
            bonusText = `+${finalVal.toLocaleString('fr-FR')} manifestants`;
        } else {
            const finalPct = Math.round(ally.bonusValue * synergyMultiplier * 100);
            bonusText = `+${finalPct}% de cortège`;
        }

        container.innerHTML = `
            <div class="booster-card-wrapper ${isSynergy ? 'synergy-glow-effect' : ''}" style="border-color: ${conf.color};">
                ${isSynergy ? `
                    <div class="synergy-shining-badge">
                        ✨ SYNERGIE PARFAITE : ${themeInfo.label.toUpperCase()} (x${synergyMultiplier}) ✨
                    </div>
                ` : ''}

                <div class="booster-header" style="background: ${conf.color};">
                    <span>${conf.name.toUpperCase()}</span>
                    <span>${ally.topPct}</span>
                </div>

                <div class="booster-content">
                    <div class="booster-theme-pill" style="color: ${themeInfo.color}; border-color: ${themeInfo.color};">
                        ${themeInfo.icon} ${themeInfo.label}
                    </div>
                    <h2 class="booster-name">${ally.name}</h2>
                    <div class="booster-role">${ally.role}</div>
                    <p class="booster-bio">« ${ally.bio} »</p>

                    <div class="booster-impact-box ${isSynergy ? 'synergy-impact' : ''}">
                        <div class="impact-label">
                            ${isSynergy ? `🔥 Impact Décuplé (Bonus x${synergyMultiplier}) :` : 'Impact Standard :'}
                        </div>
                        <div class="impact-val">${bonusText}</div>
                    </div>
                </div>
            </div>
        `;
    }
