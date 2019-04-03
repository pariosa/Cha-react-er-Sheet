import {
	UPDATE_SPELL,
	ADD_SPELL,
	REMOVE_SPELL
} from "../../js/constants/actionTypes"

export const updateSpell = spell =>({
	type:UPDATE_SPELL,
	payload:spell
})

export const addSpell = spell =>({
	type:ADD_SPELL,
	payload:spell
})

export const removeSpell = spell =>({
	type:REMOVE_SPELL,
	payload:spell
})
