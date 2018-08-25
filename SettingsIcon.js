import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Constants } from './Constants.js';

export class SettingsIcon extends React.Component {
  render() {
    if(this.props.highlight) {
      return (
        <View>
          <Image source={require('./Images/settings_icon_dark.png')} style={styles.settingsIcon} />
        </View>
        );
    } else {
      return (
        <View>
          <Image source={require('./Images/settings_icon_light.png')} style={styles.settingsIcon} />
        </View>
        );
    }
  }
}

const styles = StyleSheet.create({
  settingsIcon: {
    resizeMode: 'contain',
    height: Constants.ICON_SIZE,
    width: Constants.ICON_SIZE
  }
});
