import { ADD_ARTICLE, INCREMENT, DECREMENT } from "../constants/actionTypes";


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
		name: 'stubby',
		alignment:'C/E',
		player:'peter a.',
		level:1,
		diety:'Nethys',
		homeland:'the swamp',
		race:'human',
		size: 'm',
		gender:'M',
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
			return {...state , count: state.count - action.payload};
		default:
			return state;
	}
};

export default actionReducer;
