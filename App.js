import React from 'react';
import { StyleSheet, Text, View, AppState, Platform } from 'react-native';
import { TopBar } from './TopBar.js';
import { MainView } from './MainView.js';
import { Title } from './Title.js';
import { NavigationBar } from './NavigationBar.js';
import { Constants } from './Constants.js';
import { ConstantsX, Location, Permissions } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }

  state = {
    location: null,
    errorMessage: null,
  };

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    if (Platform.OS === 'android' && !ConstantsX.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let {status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if (appState === 'background') {
      //TODO: Add notification code
      alert('app is in background');
    }
  }

  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

    return (
      <View style={styles.container}>
        <TopBar />
        <Title />
        <Text style={styles.paragraphLocation}>{text}</Text>
        <MainView locationX={this.state.location}/>
        <NavigationBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.BACK_COLOR,
    alignItems: 'center',
    paddingTop: 15,
    //paddingLeft: 15,
    //paddingRight: 15
  },
  containerLocation: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraphLocation: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center'
  },
});
