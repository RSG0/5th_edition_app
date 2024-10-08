import { View, Text, StyleSheet } from "react-native"
import { COLORS, FONTSIZE } from "../constants/theme"
import { HeaderToolWrapper, HeaderToolBar } from "../constants/UI_Wrappers"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function header()
{
    
}
const styles = StyleSheet.create(
{
    item:{
        fontSize: FONTSIZE.xlarge, 
        textAlign:'center', borderRadius:18, 
        borderWidth: 3, 
        width: HeaderToolWrapper.width, 
        height:HeaderToolWrapper.height, 
        backgroundColor: COLORS.background, 
        overflow: 'hidden'
    }

}
)