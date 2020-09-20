import {
	UPDATE_SPELLS_KNOWN,
 	UPDATE_SPELL_SAVE_DC,
	UPDATE_SPELLS_PER_DAY,
	UPDATE_BONUS_SPELLS,
	LOAD_ENTIRE_CHARACTER,
	NEW_CHARACTER
} from "../constants/actionTypes";

const initialState = [
	{
		level:0,
		spellsKnown:"0",
		spellSaveDc:"0",
		spellsPerDay:"0",
		bonusSpells:"0"
	},	
	{	
		level:1,
		spellsKnown:"0",
		spellSaveDc:"0",
		spellsPerDay:"0",
		bonusSpells:"0"
	},
	{
		level:2,
		spellsKnown:"0",
		spellSaveDc:"0",
		spellsPerDay:"0",
		bonusSpells:"0"
	},
	{
		level:3,
		spellsKnown:"0",
		spellSaveDc:"0",
		spellsPerDay:"0",
		bonusSpells:"0"
	},
	{
		level:4,
		spellsKnown:"0",
		spellSaveDc:"0",
		spellsPerDay:"0",
		bonusSpells:"0"
	},
	{
		level:5,
		spellsKnown:"0",
		spellSaveDc:"0",
		spellsPerDay:"0",
		bonusSpells:"0"
	},
	{
		level:6,
		spellsKnown:"0",
		spellSaveDc:"0",
		spellsPerDay:"0",
		bonusSpells:"0"
	},
	{
		level:7,
		spellsKnown:"0",
		spellSaveDc:"0",
		spellsPerDay:"0",
		bonusSpells:"0"
	},
	{
		level:8,
		spellsKnown:"0",
		spellSaveDc:"0",
		spellsPerDay:"0",
		bonusSpells:"0"
	},
	{
		level:9,
		spellsKnown:"0",
		spellSaveDc:"0",
		spellsPerDay:"0",
		bonusSpells:"0"
	},
];

const spellSlotReducer = (state = initialState, action) => { 
  switch (action.type) {  
	case  UPDATE_SPELLS_KNOWN: 
	  const slotKnownState = state.find(
	   slot => slot.level === parseInt(action.payload.currentTarget.parentElement.id)
	  );
	  const slotKnownIndex = state.indexOf(
	   slotKnownState
	  ); 
	  let keys;
	  const slotKnownObj = new Object;
	  for(keys in slotKnownState){ 
	    slotKnownObj[keys] = slotKnownState[keys];
	  } 
	  slotKnownObj.spellsKnown = action.payload.target.value;
	  return [
	        ...state.map((item, index) =>
	            index === slotKnownIndex
	              ? slotKnownObj
	              : item
	        ) 
	  ]; 
    case UPDATE_SPELLS_PER_DAY:
	  const slotPerDayState = state.find(
	   slot => slot.level === parseInt(action.payload.currentTarget.parentElement.id)
	  );
	  const slotPerDayIndex = state.indexOf(
	    slotPerDayState
	  );  
	  const slotPerDayObj = new Object;
	  for(keys in slotPerDayState){ 
	    slotPerDayObj[keys] = slotPerDayState[keys];
	  }
	  slotPerDayObj.spellsPerDay = action.payload.target.value;
	  return [
		...state.map((item, index) =>
		  index === slotPerDayIndex
		    ? slotPerDayObj
		    : item
		) 
	  ];
    case UPDATE_SPELL_SAVE_DC:
	  const slotSaveDcState = state.find(
       slot => slot.level === parseInt(action.payload.currentTarget.parentElement.id)
      );
      const slotSaveDcIndex = state.indexOf(
       slotSaveDcState
      );  
      const slotSaveDcObj = new Object;
      for(keys in slotSaveDcState){ 
        slotSaveDcObj[keys] = slotSaveDcState[keys];
      }
      slotSaveDcObj.spellSaveDc = action.payload.target.value;
      return [
        ...state.map((item, index) =>
            index === slotSaveDcIndex
              ? slotSaveDcObj
              : item
        )
	  ];
    case UPDATE_BONUS_SPELLS:
	  const slotBonusSpellsState = state.find(
       slot => slot.level === parseInt(action.payload.currentTarget.parentElement.id)
      );
      const slotBonusSpellsIndex = state.indexOf(
       slotBonusSpellsState
      );  
      const slotBonusSpellsObj = new Object;
      for(keys in slotBonusSpellsState){ 
        slotBonusSpellsObj[keys] = slotBonusSpellsState[keys];
      }
      slotBonusSpellsObj.bonusSpells = action.payload.target.value;
      return [
        ...state.map((item, index) =>
            index === slotBonusSpellsIndex
              ? slotBonusSpellsObj
              : item
        )
	  ];
	  
    case NEW_CHARACTER:
      return initialState;
    case LOAD_ENTIRE_CHARACTER:
     return [...action.payload.spellslots]
    default:
    	return state;
  	}
}
 
export default spellSlotReducer;