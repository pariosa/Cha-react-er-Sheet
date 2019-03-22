import{
	ADD_SPELL,
	REMOVE_SPELL,
	UPDATE_SPELL,
	LOAD_ENTIRE_CHARACTER
} from "../constants/actionTypes";

const initialState=[

];

const spellsReducer = (state = initialState, action) => { 
  switch (action.type) {  
	case ADD_SPELL:
      return [...state, action.payload.target.value];
    case REMOVE_SPELL:
      return {state};
    case UPDATE_SPELL:
      return [...state, action.payload.target.value];
    case LOAD_ENTIRE_CHARACTER:
     return [...action.payload.spells]
    default:
    	return state;
  	}
}

export default spellsReducer;