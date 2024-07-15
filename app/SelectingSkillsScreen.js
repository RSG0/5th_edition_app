import { View, StyleSheet, Text, StatusBar, FlatList } from "react-native";
import { COLORS, FONTSIZE } from "../constants/theme";
import { CLASS_SKILLS } from "../constants/characterinformation/characterinfo";

const SelectingSkillsScreen = ({route}) =>
{
    const {name, backgrounds, classes} = route.params;
    function skillsHandler(item) 
    {
        if (item.label == CLASS_SKILLS.label)
        {
            return(
                <Text>{CLASS_SKILLS.skills}</Text>
            )
        }
    }

    // const {class_skills} = route.params;
    // const {background_skills} = route.params;
    return (
        <>
        <Text>Name: {name}</Text>
        <Text>Class: {classes}</Text>
        <Text>Backgrounds: {backgrounds}</Text>
        <View>{skillsHandler}</View>
        <View style={styles.viewStyle}>
        {/* <FlatList
            data={CLASS_SKILLS}
            renderItem={CLASS_SKILLS}
            /> */}

            <Text style={styles.textStyle}>This is the Selecting Skills Screen</Text>
        </View>
        </>
    )
    
}
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

}
)
export default SelectingSkillsScreen;