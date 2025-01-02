const CLASSES = 
[
    // {label: "Artificer", value: '1', hitDice: "d8"},
    {label: "Barbarian", value: '2', hitDice: "d12"},
    {label: "Bard", value: '3', hitDice: "d8"},
    // {label: "Blood Hunter", value: '4', hitDice: "d10"},
    {label: "Cleric", value: '5', hitDice: "d8"},
    {label: "Druid", value: '6', hitDice: "d8"},
    {label: "Fighter", value: '7', hitDice: "d10"},
    {label: "Monk", value: '8', hitDice: "d8"},
    {label: "Paladin", value: '9', hitDice: "d10"},
    {label: "Ranger", value: '10', hitDice: "d10"},
    {label: "Rogue", value: '11', hitDice: "d8"},
    {label: "Sorcerer", value: '12', hitDice: "d6"},
    {label: "Warlock", value: '13', hitDice: "d8"},
    {label: "Wizard", value: '14', hitDice: "d6"}
];
export const TRUEORFALSE = [
    {label: "True"},
    {label: "False"}
]
export const SPELL_LEVEL =
[
    {label: "Cantrip"},
    {label: "1st"},
    {label: "2nd"},
    {label: "3rd"},
    {label: "4th"},
    {label: "5th"},
    {label: "6th"},
    {label: "7th"},
    {label: "8th"},
    {label: "9th"},

]
export const RANGE_TYPES = [
    {label: "None"},

    {label: "Cone"},
    {label: "Cube"},
    {label: "Cylinder"},
    {label: "Line"},
    {label: "Sphere"},
];

export const CASTING_TIMES = 
[
    { label: "1 Action" },
    { label: "1 Bonus Action" },
    { label: "1 Reaction" },
    { label: "1 Minute" },
    { label: "10 Minutes" },
    { label: "1 Hour" },
    { label: "8 Hours" },
    { label: "12 Hours" },
    { label: "24 Hours" },
];
export const RANGES = [
    { label: "Self" },
    { label: "Touch" },
    { label: "10 feet" },
    { label: "15 feet" },
    { label: "30 feet" },
    { label: "60 feet" },
    { label: "90 feet" },
    { label: "120 feet" },
    { label: "150 feet" },
    { label: "300 feet" },
    { label: "500 feet" },
    { label: "1 mile" },
    { label: "Unlimited" },
    { label: "Special" },
];
export const SPECIFIC_RANGE_TYPES = [
    {label: "None"},
    {label: "5-foot-radius"},
    {label: "10-foot-radius"},
    {label: "15-foot-radius"},
    {label: "20-foot-radius"},
    {label: "30-foot-radius"},
    {label: "40-foot-radius"},
    {label: "50-foot-radius"},
    {label: "60-foot-radius"},
    {label: "5-foot-cube"},
    {label: "10-foot-cube"},
    {label: "15-foot-cube"},
    {label: "20-foot-cube"},
    {label: "30-foot-cube"},
    {label: "40-foot-cube"},
    {label: "50-foot-cube"},
    {label: "60-foot-cube"},
    {label: "10-foot-cone"},
    {label: "15-foot-cone"},
    {label: "30-foot-cone"},
    {label: "60-foot-cone"},
    {label: "5-foot-line"},
    {label: "10-foot-line"},
    {label: "15-foot-line"},
    {label: "20-foot-line"},
    {label: "30-foot-line"},
    {label: "40-foot-line"},
    {label: "50-foot-line"},
    {label: "60-foot-line"},
    {label: "10-foot-sphere"},
    {label: "20-foot-sphere"},
    {label: "30-foot-sphere"},
    {label: "40-foot-sphere"},
    {label: "50-foot-sphere"},
    {label: "60-foot-sphere"},
];
export const DURATION_TYPES = [
    {label: "Instantaneous"},
    {label: "1 round"},
    {label: "1 minute"},
    {label: "10 minutes"},
    {label: "1 hour"},
    {label: "8 hours"},
    {label: "24 hours"},
    {label: "Until dispelled"},
    {label: "Until triggered"},
    {label: "Special"},
];

