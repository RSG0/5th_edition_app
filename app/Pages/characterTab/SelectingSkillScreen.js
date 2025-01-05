import { View, StyleSheet, Text, StatusBar, FlatList, TouchableOpacity, ScrollView, Dimensions, Alert} from "react-native";
import { FONTSIZE, COLORS } from "../../../constants/theme";
import { BACKGROUNDS, CLASS_SKILLS } from "../../../constants/characterinformation/characterinfo";
import NextButton from "../../../components/buttons/nextButton";
import SkillsButton from "../../../components/buttons/selectionButton"
import { SafeAreaView } from "react-native-safe-area-context";
import {useState, useEffect } from "react";

const {width, height} = Dimensions.get('screen');

const SelectingSkillsScreen = ({route, navigation}) =>
{
    const {name, backgrounds, classes, level, selectedRace, str, dex, con, int, wis, cha} = route.params;
    const [selectSkills, setSelectSkills] = useState([]);


    // Initialize selectSkills with background skills 
    // useEffect(() => 
    // { 
    //     const backgroundSkills = BACKGROUNDS.find(skill => skill.label === backgrounds); 
    //     if (backgroundSkills) 
    //     { 
    //         console.log("Code is working")
        
    //     } 
    // }, [backgrounds]);

    useEffect(() => {
        const backgroundSkills = BACKGROUNDS.find(skill => skill.label === backgrounds);
        if (backgroundSkills) {
          // Add background skills to the state only once and preserve them
          setSelectSkills(prevSkills => {
            // Ensure background skills are included without duplication
            return [...new Set([...prevSkills, ...backgroundSkills.skillProficiencies])];
          });
        }
      }, [backgrounds]); // This effect runs once when the component mounts
    const checkForChange = () =>
    {
        console.log("ALL SKILLS:", selectSkills)
        if (selectSkills.length !== (checkForSkills(classes) + 2))
        {
            Alert.alert("OOPS", "You need to fill all the information")
            return false;
        }
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
    const handleSkills = (skill, i) =>
    {
        setSelectSkills(prevSkills => { 
        // remove redundant skills that conflict with background
        if (prevSkills.includes(skill))  // if the skill is already selected remove it from the array
        {
            return prevSkills.filter((s) => s !== skill)
        }
        else if (prevSkills.length < (checkForSkills(classes) + 2) ) // if the skill is less than the max than add it to the array
        {
            return  [...prevSkills, skill] 

        }
        else // if the skills selected are more than the max remove the oldest skill in the array
        {
            console.log("More than accepted paramater")
            return [...prevSkills.slice(1), skill]
        }
    })

    }
    function displayClassSkills(selectedClass, selectedBackground) 
    { 
        const classSkills = CLASS_SKILLS.find(skill => skill.label === selectedClass); // finds the chosen class
        const backgroundSkills = BACKGROUNDS.find((skill) => skill.label === selectedBackground); //finds the chosen background
        const filterSkills = classSkills.skills.filter(s => !backgroundSkills.skillProficiencies.includes(s)); //removes all skills that are in BOTH CLASS_SKILLS and backgroundSkills

        // console.log(selectSkills);
        if (filterSkills) { 
            // if the filterSkills array contains something
            console.log("Select Skills:", selectSkills)
            // console.log(filterSkills);
            return filterSkills.map((skill, i) => (
                <SkillsButton 
                    key={i} 
                    name={skill} 
                    disableFixedWidth={true} 
                    isSelected={selectSkills.includes(skill)}     
                    onSelectionPress={() => handleSkills(skill, i)} // Ensure proper callback
                >

                </SkillsButton>
                
            ));
        } else {
            return <Text>No skills available for this class.</Text>;
        }
    }
    function displayBackgroundSkills(selectedBackground) {
        const backgroundSkills = BACKGROUNDS.find(skill => skill.label === selectedBackground);
        if (backgroundSkills) { // if backgroundSkills contain some value than
            return backgroundSkills.skillProficiencies.map((skill, index) => (
                <Text key={index}>{skill}, </Text>
            ));
        } else {
            return <Text>No skills available for this background.</Text>
        }
    }

    return (
        <SafeAreaView style={styles.viewStyle}>
        <View style={styles.viewStyle}>

        <Text>Races: {selectedRace}</Text>
        <Text style={styles.text}>Background Skills: {displayBackgroundSkills(backgrounds)}</Text>
        <Text style={styles.text}>Select {checkForSkills(classes)} Skills: </Text>
        <ScrollView 
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
         >
        {displayClassSkills(classes, backgrounds)}
        {/* <View style={styles.bottomSpacing} /> */}
         </ScrollView>
        <NextButton
            navigation={navigation}
            nextScreen={"Select Subclasses"}
            params={{name, backgrounds, classes, selectedRace, level, str, dex, con, int, wis, cha, selectSkills}}
            checkforChange={() => checkForChange()}/>
        <Text>You've chosen: {skillChosen(selectSkills)} </Text>

        </View>
        </SafeAreaView>
    )
    
}
const styles = StyleSheet.create(
{
    scrollViewContent: {
        padding: 10,
        flexGrow: 1, // Ensure the content can grow and trigger scrolling
        justifyContent: 'flex-start', // Adjust to align items at the top
        alignItems: 'center', // Center the content horizontally
    },
    bottomSpacing: {
        height: height * 0.2, // Add extra spacing at the bottom
    },
    container: {
        // flex: 1,
        flexGrow: 1,
        padding: 10,
        backgroundColor: COLORS.background,
        flexDirection: 'row',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center', // Adjust spacing between items
        alignItems: 'center', // Center align items
        marginBottom: 30
    },
    skillsContainer:{
        flexWrap: 'wrap', // Allow buttons to wrap
        flexDirection: 'row', // Arrange buttons in a row
        justifyContent: 'space-between', // Space out buttons evenly
        marginTop: 20, // Add margin to separate from other elements
    },
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