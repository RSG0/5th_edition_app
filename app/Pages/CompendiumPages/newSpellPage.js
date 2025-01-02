import { Button, ScrollView, StyleSheet, Text, TextInput, View, Alert, Dimensions } from "react-native";
import { characterBorderWidth, COLORS, FONT, FONTSIZE } from "../../../constants/theme";
import { Dropdown } from "react-native-element-dropdown";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NextButton from "../../../components/buttons/nextButton";
import { CASTING_TIMES, COMPONENTS, DAMAGE_TYPES, DICE_TYPES, DURATION_TYPES, NUMBER_TWENTY, RANGE_TYPES, RANGES, SPECIFIC_RANGE_TYPES, SPELL_LEVEL, SPELLCASTERS, TRUEORFALSE } from "../../../constants/characterinformation/characterinfo";
import { schools_of_magic } from "../../../constants/characterinformation/spells";
import { capitalized } from "../../../constants/global";
import SelectionButton from "../../../components/buttons/selectionButton";


const {width, height} = Dimensions.get('screen');

export default NewMagicSpellPage = ({navigation}) => {

    const [name, setName] = useState("Red's Groovy Lute");
    const [spellLevel, setSpellLevel] = useState(null);
    const [school, setSchool] = useState(null);
    const [castingTime, setCastingTime] = useState(null);
    const [ritual, setRitual] = useState(false);
    const [rangeDrop, setRangeDrop] = useState(false);
    const [range, setRange] = useState(false);
    const [rangeType, setRangeType] = useState(false);
    const [concentration, setConcentration] = useState(null);
    const [duration, setDuration] = useState(null);

    const [components, setComponents] = useState([]);
    const [usableBy, setUsableBy] = useState([]);

    const [isMaterialUsable, setIsMaterialVisible] = useState(false);
    const [material, setMaterial] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.");
    const [description, setDescription] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");

    const [damageTORF, setDamageTORF] = useState(false);
    const [effect, setEffect] = useState(false);
    const [damageType, setDamageType] = useState(false);
    const [numOfDice, setNumOfDice] = useState(false);
    const [dice, setDice] = useState(false);

    const [rangeTypeOption, setRangeTypeOption] = useState([]);
    const [damageTypeOption, setDamageTypeOption] = useState([]);
    const [numOfDiceOptions, setNumOfDiceOptions] = useState([]);
    const [diceOptions, setDiceOptions] = useState([]);

    const checkForChange = (nameCheck, spellLevelCheck, schoolCheck, castingTimeCheck, ritualCheck, rangeCheck, rangeTypeCheck, concentration, duration, usability, description) =>
    {
        if (!nameCheck || spellLevelCheck == null || castingTimeCheck == null || rangeCheck == null || rangeTypeCheck == null || !duration || !schoolCheck || !ritualCheck || !concentration || !usability || !description)
        {
            if (description)
            {
                console.log("Decription Exists")
            }
            if (schoolCheck)
            {
                console.log("School Exists")
            }
            if (duration)
            {
                console.log("Duration Exists")
            }
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
    useEffect(() =>
    {
        handleRange(rangeDrop, rangeType)
    }, [rangeDrop, rangeType])
    // useEffect(() => 
    // {
    //     console.log(name);
    //     console.log(spellLevel);
    //     console.log(school)
    //     console.log(castingTime)
    //     console.log(ritual)
    //     console.log(range)
    //     console.log(rangeType)
    //     console.log(concentration)
    //     console.log(duration)
    //     console.log(damageTORF)
    //     console.log(damageType)
    //     console.log(numOfDice)
    //     console.log(dice)
    //     console.log(isVocal)
    //     console.log(isSomatic)
    //     console.log(isMaterial)
    //     console.log(usableBy)
    //     console.log(material)
    //     console.log("Effect:", effect)
    //     console.log("Description:",description)

    // },[description])
    useEffect(()=>
    {
        handleDamageDie();
    }, [numOfDice, dice])
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
    const handleDamage = (item) =>
    {
        setDamageTORF(item.label)
        if (item.label === "True" || item === "true")
        {
            setDamageTypeOption(DAMAGE_TYPES)
            setNumOfDiceOptions(NUMBER_TWENTY);
            setDiceOptions(DICE_TYPES)
        }
        else if (item.label === "False" || item === "false")
        {
            setDamageTypeOption([])
            setNumOfDiceOptions([]);
            setDiceOptions([])
        }
    }
    const handleRangeChange = (item) =>
        {

            setRangeDrop(item.label);
            console.log("Item:", item.label)
            // console.log(range)
            if (item.label === "Self")
            {
                setRangeTypeOption(SPECIFIC_RANGE_TYPES);
            }
            else if (item.label === "Touch")
            {
                setRangeTypeOption([]); //should be empty
            }
            else
            {
                setRangeTypeOption(RANGE_TYPES);
            }

        }
    const handleRange = (rng, rngType) =>
    {
        if (rng === "Self" && rngType !== "None")
        {
            setRange(rng + " (" + rngType + ")")
        }
        else if (rngType === "None")
        {
            setRange(rng)
        }
        else if (rngType !== "None")
        {
            setRange(rng + " (" + rngType + ")")
        }
        else if (rng === "Self" && rngType === "None")
        {
            setRange(rng)
        }
        
        // else
        // {
        //     console.log("Doing nothing")
        // }
    }
    const handleCasterSelectionPress = (name) => {
        setUsableBy((prevSelected) => {
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
        // console.log(components)

    };
    const handleDamageDie = () =>
    {
        console.log("numOfDice:", numOfDice)
        console.log("dice:", dice)
        setEffect(numOfDice + dice)
    }

    const handleComponents = (components) => {
        // Determine if the array contains specific characters
        const isVocal = components.includes("Vocal"); // Check if "V" is in the array
        const isSomatic = components.includes("Somatic"); // Check if "S" is in the array
        const requiresMaterials = components.includes("Material"); // Check if "M" is in the array
    
        // Return the values to be used in a component
        return {
            isVocal,
            isSomatic,
            requiresMaterials,
        };
    };
        // const handleUsability = () =>
        // {
        //     return(
        //     SPELLCASTERS.map((caster, i) =>
        //     {
        //         <SelectionButton key={i} name={caster.label} onSelectionPress={handleSelectionPress} isSelected={usability.includes(caster.label)} disableFixedWidth={true}/> 
        //     }));
        // };
        const renderUsabilityButtons = () => {
            return SPELLCASTERS.map((caster, i) => (
                <SelectionButton
                    setCustomMinWidth={width * .15}
                    setHorizontalMargin={width *.005}
                    key={i}
                    name={caster.label}
                    onSelectionPress={handleCasterSelectionPress} 
                    isSelected={usableBy.includes(caster.label)} 
                    disableFixedWidth={true}
                />
            ));
        };
        const renderComponentsButtons = () => {
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

    const isVocal = handleComponents(components).isVocal
    const isSomatic = handleComponents(components).isSomatic
    const isMaterial = handleComponents(components).requiresMaterials

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
                         onChange={item => setSpellLevel(item.label)}
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
                           onChange={item => setSchool(item.label)}
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
                         value={rangeDrop}
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
                         value={rangeType}
                        labelField={"label"}
                         valueField={"label"}
                         onChange={item => setRangeType(item.label)}
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
                        <Text style={styles.labelStyle}>Damage:</Text>
                        <Dropdown style={[styles.dropdown, {minWidth: "7%"}]}
                         selectedTextStyle={styles.dropdownTextStyle}
                         data={TRUEORFALSE}
                         value={damageTORF}
                         labelField={"label"}
                         valueField={"label"}
                         onChange={handleDamage}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="---"
                         maxHeight={200}
                         />
                        <Text style={styles.labelStyle}>Dmg T:</Text>
                        <Dropdown style={styles.dropdown}
                         selectedTextStyle={styles.dropdownTextStyle}
                         data={damageTypeOption}
                         value={damageType}
                        labelField={"label"}
                         valueField={"label"}
                         onChange={item => setDamageType(item.label)}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="---"
                         maxHeight={200}
                         />
                    </View>

                    <View style={styles.inputRow}>
                        <Text style={styles.labelStyle}>Num Of Dice:</Text>
                        <Dropdown style={[styles.dropdownNumOfDice]}
                         selectedTextStyle={styles.dropdownTextStyle}
                         data={numOfDiceOptions}
                         value={numOfDice}
                         labelField={"value"}
                         valueField={"value"}
                         onChange={item => setNumOfDice(item.value)}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="--"
                         maxHeight={200}/>
                        <Text style={styles.labelStyle}>Die:</Text>
                        <Dropdown style={[styles.dropdown, {minWidth: "5%"} ]}
                         selectedTextStyle={styles.dropdownTextStyle}
                         data={diceOptions}
                         value={dice}
                        labelField={"label"}
                         valueField={"label"}
                         onChange={item => [setDice(item.label), handleDamageDie]}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="---"
                         maxHeight={200}
                         />
                    </View>

                    <View style={styles.inputRow}>
                        <Text style={styles.labelStyle}>Components:</Text>
                        <ScrollView horizontal={true} contentContainerStyle={styles.inputRow}>
                        {renderComponentsButtons()}
                    </ScrollView>
                    </View>

                    <View style={styles.inputRow}>
                        <Text style={styles.labelStyle}>Usable By:</Text>
                    </View>
                    <ScrollView horizontal={true} contentContainerStyle={styles.inputRow}>
                        {renderUsabilityButtons()}
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
                 nextScreen={"Spells Page"} 
                 params={{name, school, range, effect, damageTORF, castingTime, damageType, dice, ritual, isVocal, isSomatic, description, isSomatic, isMaterial, spellLevel, usableBy, duration, concentration, material}}
                 checkforChange={() => checkForChange(name, spellLevel, school, castingTime, ritual, range, rangeTypeOption, concentration, duration, usableBy, description, concentration, material)}/>
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
    dropdownNumOfDice: 
    {
        minWidth: width * .15,
        // fontSize: FONTSIZE.medium,
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

