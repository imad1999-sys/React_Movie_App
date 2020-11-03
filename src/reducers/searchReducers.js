import {SEARCH_MOVIE} from "../actions/types.js";


const initialState = {
    text : '',
    loading : false , 
    movies : [] , 
    movie : [] ,
}

export default function (state = initialState , action){
    switch(action.type){
        case SEARCH_MOVIE:
            return {
                ...state , 
                text : action.payload ,
                loading : false , 
            }
        default :
        return state
    }
}