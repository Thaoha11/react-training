import { useState } from "react";
import Popup from "../../Common/Popup";
import Button from "../../Common/Button";
import { AddNew } from "./styles";

function CreateProducts() {
  const [show, setShow] = useState(false);
  // show popup
  const handleOpenPopup = () => {
    setShow(!show);
  };
  // close popup
  const handleClosePopup = () => {
    setShow(false);
  };

  return (
    <>
      <AddNew>Add new </AddNew>
      <Button onClicked={handleOpenPopup} icon="fas fa-plus-square"></Button>
      {show && <Popup text="Create product" onClosePopup={handleClosePopup} />}
    </>
  );
}
export default CreateProducts;
