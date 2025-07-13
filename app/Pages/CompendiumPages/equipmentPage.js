import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import EquipmentIcon from "../../../components/equipmentIcon";
import { AntDesign } from '@expo/vector-icons'; // package provides a variety of icons including up and down arrows.
import {ARMOR, TOOLS, MARTIAL_MELEE_WEAPONS, MARTIAL_RANGED_WEAPONS, ADVENTURING_GEAR} from "../../../constants/characterinformation/equipment"
import { useState } from "react";
import Seperator from "../../../components/seperator";





const toggleDropdown = (toggle, toggleState) => {
    toggle(!toggleState);
};

function displayArmor() {
    return ARMOR.map((armor, index) => (

        <EquipmentIcon 
        key={`armor-${index}`} // Use armor.id if available, fallback to index
        itemName={armor.title || "Unknown Armor"}
        type={"Armor"}
        cost={armor.cost || "N/A"}
        weight={armor.weight || "0"}
        />
    ));
}
function displayAdventuringGear()
{
    return ADVENTURING_GEAR.map((weapons, index) => (
        <EquipmentIcon key={index} itemName={weapons.title} type={"Melee Weapon"} cost={weapons.cost} weight={weapons.weight}> </EquipmentIcon>
    ));
}
function displayMeleeWeapons()
{
    return MARTIAL_MELEE_WEAPONS.map((weapons, index) => (
        <EquipmentIcon key={index} itemName={weapons.title} type={"Melee Weapon"} cost={weapons.cost} weight={weapons.weight}> </EquipmentIcon>
    ));
}
function displayTools()
{
    return TOOLS.map((tools, index) => (
        <EquipmentIcon key={index} itemName={tools.title} type={"Tools"} cost={tools.cost} weight={tools.weight}> </EquipmentIcon>
    ));
}
function displayRangedWeapons()
{
    return MARTIAL_RANGED_WEAPONS.map((weapons, index) => (
        <EquipmentIcon key={index} itemName={weapons.title} type={"Ranged Weapon"} cost={weapons.cost} weight={weapons.weight}> </EquipmentIcon>
    ));
}
export default EquipmentPage = ({navigation}) =>
{

    const [adventuringGearDropdown, setAdventuringGearDropdown] = useState(false)
    const [armorDropdown, setArmorDropdown] = useState(false)
    const [toolDropdown, setToolDropdown] = useState(false)
    const [martialWeaponDropdown, setMartialWeaponDropdown] = useState(false)
    const [rangedWeaponDropdown, setRangedWeaponDropdown] = useState(false)

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

        
        return(
        <SafeAreaView style={{backgroundColor: COLORS.background, flex:1}}>
            <ScrollView>
            {/* {console.log(ARMOR)} */}
            <View style={styles.viewStyle}>
                {/* <Seperator/> */}
                {dropdown("Adventuring Gear", setAdventuringGearDropdown, adventuringGearDropdown, displayAdventuringGear)}
                {/* <Seperator/> */}
                {dropdown("Armor", setArmorDropdown, armorDropdown, displayArmor)}
                {dropdown("Tools", setToolDropdown, toolDropdown, displayTools)}
                {dropdown("Martial Melee Weapons", setMartialWeaponDropdown, martialWeaponDropdown, displayMeleeWeapons)}
                {dropdown("Martial Ranged Weapons", setRangedWeaponDropdown, rangedWeaponDropdown, displayRangedWeapons)}




            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: COLORS.background,
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textStyle: {
        width: 350,
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