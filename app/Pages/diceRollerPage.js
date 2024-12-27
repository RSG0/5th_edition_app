import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import DiceButton from "../../components/buttons/diceButton";
import { useState } from "react";

const {width, height} = Dimensions.get('screen');

export default DiceRoller = () =>
{
    const handleDiceRoll = (diceResult) => // used to bring out diceResult from the diceButton Component
    {
        setSum((prevSum) => prevSum + diceResult);
        setRolls((prevRolls) => [...prevRolls, diceResult])
    }
    const renderRolls = (rolls) =>
    {
        return rolls.join(" + ")
    }
    const [sum, setSum] = useState(0);
    const [rolls, setRolls] = useState([]);

    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        <ScrollView>
        <View style={styles.viewStyle}>
            {/* <Text style={styles.textStyle}>This is the Dice Roller Screen</Text> */}
            <View style={styles.sumBorder}>
                <Text style={{fontSize: 110, fontWeight:'bold'}}>{sum}</Text>
            </View>
            <View style={styles.sumMath}>
                <Text style={styles.mathText}>{renderRolls(rolls)}</Text>



            </View>
        </View>
        <View style={styles.buttonLayout}>
            <DiceButton value={4} onDiceRoll={handleDiceRoll}/>
            <DiceButton value={6} onDiceRoll={handleDiceRoll}/>
            <DiceButton value={8} onDiceRoll={handleDiceRoll}/>
        </View>
        <View style={styles.buttonLayout}>
            <DiceButton value={10} onDiceRoll={handleDiceRoll}/>
            <DiceButton value={12} onDiceRoll={handleDiceRoll}/>
            <DiceButton value={20} onDiceRoll={handleDiceRoll}/>
        </View>
        <View style={styles.buttonLayout}>
            <TouchableOpacity style={styles.clearButton} onPress={() => {setSum(0); setRolls([]) }}><Text style={{fontWeight: 'bold', fontSize: 30}}>Clear</Text></TouchableOpacity>
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
    clearButton: {
        width: width * .25,
        height: height * .05,
        borderRadius: 20,
        borderWidth: 3,
        backgroundColor: COLORS.mainColor,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sumBorder: {
        width: 300,
        height: 161,
        borderRadius: 30,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sumMath: {
        flex: 2,
        width: width * .8,
        // height: 85,
        padding: 10,
        backgroundColor: 'tan',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10
    },
    mathText:{
        width: width * .75,
        justifyContent: 'center',
        alignContent: 'center',
        fontWeight: 'bold',
        fontSize: FONTSIZE.large
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.xxlarge,
        textAlign: 'center'
    },

}
)
