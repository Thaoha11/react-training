import { KEY } from "../constants/constants";
export const saveLocalStorage = (value) => {
  localStorage.setItem(KEY, JSON.stringify(value));
};
