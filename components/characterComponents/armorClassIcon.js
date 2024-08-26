import { View, StyleSheet, Text } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon from '@expo/vector-icons/Ionicons'

import { characterBorderWidth, COLORS, FONTSIZE } from "../../constants/theme";
import Feather from '@expo/vector-icons/Feather';

const armorSize = 100;
//INCOMPLETE
export default ArmorClassIcon = ({ ac }) => {
    return (
        <View style={styles.iconContainer}>
            {/* <Feather name="shield" size={100} color={"black"}/>         */}
            <Icon style={styles.filledShield} name="shield" color={COLORS.mainColor} size={armorSize}/>

            <Icon name="shield-outline" color="black" size={armorSize}/>
            <Text style={styles.acText}>20</Text>

            {/* <View style={{backgroundColor: 'red', width: 100, height: 100}}/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        height: armorSize,
        width: armorSize,
        justifyContent: 'center',
        alignItems: 'center'
    },
    filledShield: {
        position: 'absolute',
        // bottom: 0,
        // left: 0,
    },
    acText: {
        fontWeight: 'bold',
        top: 15,
        fontSize: FONTSIZE.xxlarge + 15,
        textAlign: 'center',
        position: 'absolute',
        alignSelf: 'center'
    }
});
