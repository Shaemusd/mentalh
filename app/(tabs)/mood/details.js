import { Text, View, StyleSheet } from 'react-native';

export default function DetailsScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7043',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
