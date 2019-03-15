import {
  UPDATE_WEAPON_NAME,
  UPDATE_WEAPON_ATTACK_BONUS,
  UPDATE_WEAPON_CRITICAL,
  UPDATE_WEAPON_TYPE,
  UPDATE_WEAPON_RANGE,
  UPDATE_WEAPON_AMMUNITION,
  UPDATE_WEAPON_DAMAGE,
  LOAD_ENTIRE_CHARACTER
} from "../constants/actionTypes";

const initialState =[
    {
      name:'short sword',
      attackBonus:1,
      critical:20,
      type:'slashing',
      range:'close',
      ammunition:'none',
      damage:'1d6'
    }
]; 

const weaponReducer = (state = initialState, action) => { 
  switch (action.type) { 
    case  LOAD_ENTIRE_CHARACTER:
      return {... action.payload.weapons}
  	default:
  	 return state;
  }
}

export default weaponReducer;