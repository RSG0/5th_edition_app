import { Dimensions, StyleSheet, PixelRatio } from "react-native";

const COLORS =
{
    background: "#FFF4BB",
    grayBackground: '#D9D9D9',
    dropdown: "#d1c899",
    mainColor: "#CE3F3F",
};
const FONT = {
    regular: "DMRegular",
    medium: "DMMedium",
    bold: "DMBold",
};
const { width, height } = Dimensions.get('window');
const scaleWidth = width / 375;
const scaleHeight = height / 812;

export const scale = (size) => size * Math.min(scaleWidth, scaleHeight);
export const verticalScale = (size) => size * scaleHeight;
export const moderateScale = (size, factor = 0.5) => 
    { 
        size + (scale(size) - size) * factor;
        console.log("width", width, "height", height, "scale:", scale(20));

    }

const FONTSIZE = {
    xxxsmall: scale(5), // Used for Reach Part of Actions Page
    xxsmall: scale(8), // Used for 5 [FT.] part of Actions Page, and Type of Action (Ranged, Melee, )
    xsmall: scale(12), // Used for Title for Actions, Weapons
    small: scale(14), // Used for Hit Dice and Hit Points
    medium: scale(16), // Used for ACTIONS - Attacks per Action: 1, And character infromation on character page
    large: scale(20), //Used for Character Names in Ability Score Page
    xlarge: scale(25),
    xxlarge: scale(32), //Used for Ability SCore Text in Ability Score Page
};
const DROPDOWNSTYLE = StyleSheet.create({
    dropdownTextStyle:
    {
        fontSize: FONTSIZE.medium
    }
})
export const characterBorderWidth = 5
export {COLORS, FONT, FONTSIZE, DROPDOWNSTYLE};