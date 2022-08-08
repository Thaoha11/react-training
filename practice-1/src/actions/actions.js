import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SEARCH_PRODUCT,
  UPDATE_PRODUCT,
} from "../store/constants";

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export const deleteProduct = (payload) => ({
  type: DELETE_PRODUCT,
  payload,
});

export const updateProduct = (payload) => ({
  type: UPDATE_PRODUCT,
  payload,
});

export const searchProduct = (payload) => ({
  type: SEARCH_PRODUCT,
  payload,
});
