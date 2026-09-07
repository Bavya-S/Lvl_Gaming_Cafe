// ===================== GAMES DATA =====================
const GAMES = [
  { name: "FC 25", type: "Sports", players: "1-4", ps4: true, "ps5-55": true, "ps5-65": false, "ps5-pro": false, image: "assets/games/FC 25.jpg", rating: "4.3", dev: "EA Sports", year: "2024", playtime: "Substantial (Sports)", trailer: "pBM2xyco_Kg", popular: true, age: "E", story: "Take control of your favorite club with revamped tactical systems and realistic player motion modeling. Compete locally with friends in quick-play derbies or conquer seasonal divisions." },
  { name: "FC 26", type: "Sports", players: "1-4", ps4: false, "ps5-55": false, "ps5-65": true, "ps5-pro": true, image: "assets/games/FC 26.jpg", rating: "4.5", dev: "EA Sports", year: "2025", playtime: "Substantial (Sports)", trailer: "TSi0iJYSQ24", popular: true, age: "E", story: "Experience the breakthrough step in virtual competitive football simulations, featuring updated roster databases, micro-precision skill adjustments, and pro-station exclusive fluid physics animations." },
  { name: "WWE 2K25", type: "Fighting", players: "1-4", ps4: true, "ps5-55": true, "ps5-65": true, "ps5-pro": true, image: "assets/games/WWE 2k25.jpg", rating: "4.6", dev: "Visual Concepts", year: "2025", playtime: "30h+", trailer: "vvx8Vj2hk0k", popular: true, age: "T", story: "Step into the squared circle with current legends and retro superstars. Throw down in chaotic multi-man ladders, cages, and Royal Rumble matches using optimized controller input configurations." },
  { name: "Mad Max", type: "Adventure", players: "1", ps4: true, "ps5-55": false, "ps5-65": false, "ps5-pro": false, image: "assets/games/mad-max.jpg", rating: "4.4", dev: "Avalanche Studios", year: "2015", playtime: "20h - 60h", trailer: "uZkOgOHpf7M", popular: false, age: "M", story: "Become the lone post-apocalyptic warrior navigating an expansive open-world wasteland. Upgrade your fully customized battle vehicle, the Magnus Opus, to survive brutal highway vehicular skirmishes." },
  { name: "Mortal Kombat 11", type: "Fighting", players: "1-2", ps4: true, "ps5-55": true, "ps5-65": false, "ps5-pro": false, image: "assets/games/mk11.jpg", rating: "4.7", dev: "NetherRealm Studios", year: "2019", playtime: "8h - 50h", trailer: "7zwQPJmg-Kg", popular: true, age: "M", story: "Confront temporal distortion as timeline variants clash in ultra-visceral standard-setting competitive match fights. Pull off iconic crushing blows against rival players sitting right beside you." },
  { name: "Mortal Kombat 1", type: "Fighting", players: "1-2", ps4: false, "ps5-55": false, "ps5-65": false, "ps5-pro": true, image: "assets/games/mk1.png", rating: "4.8", dev: "NetherRealm Studios", year: "2023", playtime: "7h - 40h", trailer: "UZ6eFEjFfJ0", popular: true, age: "M", story: "A reborn universe crafted by Fire God Liu Kang. Discover a brand-new combat system template featuring specialized cameo partner assists, devastating custom strings, and gorgeous arenas." },
  { name: "Fantasy Strike", type: "Fighting", players: "1-2", ps4: true, "ps5-55": false, "ps5-65": false, "ps5-pro": false, image: "assets/games/Fantasy Strike.png", rating: "4.1", dev: "Sirlin Games", year: "2019", playtime: "Continuous", trailer: "18D9M5CeJLs", popular: false, age: "E10+", story: "An accessible, color-coordinated martial arts title focused on positioning strategy over complex execution inputs. Excellent for quick, pick-up-and-play casual showdown sessions." },
  { name: "Need for Speed Heat", type: "Racing", players: "1", ps4: true, "ps5-55": false, "ps5-65": false, "ps5-pro": false, image: "assets/games/nfs-heat.jpg", rating: "4.4", dev: "Ghost Games", year: "2019", playtime: "13h - 40h", trailer: "9ewiJJe_nYI", popular: false, age: "T", story: "Race by day and risk it all by night in high-stakes street circuit runs. Evade rogue tactical police forces across neon-soaked urban grid environments using highly personalized tuners." },
  { name: "Need for Speed Hot Pursuit", type: "Racing", players: "1", ps4: false, "ps5-55": true, "ps5-65": false, "ps5-pro": false, image: "assets/games/nfs-hot-pursuit.jpg", rating: "4.5", dev: "Criterion Games", year: "2020", playtime: "15h+", trailer: "fJdfuMRvx_U", popular: false, age: "E10+", story: "Feel the thrilling rush of both tactical tracking pursuits and high-octane escapes. Master super-powered interceptors equipped with spike strips and EMP shields to outwit the law." },
  { name: "Cricket 24", type: "Sports", players: "1-4", ps4: true, "ps5-55": true, "ps5-65": true, "ps5-pro": false, image: "assets/games/cricket24.jpg", rating: "4.2", dev: "Big Ant Studios", year: "2023", playtime: "Continuous", trailer: "ZobU-Ka6K00", popular: true, age: "E", story: "The most realistic simulation of the gentleman’s game yet. Lead fully licensed international teams down to the pitch with precise batting strokes and tactical spin bowling options." },
  { name: "Rise of the Tomb Raider", type: "Adventure", players: "1", ps4: true, "ps5-55": false, "ps5-65": false, "ps5-pro": false, image: "assets/games/tomb-raider.jpg", rating: "4.7", dev: "Crystal Dynamics", year: "2015", playtime: "14h - 40h", trailer: "nFBrgeSjj-0", popular: false, age: "M", story: "Join Lara Croft on her first epic expedition into remote Siberia to discover the secret of immortality before a ruthless shadow syndicate beats her to the ancient truth." },
  { name: "A Way Out", type: "Roleplay", players: "2", ps4: true, "ps5-55": true, "ps5-65": true, "ps5-pro": true, image: "assets/games/A Way Out.png", rating: "4.8", dev: "Hazelight", year: "2018", playtime: "6h", trailer: "yGZGSdgJVPM", popular: true, age: "M", story: "An exclusive co-op story experience designed specifically for two side-by-side players. Control Leo and Vincent as they pull off an audacious prison break and outrun cross-state authorities." },
  { name: "Resident Evil Village", type: "Adventure", players: "1", ps4: true, "ps5-55": false, "ps5-65": false, "ps5-pro": false, image: "assets/games/re-village.png", rating: "4.8", dev: "Capcom", year: "2021", playtime: "10h - 25h", trailer: "JSapXD9vxYA", popular: true, age: "M", story: "Navigate the terrifying, snowy gothic domain of a mysterious European settlement. Help Ethan Winters battle terrifying bosses and giant monstrosities to save his captured daughter." },
  { name: "Batman Return of Arkham", type: "Adventure", players: "1", ps4: true, "ps5-55": false, "ps5-65": false, "ps5-pro": false, image: "assets/games/batman-arkham.jpg", rating: "4.7", dev: "Rocksteady / Virtuos", year: "2016", playtime: "25h - 60h", trailer: "AWv07fouYvs", popular: false, age: "T", story: "Step into the shadows as the Dark Knight in remastered fidelity. Put a stop to the devious plans of the Joker and Harley Quinn inside the asylum and across the walled districts of Arkham City." },
  { name: "Assassin's Creed Unity", type: "Roleplay", players: "1-4", ps4: false, "ps5-55": true, "ps5-65": false, "ps5-pro": false, image: "assets/games/ac-unity.jpg", rating: "4.3", dev: "Ubisoft", year: "2014", playtime: "17h - 80h", trailer: "m7Tb1pFl5_8", popular: false, age: "M", story: "Roam a gorgeously historical, massive scale rendition of Paris during the chaos of the French Revolution. Work together with fellow assassins in localized multiplayer co-op stealth missions." },
  { name: "Assassin's Creed Mirage", type: "Roleplay", players: "1", ps4: false, "ps5-55": false, "ps5-65": true, "ps5-pro": false, image: "assets/games/ac-mirage.jpg", rating: "4.5", dev: "Ubisoft", year: "2023", playtime: "12h - 30h", trailer: "IRNOoOYVn80", popular: true, age: "M", story: "Return to the historic roots of the franchise in 9th-century Baghdad. Follow Basim’s journey from a clever street thief to a master assassin utilizing traditional parkour tactics." },
  { name: "Brawlhalla", type: "Fighting", players: "1-4", ps4: false, "ps5-55": true, "ps5-65": false, "ps5-pro": true, image: "assets/games/brawlhalla.jpg", rating: "4.4", dev: "Blue Mammoth", year: "2017", playtime: "Continuous", trailer: "baixpNzE9es", popular: false, age: "E10+", story: "An energetic 2D platform brawler arena clash. Knock your friends off balancing ledges and grab floating weapon drops in rapid-fire local party match brackets." },
  { name: "Dirt 5", type: "Racing", players: "1-4", ps4: false, "ps5-55": true, "ps5-65": true, "ps5-pro": true, image: "assets/games/dirt5.jpg", rating: "4.3", dev: "Codemasters", year: "2020", playtime: "10h - 30h", trailer: "rPIj7Lxi-Q8", popular: false, age: "E", story: "Conquer mud, gravel, and ice-covered circuits worldwide. Experience intense arcade style split-screen four-player racing matches with ultra-responsive buggy vehicles." },
  { name: "Fortnite", type: "Roleplay", players: "1-4", ps4: false, "ps5-55": true, "ps5-65": false, "ps5-pro": false, image: "assets/games/fortnite.png", rating: "4.6", dev: "Epic Games", year: "2017", playtime: "Continuous", trailer: "FG97IPDAmjA", popular: true, age: "T", story: "Drop out of the battle bus, gather materials, build structural cover, and outlast 99 other combatants in the definitive pop-culture battle royale experience." },
  { name: "GTA 5", type: "Roleplay", players: "1-4", ps4: false, "ps5-55": true, "ps5-65": true, "ps5-pro": true, image: "assets/games/GTA 5.jpg", rating: "4.9", dev: "Rockstar Games", year: "2013", playtime: "30h - 100h+", trailer: "tV95N0TIltc", popular: true, age: "M", story: "Weave through the interconnected criminal underworld lives of three unique anti-heroes in Los Santos. Pull off complex multi-stage heists across a vast modern sandbox." },
  { name: "It Takes Two", type: "Roleplay", players: "2", ps4: false, "ps5-55": true, "ps5-65": true, "ps5-pro": true, image: "assets/games/it-takes-two.jpg", rating: "4.9", dev: "Hazelight", year: "2021", playtime: "14h", trailer: "ohClxMmNLQQ", popular: true, age: "T", story: "An award-winning platforming challenge narrative built explicitly for split-screen co-op. Work through wild, imaginative obstacles together to mend a broken relationship." },
  { name: "Spider-Man", type: "Adventure", players: "1", ps4: false, "ps5-55": false, "ps5-65": true, "ps5-pro": false, image: "assets/games/Spider-Man.png", rating: "4.8", dev: "Insomniac Games", year: "2018", playtime: "17h - 45h", trailer: "q4GdJVvdxss", popular: true, age: "T", story: "Swing effortlessly across a beautiful open-world Manhattan skyline. Battle an assortment of iconic Super Villains using acrobatic martial arts combos and web gadget trickery." },
  { name: "Spider-Man Miles Morales", type: "Adventure", players: "1", ps4: false, "ps5-55": true, "ps5-65": true, "ps5-pro": false, image: "assets/games/miles-morales.png", rating: "4.8", dev: "Insomniac Games", year: "2020", playtime: "8h - 18h", trailer: "U-1cn1yOKYc", popular: true, age: "T", story: "Watch young hero Miles Morales learn to wield incredible bio-electric venom blast powers and optical camouflage to defend his snowy East Harlem neighborhood from a turf war." },
  { name: "Marvel's Spider-Man 2", type: "Adventure", players: "1", ps4: false, "ps5-55": false, "ps5-65": false, "ps5-pro": true, image: "assets/games/spiderman2.jpeg", rating: "4.9", dev: "Insomniac Games", year: "2023", playtime: "15h - 30h", trailer: "9fVYKsEmuRo", popular: true, age: "T", story: "Switch dynamically between Peter Parker and Miles Morales. Confront the horrifying emergence of Venom and Kraven the Hunter across an expanded New York City map grid." },
  { name: "Power Rangers", type: "Fighting", players: "1-2", ps4: false, "ps5-55": true, "ps5-65": true, "ps5-pro": false, image: "assets/games/power-rangers.jpg", rating: "4.2", dev: "nWay", year: "2019", playtime: "5h+", trailer: "TGRxUGGHGIQ", popular: false, age: "T", story: "Battle across eras of the franchise's history in premium tag-team layouts. Master air juggles, assists, and giant Megazord summon mechanics to smash your local opponents." },
  { name: "Rocket League", type: "Sports", players: "1-4", ps4: false, "ps5-55": true, "ps5-65": true, "ps5-pro": true, image: "assets/games/Rocket League.jpg", rating: "4.7", dev: "Psyonix", year: "2015", playtime: "Continuous", trailer: "OmMF9EDbmQQ", popular: true, age: "E", story: "High-flying arcade vehicular soccer. Boost up walls and perform acrobatic aerial flips to smash a giant soccer ball directly into your opponent's net frame." },
  { name: "Sackboy", type: "Adventure", players: "1-4", ps4: false, "ps5-55": true, "ps5-65": false, "ps5-pro": false, image: "assets/games/sackboy.jpg", rating: "4.6", dev: "Sumo Digital", year: "2020", playtime: "11h - 30h", trailer: "ZOk3fj5ujNM", popular: false, age: "E", story: "Embark on a charming 3D cooperative platforming expedition with friends. Navigate unique craft worlds, using tools and expressions to defeat Vex’s nightmare constructs." },
  { name: "Ninja Turtles", type: "Fighting", players: "1-4", ps4: false, "ps5-55": true, "ps5-65": false, "ps5-pro": false, image: "assets/games/Ninja Turtles.jpg", rating: "4.6", dev: "Tribute Games", year: "2022", playtime: "3h - 10h", trailer: "b_RnIOj126E", popular: false, age: "E10+", story: "A radical, beautifully styled retro pixel beat 'em up action game. Pick your favorite half-shell ninja turtle or ally and slice through Shredder’s Foot Clan." },
  { name: "Asphalt Legends", type: "Racing", players: "1-4", ps4: false, "ps5-55": false, "ps5-65": true, "ps5-pro": true, image: "assets/games/Asphalt Legends.jpg", rating: "4.3", dev: "Gameloft", year: "2018", playtime: "Continuous", trailer: "9j7XtelJYkk", popular: false, age: "E", story: "Tear through hyper-realistic world tracks in real-world licensed hypercars. Deploy intense nitro charges and perform 360-degree spins to smash through other racers." },
  { name: "Contra", type: "Adventure", players: "1-2", ps4: false, "ps5-55": false, "ps5-65": true, "ps5-pro": true, image: "assets/games/Contra.jpg", rating: "4.0", dev: "WayForward", year: "2024", playtime: "5h+", trailer: "S-CZ59JP058", popular: false, age: "E10+", story: "Reimagine the legendary run-and-gun arcade shooter framework. Blast through alien swarms using multi-tiered upgrades, defensive dashes, and cooperative combo setups." },
  { name: "Crash Team Racing Nitro-Fueled", type: "Racing", players: "1-4", ps4: false, "ps5-55": false, "ps5-65": true, "ps5-pro": true, image: "assets/games/Crash Team Racing Nitro-Fueled.jpg", rating: "4.6", dev: "Beenox", year: "2019", playtime: "10h - 40h", trailer: "dr2BCMRk_xc", popular: false, age: "E", story: "Power slide and rocket boost across wacky kart tracks from the Crash Bandicoot universe. Grab powerups to blast friends sitting next to you on the couch." },
  { name: "UFC 4", type: "Fighting", players: "1-2", ps4: false, "ps5-55": false, "ps5-65": true, "ps5-pro": false, image: "assets/games/ufc4.jpg", rating: "4.4", dev: "EA Vancouver", year: "2020", playtime: "12h+", trailer: "-Pq2ENj4Ekw", popular: false, age: "T", story: "Develop your fighting style in high-stakes octagon matches. Features deep clinch positioning frameworks, reworked takedown systems, and intense striking feedback mechanics." },
  { name: "Ghost of Tsushima", type: "Adventure", players: "1", ps4: false, "ps5-55": false, "ps5-65": true, "ps5-pro": false, image: "assets/games/ghost-of-tsushima.jpg", rating: "4.9", dev: "Sucker Punch", year: "2020", playtime: "25h - 60h+", trailer: "iqysmS4lxwQ", popular: true, age: "M", story: "Unbound by rigid samurai tradition, a desperate warrior must take up the mantle of the Ghost to wage an unconventional guerrilla liberation war for feudal Tsushima." },
  { name: "God of War", type: "Adventure", players: "1", ps4: false, "ps5-55": false, "ps5-65": true, "ps5-pro": false, image: "assets/games/God of War.jpeg", rating: "4.9", dev: "Santa Monica Studio", year: "2018", playtime: "20h - 50h", trailer: "HqQMh_tij0c", popular: true, age: "M", story: "Living as a man outside the shadow of the Greek gods, Kratos must venture into the brutal Norse realm of Midgard alongside his son Atreus on a deeply personal quest." },
  { name: "God of War Ragnarök", type: "Adventure", players: "1", ps4: false, "ps5-55": false, "ps5-65": true, "ps5-pro": false, image: "assets/games/God of War Ragnarök.jpg", rating: "4.9", dev: "Santa Monica Studio", year: "2022", playtime: "25h - 60h", trailer: "EE-4GvjKcfs", popular: true, age: "M", story: "Fimbulwinter approaches. Kratos and Atreus must journey across all Nine Realms seeking answers as Asgardian forces prepare for a prophesied war to end the world." },
  { name: "God of War 3 Remastered", type: "Adventure", players: "1", ps4: false, "ps5-55": false, "ps5-65": true, "ps5-pro": true, image: "assets/games/God of War 3 Remastered.jpg", rating: "4.8", dev: "Santa Monica Studio", year: "2015", playtime: "10h", trailer: "EWghbLMynz0", popular: false, age: "M", story: "Scale the heights of Mount Olympus in raw fury. Control Kratos as he tears down ancient Greek deities and titans alike in a brutal, uncompromising quest for vengeance." },
  { name: "RDR 2", type: "Roleplay", players: "1", ps4: false, "ps5-55": false, "ps5-65": true, "ps5-pro": true, image: "assets/games/RDR 2.jpg", rating: "4.9", dev: "Rockstar Games", year: "2018", playtime: "50h - 150h+", trailer: "eaW0tYpxyp0", popular: true, age: "M", story: "Witness the dying days of the American Wild West outlaw era. Follow Arthur Morgan and the Van der Linde gang as they rob, fight, and survive across a massive landscape." },
  { name: "Stick Fight", type: "Fighting", players: "1-4", ps4: false, "ps5-55": false, "ps5-65": true, "ps5-pro": false, image: "assets/games/Stick Fight.png", rating: "4.4", dev: "Landfall Games", year: "2017", playtime: "Continuous", trailer: "kgKGxQ6Ro_A", popular: false, age: "T", story: "A physics-based couch brawler where stick-figure combatants battle across collapsing hazard platforms using laser rifles, melee weapons, and falling physics cubes." },
  { name: "The Last of Us Part 1", type: "Adventure", players: "1", ps4: false, "ps5-55": false, "ps5-65": true, "ps5-pro": false, image: "assets/games/tlou1.jpg", rating: "4.9", dev: "Naughty Dog", year: "2022", playtime: "15h", trailer: "W01L70IGBgE", popular: true, age: "M", story: "In a devastated post-pandemic civilization, a hardened survivor must smuggle a 14-year-old girl out of a military quarantine zone on a moving emotional journey across America." },
  { name: "The Last of Us Part 2 Remastered", type: "Adventure", players: "1", ps4: false, "ps5-55": false, "ps5-65": true, "ps5-pro": false, image: "assets/games/tlou2.jpg", rating: "4.9", dev: "Naughty Dog", year: "2024", playtime: "25h - 40h", trailer: "Ye3st9z6jQY", popular: true, age: "M", story: "Track Ellie as she pursues an unyielding path of raw vengeance following a sudden traumatic event, encountering complex factions and fierce dynamic stealth combat conditions." },
  { name: "Uncharted Legacy of Thieves", type: "Adventure", players: "1", ps4: false, "ps5-55": false, "ps5-65": true, "ps5-pro": false, image: "assets/games/uncharted.jpg", rating: "4.8", dev: "Naughty Dog", year: "2022", playtime: "30h+", trailer: "F3Wl-OiZCO4", popular: true, age: "M", story: "Follow Nathan Drake and Chloe Frazer across high-stakes standalone treasure-hunting escapades in remastered graphic clarity, traversing beautiful historical ruin complexes." },
  { name: "Until Dawn", type: "Adventure", players: "1", ps4: false, "ps5-55": false, "ps5-65": true, "ps5-pro": false, image: "assets/games/until-dawn.jpg", rating: "4.6", dev: "Supermassive Games", year: "2015", playtime: "8h", trailer: "3NcF7EOnjow", popular: false, age: "M", story: "Eight friends are trapped on a remote, freezing mountain retreat while a masked psycho tracks them. Every choice you make alters the structural branch narrative of who survives." },
  { name: "Wo Long Fallen Dynasty", type: "Roleplay", players: "1", ps4: false, "ps5-55": false, "ps5-65": true, "ps5-pro": false, image: "assets/games/Wo Long Fallen Dynasty.jpg", rating: "4.4", dev: "Team Ninja", year: "2023", playtime: "25h - 50h", trailer: "SWRcZN4jMW8", popular: false, age: "M", story: "A dark fantasy take on the Three Kingdoms era. Battle deadly demons and legendary warriors using rapid-fire sword play based directly on ancient Chinese martial arts styles." },
  { name: "Call of Duty", type: "Fighting", players: "1-2", ps4: false, "ps5-55": false, "ps5-65": false, "ps5-pro": true, image: "assets/games/cod.jpg", rating: "4.5", dev: "Activision", year: "2023", playtime: "Continuous", trailer: "jLbst85USN8", popular: true, age: "M", story: "Engage in fast-paced modern tactical combat encounters. Team up or lock horns with other setups inside hyper-smooth local split-screen shootout rounds." },
  { name: "Call of Duty Black Ops 3", type: "Fighting", players: "1-4", ps4: false, "ps5-55": false, "ps5-65": false, "ps5-pro": true, image: "assets/games/Call of Duty Black Ops 3.jpg", rating: "4.6", dev: "Treyarch", year: "2015", playtime: "Continuous", trailer: "qAUYNIDEJ6o", popular: false, age: "M", story: "Confront a dystopian tech future. Gather your squad to survive wave after wave of undead threats in the globally acclaimed, arcade-action Zombies mode." },
  { name: "Devil May Cry 5 SE", type: "Adventure", players: "1", ps4: false, "ps5-55": false, "ps5-65": false, "ps5-pro": true, image: "assets/games/Devil May Cry 5 SE.jpg", rating: "4.8", dev: "Capcom", year: "2020", playtime: "12h - 30h", trailer: "izY0cIOQ5ds", popular: false, age: "M", story: "Unleash flashy hack-and-slash combinations as legendary devil hunters. Push your performance meter rating to an SSS rank using newly optimized ultra-high framerate speeds." },
  { name: "F1 24", type: "Racing", players: "1-2", ps4: false, "ps5-55": false, "ps5-65": false, "ps5-pro": true, image: "assets/games/f1-24.jpg", rating: "4.4", dev: "Codemasters", year: "2024", playtime: "Continuous", trailer: "NnyCWsA6KSI", popular: false, age: "E", story: "Clutch the steering wheel of current aerodynamic Formula 1 racing builds. Push your physics engine traction limits through precision timing across officially licensed city tracks." },
  { name: "Split Fiction", type: "Adventure", players: "1", ps4: false, "ps5-55": false, "ps5-65": false, "ps5-pro": true, image: "assets/games/split-fiction.jpg", rating: "4.7", dev: "Hazelight Studios", year: "2025", playtime: "12h+", trailer: "fcwngWPXQtg", popular: false, age: "T", story: "A mind-bending puzzle narrative experience that dynamically morphs and divides your display screen space, challenging you to rethink cooperative level progression physics parameters." },
  { name: "Stellar Blade", type: "Adventure", players: "1", ps4: false, "ps5-55": false, "ps5-65": false, "ps5-pro": true, image: "assets/games/stellar-blade.jpg", rating: "4.8", dev: "Shift Up", year: "2024", playtime: "20h - 40h", trailer: "DSznLWimMlU", popular: true, age: "M", story: "Take up Eve's high-frequency blade to liberate a desolate, ruined Earth overrun by terrifying biological anomalies. Master parry frames and execute flashy counters." },
  { name: "Unravel Two", type: "Adventure", players: "2", ps4: false, "ps5-55": false, "ps5-65": false, "ps5-pro": true, image: "assets/games/unravel-two.jpg", rating: "4.6", dev: "Coldwood Interactive", year: "2018", playtime: "6h", trailer: "j2TmLrTl6gs", popular: false, age: "E", story: "Form an inseparable yarn bond between two adorable miniature creatures. Run, swing, and solve ingenious physics-based platform puzzles in seamless local co-op gameplay." },
  { name: "Valorant", type: "Fighting", players: "1", ps4: false, "ps5-55": false, "ps5-65": false, "ps5-pro": true, image: "assets/games/Valorant.jpg", rating: "4.5", dev: "Riot Games", year: "2020", playtime: "Continuous", trailer: "lWr6dhTcu-E", popular: true, age: "T", story: "Blend tactical, near-instantaneous gunplay loops with powerful, unique character superpower capabilities in high-stakes competitive attack-and-defend station rounds." },
  { name: "Where Winds Meet", type: "Roleplay", players: "1", ps4: false, "ps5-55": false, "ps5-65": false, "ps5-pro": true, image: "assets/games/where-winds-meet.jpg", rating: "4.7", dev: "Everstone Studio", year: "2025", playtime: "30h+", trailer: "3q0cUkf5z7w", popular: true, age: "M", story: "Immerse yourself in a vast martial arts open-world roleplay during the chaotic twilight era of ancient Chinese dynasties, executing gravity-defying Wuxia combat movements." },
  { name: "Ghost of Yōtei", type: "Adventure", players: "1", ps4: false, "ps5-55": false, "ps5-65": false, "ps5-pro": true, image: "assets/games/ghost-of-yotei.jpg", rating: "4.9", dev: "Sucker Punch", year: "2025", playtime: "30h+", trailer: "7z7kqwuf0a8", popular: true, age: "M", story: "Set out around the snow-crested wilderness of Mount Yōtei. Guide a lone warrior tracking down personal targets across beautiful wilderness landscapes." }
];

