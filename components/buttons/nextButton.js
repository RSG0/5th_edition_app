import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { COLORS, FONTSIZE } from '../../constants/theme';

export default NextButton = ({ navigation, nextScreen, params, checkforChange}) => 
{
    // console.log(nextScreen);
    const handlePress = () =>
    {
        if (checkforChange()) // check for change asks if all parameters are needed to move on
        {
        navigation.navigate(nextScreen, params);
        }
    }
    return (
        <TouchableOpacity
            style={styles.button}  onPress={handlePress}
            >
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        backgroundColor: COLORS.mainColor,
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 40,
        borderRadius: 20,
        borderWidth: 2,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.medium,
        color: 'white',
    },
});

