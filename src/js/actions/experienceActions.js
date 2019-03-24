import { 
	UPDATE_EXP,
	UPDATE_EXP_MAX 
 } from "../constants/actionTypes";

export const updateExperience = exp => ({
	type: UPDATE_EXP,
	payload: exp
});

export const updateExperienceMax = exp => ({
	type: UPDATE_EXP_MAX,
	payload: exp
});
