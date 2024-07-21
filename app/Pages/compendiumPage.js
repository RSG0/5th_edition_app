import { View, StyleSheet, Text, StatusBar, ScrollView } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";
import CompendiumButton from "../../components/buttons/compendiumButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native-stack"
import EquipmentPage from "../Pages/equipmentPage"

const Stack = createNativeStackNavigator();


export default CompendiumPage = ({navigation}) =>
{

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
        <ScrollView>
        <View style={styles.viewStyle}>
            <CompendiumButton text={"Equipment"} nextScreen={"Equipment Page"} navigation={navigation}/>
            <CompendiumButton text={"Classes"}/>
            <CompendiumButton text={"Races"}/>
            <CompendiumButton text={"Magic-Items"}/>



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
