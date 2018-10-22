// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

//import Loading from '../components/Loading';
import Routes from '../Routs';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Routes/>;
  }
}


