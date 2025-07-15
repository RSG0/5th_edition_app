import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import NewCharacterIcon from "../../../components/newCharacterIcon";
import NewCharacterButton from "../../../components/buttons/newCharacterButton";

export default CharacterPage = ({ navigation, route }) => 
    {
    const [characters, setCharacters] = useState([]);
    const isInitialLoad = useRef(true); //Prevent save on first load
    const [isLoaded, setIsLoaded] = useState(false);

    //Loads when screen is loaded
    useEffect(() => {
        load();
    }, []);

    //Occurs when new character is added
    useEffect(() => {
        if (isInitialLoad.current) {
            isInitialLoad.current = false;
            return;
        }
        save();
    }, [characters]);

    
    useFocusEffect(
        useCallback(() => 
        {
            console.log("Reloading on focus");
            load();
            return () => 
            {
                console.log("Cleanup on unfocus (optional)");
            };
        }, [])
    );

    const save = async () => {
        try {
            await AsyncStorage.setItem("Character1", JSON.stringify(characters));
            console.log("Character saved")
        } catch (err) {
            console.log(err);
        }
    };

    const load = async () => {
        try {
            const charactersJSON = await AsyncStorage.getItem("Character1");
            if (charactersJSON) {
                setCharacters(JSON.parse(charactersJSON));
                console.log("Characters loaded");
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoaded(true); 
        }
    };

    const removeCharacter = (index) => {
        const updatedCharacters = characters.filter((_, i) => i !== index); //_ refers to the current item (gets ingnored)
        setCharacters(updatedCharacters);
    };

    const {name, classes, backgrounds, level, selectedRace, str, dex, con, int, wis, cha, selectSkills, subclass, numOfCantrips, numOfLevelSpells, maxHp, selectedEquipments, image} = route.params || {};
    
    useEffect(() => {
        if (!isLoaded) return; // Wait until characters are loaded

        if (name) {
            const newCharacter = { name, classes, backgrounds, level, race: selectedRace, str, dex, con, int, wis, cha, selectSkills, subclass, numOfCantrips, numOfLevelSpells, maxHp, selectedEquipments, image };
            setCharacters((prevCharacters) => {
                const alreadyExists = prevCharacters.some((c) => c.name === newCharacter.name);
                return alreadyExists ? prevCharacters : [...prevCharacters, newCharacter];
            });
        }
    }, [isLoaded, name]);

    useEffect(() => {
        console.log("Loaded characters:", characters);
    }, [characters]);

    useEffect(() => {
        console.log("Received params:", route.params);
    }, [route.params]);

    useEffect(() => {
    console.log("params:", route.params);
    }, [route.params]);

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
                {/* <TouchableOpacity style={styles.addButton} onPress={clearAllCharacters}/> */}
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
