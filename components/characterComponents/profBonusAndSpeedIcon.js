import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import { characterBorderWidth, COLORS, FONTSIZE } from "../../constants/theme";

export default profBonusAndSpeedIcon = ({prof,speed}) =>
{
    const displaySpeed = speed || "NN Feet"
    return (
        <>
        <View style={styles.viewStyle}>
            <Text style={styles.titleTextStyle} >
                Prof. Bonus {"\n"} +{prof}
            </Text>
            <Text style={styles.titleTextStyle} >
                Speed {"\n"} {displaySpeed}.
            </Text>            

        </View>
        </>
    );
}
const squareSize = 125
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create(
{
    viewStyle: {
        // width: 300,
        width: width * .75,
        // height: 80,
        height: height * .1,
        flexDirection: 'row',
        flexGrow: '',
        backgroundColor: COLORS.mainColor,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 30,
        borderWidth: characterBorderWidth    
    },
    titleTextStyle: {
        marginTop: 10,
        // alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: FONTSIZE.medium,
    },
}
)
