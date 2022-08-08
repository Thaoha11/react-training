import { useContext, useState } from "react";
import { StoreContext } from "../../store";
import { InputWrapper, SearchInput, SearchButton } from "./styles";

function SearchProducts() {
  const { searchProduct } = useContext(StoreContext);
  const [inputs, setInputs] = useState("");
  const handleChange = (e) => {
    setInputs(() => e.target.value);
  };
  const handleSearch = () => {
    searchProduct(inputs);
  };
  return (
    <InputWrapper>
      <SearchInput type="text" placeholder="Search" onChange={handleChange} />
      <SearchButton onClick={handleSearch}>
        <i className="fas fa-search"></i>
      </SearchButton>
    </InputWrapper>
  );
}
export default SearchProducts;
