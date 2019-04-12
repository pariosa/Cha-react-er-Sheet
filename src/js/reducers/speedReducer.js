import {
  UPDATE_BASE_SPEED,
  UPDATE_BASE_SPEED_ARMORED,
  UPDATE_BASE_SPEED_SQ,
  UPDATE_BASE_SPEED_ARMORED_SQ,
  UPDATE_FLY_SPEED,
  UPDATE_FLY_MANEUVERABILITY,
  UPDATE_SWIM_SPEED,
  UPDATE_CLIMB_SPEED,
  UPDATE_BURROW_SPEED,
  UPDATE_SPEED_TEMP_MOD,
  LOAD_ENTIRE_CHARACTER,
  NEW_CHARACTER
} from "../constants/actionTypes";

const initialState = {
  baseSpeed:"",
  baseSpeedArmored:"",
  baseSpeedSq:"",
  baseSpeedArmoredSq:"",
  flySpeed:"",
  flyManeuverability:"",
  swimSpeed:"",
  climbSpeed:"",
  burrowSpeed:"",
  tempMod:"None"
}
const speedReducer = (state = initialState, action) => { 
  switch (action.type) { 
    case UPDATE_BASE_SPEED:
      return {...state, baseSpeed: action.payload.target.value};
    case UPDATE_BASE_SPEED_ARMORED:
      return {...state, baseSpeedArmored: action.payload.target.value};
    case UPDATE_BASE_SPEED_SQ:
      return {...state, baseSpeedSq: action.payload.target.value};
    case UPDATE_BASE_SPEED_ARMORED_SQ:
      return {...state, baseSpeedArmoredSq: action.payload.target.value};
    case UPDATE_FLY_SPEED:
      return {...state, flySpeed: action.payload.target.value};
    case UPDATE_FLY_MANEUVERABILITY:
      return {...state, flyManeuverability: action.payload.target.value};
    case UPDATE_SWIM_SPEED:
      return {...state, swimSpeed: action.payload.target.value};
    case UPDATE_CLIMB_SPEED:
      return {...state, climbSpeed: action.payload.target.value};
    case UPDATE_BURROW_SPEED: 
      return {...state, burrowSpeed: action.payload.target.value};
    case UPDATE_SPEED_TEMP_MOD:  
      return {...state, tempMod: action.payload.target.value};
    case  LOAD_ENTIRE_CHARACTER:
      return {... action.payload.speed}
    case  NEW_CHARACTER:
      return initialState;
  	default: 
  	 return state;
  }
}

export default speedReducer;