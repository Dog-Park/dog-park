import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Constants } from './Constants.js';

export class HomeIcon extends React.Component {
  render() {
    if(this.props.highlight) {
      return (
        <View>
          <Image source={require('./Images/home_icon_dark.png')} style={styles.infoIcon} />
        </View>
        );
    } else {
      return (
        <View>
          <Image source={require('./Images/home_icon_light.png')} style={styles.infoIcon} />
        </View>
        );
    }
  }
}

const styles = StyleSheet.create({
  infoIcon: {
    resizeMode: 'contain',
    height: Constants.ICON_SIZE,
    width: Constants.ICON_SIZE
  }
});
