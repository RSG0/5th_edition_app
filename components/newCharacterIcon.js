import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import { COLORS, FONTSIZE } from "../constants/theme"

export default NewCharacterIcon = ({name, classes, race, image, level, removeCharacter}) =>
{
    const moreButton = 
    <TouchableOpacity style={styles.moreButton} onPress={removeCharacter}>
        <Text style={styles.moreButtonIcon}>...</Text>
    </TouchableOpacity>
    return(
        <View style={styles.item}>

            <TouchableOpacity style={{width: 335, display:'flex', flexDirection: 'row', alignItems: 'center'}}>
            {moreButton}
                <View style={styles.square}>
                    {image ? (
                            <Image
                                source={{ uri: image}}
                                style={{ width: imageSize, height: imageSize, borderRadius: 10 }}
                            />
                        ) : (
                            <Text style={styles.imagePlaceholder}>No Image</Text>
                        )}                
                </View>

                    <View style={[styles.viewStyle ,{flexDirection:'column', maxWidth: "80%"}]}>

                        <Text style={styles.textStyle}>{name} {"\n"}{race} | {classes} {level}  </Text>

                    </View>
                <View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const imageSize = 72
const moreButtonSize = 30

const styles = StyleSheet.create({
    item:{
        width: 340,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 124,
        borderRadius: 10,
        marginBottom: 10
    },
    viewStyle: {
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginRight: 10,
        position: 'relative',
        flex: 1
    },
    square:{
        width: imageSize,
        height: imageSize,
        backgroundColor: COLORS.mainColor,
        marginVertical: 20,
        marginLeft: 22,
        marginRight: 10,
        borderRadius: 10
    },
    textStyle:{
        marginTop: 10,
        width: 200,
        // backgroundColor: 'red',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: FONTSIZE.medium
    },
    moreButton: {
        borderRadius: 5,
        backgroundColor: 'gray',
        width: moreButtonSize,
        height: moreButtonSize,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0
        // alignSelf: 'center',
        // direction: 'rtl',

    },
    moreButtonIcon: {
        fontSize: FONTSIZE.xlarge,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})