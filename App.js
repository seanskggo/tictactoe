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
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

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

// Rendering windows
export default App = () => {
  let [fontsLoaded] = useFonts({
    'hyope': require('./assets/fonts/hyope.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTransparent: true, headerTintColor: 'blue' }}>
          <Stack.Screen name="Home" component={Home} options={{ title: '' }} />
          <Stack.Screen name="Game" component={Game} options={{ title: '' }} />
          <Stack.Screen name="Game_ai" component={Game_ai} options={{ title: '' }} />
          <Stack.Screen name="Instructions" component={Instructions} options={{ title: '' }} />
        </Stack.Navigator>
      </NavigationContainer >
    )

  }
}
