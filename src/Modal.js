/////////////////////////////////////////////////////////////////////////////////
// Modal.js
// Creates a modal upon finished game state
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { StyleSheet, Pressable, Modal, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

/////////////////////////////////////////////////////////////////////////////////
// Constants
/////////////////////////////////////////////////////////////////////////////////

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

// Function that determines whether to show the modal or not
const Show_modal = (show, set_modal, reset_grid, { navigation }, winner) => {
  let message = winner + " won!"
  if (winner === 'draw') message = "Draw"
  // Create array with information regarding buttons to be mapped:
  const button_info = [
    { text: 'Home', effect: navigation.navigate.bind(this, 'Home') },
    { text: 'Reset', effect: reset_grid },
  ];
  if (show) {
    return (
      <Modal
        animationType="fade" transparent={true} visible={true}
        onRequestClose={() => {
          set_modal(false);
          navigation.navigate('Home');
        }}
      >
        <View style={styles.main_container}>
          <Text style={styles.title}>{message}</Text>
          <View style={styles.child_container}>
            {button_info.map((ele, index) => {
              return (
                <LinearGradient
                  colors={['#b0b0b0', '#9c9898', '#808080']} style={styles.button}
                  start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} key={index}
                >
                  <Pressable
                    style={styles.button}
                    onPress={() => {
                      set_modal(false);
                      { ele.effect() }
                    }}
                  >
                    <Text style={styles.button_text}>{ele.text}</Text>
                  </Pressable>
                </LinearGradient>
              )
            })}
          </View>
        </View>
      </Modal>
    )
  }
}

/////////////////////////////////////////////////////////////////////////////////
// Style
/////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  child_container: {
    flexDirection: 'row'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 45,
    width: 130,
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    fontSize: 50,
    color: 'white',
    fontFamily: 'hyope',
    marginBottom: 20
  },
  button_text: {
    color: 'white',
    fontFamily: 'hyope',
    fontSize: 20,
  }
});

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

// Export grid creator function
export default Show_modal;