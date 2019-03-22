import{
	ADD_FEAT,
	REMOVE_FEAT,
	UPDATE_FEAT,
	LOAD_ENTIRE_CHARACTER
}from "../constants/actionTypes";

const initialState = [ 

];

const featsReducer = (state = initialState, action) => { 
  switch (action.type) {  
	case ADD_FEAT:
      return [...state, action.payload.target.value];
    case REMOVE_FEAT:
      return {state};
    case UPDATE_FEAT:
      return [...state, action.payload.target.value];
    case LOAD_ENTIRE_CHARACTER:
     return [...action.payload.feats]
    default:
    	return state;
  	}
}

export default featsReducer;