import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native"
import { characterBorderWidth, COLORS, FONTSIZE } from "../constants/theme"

const {width, height} = Dimensions.get('screen');

export default MagicItemIcon = () =>
{
    return(
        <View style={styles.item}>
            <TouchableOpacity style={styles.touchable}>
                <View style={styles.square}/> {/**Print the square */}
                <View style={styles.textContainer}>
                    <Text style={styles.itemTitle}>Adamantine Armor</Text>
                    <Text style={styles.itemSubtitle}>Armor</Text>
                    <Text style={styles.itemWeight}>55 lbs.</Text>
                </View>
                <View style={styles.circleContainer}>
                    <View style={[styles.circle]}> {/** Attunement */}
                        <Text style={styles.circleText} >A</Text> 
                    </View>
                    <View style={[styles.circle, , styles.uncommonRarityColor]}> {/** Rarity */}
                        <Text style={styles.circleText} >R</Text> 
                    </View>
                    <View style={[styles.circle, styles.chargesColor]}> {/** Charges */}
                        <View style={[styles.circleCharge, ]}/>
                        <Text style={styles.circleText} >C</Text> 
                    </View>

                </View>
            </TouchableOpacity>
        </View>
    )
}
const circleSize = .08
const styles = StyleSheet.create({
    item:{
        width: width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height: height * .1,
        borderRadius: 10,
        justifyContent: 'space-between',
    },
    touchable:{
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center'
        
    },
    textContainer:{
        flex: 1,
        backgroundColor: '',
        flexDirection: 'column'
    },
    itemTitle: {
        fontSize: FONTSIZE.xsmall,
        fontWeight: "bold",
    },
    itemSubtitle: {
        fontSize: FONTSIZE.xxsmall,
        fontStyle: "italic",
    },
    itemWeight: {
        fontSize: FONTSIZE.xxsmall,
        marginTop: height * 0.02,
    },

    square:{
        width: width * .05,
        height: width * .05,
        backgroundColor: COLORS.mainColor,
        marginVertical: height * .02,
        marginHorizontal: width * .02,
        borderRadius: 5
    },
    circle:
    {
        width: width * circleSize,
        height: width * circleSize,
        borderWidth: characterBorderWidth /2,
        // backgroundColor: 'red',
        // flex: 1,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: width * .01,
    },
    circleContainer: {
        backgroundColor: "",
        // flex: 1 /2,

        justifyContent: "center",
        flexDirection: 'row',
        alignItems: "center", // Centers text inside the red square
    },
    redSquareText: {
        fontSize: FONTSIZE.xsmall,
        textAlign: "center",
        color: "white",
    },
    circleText:{
        fontSize: FONTSIZE.small, 
        flex: 1, 
        backgroundColor: '', 
        textAlign: 'center',
        alignSelf: 'center',
        position: 'absolute'
    },
    circleCharge:{
        width: width * .05,
        height: width * .05,
        borderWidth: characterBorderWidth /4,
        position: 'absolute',
        borderRadius: 60,
    },
    uncommonRarityColor:
    {
        backgroundColor: "#4CFF48"
    },
    chargesColor:
    {
        backgroundColor: "#B5B5B5"
    }
    
})