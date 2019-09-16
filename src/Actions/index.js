import { FETCH_MOVIES, MOVIE_TITLE_CHANGE, NO_MOVIE_AVAILABLE, FETCH_MOVIE_DETAILS } from './types';
import streams from '../apis/streams';

export const enterMovieInfo = ({ name, value, type, checked }) => {
    return {
        type: MOVIE_TITLE_CHANGE,
        payload: { name, value, type, checked }
    }
}

export const fetchMovies = search => async dispatch => {
    const { title, movie, series, episode, year } = search;
    const url = `/?apikey=${ process.env.REACT_APP_MOVIE_KEY }&s=${ title }`;
    const response = await streams.get(url);
    let movieList = response.data.Search;

    if(!movieList) {    
        dispatch({ type: NO_MOVIE_AVAILABLE });
        return;
    }

    let movieTypes = [];
    movie && movieTypes.push('movie');
    series && movieTypes.push('series');
    episode && movieTypes.push('episode');
        
    if(movieTypes.length > 0) {
        movieList = movieList.filter(contents => 
            movieTypes.indexOf(contents.Type) !== -1);
    }

    if(year) {
        movieList = movieList.filter(contents => contents.Year === year)
    }
    
    if(!movieList || movieList.length === 0) {    
        dispatch({ type: NO_MOVIE_AVAILABLE });
        return;
    }

    dispatch({ type: FETCH_MOVIES, payload: movieList });
}

export const fetchMovieDetail = id => async dispatch => {
    const url = `/?apikey=${ process.env.REACT_APP_MOVIE_KEY }&i=${ id }`;
    const response = await streams.get(url);

    dispatch({ type: FETCH_MOVIE_DETAILS, payload: response.data });
}


