import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, FONTSIZE } from "../../constants/theme";
import { useState } from "react";

export default SettingPage = ({navigation}) =>
{
    const [mainColor, setMainColor] = useState(COLORS.mainColor); // Start with default main color

    const character = "Character1";
    const magicItem =  "MagicItem1"
    const spell = "Spell1"


    const clearData = async (data) => {
        try {
            await AsyncStorage.removeItem(data);
            console.log("All data cleared!", data);

        } catch (err) {
            console.log("Error clearing data:", data,  err);
        }
    };

    const clearAllData = async () => {
        try {
            await AsyncStorage.clear();
            console.log("All data cleared!");
        } catch (err) {
            console.log("Error clearing all data:", err);
        }
    };

    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        {/* <ScrollView> */}
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Change Your Theme:</Text>

            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center', alignItems: 'center', width: "90%", height: "30%", backgroundColor: 'gray', padding: "2%"}}>
                <TouchableOpacity style={[styles.themeButton, {backgroundColor: COLORS.redColor}]} onPress={() => setMainColor(COLORS.redColor)} />
                <TouchableOpacity style={[styles.themeButton, {backgroundColor: COLORS.blueColor}]} onPress={() => setMainColor(COLORS.blueColor)}/>
                <TouchableOpacity style={[styles.themeButton, {backgroundColor: COLORS.greenColor}]} onPress={() => setMainColor(COLORS.greenColor)}/>
                <TouchableOpacity style={[styles.themeButton, {backgroundColor: COLORS.orangeColor}]} onPress={() => setMainColor(COLORS.orangeColor)}/>
                <TouchableOpacity style={[styles.themeButton, {backgroundColor: COLORS.yellowColor}]} onPress={() => setMainColor(COLORS.yellowColor)}/>
                <TouchableOpacity style={[styles.themeButton, {backgroundColor: COLORS.lightGrayColor}]} onPress={() => setMainColor(COLORS.lightGrayColor)}/>
                <TouchableOpacity style={[styles.themeButton, {backgroundColor: COLORS.darkGrayColor}]} onPress={() => setMainColor(COLORS.darkGrayColor)}/>
            </View>
            <Text style={styles.textStyle}>Delete All Data:</Text>
            <TouchableOpacity style={[styles.themeButton, {backgroundColor: "black"}]} onPress={() => clearAllData()}/>
            <Text style={styles.textStyle}>Delete All Custom Characters Data:</Text>
            <TouchableOpacity style={[styles.themeButton, {backgroundColor: "black"}]} onPress={() => clearData(character)}/>
            <Text style={styles.textStyle}>Delete All Custom Spell Data:</Text>
            <TouchableOpacity style={[styles.themeButton, {backgroundColor: "black"}]} onPress={() => clearData(spell)} />
            <Text style={styles.textStyle}>Delete All Custom Magic-Item Data:</Text>
            <TouchableOpacity style={[styles.themeButton, {backgroundColor: "black"}]} onPress={() => clearData(magicItem)} />

        </View>
        {/* </ScrollView> */}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create(
{
    viewStyle: {
        
        backgroundColor: COLORS.background,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.xlarge,
        textAlign: 'center'
    },
    themeButton:{
        margin: "2%",
        // width: "30%",
        // height: "70%",
        width: 50,
        height: 50,
        borderWidth: "50%",
        borderColor: 'black',
        borderRadius: 5        
    }

}
)
