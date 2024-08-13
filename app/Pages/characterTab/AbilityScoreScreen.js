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

    const [strBonus, setSTRBonus] = useState(0);
    const [dexBonus, setDEXBonus] = useState(0);
    const [conBonus, setCONBonus] = useState(0);
    const [intBonus, setINTBonus] = useState(0);
    const [wisBonus, setWISBonus] = useState(0);
    const [chaBonus, setCHABonus] = useState(0);

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
        if (strBonus) { bonuses.push(`STR: ${strBonus}`); }
        if (dexBonus) { bonuses.push(`DEX: ${dexBonus}`); }
        if (conBonus) { bonuses.push(`CON: ${conBonus}`); }
        if (intBonus) { bonuses.push(`INT: ${intBonus}`); }
        if (wisBonus) { bonuses.push(`WIS: ${wisBonus}`); }
        if (chaBonus) { bonuses.push(`CHA: ${chaBonus}`); }
        return bonuses.length > 0 ? bonuses.join(', ') : "Need to add in information for this subrace";
    }
    function racialStatBonus(race, subrace)
    {
        console.log(`Selected Race: ${race}, Selected Subrace: ${subrace}`);
        
        const chosenRace = RACES.find(r => r.label === race)
        if (chosenRace)
        {
            calculatingModifiers(chosenRace)
        }
        else
        {
            console.error("Race not found", race)
        }


        if (race == "Elf")
        {
            const chosenSubRace = ELF_SUBRACE.find(subr => subr.label === subrace)
            // console.log(chosenSubRace.DEX)
            if (selectedSubrace) {calculatingModifiers(chosenSubRace);}
            else { console.error("Subclass not found.", subrace)}
        }
        else if (race == "Dragonborn")
        {
            const chosenSubRace = DRAGONBORN_SUBRACE.find(subr => subr.label === subrace)
            if (selectedSubrace) {calculatingModifiers(chosenSubRace);}
            else { console.error("Subclass not found.", subrace)}
        }


        function calculatingModifiers(r) {
            console.log(r);
                    
            setSTRBonus((prev) => prev + (r.STR || 0));
            setDEXBonus((prev) => prev + (r.DEX || 0));
            setCONBonus((prev) => prev + (r.CON || 0));
            setINTBonus((prev) => prev + (r.INT || 0));
            setWISBonus((prev) => prev + (r.WIS || 0));
            setCHABonus((prev) => prev + (r.CHA || 0));
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
        <Text>Level: {level}</Text>

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
            params={{classes, backgrounds, name, level, selectedRace, selectedSubrace}}
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