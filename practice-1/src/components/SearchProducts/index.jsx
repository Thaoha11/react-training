import { useState } from "react";
import { InputWrapper, SearchInput, SearchButton } from "./styles";

const SearchProducts = ({ onSearch }) => {
  const [inputs, setInputs] = useState("");

  const handleChange = (e) => {
    setInputs(() => e.target.value);
  };

  return (
    <InputWrapper>
      <SearchInput type="text" placeholder="Search" onChange={handleChange} />
      <SearchButton
        onClick={() => {
          onSearch(inputs);
        }}
      >
        <i className="fas fa-search"></i>
      </SearchButton>
    </InputWrapper>
  );
};

export default SearchProducts;
