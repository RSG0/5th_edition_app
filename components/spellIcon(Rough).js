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



export default SpellIcon = ({name, school, range, effect, isVocal, isSomatic, requiresMaterials} ) =>
{
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    return(
        <View style={styles.item}>
            <TouchableOpacity style={styles.touchable} onPress={ () => setIsModalVisible(true)}>
                <View style={styles.square}/> 
                {/**Print the square */}
                <View style={styles.textContainer}>
                    <Text style={styles.itemTitle}>Fireball</Text>
                    <Text style={styles.itemSubtitle}>Evocation</Text>
                    <Text style={styles.itemWeight}>150 FT. Reach</Text>
                </View>
                <View style={styles.circleContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: FONTSIZE.small, fontWeight: 'bold', marginRight: width * .01}}>Effect: 8d6</Text>
                        <FontAwesome6 name="bolt-lightning" size={FONTSIZE.xsmall} color="black" />
                    </View>
                    <Text style={{fontSize: FONTSIZE.small, fontWeight: 'bold'}}>V, S, M</Text>
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
        height: height * .11,
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
        width: width * .25,
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