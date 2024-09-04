import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import ActionComponent from "../../../components/actionComponent";
import Seperator from "../../../components/seperator";

export default characterPage3 = () =>
{
    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        <ScrollView>
        <View style={styles.grayBackground}>
            <Text style={styles.textStyle}> <Text style={{fontWeight: 'bold'}}>ACTIONS</Text> - Attacks Per Action: 1</Text>
            <Seperator/>

            <View style={{alignItems: 'center'}}> 
                <ActionComponent/>
                <ActionComponent/>
                <ActionComponent/>

            </View>
            <Text style={[styles.textStyle, {fontWeight: 'bold'}]}> BONUS ACTIONS - </Text>
            <Seperator/>

            <View style={{alignItems: 'center'}}> 
                <ActionComponent/>
                <ActionComponent/>
            </View>
            <Text style={[styles.textStyle, {fontWeight: 'bold'}]}> REACTIONS - </Text>
            <Seperator/>
            <View style={{alignItems: 'center'}}> 
                <ActionComponent/>
            </View>

        </View>
        </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create(
{
    grayBackground: {
        borderRadius: 10,
        margin: 20,
        // paddingVertical: 10,
        backgroundColor: COLORS.grayBackground,
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        flex: 1
    },
    textStyle: {
        marginTop: 10,
        marginLeft: 10,

        // fontWeight: 'bold',
        fontSize: FONTSIZE.xlarge,
        // textAlign: 'center'
    },

}
)
