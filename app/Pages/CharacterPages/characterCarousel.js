// CharacterCarousel.js
import React, { useRef } from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import CharacterPage1 from './characterPage1';
import CharacterPage2 from './characterPage2';
import CharacterPage3 from './characterPage3';
import CharacterPage4 from './characterPage4';
import { calculateProficiencyBonus, calculateScoreMod, calculateSpellAttackBonus, checkPositive } from '../../../constants/characterinformation/math';


const { width: screenWidth } = Dimensions.get('window');

export default CharacterCarousel =({ route, navigation }) => 
 {

  // Extract parameters from route
  const { name, classes, race, backgrounds, level, selectedRace, str, dex, con, int, wis, cha, selectSkills, subclass, numOfCantrips, numOfLevelSpells, maxHp, selectedEquipments, image, personalityTraits, bonds, ideals, flaw, alliesAndOrgs, additionalFeatures, backstory,
  } = route.params;
    const flatListRef = useRef(null);

    const allSpells =  numOfCantrips.concat(numOfLevelSpells);
    const handleSpellcastingClass = () =>
    {
        if (classes === "Cleric" || classes === "Druid" || classes === "Ranger") {return "WISDOM"}
        else if (classes === "Paladin" || classes === "Bard" || classes === "Warlock" || classes === "Sorcerer") {return "CHARISMA"}
        else if (classes === "Wizard") {return "INTELLIGENCE"} 
        else {return "UNKNOWN in Character Carousel"}
    }
    const handleSpellMod = () =>
    {
        if (classes === "Cleric" || classes === "Druid" || classes === "Ranger") {return wis}
        else if (classes === "Paladin" || classes === "Bard" || classes === "Warlock" || classes === "Sorcerer") {return cha}
        else if (classes === "Wizard") {return int} 
        else {return "N/A"}
    }
    const handleSpellSaveDC = () => {return 8 + calculateScoreMod(handleSpellMod()) + calculateProficiencyBonus(level)}
    const profBonus = () => {return calculateProficiencyBonus(level)}

    const spellAttackBonus = calculateSpellAttackBonus(calculateScoreMod(handleSpellMod()), calculateProficiencyBonus(level))
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
            console.log("Backstory:", backstory)
            console.log("Cantrips:", numOfCantrips)
            console.log("Selected Equipments:",selectedEquipments)
            console.log("To be displayed:", handleSpellSaveDC())
        }
    const data = [
        { key: '1', component: <CharacterPage1 str={str} dex={dex} con={con} int={int} wis={wis} cha={cha} maxHp={maxHp} classes={classes} name={name} level={level} image={image} selectSkills={selectSkills}/> },
        { key: '2', component: <CharacterPage2 str={str} dex={dex} con={con} int={int} wis={wis} cha={cha} maxHp={maxHp} classes={classes} name={name} level={level} image={image} selectSkills={selectSkills}/> },
        { key: '3', component: <CharacterPage3 navigation={navigation} selectedSpells={numOfLevelSpells} selectedCantrips={numOfCantrips} selectedEquipment={selectedEquipments} str={str} dex={dex} con={con} int={int} wis={wis} cha={cha} level={level} classes={classes}/> },
        { key: '4', component: <CharacterPage4 spellcastClass={handleSpellcastingClass()} spellAttackMod={checkPositive(spellAttackBonus)} spellSaveDC={handleSpellSaveDC()} profBonus={profBonus()} spells={allSpells} numOfSpells={numOfLevelSpells}/> },
         //Inventory Screen

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
