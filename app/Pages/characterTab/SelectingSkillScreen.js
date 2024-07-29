import { View, StyleSheet, Text, StatusBar, FlatList } from "react-native";
import { FONTSIZE, COLORS } from "../../../constants/theme";
import { BACKGROUNDS, CLASS_SKILLS } from "../../../constants/characterinformation/characterinfo";
import NextButton from "../../../components/buttons/nextButton";
import SkillsButton from "../../../components/buttons/skillsButton"
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
const SelectingSkillsScreen = ({route}) =>
{
    const {name, backgrounds, classes} = route.params;
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

        console.clear();
        console.log(classSkills.skills)
        console.log(backgroundSkills.skillProficiencies)
        /*
        const arr = [1,2,3,4,5]
        const arr2 = [2,3,4]

        // const filterSkills = arr.filter((s) => s !== arr2) //This won't work, This compares element s with the whole array
        const filterSkills = arr.filter((s) => !arr2.includes(s)) 

        console.log(filterSkills);
        */
        const filterSkills = classSkills.skills.filter(s => !backgroundSkills.skillProficiencies.includes(s))
        console.log(filterSkills);


        if (filterSkills) {
            return filterSkills.map((skill, index) => (
                <SkillsButton key={index} skill={skill}  isSelected={selectSkills.includes(skill)} onSkillPress={handleSkills}></SkillsButton>
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

    // const {class_skills} = route.params;
    // const {background_skills} = route.params;
    return (
        <SafeAreaView style={styles.viewStyle}>
        {/* <Text>Name: {name}</Text>
        <Text>Class: {classes}</Text>
        <Text>Backgrounds: {backgrounds}</Text>
        <Text>Class Skills: {displayClassSkills(classes)}</Text> */}
        <View style={styles.viewStyle}>
        <Text style={styles.text}>Background Skills: {displayBackgroundSkills(backgrounds)}</Text>
        {/* {console.log(checkForChange(classes))} */}
        <Text style={styles.text}>Select {checkForSkills(classes)} Skills: </Text>
        <Text>{(displayClassSkills(classes, backgrounds))} </Text> 
            {/* <Text style={styles.textStyle}>This is the Selecting Skills Screen</Text> */}
        <NextButton/>
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