export const CLERIC_SUBCLASS = 
[
    {
        label: "Cleric", value: '0'
    },
    {label: "Knowledge", value: '1', 
        spells_first: ["Command", "Identify"], spells_third: ["Augury", "Suggestion"], 
        spells_fifth: ["Nondetection", "Speak with Dead"], spells_seventh: ["Arcane Eye", "Confusion"],

        additionalSkills: ["Arcana", "History", "Nature", "Religion"],
        bonusProficiency: ["Heavy Armor"],

        channelDivinity: ["Knowledge of the Ages", "Read Thoughts"]
    },
    {label: "Life", value: '2',
        spells_first: ["Bless", "Cure Wounds"], spells_third: ["Lesser Restoration", "Spiritual Weapon"], 
        spells_fifth: ["Beacon of Hope", "Revivify"], spells_seventh: ["Death Ward", "Guardian of Faith"],

        additionalSkills: ["Medicine", "Religion"],
        bonusProficiency: ["Heavy Armor"],

        channelDivinity: ["Preserve Life"]
    },
    {label: "Light", value: '3',
        spells_first: ["Burning Hands", "Faerie Fire"], spells_third: ["Flaming Sphere", "Scorching Ray"], 
        spells_fifth: ["Daylight", "Fireball"], spells_seventh: ["Guardian of Faith", "Wall of Fire"],

        additionalSkills: ["Perception", "Religion"],
        bonusProficiency: [],

        channelDivinity: ["Radiance of the Dawn"]
    },
    {label: "Nature", value: '4',
        spells_first: ["Animal Friendship", "Speak with Animals"], spells_third: ["Barkskin", "Spike Growth"], 
        spells_fifth: ["Plant Growth", "Wind Wall"], spells_seventh: ["Dominate Beast", "Grasping Vine"],

        additionalSkills: ["Animal Handling", "Nature", "Survival"],
        bonusProficiency: ["Heavy Armor"],

        channelDivinity: ["Charm Animals and Plants"]
    },
    {label: "Tempest", value: '5',
        spells_first: ["Fog Cloud", "Thunderwave"], spells_third: ["Gust of Wind", "Shatter"], 
        spells_fifth: ["Call Lightning", "Sleet Storm"], spells_seventh: ["Control Water", "Ice Storm"],

        additionalSkills: ["Athletics", "Nature"],
        bonusProficiency: ["Martial Weapons", "Heavy Armor"],

        channelDivinity: ["Destructive Wrath"]
    },
    {label: "Trickery", value: '6',
        spells_first: ["Charm Person", "Disguise Self"], spells_third: ["Mirror Image", "Pass without Trace"], 
        spells_fifth: ["Blink", "Dispel Magic"], spells_seventh: ["Dimension Door", "Polymorph"],

        additionalSkills: ["Deception", "Sleight of Hand", "Stealth"],
        bonusProficiency: [],

        channelDivinity: ["Invoke Duplicity", "Cloak of Shadows"]
    },
    {label: "War", value: '7',
        spells_first: ["Divine Favor", "Shield of Faith"], spells_third: ["Magic Weapon", "Spiritual Weapon"], 
        spells_fifth: ["Crusader's Mantle", "Spirit Guardians"], spells_seventh: ["Freedom of Movement", "Stoneskin"],

        additionalSkills: ["Athletics", "Intimidation"],
        bonusProficiency: ["Martial Weapons", "Heavy Armor"],

        channelDivinity: ["Guided Strike", "War God's Blessing"]
    },
    {label: "Forge", value: '8',
        spells_first: ["Identify", "Searing Smite"], spells_third: ["Heat Metal", "Magic Weapon"], 
        spells_fifth: ["Elemental Weapon", "Protection from Energy"], spells_seventh: ["Fabricate", "Wall of Fire"],

        additionalSkills: ["Arcana", "History"],
        bonusProficiency: ["Heavy Armor"],

        channelDivinity: ["Artisan's Blessing"]
    },
    {label: "Grave", value: '9',
        spells_first: ["Bane", "False Life"], spells_third: ["Gentle Repose", "Ray of Enfeeblement"], 
        spells_fifth: ["Revivify", "Vampiric Touch"], spells_seventh: ["Blight", "Death Ward"],

        additionalSkills: ["Insight", "Medicine"],
        bonusProficiency: [],

        channelDivinity: ["Path to the Grave"]
    },
    {label: "Order", value: '10',
        spells_first: ["Command", "Heroism"], spells_third: ["Hold Person", "Zone of Truth"], 
        spells_fifth: ["Mass Healing Word", "Slow"], spells_seventh: ["Compulsion", "Locate Creature"],

        additionalSkills: ["Intimidation", "Persuasion"],
        bonusProficiency: ["Heavy Armor"],

        channelDivinity: ["Order's Demand"]
    },
    {label: "Peace", value: '11',
        spells_first: ["Heroism", "Sanctuary"], spells_third: ["Aid", "Warding Bond"], 
        spells_fifth: ["Beacon of Hope", "Sending"], spells_seventh: ["Aura of Purity", "Otiluke's Resilient Sphere"],

        additionalSkills: ["Insight", "Performance"],
        bonusProficiency: [],

        channelDivinity: ["Balm of Peace"]
    },
    {label: "Twilight", value: '12',
        spells_first: ["Faerie Fire", "Sleep"], spells_third: ["Moonbeam", "See Invisibility"], 
        spells_fifth: ["Aura of Vitality", "Leomund's Tiny Hut"], spells_seventh: ["Aura of Life", "Greater Invisibility"],

        additionalSkills: ["Perception", "Survival"],
        bonusProficiency: ["Martial Weapons", "Heavy Armor"],

        channelDivinity: ["Twilight Sanctuary"]
    }
];

export function awe()
{

}

export const BARD_SUBCLASS = 
[
    {label: "College of Lore", value: '1'},
    {label: "College of Valor", value: '2'},
    {label: "College of Glamour", value: '3'},
    {label: "College of Swords", value: '4'},
    {label: "College of Whispers", value: '5'},
    {label: "College of Creation", value: '6'},
    {label: "College of Eloquence", value: '7'}
];

export const BARBARIAN_SUBCLASS = 
[
    {label: "Path of the Berserker", value: '1'},
    {label: "Path of the Totem Warrior", value: '2'},
    {label: "Path of the Battlerager", value: '3'},
    {label: "Path of the Ancestral Guardian", value: '4'},
    {label: "Path of the Storm Herald", value: '5'},
    {label: "Path of the Zealot", value: '6'},
    {label: "Path of the Beast", value: '7'},
    {label: "Path of Wild Magic", value: '8'}
];
