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
// calculateSpellDC
// calculateSpellAttackBonus
// calculateWeaponAttackBonus
