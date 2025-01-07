import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Modal, TouchableWithoutFeedback } from "react-native"
import { characterBorderWidth, COLORS, FONT, FONTSIZE } from "../constants/theme"
import { useEffect, useState } from "react";
import { globalStyles } from "../constants/global";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'; //Fire Damage Icon: fire-alt, Cold Damage Icon: snowflake
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'; //Force Damage Icon: burst, Lightning Damage Icon: bolt-lightning , Bludeoning Damage Icon: hammer, Radiant Damage Icon: cross, Necrotic Damage Icon: "skull", Thunder Damage Icon: "cloud"
//Piercing Damage Icon "crosshairs": 
import Entypo from '@expo/vector-icons/Entypo'; //Psychic Damage Icon: eye
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; //Poison/Acid Damage Icon: bottle-tonic-skull, Slashing Damage Icon "sword", ""
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SpellModal from "./modals/spellModal";

const {width, height} = Dimensions.get('screen');


const capitalized = (word) => {
    if (!word || typeof word !== 'string') {
        console.log("Capitalized Word DNE:", word)
        return ''; // Return an empty string or a fallback value
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  
export default SpellIcon = ({name, school, range, effect, castingTime, damageType, ritual, isVocal, isSomatic, description, requiresMaterials, isMaterial, spellLevel, usableBy, duration, concentration, materials} ) =>
{
    const [isModalVisible, setIsModalVisible] = useState(false);
    // console.log(usableBy);
    
    const handleReach = (rng) =>
    {
        let mod;
        let aoe;

        if (rng.includes("feet"))
        {
            // console.log("Feet has been reached")
            mod = rng.replace("feet", "FT. Reach")
        }
        else if (rng.includes("self") || rng.includes("Self"))
        {
            return capitalized(rng)
        }
         if (rng.includes("touch") || rng.includes("Touch"))
        {
            return "Touch"
        }
        if (description.includes("radius") === true)
        {
            aoe = "(radius)";
        }
        else if (description.includes("line"))
        {
            aoe = "(line)";
        }
        else if (description.includes("cube"))
        {
            aoe = "(cube)"
        }
        else if (description.includes("cone"))
        {
            aoe = "(cone)"
        }
        else
        {
            aoe = ""
        }

        return mod + " " + aoe 

        //Goal is 120 FT. (radius)
    }

    const handleComponents = (v, s, m) => {
        let components = [];
        if (v === true) {
            components.push("V");
        }
        if (s === true) {
            components.push("S");
        }
        if (m === true) {
            components.push("M");
        }
        return components.join(", "); // Combine the components with commas
    };
    const handleEffect = (effectDie, damageType) =>
    {
        const handleDamageIcon = () =>
        {
            if ("Fire" === damageType)
            {
                return <FontAwesome5 name="fire-alt" size={FONTSIZE.xsmall} color="black"/>
            }
            else if ("Cold" === damageType)
            {
                return <FontAwesome5 name="snowflake" size={FONTSIZE.xsmall} color="black"/>
            }
            else if ("Force" === damageType)
            {
                return <FontAwesome6 name="burst" size={FONTSIZE.xsmall} color="black"/>
            } 
            else if ("Lightning" === damageType)
            {
                return <FontAwesome6 name="bolt-lightning" size={FONTSIZE.xsmall} color="black"/>
            }
            else if ("Bludgeoning" === damageType)
            {
                return <FontAwesome6 name="hammer" size={FONTSIZE.xsmall} color="black"/>
            }
            else if ("Radiant" === damageType)
            {
                return <FontAwesome6 name="cross" size={FONTSIZE.xsmall} color="black"/>
            }
            else if ("Necrotic" === damageType)
            {
                return <FontAwesome6 name="skull" size={FONTSIZE.xsmall} color="black"/>
            }
            else if ("Thunder" === damageType)
            {
                return <FontAwesome6 name="cloud" size={FONTSIZE.xsmall} color="black"/>
            }
            else if ("Piercing" === damageType)
            {
                return <FontAwesome6 name="crosshairs" size={FONTSIZE.xsmall} color="black"/>
            }
            else if ("Psychic" === damageType)
            {
                return <Entypo name="eye" size={FONTSIZE.xsmall} color="black"/>

            }
            else if ("Poison" === damageType || "Acid" === damageType)
            {
                return <MaterialCommunityIcons name="bottle-tonic-skull" size={FONTSIZE.xsmall} color="black"/>
            }
            else if ("Slashing" === damageType)
            {
                return <MaterialCommunityIcons name="sword" size={FONTSIZE.xsmall} color="black"/>
            }
            else if ("Healing" === damageType)
            {
                return <MaterialIcons name="healing" size={FONTSIZE.xsmall} color="black" />
            }
            else
            {
                return <FontAwesome6 name="square" size={FONTSIZE.small} color="black"/>
 
            }
        }
        if (effectDie)
        {
            return( <Text>{effectDie} {handleDamageIcon()}</Text>)
        }

        else
        {
            // console.log("Damage Type:", damageType)
            // console.log("Effect Die:", effectDie)

            return (<Text style={{fontStyle:'italic'}}>See Description</Text>)
        }
    }
    useEffect(() =>
    {
        // console.log("")
        // console.log("Name:",name);
        // console.log("Spell Level:",spellLevel);
        // console.log("School:",school)
        // console.log("Casting Time: ", castingTime)
        // console.log("Ritual:",ritual)
        // console.log("Range:",range)
        // // console.log("Range Type:",rangeType)
        // console.log("Concentration:",concentration)
        // console.log("Duration:",duration)
        // console.log("Damage:",effect)
        // console.log("Damage type:",damageType)
        // console.log("# of Dice:",numOfDice)
        // console.log("Dice:",dice)
        // console.log("IsVocal:",isVocal)
        // console.log("IsSomatic:",isSomatic)
        // console.log("IsMaterial:",requiresMaterials)
        // console.log("Usability:",usableBy)
        // console.log("Material:",requiresMaterials)
        // console.log("Description:",description)
        // console.log("")
        // console.log("PRINTING")
    }, [])
    return(
        <View style={styles.item}>
            <TouchableOpacity style={styles.touchable} onPress={ () => setIsModalVisible(true)}>
                <View style={styles.square}/> 
                {/**Print the square */}
                <View style={styles.textContainer}>
                    <Text style={styles.itemTitle}>{name}</Text>
                    {/* {console.log("School value:", school)}
                    {console.log("Range value:", range)} */}
                    <Text style={styles.itemSubtitle}>{capitalized(school)}</Text>
                    <Text style={styles.itemReach}>{handleReach(range)}</Text>
                </View>
                <View style={styles.rightContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Text style={{fontSize: FONTSIZE.xsmall, fontWeight: 'bold', backgroundColor: '', textAlign: 'center'}}>Effect: {handleEffect(effect, damageType)}</Text>
                    </View>
                    <Text style={{fontSize: FONTSIZE.xsmall, fontWeight: 'bold'}}>{handleComponents(isVocal, isSomatic, isMaterial)}</Text>
                </View>
            </TouchableOpacity>
                <Modal
                    visible={isModalVisible}
                    transparent={true}
                    animationType="fade"
                >
                    <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
                        <View style={styles.modalOverlay}>
                            {/** Empty to detect outside clicks */}
                        </View>
                    </TouchableWithoutFeedback>
                            <View style={styles.modalContent}>
                                {/* <MagicItemModalRough /> */}
                                <SpellModal
                                name={name}
                                school={school}
                                isARitual={ritual}
                                range={range}
                                spellLevel={spellLevel}
                                usableBy={usableBy}
                                description={description}
                                castingTime={castingTime}
                                materials={materials}
                                duration={duration}
                                concentration={concentration}
                                />
                            </View>
                </Modal>

        </View>
    )
}
const circleSize = .08
const styles = StyleSheet.create({
    item:{
        // width: width * .9,
        width: "90%",
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        minHeight: height * .11,
        borderRadius: 10,
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    touchable:{
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center'
        
    },
    textContainer:{
        flex: 1,
        backgroundColor: '',
        flexDirection: 'column'
    },
    itemTitle: {
        fontSize: FONTSIZE.small,
        fontWeight: "bold",
    },
    itemSubtitle: {
        fontSize: FONTSIZE.xsmall,
        fontStyle: "italic",
    },
    itemReach: {
        fontSize: FONTSIZE.xxsmall,
        marginTop: height * 0.02,
    },

    square:{
        width: width * .05,
        height: width * .05,
        backgroundColor: COLORS.mainColor,
        marginVertical: height * .02,
        marginHorizontal: width * .02,
        borderRadius: 5
    },

    rightContainer: {
        margin: width * .02,
        width: width * .3,
        // backgroundColor: "red",
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: "center", // Centers text inside the red square
    },
    redSquareText: {
        fontSize: FONTSIZE.xsmall,
        textAlign: "center",
        color: "white",
    },
    circleText:{
        fontSize: FONTSIZE.small, 
        fontWeight: 'bold',
        flex: 1, 
        backgroundColor: '', 
        textAlign: 'center',
        alignSelf: 'center',
        position: 'absolute'
    },

    chargesColor:
    {
        backgroundColor: "#B5B5B5"
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent grey background
        justifyContent: "center", // Center vertically
        // alignItems: "center", // Center horizontally
    },
    modalContent: {
        position: "absolute", // Make content independent of the overlay
        justifyContent: 'center',
        backgroundColor: "", // Ensure modal content has a white background
        // borderRadius: 20,
        // padding: 20,
        // width: width * 0.9,
        // height: height * 0.4,
        alignSelf: "center",
        top: height * 0.2, // Adjust to vertically center the modal content
    },
})