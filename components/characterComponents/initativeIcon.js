import { View, StyleSheet, Text, ScrollView } from "react-native";
import { characterBorderWidth, COLORS, FONTSIZE } from "../../constants/theme";
export default InitativeIcon = ({dex}) =>
{
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle} >
                Initative:{"\n"} 
                <Text style={{fontSize: FONTSIZE.xxlarge}}>+4</Text>  
            </Text>
            {/* <Text style={styles.textStyle } >0</Text> */}


        </View>
    );
}
const squareSize = 90

const styles = StyleSheet.create(
{
    viewStyle: {
        width: squareSize,
        height: squareSize,
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
