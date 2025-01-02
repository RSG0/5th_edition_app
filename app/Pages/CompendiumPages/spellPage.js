import { View, Text, TouchableOpacity, StyleSheet,ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from '@expo/vector-icons'; // package provides a variety of icons including up and down arrows.

import MagicItemIcon from "../../../components/magicItemIcon";
import NewMagicItemButton from "../../../components/buttons/newPageButton";
import { useState, useEffect } from "react";
import CustomMagicItemIcon from "../../../components/customMagicItemIcon";
import SpellIcon from "../../../components/spellIcon";
import { CANTRIPS, FIRST_LEVEL_SPELLS, FOURTH_LEVEL_SPELLS, SECOND_LEVEL_SPELLS, THIRD_LEVEL_SPELLS } from "../../../constants/characterinformation/spells";
import { line } from "../../../constants/global";
import CustomSpellIcon from "../../../components/customSpellIcon";

const {width, height} = Dimensions.get('screen');


const toggleDropdown = (toggle, toggleState) => {
    toggle(!toggleState);
};
const dropdown = (text, setState, state, isActive, renderSpells) =>
    {
      if (isActive)
      {
      return(
          <View style={styles.viewStyle}>
            <View style={[{marginBottom: state? 0: 10 }]}>
            <TouchableOpacity onPress={() => toggleDropdown(setState, state)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.textStyle}>{text}</Text>
                <AntDesign name={state ? 'up' : 'down'} size={24} color="black" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
            </View>
  
        {/**This feature is a JSX exclusive */}
      {state && (
          <View style={{ }}>

          {renderSpells()}     
        </View>
      )}
      </View>
      )
      }
      else
      {
        // return(<Text>No Spells Available</Text>)
        //Not needed any more
      }
    }


function displayCantrips()
{
    return CANTRIPS.map((spell, index) => 
    (
        <SpellIcon 
        key={index} name={spell.name} spellLevel={"Cantrip"} usableBy={spell.usableBy} school={spell.school} 
        ritual={spell.ritual} range={spell.range} effect={spell.damageDie} damageType={spell.damageType} materials={spell.material}
        isVocal={handleComponents(spell.components).isVocal} isSomatic={handleComponents(spell.components).isSomatic} concentration={spell.concentration} 
        requiresMaterials={handleComponents(spell.components).requiresMaterials} description={spell.description} castingTime={spell.castingTime} duration={spell.duration}/>
    ));
}
function displayFirstLevel()
{
    return FIRST_LEVEL_SPELLS.map((spell, index) => 
    (
        <SpellIcon 
        key={index} name={spell.name} spellLevel={"1st"} usableBy={spell.usableBy} school={spell.school} 
        ritual={spell.ritual} range={spell.range} effect={spell.damageDie} damageType={spell.damageType} materials={spell.material}
        isVocal={handleComponents(spell.components).isVocal} isSomatic={handleComponents(spell.components).isSomatic} concentration={spell.concentration} 
        requiresMaterials={handleComponents(spell.components).requiresMaterials} description={spell.description} castingTime={spell.castingTime} duration={spell.duration}/>
    ));
}

const handleComponents = (components) => {
    // Determine if the array contains specific characters
    const isVocal = components.includes("V"); // Check if "V" is in the array
    const isSomatic = components.includes("S"); // Check if "S" is in the array
    const requiresMaterials = components.includes("M"); // Check if "M" is in the array

    // Return the values to be used in a component
    return {
        isVocal,
        isSomatic,
        requiresMaterials,
    };
};


export default SpellPage = ({navigation, route}) =>
{
    const { name, spellLevel, school, castingTime, ritual, range, concentration, duration, components, description, effect, material, usableBy, damageType, isVocal, isSomatic, materials} = route.params || {};
    const [cantripDropdown, setCantripDropdown] = useState(false);
    const [firstLevelDropdown, setFirstLevelDropdown] = useState(false);
    const [secondLevelDropdown, setSecondLevelDropdown] = useState(false);
    const [thirdLevelDropdown, setThirdLevelDropdown] = useState(false);
    const [fourthLevelDropdown, setFourthLevelDropdown] = useState(false);


    const [customLevelDropdown, setCustomLevelDropdown] = useState(false);
    
    function displayCustomSpells(customSpell) {
        
        const sortedSpells = customSpell.sort((a, b) => {return a.name.localeCompare(b.name);});
        return sortedSpells.map((item, i) => (
            <CustomSpellIcon
                key={i}
                name={item.name || "DNE Spell Name"}
                school={item.school || "DNE School"}
                range={item.range || "[DNE Range]"}
                effect={item.effect}
                castingTime={item.castingTime || "[DNE action]"}
                damageType={item.damageType || "N/A"}
                ritual={item.ritual || "DNE Ritual"}
                isVocal={item.isVocal || "DNE Vocal"}
                isSomatic={item.isSomatic || "DNE Somatic"}
                description={item.description || "DNE Description"}
                duration={item.duration || "DNE Dur"}
                requiresMaterials={item.requiresMaterials || "[DNE M]"}
                spellLevel={item.spellLevel || "[DNE Lvl]"}
                usableBy={item.usableBy || "[DNE]"}
                concentration={item.concentration || "[DNE CON]"}
                materials={item.material || "[DNE Material Description]"}
                removeSpell={() => removeCustomSpell(i)}/>

        ));

    }
    function displaySpells(spell, spellLevel) {
        
        const sortedSpells = spell.sort((a, b) => {return a.name.localeCompare(b.name);});
        return sortedSpells.map((item, i) => (
            <SpellIcon
                key={i}
                name={item.name || "DNE Spell Name"}
                school={item.school || "DNE School"}
                range={item.range || "[DNE Range]"}
                effect={item.effect}
                castingTime={item.castingTime || "[DNE action]"}
                damageType={item.damageType || "N/A"}
                ritual={item.ritual || "DNE Ritual"}
                isVocal={handleComponents(item.components).isVocal || "DNE Vocal"}
                isSomatic={handleComponents(item.components).isSomatic || "DNE Somatic"}
                description={item.description || "DNE Description"}
                duration={item.duration || "DNE Dur"}
                requiresMaterials={handleComponents(item.components).requiresMaterials || "[DNE M]"}
                spellLevel={spellLevel || "[DNE Lvl]"}
                usableBy={item.usableBy || "[DNE]"}
                concentration={item.concentration || "[DNE CON]"}
                materials={item.material || "[DNE Material Description]"}
                removeSpell={() => removeCustomSpell(i)}/>

        ));

    }

    //Used in tandem with Async Storage
    const [customSpells, setCustomSpells] = useState([]);

    useEffect(() => {
        load();
    }, []);

    useEffect(() => {
        if (customSpells.length > 0) {
            save();
        }
    }, [customSpells]);

    const save = async () => {
        try {
            await AsyncStorage.setItem("Spell1", JSON.stringify(customSpells));
        } catch (err) {
            console.log(err);
        }
    };
    const load = async () => {
        try {
            const spellJSON = await AsyncStorage.getItem("Spell1");
            if (spellJSON) {
                setCustomSpells(JSON.parse(spellJSON));
            }
        } catch (err) {
            console.log(err);
        }
    };


    const removeCustomSpell = (index) => {
        console.log("Trying to delete");
        const updatedSpell = customSpells.filter((_, i) => i !== index); //_ refers to the current item (gets ingnored)
        setCustomSpells(updatedSpell);
    };

    useEffect(() => {
        if (name) {
            const setSpells = { name, spellLevel, school, castingTime, ritual, range, concentration, duration, components, description, effect, material, usableBy, damageType, isVocal, isSomatic, materials};
            //Works, name, school, castingTime, range, duration, material, damageType, isSomatic, isVocal, materials
            //Doesn't work: usableBy, Ritual school

            // console.log("Spe:", spellLevel)
            setCustomSpells((prevMagicItems) => [...prevMagicItems, setSpells]);
        }
    }, [name, spellLevel, school, castingTime, ritual, range, concentration, duration, components, description, effect, material, usableBy, isVocal, isSomatic, materials]);

    return(
        <SafeAreaView style={{backgroundColor: COLORS.background, flex:1}}>
            <ScrollView>
            {/* {console.log(ARMOR)} */}
            <View style={styles.viewStyle}>
                {dropdown("Cantrips", setCantripDropdown, cantripDropdown, true, displayCantrips)}
                {/* {line()}      */}
                {dropdown("1st Level Spells", setFirstLevelDropdown, firstLevelDropdown, true, displayFirstLevel, "1st") }
                {dropdown("2nd Level Spells",setSecondLevelDropdown, secondLevelDropdown, true, () => displaySpells(SECOND_LEVEL_SPELLS, "2nd") )}                
                {dropdown("3rd Level Spells",setThirdLevelDropdown, thirdLevelDropdown, true, () => displaySpells(THIRD_LEVEL_SPELLS, "3rd") )}                
                {dropdown("4th Level Spells",setFourthLevelDropdown, fourthLevelDropdown, true, () => displaySpells(FOURTH_LEVEL_SPELLS , "4th") )}                

                {/* {line()}      */}
                {dropdown("Custom Spells",setCustomLevelDropdown, customLevelDropdown, true, () => displayCustomSpells(customSpells) )}                


            </View>
            <View style={{margin: height * .25}}/>
            </ScrollView>
            <NewMagicItemButton navigation={navigation} nextScreen={"Create Spell Page"}/>

        </SafeAreaView>
    )
}
/**
 * 
 */
const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: COLORS.background,
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textStyle: {
        width: width * .9,
        backgroundColor: '',
        fontWeight: 'bold',
        fontSize: FONTSIZE.xxlarge,
        textAlign: 'left',
        marginBottom: 10
    },
    backScreen:{
        width: 333,
        borderRadius: 20,
        backgroundColor: 'gray'
    },

})
