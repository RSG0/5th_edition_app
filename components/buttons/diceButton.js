import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";

const {width, height} = Dimensions.get('screen');

export default DiceButton = ({value, onDiceRoll}) =>
{
    function randomDice(maxRange)
    {
        let diceResult = Math.floor(Math.random() * maxRange) + 1
        // console.log(diceResult)
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
        width: width * .25,
        height: height * .08,
        borderRadius: 20,
        borderWidth: 3,
        backgroundColor: COLORS.mainColor,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontWeight: 'bold',
        fontSize: FONTSIZE.large
    },
    buttonLayout:{
        flexDirection: 'row'
    }
})