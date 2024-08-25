import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../../constants/theme";

export default characterPage1 = () =>
{
    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        {/* <ScrollView> */}
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>This is the Setting Screen</Text>
        </View>
        {/* </ScrollView> */}
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
