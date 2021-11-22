import { combineReducers } from "redux";
// import countReducer from './countReducer';
import counterReducer from "../actions/counterSlice";
import fetchMovieReducer from './fetchMovieReducer';
import fetchMovieDetails from './fetchMovieDetailsReducer';

export default combineReducers ({
    count: counterReducer,
    movie: fetchMovieReducer,
    movieDetails: fetchMovieDetails,
});