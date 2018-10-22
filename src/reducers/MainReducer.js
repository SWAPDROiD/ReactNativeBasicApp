import { combineReducers } from "redux";
import signInReducer from '../components/login/LoginReducer';



export default combineReducers({
    signInReducer: signInReducer,
})