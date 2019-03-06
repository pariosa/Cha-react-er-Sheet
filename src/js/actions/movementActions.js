import{ 
  UPDATE_BASE_SPEED,
  UPDATE_BASE_SPEED_ARMORED,
  UPDATE_BASE_SPEED_SQ,
  UPDATE_BASE_SPEED_ARMORED_SQ,
  UPDATE_FLY_SPEED,
  UPDATE_FLY_MANEUVERABILITY,
  UPDATE_SWIM_SPEED,
  UPDATE_CLIMB_SPEED,
  UPDATE_BURROW_SPEED,
} from "../constants/actionTypes"; 
export const updateBaseSpeed = baseSpeed =>({
  type: "UPDATE_BASE_SPEED",
  payload: baseSpeed
});
export const updateBaseSpeedArmored = baseSpeedArmored =>({
  type: "UPDATE_BASE_SPEED_ARMORED",
  payload: baseSpeedArmored
});
export const updateBaseSpeedSq = baseSpeedSq =>({
  type: "UPDATE_BASE_SPEED_SQ",
  payload: baseSpeedSq
});
export const updateBaseSpeedArmoredSq = baseSpeedArmoredSq =>({
  type: "UPDATE_BASE_SPEED_ARMORED_SQ",
  payload: baseSpeedArmoredSq
});
export const updateFlySpeed = flySpeed =>({
  type: "UPDATE_FLY_SPEED",
  payload: flySpeed
});
export const updateFlyManeuverability = flyManeuverability =>({
  type: "UPDATE_FLY_MANEUVERABILITY",
  payload: flyManeuverability
});
export const updateSwimSpeed = swimSpeed =>({
  type: "UPDATE_SWIM_SPEED",
  payload: swimSpeed
});
export const updateClimbSpeed = climbSpeed =>({
  type: "UPDATE_CLIMB_SPEED",
  payload: climbSpeed
});
export const updateBurrowSpeed = burrowSpeed =>({
  type: "UPDATE_BURROW_SPEED",
  payload: burrowSpeed
});
export const updateSpeedTempMod = speedTempMod =>({
  type: "UPDATE_SPEED_TEMP_MOD",
  payload:speedTempMod 
})