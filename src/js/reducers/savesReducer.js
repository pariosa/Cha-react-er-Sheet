import { 
  UPDATE_BASE_SAVE,
  UPDATE_MAGIC_SAVE_MODIFIER,
  UPDATE_MISC_SAVE_MODIFIER,
  UPDATE_TEMP_SAVE_MODIFIER,
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
      saveInStateBase.base = action.payload.target.value;
      return[ 
        ...state.map((item, index)=>
            index === saveInStateBase.id
              ? saveInStateBase
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
      saveInStateMagicMod.magicMod = action.payload.target.value;
      return[ 
        ...state.map((item, index)=>
            index === saveInStateMagicMod.id
              ? saveInStateMagicMod
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
      saveInStateMiscMod.miscMod = action.payload.target.value;
      return [ 
        ...state.map((item, index)=>
            index === saveInStateMiscMod.id
              ? saveInStateMiscMod
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
      saveInStateTempMod.tempMod = action.payload.target.value;
      return [ 
       	...state.map((item, index)=>
            index === saveInStateTempMod.id
              ? saveInStateTempMod
              : item
        ) 
      ]
      break;
 	default:
 		return state;
  }
}
export default savesReducer;