import{
	ADD_SPELL,
	REMOVE_SPELL,
	UPDATE_SPELL,
	LOAD_ENTIRE_CHARACTER
} from "../constants/actionTypes";

const initialState=[
  { level:0,
    spells:[]
  },  
  { level:1,
    spells:[]
  },  
  { level:2,
    spells:[]
  },  
  { level:3,
    spells:[]
  },  
  { level:4,
    spells:[]
  },  
  { level:5,
    spells:[]
  },  
  { level:6,
    spells:[]
  },  
  { level:7,
    spells:[]
  },  
  { level:8,
    spells:[]
  },
  { level:9,
    spells:[]
  },
];

const spellsReducer = (state = initialState, action) => { 
  switch (action.type) {  
	case ADD_SPELL:
      return [...state, action.payload.target.value];
    case REMOVE_SPELL:
      return {state};
    case UPDATE_SPELL:
      return [...state, action.payload.target.value];
    case LOAD_ENTIRE_CHARACTER:
     return [...action.payload.spells]
    default:
    	return state;
  	}
}

export default spellsReducer;