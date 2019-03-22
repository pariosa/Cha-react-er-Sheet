import { 
	UPDATE_FEAT,
	ADD_FEAT,
	REMOVE_FEAT
 } from "../constants/actionTypes";

export const updateFeat = feat => ({
	type: UPDATE_FEAT,
	payload: feat
});

export const addFeat = feat => ({
	type: ADD_FEAT,
	payload: feat
});

export const removeFeat = feat => ({
	type: REMOVE_FEAT,
	payload: feat
});