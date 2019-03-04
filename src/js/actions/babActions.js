import {
  UPDATE_BASE_ATTACK_BONUS,
  UPDATE_SPELL_RESISTANCE,
} from "../constants/actionTypes";

export const updateBaseAttackBonus = bab => ({
  type: "UPDATE_BASE_ATTACK_BONUS",
  payload: bab
});
export const updateSpellResistance = spellResistance => ({
  type: "UPDATE_SPELL_RESISTANCE",
  payload: spellResistance
});
 