import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import { characterBorderWidth, COLORS, FONTSIZE } from "../../constants/theme";
export default InitativeIcon = ({dex}) =>
{
    const dexMod = (dex || "+N")
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle} >
                Initative:{"\n"} 
                <Text style={{fontSize: FONTSIZE.xxlarge}}>{dexMod}</Text>  
            </Text>
            {/* <Text style={styles.textStyle } >0</Text> */}


        </View>
    );
}
const squareSize = 90
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create(
{
    viewStyle: {
        margin: 10,
        // width: squareSize,
        // height: squareSize,
        width: width * .22,
        height: width * .22,
        backgroundColor: COLORS.mainColor,
        justifyContent: 'center',
        // alignItems: 'center',
        // alignSelf: 'center',
        borderRadius: 5,
        borderWidth: characterBorderWidth    
    },
    textStyle: {
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: FONTSIZE.medium,
    },

}
)
