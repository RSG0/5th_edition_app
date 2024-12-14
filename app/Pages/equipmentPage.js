import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../constants/theme";
import EquipmentIcon from "../../components/equipmentIcon";
import {ARMOR, TOOLS, MARTIAL_MELEE_WEAPONS} from "../../constants/characterinformation/equipment"


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
export default EquipmentPage = ({navigation}) =>
{
    return(
        <SafeAreaView style={{backgroundColor: COLORS.background, flex:1}}>
            <ScrollView>
            {/* {console.log(ARMOR)} */}
            <View style={styles.viewStyle}>
                {/**Armor Section*/}
                <Text style={styles.textStyle}>Armor:</Text>
                {displayArmor()}
                {/* <EquipmentIcon itemName={"Dragon"} type={"Tool"} cost={12} weight={230}/> */}
                {/**Tools Section */}
                <Text style={styles.textStyle}>Tools:</Text>
                {/* <>{displayTools()}</> */}
                {/**Martial Weapons */}
                <Text style={styles.textStyle}>Martial Weapon:</Text>
                {/* <View>{displayMeleeWeapons()}</View> */}
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