
import {
  UPDATE_EXP,
  UPDATE_MAX_EXP, 
  LOAD_ENTIRE_CHARACTER
} from "../constants/actionTypes";

const initialState = {
  experience: "",
  maxExperience: "", 
}

const experienceReducer = (state = initialState, action) => {  
  switch (action.type) {  
    case UPDATE_EXP: 
      return {...state, experience: action.payload.target.value}
    case UPDATE_MAX_EXP: 
      return {...state, maxExperience: action.payload.target.value}
    case LOAD_ENTIRE_CHARACTER: 
      return {...action.payload.experience}
    default:
      return state;
  }
}

export default experienceReducer;