  export const MAGICITEMS_TYPE = [
    { label: "Armor", value: "Armor" },
    { label: "Potion", value: "Potion" },
    { label: "Ring", value: "Ring" },
    { label: "Rod", value: "Rod" },
    { label: "Scroll", value: "Scroll" },
    { label: "Staff", value: "Staff" },
    { label: "Wand", value: "Wand" },
    { label: "Weapon", value: "Weapon" },
    { label: "Wondorous Item", value: "Wondorous Item" },
  ];
  export const MAGICITEMS_RARITY = [
    { label: "Common", value: "Common" },
    { label: "Uncommon", value: "Uncommon" },
    { label: "Rare", value: "Rare" },
    { label: "Very Rare", value: "Very Rare" },
    { label: "Legendary", value: "Legendary" },
    { label: "Artifact", value: "Artifact" },
  ];
  export const MAGICITEMS_TYPE_WEAPONS = [
    // Simple Melee Weapons
    { label: "Club", value: "Club" },
    { label: "Dagger", value: "Dagger" },
    { label: "Greatclub", value: "Greatclub" },
    { label: "Handaxe", value: "Handaxe" },
    { label: "Javelin", value: "Javelin" },
    { label: "Light Hammer", value: "Light Hammer" },
    { label: "Mace", value: "Mace" },
    { label: "Quarterstaff", value: "Quarterstaff" },
    { label: "Sickle", value: "Sickle" },
    { label: "Spear", value: "Spear" },
  
    // Simple Ranged Weapons
    { label: "Crossbow, Light", value: "Crossbow, Light" },
    { label: "Dart", value: "Dart" },
    { label: "Shortbow", value: "Shortbow" },
    { label: "Sling", value: "Sling" },
  
    // Martial Melee Weapons
    { label: "Battleaxe", value: "Battleaxe" },
    { label: "Flail", value: "Flail" },
    { label: "Glaive", value: "Glaive" },
    { label: "Greataxe", value: "Greataxe" },
    { label: "Greatsword", value: "Greatsword" },
    { label: "Halberd", value: "Halberd" },
    { label: "Lance", value: "Lance" },
    { label: "Longsword", value: "Longsword" },
    { label: "Maul", value: "Maul" },
    { label: "Morningstar", value: "Morningstar" },
    { label: "Pike", value: "Pike" },
    { label: "Rapier", value: "Rapier" },
    { label: "Scimitar", value: "Scimitar" },
    { label: "Shortsword", value: "Shortsword" },
    { label: "Trident", value: "Trident" },
    { label: "War Pick", value: "War Pick" },
    { label: "Warhammer", value: "Warhammer" },
    { label: "Whip", value: "Whip" },
  
    // Martial Ranged Weapons
    { label: "Blowgun", value: "Blowgun" },
    { label: "Crossbow, Hand", value: "Crossbow, Hand" },
    { label: "Crossbow, Heavy", value: "Crossbow, Heavy" },
    { label: "Longbow", value: "Longbow" },
    { label: "Net", value: "Net" },
  ];
  
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

export const MAGICITEMS_RODS = [
  {
    name: "Immovable Rod",
    rarity: "Uncommon",
    attunement: false,
    charges: false,
    numOfCharges: false,
    weight: 2,
    description: "This flat iron rod has a button on one end. You can use an action to push the button, causing the rod to become magically fixed in place—even defying gravity. It can hold up to 8,000 pounds. It remains fixed until you or another uses the button again."
  },
  {
    name: "Rod of Absorption",
    rarity: "Very Rare",
    attunement: true,
    charges: true,
    numOfCharges: 50,
    weight: 2,
    description: "This rod can absorb spells targeted at you (up to 50 levels total). You can use your reaction to absorb a spell, canceling its effect and storing its energy. You can later use the stored energy to cast spells without spending spell slots."
  }
];

