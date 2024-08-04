const CLASSES = 
[
    {label: "Artificer", value: '1', hitDice: "d8"},
    {label: "Barbarian", value: '2', hitDice: "d12"},
    {label: "Bard", value: '3', hitDice: "d8"},
    {label: "Blood Hunter", value: '4', hitDice: "d10"},
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

const BACKGROUNDS = 
[
    {label: "Acolyte", skillProficiencies: ["Insight", "Religion"], toolProficiencies: null, languages: ["", ""], 
     equipment: ["holy symbol", ["prayer book", "prayer wheel"], "stick of incense", "stick of incense", "stick of incense", 
     "stick of incense", "stick of incense", "vestments", "a set of common clothes"], cost: 15
     // for languages the acolyte can choose between any of two languages. For prayer book and prayer wheel the user has the option to choose only one
    },
    {label: "Anthropologist", skillProficiencies: ["Insight", "Religion"], toolProficiencies: null, languages: ["", ""], 
        equipment: ["a leather-bound diary", "a bottle of ink", "an ink pen", "a set of traveler's clothes", 
        "trinket of special significance"], cost: 10
    },
    {label: "Clan Crafter", skillProficiencies: ["Insight", "History"], toolProficiencies: [""], languages: ["Dwarvish", ""], 
        equipment: ["artisan's tools", "a maker's mark chisel", "a set of traveler's clothes", "10gp gem"], cost: 10
        // artisan's tools should be what the player has proficiency in
    },
    {label: "Charlatan", skillProficiencies: ["Deception", "Sleight of Hand"], toolProficiencies: ["Disguise Kit", "Forgery Kit"], languages: null,
        equipment: ["a set of fine clothes", "a disguise kit", "tools of the con of your choice", "belt pouch containing 15gp"], cost: 15
    },
    {label: "Criminal", skillProficiencies: ["Deception", "Stealth"], toolProficiencies: ["One type of gaming set", "Thieves' tools"], languages: null,
        equipment: ["a crowbar", "a set of dark common clothes including a hood", "belt pouch containing 15gp"], cost: 15
    },
    {label: "Entertainer", skillProficiencies: ["Acrobatics", "Performance"], toolProficiencies: ["Disguise Kit", "one type of musical instrument"], languages: null,
        equipment: ["a musical instrument", "the favor of an admirer", "a costume", "belt pouch containing 15gp"], cost: 15
    },
    {label: "Folk Hero", skillProficiencies: ["Animal Handling", "Survival"], toolProficiencies: ["One type of artisan's tools", "Vehicles (land)"], languages: null,
        equipment: ["a set of artisan's tools", "a shovel", "an iron pot", "a set of common clothes", "belt pouch containing 10gp"], cost: 10
    },
    {label: "Guild Artisan", skillProficiencies: ["Insight", "Persuasion"], toolProficiencies: ["One type of artisan's tools"], languages: ["", ""],
        equipment: ["a set of artisan's tools", "a letter of introduction from your guild", "a set of traveler's clothes", "belt pouch containing 15gp"], cost: 15
    },
    {label: "Hermit", skillProficiencies: ["Medicine", "Religion"], toolProficiencies: ["Herbalism Kit"], languages: ["", ""],
        equipment: ["a scroll case stuffed full of notes", "a winter blanket", "a set of common clothes", "an herbalism kit", "5gp"], cost: 5
    },
    {label: "Noble", skillProficiencies: ["History", "Persuasion"], toolProficiencies: ["One type of gaming set"], languages: ["", ""],
        equipment: ["a set of fine clothes", "a signet ring", "a scroll of pedigree", "a purse containing 25gp"], cost: 25
    },
    {label: "Outlander", skillProficiencies: ["Athletics", "Survival"], toolProficiencies: ["One type of musical instrument"], languages: ["", ""],
        equipment: ["a staff", "a hunting trap", "a trophy from an animal you killed", "a set of traveler's clothes", "belt pouch containing 10gp"], cost: 10
    },
    {label: "Sage", skillProficiencies: ["Arcana", "History"], toolProficiencies: null, languages: ["", ""],
        equipment: ["a bottle of black ink", "a quill", "a small knife", "a letter from a dead colleague", "a set of common clothes", "belt pouch containing 10gp"], cost: 10
    },
    {label: "Sailor", skillProficiencies: ["Athletics", "Perception"], toolProficiencies: ["Navigator's tools", "Vehicles (water)"], languages: null,
        equipment: ["a belaying pin (club)", "50 feet of silk rope", "a lucky charm", "a set of common clothes", "belt pouch containing 10gp"], cost: 10
    },
    {label: "Soldier", skillProficiencies: ["Athletics", "Intimidation"], toolProficiencies: ["One type of gaming set", "Vehicles (land)"], languages: null,
        equipment: ["an insignia of rank", "a trophy taken from a fallen enemy", "a set of bone dice or a deck of cards", "a set of common clothes", "belt pouch containing 10gp"], cost: 10
    },
    {label: "Urchin", skillProficiencies: ["Sleight of Hand", "Stealth"], toolProficiencies: ["Disguise Kit", "Thieves' tools"], languages: null,
        equipment: ["a small knife", "a map of the city you grew up in", "a pet mouse", "a token to remember your parents by", "a set of common clothes", "belt pouch containing 10gp"], cost: 10
    }
];



const NUMBER_TWENTY = 
[ 

]
for (let i = 1; i<= 20; i++)
{
        NUMBER_TWENTY.push({value: i.toString()});
}




export {CLASSES, CLASS_SKILLS, NUMBER_TWENTY, BACKGROUNDS};
