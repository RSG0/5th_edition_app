import { View, Text, TouchableOpacity, StyleSheet,ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MAGICITEMS_ARMOR, MAGICITEMS_POTIONS, MAGICITEMS_RINGS, MAGICITEMS_WONDROUS } from "../../../constants/characterinformation/magicitems";
import MagicItemIcon from "../../../components/magicItemIcon";
import NewMagicItemButton from "../../../components/buttons/newPageButton";
import { useState, useEffect } from "react";
import { AntDesign } from '@expo/vector-icons'; // package provides a variety of icons including up and down arrows.
import CustomMagicItemIcon from "../../../components/customMagicItemIcon";

const {width, height} = Dimensions.get('screen');

const toggleDropdown = (toggle, toggleState) => {
    toggle(!toggleState);
};

        const dropdown = (text, setState, state, displayItems) =>
        {

          return(
              <View style={styles.viewStyle}>
                <View style={[{marginBottom: state? 0: 10 }]}>
                <TouchableOpacity onPress={() => toggleDropdown(setState, state)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.textStyle}>{text}</Text>
                    <AntDesign name={state ? 'up' : 'down'} size={24} color="black" style={{ marginLeft: 10 }} />
                </TouchableOpacity>
                <Seperator/>


                </View>
      
            {/**This feature is a JSX exclusive */}
          {state && (
              <View style={{ }}>
    
              {displayItems()}     
            </View>
          )}

          </View>
          )

          }


function displayMagicArmor()
{
    return MAGICITEMS_ARMOR.map((armor, index) => (

        <MagicItemIcon key={index} name={armor.name} type={"Armor"} weight={armor.weight} attunement={armor.attunement} description={armor.description} rarity={armor.rarity} charges={armor.charges} numOfCharges={armor.numOfCharges}/>
    ));
}
function displayMagicPotions()
{
    return MAGICITEMS_POTIONS.map((armor, index) => (
        <MagicItemIcon key={index + 1} name={armor.name} type={"Potion"} weight={armor.weight} attunement={armor.attunement} description={armor.description} rarity={armor.rarity} charges={armor.charges} numOfCharges={armor.numOfCharges}/>
    ));
}
function displayMagicRings()
{
    return MAGICITEMS_RINGS.map((armor, index) => (
        <MagicItemIcon key={index} name={armor.name} type={"Ring"} weight={armor.weight} attunement={armor.attunement} description={armor.description} rarity={armor.rarity}charges={armor.charges} numOfCharges={armor.numOfCharges}/>
    ));
}


function displayWondorousItems()
{
    return MAGICITEMS_WONDROUS.map((armor, index) => (
        <MagicItemIcon key={index} name={armor.name} type={"Wondorous Items"} weight={armor.weight} attunement={armor.attunement} description={armor.description} rarity={armor.rarity}charges={armor.charges} numOfCharges={armor.numOfCharges}/>
    ));
}

function display(equipment, equipmentType)
{
    return equipment.map((weapons, index) => (
        <EquipmentIcon key={index} itemName={weapons.title} type={equipmentType} cost={weapons.cost} weight={weapons.weight}> </EquipmentIcon>
    ));
}
export default MagicItemPage = ({navigation, route}) =>
{

    const { name, itemType, weaponType, isChargable, numOfCharges, attunement, rarity, description, weight} = route.params || {};

    const [armorDropdown, setArmorDropdown] = useState(false)
    const [potionDropdown, setPotionDropdown] = useState(false)
    const [ringDropdown, setRingDropdown] = useState(false)
    const [wondrousDropdown, setWondrousDropdown] = useState(false)

    const [customDropdown, setCustomDropdown] = useState(false)


    //Used in tandem with Async Storage
    const [customMagicItem, setCustomMagicItem] = useState([]);

    useEffect(() => {
        console.log("Custom Magic Items: " + customMagicItem)
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
        console.log("Trying to delete")
        const updatedMagicItem = customMagicItem.filter((_, i) => i !== index); //_ refers to the current item (gets ingnored)
        setCustomMagicItem(updatedMagicItem);
    };

    function displayCustomItems() {
        if (!Array.isArray(customMagicItem)) return null;
        const sortedItems = customMagicItem.sort((a, b) => {return a.name.localeCompare(b.name);});
        return sortedItems.map((item, index) => (
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
                {/**Armor Section*/}
                {dropdown("Armor:", setArmorDropdown, armorDropdown, displayMagicArmor)}
                {dropdown("Potion:", setPotionDropdown, potionDropdown, displayMagicPotions)}
                {dropdown("Rings:", setRingDropdown, ringDropdown, displayMagicRings)}
                {dropdown("Wondrous Items:", setWondrousDropdown, wondrousDropdown, displayWondorousItems)}
                {dropdown("Custom Magic Items", setCustomDropdown, customDropdown, displayCustomItems )}
                {drop}
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
        width: "90%",
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
