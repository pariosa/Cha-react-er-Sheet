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
import uiReducer from "./uiReducer";
import authReducer from './authReducer';
import { firestoreReducer } from 'redux-firestore'; 
import { firebaseReducer } from 'react-redux-firebase';
import loadCharacterReducer from './loadCharacterReducer';

const reducers = {
  loadCharacter: loadCharacterReducer,
  character: characterReducer, 
  skills: skillReducer,
  weapons: weaponReducer,
  speed: speedReducer,
  auth: authReducer,
  armor: armorReducer,
  speed: speedReducer,
  health: healthReducer, 
  saves: savesReducer,
  stat: statReducer, 
  form: formReducer,
  ui: uiReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
};
 
const reducer = combineReducers(reducers);

export default reducer;
