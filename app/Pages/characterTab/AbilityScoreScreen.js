import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NextButton from '../../../components/buttons/nextButton';
import { COLORS, FONTSIZE } from '../../../constants/theme';
import { Dropdown } from 'react-native-element-dropdown';
import { DRAGONBORN_SUBRACE, ELF_SUBRACE, RACES } from '../../../constants/characterinformation/raceinfo';

import AbilityDropdown from '../../../components/abilityDropdown';
import { SafeAreaView } from 'react-native-safe-area-context';

const AbilityScoreScreen = ({ navigation, route }) => {
    const {name, classes, backgrounds, level, selectedRace, selectedSubrace} = route.params;
    const [abilityArray, setAbilityArray] = useState([]);

    const [str, setSTR] = useState(0);
    const [dex, setDEX] = useState(0);
    const [con, setCON] = useState(0);
    const [int, setINT] = useState(0);
    const [wis, setWIS] = useState(0);
    const [cha, setCHA] = useState(0);

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
            racialStatBonus(selectedRace, selectedSubrace)
            // renderRacialBonus()
        }
    }, [selectedRace, selectedSubrace])

    function renderRacialBonus() {
        const bonuses = [];
        if (str) { bonuses.push(`STR: ${str}`); }
        if (dex) { bonuses.push(`DEX: ${dex}`); }
        if (con) { bonuses.push(`CON: ${con}`); }
        if (int) { bonuses.push(`INT: ${int}`); }
        if (wis) { bonuses.push(`WIS: ${wis}`); }
        if (cha) { bonuses.push(`CHA: ${cha}`); }
        return bonuses.length > 0 ? bonuses.join(', ') : "Need to add in information for this subrace";
    }
    function racialStatBonus(race, subrace)
    {
        console.log(`Selected Race: ${race}, Selected Subrace: ${subrace}`);
        
        const chosenRace = RACES.find(r => r.label === race)
        if (chosenRace)
        {
            displayingModifiers(chosenRace)
        }
        else
        {
            console.error("Race not found", race)
        }


        if (race == "Elf")
        {
            const chosenSubRace = ELF_SUBRACE.find(subr => subr.label === subrace)
            // console.log(chosenSubRace.DEX)
            if (selectedSubrace) {displayingModifiers(chosenSubRace);}
            else { console.error("Subclass not found.", subrace)}
        }
        else if (race == "Dragonborn")
        {
            const chosenSubRace = DRAGONBORN_SUBRACE.find(subr => subr.label === subrace)
            if (selectedSubrace) {displayingModifiers(chosenSubRace);}
            else { console.error("Subclass not found.", subrace)}
        }


        function displayingModifiers(r) {
            console.log(r);
                    
            setSTR((prev) => prev + (r.STR || 0));
            setDEX((prev) => prev + (r.DEX || 0));
            setCON((prev) => prev + (r.CON || 0));
            setINT((prev) => prev + (r.INT || 0));
            setWIS((prev) => prev + (r.WIS || 0));
            setCHA((prev) => prev + (r.CHA || 0));
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
        <Text>{renderRacialBonus()}</Text>


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