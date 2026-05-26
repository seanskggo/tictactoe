import { useRouter } from 'expo-router';
import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { HomeBackground } from '@/components/backgrounds';
import { main } from '@/constants/images';

export default function HomeScreen() {
  const router = useRouter();

  const buttons = [
    { text: 'Player vs AI', onPress: () => router.navigate('/(tabs)/game-ai') },
    { text: 'Player vs Player', onPress: () => router.navigate('/(tabs)/game') },
    { text: 'How To Play', onPress: () => router.navigate('/(tabs)/instructions') },
    { text: 'Privacy Policy', onPress: () => Linking.openURL('https://privacy.seanskggo.com') },
  ];

  return (
    <View style={styles.mainContainer}>
      <HomeBackground />
      <View style={styles.subContainer}>
        <View style={styles.logo}>
          <Image source={main} style={styles.image} />
        </View>
        <View style={styles.buttons}>
          {buttons.map((b) => (
            <Pressable key={b.text} style={styles.buttonStyle} onPress={b.onPress}>
              <Text style={styles.text}>{b.text}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
    width: 200,
    aspectRatio: 1,
    marginBottom: 35,
  },
  buttons: {
    alignItems: 'center',
  },
  buttonStyle: {
    borderRadius: 8,
    width: 165,
    height: 40,
    backgroundColor: 'rgba(66, 153, 240, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'hyope',
  },
});
