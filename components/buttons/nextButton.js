import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert, Dimensions } from 'react-native';
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
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    button: {
        width: width * .3,
        height: height * .08,
        marginTop: "5%",
        backgroundColor: COLORS.mainColor,
        alignItems: 'center',
        padding: "2.5%",
        paddingHorizontal: "7.5%",
        borderRadius: 20,
        borderWidth: 2,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.medium,
        color: 'white',
    },
});

