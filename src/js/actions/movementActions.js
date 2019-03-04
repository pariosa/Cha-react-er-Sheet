import{ 
  UPDATE_BASE_SPEED,
  UPDATE_BASE_SPEED_ARMORED,
  UPDATE_FLY_SPEED,
  UPDATE_FLY_MANEUVERABILITY,
  UPDATE_SWIM_SPEED,
  UPDATE_CLIMB_SPEED,
  UPDATE_BURROW_SPEED,
} from "../constants/actionTypes";


export const UpdateBaseSpeed = baseSpeed =>({
  type: "UPDATE_BASE_SPEED",
  payload: baseSpeed
});
export const UpdateBaseSpeedArmored = baseSpeedArmored =>({
  type: "UPDATE_BASE_SPEED_ARMORED",
  payload: baseSpeedArmored
});
export const UpdateFlySpeed = flySpeed =>({
  type: "UPDATE_FLY_SPEED",
  payload: flySpeed
});
export const UpdateFlyManeuverability = flyManeuverability =>({
  type: "UPDATE_FLY_MANEUVERABILITY",
  payload: flyManeuverability
});
export const UpdateSwimSpeed = swimSpeed =>({
  type: "UPDATE_SWIM_SPEED",
  payload: swimSpeed
});
export const UpdateClimbSpeed = climbSpeed =>({
  type: "UPDATE_CLIMB_SPEED",
  payload: climbSpeed
});
export const UpdateBurrowSpeed = burrowSpeed =>({
  type: "UPDATE_BURROW_SPEED",
  payload: burrowSpeed
});