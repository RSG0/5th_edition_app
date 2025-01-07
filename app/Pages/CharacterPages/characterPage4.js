import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONT, FONTSIZE } from "../../../constants/theme";
import { globalStyles } from "../../../constants/global";
import { checkPositive } from "../../../constants/characterinformation/math";
import { AntDesign } from '@expo/vector-icons'; // package provides a variety of icons including up and down arrows.
import { useState } from "react";
import SpellIcon from "../../../components/spellIcon";

export default characterPage4 = ({spellcastClass, spellAttackMod, spellSaveDC, profBonus, spells, numOfSpells }) =>
{
    const [spellDropdown, setSpellDropdown] = useState(false);
    const [cantripDropdown, setCantripDropdown] = useState(false);
    const [firstLevelDropdown, setFirstLevelDropdown] = useState(false);
    const [secondLevelDropdown, setSecondLevelDropdown] = useState(false);
    const [thirdLevelDropdown, setThirdLevelDropdown] = useState(false);
    const [fourthLevelDropdown, setFourthLevelDropdown] = useState(false);

    function displaySpells(spell, spellLevel) {
        const sortedNameSpells = spell.sort((a, b) => {return a.name.localeCompare(b.name);});
        // sortedNameSpells.map(a => console.log(a.name + ": " + a.level))

        // Sort spells by level with "Cantrip" first, followed by "1st", "2nd", etc.
        const sortedLevelSpells = sortedNameSpells.sort((a, b) => {
            const levelOrder = (level) => {
                if (level === "Cantrip") return 0; // Cantrip comes first
                return parseInt(level) || 10; // Convert levels like "1st" to numbers, default high for unknowns
            };
            return levelOrder(a.level) - levelOrder(b.level);
        });
        
        return sortedLevelSpells.map((item, i) => (
            <SpellIcon
                key={i}
                name={item.name || "DNE Spell Name"}
                school={item.school || "DNE School"}
                range={item.range || "[DNE Range]"}
                effect={item.damageDie}
                castingTime={item.castingTime || "[DNE action]"}
                damageType={item.damageType || "N/A"}
                ritual={item.ritual || "DNE Ritual"}
                isVocal={handleComponents(item.components).isVocal || "DNE Vocal"}
                isSomatic={handleComponents(item.components).isSomatic || "DNE Somatic"}
                description={item.description || "DNE Description"}
                duration={item.duration || "DNE Dur"}
                requiresMaterials={handleComponents(item.components).requiresMaterials || "[DNE M]"}
                spellLevel={item.level || "Cantrip"}
                usableBy={item.usableBy || "[DNE]"}
                concentration={item.concentration || "[DNE CON]"}
                materials={item.material || "[DNE Material Description]"}
                removeSpell={() => removeCustomSpell(i)}/>

        ));
    }

    const handleComponents = (components) => {
        // Determine if the array contains specific characters
        const isVocal = components.includes("V"); // Check if "V" is in the array
        const isSomatic = components.includes("S"); // Check if "S" is in the array
        const requiresMaterials = components.includes("M"); // Check if "M" is in the array
    
        // Return the values to be used in a component
        return {
            isVocal,
            isSomatic,
            requiresMaterials,
        };
    };
    const toggleDropdown = (toggle, toggleState) => {
        toggle(!toggleState);
    };
    const dropdown = (text, setState, state, isActive, renderSpells) =>
        {
          if (isActive)
          {
          return(
              <View style={styles.viewStyle}>
                <View style={[{marginBottom: state? 0: 10 }]}>
                <TouchableOpacity onPress={() => toggleDropdown(setState, state)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.textStyle}>{text}</Text>
                    <AntDesign name={state ? 'up' : 'down'} size={24} color="black" style={{ marginLeft: 10 }} />
                </TouchableOpacity>
                </View>
      
            {/**This feature is a JSX exclusive */}
          {state && (
              <View style={{ }}>
    
              {renderSpells()}     
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
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        <ScrollView>
            <View style={styles.grayBackground}>
                <View style={styles.viewStyle}>
                    <View style={styles.spellcastingAbilityBox}>
                        <Text style={{fontSize: FONTSIZE.large}}>{spellcastClass}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={[styles.box, globalStyles.centerRow]}>
                            <Text style={{fontSize: FONTSIZE.large, textAlign: 'center'}}>{spellAttackMod}</Text> 
                        </View>
                        {/**Spell Attack */}
                        <View style={[styles.box, globalStyles.centerRow]}>
                            <Text style={{fontSize: FONTSIZE.large, textAlign: 'center'}}>{checkPositive(profBonus)}</Text> 
                        </View>
                        {/**Spell Save DC */}
                        <View style={[styles.box, globalStyles.centerRow]}>
                            <Text style={{fontSize: FONTSIZE.large, textAlign: 'center'}}>{spellSaveDC}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{fontSize: FONTSIZE.large}}>Prepared Spells: {numOfSpells.length}/{numOfSpells.length}</Text>
                    </View>
                    {dropdown("Spells", setSpellDropdown, spellDropdown, true, () => displaySpells(spells, "1st") )}
                    {/* <Text style={styles.textStyle}>This is the Spell List Screen</Text> */}

                </View>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
}
const squareSize = 50
const styles = StyleSheet.create(
{
    grayBackground: {
        paddingVertical: 10,
        borderRadius: 10,
        margin: 20,
        // paddingVertical: 10,
        backgroundColor: COLORS.grayBackground,
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        flex: 1
    },
    viewStyle: {
        
        // backgroundColor: COLORS.background,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.xxlarge,
        textAlign: 'center'
    },
    spellcastingAbilityBox:
    {
        padding: 10,
        borderWidth: 4,
        borderRadius: 10,
        backgroundColor: COLORS.mainColor
    },
    box:
    {
        margin: 10,
        justifyContent: 'center',
        width: squareSize,
        height: squareSize,
        borderWidth: 4,
        borderRadius: 10
    }
}
)
