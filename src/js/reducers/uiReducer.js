import {
	TOGGLE_LOGIN_MODAL,
	TOGGLE_REGISTER_MODAL,
} from "../constants/actionTypes";


const initialState = {
	loginModalVisible: false,
	registerModalVisible: false
}

const uiReducer = (state = initialState, action) => { 
  switch (action.type) {  
	case TOGGLE_LOGIN_MODAL:  
      return {...state, loginModalVisible: !state.loginModalVisible};
    case TOGGLE_REGISTER_MODAL:
   	  return {...state, registerModalVisible: !state.registerModalVisible};
   	default:
   		return state;
   	}
}

export default uiReducer;