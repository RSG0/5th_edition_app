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
const RACES =
[
    {label: "Aarakocra", value: '1'},
    {label: "Aasimar", value: '2'},
    {label: "Changeling", value: '3'},
    {label: "Dragonborn", value: '4'},
    {label: "Dwarf", value: '5'},
    {label: "Elf", value: '6'}
]
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