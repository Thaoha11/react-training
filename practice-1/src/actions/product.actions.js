import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SEARCH_PRODUCT,
  UPDATE_PRODUCT,
  FILTER_PRODUCT,
} from "../constants/constants";

const addProduct = (inputs) => ({
  type: ADD_PRODUCT,
  inputs,
});

const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  id,
});

const updateProduct = (item) => ({
  type: UPDATE_PRODUCT,
  item,
});

const searchProduct = (name) => ({
  type: SEARCH_PRODUCT,
  name,
});
const filterProduct = (brand) => ({
  type: FILTER_PRODUCT,
  brand,
});

export {
  addProduct,
  deleteProduct,
  updateProduct,
  searchProduct,
  filterProduct,
};
