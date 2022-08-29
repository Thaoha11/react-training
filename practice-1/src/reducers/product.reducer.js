import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  SEARCH_PRODUCT,
  FILTER_PRODUCT,
  listProduct,
} from "../constants/constants";
import { saveLocalStorage } from "../untils/helper";
// init state
const initState = {
  products: listProduct,
  isSearchActive: false,
  filteredList: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const products = [...state.products, action.inputs];
      // save data to localStorage
      saveLocalStorage(products);
      return {
        ...state,
        products: products,
      };
    }

    case DELETE_PRODUCT: {
      // Delete by id
      const filtered = state.products.filter(
        (product) => product.id !== action.id
      );
      saveLocalStorage(filtered);
      return {
        ...state,
        products: filtered,
      };
    }

    case UPDATE_PRODUCT: {
      const updatedProduct = action.item;
      const updatedProducts = state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
      saveLocalStorage(updatedProducts);

      return {
        ...state,
        products: updatedProducts,
      };
    }

    case SEARCH_PRODUCT: {
      return {
        ...state,
        // convert to lowcase
        products: state.products.filter(
          (product) =>
            product.name
              .toLowerCase()
              .search(action.name.toLowerCase().trim()) !== -1
        ),
      };
    }

    case FILTER_PRODUCT: {
      const listChecked = action.brand;
      // check includes brand is true,then filter items
      const filterList = state.products.filter((item) =>
        listChecked.includes(item.brand)
      );

      return {
        ...state,
        filteredList: filterList,
      };
    }

    default:
      return state;
  }
};

export { initState };
export default reducer;
