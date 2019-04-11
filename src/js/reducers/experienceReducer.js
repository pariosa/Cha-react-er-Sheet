
import {
  UPDATE_EXP,
  UPDATE_EXP_MAX, 
  LOAD_ENTIRE_CHARACTER,
  NEW_CHARACTER
} from "../constants/actionTypes";

const initialState = {
  experience: "",
  maxExperience: "", 
}

const experienceReducer = (state = initialState, action) => {  
  switch (action.type) {  
    case UPDATE_EXP: 
      return {...state, experience: action.payload.target.value}
    case UPDATE_EXP_MAX: 
      return {...state, maxExperience: action.payload.target.value}
    case LOAD_ENTIRE_CHARACTER: 
      return {...action.payload.experience}
    case NEW_CHARACTER:
      return initialState;
    default:
      return state;
  }
}

export default experienceReducer;