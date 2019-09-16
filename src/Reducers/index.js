import { combineReducers } from 'redux';
import searchMovies from './searchMovies';
import movieList from './movieList';
import movieDetail from './movieDetail';

export default combineReducers({
    searchMovies,
    movieList,
    movieDetail
});
