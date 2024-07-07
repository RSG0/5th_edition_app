import { ScrollView, Text, View } from "react-native";
import SelectingSkillsScreen from "./SelectingSkillsScreen";
import CreateCharacter from "./CreateCharacterPage";
import AbilityScoreScreen from "./abilityScoreScreen";
import CharacterPage from "./CharacterPage";

import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
import { Header } from "react-native/Libraries/NewAppScreen";
import { createNativeStackNavigator, createBottomTabNavigator, } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StyleSheet } from "react-native-web";
import DiceRoller from "./DiceRoller";
import SettingPage from "./SettingPage";
import { createContext } from "react";


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function TabNavigator() 
{
    return (
        <Tab.Navigator>
            <Tab.Screen name="Character Page" component={CharacterPage}/>
            <Tab.Screen name="Compendium Page" component={CompendiumPage}/>
            <Tab.Screen name="Dice Roller Page" component={DiceRoller}/>
            <Tab.Screen name="Dice Roller Page" component={SettingPage}/>            
        </Tab.Navigator>
    )
}
function StackNavigator()
{
    <Stack.Navigator>
                <Stack.Screen name="Create Character" component={CreateCharacter} options={{ }}/>
                <Stack.Screen name="Ability Score" component={AbilityScoreScreen}/>
                <Stack.Screen name="Select Skills" component={SelectingSkillsScreen}/>    
    </Stack.Navigator>
}
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
const styles = StyleSheet.create(
    {
        dropdown: 
        {
            width: 150,
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            marginRight: 10,
        },
        dropdownLevel: {
            width: 70,
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            marginRight: 10,
        },
            }
)
