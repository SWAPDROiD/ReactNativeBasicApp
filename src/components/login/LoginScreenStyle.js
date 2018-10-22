import {
  StyleSheet,
  Platform,
} from 'react-native';
import Colors from '../../constants/Colors';
export default StyleSheet.create({

  container: {
    flex:0.9,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE
  },

  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleTextStyle: {
    color: Colors.BLACK,
    fontSize: 40,
    fontWeight: '500',
  },

  errorTextStyle: {
    fontSize: 12,
    marginTop: 2,
    marginBottom: 5,
    alignSelf: 'center',
    color: 'red'
  },

  textStyle: {
    color: Colors.WHITE,
    fontSize: 14,
    fontWeight: '500',
  },

  _imageLoginStyle: {
    width: 22,
    height: 22,
    marginTop: 5,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

  _emailStyle: {
    width: 30,
    height: 22,
    marginTop: 5,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

  _imageRegStyle: {
    width: 22,
    height: 22,
    marginTop: 35,
    resizeMode: 'stretch',
    alignItems: 'center'
  },

  _mechRegisIcons: {
    marginTop: 30,
    flex: 0.1
  },

  _imageMechRegStyle: {
    width: 22,
    height: 22,
    marginTop: 35,
    resizeMode: 'stretch',
    alignItems: 'center',
    marginLeft: '0'
  },


  _facebookIconStyle: {
    width: 10,
    height: 20,
    resizeMode: 'stretch',
    alignItems: 'center'
  },

  _googleIconStyle: {
    width: 27,
    height: 20,
    resizeMode: 'stretch',
    alignItems: 'center'
  },
  passwordVisibiltyViewStyle: {
    position: 'absolute',
    right: 10,
    paddingLeft: 10,
    paddingBottom: 30,
    paddingTop: 10,
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 5,
    bottom: 20
  },

  forgotViewStyle: {
    marginTop: 15,
    marginRight: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },

  forgotTextStyle: {
    color: Colors.BLUE,
    fontSize: 14,
    fontWeight: '500',
  },

  scrollViewContainerStyle: {
    paddingBottom: 60
  },

  signedInCheckBoxViewStyle: {
    marginTop: 38,
    width: 150,
  },

  bottomContainer: {
    flex:0.1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE
  },

  dontHaveContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.WHITE
  },

  dontHaveAccountTextStyle: {
    color: Colors.SKY_BLUE,
    fontSize: 16,
    fontWeight: 'normal',
  },

  signUpTextStyle: {
    color: Colors.SKY_BLUE,
    fontSize: 16,
    fontWeight: 'bold',
  },

});