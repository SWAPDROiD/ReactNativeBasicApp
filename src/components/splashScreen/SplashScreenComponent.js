import React, { Component } from 'react';

import {
  Image,
  StyleSheet,
  View,
  StatusBar,
  Text
} from 'react-native';

import STYLES from './SplashScreenStyle';
import { Actions } from 'react-native-router-flux';

class SplashScreenComponent extends Component {

  constructor() {
    super();
    this.state = {
      accessToken: '',
    };
  }

  getTimerCountDown() {
    setTimeout(() => {
      Actions.LoginScreen({type:'reset'});
    }, 2500);
  }

  getTimeRem() {
    return this.state.timeRemaining;
  }

  componentDidMount() {
    this.getTimerCountDown();
  }


  render() {
    return (
      <View style={STYLES.container}>
       <Image
          style={STYLES.imageStyle}
          source={require("../../assets/icon.png")}
          resizeMode='contain'/>

        <Text style={STYLES.normalText}> React Native Basic App</Text>
      </View>
    );
  }

}


export default SplashScreenComponent;