export const MAGICITEMS_SCROLLS = [
  {
    name: "Spell Scroll (Cantrip)",
    rarity: "Common",
    attunement: false,
    charges: false,
    numOfCharges: false,
    weight: 0.1,
    description: "A parchment bearing a single cantrip. Casting it requires no components, but the scroll is consumed on use. If the spell is on your class’s spell list, you cast it automatically. Otherwise, you must succeed on a DC 10 + spell level check or the spell fails and the scroll is wasted."
  },
  {
    name: "Spell Scroll (1st Level)",
    rarity: "Common",
    attunement: false,
    charges: false,
    numOfCharges: false,
    weight: 0.1,
    description: "A parchment bearing a single 1st‑level spell. Use as above. DC = 10 + spell level."
  },
  {
    name: "Spell Scroll (2nd Level)",
    rarity: "Uncommon",
    attunement: false,
    charges: false,
    numOfCharges: false,
    weight: 0.1,
    description: "A parchment bearing a single 2nd‑level spell. Use as above. DC = 10 + spell level."
  },
  {
    name: "Spell Scroll (3rd Level)",
    rarity: "Uncommon",
    attunement: false,
    charges: false,
    numOfCharges: false,
    weight: 0.1,
    description: "A parchment bearing a single 3rd‑level spell. Use as above. DC = 10 + spell level."
  },
  {
    name: "Spell Scroll (4th Level)",
    rarity: "Rare",
    attunement: false,
    charges: false,
    numOfCharges: false,
    weight: 0.1,
    description: "A parchment bearing a single 4th‑level spell. Use as above. DC = 10 + spell level."
  },
  {
    name: "Spell Scroll (5th Level)",
    rarity: "Rare",
    attunement: false,
    charges: false,
    numOfCharges: false,
    weight: 0.1,
    description: "A parchment bearing a single 5th‑level spell. Use as above. DC = 10 + spell level."
  },
  {
    name: "Spell Scroll (6th Level)",
    rarity: "Very Rare",
    attunement: false,
    charges: false,
    numOfCharges: false,
    weight: 0.1,
    description: "A parchment bearing a single 6th‑level spell. Use as above. DC = 10 + spell level."
  },
  {
    name: "Spell Scroll (7th Level)",
    rarity: "Very Rare",
    attunement: false,
    charges: false,
    numOfCharges: false,
    weight: 0.1,
    description: "A parchment bearing a single 7th‑level spell. Use as above. DC = 10 + spell level."
  },
  {
    name: "Spell Scroll (8th Level)",
    rarity: "Very Rare",
    attunement: false,
    charges: false,
    numOfCharges: false,
    weight: 0.1,
    description: "A parchment bearing a single 8th‑level spell. Use as above. DC = 10 + spell level."
  },
  {
    name: "Spell Scroll (9th Level)",
    rarity: "Legendary",
    attunement: false,
    charges: false,
    numOfCharges: false,
    weight: 0.1,
    description: "A parchment bearing a single 9th‑level spell. Use as above. DC = 10 + spell level."
  }
];

