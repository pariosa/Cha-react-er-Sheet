
import { UPDATE_NAME, UPDATE_ALIGNMENT, UPDATE_CLASS, UPDATE_PLAYERNAME, UPDATE_LEVEL, UPDATE_DIETY, UPDATE_HOMELAND, UPDATE_RACE, UPDATE_SIZE, UPDATE_GENDER, UPDATE_AGE, UPDATE_HEIGHT, UPDATE_HAIR, UPDATE_EYES } from '../constants/actionTypes';

export const updateName = name => ({
	type: "UPDATE_NAME",
	payload: name
});

export const updatePlayerName = playerName => ({
	type: "UPDATE_PLAYER_NAME",
	payload: playerName
});

export const updateAlignment = alignment => ({
	type: "UPDATE_ALIGNMENT",
	payload: alignment
});

export const updatePlayerClass = playerClass => ({
	type: "UPDATE_CLASS",
	payload: playerClass
});

export const updateLevel = level => ({
	type: "UPDATE_LEVEL",
	payload: level
});

export const updateDiety= diety => ({
	type: "UPDATE_DIETY",
	payload: diety
});

export const updateHomeland = homeland => ({
	type: "UPDATE_HOMELAND",
	payload: homeland
});

export const updateRace = race => ({
	type: "UPDATE_RACE",
	payload: race
});

export const updateSize = size => ({
	type: "UPDATE_SIZE",
	payload: size
});

export const updateGender = gender => ({
	type: "UPDATE_GENDER",
	payload: gender
});

export const updateAge = age => ({
	type: "UPDATE_AGE",
	payload: age
});

export const updateHeight = height => ({
	type: "UPDATE_HEIGHT",
	payload: height
});

export const updateWeight = weight => ({
	type: "UPDATE_WEIGHT",
	payload: weight
});

export const updateHair = hair => ({
	type: "UPDATE_HAIR",
	payload: hair
});
export const updateEyes = eyes => ({
	type: "UPDATE_EYES",
	payload: eyes
});
