import {
UPDATE_BASE_SAVE,
UPDATE_MAGIC_SAVE_MODIFIER,
UPDATE_MISC_SAVE_MODIFIER, 
UPDATE_TEMP_SAVE_MODIFIER, 
} from "../constants/actionTypes";

export const updateBaseSave = save => ({
  type: "UPDATE_BASE_SAVE",
  payload: save
});
export const updateMagicSaveModifier = magicMod => ({
  type: "UPDATE_MAGIC_SAVE_MODIFIER",
  payload: magicMod
});
export const updateMiscSaveMod = miscMod => ({
  type: "UPDATE_MISC_SAVE_MOD",
  payload: miscMod
});
export const updateTempSaveMod = tempMod =>({
  type: "UPDATE_TEMP_SAVE_MODIFIER",
  payload: tempMod
});
