import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { characterBorderWidth, COLORS, FONT, FONTSIZE } from "../../constants/theme";
import { Title } from "react-native-paper";
export default MagicItemModal = ({name, type}) =>
{
    return (
        <View style={styles.viewStyle}>
                    <View style={{ justifyContent: 'space-between', flexDirection:'column'}}>
                    <View>
                        <Text style={styles.title} >Amulet of Health:{"\n"}</Text>
                        <Text style={{fontStyle:'italic', fontSize: FONTSIZE.medium}}>Wondurous Item</Text>
                    </View>
                    <View style={{backgroundColor: 'gray', width: 850, height: 300, borderRadius: 20}} ></View>
                    <Text >Weight: 1 lbs.</Text>
                        <View style={{position: 'absolute', right: 40, width: 500, height: 100, flexDirection:'row', flexWrap:'wrap', alignContent:'center'}}>

                            <Text style={{width: 100}}>Attunment: </Text>
                            <Text style={{width: 100}} >Charges: </Text>
                        </View>
                    </View>
        </View>

    );
}
const styles = StyleSheet.create(
{
    viewStyle: {
        margin: 20,
        width: 900,
        height: 450,
        // alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        // display: 'flex',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        padding: 20,
        paddingHorizontal: 20,
        borderRadius: 50,
        borderWidth: characterBorderWidth    
    },
    box:{
    width: 20,
    margin: 10,
    height: 20,
    backgroundColor: 'red'
    },
    title: {
        justifyContent: 'space-between',

        // margin: 20,
        fontWeight: 'bold',
        fontSize: FONTSIZE.xxlarge,
        // textAlign: 'center'
    },


}
)
