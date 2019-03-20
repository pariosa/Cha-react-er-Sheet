import {
  UPDATE_MAX_HP,
  UPDATE_CURRENT_HP,
  UPDATE_NONLETHAL,
  UPDATE_INITIATIVE_MOD,
  UPDATE_DR
} from "../constants/actionTypes";

export const updateMaxHp = maxHp => ({
  type: UPDATE_MAX_HP,
  payload: maxHp
});

export const updateCurrentHp = currentHp => ({
  type: UPDATE_CURRENT_HP,
  payload: currentHp
});

export const updateNonLethal = nonLethal => ({
  type: UPDATE_NONLETHAL,
  payload: nonLethal
});
export const updateDr = dr => ({
  type: UPDATE_DR,
  payload: dr
});

export const updateInitiativeMod = intitiativeMod => ({
  type: UPDATE_INITIATIVE_MOD,
  payload: intitiativeMod
});
