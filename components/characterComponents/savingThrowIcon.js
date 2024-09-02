import { View, StyleSheet, Text } from "react-native";
import { characterBorderWidth, COLORS, FONTSIZE } from "../../constants/theme";
import { useEffect } from "react";

export default savingThrowIcon = ({abilityName, isProfcient, mod}) =>
{

    //Display Dummy Values 
    const displayAbilityName = abilityName || "CONSTITUTION";
    const displayIsProfcient = isProfcient || true;
    const displayMod = mod || "+N";
    return (
        <View style={[styles.viewStyle, {margin: 10, marginTop: 10}]}>
            <Text style={styles.textStyle} >
                {displayAbilityName}{"\n"} 
            </Text>
            <View style={styles.profcientContainer}>
                {displayIsProfcient && <View style={styles.profcientMark}></View>}
            </View>
            <View style={styles.modifierContainer}>
                <Text style={styles.modifierText}>{displayMod}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create(
{
    viewStyle: {
        width: 180,
        height: 35,
        backgroundColor: COLORS.mainColor,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 40,
        borderWidth: characterBorderWidth    
    },
    textStyle: {
        marginRight: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: FONTSIZE.xsmall,
    },
    profcientContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 15,
        left: -10,
        backgroundColor: COLORS.mainColor,
        borderRadius: 30,
        borderWidth: characterBorderWidth /2
    },
    profcientMark: {
        alignSelf: 'center',
        width: 10,
        height: 7,
        backgroundColor: 'black',
        borderRadius: 30,
    },
    modifierContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center', // Center horizontally
        width: 50,
        height: 45,
        backgroundColor: COLORS.mainColor,
        right: -10,
        borderWidth: characterBorderWidth,
        borderRadius: 50 
    },
    modifierText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: FONTSIZE.medium
    }
});