// CharacterCarousel.js
import React, { useRef } from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import CharacterPage1 from './characterPage1';
import CharacterPage2 from './characterPage2';
import CharacterPage3 from './characterPage3';
import CharacterPage4 from './characterPage4';


const { width: screenWidth } = Dimensions.get('window');

export default CharacterCarousel =({ route, navigation }) => 
 {

  // Extract parameters from route
  const { name, classes, race, backgrounds, level, selectedRace, str, dex, con, int, wis, cha, selectSkills, subclass, numOfCantrips, numOfLevelSpells, maxHp, selectedEquipments, image, personalityTraits, bonds, ideals, flaw, alliesAndOrgs, additionalFeatures, backstory,
  } = route.params;
    const flatListRef = useRef(null);
    const displayValues= () =>
        {
            console.log("NAME:", name)
            console.log("STR:", str )
            console.log("DEX:", dex )
            console.log("CON:", con )
            console.log("INT:", int )
            console.log("WIS:", wis )
            console.log("CHA:", cha )
            console.log("Selected Skills:", selectSkills)
            console.log("Class:", classes )
            console.log("Max Hp:", maxHp)
            console.log("Subclass:", subclass)
        }
    const data = [
        { key: '1', component: <CharacterPage1 str={str} dex={dex} con={con} int={int} wis={wis} cha={cha} maxHp={maxHp} classes={classes} name={name} level={level} image={image} selectSkills={selectSkills}/> },
        { key: '2', component: <CharacterPage2 str={str} dex={dex} con={con} int={int} wis={wis} cha={cha} maxHp={maxHp} classes={classes} name={name} level={level} image={image} selectSkills={selectSkills}/> },
        { key: '3', component: <CharacterPage3 navigation={navigation}/> },
        { key: '4', component: <CharacterPage4 /> },

    ];

    const renderItem = ({ item }) => {
        return (
            <View style={{ width: screenWidth }}>
                        {/* {displayValues()} */}
                {item.component}
            </View>
        );
    };

    return (
        <FlatList
            ref={flatListRef}
            data={data}
            renderItem={renderItem}
            horizontal
            bounces={false}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.key}
        />
    );
}
