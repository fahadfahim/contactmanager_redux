//root reducer is basically a meeting place for all of our
//reducer when we have different resources
import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

//in the combineReducer we are put all our
//reducer
export default combineReducers({
  contact: contactReducer,
});
