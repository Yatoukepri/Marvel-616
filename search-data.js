// =========================
// INDEX DE RECHERCHE GLOBAL
// =========================

const SEARCH_INDEX = [
  
  {
	title : "Menu",
	url : "index.html",
	type : ["Menu"],
	content : "Menu Héros Super Vilain Equipes Accueil Marvel-616 Catégories"
  },
  {
	title : "Héros",
	url : "heros.html",
	type : ["Catégorie"],
	content : "Héros Super Catégorie Marvel-616 Spider Man Peter Parker Miles Morales Captain America Steve Rogers Iron Tony Stark Hulk Bruce Banner Thor Odinson Hawkeye Clint Barton Black Widow Natasha Romanoff Wolverine Logan James Howlett Deadpool Wade Wilson Docteur Stephen Strange Black Panther T'Challa Ant Hank Pym Scott Lang Guepe Janet Van Dyne Sorciere Rouge Scarket Witch Wanda Maximoff Vif Argent Quicksilver Pietro Ghost Rider Johnny Blaze Daredevil Matt Murdock Faucon Falcon Sam Wilson Vision Surfer Argent Silver Norrin Radd Blade Erik Brooks Captain Miss Marvel Carol Danvers Nova Richard Rider Namor McKenzie Miss She Hulk Jennifer Walters Sentry Bob Robert Reynolds Void Jessica Jones Luke Cage Power Punisher Frank Castle Moon Knight Marc Spector Steven Grant Jake Lockley Professeur professor X Charles Xavier Star Lord Peter Quill Cyclope Scott Summers Fleche Noire Black Bolt Blackagar Boltagon Spider Woman Jessica Drew"
  },
  {
	title : "Super-vilains",
	url : "super-vilains.html",
	type : ["Catégorie"],
	content : "Super Vilain Ennemi Catégorie Marvel-616 Thanos Kang Conquérant Docteur Fatalis Doom Galactus Apocalypse Magneto Ultron Venom Carnage Crane Rouge Red Skull Mephisto Loki Bouffon Vert Green Goblin Octopus Ronan Accusateur Annihilus Kingpin Caid Fisk Bullseye Maker Createur Mister Sinister Sinistre Sentinelles Soldat Hiver Winter Soldier Abomination Sabretooth Dents Sabre"
  },
  {
	title : "Équipes",
	url : "equipes.html",
	type : ["Catégorie"],
	content : "Equipe Catégorie Marvel-616 Avengers X Men Quatre Fantastiques Fantastic Four Gardiens Galaxie Guardians Galaxy Defenders Spider verse Sinister six illuminati inhumains inhumans dark avengers envahisseurs invaders confrerie mauvais mutants bortherhood evil mutants heritiers inheritors hydra main hand club damnes hellfire"
  },
  {
	title : "Entités",
	url : "entites.html",
	type : ["Catégorie"],
	content : "Entites Catégorie Marvel-616 "
  },
  {
	title : "Les Pierres d'Infinité",
	url : "infinity-stones.html",
	type : ["Catégorie"],
	content : "Pierres d'Infinite Thanos gemmes infini ame soul nemesis espace space esprit mind pouvoir power realite reality temps time ego Catégorie Marvel-616 "
  },
  {
	title : "Lieux",
	url : "lieux.html",
	type : ["Catégorie"],
	content : "Lieux Catégorie Marvel-616 "
  },
  {
    title: "Spider-Man (Peter Parker) (Terre-616)",
    url: "heros/spider-man.html",
    type: ["Héros"],
    content: "Spider-Man Terre-616 Peter Parker New York Araignée Toile Avengers Defenders Fantastiques"
  },
  {
    title: "Spider-Man (Miles Morales) (Terre-1610)",
    url: "heros/miles-morales.html",
    type: ["Héros"],
    content: "Spider-Man Miles Morales Terre-1610 Peter Parker New York Araignée Brooklyn Toile avengers spiderverse defenders"
  },
  {
    title: "Captain America (Steve Rogers)",
    url: "heros/captain-america.html",
    type: ["Héros"],
    content: "Captain America Steve Rogers Terre-616 Steven soldat bucky barnes hydra avengers bouclier envahisseurs defenders"
  },
  {
    title: "Iron Man (Tony Stark)",
    url: "heros/iron-man.html",
    type: ["Héros"],
    content: "Tony Stark iron man armure Avengers Terre-616 anthony yinsen illuminati gardiens galaxie club damnés"
  },
  {
    title: "Hulk (Bruce Banner)",
    url: "heros/hulk.html",
    type: ["Héros"],
    content: "Bruce Banner Robert hulk colère Avengers colosse jade incroyable mcu gamma vert defenders fantastiques"
  },
  {
    title: "Thor",
    url: "heros/thor.html",
    type: ["Héros"],
    content: "Dieu tonnerre Asgard marteau Mjolnir Avengers thor odinson odin asgard midgard loki foudre donald blake stormbreaker"
  },
  {
    title: "Ares",
    url: "ennemis/ares.html",
    type: ["Anti-Héros", "Ennemi"],
    content: "Dieu Guerre Olympe Ares Zeus Hercule War God Hera Alexander Aaron Mars Mister Talon John Achille avengers dark"
  },
  {
	title : "Black Widow (Natasha Romanoff)",
	url : "heros/black-widow.html",
	type : ["Héros"],
	content : "Natasha Romanoff avengers espion black widow veuve noire russie russe"
  },
  {
	title : "Hawkeye (Clint Barton)",
	url : "heros/hawkeye.html",
	type : ["Héros"],
	content : "Clint Barton avengers arc flèche archer hawkeye faucon trickshot"
  },
  {
	title : "Wolverine (Logan)",
	url : "heros/wolverine.html",
	type : ["Héros"],
	content : "James Howlett Logan x-men canada mutant griffes sabretooth adamantium avengers defenders fantastiques"
  },
  {
	title : "Deadpool (Wade Wilson)",
	url : "heros/deadpool.html",
	type : ["Anti-Héros"],
	content : "Deadpool Wade Wilson Mutant Canada Wolverine Ajax Mort Facteur guérisseur chimichangas immortel voix katana Defenders Avengers"
  },
  {
	title : "Docteur Strange (Stephen Strange)",
	url : "heros/docteur-strange.html",
	type : ["Héros"],
	content : "Docteur Strange Stephen Sorcier Supreme Ancien mystique Tibet cape agamotto vishanti cyttorak oshtur dormammu magie defenders illuminati avengers"
  },
  {
	title : "Mr. Fantastique (Reed Richards)",
	url : "equipes/fantastic-four/reed-richards.html",
	type : ["Héros"],
	content : "Reed Richards Mister Fantastic Monsieur Mr Fantastique Sue Susan Quatre Fantastiques Fantastic Four Johnny Ben Grimm Avengers Illuminati Victor Von Fatalis Doom"
  },
  {
	title : "La Femme Invisible (Susan Storm)",
	url : "equipes/fantastic-four/susan-storm.html",
	type : ["Héros"],
	content : "Susan Sue Jane Storm Femme Invisible Woman Johnny Quatre Fantastiques Fantastic Four Reed Richards Ben Grimm"
  },
  {
	title : "La Torche Humaine (Johnny Storm)",
	url : "equipes/fantastic-four/johnny-storm.html",
	type : ["Héros"],
	content : "Johnny Storm Torche Humaine Human Torch Sue Susan Quatre Fantastiques Fantastic Four Reed Richards Ben Grimm"
  },
  {
	title : "La Chose (Ben Grimm)",
	url : "equipes/fantastic-four/ben-grimm.html",
	type : ["Héros"],
	content : "Ben Benjamin Grimm Chose Thing Quatre Fantastiques Fantastic Four Pierre Reed Richards Susan Johnny Storm"
  },
  {
	title : "Black Panther (T'Challa)",
	url : "heros/black-panther.html",
	type : ["Héros"],
	content : "black panther t'challa wakanda vibranium adamantium roi afrique bast griffe defenders avengers illuminati fantastique"
  },
  {
	title : "Ant-Man (Hank Pym)",
	url : "heros/hank-pym.html",
	type : ["Héros"],
	content : "ant man hank pym scott lang janet hope van dyne guepe ultron tony stark avengers defenders scientifique fourmi henry"
  },
  {
	title : "Ant-Man (Scott Lang)",
	url : "heros/scott-lang.html",
	type : ["Héros"],
	content : "ant man scott lang hank pym janet van dyne guepe avengers fourmi"
  },
  {
	title : "La Guêpe (Janet Van Dyne)",
	url : "heros/guepe.html",
	type : ["Héros"],
	content : "Guepe Wasp Janet Van Dyne Hope Hank Pym Ant Ultron Avengers"
  },
  {
	title : "La Sorcière Rouge (Wanda Maximoff)",
	url : "heros/scarlet-witch.html",
	type : ["Héros", "Ennemi"],
	content : "Sorcière Sorciere Rouge Scarlet Witch Wanda Maximoff Vif Argent Quicksilver Pietro Magneto Vision Mutant X-men sorcière magie chaos strange transie wundagore avengers confrerie confrérie defenders"
  },
  {
	title : "Vif-Argent (Pietro Maximoff)",
	url : "heros/quicksilver.html",
	type : ["Héros"],
	content : "Vif Argent Quicksilver Pietro Maximoff Wanda Scarlet Witch Sorciere Rouge Mutant X-Men Avengers Magneto Wundagore Transie Vitesse Rapide"
  },
  {
	title : "Ghost Rider (Johnny Blaze)",
	url : "heros/ghost-rider.html",
	type : ["Anti-Héros"],
	content : "ghost rider johnny johnathon blaze crane feu flamme demon démon mephisto esprit vengeance pacte zarathos satan moto monstre ame péchés midnight sons chaine fusil penitence enfer defenders avengers fantastiques"
  },
  {
	title : "Ghost Rider (Robbie Reyes)",
	url : "heros/robbie-reyes.html",
	type : ["Héros"],
	content : "ghost rider roberto robbie reyes eli morrow dodge charter gabe johnny blaze los angeles ame midnight sons avengers racers"
  },
  {
	title : "Daredevil (Matt Murdock)",
	url : "heros/daredevil.html",
	type : ["Héros"],
	content : "daredevil matt murdock matthew homme sans peur diable hell's kitchen corne rouge aveugle elektra defenders avengers"
  },
  {
	title : "Le Faucon (Sam Wilson)",
	url : "heros/falcon.html",
	type : ["Héros"],
	content : "faucon falcon sam wilson captain america blackbird ailes rouge redwing oiseau bouclier avengers defenders"
  },
  {
	title : "La Cape (Tyrone Johnson)",
	url : "heros/cloak.html",
	type : ["Héros"],
	content : "tyrone johnson cape cloak darkforce tandy bowen epee épée dagger lifeforce lightforce tenebres ténèbres baron noir simon marshall mister negative martin li"
  },
  {
	title : "L'Épée (Tandy Bowen)",
	url : "heros/dagger.html",
	type : ["Héros"],
	content : "tandy bowen épée epee dagger lightforce lifeforce tyrone johnson cape cloak darkforce lumieres lumières simon marshall mister negative martin li"
  },
  {
	title : "La Vision",
	url : "heros/vision.html",
	type : ["Héros"],
	content : "vision robot androide ultron hank pym ant man wanda sorciere rouge scarlet witch avengers defenders gardiens galaxie synthézoïde white wonder simon williams"
  },
  {
	title : "Le Surfer d'Argent (Norrin Radd)",
	url : "heros/silver-surfer.html",
	type : ["Héros"],
	content : "surfer surfeur argent silver galactus heraut herald quatre fantastiques fantastic four avengers defenders cosmic cosmique espace zenn la shalla bal"
  },
  {
	title : "Blade (Erik Brooks)",
	url : "heros/blade.html",
	type : ["Anti-Héros"],
	content : "blade erik brooks vampire dhampyr daywalker dhampire lame pieu épée deacon frost dracula morbius midnight sons"
  },
  {
	title : "Captain Marvel (Carol Danvers)",
	url : "heros/captain-marvel.html",
	type : ["Héros"],
	content : "captain marvel miss carol danvers binaire warbird vers car-ell kree skrull mar-vell lawson malicia avengers defenders espace cosmique cosmic"
  },
  {
	title : "Nova (Richard Rider)",
	url : "heros/nova.html",
	type : ["Héros"],
	content : "Nova richard rider centurion prime xandar kree skrull worldmind annihilus annihilation gardiens galaxie avengers"
  },
  {
	title : "Namor (Namor McKenzie)",
	url : "heros/namor.html",
	type : ["Anti-Héros"],
	content : "Namor McKenzie Sub Mariner Atlante Atlantis Talokan Prince Mer Tha-Korr Namora Envahisseurs Invaders Defenders Illuminati Avengers Attuma Krang Destiny"
  },
  {
	title : "Miss-Hulk (Jennifer Walters)",
	url : "heros/she-hulk.html",
	type : ["Héros"],
	content : "Miss She Hulk Jennifer Walters Bruce Banner Savage Avocate Lawyer Avocat Avengers Quatre Four Fantastiques Fantastics"
  },
  {
	title : "Sentry (Robert Reynolds)",
	url : "heros/sentry.html",
	type : ["Héros", "Ennemi"],
	content : "Sentry Robert Reynolds Bob Bobby Void Gold Sentinelle Dorée Serum Super Soldat Personnalité Bipolaire Double Maléfique Dark Avengers"
  },
  {
	title : "Luke Cage",
	url : "heros/luke-cage.html",
	type : ["Héros"],
	content : "Luke Cage Power Man Carl Lucas Héros louer Hero Hire Jessica Jones Daredevil Matt Murdock Avengers Defenders Quatre Four Fantastiques Fantastic"
  },
  {
	title : "Jessica Jones",
	url : "heros/jessica-jones.html",
	type : ["Héros"],
	content : "Jessica Jones Campbell Jewel Peter Parker Spider Man Luke Cage Power Zebediah Killgrave Homme pourpre purple man Defenders Avengers Daredevil"
  },
  {
	title : "Le Punisher (Frank Castle)",
	url : "heros/punisher.html",
	type : ["Anti-Héros"],
	content : "Punisher Frank castle mafia arme fusil pistolet marine vengeance defenders"
  },
  {
	title : "U.S. Agent (John Walker)",
	url : "heros/us-agent.html",
	type : ["Anti-Héros", "Héros"],
	content : "John Walker US Agent Super Patriot Captain America Steve Rogers Lemar Power Broker Buckies Thurm"
  },
  {
	title : "Moon Knight (Marc Spector)",
	url : "heros/moon-knight.html",
	type : ["Héros", "Anti-Héros"],
	content : "Moon Knight Chevalier Lune Khonshu Marc Spector Steven Grant Jake Lockley Poing Egypte Egyptien Dieu Mister Mr Defenders Avengers"
  },
  {
	title : "Flèche Noire (Blackagar Boltagon)",
	url : "heros/black-bolt.html",
	type : ["Héros"],
	content : "Black Bolt Fleche Noire Blackagar Boltagon Inhumains Inhumans Medusa Roi Attilan Agon Rynda Maximus Voix Onde sonore Illuminati"
  },
  {
	title : "Adam Warlock",
	url : "heros/adam-warlock.html",
	type : ["Héros"],
	content : "Adam Warlock Magus Lui Him soul stone pierre gemme ame enclave contre terre maitre evolution high evolutionary pip troll"
  },
  {
	title : "Blue Marvel (Adam Brashear)",
	url : "heros/blue-marvel.html",
	type : ["Héros"],
	content : "Blue Marvel Adam Brashear Conner Sims Anti man infinaute kennedy uatu watcher gardien"
  },
  {
	title : "Professeur X (Charles Xavier)",
	url : "equipes/x-men/charles-xavier.html",
	type : ["Héros"],
	content : "Charles Xavier X-Men xmen Mutant Francis Fauteuil roulant télépathe psychique wetchester cerebro illuminati"
  },
  {
	title : "Cyclope (Scott Summers)",
	url : "equipes/x-men/cyclope.html",
	type : ["Héros"],
	content : "Cyclope scott summers mutant x-men xmen rayon laser optique visière oculaire lunette havok quartz rubis"
  },
  {
	title : "Angel (Warren Worthington III)",
	url : "equipes/x-men/angel.html",
	type : ["Héros"],
	content : "Angel Warren Worthington III Archangel mutant x-men xmen apocalypse"
  },
  {
	title : "Le Fauve (Hank McCoy)",
	url : "equipes/x-men/fauve.html",
	type : ["Héros"],
	content : "Fauve Beast Hank McCoy Henry mutant x-men xmen"
  },
  {
	title : "Marvel Girl (Jean Grey)",
	url : "equipes/x-men/jean-grey.html",
	type : ["Héros", "Ennemi"],
	content : "Marvel Girl Jean Grey Phenix Phoenix Dark Noir mutant Madelyn Pryor Summers Xmen X-Men Cerebro"
  },
  {
	title : "Iceberg (Bobby Drake)",
	url : "equipes/x-men/iceberg.html",
	type : ["Héros"],
	content : "Iceberg Iceman Bobby Drake Robert Frosty Mister Friese Xmen x-men mutant"
  },
  {
	title : "Colossus (Piotr Raspoutine)",
	url : "equipes/x-men/colossus.html",
	type : ["Héros"],
	content : "Colossus Piotr Raspoutine Rasputin Nikolaievitch Magik Illyana russie russe sovietique Xmen X-Men mutant metal"
  },
  {
	title : "Diablo (Kurt Wagner)",
	url : "equipes/x-men/diablo.html",
	type : ["Héros"],
	content : "Diablo Nightcrawler Kurt Wagner Elfe Velu Xmen X-Men mutant teleportation bamf allemagne allemand"
  },
  {
	title : "Tornade (Ororo Munroe)",
	url : "equipes/x-men/tornade.html",
	type : ["Héros"],
	content : "Tornade Storm Ororo Munroe Vents Pluie Xmen X-Men mutante tchalla black panther"
  },
  {
	title : "Kitty Pryde",
	url : "equipes/x-men/kitty-pryde.html",
	type : ["Héros"],
	content : "Kitty Pryde Katherine Etincelles Shadowcat Star-Lord Lady Xmen X-Men mutante"
  },
  {
	title : "Malicia (Anna Marie)",
	url : "equipes/x-men/malicia.html",
	type : ["Héros"],
	content : "Malicia Rogue Anna Marie mutante xmen x-men confrérie confrerie mauvais"
  },
  {
	title : "Psylocke (Betsy Braddock)",
	url : "equipes/x-men/psylocke.html",
	type : ["Héros"],
	content : "Psylocke Betsy Elizabeth Braddock Bee Captain Britain Lady Mandarin mutante xmen x-men"
  },
  {
	title : "Gambit (Remy LeBeau)",
	url : "equipes/x-men/gambit.html",
	type : ["Héros"],
	content : "Gambit Remy LeBeau diable blanc nouvelle orléans louisiane mutant xmen x-men"
  },
  {
	title : "Jubilee (Jubilation Lee)",
	url : "equipes/x-men/jubilee.html",
	type : ["Héros"],
	content : "Jubilee Jubilation Lee Wondra mutante xmen x-men"
  },
  {
	title : "Bishop (Lucas Bishop)",
	url : "equipes/x-men/bishop.html",
	type : ["Héros"],
	content : "Bishop Lucas mutant xmen x-men futur"
  },
  {
	title : "Cable (Nathan Summers)",
	url : "equipes/x-men/cable.html",
	type : ["Héros", "Anti-Héros"],
	content : "Cable Nathan Summers Cyclope Madelyne Pryor Jean Grey Scott Futur Apocalypse Virus mutant xmen x-men xfactor x-factor xforce x-force"
  },
  {
	title : "Magik (Illyana Raspoutine)",
	url : "equipes/x-men/magik.html",
	type : ["Héros"],
	content : "Magik Magie Illyana Raspoutine Rasputin Nikolievna Alexandrina Piotr Colossus Darkchilde Russie xmen x-men mutante belasco"
  },
  {
	title : "La Reine Blanche (Emma Frost)",
	url : "equipes/x-men/emma-frost.html",
	type : ["Ennemi", "Héros"],
	content : "Emma Frost Reine Blanche Club Damnés White Queen X-men xmen mutante"
  },
  {
	title : "Havok (Alexander Summers)",
	url : "equipes/x-men/havok.html",
	type : ["Héros"],
	content : "Havok Alexander Summers Cyclope Vulcain X-men xmen mutant"
  },
  {
	title : "Star-Lord (Peter Quill)",
	url : "equipes/gardiens/star-lord.html",
	type : ["Héros"],
	content : "Star Lord Peter Quill Jason J'son Spartax Spartoi Gardiens de la Galaxie Meredith Badoons Yondu"
  },
  {
	title : "Gamora (Gamora Zen Whoberi)",
	url : "equipes/gardiens/gamora.html",
	type : ["Héros"],
	content : "Gamora Zen Whoberi Ben Titan Thanos Nebula Gardiens de la Galaxie Star-Lord star lord Peter Quill"
  },
  {
	title : "Rocket Raccoon",
	url : "equipes/gardiens/rocket-raccoon.html",
	type : ["Héros"],
	content : "Rocket Raccoon Groot Raton Laveur Rocky Ranger 89P13 Halfworld demi-monde Lylla Star Lord Gardiens Guardians Galaxie Galaxy"
  },
  {
	title : "Groot",
	url : "equipes/gardiens/groot.html",
	type : ["Héros"],
	content : "Groot Rocket Raccoon Planete X Colosse Floral Floraux Flora Colossus Je s'appelle Jardinier Arbre Star Lord Gardiens Guardians Galaxie Galaxy"
  },
  {
	title : "Drax le Destructeur (Arthur Douglas)",
	url : "equipes/gardiens/drax.html",
	type : ["Héros"],
	content : "Drax Destructeur Destroyer Arthur Sampson Douglas Heather Yvette Thanos Titan Mentor Gardiens de la Galaxie Star lord Peter quill"
  },
  {
	title : "Mantis",
	url : "equipes/gardiens/mantis.html",
	type : ["Héros"],
	content : "Mantis Brandt Madonne Celeste Cotati Gardiens de la Galaxie Star lord Peter quill"
  },
  {
	title : "Nébula",
	url : "equipes/gardiens/nebula.html",
	type : ["Ennemi"],
	content : "Nebula Thanos Gamora Gardiens de la Galaxie Luphon Luphomoide pirate espace cosmique cyborg cyber"
  },
  {
	title : "L'Homme-Chose (Theodore Sallis)",
	url : "heros/man-thing.html",
	type : ["Héros"],
	content : "Homme chose man thing theodore ted sallis so-2 sulfur ellen brandt everglades projet gladiator marais vegetaux vegetal plantes legion monstres monsters thunderbolts midnight sons"
  },
  {
	title : "Thanos",
	url : "ennemis/thanos.html",
	type : ["Ennemi"],
	content : "Thanos Gant de l'infini Titan Fou Eternel Déviant Eros alars suisan Mort pierre gemme ame gamora nebula entité infinité"
  },
  {
	title : "Kang le Conquérant",
	url : "ennemis/kang.html",
  type : ["Ennemi"],
	content : "Kang le conquérant Nathaniel Richards Rama Tut Centurion écarlate victor timely iron lad immortus celui qui demeure XXXI Terre-6311 Fatalis Futur Passé Quatre Fantastiques Avengers"
  },
  {
	title : "Docteur Fatalis (Victor Von Fatalis)",
	url : "ennemis/docteur-doom.html",
	type : ["Ennemi"],
	content : "Docteur Victor Von Fatalis Doom Sorcier Supreme Latvérie Mephisto Cynthia Reed Richards Ben Grimm Susan Storm Johnny Fantastiques Quatre Merlin Kang Cape Masque Fer"
  },
  {
	title : "Galactus",
	url : "ennemis/galactus.html",
	type : ["Ennemi"],
	content : "Galactus Galan Dévoreur Surfer d'argent quatre fantastiques big bang cosmique héraut Taa Eternite Zenn-la déchu norrin radd"
  },
  {
	title : "Apocalypse (En Sabah Nur)",
	url : "ennemis/apocalypse.html",
	type : ["Ennemi"],
	content : "apocalypse mutant en sabah nur x-men égypte ancienne rama-tut kang cable cavalier archangel"
  },
  {
	title : "Magnéto (Max Eisenhardt)",
	url : "ennemis/magneto.html",
	type : ["Ennemi"],
	content : "magneto magnéto max eisenhardt erik lehnsherr magnus magnétisme mutant x-men allemagne nazi auschwitz essex juif pietro wanda vif argent sorcière rouge astéroide confrerie confrérie des mauvais mutants charles xavier wolverine"
  },
  {
	title : "Méphisto",
	url : "ennemis/mephisto.html",
	type : ["Ennemi"],
	content : "méphisto mephisto belzebuth satan diable démon demon feu flamme ghost rider fatalis lillith démoniaque enfer hades"
  },
  {
	title : "Mystique (Raven Darkhölme)",
	url : "ennemis/mystique.html",
	type : ["Ennemi"],
	content : "Mystique Raven Rakhölme Mutante bleue metamorphe x-men logan wolerine azazel diablo kurt wagner"
  },
  {
	title : "Azazel",
	url : "ennemis/azazel.html",
	type : ["Ennemi"],
	content : "Azazel Mutant Neyaphem Diable Demon Satan Belzebuth semihazah duma Raven Darkhölme Mystique Diablo Kurt Wagner"
  },
  {
	title : "Loki",
	url : "ennemis/loki.html",
	type : ["Ennemi"],
	content : "loki thor odin asgard laufey dieu malice odinson laufeyson jotun jotunheim geant glace"
  },
  {
	title : "Ultron",
	url : "ennemis/ultron.html",
	type : ["Ennemi"],
	content : "ultron androide robot IA intelligence artificielle hank pym ant man iron man tony stark vision jim hammond wonder avengers jocaste alkhema adamantium vibranium"
  },
  {
	title : "Venom",
	url : "ennemis/venom.html",
	type : ["Ennemi", "Anti-Héros"],
	content : "Venom Spider Man Eddie Brock Mac Gargan Symbiote symbiotique klyntar knull agent Dark avengers Lee Price Sleeper Carnage Dylan"
  },
  {
	title : "Carnage",
	url : "ennemis/carnage.html",
	type : ["Ennemi"],
	content : "carnage venom symbiote spider man cletus kasady symbiotique rouge sang knull klyntar"
  },
  {
	title : "Le Bouffon Vert (Norman Osborn)",
	url : "ennemis/bouffon-vert.html",
	type : ["Ennemi"],
	content : "Bouffon Vert Green Goblin Norman Osborn Spider Man Harry Serum Gwen Stacy Citrouille Bombe Planeur"
  },
  {
	title : "Le Bouffon Rouge (Norman Osborn)",
	url : "ennemis/bouffon-rouge.html",
	type : ["Ennemi"],
	content : "Bouffon Rouge Norman Osborn Red Goblin Spider Man Harry Vert Carnage Symbiote Citrouille Bombe Planeur"
  },
  {
	title : "Le Super-Bouffon",
	url : "ennemis/hobgoblin.html",
	type : ["Ennemi"],
	content : "Super Bouffon Hobgoblin Roderick Kingsley Arnold Donovan Ned Leeds Robin Bourne Hans Steamon Vert Rouge Norman Osborn Spider Man Sinister Six"
  },
  {
	title : "Docteur Octopus (Otto Octavius)",
	url : "ennemis/docteur-octopus.html",
	type : ["Ennemi"],
	content : "Docteur Doctor Octopus Otto Octavius Tentacule Bras Sinister Six Spider Doc Ock Scientifique Laboratoire"
  },
  {
	title : "Le Vautour (Adrian Toomes)",
	url : "ennemis/vulture.html",
	type : ["Ennemi"],
	content : "Vautour Vulture Adrian Toomes Sinister Six Spider"
  },
  {
	title : "Electro (Maxwell Dillon)",
	url : "ennemis/electro.html",
	type : ["Ennemi"],
	content : "Electro Maxwell Dillon Electrique Electricité Sinister Six Spider"
  },
  {
	title : "Le Rhino (Aleksei Sytsevich)",
	url : "ennemis/rhino.html",
	type : ["Ennemi"],
	content : "Rhino Aleksei Systevitch Mikhailovitch Alex O'Hirn Russie Russe Spider"
  },
  {
	title : "Kraven le Chasseur (Sergeï Kravinoff)",
	url : "ennemis/kraven.html",
	type : ["Ennemi"],
	content : "Kraven Chasseur Sergeï Kravinoff Sinister Six Spider Avengers"
  },
  {
	title : "Le Caméléon (Dmitri Smerdyakov)",
	url : "ennemis/cameleon.html",
	type : ["Ennemi"],
	content : "Cameleon Chameleon Dmitri Smerdyakov Camouflage Sergei Kravinoff Kraven Chasseur Spider"
  },
  {
	title : "Mystério (Quentin Beck)",
	url : "ennemis/mysterio.html",
	type : ["Ennemi"],
	content : "Mystério mysterio quentin beck illusion bocal aquarium Sinister Six Spider"
  },
  {
	title : "Scorpion (Mac Gargan)",
	url : "ennemis/scorpion.html",
	type : ["Ennemi"],
	content : "Scorpion MacDonald Mac Gargan Venom Sinister Six Dark Avengers Spider-Man"
  },
  {
	title : "Shocker (Hermann Schultz)",
	url : "ennemis/shocker.html",
	type : ["Ennemi"],
	content : "Shocker Hermann Schultz choc sinister six seven spider"
  },
  {
	title : "Le Chacal (Miles Warren)",
	url : "ennemis/chacal.html",
	type : ["Ennemi"],
	content : "Chacal Clone Jackal Miles Warren Gwen Stacy Spider Scarlet Kaine Ben Reilly"
  },
  {
	title : "L'Homme-Sable (William Baker)",
	url : "ennemis/sandman.html",
	type : ["Ennemi", "Anti-Héros"],
	content : "Homme Sable sandman Flint Marko William Baker Sinister Six Spider Avengers"
  },
  {
	title : "Dracula (Vlad Tepes)",
	url : "ennemis/dracula.html",
	type : ["Ennemi"],
	content : "Dracula Vlad Tepes Vampire Transylvanie Roumanie Wallachie Lilith Blade Varnae"
  },
  {
	title : "Malekith",
	url : "ennemis/malekith.html",
	type : ["Ennemi"],
	content : "Malekith maudit accursed elfes elfe noir noirs svartalfheim svartalfar magie asgardien sorcier thor loki surtur hela odin midgard avalon algrim"
  },
  {
	title : "Le Maître de l'Évolution (Herbert Wyndham)",
	url : "ennemis/high-evolutionary.html",
	type : ["Anti-Héros", "Ennemi"],
	content : "Maitre Evolution High Evolutionary Herbert Edgar Wyndham Wundagore Jessica Drew Transie Génétique Nouveaux Hommes"
  },
  {
	title : "Bucky Barnes / Le Soldat de l'Hiver",
	url : "ennemis/winter-soldier.html",
	type : ["Héros", "Ennemi"],
	content : "Bucky James Buchanan Barnes Soldat Hiver Loup Blanc Captain America Steve Rogers Hydra Lehigh Seconde Guerre Mondiale Crane Rouge Envahisseur Legion Liberté Cybernétique Avengers"
  },
  {
	title : "Elektra Natchios",
	url : "ennemis/elektra.html",
	type : ["Anti-Héros", "Héros"],
	content : "Elektra Natchios Daredevil Matt Murdock la Main Hand Ninja Bullseye Caid Kingpin Avengers"
  },
  {
	title : "Killmonger (Erik Killmonger)",
	url : "ennemis/killmonger.html",
	type : ["Ennemi"],
	content : "Erik Killmonger N'Jadaka Klaw Ulysses Klaue T'Chaka Black Panther Wakanda Mercenaire M'Demwe"
  },
  {
	title : "Iron Monger (Obadiah Stane)",
	url : "ennemis/iron-monger.html",
	type : ["Ennemi"],
	content : "Obadiah Stane Iron Monger Tony Howard Stark Entreprises Industries Armure Centurion Silver MK7"
  },
  {
	title : "Klaw (Ulysses Klaue)",
	url : "ennemis/klaw.html",
	type : ["Ennemi"],
	content : "Ulysses Klaw Klaue Son Sound solide Wakanda Vibranium T'Chaka T'Challa"
  },
  {
	title : "L'Homme-Molécule (Owen Reece)",
	url : "ennemis/homme-molecule.html",
	type : ["Ennemi"],
	content : "Molécule Man Molecule Homme Owen Reece atomique atome beyonders secret wars bombe"
  },
  {
	title : "L'Homme-Absorbant (Crusher Creel)",
	url : "ennemis/homme-absorbant.html",
	type : ["Ennemi"],
	content : "Carl Crusher Creel Homme Absorbant Absorbing Man loki thor asgard ravageur rocky davis Lightningbolt"
  },
  {
	title : "Le Maestro (Bruce Banner)",
	url : "ennemis/maestro.html",
	type : ["Ennemi"],
	content : "Maestro Hulk Bruce Banner Futur imparfait Hercule Dystopia Terre-9200"
  },
  {
	title : "Le Baron Mordo (Karl Mordo)",
	url : "ennemis/baron-mordo.html",
	type : ["Ennemi"],
	content : "Baron Mordo Karl Amadeus Sorcier Docteur Strange Ancien Kamar Taj Dormammu"
  },
  {
	title : "Cauchemar",
	url : "ennemis/cauchemar.html",
	type : ["Ennemi"],
	content : "Cauchemar Nightmare Entite demoniaque démon docteur doctor strange gulgol"
  },
  {
	title : "Hulk Rouge (Thaddeus Ross)",
	url : "ennemis/red-hulk.html",
	type : ["Ennemi", "Anti-Héros"],
	content : "Thaddeus Thunderbolt Ross Betty General Militaire Bruce Banner Hulk Rouge Red Rulk Abomination Leader A-Bomb"
  },
  {
	title : "Thaddeus Thunderbolt Ross",
	url : "ennemis/thaddeus-ross.html",
	type : ["Ennemi"],
	content : "Thaddeus Thunderbolt Ross Betty General Militaire Bruce Banner Hulk Rouge Red Rulk Abomination Leader A-Bomb"
  },
  {
	title : "Gorr, le Boucher des Dieux",
	url : "ennemis/gorr.html",
	type : ["Ennemi"],
	content : "Gorr Boucher Dieux God Butcher Thor Knull Necrolame Necrosword Symbiote"
  },
  {
	title : "M.O.D.O.K. (George Tarleton)",
	url : "ennemis/modok.html",
	type : ["Ennemi"],
	content : "MODOK M.O.D.O.K. George Tarleton AIM A.I.M. tete MODOC M.O.D.O.C."
  },
  {
	title : "Crâne Rouge (Johann Schmidt)",
	url : "ennemis/crane-rouge.html",
	type : ["Ennemi"],
	content : "Crane Rouge Johann Schmidt Red Skull Captain America Hydra Hitler Nazi Bucky Barnes Envahisseurs Cube Cosmique"
  },
  {
	title : "Crossbones (Brock Rumlow)",
	url : "equipes/hydra/crossbones.html",
	type : ["Ennemi"],
	content : "Crossbones Brock Rumlow Hydra Red Skull Crane Rouge"
  },
  {
	title : "Baron Zemo (Helmut Zemo)",
	url : "equipes/hydra/baron-zemo.html",
	type : ["Ennemi"],
	content : "Baron Zemo Helmut Heinrich Maitres du mal Masters of evil Hydra Nazi"
  },
  {
	title : "Arnim Zola",
	url : "equipes/hydra/arnim-zola.html",
	type : ["Ennemi"],
	content : "Arnim Zola Scientifique Robot Hydra Nazi"
  },
  {
	title : "Vipère (Ophelia Sarkissian)",
	url : "ennemis/viper.html",
	type : ["Ennemi"],
	content : "Viper Vipère Madame Hydra Ophelia Sarkissian leona hiss smith supreme kraken seraph strucker hellfire club damnes main hand"
  },
  {
	title : "Le Mandarin",
	url : "ennemis/mandarin.html",
	type : ["Ennemi"],
	content : "Mandarin gene khan tem borjigin zhang tong tony stark industries iron trevor slattery xu wenwu chine chinois mongolie makluan axonn karr anneaux gengis wong chu ho yinsen"
  },
  {
	title : "Ronan l'Accusateur",
	url : "ennemis/ronan.html",
	type : ["Ennemi"],
	content : "Ronan Accusateur Accuser Kree Empereur Hala Skrull Mar-Vell Annihilus Marteau Guerre"
  },
  {
	title : "Annihilus",
	url : "ennemis/annihilus.html",
	type : ["Ennemi"],
	content : "Annihilus Zone Negative Seigneur Mort Arthros Arthrosien secteur 17-a Tyranna Tyrannien Capsule Vague Annihilation Nova"
  },
  {
	title : "Dormammu",
	url : "ennemis/dormammu.html",
	type : ["Ennemi"],
	content : "Dormammu Umar Dimension Noire Dark Docteur Doctor Strange Faltines Sinifer Olnar Mhuruuks Satannish"
  },
  {
	title : "Ego",
	url : "ennemis/ego.html",
	type : ["Ennemi"],
	content : "Ego Planete planète vivante living etranger stranger egros rigellien galaxie noire dark galaxy anticorps"
  },
  {
	title : "L'Homme Pourpre (Zebediah Killgrave)",
	url : "ennemis/homme-pourpre.html",
	type : ["Ennemi"],
	content : "Homme Pourpre Purple Man Zebediah Killgrave Violet Jessica Jones Jewel Kara Persuasion Daredevil Luke Cage"
  },
  {
	title : "Le Caïd (Wilson Fisk)",
	url : "ennemis/kingpin.html",
	type : ["Ennemi"],
	content : "Caid Kingpin Wilson Fisk Vanessa Richard Gros Big Willy Mafia Maggia Pegre Echo Spider Man Daredevil Comploteur Rose"
  },
  {
	title : "Hela",
	url : "ennemis/hela.html",
	type : ["Ennemi"],
	content : "Hela Asgardienne Mort deesse ragnarok loki odin thor Angerboda valhalla hel Niffleheim"
  },
  {
	title : "Le Créateur (Reed Richards)",
	url : "ennemis/maker.html",
	type : ["Ennemi"],
	content : "Créateur Maker Reed Richards Quatre Fantastiques Fantastique Fantastic Four Monsieur Mister Enfants Demain Sue Susan Storm Johnny Ben Grimm Torche Humaine Human Femme Invisible Woman Chose Thing 1610 Ultimate Fatalis Von Doom Cabale"
  },
  {
	title : "Le Fléau (Cain Marko)",
	url : "ennemis/juggernaut.html",
	type : ["Ennemi"],
	content : "Fleau Juggernaut Cain Marko Charles Xavier Professeur X Cyttorak Kurt"
  },
  {
	title : "Super-Skrull (Kl'rt)",
	url : "ennemis/super-skrull.html",
	type : ["Ennemi"],
	content : "Super-Skrull Kl'rt Klrt Zaragz'na Sarnogg Jazinda Dorrek Tarnax Quatre Fantastiques Fantastic Four Reed Richards Susan Sue Johnny Storm Ben Grimm Gravik"
  },
  {
	title : "Morlun",
	url : "ennemis/morlun.html",
	type : ["Ennemi"],
	content : "Morlun Terre-001 Loomworld Totems Vampire Spider-Man Heritiers Sangsue Spiderverse"
  },
  {
	title : "Bullseye (Lester)",
	url : "ennemis/bullseye.html",
	type : ["Ennemi"],
	content : "Bullseye Benjamin Poindexter Leonard Lester assassin Thunderbolts Dark Avengers Daredevil Caid Kingpin Elektra"
  },
  {
	title : "Dents-de-Sabre (Victor Creed)",
	url : "ennemis/sabretooth.html",
	type : ["Ennemi"],
	content : "Dents-de-Sabre Sabretooth Victor Creed Tigron Boucher Wolverine Mutant X-Men Iron Fist Canada Romulus"
  },
  {
	title : "Mister Negative (Martin Li)",
	url : "ennemis/mister-negative.html",
	type : ["Ennemi"],
	content : "Mister Negative Martin Li Chine Shanghai Gang Silvermane Maggia D-Lite Lightforce Darkforce"
  },
  {
	title : "Lady Deathstrike (Yuriko Oyama)",
	url : "ennemis/lady-deathstrike.html",
	type : ["Ennemi"],
	content : "Lady Deathstrike Yuriko Oyama Adamantium Kenji japonaise Vent Noir Dark Wind Kira Bullseye Wolverine Daredevil griffes ongles cyborg cybernetique "
  },
  {
	title : "Omega Red (Arkady Gregorivich)",
	url : "ennemis/omega-red.html",
	type : ["Ennemi"],
	content : "Omega Red Arkady Gregorivich Rossovitch Mutant Russie Union soviétique wolverine carbonadium adamantium tentacules cyborg"
  },
  {
	title : "Le Samouraï d'Argent (Keniuchi Harada)",
	url : "ennemis/silver-samurai.html",
	type : ["Ennemi"],
	content : "Samourai Samurai Argent Silver Keniuchio Harada Muramasa Shingen Yashida Daredevil Mariko Wolverine Vipere"
  },
  {
	title : "Mister Sinistre (Nathaniel Essex)",
	url : "ennemis/mister-sinister.html",
	type : ["Ennemi"],
	content : "Mister Sinistre Sinister Nathaniel Essex Mutant Génétique Apocalypse X-Men Cyclope Havok Londres Angleterre XIX"
  },
  {
	title : "Taskmaster",
	url : "ennemis/taskmaster.html",
	type : ["Ennemi"],
	content : "Taskmaster Anthony Tony Masters SHIELD super soldat reflexes photogeniques mercedes academy selbe"
  },
  {
	title : "L'Abomination (Emil Blonsky)",
	url : "ennemis/abomination.html",
	type : ["Ennemi"],
	content : "Abomination Emil Blonsky Gamma Hulk Bruce Banner Ross"
  },
  {
	title : "Le Leader (Samuel Sterns)",
	url : "ennemis/leader.html",
	type : ["Ennemi"],
	content : "Leader Samuel Sterns Gamma Hulk Bruce Banner Cerveau"
  },
  {
	title : "Le Lézard (Curt Connors)",
	url : "ennemis/lezard.html",
	type : ["Ennemi"],
	content : "Lezard Lizard Curtis Connors Spider Man Scientifique Sinister Six"
  },
  {
	title : "Evil Deadpool",
	url : "ennemis/evil-deadpool.html",
	type : ["Ennemi"],
	content : "Evil Deadpool malefique morceaux corps ella whitby chimichangas"
  },
  {
	title : "Les Sentinelles",
	url : "ennemis/sentinelles.html",
	type : ["Ennemi"],
	content : "Seninelle X-Men Mutant Trask Bolivar Robots Moule Initial Master Mold Xavier Nimrod"
  },
  {
	title : "Scarlet-Spider (Ben Reilly) (Terre-616)",
	url : "equipes/spiderverse/ben-reilly.html",
	type : ["Héros", "Anti-Héros"],
	content : "Ben Reilly Scarlet Spider Man Peter Parker Chacal Kaine Terre-616 Chasm Clone"
  },
  {
	title : "Scarlet-Spider (Kaine Parker) (Terre-616)",
	url : "equipes/spiderverse/kaine-parker.html",
	type : ["Héros", "Ennemi"],
	content : "Kaine Parker Scarlet Spider Man Ben Reilly Peter Chacal Clone Autre Other Terre-616"
  },
  {
	title : "Spider-Woman (Julia Carpenter) (Terre-616)",
	url : "equipes/spiderverse/julia-carpenter.html",
	type : ["Héros"],
	content : "Julia Carpenter Spider Woman Arachne Madame Web Terre-616 Spiderverse Peter Parker Miles Morales Jessica Drew Spider-Army"
  },
  {
	title : "Spider-Woman (Jessica Drew) (Terre-616)",
	url : "equipes/spiderverse/jessica-drew.html",
	type : ["Héros"],
	content : "Jessica Drew Spider Woman Terre-616 Spiderverse Peter Parker Miles Morales Julia Carpenter Spider-Army"
  },
  {
	title : "Spider-Gwen (Gwen Stacy) (Terre-65)",
	url : "equipes/spiderverse/spider-gwen.html",
	type : ["Héros"],
	content : "Gwen Stacy Spider Woman Ghost Spiderverse Verse Terre-65 Peter Parker Miles Morales Gwendolyne George Spider-Army"
  },
  {
	title : "Superior Spider-Man (Otto Octavius) (Terre-616)",
	url : "equipes/spiderverse/superior-spider-man.html",
	type : ["Ennemi", "Anti-Héros"],
	content : "Superior Spider-Man Superieur Otto Octavius Docteur Octopus Peter Parker Terre-616 Spiderverse Miles Morales"
  },
  {
	title : "Spider-Man 2099 (Miguel O'Hara) (Terre-928)",
	url : "equipes/spiderverse/spider-man-2099.html",
	type : ["Héros"],
	content : "Spider Man 2099 Miguel O'Hara Terre-928 Spiderverse Peter Parker Miles Morales Spider-Army"
  },
  {
	title : "Silk (Cindy Moon) (Terre-616)",
	url : "equipes/spiderverse/silk.html",
	type : ["Héros"],
	content : "Silk Cindy Moon Spider Woman Girl Spiderverse Terre-616 Peter Parker Miles Morales Ezekiel Sims"
  },
  {
	title : "Spider-Punk (Hobart Brown) (Terre-138)",
	url : "equipes/spiderverse/spider-punk.html",
	type : ["Héros"],
	content : "Spider Punk Man Hobart Hobie Brown Spiderverse Terre-138 Peter Parker Miles Morales"
  },
  {
	title : "Spider-Man Noir (Peter B. Parker) (Terre-90214)",
	url : "equipes/spiderverse/spider-man-noir.html",
	type : ["Héros"],
	content : "Spider Man Noir Peter Parker 1920 Spiderverse Terre-90214 Miles Morales"
  },
  {
	title : "Spider-Ham (Peter Porker) (Terre-8311)",
	url : "equipes/spiderverse/spider-ham.html",
	type : ["Héros"],
	content : "Spider Ham Porker Cochon May Parker Spiderverse Terre-8311 Peter Miles Morales"
  },
  {
	title : "Spider-Girl (Mayday Parker) (Terre-982)",
	url : "equipes/spiderverse/spider-girl.html",
	type : ["Héros"],
	content : "Spider Girl Mayday May Parker Spiderverse Terre-982 Peter Miles Morales"
  },
  {
	title : "Spider-UK (Billy Braddock) (Terre-833)",
	url : "equipes/spiderverse/spider-uk.html",
	type : ["Héros"],
	content : "Spider UK Man William Billy Braddock Royaume-Uni Spiderverse Terre-833 Peter Parker Miles Morales"
  },
  {
	title : "Doppelganger (Terre-616)",
	url : "equipes/spiderverse/doppelganger.html",
	type : ["Ennemi"],
	content : "Doppelganger Clone Spider-Man Magus Peter Parker Spiderverse Terre-616 Miles Morales Demogoblin Carnage Shriek"
  },
  {
	title : "SP//dr (Peni Parker) (Terre-14512)",
	url : "equipes/spiderverse/spdr.html",
	type : ["Héros"],
	content : "SP//dr SPdr Péni Parker Spider Man Woman Girl Spiderverse Terre-14512 Peter Miles Morales Robot Méca Mecha SF"
  },
  {
	title : "Cosmic Spider-Man (Peter Parker) (Terre-13)",
	url : "equipes/spiderverse/cosmic-spider-man.html",
	type : ["Héros"],
	content : "Cosmic Spider Man Spiderverse Terre-13 Peter Parker Miles Morales Enigma Captain Universe"
  },
  {
	title : "Spider-India (Pavitr Prabhakar) (Terre-50101)",
	url : "equipes/spiderverse/spider-india.html",
	type : ["Héros"],
	content : "Spider India Man Pavitr Prabhakar Inde Peter Parker Spiderverse Terre-50101 Miles Morales"
  },
  {
	title : "Spider-Man Last Stand (Peter Parker) (Terre-312500)",
	url : "equipes/spiderverse/spider-man-last-stand.html",
	type : ["Héros"],
	content : "Spider Man Last Stand Dernier Combat Peter Parker Terre-312500 Spiderverse Miles Morales"
  },
  {
	title : "Spider-Man Mangaverse (Peter Parker) (Terre-2301)",
	url : "equipes/spiderverse/spider-man-mangaverse.html",
	type : ["Héros"],
	content : "Spider Man Mangaverse Peter Parker Spiderverse Terre-2301 Clan Kuji Kuri Miles Morales"
  },
  {
	title : "Spider-Bitch (Ashley Barton) (Terre-807128)",
	url : "equipes/spiderverse/spider-bitch.html",
	type : ["Héros"],
	content : "Spider Bitch Girl Woman Man Ashley Barton Clint Logan Wolverine Terre-807128 Spiderverse Verse Peter Parker Miles Morales"
  },
  {
	title : "Spider-Man 1602 (Peter Parquagh) (Terre-311)",
	url : "equipes/spiderverse/spider-man-1602.html",
	type : ["Héros"],
	content : "Spider Man 1602 Peter Parquagh Parker Spiderverse Verse Terre-311 Miles Morales Angleterre"
  },
  {
	title : "Spider-Ma'am (Maybelle Parker) (Terre-3123)",
	url : "equipes/spiderverse/spider-maam.html",
	type : ["Héros"],
	content : "Spider Maam Ma'am May Maybelle Parker Tante Peter Miles Morales Spider Spiderverse verse Terre-3123 Spider-Army"
  },
  {
	title : "Les Avengers",
	url : "equipes/avengers.html",
	type : ["Équipe", "Héros"],
	content : "Avengers Vengeur Equipe Héros Iron Man Thor Hulk Hank Pym Ant Guepe Captain America Hawkeye Wanda Sorcière Rouge Vif Argent Pietro Wonder Swordsman Hercule Black Panther Vision Chevalier Noir Knight Mantis Dragon Lune Moondragon Fauve Jocaste Miss Marvel Faucon Falcon Tigra Starfox Mockingbird Chose Firebird US Agent Torche humaine living lightning éclair vivant spider woman namor docteur druid fantastique femme invisible gilgamesh quasar circé manta rage sable homme crystal thunderstrike deathcry magdalene luke cage jessica drew julia carpenter wolverine sentry ronin echo wiccan hulkling lad kate bishop stature patriot speed arès widow strange fist clint barton bucky barnes protecteur noh-varr jessica jones daredevil sharon carter valkyrie eric o'grady moon war machine havok malicia sunfire jane foster kamala khan nova miles morales shang chi hyperion ghost rider blade rouge scott lang darkhawk squirrel girl ecureillette britain tornade elektra deadpool psylocke"
  },
  {
	title : "Les X-Men",
	url : "equipes/x-men.html",
	type : ["Équipe", "Héros"],
	content : "X-Men XMen Equipe Mutant Homo superior Charles Xavier Professeur Angel Fauve Cyclope Scott Summers Jean Grey Iceberg Hurleur Colossus Diablo Sunfire Tornade Ororo Munroe Epervier Wolverine Logan James Howlett Kitty Pryde Malicia Psylocke Dazzler Longshot Forge Gambit Jubilee Bishop Cable Magik Emma Frost Havok Magneto "
  },
  {
	title : "Les Defenders",
	url : "equipes/defenders.html",
	type : ["Équipe", "Héros"],
	content : "Defenders Equipe Héros Docteur Strange Hulk Namor Surfer Argent Silver Clea Chevalier Noir Black Knight Valkyrie Hawkeye Luke Cage Power Man Daredevil Chose Hank Pym Ant Man Red Guardian Howard duck Miss Marvel Spider Moon Faucon Falcon Havok Panther Ghost Rider Fauve Thing Fantastique Wonder Captain America Sorciere rouge wanda vision angel iceberg cloud seraph candy andromeda manslaughter wolverine darkhawk namorita punisher sleepwalker nomad thunderstrike war machine vega nova deadpool shadow cadaver fist US Agent épée dagger deathlok drax"
  },
  {
	title : "Les Web Warriors",
	url : "equipes/spider-verse.html",
	type : ["Équipe", "Héros"],
	content : "Web Warriors Spider Verse Equipe Héros Totem Araignee toile vie destin héritiers morlun terre-1 peter parker miles morales gwen scarlet ben reilly kaine woman julia carpenter jessica drew superior 2099 silk punk noir ham girl uk doppelganger sp//dr peni cosmic india last stand mangaverse bitch 1602 ma'am Terre-616 Terre-65 Terre-928 Terre-138 Terre-90214 Terre-8311 Terre-982 Terre-833 Terre-14512 Terre-13 Terre-50101 Terre-312500 Terre-2301 Terre-807128 Terre-311 Terre-3123"
  },
  {
	title : "Les Sinister Six",
	url : "equipes/sinister-six.html",
	type : ["Équipe", "Ennemi"],
	content : "Sinister Six Equipe Vilain Ennemi Docteur Octopus Vautour Electro Kraven Chasseur Mysterio Homme Sable Seven Super-Bouffon Bouffon Shocker Scarabée Scorpia Twelve Vert Scorpion Caméléon Lézard Hydro Hammerhead Boomerang Tombstone Spider Man Tisseur"
  },
  {
	title : "Les Envahisseurs",
	url : "equipes/envahisseurs.html",
	type : ["Équipe", "Héros"],
	content : "Envahisseur Héros Equipe Invaders Captain America Bucky Barnes Torche Humain Jim Hammond Toro Namor Winston Churchill Nazi Hydra Crane Rouge Union Jack Spitfire Miss Whizzer Blazing Skull Silver Scorpion US Agent William Naslund Rorqual"
  },
  {
	title : "Les Illuminati",
	url : "equipes/illuminati.html",
	type : ["Équipe"],
	content : "Illuminati Héros Equipe Iron Man Docteur Strange Fleche Noire Black Bolt Charles Xavier Professeur X Reed Richards Fantastique Namor Black Panther Hulk"
  },
  {
	title : "Les Quatre Fantastiques",
	url : "equipes/fantastic-four.html",
	type : ["Équipe", "Héros"],
	content : "Quatre Fantastiques Fantastic Four FF Reed Richards Susan Sue Storm Johnny Ben Grimm Mister Mr Fantastique Femme invisible Torche humaine Chose Thing Baxter Building Marvel-1 Fatalis Doom Galactus Kang Crystal Ghost Rider Scott Lang Hulk Miss Luke Cage Medusa Black Panther Tornade Spider Man Wolverine"
  },
  {
	title : "Les Gardiens de la Galaxie",
	url : "equipes/gardiens-galaxie.html",
	type : ["Équipe"],
	content : "Les Gardiens de la Galaxie Guardians of the Galaxy Star-Lord star lord Peter Quill rocket raccoon phyla-vell quasar adam warlock mantis gamora drax le destructeur groot bug jack flag dragon-lune gladiator nova richard rider angela iron man tony stark agent venom kitty pryde la chose the thing vance astro martinex t'naga yondu udonta charlie-27 starhawk nikki aleta ogord vision firelord replica talon yellowjacket wonder phoenix giraud wileaydus mainframe"
  },
  {
	title : "Les Inhumains",
	url : "equipes/inhumains.html",
	type : ["Équipe", "Héros"],
	content : "Unhumains Inhumans Black Bolt Flèche Noire Terrigene Attilan Médusa Blackagar Boltagon Maximus Crystal Gorgone Triton Karnak Gueule d'or lockjaw ahura luna aero quake reader iso inferno kamala khan miss marvel thane thanos"
  },
  {
	title : "Les Héritiers",
	url : "equipes/heritiers.html",
	type : ["Ennemi", "Équipe"],
	content : "Heritiers Inheritor Morlun Terre-001 Loomworld Bora Brix Daemos Jennix Karn Solus Verna Mother Sangsue Multivers Totem Spiderman Peter Parker Miles Morales"
  },
  {
	title : "Hydra",
	url : "equipes/hydra.html",
	type : ["Ennemi", "Équipe"],
	content : "Hydra Armée Nazie Hitler Crane Rouge Baron Strucker Zemo Arnim Zola Vipere Faustus Crossbones Sin Captain Kraken Gorgone Bob"
  },
  {
	title : "La Main",
	url : "equipes/main.html",
	type : ["Ennemi", "Équipe"],
	content : "Main Hand Ninja japon the beast la bete madripoor hydra elektra daredevil samourai d'argent silver samurai lady bullseye echo dragonfly fauve ronin mandarin psylocke omega red shoc black tarentula tombstone white tiger vega vipere wolverine logan"
  },
  {
	title : "Les Dark Avengers",
	url : "equipes/dark-avengers.html",
	type : ["Équipe", "Ennemi"],
	content : "Dark Avengers Norman Osborn Hammer Thunderbolts Bullseye Opale Venom Mac Gargan Daken Noh-Varr Ares Sentry Iron Patriot Hawkeye Miss Marvel Spider-Man Wolverine Captain Mar-Vell Ai Apaec Trickshot Toxic Doxie Superia Gorgon Skaar Sorciere rouge scarlet witch hulk ragnarok"
  },
  {
	title : "La Confrérie des Mauvais Mutants",
	url : "equipes/brotherhood-evil-mutants.html",
	type : ["Ennemi", "Équipe"],
	content : "Confrérie confrerie Mauvais Mutants Brotherhood Evil Magneto Mystique Vif-Argent Quicksilver Wanda Scarlet witch Sorcière rouge Abyss Alpha Avalanche Burner Cerveau Colosse Crapaud Destinée Exodus Fever Pitch Forge Lifter Lorelei Malicia Martinique Wyngarde Masque Morlocks Peeper Phantasia Post Pyro Sabretooth Dents Sabre Sauron Shocker Slither Unus"
  },
  {
	title : "Le Club des Damnés",
	url : "equipes/hellfire-club.html",
	type : ["Équipe"],
	content : "Club Damnés Hellfire Equipe Mutant Sebastian Shaw Emma Frost Roberto dacosta Solar Blackheart Daimon Hellstrom Magneto Tornade Mystique Wilson Fisk Caid Kingpin Phénix Noir Dark Phoenix Vipere Jean Grey Brian Braddock Captain Britain Madelyne Pryor Cerveau Brain Psylocke Betsy Warren Worthington Angel Norman Osborn Bouffon Vert Green Goblin Harry Tony Stark Iron Man"
  },
  {
	title : "La Pierre de l'Esprit",
	url : "infinity-stones/mind-stone.html",
	type : ["Pierre d'Infinité"],
	content : "Esprit Mind Pierre Stone Gemme Infinité Infinite"
  },
  {
	title : "La Pierre du Pouvoir",
	url : "infinity-stones/power-stone.html",
	type : ["Pierre d'Infinité"],
	content : "Pouvoir Power Pierre Stone Gemme Infinité Infinite"
  },
  {
	title : "La Pierre de Réalité",
	url : "infinity-stones/reality-stone.html",
	type : ["Pierre d'Infinité"],
	content : "Realite Reality Pierre Stone Gemme Infinité Infinite"
  },
  {
	title : "La Pierre de l'Âme",
	url : "infinity-stones/soul-stone.html",
	type : ["Pierre d'Infinité"],
	content : "Ame Soul Pierre Stone Gemme Infinité Infinite"
  },
  {
	title : "La Pierre de l'Espace",
	url : "infinity-stones/space-stone.html",
	type : ["Pierre d'Infinité"],
	content : "Espace Space Pierre Stone Gemme Infinité Infinite"
  },
  {
	title : "La Pierre du Temps",
	url : "infinity-stones/time-stone.html",
	type : ["Pierre d'Infinité"],
	content : "Temps Time Pierre Stone Gemme Infinité Infinite"
  },
  {
	title : "La Pierre de l'Ego",
	url : "infinity-stones/ego-stone.html",
	type : ["Pierre d'Infinité"],
	content : "Ego Pierre Stone Gemme Infinité Infinite Nemesis Ultravers Terre Earth 93060"
  },
];

window.SEARCH_INDEX = SEARCH_INDEX;