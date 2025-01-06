import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import NewCharacterIcon from "../../../components/newCharacterIcon";
import NewCharacterButton from "../../../components/buttons/newCharacterButton";

export default CharacterPage = ({ navigation, route }) => 
    {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        load();
    }, []);

    useEffect(() => {
        if (characters.length > 0) {
            save();
        }
    }, [characters]);

    const save = async () => {
        try {
            await AsyncStorage.setItem("Character1", JSON.stringify(characters));
        } catch (err) {
            console.log(err);
        }
    };

    const load = async () => {
        try {
            const charactersJSON = await AsyncStorage.getItem("Character1");
            if (charactersJSON) {
                setCharacters(JSON.parse(charactersJSON));
            }
        } catch (err) {
            console.log(err);
        }
    };

    const removeCharacter = (index) => {
        const updatedCharacters = characters.filter((_, i) => i !== index); //_ refers to the current item (gets ingnored)
        setCharacters(updatedCharacters);
    };

    const {name, classes, backgrounds, level, selectedRace, str, dex, con, int, wis, cha, selectSkills, subclass, numOfCantrips, numOfLevelSpells, maxHp, selectedEquipments, image} = route.params || {};
    const clearAllCharacters = async () => {
        try {
            await AsyncStorage.removeItem("Character1");
            setCharacters([]); // Reset state
            console.log("All characters cleared!");
        } catch (err) {
            console.log("Error clearing characters:", err);
        }
    };
    
    useEffect(() => {
        if (name) {
            const newCharacter = { name, classes, backgrounds, level, race: selectedRace, str, dex, con, int, wis, cha, selectSkills, subclass, numOfCantrips, numOfLevelSpells, maxHp, selectedEquipments, image};
            setCharacters((prevCharacters) => {
                // Avoid duplicating the same character in the array
                const alreadyExists = prevCharacters.some((character) => character.name === newCharacter.name);
                return alreadyExists ? prevCharacters : [...prevCharacters, newCharacter];
            });
        }
    }, [name]); // Only trigger when 'name' changes

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.background, flex: 1 }}>
            <ScrollView>
                <View style={styles.viewStyle}>
                    {/* {clearAllCharacters()} */}
                    {characters.map((character, index) => (
                        <NewCharacterIcon
                            key={index}
                            name={character.name}
                            navigation={navigation}
                            classes={character.classes}                            
                            level={character.level}
                            race={character.race}
                            image={character.image}
                            str={character.str} dex={character.dex} con={character.con} int={character.int} wis={character.wis} cha={character.cha}
                            numOfCantrips={character.numOfCantrips}
                            numOfLevelSpells={character.numOfLevelSpells}
                            maxHp={character.maxHp}
                            selectedEquipments={character.selectedEquipments}
                            subclass={character.subclass}
                            selectSkills={character.selectSkills}
                            
                            removeCharacter={() => removeCharacter(index)}
                        />
                    ))}
                </View>
            </ScrollView>
            <NewCharacterButton navigation={navigation} nextScreen={"Create Character"} />
        </SafeAreaView>
    );
};

const addSize = 60;
const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: COLORS.background,
        display: 'flex',
        alignItems: 'center',
        flex: 1,
    },
    addButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.mainColor,
        width: addSize,
        height: addSize,
        borderRadius: 40,
        borderWidth: 5,
        position: 'absolute',
        bottom: 10,
    },
});
