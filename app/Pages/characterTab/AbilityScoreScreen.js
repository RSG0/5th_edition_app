import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NextButton from '../../../components/buttons/nextButton';
import { COLORS, FONTSIZE } from '../../../constants/theme';
import { Dropdown } from 'react-native-element-dropdown';
import { DRAGONBORN_SUBRACE, ELF_SUBRACE, RACES } from '../../../constants/characterinformation/raceinfo';

import AbilityDropdown from '../../../components/abilityDropdown';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NUMBER_TWENTY } from '../../../constants/characterinformation/characterinfo';

const AbilityScoreScreen = ({ navigation, route }) => {
    const {name, classes, backgrounds, level, selectedRace, selectedSubrace} = route.params;
    const [abilityArray, setAbilityArray] = useState([]);

    const [str, setSTR] = useState(0);
    const [dex, setDEX] = useState(0);
    const [con, setCON] = useState(0);
    const [int, setINT] = useState(0);
    const [wis, setWIS] = useState(0);
    const [cha, setCHA] = useState(0);


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
    const handleAbilityChange = (ability, value) =>
    {
        if (ability === "STR") {setSTR(value)}
        else if (ability === "DEX") {setDEX(value)}
        else if (ability === "CON") {setCON(value)}
        else if (ability === "INT") {setINT(value)}
        else if (ability === "WIS") {setWIS(value)}
        else if (ability === "CHA") {setCHA(value)}
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

    return (
        <SafeAreaView style={styles.viewStyle}>
        <Text>Name: {name}</Text>
        <Text>Class: {classes}</Text>
        <Text>Backgrounds: {backgrounds}</Text>
        <Text>Level: {level}</Text>

        <View style={styles.inputRow}>
            <AbilityDropdown name={"STR"} data={NUMBER_TWENTY} isStandardArray={true} onAbilityPress={handleAbilityChange}></AbilityDropdown>
            <AbilityDropdown name={"DEX"} data={NUMBER_TWENTY} isStandardArray={false} onAbilityPress={handleAbilityChange}></AbilityDropdown>
            <AbilityDropdown name={"CON"} data={NUMBER_TWENTY} isStandardArray={false} onAbilityPress={handleAbilityChange}></AbilityDropdown>
        </View>
        <View style={styles.inputRow}>
            <AbilityDropdown name={"INT"} data={NUMBER_TWENTY} isStandardArray={true} onAbilityPress={handleAbilityChange}></AbilityDropdown>
            <AbilityDropdown name={"WIS"} data={NUMBER_TWENTY} isStandardArray={false} onAbilityPress={handleAbilityChange}></AbilityDropdown>
            <AbilityDropdown name={"CHA"} data={NUMBER_TWENTY} isStandardArray={false} onAbilityPress={handleAbilityChange}></AbilityDropdown>
        </View>
        <Text>Racial Stat Bonus:</Text>
        <Text>{renderRacialBonus()}</Text>


        <NextButton 
            navigation={navigation} 
            params={{classes, backgrounds, name, level, selectedRace, selectedSubrace, int, wis, cha}}
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