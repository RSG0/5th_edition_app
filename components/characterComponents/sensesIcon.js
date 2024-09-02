import { View, StyleSheet, Text } from "react-native";
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

const styles = StyleSheet.create(
{
    viewStyle: {
        width: 300,
        height: 30,
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
        width: 50,
        height: 50,
        backgroundColor: COLORS.mainColor,
        left: -20,
        borderWidth: characterBorderWidth,
        borderRadius: 50 
    },
    modifierText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: FONTSIZE.xlarge
    }
});
