import React, { Component } from 'react';

import {
  Image,
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';


import STYLES from './LoginScreenStyle'
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from '../../constants/common';

class LoginComponent extends Component {

  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '', 
      error: '', 
      loading: false 
    };
  }

  componentDidMount() {
   
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    setTimeout(() => {
      //Actions.LoginScreen({type:'reset'});
      this.setState({ error: 'Email or password is wrong!', loading: false });
    }, 1000);
  }

  forgotPress(){
    Actions.ForgotPassword({type:'reset'});
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    return (

      <View style={{flex:1}}>
        <View style={STYLES.container}>

          <View style={STYLES.textContainer}>
            <Text style={STYLES.titleTextStyle}>Hello!</Text>
            <Text >We are welcome you here.</Text>
          </View>

          <View style={{marginTop:50, padding:10}}>
            <Card >
            <CardSection >
              <Input
                placeholder="user@gmail.com"
                label="Email"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
            </CardSection>

            <CardSection>
              <Input
                secureTextEntry
                placeholder="password"
                label="Password"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </CardSection>

            <Text style={STYLES.errorTextStyle}>
              {this.state.error}
            </Text>

            <CardSection>
                {this.renderButton()}
            </CardSection>
            </Card>

            <TouchableOpacity 
              style={STYLES.forgotViewStyle}
              onPress={this.forgotPress}>
                <Text style={STYLES.forgotTextStyle}>
                  Forgot password?
                </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={STYLES.bottomContainer}>
          <TouchableOpacity style={STYLES.dontHaveContainer}>
            <Text style={STYLES.dontHaveAccountTextStyle}>Don't have account </Text>
            <Text style={STYLES.signUpTextStyle}>Sign Up </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

}

export default LoginComponent;



