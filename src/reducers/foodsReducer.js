import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS, SET_CURRENT_FOOD } from "../actions";

const initialState = {
    currentFood: undefined,
    foods: [],
    isFetching: false,
    error: ''
};

export const foodsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START: 
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                foods: [],
                isFetching: false,
                error: action.payload
            }    
        case FETCH_SUCCESS:
            return {
                ...state,
                foods: action.payload,
                isFetching: false,
                error: ''
            }
        case SET_CURRENT_FOOD:
            return {
              ...state,
              currentFood: action.payload
            }
        default:
            return state;
    }   
}