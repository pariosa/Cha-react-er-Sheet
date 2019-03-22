import { 
	UPDATE_ABILITY,
	ADD_ABILITY,
	REMOVE_ABILITY
 } from "../constants/actionTypes";

export const updateAbility = ability => ({
	type: UPDATE_ABILITY,
	payload: ability
});

export const addAbility = ability => ({
	type: ADD_ABILITY,
	payload: ability
});

export const removeAbility = ability => ({
	type: REMOVE_ABILITY,
	payload: ability
});