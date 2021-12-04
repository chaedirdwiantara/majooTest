import { combineReducers } from "redux";
// import globalReducer from "./globalReducer";
import homeReducer from "./homeReducer";

const reducer = combineReducers({ homeReducer });

export default reducer;
