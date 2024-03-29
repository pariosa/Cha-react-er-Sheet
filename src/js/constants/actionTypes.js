// character actions
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_ALIGNMENT = "UPDATE_ALIGNMENT";
export const UPDATE_PLAYER_NAME = "UPDATE_PLAYER_NAME";
export const UPDATE_CLASS = "UPDATE_CLASS";
export const UPDATE_LEVEL = "UPDATE_LEVEL";
export const UPDATE_DIETY = "UPDATE_DIETY";
export const UPDATE_HOMELAND = "UPDATE_HOMELAND";
export const UPDATE_RACE = "UPDATE_RACE";
export const UPDATE_SIZE = "UPDATE_SIZE";
export const UPDATE_GENDER = "UPDATE_GENDER";
export const UPDATE_AGE = "UPDATE_AGE";
export const UPDATE_HEIGHT = "UPDATE_HEIGHT";
export const UPDATE_WEIGHT = "UPDATE_WEIGHT";
export const UPDATE_HAIR = "UPDATE_HAIR";
export const UPDATE_EYES = "UPDATE_EYES";

// health point actions
export const UPDATE_MAX_HP = "UPDATE_MAX_HP";
export const UPDATE_CURRENT_HP = "UPDATE_CURRENT_HP";
export const UPDATE_NONLETHAL = "UPDATE_NONLETHAL";
export const UPDATE_INITIATIVE_MOD = "UPDATE_INITIATIVE_MOD";
export const UPDATE_DR = "UPDATE_DR";

// stat point actions
export const UPDATE_STAT = "UPDATE_STAT"
export const UPDATE_TEMP_STAT = "UPDATE_TEMP_STAT";

// skill actions
export const UPDATE_SKILL_RANK = "UPDATE_SKILL_RANK";
export const UPDATE_SKILL_DESCRIPTION = "UPDATE_SKILL_DESCRIPTION";
export const UPDATE_SKILL_MISC_MOD = "UPDATE_SKILL_MISC_MOD";
export const UPDATE_SKILL_IS_CLASS = "UPDATE_SKILL_IS_CLASS";

// movement actions
export const UPDATE_BASE_SPEED = "UPDATE_BASE_SPEED";
export const UPDATE_BASE_SPEED_ARMORED = "UPDATE_BASE_SPEED_ARMORED";
export const UPDATE_BASE_SPEED_SQ = "UPDATE_BASE_SPEED_SQ";
export const UPDATE_BASE_SPEED_ARMORED_SQ = "UPDATE_BASE_SPEED_ARMORED_SQ";
export const UPDATE_FLY_SPEED = "UPDATE_FLY_SPEED";
export const UPDATE_FLY_MANEUVERABILITY = "UPDATE_FLY_MANEUVERABILITY";
export const UPDATE_SWIM_SPEED = "UPDATE_SWIM_SPEED";
export const UPDATE_CLIMB_SPEED = "UPDATE_CLIMB_SPEED";
export const UPDATE_BURROW_SPEED = "UPDATE_BURROW_SPEED";
export const UPDATE_SPEED_TEMP_MOD = "UPDATE_SPEED_TEMP_MOD";

// armor class actions
export const UPDATE_ARMOR_BONUS = "UPDATE_ARMOR_BONUS";
export const UPDATE_SHIELD_BONUS = "UPDATE_SHIELD_BONUS";
export const UPDATE_SIZE_MODIFIER = "UPDATE_SIZE_MODIFIER";
export const UPDATE_NATURAL_ARMOR = "UPDATE_NATURAL_ARMOR";
export const UPDATE_DEFLECTION_MODIFIER = "UPDATE_DEFLECTION_MODIFIER";
export const UPDATE_ARMOR_MISC_MODIFIER = "UPDATE_ARMOR_MISC_MODIFIER";
export const UPDATE_TOUCH_ARMOR_CLASS = "UPDATE_TOUCH_ARMOR_CLASS";
export const UPDATE_FLAT_FOOTED_ARMOR_CLASS = "UPDATE_FLAT_FOOTED_ARMOR_CLASS";
export const UPDATE_AC_MODIFIERS_FIELD = "UPDATE_AC_MODIFIERS_FIELD";

// saves actions
export const UPDATE_BASE_SAVE = "UPDATE_BASE_SAVE";
export const UPDATE_MAGIC_SAVE_MODIFIER = "UPDATE_MAGIC_SAVE_MODIFIER";
export const UPDATE_MISC_SAVE_MODIFIER = "UPDATE_MISC_SAVE_MODIFIER";
export const UPDATE_TEMP_SAVE_MODIFIER = "UPDATE_TEMP_SAVE_MODIFIER";

// base attack bonus actions
export const UPDATE_BASE_ATTACK_BONUS = "UPDATE_BASE_ATTACK_BONUS";
export const UPDATE_SPELL_RESISTANCE = "UPDATE_SPELL_RESISTANCE";

// combat manuever bonus/defense
export const UPDATE_CMB_SIZE_MODIFIER = "UPDATE_CMB_SIZE_MODIFIER";
export const UPDATE_CMB_MODIFIERS_FIELD = "UPDATE_CMB_MODIFIERS_FIELD";
export const UPDATE_CMD_SIZE_MODIFIER = "UPDATE_CMD_SIZE_MODIFIER";

