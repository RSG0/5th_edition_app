import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONT, FONTSIZE } from "../../../constants/theme";
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
    const displayAbilityScores = () =>
    {
        return(
        <>
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
        <View></View>
        </>)
    }
    const displaySavingThrows = () =>
    {
        return(
            <>
        <View>
            <Text style={{marginTop: 10, fontSize: FONTSIZE.xlarge, fontWeight: 'bold', marginLeft: 20}}>Saving Throws:</Text>
            <View style={styles.savingThrowRow}>
                <SavingThrowIcon/>
                <SavingThrowIcon/>
            </View>
            <View style={styles.savingThrowRow}>
                <SavingThrowIcon/>
                <SavingThrowIcon/>
            </View>
            <View style={styles.savingThrowRow}>
                <SavingThrowIcon/>
                <SavingThrowIcon/>
            </View>
        </View>
        </>
        )
    }
    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
        {displayAbilityScores()}
        {/**5th Row: Saving Throw Rows 1-3 */}
        {displaySavingThrows()}
        {/**6th Row: Senses Icon */}
        <Text style={styles.subTitleText}>Senses:</Text>
        <View style={{justifyContent: 'center'}}>
            <SensesIcon/>
            <SensesIcon/>
            <SensesIcon/>

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
    savingThrowRow:
    {
        flexDirection: "row", 
        justifyContent: 'center'
    },
    subTitleText: {
        marginTop: 10, 
        fontSize: FONTSIZE.xlarge, 
        fontWeight: 'bold', 
        marginLeft: 20
    }

}
)
