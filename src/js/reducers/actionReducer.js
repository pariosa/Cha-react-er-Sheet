import { ADD_ARTICLE, INCREMENT, DECREMENT,UPDATE_NAME, UPDATE_ALIGNMENT, UPDATE_PLAYER_NAME, UPDATE_CLASS, UPDATE_LEVEL, UPDATE_DIETY, UPDATE_HOMELAND, UPDATE_RACE, UPDATE_SIZE, UPDATE_GENDER, UPDATE_AGE, UPDATE_HEIGHT, UPDATE_WEIGHT,UPDATE_HAIR, UPDATE_EYES } from "../constants/actionTypes";

const initialState = {
	articles: [],
	count: 0,
	character:{
		stats:{
			intelligence:10,
			dexterity:10,
			strength:10,
			dexterity:10,
			wisdom:10,
			charisma:10,
			constitution:10
		},
		name: 'Horvath',
		alignment:'N/E',
		playerName:'Peter a.',
		level:7,
		diety:'Nethys',
		homeland:'the Wastes',
		race:'dwarf',
		playerClass:'cleric',
		size: 's',
		gender:'F',
		age: 28,
		height: '6\'1',
		weight:'230lbs',
		hair:'brown',
		eyes:'green'
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
		default:
			return state;
	}
};

export default actionReducer;
