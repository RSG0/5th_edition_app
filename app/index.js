import { ScrollView, Text, View } from "react-native";
import CreateCharacter from "./CreateCharacterPage";
import AbilityScoreScreen from "./abilityScoreScreen";
import SelectingSkillsScreen from "./SelectingSkillsScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
import { Header } from "react-native/Libraries/NewAppScreen";
import { createNativeStackNavigator, createBottomTabNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

const App = () =>
{
    return(
    
    <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Create Character" screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.mainColor,
                    paddingBottom: 20, 
                    height: 200
                },
                statusBarColor: "red",
                headerTintColor: 'white',
                headerBackVisible: false
            }}>
                <Stack.Screen name="Create Character" component={CreateCharacter} options={{ }}/>
                <Stack.Screen name="Ability Score" component={AbilityScoreScreen}/>
                <Stack.Screen name="Select Skills" component={SelectingSkillsScreen}/>
            </Stack.Navigator>

        </NavigationContainer>

    )
}
export default App;
