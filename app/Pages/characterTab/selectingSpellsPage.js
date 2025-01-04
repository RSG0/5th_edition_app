import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // package provides a variety of icons including up and down arrows.
import { CANTRIPS, FIRST_LEVEL_SPELLS, SECOND_LEVEL_SPELLS, THIRD_LEVEL_SPELLS, FOURTH_LEVEL_SPELLS } from '../../../constants/characterinformation/spells';
import { COLORS, FONT } from '../../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import NextButton from '../../../components/buttons/nextButton';
import { FONTSIZE } from '../../../constants/theme';
import SelectionButton from '../../../components/buttons/selectionButton';

export default SpellPage = ({navigation, route}) => 
{


  const {name, classes, backgrounds, level, selectedRace, str, dex, con, int, wis, cha, selectSkills, subclass} = route.params;

  const checkForChange = () =>
  {
    if ((numOfLevelSpells.length !== numOfSpellsKnown() ) && (numOfCantrips.length !== calculateNumOfCantrips ()))
    {
      console.log(`Number of Level Spells: ${numOfLevelSpells.length}`)
      console.log(`Number of Level Spells: ${numOfLevelSpells}`)
      console.log(`Number of Level Spells Known: ${numOfSpellsKnown()}`)
      console.log(`Number of Cantrips Known: ${calculateNumOfCantrips()}`)

      Alert.alert("OOPS", "You need to fill all the information")
      return false;
    }
    //include important infomration
    return true
  }

  // 
  // Drops down spells
  const [cantripDropdown, setCantripDropdown] = useState(false); 
  const [firstLevelDropdown, setFirstLevelDropdown] = useState(false);
  const [secondLevelDropdown, setSecondLevelDropdown] = useState(false);
  const [thirdLevelDropdown, setThirdLevelDropdown] = useState(false);
  const [fourthLevelDropdown, setFourthLevelDropdown] = useState(false);

  const [isSpellcaster, setIsSpellcaster] = useState(false); 

  const [isSecondLevel, setIsSecondLevel] = useState(false);
  const [isThirdLevel, setIsThirdLevel] = useState(false);
  const [isFourthLevel, setIsFourthLevel] = useState(false);

  // const [numOfFirstLevelSpells, setNumOfFirstLevelSpells] = useState([]);
  const [numOfLevelSpells, setNumOfLevelSpells] = useState([]);
  const [numOfCantrips, setNumOfCantrips] = useState([]);


    useEffect( () =>
    {
      console.log("Classes: " + classes);
      verifySpellcaster()
      // console.log(isSpellcaster.length)
      calculateLevelOfSpellsKnown()
    }, [classes])

    const verifySpellcaster = () =>
    {
      if (classes === "Fighter" || classes === "Monk" || classes === "Barbarian") {setIsSpellcaster(false)} //
      else {setIsSpellcaster(true)}
    }
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
      else if (classes == "Sorcerer")
        {
          if (level <= 3) return 4;
          else if (level <= 9) return 5;
          else if (level <= 20) return 6;
        }
      else 
      {
        //ERROR
        return -1;
      }
    }
    const calculateRelavantMOD = () =>
    {
      if (classes === "Cleric" || classes === "Druid" || classes === "Ranger") {return calculateScoreMod(wis)}
      else if (classes === "Wizard" || classes === "Artificer") {return calculateScoreMod(int)}
      else if (classes === "Paladin" || classes === "Warlock" || classes === "Bard" || classes === "Sorcerer") {return calculateScoreMod(cha)}
    }
    const calculateLevelOfSpellsKnown = () =>
    {
      if (classes === "Cleric" || classes === "Wizard" || classes === "Sorcerer" || classes === "Druid")
      {
        //5th-9th still require spells to be added to spells.js
        if (level >= 17) {} // opens 9th level spells
        if (level >= 15) {} // opens 8th level spells
        if (level >= 13) {} // opens 7th level spells
        if (level >= 11) {} // opens 6th level spells
        if (level >= 9) {}  // opens 5th level spells
        if (level >= 7) {setIsFourthLevel(true)}  // opens 4th level spells
        if (level >= 5) {setIsThirdLevel(true)}  // opens 3rd level spells
        if (level >= 3) {setIsSecondLevel(true)}  // opens 2rd level spells
          
      }
      else if (classes === "Paladin" || classes === "Ranger") //Paladin and Ranger are half casters and require different spells
      {
        if (level >= 17) {}  // opens 5th level spells
        if (level >= 13) {setIsFourthLevel(true)}  // opens 4th level spells
        if (level >= 9) {setIsThirdLevel(true)}  // opens 3rd level spells
        if (level >= 5) {setIsSecondLevel(true)}  // opens 2rd level spells
      }
    }
    const renderCantrips = () =>
    {
      return(
        <Text style={{fontSize: FONTSIZE.medium}}>Cantrips: {numOfCantrips.length}/{calculateNumOfCantrips()}</Text>
      )
    }
    const renderAll = () =>
  {
    if (isSpellcaster)
    {
    return(      
      <View>
      {renderCantrips()}
      {renderSpells()}
      <Text style={{fontSize: FONTSIZE.medium}}>Chosen Class: {classes}</Text>
      <Text style={{fontSize: FONTSIZE.medium}}>Prepared Spells:</Text>
      </View>  )
    }
    else 
    {
      return(<Text style={styles.textStyle}>No Spells currently available</Text>)
    }
  }

  const numOfSpellsKnown = () =>
    {
      if (calculateRelavantMOD() + Number(level) < 1)
      {
        // console.log("calculateRelavantMOD" + calculateRelavantMOD() );
        // console.log("Level:", level);
        return 1; //Further testing is needed to see if this works as intended
      }
      return calculateRelavantMOD() + Number(level)
    }
  
  // const numOfCantripsKnown = () =>
  // {
  //   if (classes === "Wizard" || classes === "Cleric")
  //   {

  //   }
  //   else if (classes === "Sorcerer" || )
  //   {}
  // }
    const renderSpells = () =>
    {
      // console.log("NumOfCantrips:", numOfCantrips.length);

      // console.log("NumOfLevelSpells:", numOfLevelSpells.length);
      return(
        <Text style={{fontSize: FONTSIZE.medium}}>Prepared Spells: {numOfLevelSpells.length}/{numOfSpellsKnown()} </Text> // Class Level + Class MOD
      )
    }
    const toggleDropdown = (toggle, toggleState) => {
        toggle(!toggleState);
    };
    const renderDropdown = (spellList) =>
    {
      // const availableSpells = CANTRIPS.filter(spell => spell.usableBy.map(class_in_list => {class_in_list === classes; console.log(class_in_list)}))
      const availableSpells = spellList.filter(spell => spell.usableBy.includes(classes))
      console.log("Classes: " + classes);
      // availableSpells.forEach(spell => console.log(spell.name))
      const availableString = availableSpells.map(spells => spells.name).join(", ")
      // console.log(availableString)
        return(
        <>
        <Text>{availableString}</Text>
        {/* {availableSpells.map(spell => (<Text key={spell.name}>{spell.name}</Text>)  )} */}
        </>
      )
    }
    function checkForSpells()
    {
        return 
    }
    const handleSpells = (spell, calculateMaxSpells, setSpells) =>
      {
          // console.log("NumOfSpell:", numOfSpell);
          setSpells(prevSpells => { 
          // remove redundant spells that conflict with background
          if (prevSpells.includes(spell))  // if the spell is already selected remove it from the array
          {
            // console.log("Already exists")
              return prevSpells.filter((s) => s !== spell)
          }
          else if (prevSpells.length < calculateMaxSpells() ) // if the spell is less than the max than add it to the array
          {
              // console.log("Adding to Array");
              return  [...prevSpells, spell] 
  
          }
          else // if the spell selected are more than the max remove the oldest skill in the array
          {
              // console.log("More than accepted paramater")
              return [...prevSpells.slice(1), spell]
          }
      })
  
      }
    const renderDropDownButtons = (spellList, spellLevel) =>
      {
        //availableSpells: Lists all the spells the player can access
        const availableSpells = spellList.filter(spell => spell.usableBy.includes(classes))
        if (spellLevel == "Cantrips") // If the spell is a Cantrip have it have its own numbering system
        {
          return availableSpells.map((spell, i) => (
            <SelectionButton
              key={i}
              name={spell.name}
              disableFixedWidth={true}
              // Uncomment the lines below if these props are needed
              isSelected={numOfCantrips.includes(spell)}
              onSelectionPress={() => handleSpells(spell, calculateNumOfCantrips, setNumOfCantrips)}
            />
          ));        
        }
        // availableSpells.forEach(spell => console.log(spell.name))
        else
        {
          return availableSpells.map((spell, i) => (
            <SelectionButton
              key={i}
              name={spell.name}
              disableFixedWidth={true}
              // Uncomment the lines below if these props are needed
              isSelected={numOfLevelSpells.includes(spell)}
              onSelectionPress={() => handleSpells(spell, numOfSpellsKnown, setNumOfLevelSpells)}
            />
          ));
        }
    };
    //Semi Colons matter
    
    const dropdown = (text, setState, state, spellList, isActive) =>
    {
      if (isActive && isSpellcaster)
      {
      return(
          <View>
            <View style={[styles.dropdownClosed, {marginBottom: state? 0: 10 }]}>
            <TouchableOpacity onPress={() => toggleDropdown(setState, state)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: FONTSIZE.medium }}>{text}</Text>
                <AntDesign name={state ? 'up' : 'down'} size={24} color="black" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
            </View>
  
        {/**This feature is a JSX exclusive */}
      {state && (
          <View style={{ }}>
          {/* <Text>This is more information about the item.</Text> */}
          {/* <Text style={{fontSize: FONTSIZE.medium}}>{renderDropDownButtons(spellList)}</Text> */}
          {renderDropDownButtons(spellList, text)}          
        </View>
      )}
      </View>
      )
      }
      else
      {
        // return(<Text>No Spells Available</Text>)
        //Not needed any more
      }
    }

  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        {renderAll()}
        <Text>Races: {selectedRace}</Text>

        {/* {console.log(selectedRace)} */}
        {dropdown("Cantrips", setCantripDropdown, cantripDropdown, CANTRIPS, true)}
        {dropdown("1st Level Spells", setFirstLevelDropdown, firstLevelDropdown, FIRST_LEVEL_SPELLS, true)}
        {dropdown("2nd Level Spells", setSecondLevelDropdown, secondLevelDropdown, SECOND_LEVEL_SPELLS, isSecondLevel)}
        {dropdown("3rd Level Spells", setThirdLevelDropdown, thirdLevelDropdown, THIRD_LEVEL_SPELLS, isThirdLevel)}
        {dropdown("4th Level Spells", setFourthLevelDropdown, fourthLevelDropdown, FOURTH_LEVEL_SPELLS, isFourthLevel)}
        <View style={styles.nextButton}> 
          <NextButton
            navigation={navigation}
            params={{name, classes, backgrounds, level, selectedRace, str, dex, con, int, wis, cha, selectSkills, subclass, numOfCantrips, numOfLevelSpells}}
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
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: FONTSIZE.xxlarge,
    textAlign: 'center'
},
})