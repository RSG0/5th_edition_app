export const CLERIC_SUBCLASS = 
[
    {
        label: "Cleric", value: '0'
    },
    {label: "Knowledge", value: '1', 
        spells_first: ["Command", "Identify"], spells_third: ["Augury", "Suggestion"], 
        spells_fifth: ["Nondetection", "Speak with Dead"], spells_seventh: ["Arcane Eye", "Confusion"],

        additionalSkills: ["Arcana", "History", "Nature", "Religon"],
        bonusProficiency: ["Heavy Armor"],

        channelDivinity: ["Knowledge of the Ages", "Read Thoughts"]},
    {label: "Life", value: '2'},
    {label: "Light", value: '3'},
    {label: "Nature", value: '4'},
    {label: "Tempest", value: '5'},
    {label: "Trickery", value: '6'},
    {label: "War", value: '7'},
    {label: "Forge", value: '8'},
    {label: "Grave", value: '9'},
    {label: "Order", value: '10'},
    {label: "Peace", value: '11'},
    {label: "Twilight", value: '12'}
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
