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
  LOAD_ENTIRE_CHARACTER,
  NEW_CHARACTER
} from "../constants/actionTypes";

const initialState = {
  armorBonus:"0",
  shieldBonus:"0",
  sizeModifier:"0",
  naturalArmor:"0",
  deflectionModifier:"0",
  armorMiscModifier:"0",
  touchArmorClass:"0",
  flatFootedArmorClass:"0",
  acModifiersField:"none"
}
const armorReducer = (state = initialState, action) => {  
  switch (action.type) {  
    case UPDATE_ARMOR_BONUS:
      return {...state, armorBonus: action.payload.target.value}
    case UPDATE_SHIELD_BONUS: 
      return {...state, shieldBonus: action.payload.target.value}
    case UPDATE_SIZE_MODIFIER:
      return {...state, sizeModifier: action.payload.target.value}
    case UPDATE_NATURAL_ARMOR:
      return {...state, naturalArmor: action.payload.target.value}
    case UPDATE_DEFLECTION_MODIFIER:
      return {...state, deflectionModifier: action.payload.target.value}
    case UPDATE_ARMOR_MISC_MODIFIER:
      return {...state, armorMiscModifier: action.payload.target.value}
    case UPDATE_TOUCH_ARMOR_CLASS:
      return {...state, touchArmorClass: action.payload.target.value}
    case UPDATE_FLAT_FOOTED_ARMOR_CLASS:
      return {...state, flatFootedArmorClass: action.payload.target.value}
    case UPDATE_AC_MODIFIERS_FIELD:
      return {...state, acModifiersField: action.payload.target.value} 
    case  LOAD_ENTIRE_CHARACTER:
      return {... action.payload.armor}
    case NEW_CHARACTER:
      return initialState;
    default:
      return state;
  }
}
export default armorReducer;