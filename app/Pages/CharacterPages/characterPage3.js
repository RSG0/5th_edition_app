import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import ActionComponent from "../../../components/actionComponent";
import Seperator from "../../../components/seperator";
import NewPageButton from "../../../components/buttons/newPageButton";
import { act, useEffect, useState } from "react";
import { capitalized } from "../../../constants/global";
import { removeIndefinteArticles_and } from "../characterTab/selectEquipmentScreen";
import { MARTIAL_MELEE_WEAPONS, MARTIAL_RANGED_WEAPONS, SIMPLE_MELEE_WEAPONS, SIMPLE_RANGED_WEAPONS } from "../../../constants/characterinformation/equipment";
import { calculateProficiencyBonus, calculateScoreMod, checkPositive } from "../../../constants/characterinformation/math";
import { CANTRIPS, FIRST_LEVEL_SPELLS, FOURTH_LEVEL_SPELLS, SECOND_LEVEL_SPELLS, THIRD_LEVEL_SPELLS } from "../../../constants/characterinformation/spells";



export default characterPage3 = ({navigation, selectedCantrips, selectedSpells, selectedEquipment, route, str, dex, con, int, wis, cha, level}) => 
{
    useEffect((()=>
    {
        if (navigation)
        {
            // console.log("Selected Spells:", selectedSpells)
            // console.log("Navigation:", navigation)
            // console.log("Equipment:", selectedEquipment)
        }
    }),[navigation])
    useEffect(()=>
    {
        console.log("Screen has loaded")
    },[])

    const equipmentInformation = () => {
        return selectedEquipment.map((e) => {
            const cleanedName = capitalized(removeIndefinteArticles_and(e));
            // console.log("Cleaned:", cleanedName);

            let weapon = SIMPLE_MELEE_WEAPONS.find(w => w.title === cleanedName)
                || SIMPLE_RANGED_WEAPONS.find(w => w.title === cleanedName)
                || MARTIAL_MELEE_WEAPONS.find(w => w.title === cleanedName)
                || MARTIAL_RANGED_WEAPONS.find(w => w.title === cleanedName);

            return weapon || null;
        }).filter(Boolean); // Removes null entries
    };
    const spellActionInformation = () =>
    {
        return selectedSpells.map((e) => {
            const spellName = (e.name);

            let spell = CANTRIPS.find(w => (w.name === spellName) && (w.castingTime === "1 action")) 
                || FIRST_LEVEL_SPELLS.find(w => (w.name === spellName) && (w.castingTime === "1 action"))
                || SECOND_LEVEL_SPELLS.find(w => w.name === spellName && (w.castingTime === "1 action"))
                || THIRD_LEVEL_SPELLS.find(w => w.name === spellName && (w.castingTime === "1 action"))
                || FOURTH_LEVEL_SPELLS.find(w => w.name === spellName && (w.castingTime === "1 action"));
                // Need to add more levels of spells here
            if (!spell || spell === null )
            {
                console.error("SPELL HAS ERROR")
            }
            return spell || null;
        }).filter(Boolean); // Removes null entries
    }
    const spellBonusActionInformation = () =>
    {
        return selectedSpells.map((e) => {
            const spellName = (e.name);

            let spell = CANTRIPS.find(w => (w.name === spellName) && (w.castingTime === "1 action")) 
                || FIRST_LEVEL_SPELLS.find(w => (w.name === spellName) && (w.castingTime === "1 bonus action"))
                || SECOND_LEVEL_SPELLS.find(w => w.name === spellName && (w.castingTime === "1 bonus action"))
                || THIRD_LEVEL_SPELLS.find(w => w.name === spellName && (w.castingTime === "1 bonus action"))
                || FOURTH_LEVEL_SPELLS.find(w => w.name === spellName && (w.castingTime === "1 bonus action"));
                // Need to add more levels of spells here
            if (spell === null )
            {
                console.error("BONUS ACTION SPELL HAS ERROR")
            }
            return spell || null;
        }).filter(Boolean); // Removes null entries
    }
    const spellInformation =(action) =>
    {
        return selectedSpells.map((e) => {
            const spellName = (e.name);

            let spell = CANTRIPS.find(w => (w.name === spellName) && (w.castingTime === action)) 
                || FIRST_LEVEL_SPELLS.find(w => (w.name === spellName) && (w.castingTime === action))
                || SECOND_LEVEL_SPELLS.find(w => w.name === spellName && (w.castingTime === action))
                || THIRD_LEVEL_SPELLS.find(w => w.name === spellName && (w.castingTime === action))
                || FOURTH_LEVEL_SPELLS.find(w => w.name === spellName && (w.castingTime === action));
                // Need to add more levels of spells here
            if (spell === null )
            {
                console.error("BONUS ACTION SPELL HAS ERROR")
            }
            return spell || null;
        }).filter(Boolean); // Removes null entries
    }
    const spellReactionInformation = () =>
    {
        return selectedSpells.map((e) => {
            const spellName = (e.name);

            let spell = CANTRIPS.find(w => (w.name === spellName) && (w.castingTime === "1 action")) 
                || FIRST_LEVEL_SPELLS.find(w => (w.name === spellName) && (w.castingTime === "1 reaction"))
                || SECOND_LEVEL_SPELLS.find(w => w.name === spellName && (w.castingTime === "1 reaction"))
                || THIRD_LEVEL_SPELLS.find(w => w.name === spellName && (w.castingTime === "1 reaction"))
                || FOURTH_LEVEL_SPELLS.find(w => w.name === spellName && (w.castingTime === "1 reaction"));
                // Need to add more levels of spells here
            if (spell === null )
            {
                console.error("REACTION SPELL HAS ERROR")
            }
            return spell || null;
        }).filter(Boolean); // Removes null entries
    }
    const checkStrOrDex = (e) => 
    {
        const cleanedName = capitalized(removeIndefinteArticles_and(e));
        let mod

        if (SIMPLE_MELEE_WEAPONS.find(w => w.title === cleanedName) ||
        MARTIAL_MELEE_WEAPONS.find(w => w.title === cleanedName))
        {
            mod = "STR";
        }
        else
        {
            mod = "DEX";
        }
        
        if (mod == "STR")
        {
            return checkPositive(calculateProficiencyBonus(level) + calculateScoreMod(str));
        }
        else if (mod == "DEX")
        {
            return checkPositive(calculateProficiencyBonus(level) + calculateScoreMod(dex));
        }
        else
        {
            return -1; //Haven't gotten to this point yet
        }
    }

const organizeActions = () => {
    const spells = spellActionInformation();
    const equipment = equipmentInformation();

    // Combine both arrays
    const actions = [...spells, ...equipment];

    // Sort alphabetically by title (for weapons) or name (for spells)
    const sortedActions = actions.sort((a, b) => {
        const aName = a.title || a.name;
        const bName = b.title || b.name;
        return aName.localeCompare(bName);
    });

    console.log("Sorted Actions:", spells.map(s => s.name));

    return sortedActions;
};

    const checkMeleeOrRanged = (e) =>
    {
        const cleanedName = capitalized(removeIndefinteArticles_and(e));

        if (SIMPLE_MELEE_WEAPONS.find(w => w.title === cleanedName) ||
        MARTIAL_MELEE_WEAPONS.find(w => w.title === cleanedName))
        {
            return "Melee Weapon";
        }
        else
        {
            return "Ranged Weapon";
        }
    }
    const checkRange = (e) => {
        const cleanedName = capitalized(removeIndefinteArticles_and(e));

        const weapon = SIMPLE_MELEE_WEAPONS.find(w =>
            w.title === cleanedName && !w.properties.includes("Reach")
        ) || MARTIAL_MELEE_WEAPONS.find(w =>
            w.title === cleanedName && !w.properties.includes("Reach")
        );

        if (weapon) {
            return "5." // 5 feet reach
        }

        return null; // or something else if you want to handle ranged/melee differently
    };

    const displayActions = () => {
        return organizeActions().map((act, index) => (
            <ActionComponent
                key={index}
                name={capitalized(removeIndefinteArticles_and(act.title || act.name))}
                description={act.description}
                effectDie={act.damageDie}
                damageType={act.damageType}
                damageMod={checkStrOrDex(act.title || act.name)}
                type={checkMeleeOrRanged(act.title || act.name)}
                range={checkRange(act.title || act.name)}

            />
        ));
    };

    const displayBonusActions = () => {
        return spellInformation("1 bonus action").map((act, index) => (
            <ActionComponent
                key={index}
                name={capitalized(removeIndefinteArticles_and(act.title || act.name))}
                description={act.description}
                effectDie={act.damageDie}
                damageType={act.damageType}
                damageMod={checkStrOrDex(act.title || act.name)}
                type={checkMeleeOrRanged(act.title || act.name)}
                range={checkRange(act.title || act.name)}

            />
        ));
    };

        const displayReaction = () => {
        return spellInformation("1 reaction").map((act, index) => (
            <ActionComponent
                key={index}
                name={capitalized(removeIndefinteArticles_and(act.title || act.name))}
                description={act.description}
                effectDie={act.damageDie}
                damageType={act.damageType}
                damageMod={checkStrOrDex(act.title || act.name)}
                type={checkMeleeOrRanged(act.title || act.name)}
                range={checkRange(act.title || act.name)}

            />
        ));
    };

    const [actionIcons, setActionIcons] = useState([])
    const [bonusActionIcons, setBonusActionIcons] = useState([])
    const [reactionIcons, setReactionIcons] = useState([])

    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        <ScrollView>
        <View style={styles.grayBackground}>
            {/* {console.log("Selected: ")}
            {console.log("Cantrips:", selectedCantrips)} */}
            <Text style={styles.textStyle}> <Text style={{fontWeight: 'bold'}}>ACTIONS</Text> - Attacks Per Action: 1</Text>
            <Seperator/>

            <View style={{alignItems: 'center', alignItems: 'center'}}> 
            {/* {organizeActions()} */}
            {displayActions()}
            </View>
            <Text style={[styles.textStyle, {fontWeight: 'bold'}]}> BONUS ACTIONS - </Text>
            <Seperator/>

            <View style={{alignItems: 'center'}}> 
            {displayBonusActions()}
            </View>
            <Text style={[styles.textStyle, {fontWeight: 'bold'}]}> REACTIONS - </Text>
            <Seperator/>
            <View style={{alignItems: 'center'}}> 
            {displayReaction()}
            </View>
        </View>
        <View style={{marginVertical: 100}} />
        </ScrollView>
        <NewPageButton navigation={navigation} nextScreen={"New Action Page"} params={{selectedCantrips, selectedSpells, selectedEquipment}}/>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create(
{
    grayBackground: {
        borderRadius: 10,
        margin: 20,
        // paddingVertical: 10,
        backgroundColor: COLORS.grayBackground,
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        flex: 1
    },
    textStyle: {
        marginTop: 10,
        marginLeft: 10,

        // fontWeight: 'bold',
        fontSize: FONTSIZE.large,
        // textAlign: 'center'
    },

}
)
