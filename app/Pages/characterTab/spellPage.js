import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // package provides a variety of icons including up and down arrows.
import { CANTRIPS, FIRST_LEVEL_SPELLS } from '../../../constants/characterinformation/spells';

export default SpellPage = ({navigation, route}) => 
{

  const {name, classes, backgrounds, level, races, int, wis, cha} = route.params;

  const [isCantripOpen, setIsCantripOpen] = useState(false);
  const [is1stLevelOpen, setIs1stLevelOpen] = useState(false);

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
    const calculateSpellsKnown = () =>
    {
      if (classes === "Cleric" || classes === "Druid" || classes === "Ranger") {return calculateScoreMod(wis)}
      else if (classes === "Wizard" || classes === "Artificer") {return calculateScoreMod(int)}
      else if (classes === "Paladin" || classes === "Warlock" || classes === "") {return calculateScoreMod(cha)}
    }
    const renderCantrips = () =>
    {
      return(
        <Text>Cantrips: __/{calculateNumOfCantrips()}</Text>
      )
    }
    const renderSpells = () =>
    {
      console.log("Wisdom Score: " + wis);
      return(
        <Text>Prepared Spells: ___/{calculateSpellsKnown() + Number(level)} </Text> // Class Level + Class MOD
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
    const dropdown = (text, setState, state, spellList) =>
    {
        return(
            <View>
            <TouchableOpacity onPress={() => toggleDropdown(setState, state)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 18 }}>{text}</Text>
                <AntDesign name={state ? 'up' : 'down'} size={24} color="black" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
  
          {/**This feature is a JSX exclusive */}
        {state && (
          <View style={{ paddingTop: 10 }}>
            <Text>This is more information about the item.</Text>
            <Text>{renderDropdown(spellList)}</Text>
            
          </View>
        )}
        </View>
        )
    }

  return (
    <View style={{ padding: 10 }}>
        {renderCantrips()}
        {renderSpells()}
        <Text>Chosen Class: {classes}</Text>
        <Text>Prepared Spells:</Text>
        {dropdown("Cantrips", setIsCantripOpen, isCantripOpen, CANTRIPS)}
        {dropdown("1st Level Spells", setIs1stLevelOpen, is1stLevelOpen, FIRST_LEVEL_SPELLS)}

    </View>
  );
};