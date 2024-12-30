import React from "react";
import { StyleSheet, View } from "react-native";
export const globalStyles = StyleSheet.create({
    centerRow: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center', // Ensures alignment vertically as well
        alignSelf: 'center'
    },
    uncommonRarityBackgroundColor: {backgroundColor: "#4CFF48"},
    rareRarityBackgroundColor: {backgroundColor: "#4850FF"},
    veryRareRarityBackgroundColor: {backgroundColor: "#48F4FF"},
    legendaryRarityBackgroundColor: {backgroundColor: "#FBFF48"},
    artifactRarityBackgroundColor: {backgroundColor: "#A448FF"},

    uncommonRarityColor: {color: "#4CFF48"},
    rareRarityColor: {color: "#4850FF"},
    veryRareRarityColor: {color: "#48F4FF"},
    legendaryRarityColor: {color: "#FBFF48"},
    artifactRarityColor: {color: "#A448FF"},

})
export const capitalized = (word) =>
{
  return word.charAt(0).toUpperCase()
  + word.slice(1)
}
export const line = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '80%', height: 2, backgroundColor: 'black' }} />
        {console.log("Line is being printed")}
      </View>
    );
  };
  