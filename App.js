/////////////////////////////////////////////////////////////////////////////////
// App.js
// Main file responsible for how application will be rendered
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import 'react-native-gesture-handler';
import React from 'react';
import Game_screen from './src/Game';
import Game_screen_ai from './src/Game_ai';
import HomeScreen from './src/Home';
import InstructionsScreen from './src/Instructions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useLoadResources } from './hooks/useLoad';

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

// Homescreen Component
const Home = ({ navigation }) => {
  return HomeScreen(navigation);
}

// Instructions Screen Component
const Instructions = ({ navigation }) => {
  return InstructionsScreen(navigation);
}

// Gamescreen Component
const Game = ({ navigation }) => {
  return Game_screen(navigation);
}

// Gamescreen + AI Component
const Game_ai = ({ navigation }) => {
  return Game_screen_ai(navigation);
}

// Stack Navigator
const Stack = createStackNavigator();

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

export default App = () => {
  const isLoadingComplete = useLoadResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="Game_ai" component={Game_ai} />
          <Stack.Screen name="Instructions" component={Instructions} />
        </Stack.Navigator>
      </NavigationContainer >
    )
  }
}
