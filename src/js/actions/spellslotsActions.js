import {
  UPDATE_SPELLS_KNOWN, 
  UPDATE_SPELL_SAVE_DC,
  UPDATE_SPELLS_PER_DAY,
  UPDATE_BONUS_SPELLS,
} from "../constants/actionTypes";

export const updateSpellsKnown = count => ({
	type:UPDATE_SPELLS_KNOWN
})

export const updateSpellDc = count => ({
	type:UPDATE_SPELL_SAVE_DC
})

export const updateSpellsPerDay = count => ({
	type:UPDATE_SPELLS_PER_DAY
})

export const updateBonusSpells = count => ({
	type:UPDATE_BONUS_SPELLS
})
