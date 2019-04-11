import{
	ADD_FEAT,
	REMOVE_FEAT,
	UPDATE_FEAT,
	LOAD_ENTIRE_CHARACTER,
  NEW_CHARACTER
}from "../constants/actionTypes";

const initialState = [ 

];

const featsReducer = (state = initialState, action) => { 
  switch (action.type) {  
	case ADD_FEAT:
      const newFeat = {};
      newFeat.feat = "";
      newFeat.id = state.length;
      for(let x=0;x<state.length;x++){
        if(state.find(node => node.id === x) === undefined){
           newFeat.id = x;
        }
      } 
      return [...state, newFeat];
    case REMOVE_FEAT: 
      return  state.filter(feat => feat.id !== parseInt(action.payload.nativeEvent.path[1].id));
    case UPDATE_FEAT: 
      const featInState = state.find(
        feat => feat.id === parseInt(action.payload.nativeEvent.path[1].id)
      );
      const featIndex = state.indexOf(
        featInState
      ); 
      let keys;
      const featInStateObj = new Object;
      for(keys in featInState){
        featInStateObj[keys] = featInState[keys];
      }
      featInStateObj.feat = action.payload.target.value;
      return[ 
        ...state.map((item, index)=>
            index === featIndex
              ? featInStateObj
              : item
        )
      ];
      break;    
    case LOAD_ENTIRE_CHARACTER:
     return [...action.payload.feats]
    case NEW_CHARACTER:
      return initialState;
    default:
    	return state;
  	}
}

export default featsReducer;