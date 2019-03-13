import {
TOGGLE_LOGIN_MODAL,
TOGGLE_REGISTER_MODAL
} from "../constants/actionTypes"; 

export const toggleLoginModal = bool => ({
  type: "TOGGLE_LOGIN_MODAL",
  payload: bool
});
export const toggleRegisterModal = bool => ({
  type: "TOGGLE_REGISTER_MODAL",
  payload: bool
});
export const toggleSideDrawer = bool => ({
  type: "TOGGLE_SIDE_DRAWER",
  payload: bool
});