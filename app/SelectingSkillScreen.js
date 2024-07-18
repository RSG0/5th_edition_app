import { View, StyleSheet, Text, StatusBar, FlatList } from "react-native";
import { COLORS, FONTSIZE } from "../constants/theme";
import { CLASS_SKILLS } from "../constants/characterinformation/characterinfo";

const SelectingSkillsScreen = ({route}) =>
{
    const {name, backgrounds, classes} = route.params;

    const checkForChange = () =>
    {
        return true;
    }

    
    function displayClassSkills(selectedClass) {
        const classSkills = CLASS_SKILLS.find(skill => skill.label === selectedClass);
        if (classSkills) {
            return classSkills.skills.map((skill, index) => (
                <Text key={index}>{skill}, </Text>
            ));
        } else {
            return <Text>No skills available for this class.</Text>;
        }
    }
    

    // const {class_skills} = route.params;
    // const {background_skills} = route.params;
    return (
        <>
        <Text>Name: {name}</Text>
        <Text>Class: {classes}</Text>
        <Text>Backgrounds: {backgrounds}</Text>
        <Text>Class Skills: {displayClassSkills(classes)}</Text>
        <View style={styles.viewStyle}>
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