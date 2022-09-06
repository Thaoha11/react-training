// action
const PRODUCT_ITEM = {
  ADD: "add_product",
  DELETE: "delete_product",
  SEARCH: "search_product",
  UPDATE: "update_product",
  FILTER: "filter_product",
};
//option values
const OPTION_BRAND = [
  { value: "nike", text: "Nike" },
  { value: "adidas", text: "Adidas" },
  { value: "mlb", text: "MLB" },
  { value: "pero", text: "Pero" },
];
const KEY = "listProduct";
// get from localStorage
const listProduct = JSON.parse(localStorage.getItem(KEY)) || [];

export { PRODUCT_ITEM, OPTION_BRAND, listProduct, KEY };
