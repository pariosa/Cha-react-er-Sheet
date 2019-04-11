import { 
  UPDATE_NAME,
  UPDATE_ALIGNMENT,
  UPDATE_PLAYER_NAME,
  UPDATE_CLASS,
  UPDATE_LEVEL,
  UPDATE_DIETY,
  UPDATE_HOMELAND,
  UPDATE_RACE,
  UPDATE_SIZE,
  UPDATE_GENDER,
  UPDATE_AGE,
  UPDATE_HEIGHT,
  UPDATE_WEIGHT,
  UPDATE_HAIR,
  UPDATE_EYES,
  UPDATE_BASE_ATTACK_BONUS,
  UPDATE_SPELL_RESISTANCE,
  UPDATE_CMB_SIZE_MODIFIER,
  UPDATE_CMB_MODIFIERS_FIELD,
  UPDATE_CMD_SIZE_MODIFIER,
  LOAD_ENTIRE_CHARACTER,
  NEW_CHARACTER
} from "../constants/actionTypes";

export const initialState = { 
    baseAttackBonus:0,
    spellResistance:"none", 
    name: "",
    alignment: "",
    playerName: "",
    level: 1,
    diety: "",
    homeland: "",
    race: "",
    playerClass: "",
    size: "",
    gender: "",
    age: "", 
    height: "",
    weight: "",
    hair: "",
    eyes: "",
    cmbSizeModifier:'0',
    cmbModifiersField:'0',
    cmdSizeModifier:'0',
};

const characterReducer = (state = initialState, action) => {  
  switch (action.type) {  
    case UPDATE_NAME:
      return {...state, name: action.payload.target.value};
    case UPDATE_ALIGNMENT:
      return {...state, alignment: action.payload.target.value};
    case UPDATE_PLAYER_NAME:
      return {...state, playerName: action.payload.target.value};
    case UPDATE_CLASS:
      return {...state, playerClass: action.payload.target.value};
    case UPDATE_LEVEL:
      return {...state, level: action.payload.target.value};
    case UPDATE_DIETY:
      return {...state, diety: action.payload.target.value};
    case UPDATE_AGE:
      return {...state, age: action.payload.target.value};
    case UPDATE_HOMELAND:
      return {...state, homeland: action.payload.target.value};
    case UPDATE_RACE:
      return {...state, race: action.payload.target.value};
    case UPDATE_SIZE:
      return {...state, size: action.payload.target.value};
    case UPDATE_GENDER:
      return { ...state, gender: action.payload.target.value};
    case UPDATE_HEIGHT:
      return { ...state, height: action.payload.target.value};
    case UPDATE_WEIGHT:
      return {...state, weight: action.payload.target.value};
    case UPDATE_HAIR:
      return {...state, hair: action.payload.target.value};
    case UPDATE_EYES:
      return {...state, eyes: action.payload.target.value}; 
    case UPDATE_CMB_SIZE_MODIFIER:
      return {...state, cmbSizeModifier: action.payload.target.value}; 
    case UPDATE_CMB_MODIFIERS_FIELD:
      return {...state, cmbModifiersField: action.payload.target.value}; 
    case UPDATE_CMD_SIZE_MODIFIER:
      return {...state, cmdSizeModifier: action.payload.target.value}; 
    case UPDATE_BASE_ATTACK_BONUS:
      return {...state, baseAttackBonus: action.payload.target.value};
    case UPDATE_SPELL_RESISTANCE:
      return {...state, spellResistance: action.payload.target.value};  
    case  LOAD_ENTIRE_CHARACTER:
      return {... action.payload.character}
    case NEW_CHARACTER:
      return initialState;
    default:
      return state;
  }
};

export default characterReducer;