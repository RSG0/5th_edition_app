import { View, StyleSheet, Text } from "react-native";
import { characterBorderWidth, COLORS, FONTSIZE } from "../../constants/theme";

export default SavingThrowIcon = ({name, isProfcient, modBonus}) =>
{
    return (
        <View style={[styles.viewStyle, {marginTop: 20}]}>
            <Text style={styles.textStyle} >
                Passive WIS: (Perception){"\n"} 
            </Text>
            <View style={styles.profcientContainer}>
                <View style={styles.profcientMark}></View>
            </View>
            <View style={styles.modifierContainer}>
                <Text style={styles.modifierText}>13</Text>
            </View>
        </View>
    );
}
const circleSize = 80
const styles = StyleSheet.create(
{
    viewStyle: {
        width: 500,
        height: 50,
        backgroundColor: COLORS.mainColor,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 40,
        borderWidth: characterBorderWidth    
    },
    textStyle: {
        left: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: FONTSIZE.xxlarge,
    },

    modifierContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center', // Center horizontally
        width: circleSize,
        height: circleSize,
        backgroundColor: COLORS.mainColor,
        left: -20,
        borderWidth: characterBorderWidth,
        borderRadius: 50 
    },
    modifierText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: FONTSIZE.xxlarge + 10
    }
});
