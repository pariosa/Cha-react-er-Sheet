import {
  UPDATE_SKILL_RANK,
  UPDATE_SKILL_DESCRIPTION,
  UPDATE_SKILL_MISC_MOD
} from "../constants/actionTypes";

export const updateSkillRank = rank => ({
  type: "UPDATE_SKILL_RANK",
  payload: rank
});
export const updateSkillDescription = description => ({
  type: "UPDATE_SKILL_DESCRIPTION",
  payload: description
});
export const updateSkillMiscMod = miscMod => ({
  type: "UPDATE_SKILL_MISC_MOD",
  payload: miscMod
});
