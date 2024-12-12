import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native"
import { COLORS, FONTSIZE } from "../constants/theme"

const {width, height} = Dimensions.get('screen');

export default MagicItemIcon = ({name, type, rarity, attunement, charges, numOfCharges, desciption}) =>
{
    
    return(
        <View style={styles.item}>

            <TouchableOpacity style={{width: "100%", display:'flex', flexDirection: 'row', alignItems: 'center'}}>


                    <View style={[styles.viewStyle ,{flexDirection:'column', maxWidth: "80%"}]}>

                        <Text style={styles.textStyle}>{name} {"\n"}{type} | {rarity} {attunement}  </Text>

                    </View>
                <View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const imageSize = 72
const moreButtonSize = 30

const styles = StyleSheet.create({
    item:{
        width: width * .8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 124,
        borderRadius: 10,
        marginBottom: 10,
        margin: 10
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
        width: "100%",
        // backgroundColor: 'red',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: FONTSIZE.medium
    },
    moreButton: {
        margin: 10,
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
        // fontSize: FONTSIZE.medium,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})