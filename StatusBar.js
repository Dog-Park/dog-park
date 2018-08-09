import React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';

export default class StatusBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
      </View> //
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight ,
    backgroundColor: '#D0D3C5',
  },
});
