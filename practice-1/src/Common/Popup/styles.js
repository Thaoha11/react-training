import styled from "styled-components";

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  height: 1000px;
  width: 100%;
  z-index: 10;
  right: 1px;
  top: 2px;
`;
const Modal = styled.div`
  position: absolute;
  width: 518px;
  height: 551px;

  background: #83bdc9;
  font-family: "Inter";
  z-index: 39;
  border-radius: 20px;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Title = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 36px;
`;
const FormSubmit = styled.form`
  margin-left: 35px;
`;
const Label = styled.p`
  font-size: 16px;
`;
const InputProduct = styled.input`
  width: 427px;
  height: 30px;
  border-radius: 5px;
  border: none;
`;

const SelectBrand = styled.select`
  width: 150px;
  height: 30px;
  border-radius: 5px;
`;

const ValueOption = styled.option``;
const Errors = styled.p`
  color: #d27016;
  text-align: center;
  line-height: 8px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 33px;
`;
const Button = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;
  border: none;
  font-family: "Inter";
  font-size: 16px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.save ? "rgba(2, 88, 255, 0.54)" : "#CCCCCC"};
`;
export {
  ModalWrapper,
  Modal,
  Title,
  FormSubmit,
  Label,
  InputProduct,
  SelectBrand,
  ValueOption,
  Errors,
  ButtonWrapper,
  Button,
};
