import {
    put,
    call,
    takeEvery,
    takeLatest,
    select,
    cps,
  } from "redux-saga/effects";
  import API from "../constants/APIUrls";
  import API_CONST from "../constants/APIConstants";
  import ACTION_TYPES from "../actions/ActionsType";
  import io from 'socket.io-client';
  
  const _apiCall = (url, data) => {
    console.log("post data>>>" + url + " " + JSON.stringify(data));
    console.log("post url >>>" + url + " " + JSON.stringify(url));
    return fetch(url, data)
      .then(res => {
        return { res: res, res_json: res.json() };
      })
      .catch(e => {
        throw e;
      });
  }
  
  //get response json
  const _extJSON = p => {
    // return (dispatch) =>{  return p.then(res => res);}
    return p.then(res => res);
  };

  //LoginScreen
function* userLogin(action) {
    // https://stagingsdei.com:5118/api/userLogin
    var postData = action.data;
    var newPostData = { "price": { "minValue": 0, "maxValue": 10000 }, "category": [], "condition": [], "size": [], "color": [], "searchText": "" };
    //API.USER_LOGIN
    try {
      let response = yield call(_apiCall, API.USER_LOGIN, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });
      var responseJSON = yield call(_extJSON, response.res_json);
      yield put({
        type: ACTION_TYPES.LOGIN_USER_RES,
        payload: responseJSON
      });
    } catch (e) {
      console.log('Error: ' + e);
    }
  }

  function* rootSaga() {

    //Login
    yield takeLatest(API_CONST.N_USER_LOGIN, userLogin);
  
  }
  
  export default rootSaga;