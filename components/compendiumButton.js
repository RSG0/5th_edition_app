import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONT, FONTSIZE } from "../constants/theme";

export default CompendiumButton = ({text, nextScreen}) =>
{
    return(
        <View style={styles.item}>
            <TouchableOpacity style={styles.components}>
                <View style={styles.square}/>
                <Text style={styles.text}>View {text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
{
    item:{
        width: 334,
        height: 108,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 15, //This is to stack these components
    },
    components:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    square:{
        width: 54,
        height: 54,
        borderRadius: 10,
        marginVertical: 27,
        marginHorizontal: 27,
        opacity: 0.9,
        backgroundColor: COLORS.mainColor,
    },
    text:
    {
        // width: 120,
        fontSize: FONTSIZE.xlarge,
        fontWeight: 'bold',
        textAlign: 'center'
    }
}
)