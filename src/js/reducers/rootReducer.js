import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import abilitiesReducer from "./abilitiesReducer";
import acItemsReducer from './acItemsReducer';
import armorReducer from "./armorReducer";
import authReducer from './authReducer';
import characterListReducer from "./characterListReducer";
import characterReducer from "./characterReducer";
import currencyReducer from './currencyReducer';
import experienceReducer from "./experienceReducer";
import featsReducer from "./featsReducer";
import gearReducer from "./gearReducer";
import healthReducer from "./healthReducer";
import languagesReducer from "./languagesReducer";
import loadCharacterReducer from "./loadCharacterReducer";
import notesReducer from "./notesReducer";
import savesReducer from "./savesReducer";
import skillReducer from "./skillReducer";
import speedReducer from "./speedReducer";
import spellslotsReducer from "./spellslotReducer";
import spellsReducer from "./spellsReducer";
import statReducer from "./statReducer";
import uiReducer from "./uiReducer";
import weaponReducer from "./weaponReducer";

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
  ui: uiReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notes: notesReducer
};
 
const rootReducer = combineReducers(reducers);

export default rootReducer;
