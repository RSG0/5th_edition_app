import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NextButton from '../../components/buttons/nextButton';
import { COLORS, FONTSIZE } from '../../constants/theme';
import { Dropdown } from 'react-native-element-dropdown';
import { NUMBER_TWENTY, CLASS_SKILLS } from '../../constants/characterinformation/characterinfo';

const AbilityScoreScreen = ({ navigation, route }) => {
    const {name, classes, backgrounds} = route.params;

    const checkForChange = () =>
    {
        return true;
    }

    return (
        <>
        <Text>Name: {name}</Text>
        <Text>Class: {classes}</Text>
        <Text>Backgrounds: {backgrounds}</Text>
        <View style={styles.inputRow}>
        <Text style={styles.labelStyle}>STR:</Text>
            <Dropdown style={styles.dropdownLevel}
            data={NUMBER_TWENTY}
            labelField={"value"}
            valueField={"value"}
            onChange={item => (item)}
            placeholderStyle={styles.placeholderColor}
            placeholder="--"
            maxHeight={200}
            />
        </View>

        <View style={styles.viewStyle}>

            <Text style={styles.textStyle}>This is the Ability Score Screen</Text>
            <NextButton 
            navigation={navigation} 
            params={{classes, backgrounds, name}}
            checkforChange={() => checkForChange}
            nextScreen={"Select Skills"}/>
        </View>
        </>
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
    labelStyle: {
        fontSize: FONTSIZE.xlarge,
        fontWeight: 'bold',
        marginRight: 8,
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
    dropdownLevel: {
        width: 70,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },
}
)
export default AbilityScoreScreen;