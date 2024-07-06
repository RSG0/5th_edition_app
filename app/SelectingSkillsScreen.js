import { View, StyleSheet, Text, StatusBar } from "react-native";
import { COLORS, FONTSIZE } from "../constants/theme";

const SelectingSkillsScreen = () =>
{
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>This is the Selecting Skills Screen</Text>
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
export default SelectingSkillsScreen;