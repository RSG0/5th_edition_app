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
    const [subclassOptions, setSubclassOptions] = useState([])
    function checkingSubclass(item)
    {
        if (item === CLERIC_SUBCLASS.label[0])
        {
            console.log("Correct");
        }
        else
        {
            console.log("Issue has arose")
        }
    }
    if (subclassOptions.length === 0)
    {
        handleSubclassChange(classes)
    }
    // const handleSubclassChange = (selectedClass) =>
    // {
    //     setSubclass(null);
    //     if (selectedClass == "Cleric")
    //     {
    //         console.log("This should be a Cleric")
    //         setSubclassOptions(CLERIC_SUBCLASS);
    //     }
    //     else if (selectedClass == "Bard")
    //     {
    //         setSubclassOptions(BARD_SUBCLASS)
    //     }
    //     else
    //     {
    //         console.log("User has selected an invalid options")
    //     }
    // }
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
    return (
        <SafeAreaView style={styles.viewStyle}>
            <Text style={styles.textStyle}>Chosen Class: {classes}</Text>
            <Text style={styles.textStyle}>Select your Subclass</Text>
            {/* <Text>{CLERIC_SUBCLASS}</Text> */}
            <Dropdown style={styles.dropdown}
            data={subclassOptions}
            labelField={"label"}
            valueField={"value"}
            onChange={item => (setSubclass(item.label))}
            placeholder="---"
            maxHeight={200}
            ></Dropdown>
            <Text>These are the subclasses: {subclass}</Text>
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
