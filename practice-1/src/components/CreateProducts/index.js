import { useState } from "react";
import Popup from "../../Common/Popup";
import Button from "../../Common/Button";
import { AddNew } from "./styles";
import { actions, useStore } from "../../store";

function CreateProducts() {
  // show popup
  const [show, setShow] = useState(false);

  const handleClosePopup = () => {
    setShow(false);
  };

  const [state, dispatch] = useStore();

  const handleAddNew = (product) => {
    dispatch(actions.addProduct(product));
  };
  return (
    <>
      <AddNew>Add new </AddNew>
      <Button
        onClicked={() => setShow(!show)}
        icon="fas fa-plus-square"
      ></Button>
      {show && (
        <Popup
          text="Create product"
          onClosePopup={handleClosePopup}
          addNew={handleAddNew}
        />
      )}
    </>
  );
}
export default CreateProducts;
