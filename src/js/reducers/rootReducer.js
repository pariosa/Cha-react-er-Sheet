import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore"; 
import { firebaseReducer } from "react-redux-firebase";
import { reducer as formReducer } from "redux-form"; 
import skillReducer from "./skillReducer";
import weaponReducer from "./weaponReducer";
import armorReducer from "./armorReducer";
import speedReducer from "./speedReducer";
import healthReducer from "./healthReducer";
import characterReducer from "./characterReducer";
import statReducer from "./statReducer";
import acItemsReducer from './acItemsReducer';
import savesReducer from "./savesReducer"; 
import currencyReducer from './currencyReducer';
import languagesReducer from "./languagesReducer";
import uiReducer from "./uiReducer";
import gearReducer from "./gearReducer";
import authReducer from './authReducer';
import loadCharacterReducer from "./loadCharacterReducer";
import experienceReducer from "./experienceReducer";
import featsReducer from "./featsReducer";
import abilitiesReducer from "./abilitiesReducer";
import spellsReducer from "./spellsReducer";
import spellslotsReducer from "./spellslotReducer"; 
import characterListReducer from "./characterListReducer";

const reducers = {
  characterList: characterListReducer,
  acItems:acItemsReducer,
  loadCharacter: loadCharacterReducer,
  character: characterReducer, 
  skills: skillReducer,
  weapons: weaponReducer,
  languages: languagesReducer, 
  speed: speedReducer,
  auth: authReducer,
  armor: armorReducer,
  gear: gearReducer, 
  health: healthReducer, 
  saves: savesReducer,
  stat: statReducer, 
  currency:currencyReducer,
  spells:spellsReducer,
  spellslots:spellslotsReducer,
  feats:featsReducer,
  abilities:abilitiesReducer,
  experience:experienceReducer,
  form: formReducer,
  ui: uiReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
};
 
const reducer = combineReducers(reducers);

export default reducer;
