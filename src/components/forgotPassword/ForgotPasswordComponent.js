import React, { Component } from 'react';

import {
  Image,
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';


import STYLES from './ForgotPasswordStyle'
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from '../../constants/common';

class ForgotPasswordComponent extends Component {

  constructor() {
    super();
    this.state = { 
      email: '', 
      error: '', 
      loading: false 
    };
  }

  componentDidMount() {
   
  }

  onButtonPress() {
    const { email } = this.state;

    this.setState({ error: '', loading: true });

    setTimeout(() => {
      Actions.LoginScreen({type:'reset'});
      //this.setState({ error: 'Email is wrong!', loading: false });
    }, 1000);
  }

  backPress(){
    Actions.LoginScreen({type:'reset'});
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Submit
      </Button>
    );
  }

  render() {
    return (

      <View style={{flex:1}}>
        <View style={STYLES.container}>

          <View style={STYLES.textContainer}>
            <Text style={STYLES.titleTextStyle}>Hello!</Text>
            <Text >After submit you will receive mail of reset password.</Text>
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

            <Text style={STYLES.errorTextStyle}>
              {this.state.error}
            </Text>

            <CardSection>
                {this.renderButton()}
            </CardSection>
            </Card>
            
          </View>
        </View>

        <View style={STYLES.bottomContainer}>
          <TouchableOpacity style={STYLES.backContainer}
            onPress={this.backPress}>
            <Text style={STYLES.backTextStyle}>Back </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

}

export default ForgotPasswordComponent;



