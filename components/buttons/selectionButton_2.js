import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";

const { width, height } = Dimensions.get("screen");

export default SelectionButton = ({ name, isSelected, onSelectionPress, disableFixedWidth, setCustomMinWidth, setHorizontalMargin }) => {
    const handlePress = () => {
        onSelectionPress(); // Call onSelectionPress when the button is pressed
    };

    return (
        <TouchableOpacity
            style={[
                styles.button,
                { minWidth: setCustomMinWidth || width * 0.5 },
                { marginHorizontal: setHorizontalMargin || width * 0.02 },
                isSelected && styles.buttonPressed, // Apply the buttonPressed style if selected
                disableFixedWidth,
            ]}
            onPress={handlePress}
        >
            <Text style={styles.textStyle}>{name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.mainColor,
        borderWidth: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: height * 0.01,
    },
    buttonPressed: {
        backgroundColor: "gray", // Style for when the button is pressed
    },
    textStyle: {
        fontWeight: "bold",
        color: "white",
        fontSize: FONTSIZE.xlarge,
        textAlign: "center",
    },
    disableFixedWidth: {
        width: "auto",
        paddingHorizontal: 15,
        marginHorizontal: width * 0.0,
        marginVertical: height * 0.01,
    },
});
