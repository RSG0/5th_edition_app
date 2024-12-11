// Testing Page
import { View, StyleSheet, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Modal, TouchableWithoutFeedback } from "react-native";
import { characterBorderWidth, COLORS, FONTSIZE } from "../../../constants/theme";
import { globalStyles } from "../../../constants/global";
import MagicItemModalRough from "../../../components/modals/magicItemModal(Rough)";
import MagicItemModal from "../../../components/modals/magicItemModal";
import { useState } from "react";

const {width, height} = Dimensions.get('screen');
export default TestingPage = () =>
{
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
            <View style={[globalStyles.centerRow, {flex: 1}]}>
                <TouchableOpacity style={{width: width * .2, height: height  *.1, backgroundColor: 'red', borderRadius: 20}} onPress={() => setIsModalVisible(true)}>
                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                        <Text>Press me</Text>
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
                                name={"Ding Dang"}
                                type={"Weapon"}
                                attunment={true}
                                charges={false}
                                decription={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu"}
                                weight={2}

                                rarity={"Common"}

                                />
                            </View>
                </Modal>
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
