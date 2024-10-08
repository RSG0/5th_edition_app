export const ARMOR = [
    // Light Armor
    {title: "Padded", weight: 8, cost: 5, armorClass: 11 + "{DEX}", strengthPreq: null, stealthDis: true, currency: "gp", armorType: "Light"},
    {title: "Leather", weight: 10, cost: 10, armorClass: 11 + "{DEX}", strengthPreq: null, stealthDis: false, currency: "gp", armorType: "Light"},
    {title: "Studded Leather", weight: 13, cost: 45, armorClass: 12 + "{DEX}", strengthPreq: null, stealthDis: false, currency: "gp", armorType: "Light"},

    // Medium Armor
    {title: "Hide", weight: 12, cost: 10, armorClass: 12 + "{DEX (max 2)}", strengthPreq: null, stealthDis: false, currency: "gp", armorType: "Medium"},
    {title: "Chain Shirt", weight: 20, cost: 50, armorClass: 13 + "{DEX (max 2)}", strengthPreq: null, stealthDis: false, currency: "gp", armorType: "Medium"},
    {title: "Scale Mail", weight: 45, cost: 50, armorClass: 14 + "{DEX (max 2)}", strengthPreq: null, stealthDis: true, currency: "gp", armorType: "Medium"},
    {title: "Breastplate", weight: 20, cost: 400, armorClass: 14 + "{DEX (max 2)}", strengthPreq: null, stealthDis: false, currency: "gp", armorType: "Medium"},
    {title: "Half Plate", weight: 40, cost: 750, armorClass: 15 + "{DEX (max 2)}", strengthPreq: null, stealthDis: true, currency: "gp", armorType: "Medium"},

    // Heavy Armor
    {title: "Ring Mail", weight: 40, cost: 30, armorClass: 14, strengthPreq: null, stealthDis: true, currency: "gp", armorType: "Heavy"},
    {title: "Chain Mail", weight: 55, cost: 75, armorClass: 16, strengthPreq: 13, stealthDis: true, currency: "gp", armorType: "Heavy"},
    {title: "Splint", weight: 60, cost: 200, armorClass: 17, strengthPreq: 15, stealthDis: true, currency: "gp", armorType: "Heavy"},
    {title: "Plate", weight: 65, cost: 1500, armorClass: 18, strengthPreq: 15, stealthDis: true, currency: "gp", armorType: "Heavy"},

    // Shields
    {title: "Shield", weight: 6, cost: 10, armorClass: +2, strengthPreq: null, stealthDis: false, currency: "gp", armorType: "Shield"}
];


export const TOOLS = [
    {title: "Alchemist's Supplies", cost: 50, weight: 8, currency: "gp"},
    {title: "Brewer's Supplies", cost: 20, weight: 9, currency: "gp"},
    {title: "Calligrapher's Supplies", cost: 10, weight: 5, currency: "gp"},
    {title: "Carpenter's Tools", cost: 8, weight: 6, currency: "gp"},
    {title: "Cartographer's Tools", cost: 15, weight: 6, currency: "gp"},
    {title: "Cobbler's Tools", cost: 5, weight: 5, currency: "gp"},
    {title: "Cook's Utensils", cost: 1, weight: 8, currency: "gp"},
    {title: "Glassblower's Tools", cost: 30, weight: 5, currency: "gp"},
    {title: "Jeweler's Tools", cost: 25, weight: 2, currency: "gp"},
    {title: "Leatherworker's Tools", cost: 5, weight: 5, currency: "gp"},
    {title: "Mason's Tools", cost: 10, weight: 8, currency: "gp"},
    {title: "Painter's Supplies", cost: 10, weight: 5, currency: "gp"},
    {title: "Potter's Tools", cost: 10, weight: 3, currency: "gp"},
    {title: "Smith's Tools", cost: 20, weight: 8, currency: "gp"},
    {title: "Tinker's Tools", cost: 50, weight: 10, currency: "gp"},
    {title: "Weaver's Tools", cost: 1, weight: 5, currency: "gp"},
    {title: "Woodcarver's Tools", cost: 1, weight: 5, currency: "gp"},
    {title: "Disguise Kit", cost: 25, weight: 3, currency: "gp"},
    {title: "Forgery Kit", cost: 15, weight: 5, currency: "gp"},
    {title: "Dice Set", cost: 1, weight: 0, currency: "gp"},
    {title: "Dragonchess Set", cost: 1, weight: 0.5, currency: "gp"},
    {title: "Playing Card Set", cost: 0.5, weight: 0, currency: "gp"},
    {title: "Three-Dragon Ante Set", cost: 1, weight: 0, currency: "gp"},
    {title: "Herbalism Kit", cost: 5, weight: 3, currency: "gp"},
    {title: "Bagpipes", cost: 30, weight: 6, currency: "gp"},
    {title: "Drum", cost: 6, weight: 3, currency: "gp"},
    {title: "Dulcimer", cost: 25, weight: 10, currency: "gp"},
    {title: "Flute", cost: 2, weight: 1, currency: "gp"},
    {title: "Lute", cost: 35, weight: 2, currency: "gp"},
    {title: "Lyre", cost: 30, weight: 2, currency: "gp"},
    {title: "Horn", cost: 3, weight: 2, currency: "gp"},
    {title: "Pan Flute", cost: 12, weight: 2, currency: "gp"},
    {title: "Shawm", cost: 2, weight: 1, currency: "gp"},
    {title: "Viol", cost: 30, weight: 1, currency: "gp"},
    {title: "Navigator's Tools", cost: 25, weight: 2, currency: "gp"},
    {title: "Poisoner's Kit", cost: 50, weight: 2, currency: "gp"},
    {title: "Thieves' Tools", cost: 25, weight: 1, currency: "gp"}
];

