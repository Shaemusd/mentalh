import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
// We divide the screen into thirds for three sections.
const containerHeight = height / 3;

export default function CalmDownPage() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>



      <View style={[styles.section, { height: containerHeight }]}>
        <Text style={styles.header}>Insight and Self-Reflection</Text>
        <Text style={styles.paragraph}>
          Therapy offers a safe and confidential environment for individuals to explore their thoughts, emotions, and experiences. By engaging with a trained mental health professional, you gain insight into your personal patterns and behaviors, helping you develop strategies to manage stress, anxiety, or depression.
        </Text>
        <Text style={styles.paragraph}>
        Therapy also encourages self-reflection, allowing you to understand the root causes of challenges and fostering long-term emotional resilience.
        </Text>
        {/* <Image
          source={require('../mood/assets')}
          style={styles.image}
        /> */}
      </View>



      <View style={[styles.section, { height: containerHeight }]}>
        <Text style={styles.header}>Developing Healthy Coping Mechanisms</Text>
        <Text style={styles.paragraph}>
        One of the major benefits of therapy is the development of healthier coping mechanisms. Whether you’re dealing with relationship issues, life transitions, or persistent negative thought patterns, a therapist can provide tailored tools to help you navigate difficulties more effectively.
        </Text>
        <Text style={styles.paragraph}>
        Over time, these techniques become part of your daily life, reducing the intensity and frequency of overwhelming emotions.
        </Text>
        {/* <Image
          source={require('../mood/assets')}
          style={styles.image}
        /> */}
      </View>



      <View style={[styles.section, { height: containerHeight }]}>
        <Text style={styles.header}>Enhancing Interpersonal Relationships</Text>
        <Text style={styles.paragraph}>
        Moreover, therapy can greatly enhance your interpersonal relationships. As you learn to communicate more clearly and set healthier boundaries, you’ll likely find improvements in how you relate to family, friends, and colleagues.
        </Text>
        <Text style={styles.paragraph}>
        By working through underlying issues and improving self-awareness, therapy not only supports mental well-being but can also lead to a more balanced and fulfilling life overall.
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
