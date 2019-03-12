import {
LOGIN,
REGISTER,
LOGOUT
} from "../constants/actionTypes";

export const login = user => ({
  type: "LOGIN",
  payload: user
});

export const register = user => ({
  type: "REGISTER",
  payload: user
});

export const logout = user => ({
  type: "LOGOUT",
  payload: user
});
