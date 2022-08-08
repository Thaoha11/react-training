import { useContext } from "react";
import { StoreContext } from "../../store";
import {
  ModalWrapper,
  Modal,
  Title,
  Content,
  ButtonWrapper,
  Button,
} from "./styles";

function DeletePopup({ onClosePopup }) {
  const { deleteProduct, products } = useContext(StoreContext);

  const handleDelete = (index) => {
    deleteProduct(products[index]);
  };

  return (
    <ModalWrapper>
      <Modal>
        <Title>Delete</Title>
        <Content>Are you sure delete this products ?</Content>
        <ButtonWrapper>
          <Button yes onClick={handleDelete}>
            Yes
          </Button>
          <Button onClick={onClosePopup}>No</Button>
        </ButtonWrapper>
      </Modal>
    </ModalWrapper>
  );
}
export default DeletePopup;
