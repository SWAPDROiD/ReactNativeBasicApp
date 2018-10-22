import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import { AppRegistry } from 'react-native';
import AppContainer from './containers/AppContainer';
console.disableYellowBox = true; //Disables the warning in production
const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}
