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
  
    bottomContainer: {
      flex:0.1,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.WHITE
    },
  
    backContainer: {
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: Colors.WHITE
    },
  
    backTextStyle: {
      color: Colors.SKY_BLUE,
      fontSize: 16,
      fontWeight: 'bold',
    },
  
  });