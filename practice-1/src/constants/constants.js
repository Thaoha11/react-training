// action
const ADD_PRODUCT = "add_product";
const DELETE_PRODUCT = "delete_product";
const SEARCH_PRODUCT = "search_product";
const UPDATE_PRODUCT = "update_product";
const FILTER_PRODUCT = "filter_product";
//option values
const options = [
  { value: "", text: "--Choose an option--" },
  { value: "nike", text: "Nike" },
  { value: "adidas", text: "Adidas" },
  { value: "mlb", text: "MLB" },
  { value: "pero", text: "Pero" },
];
const KEY = "listProduct";
// get from localStorage
const listProduct = JSON.parse(localStorage.getItem(KEY)) || [];

export {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SEARCH_PRODUCT,
  UPDATE_PRODUCT,
  FILTER_PRODUCT,
  options,
  listProduct,
  KEY,
};
