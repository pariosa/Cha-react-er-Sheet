import {getCharactersThunk, getCharacters} from './getCharacterListActions'; 

import {
	SAVE_CHARACTER_SUCCESS,
	NEW_CHARACTER,
	RESET_SAVE_BUTTON
} from '../constants/actionTypes';

export const saveCharacter = (character) => {
	return(dispatch, getState, {getFirebase, getFirestore}) => {
		const firebase = getFirebase();
		const firestore = getFirestore(); 
		dispatch({type:SAVE_CHARACTER_SUCCESS});

		return firestore.collection('characters').doc(`${firebase.auth().currentUser.uid}-${getState().character.name}`).set({
			owner_uid:firebase.auth().currentUser.uid,
			armor:getState().armor,
			character:getState().character,
			health:getState().health,
			saves:getState().saves,
			skills:getState().skills,
			speed:getState().speed,
			stats:getState().stat,
			weapons:getState().weapons,
			gear:getState().gear,
			languages:getState().languages,
			feats:getState().feats,
			abilities:getState().abilities,
			currency:getState().currency,
			experience:getState().experience,
			spells:getState().spells,
			spellslots:getState().spellslots,
			acItems:getState().acItems,
			notes:getState().notes
		}).then(()=>{
		const Characters = [];  
			const uid = firebase.auth().currentUser ? firebase.auth().currentUser.uid : "";
			if(uid !== ""){
				getFirestore().collection(`characters`).where('owner_uid','==',uid).get().then((querySnapshot) => {
				    querySnapshot.forEach((doc) => {
				    	Characters.push(doc.data()); 
				    }); 
				    dispatch(getCharacters(Characters))
				});
			}
			console.log('character save')
			dispatch({type:RESET_SAVE_BUTTON, payload:true})
		});
	}
} 
 

 export const newCharacter = (character) =>({
 		type:NEW_CHARACTER
 })