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
import { ARMOR } from "../../../constants/characterinformation/equipment";

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

    //Occurs on when screen loads up
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

    //Occurs when user navigates away from screen
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
        try
        {
            const updatedMagicItem = customMagicItem.filter((_, i) => i !== index); //_ refers to the current item (gets ingnored)
            setCustomMagicItem(updatedMagicItem);
        }
        catch (e)
        {
            console.log("An error occurred");
            console.log(e);
        }

    };

    useEffect(() => {
        if (name) {
            const newMagicItems = { name, itemType, weaponType, isChargable, numOfCharges, attunement, rarity, description, weight};
            setCustomMagicItem((prevMagicItems) => {
            
                const alreadyExists = prevMagicItems.some((mg) => mg.name === newMagicItems.name)
                return alreadyExists ? prevMagicItems : [...prevMagicItems, newMagicItems] ; 
            })
        }
    }, [name, itemType, weaponType, isChargable, numOfCharges, attunement, rarity, description, weight]);

    const isInitialLoad = useRef(true); //Prevent save on first load


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
                {dropdown("Armor:", setArmorDropdown, armorDropdown, display(MAGICITEMS_ARMOR, "Armor"))}
                {dropdown("Potion:", setPotionDropdown, potionDropdown, display(MAGICITEMS_POTIONS))}
                {dropdown("Rings:", setRingDropdown, ringDropdown, display(MAGICITEMS_RINGS, "Ring") )}
                {dropdown("Rod:", setRodDropdown, rodDropdown, () => display(MAGICITEMS_RODS, "Rod"))}
                {dropdown("Scroll:", setScrollDropdown, scrollDropdown, () => display(MAGICITEMS_SCROLLS, "Scroll"))}
                {dropdown("Staff:", setStaffDropdown, staffDropdown, () => display(MAGICITEMS_STAFFS, "Staff"))}
                {dropdown("Wand:", setWandDropdown, wandDropdown, () => display(MAGICITEMS_WANDS, "Wand"))}
                {dropdown("Weapon:", setWeaponDropdown, weaponDropdown, () => display(MAGICITEMS_WEAPONS, "Weapon"))}
                {dropdown("Wondrous Items:", setWondrousDropdown, wondrousDropdown, display(MAGICITEMS_WONDROUS, "Wondorous Item"))}
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
