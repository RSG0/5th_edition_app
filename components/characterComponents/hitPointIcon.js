import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { characterBorderWidth, COLORS, FONTSIZE } from "../../constants/theme";
export default hitPointIcon = ({level, hitDice}) =>
{
    return (
        <View style={styles.viewStyle}>
            {/* <Text style={styles.textStyle} >Hit Dice:{"\n"}{level}{hitDice}</Text> */}
            <Text style={styles.textStyle} >Hit Points:{"\n"}23/40</Text>

        </View>
    );
}
const styles = StyleSheet.create(
{
    viewStyle: {
        width: 100,
        height: 50,
        backgroundColor: COLORS.mainColor,
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: characterBorderWidth    
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.medium,
        textAlign: 'center'
    },

}
)
