import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { characterBorderWidth, COLORS, FONT, FONTSIZE } from "../../constants/theme";
import { Title } from "react-native-paper";
export default MagicItemModal = ({name, type}) =>
{
    return (
        <View style={styles.viewStyle}>
                    <View style={{ justifyContent: 'space-between', flexDirection:'column'}}>
                    <View>
                        <Text style={styles.title} >Amulet of Health:{}</Text>
                        <Text style={{fontStyle:'italic', fontSize: FONTSIZE.small}}>Wondurous Item</Text>

                    </View>
                    <ScrollView style={{backgroundColor: '', width: width * .8, height: height * .2, borderRadius: 20, alignSelf: 'center', flex: 1, borderWidth: characterBorderWidth, marginVertical: height * .01}} >
                        <Text style={{padding: 20, fontSize: FONTSIZE.xxsmall}}>
                        Your Constitution score is 19 while you wear this amulet. It has no effect on you if your Constitution is already 19 or higher without it. 
  
                        </Text>
                    </ScrollView>
                    <Text >Weight: 1 lbs.</Text>
                        <View style={{position: 'absolute', right: -10, width: width * .45, justifyContent:'center', height: height * .08, flexDirection:'row', flexWrap:'wrap', alignContent:'center', backgroundColor: ''}}>

                            <Text style={ [styles.upperPortion, {fontWeight: 'bold' }]}>Attunment: </Text> 
                                <Text style={styles.upperPortion}>Yes</Text>
                            <Text style={{fontSize: FONTSIZE.xsmall, marginLeft: 10,  fontWeight: 'bold'}} >Charges: </Text> 
                                <Text style={styles.upperPortion}>7/7</Text>
                            <Text style={{fontSize: FONTSIZE.small, backgroundColor: 'white', fontWeight: 'bold' }} >Rarity: </Text> 
                                <Text style={{fontSize: FONTSIZE.small, fontStyle: 'italic', color: 'green'}}>Common</Text>

                        </View>
                    </View>
        </View>

    );
}
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create(
{
    viewStyle: {
        margin: 20,
        width: width *.9,
        height: height * .4,
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
        fontSize: FONTSIZE.medium,
        // textAlign: 'center'
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    infoText: {
        fontSize: FONTSIZE.xsmall,
        textAlign: 'left', // Aligns text within its content box
        flex: 1,          // Allows each text block to share the available space
    },
    upperPortion:
    {
        fontSize: FONTSIZE.xsmall
    }

}
)
