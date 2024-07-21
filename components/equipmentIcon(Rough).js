import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { COLORS, FONTSIZE } from "../constants/theme"

export default EquipmentIcon = () =>
{
    return(
        <View style={styles.item}>
            <TouchableOpacity style={{width: 335, display:'flex', flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.square}/>
                <View style={{flexDirection:'column'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Chain Mail</Text>
                    <Text style={{fontSize: 12, fontStyle: 'italic'}}>Heavy Armor</Text>
                    <Text style={{fontSize: 12, marginTop: 10}}>55 lbs.</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    item:{
        width: 335,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 65,
        borderRadius: 10
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