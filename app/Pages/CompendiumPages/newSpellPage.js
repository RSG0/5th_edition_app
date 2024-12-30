import { Button, ScrollView, StyleSheet, Text, TextInput, View, Keyboard, TouchableWithoutFeedback, Alert, Dimensions } from "react-native";
import { characterBorderWidth, COLORS, FONT, FONTSIZE } from "../../../constants/theme";
import { Dropdown } from "react-native-element-dropdown";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NextButton from "../../../components/buttons/nextButton";
import { MAGICITEMS_RARITY, MAGICITEMS_TYPE as MAGICITEMS_Type, MAGICITEMS_TYPE_WEAPONS } from "../../../constants/characterinformation/magicitems";
import { CASTING_TIMES, COMPONENTS, DURATION_TYPES, NUMBER_TWENTY, RANGE_TYPES, RANGES, SPECIFIC_RANGE_TYPES, SPELL_LEVEL, SPELLCASTERS, TRUEORFALSE } from "../../../constants/characterinformation/characterinfo";
import { schools_of_magic } from "../../../constants/characterinformation/spells";
import { capitalized } from "../../../constants/global";
import SelectionButton from "../../../components/buttons/selectionButton";


const {width, height} = Dimensions.get('screen');

export default NewMagicItemPage = ({navigation}) => {

    const [name, setName] = useState("Red's Groovy Lute");
    const [spellLevel, setSpellLevel] = useState(null);
    const [school, setSchool] = useState(null);
    const [castingTime, setCastingTime] = useState(null);
    const [ritual, setRitual] = useState(false);
    const [range, setRange] = useState(false);
    const [concentration, setConcentration] = useState(null);
    const [duration, setDuration] = useState(null);

    const [components, setComponents] = useState([]);
    const [usability, setUsability] = useState([]);



    const [rarity, setRarity] = useState(null);


    const [isMaterialUsable, setIsMaterialVisible] = useState(false);
    const [material, setMaterial] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.");
    const [description, setDescription] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
    const [weight, setWeight] = useState(0);

    const [rangeTypeOption, setRangeTypeOption] = useState([]);
                        //name, spellLevel, school, castingTime, ritual, range, rangeTypeOption, concentration, duration, usability ,rarity, description, weight

    const checkForChange = (nameCheck, spellLevelCheck, schoolCheck, castingTimeCheck, ritualCheck, rangeCheck, rangeTypeCheck, concentration, duration, usability, description,) =>
    {
        if (!nameCheck || spellLevelCheck == null || castingTimeCheck == null || rangeCheck == null || rangeTypeCheck == null || !duration)
        {
            Alert.alert("OOPS", "You need to fill all the information")
            return false; //This should be false
        }
        return true;
    };

    useEffect(() =>
    {
        handleMaterials()
        //This use effect is needed because the way state updates are batched and don't immediately update
    }, [components])

    const transformedSchools = schools_of_magic.map(school => ({ label:capitalized(school)}));

    const handleMaterials = () =>
    {
        if (components.find((item) => item === "Material"))
        {
            setIsMaterialVisible(true)
        }
        else
        {
            setIsMaterialVisible(false);
        }
        
    }
    const handleRangeChange = (item) =>
        {
            setRange(item.label);
            if (item.label === "Self")
            {
                setRangeTypeOption(SPECIFIC_RANGE_TYPES);
            }
            if (item.label === "Touch")
            {
                setRangeTypeOption([]); //should be empty
            }
            else
            {
                setRangeTypeOption(RANGE_TYPES);
            }

        }
    const handleCasterSelectionPress = (name) => {
        setUsability((prevSelected) => {
            if (prevSelected.includes(name)) {
                // Remove the caster if already selected
                return prevSelected.filter((caster) => caster !== name);
            } else {
                // Add the caster if not already selected
                return [...prevSelected, name];
            }
        });
    };
    const handleComponentSelectionPress = (name) => {
        setComponents((prevSelected) => {
            if (prevSelected.includes(name)) {
                // Remove the caster if already selected
                return prevSelected.filter((caster) => caster !== name);
            } else {
                // Add the caster if not already selected
                return [...prevSelected, name];
            }
        });
        console.log(components)

    };
        // const handleUsability = () =>
        // {
        //     return(
        //     SPELLCASTERS.map((caster, i) =>
        //     {
        //         <SelectionButton key={i} name={caster.label} onSelectionPress={handleSelectionPress} isSelected={usability.includes(caster.label)} disableFixedWidth={true}/> 
        //     }));
        // };
        const handleUsability = () => {
            return SPELLCASTERS.map((caster, i) => (
                <SelectionButton
                    setCustomMinWidth={width * .15}
                    setHorizontalMargin={width *.005}
                    key={i}
                    name={caster.label}
                    onSelectionPress={handleCasterSelectionPress} 
                    isSelected={usability.includes(caster.label)} 
                    disableFixedWidth={true}
                />
            ));
        };
        const handleComponents = () => {
            return COMPONENTS.map((compo, i) => (
                <SelectionButton
                    setCustomMinWidth={width * .15}
                    setHorizontalMargin={width *.005}
                    key={i}
                    name={compo.label}
                    onSelectionPress={handleComponentSelectionPress} 
                    isSelected={components.includes(compo.label)} 
                    disableFixedWidth={true}
                />
            ));
        };
        
    const handleChargeChange = (item) =>
    {
        console.log(item);
        setIsChargable(item.label);
        if (item.label == "True")
        {
            console.log("Printing")
            setNumOfChargesOptions(NUMBER_TWENTY);
        }
        else
        {
            console.log("not working...")
            setNumOfChargesOptions([]);
        }
    }
    return (
        // <TouchableWithoutFeedback onPress={ () => console.log("User has touched the screen")}>

        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
                <ScrollView>
                <View style={{ }}>
                 <View style={styles.inputRow}>
                     <Text style={styles.labelStyle}>Name:</Text>
                     <TextInput style={styles.input} 
                        placeholderStyle={styles} 
                        placeholder={"Enter name here..."} 
                        value={name} 
                        onChangeText={setName}/>
                 </View>
                     <View style={styles.inputRow}>
                         <Text style={styles.labelStyle}>Level:</Text>
                         <Dropdown style={[styles.dropdown, {minWidth: width * .2}]}
                         selectedTextStyle={styles.dropdownTextStyle}
                         data={SPELL_LEVEL}
                         value={spellLevel}
                         labelField={"label"}
                         valueField={"label"}
                         onChange={item => setSpellLevel(item)}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="..."
                         maxHeight={200}
                         />
                        <Text style={styles.labelStyle}>School:</Text>
                        <Dropdown
                           style={styles.dropdownSchool}
                           selectedTextStyle={styles.dropdownTextStyle}
                           data={transformedSchools}
                           value={school}
                           labelField={"label"}
                           valueField={"label"}
                           onChange={item => setSchool(item)}
                           placeholderStyle={styles.placeholderColor}
                           placeholder="..."
                           maxHeight={200}
                        />
                     </View>
                     <View style={styles.inputRow}>
                         <Text style={styles.labelStyle}>Casting Time:</Text>
                         <Dropdown style={styles.dropdown}
                         selectedTextStyle={styles.dropdownTextStyle}
                         data={CASTING_TIMES}
                         value={castingTime}
                         labelField={"label"}
                         valueField={"label"}
                         onChange={item => setCastingTime(item.label)}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="..."
                         maxHeight={200}
                         />
                         <Text style={styles.labelStyle}>Ritual:</Text>
                         <Dropdown style={[styles.dropdown, {minWidth: width * .12}]}
                         selectedTextStyle={styles.dropdownTextStyle}
                         data={TRUEORFALSE}
                         value={ritual}
                         labelField={"label"}
                         valueField={"label"}
                         onChange={(item) => setRitual(item.label)}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="--"
                         maxHeight={200} />
                     </View>
                    <View style={styles.inputRow}>
                        <Text style={styles.labelStyle}>Range:</Text>
                        <Dropdown style={styles.dropdown}
                         selectedTextStyle={styles.dropdownTextStyle}
                         data={RANGES}
                         value={range}
                         labelField={"label"}
                         valueField={"label"}
                         onChange={handleRangeChange}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="---"
                         maxHeight={200}
                         />

                        <Text style={styles.labelStyle}>Range Type:</Text>
                        <Dropdown style={styles.dropdown}
                         selectedTextStyle={styles.dropdownTextStyle}
                         data={rangeTypeOption}
                         value={rarity}
                        labelField={"label"}
                         valueField={"label"}
                         onChange={item => setRarity(item.label)}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="---"
                         maxHeight={200}
                         />
                    </View>
                    <View style={styles.inputRow}>
                        <Text style={styles.labelStyle}>Concentration:</Text>
                        <Dropdown style={styles.dropdown}
                         selectedTextStyle={styles.dropdownTextStyle}
                         data={TRUEORFALSE}
                         value={concentration}
                         labelField={"label"}
                         valueField={"label"}
                         onChange={item => setConcentration(item.label)}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="---"
                         maxHeight={200}
                         />

                        <Text style={styles.labelStyle}>Duration:</Text>
                        <Dropdown style={styles.dropdown}
                         selectedTextStyle={styles.dropdownTextStyle}
                         data={DURATION_TYPES}
                         value={duration}
                        labelField={"label"}
                         valueField={"label"}
                         onChange={item => setDuration(item.label)}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="---"
                         maxHeight={200}
                         />
                    </View>
                    <View style={styles.inputRow}>
                        <Text style={styles.labelStyle}>Components:</Text>
                        <ScrollView horizontal={true} contentContainerStyle={styles.inputRow}>
                        {handleComponents()}
                    </ScrollView>
                    </View>

                    <View style={styles.inputRow}>
                        <Text style={styles.labelStyle}>Usable By:</Text>
                    </View>
                    <ScrollView horizontal={true} contentContainerStyle={styles.inputRow}>
                        {handleUsability()}
                    </ScrollView>
                    <View style={styles.inputRow}>
                        <Text style={styles.labelStyle}>Material:</Text>
                    </View>
                    <View style={styles.inputRow}>
                        <TextInput
                            editable={isMaterialUsable}
                            placeholder="enter text here...  (optional)"
                            style={[styles.textInput]} 
                            value={material} 
                            multiline={true}
                            textAlignVertical="top"
                            scrollEnabled={false}
                            onChangeText={setMaterial}

                            // onScroll={false}
                        />
                    </View>
                    <View style={styles.inputRow}>
                        <Text style={styles.labelStyle}>Description:</Text>
                    </View>
                    <View style={styles.inputRow}>
                        <TextInput
                            placeholder="enter text here...  (optional)"
                            style={[styles.textInput]} 
                            value={description} 
                            multiline={true}
                            textAlignVertical="top"
                            scrollEnabled={false}
                            onChangeText={setDescription}

                            // onScroll={false}
                        />
                    </View>

                 <View style={styles.inputRow}>
                 <NextButton 
                 navigation={navigation} 
                 nextScreen={"Spell Page"} 
                 params={{name, spellLevel, school, castingTime, ritual, range, rangeTypeOption, concentration, duration, usability , description}}
                 checkforChange={() => checkForChange(name, spellLevel, school, castingTime, ritual, range, rangeTypeOption, concentration, duration, usability, description)}/>
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
        fontSize: (FONTSIZE.medium),
        fontWeight: 'bold',
        marginRight: 8,
    },
    input: 
    {
        fontSize: (FONTSIZE.medium),
        // height: "100%",
        width: "45%",
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    weightinput:
    {
        fontSize: (FONTSIZE.medium),
        // height: "100%",
        width: width * .2,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    dropdownTextStyle:
    {
        fontSize: FONTSIZE.small
    },  
    textInput: {
        // width: width * .85,
        // height: height * .2,
        // maxHeight: height * .5,
        // // backgroundColor: 'red',
        borderRadius: width * .02,
        // fontStyle: '',
        // // flex: 1,
        // padding: 10,
        // fontSize: FONTSIZE.medium,
        borderWidth: characterBorderWidth * .5,
        minHeight: height * .1,
        marginHorizontal: width * .05,
        fontStyle: 'italic',
        flex: 1,
        padding: width * .01,
        // backgroundColor: 'red',
        fontSize: FONTSIZE.medium,
        // flexWrap: 'wrapf'
    },
    dropdown: 
    {
        flex: 1,
        minWidth: width * .2,
        // fontSize: FONTSIZE.medium,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },
    dropdownSubrace: {
        width: width * .2,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },
    dropdownSchool: {
        width: width * .35,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },
    placeholderColor:{
        fontSize: (FONTSIZE.medium),
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
        fontSize: (FONTSIZE.medium),
    }, 
});

