import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TopBar } from './TopBar.js';
import { Constants } from './Constants';

export class MainView extends React.Component {
  render() {
    return (
      <View style={styles.talkBubbleSquare} /> //
    );
  }
}

const styles = StyleSheet.create({
  talkBubbleSquare: {
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor: Constants.MAIN_COLOR,
    borderRadius: Constants.BORDER_EDGES,
    padding: 30,
    marginTop: 15,
    marginBottom: 15
  }
});