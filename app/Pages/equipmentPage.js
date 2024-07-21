import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../constants/theme";
import EquipmentIcon from "../../components/equipmentIcon(Rough)";

export default EquipmentPage = ({navigation}) =>
{
    return(
        <SafeAreaView style={{backgroundColor: COLORS.background, flex:1}}>
            <View style={styles.viewStyle}>
                {/* <Text style={styles.textStyle}>This is the Equipment Screen</Text> */}
                <EquipmentIcon/>
            </View>
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