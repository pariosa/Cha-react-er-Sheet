import {
 UPDATE_CP,
 UPDATE_SP,
 UPDATE_GP,
 UPDATE_PP
} from "../constants/actionTypes";

const initialState = {
  CP:0,
  SP:0,
  GP:0,
  PP:0
}

const currencyReducer = (state = initialState, action) => { 
  switch (action.type) {  
  case UPDATE_CP:
    return {...state, CP:action.payload.target.value}
  case UPDATE_SP:
    return {...state, SP:action.payload.target.value}
  case UPDATE_GP:
    return {...state, GP:action.payload.target.value}
  case UPDATE_PP:
    return {...state, PP:action.payload.target.value}
  default:
  	return state;
	}
}

export default currencyReducer;