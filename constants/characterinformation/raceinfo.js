const RACES_ALL = 
[
    {label: "Aarakocra", value: '1'},
    {label: "Aasimar", value: '2'},
    {label: "Bugbear", value: '3'},
    {label: "Centaur", value: '4'},
    {label: "Changeling", value: '5'},
    {label: "Dragonborn", value: '6'},
    {label: "Dwarf", value: '7'},
    {label: "Elf", value: '8'},
    {label: "Firbolg", value: '9'},
    {label: "Genasi", value: '10'},
    {label: "Gith", value: '11'},
    {label: "Gnome", value: '12'},
    {label: "Goblin", value: '13'},
    {label: "Goliath", value: '14'},
    {label: "Half-Elf", value: '15'},
    {label: "Half-Orc", value: '16'},
    {label: "Halfling", value: '17'},
    {label: "Hobgoblin", value: '18'},
    {label: "Human", value: '19'},
    {label: "Kalashtar", value: '20'},
    {label: "Kenku", value: '21'},
    {label: "Kobold", value: '22'},
    {label: "Lizardfolk", value: '23'},
    {label: "Loxodon", value: '24'},
    {label: "Minotaur", value: '25'},
    {label: "Orc", value: '26'},
    {label: "Satyr", value: '27'},
    {label: "Shifter", value: '28'},
    {label: "Tabaxi", value: '29'},
    {label: "Tiefling", value: '30'},
    {label: "Tortle", value: '31'},
    {label: "Triton", value: '32'},
    {label: "Warforged", value: '33'},
    {label: "Yuan-ti Pureblood", value: '34'}
];
const RACES= 
[
    {label: "Aarakocra", value: '1'},
    {label: "Aasimar", value: '2'},
    {label: "Bugbear", value: '3'},
    {label: "Centaur", value: '4'},
    {label: "Changeling", value: '5'},
    {label: "Dragonborn", value: '6'},
    {label: "Dwarf", value: '7'},
    {label: "Elf", value: '8', STR: null, DEX: 2, CON: null, INT: null, WIS: null, CHA: null, 
        raceFeatures:["Darkvision", "Fey Ancestry", "Trance", "Keen Senses"],
        languages:["Common", "Elvish"],
        size: "medium", walkingSpeed: 30, flyingSpeed: null, climbingSpeed: null, swimmingSpeed: null},
    /*
    {label: "Elf", value: '8', abilityScore:[0,2,0,0,0,0], raceFeatures:["Darkvision", "Fey Ancestry", "Trance", "Keen Senses"],
        languages:["Common", "Elvish"],
        size: "medium", walkingSpeed: 30, flyingSpeed: null, climbingSpeed: null, swimmingSpeed: null},
    */
   {label: "Firbolg", value: '9'},
    {label: "Genasi", value: '10'},
    {label: "Gith", value: '11'},
    {label: "Gnome", value: '12'},
    {label: "Goblin", value: '13'},
    {label: "Goliath", value: '14'},
    {label: "Half-Elf", value: '15'},
    {label: "Half-Orc", value: '16'},
    {label: "Halfling", value: '17'},
    {label: "Hobgoblin", value: '18'},
    {label: "Human", value: '19'},
    {label: "Kalashtar", value: '20'},
    {label: "Kenku", value: '21'},
    {label: "Kobold", value: '22'},
    {label: "Lizardfolk", value: '23'},
    {label: "Loxodon", value: '24'},
    {label: "Minotaur", value: '25'},
    {label: "Orc", value: '26'},
    {label: "Satyr", value: '27'},
    {label: "Shifter", value: '28'},
    {label: "Tabaxi", value: '29'},
    {label: "Tiefling", value: '30'},
    {label: "Tortle", value: '31'},
    {label: "Triton", value: '32'},
    {label: "Warforged", value: '33'},
    {label: "Yuan-ti Pureblood", value: '34'}
];
const ELF_SUBRACE = 
[
    {label: "Astral", value: '1', STR: null, DEX: null, CON: null, INT: null, WIS: null, CHA: null, abilityScoreIncrease: true, 
        // if ability Score increase is true means that race can choose to put 2 in one stat and 1 in another, or 1 in three different stats 
        subraceFeatures: ["Astral Fire", "Keen Senses", "Astral Trance", "Starlight Step"]},
    {label: "Drow", value: '2', STR: null, DEX: null, CON: null, INT: null, WIS: null, CHA: 1, abilityScoreIncrease: false, 
        subraceFeatures: ["Superior Darkvision", "Sunlight Sensitivity", "Drow Magic", "Drow Weapon Training"] },
    {label: "High", value: '3', STR: null, DEX: null, CON: null, INT: 1, WIS: null, CHA: null, abilityScoreIncrease: false, 
        subraceFeatures: ["Elf Weapon Training", "Cantrip", "Extra Language"]},
    {label: "Wood", value: '4', STR: null, DEX: null, CON: null, INT: null, WIS: 1, CHA: null, abilityScoreIncrease: false, 
        subraceFeatures: ["Elf Weapon Training", "Fleet of Foot", "Mask of the Wild"]},
    {label: "Eladrin", value: '5', STR: null, DEX: 2, CON: null, INT: 1, WIS: null, CHA: null, abilityScoreIncrease: false, 
        subraceFeatures: ["Fey Step"]},
    {label: "Sea", value: '6', STR: null, DEX: 2, CON: 1, INT: null, WIS: null, CHA: null, abilityScoreIncrease: false, 
        subraceFeatures: ["Sea Elf Training", "Child of the Sea", "Friend of the Sea"]},
    {label: "Shadar-kai", value: '7', STR: null, DEX: 2, CON: null, INT: null, WIS: null, CHA: 1, abilityScoreIncrease: false, 
        subraceFeatures: ["Necrotic Resistance", "Blessing of the Raven Queen"]}
];
const ELF_SUBRACE_ALT = 
[
    {label: "Astral", value: '1', STR: null, DEX: null, CON: null, INT: null, WIS: null, CHA: null, abilityScoreIncrease: true, 
        subraceFeatures: [
            {label: "Astral Fire", description:"You can deal radiant damage once per long rest."},
            {label: "Keen Senses",  description: "Advantage on Wisdom (Perception) checks that rely on sight."},
            {label: "Astral Trance", description: "You can enter a trance-like state to gain benefits."},
            {label: "Starlight Step", description: "You can teleport short distances once per rest."}
        ]},
    {label: "Drow", value: '2', STR: null, DEX: null, CON: null, INT: null, WIS: null, CHA: 1, abilityScoreIncrease: false, 
        subraceFeatures: [
            "Superior Darkvision: Can see in darkness within 120 feet.",
            "Sunlight Sensitivity: Disadvantage on attack rolls and Wisdom (Perception) checks in bright light.",
            "Drow Magic: Innate spellcasting including Dancing Lights, Faerie Fire, and Darkness.",
            "Drow Weapon Training: Proficiency with rapiers, shortswords, and hand crossbows."
        ]},
    {label: "High", value: '3', STR: null, DEX: null, CON: null, INT: 1, WIS: null, CHA: null, abilityScoreIncrease: false, 
        subraceFeatures: [
            "Elf Weapon Training: Proficiency with longswords, shortswords, shortbows, and longbows.",
            "Cantrip: Know one cantrip from the Wizard spell list.",
            "Extra Language: You can speak, read, and write one additional language of your choice."
        ]},
    {label: "Wood", value: '4', STR: null, DEX: null, CON: null, INT: null, WIS: 1, CHA: null, abilityScoreIncrease: false, 
        subraceFeatures: [
            "Elf Weapon Training: Proficiency with longswords, shortswords, shortbows, and longbows.",
            "Fleet of Foot: Your base walking speed is 35 feet.",
            "Mask of the Wild: Can attempt to hide even when only lightly obscured by natural phenomena."
        ]},
    {label: "Eladrin", value: '5', STR: null, DEX: 2, CON: null, INT: 1, WIS: null, CHA: null, abilityScoreIncrease: false, 
        subraceFeatures: [
            "Fey Step: Ability to teleport up to 30 feet as a bonus action once per short or long rest."
        ]},
    {label: "Sea", value: '6', STR: null, DEX: 2, CON: 1, INT: null, WIS: null, CHA: null, abilityScoreIncrease: false, 
        subraceFeatures: [
            "Sea Elf Training: Proficiency with the spear, trident, light crossbow, and net.",
            "Child of the Sea: You can breathe underwater and have a swimming speed of 30 feet.",
            "Friend of the Sea: Can communicate with sea creatures."
        ]},
    {label: "Shadar-kai", value: '7', STR: null, DEX: 2, CON: null, INT: null, WIS: null, CHA: 1, abilityScoreIncrease: false, 
        subraceFeatures: [
            "Necrotic Resistance: Resistance to necrotic damage.",
            "Blessing of the Raven Queen: Can use the shadow teleportation ability as a bonus action once per short or long rest."
        ]}
];

