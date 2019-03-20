import {
  UPDATE_ACITEM_NAME,
  UPDATE_ACITEM_BONUS,
  UPDATE_ACITEM_TYPE,
  UPDATE_ACITEM_CHECK_PENALTY,
  UPDATE_ACITEM_SPELL_FAILURE,
  UPDATE_ACITEM_WEIGHT,
  UPDATE_ACITEM_PROPERTIES,
  ADD_ACITEM,
  REMOVE_ACITEM
} from "../constants/actionTypes"; 

export const updateAcItemName = name => ({
  type:UPDATE_ACITEM_NAME,
  payload:name
})
export const updateAcItemBonus = bonus => ({
  type:UPDATE_ACITEM_BONUS,
  payload:bonus
})
export const updateAcItemType = type => ({
  type:UPDATE_ACITEM_TYPE,
  payload:type
})
export const updateAcItemCheckPenalty = checkPenalty => ({
  type:UPDATE_ACITEM_CHECK_PENALTY,
  payload:checkPenalty
})
export const updateAcItemSpellFailure = failure  => ({
  type:UPDATE_ACITEM_SPELL_FAILURE,
  payload:failure
})
export const updateAcItemWeight = weight => ({
  type:UPDATE_ACITEM_WEIGHT,
  payload:weight
})
export const updateAcItemProperties = properties => ({
  type:UPDATE_ACITEM_PROPERTIES,
  payload:properties
})
export const addAcItem = item => ({
  type:ADD_ACITEM,
  payload:item
})
export const removeAcItem = item => ({
  type:REMOVE_ACITEM,
  payload:item
})