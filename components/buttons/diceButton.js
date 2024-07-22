import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { COLORS, FONTSIZE } from "../../constants/theme";

export default DiceButton= ({text}) =>
{
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{text}</Text>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 50,
        borderRadius: 20,
        borderWidth: 3,
        backgroundColor: COLORS.mainColor,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontWeight: 'bold',
        fontSize: FONTSIZE.xlarge
    },
    buttonLayout:{
        flexDirection: 'row'
    }
})