import loggedReducer from "./isLogged";
import aboutReducer from "./about";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  abouts: aboutReducer,
  login: loggedReducer,
});

export default allReducers;
