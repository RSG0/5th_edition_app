import { View, Text, StyleSheet } from "react-native"
import { COLORS, FONTSIZE } from "../constants/theme"
import { HeaderToolWrapper, HeaderToolBar } from "../constants/UI_Wrappers"


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