const DRAGONBORN_SUBRACE = 
[
    {label: "Black", value: '1', STR: 2, DEX: null, CON: null, INT: null, WIS: null, CHA: 1},
    {label: "Blue", value: '2', STR: 2, DEX: null, CON: null, INT: null, WIS: null, CHA: 1},
    {label: "Brass", value: '3', STR: 2, DEX: null, CON: null, INT: null, WIS: null, CHA: 1},
    {label: "Bronze", value: '4', STR: 2, DEX: null, CON: null, INT: null, WIS: null, CHA: 1},
    {label: "Copper", value: '5', STR: 2, DEX: null, CON: null, INT: null, WIS: null, CHA: 1},
    {label: "Gold", value: '6', STR: 2, DEX: null, CON: null, INT: null, WIS: null, CHA: 1},
    {label: "Green", value: '7', STR: 2, DEX: null, CON: null, INT: null, WIS: null, CHA: 1},
    {label: "Red", value: '8', STR: 2, DEX: null, CON: null, INT: null, WIS: null, CHA: 1},
    {label: "Silver", value: '9', STR: 2, DEX: null, CON: null, INT: null, WIS: null, CHA: 1},
    {label: "White", value: '10', STR: 2, DEX: null, CON: null, INT: null, WIS: null, CHA: 1}
];

const AASIMAR_SUBRACE =
[
    {label: "Fallen", value: '1'},
    {label: "Protector", value: '2'},
    {label: "Scourage", value: '3'},
];
const GENASI_SUBRACE = 
[
    {label: "Air", value: '1'},
    {label: "Earth", value: '2'},
    {label: "Fire", value: '3'},
    {label: "Water", value: '4'}
];
export {GENASI_SUBRACE, DRAGONBORN_SUBRACE, ELF_SUBRACE, AASIMAR_SUBRACE,RACES};