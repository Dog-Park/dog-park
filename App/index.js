import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { App as Content } from './components/App.js'

const store = createStore(rootReducer);

class App extends React.Component {
	render() {
		return(
			<Provider store={store}>
				<Content />
			</Provider>
		);
	}
}

export default App;

// {
//   "presets": ["babel-preset-expo"],
//   "env": {
//     "development": {
//       "plugins": ["transform-react-jsx-source"]
//     }
//   }
// }