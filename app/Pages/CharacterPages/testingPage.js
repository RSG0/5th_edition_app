// Spells Page
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import { globalStyles } from "../../../constants/global";
import MagicItemModal from "../../../components/modals/magicItemModal(Rough)";

export default TestingPage = () =>
{
    return (
        <SafeAreaView style={{backgroundColor: COLORS.background}}>
            <MagicItemModal/>
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
    }
}
)
