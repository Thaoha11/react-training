import PopupButton from '../PopupButton'
import {
    Modal,
    Title,
    FormSubmit,
    Label,
    InputProduct,
    SelectBrand,
    ValueOption
} from './styles'

function Popup() {
    return (
        <Modal>
            <Title> New Product</Title>
            <FormSubmit>
                <Label>Name</Label>
                <InputProduct type='text' />
                <Label>Price</Label>
                <InputProduct type='text' />
                <Label>Brand</Label>
                <SelectBrand>
                    <ValueOption value="0">Nike</ValueOption>
                    <ValueOption value="1">Adidas</ValueOption>
                    <ValueOption value="2">MLB</ValueOption>
                </SelectBrand>
                <Label>Image</Label>
                <InputProduct type='file' />
                <PopupButton />
            </FormSubmit>
        </Modal>

    )

}
export default Popup
