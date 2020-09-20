import{
	ADD_ABILITY,
	REMOVE_ABILITY,
	UPDATE_ABILITY,
	LOAD_ENTIRE_CHARACTER,
  NEW_CHARACTER
}from "../constants/actionTypes";

const initialState = [ 

];

const abilitiesReducer = (state = initialState, action) => { 
  switch (action.type) {  
	case ADD_ABILITY:
    const newAbility = {};
    newAbility.ability = "";
    newAbility.id = state.length;
    for(let x=0;x<state.length;x++){
      if(state.find(node => node.id === x) === undefined){
         newAbility.id = x;
      }
    }   
    return [...state, newAbility]; 
    case REMOVE_ABILITY: 
      return  state.filter(ability => ability.id !== parseInt(action.payload.currentTarget.parentElement.id));
    case UPDATE_ABILITY:  
      const abilityInState = state.find(
        ability => ability.id === parseInt(action.payload.currentTarget.parentElement.id)
      );
      const abilityIndex = state.indexOf(
        abilityInState
      ); 
      let keys;
      const abilityInStateObj = new Object;
      for(keys in abilityInState){
        abilityInStateObj[keys] = abilityInState[keys];
      }
      abilityInStateObj.ability = action.payload.target.value;
      return[ 
        ...state.map((item, index)=>
            index === abilityIndex
              ? abilityInStateObj
              : item
        )
      ];
      break;    
    case LOAD_ENTIRE_CHARACTER:
     return [...action.payload.abilities]
    case NEW_CHARACTER:
      return initialState;
    default:
    	return state;
  	}
}

export default abilitiesReducer;