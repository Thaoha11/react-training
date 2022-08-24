import { v4 as uuidv4 } from "uuid";
import { useState, memo } from "react";
import { options } from "../../store/constants";
import {
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
} from "./styles";

const Popup = ({
  onClosePopup,
  text,
  defaultValue = {},
  onSubmit,
  onIsUpdate,
}) => {
  // error message
  const [errors, setErrors] = useState("");

  const [inputs, setInputs] = useState(defaultValue);

  // get value input from DOM form input
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // validate form input
  const validate = () => {
    const msg = {};
    // check inputs empty
    if (!inputs.name) {
      msg.name = "Please enter name";
    }

    if (!inputs.price) {
      msg.price = "Please enter price";
    } else {
      if (Number(inputs.price) < 0) {
        msg.price = "Wrong type of price";
      }
    }

    if (!inputs.brand) {
      msg.brand = "Please enter brand";
    }

    if (!inputs.image) {
      msg.image = "Please enter image";
    }

    setErrors(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    // update products
    if (inputs.id) {
      onIsUpdate(inputs);
      onClosePopup();
    }
    // add products
    else {
      inputs.id = uuidv4();
      onSubmit({ ...inputs });
      onClosePopup();
      setInputs("");
    }
  };

  return (
    <ModalWrapper>
      <Modal>
        <Title> {text}</Title>
        <FormSubmit onSubmit={handleSubmit}>
          <Label>Name</Label>
          <InputProduct
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
          <Errors>{errors.name}</Errors>

          <Label>Price</Label>
          <InputProduct
            type="number"
            name="price"
            value={inputs.price || ""}
            onChange={handleChange}
          />
          <Errors>{errors.price}</Errors>

          <Label>Brand</Label>
          <SelectBrand
            name="brand"
            value={inputs.brand || ""}
            onChange={handleChange}
          >
            {options.map((option) => (
              <ValueOption key={option.value} value={option.value}>
                {option.text}
              </ValueOption>
            ))}
          </SelectBrand>
          <Errors>{errors.brand}</Errors>

          <Label>Image</Label>
          <InputProduct
            name="image"
            value={inputs.image || ""}
            onChange={handleChange}
          />
          <Errors>{errors.image}</Errors>

          <ButtonWrapper>
            <Button save type="submit" value="Submit">
              Save
            </Button>
            <Button type="button" onClick={onClosePopup}>
              Cancel
            </Button>
          </ButtonWrapper>
        </FormSubmit>
      </Modal>
    </ModalWrapper>
  );
};

export default memo(Popup);
