import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Alert } from 'react-native';
import { HomeIcon } from './HomeIcon.js';
import { MapIcon } from './MapIcon.js';
import { SettingsIcon } from './SettingsIcon.js';
import { Constants } from './Constants.js';

export class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this._onHome = this._onHome.bind(this);
    this._onMap = this._onMap.bind(this);
    this._onSettings = this._onSettings.bind(this);
  }

  _onHome() {
    this.props.change('GOTO_HOME');
  }

  _onMap() {
    this.props.change('GOTO_MAP');
  }

  _onSettings() {
    this.props.change('GOTO_SETTINGS');
  }

  render() {
    return (
      <View style={styles.navBubble}>
        <TouchableWithoutFeedback onPress={this._onHome}>
          <View style={styles.navButton}>
            <HomeIcon highlight={this.props.currentPage === 'GOTO_HOME'}/>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this._onMap}>
          <View style={styles.navButton}>
            <MapIcon highlight={this.props.currentPage === 'GOTO_MAP'}/>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this._onSettings}>
          <View style={styles.navButton}>
            <SettingsIcon highlight={this.props.currentPage === 'GOTO_SETTINGS'}/>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBubble: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 45, //100
    backgroundColor: Constants.MAIN_COLOR,
    borderTopLeftRadius: Constants.BORDER_EDGES,
    borderTopRightRadius: Constants.BORDER_EDGES,
    paddingTop: 7, //20
    marginLeft: 20,
    marginRight: 20
  },
  navButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
