import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONT, FONTSIZE } from "../../../constants/theme";
import { useEffect, useState } from "react";

export default FeaturesPage = () =>
{
    const [personalityTraits, setPersonalityTraits] = useState("")
    const [bonds, setBonds] = useState("")
    const [ideals, setIdeals] = useState("")
    const [flaw, setFlaw] = useState("")

    useEffect(() =>
    {
        console.log(personalityTraits)
    }, [personalityTraits])

    const borderBubble = (borderName, borderInput, setBorderInput) =>
    {
        return(
            <View style={styles.textBorder}>
                <Text style={styles.textStyle}>{borderName}</Text>
                <TextInput 
                    placeholder="enter text here...  (optional)"
                    style={styles.textInput} 
                    value={borderInput} 
                    onChangeText={setBorderInput}
                    multiline={true}
                    textAlignVertical="top"
                    scrollEnabled={false}
                    // onScroll={false}
                >
                </TextInput>
            </View>
        )
    }
    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        <ScrollView>
        <View style={styles.background}>
            <View style={styles.square}/>
            {borderBubble("Personality Traits", personalityTraits, setPersonalityTraits)}
            {borderBubble("Bonds", bonds, setBonds)}
            {borderBubble("Ideals", ideals, setIdeals)}
            {borderBubble("Flaw", flaw, setFlaw)}

            {/* <Text style={styles.textStyle}>{personalityTraits}</Text> */}
        </View>
        </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create(
{
    const: squareSize = 130,

    background: {        
        backgroundColor: '#acacac',
        margin: 20,
        marginHorizontal: 15,
        padding: 10,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBorder: {
        width: "100%",
        minHeight: 100,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal:10,
        marginBottom: 10

    },
    textInput: {
        width: "100%",
        flex: 1,
        padding: 10,
        // backgroundColor: 'red',
        fontSize: FONTSIZE.xlarge,
        flexWrap: 'wrapf'
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.xlarge,
        textAlign: 'center'
    },
    square: {
        width: squareSize,
        height: squareSize,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 20
    },
}
)
