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

const initialState = {
  armorBonus:"",
  shieldBonus:"",
  sizeModifier:"",
  naturalArmor:"",
  deflectionModifier:"",
  armorMiscModifier:"",
  touchArmorClass:"",
  flatFootedArmorClass:"",
  acModifiersField:""
}
const armorReducer = (state = initialState, action) => { 
  switch (action.type) {  
    default:
      return state;
  }
}
export default armorReducer;