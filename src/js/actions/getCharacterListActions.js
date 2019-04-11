import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import {LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../constants/actionTypes';
const GET_CHARACTERS = 'GET_CHARACTERS'

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
			    dispatch(getCharacters(Characters))
			});
		}
	}
}	
 
export const characterListReducer = (state = [], action) =>{
 switch (action.type) {
  case GET_CHARACTERS: 
   return action.characters
  case LOGIN_SUCCESS:
   return action.characters
  case LOGOUT_SUCCESS:
   return []
  default:
   return state
  }
}

export default characterListReducer