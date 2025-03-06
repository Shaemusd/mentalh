import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
// We divide the screen into thirds for three sections.
const containerHeight = height / 3;

export default function CalmDownPage() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>



      <View style={[styles.section, { height: containerHeight }]}>
        <Text style={styles.header}>Breathing Exercises</Text>
        <Text style={styles.paragraph}>
          Take a few slow, deep breaths. Inhale through your nose for four counts,
          hold for four counts, and exhale through your mouth for four counts.
        </Text>
        <Text style={styles.paragraph}>
          Focusing on your breath helps calm your mind and reduces tension in your body.
        </Text>
        {/* <Image
          source={require('../mood/assets')}
          style={styles.image}
        /> */}
      </View>



      <View style={[styles.section, { height: containerHeight }]}>
        <Text style={styles.header}>Count to Ten</Text>
        <Text style={styles.paragraph}>
          When you feel anger building, pause and slowly count to ten.
          This brief moment can help you cool off before reacting.
        </Text>
        <Text style={styles.paragraph}>
          Sometimes just taking a short mental break can prevent an outburst
          and give you time to think more clearly.
        </Text>
        {/* <Image
          source={require('../mood/assets')}
          style={styles.image}
        /> */}
      </View>



      <View style={[styles.section, { height: containerHeight }]}>
        <Text style={styles.header}>Take a Break</Text>
        <Text style={styles.paragraph}>
          If possible, remove yourself from the situation that's causing anger.
          Go for a short walk, get some fresh air, or find a quiet space.
        </Text>
        <Text style={styles.paragraph}>
          Stepping away, even briefly, can help reset your emotions and
          prevent escalation.
        </Text>
        {/* <Image
          source={require('../mood/assets')}
          style={styles.image}
        /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
    backgroundColor: '#FFF',
  },
  section: {
    backgroundColor: '#FFE0CC',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    // Optional: shadow for iOS, elevation for Android
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#FF7043',
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
    lineHeight: 22,
  },
  image: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
    marginTop: 8,
  },
});
