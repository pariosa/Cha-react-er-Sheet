import {
	LOAD_ENTIRE_CHARACTER,
	TOGGLE_SIDE_DRAWER,
} from "../constants/actionTypes";


const initialState = {
	characterId: null
}

const loadCharacterReducer = ( state = initialState, action) => {  
	switch(action.type){
		case LOAD_ENTIRE_CHARACTER:
			//console.log('character Load');  
			return {...state, characterId:action.payload.id}
			break;
		default:
			return state;
	}
}
export default loadCharacterReducer;