export const MAGICITEMS_STAFFS = [
  {
    name: "Staff of Charming",
    rarity: "Rare",
    attunement: true,
    charges: true,
    numOfCharges: 10,
    weight: 4,
    description: "While holding this staff, you can expend 1 charge to cast *charm person*, *command*, or *comprehend languages* using your spellcasting DC. You can also, after failing a save against an enchantment that targets only you, turn it into a success. If you succeed on such a save, you can use your reaction and 1 charge to reflect the spell back on its caster. Regains 1d8+2 charges daily at dawn. If the last charge is used, roll a d20: on a 1 it becomes nonmagical."
  },
  {
    name: "Staff of Fire",
    rarity: "Very Rare",
    attunement: true,
    charges: true,
    numOfCharges: 10,
    weight: 4,
    description: "While holding this staff, you gain resistance to fire damage. It has 10 charges. You can expend charges to cast *burning hands* (1), *fireball* (3), or *wall of fire* (4), using your spellcasting DC. Regains 1d6+4 charges daily; on using the last charge, roll a d20: on a 1 it crumbles into cinders."
  },
  {
    name: "Staff of Frost",
    rarity: "Very Rare",
    attunement: true,
    charges: true,
    numOfCharges: 10,
    weight: 4,
    description: "While holding this staff, you gain resistance to cold damage. It has 10 charges and can cast *fog cloud* (1), *ice storm* (4), *cone of cold* (5), or *wall of ice* (4), using your spellcasting DC. Regains 1d6+4 charges daily; on expending the last charge, roll a d20: on a 1 it turns to water and is destroyed."
  },
  {
    name: "Staff of Healing",
    rarity: "Rare",
    attunement: true,
    charges: true,
    numOfCharges: 10,
    weight: 4,
    description: "This staff has 10 charges. You can expend charges to cast *cure wounds* (1 per level up to 4th), *lesser restoration* (2), or *mass cure wounds* (5) using your spellcasting DC. Regains 1d6+4 charges daily; on expending the last charge, roll a d20: on a 1 it vanishes."
  },
  {
    name: "Staff of Power",
    rarity: "Very Rare",
    attunement: true,
    charges: true,
    numOfCharges: 20,
    weight: 4,
    description: "This staff grants +2 to attack/damage (as quarterstaff), +2 AC, saving throws, and spell attack rolls. It has 20 charges to: power strike (1 charge, +1d6 force on hit) or cast spells like *magic missile*, *fireball*, *lightning bolt*, *cone of cold*, *hold monster*, *ray of enfeeblement*, *wall of force*, and *globe of invulnerability*. Regains 2d8+4 charges daily; if last is used, roll d20: on a 1 lose special properties, on 20 regain 1d8+2 more charges. It also has a retributive strike destructive option." 
  },
  {
    name: "Staff of Striking",
    rarity: "Very Rare",
    attunement: true,
    charges: true,
    numOfCharges: 10,
    weight: 4,
    description: "This staff functions as a +3 magic quarterstaff. It has 10 charges; when you hit with it you can expend up to 3 charges, dealing +1d6 force per charge. Regains 1d6+4 charges daily; on using the last, roll d20: on a 1 it becomes nonmagical."
  },
  {
    name: "Staff of Swarming Insects",
    rarity: "Rare",
    attunement: true,
    charges: true,
    numOfCharges: 10,
    weight: 4,
    description: "This staff holds 10 charges (regains 1d6+4 daily). You can cast *giant insect* (4) or *insect plague* (5) by expending charges. You can also expend 1 charge to create a harmless insect cloud (heavily obscured area for 10 minutes). On using the last charge, roll d20: on a 1 it's destroyed by a swarm of insects."
  }
];

