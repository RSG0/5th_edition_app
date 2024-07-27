import { View, StyleSheet, Text, StatusBar, FlatList, TouchableOpacity } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";
import { CLASS_SKILLS, BACKGROUNDS } from "../../constants/characterinformation/characterinfo";

export default SkillsButton = ({skill}) =>
{

 
    return (
        <TouchableOpacity style={styles.button}>
            {console.log(CLASS_SKILLS.skills)}
            <Text>{skill}</Text>
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
        borderRadius: 10
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.xxlarge,
        textAlign: 'center'
    },

}
)
