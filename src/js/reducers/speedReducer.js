import {
  UPDATE_BASE_SPEED,
  UPDATE_BASE_SPEED_ARMORED,
  UPDATE_FLY_SPEED,
  UPDATE_FLY_MANEUVERABILITY,
  UPDATE_SWIM_SPEED,
  UPDATE_CLIMB_SPEED,
  UPDATE_BURROW_SPEED,
} from "../constants/actionTypes";
const initialState = {
  baseSpeed:"25ft",
  baseSpeedArmored:"",
  flySpeed:"",
  flyManeuverability:"",
  swimSpeed:"",
  climbSpeed:"10ft",
  burrowSpeed:""
}
const speedReducer = (state = initialState, action) => { 
  switch (action.type) {  
  	default:
  	return state;
  }
}

export default speedReducer;