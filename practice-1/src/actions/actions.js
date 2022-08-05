import { ADD_PRODUCT, DELETE_PRODUCT } from "../store/constants";

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export const deleteProduct = (payload) => ({
  type: DELETE_PRODUCT,
  payload,
});
