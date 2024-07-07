import { View, StyleSheet, Text, StatusBar } from "react-native";
import { COLORS, FONTSIZE } from "../constants/theme";

export default CompendiumPage = () =>
{
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>This is the Dice Roller Screen</Text>
        </View>
    );
}
const styles = StyleSheet.create(
{
    viewStyle: {
        backgroundColor: COLORS.background,
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

}
)
