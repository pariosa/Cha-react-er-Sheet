import{
UPDATE_GEAR_NAME,
UPDATE_GEAR_WEIGHT,
UPDATE_LIGHT_LOAD,
UPDATE_MEDIUM_LOAD,
UPDATE_HEAVY_LOAD,
UPDATE_LIFT_OVER_HEAD,
UPDATE_LIFT_OFF_GROUND,
UPDATE_DRAG_OR_PUSH,
ADD_GEAR,
REMOVE_GEAR,
LOAD_ENTIRE_CHARACTER
} from "../constants/actionTypes";

const initialState = {
	gear:[
		{	
			id:0,
			name:"torch x1",
			weight:1
		}
	],
	lightLoad:0,
	mediumLoad:0,
	heavyLoad:0,
	liftOverHead:0,
	liftOffGround:0,
	dragOrPush:0
}

const gearReducer = (state = initialState, action) =>{
	switch (action.type){
	case UPDATE_GEAR_NAME:
	   const gearNameState = state.gear.find(
	       gear => gear.id === parseInt(action.payload.nativeEvent.path[3].id)
	      );
	      const gearNameIndex = state.gear.indexOf(
	       gearNameState
	      ); 
	      let keys;
	      const gearNameObj = new Object;
	      for(keys in gearNameState){ 
	        gearNameObj[keys] = gearNameState[keys];
	      }
	      gearNameObj.name = action.payload.target.value;
	      return {...state, gear: [
		        ...state.gear.map((item, index) =>
		            index === gearNameIndex
		              ? gearNameObj
		              : item
		        )
		      ]
		  }
	case UPDATE_GEAR_WEIGHT:
	   const gearWeightState = state.gear.find(
	       gear => gear.id === parseInt(action.payload.nativeEvent.path[3].id)
	      );
	      const gearWeightIndex = state.gear.indexOf(
	       gearWeightState
	      ); 
	      const gearWeightObj = new Object;
	      for(keys in gearWeightState){ 
	        gearWeightObj[keys] = gearWeightState[keys];
	      }
	      gearWeightObj.weight = action.payload.target.value;
	      return {...state, gear: [
		        ...state.gear.map((item, index) =>
		            index === gearWeightIndex
		              ? gearWeightObj
		              : item
		        )
		      ]
		  }
 	case UPDATE_LIGHT_LOAD:
		return {...state, lightLoad:action.payload.target.value}
	case UPDATE_MEDIUM_LOAD:
		return {...state, mediumLoad:action.payload.target.value}
	case UPDATE_HEAVY_LOAD:
		return {...state, heavyLoad:action.payload.target.value}
	case UPDATE_LIFT_OVER_HEAD:
		return {...state, liftOverHead:action.payload.target.value}
	case UPDATE_LIFT_OFF_GROUND:
		return {...state, liftOffGround:action.payload.target.value}
	case UPDATE_DRAG_OR_PUSH:
		return {...state, dragOrPush:action.payload.target.value}
	case ADD_GEAR: 
      const newGear = {
        id:state.gear.length+1,  
        name:'', 
        weight:'' 
      }
      return{...state, gear:
      	[
        	...state.gear,
   			newGear
      	]
      }  
    case REMOVE_GEAR: 
	    return {...state, gear:  
	    	state.gear.filter(gear => gear.id !== parseInt(action.payload.nativeEvent.path[2].id))
	    	 
	    } 
	case  LOAD_ENTIRE_CHARACTER: 
      return {... action.payload.gear}
	default:
		return state;
	}
}
export default gearReducer;

