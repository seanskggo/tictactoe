import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { InstructionBackground } from '@/components/backgrounds';
import { rules } from '@/constants/images';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function InstructionsScreen() {
  return (
    <View style={styles.container}>
      <InstructionBackground />
      <Image source={rules} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height,
    width,
    resizeMode: 'contain',
    position: 'absolute',
  },
});
