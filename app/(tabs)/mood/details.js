import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function InfoPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>The Steps</Text>

      <Text style={styles.paragraph}>
        The Mood Tracker lets you log your emotions each day. By selecting a date,
        choosing how you feel (via one of the seven faces/emotions), and typing a note
        about your day, you can easily keep track of your mental and emotional well-being.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Steps to use it:</Text>{' '}
      </Text>


      <Text style={styles.paragraph}>

        1) Pick a date (usually the current date, but you can choose a past date if that’s more accurate).{'\n'}
        2) Select a face/emotion. Tapping the face will highlight it in purple to confirm your choice.{'\n'}
        3) Type in a quick note or description about how you feel.{'\n'}
        4) Press <Text style={styles.highlight}>"Log Your Mood!"</Text> to submit your entry.
      </Text>

      <Text style={styles.paragraph}>
        The tracker also displays a history for the last 7 days, showing each note you’ve logged.
         This makes it easy to spot patterns or trends in your emotions with the graph, and
        your emotional notes over the last 7 days with notes and more .
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Easy AND Simple to use!</Text>{' '}

      </Text>
      <Text style={styles.title}>Right?</Text>

      <Image
        source={require('../mood/assets/neutral.png')}
        style={styles.image}
      />

      <Link href="/mood" style={styles.link}>
        Back to Mood Tracker
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFE0CC', // Soft background color (adjust to match your theme)
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FF7043', // A warm color for the title
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
    lineHeight: 22,
  },
  bold: {
    fontWeight: 'bold',
  },
  highlight: {
    color: '#FF7043',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 20,
    resizeMode: 'contain',
  },
  link: {
    fontSize: 16,
    color: '#FF7043',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 10,
  },
});

