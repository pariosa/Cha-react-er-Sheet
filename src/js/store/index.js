import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { applyMiddleware, compose, createStore } from 'redux';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';
import config from '../firebase/config';
import rootReducer from "../reducers/rootReducer";

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
