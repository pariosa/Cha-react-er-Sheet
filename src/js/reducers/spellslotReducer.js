import {
	UPDATE_SPELLS_KNOWN,
 	UPDATE_SPELL_SAVE_DC,
	UPDATE_SPELLS_PER_DAY,
	UPDATE_BONUS_SPELLS,
	LOAD_ENTIRE_CHARACTER
} from "../constants/actionTypes";

const initialState = {
	"0":{
		"spellsKnown":"",
		"spellSaveDc":"",
		"spellsPerDay":"",
		"bonusSpells":""
	},	
	"1":{
		"spellsKnown":"",
		"spellSaveDc":"",
		"spellsPerDay":"",
		"bonusSpells":""
	},
	"2":{
		"spellsKnown":"",
		"spellSaveDc":"",
		"spellsPerDay":"",
		"bonusSpells":""
	},
	"3":{
		"spellsKnown":"",
		"spellSaveDc":"",
		"spellsPerDay":"",
		"bonusSpells":""
	},
	"4":{
		"spellsKnown":"",
		"spellSaveDc":"",
		"spellsPerDay":"",
		"bonusSpells":""
	},
	"5":{
		"spellsKnown":"",
		"spellSaveDc":"",
		"spellsPerDay":"",
		"bonusSpells":""
	},
	"6":{
		"spellsKnown":"",
		"spellSaveDc":"",
		"spellsPerDay":"",
		"bonusSpells":""
	},
	"7":{
		"spellsKnown":"",
		"spellSaveDc":"",
		"spellsPerDay":"",
		"bonusSpells":""
	},
	"8":{
		"spellsKnown":"",
		"spellSaveDc":"",
		"spellsPerDay":"",
		"bonusSpells":""
	},
	"9":{
		"spellsKnown":"",
		"spellSaveDc":"",
		"spellsPerDay":"",
		"bonusSpells":""
	},
};

const spellSlotReducer = (state = initialState, action) => { 
  switch (action.type) {  
	case  UPDATE_SPELLS_KNOWN:
      return {state};
    case UPDATE_SPELLS_PER_DAY:
      return {state};
    case UPDATE_BONUS_SPELLS:
      return {state};
    case LOAD_ENTIRE_CHARACTER:
     return {...action.payload.spellslots}
    default:
    	return state;
  	}
}
 
export default spellSlotReducer;