const gameEmojis = { Adventure: "⚔️", Roleplay: "🗺️", Racing: "🏎️", Sports: "⚽", Fighting: "👊" };
const gameBgs = {
  Adventure: "linear-gradient(135deg,#0a1a2a,#1a0a2a)",
  Roleplay: "linear-gradient(135deg,#1a2a0a,#0a1a2a)",
  Racing: "linear-gradient(135deg,#2a1a0a,#0a0a2a)",
  Sports: "linear-gradient(135deg,#0a2a1a,#0a1a2a)",
  Fighting: "linear-gradient(135deg,#2a0a0a,#1a0a2a)"
};

// ===================== STATE CONFIGURATION =====================
let activeFilters = { console: 'all', players: 'all', genre: 'all' };
let searchQuery = '';
let sortBy = 'default';

let currentSelectedGame = null;
let isTrailerPlaying = false;

function generateStars(rating) {
  const count = Math.round(parseFloat(rating));
  return "⭐".repeat(count) + ` ${rating}`;
}

function renderHomeMostPlayed() {
  const container = document.getElementById('homeMostPlayedGrid');
  if (!container) return;

  const featuredGames = GAMES.filter(g => g.popular).slice(0, 12);
  container.innerHTML = featuredGames.map((g) => {
    const type = g.type.split('/')[0].trim();
    return `<div class="game-card-featured home-most-played-card" data-game-name="${g.name}">
      <div class="card-img-wrapper">
        <img src="${g.image || ''}" alt="${g.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="game-thumb-fallback" style="display:none; background:${gameBgs[type]||gameBgs.Adventure}; width:100%; height:100%; align-items:center; justify-content:center; position:absolute; inset:0;">
          <div class="game-thumb-icon">${gameEmojis[type]||'🎮'}</div>
        </div>
      </div>
      <div class="card-info">
        <h3>${g.name}</h3>
        <p>${g.type}</p>
      </div>
    </div>`;
  }).join('');

  container.querySelectorAll('.home-most-played-card').forEach(card => {
    card.addEventListener('click', () => {
      const matchedGame = GAMES.find(g => g.name === card.dataset.gameName);
      if (matchedGame) {
        openGameModal(matchedGame);
      }
    });
  });
}

