import {
	UPDATE_CP,
	UPDATE_SP,
	UPDATE_GP,
	UPDATE_PP
} from '../constants/actionTypes';

export const updateCp = count => ({
	type:UPDATE_CP,
	payload:count
});
export const updateSp = count => ({
	type:UPDATE_SP,
	payload:count
});
export const updateGp = count => ({
	type:UPDATE_GP,
	payload:count
});
export const updatePp = count => ({
	type:UPDATE_PP,
	payload:count
});