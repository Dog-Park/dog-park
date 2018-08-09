import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TopBar } from './TopBar.js';
import { MainView } from './MainView.js';
import { Title } from './Title.js';
import { NavigationBar } from './NavigationBar.js';
import { Constants } from './Constants.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopBar />
        <Title />
        <MainView />
        <NavigationBar />
      </View> //
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.BACK_COLOR,
    alignItems: 'center',
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15
  }
});
