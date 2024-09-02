import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import SkillsIcon from "../../../components/characterComponents/savingThrowIcon";
import { globalStyles } from "../../../constants/global";


export default CharacterPage2 = () =>
{
    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        <ScrollView>
        
        {/* <View style={styles.viewStyle}> */}
            <Text style={styles.textStyle}>Skills</Text>
            <View style={[globalStyles.centerRow]}>
                <SkillsIcon/>
                <SkillsIcon/>
            </View>
            <View style={globalStyles.centerRow}>
                <SkillsIcon/>
                <SkillsIcon/>
            </View>
            <View style={globalStyles.centerRow}>
                <SkillsIcon/>
                <SkillsIcon/>
            </View>
            <View style={globalStyles.centerRow}>
                <SkillsIcon/>
                <SkillsIcon/>
            </View>
            <View style={globalStyles.centerRow}>
                <SkillsIcon/>
                <SkillsIcon/>
            </View>
            <View style={globalStyles.centerRow}>
                <SkillsIcon/>
                <SkillsIcon/>
            </View>
            <View style={globalStyles.centerRow}>
                <SkillsIcon/>
                <SkillsIcon/>
            </View>
            <View style={globalStyles.centerRow}>
                <SkillsIcon/>
                <SkillsIcon/>
            </View>
        {/* </View> */}
        </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create(
{
    viewStyle: {
        borderRadius: 10,
        padding: 20,
        margin: 5,
        backgroundColor: 'gray',
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
