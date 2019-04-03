import {
  UPDATE_SPELLS_KNOWN, 
  UPDATE_SPELL_SAVE_DC,
  UPDATE_SPELLS_PER_DAY,
  UPDATE_BONUS_SPELLS,
} from "../constants/actionTypes";

export const updateSpellsKnown = count => ({
	type:UPDATE_SPELLS_KNOWN,
	payload:count
})

export const updateSpellDc = count => ({
	type:UPDATE_SPELL_SAVE_DC,
	payload:count
})

export const updateSpellsPerDay = count => ({
	type:UPDATE_SPELLS_PER_DAY,
	payload:count
})

export const updateBonusSpells = count => ({
	type:UPDATE_BONUS_SPELLS,
	payload:count
})
