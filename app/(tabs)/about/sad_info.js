import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
// Divide the screen into thirds for three sections.
const containerHeight = height / 3;

export default function StopBeingSadPage() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      
      {/* Section 1: Practice Gratitude */}
      <View style={[styles.section, { height: containerHeight }]}>
        <Text style={styles.header}>Practice Gratitude</Text>
        <Text style={styles.paragraph}>
          Focus on the positive aspects of your life. Taking time each day to recognize 
          the things you’re grateful for can shift your mindset away from sadness.
        </Text>
        <Text style={styles.paragraph}>
          Whether it’s jotting down a gratitude list or sharing moments with a friend, 
          celebrating the small wins helps build emotional resilience.
        </Text>
        {/* <Image
          source={require('../mood/assets')}
          style={styles.image}
        /> */}
      </View>

      {/* Section 2: Connect with Others */}
      <View style={[styles.section, { height: containerHeight }]}>
        <Text style={styles.header}>Connect with Others</Text>
        <Text style={styles.paragraph}>
          Reaching out to friends, family, or support groups can help ease feelings of isolation.
          Sometimes, sharing your thoughts and feelings can lighten the emotional load.
        </Text>
        <Text style={styles.paragraph}>
          A simple conversation or spending time with people who care about you can foster a sense 
          of belonging and remind you that you’re not alone.
        </Text>
        {/* <Image
          source={require('../mood/assets')}
          style={styles.image}
        /> */}
      </View>

      {/* Section 3: Engage in Self-Care */}
      <View style={[styles.section, { height: containerHeight }]}>
        <Text style={styles.header}>Engage in Self-Care</Text>
        <Text style={styles.paragraph}>
          Incorporate activities that nurture your well-being. Whether it’s a relaxing walk, 
          a favorite hobby, or simply taking a moment to rest, self-care can reduce sadness.
        </Text>
        <Text style={styles.paragraph}>
          Consistently dedicating time to your own needs helps break the cycle of negative thoughts 
          and empowers you to regain a positive outlook.
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
