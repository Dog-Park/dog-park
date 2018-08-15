import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TopBar } from './TopBar.js';
import { Constants } from './Constants';
import Swiper from 'react-native-swiper';

export class MainView extends React.Component {
  render() {
    return (
      <View style={styles.talkBubbleSquare} >
        <Swiper
          loop={false}
          showsPagination={false}
          index={1} >
          <View style={styles.content}>
            <Text style={styles.text}>"Home"</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>"Navigation"</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>"Settings"</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  talkBubbleSquare: {
    //alignSelf: 'stretch',
    flex: 1,
    //backgroundColor: Constants.MAIN_COLOR,
    //borderRadius: Constants.BORDER_EDGES,
    //marginTop: 15,
    //marginBottom: 15
  },
  content: {
    margin: 20,
    backgroundColor: Constants.MAIN_COLOR,
    borderRadius: Constants.BORDER_EDGES,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
});