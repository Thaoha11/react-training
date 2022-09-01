import { useContext } from "react";
import { useState } from "react";
import { StoreContext } from "../../../store";
import { InputWrapper, SearchInput, SearchButton } from "./styles";

const SearchProducts = () => {
  const [inputs, setInputs] = useState("");
  const { searchProduct } = useContext(StoreContext);

  const handleChange = (e) => {
    setInputs(() => e.target.value);
  };

  return (
    <InputWrapper>
      <SearchInput type="text" placeholder="Search" onChange={handleChange} />
      <SearchButton
        onClick={() => {
          searchProduct(inputs);
        }}
      >
        <i className="fas fa-search"></i>
      </SearchButton>
    </InputWrapper>
  );
};

export default SearchProducts;
