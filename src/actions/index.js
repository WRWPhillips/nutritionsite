import axios from "axios";

export const UPDATE_QUERY = 'UPDATE_QUERY';
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const SET_CURRENT_FOOD = 'SET_CURRENT_FOOD';


export function updateQuery(newQuery) {
    return {
        type: UPDATE_QUERY,
        payload: newQuery
    };
}

export const searchSubmit = (dispatch) => {
  return function thunk(query) {
      dispatch(fetchStart());
      axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=aObVYTuPvgoWi2bJmjYgOTjGsxbQqLKAIrl7uar5&query=${query}`
      ).then(resp => {
          dispatch(fetchSuccess(resp.data.foods));
      }).catch(err => {
          dispatch(fetchFailure(err));
      })
  }
}

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchSuccess = (foods) => {
    return({type: FETCH_SUCCESS, payload: foods});
}

export const fetchFailure = (error) => {
    return({type: FETCH_FAIL, payload: error});
}

export const setCurrentFood = (food) => {
  return { type: SET_CURRENT_FOOD, payload: food }
}
