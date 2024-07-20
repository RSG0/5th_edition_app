import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/theme";

export default EquipmentPage = () =>
{
    <SafeAreaView style={{backgroundColor: COLORS.background}}>
    <View style={styles.backScreen}>

    </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    
    backScreen:{
        width: 333,
        borderRadius: 20,
        backgroundColor: 'gray'
    },

})