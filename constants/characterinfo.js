const CLASSES = 
[
    {label: "Articier", value: '1'},
    {label: "Bard", value: '2'},
    {label: "Blood Hunter", value: '3'},
    {label: "Barbarian", value: '4'},
    {label: "Cleric", value: '5'},
    {label: "Fighter", value: '6'},
    {label: "Druid", value: '7'},
    {label: "Paladin", value: '8'},
    {label: "Ranger", value: '9'},
    {label: "Sorceror", value: '10'},
    {label: "Wizard", value: '11'}
]
const RACES = [
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

console.log(RACES);

const LEVELS = 
[ 

]
for (let i = 1; i<= 20; i++)
{
        LEVELS.push({value: i.toString()});
}
const ELF_SUBRACE =
[
    {label:"Astral", value: '1'},
    {label:"Drow", value: '2'},
    {label:"High", value: '3'}

]
const DRAGONBORN_SUBRACE =
[
    {label: "Black", value: '1'},
    {label: "Blue", value: '2'},
    {label: "Brass", value: '3'}
]
export {CLASSES, RACES, LEVELS, ELF_SUBRACE, DRAGONBORN_SUBRACE};
