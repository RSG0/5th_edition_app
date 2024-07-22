import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../constants/theme";
import EquipmentIcon from "../../components/equipmentIcon";
import {ARMOR, TOOLS, MARTIAL_MELEE_WEAPONS} from "../../constants/characterinformation/equipment"


function displayArmor()
{
    return ARMOR.map((armor, index) => (
        <EquipmentIcon key={index} itemName={armor.title} type={"Armor"} cost={armor.cost} weight={armor.weight}> </EquipmentIcon>
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
                <Text style={styles.textStyle}>Armor:</Text>
                <Text>{displayArmor()} </Text>
                <Text style={styles.textStyle}>Tools:</Text>
                <Text>{displayTools()}</Text>
                <Text style={styles.textStyle}>Martial Weapon:</Text>
                <Text>{displayMeleeWeapons()}</Text>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: COLORS.background,
        display: 'flex',
        justifyContent: 'center',
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