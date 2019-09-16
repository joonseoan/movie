import axios from 'axios';

// main url for movie server
export default axios.create({
    baseURL: `http://www.omdbapi.com`
});