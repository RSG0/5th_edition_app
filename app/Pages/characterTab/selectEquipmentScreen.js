import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import { CLASS_EQUIPMENT, BACKGROUNDS } from "../../../constants/characterinformation/characterinfo";
import SelectButton from "../../../components/buttons/selectionButton";
import { useCallback, useEffect, useState } from "react";

export default SelectEquipmentPage = ({route}) =>
{
    const {name, classes, backgrounds, level, races, con, int, wis, cha} = route.params; 

    const selectedClass = CLASS_EQUIPMENT.find(cls => cls.label === classes)
    const selectedBackground = BACKGROUNDS.find(back => back.label === backgrounds)
    const equipmentOptions =
    [    
    selectedClass.equipmentA,
    selectedClass.equipmentB,
    selectedClass.equipmentC,
    selectedClass.equipmentD,
    selectedClass.equipmentE,
    selectedClass.equipmentF,
    ]
    
    const [selectEquipment, setSelectEquipment] = useState([])

    const backgroundEquipment = selectedBackground.equipment;

    useEffect(() => 
    {

    }, [classes])
    const handleEquipment = ((equip) =>
    {
        setSelectEquipment((prevEquipment) => 
        {
            if (prevEquipment.includes(equip)) {return prevEquipment.filter(item => item !== equip);}// Remove the selected item if it was already selected
            else if (prevEquipment.length < 1) // 
            {
                return [...prevEquipment, equip] // if the selected item is less than the max than add it to the array
            }
            else
            {
                return[...prevEquipment.slice(1), equip]
            }
        })
    })
    const renderBackgroundEquipment = (equip) =>
    {
        // {console.log("SO FAR SO GOOD")}
        return equip.join(", ");

    }
    const renderCurrentEquipment = () =>
    {
        return(
        <>
        {renderBackgroundEquipment()}
        </>
        )
    }
    const renderClassEquipment = (equip) =>
        {
            console.log(selectEquipment);
            if (equip)
            {
            return(
                <>
                    <Text style={[styles.textStyle, { marginLeft: 10 }]}>Select 1 Item</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {equip.map((item) => (
                            <SelectButton 
                                key={item} 
                                disableFixedWidth={true} 
                                onSelectionPress={() => handleEquipment(item)} 
                                isSelected={selectEquipment.includes(item)} 
                                name={captitalize(removeIndefinteArticles_and(item))} 
                            />
                        ))}
                    </ScrollView>
                </>)
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

            {equipmentOptions.map(renderClassEquipment)}
            {console.log("The selected background is: " + selectedBackground.label)}
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
