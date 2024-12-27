import { Button, ScrollView, StyleSheet, Text, TextInput, View, Keyboard, TouchableWithoutFeedback, Alert, Dimensions } from "react-native";
import { characterBorderWidth, COLORS, FONT, FONTSIZE } from "../../constants/theme";
import { Dropdown } from "react-native-element-dropdown";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NextButton from "../../components/buttons/nextButton";
import { MAGICITEMS_RARITY, MAGICITEMS_TYPE as MAGICITEMS_Type, MAGICITEMS_TYPE_WEAPONS } from "../../constants/characterinformation/magicitems";
import { NUMBER_TWENTY, TRUEORFALSE } from "../../constants/characterinformation/characterinfo";


const {width, height} = Dimensions.get('screen');

export default NewMagicItemPage = ({navigation}) => {

    const [name, setName] = useState("Test03");
    const [itemType, setItemType] = useState(null);
    const [weaponType, setWeaponType] = useState(null);
    const [isChargable, setIsChargable] = useState(null);
    const [numOfCharges, setNumOfCharges] = useState(null);
    const [attunement, setAttunment] = useState(false);
    const [rarity, setRarity] = useState(null);
    const [description, setDescription] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
    const [weight, setWeight] = useState(0);

    const [itemOptions, setItemOptions] = useState([]);
    const [weaponOptions, setWeaponOptions] = useState([]);
    const [numOfChargesOptions, setNumOfChargesOptions] = useState([]);

    const [isChargableOptions, setIsChargableOptions] = useState([]);
    const [attunmentOptions, setAttunementOptions] = useState([]);
    const [rarityOptions, setRarityOptions] = useState([]);


    const checkForChange = (nameCheck, itemCheck, weaponCheck, chargeCheck, numOfChargeCheck, attunementCheck, rarityCheck, descriptionCheck, weightCheck) =>
    {
        if (!nameCheck || itemCheck == null || chargeCheck == null || attunementCheck == null || rarityCheck == null || !weightCheck)
        {
            Alert.alert("OOPS", "You need to fill all the information")
            return false; //This should be false
        }
        return true;
    };
    const handleItemChange = (item) =>
    {
        setItemType(item.label);
        if (item.label == "Weapon")
        {
            setWeaponOptions(MAGICITEMS_TYPE_WEAPONS);
        }
        else
        {
            setWeaponOptions([]);
        }
    }
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
                         <Text style={styles.labelStyle}>Type:</Text>
                         <Dropdown style={styles.dropdown}
                         selectedTextStyle={styles.dropdownTextStyle}
                         data={MAGICITEMS_Type}
                         value={itemType}
                         labelField={"label"}
                         valueField={"label"}
                         onChange={handleItemChange}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="..."
                         maxHeight={200}
                         />
                        <Text style={styles.labelStyle}>Weapon Type:</Text>
                        <Dropdown
                           style={styles.dropdownLevel}
                           selectedTextStyle={styles.dropdownTextStyle}
                           data={weaponOptions}
                           value={weaponType}
                           labelField={"label"}
                           valueField={"label"}
                           onChange={(item) => setWeaponType(item.label)}
                           placeholderStyle={styles.placeholderColor}
                           placeholder="..."
                           maxHeight={200}
                        />
                     </View>
                     <View style={styles.inputRow}>
                         <Text style={styles.labelStyle}>Charges:</Text>
                         <Dropdown style={styles.dropdown}
                         selectedTextStyle={styles.dropdownTextStyle}
                         data={TRUEORFALSE}
                         value={isChargable}
                         labelField={"label"}
                         valueField={"label"}
                         onChange={handleChargeChange}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="..."
                         maxHeight={200}
                         />
                         <Text style={styles.labelStyle}># of Charges:</Text>
                         <Dropdown style={[styles.dropdown, {minWidth: width * .1}]}
                         selectedTextStyle={styles.dropdownTextStyle}
                         data={numOfChargesOptions}
                         value={numOfCharges}
                         labelField={"value"}
                         valueField={"value"}
                         onChange={(item) => setNumOfCharges(item.value)}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="--"
                         maxHeight={200} />
                     </View>
                     <View style={styles.inputRow}>

                     </View>
                    <View style={styles.inputRow}>
                        <Text style={styles.labelStyle}>Attunment:</Text>
                        <Dropdown style={styles.dropdown}
                         selectedTextStyle={styles.dropdownTextStyle}
                         data={TRUEORFALSE}
                         value={attunement}
                         labelField={"label"}
                         valueField={"label"}
                         onChange={item => setAttunment(item.label)}
                         placeholderStyle={styles.placeholderColor}
                         placeholder="---"
                         maxHeight={200}
                         />

                        <Text style={styles.labelStyle}>Rarity:</Text>
                        <Dropdown style={styles.dropdown}
                         selectedTextStyle={styles.dropdownTextStyle}
                         data={MAGICITEMS_RARITY}
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
                     <Text style={styles.labelStyle}>Weight:</Text>
                     <TextInput style={styles.weightinput} 
                        keyboardType="numeric"
                        placeholderStyle={styles} 
                        placeholder={"..."} 
                        value={weight} 
                        onChangeText={setWeight}/>
                 </View>
                 <View style={styles.inputRow}>
                 <NextButton 
                 navigation={navigation} 
                 nextScreen={"Magic-Item Page"} 
                 params={{name, itemType, weaponType, isChargable, numOfCharges, attunement, rarity, weight, description}}
                 checkforChange={() => checkForChange(name, itemType, weaponType, isChargable, numOfCharges, attunement, rarity, description, weight)}/>
                 </View>
                    {console.log("Name: " + name)}
                    {console.log("ItemType: " + itemType)}
                    {console.log("WeaponsType: " + weaponType)}
                    {console.log("isChargable: " + isChargable)}
                    {console.log("numOfCharges: " + numOfCharges)}
                    {console.log("Attunment: " + attunement)}
                    {console.log("Rarity: " + rarity)}
                    {console.log("Description: " + description)}
                    {console.log("Weight: " + weight)}
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
    dropdownLevel: {
        width: width * .2,
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

