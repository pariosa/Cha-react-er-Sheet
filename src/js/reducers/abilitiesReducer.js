import{
	ADD_ABILITY,
	REMOVE_ABILITY,
	UPDATE_ABILITY,
	LOAD_ENTIRE_CHARACTER
}from "../constants/actionTypes";

const initialState = [ 

];

const abilitiesReducer = (state = initialState, action) => { 
  switch (action.type) {  
	case ADD_ABILITY:
      return [...state, action.payload.target.value];
    case REMOVE_ABILITY:
      return {state};
    case UPDATE_ABILITY:
      return [...state, action.payload.target.value];
    case LOAD_ENTIRE_CHARACTER:
     return [...action.payload.abilities]
    default:
    	return state;
  	}
}

export default abilitiesReducer;