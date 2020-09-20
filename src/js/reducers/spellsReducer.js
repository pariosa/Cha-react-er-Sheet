import{
	ADD_SPELL,
	REMOVE_SPELL,
	UPDATE_SPELL,
	LOAD_ENTIRE_CHARACTER,
  NEW_CHARACTER
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
  let updateType
  let spellId;
  let level;
  let spellLevel;
  let newSpell;
  let payloadValue;
  switch (action.type) { 
	  case ADD_SPELL:
      level = parseInt(action.payload.currentTarget.parentElement.getAttribute('level'),10);
      spellLevel = state.find(x=> x.level === level);
      newSpell = {};
      newSpell = {
        level,
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
      for(let x=0;x<spellLevel.spells.length ;x+=1){
        if(spellLevel.spells.find(node => node.id === x) === undefined){
           newSpell.id = x;
        }
      }   
      return[ ...state.map(
        (item, index) =>
          index !== level ? item : {...item, 
            spells:[ ...item.spells, newSpell]
          }
        ) 
      ];
 
    case REMOVE_SPELL:
      level = parseInt(action.payload.currentTarget.parentElement.parentElement.parentElement.getAttribute('level'),10);
      spellId = parseInt(action.payload.currentTarget.parentElement.id,10); 

      return  [...state.map(
        (item, index) =>
          index !== level ? item : {...item, 
            spells:[...item.spells.filter(spell => 
              spell.id !== spellId
            )]
          }
      )]
    case UPDATE_SPELL:
      level = parseInt(action.payload.currentTarget.parentElement.parentElement.parentElement.getAttribute('level'),10);
      spellLevel = state.find(x=> x.level === level);
      updateType = action.payload.currentTarget.getAttribute('target');
      spellId = parseInt(action.payload.currentTarget.parentElement.id,10); 
      payloadValue = (action.payload.target.type === "checkbox") ? action.payload.target.checked : action.payload.target.value;

      return[...state.map(
        (item, index) =>
          index !== level ? item : {...item, 
            spells:[...item.spells.map(spell =>(
              spell.id === spellId ? {...spell, [updateType]:payloadValue} : spell
            ))]
          }
        ) 
      ]; 
      
    case NEW_CHARACTER:
      return initialState;
    case LOAD_ENTIRE_CHARACTER:
     return [...action.payload.spells]
    default:
    	return state;
  	}
}

export default spellsReducer;