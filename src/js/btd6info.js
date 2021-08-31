const btd6_version = "27.1.4229"
const randomizer_version = "2.1.0"


const btd6_modes_array = [
    "Standard Easy",
    "Primary Monkeys Only (Easy)",
    "Deflation (Easy)",
    "Standard Medium",
    "Military Monkeys Only (Medium)",
    "Apopalypse (Medium)",
    "Reverse (Medium)",
    "Standard Hard",
    "Magic Monkeys Only (Hard)",
    "Double HP MOABs (Hard)",
    "Half Cash (Hard)",
    "Alternate Bloon Rounds (Hard)",
    "Impoppable (Hard)",
    "CHIMPS (Hard)",
];

//Indices of modes to blacklist when randomizing towers in btd6_modes
const btd6_only_modes = [
    1,4,8
]



/*
 * Object structure to contain the images.
 * Can be used in the future to implement the images onto the website.
 */
const btd6_maps = {
    Beginner: {
    "Monkey Meadow": "../static/btd6 maps png/MonkeyMeadow_no_UI.png",
    "Tree Stump": "../static/btd6 maps png/TreeStump_No_UI.png",
    "Town Center": "../static/btd6 maps png/TownCenter_No_UI.png",
    "Resort": "../static/btd6 maps png/Resort.png",
    "Skates": "../static/btd6 maps png/Skates.png",
    "Lotus Island": "../static/btd6 maps png/Lotus Island.png",
    "Candy Falls": "../static/btd6 maps png/CandyFalls_No_UI.png",
    "Winter Park": "../static/btd6 maps png/WinterPark_No_UI.png",
    "Carved": "../static/btd6 maps png/Carved_No_UI.png",
    "Park Path": "../static/btd6 maps png/ParkPath_No_UI.png",
    "Alpine Run": "../static/btd6 maps png/AlpineRun_No_UI.png",
    "Frozen Over": "../static/btd6 maps png/FrozenOver_No_UI.png",
    "In the Loop": "../static/btd6 maps png/InTheLoop_No_UI.png",
    "Cubism": "../static/btd6 maps png/Cubism_No_UI.png",
    "Four Circles": "../static/btd6 maps png/FourCircles_No_UI.png",
    "Hedge": "../static/btd6 maps png/Hedge_No_UI.png",
    "End of the Road": "../static/btd6 maps png/EndOfTheRoad_No_UI.png",
    "Logs": "../static/btd6 maps png/Logs_No_UI.png",
    },
    Intermediate: {
        "Bloonarius Prime": "../static/btd6 maps png/Bloonarius_Prime_Map.png",
        "Balance": "../static/btd6 maps png/Balance.png",
        "Encrypted": "../static/btd6 maps png/Encrypted.png",
        "Bazaar": "../static/btd6 maps png/Bazaar.png",
        "Adora's Temple": "../static/btd6 maps png/AdorasTemple_No_UI.png",
        "Spring Spring": "../static/btd6 maps png/SpringSpring_No_UI.png",
        "Kartsndarts": "../static/btd6 maps png/KartsNDarts_No_UI.png",
        "Moon Landing": "../static/btd6 maps png/MoonLanding_No_UI.png",
        "Haunted": "../static/btd6 maps png/Haunted_No_UI.png",
        "Downstream": "../static/btd6 maps png/Downstream_No_UI.png",
        "Firing Range": "../static/btd6 maps png/FiringRange_No_UI.png",
        "Cracked": "../static/btd6 maps png/Cracked_No_UI.png",
        "Streambed": "../static/btd6 maps png/Streambed_No_UI.png",
        "Chutes": "../static/btd6 maps png/Chutes_No_UI.png",
        "Rake": "../static/btd6 maps png/Rake_No_UI.png",
        "Spice Islands": "../static/btd6 maps png/SpiceIslands_No_UI.png"
    },
    Advanced: {
        "X Factor": "../static/btd6 maps png/X Factor.png",
        "Mesa": "../static/btd6 maps png/Mesa_No_UI.png",
        "Geared": "../static/btd6 maps png/Geared_No_UI.png",
        "Spillway": "../static/btd6 maps png/Spillway_No_UI.png",
        "Cargo": "../static/btd6 maps png/Cargo_No_UI.png",
        "Pat's Pond": "../static/btd6 maps png/PatsPond_No_UI.png",
        "Peninsula": "../static/btd6 maps png/Peninsula_No_UI.png",
        "High Finance": "../static/btd6 maps png/HighFinance_No_UI.png",
        "Another Brick": "../static/btd6 maps png/AnotherBrick_No_UI.png",
        "Off the Coast": "../static/btd6 maps png/OffTheCoast_No_UI.png",
        "Cornfield": "../static/btd6 maps png/Cornfield_No_UI.png",
        "Underground": "../static/btd6 maps png/Underground_No_UI.png"
    },
    Expert: {
        "Ravine": "../static/btd6 maps png/Ravine.png",
        "Flooded Valley": "../static/btd6 maps png/Flooded_Valley_No_UI.png",
        "Infernal": "../static/btd6 maps png/Infernal_No_UI.png",
        "Bloody Puddles": "../static/btd6 maps png/BloodyPuddles_No_UI.png",
        "Workshop": "../static/btd6 maps png/Workshop_No_UI.png",
        "Quad": "../static/btd6 maps png/Quad_No_UI.png",
        "Dark Castle": "../static/btd6 maps png/DarkCastle_No_UI.png",
        "Muddy Puddles": "../static/btd6 maps png/MuddyPuddles_No_UI.png",
        "#Ouch": "../static/btd6 maps png/Ouch_No_UI.png"
    }
};

