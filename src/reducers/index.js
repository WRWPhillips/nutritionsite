import { combineReducers } from "redux";
import { queryReducer as query } from "./queryReducer";
import { foodsReducer as foods } from "./foodsReducer";

export default combineReducers({
    query,
    foods
});