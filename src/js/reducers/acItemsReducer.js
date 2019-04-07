import {
  UPDATE_ACITEM_NAME,
  UPDATE_ACITEM_BONUS,
  UPDATE_ACITEM_TYPE,
  UPDATE_ACITEM_CHECK_PENALTY,
  UPDATE_ACITEM_SPELL_FAILURE,
  UPDATE_ACITEM_WEIGHT,
  UPDATE_ACITEM_PROPERTIES,
  LOAD_ENTIRE_CHARACTER,
  ADD_ACITEM,
  REMOVE_ACITEM
} from "../constants/actionTypes";

const initialState =[
    {
      id:0,
      name:"",
      bonus:"",
      type:"",
      checkPenalty:"",
      spellFailure:"",
      weight:"",
      properties:""
    }    
]; 

const acItemReducer = (state = initialState, action) => { 
  switch (action.type) { 
    case UPDATE_ACITEM_NAME: 
      const acItemNameState = state.find(
        acItem => acItem.id === parseInt(action.payload.nativeEvent.path[3].id)
      );
      const acItemNameIndex = state.indexOf(
        acItemNameState
      );
      let keys;
      const acItemNameObj = new Object;
      for(keys in acItemNameState){ 
        acItemNameObj[keys] = acItemNameState[keys];
      }
      acItemNameObj.name = action.payload.target.value;
      return [
        ...state.map((item, index) =>
            index === acItemNameIndex
              ? acItemNameObj
              : item
        )
      ];
      break; 
    case UPDATE_ACITEM_BONUS: 
      const acItemBonusState = state.find(
        acItem => acItem.id === parseInt(action.payload.nativeEvent.path[3].id)
      );
      const acItemBonusIndex = state.indexOf(
        acItemBonusState
      ); 
      const acItemBonusObj = new Object;
      for(keys in acItemBonusState){ 
        acItemBonusObj[keys] = acItemBonusState[keys];
      }
      acItemBonusObj.bonus = action.payload.target.value;
      return [
        ...state.map((item, index) =>
            index === acItemBonusIndex
              ? acItemBonusObj
              : item
        )
      ];
      break;
    case UPDATE_ACITEM_TYPE: 
      const acItemTypeState = state.find(
        acItem => acItem.id === parseInt(action.payload.nativeEvent.path[3].id)
      ); 
      const acItemTypeIndex = state.indexOf(
        acItemTypeState
      ); 
      const acItemTypeObj = new Object;
      for(keys in acItemTypeState){ 
        acItemTypeObj[keys] = acItemTypeState[keys];
      }
      acItemTypeObj.type = action.payload.target.value;
      return [
        ...state.map((item, index) =>
            index === acItemTypeIndex
              ? acItemTypeObj
              : item
        )
      ];
    break;
    case UPDATE_ACITEM_CHECK_PENALTY: 
      const acItemCheckPenaltyState = state.find(
        acItem => acItem.id === parseInt(action.payload.nativeEvent.path[3].id)
      );
      const acItemCheckPenaltyIndex = state.indexOf(
        acItemCheckPenaltyState
      ); 
      const acItemCheckPenaltyObj = new Object;
      for(keys in acItemCheckPenaltyState){ 
        acItemCheckPenaltyObj[keys] = acItemCheckPenaltyState[keys];
      }  
      acItemCheckPenaltyObj.checkPenalty = action.payload.target.value;
      return [
        ...state.map((item, index) =>
            index === acItemCheckPenaltyIndex
              ? acItemCheckPenaltyObj
              : item
        )
      ];
    break;
    case UPDATE_ACITEM_SPELL_FAILURE: 
      const acItemSpellFailureState = state.find(
        acItem => acItem.id === parseInt(action.payload.nativeEvent.path[3].id)
      );
      const acItemSpellFailureIndex = state.indexOf(
        acItemSpellFailureState
      ); 
      const acItemSpellFailureObj = new Object;
      for(keys in acItemSpellFailureState){ 
        acItemSpellFailureObj[keys] = acItemSpellFailureState[keys];
      }
      acItemSpellFailureObj.spellFailure = action.payload.target.value;
      return [
        ...state.map((item, index) =>
            index === acItemSpellFailureIndex
              ? acItemSpellFailureObj
              : item
        )
      ];
    break;
    case UPDATE_ACITEM_WEIGHT: 
      const acItemWeightState = state.find(
        acItem => acItem.id === parseInt(action.payload.nativeEvent.path[3].id)
      );
      const acItemWeightIndex = state.indexOf(
        acItemWeightState
      ); 
      const acItemWeightObj = new Object;
      for(keys in acItemWeightState){ 
        acItemWeightObj[keys] = acItemWeightState[keys];
      }
      acItemWeightObj.weight = action.payload.target.value;
      return [
        ...state.map((item, index) =>
            index === acItemWeightIndex
              ? acItemWeightObj
              : item
        )
      ];
    break;
    case UPDATE_ACITEM_PROPERTIES: 
      const acItemPropertiesState = state.find(
        acItem => acItem.id === parseInt(action.payload.nativeEvent.path[3].id)
      );
      const acItemPropertiesIndex = state.indexOf(
        acItemPropertiesState
      ); 
      const acItemPropertiesObj = new Object;
      for(keys in acItemPropertiesState){ 
        acItemPropertiesObj[keys] = acItemPropertiesState[keys];
      }
      acItemPropertiesObj.properties = action.payload.target.value;
      return [
        ...state.map((item, index) =>
            index === acItemPropertiesIndex
              ? acItemPropertiesObj
              : item
        )
      ];
    break;
    case ADD_ACITEM: 
      const newAcItem = {
        id:state.length+1,  
        name:"",
        bonus:"",
        type:"",
        checkPenalty:"",
        spellFailure:"",
        weight:"",
        properties:""
      }
      return [
        ...state,
        newAcItem
      ];
      break; 
    case REMOVE_ACITEM: 
    return state.filter(weapon => weapon.id !== parseInt(action.payload.nativeEvent.path[2].id))
      break;
    case LOAD_ENTIRE_CHARACTER:
      return [... action.payload.acItems]
  	default:
  	 return state;
  }
}

export default acItemReducer;