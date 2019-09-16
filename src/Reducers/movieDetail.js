import { FETCH_MOVIE_DETAILS } from '../Actions/types';

const INITIAL_STATE = {};

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        
        case FETCH_MOVIE_DETAILS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}