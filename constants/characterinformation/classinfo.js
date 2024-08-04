export const CLERIC_SUBCLASS = 
[
    {
        label: "Cleric", value: '0'
    },
    {label: "Knowledge", value: '1', 
        spells_first: ["Command", "Identify"], spells_third: ["Augury", "Suggestion"],  
        spells_fifth: ["Nondetection", "Speak with Dead"], spells_seventh: ["Arcane Eye", "Confusion"],
        spells_ninth: ["Legend Lore", "Scrying"],

        additionalSkills: ["Arcana", "History", "Nature", "Religion"], // OR not ALL. user can only select 1. Also the bonus is doubled
        bonusProficiency: ["Heavy Armor"],

        channelDivinity: [ // can only be accessed level 2 and above
            {label: "Knowledge of the Ages", description: "As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool."},
            {label: "Read Thoughts", description: "You can then use your access to the creature's mind to command it.\nAs an action, choose one creature that you can see within" +
            "60 feet of you. That creature must make a Wisdom saving throw. If the creature succeeds on the saving throw, you can't use this feature on it again until you finish a "
            + "long rest.\nIf the creature fails its save, you can read its surface thoughts (those foremost in its mind, reflecting its current emotions and what it is actively thinking about)" +
            "when it is within 60 feet of you. This effect lasts for 1 minute.\nDuring that time, you can use your action to end this effect and cast the Suggestion spell on the creature without "+
            "expending a spell slot. The target automatically fails its saving throw against the spell."}
        ],
        level1Feature: {label: "Blessings of Knowledge", description: "At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion.\n\nYour proficiency bonus is doubled for any ability check you make that uses either of those skills."},     
        level6Feature: {label: "Read Thoughts", description: "As an action, choose one creature that you can see within 60 feet of you. That creature must make a Wisdom saving throw. If the creature succeeds on the saving throw, you can't use this feature on it again until you finish a long rest.\n\nIf the creature fails its save, you can read its surface thoughts (those foremost in its mind, reflecting its current emotions and what it is actively thinking about) when it is within 60 feet of you. This effect lasts for 1 minute.\n\nDuring that time, you can use your action to end this effect and cast the Suggestion spell on the creature without expending a spell slot. The target automatically fails its saving throw against the spell."},
        level8Feature: {label: "Potent Spellcasting", description: "You can add your Wisdom modifier to the damage you deal with any cleric cantrip."},
        level17Feature:/**Visions of the past */ [{label: "Object Holding", description: "Holding an object as you meditate, you"+
            " can see visions of the object's previous owner. After meditating for 1 minute, you learn how"+
            " the owner acquired and lost the object, as well as the most recent significant event involving"+
            " the object and that owner. If the object was owned by another creature in the recent past (within"+
            " a number of days equal to your Wisdom score), you can spend 1 additional minute for each owner to"+
            " learn the same information about that creature."},
            {label: "Area Reading", description: "As you meditate, you see visions of recent events in your immediate"+
            " vicinity (a room, street, tunnel, clearing, or the like, up to a 50-foot cube), going back a number "+
            "of days equal to your Wisdom score. For each minute you meditate, you learn about one significant event,"+
            " beginning with the most recent. Significant events typically involve powerful emotions, such as battles"+
            " and betrayals, marriages and murders, births and funerals. However, they might also include more mundane"+
            " events that are nevertheless important in your current situation."}
        ]
    },
    {label: "Life", value: '2',
        spells_first: ["Bless", "Cure Wounds"], spells_third: ["Lesser Restoration", "Spiritual Weapon"], 
        spells_fifth: ["Beacon of Hope", "Revivify"], spells_seventh: ["Death Ward", "Guardian of Faith"],
        spells_ninth: ["Mass Cure Wounds", "Raise Dead"],

        additionalSkills: [],
        bonusProficiency: ["Heavy Armor"],

        channelDivinity: [
            {label:"Preserve Life", description: "As an action, you present your holy symbol and evoke"+
            " healing energy that can restore a number of hit points equal to five times your cleric "+
            "level. Choose any creatures within 30 feet of you, and divide those hit points among them."+
            " This feature can restore a creature to no more than half of its hit point maximum. You can't"+
            " use this feature on an undead or a construct."}],
        level1Feature: {
            label: "Disciple Life", description: "Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level."},
        level6Feature: {
            label:"Blessed Healer", description: "When you cast a spell of 1st level or higher that restores"+
            " hit points to a creature other than you, you regain hit points equal to 2 + the spell's level."},
        level8Feature: {
            label: "Divine Strike", description: "Once on each of your turns when you hit a creature"+
            " with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target."+
            " When you reach 14th level, the extra damage increases to 2d8."},
        level17Feature: {
            label: "Supreme Healing", description: "When you would normally roll one or more dice to restore hit"+
            " points with a spell, you instead use the highest number possible for each die. For example, instead"+
            " of restoring 2d6 hit points to a creature, you restore 12."
        }
    },
    {label: "Light", value: '3',
        spells_first: ["Burning Hands", "Faerie Fire"], spells_third: ["Flaming Sphere", "Scorching Ray"], 
        spells_fifth: ["Daylight", "Fireball"], spells_seventh: ["Guardian of Faith", "Wall of Fire"],
        spells_ninth: ["Destructive Wave", "Sunbeam"],

        additionalSkills: ["Perception", "Religion"],
        bonusProficiency: [],

        channelDivinity: [ 
            {label: "Radiance of the Dawn", description: "As an action, you present your holy symbol and any "+
                "magical darkness within 30 feet of you is dispelled. Additionally, each hostile creature within "+
                "30 feet of you must make a Constitution saving throw. A creature takes radiant damage equal to 2d10"+
                " + your cleric level on a failed saving throw, and half as much damage on a successful one."}
        ],

        level1Feature: {label: "Warding Flare", description: "When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll. You can use this feature a number of times equal to your Wisdom modifier per long rest."},
        level6Feature: {label: "Improved Flare", description: "You can also use your Warding Flare feature when a creature that you can see within 30 feet of you attacks a creature other than you."},
        level8Feature: {label: "Potent Spellcasting", description: "You can add your Wisdom modifier to the damage you deal with any cleric cantrip."},
        level17Feature: {label: "Corona of Light", description: "As an action, you can activate an aura of sunlight "+
            "that lasts for 1 minute or until you dismiss it using another action. You emit bright light in a 60-foot"+
            " radius and dim light 30 feet beyond that. Your enemies in the bright light have disadvantage on saving "+
            "throws against any spell that deals fire or radiant damage."}
    },
    {label: "Nature", value: '4',
        spells_first: ["Animal Friendship", "Speak with Animals"], spells_third: ["Barkskin", "Spike Growth"], 
        spells_fifth: ["Plant Growth", "Wind Wall"], spells_seventh: ["Dominate Beast", "Grasping Vine"],
        spells_ninth: ["Insect Plague", "Tree Stride"],

        additionalSkills: ["Animal Handling", "Nature", "Survival"], // can choose only one
        bonusProficiency: ["Heavy Armor"], // and additional cantrip

        channelDivinity: [
            {label: "Charm Animals and Plants", description: "As an action, you present your holy symbol and invoke the "+
                "name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom"+
                " saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage."}
        ],
        level1Feature: {label: "Acolyte of Nature", description: "You learn one cantrip of your choice from the druid spell list. This cantrip counts as a cleric cantrip for you, but it doesn’t count against the number of cleric cantrips you know. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival."},
        level6Feature: {label: "Dampen Elements", description: "When you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage."},
        level8Feature: {label: "Divine Strike", description: "Once on each of your turns when you hit a creature with a weapon "+
            "attack, you can cause the attack to deal an extra 1d8 cold, fire, or lightning damage (your choice) to the target. "+
            "When you reach 14th level, the extra damage increases to 2d8."},
        level17Feature: {label: "Master of Nature", description: "You gain the ability to command animals and plant creatures. "+
            "While creatures are charmed by your Charm Animals and Plants feature, you can take a bonus action on your turn to "+ 
            "verbally command what each of those creatures will do on its next turn."}
    },
    {label: "Tempest", value: '5',
        spells_first: ["Fog Cloud", "Thunderwave"], spells_third: ["Gust of Wind", "Shatter"], 
        spells_fifth: ["Call Lightning", "Sleet Storm"], spells_seventh: ["Control Water", "Ice Storm"],
        spells_ninth: ["Destructive Wave", "Insect Plague"],

        additionalSkills: [], // none
        bonusProficiency: ["Martial Weapons", "Heavy Armor"],

        channelDivinity: [
            {label: "Destructive Wrath", description: "When you roll lightning or thunder damage, you can use your Channel Divinity"+
                " to deal maximum damage, instead of rolling."}
        ],
        level1Feature: {label: "Wrath of the Storm", description: "When a creature within 5 feet of you that you can see attacks you with an attack that hits, you can use your reaction to cause the creature to take lightning or thunder damage (your choice) equal to 2d8 + your Wisdom modifier."},
        level6Feature: {label: "Thunderous Strike", description: "When you deal lightning damage to a Large or smaller creature, you can also push it up to 10 feet away from you."},
        level8Feature: {label: "Divine Strike", description: "Once on each of your turns when you hit a creature with a weapon attack, "+
            "you can cause the attack to deal an extra 1d8 thunder damage to the target. When you reach 14th level, the extra damage"+
            " increases to 2d8."},
        level17Feature: {label: "Stormborn", description: "You gain a flying speed equal to your current walking speed whenever you are not underground or indoors."}
    },
    {label: "Trickery", value: '6',
        spells_first: ["Charm Person", "Disguise Self"], spells_third: ["Mirror Image", "Pass without Trace"], 
        spells_fifth: ["Blink", "Dispel Magic"], spells_seventh: ["Dimension Door", "Polymorph"],
        spells_ninth: ["Dominate Person", "Modify Memory"],

        additionalSkills: [], //none
        bonusProficiency: [],

        channelDivinity: [
            {label: "Invoke Duplicity", description: "As an action, you create a perfect illusion of yourself that lasts for 1 minute or"+
                " until you lose your concentration (as if you were concentrating on a spell). The illusion appears in an unoccupied space"+
                " that you can see within 30 feet of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space"+
                " you can see, but it must remain within 120 feet of you. For the duration, you can cast spells as though you were in the "+
                "illusion's space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature"+
                " that can see the illusion, you have advantage on attack rolls against that creature, given how distracting the illusion is to the target."},
            {label: "Cloak of Shadows", description: "You can use your Channel Divinity to become invisible until the end of your next turn. You become "+
                "visible if you attack or cast a spell."}
        ],
        level1Feature: {label: "Blessing of the Trickster", description: "you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again."},
        level6Feature: {label: "Cloak of Shadows", description: "You can use your action to magically become invisible for 1 minute or until you attack or cast a spell. Costs a Channel Divinity."},

        level8Feature: {label: "Divine Strike", description: "Once on each of your turns when you hit a creature with a weapon attack, "+
            " you can cause the attack to deal an extra 1d8 poison damage to the target. When you reach 14th level, the extra damage increases to 2d8."},
        level17Feature: {label: "Improved Duplicity", description: "You can create up to four duplicates of yourself, instead of one, when you use "+
            " Invoke Duplicity. As a bonus action on your turn, you can move any number of them up to 30 feet to a maximum range of 120 feet."}
    },
    {label: "War", value: '7',
        spells_first: ["Divine Favor", "Shield of Faith"], spells_third: ["Magic Weapon", "Spiritual Weapon"], 
        spells_fifth: ["Crusader's Mantle", "Spirit Guardians"], spells_seventh: ["Freedom of Movement", "Stoneskin"],
        spells_ninth: ["Flame Strike", "Hold Monster"],

        additionalSkills: [], //none
        bonusProficiency: ["Martial Weapons", "Heavy Armor"],

        channelDivinity: [
            {label: "Guided Strike", description: "When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."},
            {label: "War God's Blessing", description: "When a creature within 30 feet of you makes an attack roll, you can use your Channel Divinity to grant that creature a +10 bonus to the roll, using your reaction. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."}
        ],
        level1Feature: {label: "War Priest", description: "From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action.\n\nYou can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."},
        level6Feature: {label: "War God's Blessing", description: "When a creature within 30 feet of you makes an attack roll, you can use your Channel Divinity to grant that creature a +10 bonus to the roll, using your reaction. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."},
        level8Feature: {label: "Divine Strike", description: "Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to 2d8."},
        level17Feature: {label: "Avatar of Battle", description: "You gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons."}
    },
    {label: "Forge", value: '8',
        spells_first: ["Identify", "Searing Smite"], spells_third: ["Heat Metal", "Magic Weapon"], 
        spells_fifth: ["Elemental Weapon", "Protection from Energy"], spells_seventh: ["Fabricate", "Wall of Fire"],
        spells_ninth: ["Animate Objects", "Creation"],

        additionalSkills: [],
        bonusProficiency: ["Heavy Armor", "Smith's Tools"],

        channelDivinity: [
            {label: "Artisan's Blessing", description: "You conduct an hour-long ritual that crafts a nonmagical item that must include some metal: a simple or martial weapon, a suit of armor, ten pieces of ammunition, a set of tools, or another metal object (see chapter 5, Equipment, in the Player's Handbook for examples of these items). The creation is completed at the end of the hour, coalescing in an unoccupied space of your choice on a surface within 5 feet of you. The item is visibly magical, radiating dim light out to 5 feet. The object disappears after a number of hours equal to your Wisdom modifier (minimum of 1 hour). You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest."}
        ],
        level1Feature: {label: "Blessing of the Forge", description: "At 1st level, you gain the ability to imbue magic into a weapon or armor. At the end of a long rest, you can touch one nonmagical object that is a suit of armor or a simple or martial weapon. Until the end of your next long rest or until you die, the object becomes a magic item, granting a +1 bonus to AC if it's armor or a +1 bonus to attack and damage rolls if it's a weapon.\n\nOnce you use this feature, you can't use it again until you finish a long rest."},
        level6Feature: {label: "Soul of the Forge", description: "Your mastery of the forge grants you special abilities:\n You gain resistance to fire damage.\n While wearing heavy armor, you gain a +1 bonus to AC."},
        evel8Feature: {label: "Divine Strike", description: "Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 fire damage to the target. When you reach 14th level, the extra damage increases to 2d8."},
        level17Feature: {label: "Saint of Forge and Fire", description: "You gain immunity to fire damage. While wearing heavy armor, you have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks."}
    },
    {label: "Grave", value: '9',
        spells_first: ["Bane", "False Life"], spells_third: ["Gentle Repose", "Ray of Enfeeblement"], 
        spells_fifth: ["Revivify", "Vampiric Touch"], spells_seventh: ["Blight", "Death Ward"],
        spells_ninth: ["Antilife Shell", "Raise Dead"],

        additionalSkills: ["Insight", "Medicine"],
        bonusProficiency: [],

        channelDivinity: [
            {label: "Path to the Grave", description: "As an action, you choose one creature you can see within 30 feet of you, cursing it until the end of your next turn. The next time you or an ally of yours hits the cursed creature with an attack, the creature has vulnerability to all of that attack's damage, and then the curse ends."}
        ],

        level1Feature: [{label: "Circle of Mortality", description: "At 1st level, you gain the ability to occasionally sense the presence of the undead, whose existence is an insult to the natural cycle of life. As an action, you can open your awareness to magically detect undead. Until the end of your next turn, you know the location of any undead within 60 feet of you that isn't behind total cover and that isn't protected from divination magic. This sense doesn't tell you anything about a creature's capabilities or identity.\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest."}, 
            {label: "Eyes of the Grave", description: "you gain the ability to occasionally sense the presence of the undead, whose existence is an insult to the natural cycle of life. As an action, you can open your awareness to magically detect undead. Until the end of your next turn, you know the location of any undead within 60 feet of you that isn't behind total cover and that isn't protected from divination magic. This sense doesn't tell you anything about a creature's capabilities or identity.\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest."}],
        level6Feature: {label: "Sentinel at Death's Door", description: "As a reaction when you or a creature you can see within 30 feet of you suffers a critical hit, you can turn that hit into a normal hit. Any effects triggered by a critical hit are canceled. You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest."},
        level8Feature: {label: "Potent Spellcasting", description: "You can add your Wisdom modifier to the damage you deal with any cleric cantrip."},
        level17Feature: {label: "Keeper of Souls", description: "When an enemy you can see dies within 60 feet of you, you or one creature of your choice that is within 60 feet of you regains hit points equal to the enemy's number of Hit Dice. You can use this feature only if you aren't incapacitated. Once you use it, you can't do so again until the start of your next turn."}
    },
    {label: "Order", value: '10',
        spells_first: ["Command", "Heroism"], spells_third: ["Hold Person", "Zone of Truth"], 
        spells_fifth: ["Mass Healing Word", "Slow"], spells_seventh: ["Compulsion", "Locate Creature"],
        spells_ninth: ["Dominate Person", "Commune"],

        additionalSkills: ["Intimidation", "Persuasion"], // one or the other
        bonusProficiency: ["Heavy Armor"],

        channelDivinity: [
            {label: "Order's Demand", description: "As an action, you present your holy symbol and each creature of your choice that can see or hear you within 30 feet of you must succeed on a Wisdom saving throw or be charmed by you until the end of your next turn or until the charmed creature takes any damage. You can also cause any of the charmed creatures to drop what they are holding when they fail the saving throw."}
        ],

        level1Feature: {label: "Voice of Authority", description: "Starting at 1st level, you can invoke the power of law to embolden an ally to attack. If you cast a spell with a spell slot of 1st level or higher and target an ally with the spell, that ally can use their reaction immediately after the spell to make one weapon attack against a creature of your choice that you can see.\nIf the spell targets more than one ally, you choose the ally who can make the attack."},
        level6Feature: {label: "Order's Demand", description: "You can use your Channel Divinity to exert an intimidating presence over others. Starting at 6th level, you can use your action to issue a divine command. Choose one creature within 30 feet that can see or hear you. The creature must succeed on a Wisdom saving throw or be charmed by you for 1 minute. While charmed, the creature is incapacitated and has a speed of 0. The effect ends if you or your allies do anything harmful to the creature."},

        level8Feature: {label: "Divine Strike", description: "Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 psychic damage to the target. When you reach 14th level, the extra damage increases to 2d8."},
        level17Feature: {label: "Order's Wrath", description: "If you deal your Divine Strike damage to a creature on your turn, you can curse that creature until the start of your next turn. The next time one of your allies hits the cursed creature with an attack, the target also takes 2d8 psychic damage, and the curse ends. You can curse a creature in this way only once per turn."}
    },
    {label: "Peace", value: '11',
        spells_first: ["Heroism", "Sanctuary"], spells_third: ["Aid", "Warding Bond"], 
        spells_fifth: ["Beacon of Hope", "Sending"], spells_seventh: ["Aura of Purity", "Otiluke's Resilient Sphere"],
        spells_ninth: ["Greater Restoration", "Rary's Telepathic Bond"],

        additionalSkills: ["Insight", "Performance", "Persuasion"], // can only pick one. Implement of Peace
        bonusProficiency: [],

        channelDivinity: [
            {label: "Balm of Peace", description: "you can forge an empowering bond among people who are at peace with one another. As an action, you choose a number of willing creatures within 30 feet of you (this can include yourself) equal to your proficiency bonus. You create a magical bond among them for 10 minutes or until you use this feature again. While any bonded creature is within 30 feet of another, the creature can roll a d4 and add the number rolled to an attack roll, an ability check, or a saving throw it makes. Each creature can add the d4 no more than once per turn.\nYou can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."}
        ],
        level1Feature: {label: "Emboldening Peace", description: "At 1st level, you can use your action to grant a creature you can see within 30 feet a shield of divine peace. The target gains temporary hit points equal to 2d8 + your Wisdom modifier. When the target is hit by an attack, it can use its reaction to expend these temporary hit points to reduce the damage by an amount equal to the temporary hit points spent."},
        level6Feature: {label: "Protective Bond", description: "The bond you forge between people helps them protect each other. When a creature affected by your Emboldening Bond feature is about to take damage, a second bonded creature within 30 feet of the first can use its reaction to teleport to an unoccupied space within 5 feet of the first creature. The second creature then takes all the damage instead."},
        // level6Feature: {label: "Emboldening Bond", description: "You can forge an empowering bond among people who are at peace with one another. As an action, you choose a number of willing creatures within 30 feet of you, up to a number of creatures equal to your proficiency bonus. You create a magical bond among them for 10 minutes or until you use this feature again. While any bonded creature is within 30 feet of another, the creature can roll a d4 and add the number rolled to an attack roll, an ability check, or a saving throw it makes. Each creature can add the d4 no more than once per turn. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."},
        level8Feature: {label: "Potent Spellcasting", description: "You can add your Wisdom modifier to the damage you deal with any cleric cantrip."},
        level17Feature: {label: "Expansive Bond", description: "The benefits of your Emboldening Bond and Protective Bond features now work when the creatures are within 60 feet of each other. Moreover, when a creature uses Protective Bond to take someone else's damage, the creature has resistance to that damage."}
    },
    {label: "Twilight", value: '12',
        spells_first: ["Faerie Fire", "Sleep"], spells_third: ["Moonbeam", "See Invisibility"], 
        spells_fifth: ["Aura of Vitality", "Leomund's Tiny Hut"], spells_seventh: ["Aura of Life", "Greater Invisibility"],
        spells_ninth: ["Circle of Power", "Mislead"],

        additionalSkills: [],
        bonusProficiency: ["Martial Weapons", "Heavy Armor"],

        channelDivinity: [
            {label: "Twilight Sanctuary", description: "As an action, you present your holy symbol, and a sphere of twilight emanates from you. The sphere is centered on you, has a 30-foot radius, and is filled with dim light. The sphere moves with you, and it lasts for 1 minute or until you are incapacitated or die. Whenever a creature (including you) ends its turn in the sphere, you can grant that creature one of these benefits: That creature regains hit points equal to 1d6 + your cleric level or You end one effect on it causing it to be charmed or frightened."}
        ],
        level1Feature: [{label: "Eyes of Night", description: "At 1st level, you can see in dim light within 300 feet of you as if it were bright light, and in darkness as if it were dim light. You can also grant this darkvision to up to six willing creatures you can see within 10 feet of you for 1 hour."}, 
            {label: "Vigilant Blessing", description: "The night has taught you to be vigilant. As an action, you give one creature you touch (including possibly yourself) advantage on the next initiative roll the creature makes. This benefit ends immediately after the roll or if you use this feature again."}],
        level6Feature: {label: "Steps of Night", description: "You can draw on the mystical power of night to rise into the air. As a bonus action when you are in dim light or darkness, you can magically give yourself a flying speed equal to your walking speed for 1 minute. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."},
        level8Feature: {label: "Divine Strike", description: "Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8."},
        level17Feature: {label: "Twilight Shroud", description: "The twilight that you create offers a protective embrace: you and your allies have half cover while in the sphere created by your Twilight Sanctuary."}
    }
];

