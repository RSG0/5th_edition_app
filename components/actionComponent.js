import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { COLORS, FONTSIZE } from "../constants/theme"

export default ActionCompnent = ({name, type, range, hit_DC, effectDie, isVersatileDie, versatileDie,damageType}) =>
{
    const extraChars = " & Dragon Slayer Katanna"
    const displayName = name || "NNNNNNN" 
    const displayType = type || "Melee NNNN" 
    const displayRange = range || "NN." 
    const displayHit_DC = hit_DC || " + NN" 
    const displayEffectDie = effectDie || "1dN + 2" 
    const displayIsVersatile = isVersatileDie || "true"
    const displayVersatileTile = versatileDie || "1dN + "
    const displayDamageType = damageType || "Ndiatnt" 
    const textArea = 120


    return (
        <View style={styles.item}>
            <TouchableOpacity style={{width: 335, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <View style={{flexDirection:'column', maxWidth: "80%", width: textArea, marginLeft: 10, backgroundColor: 'teal'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>{displayName + extraChars}</Text>
                    <Text style={{fontSize: 12, fontStyle: 'italic'}}>{displayType}</Text>
                    <Text style={{fontSize: 12, marginTop: 5}}>{displayRange} FT. Reach</Text>
                </View>
                <View style={{width: 60, height: 60, backgroundColor: 'teal'}}>
                    <Text style={{fontSize: 50, textAlign: 'center', alignSelf: 'center', justifyContent: 'center'}}>+5</Text>
                </View>
                <View style={{textAlign: 'right', width: 100, alignItems: 'center', backgroundColor: 'teal', marginRight: 10}}>
                    <Text style={{fontSize: 20}}>
                        {displayEffectDie + displayDamageType}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
    
/**

    return(
        <View style={styles.item}>
            <TouchableOpacity style={{width: 335, display:'flex', flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.square}/>
                <View style={{flexDirection:'column', maxWidth: "80%", width: 200}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>{displayName}</Text>
                    <Text style={{fontSize: 12, fontStyle: 'italic'}}>{displayType}{}</Text>
                    <Text style={{fontSize: 12, marginTop: 5}}>{displayRange}</Text> {/FT. Reach /}
                    </View>
                    <View>
                        <Text style={{fontSize: 30, marginLeft: 5, textAlign: 'right', width: 80}}>{displayEffectDie}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )

 */
}
const styles = StyleSheet.create({
    item:{
        margin:5,
        width: 335,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        // height: 65,
        borderRadius: 10,
        // justifyContent: 'space-between',
        marginBottom: 10,
        paddingVertical: 10,
    },
    square:{
        width: 25,
        height: 25,
        backgroundColor: COLORS.mainColor,
        marginVertical: 20,
        marginHorizontal: 9,
        borderRadius: 5
    }
})