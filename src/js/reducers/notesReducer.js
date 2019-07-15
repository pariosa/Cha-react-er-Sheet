import { 
    UPDATE_NOTES,
    LOAD_ENTIRE_CHARACTER,
    NEW_CHARACTER
  } from "../constants/actionTypes";
  
  const initialState = {
    notes: "", 
  }
  
  const notesReducer = (state = initialState, action) => {  
    switch (action.type) {  
      case UPDATE_NOTES: 
        return {...state, notes: action.payload.target.value}
      case LOAD_ENTIRE_CHARACTER: 
        return {...action.payload.notes}
      default:
        return state;
    }
  }
  
  export default notesReducer;