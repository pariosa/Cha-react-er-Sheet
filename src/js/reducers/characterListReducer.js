import { GET_CHARACTERS, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../constants/actionTypes';

const initialState = [];

const characterListReducer = (state = initialState, action) =>{
 switch (action.type) {
  case GET_CHARACTERS: 
   return action.characters;
  case LOGIN_SUCCESS:
   return state;
  case LOGOUT_SUCCESS:
   return []
  default:
   return state
  }
}

export default characterListReducer