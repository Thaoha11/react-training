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
      const products = [...state.products, action.payload];
      localStorage.setItem("listProduct", JSON.stringify(products));
      return {
        ...state,
        products: products,
      };
    }

    case DELETE_PRODUCT: {
      console.log(action.payload);
      // localStorage.removeItem("listProduct", JSON.stringify(action.payload));
      return {
        ...state,
        // Delete by id
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
      localStorage.setItem("listProduct", JSON.stringify(updatedProducts));
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
              .search(action.payload.toLowerCase().trim()) !== -1
        ),
      };
    }

    case FILTER_PRODUCT: {
      // console.log(state);
      // const a = state.products.filter((item) =>
      //   action.payload.includes(item.brand)
      // );
      // console.log("arr", a);
      return {
        ...state,
        products: state.products.filter((item) =>
          action.payload.includes(item.brand)
        ),
      };
    }

    default:
      throw new Error("Invalid action");
  }
}

export { initState };
export default reducer;
