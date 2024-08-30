import { View, StyleSheet, Text, ScrollView, TextInput, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONT, FONTSIZE } from "../../../constants/theme";
import { CLASSES } from "../../../constants/characterinformation/characterinfo";
import { averageHitDice, averageMaxHp, translateHitDice, calculateScoreMod, checkPositive } from "../../../constants/characterinformation/math";
import { useState, useEffect } from "react";
import NextButton from "../../../components/buttons/nextButton";

export default HitPoint = ({navigation, route}) =>
{
    const {name, classes, backgrounds, level, selectedRace, con, int, wis, cha} = route.params; 
    //REMINDER: level IS A STRING

    const selectedClass = CLASSES.find(cls => cls.label === classes)
    const selectedHitDice = selectedClass.hitDice
    const conMOD = calculateScoreMod(con);

    const [standard, setStandard] = useState(true)
    const [maxHp, setMaxHp] = useState(0);
    const [customHpInputs, setCustomHpInputs] = useState([]);

    const checkforChange = () =>
    {
        // Need to add functionality and alerts
        return true
    }

    useEffect(() =>
    {
        if (standard) {setMaxHp(averageMaxHp(translateHitDice(selectedHitDice), Number(level), conMOD)) }
        else {
            const totalCustomHp = (customHpInputs.reduce((a, b) => a + parseInt(b || 0), 0))
            setMaxHp( (translateHitDice(selectedHitDice) + parseInt(conMOD)) + ( (totalCustomHp + (parseInt(level-1) * parseInt(conMOD))) ) )
            //Doesn't work past level 1

        }

    },[maxHp, customHpInputs]);
    

    useEffect(() =>
    {
        if (standard) {setMaxHp(averageMaxHp(translateHitDice(selectedHitDice), Number(level), conMOD)) }
        else {
            setMaxHp(0)}
    }, [standard, selectedHitDice, level, con]);

    const handleCustomHpInputChange = (value, index) => {
        const updatedInputs = [...customHpInputs];
        updatedInputs[index] = value;
        setCustomHpInputs(updatedInputs);
    };
    const displayCustomHitDice = ()=>
    {
        if(standard === false)
        {
            const numOfHitDice = [];

            for (let i =2; i <= Number(level); i++)
            {
                // console.log("Should be working")
                numOfHitDice.push( 
                <View key={i} style={styles.rowStyle}>
                    <Text style={styles.textStyle}>Level {i}: </Text>
                    <TextInput style={styles.inputStyle} onChangeText={(value) => handleCustomHpInputChange(value, i-1)} keyboardType="numeric"></TextInput>            

                </View>
                )
            }
            return numOfHitDice;
        }
    }
    const renderButton = (text, type) =>
    {
        return(
            <View>
                <TouchableOpacity style={styles.button} onPress={() => [setStandard(type)]}>
                    <Text style={styles.buttonText}>{text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.background}>
        <Text>Races: {selectedRace}</Text>

            <Text style={styles.title}>Current Hit Dice: {level}{selectedHitDice} </Text>
            <View style={styles.rowStyle}>
            {renderButton("Standard", true)}
            {renderButton("Custom", false)}

        </View>

            <Text style={styles.textStyle}>CON MOD: {checkPositive(conMOD)}</Text>
            {displayCustomHitDice()}
            <Text style={styles.textStyle}>Max Hp: {maxHp}</Text>

            <View style={styles.bottom}></View>
            <NextButton
            navigation={navigation}
            params={{name, classes, backgrounds, level,selectedRace, con, int, wis, cha}}
            checkforChange={() => checkforChange()}
            nextScreen={"Select Equipment"}></NextButton>

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
        justifyContent: 'center',
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
    },
    bottom:{
        marginBottom: 150,
    }

}
)
