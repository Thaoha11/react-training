import {
    ModalWrapper,
    Modal,
    Title,
    Content,
    ButtonWrapper,
    Button
} from './styles'

function DeletePopup({ onClosePopup }) {


    return (
        <ModalWrapper>
            <Modal>
                <Title>Delete</Title>
                <Content>Are you sure delete this products ?</Content>
                <ButtonWrapper>
                    <Button yes>Yes</Button>
                    <Button onClick={onClosePopup}>No</Button>
                </ButtonWrapper>

            </Modal>
        </ModalWrapper>

    )
}
export default DeletePopup
