import { ScrollView, Text, View } from "react-native";
import CreateCharacter from "./CreateCharacterPage";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
import { Stack } from "expo-router";
const App = () =>
{
    return(
    <ScrollView style={{backgroundColor: COLORS.background}}>
        <SafeAreaView>
            <CreateCharacter/>
        </SafeAreaView>
    </ScrollView>
    )
}
export default App;
