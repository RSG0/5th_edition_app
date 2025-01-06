import { View, StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import SelectionButton from "../../../components/buttons/selectionButton";
import { useState } from "react";
import Seperator from "../../../components/seperator";
import { MARTIAL_MELEE_WEAPONS, MARTIAL_RANGED_WEAPONS, SIMPLE_MELEE_WEAPONS, SIMPLE_RANGED_WEAPONS } from "../../../constants/characterinformation/equipment";
import { removeIndefinteArticles_and } from "../characterTab/selectEquipmentScreen";
import { capitalized } from "../../../constants/global";

export default NewActionPage = ({ route }) => {
    const { selectedSpells, selectedCantrips, selectedEquipment } = route.params;
    const allspells = selectedCantrips.concat(selectedSpells)
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

    // Render spell names or any other content based on the selected action
    const renderActionContent = () => {
        console.log("All Weapons:", allWeapons)
        console.log("Current Equipment:", (selectedWeaponsCapital) )
        if (selectedAction === "Spell") {
            return allspells.map((spell, index) => (
                //Needs to be Changed
                <Text key={index} style={styles.textStyle2}>
                    {spell.name}
                </Text>
            ));
        } else if (selectedAction === "Magic-Item") {
            return <Text style={styles.textStyle}>Magic Items content goes here</Text>;
        } else if (selectedAction === "Weapon") {
            return selectedWeaponsCapital.map((equip, i) =>
                (
                    <Text key={i} style={styles.textStyle2}>
                        {}
                        {equip}
                    </Text>                
                ));
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
            <View style={{ marginTop: 20 }}>{renderActionContent()}</View>

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
