import { View, StyleSheet, Text } from "react-native";
import { characterBorderWidth, COLORS, FONTSIZE } from "../../constants/theme";

export default SensesIcon = ({name, isProfcient, modBonus}) =>
{
    return (
        <View style={[styles.viewStyle, {marginTop: 20}]}>
            <Text style={styles.textStyle} >
                STRENGTH{"\n"} 
            </Text>
            <View style={styles.profcientContainer}>
                <View style={styles.profcientMark}></View>
            </View>
            <View style={styles.modifierContainer}>
                <Text style={styles.modifierText}>+3</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create(
{
    viewStyle: {
        width: 400,
        height: 50,
        backgroundColor: COLORS.mainColor,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 40,
        borderWidth: characterBorderWidth    
    },
    textStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: FONTSIZE.xxlarge,
    },
    profcientContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 30,
        left: -20,
        backgroundColor: COLORS.mainColor,
        borderRadius: 30,
        borderWidth: characterBorderWidth
    },
    profcientMark: {
        alignSelf: 'center',
        width: 20,
        height: 15,
        backgroundColor: 'black',
        borderRadius: 30,
    },
    modifierContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center', // Center horizontally
        width: 100,
        height: 70,
        backgroundColor: COLORS.mainColor,
        left: -20,
        borderWidth: characterBorderWidth + 5,
        borderRadius: 50 
    },
    modifierText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: FONTSIZE.xxlarge + 10
    }
});
