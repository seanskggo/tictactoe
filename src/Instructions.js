/////////////////////////////////////////////////////////////////////////////////
// Instructions.js
// Returns JSX to render Instructions Page
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { Instruction_background } from './Svg_renderer';
import { rules } from '../constants/Images';

/////////////////////////////////////////////////////////////////////////////////
// Globals
/////////////////////////////////////////////////////////////////////////////////

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

const InstructionsScreen = () => {
  return (
    <View>
      <Instruction_background />
      <Image
        source={rules}
        style={styles.image}
        resizeMethod={'resize'}
      />
    </View>
  );
}

/////////////////////////////////////////////////////////////////////////////////
// Style
/////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: height,
    width: width,
    resizeMode: 'contain',
    position: 'absolute',
  }
})

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

// Export instructions screen function
export default InstructionsScreen;