import {
  UPDATE_CONDITIONAL_MODIFIERS,
  UPDATE_LANGUAGES,
  LOAD_ENTIRE_CHARACTER
} from "../constants/actionTypes";

const initialState = {
  languages: "",
  conditionalModifiers: "", 
}

const languagesReducer = (state = initialState, action) => {  
  switch (action.type) {  
    case UPDATE_LANGUAGES: 
      return {...state, languages: action.payload.target.value}
    case UPDATE_CONDITIONAL_MODIFIERS: 
      return {...state, conditionalModifiers: action.payload.target.value}
    case LOAD_ENTIRE_CHARACTER: 
      return {...action.payload.languages}
    default:
      return state;
  }
}

export default languagesReducer;