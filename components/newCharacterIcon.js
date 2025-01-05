import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import { COLORS, FONTSIZE } from "../constants/theme"
import { useNavigation } from '@react-navigation/native';
export default NewCharacterIcon = ({navigation, name, classes, race, backgrounds, level, selectedRace, str, dex, con, int, wis, cha, selectSkills, 
    subclass, numOfCantrips, numOfLevelSpells, maxHp, selectedEquipments, image, personalityTraits, bonds, 
    ideals, flaw, alliesAndOrgs, addtitionalFeatures, backstory, removeCharacter}) =>
{
    // const navigation = useNavigation();

    const moreButton = 
    <TouchableOpacity style={styles.moreButton} onPress={removeCharacter}>
        <Text style={styles.moreButtonIcon}>...</Text>
    </TouchableOpacity>
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
    return(
        <View style={styles.item}>

            <TouchableOpacity style={{width: "100%", display:'flex', flexDirection: 'row', alignItems: 'center'}} 
            onPress={() => [navigation.navigate("Character Carousel",{name, classes, race, backgrounds, level, selectedRace, 
            str, dex, con, int, wis, cha, selectSkills, subclass, numOfCantrips, numOfLevelSpells, maxHp, selectedEquipments, 
            image, personalityTraits, bonds, ideals, flaw, alliesAndOrgs, addtitionalFeatures, backstory } )]}>

            {moreButton}
                <View style={styles.square}>
                    {image ? (
                            <Image
                                source={{ uri: image}}
                                style={{ width: imageSize, height: imageSize, borderRadius: 10 }}
                            />
                        ) : (
                            <Text style={styles.imagePlaceholder}>No Image</Text>
                        )}                
                </View>

                    <View style={[styles.viewStyle ,{flexDirection:'column', maxWidth: "80%"}]}>

                        <Text style={styles.textStyle}>{name} {"\n"}{race} | {classes} {level}  </Text>

                    </View>
                <View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const imageSize = 72
const moreButtonSize = 30

const styles = StyleSheet.create({
    item:{
        width: "80%",
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 124,
        borderRadius: 10,
        marginBottom: 10,
        margin: 10
    },
    viewStyle: {
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginRight: 10,
        position: 'relative',
        flex: 1
    },
    square:{
        width: imageSize,
        height: imageSize,
        backgroundColor: COLORS.mainColor,
        marginVertical: 20,
        marginLeft: 22,
        marginRight: 10,
        borderRadius: 10
    },
    textStyle:{
        marginTop: 10,
        width: "100%",
        // backgroundColor: 'red',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: FONTSIZE.medium
    },
    moreButton: {
        margin: 10,
        borderRadius: 5,
        backgroundColor: 'gray',
        width: moreButtonSize,
        height: moreButtonSize,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0
        // alignSelf: 'center',
        // direction: 'rtl',

    },
    moreButtonIcon: {
        // fontSize: FONTSIZE.medium,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})