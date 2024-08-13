const schools_of_magic = ["abjuration", "conjuration", "divination", "enchantment", "evocation", "illusion", "necromancy", "transmutation"]
// reminder the array starts at 0

export const CANTRIPS =
[
    {name: "Guidance", school: schools_of_magic[2], castingTime: "1 action", range: "touch", components: ["V", "S"], material: null, concentration: true, duration: "1 minute",
        description: "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends."},
    {name: "Light", school: schools_of_magic[3], castingTime: "1 action", range: "touch", components: ["V", "M"], material: "a firefly or phosphorescent moss", concentration: false, duration: "1 hour", 
        description: "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.\nIf you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell."}
]