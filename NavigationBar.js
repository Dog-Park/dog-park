import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Alert } from 'react-native';
import { Home } from './Home.js';
import { Navigate } from './Navigate.js';
import { Settings } from './Settings.js';
import { Constants } from './Constants.js';

export class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    selHome: true,
    selNav: false,
    selSet: false
    }
    this._onHome = this._onHome.bind(this);
    this._onNavigate = this._onNavigate.bind(this);
    this._onSettings = this._onSettings.bind(this);
  }

  _onHome() {
    this.setState({
        selHome: true,
        selNav: false,
        selSet: false
    });
  }

  _onNavigate() {
    this.setState({
      selHome: false,
      selNav: true,
      selSet: false
    });
  }

  _onSettings() {
    this.setState({
      selHome: false,
      selNav: false,
      selSet: true
    });
  }

  render() {
    return (
      <View style={styles.navBubble}>
        <TouchableWithoutFeedback onPress={this._onHome}>
          <View style={styles.navButton}>
            <Home highlight={this.state.selHome}/>
          </View>
        </TouchableWithoutFeedback> //
        <TouchableWithoutFeedback onPress={this._onNavigate}>
          <View style={styles.navButton}> 
            <Navigate highlight={this.state.selNav}/>
          </View>
        </TouchableWithoutFeedback> //
        <TouchableWithoutFeedback onPress={this._onSettings}>
          <View style={styles.navButton}>
            <Settings highlight={this.state.selSet}/>
          </View>
        </TouchableWithoutFeedback> //
      </View> //
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
    //paddingBottom: 20
  },
  navButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});