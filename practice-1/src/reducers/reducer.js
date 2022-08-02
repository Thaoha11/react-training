import { ADD_PRODUCT, DELETE_PRODUCT } from "../store/constants";

// get from localStorage
const listProduct = JSON.parse(localStorage.getItem("listProduct")) || [];

const initState = {
  products: listProduct,
  product: {
    productId: new Date().getTime().toString(),
    // productName: "",
    // productPrice: "",
    // productBrand: "",
    // productImage: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        ...state.productId,
        products: [...state.products, action.payload],
        product: {
          ...state.product,
        },
      };
    }
    case DELETE_PRODUCT: {
      return {
        ...state,

        // products: state.products.filter(product => product.productId !== action.payload),
        // product: {
        //     ...state.product
        // }
      };
    }
    default:
      throw new Error("Invalid action");
  }
}

export { initState };
export default reducer;
