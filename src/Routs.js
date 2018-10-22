import React, { Component } from "react";
import { Actions, Router, Scene } from "react-native-router-flux";
import CommonStyles from "./commonStyle/CommonStyle";


import SpashScreen from './components/splashScreen/SplashScreenComponent';
import LoginScreen from './components/login/LoginComponent';
import ForgotPassword from './components/forgotPassword/ForgotPasswordComponent';


const scenes = Actions.create(
    <Scene key="root" headerTintColor="#fff">
      <Scene key="SpashScreen" 
        initial 
        component={SpashScreen} 
        hideNavBar={true}
      />
      <Scene
        key="LoginScreen"
        component={LoginScreen}
        hideNavBar={true}
      />
      <Scene
        key="ForgotPassword"
        component={ForgotPassword}
        hideNavBar={true}
      />
     
    
    </Scene>
  );
  
  export default class Routes extends Component {
    render() {
      return <Router scenes={scenes} />;
    }
  }