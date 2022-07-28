import { action, useStore } from '../../store'
import {
    ModalWrapper,
    Modal,
    Title,
    Content,
    ButtonWrapper,
    Button
} from './styles'


function DeletePopup({ onClosePopup }) {

    const [state, dispatch] = useStore()
    const { product } = state
    const handleDelete = (id) => {
        console.log(product)
        dispatch(action.deleteProduct(product))
    }
    return (
        <ModalWrapper>
            <Modal>
                <Title>Delete</Title>
                <Content>Are you sure delete this products ?</Content>
                <ButtonWrapper>
                    <Button yes onClick={handleDelete}>Yes</Button>
                    <Button onClick={onClosePopup}>No</Button>
                </ButtonWrapper>

            </Modal>
        </ModalWrapper>

    )
}
export default DeletePopup
