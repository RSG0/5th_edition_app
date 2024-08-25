import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { COLORS, FONTSIZE } from "../../constants/theme"

export default NewCharacterButton = () =>
{
    return(
        <View style={styles.item}>
            <TouchableOpacity style={{width: 335, display:'flex', flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.square}/>
                <View style={[styles.viewStyle ,{flexDirection:'column', maxWidth: "80%"}]}>
                    <Text style={styles.textStyle}>Alphonse Legguro (Elric)</Text>
                    <Text style={styles.textStyle}>Cleric 5 | Warforged</Text>

                    {/* <Text style={{fontSize: 12, fontStyle: 'italic'}}>Armor</Text>
                    <Text style={{fontSize: 12, marginTop: 5}}>55 lbs.</Text> */}
                </View>
                <View>
                    {/* <Text style={{fontSize: 25, marginLeft: 100, textAlign: 'right', width: 100}}>7005</Text> */}
                </View>
            </TouchableOpacity>
        </View>
    )
}
const squareSize = 72
const styles = StyleSheet.create({
    item:{
        width: 335,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 114,
        borderRadius: 10,
        justifyContent: 'space-between'
    },
    viewStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    square:{
        width: squareSize,
        height: squareSize,
        backgroundColor: COLORS.mainColor,
        marginVertical: 20,
        marginLeft: 22,
        marginRight: 16,
        borderRadius: 10
    },
    textStyle:{
        // width: 220,
        // backgroundColor: 'red',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: FONTSIZE.medium
    }
})