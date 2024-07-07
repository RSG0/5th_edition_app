import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS, FONTSIZE } from '../constants/theme';

export default NextButton = ({ navigation, nextScreen}) => 
{
    console.log(nextScreen);
    const handlePress = () =>
    {
        navigation.navigate(nextScreen);
    }
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={handlePress}>
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

