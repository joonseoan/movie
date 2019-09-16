import { MOVIE_TITLE_CHANGE } from '../Actions/types';

// Default user data setup
const INITIAL_STATE = {
    title:'', 
    movie: false,
    series: false,
    episode: false,
    year: ''
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {

        case MOVIE_TITLE_CHANGE:
            
        const { name, value, type, checked } = action.payload;

        // because checkbox and text input elements have differnt value attributes
        if(type !== 'checkbox') {
            return { ...state, [name]: value };
        } else {
            return { ...state, [name]: checked };
        }

        default:
            return state;
    }
}