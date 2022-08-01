import { actions, useStore } from '../../store'
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
    const { products, product } = state

    const handleDelete = (id) => {

        // for (let i = 0; i < products.length; i++) {

        //     console.log(products[i]);
        // }
        console.log(product)
        // dispatch(action.deleteProduct(product.productId))
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
