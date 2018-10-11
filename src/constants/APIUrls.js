// Google Credential : 
// Machanicaiapp@gmail.com
// Password : mechanicai
// live url:  http://35.167.239.172:5400
// socket url:  http://35.167.239.172:5220

import {
    Platform
} from 'react-native';
export const BASE_URL_OLD = 'http://52.34.207.5:5118/';
export const LOCAL_URL = "http://172.10.21.179:5100/";
export let BASE_URL = '';

if (Platform.OS === 'android') {
    BASE_URL = 'http://stagingsdei.com:5144/';
} else {
    // BASE_URL = 'http://172.10.28.29:5400/';
    //BASE_URL = 'https://stagingsdei.com:5118/';
    //BASE_URL = 'http://35.167.239.172:5400/';
    BASE_URL = 'https://mechanicsai.com/';
}

const API = {
    //***********************   Stagging URL  ****************************************** */
    USER_LOGIN: BASE_URL + "api/userLogin",
    USER_REGISTRATION: BASE_URL + "api/userRegister",


    //***********************   LOCAL URL  ****************************************** */
}
export default API
