import { View, StyleSheet, Text, ScrollView } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";

export default DiceRoller = () =>
{
    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        <ScrollView>
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>This is the Dice Roller Screen</Text>
        </View>
        </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create(
{
    viewStyle: {
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
