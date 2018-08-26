import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { StyleSheet, Text, View } from 'react-native';
import { TopBar } from './components/TopBar.js';
import { MainView } from './components/MainView.js';
import { Title } from './components/Title.js';
import { NavigationBar } from './components/NavigationBar.js';
import { Constants } from './components/Constants.js';

const store = createStore(rootReducer);

class App extends React.Component {
	render() {
		return(
	  	<Provider store={store}>
	    	<View style={styles.container}>
    			<TopBar />
    			<Title />
    			<MainView />
    			<NavigationBar />
  			</View>
	  	</Provider>
		);
	}
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.BACK_COLOR,
    alignItems: 'center',
    paddingTop: 15,
    //paddingLeft: 15,
    //paddingRight: 15
  }
});