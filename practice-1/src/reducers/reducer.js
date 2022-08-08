import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  SEARCH_PRODUCT,
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
        products: state.products.splice(action.payload, 1),
      };
    }
    case UPDATE_PRODUCT: {
      return {};
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
    default:
      throw new Error("Invalid action");
  }
}

export { initState };
export default reducer;
