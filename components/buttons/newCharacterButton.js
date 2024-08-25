import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { COLORS, FONTSIZE } from "../../constants/theme"

export default NewCharacterButton = () =>
{
    const moreButton = 
    <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreButtonIcon}>...</Text>
    </TouchableOpacity>
    return(
        <View style={styles.item}>

            <TouchableOpacity style={{width: 335, display:'flex', flexDirection: 'row', alignItems: 'center'}}>
            {moreButton}
                <View style={styles.square}/>

                <View style={[styles.viewStyle ,{flexDirection:'column', maxWidth: "80%"}]}>

                    <Text style={styles.textStyle}>Alphonse Legguro (Elric) {"\n"} Cleric 5 Fighter 3 | Warforged </Text>
                    {/* <Text style={styles.textStyle}>Cleric 5 | Warforged</Text> */}
                    {/* <Text style={styles.textStyle}>Cleric 5 Fighter 3 | Warforged</Text> */}

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
const imageSize = 72
const moreButtonSize = 30

const styles = StyleSheet.create({
    item:{
        width: 340,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 124,
        borderRadius: 10,
    },
    viewStyle: {
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginRight: 10,
        position: 'relative',
        flex: 1
    },
    square:{
        width: imageSize,
        height: imageSize,
        backgroundColor: COLORS.mainColor,
        marginVertical: 20,
        marginLeft: 22,
        marginRight: 10,
        borderRadius: 10
    },
    textStyle:{
        marginTop: 10,
        width: 200,
        // backgroundColor: 'red',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: FONTSIZE.medium
    },
    moreButton: {
        borderRadius: 5,
        backgroundColor: 'gray',
        width: moreButtonSize,
        height: moreButtonSize,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0
        // alignSelf: 'center',
        // direction: 'rtl',

    },
    moreButtonIcon: {
        fontSize: FONTSIZE.xlarge,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})