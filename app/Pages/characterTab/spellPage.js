import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // package provides a variety of icons including up and down arrows.
import { CANTRIPS, FIRST_LEVEL_SPELLS, SECOND_LEVEL_SPELLS, THIRD_LEVEL_SPELLS, FOURTH_LEVEL_SPELLS } from '../../../constants/characterinformation/spells';
import { COLORS } from '../../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import NextButton from '../../../components/buttons/nextButton';

export default SpellPage = ({navigation, route}) => 
{


  const {name, classes, backgrounds, level, races, int, wis, cha} = route.params;

  const checkForChange = () =>
  {
    //include important infomration
    return true
  }

  // drops down spells
  const [cantripDropdown, setCantripDropdown] = useState(false); 
  const [firstLevelDropdown, setFirstLevelDropdown] = useState(false);
  const [secondLevelDropdown, setSecondLevelDropdown] = useState(false);
  const [thirdLevelDropdown, setThirdLevelDropdown] = useState(false);
  const [fourthLevelDropdown, setFourthLevelDropdown] = useState(false);


  const [isSecondLevel, setIsSecondLevel] = useState(false);
  const [isThirdLevel, setIsThirdLevel] = useState(false);
  const [isFourthLevel, setIsFourthLevel] = useState(false);


    useEffect( () =>
    {
      calculateLevelOfSpellsKnown()
    }, [classes])
    const calculateScoreMod = (score) =>
    {
      return Math.floor((score - 10)/2);
    }
    const calculateNumOfCantrips = () =>
    {
      if (classes == "Artificer")
      {
        if (level <= 9) return 2;
        else if (level <= 13) return 3;
        else if (level <= 20) return 4;
      }
      else if (classes == "Bard" || classes == "Druid")
        {
          if (level <= 3) return 2;
          else if (level <= 9) return 3;
          else if (level <= 20) return 4;
        }
      else if (classes == "Cleric")
      {
        if (level <= 3) return 3;
        else if (level <= 9) return 4;
        else if (level <= 20) return 5;
      }
      else if (classes == "Druid" || classes == "Wizard")
        {
          if (level <= 3) return 3;
          else if (level <= 9) return 4;
          else if (level <= 20) return 5;
        }
      else if (classes == "Sorceror")
        {
          if (level <= 3) return 4;
          else if (level <= 9) return 5;
          else if (level <= 20) return 6;
        }
    }
    const calculateNumOfSpellsKnown = () =>
    {
      if (classes === "Cleric" || classes === "Druid" || classes === "Ranger") {return calculateScoreMod(wis)}
      else if (classes === "Wizard" || classes === "Artificer") {return calculateScoreMod(int)}
      else if (classes === "Paladin" || classes === "Warlock" || classes === "Bard") {return calculateScoreMod(cha)}
    }
    const calculateLevelOfSpellsKnown = () =>
    {
      if (classes === "Cleric" || classes === "Wizard" || classes === "Sorceror" || classes === "Druid")
      {
        if (level >= 17) {} // opens 9th level spells
        if (level >= 15) {} // opens 8th level spells
        if (level >= 13) {} // opens 7th level spells
        if (level >= 11) {} // opens 6th level spells
        if (level >= 9) {}  // opens 5th level spells
        if (level >= 7) {setIsFourthLevel(true)}  // opens 4th level spells
        if (level >= 5) {setIsThirdLevel(true)}  // opens 3rd level spells
        if (level >= 3) {setIsSecondLevel(true)}  // opens 2rd level spells

          
      }
      else if (classes === "Paladin" || classes === "Ranger")
      {

      }
    }
    const renderCantrips = () =>
    {
      return(
        <Text>Cantrips: __/{calculateNumOfCantrips()}</Text>
      )
    }
    const renderSpells = () =>
    {
      const numOfSpellsKnown = () =>
      {
        if (calculateNumOfSpellsKnown() + Number(level) < 1)
        {
          return 1;
        }
        return calculateNumOfSpellsKnown() + Number(level)
      }
      return(
        <Text>Prepared Spells: ___/{numOfSpellsKnown()} </Text> // Class Level + Class MOD
      )
    }
    const toggleDropdown = (toggle, toggleState) => {
        toggle(!toggleState);
    };
    const renderDropdown = (spellList) =>
    {
      // const availableSpells = CANTRIPS.filter(spell => spell.usableBy.map(class_in_list => {class_in_list === classes; console.log(class_in_list)}))
      const availableSpells = spellList.filter(spell => spell.usableBy.includes(classes))
      console.log(classes);
      availableSpells.forEach(spell => console.log(spell.name))
      const availableString = availableSpells.map(spells => spells.name).join(", ")
      console.log(availableString)
        return(
        <>
        <Text>{availableString}</Text>
        {/* {availableSpells.map(spell => (<Text key={spell.name}>{spell.name}</Text>)  )} */}
        </>
      )
    }
    const dropdown = (text, setState, state, spellList, isActive) =>
    {
      if (isActive)
      {
      return(
          <View>
            <View style={[styles.dropdownClosed, {marginBottom: state? 0: 10 }]}>
            <TouchableOpacity onPress={() => toggleDropdown(setState, state)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 18 }}>{text}</Text>
                <AntDesign name={state ? 'up' : 'down'} size={24} color="black" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
            </View>
  
        {/**This feature is a JSX exclusive */}
      {state && (
          <View style={{ }}>
          {/* <Text>This is more information about the item.</Text> */}
          <Text>{renderDropdown(spellList)}</Text>
          
        </View>
      )}
      </View>
      )
      }
    }

  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        {renderCantrips()}
        {renderSpells()}
        <Text>Chosen Class: {classes}</Text>
        <Text>Prepared Spells:</Text>
        {dropdown("Cantrips", setCantripDropdown, cantripDropdown, CANTRIPS, true)}
        {dropdown("1st Level Spells", setFirstLevelDropdown, firstLevelDropdown, FIRST_LEVEL_SPELLS, true)}
        {dropdown("2nd Level Spells", setSecondLevelDropdown, secondLevelDropdown, SECOND_LEVEL_SPELLS, isSecondLevel)}
        {dropdown("3rd Level Spells", setThirdLevelDropdown, thirdLevelDropdown, THIRD_LEVEL_SPELLS, isThirdLevel)}
        {dropdown("4th Level Spells", setFourthLevelDropdown, fourthLevelDropdown, FOURTH_LEVEL_SPELLS, isFourthLevel)}
        <View style={styles.nextButton}> 
          <NextButton
            navigation={navigation}
            params={{name, classes, backgrounds, level, races, int, wis, cha}}
            checkforChange={() => checkForChange()}
            nextScreen={"Hit Point"}
          />
          </View>

        </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create(
{
  dropdownClosed:
  {
    backgroundColor: COLORS.dropdown,
    // marginBottom: 10,
    borderRadius: 10,
    padding: 10
  },  
  background: 
  {
    flex: 1,
    padding: 20,
    // alignContent: 'center',
    // alignItems: 'center',
    backgroundColor: COLORS.background  
  },
  nextButton:
  {
    alignContent: 'center',
    alignItems: 'center',
  }
})