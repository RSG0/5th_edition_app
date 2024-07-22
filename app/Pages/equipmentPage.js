import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../constants/theme";
import EquipmentIcon from "../../components/equipmentIcon";
import {ARMOR} from "../../constants/characterinformation/equipment"


function displayArmor()
{
    return ARMOR.map((armor, index) => (
        <EquipmentIcon key={index} itemName={armor.title} type={"Armor"} cost={armor.cost} weight={armor.weight}> </EquipmentIcon>
    ));
}
export default EquipmentPage = ({navigation}) =>
{
    return(
        <SafeAreaView style={{backgroundColor: COLORS.background, flex:1}}>
            <ScrollView>
            {/* {console.log(ARMOR)} */}
            <View style={styles.viewStyle}>
                <Text>Armor:</Text>
                <Text>{displayArmor()} </Text>
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
        fontWeight: 'bold',
        fontSize: FONTSIZE.xxlarge,
        textAlign: 'center'
    },
    backScreen:{
        width: 333,
        borderRadius: 20,
        backgroundColor: 'gray'
    },

})