import { View, StyleSheet, Text, StatusBar } from "react-native";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dropdown } from "react-native-element-dropdown";
import { BARD_SUBCLASS, BARBARIAN_SUBCLASS, CLERIC_SUBCLASS } from "../../../constants/characterinformation/classinfo";
import { useEffect, useState } from "react";

export default SubclassesPage = ({route}) =>
{
    const {name, classes, backgrounds, level} = route.params;
    const [subclass, setSubclass] = useState(null);
    const [spells, setSpells] = useState(null);
    const [subclassOptions, setSubclassOptions] = useState([]);

    useEffect(() => // triggered whenever classes get changed
    {
        if (classes)
        {
            console.log("SO FAR SO GOOD")
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
    function handleSpells(sp)
    {
        if (!sp) { return "No spells given"}
        else {return sp;}
    }
    function handleFeatures(ft)
    {
        if (!ft) {return "No available features"}
        else {return ft}
    }
    function calculatingSpells(spells) {
        const spellsList = [];
        if (level >= 17 && spells.spells_seventeenth) { spellsList.push(`17th: ${spells.spells_seventeenth}`); }
        if (level >= 13 && spells.spells_thirteenth) { spellsList.push(`13th: ${spells.spells_thirteenth}`); }  
        if (level >= 9 && spells.spells_ninth) { spellsList.push(`9th: ${spells.spells_ninth}`); }
        if (level >= 7 && spells.spells_seventh) { spellsList.push(`7th: ${spells.spells_seventh}`); }
        if (level >= 5 && spells.spells_fifth) { spellsList.push(`5th: ${spells.spells_fifth}`); }
        if (level >= 3 && spells.spells_third) { spellsList.push(`3rd: ${spells.spells_third}`); }
        if (level >= 1 && spells.spells_fifth) { spellsList.push(`1st: ${spells.spells_first}`); }
        
        console.log(`\n\nThe Spell List is:\n ${spellsList.reverse()}`)
        setSpells(spellsList.length > 0? spellsList.join("\n"): null); // will only display if there are spell lists
        // return <Text>{handleSpells(spells)}</Text> Doesn't work
    }
    function calculatingFeatures()
    {

    }
    return (
        <SafeAreaView style={styles.viewStyle}>
            <Text style={styles.textStyle}>Chosen Class: {classes}</Text>
            <Text style={styles.textStyle}>Current Level: {level}</Text>
            <Text style={styles.textStyle}>Select your Subclass</Text>
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
            <Text>Bonus spells</Text>            
            <Text>{handleSpells(spells)}</Text>
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
    },

}
)
