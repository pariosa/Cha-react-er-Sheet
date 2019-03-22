import { 
	UPDATE_EXP,
	UPDATE_EXP_MAX 
 } from "../constants/actionTypes";

export const updateExperience = ability => ({
	type: UPDATE_EXP,
	payload: ability
});

export const updateExperienceMax = ability => ({
	type: UPDATE_EXP_MAX,
	payload: ability
});
