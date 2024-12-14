export const MAGICITEMS_ARMOR =
[
    //Armor
    {name: "Adamantine Armor", rarity: "Uncommon", attunement: true, charges: false, numOfCharges: false, weight: "Various",
        description: "This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you’re wearing it, any Critical Hit against you becomes a normal hit." },
    {name: "Armor of Invulnerability", rarity: "Legendary", attunement: true, charges: true, numOfCharges: 3, weight: "Various",
        description: "You have resistance to nonmagical damage while you wear this armor. Additionally, you can use an action to make yourself immune to nonmagical damage for 10 minutes. Once used, this property can’t be used again until the next dawn."
        },
        { 
            name: "Armor of Resistance", 
            rarity: "Rare", 
            attunement: true, 
            charges: false, 
            numOfCharges: false, 
            weight: "Various",
            description: "You have resistance to one type of damage while wearing this armor. The type is determined by the DM."
        },
        { 
            name: "Demon Armor", 
            rarity: "Very Rare", 
            attunement: true, 
            charges: false, 
            numOfCharges: false, 
            weight: 65, //Heavy Armor
            description: "While wearing this armor, you gain a +1 bonus to AC, and you can use a longsword as if you were proficient with it. However, while wearing it, you are cursed, which causes you to have disadvantage on attack rolls against demons."
        },
        { 
            name: "Dragon Scale Mail", 
            rarity: "Very Rare", 
            attunement: true, 
            charges: false, 
            numOfCharges: false, 
            weight: 45, //Chain mail
            description: "You gain a +1 bonus to AC while wearing this armor. Additionally, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons. You can also sense dragons within 30 miles."
        },
        { 
            name: "Elven Chain", 
            rarity: "Rare", 
            attunement: false, 
            charges: false, 
            numOfCharges: false, 
            weight: 20, // Chain shirt
            description: "You are considered proficient with this armor even if you lack proficiency with medium armor."
        },
        { 
            name: "Glamoured Studded Leather", 
            type: "Armor", 
            rarity: "Rare", 
            attunement: true, 
            charges: false, 
            numOfCharges: false,
            weight: 13, //Light Armor 
            description: "While wearing this armor, you can use a bonus action to speak its command word and cause the armor to assume the appearance of a normal set of clothing or some other kind of armor."
        },    
]
export const MAGICITEMS_POTIONS = [
    // Potions
    {
        name: "Potion of Healing",
        rarity: "Common",
        attunement: false,
        charges: false,
        numOfCharges: false,
        weight: .5,
        description: "You regain 2d4 + 2 hit points when you drink this potion. The potion's red liquid glimmers when agitated."
    },
    {
        name: "Potion of Greater Healing",
        rarity: "Uncommon",
        attunement: false,
        charges: false,
        numOfCharges: false,
        weight: .5,
        description: "You regain 4d4 + 4 hit points when you drink this potion."
    },
    {
        name: "Potion of Superior Healing",
        rarity: "Rare",
        attunement: false,
        charges: false,
        numOfCharges: false,
        weight: .5,
        description: "You regain 8d4 + 8 hit points when you drink this potion."
    },
    {
        name: "Potion of Supreme Healing",
        rarity: "Very Rare",
        attunement: false,
        charges: false,
        numOfCharges: false,
        weight: .5,
        description: "You regain 10d4 + 20 hit points when you drink this potion."
    },
    {
        name: "Potion of Climbing",
        rarity: "Common",
        attunement: false,
        charges: false,
        numOfCharges: false,
        weight: .5,
        description: "When you drink this potion, you gain a climbing speed equal to your walking speed for 1 hour. During this time, you have advantage on Strength (Athletics) checks you make to climb."
    },
    {
        name: "Potion of Heroism",
        rarity: "Rare",
        attunement: false,
        charges: false,
        numOfCharges: false,
        weight: .5,
        description: "For 1 hour after drinking it, you gain 10 temporary hit points that last for 1 hour. For the same duration, you are under the effect of the bless spell (no concentration required)."
    },
    {
        name: "Potion of Invisibility",
        rarity: "Very Rare",
        attunement: false,
        charges: false,
        numOfCharges: false,
        weight: .5,
        description: "After drinking it, you become invisible for 1 hour. Anything you are wearing or carrying is invisible with you. The effect ends early if you attack or cast a spell."
    },
    {
        name: "Potion of Speed",
        rarity: "Very Rare",
        attunement: false,
        charges: false,
        numOfCharges: false,
        weight: .5,
        description: "When you drink this potion, you gain the effect of the haste spell for 1 minute (no concentration required)."
    },
    {
        name: "Potion of Water Breathing",
        rarity: "Uncommon",
        attunement: false,
        charges: false,
        numOfCharges: false,
        weight: .5,
        description: "You can breathe underwater for 1 hour after drinking this potion."
    }
];
export const MAGICITEMS_RINGS = [
    // Rings
    {
        name: "Ring of Protection",
        rarity: "Rare",
        attunement: true,
        charges: false,
        numOfCharges: false,
        weight: 0,
        description: "You gain a +1 bonus to AC and saving throws while wearing this ring."
    },
    {
        name: "Ring of Resistance",
        rarity: "Rare",
        attunement: true,
        charges: false,
        numOfCharges: false,
        weight: 0,
        description: "You have resistance to one damage type while wearing this ring. The type is determined by the DM or chosen from the options in the DMG."
    },
    {
        name: "Ring of Invisibility",
        rarity: "Legendary",
        attunement: true,
        charges: false,
        numOfCharges: false,
        weight: 0,
        description: "While wearing this ring, you can turn invisible as an action. Anything you are wearing or carrying becomes invisible with you. The effect ends if you attack, cast a spell, or the ring is removed."
    },
    {
        name: "Ring of Spell Storing",
        rarity: "Rare",
        attunement: true,
        charges: true,
        numOfCharges: 5,
        weight: 0,
        description: "This ring stores spells cast into it, holding them until used. The ring can store up to 5 levels worth of spells at a time. When found, it contains 1d6 − 1 levels of stored spells chosen by the DM."
    },
    {
        name: "Ring of Feather Falling",
        rarity: "Rare",
        attunement: false,
        charges: false,
        numOfCharges: false,
        weight: 0,
        description: "When you fall while wearing this ring, you descend 60 feet per round and take no damage from falling."
    },
    {
        name: "Ring of Free Action",
        rarity: "Rare",
        attunement: true,
        charges: false,
        numOfCharges: false,
        weight: 0,
        description: "While you wear this ring, difficult terrain doesn’t cost you extra movement. In addition, magic can neither reduce your speed nor cause you to be paralyzed or restrained."
    },
    {
        name: "Ring of Mind Shielding",
        rarity: "Uncommon",
        attunement: true,
        charges: false,
        numOfCharges: false,
        weight: 0,
        description: "You are immune to magic that allows other creatures to read your thoughts, determine whether you are lying, or know your alignment. You can also telepathically communicate with creatures within 30 feet."
    },
    {
        name: "Ring of Regeneration",
        rarity: "Very Rare",
        attunement: true,
        charges: false,
        numOfCharges: false,
        weight: 0,
        description: "While wearing this ring, you regain 1d6 hit points every 10 minutes, provided you have at least 1 hit point. If you lose a body part, the ring causes it to regrow and return to full functionality after 1d6 + 1 days."
    },
    {
        name: "Ring of Shooting Stars",
        rarity: "Very Rare",
        attunement: true,
        charges: true,
        numOfCharges: 6,
        weight: 0,
        description: "This ring has 6 charges. While wearing it in dim light or darkness, you can expend 1 charge to create four motes of light or 2 charges to cast the faerie fire spell. Additionally, you can expend multiple charges to create a ball of lightning that deals damage."
    },
    {
        name: "Ring of Telekinesis",
        rarity: "Very Rare",
        attunement: true,
        charges: false,
        numOfCharges: false,
        weight: 0,
        description: "While wearing this ring, you can cast the telekinesis spell at will, but only target objects that aren’t being worn or carried."
    }

];
export const MAGICITEMS_WONDROUS = [
    // Wondrous Items
    {
        name: "Cloak of Protection",
        rarity: "Uncommon",
        attunement: true,
        charges: false,
        numOfCharges: false,
        weight: 1,
        description: "You gain a +1 bonus to AC and saving throws while wearing this cloak."
    },
    {
        name: "Boots of Speed",
        rarity: "Rare",
        attunement: true,
        charges: true,
        numOfCharges: 3,
        weight: 1,
        description: "While wearing these boots, you can use a bonus action to double your speed for 1 minute. The boots regain expended charges at dawn."
    },
    {
        name: "Bag of Holding",
        rarity: "Uncommon",
        attunement: false,
        charges: false,
        numOfCharges: false,
        weight: 15,
        description: "This bag can hold up to 500 pounds of material, but always weighs 15 pounds, regardless of its contents."
    },
    {
        name: "Amulet of Health",
        rarity: "Uncommon",
        attunement: true,
        charges: false,
        numOfCharges: false,
        weight: 0,
        description: "While wearing this amulet, your Constitution score is 19, unless it is already 19 or higher."
    },
    {
        name: "Cape of the Mountebank",
        rarity: "Rare",
        attunement: true,
        charges: true,
        numOfCharges: 1,
        weight: 1,
        description: "This cape has 1 charge. While wearing it, you can use a bonus action to teleport up to 30 feet to an unoccupied space you can see. The cape regains expended charges at dawn."
    },
    {
        name: "Helm of Teleportation",
        rarity: "Very Rare",
        attunement: true,
        charges: true,
        numOfCharges: 3,
        weight: 3,
        description: "This helm has 3 charges. While wearing it, you can cast *Teleport* by expending 1 charge. The helm regains all expended charges at dawn."
    },
    {
        name: "Ioun Stone of Insight",
        rarity: "Rare",
        attunement: false,
        charges: false,
        numOfCharges: false,
        weight: 0,
        description: "While this stone orbits around your head, you gain a +2 bonus to Wisdom (Insight) checks."
    }
];
