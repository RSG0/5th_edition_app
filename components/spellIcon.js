import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Modal, TouchableWithoutFeedback } from "react-native"
import { characterBorderWidth, COLORS, FONTSIZE } from "../constants/theme"
import { useState } from "react";
import { globalStyles } from "../constants/global";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'; //Fire Damage Icon: fire-alt, Cold Damage Icon: snowflake
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'; //Force Damage Icon: burst, Lightning Damage Icon: bolt-lightning , Bludeoning Damage Icon: hammer, Radiant Damage Icon: cross, Necrotic Damage Icon: "skull", Thunder Damage Icon: "cloud"
//Piercing Damage Icon "crosshairs": 
import Entypo from '@expo/vector-icons/Entypo'; //Psychic Damage Icon: eye
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; //Poison/Acid Damage Icon: bottle-tonic-skull, Slashing Damage Icon "sword", ""

const {width, height} = Dimensions.get('screen');



export default SpellIcon = ({name, school, range, effect, damageType, isVocal, isSomatic, description, requiresMaterials} ) =>
{
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const handleReach = (rng) =>
    {
        let mod;
        let aoe;

        if (rng.includes("feet"))
        {
            // console.log("Feet has been reached")
            mod = rng.replace("feet", "FT. Reach")
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

        return mod + " " + aoe 

        //Goal is 120 FT. (radius)
    }
    const handleComponents = (v, s, m) => {
        let components = [];
        if (v) {
            components.push("V");
        }
        if (s) {
            components.push("S");
        }
        if (m) {
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
                console.log("is fire");
                return <FontAwesome5 name="fire-alt" size={FONTSIZE.xsmall} color="black"/>
            }
            else if ("Cold" === damageType)
            {
                return <FontAwesome5 name="snow-flake" size={FONTSIZE.xsmall} color="black"/>
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
            return "See Description"
        }
    }

    return(
        <View style={styles.item}>
            <TouchableOpacity style={styles.touchable} onPress={ () => setIsModalVisible(true)}>
                <View style={styles.square}/> 
                {/**Print the square */}
                <View style={styles.textContainer}>
                    <Text style={styles.itemTitle}>{name}</Text>
                    <Text style={styles.itemSubtitle}>{school}</Text>
                    <Text style={styles.itemWeight}>{handleReach(range)}</Text>
                </View>
                <View style={styles.circleContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Text style={{fontSize: FONTSIZE.small, fontWeight: 'bold', backgroundColor: ''}}>Effect: {handleEffect(effect, damageType)}</Text>
                    </View>
                    <Text style={{fontSize: FONTSIZE.small, fontWeight: 'bold'}}>{handleComponents(isVocal, isSomatic, requiresMaterials)}</Text>
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
                                {/* <SpellModal
                                name={name}
                                type={type}
                                attunement={attunement}
                                charges={charges}
                                description={description}
                                numOfCharges={numOfCharges}
                                weight={weight}
                                rarity={rarity}

                                /> */}
                            </View>
                </Modal>

        </View>
    )
}
const circleSize = .08
const styles = StyleSheet.create({
    item:{
        width: width * .9,
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
    itemWeight: {
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
    circle:
    {
        width: width * circleSize,
        height: width * circleSize,
        borderWidth: characterBorderWidth /2,
        // backgroundColor: 'red',
        // flex: 1,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: width * .01,
    },
    circleContainer: {
        margin: width * .02,
        width: width * .3,
        backgroundColor: "",
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
    circleCharge:{
        width: width * .05,
        height: width * .05,
        borderWidth: characterBorderWidth /4,
        position: 'absolute',
        borderRadius: 60,
    },
    chargesColor:
    {
        backgroundColor: "#B5B5B5"
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent grey background
        // justifyContent: "center", // Center vertically
        // alignItems: "center", // Center horizontally
    },
    modalContent: {
        position: "absolute", // Make content independent of the overlay
        backgroundColor: "", // Ensure modal content has a white background
        // borderRadius: 20,
        // padding: 20,
        // width: width * 0.9,
        // height: height * 0.4,
        alignSelf: "center",
        top: height * 0.3, // Adjust to vertically center the modal content
    },
})