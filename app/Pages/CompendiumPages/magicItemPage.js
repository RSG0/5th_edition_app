import { View, Text, TouchableOpacity, StyleSheet,ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MAGICITEMS_ARMOR, MAGICITEMS_POTIONS, MAGICITEMS_RINGS, MAGICITEMS_WONDROUS } from "../../../constants/characterinformation/magicitems";
import MagicItemIcon from "../../../components/magicItemIcon";
import NewMagicItemButton from "../../../components/buttons/newMagicItemButton";
import { useState, useEffect } from "react";
import CustomMagicItemIcon from "../../../components/customMagicItemIcon";

const {width, height} = Dimensions.get('screen');

function displayMagicArmor()
{
    return MAGICITEMS_ARMOR.map((armor, index) => (

        <MagicItemIcon key={armor.name} name={armor.name} type={"Armor"} weight={armor.weight} attunement={armor.attunement} description={armor.description} rarity={armor.rarity} charges={armor.charges} numOfCharges={armor.numOfCharges}/>
    ));
}
function displayMagicPotions()
{
    return MAGICITEMS_POTIONS.map((armor, index) => (
        <MagicItemIcon key={index + 1} name={armor.name} type={"Potion"} weight={armor.weight} attunement={armor.attunement} description={armor.description} rarity={armor.rarity} charges={armor.charges} numOfCharges={armor.numOfCharges}/>
    ));
}
function displayMagicRings()
{
    return MAGICITEMS_RINGS.map((armor, index) => (
        <MagicItemIcon key={index} name={armor.name} type={"Ring"} weight={armor.weight} attunement={armor.attunement} description={armor.description} rarity={armor.rarity}charges={armor.charges} numOfCharges={armor.numOfCharges}/>
    ));
}


function displayWondorousItems()
{
    return MAGICITEMS_WONDROUS.map((armor, index) => (
        <MagicItemIcon key={index} name={armor.name} type={"Wondorous Items"} weight={armor.weight} attunment={armor.attunement} description={armor.description} rarity={armor.rarity}charges={armor.charges} numOfCharges={armor.numOfCharges}/>
    ));
}
export default MagicItemPage = ({navigation, route}) =>
{
    const { name, itemType, weaponType, isChargable, numOfCharges, attunement, rarity, description, weight} = route.params || {};

    //Used in tandem with Async Storage
    const [customMagicItem, setCustomMagicItem] = useState([]);

    useEffect(() => {
        load();
    }, []);

    useEffect(() => {
        if (customMagicItem.length > 0) {
            save();
        }
    }, [customMagicItem]);

    const save = async () => {
        try {
            await AsyncStorage.setItem("MagicItem1", JSON.stringify(customMagicItem));
        } catch (err) {
            console.log(err);
        }
    };
    const load = async () => {
        try {
            const magicItemJSON = await AsyncStorage.getItem("MagicItem1");
            if (magicItemJSON) {
                setCustomMagicItem(JSON.parse(magicItemJSON));
            }
        } catch (err) {
            console.log(err);
        }
    };


    const removeMagicItem = (index) => {
        const updatedMagicItem = customMagicItem.filter((_, i) => i !== index); //_ refers to the current item (gets ingnored)
        setCustomMagicItem(updatedMagicItem);
    };

    function displayCustomItems(customMagicItems) {
        return customMagicItems.map((item, index) => (
            <CustomMagicItemIcon
                key={index}
                name={item.name}
                type={item.itemType || "Custom Item"}
                weight={item.weight || 0}
                attunement={item.attunement}
                description={item.description || "N/A"}
                rarity={item.rarity}
                charges={item.isChargable}
                numOfCharges={item.numOfCharges}
                removeItem={() => removeMagicItem(index)}
                
            />

        ));

    }

    useEffect(() => {
        if (name) {
            const newMagicItems = { name, itemType, weaponType, isChargable, numOfCharges, attunement, rarity, description, weight};
            setCustomMagicItem((prevMagicItems) => [...prevMagicItems, newMagicItems]);
        }
    }, [name, itemType, weaponType, isChargable, numOfCharges, attunement, rarity, description, weight]);

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
                {/**Wondorous Items Section */}
                <Text style={styles.textStyle}>Wondorous Items:</Text>
                {displayWondorousItems()}
                <Text style={styles.textStyle}>Custom Magic Items:</Text>
                {displayCustomItems(customMagicItem)}
            </View>
            <View style={{margin: height * .25}}/>
            </ScrollView>
            <NewMagicItemButton navigation={navigation} nextScreen={"Create Magic-Item Page"}/>

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
        width: width,
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
