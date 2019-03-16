import {
  UPDATE_MAX_HP,
  UPDATE_CURRENT_HP,
  UPDATE_NONLETHAL,
  UPDATE_DR,
  UPDATE_INITIATIVE_MOD,
  LOAD_ENTIRE_CHARACTER
} from "../constants/actionTypes";

const initialState = {
  current: 24,
  max: 35,
  DR: "4 - fire",
  nonLethal: "none",
  initiativeModifier:0
}

const healthReducer = (state = initialState, action) => { 
  switch (action.type) {  
	case UPDATE_MAX_HP:
      return {...state, max: action.payload.target.value};
    case UPDATE_CURRENT_HP:
      return {...state, current: action.payload.target.value};
    case UPDATE_NONLETHAL:
      return {...state, nonLethal: action.payload.target.value};
    case UPDATE_DR:
      return {...state, DR: action.payload.target.value};
    case UPDATE_INITIATIVE_MOD:
      return {...state, initiativeModifier: action.payload.target.value};
    case LOAD_ENTIRE_CHARACTER:
     return {...action.payload.health}
    default:
    	return state;
  	}
}

export default healthReducer;