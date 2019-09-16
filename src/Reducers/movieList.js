import { FETCH_MOVIES, NO_MOVIE_AVAILABLE } from '../Actions/types';

const INITIAL_STATE = [];

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case NO_MOVIE_AVAILABLE:
            return { error : 'Oops! No Movie Available'};   
        case FETCH_MOVIES:
            return [ ...action.payload ];
        default:
            return state;
    }
}