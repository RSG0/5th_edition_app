import { View, StyleSheet, Text, Dimensions } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon from '@expo/vector-icons/Ionicons'

import { characterBorderWidth, COLORS, FONTSIZE } from "../../constants/theme";
import Feather from '@expo/vector-icons/Feather';

const armorSize = 100;
//INCOMPLETE
export default ArmorClassIcon = ({ ac }) => {
    const ArmorClass = (ac || "20")
    return (
        <View style={styles.iconContainer}>
            {/* <Feather name="shield" size={100} color={"black"}/>         */}
            <Icon style={styles.filledShield} name="shield" color={COLORS.mainColor} size={width * .25}/>

            <Icon name="shield-outline" color="black" size={width * .25}/>
            <Text style={styles.acText}>20</Text>

            {/* <View style={{backgroundColor: 'red', width: 100, height: 100}}/> */}
        </View>
    );
}
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    iconContainer: {
        // height: armorSize,
        // height: width * .25,
        // width: armorSize,
        // width : width * .25,
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
