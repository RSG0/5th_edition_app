import { View, StyleSheet, Text, ScrollView } from "react-native";

export default Seperator = () =>
{
    return (
        <View style={styles.seperator}>
                    {console.log("Able to get here")}
        </View>
    );
}
const styles = StyleSheet.create(
{
    seperator: {
        marginVertical: 5,
        alignSelf: 'center',
        height: 1,
        width: '95%',
        backgroundColor: 'black'
    }

}
)
