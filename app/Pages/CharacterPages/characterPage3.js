import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import ActionComponent from "../../../components/actionComponent";
import Seperator from "../../../components/seperator";
import NewPageButton from "../../../components/buttons/newPageButton";
import { act, useEffect, useState } from "react";



export default characterPage3 = ({navigation, selectedCantrips, selectedSpells, selectedEquipment, route}) =>
{
    useEffect((()=>
    {
        if (navigation)
        {
            console.log("Navigation:", navigation)
        }
    }),[navigation])
    useEffect(()=>
    {

        console.log("Screen has loaded")
    },[])

    const [actionIcons, setActionIcons] = useState([])
    const [bonusActionIcons, setBonusActionIcons] = useState([])
    const [reactionIcons, setReactionIcons] = useState([])

    // const {actions, bonusActions, reactions} = route.params || {};
    // useEffect(() => 
    //     {
    //         if (actions) {
    //             const newActionIcon = { iconName, type, range, hitDC, effectDie, damageType};
    //             setActionIcons((prevActions) => {
    //                 // Avoid duplicating the same character in the array
    //                 const alreadyExists = prevActions.some((action) => action.name === newActionIcon.name);
    //                 return alreadyExists ? prevActions : [...prevActions, newActionIcon];
    //             });
    //         }
    //         else if (bonusActions) 
    //         {
    //             const newBonusActionIcon = { iconName, type, range, hitDC, effectDie, damageType};
    //             setBonusActionIcons((prevActions) => {
    //                 // Avoid duplicating the same character in the array
    //                 const alreadyExists = prevActions.some((action) => action.name === newActionIcon.name);
    //                 return alreadyExists ? prevActions : [...prevActions, newActionIcon];
    //             });
    //         }
    //         else if (reactions) 
    //         {
    //             const newReactionIcon = { iconName, type, range, hitDC, effectDie, damageType};
    //             setReactionIcons((prevActions) => {
    //                 // Avoid duplicating the same character in the array
    //                 const alreadyExists = prevActions.some((action) => action.name === newActionIcon.name);
    //                 return alreadyExists ? prevActions : [...prevActions, newActionIcon];
    //             });
    //         }
    //     }, [actions, bonusActions, reactions])
    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        <ScrollView>
        <View style={styles.grayBackground}>
            {/* {console.log("Selected: ")}
            {console.log("Cantrips:", selectedCantrips)} */}
            <Text style={styles.textStyle}> <Text style={{fontWeight: 'bold'}}>ACTIONS</Text> - Attacks Per Action: 1</Text>
            <Seperator/>

            <View style={{alignItems: 'center'}}> 
                {/* {actions.map((action,i) => 
                    (
                        <ActionComponent/>
                    ) )} */}

            </View>
            <Text style={[styles.textStyle, {fontWeight: 'bold'}]}> BONUS ACTIONS - </Text>
            <Seperator/>

            <View style={{alignItems: 'center'}}> 
                <ActionComponent/>
                <ActionComponent/>
            </View>
            <Text style={[styles.textStyle, {fontWeight: 'bold'}]}> REACTIONS - </Text>
            <Seperator/>
            <View style={{alignItems: 'center'}}> 
                <ActionComponent/>
            </View>
        </View>
        <View style={{marginVertical: 100}} />
        </ScrollView>
        <NewPageButton navigation={navigation} nextScreen={"New Action Page"} params={{selectedCantrips, selectedSpells, selectedEquipment}}/>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create(
{
    grayBackground: {
        borderRadius: 10,
        margin: 20,
        // paddingVertical: 10,
        backgroundColor: COLORS.grayBackground,
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        flex: 1
    },
    textStyle: {
        marginTop: 10,
        marginLeft: 10,

        // fontWeight: 'bold',
        fontSize: FONTSIZE.large,
        // textAlign: 'center'
    },

}
)
