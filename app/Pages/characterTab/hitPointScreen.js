import { View, StyleSheet, Text, ScrollView, TextInput, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONT, FONTSIZE } from "../../../constants/theme";
import { CLASSES } from "../../../constants/characterinformation/characterinfo";
import { averageHitDice, averageMaxHp, translateHitDice, calculateScoreMod, checkPositive } from "../../../constants/characterinformation/math";

export default HitPoint = ({navigation, route}) =>
{
    const {name, classes, backgrounds, level, races, con, int, wis, cha} = route.params; 
    //REMINDER: level IS A STRING

    const selectedClass = CLASSES.find(cls => cls.label === classes)
    const selectedHitDice = selectedClass.hitDice
    let isStandard = true;

    const displayCustomHitDice = ()=>
    {
        if(isStandard === false)
        {
            const numOfHitDice = [];

            for (let i =1; i <= Number(level); i++)
            {
                // console.log("Should be working")
                numOfHitDice.push( 
                <View key={i} style={styles.rowStyle}>
                    <Text style={styles.textStyle}>Level {i}: </Text>
                    <TextInput style={styles.inputStyle} keyboardType="numeric"></TextInput>            
                </View>
                )
            }
            return numOfHitDice;
        }
        else if (isStandard === true)
        {

        }

    }
    const renderButton = (text, type) =>
    {
        return(
            <View>
                <TouchableOpacity style={styles.button} onPress={() => [isStandard = !isStandard, console.log(isStandard)]}>
                    <Text style={styles.buttonText}>{text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        {console.log("The selected class is: " + selectedClass.label)}


        <View style={styles.background}>
            <Text style={styles.title}>Current Hit Dice: {level}{selectedHitDice} </Text>
            <View style={styles.rowStyle}>
            {renderButton("Standard", isStandard)}
            {renderButton("Custom", isStandard)}

        </View>
            {/* <View style={styles.rowStyle}>
                <Text style={styles.textStyle}>Level 1: </Text>
                <TextInput style={styles.inputStyle} keyboardType="numeric"></TextInput>

            </View> */}
            {displayCustomHitDice()}
            <Text style={styles.textStyle}>CON MOD: {checkPositive(calculateScoreMod(con))}</Text>
            <Text style={styles.textStyle}>Max Hp: {averageMaxHp(translateHitDice(selectedHitDice), Number(level), calculateScoreMod(con))}</Text>
            <View style={styles.bottom}></View>

        </View>
        </ScrollView>
        </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create(
{
    background: {
        
        backgroundColor: COLORS.background,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    rowStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },  
    inputStyle: {
        borderRadius: 20,
        textAlign: 'center',
        fontSize: FONTSIZE.xlarge,
        borderWidth: 4,
        width: 92,
        height: 42,
        margin: 5
    },
    title: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize: FONTSIZE.xxlarge,
        textAlign: 'center',
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.xlarge
    },
    button: {
        backgroundColor: COLORS.mainColor,
        borderWidth: 2,
        width: 155,
        height: 44,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 5
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: FONTSIZE.xlarge
    }

}
)
