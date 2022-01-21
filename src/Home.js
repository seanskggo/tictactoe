/////////////////////////////////////////////////////////////////////////////////
// Home.js
// Returns JSX to render Home Screen
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { Home_background } from './Svg_renderer';

/////////////////////////////////////////////////////////////////////////////////
// Globals
/////////////////////////////////////////////////////////////////////////////////

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

const HomeScreen = (navigation) => {
  return (
    <View style={styles.main_container}>
      <Home_background />
      <View style={styles.sub_container}>
        <View style={styles.logo}>
          <Image source={require('../assets/main.png')} style={styles.image} resizeMethod={'resize'} />
        </View>
        <View style={styles.buttons}>
          <Pressable style={styles.button_style} onPress={() => navigation.navigate('Game_ai')}>
            <Text style={styles.text}>Player vs AI</Text>
          </Pressable>
          <Pressable style={styles.button_style} onPress={() => navigation.navigate('Game')}>
            <Text style={styles.text}>Player vs Player</Text>
          </Pressable>
          <Pressable style={styles.button_style} onPress={() => navigation.navigate('Instructions')}>
            <Text style={styles.text}>How To Play</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

/////////////////////////////////////////////////////////////////////////////////
// Style
/////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  // Aligns children in the centre
  main_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sub_container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    alignItems: 'center',
    width: 200,
    aspectRatio: 1,
    marginBottom: 35
  },
  buttons: {
    alignItems: 'center',
  },
  button_style: {
    borderRadius: 30,
    width: 180,
    height: 50,
    backgroundColor: 'rgba(66, 153, 240, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
    fontSize: 20,
  }
})

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

// Export Home function
export default HomeScreen;