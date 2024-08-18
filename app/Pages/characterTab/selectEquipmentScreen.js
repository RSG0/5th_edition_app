import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import { CLASS_EQUIPMENT } from "../../../constants/characterinformation/characterinfo";
import SelectButton from "../../../components/buttons/selectionButton";
import { useEffect } from "react";

export default SelectEquipmentPage = ({route}) =>
{
    const {name, classes, backgrounds, level, races, con, int, wis, cha} = route.params; 

    const selectedClass = CLASS_EQUIPMENT.find(cls => cls.label === classes)
    const equipmentA = selectedClass.equipmentA;
    const equipmentB = selectedClass.equipmentB;
    const equipmentC = selectedClass.equipmentC;
    const equipmentD = selectedClass.equipmentD;
    const equipmentE = selectedClass.equipmentE;
    const equipmentF = selectedClass.equipmentF;

    useEffect(() => 
    {

    }, [classes])
    const handleSkills = () =>
    {

    }
    // const renderEquipment = (equip) =>
    // {
    //     {console.log("SO FAR SO GOOD")}
    //     return(
    //     <FlatList
    //         horizontal
    //         data={equip}
    //             renderItem={ ({item}) => {
    //                 return( <Text>{item.equipmentA}</Text>)
    //         }}
        
    //         /> )
    // }
    const renderEquipment = (equip) =>
        {
            if (equip)
            {
            return(
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                {equip.map( (item) => <SelectButton key={item} disableFixedWidth={true} name={captitalize((item))}> </SelectButton> )}
                </ScrollView> )
            }    
        }
    const captitalize = (word) =>
    {
        const firstLetter = word.charAt(0).toUpperCase();
        const remainingLetters = word.slice(1);

        return (firstLetter + remainingLetters)

    }
    const removeIndefinteArticles_and = (word) =>
    {
        if (word.includes("an "))
        {
            newWord = word.replace("an ", "")
        }
        if (word.includes("a "))
        {
            newWord = word.replace("a ", "")
        }        

        return newWord;

    }

    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        <ScrollView>
        <View style={styles.viewStyle}>
            <Text style={[styles.textStyle, {marginLeft: 10}]}>Select Item</Text>
            {/* <Text>{equipmentA.join(", ")}</Text> */}
            {renderEquipment(equipmentA)}
            <Text style={[styles.textStyle, {marginLeft: 10}]}>Select Item</Text>
            {renderEquipment(equipmentB)}
            <Text style={[styles.textStyle, {marginLeft: 10}]}>Select Item</Text>
            {renderEquipment(equipmentC)}
            <Text style={[styles.textStyle, {marginLeft: 10}]}>Select Item</Text>
            {renderEquipment(equipmentD)}
            <Text style={[styles.textStyle, {marginLeft: 10}]}>Select Item</Text>
            {renderEquipment(equipmentE)}
            <Text style={[styles.textStyle, {marginLeft: 10}]}>Select Item</Text>
            {renderEquipment(equipmentF)}
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
