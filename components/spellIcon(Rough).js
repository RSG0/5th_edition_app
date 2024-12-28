import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Modal, TouchableWithoutFeedback } from "react-native"
import { characterBorderWidth, COLORS, FONTSIZE } from "../constants/theme"
import { useState } from "react";
import { globalStyles } from "../constants/global";

const {width, height} = Dimensions.get('screen');


export default SpellIcon = ({name, type, attunement, charges, numOfCharges,rarity, description, weight} ) =>
{
    const [isModalVisible, setIsModalVisible] = useState(false);
    // Function to map rarity to styles
    const getRarityStyle = (rarity) => {
        switch (rarity?.toLowerCase()) {
            case "uncommon":
                return globalStyles.uncommonRarityBackgroundColor;
            case "rare":
                return globalStyles.rareRarityBackgroundColor;
            case "very rare":
                return globalStyles.veryRareRarityBackgroundColor;
            case "legendary":
                return globalStyles.legendaryRarityBackgroundColor;
            case "artifact":
                return globalStyles.artifactRarityBackgroundColor;
            default:
                return null; // Default to no background color if rarity is not recognized
        }
    };

    return(
        <View style={styles.item}>
            <TouchableOpacity style={styles.touchable} onPress={ () => setIsModalVisible(true)}>
                <View style={styles.square}/> 
                {/**Print the square */}
                <View style={styles.textContainer}>
                    <Text style={styles.itemTitle}>{name}</Text>
                    <Text style={styles.itemSubtitle}>{type}</Text>
                    <Text style={styles.itemWeight}>{weight} lbs.</Text>
                </View>
                <View style={styles.circleContainer}>
                    {/* Attunement */}
                    {attunement ? (
                        <View style={[styles.circle]}>
                            <Text style={styles.circleText}>A</Text>
                        </View>
                    ) : null}

                    {/* Rarity DONT HAVE COMMENTS ON THE SAME LINE AS CODE. GLITCHES WILL OCCUR*/}
                    {rarity ? (
                        <View style={[styles.circle, getRarityStyle(rarity)]}>
                            <Text style={styles.circleText}>R</Text>
                        </View>
                    ) : null}

                    {/* Charges */}
                    {charges && numOfCharges > 0 ? (
                        <View style={[styles.circle, styles.chargesColor]}>
                            <View style={styles.circleCharge} />
                            <Text style={styles.circleText}>C</Text>
                        </View>
                    ) : null}
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
                                <MagicItemModal
                                name={name}
                                type={type}
                                attunement={attunement}
                                charges={charges}
                                description={description}
                                numOfCharges={numOfCharges}
                                weight={weight}
                                rarity={rarity}

                                />
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
        height: height * .1,
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
        backgroundColor: "",
        // flex: 1 /2,

        justifyContent: "center",
        flexDirection: 'row',
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