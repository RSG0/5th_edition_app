import { View, StyleSheet, Text, Dimensions } from "react-native";
import { characterBorderWidth, COLORS, FONTSIZE } from "../../constants/theme";

export default SensesIcon = ({abilityName, isProfcient, mod}) =>
{
    const displayAbilityName = abilityName || "Passive (NNN): Nvestigation"
    const displayIsProfcient = isProfcient || true
    const displayMod = mod || "2N"

    return (
        <View style={[styles.viewStyle, {margin: 15}]}>
            <Text style={styles.textStyle} >
                {displayAbilityName}{"\n"} 
            </Text>

            <View style={styles.modifierContainer}>
                <Text style={styles.modifierText}>{displayMod}</Text>
            </View>
        </View>
    );
}
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create(
{
    viewStyle: {
        width: width * .8,
        height: height * .05,
        backgroundColor: COLORS.mainColor,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 40,
        borderWidth: characterBorderWidth    
    },
    textStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: FONTSIZE.medium,
    },
    modifierContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center', // Center horizontally
        width: width * .14,
        height: width * .14,
        backgroundColor: COLORS.mainColor,
        left: -20,
        borderWidth: characterBorderWidth,
        borderRadius: 50 
    },
    modifierText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: FONTSIZE.large
    }
});