// ===================== RENDER PIPELINE =====================
// ===================== EXPANDED RENDER PIPELINE =====================
function renderGames(){
  const grid = document.getElementById('gamesGrid');
  if(!grid) return;

  // 1. Filter the games array based on Active Badges AND Search Query
  let filtered = GAMES.filter(g => {
    const cf = activeFilters.console;
    const pf = activeFilters.players;
    const gf = activeFilters.genre;
    
    const consoleOk = cf === 'all' || g[cf];
    const playersOk = pf === 'all' || (pf === '1' && g.players === '1') || (pf === '2' && g.players === '2') || (pf === 'multi' && g.players.includes('-'));
    const genreOk = gf === 'all' || g.type.includes(gf);
   
    // Search match looks into Title, Developer, and Story text
    const query = searchQuery.toLowerCase().trim();
    const searchOk = !query || 
                     g.name.toLowerCase().includes(query) || 
                     g.dev.toLowerCase().includes(query) || 
                     g.story.toLowerCase().includes(query);
   
    return consoleOk && playersOk && genreOk && searchOk;
  });

  // 2. Sort the filtered array
  if (sortBy === 'rating-desc') {
    filtered.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  } else if (sortBy === 'year-desc') {
    filtered.sort((a, b) => parseInt(b.year) - parseInt(a.year));
  } else if (sortBy === 'year-asc') {
    filtered.sort((a, b) => parseInt(a.year) - parseInt(b.year));
  } else if (sortBy === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  const countEl = document.getElementById('gameCount');
  if(countEl) countEl.textContent = filtered.length;

  // 3. Render Cards to DOM (REMOVED 'rgb-border' below)
  grid.innerHTML = filtered.map((g, index) => {
    const type = g.type.split('/')[0].trim();
    const playerString = g.players === '1' ? '👤 1 Player' : `👥 ${g.players} Players`;
    const consoles = [
      g.ps4 && '<span class="game-console-badge badge-ps4">PS4</span>',
      g['ps5-55'] && '<span class="game-console-badge badge-ps555">PS5 55"</span>',
      g['ps5-65'] && '<span class="game-console-badge badge-ps565">PS5 65"</span>',
      g['ps5-pro'] && '<span class="game-console-badge badge-pspro">PS5 PRO</span>'
    ].filter(Boolean).join('');

    // CHANGED: Removed 'rgb-border' class from the container below
    return `<div class="glass-card game-card" data-index="${GAMES.indexOf(g)}">
      <div class="game-thumb">
        <img class="game-thumb-bg" src="${g.image || ''}" alt="${g.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="game-thumb-fallback" style="display:none; background:${gameBgs[type]||gameBgs.Adventure}; width:100%; height:100%; align-items:center; justify-content:center; position:absolute; inset:0;">
          <div class="game-thumb-icon">${gameEmojis[type]||'🎮'}</div>
        </div>
      </div>
      <div class="game-info">
        <div class="game-title">${g.name}</div>
        <div class="game-tags">
          <span class="game-tag tag-type">${g.type}</span>
          <span class="game-tag tag-players">${playerString}</span>
        </div>
        <div class="game-consoles">${consoles}</div>
      </div>
    </div>`;
  }).join('');

  document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
      const targetIndex = card.dataset.index;
      openGameModal(GAMES[targetIndex]);
    });
  });
}

