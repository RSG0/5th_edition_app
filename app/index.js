import { ScrollView, Text, View } from "react-native";
import CreateCharacter from "./CreateCharacterPage";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
import { Stack } from "expo-router";
import { Header } from "react-native/Libraries/NewAppScreen";
const App = () =>
{
    return(
    <ScrollView style={{backgroundColor: COLORS.background}}>
        <SafeAreaView>
            <Header container/>
            <CreateCharacter/>
        </SafeAreaView>
    </ScrollView>
    )
}
export default App;
