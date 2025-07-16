import { View, Text, TouchableOpacity, StyleSheet,ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MAGICITEMS_ARMOR, MAGICITEMS_POTIONS, MAGICITEMS_RINGS, MAGICITEMS_RODS, MAGICITEMS_SCROLLS, MAGICITEMS_STAFFS, MAGICITEMS_TYPE_WEAPONS, MAGICITEMS_WANDS, MAGICITEMS_WEAPONS, MAGICITEMS_WONDROUS } from "../../../constants/characterinformation/magicitems";
import MagicItemIcon from "../../../components/magicItemIcon";
import NewMagicItemButton from "../../../components/buttons/newPageButton";
import { useState, useEffect, useCallback, useRef } from "react";
import { AntDesign } from '@expo/vector-icons'; // package provides a variety of icons including up and down arrows.
import CustomMagicItemIcon from "../../../components/customMagicItemIcon";
import { useFocusEffect } from "expo-router";

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
    return equipment.map((item, index) => (
        <MagicItemIcon key={index} name={item.name} type={equipmentType} weight={item.weight} attunement={item.attunement} description={item.description} rarity={item.rarity}charges={item.charges} numOfCharges={item.numOfCharges}/>
    ));
}
export default MagicItemPage = ({navigation, route}) =>
{

    const [isLoaded, setIsLoaded] = useState(false);

    const { name, itemType, weaponType, isChargable, numOfCharges, attunement, rarity, description, weight} = route.params || {};
    const isInitialLoad = useRef(true); //Prevent save on first load


    const [armorDropdown, setArmorDropdown] = useState(false)
    const [potionDropdown, setPotionDropdown] = useState(false)
    const [ringDropdown, setRingDropdown] = useState(false)
    const [rodDropdown, setRodDropdown] = useState(false)
    const [scrollDropdown, setScrollDropdown] = useState(false)
    const [staffDropdown, setStaffDropdown] = useState(false)
    const [wandDropdown, setWandDropdown] = useState(false)
    const [weaponDropdown, setWeaponDropdown] = useState(false)
    const [wondrousDropdown, setWondrousDropdown] = useState(false)
    const [customDropdown, setCustomDropdown] = useState(false)


    //Used in tandem with Async Storage
    const [customMagicItem, setCustomMagicItem] = useState([]);

    useEffect(() => {
        console.log("Custom Magic Items: " + customMagicItem)
        load();
    }, []);

    //Occurs when new character is added
    useEffect(() => {
        if (isInitialLoad.current) {
            isInitialLoad.current = false;
            return;
        }
        save();
    }, [customMagicItem]);

    
    useFocusEffect(
        useCallback(() => 
        {
            console.log("Reloading on focus");
            load();
            return () => 
            {
                // console.log("Cleanup on unfocus (optional)");
            };
        }, [])
    );

    const save = async () => {
        try {
            await AsyncStorage.setItem("MagicItem1", JSON.stringify(customMagicItem));
            console.log("Magic-Item saved")
        } catch (err) {
            console.log(err);
        }
    };

    const load = async () => {
        try {
            const magicItemJSON = await AsyncStorage.getItem("MagicItem1");
            if (magicItemJSON) {
                setCharacters(JSON.parse(magicItemJSON));
                console.log("Magic-item loaded");
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoaded(true); 
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
            setCustomMagicItem((prevMagicItems) => {
            
                const alreadyExists = prevMagicItems.some((mg) => mg.name === newMagicItems.name)
                return alreadyExists ? prevMagicItems : [...prevMagicItems, newMagicItems] ; 
            })
        }
    }, [name, itemType, weaponType, isChargable, numOfCharges, attunement, rarity, description, weight]);

    /**
     *     useEffect(() => {
             if (name) {
                 const newCharacter = { name, classes, backgrounds, level, race: selectedRace, str, dex, con, int, wis, cha, selectSkills, subclass, numOfCantrips, numOfLevelSpells, maxHp, selectedEquipments, image };
                 setCharacters((prevCharacters) => {
                     const alreadyExists = prevCharacters.some((c) => c.name === newCharacter.name);
                     return alreadyExists ? prevCharacters : [...prevCharacters, newCharacter];
                 });
             }
         }, [name]);
     */
    return(
        <SafeAreaView style={{backgroundColor: COLORS.background, flex:1}}>
            <ScrollView>
            {/* {console.log(ARMOR)} */}
            <View style={styles.viewStyle}>
                {/**Armor Section*/}
                {dropdown("Armor:", setArmorDropdown, armorDropdown, displayMagicArmor)}
                {dropdown("Potion:", setPotionDropdown, potionDropdown, displayMagicPotions)}
                {dropdown("Rings:", setRingDropdown, ringDropdown, displayMagicRings)}
                {dropdown("Rod:", setRodDropdown, rodDropdown, () => display(MAGICITEMS_RODS, "Rod"))}
                {dropdown("Scroll:", setScrollDropdown, scrollDropdown, () => display(MAGICITEMS_SCROLLS, "Scroll"))}
                {dropdown("Staff:", setStaffDropdown, staffDropdown, () => display(MAGICITEMS_STAFFS, "Staff"))}
                {dropdown("Wand:", setWandDropdown, wandDropdown, () => display(MAGICITEMS_WANDS, "Wand"))}
                {dropdown("Weapon:", setWeaponDropdown, weaponDropdown, () => display(MAGICITEMS_WEAPONS, "Weapon"))}
                {dropdown("Wondrous Items:", setWondrousDropdown, wondrousDropdown, displayWondorousItems)}
                {dropdown("Custom Magic Items", setCustomDropdown, customDropdown, displayCustomItems )}

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
