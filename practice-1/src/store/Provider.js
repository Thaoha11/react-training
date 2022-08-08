import { useReducer } from "react";
import Context from "./Context";
import reducer, { initState } from "../reducers/reducer";
import { actions } from ".";

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  const value = {
    products: state.products,
    addProduct: ({ ...product }) => {
      dispatch(actions.addProduct(product));
    },
    deleteProduct: (index) => {
      dispatch(actions.deleteProduct(index));
    },
    updateProduct: (product) => {
      dispatch(actions.updateProduct(product));
    },
    searchProduct: (product) => {
      dispatch(actions.searchProduct(product));
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
