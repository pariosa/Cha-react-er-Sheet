import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import actionReducer from './actionReducer';

const reducers = {
	action: actionReducer, 
	form: formReducer
}

//character reducer is formReducer
const reducer = combineReducers(reducers)

export default reducer;