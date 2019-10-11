import { FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILURE, ADDING_SUCCESS } from "../actions/index"

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type){

        case FETCHING_START:
            return {
                ...state,
                isFetching: true
            }

        case FETCHING_SUCCESS:
            return {
                ...state,
                smurfs: action.payload.data,
                isFetching: false,
                error: ""
            }

        case FETCHING_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload.error
            }

        case ADDING_SUCCESS:
            return {
                ...state,
                smurfs: action.payload.data
            }
        default:
            return state
    }
}