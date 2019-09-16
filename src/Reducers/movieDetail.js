import { FETCH_MOVIE_DETAILS } from '../Actions/types';

const INITIAL_STATE = {};

// Movie Detail Data
// The data must be available. 
// Error setup is not required
export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        
        case FETCH_MOVIE_DETAILS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}