// Spells Page
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../../constants/theme";
import { globalStyles } from "../../../constants/global";

export default characterPage4 = () =>
{
    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        <ScrollView>
            <View style={styles.grayBackground}>
                <View style={styles.viewStyle}>
                    <View style={styles.spellcastingAbilityBox}>
                        <Text>CHARISMA</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={[styles.box, globalStyles.centerRow]}>
                            <Text style={{fontSize: 20, textAlign: 'center'}}>+2</Text> 
                        </View>
                        {/**Spell Attack */}
                        <View style={[styles.box, globalStyles.centerRow]}>
                            <Text style={{fontSize: 20, textAlign: 'center'}}>+2</Text> 
                        </View>
                        {/**Spell Save DC */}
                        <View style={[styles.box, globalStyles.centerRow]}>
                            <Text style={{fontSize: 20, textAlign: 'center'}}>12</Text>
                        </View>
                    </View>
                    <Text style={styles.textStyle}>This is the Setting Screen</Text>

                </View>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
}
const squareSize = 50
const styles = StyleSheet.create(
{
    grayBackground: {
        paddingVertical: 10,
        borderRadius: 10,
        margin: 20,
        // paddingVertical: 10,
        backgroundColor: COLORS.grayBackground,
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        flex: 1
    },
    viewStyle: {
        
        // backgroundColor: COLORS.background,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.xxlarge,
        textAlign: 'center'
    },
    spellcastingAbilityBox:
    {
        padding: 10,
        borderWidth: 4,
        borderRadius: 10,
        backgroundColor: 'red'
    },
    box:
    {
        margin: 10,
        justifyContent: 'center',
        width: squareSize,
        height: squareSize,
        borderWidth: 4,
        borderRadius: 10
    }
}
)
