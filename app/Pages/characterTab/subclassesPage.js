import { View, StyleSheet, Text, StatusBar } from "react-native";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dropdown } from "react-native-element-dropdown";
import { BARD_SUBCLASS, BARBARIAN_SUBCLASS, CLERIC_SUBCLASS } from "../../../constants/characterinformation/classinfo";
import { useState } from "react";

export default SubclassesPage = ({route}) =>
{
    const {name, classes, backgrounds} = route.params;
    const [subclass, setSubclass] = useState(null);
    const [spells, setSpells] = useState(null);

    const [subclassOptions, setSubclassOptions] = useState([])

    if (subclassOptions.length === 0)
    {
        handleSubclassChange(classes)
    }

    function handleSubclassChange()
        {
            setSubclass(null);
            if (classes == "Cleric")
            {
                console.log("This should be a Cleric")
                setSubclassOptions(CLERIC_SUBCLASS);
            }
            else if (classes == "Bard")
            {
                setSubclassOptions(BARD_SUBCLASS)
            }
            else
            {
                console.log("User has selected an invalid options")
            }
        }
    function handleSpells(spells)
    {
        if (spells) return spells.join(", ");
        else
        {
            return "No spells available";
        }

    }
    return (
        <SafeAreaView style={styles.viewStyle}>
            <Text style={styles.textStyle}>Chosen Class: {classes}</Text>
            <Text style={styles.textStyle}>Select your Subclass</Text>
            {/* <Text>{CLERIC_SUBCLASS}</Text> */}
            <Dropdown style={styles.dropdown}
            data={subclassOptions}
            labelField={"label"}
            valueField={"value"}
            onChange={item => { // this curly brace allows for multiple on change's to work
                (setSubclass(item.label)); 
                (setSpells(item.spells_first));
            }
            }
            placeholder="---"
            maxHeight={200}
            ></Dropdown>
            <Text>This are the subclasses: {subclass}</Text>
            {console.log(spells + "56")}
            <Text>Bonus Spells: {handleSpells(spells)}</Text>
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
        width: 200,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },

}
)
