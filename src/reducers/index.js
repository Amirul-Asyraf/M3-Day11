import { combineReducers } from "redux";
// import countReducer from './countReducer';
import counterReducer from "../actions/counterSlice";
import fetchMovieReducer from './fetchMovieReducer';
import fetchMovieDetails from './fetchMovieDetailsReducer';
// import orderReducer from "../actions/orderSlice";

export default combineReducers ({
    count: counterReducer,
    // order: orderReducer,
    movie: fetchMovieReducer,
    movieDetails: fetchMovieDetails,
});