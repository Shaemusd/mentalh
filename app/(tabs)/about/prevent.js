import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
// Divide the screen into thirds for three sections.
const containerHeight = height / 3;

export default function OverwhelmPage() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      
      {/* Section 1: Recognize and Accept Your Emotions */}
      <View style={[styles.section, { height: containerHeight }]}>
        <Text style={styles.header}>Recognize and Accept</Text>
        <Text style={styles.paragraph}>
          When emotions feel too intense, start by acknowledging them. Recognize that feeling overwhelmed is a natural response to stress.
        </Text>
        <Text style={styles.paragraph}>
          Accepting your emotions without judgment can help you gain clarity and reduce the internal struggle.
        </Text>
        {/*
        <Image
          source={require('../assets/recognize.png')}
          style={styles.image}
        /> */}
      </View>

      {/* Section 2: Slow Down and Breathe */}
      <View style={[styles.section, { height: containerHeight }]}>
        <Text style={styles.header}>Slow Down and Breathe</Text>
        <Text style={styles.paragraph}>
          Practice deep breathing exercises or mindfulness techniques to help calm your nervous system.
        </Text>
        <Text style={styles.paragraph}>
          Taking a moment to focus on your breath can reduce the intensity of your emotions and help you regain control.
        </Text>
        {/*
        <Image
          source={require('../assets/breathe.png')}
          style={styles.image}
        /> */}
      </View>

      {/* Section 3: Take a Step Back */}
      <View style={[styles.section, { height: containerHeight }]}>
        <Text style={styles.header}>Take a Step Back</Text>
        <Text style={styles.paragraph}>
          If emotions become too overwhelming, remove yourself from the triggering situation if possible.
        </Text>
        <Text style={styles.paragraph}>
          A short walk or a change in scenery can give you space to process your feelings and return with a calmer mindset.
        </Text>
        {/*
        <Image
          source={require('../assets/stepback.png')}
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
