import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { characterBorderWidth, COLORS, FONT, FONTSIZE } from "../../constants/theme";
import { Title } from "react-native-paper";
import { globalStyles } from "../../constants/global";
export default MagicItemModal = ({name, type, attunement, charges, numOfCharges,rarity, description, weight}) =>
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
            console.log("No Charges Detected");
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
                        <Text style={[styles.title]}>{name}:</Text>
                        <Text style={{fontStyle:'italic', fontSize: FONTSIZE.small}}>{type}</Text>

                    </View>
                    <ScrollView style={{backgroundColor: '', width: width * .8, height: height * .2, borderRadius: 20, alignSelf: 'center', flex: 1, borderWidth: characterBorderWidth, marginVertical: height * .01}} >
                        <Text style={{padding: 10, fontSize: FONTSIZE.xsmall}}>
                        {description}
  
                        </Text>
                    </ScrollView>
                    <Text >Weight: {weight} lbs.</Text>
                    <View style={{ position: 'absolute', right: -10, width: width * 0.5, justifyContent: 'center', height: height * 0.08, flexDirection: 'row', flexWrap: 'wrap', alignContent: 'center', backgroundColor: '' }}>
                        <Text style={[styles.upperPortion, { fontWeight: 'bold' }]}>Attunement: </Text>
                        <Text style={styles.upperPortion}>{handleAttunement(attunement)}</Text>
                        <Text style={{ fontSize: FONTSIZE.xsmall, marginLeft: width * 0.01, fontWeight: 'bold' }}>Charges: </Text>
                        <Text style={styles.upperPortion}>{handleCharges(charges, numOfCharges)}</Text>
                        
                        <Text style={{ fontSize: FONTSIZE.small, backgroundColor: 'white', fontWeight: 'bold' }}>Rarity: </Text>
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
        width: width *.9,
        height: height * .4,
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
