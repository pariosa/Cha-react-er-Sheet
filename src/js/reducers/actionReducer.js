import { ADD_ARTICLE, INCREMENT, DECREMENT,UPDATE_NAME, UPDATE_ALIGNMENT, UPDATE_PLAYER_NAME, UPDATE_CLASS, UPDATE_LEVEL, UPDATE_DIETY, UPDATE_HOMELAND, UPDATE_RACE, UPDATE_SIZE, UPDATE_GENDER, UPDATE_AGE, UPDATE_HEIGHT, UPDATE_WEIGHT,UPDATE_HAIR, UPDATE_EYES } from "../constants/actionTypes";
import { UPDATE_MAX_HP, UPDATE_CURRENT_HP, UPDATE_NONLETHAL, UPDATE_DR ,  UPDATE_INITIATIVE_MOD } from '../constants/actionTypes';
import { INCREMENT_STR, INCREMENT_DEX, INCREMENT_CON, INCREMENT_INT, INCREMENT_WIS, INCREMENT_CHA, DECREMENT_STR, DECREMENT_DEX, DECREMENT_CON, DECREMENT_INT, DECREMENT_WIS, DECREMENT_CHA,INCREMENT_STR_TEMP, INCREMENT_DEX_TEMP, INCREMENT_CON_TEMP, INCREMENT_INT_TEMP, INCREMENT_WIS_TEMP, INCREMENT_CHA_TEMP, DECREMENT_STR_TEMP, DECREMENT_DEX_TEMP, DECREMENT_CON_TEMP, DECREMENT_INT_TEMP, DECREMENT_WIS_TEMP, DECREMENT_CHA_TEMP } from '../constants/actionTypes';
import { UPDATE_SKILL_RANK } from '../constants/actionTypes'
const initialState = {
	articles: [],
	count: 0,
	character:{
		stats:{
			intelligence:10,
			intMod:0,
			dexterity:10,
			dexMod:0,
			strength:10,
			strMod:0,
			dexterity:10,
			dexMod:0,
			wisdom:10,
			wisMod:0,
			charisma:10,
			chaMod:0,
			constitution:10,
			conMod:0
		},
		statsTemporary:{
			intelligence:10,
			intMod:0,
			dexterity:10,
			dexMod:0,
			strength:10,
			strMod:0,
			dexterity:10,
			dexMod:0,
			wisdom:10,
			wisMod:0,
			charisma:10,
			chaMod:0,
			constitution:10,
			conMod:0
		},
		health:{
			current: 24,
			max: 35,
			DR:'4 - fire',
			nonLethal:'none',
		},
		skills:[
			{
				title:'acrobatics',
				stat:'dexterity',
				ranks:0,
				miscMod:0
			},
			{
				title:'appraise',
				stat:'wisdom',
				ranks:0,
				miscMod:0
			},
			{
				title:'bluff',
				stat:'charisma',
				ranks:0,
				miscMod:0
			}
		],
		initiativeModifier: 0,
		name: 'Eggy',
		alignment:'N/E',
		playerName:'Peter a.',
		level:7,
		diety:'Nethys',
		homeland:'the Skillet',
		race:'egg',
		playerClass:'cleric',
		size: 's',
		gender:'F',
		age: 28,
		height: '2\'1',
		weight:'1lbs',
		hair:'eggshell',
		eyes:'eggshell'
	}
};

