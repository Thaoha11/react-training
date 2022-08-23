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

function Popup({
  onClosePopup,
  text,
  defaultValue = {},
  onSubmit,
  OnIsUpdate,
}) {
  // error message
  const [errors, setErrors] = useState([]);

  const [inputs, setInputs] = useState(defaultValue);

  // get value input from DOM form input
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // validate form
  const validate = () => {
    const errors = {
      errorName: "",
    };

    if (!inputs.name) {
      errors.errorName = "bla bla";
    }

    if (!inputs.price) {
      errors.push("Please enter price");
    } else {
      if (Number(inputs.price) < 0) {
        errors.push("Wrong type of price");
      }
    }

    if (!inputs.brand) {
      errors.push("Please enter brand");
    }

    if (!inputs.image) {
      errors.push("Please enter brand");
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();

    if (errors.length > 0) {
      setErrors(errors);
      return;
    }

    // update products
    if (inputs.id) {
      OnIsUpdate(inputs);
      onClosePopup();
    }
    // add products
    else {
      inputs.id = uuidv4();
      onSubmit({ ...inputs });

      setInputs("");
    }
  };

  return (
    <ModalWrapper>
      <Modal>
        <Title> {text}</Title>
        {errors.map((errors, index) => (
          <Errors key={index}>{errors}</Errors>
        ))}
        <FormSubmit onSubmit={handleSubmit}>
          <Label>Name</Label>
          <InputProduct
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />

          <Label>Price</Label>
          <InputProduct
            type="number"
            name="price"
            value={inputs.price || ""}
            onChange={handleChange}
          />

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

          <Label>Image</Label>
          <InputProduct
            name="image"
            value={inputs.image || ""}
            onChange={handleChange}
          />

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
}

export default memo(Popup);