export function awe()
{

}

export const BARD_SUBCLASS = 
[
    {label: "College of Lore", value: '1',
        additionalSkills: [], // any three of your choice
        bonusProficiency: [], //none
        level3Feature: {label: "Cutting Words", description: "When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll. You can choose to use this feature after the creature makes its roll, but before the DM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being charmed."},
        level6Feature: {label: "Additional Magical Secrets:", description: "You learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don't count against the number of bard spells you know."},
        level14Feature: {label: "Peerlees Skill", description: "When you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the DM tells you whether you succeed or fail."}
    },
    {label: "College of Valor", value: '2',
        additionalSkills: [], // none
        bonusProficiency: ["Medium Armor", "Shields", "Martial Weapons"],

        level3Feature: {label: "Combat Inspiration", description: "A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, after seeing the roll but before knowing whether it hits or misses."},
        level6Feature: {label: "Extra Attack"},
        level14Feature: {label: "Battle Magic", description: "When you use your action to cast a bard spell, you can make one weapon attack as a bonus action."}
    },
    {label: "College of Glamour", value: '3',
        additionalSkills: [], //none
        bonusProficiency: [], //none
        level3Feature: [{label: "Mantle of Inspiration", description: "As a bonus action, you can expend one use of your Bardic Inspiration to grant yourself a wondrous appearance. When you do so, choose a number of creatures you can see and who can see you within 60 feet of you, up to a number equal to your Charisma modifier (minimum of one). Each of them gains 5 temporary hit points. When a creature gains these temporary hit points, it can immediately use its reaction to move up to its speed, without provoking opportunity attacks.\n\nThe number of temporary hit points increases when you reach certain levels in this class, increasing to 8 at 5th level, 11 at 10th level, and 14 at 15th level."}, 
            {label: "Entralling Perfromance", description: "If you perform for at least 1 minute, you can attempt to inspire wonder in your audience by singing, reciting a poem, or dancing. At the end of the performance, choose a number of humanoids within 60 feet of you who watched and listened to all of it, up to a number equal to your Charisma modifier (minimum of one). Each target must succeed on a Wisdom saving throw against your spell save DC or be charmed by you. While charmed in this way, the target idolizes you, it speaks glowingly of you to anyone who speaks to it, and it hinders anyone who opposes you, avoiding violence unless it was already inclined to fight on your behalf. This effect ends on a target after 1 hour, if it takes any damage, if you attack it, or if it witnesses you attacking or damaging any of its allies.\n\nIf a target succeeds on its saving throw, the target has no hint that you tried to charm it.\n\nOnce you use this feature, you can't use it again until you finish a short or long rest."}],
        level6Feature: {label: "Mantle of Majesty", description: "At 6th level, you gain the ability to cloak yourself in a fey magic that makes others want to serve you. As a bonus action, you cast Command, without expending a spell slot, and you take on an appearance of unearthly beauty for 1 minute or until your concentration ends (as if you were concentrating on a spell). During this time, you can cast Command as a bonus action on each of your turns, without expending a spell slot.\n\nAny creature charmed by you automatically fails its saving throw against the Command you cast with this feature.\n\nOnce you use this feature, you can’t use it again until you finish a long rest."},
        level14Feature: {label:"Unbreakable Majesty", description: "your appearance permanently gains an otherworldly aspect that makes you look more lovely and fierce.\nIn addition, as a bonus action, you can assume a magically majestic presence for 1 minute or until you are incapacitated. For the duration, whenever any creature tries to attack you for the first time on a turn, the attacker must make a Charisma saving throw against your spell save DC. On a failed save, it can't attack you on this turn, and it must choose a new target for its attack or the attack is wasted. On a successful save, it can attack you on this turn, but it has disadvantage on any saving throw it makes against your spells on your next turn.\nOnce you assume this majestic presence, you can't do so again until you finish a short or long rest."}
    },
    // {label: "College of Swords", value: '4'},
    // {label: "College of Whispers", value: '5'},
    // {label: "College of Creation", value: '6'},
    // {label: "College of Eloquence", value: '7'}
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
