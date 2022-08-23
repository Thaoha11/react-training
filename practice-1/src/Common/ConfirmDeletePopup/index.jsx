import {
  ModalWrapper,
  Modal,
  Title,
  Content,
  ButtonWrapper,
  Button,
} from "./styles";

function ConfirmDeletePopup({ onClosePopup, onOK }) {
  return (
    <ModalWrapper>
      <Modal>
        <Title>Delete</Title>
        <Content>Are you sure delete this products ?</Content>
        <ButtonWrapper>
          <Button yes onClick={onOK}>
            Yes
          </Button>
          <Button onClick={onClosePopup}>No</Button>
        </ButtonWrapper>
      </Modal>
    </ModalWrapper>
  );
}
export default ConfirmDeletePopup;
