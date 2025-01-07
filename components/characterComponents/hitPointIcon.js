import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { characterBorderWidth, COLORS, FONTSIZE } from "../../constants/theme";
export default hitPointIcon = ({currentHP, maxHP}) =>
{
    const handleHP = (hp, mHp) => 
    {
        if (hp == null && mHp == null)
        {
            return "NN/NN"
        }
        else
        {
            return hp + "/" + mHp
        }
    }

    return (
        <View style={styles.viewStyle}>
            {/* <Text style={styles.textStyle} >Hit Dice:{"\n"}{level}{hitDice}</Text> */}
            <Text style={styles.textStyle} >Hit Points:{"\n"}{handleHP(currentHP, maxHP)}</Text>

        </View>
    );
}
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create(
{
    viewStyle: {
        // width: 100,
        // height: 50,
        width: width * .25,
        height: height * .078,
        backgroundColor: COLORS.mainColor,
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: characterBorderWidth    
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.small,
        textAlign: 'center'
    },

}
)
