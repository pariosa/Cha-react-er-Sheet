import {
	TOGGLE_LOGIN_MODAL,
	TOGGLE_REGISTER_MODAL,
  TOGGLE_SIDE_DRAWER
} from "../constants/actionTypes";


const initialState = {
	loginModalVisible: false,
	registerModalVisible: false,
  sideDrawerVisible: false
}

const uiReducer = (state = initialState, action) => { 
  switch (action.type) {  
	case TOGGLE_LOGIN_MODAL:  
      return {...state, loginModalVisible: !state.loginModalVisible};
    case TOGGLE_REGISTER_MODAL:
      return {...state, registerModalVisible: !state.registerModalVisible};
    case TOGGLE_SIDE_DRAWER:
      return {...state, sideDrawerVisible: !state.sideDrawerVisible};
   	default:
   		return state;
   	}
}

export default uiReducer;