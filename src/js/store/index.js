import thunk from 'redux-thunk'; 
import firebase from 'firebase'; 
import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import rootReducer from "../reducers/RootReducer"; 
import config from '../firebase/config'

const rrfConfig = {
	attachAuthIsReady: true,
	userProfile: 'users',
	enableLogging: true,
	useFirestoreForProfile: true  
}
firebase.initializeApp(config) 

const store = createStore(
	rootReducer, 
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reduxFirestore(firebase),
		reactReduxFirebase(firebase, rrfConfig)
	)
)
 

export default store;