export const MAGICITEMS_WANDS = [
  {
    name: "Wand of Magic Missiles",
    rarity: "Uncommon",
    attunement: true,
    charges: true,
    numOfCharges: 7,
    weight: 1,
    description: "This wand has 7 charges. You can expend 1 or more charges to cast *magic missile*—1st‑level for 1 charge, higher levels for each extra charge. Regains 1d6+1 charges at dawn; on last charge, roll d20: on a 1 it crumbles to dust."  },
  {
    name: "Wand of Magic Detection",
    rarity: "Uncommon",
    attunement: false,
    charges: true,
    numOfCharges: 3,
    weight: 1,
    description: "This wand has 3 charges. You can expend 1 charge to cast *detect magic*. Regains 1d3 charges at dawn. :contentReference[oaicite:1]{index=1}"
  },
  {
    name: "Wand of Secrets",
    rarity: "Uncommon",
    attunement: false,
    charges: true,
    numOfCharges: 3,
    weight: 1,
    description: "This wand has 3 charges. You can expend 1 charge to reveal secret doors or traps within 30 ft. Regains 1d3 charges at dawn. :contentReference[oaicite:2]{index=2}"
  },
  {
    name: "Wand of Web",
    rarity: "Uncommon",
    attunement: true,
    charges: true,
    numOfCharges: 7,
    weight: 1,
    description: "This wand has 7 charges. You can expend 1 charge to cast *web*. Regains 1d6+1 charges at dawn; if last charge is used, it crumbles to ashes. :contentReference[oaicite:3]{index=3}"
  },
  {
    name: "Wand of Wonder",
    rarity: "Rare",
    attunement: true,
    charges: true,
    numOfCharges: 7,
    weight: 1,
    description: "This wand has 7 charges. You can expend 1 charge to trigger a random effect (see d100 chart, DC 15). Regains 1d6+1 charges at dawn; on last charge, roll d20: on a 1 it crumbles into dust. :contentReference[oaicite:4]{index=4}"
  },
  {
    name: "Wand of Binding",
    rarity: "Rare",
    attunement: true,
    charges: true,
    numOfCharges: 7,
    weight: 1,
    description: "This wand has 7 charges. You can expend charges to cast *hold monster* (5 charges) or *hold person* (2 charges). Regains 1d6+1 charges at dawn; on last charge, roll d20: on 1 it crumbles to ashes. :contentReference[oaicite:5]{index=5}"
  },
  {
    name: "Wand of Enemy Detection",
    rarity: "Rare",
    attunement: true,
    charges: true,
    numOfCharges: 7,
    weight: 1,
    description: "This wand has 7 charges. You can expend 1 charge to sense the direction of the nearest hostile creature within 60 ft., even if invisible or ethereal. Regains 1d6+1 at dawn; on last charge, roll d20: on 1 it crumbles. :contentReference[oaicite:6]{index=6}"
  },
  {
    name: "Wand of Fear",
    rarity: "Rare",
    attunement: true,
    charges: true,
    numOfCharges: 7,
    weight: 1,
    description: "This wand has 7 charges. You can expend 1 charge to command a creature to flee/grovel. Or 2 charges to cast a 60‑ft cone of fear (DC 15 Wis save). Regains 1d6+1 charges at dawn; on last charge, roll d20: on 1 it crumbles. :contentReference[oaicite:7]{index=7}"
  },
  {
    name: "Wand of Lightning Bolts",
    rarity: "Rare",
    attunement: true,
    charges: true,
    numOfCharges: 7,
    weight: 1,
    description: "This wand has 7 charges. You can expend 1 or more charges to cast *lightning bolt* (3rd‑level for 1 charge; higher levels with extra charges). Regains 1d6+1 charges at dawn; on last charge, roll d20: on 1 it crumbles. :contentReference[oaicite:8]{index=8}"
  }
];

