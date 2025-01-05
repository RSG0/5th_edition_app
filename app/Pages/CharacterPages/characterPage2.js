import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import SkillsIcon from "../../../components/characterComponents/savingThrowIcon";
import { capitalized, globalStyles } from "../../../constants/global";
import { calculateProficiencyBonus } from "../../../constants/characterinformation/math";
import { CLASS_SKILLS } from "../../../constants/characterinformation/characterinfo";


export default CharacterPage2 = ({ name, classes, race, backgrounds, level, selectedRace, str, dex, con, int, wis, cha, maxHp, image, selectSkills}) =>
{
    const profBonus = calculateProficiencyBonus(level)

    const handleSkills = () =>
    {

        const selectedSkill = CLASS_SKILLS.find(sv => sv.label === classes )
        console.log("Selected Skills:", selectedSkill.skills)
        console.log("All Skills:",selectSkills);
        // return selectedSkills.skills;
    }

    const handleIsProficent = (skillName) =>
    {
        const correctCapital = capitalized(skillName.toLowerCase()) 
        // console.log("Correct Capital:", correctCapital)
        if (selectSkills.includes(correctCapital))
        {
            // console.log("Exists:", handleSavingThrow().includes(correctCapital))
            return true
        }
        else
        {
            // console.log("DNE")
            return null
        }
    }
    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        <ScrollView>
        
        {/* <View style={styles.viewStyle}> */}
            <Text style={styles.textStyle}>Skills</Text>
            <View style={[globalStyles.centerRow]}>
    {handleSkills()}
    <SkillsIcon abilityName={"Acrobatics"} profMod={profBonus} isProfcient={handleIsProficent("Acrobatics")} score={dex}/>
    <SkillsIcon abilityName={"Animal Handing"} profMod={profBonus} isProfcient={handleIsProficent("Animal Handling")} score={wis}/>
        </View>
        <View style={globalStyles.centerRow}>
            <SkillsIcon abilityName={"Arcana"} profMod={profBonus} isProfcient={handleIsProficent("Arcana")} score={int}/>
            <SkillsIcon abilityName={"Athletics"} profMod={profBonus} isProfcient={handleIsProficent("Athletics")} score={str}/>
        </View>
        <View style={globalStyles.centerRow}>
            <SkillsIcon abilityName={"Deception"} profMod={profBonus} isProfcient={handleIsProficent("Deception")} score={cha}/>
            <SkillsIcon abilityName={"History"} profMod={profBonus} isProfcient={handleIsProficent("History")} score={int}/>
        </View>
        <View style={globalStyles.centerRow}>
            <SkillsIcon abilityName={"Insight"} profMod={profBonus} isProfcient={handleIsProficent("Insight")} score={wis}/>
            <SkillsIcon abilityName={"Intimidation"} profMod={profBonus} isProfcient={handleIsProficent("Intimidation")} score={cha}/>
        </View>
        <View style={globalStyles.centerRow}>
            <SkillsIcon abilityName={"Investigation"} profMod={profBonus} isProfcient={handleIsProficent("Investigation")} score={int}/>
            <SkillsIcon abilityName={"Medicine"} profMod={profBonus} isProfcient={handleIsProficent("Medicine")} score={wis}/>
        </View>
        <View style={globalStyles.centerRow}>
            <SkillsIcon abilityName={"Nature"} profMod={profBonus} isProfcient={handleIsProficent("Nature")} score={int}/>
            <SkillsIcon abilityName={"Perception"} profMod={profBonus} isProfcient={handleIsProficent("Perception")} score={wis}/>
        </View>
        <View style={globalStyles.centerRow}>
            <SkillsIcon abilityName={"Performance"} profMod={profBonus} isProfcient={handleIsProficent("Performance")} score={cha}/>
            <SkillsIcon abilityName={"Persuasion"} profMod={profBonus} isProfcient={handleIsProficent("Persuasion")} score={cha}/>
        </View>
        <View style={globalStyles.centerRow}>
            <SkillsIcon abilityName={"Religion"} profMod={profBonus} isProfcient={handleIsProficent("Religion")} score={int}/>
            <SkillsIcon abilityName={"Sleight of Hand"} profMod={profBonus} isProfcient={handleIsProficent("Sleight of Hand")} score={dex}/>
        </View>
        <View style={globalStyles.centerRow}>
            <SkillsIcon abilityName={"Stealth"} profMod={profBonus} isProfcient={handleIsProficent("Stealth")} score={dex}/>
            <SkillsIcon abilityName={"Survival"} profMod={profBonus} isProfcient={handleIsProficent("Survival")} score={wis}/>
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
