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
    const handleSkills = (skillBtnNum) =>
    {
        setSelectSkills(prevSkills => [...prevSkills, skillBtnNum]);
        console.log(selectSkills);

        if (selectSkills.length > checkForSkills(classes))
        {
            setSelectSkills((jsx) => jsx.pop())
            console.log("More than accepted paramater")

        }

    }

    
    function displayClassSkills(selectedClass, selectedBackground) 
    { 
        const classSkills = CLASS_SKILLS.find(skill => skill.label === selectedClass);
        const backgroundSkills = BACKGROUNDS.find((skill) => skill.label === selectedBackground)

        
        if (classSkills) {
            return classSkills.skills.map((skill, index) => (
                <SkillsButton key={index} skill={skill}  numOfSkills={checkForSkills(classes)} onSkillPress={handleSkills}></SkillsButton>
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
        <Text>{(displayClassSkills(classes))} </Text> 
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