import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NextButton from '../components/nextButton';
import { COLORS, FONTSIZE } from '../constants/theme';

const AbilityScoreScreen = ({ navigation }) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>This is the Ability Score Screen</Text>
            <NextButton 
            navigation={navigation} 
            nextScreen="Select Skills"/>
        </View>
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
    buttonText:{
        fontWeight: 'bold',
        fontSize: FONTSIZE.medium,
    }, 
}
)
export default AbilityScoreScreen;