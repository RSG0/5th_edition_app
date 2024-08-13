import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // package provides a variety of icons including up and down arrows.
import { CANTRIPS } from '../../../constants/characterinformation/spells';

const HitPoint = () => {
  const [isCantripOpen, setIsCantripOpen] = useState(false);


    const toggleDropdown = (toggle, toggleState) => {
        toggle(!toggleState);
    };
    const renderDropdown = () =>
    {
        return(
        <Text>{CANTRIPS.map( (can) => can.name)}</Text>
        )
    }
    const dropdown = (text, setState, state) =>
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
            <Text>{renderDropdown()}</Text>
            
          </View>
        )}
        </View>
        )
    }

  return (
    <View style={{ padding: 10 }}>
        <Text>Cantrips: ___</Text>
        <Text>Prepared Spells:</Text>
        {dropdown("Cantrips", setIsCantripOpen, isCantripOpen)}

    </View>
  );
};

export default HitPoint;
