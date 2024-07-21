import React from 'react';
import { ScrollView, Text, View, StyleSheet } from "react-native";
import SelectingSkillsScreen from "./Pages/SelectingSkillScreen";
import CreateCharacter from "./Pages/CreateCharacterPage";
import AbilityScoreScreen from "./Pages/AbilityScoreScreen";
import CharacterPage from "./Pages/characterPage"
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import DiceRoller from "./Pages/diceRollerPage"
import SettingPage from "./Pages/SettingPage";
import CompendiumPage from "./Pages/compendiumPage";
import Icon from 'react-native-vector-icons/FontAwesome6';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: COLORS.mainColor },
        headerStyle: { backgroundColor: COLORS.mainColor },
        headerTintColor: 'white',
        headerShown: true,
        tabBarActiveTintColor: 'white',
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Character Page') {
            iconName = 'user';
          } else if (route.name === 'Compendium Page') {
            iconName = 'book';
          } else if (route.name === 'Dice Roller Page') {
            iconName = 'dice-d20';
          } else if (route.name === 'Setting Page') {
            iconName = 'gear';
          }

          return <Icon name={iconName} size={size} color={color} solid={true}/>;
        },
      })}
    >
      <Tab.Screen name="Character Page" component={StackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Dice Roller Page" component={DiceRoller} />
      <Tab.Screen name="Compendium Page" component={CompendiumPage} />
      <Tab.Screen name="Setting Page" component={SettingPage} />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Create Character"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.mainColor,
          paddingBottom: 20,
        },
        statusBarColor: "red",
        headerTintColor: 'white',
        headerBackVisible: false,
      }}
    >
      <Stack.Screen name="Create Character" component={CreateCharacter} />
      <Stack.Screen name="Ability Score" component={AbilityScoreScreen} />
      <Stack.Screen name="Select Skills" component={SelectingSkillsScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  dropdown: {
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
});
