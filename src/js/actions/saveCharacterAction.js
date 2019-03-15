import {
	SAVE_CHARACTER_SUCCESS
} from '../constants/actionTypes';

export const saveCharacter = (character) => {
	return(dispatch, getState, {getFirebase, getFirestore}) => {
		const firebase = getFirebase();
		const firestore = getFirestore();
		return firestore.collection('characters').doc(getState().character.name).set({
			armor:getState().armor,
			character:getState().character,
			health:getState().health,
			saves:getState().saves,
			skills:getState().skills,
			speed:getState().speed,
			stats:getState().stat,
			weapons:getState().weapon
		});
		dispatch({type: 'SAVE_CHARACTER_SUCCESS'});
	}
}


