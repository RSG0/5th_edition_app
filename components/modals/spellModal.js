import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { characterBorderWidth, COLORS, FONT, FONTSIZE, scale } from "../../constants/theme";
import { Title } from "react-native-paper";
import { capitalized, globalStyles } from "../../constants/global";
import { useEffect } from "react";
export default spellModal = ({name, school, isARitual, spellLevel, usableBy, castingTime, range, concentration,duration, description, materials }) =>
{
    useEffect(() =>
    {
        // console.log("Ritual:", isARitual)
    }, [isARitual])
    const handleNameSize = (name) =>
    {
        if (name.length <= 15)
        {
            return FONTSIZE.medium
        }
        else {return FONTSIZE.small}

    }

    const handleDuration = (duration, concen) =>
        {
            const handleConcentration = () =>
            {
                if (concen === "True" || concen === true)
                {
                    // console.log("Concentration is true")
                    return "Concentration, Up to " + duration
                }
                // console.log("Concentration:", concen)

                return capitalized(duration)
            }
            // console.log(concen);
            // console.log(duration);
            // console.log(handleConcentration());
            return handleConcentration()
        }

    const handleSpellLevel = (lvlSpell, school, ritual) =>
    {
        console.log("Ritual:", ritual)
        let rit = ""
        if (lvlSpell === "Cantrip")
        {
            lvlSpell = "Cantrip"
        }
        else if (lvlSpell === "1st")
        {
            lvlSpell = "1st Level"
        }
        else if (lvlSpell === "2nd")
        {
            lvlSpell = "2nd Level"
        }
        if (ritual === true || ritual === "True")
        {
            // console.log("ritual has been achieved:")
            rit = "(ritual)"
        }
        return lvlSpell + " "+ school + " " + rit
    }
    const handleMaterials = (mat) =>
    {
        console.log("Material:",mat);
        if (mat === "True")
        {
            return(<Text style={{fontStyle: 'italic'}}>Materials: {mat}{"\n\n"}</Text> )
        }
        else
        {
            // return(<Text>DRAGon</Text>)
        }
    }
    const handleUsability = (isUse) =>
    {
        let use = [];
        // console.log("reached")
        for (let i = 0; i < isUse.length; i++)
        {
            use.push(isUse[i])
        }
        return use.join(", "); 
    }
    return (
        <View style={styles.viewStyle}>
            <View style={{flexDirection: 'row'}}>
                <View style={{backgroundColor:'', width: width * .3}}>
                    <Text style={[styles.title]}>{name}:</Text>
                    <Text style={{fontStyle:'italic', fontSize: scale(10), backgroundColor: ''}}>{handleSpellLevel(spellLevel, school, isARitual)}</Text>
                    <Text style={{fontSize: FONTSIZE.xsmall, fontWeight: 'bold', marginTop: height* .02, backgroundColor: ''}}>Usable By: <Text style={{fontWeight:'regular'}}>{handleUsability(usableBy)} </Text></Text>
                </View>
                <View style={{width: width * 0.5,  justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', alignContent: 'center', alignItems: 'center', backgroundColor: '' }}>
                    <View>
                        <Text style={[styles.upperPortion, { fontWeight: 'bold', textAlign: 'center'}]}>CT: {castingTime} <Text style={{ fontSize: FONTSIZE.xsmall, marginLeft: width * 0.001, fontWeight: 'bold', marginBottom: height * .05  }}>Range: { capitalized(range)} </Text>  </Text>
                        {/* <Text style={styles.upperPortion}>{handleCharges(charges, numOfCharges)}</Text> */}
                        
                        <Text style={{ fontSize: FONTSIZE.xsmall, backgroundColor: '', fontWeight: 'bold', textAlign: 'center', marginTop: height * .01}}>Duration: {handleDuration(duration, concentration)} </Text>
                    </View>
                </View>
            </View>

            <ScrollView style={{backgroundColor: '', width: width * .8, height: height * .2, borderRadius: 20, alignSelf: 'center', flex: 1, borderWidth: characterBorderWidth, marginVertical: height * .01}} >
                <Text style={{padding: 10, fontSize: FONTSIZE.xsmall}}>
                {handleMaterials(materials)} 
                {description}
                
  
                </Text>
            </ScrollView>
            <Text >  </Text>

            {/* {    console.log("The description is: \n\n" + description) } */}
        </View>

    );
}
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create(
{
    viewStyle: {
        // flex: .4,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        width: width * .9,
        minHeight: height * .5,
        // alignItems: 'center',
        backgroundColor: 'white',
        // flexDirection: 'row',
        display: 'flex',
        padding: 20,
        paddingHorizontal: 20,
        borderRadius: width * .05,
        borderWidth: width * .01
    },
    title: {
        // justifyContent: 'space-between',
        // width: width * .35,
        // margin: 20,
        fontWeight: 'bold',
        fontSize: FONTSIZE.medium,
        // textAlign: 'center',
        backgroundColor: ''
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