export const MARTIAL_MELEE_WEAPONS = [
    {title: "Battleaxe", numOfDice: 1, reach: 5, damageDie: "d8", damageType: "slashing", cost: 10, weight: 4, properties: ["Versatile: d10"], currency: "gp"},
    {title: "Flail", numOfDice: 1, reach: 5, damageDie: "d8", damageType: "bludgeoning", cost: 10, weight: 2, properties: [], currency: "gp"},
    {title: "Glaive", numOfDice: 1, reach: 10, damageDie: "d10", damageType: "slashing", cost: 20, weight: 6, properties: ["Heavy", "Reach", "Two-handed"], currency: "gp"},
    {title: "Greataxe", numOfDice: 1, reach: 5, damageDie: "d12", damageType: "slashing", cost: 30, weight: 7, properties: ["Heavy", "Two-handed"], currency: "gp"},
    {title: "Greatsword", numOfDice: 2, reach: 5, damageDie: "d6", damageType: "slashing", cost: 50, weight: 6, properties: ["Heavy", "Two-handed"], currency: "gp"},
    {title: "Halberd", numOfDice: 1, reach: 10, damageDie: "d10", damageType: "slashing", cost: 20, weight: 6, properties: ["Heavy", "Reach", "Two-handed"], currency: "gp"},
    {title: "Lance", numOfDice: 1, reach: 10, damageDie: "d12", damageType: "piercing", cost: 10, weight: 6, properties: ["Reach", "Special"], currency: "gp"},
    {title: "Longsword", numOfDice: 1, reach: 5, damageDie: "d8", damageType: "slashing", cost: 15, weight: 3, properties: ["Versatile: d10"], currency: "gp"},
    {title: "Maul", numOfDice: 2, reach: 5, damageDie: "d6", damageType: "bludgeoning", cost: 10, weight: 10, properties: ["Heavy", "Two-handed"], currency: "gp"},
    {title: "Morningstar", numOfDice: 1, reach: 5, damageDie: "d8", damageType: "piercing", cost: 15, weight: 4, properties: [], currency: "gp"},
    {title: "Pike", numOfDice: 1, reach: 10, damageDie: "d10", damageType: "piercing", cost: 5, weight: 18, properties: ["Heavy", "Reach", "Two-handed"], currency: "gp"},
    {title: "Rapier", numOfDice: 1, reach: 5, damageDie: "d8", damageType: "piercing", cost: 25, weight: 2, properties: ["Finesse"], currency: "gp"},
    {title: "Scimitar", numOfDice: 1, reach: 5, damageDie: "d6", damageType: "slashing", cost: 25, weight: 3, properties: ["Finesse", "Light"], currency: "gp"},
    {title: "Shortsword", numOfDice: 1, reach: 5, damageDie: "d6", damageType: "piercing", cost: 10, weight: 2, properties: ["Finesse", "Light"], currency: "gp"},
    {title: "Trident", numOfDice: 1, reach: 5, damageDie: "d6", damageType: "piercing", cost: 5, weight: 4, properties: ["Thrown: range 20/60", "Versatile: d8"], currency: "gp"},
    {title: "War Pick", numOfDice: 1, reach: 5, damageDie: "d8", damageType: "piercing", cost: 5, weight: 2, properties: [], currency: "gp"},
    {title: "Warhammer", numOfDice: 1, reach: 5, damageDie: "d8", damageType: "bludgeoning", cost: 15, weight: 2, properties: ["Versatile: d10"], currency: "gp"},
    {title: "Whip", numOfDice: 1, reach: 10, damageDie: "d4", damageType: "slashing", cost: 2, weight: 3, properties: ["Finesse", "Reach"], currency: "gp"}
];
