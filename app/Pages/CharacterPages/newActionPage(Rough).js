import { View, StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import SelectionButton from "../../../components/buttons/selectionButton";
import { useState } from "react";
import Seperator from "../../../components/seperator";
import { MARTIAL_MELEE_WEAPONS, MARTIAL_RANGED_WEAPONS, SIMPLE_MELEE_WEAPONS, SIMPLE_RANGED_WEAPONS } from "../../../constants/characterinformation/equipment";
import { removeIndefinteArticles_and } from "../characterTab/selectEquipmentScreen";
import { capitalized, globalStyles } from "../../../constants/global";
import NextButton from "../../../components/buttons/nextButton";
import NewPageButton from "../../../components/buttons/newPageButton";
import { useNavigation } from '@react-navigation/native';


export default NewActionPage = ({ navigation, route }) => {
    const { selectedSpells = [], selectedCantrips = [], selectedEquipment = [] } = route.params || {};


    const handleGoBack = () => {
      navigation.goBack();
    };
    
    const [createAction, setCreateAction] = useState([]);

    const allspells = (selectedCantrips.concat(selectedSpells)).filter(sp => sp.castingTime === "1 action" || sp.castingTime === "1 bonus action" || sp.castingTime === "1 reaction")
    const allWeapons =  MARTIAL_MELEE_WEAPONS.concat(SIMPLE_MELEE_WEAPONS).concat(SIMPLE_RANGED_WEAPONS).concat(MARTIAL_RANGED_WEAPONS).map(w => w.title)
    // const selectedWeapons = selectedEquipment.map( e => capitalized(removeIndefinteArticles_and(e)))
    // const selectedWeapons = selectedEquipment.filter((e) =>  allWeapons.includes(capitalized(removeIndefinteArticles_and(e))));
    const selectedWeapons = selectedEquipment.filter((e) => allWeapons.includes(capitalized(removeIndefinteArticles_and(e))));
    const selectedWeaponsCapital = selectedWeapons.map(w => capitalized(removeIndefinteArticles_and(w)))
    // State to track the currently selected action
    const [selectedAction, setSelectedAction] = useState(null);

    // Handle selection logic
    const handleSelection = (actionName) => {
        setSelectedAction((prevAction) => (prevAction === actionName ? null : actionName));
    };

    const handleCreateAction = (actionName) => {
        setCreateAction((prevAction) => {
            if (prevAction.includes(actionName)) {
                // If the action is already in the list, remove it
                return prevAction.filter((action) => action !== actionName);
            } else {
                // Otherwise, add it to the list
                return [...prevAction, actionName];
            }
        });
    };
    const checkForChange = () =>
    {
        console.log("Selected Action:", selectedAction.length);
        if (selectedAction.length === 0)
        {
            Alert.alert("OOPS", "You need to fill all the information")

            return false;
        }
        console.log("Should be true")
        return true;
    };

    const handleSpellAction = (actionName) =>
    {
        if (actionName.includes("bonus action") || actionName.includes("Bonus Action"))
        {
            //Assign it Bonus Action Section
        }
        else if (actionName.includes("reaction") || actionName.includes("Reaction"))
        {
            //Assign it to Reaction Section
        }
        else if (actionName.includes("action") || actionName.includes("Action"))
        {
            //Assign it to Action Section
        }
    }

    const renderNextButton = () =>
    {
        if (selectedAction ==="Spell" || selectedAction ==="Magic-Item" || selectedAction ==="Weapon")
        {
            // console.log("Next")
            // return (<Text style={{alignSelf: 'center', backgroundColor: 'red'}}>Next Button</Text>)
            return (
            <View style={globalStyles.centerRow}>
            {/* <NextButton navigation={navigation} 
                // nextScreen={"Character Page 3"}
                // params={{selectedAction, selectedSpells, selectedCantrips, selectedEquipment}}
                // checkforChange={() => checkForChange() }/> */}
                <TouchableOpacity onPress={handleGoBack}>
                     <Text>NextButton</Text>
                </TouchableOpacity>
            </View>
            )
        }
    } 

    // Render spell names or any other content based on the selected action
    const renderActionContent = () => {
        console.log("Route:", route)
        // console.log("All Weapons:", allWeapons)
        // console.log("Current Equipment:", (selectedWeaponsCapital) )
        if (selectedAction === "Spell") {
            return allspells.map((spell, index) => (
                //Needs to be Changed
            <SelectionButton
                key={index}
                name={spell.name}
                isSelected={createAction.includes(spell.name)} // Compare by name
                onSelectionPress={() => {handleCreateAction(spell.name)}} // Pass only the name
                setCustomMinWidth={20}
            />            ));
        } else if (selectedAction === "Magic-Item") {
            return <Text style={styles.textStyle}>Magic Items content goes here</Text>;
        } else if (selectedAction === "Weapon") {
            return selectedWeaponsCapital.map((weap, index) => (
                //Needs to be Changed
            <SelectionButton
                key={index}
                name={weap}
                isSelected={createAction.includes(weap)} // Compare by name
                onSelectionPress={() => {handleCreateAction(weap)}} // Pass only the name
                setCustomMinWidth={20}
            />            ));
        } else {
            return <Text style={styles.textStyle}>Please select an action type.</Text>;
        }

    };

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.background, flex: 1 }}>
            <ScrollView>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Select an Action Type:</Text>
                <Seperator />
                <SelectionButton
                    name={"Magic-Item"}
                    isSelected={selectedAction === "Magic-Item"}
                    onSelectionPress={() => handleSelection("Magic-Item")}
                />
                <SelectionButton
                    name={"Weapon"}
                    isSelected={selectedAction === "Weapon"}
                    onSelectionPress={() => handleSelection("Weapon")}
                />
                <SelectionButton
                    name={"Spell"}
                    isSelected={selectedAction === "Spell"}
                    onSelectionPress={() => handleSelection("Spell")}
                />            
            </View>
            <View style={{ marginBottom: 30 }}>{renderActionContent()}</View>
            <View style={{marginBottom: 100}}>{renderNextButton()}</View>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: COLORS.background,
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
    },
    textStyle: {
        fontWeight: "bold",
        fontSize: FONTSIZE.xxlarge,
        textAlign: "center",
        marginTop: 10,
    },
    textStyle2: {
        fontWeight: "bold",
        fontSize: FONTSIZE.medium,
        textAlign: "center",
        marginTop: 10,
    },
});
