import { 
SIGNUP_SUCCESS,
SIGNUP_ERROR,
LOGIN_ERROR,
LOGIN_SUCCESS,
LOGOUT_SUCCESS
} from "../constants/actionTypes";

const initialState = {
	authError: null
} 

const authReducer = ( state = initialState, action) => {
	switch(action.type){
		case LOGIN_ERROR:
			console.log('Login Error!')
			return{
				...state,
				authError: 'Login failed!'	
			} 
		case LOGIN_SUCCESS:
			console.log('Login Success!')
			return{
				...state,
				authError:null
			}
		case LOGOUT_SUCCESS:
			console.log('Logout successful!')
			return state;
		case SIGNUP_SUCCESS:
			console.log('Registration successful!')
			return{
				...state,
				authError: null	
			} 
		case SIGNUP_ERROR:
			console.log('Registration Error!')
			return{
				...state,
				authError: action.err.message	
			} 
		default:
			return state;
	}
}

export default authReducer;