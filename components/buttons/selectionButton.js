import {StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";
import { useState, useEffect } from "react";

export default SkillsButton = ({name, isSelected, onSelectionPress, disableFixedWidth}) =>
{
    const handlePress = () => {
        // console.log(`${skill} was pressed`);
        onSelectionPress(name);
    };

    return (
        <TouchableOpacity 
        style={[styles.button, isSelected && styles.buttonPressed, disableFixedWidth && {width: 'auto', paddingHorizontal: 15}]} 
        onPress={handlePress} >
            <Text style={styles.textStyle}>{name}</Text>
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