export const SPELLCASTERS = 
[
    {label: "Bard"},
    {label: "Cleric"},
    {label: "Druid"},
    {label: "Paladin"},
    {label: "Ranger"},
    {label: "Sorcerer"},
    {label: "Warlock"},
    {label: "Wizard"},
];
export const DICE_TYPES = 
[
    {label: "d4"},
    {label: "d6"},
    {label: "d8"},
    {label: "d10"},
    {label: "d12"}
];
export const DAMAGE_TYPES = 
[
    {label: "Acid"},
    {label: "Bludgeoning"},
    {label: "Cold"},
    {label: "Fire"},
    {label: "Force"},
    {label: "Lightning"},
    {label: "Necrotic"},
    {label: "Piercing"},
    {label: "Poison"},
    {label: "Psychic"},
    {label: "Radiant"},
    {label: "Slashing"},
    {label: "Thunder"},
    {label: "Special"}
];

export const COMPONENTS = 
[
    {label: "Vocal"},
    {label: "Somatic"},
    {label: "Material"},
];
const CLASS_SKILLS = [
    { label: "Barbarian", skills: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"] },
    { label: "Bard", skills: ["Acrobatics", "Animal Handling", "Arcana", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth"] },
    { label: "Cleric", skills: ["History", "Insight", "Medicine", "Persuasion", "Religion"] },
    { label: "Druid", skills: ["Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"] },
    { label: "Fighter", skills: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"] },
    { label: "Monk", skills: ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"] },
    { label: "Paladin", skills: ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"] },
    { label: "Ranger", skills: ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"] },
    { label: "Rogue", skills: ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"] },
    { label: "Sorcerer", skills: ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"] },
    { label: "Warlock", skills: ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"] },
    { label: "Wizard", skills: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"] }
];
const CLASS_EQUIPMENT = 
[
    {label: "Barbarian", equipmentA: ["a greataxe", "any martial weapon"], equipmentB: ["two handaxes", "any simple weapon"], equipmentC: ["an explorer's pack"], equipmentD: ["four javelins"]},
    {label: "Bard", equipmentA: ["a rapier", "a longsword", "any simple weapon"], equipmentB: ["a diplomat's pack", "an entertainer's pack", "any simple weapon"], equipmentC: ["a lute", "any other musical instrument"], equipmentD: ["leather armor"], equipmentE: ["a dagger"]},
    {label: "Cleric", equipmentA: ["a mace", "a warhammer"], equipmentB: ["scale mail", "leather armor", "chain mail"], equipmentC: ["a light crossbow and x20 bolts", "any simple weapons"], equipmentD: ["a priest's pack", "an explorer's pack"], equipmentE: ["a shield"], equipmentF: ["a holy symbol"]},
    {label: "Druid", value: '4', hitDice: "d8"},
    {label: "Fighter", value: '5', hitDice: "d10"},
    {label: "Monk", value: '6', hitDice: "d8"},
    {label: "Paladin", value: '7', hitDice: "d10"},
    {label: "Ranger", value: '8', hitDice: "d10"},
    {label: "Rogue", value: '9', hitDice: "d8"},
    {label: "Sorcerer", value: '10', hitDice: "d6"},
    {label: "Warlock", value: '11', hitDice: "d8"},
    {label: "Wizard", value: '12', hitDice: "d6"}
];
const BACKGROUNDS = 
[
    {label: "Acolyte", skillProficiencies: ["Insight", "Religion"], toolProficiencies: null, languages: ["", ""], 
     equipment: ["holy symbol", ["prayer book", "prayer wheel"], "stick of incense", "stick of incense", "stick of incense", 
     "stick of incense", "stick of incense", "vestments", "a set of common clothes"], cost: 15
     // for languages the acolyte can choose between any of two languages. For prayer book and prayer wheel the user has the option to choose only one
    },
    // {label: "Anthropologist", skillProficiencies: ["Insight", "Religion"], toolProficiencies: null, languages: ["", ""], 
    //     equipment: ["a leather-bound diary", "a bottle of ink", "an ink pen", "a set of traveler's clothes", 
    //     "trinket of special significance"], cost: 10
    // },
    // {label: "Clan Crafter", skillProficiencies: ["Insight", "History"], toolProficiencies: [""], languages: ["Dwarvish", ""], 
    //     equipment: ["artisan's tools", "a maker's mark chisel", "a set of traveler's clothes", "10gp gem"], cost: 10
    //     // artisan's tools should be what the player has proficiency in
    // },
    // {label: "Charlatan", skillProficiencies: ["Deception", "Sleight of Hand"], toolProficiencies: ["Disguise Kit", "Forgery Kit"], languages: null,
    //     equipment: ["a set of fine clothes", "a disguise kit", "tools of the con of your choice", "belt pouch containing 15gp"], cost: 15
    // },
    // {label: "Criminal", skillProficiencies: ["Deception", "Stealth"], toolProficiencies: ["One type of gaming set", "Thieves' tools"], languages: null,
    //     equipment: ["a crowbar", "a set of dark common clothes including a hood", "belt pouch containing 15gp"], cost: 15
    // },
    // {label: "Entertainer", skillProficiencies: ["Acrobatics", "Performance"], toolProficiencies: ["Disguise Kit", "one type of musical instrument"], languages: null,
    //     equipment: ["a musical instrument", "the favor of an admirer", "a costume", "belt pouch containing 15gp"], cost: 15
    // },
    // {label: "Folk Hero", skillProficiencies: ["Animal Handling", "Survival"], toolProficiencies: ["One type of artisan's tools", "Vehicles (land)"], languages: null,
    //     equipment: ["a set of artisan's tools", "a shovel", "an iron pot", "a set of common clothes", "belt pouch containing 10gp"], cost: 10
    // },
    // {label: "Guild Artisan", skillProficiencies: ["Insight", "Persuasion"], toolProficiencies: ["One type of artisan's tools"], languages: ["", ""],
    //     equipment: ["a set of artisan's tools", "a letter of introduction from your guild", "a set of traveler's clothes", "belt pouch containing 15gp"], cost: 15
    // },
    // {label: "Hermit", skillProficiencies: ["Medicine", "Religion"], toolProficiencies: ["Herbalism Kit"], languages: ["", ""],
    //     equipment: ["a scroll case stuffed full of notes", "a winter blanket", "a set of common clothes", "an herbalism kit", "5gp"], cost: 5
    // },
    // {label: "Noble", skillProficiencies: ["History", "Persuasion"], toolProficiencies: ["One type of gaming set"], languages: ["", ""],
    //     equipment: ["a set of fine clothes", "a signet ring", "a scroll of pedigree", "a purse containing 25gp"], cost: 25
    // },
    // {label: "Outlander", skillProficiencies: ["Athletics", "Survival"], toolProficiencies: ["One type of musical instrument"], languages: ["", ""],
    //     equipment: ["a staff", "a hunting trap", "a trophy from an animal you killed", "a set of traveler's clothes", "belt pouch containing 10gp"], cost: 10
    // },
    // {label: "Sage", skillProficiencies: ["Arcana", "History"], toolProficiencies: null, languages: ["", ""],
    //     equipment: ["a bottle of black ink", "a quill", "a small knife", "a letter from a dead colleague", "a set of common clothes", "belt pouch containing 10gp"], cost: 10
    // },
    // {label: "Sailor", skillProficiencies: ["Athletics", "Perception"], toolProficiencies: ["Navigator's tools", "Vehicles (water)"], languages: null,
    //     equipment: ["a belaying pin (club)", "50 feet of silk rope", "a lucky charm", "a set of common clothes", "belt pouch containing 10gp"], cost: 10
    // },
    // {label: "Soldier", skillProficiencies: ["Athletics", "Intimidation"], toolProficiencies: ["One type of gaming set", "Vehicles (land)"], languages: null,
    //     equipment: ["an insignia of rank", "a trophy taken from a fallen enemy", "a set of bone dice or a deck of cards", "a set of common clothes", "belt pouch containing 10gp"], cost: 10
    // },
    // {label: "Urchin", skillProficiencies: ["Sleight of Hand", "Stealth"], toolProficiencies: ["Disguise Kit", "Thieves' tools"], languages: null,
    //     equipment: ["a small knife", "a map of the city you grew up in", "a pet mouse", "a token to remember your parents by", "a set of common clothes", "belt pouch containing 10gp"], cost: 10
    // }
];



const NUMBER_TWENTY = 
[ 

]
for (let i = 1; i<= 20; i++)
{
        NUMBER_TWENTY.push({value: i.toString()});
}




export {CLASSES, CLASS_SKILLS, CLASS_EQUIPMENT, NUMBER_TWENTY, BACKGROUNDS};
