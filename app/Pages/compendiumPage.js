import { View, StyleSheet, Text, StatusBar, ScrollView } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";
import CompendiumButton from "../../components/compendiumButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default CompendiumPage = () =>
{
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
        <ScrollView>
        <View style={styles.viewStyle}>
            <CompendiumButton text={"Equipment"} />
            <CompendiumButton text={"Classes"}/>

            {/* <Text style={styles.textStyle}>This is the Compendium Screen</Text> */}
        </View>
        </ScrollView>
        </SafeAreaView>

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
