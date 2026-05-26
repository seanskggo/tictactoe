import { Image, StyleSheet, View } from 'react-native';
import { InstructionBackground } from '@/components/backgrounds';
import { rules } from '@/constants/images';

export default function InstructionsScreen() {
  return (
    <View style={styles.container}>
      <InstructionBackground style={StyleSheet.absoluteFill} />
      <Image source={rules} style={styles.image} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
