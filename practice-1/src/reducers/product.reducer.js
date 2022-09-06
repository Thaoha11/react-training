import { PRODUCT_ITEM, listProduct } from "../constants/constants";
import { saveLocalStorage } from "../utils/helper";
// init state
const initState = {
  products: listProduct,
  filteredList: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case PRODUCT_ITEM.ADD: {
      const products = [...state.products, action.inputs];
      // save data to localStorage
      saveLocalStorage(products);
      return {
        ...state,
        products: products,
      };
    }

    case PRODUCT_ITEM.DELETE: {
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

    case PRODUCT_ITEM.UPDATE: {
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

    case PRODUCT_ITEM.SEARCH: {
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

    case PRODUCT_ITEM.FILTER: {
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

export { initState, reducer };
