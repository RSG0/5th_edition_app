import { View, StyleSheet, Text, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import { CLASS_EQUIPMENT, BACKGROUNDS } from "../../../constants/characterinformation/characterinfo";
import SelectButton from "../../../components/buttons/selectionButton";
import { useEffect, useState } from "react";


export const removeIndefinteArticles_and = (word) => {
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
};

export default SelectEquipmentPage = ({navigation,route}) => {
    const {name, classes, backgrounds, level, selectedRace, str, dex, con, int, wis, cha, selectSkills, subclass, numOfCantrips, numOfLevelSpells, maxHp} = route.params; 

    const selectedClass = CLASS_EQUIPMENT.find(cls => cls.label === classes);
    const selectedBackground = BACKGROUNDS.find(back => back.label === backgrounds);

    const equipmentOptions = [
        selectedClass.equipmentA,
        selectedClass.equipmentB,
        selectedClass.equipmentC,
        selectedClass.equipmentD,
        selectedClass.equipmentE,
        selectedClass.equipmentF,
    ];

    const [selectedEquipments, setSelectedEquipments] = useState(Array(equipmentOptions.length).fill(null));

    const backgroundEquipment = selectedBackground.equipment;

    useEffect(() => {
        // Any effect to run when the class changes
    }, [classes]);

    const handleEquipment = (equip, index) => {
        setSelectedEquipments((prevSelected) => {
            const updatedSelection = [...prevSelected];
            if (updatedSelection[index] === equip ) // if the icon selected is already selected
            {
                updatedSelection[index] = null; // deselect it ()
            }
            else
            {
                updatedSelection[index] = equip; // else select it
            }
            // updatedSelection[index] = updatedSelection[index] === equip ? null : equip; //Ternary Operator
            return updatedSelection;
        });
    };
    const checkforChange = () => {
        const allSelected = selectedEquipments.every(item => item !== null); // Check if all rows have a selected item
    
        if (!allSelected) 
        {
            Alert.alert("OOPS", "You need to fill all the information")
            return false; // Prevent navigation
        }
    
        return true; // Allow navigation
    };
    const renderClassEquipment = (equip, index) => {
        if (equip) {
            return (
                <>
                    <Text style={[styles.textStyle, { marginLeft: 10 }]}>Select 1 Item</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {equip.map((item, i) => (
                            <SelectButton 
                                key={i} 
                                disableFixedWidth={true} 
                                onSelectionPress={() => handleEquipment(item, index)} 
                                isSelected={selectedEquipments[index] === item} 
                                name={captitalize(removeIndefinteArticles_and(item))} 
                            />
                        ))}
                    </ScrollView>
                </>
            )
        }
    };

    const captitalize = (word) => {
        const firstLetter = word.charAt(0).toUpperCase();
        const remainingLetters = word.slice(1);
        return (firstLetter + remainingLetters);
    };



    const renderBackgroundEquipment = (equip) => {
        return equip.join(", ");
    };

    const renderEquipment = () => 
    {
        return backgroundEquipment.join(", ") //+ ", " + selectedEquipments.join(", ")

    }

    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
            <ScrollView>
                <View style={styles.viewStyle}>
                    {equipmentOptions.map((equip, index) => renderClassEquipment(equip, index))}
                    <Text style={styles.textStyle}>Background Equipment</Text>
                    <Text>{renderEquipment()}</Text>
                    {console.log(selectedEquipments)}
                    <View style={{paddingBottom: 30}}/>
                    <NextButton
                navigation={navigation}
                params={{name, classes, backgrounds, level, selectedRace, str, dex, con, int, wis, cha, selectSkills, subclass, numOfCantrips, numOfLevelSpells, maxHp, selectedEquipments}}
                checkforChange={() => checkforChange()}
                nextScreen={"Secondary Features"}></NextButton>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        margin: 10,
        padding: 10,
        backgroundColor: '#acacac',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        flex: 1
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.large,
        textAlign: 'center'
    },
});
