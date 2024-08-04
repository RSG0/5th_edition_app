import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { COLORS, FONTSIZE } from "../constants/theme"

export default EquipmentIcon = ({itemName, type, weight, cost}) =>
{
    return(
        <View style={styles.item}>
            <TouchableOpacity style={{width: 335, display:'flex', flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.square}/>
                <View style={{flexDirection:'column', maxWidth: "80%", width: 200}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>{itemName}</Text>
                    <Text style={{fontSize: 12, fontStyle: 'italic'}}>{type}</Text>
                    <Text style={{fontSize: 12, marginTop: 5}}>{weight} lbs.</Text>
                </View>
                <View>
                    <Text style={{fontSize: 30, marginLeft: 5, textAlign: 'right', width: 80}}>{cost}</Text>
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
        marginBottom: 10,
    },
    square:{
        width: 25,
        height: 25,
        backgroundColor: "A7A7A7",
        marginVertical: 20,
        marginHorizontal: 9,
        borderRadius: 5
    }
})