import {
  UPDATE_ARMOR_BONUS,
  UPDATE_SHIELD_BONUS,
  UPDATE_SIZE_MODIFIER,
  UPDATE_NATURAL_ARMOR,
  UPDATE_DEFLECTION_MODIFIER,
  UPDATE_ARMOR_MISC_MODIFIER,
  UPDATE_TOUCH_ARMOR_CLASS,
  UPDATE_FLAT_FOOTED_ARMOR_CLASS,
  UPDATE_AC_MODIFIERS_FIELD,
} from "../constants/actionTypes"; 

export const updateArmorBonus = armorBonus => ({
  type: UPDATE_ARMOR_BONUS,
  payload: armorBonus
});
export const updateShieldBonus = shieldBonus => ({
  type: UPDATE_SHIELD_BONUS,
  payload: shieldBonus
});
export const updateSizeModifier = sizeMod => ({
  type: UPDATE_SIZE_MODIFIER,
  payload: sizeMod
});
export const updateNaturalArmor = naturalArmor => ({
  type: UPDATE_NATURAL_ARMOR,
  payload: naturalArmor
});
export const updateDeflectionModifier = deflectionModifier => ({
  type: UPDATE_DEFLECTION_MODIFIER,
  payload: deflectionModifier
});
export const updateArmorMiscModifier = armorMiscMofidier => ({
  type: UPDATE_ARMOR_MISC_MODIFIER,
  payload: armorMiscMofidier
});
export const updateTouchArmorClass = touchArmorClass => ({
  type: UPDATE_TOUCH_ARMOR_CLASS,
  payload: touchArmorClass
});
export const updateFlatFootedArmorClass = flatFootedArmorClass => ({
  type: UPDATE_FLAT_FOOTED_ARMOR_CLASS,
  payload: flatFootedArmorClass
});
export const updateAcModifiersField = acModifiersField =>({
  type: UPDATE_AC_MODIFIERS_FIELD,
  payload: acModifiersField
})