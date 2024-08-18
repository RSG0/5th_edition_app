import { View, StyleSheet, Text, StatusBar, FlatList, } from "react-native";
import { FONTSIZE, COLORS } from "../../../constants/theme";
import { BACKGROUNDS, CLASS_SKILLS } from "../../../constants/characterinformation/characterinfo";
import NextButton from "../../../components/buttons/nextButton";
import SkillsButton from "../../../components/buttons/selectionButton"
import { SafeAreaView } from "react-native-safe-area-context";
import {useState } from "react";
const SelectingSkillsScreen = ({route, navigation}) =>
{
    const {name, backgrounds, classes, level, con, int, wis, cha} = route.params;
    const [selectSkills, setSelectSkills] = useState([]);

    const checkForChange = () =>
    {
        return true;
    }
    function checkForSkills(classes)
    {
        if (classes == "Bard") return 3; // Bard get access to 3 skills
        else return 2; // everyone else gets 2
    }
    function skillChosen(skills)
    {
        if (skills.length == 1) return skills
        else if (skills.length >= 2)
        {
            const combinedSkills = skills.join(", ")
            return combinedSkills
        }
    }
    const handleSkills = (skill) =>
    {
        setSelectSkills(prevSkills => { 
        // remove redundant skills that conflict with background
        if (prevSkills.includes(skill))  // if the skill is already included remove it from the array
        {
            return prevSkills.filter((s) => s !== skill)
        }
        else if (prevSkills.length < checkForSkills(classes)) // if the skill is less than the add it to the array
        {
            return  [...prevSkills, skill] 

        }
        else
        {
            console.log("More than accepted paramater")
            return [...prevSkills.slice(1), skill]
        }
    })

    }
    function displayClassSkills(selectedClass, selectedBackground) 
    { 
        const classSkills = CLASS_SKILLS.find(skill => skill.label === selectedClass);
        const backgroundSkills = BACKGROUNDS.find((skill) => skill.label === selectedBackground)
        const filterSkills = classSkills.skills.filter(s => !backgroundSkills.skillProficiencies.includes(s))

        if (filterSkills) {
            return filterSkills.map((skill, index) => (
                <SkillsButton key={index} name={skill} disableFixedWidth={false} isSelected={selectSkills.includes(skill)} onSelectionPress={handleSkills}></SkillsButton>
            ));
        } else {
            return <Text>No skills available for this class.</Text>;
        }
    }
    function displayBackgroundSkills(selectedBackground) {
        const backgroundSkills = BACKGROUNDS.find(skill => skill.label === selectedBackground);
        if (backgroundSkills) {
            return backgroundSkills.skillProficiencies.map((skill, index) => (
                <Text key={index}>{skill}, </Text>
            ));
        } else {
            return <Text>No skills available for this background.</Text>;
        }
    }

    return (
        <SafeAreaView style={styles.viewStyle}>
        <View style={styles.viewStyle}>
        <Text style={styles.text}>Background Skills: {displayBackgroundSkills(backgrounds)}</Text>
        {/* {console.log(checkForChange(classes))} */}
        <Text style={styles.text}>Select {checkForSkills(classes)} Skills: </Text>
        <Text>{(displayClassSkills(classes, backgrounds))} </Text> 
            {/* <Text style={styles.textStyle}>This is the Selecting Skills Screen</Text> */}
        <NextButton
            navigation={navigation}
            nextScreen={"Select Subclasses"}
            params={{name, backgrounds, classes, level, con, int, wis, cha}}
            checkforChange={() => checkForChange}/>
        <Text>You've chosen: {skillChosen(selectSkills)} </Text>
        </View>
        </SafeAreaView>
    )
    
}
const styles = StyleSheet.create(
{
    viewStyle: {
        backgroundColor: COLORS.background,
        // display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.xxlarge,
        textAlign: 'center'
    },
    text: {
        margin: 10,
        fontSize: FONTSIZE.xlarge,
        fontWeight: 'bold'
    }

}
)
export default SelectingSkillsScreen;