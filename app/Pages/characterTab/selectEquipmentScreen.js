import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import { CLASS_EQUIPMENT, BACKGROUNDS } from "../../../constants/characterinformation/characterinfo";
import SelectButton from "../../../components/buttons/selectionButton";
import { useEffect } from "react";

export default SelectEquipmentPage = ({route}) =>
{
    const {name, classes, backgrounds, level, races, con, int, wis, cha} = route.params; 

    const selectedClass = CLASS_EQUIPMENT.find(cls => cls.label === classes)
    const selectedBackground = BACKGROUNDS.find(back => back.label === backgrounds)
    const equipmentA = selectedClass.equipmentA;
    const equipmentB = selectedClass.equipmentB;
    const equipmentC = selectedClass.equipmentC;
    const equipmentD = selectedClass.equipmentD;
    const equipmentE = selectedClass.equipmentE;
    const equipmentF = selectedClass.equipmentF;

    const backgroundEquipment = selectedBackground.equipment;

    useEffect(() => 
    {

    }, [classes])
    const handleSkills = () =>
    {

    }
    const renderBackgroundEquipment = (equip) =>
    {
        {console.log("SO FAR SO GOOD")}
        return equip.join(", ");

    }
    const renderClassEquipment = (equip) =>
        {
            if (equip)
            {
            return(
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                {equip.map( (item) => <SelectButton key={item} disableFixedWidth={true} name={captitalize(removeIndefinteArticles_and(item))}> </SelectButton> )}
                </ScrollView> )
            }    
        }
    const captitalize = (word) =>
    {
        const firstLetter = word.charAt(0).toUpperCase();
        const remainingLetters = word.slice(1);

        return (firstLetter + remainingLetters)

    }
    const removeIndefinteArticles_and = (word) => {
        let newWord = word;
        if (newWord.includes("an ")) {
            newWord = newWord.replace("an ", "");
        }
        if (newWord.includes("a ")) {
            newWord = newWord.replace("a ", "");
        }
        if (newWord.includes("any ")) {
            newWord = newWord.replace("any ", "");
        } 
        if (newWord.includes(" and ")) {
            newWord = newWord.replace(" and ", " & "); // Optional: Replace 'and' with '&' for better visual rendering
        }
        return newWord.trim();
    }

    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        <ScrollView>
        <View style={styles.viewStyle}>
            <Text style={[styles.textStyle, {marginLeft: 10}]}>Select Item</Text>
            {/* <Text>{equipmentA.join(", ")}</Text> */}
            {renderClassEquipment(equipmentA)}
            <Text style={[styles.textStyle, {marginLeft: 10}]}>Select Item</Text>
            {renderClassEquipment(equipmentB)}
            <Text style={[styles.textStyle, {marginLeft: 10}]}>Select Item</Text>
            {renderClassEquipment(equipmentC)}
            <Text style={[styles.textStyle, {marginLeft: 10}]}>Select Item</Text>
            {renderClassEquipment(equipmentD)}
            <Text style={[styles.textStyle, {marginLeft: 10}]}>Select Item</Text>
            {renderClassEquipment(equipmentE)}
            <Text style={[styles.textStyle, {marginLeft: 10}]}>Select Item</Text>
            {renderClassEquipment(equipmentF)}
            <Text style={[styles.textStyle, {marginLeft: 10}]}>Current Equipment</Text>
            {console.log("The selected class is: " + selectedBackground.label)}
            <Text>{renderBackgroundEquipment(backgroundEquipment)}</Text>

        </View>
        </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create(
{
    viewStyle: 
    {
        margin: 10,
        backgroundColor: '#acacac',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        flex: 1
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.xlarge,
        textAlign: 'center'
    },

}
)
