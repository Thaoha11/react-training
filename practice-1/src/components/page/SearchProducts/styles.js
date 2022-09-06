import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;
const SearchInput = styled.input`
  width: 206px;
  height: 34px;
  border-radius: 7px;
  border: none;
  padding-inline-start: 12px;
`;
const SearchButton = styled.button`
  background: bottom;
  border: none;
  cursor: pointer;
  font-size: 22px;
  position: absolute;
  top: 5px;
`;
export { InputWrapper, SearchInput, SearchButton };
