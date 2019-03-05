import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"; 
import skillReducer from "./skillReducer";
import weaponReducer from "./weaponReducer";
import armorReducer from "./armorReducer";
import speedReducer from "./speedReducer";
import healthReducer from "./healthReducer";
import characterReducer from "./characterReducer";
import statReducer from "./statReducer";
import savesReducer from "./savesReducer";

const reducers = {
  character: characterReducer,
  skills: skillReducer,
  weapon: weaponReducer,
  speed: speedReducer,
  armor: armorReducer,
  speed: speedReducer,
  health: healthReducer, 
  saves: savesReducer,
  stat: statReducer, 
  form: formReducer
};
 
const reducer = combineReducers(reducers);

export default reducer;
