import { UPDATE_QUERY } from '../actions';

const initialState = {
  query: ''
};

export function queryReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_QUERY: 
            return {
                ...state,
                query: action.payload
            };
        default:
            return state;
    }
}
