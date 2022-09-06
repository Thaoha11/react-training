import { PRODUCT_ITEM } from "../constants/constants";

const addProduct = (inputs) => ({
  type: PRODUCT_ITEM.ADD,
  inputs,
});

const deleteProduct = (id) => ({
  type: PRODUCT_ITEM.DELETE,
  id,
});

const updateProduct = (item) => ({
  type: PRODUCT_ITEM.UPDATE,
  item,
});

const searchProduct = (name) => ({
  type: PRODUCT_ITEM.SEARCH,
  name,
});
const filterProduct = (brand) => ({
  type: PRODUCT_ITEM.FILTER,
  brand,
});

export {
  addProduct,
  deleteProduct,
  updateProduct,
  searchProduct,
  filterProduct,
};
