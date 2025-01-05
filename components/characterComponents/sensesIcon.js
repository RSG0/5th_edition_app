import { View, StyleSheet, Text, Dimensions } from "react-native";
import { characterBorderWidth, COLORS, FONTSIZE } from "../../constants/theme";
import { calculateSkillProf } from "../../constants/characterinformation/math";

export default SensesIcon = ({abilityName, modName, profBonus, score, classes}) =>
{
    const displayAbilityName = abilityName || ": Nvestigation"
    // const displayIsProfcient = isProfcient || true
    const displayMod = score || "2N"
    const senseBonus = calculateSkillProf(abilityName, classes,profBonus, score) 

    return (
        <View style={[styles.viewStyle]}>
            <Text style={styles.textStyle} >
                Passive {modName} : {displayAbilityName}{"\n"} 
            </Text>

            <View style={styles.modifierContainer}>
                <Text style={styles.modifierText}>{senseBonus}</Text>
            </View>
        </View>
    );
}
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create(
{
    viewStyle: {
        marginVertical: height * .03,
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
        borderRadius: width * .5 
    },
    modifierText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: FONTSIZE.large
    }
});
