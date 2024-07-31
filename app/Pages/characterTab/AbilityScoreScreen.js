import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NextButton from '../../../components/buttons/nextButton';
import { COLORS, FONTSIZE } from '../../../constants/theme';
import { Dropdown } from 'react-native-element-dropdown';
import { NUMBER_TWENTY, CLASS_SKILLS } from '../../../constants/characterinformation/characterinfo';
import AbilityDropdown from '../../../components/abilityDropdown';
import { SafeAreaView } from 'react-native-safe-area-context';

const AbilityScoreScreen = ({ navigation, route }) => {
    const {name, classes, backgrounds, level, selectedRace} = route.params;
    const [abilityArray, setAbilityArray] = useState([]);

    const [str, setSTR] = useState(null);
    const [dex, setDEX] = useState(null);
    const [cnt, setCNT] = useState(null);
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

    return (
        <SafeAreaView style={styles.viewStyle}>
        <Text>Name: {name}</Text>
        <Text>Class: {classes}</Text>
        <Text>Backgrounds: {backgrounds}</Text>
        <View style={styles.inputRow}>
            <AbilityDropdown name={"STR"} data={STANDARD_ARRAY} isStandardArray={true}></AbilityDropdown>
            <AbilityDropdown name={"DEX"} data={STANDARD_ARRAY} isStandardArray={false}></AbilityDropdown>
            <AbilityDropdown name={"CNT"} data={STANDARD_ARRAY} isStandardArray={false}></AbilityDropdown>
        </View>
        <View style={styles.inputRow}>
            <AbilityDropdown name={"INT"} data={STANDARD_ARRAY} isStandardArray={true}></AbilityDropdown>
            <AbilityDropdown name={"WIS"} data={STANDARD_ARRAY} isStandardArray={false}></AbilityDropdown>
            <AbilityDropdown name={"CHA"} data={STANDARD_ARRAY} isStandardArray={false}></AbilityDropdown>
        </View>

            {/* <Text style={styles.textStyle}>This is the Ability Score Screen</Text> */}
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