import { 
  UPDATE_BASE_SAVE,
  UPDATE_MAGIC_SAVE_MODIFIER,
  UPDATE_MISC_SAVE_MODIFIER,
  UPDATE_TEMP_SAVE_MODIFIER,
  LOAD_ENTIRE_CHARACTER,
} from "../constants/actionTypes";

const initialState = [
  {
  	id:0,
  	save:"Fortitude",
  	stat:"constitution",
  	base:"1",
  	magicMod:"0",
  	miscMod:"0",
  	tempMod:"0",
  },
  {      	
  	id:1,
  	save:"Reflex",
  	stat:"dexterity",
  	base:1,
  	magicMod:"0",
  	miscMod:"0",
  	tempMod:"0",
  },
  {      	
  	id:2,
  	save:"Will",
  	stat:"wisdom",
  	base:1,
  	magicMod:"0",
  	miscMod:"0",
  	tempMod:"0",
  }
];
 
const savesReducer = (state = initialState, action) => { 
  switch (action.type) {  
    case UPDATE_BASE_SAVE: 
      const saveInStateBase = state.find(
        save => save.id === parseInt(action.payload.nativeEvent.path[2].id)
      );
      const saveIndexBase = state.indexOf(
        saveInStateBase
      ); 
      let keys;
      let saveInStateBaseObj = new Object;
      for(keys in saveInStateBase){
        saveInStateBaseObj[keys] = saveInStateBase[keys];
      }
      saveInStateBaseObj.base = action.payload.target.value;
      return[ 
        ...state.map((item, index)=>
            index === saveIndexBase
              ? saveInStateBaseObj
              : item
        )
      ]
      break;
    case UPDATE_MAGIC_SAVE_MODIFIER:      
      const saveInStateMagicMod = state.find(
        save => save.id === parseInt(action.payload.nativeEvent.path[2].id)
      );
      const saveIndexMagicMod = state.indexOf(
        saveInStateMagicMod
      );
      let saveInStateMagicModObj = new Object;
      for(keys in saveInStateMagicMod){
        saveInStateMagicModObj[keys] = saveInStateMagicMod[keys];
      }
      saveInStateMagicModObj.magicMod = action.payload.target.value;
      return[ 
        ...state.map((item, index)=>
            index === saveIndexMagicMod
              ? saveInStateMagicModObj
              : item
        ) 
      ]
      break;
    case UPDATE_MISC_SAVE_MODIFIER:  
      const saveInStateMiscMod = state.find(
        save => save.id === parseInt(action.payload.nativeEvent.path[2].id)
      );
      const saveIndexMiscMod = state.indexOf(
        saveInStateMiscMod
      );   
      let saveInStateMiscModObj = new Object;
      for(keys in saveInStateMiscMod){
        saveInStateMiscModObj[keys] = saveInStateMiscMod[keys];
      }
      saveInStateMiscModObj.miscMod = action.payload.target.value;
      return [ 
        ...state.map((item, index)=>
            index === saveIndexMiscMod
              ? saveInStateMiscModObj
              : item
        ) 
      ]    
      break;
    case UPDATE_TEMP_SAVE_MODIFIER: 
      const saveInStateTempMod = state.find(
        save => save.id === parseInt(action.payload.nativeEvent.path[2].id)
      );
      const saveIndexTempMod = state.indexOf(
        saveInStateTempMod
      );
      let saveInStateTempModObj = new Object;
      for(keys in saveInStateTempMod){
        saveInStateTempModObj[keys] = saveInStateTempMod[keys];
      }
      saveInStateTempModObj.tempMod = action.payload.target.value;
      return [ 
       	...state.map((item, index)=>
            index === saveIndexTempMod
              ? saveInStateTempModObj
              : item
        ) 
      ]
      break;
  case  LOAD_ENTIRE_CHARACTER:
      return [... action.payload.saves]
 	default:
 		return state;
  }
}
export default savesReducer;