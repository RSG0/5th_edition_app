import {StyleSheet, Text, TouchableOpacity, Dimensions, View} from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";
import { useState, useEffect } from "react";

export default SelectionButton = ({name, isSelected, onSelectionPress, disableFixedWidth}) =>
{
    const handlePress = () => {
        // console.log(`${skill} was pressed`);
        onSelectionPress(name);
    };

    return (
        <TouchableOpacity 
        style={[styles.button, isSelected && styles.buttonPressed, disableFixedWidth]} 
        onPress={handlePress} >
            <Text style={styles.textStyle}>{name}</Text>
        </TouchableOpacity>
    )
    
}
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create(
{
    button: {
        backgroundColor: COLORS.mainColor,
        borderWidth: 2,
        minWidth: width * .5, 
        // height: height *.05,
        // maxWidth: width * .9,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: width * .02,
        marginVertical: height * .01,


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
    disableFixedWidth: {
        width: 'auto',
        paddingHorizontal: 15,
        marginHorizontal: width * 0.0, // Explicitly add margins for this case
        marginVertical: height * 0.01,
    }

}
)