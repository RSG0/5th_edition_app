import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { characterBorderWidth, COLORS, FONT, FONTSIZE, scale } from "../../constants/theme";
import { Title } from "react-native-paper";
import { globalStyles } from "../../constants/global";
export default spellModal = ({name, type, attunement, charges, numOfCharges,rarity, description, weight}) =>
{
    // {console.log("Are charges detected: " + charges)}
    const getRarityStyle = (rarity) => {
        switch (rarity?.toLowerCase()) {
            case "uncommon":
                return globalStyles.uncommonRarityColor;
            case "rare":
                return globalStyles.rareRarityColor;
            case "very rare":
                return globalStyles.veryRareRarityColor;
            case "legendary":
                return globalStyles.legendaryRarityColor;
            case "artifact":
                return globalStyles.artifactRarityColor;
            default:
                return null; // Default to no background color if rarity is not recognized
        }
    }
    const handleNameSize = (name) =>
    {
        if (name.length <= 15)
        {
            return FONTSIZE.medium
        }
        else {return FONTSIZE.small}

    }
    const handleAttunement = (isAttunement) =>
    {
        if (isAttunement === String)
        {
            console.log("isAttunement is a String");
        }
        if (isAttunement === "True")
            return "Yes"
        else if (isAttunement === "False")
        {
            return "No"
        }

    }
    const handleCharges = (isACharge, num) =>
    {
        if (isACharge === "True")
        {
            // console.log(num);
            return `(${Number(numOfCharges)}/${num})`;
        }
        else
        {
            // console.log("No Charges Detected");
            return "N/A"
        }
    }
    const handleRarity = (rarity) =>
    {
        if (rarity === "Uncommon")
        {
            //Change text color to green
        }
        else if (rarity === "Rare")
        {
            //Change text color
        }
    }
    return (
        <View style={styles.viewStyle}>
                    <View style={{ justifyContent: 'space-between', flexDirection:'column'}}>
                    <View>
                        <Text style={[styles.title]}>Fireball:</Text>
                        <Text style={{fontStyle:'italic', fontSize: scale(10), width: "44%", backgroundColor: ''}}>3rd Level Transmutation (ritual)</Text>
                        <Text style={{fontSize: FONTSIZE.xsmall, fontWeight: 'bold', marginTop: height* .02, width: "40%", backgroundColor: ''}}>Usable By: <Text style={{fontWeight:'regular'}}>Bard, Druid, Ranger, Sorceror, Wizard </Text></Text>


                    </View>
                    <ScrollView style={{backgroundColor: '', width: width * .8, height: height * .2, borderRadius: 20, alignSelf: 'center', flex: 1, borderWidth: characterBorderWidth, marginVertical: height * .01}} >
                        <Text style={{padding: 10, fontSize: FONTSIZE.xsmall}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
  
                        </Text>
                    </ScrollView>
                    <Text >  </Text>
                    <View style={{ position: 'absolute', right: -10, width: width * 0.47,  justifyContent: 'center', height: "40%", flexDirection: 'row', flexWrap: 'wrap', alignContent: 'center', alignItems: 'center', backgroundColor: '' }}>
                        <Text style={[styles.upperPortion, { fontWeight: 'bold' }]}>CT: 1 action</Text>
                        <Text style={styles.upperPortion}>{handleAttunement(attunement)}</Text>
                        <Text style={{ fontSize: FONTSIZE.xsmall, marginLeft: width * 0.01, fontWeight: 'bold', marginBottom: height * .05  }}>Range: 10 miles. </Text>
                        {/* <Text style={styles.upperPortion}>{handleCharges(charges, numOfCharges)}</Text> */}
                        
                        <Text style={{ fontSize: FONTSIZE.xsmall, backgroundColor: 'white', fontWeight: 'bold', textAlign: 'center'}}>Duration: Concentration, Up to 10 minutes </Text>
                        <Text style={[{ fontSize: FONTSIZE.small, fontStyle: 'italic' }, getRarityStyle(rarity)]}>{rarity}</Text>
                    </View>
                    {/* {    console.log("The description is: \n\n" + description) } */}
                    </View>
        </View>

    );
}
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create(
{
    viewStyle: {
        // flex: .4,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        width: width * .9,
        height: height * .5,
        // alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        display: 'flex',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        
        padding: 20,
        paddingHorizontal: 20,
        borderRadius: 50,
        borderWidth: characterBorderWidth    
    },
    box:{
    width: 20,
    margin: 10,
    height: 20,
    backgroundColor: 'red'
    },
    title: {
        justifyContent: 'space-between',
        width: width * .35,
        // margin: 20,
        fontWeight: 'bold',
        fontSize: FONTSIZE.medium,
        // textAlign: 'center',
        backgroundColor: ''
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    infoText: {
        fontSize: FONTSIZE.xsmall,
        textAlign: 'left', // Aligns text within its content box
        flex: 1,          // Allows each text block to share the available space
    },
    upperPortion:
    {
        fontSize: FONTSIZE.xsmall
    }

}
)
