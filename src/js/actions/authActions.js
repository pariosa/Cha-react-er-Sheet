import {getCharactersThunk, getCharacters} from './getCharacterListActions';
import { reduxFirestore, getFirestore } from 'redux-firestore';

export const login = (credentials) => {
	return (dispatch, getState, {getFirebase}) => { 
		const firebase = getFirebase();
		firebase.auth().signInWithEmailAndPassword(
			credentials.email,
			credentials.password
		).then(()=>{
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
			dispatch({type: 'LOGIN_SUCCESS',
		    payload:Characters
			});  

			dispatch({type: 'TOGGLE_LOGIN_MODAL'}); 
		}).catch((err)=>{  
			dispatch({type: 'LOGIN_ERROR'}, err);
		});
	}
}

export const logout = () => {
	return (dispatch, getState, {getFirebase}) => {
		const firebase  = getFirebase();
		firebase.auth().signOut().then(() => {
			dispatch({type: 'LOGOUT_SUCCESS'});	  


		});
	}
}

export const register = (newUser) => {
	return (dispatch, getState, {getFirebase, getFirestore}) => {
		const firebase = getFirebase();
		const firestore = getFirestore();
		firebase.auth().createUserWithEmailAndPassword(
			newUser.email, 
			newUser.password
		).then((resp) => {
			console.log('returning the response')
			console.log(resp)
			return firestore.collection('users').doc(resp.user.uid).set({
				username: newUser.username
			});
		}).then(() => {
			dispatch({ type: 'SIGNUP_SUCCESS' });
			dispatch({type: 'TOGGLE_REGISTER_MODAL'});
		}).catch((err) => {
			dispatch({ type: 'SIGNUP_ERROR', err});
		});
	}
}