import { Text, StyleSheet, View, Dimensions } from "react-native"
import { Dropdown } from "react-native-element-dropdown"
import { COLORS, FONTSIZE, DROPDOWNSTYLE } from "../constants/theme"


export default AbilityDropdown = ({name, data, isStandardArray, onAbilityPress, value}) =>
{
    const handleDropdownChange = (item) =>
        {
            if (isStandardArray) {
                const st = data.filter((s) => !data.includes(s));
                console.log(item);
                onAbilityPress(name, item.value); // Notify parent of the change
                console.log(item.value)
                return st;
            } else {
                onAbilityPress(name, item.value); // Notify parent of the change
                console.log(item.value)

                return item;
            }
        };
    return(

        <View style={{flexDirection:'row', alignContent: 'center', alignItems: 'center'}}>
        <Text style={styles.labelStyle}>{name}:</Text>
        <Dropdown style={styles.dropdownLevel}
        dropdownPosition="auto"
        data={data}
        selectedTextStyle={DROPDOWNSTYLE.dropdownTextStyle}
        labelField={"value"}
        valueField={"value"}
        onChange={handleDropdownChange}
        placeholderStyle={styles.placeholderColor}
        placeholder="--"
        maxHeight={200}
        />
        </View>
    )
}
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    labelStyle: {
        fontSize: FONTSIZE.large,
        fontWeight: 'bold',
        marginRight: width * .01,
    },
    dropdownLevel: {
        width: 70,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginHorizontal: width * .01,
    },
})