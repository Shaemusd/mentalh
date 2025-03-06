import { Text, View, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MoodLift</Text>
      <Text style={styles.subtitle}>
        Your personal companion for daily mood improvement
      </Text>
      {/* Optional: Display an image if you have one */}
      <Image source={require('../mood/assets/angry.png')} style={styles.image} />
      <Link href="/home/details" style={styles.button}>
        Go to Details screen
      </Link>
      <Link href="/bonus" style={styles.button}>
        Open Modal
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 30,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    marginBottom: 15,
  },
});