export const MAGICITEMS_WEAPONS = [
  {
    name: "Dragon Slayer",
    rarity: "Rare",
    attunement: false,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "You gain a +1 bonus to attack and damage with this sword. When you hit a dragon, it takes an extra 3d6 damage of that weapon’s type. ‘Dragon’ includes all dragon‑type creatures." 
  },
  {
    name: "Ammunition (+1/+2/+3)",
    rarity: "Uncommon / Rare / Very Rare",
    attunement: false,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "Magical ammunition that grants +1, +2, or +3 to attack and damage. Becomes nonmagical after hitting."
  },
  {
    name: "Arrow of Slaying",
    rarity: "Very Rare",
    attunement: false,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "An arrow designed to slay a specific creature type or race. On a hit, target makes a DC 17 Con save or takes an extra 6d10 piercing damage (half on success). Becomes nonmagical after dealing extra damage."
  },
  {
    name: "Berserker Axe",
    rarity: "Rare",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "This +1 axe increases your hit point max by 1 per level while attuned. Curse: you can't willingly part with it and suffer disadvantage on non‑axe weapons; you might go berserk if damaged."
  },
  {
    name: "Dagger of Venom",
    rarity: "Rare",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "This +1 dagger can be coated in poison (action) for 1 minute or until hit. On a hit, DC 15 Con or take 2d10 poison damage and become poisoned. Regains use at dawn."
  },
  {
    name: "Dancing Sword",
    rarity: "Rare",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "This +1 sword can animate as a bonus action, hovering and attacking nearby foes for 1 minute or until commanded to return. Can be recalled as a bonus action."
  },
  {
    name: "Defender",
    rarity: "Legendary",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "This +3 sword lets you transfer alchemical attack/damage bonus to AC on your turn instead. You must be holding it to do so."
  },
  {
    name: "Dwarven Thrower",
    rarity: "Very Rare",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "This +1 warhammer returns when thrown at giants or anyone larger. When thrown, it has +3 to attack and damage on a hit versus giants."
  },
  {
    name: "Flame Tongue",
    rarity: "Rare",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "This sword or similar blade can be ignited to deal an extra 2d6 fire damage on hit by use of a bonus action; it sheds bright light."
  },
  {
    name: "Frost Brand",
    rarity: "Rare",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "This sword deals an extra 1d6 cold damage on hit and sheds bright light. It also extinguishes nonmagical flames in a 30‑ft radius."
  },
  {
    name: "Giant Slayer",
    rarity: "Rare",
    attunement: false,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "You gain a +1 bonus to attack and damage. Creatures of Large size or larger (giants) take an extra 2d6 damage."
  },
  {
    name: "Hammer of Thunderbolts",
    rarity: "Very Rare",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "When used with a Belt of Giant Strength and Gauntlets of Ogre Power, this +1 warhammer deals an extra 2d6 thunder damage and can cause thunderous blasts."
  },
  {
    name: "Holy Avenger",
    rarity: "Legendary",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "This +3 sword deals an extra 2d10 radiant against fiends and undead. While attuned by a paladin, it grants resistance to spells to allies within 10 ft."
  },
  {
    name: "Javelin of Lightning",
    rarity: "Rare",
    attunement: false,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "You can use a bonus action to speak its command word, transforming it into a lightning bolt (4d6 lightning, 100‑ft line). It then reverts to a javelin."
  },
  {
    name: "Luck Blade",
    rarity: "Rare",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "This +1 sword grants a +1 bonus to saves and attack rolls. It has 1–3 wishes (DM’s choice)."
  },
  {
    name: "Mace of Disruption",
    rarity: "Rare",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "This +1 mace emits radiant pulses. Undead or fiends hit by it take extra damage and must succeed on a save or be frightened or destroyed."
  },
  {
    name: "Mace of Smiting",
    rarity: "Rare",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "This +1 mace deals extra damage to constructs and objects, and you can deal maximum damage by spending an action to break a creation."
  },
  {
    name: "Mace of Terror",
    rarity: "Rare",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "This +1 mace can unleash fear (DC 15) affecting multiple foes once per day. On a hit, it also emits a wave of fear if a save fails."
  },
  {
    name: "Nine Lives Stealer",
    rarity: "Very Rare",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "This +3 sword lets you force a DC 17 Con save on a target hit. On a fail, they drop to 0 HP. You can do this once per day."
  },
  {
    name: "Oathbow",
    rarity: "Very Rare",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "This +1 longbow lets you swear to slay a creature. When you hit it, it takes an extra 3d6 piercing and you gain advantage on attacks against it until dead or a short rest."
  },
  {
    name: "Scimitar of Speed",
    rarity: "Very Rare",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "This +2 scimitar grants you an extra attack as a bonus action."
  },
  {
    name: "Sun Blade",
    rarity: "Rare",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "This +2 shortsword emits sunlight, deals an extra 1d8 radiant, and has improved critical range versus undead."
  },
  {
    name: "Sword of Life Stealing",
    rarity: "Rare",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "On a critical hit, you gain 10 HP. This +1 sword is otherwise computed normally."
  },
  {
    name: "Sword of Sharpness",
    rarity: "Very Rare",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "When you score a critical hit with this +3 sword, you lop off a limb. Rolls of 20 on attack rolls do double slashing dice."
  },
  {
    name: "Sword of Wounding",
    rarity: "Rare",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "This +1 sword causes wounds that deal 1d6 necrotic at the start of each of the target’s turns. Healing doesn’t stop it."
  },
  {
    name: "Trident of Fish Command",
    rarity: "Rare",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "This +1 trident lets you cast *dominate beast* (fish only) once per day and can control fish to do simple tasks."
  },
  {
    name: "Vicious Weapon",
    rarity: "Rare / Very Rare",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "A +1 or +2 weapon that deals an extra 2d6 slashing damage on a critical hit."
  },
  {
    name: "Vorpal Sword",
    rarity: "Legendary",
    attunement: true,
    charges: false,
    numOfCharges: false,
    weight: 0,
    description: "This +3 sword can instantly behead a creature on a 20 attack (if it has a head). It has improved critical range."
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
