import {SEARCH_MOVIE} from "../actions/types.js";


export const searchMovie = text => dispatch => {
    dispatch ({
        type : SEARCH_MOVIE , 
        payload : text 
    });
}