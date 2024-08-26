import { View, StyleSheet, Text, ScrollView } from "react-native";
import { characterBorderWidth, COLORS, FONTSIZE } from "../../constants/theme";

export default profBonusAndSpeedIcon = ({prof,speed}) =>
{
    return (
        <>
        <View style={styles.viewStyle}>
            <Text style={styles.titleTextStyle} >
                Prof. Bonus {"\n"} +2
            </Text>
            <Text style={styles.titleTextStyle} >
                Speed {"\n"} 30 feet.
            </Text>            

        </View>
        </>
    );
}
const squareSize = 125

const styles = StyleSheet.create(
{
    viewStyle: {
        width: 300,
        height: 80,
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
