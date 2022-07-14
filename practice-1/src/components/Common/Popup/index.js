
import { action, useStore } from '../../../store'
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

    const [state, dispatch] = useStore()

    const { products, productName, productPrice, productBrand } = state

    const options = [
        { value: '', text: '--Choose an option--' },
        { value: 'nike', text: 'Nike' },
        { value: 'adidas', text: 'Adidas' },
        { value: 'mlb', text: 'MLB' },
        { value: 'pero', text: 'Pero' }
    ]
    // get value SelectBrand
    const handleChange = e => {
        dispatch(action.setInputBrand(e.target.value));
    }

    console.log(products)

    return (
        <Modal>
            <Title> New Product</Title>
            <FormSubmit >

                <Label>Name</Label>
                <InputProduct
                    type='text'
                    value={productName}
                    onChange={e => {
                        dispatch(action.setInputName(e.target.value))
                    }}
                    required
                />

                <Label>Price</Label>
                <InputProduct
                    type='text'
                    value={productPrice}
                    onChange={e => {
                        dispatch(action.setInputPrice(e.target.value))
                    }}
                    required
                />

                <Label>Brand</Label>
                <SelectBrand
                    value={productBrand}
                    onChange={handleChange}
                >
                    {options.map(option => (
                        <ValueOption key={option.value} value={option.value}>
                            {option.text}
                        </ValueOption>
                    ))}
                </SelectBrand>

                <Label>Image</Label>
                <InputProduct
                    multiple
                    type='file'
                    onChange={e => {
                        dispatch(action.setInputImage(e.target.files))
                    }}
                />
                <PopupButton />

            </FormSubmit>
        </Modal>

    )

}

export default Popup
