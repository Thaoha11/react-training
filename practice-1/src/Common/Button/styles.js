import styled from "styled-components";

const CommonButton = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  background: bottom;
  border: none;
  cursor: pointer;
  font-size: 22px;

  &.edit {
    margin-top: 10px;
    background: #dae5d0;
    color: #a3a0c2;
  }

  &.delete {
    margin-top: 10px;
    color: #c36c1c;
  }
`;
export { CommonButton };
