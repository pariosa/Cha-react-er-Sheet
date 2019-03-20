import {
UPDATE_WEAPON_NAME,
UPDATE_WEAPON_ATTACK_BONUS,
UPDATE_WEAPON_CRITICAL,
UPDATE_WEAPON_TYPE,
UPDATE_WEAPON_RANGE,
UPDATE_WEAPON_AMMUNITION,
UPDATE_WEAPON_DAMAGE,
ADD_WEAPON,
REMOVE_WEAPON,
} from "../constants/actionTypes";

export const updateWeaponName = name => ({
  type: UPDATE_WEAPON_NAME,
  payload:name
})
export const updateWeaponAttackBonus = bonus => ({
  type: UPDATE_WEAPON_ATTACK_BONUS,
  payload:bonus
})
export const updateWeaponCritical = critical => ({
  type: UPDATE_WEAPON_CRITICAL,
  payload:critical
})
export const updateWeaponType = type => ({
  type: UPDATE_WEAPON_TYPE,
  payload:type
})
export const updateWeaponRange = range => ({
  type: UPDATE_WEAPON_RANGE,
  payload:range
})
export const updateWeaponAmmunition = ammunition => ({
  type: UPDATE_WEAPON_AMMUNITION,
  payload:ammunition
})
export const updateWeaponDamage = damage => ({
  type: UPDATE_WEAPON_DAMAGE,
  payload:damage
})
export const addWeapon = weapon => ({
  type: ADD_WEAPON,
  payload:weapon
})
export const removeWeapon = weapon => ({
  type: REMOVE_WEAPON,
  payload:weapon
})