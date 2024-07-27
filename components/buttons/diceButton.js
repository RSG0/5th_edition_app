import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";

export default DiceButton = ({value, onDiceRoll}) =>
{
    function randomDice(maxRange)
    {
        let diceResult = Math.floor(Math.random() * maxRange) + 1
        console.log(diceResult)
        onDiceRoll(diceResult);
        return diceResult;
        
    }
    return(
        <TouchableOpacity style={styles.button} onPress={() => randomDice(value)}>
            <Text style={styles.text}>D{value}</Text>
            
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 50,
        borderRadius: 20,
        borderWidth: 3,
        backgroundColor: COLORS.mainColor,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontWeight: 'bold',
        fontSize: FONTSIZE.xlarge
    },
    buttonLayout:{
        flexDirection: 'row'
    }
})