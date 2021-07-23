import { types } from "../types/types";

export const login = (uid, displayname) => {
  return {
    type: types.login,
    payload: { uid, displayname },
  };
};

export const logout = () => {
  return {
    type: types.logout,
  }
}