// Weapon actions
export const UPDATE_WEAPON_NAME = "UPDATE_WEAPON_NAME";
export const UPDATE_WEAPON_ATTACK_BONUS = "UPDATE_WEAPON_ATTACK_BONUS";
export const UPDATE_WEAPON_CRITICAL = "UPDATE_WEAPON_CRITICAL";
export const UPDATE_WEAPON_TYPE = "UPDATE_WEAPON_TYPE";
export const UPDATE_WEAPON_RANGE = "UPDATE_WEAPON_RANGE";
export const UPDATE_WEAPON_AMMUNITION = "UPDATE_WEAPON_AMMUNITION";
export const UPDATE_WEAPON_DAMAGE = "UPDATE_WEAPON_DAMAGE";
export const ADD_WEAPON = "ADD_WEAPON";
export const REMOVE_WEAPON = "REMOVE_WEAPON";

// Login actions
export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// UI actions 
export const TOGGLE_LOGIN_MODAL = "TOGGLE_LOGIN_MODAL";
export const TOGGLE_REGISTER_MODAL = "TOGGLE_REGISTER_MODAL";
export const TOGGLE_SIDE_DRAWER = "TOGGLE_SIDE_DRAWER";
export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";

// save/load actions 
export const LOAD_CHARACTER_SUCCESS = "LOAD_CHARACTER_SUCCESS";
export const SAVE_CHARACTER_SUCCESS = "SAVE_CHARACTER_SUCCESS";
export const LOAD_ENTIRE_CHARACTER = "LOAD_ENTIRE_CHARACTER"; 

// languages actions 
export const UPDATE_CONDITIONAL_MODIFIERS = "UPDATE_CONDITIONAL_MODIFIERS";
export const UPDATE_LANGUAGES = "UPDATE_LANGUAGES";

// AC Items actions 
export const UPDATE_ACITEM_NAME = "UPDATE_ACITEM_NAME";
export const UPDATE_ACITEM_BONUS = "UPDATE_ACITEM_BONUS";
export const UPDATE_ACITEM_TYPE = "UPDATE_ACITEM_TYPE";
export const UPDATE_ACITEM_CHECK_PENALTY = "UPDATE_ACITEM_CHECK_PENALTY";
export const UPDATE_ACITEM_SPELL_FAILURE = "UPDATE_ACITEM_SPELL_FAILURE";
export const UPDATE_ACITEM_WEIGHT = "UPDATE_ACITEM_WEIGHT";
export const UPDATE_ACITEM_PROPERTIES = "UPDATE_ACITEM_PROPERTIES";
export const ADD_ACITEM = "ADD_ACITEM";
export const REMOVE_ACITEM = "REMOVE_ACITEM";

// Gear Actions 
export const UPDATE_GEAR_NAME = "UPDATE_GEAR_NAME";
export const UPDATE_GEAR_WEIGHT = "UPDATE_GEAR_WEIGHT";
export const UPDATE_LIGHT_LOAD = "UPDATE_LIGHT_LOAD";
export const UPDATE_MEDIUM_LOAD = "UPDATE_MEDIUM_LOAD";
export const UPDATE_GEAR_CHARGES = "UPDATE_GEAR_CHARGES";
export const UPDATE_HEAVY_LOAD = "UPDATE_HEAVY_LOAD";
export const UPDATE_LIFT_OVER_HEAD = "UPDATE_LIFT_OVER_HEAD";
export const UPDATE_LIFT_OFF_GROUND = "UPDATE_LIFT_OFF_GROUND";
export const UPDATE_DRAG_OR_PUSH = "UPDATE_DRAG_OR_PUSH";
export const ADD_GEAR = "ADD_GEAR";
export const REMOVE_GEAR = "REMOVE_GEAR";

// Feats actions 
export const UPDATE_FEAT = "UPDATE_FEAT";
export const ADD_FEAT = "ADD_FEAT";
export const REMOVE_FEAT = "REMOVE_FEAT";

// Currency actions
export const UPDATE_CP = "UPDATE_CP";
export const UPDATE_SP = "UPDATE_SP";
export const UPDATE_GP = "UPDATE_GP";
export const UPDATE_PP = "UPDATE_PP";

// Ability actions
export const UPDATE_ABILITY = "UPDATE_ABILITY";
export const ADD_ABILITY = "ADD_ABILITY";
export const REMOVE_ABILITY = "REMOVE_ABILITY";

// Exp actions
export const UPDATE_EXP = "UPDATE_EXP";
export const UPDATE_EXP_MAX = "UPDATE_EXP_MAX";

// Spells actions
export const ADD_SPELL = "ADD_SPELL";
export const UPDATE_SPELL = "UPDATE_SPELL";
export const REMOVE_SPELL = "REMOVE_SPELL";

// Spellslots Actions 
export const UPDATE_SPELLS_KNOWN = "UPDATE_SPELLS_KNOWN";
export const UPDATE_SPELL_SAVE_DC = "UPDATE_SPELL_SAVE_DC";
export const UPDATE_SPELLS_PER_DAY = "UPDATE_SPELLS_PER_DAY";
export const UPDATE_BONUS_SPELLS = "UPDATE_BONUS_SPELLS";

export const GET_CHARACTERS = 'GET_CHARACTERS'

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const LOGIN_ERROR = "LOGIN_ERROR"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const NEW_CHARACTER = "NEW_CHARACTER";

// notes actions 
export const UPDATE_NOTES = "UPDATE_NOTES";
export const RESET_SAVE_BUTTON = "RESET_SAVE_BUTTON";