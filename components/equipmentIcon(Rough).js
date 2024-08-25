import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { COLORS, FONTSIZE } from "../constants/theme"

export default EquipmentIcon = () =>
{
    return(
        <View style={styles.item}>
            <TouchableOpacity style={{width: 335, display:'flex', flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.square}/>
                <View style={{flexDirection:'column', maxWidth: "80%"}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Chain Mail</Text>
                    <Text style={{fontSize: 12, fontStyle: 'italic'}}>Armor</Text>
                    <Text style={{fontSize: 12, marginTop: 5}}>55 lbs.</Text>
                </View>
                <View>
                    <Text style={{fontSize: 25, marginLeft: 100, textAlign: 'right', width: 100}}>7005</Text>
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
        borderRadius: 10,
        justifyContent: 'space-between',
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