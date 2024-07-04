import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS, FONT, FONTSIZE } from "../constants/theme";
import {CLASSES, RACES, NUMBER_TWENTY, ELF_SUBRACE, DRAGONBORN_SUBRACE, GENASI_SUBRACE} from "../constants/characterinfo"
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";



const CreateCharacter = () => {
    const [selectedRace, setSelectedRace] = useState(null);
    const [subraceOptions, setSubraceOptions] = useState([])
    const [selectedSubrace, setSelectedSubrace] = useState(null);

    const handleRaceChange = (item) =>
    {
        setSelectedRace(null);
        setSelectedSubrace(null);

        if (item.label == "Elf")
        {
            setSubraceOptions(ELF_SUBRACE);
        }
        else if (item.label == "Dragonborn")
        {
            setSubraceOptions(DRAGONBORN_SUBRACE);
        }
        else if (item.label == "Genasi")
        {
            setSubraceOptions(GENASI_SUBRACE);
        }
        else
        {
            setSubraceOptions([]);
        }
    }

    return (
             <View style={{ flex: 1 }}>
                 <View style={styles.inputRow}>
                     <Text style={styles.labelStyle}>Name:</Text>
                     <TextInput style={styles.input} placeholderStyle={styles} placeholder={"Enter name here..."} />
                 </View>
                     <View style={styles.inputRow}>
                         <Text style={styles.labelStyle}>Class:</Text>
                         <Dropdown style={styles.dropdown}
                         data={CLASSES}
                         labelField={"label"}
                         valueField={"value"}
                         onChange={item => (item)}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="Select class here..."
                         maxHeight={200}
                         />
                         <Text style={styles.labelStyle}>Level:</Text>
                         <Dropdown style={styles.dropdownLevel}
                         data={NUMBER_TWENTY}
                         labelField={"value"}
                         valueField={"value"}
                         onChange={item => (setSelectedSubrace(item))}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="--"
                         maxHeight={200}
                         />
                     </View>
                     <View style={styles.inputRow}>
                         <Text style={styles.labelStyle}>Races:</Text>
                         <Dropdown style={styles.dropdown}
                         data={RACES}
                         labelField={"label"}
                         valueField={"value"}
                         onChange={handleRaceChange}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="Select race here..."
                         maxHeight={200}
                         />
                     </View>
                     <View style={styles.inputRow}>
                         <Text style={styles.labelStyle}>Subraces:</Text>
                         <Dropdown style={styles.dropdownSubrace}
                         data={subraceOptions}
                         labelField={"label"}
                         valueField={"value"}
                         onChange={item => (setSelectedSubrace(item))}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="---"
                         maxHeight={200}
                         />
                     </View>
                    <View style={styles.inputRow}>
                        <Text style={styles.labelStyle}>STR:</Text>
                        <Dropdown style={styles.dropdownLevel}
                         data={NUMBER_TWENTY}
                         labelField={"value"}
                         valueField={"value"}
                         onChange={item => (item)}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="--"
                         maxHeight={200}
                         />
                    </View>
             </View>
    );
}

const styles = StyleSheet.create({
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',   
        margin: 12,
    },
    labelStyle: {
        fontSize: FONTSIZE.xlarge,
        fontWeight: 'bold',
        marginRight: 8,
    },
    input: 
    {
        fontSize: FONTSIZE.medium,
        height: 40,
        width: 180,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    dropdown: 
    {
        width: 150,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },
    dropdownSubrace: {
        width: 100,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },
    dropdownLevel: {
        width: 70,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },
    placeholderColor:{
        fontSize: FONTSIZE.medium,
        color: 'grey'
    }
});

export default CreateCharacter;
