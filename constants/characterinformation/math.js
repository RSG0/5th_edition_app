export const calculateScoreMod = (score) =>
{
  return Math.floor((score - 10)/2);
}
export const translateHitDice = (hitDice) =>
{
    if (hitDice === "d4") return 4;
    else if (hitDice === "d6") return 6;
    else if (hitDice === "d8") return 8;
    else if (hitDice === "d10") return 10;
    else if (hitDice === "d12") return 12;
    else if (hitDice === "d20") return 20;
}
export const averageHitDice = (hitdiceNum) =>
{
    return Math.floor(hitdiceNum/2) + 1;
}
export const checkPositive = (num) => 
{
    if (num < 0) {return num}
    else {return "+" + num}
}
export const averageMaxHp = (hitDice, level, conMod) => //hitDice is MAX
{
        if (level === 1)
        {
            return (hitDice + conMod)
        }
        else {return ((hitDice + (conMod)) + (level - 1) * (averageHitDice(hitDice) +conMod) )}
        // (8 + 5) * 5 + (19 * 5)
}
//CONSTS TO BE IMPLEMENTED
// calculateProficiencyBonus

export const calculateProficiencyBonus = (lvl) =>
{
    if (lvl <= 4)
    {return 2;}
    else if (lvl <= 8) {return 3;}
    if (lvl <= 12) {return 4;}
    else if (lvl <= 16) {return 5}
    if (lvl  <= 20) {return 6}
    else {return -1}; //Shouldn't happen
}
// calculateSpellDC
export const calculateSpellDC = (spellMod, profMod) =>{ return 8 + spellMod + profMod;}
// calculateSpellAttackBonus
export const calculateSpellAttackBonus = (spellMod, profMod) => {return spellMod + profMod}
// calculateWeaponAttackBonus


// Dice rolling helper function
export const rollDie = (die) => {
    const sides = parseInt(die.slice(1)); // Extract the number from "dX"
    return Math.floor(Math.random() * sides) + 1; // Random number between 1 and sides
};

// Function to calculate total damage from a weapon
export const calculateWeaponDamage = (weapon, abilityMod, profMod) => {
    const { numOfDice, damageDie } = weapon;

    // Roll the damage dice
    let damage = 0;
    for (let i = 0; i < numOfDice; i++) {
        damage += rollDie(damageDie);
    }

    // Add modifiers to the damage
    const totalDamage = damage + abilityMod;

    return totalDamage;
};

// Example usage
const myWeapon = {
    title: "Battleaxe",
    numOfDice: 1,
    reach: 5,
    damageDie: "d8",
    damageType: "slashing",
    cost: 10,
    weight: 4,
    properties: ["Versatile: d10"],
    currency: "gp"
};

const abilityModifier = 3; // Assume this is Strength or Dexterity modifier
const proficiencyBonus = calculateProficiencyBonus(5); // Example level
console.log("Weapon Damage:", calculateWeaponDamage(myWeapon, abilityModifier, proficiencyBonus));
