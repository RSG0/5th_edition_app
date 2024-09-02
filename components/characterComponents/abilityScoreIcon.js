import { View, StyleSheet, Text, ScrollView } from "react-native";
import { characterBorderWidth, COLORS, FONTSIZE } from "../../constants/theme";

export default AbilityScoreIcon = ({abilityName,score,mod}) =>
{
    //Display Dummy Values 
    const displayAbilityName = abilityName || "STRENGTH";
    const displayScore = score || "NN";
    const displayMod = mod || "+N";

    return (
        <>
        <View style={styles.viewStyle}>
            <Text style={styles.titleTextStyle} >
                {displayAbilityName} {/**Need to lower fontSize for Constiution */}
            </Text>
            <Text style={styles.textStyle}>{displayMod}</Text>
            {/* <Text style={styles.textStyle } >0</Text> */}
            <View style={styles.scoreBorder}>
                <Text style={[styles.textStyle, { marginTop: 0,fontSize: 20}]}>{displayScore}</Text>
            </View>

        </View>
        </>
    );
}
const squareSize = 125

const styles = StyleSheet.create(
{
    viewStyle: {
        margin: 5,
        marginBottom: 20,
        width: squareSize,
        height: squareSize,
        backgroundColor: COLORS.mainColor,
        // justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: characterBorderWidth    
    },
    titleTextStyle: {
        marginTop: 10,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: FONTSIZE.xlarge,
    },
    textStyle: {
        marginTop: 10,
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: FONTSIZE.xxlarge,
    },
    scoreBorder:{
        position: 'absolute',
        bottom:-20,
        // alignSelf: 'center',
        width: 60,
        height: 45,
        // alignItems: 'center',
        justifyContent: 'center',

        fontWeight: 'bold',
        backgroundColor: COLORS.mainColor,
        borderWidth: 4,
        borderRadius: 20
    }
}
)
