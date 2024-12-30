import { View, Text, TouchableOpacity, StyleSheet,ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from '@expo/vector-icons'; // package provides a variety of icons including up and down arrows.

import MagicItemIcon from "../../../components/magicItemIcon";
import NewMagicItemButton from "../../../components/buttons/newMagicItemButton";
import { useState, useEffect } from "react";
import CustomMagicItemIcon from "../../../components/customMagicItemIcon";
import SpellIconRough from "../../../components/spellIcon(Rough)";
import SpellIcon from "../../../components/spellIcon";
import { CANTRIPS, FIRST_LEVEL_SPELLS } from "../../../constants/characterinformation/spells";

const {width, height} = Dimensions.get('screen');


const toggleDropdown = (toggle, toggleState) => {
    toggle(!toggleState);
};
const dropdown = (text, setState, state, isActive, renderSpells) =>
    {
      if (isActive)
      {
      return(
          <View>
            <View style={[styles.dropdownClosed, {marginBottom: state? 0: 10 }]}>
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
        <SpellIcon key={index} name={spell.name} school={spell.school} range={spell.range} effect={spell.damageDie} damageType={spell.damageType} isVocal={handleComponents(spell.components).isVocal} isSomatic={handleComponents(spell.components).isSomatic} requiresMaterials={handleComponents(spell.components).requiresMaterials} description={spell.description}  />
    ));
}
function displayFirstLevel()
{
    return FIRST_LEVEL_SPELLS.map((spell, index) => 
    (
        <SpellIcon key={index} name={spell.name} school={spell.school} range={spell.range} effect={spell.damageDie} damageType={spell.damageType} isVocal={handleComponents(spell.components).isVocal} isSomatic={handleComponents(spell.components).isSomatic} requiresMaterials={handleComponents(spell.components).requiresMaterials} description={spell.description}  />
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
    const { name, itemType, weaponType, isChargable, numOfCharges, attunement, rarity, description, weight} = route.params || {};
    const [cantripDropdown, setCantripDropdown] = useState(false);
    const [firstLevelDropdown, setFirstLevelDropdown] = useState(false);


    //Used in tandem with Async Storage
    const [customMagicItem, setCustomMagicItem] = useState([]);

    useEffect(() => {
        load();
    }, []);

    useEffect(() => {
        if (customMagicItem.length > 0) {
            save();
        }
    }, [customMagicItem]);

    const save = async () => {
        try {
            await AsyncStorage.setItem("MagicItem1", JSON.stringify(customMagicItem));
        } catch (err) {
            console.log(err);
        }
    };
    const load = async () => {
        try {
            const magicItemJSON = await AsyncStorage.getItem("MagicItem1");
            if (magicItemJSON) {
                setCustomMagicItem(JSON.parse(magicItemJSON));
            }
        } catch (err) {
            console.log(err);
        }
    };


    const removeMagicItem = (index) => {
        const updatedMagicItem = customMagicItem.filter((_, i) => i !== index); //_ refers to the current item (gets ingnored)
        setCustomMagicItem(updatedMagicItem);
    };

    function displayCustomItems(customMagicItems) {
        return customMagicItems.map((item, index) => (
            <CustomMagicItemIcon
                key={index}
                name={item.name}
                type={item.itemType || "Custom Item"}
                weight={item.weight || 0}
                attunement={item.attunement}
                description={item.description || "N/A"}
                rarity={item.rarity}
                charges={item.isChargable}
                numOfCharges={item.numOfCharges}
                removeItem={() => removeMagicItem(index)}
                
            />

        ));

    }

    useEffect(() => {
        if (name) {
            const newMagicItems = { name, itemType, weaponType, isChargable, numOfCharges, attunement, rarity, description, weight};
            setCustomMagicItem((prevMagicItems) => [...prevMagicItems, newMagicItems]);
        }
    }, [name, itemType, weaponType, isChargable, numOfCharges, attunement, rarity, description, weight]);

    return(
        <SafeAreaView style={{backgroundColor: COLORS.background, flex:1}}>
            <ScrollView>
            {/* {console.log(ARMOR)} */}
            <View style={styles.viewStyle}>
                {dropdown("Cantrips", setCantripDropdown, cantripDropdown, true, displayCantrips)}
                {dropdown("1st Level Spells", setFirstLevelDropdown, firstLevelDropdown, true, displayFirstLevel)}

                {/* <SpellIcon name={"Create or Destroy Water Tasha Caustic Brew"} school={"Evocation"} range={"150 feet"} effect={"22d10"} damageType={"Fire"}  isVocal={true} isSomatic={true} description={"radius"} requiresMaterials={true}/> */}

            </View>
            <View style={{margin: height * .25}}/>
            </ScrollView>
            <NewMagicItemButton navigation={navigation} nextScreen={"Create Magic-Item Page"}/>

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
