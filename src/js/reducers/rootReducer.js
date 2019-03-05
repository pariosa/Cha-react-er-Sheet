import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import actionReducer from "./actionReducer";
import statReducer from "./statReducer";

const reducers = {
  stat: statReducer,
  action: actionReducer,
  form: formReducer
};

// character reducer is formReducer
const reducer = combineReducers(reducers);

export default reducer;
