import {
  ModalWrapper,
  Modal,
  Title,
  Content,
  ButtonWrapper,
  Button,
} from "./styles";

const ConfirmDeletePopup = ({ onClosePopup, onSave }) => {
  return (
    <ModalWrapper>
      <Modal>
        <Title>Delete</Title>
        <Content>Are you sure delete this products ?</Content>
        <ButtonWrapper>
          <Button yes onClick={onSave}>
            Yes
          </Button>
          <Button onClick={onClosePopup}>No</Button>
        </ButtonWrapper>
      </Modal>
    </ModalWrapper>
  );
};
export default ConfirmDeletePopup;
