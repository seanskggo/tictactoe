/////////////////////////////////////////////////////////////////////////////////
// Home.js
// Returns JSX to render Home Screen
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Text, View, Button } from 'react-native';
import Particle_engine from './Particles';

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

const HomeScreen = (navigation) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Particle_engine />
      <Text>Welcome to Home Screen</Text>
      {/* <Button title="1 Player" onPress={() => navigation.navigate('Game_ai')} /> */}
      <Button title="Single Player" onPress={() => navigation.navigate('Game')} />
      <Button title="Instructions" onPress={() => navigation.navigate('Instructions')} />
    </View>
  );
}

/////////////////////////////////////////////////////////////////////////////////
// Style
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

// Export Home function
export default HomeScreen;