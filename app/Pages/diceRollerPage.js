import { View, StyleSheet, Text, ScrollView } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import DiceButton from "../../components/buttons/diceButton";

export default DiceRoller = () =>
{
    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        <ScrollView>
        <View style={styles.viewStyle}>
            {/* <Text style={styles.textStyle}>This is the Dice Roller Screen</Text> */}
            <View style={styles.sumBorder}>
                <Text style={{fontSize: 110, fontWeight:'bold'}}>24</Text>
            </View>
            <View style={styles.sumMath}/>
        </View>
        <View style={styles.buttonLayout}>
            <DiceButton text={"D4"}/>
            <DiceButton text={"D6"}/>
            <DiceButton text={"D8"}/>
        </View>
        <View style={styles.buttonLayout}>
            <DiceButton/>
            <DiceButton/>
            <DiceButton/>
        </View>
        </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create(
{
    viewStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    buttonLayout:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    sumBorder: {
        width: 308,
        height: 161,
        borderRadius: 30,
        borderWidth: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sumMath: {
        width: 350,
        height: 78,
        backgroundColor: 'tan',
        borderRadius: 10,
        marginTop: 10
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.xxlarge,
        textAlign: 'center'
    },

}
)
