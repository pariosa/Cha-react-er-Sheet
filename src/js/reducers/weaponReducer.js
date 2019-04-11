import {
  UPDATE_WEAPON_NAME,
  UPDATE_WEAPON_ATTACK_BONUS,
  UPDATE_WEAPON_CRITICAL,
  UPDATE_WEAPON_TYPE,
  UPDATE_WEAPON_RANGE,
  UPDATE_WEAPON_AMMUNITION,
  UPDATE_WEAPON_DAMAGE,
  LOAD_ENTIRE_CHARACTER,
  ADD_WEAPON,
  REMOVE_WEAPON,
  NEW_CHARACTER
} from "../constants/actionTypes";

const initialState =[
    {
      id:0,
      name:'',
      attackBonus:0,
      critical:0,
      type:'',
      range:'',
      ammunition:'',
      damage:''
    }
]; 

const weaponReducer = (state = initialState, action) => { 
  switch (action.type) { 
    case UPDATE_WEAPON_NAME: 
      const weaponNameState = state.find(
        weapon => weapon.id === parseInt(action.payload.nativeEvent.path[3].id)
      );
      const weaponNameIndex = state.indexOf(
        weaponNameState
      );
      let keys;
      const weaponNameObj = new Object;
      for(keys in weaponNameState){ 
        weaponNameObj[keys] = weaponNameState[keys];
      }
      weaponNameObj.name = action.payload.target.value;
      return [
        ...state.map((item, index) =>
            index === weaponNameIndex
              ? weaponNameObj
              : item
        )
      ];
      break; 
    case UPDATE_WEAPON_ATTACK_BONUS: 
      const weaponAbState = state.find(
        weapon => weapon.id === parseInt(action.payload.nativeEvent.path[3].id)
      );
      const weaponAbIndex = state.indexOf(
        weaponAbState
      ); 
      const weaponAbObj = new Object;
      for(keys in weaponAbState){ 
        weaponAbObj[keys] = weaponAbState[keys];
      }
      weaponAbObj.attackBonus = action.payload.target.value;
      return [
        ...state.map((item, index) =>
            index === weaponAbIndex
              ? weaponAbObj
              : item
        )
      ];
      break;  
    case UPDATE_WEAPON_CRITICAL:
      const weaponCritState = state.find(
        weapon => weapon.id === parseInt(action.payload.nativeEvent.path[3].id)
      );
      const weaponCritIndex = state.indexOf(
        weaponCritState
      ); 
      const weaponCritObj = new Object;
      for(keys in weaponCritState){ 
        weaponCritObj[keys] = weaponCritState[keys];
      }
      weaponCritObj.critical = action.payload.target.value;
      return [
        ...state.map((item, index) =>
            index === weaponCritIndex
              ? weaponCritObj
              : item
        )
      ];
      break; 
    case UPDATE_WEAPON_TYPE:
      const weaponTypeState = state.find(
        weapon => weapon.id === parseInt(action.payload.nativeEvent.path[3].id)
      );
      const weaponTypeIndex = state.indexOf(
        weaponTypeState
      ); 
      const weaponTypeObj = new Object;
      for(keys in weaponTypeState){ 
        weaponTypeObj[keys] = weaponTypeState[keys];
      }
      weaponTypeObj.type = action.payload.target.value;
      return [
        ...state.map((item, index) =>
            index === weaponTypeIndex
              ? weaponTypeObj
              : item
        )
      ];
      break;
    case UPDATE_WEAPON_RANGE:

      const weaponRangeState = state.find(
        weapon => weapon.id === parseInt(action.payload.nativeEvent.path[3].id)
      );
      const weaponRangeIndex = state.indexOf(
        weaponRangeState
      ); 
      const weaponRangeObj = new Object;
      for(keys in weaponRangeState){ 
        weaponRangeObj[keys] = weaponRangeState[keys];
      }
      weaponRangeObj.range = action.payload.target.value;
      return [
        ...state.map((item, index) =>
            index === weaponRangeIndex
              ? weaponRangeObj
              : item
        )
      ];
      break; 
    case UPDATE_WEAPON_AMMUNITION:
      const weaponAmmoState = state.find(
        weapon => weapon.id === parseInt(action.payload.nativeEvent.path[3].id)
      );
      const weaponAmmoIndex = state.indexOf(
        weaponAmmoState
      ); 
      const weaponAmmoObj = new Object;
      for(keys in weaponAmmoState){ 
        weaponAmmoObj[keys] = weaponAmmoState[keys];
      }
      weaponAmmoObj.ammunition = action.payload.target.value;
      return [
        ...state.map((item, index) =>
            index === weaponAmmoIndex
              ? weaponAmmoObj
              : item
        )
      ];
      break; 
    case UPDATE_WEAPON_DAMAGE:
      const weaponDamageState = state.find(
        weapon => weapon.id === parseInt(action.payload.nativeEvent.path[3].id)
      );
      const weaponDamageIndex = state.indexOf(
        weaponDamageState
      ); 
      const weaponDamageObj = new Object;
      for(keys in weaponDamageState){ 
        weaponDamageObj[keys] = weaponDamageState[keys];
      }
      weaponDamageObj.damage = action.payload.target.value;
      return [
        ...state.map((item, index) =>
            index === weaponDamageIndex
              ? weaponDamageObj
              : item
        )
      ];
      break;
    case LOAD_ENTIRE_CHARACTER:
      return [... action.payload.weapons];
    case ADD_WEAPON: 
      const newWeapon = {
        id:state.length+1,
        name:'',
        attackBonus:0,
        critical:0,
        type:'',
        range:'',
        ammunition:'',
        damage:''
      }
      return [
        ...state,
        newWeapon
      ];
      break; 
    case REMOVE_WEAPON: 
    return state.filter(weapon => weapon.id !== parseInt(action.payload.nativeEvent.path[2].id))
      break;
      
    case NEW_CHARACTER:
      return initialState;
  	default:
  	 return state;
  }
}

export default weaponReducer;