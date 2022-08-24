import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SEARCH_PRODUCT,
  UPDATE_PRODUCT,
  FILTER_PRODUCT,
} from "../store/constants";

const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

const deleteProduct = (payload) => ({
  type: DELETE_PRODUCT,
  payload,
});

const updateProduct = (payload) => ({
  type: UPDATE_PRODUCT,
  payload,
});

const searchProduct = (payload) => ({
  type: SEARCH_PRODUCT,
  payload,
});
const filterProduct = (payload) => ({
  type: FILTER_PRODUCT,
  payload,
});

export {
  addProduct,
  deleteProduct,
  updateProduct,
  searchProduct,
  filterProduct,
};
