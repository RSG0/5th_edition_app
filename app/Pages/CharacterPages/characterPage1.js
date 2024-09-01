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
import MagicItemModal from "../../../components/modals/magicItemModal";

export default CharacterPage1 = () =>
{
    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        <ScrollView>
        {/**First Row: */}
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <HitDiceIcon/>       
                <InitativeIcon/>
            </View>
            <View style={{justifyContent: 'center'}}>
                <View style={styles.circle} />
            </View>
            <View>
                <HitPointIcon/>
                <ArmorClassIcon/>
            </View>
        </View>

        {/**Second Row: */}
        <View>
            <ProfBonusAndSpeedIcon/>
        </View>

        {/**Third Row: Ability Score Rows 1-2 */}
        <View>
            {/**First Row: */}
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <AbilityScoreIcon/>
                <AbilityScoreIcon/>
                <AbilityScoreIcon/>
            </View>
            {/**Second Row: */}
        </View>
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <AbilityScoreIcon/>
                <AbilityScoreIcon/>
                <AbilityScoreIcon/>
            </View>
        <View>
            <Text>Saving Throws:</Text>
            <SavingThrowIcon/>
            <SavingThrowIcon/>
            <SavingThrowIcon/>
            <SavingThrowIcon/>
            <SavingThrowIcon/>
            <SavingThrowIcon/>

        </View>
        </ScrollView>
        </SafeAreaView>
    );
}
const circleSize = 130;
const styles = StyleSheet.create(
{
    circle:
    {
        margin:10,
        backgroundColor: COLORS.mainColor,
        width: circleSize,
        height: circleSize,
        borderRadius: 80,
        borderWidth: 5
    },
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
