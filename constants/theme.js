import { Dimensions, StyleSheet } from "react-native";

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
const { width, height } = Dimensions.get("window");

// Scale function
export const scale = (size) => (width / 375) * size; // Use 375px as a base width for scaling

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