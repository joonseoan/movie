import { FETCH_MOVIES, MOVIE_TITLE_CHANGE, NO_MOVIE_AVAILABLE, FETCH_MOVIE_DETAILS } from './types';
import streams from '../apis/streams';

// action creator for user's movie search data change
export const enterMovieInfo = ({ name, value, type, checked }) => {
    return {
        // dispatching action with user's input data
        type: MOVIE_TITLE_CHANGE,
        payload: { name, value, type, checked }
    }
}

// action creator for fetching movie list and deliver it to a reducer
export const fetchMovies = search => async dispatch => {

    // user's final input before submit
    const { title, movie, series, episode, year } = search;
    const url = `/?apikey=${ process.env.REACT_APP_MOVIE_KEY }&s=${ title }`;
    
    // asycn - await for axios's promise 
    const response = await streams.get(url);
    let movieList = response.data.Search;

    // when the sever responses with no movie items
    if(!movieList) {    
        dispatch({ type: NO_MOVIE_AVAILABLE });
        return;
    }

    // finding user's optional choices about movie type
    let movieTypes = [];
    movie && movieTypes.push('movie');
    series && movieTypes.push('series');
    episode && movieTypes.push('episode');
        
    // filtering data in terms of user's optional choices
    if(movieTypes.length > 0) {
        movieList = movieList.filter(contents => 
            movieTypes.indexOf(contents.Type) !== -1);
    }

    // filtering data for user's year choice
    if(year) {
        movieList = movieList.filter(contents => contents.Year === year)
    }
    
    // After filtering, when no movies are available
    if(!movieList || movieList.length === 0) {    
        dispatch({ type: NO_MOVIE_AVAILABLE });
        return;
    }

    // dispatching actions when movies are available
    dispatch({ type: FETCH_MOVIES, payload: movieList });
}

// action creator for fetching movie's detail
export const fetchMovieDetail = id => async dispatch => {
    const url = `/?apikey=${ process.env.REACT_APP_MOVIE_KEY }&i=${ id }`;
    const response = await streams.get(url);

    dispatch({ type: FETCH_MOVIE_DETAILS, payload: response.data });
}