const actionReducer = (state = initialState, action) => {
	switch (action.type){
		case ADD_ARTICLE: 
			return {...state, articles: [...state.articles, action.payload] };
		case INCREMENT: 
			return {...state, count: state.count + action.payload};
		case DECREMENT: 
			return {...state, count: state.count - action.payload};
		case UPDATE_NAME:
			return {...state, character:{ ...state.character, name: action.payload.target.value}};
		case UPDATE_ALIGNMENT:
			return {...state, character:{ ...state.character, alignment: action.payload.target.value}};
		case UPDATE_PLAYER_NAME:
			return {...state, character:{ ...state.character, playerName: action.payload.target.value}};
		case UPDATE_CLASS:
			return {...state, character:{ ...state.character, playerClass: action.payload.target.value}};
		case UPDATE_LEVEL:
			return {...state, character:{ ...state.character, level: action.payload.target.value}};
		case UPDATE_DIETY:
			return {...state, character:{ ...state.character, diety: action.payload.target.value}};
		case UPDATE_AGE:
			return {...state, character:{ ...state.character, age: action.payload.target.value}};
		case UPDATE_HOMELAND:
			return {...state, character:{ ...state.character, homeland: action.payload.target.value}};
		case UPDATE_RACE:
			return {...state, character:{ ...state.character, race: action.payload.target.value}};
		case UPDATE_SIZE:
			return {...state, character:{ ...state.character, size: action.payload.target.value}};
		case UPDATE_GENDER:
			return {...state, character:{ ...state.character, gender: action.payload.target.value}};
		case UPDATE_HEIGHT:
			return {...state, character:{ ...state.character, height: action.payload.target.value}};
		case UPDATE_WEIGHT:
			return {...state, character:{ ...state.character, weight: action.payload.target.value}};
		case UPDATE_HAIR:
			return {...state, character:{ ...state.character, hair: action.payload.target.value}};
		case UPDATE_EYES:
			return {...state, character:{ ...state.character, eyes: action.payload.target.value}};
		case INCREMENT_STR:
			return {...state, character:{...state.character, stats: {...state.character.stats, strength: state.character.stats.strength + 1, strMod: Math.floor((state.character.stats.strength - 9 ) /2) }}};
		case DECREMENT_STR: 
			return {...state, character:{ ...state.character, stats: { ...state.character.stats, strength: state.character.stats.strength - 1, strMod: Math.floor((state.character.stats.strength - 11) /2) }}};
		case INCREMENT_STR_TEMP:
			return {...state, character:{...state.character, statsTemporary: {...state.character.statsTemporary, strength: state.character.statsTemporary.strength + 1, strMod: Math.floor((state.character.statsTemporary.strength - 9) /2) }}};
		case DECREMENT_STR_TEMP:
			return {...state, character:{...state.character, statsTemporary: {...state.character.statsTemporary, strength: state.character.statsTemporary.strength - 1, strMod: Math.floor((state.character.statsTemporary.strength - 11) /2) }}};
		case INCREMENT_DEX:
			return {...state, character:{...state.character, stats: {...state.character.stats, dexterity: state.character.stats.dexterity + 1, dexMod: Math.floor((state.character.stats.dexterity - 9 ) /2) }}};
		case DECREMENT_DEX: 
			return {...state, character:{ ...state.character, stats: { ...state.character.stats, dexterity: state.character.stats.dexterity - 1, dexMod: Math.floor((state.character.stats.dexterity - 11) /2) }}};
		case INCREMENT_DEX_TEMP:
			return {...state, character:{...state.character, statsTemporary: {...state.character.statsTemporary, dexterity: state.character.statsTemporary.dexterity + 1, dexMod: Math.floor((state.character.statsTemporary.dexterity - 9) /2) }}};
		case DECREMENT_DEX_TEMP:
			return {...state, character:{...state.character, statsTemporary: {...state.character.statsTemporary, dexterity: state.character.statsTemporary.dexterity - 1, dexMod: Math.floor((state.character.statsTemporary.dexterity - 11) /2) }}};
		case INCREMENT_CON:
			return {...state, character:{...state.character, stats: {...state.character.stats, constitution: state.character.stats.constitution + 1, conMod: Math.floor((state.character.stats.constitution - 9 ) /2) }}};
		case DECREMENT_CON: 
			return {...state, character:{ ...state.character, stats: { ...state.character.stats, constitution: state.character.stats.constitution - 1, conMod: Math.floor((state.character.stats.constitution - 11) /2) }}};
		case INCREMENT_CON_TEMP:
			return {...state, character:{...state.character, statsTemporary: {...state.character.statsTemporary, constitution: state.character.statsTemporary.constitution + 1, conMod: Math.floor((state.character.statsTemporary.constitution - 9) /2) }}};
		case DECREMENT_CON_TEMP:
			return {...state, character:{...state.character, statsTemporary: {...state.character.statsTemporary, constitution: state.character.statsTemporary.constitution - 1, conMod: Math.floor((state.character.statsTemporary.constitution - 11) /2) }}};
		case INCREMENT_INT:
			return {...state, character:{...state.character, stats: {...state.character.stats, intelligence: state.character.stats.intelligence + 1, intMod: Math.floor((state.character.stats.intelligence - 9 ) /2) }}};
		case DECREMENT_INT: 
			return {...state, character:{ ...state.character, stats: { ...state.character.stats, intelligence: state.character.stats.intelligence - 1, intMod: Math.floor((state.character.stats.intelligence - 11) /2) }}};
		case INCREMENT_INT_TEMP:
			return {...state, character:{...state.character, statsTemporary: {...state.character.statsTemporary, intelligence: state.character.statsTemporary.intelligence + 1, intMod: Math.floor((state.character.statsTemporary.intelligence - 9) /2) }}};
		case DECREMENT_INT_TEMP:
			return {...state, character:{...state.character, statsTemporary: {...state.character.statsTemporary, intelligence: state.character.statsTemporary.intelligence - 1, intMod: Math.floor((state.character.statsTemporary.intelligence - 11) /2) }}};
		case INCREMENT_WIS:
			return {...state, character:{...state.character, stats: {...state.character.stats, wisdom: state.character.stats.wisdom + 1, wisMod: Math.floor((state.character.stats.wisdom - 9 ) /2) }}};
		case DECREMENT_WIS: 
			return {...state, character:{ ...state.character, stats: { ...state.character.stats, wisdom: state.character.stats.wisdom - 1, wisMod: Math.floor((state.character.stats.wisdom - 11) /2) }}};
		case INCREMENT_WIS_TEMP:
			return {...state, character:{...state.character, statsTemporary: {...state.character.statsTemporary, wisdom: state.character.statsTemporary.wisdom + 1, wisMod: Math.floor((state.character.statsTemporary.wisdom - 9) /2) }}};
		case DECREMENT_WIS_TEMP:
			return {...state, character:{...state.character, statsTemporary: {...state.character.statsTemporary, wisdom: state.character.statsTemporary.wisdom - 1, wisMod: Math.floor((state.character.statsTemporary.wisdom - 11) /2) }}};
		case INCREMENT_CHA:
			return {...state, character:{...state.character, stats: {...state.character.stats, charisma: state.character.stats.charisma + 1, chaMod: Math.floor((state.character.stats.charisma - 9 ) /2) }}};
		case DECREMENT_CHA: 
			return {...state, character:{ ...state.character, stats: { ...state.character.stats, charisma: state.character.stats.charisma - 1, chaMod: Math.floor((state.character.stats.charisma - 11) /2) }}};
		case INCREMENT_CHA_TEMP:
			return {...state, character:{...state.character, statsTemporary: {...state.character.statsTemporary, charisma: state.character.statsTemporary.charisma + 1, chaMod: Math.floor((state.character.statsTemporary.charisma - 9) /2) }}};
		case DECREMENT_CHA_TEMP:
			return {...state, character:{...state.character, statsTemporary: {...state.character.statsTemporary, charisma: state.character.statsTemporary.charisma - 1, chaMod: Math.floor((state.character.statsTemporary.charisma - 11) /2) }}};
		case UPDATE_MAX_HP: 
			return {...state, character:{...state.character, health: {...state.character.health, max: action.payload.target.value}}}
		case UPDATE_CURRENT_HP:
			return {...state, character:{...state.character, health: {...state.character.health, current:action.payload.target.value}}}
		case UPDATE_NONLETHAL:
			return {...state, character:{...state.character, health: {...state.character.health, nonLethal: action.payload.target.value}}}
		case UPDATE_DR:
			return {...state, character:{...state.character, health: {...state.character.health, DR: action.payload.target.value}}}
		case UPDATE_INITIATIVE_MOD:
			return {...state, character:{...state.character, initiativeModifier: action.payload.target.value}}
		case UPDATE_SKILL_RANK:
			debugger;
			return {...state}
		default:
			return state;
	}
};

export default actionReducer;
