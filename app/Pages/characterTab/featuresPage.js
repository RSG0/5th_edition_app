import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity, Platform, Alert, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome6';

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

    const iconSize = 30
    const imageSquareSize = 150


    useEffect(() =>
    {
        (async() => {
            if (Platform.OS === 'ios')
                {
                    console.log(image)
                    const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync()
                    if (status !== "granted")
                    {
                        Alert.alert("Permission Required", "Sorry, we need camera permissions to make this work!");
                    }
                }
        
        })

    }, [])

    const handleImagePickerPress_Camera = async() =>
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
    const handleImagePickerPress_Gallery = async() =>
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
            <View style={{marginTop: 10}}/>
            <View style={styles.imageContainer}>
                    <View style={styles.imageSquare}>
                                {image ? (
                                    <Image source={{ uri: image }} style={{ width: imageSquareSize, height: imageSquareSize, borderRadius: 20 }} />
                                ) : (
                                    <Text style={styles.imageText}>Import image here ...</Text>
                                )}
                    </View>
                <View style={{margin: 15}} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity style={styles.iconSquare} onPress={handleImagePickerPress_Camera} >
                                <Icon name="image" size={iconSize} solid={true} color={"white"}/>
                            </TouchableOpacity>
                            <View style={{}}/>
                            <TouchableOpacity style={styles.iconSquare} onPress={handleImagePickerPress_Gallery}>
                                <Icon name="camera" size={iconSize} solid={false} color={"white"}/>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.resetButton} onPress={() => setImage(null)}>
                            <Text style={styles.resetButtonText}>RESET</Text>
                        </TouchableOpacity>
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
const iconSquareSize = 50

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
        justifyContent: 'center',
        alignItems: 'center',
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
        color: 'white',
        alignItems: 'center',
        textAlign: 'center',
    },
    buttonContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        alignSelf: 'center'
    },
    resetButton:{
        width: 100,
        height: 40,
        borderRadius: 30,

        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9D9D9D', //gray
        marginLeft: 20
    },
    resetButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
}
)
