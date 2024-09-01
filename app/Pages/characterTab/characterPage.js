import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import NewCharacterIcon from "../../../components/newCharacterIcon";
import NewCharacterButton from "../../../components/buttons/newCharacterButton";

export default CharacterPage = ({ navigation, route }) => {
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
        const updatedCharacters = characters.filter((_, i) => i !== index); //_ refers to the current item
        setCharacters(updatedCharacters);
    };

    const { name, classes, level, selectedRace, image } = route.params || {};

    useEffect(() => {
        if (name) {
            const newCharacter = { name, classes, level, race: selectedRace, image };
            setCharacters((prevCharacters) => [...prevCharacters, newCharacter]);
        }
    }, [name, classes, level, selectedRace, image]);

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.background, flex: 1 }}>
            <ScrollView>
                <View style={styles.viewStyle}>
                    {characters.map((character, index) => (
                        <NewCharacterIcon
                            key={index}
                            name={character.name}
                            classes={character.classes}
                            level={character.level}
                            race={character.race}
                            image={character.image}
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
