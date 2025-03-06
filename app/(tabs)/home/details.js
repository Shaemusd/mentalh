import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function ImagePage() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../mood/assets/bru.jpeg')} 
        style={styles.image} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE0CC', // soft, warm background
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.8, 
    height: height * 0.5,
    resizeMode: 'contain',
  },
});
