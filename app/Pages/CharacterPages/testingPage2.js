// Testing Page
import { View, StyleSheet, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Modal, TouchableWithoutFeedback } from "react-native";
import { characterBorderWidth, COLORS, FONTSIZE } from "../../../constants/theme";
import { globalStyles } from "../../../constants/global";
import MagicItemModalRough from "../../../components/modals/magicItemModal(Rough)";
import MagicItemModal from "../../../components/modals/magicItemModal";
import { useState } from "react";
import MagicItemIcon from "../../../components/magicItemIcon";

const {width, height} = Dimensions.get('screen');
export default TestingPage = () =>
{

    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
            <View style={[globalStyles.centerRow, {flex: 1}]}>
                <MagicItemIcon key={"23"} name={"Dragon"} type={"Armor"} weight={23} attunment={true} decription={"Loren"} rarity={"Uncommon"} charges={true} numOfCharges={4}/>
            </View>
            
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
        backgroundColor: 'red'
    },
    box:
    {
        margin: 10,
        justifyContent: 'center',
        width: squareSize,
        height: squareSize,
        borderWidth: 4,
        borderRadius: 10
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
}
)
