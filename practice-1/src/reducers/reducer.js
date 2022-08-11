import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  SEARCH_PRODUCT,
  FILTER_PRODUCT,
} from "../store/constants";

// get from localStorage
const listProduct = JSON.parse(localStorage.getItem("listProduct")) || [];

const initState = {
  products: listProduct,
  isSearchActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      // save to localStorage
      localStorage.setItem("listProduct", JSON.stringify([...state.products]));
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    }

    case DELETE_PRODUCT: {
      return {
        ...state,
        // Delete by productId
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    }

    case UPDATE_PRODUCT: {
      const updatedProduct = action.payload;

      const updatedProducts = state.products.map((product) => {
        if (product.id === updatedProduct.id) {
          return updatedProduct;
        }
        return product;
      });

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
            product.name.toLowerCase().search(action.payload.toLowerCase()) !==
            -1
        ),
      };
    }

    case FILTER_PRODUCT: {
      return {
        ...state,
        products: state.products.filter(
          (item) => item.brand === action.payload
        ),
      };
    }
    default:
      throw new Error("Invalid action");
  }
}

export { initState };
export default reducer;