const btd6_heroes = {
    "Quincy": "../static/btd6 heroes png/QuincyPortrait.png",
    "Gwendolin": "../static/btd6 heroes png/GwendolinPortrait.png",
    "Striker Jones": "../static/btd6 heroes png/Striker_Jones.png",
    "Obyn Greenfoot": "../static/btd6 heroes png/ObynGreenFootPortraitLvl10.png",
    "Captain Churchill": "../static/btd6 heroes png/CaptainChurchillPortrait.png",
    "Benjamin": "../static/btd6 heroes png/BenjaminPortrait.png",
    "Ezili": "../static/btd6 heroes png/Elizi.png",
    "Pat Fusty": "../static/btd6 heroes png/PatFutsyPortraitLvl5.png",
    "Adora": "../static/btd6 heroes png/Adora.png",
    "Admiral Brickell": "../static/btd6 heroes png/AdmiralBrickellPortrait.png",
    "Etienne": "../static/btd6 heroes png/EtiennePortrait.png",
    "Sauda": "../static/btd6 heroes png/Sauda.png",
    "Psi": "../static/btd6 heroes png/PsiPortrait.png",
};

const btd6_towers = {
    primary: {
        "Dart Monkey": "../static/btd6 towers png/100-DartMonkey.png",
        "Boomerang Monkey": "../static/btd6 towers png/BTD6_Boomerang_Monkey.png",
        "Bomb Shooter": "../static/btd6 towers png/Bomb_Shooter.png",
        "Tack Shooter": "../static/btd6 towers png/BTD6_Tack_Shooter.png",
        "Ice Monkey": "../static/btd6 towers png/Ice_Monkey.png",
        "Glue Gunner": "../static/btd6 towers png/BTD6_Glue_Gunner.png"
    },
    military: {
        "Sniper Monkey": "../static/btd6 towers png/BTD6_Sniper_Monkey.png",
        "Monkey Sub": "../static/btd6 towers png/BTD6_Monkey_Sub.png",
        "Monkey Buccaneer": "../static/btd6 towers png/BTD6_Monkey_Buccaneer.png",
        "Monkey Ace": "../static/btd6 towers png/BT6_Monkey_Ace.png",
        "Heli Pilot": "../static/btd6 towers png/BTD6_Heli_Pilot.png",
        "Mortar Monkey": "../static/btd6 towers png/000-MortarMonkey.png",
        "Dartling Gunner": "../static/btd6 towers png/000-DartlingGunner.png"
    },
    magic: {
        "Wizard Monkey": "../static/btd6 towers png/Monkey_Wizard.png",
        "Super Monkey": "../static/btd6 towers png/BTD6_Super_Monkey.png",
        "Ninja Monkey": "../static/btd6 towers png/BTD6_Ninja_monkey.png",
        "Alchemist": "../static/btd6 towers png/001-Alchemist.png",
        "Druid": "../static/btd6 towers png/Druid_Monkey.png"
    },
    support: {
        "Banana Farm": "../static/btd6 towers png/BTD6_Banana_Farm.png",
        "Spike Factory": "../static/btd6 towers png/BTD6_Spike_Factory.png",
        "Monkey Village": "../static/btd6 towers png/BTD6_Monkey_Village.png",
        "Engineer Monkey": "../static/btd6 towers png/000-EngineerMonkey.png"
    }
};

export {
    btd6_version,
    randomizer_version,
    btd6_modes_array,
    btd6_only_modes,
    btd6_maps,
    btd6_heroes,
    btd6_towers,
};
