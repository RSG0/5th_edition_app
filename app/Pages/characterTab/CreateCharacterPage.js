import { Button, ScrollView, StyleSheet, Text, TextInput, View, Keyboard, TouchableWithoutFeedback, Alert } from "react-native";
import { COLORS, FONT, FONTSIZE } from "../../../constants/theme";
import {CLASSES, NUMBER_TWENTY, BACKGROUNDS} from "../../../constants/characterinformation/characterinfo"
import { RACES, GENASI_SUBRACE, DRAGONBORN_SUBRACE, ELF_SUBRACE, AASIMAR_SUBRACE } from "../../../constants/characterinformation/raceinfo";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NextButton from "../../../components/buttons/nextButton";



const CreateCharacter = ({navigation}) => {
    const [selectedRace, setSelectedRace] = useState(null);
    const [subraceOptions, setSubraceOptions] = useState([])
    const [selectedSubrace, setSelectedSubrace] = useState(null);
    const [level, setLevel] = useState(null);
    const [name, setName] = useState("");
    const [classes, setClasses] = useState("");
    const [backgrounds, setBackgrounds] = useState("");

    const checkForChange = (nameCheck, classCheck, levelCheck, raceCheck, backgroundCheck) =>
    {
        // console.log('Checking for changes:', { nameCheck, classCheck, levelCheck, raceCheck, backgroundCheck });
        if (!nameCheck || classCheck == null || levelCheck == null || raceCheck == null || backgroundCheck == "")
        {
            Alert.alert("OOPS", "You need to fill all the information")
            return true; //This should be false
        }
        return true;
    };

    const handleRaceChange = (item) =>
    {
        setSelectedRace(item.label);
        setSelectedSubrace(item.label);

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
        else if (item.label == "Aasimar")
        {
            setSubraceOptions(AASIMAR_SUBRACE)
        }
        else
        {
            setSubraceOptions([]);
        }
    }

    return (
        // <TouchableWithoutFeedback onPress={ () => console.log("User has touched the screen")}>

        <SafeAreaView style={{backgroundColor: COLORS.background}}>
                <ScrollView>
                <View style={{ flex: 1 }}>
                 <View style={styles.inputRow}>
                     <Text style={styles.labelStyle}>Name:</Text>
                     <TextInput style={styles.input} 
                        placeholderStyle={styles} 
                        placeholder={"Enter name here..."} 
                        value={name} 
                        onChangeText={setName}/>
                 </View>
                     <View style={styles.inputRow}>
                         <Text style={styles.labelStyle}>Class:</Text>
                         <Dropdown style={styles.dropdown}
                         data={CLASSES}
                         value={classes}
                         labelField={"label"}
                         valueField={"label"}
                         onChange={(item) => setClasses(item.label)}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="Select class here..."
                         maxHeight={200}
                         />
                         <Text style={styles.labelStyle}>Level:</Text>
                         <Dropdown style={styles.dropdownLevel}
                         data={NUMBER_TWENTY}
                         labelField={"value"}
                         valueField={"value"}
                         onChange={item => (setLevel(item))}
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
                         onChange={item => (setSelectedSubrace(item.label))}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="---"
                         maxHeight={200}
                         />
                     </View>
                    <View style={styles.inputRow}>
                        <Text style={styles.labelStyle}>Backgrounds:</Text>
                        <Dropdown style={styles.dropdown}
                         data={BACKGROUNDS}
                         labelField={"label"}
                         valueField={"label"}
                         value={backgrounds}
                         onChange={item => setBackgrounds(item.label)}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="---"
                         maxHeight={200}
                         />
                    </View>
                    <View style={styles.inputRow}>
                        <NextButton 
                        navigation={navigation}
                        nextScreen={"Ability Score"}
                        params={{name, classes,level, selectedRace, backgrounds, selectedSubrace}}
                        checkforChange={() => checkForChange(name, classes, level, selectedRace, backgrounds, selectedSubrace)}
                        />              
                    </View>
                    <View style={{marginBottom: 200}}></View>

             </View>
             </ScrollView>
        </SafeAreaView>
        // </TouchableWithoutFeedback>

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
    },
    button:{
        marginTop: 20,
        backgroundColor: COLORS.mainColor,
        alignItems: 'center',
        padding: 5,
        paddingHorizontal: 40,
        borderRadius: 20,
        borderWidth: 2,
    },
    buttonText:{
        fontWeight: 'bold',
        fontSize: FONTSIZE.medium,
    }, 
});

export default CreateCharacter;
