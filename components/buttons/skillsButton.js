import { View, StyleSheet, Text, StatusBar, FlatList, TouchableOpacity } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";
import { CLASS_SKILLS, BACKGROUNDS } from "../../constants/characterinformation/characterinfo";
import { useState } from "react";

export default SkillsButton = ({skill, onSkillPress}) =>
{

    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
        console.log(`${skill} was pressed`);
        setIsPressed(!isPressed);
        onSkillPress(!isPressed);
    };

    return (
        <TouchableOpacity style={[styles.button, isPressed && styles.buttonPressed]} onPressIn={handlePressIn} >
            {/* {console.log(CLASS_SKILLS.skills)} */}
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