import { UPDATE_SKILL_RANK } from '../constants/actionTypes';

export const updateSkillRank = rank => ({
	type:"UPDATE_SKILL_RANK",
	payload: rank
});