import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NextButton from '../../../components/buttons/nextButton';
import { COLORS, FONTSIZE } from '../../../constants/theme';
import { Dropdown } from 'react-native-element-dropdown';
import { ELF_SUBRACE } from '../../../constants/characterinformation/raceinfo';

import AbilityDropdown from '../../../components/abilityDropdown';
import { SafeAreaView } from 'react-native-safe-area-context';

const AbilityScoreScreen = ({ navigation, route }) => {
    const {name, classes, backgrounds, level, selectedRace, selectedSubrace} = route.params;
    const [abilityArray, setAbilityArray] = useState([]);

    const [str, setSTR] = useState(null);
    const [dex, setDEX] = useState(null);
    const [con, setCON] = useState(null);
    const [int, setINT] = useState(null);
    const [wis, setWIS] = useState(null);
    const [cha, setCHA] = useState(null);

    const STANDARD_ARRAY = [15,14,13,12,10,8].map(num => ({value: num.toString()}) ) // blue parentheses are needed to return an object

    const handleStandardArray = (ability) =>
    {

    }
    // console.log(NUMBER_TWENTY)
    // console.log(STANDARD_ARRAY)
    const checkForChange = () =>
    {
        return true;
    }
    useEffect(() => {
        if (selectedSubrace)
        {
            racialStatBonus(selectedRace)
            renderRacialBonus()
        }
    }, [selectedRace, selectedSubrace])

    function renderRacialBonus()
    {
        console.log("Beginning");
        if (str !== null) {console.log("STR: " + str)}
        if (dex !== null) {console.log("DEX: " + dex)}
        if (con !== null) {console.log("CON: " + con)}
        if (int !== null) {console.log("INT: " + int)}
        if (wis !== null) {console.log("WIS: " + wis)}
        if (cha !== null) {console.log("CHA: " + cha)}

    }
    function racialStatBonus(race)
    {
        // console.log(race)
        if (race == "Elf")
        {
            const chosenSubRace = ELF_SUBRACE.find(subrace => subrace.label === selectedSubrace)
            // console.log(chosenSubRace.DEX)
            if (selectedSubrace == "Drow")
            {
                displayingModifiers(chosenSubRace);
            }
        }

        function displayingModifiers(race) {
            console.log(race);
            if (race.STR !== null) {
                // console.log("Is this triggered")
                setSTR((prevSTR) => prevSTR + race.STR);
            }
            if (race.DEX !== null) {
                // console.log("Is this triggered")
                setDEX(race.DEX);
            }
            if (race.CON !== null) {
                setCON(race.CON);
            }
            if (race.INT !== null) {
                setINT((prev) => prev + race.INT);
            }
            if (race.WIS !== null) {
                setWIS((prev) => prev + race.WIS);
            }
            if (race.CHA !== null) {
                setCHA((prev) => prev + race.CHA);
            }
        }
    }

    // if (selectedRace) // happens at the beginning of the page causes a continuous loop
    // {
    //     console.log("Race has been selected")
    //     console.log(selectedSubrace)
    //     racialStatBonus(selectedRace);
    // }
    return (
        <SafeAreaView style={styles.viewStyle}>
        <Text>Name: {name}</Text>
        <Text>Class: {classes}</Text>
        <Text>Backgrounds: {backgrounds}</Text>

        <View style={styles.inputRow}>
            <AbilityDropdown name={"STR"} data={STANDARD_ARRAY} isStandardArray={true}></AbilityDropdown>
            <AbilityDropdown name={"DEX"} data={STANDARD_ARRAY} isStandardArray={false}></AbilityDropdown>
            <AbilityDropdown name={"CON"} data={STANDARD_ARRAY} isStandardArray={false}></AbilityDropdown>
        </View>
        <View style={styles.inputRow}>
            <AbilityDropdown name={"INT"} data={STANDARD_ARRAY} isStandardArray={true}></AbilityDropdown>
            <AbilityDropdown name={"WIS"} data={STANDARD_ARRAY} isStandardArray={false}></AbilityDropdown>
            <AbilityDropdown name={"CHA"} data={STANDARD_ARRAY} isStandardArray={false}></AbilityDropdown>
        </View>
        {/* {console.log(dex)} */}
        <Text>Racial Stat Bonus:</Text>


            <NextButton 
            navigation={navigation} 
            params={{classes, backgrounds, name}}
            checkforChange={() => checkForChange()}

            nextScreen={"Select Skills"}/>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create(
{
    viewStyle: {
        backgroundColor: COLORS.background,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.xxlarge,
        textAlign: 'center'
    },
    button:{
        marginTop: 20,
        backgroundColor: COLORS.mainColor,
        alignItems: 'center',
        padding: 5,
        paddingHorizontal: 40,
        borderRadius: 20,
        borderWidth: 2
    },
    inputRow: {
        backgroundColor: COLORS.background,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',   
        padding: 12,
    },
    buttonText:{
        fontWeight: 'bold',
        fontSize: FONTSIZE.medium,
    }, 
}
)
export default AbilityScoreScreen;