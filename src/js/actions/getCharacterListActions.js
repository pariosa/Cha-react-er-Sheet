import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import {
GET_CHARACTERS
} from "../constants/actionTypes";

export const getCharacters = (characters) => ({type: GET_CHARACTERS, characters});

export function getCharactersThunk() {
 	return dispatch => {
		const Characters = []; 
		const uid = firebase.auth().currentUser ? firebase.auth().currentUser.uid : "";
		if(uid !== ""){
			getFirestore().collection(`characters`).where('owner_uid','==',uid).get().then((querySnapshot) => {
			    querySnapshot.forEach((doc) => {
			    	Characters.push(doc.data()); 
			    }); 
			    dispatch(getCharacters(Characters)); 
			});
		}
	}
}	
 
