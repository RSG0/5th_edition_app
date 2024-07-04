import { ScrollView, Text, View } from "react-native";
import CreateCharacter from "./CreateCharacterPage";
import { SafeAreaView } from "react-native-safe-area-context";
const App = () =>
{
    return(
    <ScrollView>
        <SafeAreaView>
            <CreateCharacter/>
    
        </SafeAreaView>
    </ScrollView>
    )
}
export default App;
