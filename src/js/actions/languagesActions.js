import {
UPDATE_LANGUAGES,
UPDATE_CONDITIONAL_MODIFIERS
} from "../constants/actionTypes"; 

export const updateLanguages = languages => ({
  type: "UPDATE_LANGUAGES",
  payload: languages
});
export const updateConditionalModifiers = conditionalModifiers => ({
  type: "UPDATE_CONDITIONAL_MODIFIERS",
  payload: conditionalModifiers
});