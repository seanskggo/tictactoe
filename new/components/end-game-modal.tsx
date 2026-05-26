import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import type { Winner } from '@/lib/types';

type Props = {
  visible: boolean;
  winner: Winner;
  onClose: () => void;
  onReset: () => void;
};

export function EndGameModal({ visible, winner, onClose, onReset }: Props) {
  const router = useRouter();
  const message = winner === 'draw' ? 'Draw' : `${winner} won!`;

  const goHome = () => {
    onClose();
    router.navigate('/(tabs)');
  };

  const reset = () => {
    onClose();
    onReset();
  };

  const buttons =
    winner === 'draw'
      ? [
          { text: 'Home', onPress: goHome },
          { text: 'Reset', onPress: reset },
        ]
      : [{ text: 'Reset', onPress: reset }];

  return (
    <Modal animationType="fade" transparent visible={visible} onRequestClose={goHome}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>{message}</Text>
        <View style={styles.childContainer}>
          {buttons.map((b) => (
            <LinearGradient
              key={b.text}
              colors={['#b0b0b0', '#9c9898', '#808080']}
              style={styles.button}
              start={{ x: 0.0, y: 0.25 }}
              end={{ x: 0.5, y: 1.0 }}
            >
              <Pressable style={styles.button} onPress={b.onPress}>
                <Text style={styles.buttonText}>{b.text}</Text>
              </Pressable>
            </LinearGradient>
          ))}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  childContainer: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 45,
    width: 130,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 50,
    color: 'white',
    fontFamily: 'hyope',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'hyope',
    fontSize: 20,
  },
});
