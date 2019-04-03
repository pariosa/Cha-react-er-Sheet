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
      const level = parseInt(action.payload.nativeEvent.path[1].getAttribute('level'));
      const spellLevel = state.find(x=> x.level === level);
      let newSpell = new Object;
      newSpell = {
        level:level,
        title:"",
        descripton:"",
        pageReference:"",
        school:"",
        isPrepared:false,
        usedSlot0:false,
        usedSlot1:false,
        usedSlot2:false,
        usedSlot3:false,
        usedSlot4:false,
        usedSlot5:false,
        usedSlot6:false,
        usedSlot7:false,
        usedSlot8:false
      };
      newSpell.id = spellLevel.spells.length;
      for(let x=0;x<spellLevel.spells;x++){
        if(spellLevel.spells.find(node => node.id === x) === undefined){
           newSpell.id = x;
        }
      } 


   return[ ...state.map(
        (item, index) =>
          index !== level ? item : {...item, spells:[ ...item.spells, newSpell
        ]}) 
      ]

      /*
      return[ ...state.map(
        (item, index) =>
          index === level ? item : {...item, spells:[ ...item.spells.map(
            (item2, index2) => 
              index2 === newSpell.id ? newspell : newSpell
          )
        ]}) 
      ]*/
      //return [...state[index]), [state[index].spells, newSpell])]
      /*
      return [ ...state.map((item, index) =>
        index === level ? [...state[index], state[index].spells, newSpell] : item
        )
      ];*/
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