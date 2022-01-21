/////////////////////////////////////////////////////////////////////////////////
// App.js
// Main file responsible for how application will be rendered
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import 'react-native-gesture-handler';
import React, { useState } from 'react';
import Game_screen from './src/Game';
import Game_screen_ai from './src/Game_ai';
import HomeScreen from './src/Home';
import InstructionsScreen from './src/Instructions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { rules, circle, cross } from './constants/Images';
import Onboarding from './src/Onboarding';

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

const _cacheResourcesAsync = async () => {
  const images = [rules, circle, cross]
  const cacheImages = images.map(image => {
    return Asset.fromModule(image).downloadAsync();
  });
  return Promise.all(cacheImages);
}

// Rendering windows
export default App = () => {
  const [isLoadingComplete, setLoading] = useState(false);
  let [fontsLoaded] = useFonts({
    'hyope': require('./assets/fonts/hyope.ttf'),
  });
  if (!fontsLoaded && !isLoadingComplete) {
    return (
      <AppLoading
        startAsync={_cacheResourcesAsync}
        onError={console.warn}
        onFinish={() => setLoading(true)}
      />
    )
  } else if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="Game_ai" component={Game_ai} />
          <Stack.Screen name="Instructions" component={Instructions} />
        </Stack.Navigator>
      </NavigationContainer >
    )
  } else return null;
}
