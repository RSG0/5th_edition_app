import {StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";
import { useState, useEffect } from "react";

export default SkillsButton = ({skill, isSelected, onSkillPress}) =>
{
    const handlePress = () => {
        console.log(`${skill} was pressed`);
        onSkillPress(skill);
    };

    return (
        <TouchableOpacity 
        style={[styles.button, isSelected && styles.buttonPressed]} 
        onPress={handlePress} >
            <Text style={styles.textStyle}>{skill}</Text>
        </TouchableOpacity>
    )
    
}
const styles = StyleSheet.create(
{
    button: {
        backgroundColor: COLORS.mainColor,
        borderWidth: 2,
        width: 155,
        height: 44,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 5
    },
    buttonPressed: {
        backgroundColor: 'gray'
    },
    textStyle: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: FONTSIZE.xlarge,
        textAlign: 'center'
    },

}
)
