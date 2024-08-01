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
    {label: "High", value: '3', STR: null, DEX: 2, CON: null, INT: 1, WIS: null, CHA: null, abilityScoreIncrease: false, 
        subraceFeatures: ["Elf Weapon Training", "Cantrip", "Extra Language"]},
    {label: "Wood", value: '4', STR: null, DEX: 2, CON: null, INT: null, WIS: 1, CHA: null, abilityScoreIncrease: false, 
        subraceFeatures: ["Elf Weapon Training", "Fleet of Foot", "Mask of the Wild"]},
    {label: "Eladrin", value: '5', STR: null, DEX: 2, CON: null, INT: 1, WIS: null, CHA: null, abilityScoreIncrease: false, 
        subraceFeatures: ["Fey Step"]},
    {label: "Sea", value: '6', STR: null, DEX: 2, CON: 1, INT: null, WIS: null, CHA: null, abilityScoreIncrease: false, 
        subraceFeatures: ["Sea Elf Training", "Child of the Sea", "Friend of the Sea"]},
    {label: "Shadar-kai", value: '7', STR: null, DEX: 2, CON: null, INT: null, WIS: null, CHA: 1, abilityScoreIncrease: false, 
        subraceFeatures: ["Necrotic Resistance", "Blessing of the Raven Queen"]}
];

const DRAGONBORN_SUBRACE = 
[
    {label: "Black", value: '1'},
    {label: "Blue", value: '2'},
    {label: "Brass", value: '3'},
    {label: "Bronze", value: '4'},
    {label: "Copper", value: '5'},
    {label: "Gold", value: '6'},
    {label: "Green", value: '7'},
    {label: "Red", value: '8'},
    {label: "Silver", value: '9'},
    {label: "White", value: '10'}
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