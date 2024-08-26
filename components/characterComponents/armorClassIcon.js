import { View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';
import { characterBorderWidth, COLORS, FONTSIZE } from "../../constants/theme";
import Feather from '@expo/vector-icons/Feather';


//INCOMPLETE
export default ArmorClassIcon = ({ ac }) => {
    return (
        <View style={styles.iconContainer}>
            <Feather name="shield" size={100} color={"black"}/>        
            <View style={{backgroundColor: 'red', width: 100, height: 100}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        borderRadius: 10,
        // borderWidth: 1,
        borderColor: COLORS.mainColor,
        padding: 5, // Add some padding to create space around the icon
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
