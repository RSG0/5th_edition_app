import { View, StyleSheet, Text, StatusBar } from "react-native";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dropdown } from "react-native-element-dropdown";
import { BARD_SUBCLASS, BARBARIAN_SUBCLASS, CLERIC_SUBCLASS } from "../../../constants/characterinformation/subclassinfo";
import { useEffect, useState } from "react";
import NextButton from "../../../components/buttons/nextButton";

export default SubclassesPage = ({navigation, route}) =>
{
    const {name, classes, backgrounds, level, races, con, int, wis, cha} = route.params;
    const [subclass, setSubclass] = useState(null);
    const [subclassSpells, setSubclassSpells] = useState(null);
    const [subclassFeatures, setSubclassFeatures] = useState(null);
    const [subclassOptions, setSubclassOptions] = useState([]);

    useEffect(() => // triggered whenever classes get changed
    {
        if (classes)
        {
            // console.log("SO FAR SO GOOD") unndeed now
            handleSubclassChange(classes)
        }
    }, [classes])
    useEffect (() => // triggered whenever subclasses get changed
    {
        if (subclass)
        {
            // subclassOptions is used as an array 
            // used to subsitute for all the subraces
            const selectedSubclass = subclassOptions.find(option => option.label === subclass)
            // if the user has selected a subclass calculate the spells they should be given (if any)
            if (selectedSubclass)
            {
                calculatingSpells(selectedSubclass);
                renderFeatures(selectedSubclass)
            }
        }
    }, [subclass])

    function handleSubclassChange()
        {
            setSubclass(null);
            let options = []
            if (classes == "Cleric")
            {
                options = CLERIC_SUBCLASS
                console.log("This should be a Cleric")            
            }
            else if (classes == "Bard")
            {
                options = BARD_SUBCLASS
            }
            else if (classes == "Barbarian")
            {
               options = (BARBARIAN_SUBCLASS)
            }
            else
            {
                console.log("User has selected an invalid options")
            }
            // set their classes subclass options to what the user has selected
            setSubclassOptions(options) 
        }
    function checkForChange(parameters)
    {
        // need to include infromation that requires the user to enter subclass to move on
        return true;
    }
    function handleSpells(sp)
    {
        if (!sp) { return "No spells given"}
        else {return sp;}
    }
    function handleFeatures(ft)
    {
        if (!ft) {return "No available features"}
        else {return ft} // shouldn't happen because the lowest available level is 1
    }
    function renderFeatures(ft)
    {
        const featureList = [];
        if (level >= 17 && ft.level17Feature) { featureList.push(`At 17th level: ${ft.level17Feature.label}`);}
        if (level >= 13 && ft.level13Feature) { featureList.push(`At 13th level: ${ft.level13Feature.label}`); }  
        if (level >= 9 && ft.level9Feature) { featureList.push(`At 9th level: ${ft.level9Feature.label}`);}
        if (level >= 7 && ft.level7Feature) { featureList.push(`At 7th level: ${ft.level7Feature.label}`); }
        if (level >= 6 && ft.level6Feature) { featureList.push(`At 6th level: ${ft.level6Feature.label}`);; }
        if (level >= 5 && ft.level5Feature) { featureList.push(`At 5th level: ${ft.level5Feature.label}`);; }
        if (level >= 3 && ft.level3Feature) { featureList.push(`At 3rd level: ${ft.level3Feature.label}`); }
        if (level >= 1 && ft.level1Feature) { featureList.push(`At 1st level: ${ft.level1Feature.label}`); }
        console.log(featureList)

        setSubclassFeatures(featureList.length > 0? featureList.reverse().join("\n"): null);

    }
    function calculatingSpells(sp) {
        const spellsList = [];
        if (level >= 17 && sp.spells_seventeenth) { spellsList.push(`17th: ${sp.spells_seventeenth}`); }
        if (level >= 13 && sp.spells_thirteenth) { spellsList.push(`13th: ${sp.spells_thirteenth}`); }  
        if (level >= 9 && sp.spells_ninth) { spellsList.push(`9th: ${sp.spells_ninth}`); }
        if (level >= 7 && sp.spells_seventh) { spellsList.push(`7th: ${sp.spells_seventh}`); }
        if (level >= 5 && sp.spells_fifth) { spellsList.push(`5th: ${sp.spells_fifth}`); }
        if (level >= 3 && sp.spells_third) { spellsList.push(`3rd: ${sp.spells_third}`); }
        if (level >= 1 && sp.spells_first) { spellsList.push(`1st: ${sp.spells_first}`); }
        //issue with arrays
        
        console.log(`\n\nThe Spell List is:\n ${spellsList.reverse()}`)
        setSubclassSpells(spellsList.length > 0? spellsList.join("\n"): null); // will only display if there are spell lists
        // return <Text>{handleSpells(spells)}</Text> Doesn't work
    }
    function calculatingFeatures()
    {

    }
    return (
        <SafeAreaView style={styles.viewStyle}>
            <Text style={styles.textStyle}>Chosen Class: {classes}</Text>
            <Text style={styles.textStyle}>Current Level: {level}</Text>
            <Text style={[styles.textStyle]}>Select your Subclass</Text>
            {/* <Text>{CLERIC_SUBCLASS}</Text> */}
            <Dropdown style={styles.dropdown}
            data={subclassOptions}
            labelField={"label"}
            valueField={"value"}
            onChange={item => { // this curly brace allows for multiple on change's to work
                (setSubclass(item.label));       
                console.log(subclass)          
            }
            }
            placeholder="---"
            maxHeight={400}
            ></Dropdown>
            <Text>This are the subclasses: {subclass}</Text>
            <Text>Bonus Spells</Text>            
            <Text>{handleSpells(subclassSpells)}</Text>
            <Text>Bonus Features:</Text>
            <Text>{}</Text>
            <Text>{handleFeatures(subclassFeatures)}</Text>
            <NextButton 
                navigation={navigation}
                params={{name, classes, backgrounds, subclass, level, races, con,int, wis, cha}}
                checkforChange={(item) => checkForChange(item)}
                nextScreen={"Spell Page"}
                ></NextButton>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create(
{
    viewStyle: {
        backgroundColor: COLORS.background,
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.xlarge,
        textAlign: 'center'
    },
    dropdown: 
    {
        width: 250,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
        margin: 10
    },

}
)
