import { View, StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import SelectionButton from "../../../components/buttons/selectionButton";
import { useState } from "react";
import Seperator from "../../../components/seperator";

export default NewActionPage = ({ route }) => {
    const { selectedSpells, selectedCantrips, selectedWeapons } = route.params;
    const allspells = selectedCantrips.concat(selectedSpells)

    // State to track the currently selected action
    const [selectedAction, setSelectedAction] = useState(null);

    // Handle selection logic
    const handleSelection = (actionName) => {
        setSelectedAction((prevAction) => (prevAction === actionName ? null : actionName));
    };

    // Render spell names or any other content based on the selected action
    const renderActionContent = () => {
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
            return <Text style={styles.textStyle}>Weapon content goes here</Text>;
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
                <View style={{ marginTop: 20 }}>{renderActionContent()}</View>
            
            </View>
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
