import { ADD_PRODUCT, DELETE_PRODUCT } from "../store/constants";

// get from localStorage
const listProduct = JSON.parse(localStorage.getItem("listProduct")) || [];

const initState = {
  products: listProduct,
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
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    }

    default:
      throw new Error("Invalid action");
  }
}

export { initState };
export default reducer;
