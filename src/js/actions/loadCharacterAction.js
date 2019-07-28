import {  
  TOGGLE_SIDE_DRAWER,
	LOAD_ENTIRE_CHARACTER,
	RESET_SAVE_BUTTON
} from "../constants/actionTypes"; 

export const loadCharacter = (character) => {
	return (dispatch) => { 
		dispatch({type:LOAD_ENTIRE_CHARACTER, payload:character})
		dispatch({type:TOGGLE_SIDE_DRAWER, payload:false})
		dispatch({type:RESET_SAVE_BUTTON, payload:true})
	}
} 