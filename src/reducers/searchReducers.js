import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE } from "../actions/types.js";


const initialState = {
    text: '',
    loading: false,
    movies: [],
    movie: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false,
            }
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case FETCH_MOVIE:
            return{
                ...state,
                movie: action.payload
            }
        default:
            return state
    }
}