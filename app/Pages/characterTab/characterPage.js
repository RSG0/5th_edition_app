import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTSIZE } from "../../../constants/theme";

import NewCharacterIcon_Rough from "../../../components/newCharacterIcon(Rough)";
import NewCharacterIcon from "../../../components/newCharacterIcon";
import NewCharacterButton from "../../../components/buttons/newCharacterButton";

export default CharacterPage = ({navigation, route}) =>
{
    const { name, classes, level, races, image } = route.params || {};

    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        <ScrollView>
        <View style={styles.viewStyle}>
            {/* <Text style={styles.textStyle}>This is the Character Screen</Text> */}
            <NewCharacterIcon_Rough/>
            <NewCharacterIcon_Rough/>
            <NewCharacterIcon_Rough/>
            {name && (<NewCharacterIcon
                image={image}
                name={name}
                classes={classes}
                level={level}
                race={races}/>)}



        </View>
        </ScrollView>
        <NewCharacterButton navigation={navigation} nextScreen={"Create Character"}/>
        </SafeAreaView>
    );
}
const addSize = 60;
const styles = StyleSheet.create(
{
    viewStyle: {
        
        backgroundColor: COLORS.background,
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.xxlarge,
        // textAlign: 'center'
    },
    addButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.mainColor,
        width: addSize,
        height: addSize,
        borderRadius: 40,
        borderWidth: 5,
        position: 'absolute',
        bottom: 10

    }

}
)
