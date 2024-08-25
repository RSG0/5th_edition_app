import React from 'react';
import { ScrollView, Text, View, StyleSheet } from "react-native";
import SelectingSkillsScreen from "./Pages/characterTab/SelectingSkillScreen";
import CreateCharacter from "./Pages/characterTab/CreateCharacterPage";
import SubclassesPage from './Pages/characterTab/subclassesPage';
import HitPoint from './Pages/characterTab/hitPointScreen';
import FeaturesPage from './Pages/characterTab/featuresPage';

import AbilityScoreScreen from "./Pages/characterTab/AbilityScoreScreen";
import SpellPage from './Pages/characterTab/spellPage';
import CharacterPage from "./Pages/characterTab/characterPage"
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

import DiceRoller from "./Pages/diceRollerPage"
import SettingPage from "./Pages/SettingPage";
import CompendiumPage from "./Pages/compendiumPage";
import EquipmentPage from "./Pages/equipmentPage";

import Icon from 'react-native-vector-icons/FontAwesome6';
import characterPage from './Pages/characterTab/characterPage';
import selectEquipmentScreen from './Pages/characterTab/selectEquipmentScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator2()
{
    return(
     <Stack.Navigator initialRouteName="Compendium Page" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Compendium Page Stack" component={CompendiumPage}/>
        <Stack.Screen name="Equipment Page" component={EquipmentPage}/>
     </Stack.Navigator>  
    )
}
function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName='Character Page'
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
      <Tab.Screen name="Compendium Page" component={StackNavigator2} />
      <Tab.Screen name="Setting Page" component={SettingPage} />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Create Character" // Should be Create Character
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
      {/**Feature Page needs to be switched with CreateCharacter*/}
      {/* <Stack.Screen name="View a Character" component={characterPage}/> */}
      <Stack.Screen name="Create Character" component={FeaturesPage} /> 
      <Stack.Screen name="Ability Score" component={AbilityScoreScreen} />
      <Stack.Screen name="Select Skills" component={SelectingSkillsScreen} />
      <Stack.Screen name="Select Subclasses" component={SubclassesPage} />
      <Stack.Screen name="Spell Page" component={SpellPage} />
      <Stack.Screen name="Hit Point" component={HitPoint} />
      <Stack.Screen name="Select Equipment" component={selectEquipmentScreen} />

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
