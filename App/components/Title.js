import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const Title = () => (
  <View style={styles.container}>
    <Image source={require('../Images/dogpark_logo.png')} style={styles.image}/>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  image: {
    resizeMode: 'contain',
    height: 40,
    width: 149
  }
});