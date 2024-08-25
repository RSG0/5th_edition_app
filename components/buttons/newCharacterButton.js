import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";
import Icon from 'react-native-vector-icons/FontAwesome6';

export default NewCharacterButton = ({ navigation, nextScreen}) =>
{
    const handlePress = () =>
    {
        navigation.navigate(nextScreen);
    }
    return(
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
    <TouchableOpacity style={styles.addButton} onPress={handlePress}>
            <Icon name="plus" size={40} solid={true} ></Icon>
    </TouchableOpacity>
    </View>
    )
}
const addSize = 60;

const styles = StyleSheet.create({
    addButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.mainColor,
        width: addSize,
        height: addSize,
        borderRadius: 40,
        borderWidth: 5,
        position: 'absolute',
        bottom: 10

    }
})