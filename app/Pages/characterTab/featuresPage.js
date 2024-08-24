import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONT, FONTSIZE } from "../../../constants/theme";
import { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker'
import { ImagePickerIOS } from "react-native";

export default FeaturesPage = () =>
{
    const [personalityTraits, setPersonalityTraits] = useState("")
    const [bonds, setBonds] = useState("")
    const [ideals, setIdeals] = useState("")
    const [flaw, setFlaw] = useState("")
    const [alliesAndOrgs, setAlliesAndOrgs] = useState("")
    const [addtitionalFeatures, setAdditionalFeatures] = useState("")
    const [backstory, setBackstory] = useState("")

    const [image, setImage] = useState('')

    useEffect(() =>
    {

        
    }, [])

    const handleImagePickerPress = async() =>
    {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1,1],
            quality: 1
        })
        if (!result.canceled)
        {
            setImage(result.assets[0].uri)
        }
    }
    const borderBubble = (borderName, borderInput, setBorderInput) =>
    {
        return(
            <View style={styles.textBorder}>
                <Text style={styles.textStyle}>{borderName}</Text>
                <TextInput
                    // onChange={txt => this.setState({ enteredText: txt })} fontStyle={this.state.enteredText.length == 0 ? 'italic' : 'normal'}
                    placeholder="enter text here...  (optional)"
                    // placeholderStyle={{backg}}
                    style={[styles.textInput, {fontStyle: borderInput.length === 0 ? 'italic': 'normal' }]} 
                    value={borderInput} 
                    onChangeText={setBorderInput}
                    multiline={true}
                    textAlignVertical="top"
                    scrollEnabled={false}
                    // onScroll={false}
                />
            </View>
        )
    }
    return (
        <SafeAreaView style={{backgroundColor: COLORS.background, flex: 1}}>
        <ScrollView>
        <View style={styles.background}>
            <TouchableOpacity style={styles.square} onPress={handleImagePickerPress}>
                <Text style={styles.imageText} >press image here ...</Text>
            </TouchableOpacity>
            {borderBubble("Personality Traits", personalityTraits, setPersonalityTraits)}
            {borderBubble("Bonds", bonds, setBonds)}
            {borderBubble("Ideals", ideals, setIdeals)}
            {borderBubble("Flaw", flaw, setFlaw)}
            {borderBubble("Allies and Organizations", alliesAndOrgs, setAlliesAndOrgs)}
            {borderBubble("Additional Features and Traits", addtitionalFeatures, setAdditionalFeatures)}
            {borderBubble("Character Backstory", backstory, setBackstory)}


            {/* <Text style={styles.textStyle}>{personalityTraits}</Text> */}
        </View>
        <View style={{paddingBottom: 220}} />

        </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create(
{
    const: squareSize = 150,

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
        minHeight: 120,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal:10,
        marginBottom: 10

    },
    textInput: {
        width: "100%",
        fontStyle: 'italic',
        flex: 1,
        padding: 10,
        // backgroundColor: 'red',
        fontSize: FONTSIZE.medium,
        flexWrap: 'wrapf'
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.xlarge,
        textDecorationLine: 'underline',
        textAlign: 'center'
    },
    square: {
        width: squareSize,
        height: squareSize,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 20,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    imageText: {
        width: 80,
        fontStyle: 'italic',
        color: 'grey',
        alignItems: 'center',
        textAlign: 'center',
    }
}
)
