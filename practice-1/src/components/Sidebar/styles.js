import styled from "styled-components";

const LeftSidebar = styled.div`
  display: flex;
  flex-direction: column;
`;
const BrandTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0 auto 30px;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  z-index: 3;
  :before {
    content: " ";
    position: absolute;
    background: rgba(0, 0, 0, 0.42);
    bottom: 8px;
    width: 48px;
    height: 2px;
    z-index: -1;
    left: 70%;
    margin-left: -100px;
  }

  :after {
    content: " ";
    position: absolute;
    border: 1px solid rgba(0, 0, 0, 0.42);
    bottom: 8px;
    left: 70px;
    width: 100%;
    height: 0;
    z-index: -2;
  }
`;
const BrandName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Inter";
  width: 126px;
  height: 125px;
  background: rgba(91, 196, 255, 0.13);
  border-radius: 5px;
`;

const CheckBox = styled.input`
  border-radius: 5px;
`;
const Label = styled.label`
  font-size: 15px;
  width: 120px;
  border-radius: 5px;
  text-transform: uppercase;
  padding-top: 9px;
  padding-left: 26px;
`;
export { LeftSidebar, BrandTitle, BrandName, CheckBox, Label };