// ===================== MODAL MANAGEMENT =====================
window.openGameModal = function(game) {
  currentSelectedGame = game;
  isTrailerPlaying = false;

  document.getElementById('modalTitle').textContent = game.name;
  document.getElementById('modalRating').textContent = generateStars(game.rating);
  document.getElementById('modalAgeRating').textContent = `Rating: ${game.age}`;
  document.getElementById('modalDev').textContent = game.dev;
  document.getElementById('modalYear').textContent = game.year;
  document.getElementById('modalPlaytime').textContent = game.playtime;
  document.getElementById('modalStory').textContent = game.story; // Injecting the unique game story dynamically [cite: 164]

  setModalMediaMode(false);

  const listContainer = document.getElementById('modalConsoles');
  listContainer.innerHTML = [
    game.ps4 && '<div class="modal-console-badge" style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); padding:8px 12px; border-radius:6px; color:#fff; margin-bottom:4px; font-size:0.85rem;">PlayStation 4</div>',
    game['ps5-55'] && '<div class="modal-console-badge" style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); padding:8px 12px; border-radius:6px; color:#fff; margin-bottom:4px; font-size:0.85rem;">PlayStation 5 55" OLED</div>',
    game['ps5-65'] && '<div class="modal-console-badge" style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); padding:8px 12px; border-radius:6px; color:#fff; margin-bottom:4px; font-size:0.85rem;">PlayStation 5 65" QD OLED</div>',
    game['ps5-pro'] && '<div class="modal-console-badge" style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); padding:8px 12px; border-radius:6px; color:#fff; margin-bottom:4px; font-size:0.85rem;">PlayStation 5 Pro 65" QD OLED</div>'
  ].filter(Boolean).join('');

  const badgesContainer = document.getElementById('modalBadges');
  const pTag = game.players === '1' ? '👤 1 Player' : `👥 ${game.players} Players`;
  badgesContainer.innerHTML = `
    <span class="game-tag tag-type" style="background:#3b82f6; color:#fff; padding:4px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">🎮 ${game.type.toUpperCase()}</span>
    <span class="game-tag tag-players" style="background:#06b6d4; color:#fff; padding:4px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">${pTag}</span>
    ${game.popular ? '<span class="modal-tag tag-popular" style="background:#f97316; color:#fff; padding:4px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">🔥 POPULAR</span>' : ''}
  `;

  document.getElementById('gameModal').classList.add('active');
};

