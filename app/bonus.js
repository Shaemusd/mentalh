import { Text, View, StyleSheet } from 'react-native';

export default function BonusScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Hi Arlin, this is place holder b.c im so burnt on this, I over did it with ball and converting things took much longer than I wanted, enjoy rest of app.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
