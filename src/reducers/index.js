import { combineReducers } from "redux";
// import countReducer from './countReducer';
import counterReducer from "../actions/counterSlice";

export default combineReducers ({
    count: counterReducer,
});