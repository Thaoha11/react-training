import { v4 as uuidv4 } from "uuid";
import { StoreContext } from "../../store";
import { useState, useContext } from "react";
import { options } from "../helpers/constants";
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

function Popup({ onClosePopup, text }) {
  const { addProduct, updateProduct, products } = useContext(StoreContext);

  // error message
  const [errors, setErrors] = useState([]);

  // success messgage
  const [msg, setMsg] = useState("");

  const [inputs, setInputs] = useState({});

  // get value input
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // validate form
  const validate = () => {
    const errors = [];

    if (inputs.name === "") {
      errors.push("Please enter email");
    }

    if (inputs.price === "") {
      errors.push("Please enter price");
    } else {
      if (Number(inputs.price) < 0) {
        errors.push("Wrong type of price");
      }
    }

    if (inputs.brand === "") {
      errors.push("Please enter brand");
    }

    if (inputs.image === "") {
      errors.push("Please enter image");
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
    // submit data
    else {
      inputs.id = uuidv4();
      addProduct({ ...inputs });

      setInputs("");
      setMsg("Create successful products ");
    }
  };

  return (
    <ModalWrapper>
      <Modal>
        <Title> {text}</Title>
        {errors.map((error) => (
          <Errors key={error}>Error: {error}</Errors>
        ))}

        <Errors notice>{msg}</Errors>
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
            type="text"
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

export default Popup;
