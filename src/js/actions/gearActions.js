import { 
UPDATE_GEAR_NAME,
UPDATE_GEAR_WEIGHT,
UPDATE_LIGHT_LOAD,
UPDATE_MEDIUM_LOAD,
UPDATE_HEAVY_LOAD,
UPDATE_LIFT_OVER_HEAD,
UPDATE_LIFT_OFF_GROUND,
UPDATE_DRAG_OR_PUSH,
ADD_GEAR,
REMOVE_GEAR,
} from "../constants/actionTypes";

export const updateGearName = name =>({
	type:UPDATE_GEAR_NAME,
	payload:name
});

export const updateGearWeight = weight => ({
	type:UPDATE_GEAR_WEIGHT,
	payload:weight
});

export const updateLightLoad = load => ({
	type:UPDATE_LIGHT_LOAD,
	payload:load
});

export const updateMediumLoad = load => ({
	type:UPDATE_MEDIUM_LOAD,
	payload:load
});

export const updateHeavyLoad = load => ({
	type:UPDATE_HEAVY_LOAD,
	payload:load
});

export const updateLiftOverHead = load => ({
	type:UPDATE_LIFT_OVER_HEAD,
	payload:load
});

export const updateLiftOffGround = load => ({
	type:UPDATE_LIFT_OFF_GROUND,
	payload:load
});

export const updateDragOrPush = load => ({
	type:UPDATE_DRAG_OR_PUSH,
	payload:load
});

export const addGear = gear =>({
	type:ADD_GEAR,
	payload:gear
});

export const removeGear = gear => ({
	type:REMOVE_GEAR,
	payload:gear
});