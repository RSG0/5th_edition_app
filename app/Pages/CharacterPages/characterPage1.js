import { View, StyleSheet, Text, ScrollView, Dimensions, Image } from "react-native";
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
import MagicItemModal from "../../../components/modals/magicItemModal(Rough)";
import { calculateProficiencyBonus, calculateScoreMod, checkPositive, maxHitDice } from "../../../constants/characterinformation/math";
import { CLASS_SAVING_THROWS, CLASSES } from "../../../constants/characterinformation/characterinfo";
import { capitalized } from "../../../constants/global";

export default CharacterPage1 = ({ name, classes, race, backgrounds, level, selectedRace, str, dex, con, int, wis, cha, maxHp, image, selectedSkills}) =>
{

    const imageSize = width * .3
    const findHitDice = () =>
    {
        // console.log("Classes:", classes)
        // console.log("Name:", name)
        const findClass = CLASSES.find(c => c.label === classes)
        // console.log("HD:", findClass.hitDice)
        return findClass.hitDice
        
    }
    const handleSavingThrow = () =>
    {
        const selectedSavingThrows = CLASS_SAVING_THROWS.find(sv => sv.label === classes )
        return selectedSavingThrows.savingThrows;
    }
    const handleIsProficent = (svName) =>
    {
        const correctCapital = capitalized(svName.toLowerCase()) 
        if (handleSavingThrow().includes(correctCapital))
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
    const handleImage = () =>
    {
        if (image)
        {
            console.log("Image Exists");
        }
        else
        {
            console.log("Image DNE")
        }
    }
    const profBonus = calculateProficiencyBonus(level)
    const displayValues= () =>
        {
            console.log("NAME:", name)
            console.log("STR:", str )
            console.log("DEX:", dex )
            console.log("CON:", con )
            console.log("INT:", int )
            console.log("WIS:", wis )
            console.log("CHA:", cha )
            // console.log("Selected Skills:", selectSkills)
            console.log("Class:", classes )
            // console.log("Max Hp:", maxHp)
            // console.log("Subclass:", subclass)
        }
    const displayAbilityScores = () =>
    {
        return(
        <>
        <View>
            {/* {displayValues()} */}
            {/**First Row: */}
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                {/* {displayValues()} */}
                <AbilityScoreIcon abilityName={"STRENGTH"} score={str}/>
                <AbilityScoreIcon abilityName={"DEXTERITY"} score={dex}/>
                <AbilityScoreIcon abilityName={"CONSTITUTION"} score={con}/>
            </View>
            {/**Second Row: */}
        </View>
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <AbilityScoreIcon abilityName={"INTELLIGENCE"} score={int}/>
                <AbilityScoreIcon abilityName={"WISDOM"} score={wis}/>
                <AbilityScoreIcon abilityName={"CHARISMA"} score={cha}/>
            </View>
        <View></View>
        </>)
    }
    const displaySavingThrows = () =>
    {
        return(
            <>
        <View>
            <Text style={{marginTop: 10, fontSize: FONTSIZE.large, fontWeight: 'bold', marginLeft: 20}}>Saving Throws:</Text>
            <View style={styles.savingThrowRow}>
                <SavingThrowIcon abilityName={"STRENGTH"} isProfcient={handleIsProficent("STRENGTH")} profMod={profBonus} score={str}/>
                <SavingThrowIcon abilityName={"DEXTERITY"} isProfcient={handleIsProficent("DEXTERITY")} profMod={profBonus} score={dex}/>
            </View>
            <View style={styles.savingThrowRow}>
                <SavingThrowIcon abilityName={"CONSTITUTION"} isProfcient={handleIsProficent("CONSTITUTION")} profMod={profBonus} score={con}/>
                <SavingThrowIcon abilityName={"INTELLIGENCE"} isProfcient={handleIsProficent("INTELLIGENCE")} profMod={profBonus} score={int}/>
            </View>
            <View style={styles.savingThrowRow}>
                <SavingThrowIcon abilityName={"WISDOM"} isProfcient={handleIsProficent("WISDOM")} profMod={profBonus} score={wis}/>
                <SavingThrowIcon abilityName={"CHARISMA"} isProfcient={handleIsProficent("CHARISMA")} profMod={profBonus} score={cha}/>
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
                <HitDiceIcon hitDice={findHitDice()} level={level} />      
                <InitativeIcon dex={checkPositive(calculateScoreMod(dex))}/>
            </View>
            <View style={{justifyContent: 'center'}}>
                <View style={styles.circle}>
                    {image ? (
                            <Image
                                source={{ uri: image}}
                                style={{ width: imageSize, height: imageSize, borderRadius: 10 }}
                            />
                        ) : (
                            <Text style={styles.imagePlaceholder}>No Image</Text>
                        )}     
                </View>
            </View>
            <View>
                <HitPointIcon currentHP={2} maxHP={maxHp}/>
                <ArmorClassIcon/>
            </View>
        </View>

        {/**Second Row: */}
        <View>
            <ProfBonusAndSpeedIcon prof={profBonus}/>
        </View>

        {/**Third Row: Ability Score Rows 1-2 */}
        {displayAbilityScores()}
        {/**5th Row: Saving Throw Rows 1-3 */}
        {displaySavingThrows()}
        {/**6th Row: Senses Icon */}
        <Text style={styles.subTitleText}>Senses:</Text>
        <View style={{justifyContent: 'center'}}>
            <SensesIcon abilityName={"Investigation"} modName={"INT"} score={int} profBonus={profBonus} classes={classes}/>
            <SensesIcon abilityName={"Perception"} modName={"WIS"} score={wis} profBonus={profBonus} classes={classes}/>
            <SensesIcon abilityName={"Insight"} modName={"WIS"} score={wis} profBonus={profBonus} classes={classes}/>

        </View>

        </ScrollView>
        </SafeAreaView>
    );
}
const circleSize = 130;
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create(
{
    circle:
    {
        margin:width * .02,
        backgroundColor: COLORS.mainColor,
        // width: circleSize,
        // height: circleSize,
        width: width * .3,
        height: width * .3,
        borderRadius: width * .5,
        borderWidth: 5,
        overflow: 'hidden', // Ensures image stays within the circle
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageInCircle: {
        width: '100%',
        height: '100%',
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
        fontSize: FONTSIZE.large, 
        fontWeight: 'bold', 
        marginLeft: 20
    }

}
)
