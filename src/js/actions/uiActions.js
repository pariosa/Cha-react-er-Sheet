import {
TOGGLE_LOGIN_MODAL,
TOGGLE_REGISTER_MODAL,
TOGGLE_SIDE_DRAWER,
TOGGLE_DARK_MODE
} from "../constants/actionTypes"; 

export const toggleLoginModal = bool => ({
  type: TOGGLE_LOGIN_MODAL,
  payload: bool
});
export const toggleRegisterModal = bool => ({
  type: TOGGLE_REGISTER_MODAL,
  payload: bool
});
export const toggleSideDrawer = bool => ({
  type: TOGGLE_SIDE_DRAWER,
  payload: bool
});
export const toggleDarkMode = bool => ({
  type: TOGGLE_DARK_MODE,
  payload: bool
});