import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../constants/theme";
import { MAGICITEMS_ARMOR, MAGICITEMS_POTIONS, MAGICITEMS_RINGS } from "../../constants/characterinformation/magicitems";
import MagicItemIcon from "../../components/magicItemIcon";


function displayMagicArmor()
{
    return MAGICITEMS_ARMOR.map((armor, index) => (

        <MagicItemIcon key={armor.name} name={armor.name} type={"Armor"} weight={armor.weight} attunment={armor.attunement} decription={armor.description} rarity={armor.rarity} charges={armor.charges} numOfCharges={armor.numOfCharges}/>
    ));
}
function displayMagicPotions()
{
    return MAGICITEMS_POTIONS.map((armor, index) => (
        <MagicItemIcon key={index + 1} name={armor.name} type={"Potion"} weight={armor.weight} attunment={armor.attunement} decription={armor.description} rarity={armor.rarity} charges={armor.charges} numOfCharges={armor.numOfCharges}/>
    ));
}
function displayMagicRings()
{
    return MAGICITEMS_RINGS.map((armor, index) => (
        <MagicItemIcon key={index} name={armor.name} type={"Ring"} weight={armor.weight} attunment={armor.attunement} decription={armor.description} rarity={armor.rarity}charges={armor.charges} numOfCharges={armor.numOfCharges}/>
    ));
}
export default MagicItemPage = ({navigation}) =>
{
    return(
        <SafeAreaView style={{backgroundColor: COLORS.background, flex:1}}>
            <ScrollView>
            {/* {console.log(ARMOR)} */}
            <View style={styles.viewStyle}>
                {/**Armor Section*/}
                <Text style={styles.textStyle}>Armor:</Text>
                {displayMagicArmor()}
                {/**Potion Section */}
                <Text style={styles.textStyle}>Potions:</Text>
                {displayMagicPotions()}
                {/**Ring Section */}
                <Text style={styles.textStyle}>Rings:</Text>
                {displayMagicRings()}
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}
/**
 * 
 */
const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: COLORS.background,
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textStyle: {
        width: 350,
        fontWeight: 'bold',
        fontSize: FONTSIZE.xxlarge,
        textAlign: 'left',
        marginBottom: 10
    },
    backScreen:{
        width: 333,
        borderRadius: 20,
        backgroundColor: 'gray'
    },

})
