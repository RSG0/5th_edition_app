import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity, Platform, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONT, FONTSIZE } from "../../../constants/theme";
import { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker'

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
        (async() => {
            if (Platform.OS === 'ios')
                {
                    console.log("Working...")
                    const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync()
                    if (status !== "granted")
                    {
                        Alert.alert("Permission Required", "Sorry, we need camera permissions to make this work!");
                    }
                }
        
        })

    }, [])

    const handleImagePickerPress = async() =>
    {
        let result = await ImagePicker.launchImageLibraryAsync({
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
            <View style={styles.imageContainer}>
                <TouchableOpacity style={styles.imageSquare} onPress={handleImagePickerPress}>
                    <Text style={styles.imageText} >press image here ...</Text>
                </TouchableOpacity>
                <View style={{margin: 20}} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity style={styles.iconSquare}></TouchableOpacity>
                            <TouchableOpacity style={styles.iconSquare}></TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.resetButton}></TouchableOpacity>
                    </View>
            </View>
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

const imageSquareSize = 150
const iconSquareSize = 40

const styles = StyleSheet.create(
{

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
    imageContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row'
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
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row'
    },
    textInput: {
        // width: "100%",
        fontStyle: 'italic',
        flex: 1,
        padding: 10,
        // backgroundColor: 'red',
        fontSize: FONTSIZE.medium,
        // flexWrap: 'wrapf'
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: FONTSIZE.xlarge,
        textDecorationLine: 'underline',
        textAlign: 'center'
    },
    iconSquare: {
        width: iconSquareSize,
        height: iconSquareSize,
        backgroundColor: '#9D9D9D', //gray
        margin: 10,
        borderRadius: 10,
    },
    imageSquare: {
        width: imageSquareSize,
        height: imageSquareSize,
        backgroundColor: '#9D9D9D', //gray
        borderRadius: 20,
        marginBottom: 20,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1
    },
    imageText: {
        width: 80,
        fontStyle: 'italic',
        color: 'grey',
        alignItems: 'center',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'column',
        alignContent: 'center',
        alignSelf: 'center'
    },
    resetButton:{
        width: 90,
        height: 40,
        borderRadius: 30,
        backgroundColor: '#9D9D9D', //gray
        marginLeft: 15
    }
}
)
