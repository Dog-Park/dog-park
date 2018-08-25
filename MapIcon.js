import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Constants } from './Constants.js';

export class MapIcon extends React.Component {
  render() {
    if(this.props.highlight) {
      return (
        <View style={styles.divs} >
          <Image source={require('./Images/map_icon_dark.png')} style={styles.mapIcon} />
        </View>
      );
    } else {
      return (
        <View style={styles.divs} >
          <Image source={require('./Images/map_icon_light.png')} style={styles.mapIcon} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  divs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    //borderLeftWidth: 3,
    //borderRightWidth: 3,
    //borderColor: Constants.DIV_COLOR
  },
  mapIcon: {
    resizeMode: 'contain',
    height: Constants.ICON_SIZE,
    width: Constants.ICON_SIZE
  }
});