window.closeGameModal = function() {
  document.getElementById('modalMediaContainer').innerHTML = '';
  document.getElementById('gameModal').classList.remove('active');
};

window.toggleTrailerMode = function() {
  if (!currentSelectedGame) return;
  isTrailerPlaying = !isTrailerPlaying;
  setModalMediaMode(isTrailerPlaying);
};

function setModalMediaMode(wantsVideo) {
  const container = document.getElementById('modalMediaContainer');
  const btn = document.getElementById('modalTrailerBtn');

  if (wantsVideo && currentSelectedGame.trailer) {
    container.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${currentSelectedGame.trailer}?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:none;"></iframe>`;
    btn.textContent = "🖼️ Show Image Cover";
  } else {
    container.innerHTML = `<img src="${currentSelectedGame.image || ''}" alt="${currentSelectedGame.name}" style="width:100%; height:100%; object-fit:cover;">`;
    btn.textContent = "▶ Play Trailer";
  }
}

// Global modal background click exit
document.getElementById('gameModal')?.addEventListener('click', (e) => {
  if (e.target.id === 'gameModal') closeGameModal();
});

// ===================== INITIALIZE NEW LISTENERS =====================
document.addEventListener('DOMContentLoaded', () => {
  renderHomeMostPlayed();
  renderGames();

  // Category filters setup
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      document.querySelectorAll(`[data-filter="${filter}"]`).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilters[filter] = btn.dataset.value;
      renderGames();
    });
  });

  // Search Event Listener (triggers on every keystroke) [cite: 158]
  const searchInput = document.getElementById('gameSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderGames();
    });
  }

  // Sorting Drop-down Listener [cite: 160]
  const sortSelect = document.getElementById('gameSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      renderGames();
    });
  }

  // Connect static "Most Played" carousel items to look up dynamic database [cite: 172]
  document.querySelectorAll('.game-card-featured').forEach(featuredCard => {
    featuredCard.addEventListener('click', () => {
      const headingText = featuredCard.querySelector('.card-info h3')?.textContent.trim();
      if (!headingText) return;
      
      // Perform loose database title match (handles version differences gracefully e.g. WWE 2K24/2K25 or FC 25/26) [cite: 173]
      const matchedGame = GAMES.find(g =>
        g.name.toLowerCase() === headingText.toLowerCase() ||
        g.name.toLowerCase().substring(0, 5) === headingText.toLowerCase().substring(0, 5)
      );
      if (matchedGame) {
        openGameModal(matchedGame);
      }
    });
  });
});