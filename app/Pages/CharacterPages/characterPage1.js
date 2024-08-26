import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import HitDiceIcon from "../../../components/characterComponents/hitDiceIcon";
import InitativeIcon from "../../../components/characterComponents/initativeIcon";
import ArmorClassIcon from "../../../components/characterComponents/armorClassIcon";
import HitPointIcon from "../../../components/characterComponents/hitPointIcon";
import AbilityScoreIcon from "../../../components/characterComponents/abilityScoreIcon";
import SavingThrowIcon from "../../../components/characterComponents/savingThrowIcon";
import ProfBonusAndSpeedIcon from "../../../components/characterComponents/profBonusAndSpeedIcon";
import SensesIcon from "../../../components/characterComponents/sensesIcon";

export default CharacterPage1 = () =>
{
    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        <ScrollView>
        {/* <View style={styles.viewStyle}>
        </View> */}
        {/* <HitDiceIcon/>       
        <InitativeIcon/>
        <HitPointIcon/> */}
        <ArmorClassIcon/>
        {/* <AbilityScoreIcon/>
        <ProfBonusAndSpeedIcon/>
        <SavingThrowIcon/>
        <SensesIcon/> */}
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
        flex: 1,

    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.xxlarge,
        textAlign: 'center'
    },

}
)
