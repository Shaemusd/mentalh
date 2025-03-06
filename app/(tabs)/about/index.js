import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Link } from 'expo-router';

const { height } = Dimensions.get('window');
// Each container takes roughly one-third of the screen’s height.
// (Note: Four containers total will overflow a single screen so we use a ScrollView.)
const containerHeight = height / 3;

export default function HomePage() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Anger Section */}
      <View style={[styles.section, { height: containerHeight }]}>
        <Text style={styles.header}>Anger</Text>
        <Text style={styles.paragraph}>Manage your anger and find healthy ways to express it.</Text>
        <Text style={styles.paragraph}>Discover techniques to cool down and reflect.</Text>
        <Image 
          source={require('../mood/assets/angry.png')} 
          style={styles.image} 
        />
        <Link href="/anger" style={styles.link}>
          Go to Anger
        </Link>
      </View>
      
      {/* Sad Section */}
      <View style={[styles.section, { height: containerHeight }]}>
        <Text style={styles.header}>Sad</Text>
        <Text style={styles.paragraph}>Learn to embrace your feelings and find support.</Text>
        <Text style={styles.paragraph}>Get tips to help lift your mood.</Text>
        <Image 
          source={require('../mood/assets/sad.png')} 
          style={styles.image} 
        />
        <Link href="/sad" style={styles.link}>
          Go to Sad
        </Link>
      </View>
      
      {/* Therapy Section */}
      <View style={[styles.section, { height: containerHeight }]}>
        <Text style={styles.header}>Therapy</Text>
        <Text style={styles.paragraph}>Find resources and guidance for professional help.</Text>
        <Text style={styles.paragraph}>Access techniques for self-care and growth.</Text>
        <Image 
          source={require('../mood/assets/happy.png')} 
          style={styles.image} 
        />
        <Link href="/therapy" style={styles.link}>
          Go to Therapy
        </Link>
      </View>
      
      {/* Prevent Section */}
      <View style={[styles.section, { height: containerHeight }]}>
        <Text style={styles.header}>Prevent</Text>
        <Text style={styles.paragraph}>Explore strategies to prevent negative patterns.</Text>
        <Text style={styles.paragraph}>Plan ahead and keep your mood uplifted.</Text>
        <Image 
          source={require('../mood/assets/very_sad.png')} 
          style={styles.image} 
        />
        <Link href="/prevent" style={styles.link}>
          Go to Prevent
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
  section: {
    backgroundColor: '#f2f2f2',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    // Optionally add shadow or elevation for a card-like effect
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  link: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
});
