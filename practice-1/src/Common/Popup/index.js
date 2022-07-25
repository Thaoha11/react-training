
import { action, useStore } from '../../store'
import { useState } from 'react'
import PopupButton from '../PopupButton'
import {
    ModalWrapper,
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

    const { productName, productPrice, productBrand, productImage } = state

    // notification
    // const [msg, setMsg] = useState('')

    const options = [
        { value: '', text: '--Choose an option--' },
        { value: 'nike', text: 'Nike' },
        { value: 'adidas', text: 'Adidas' },
        { value: 'mlb', text: 'MLB' },
        { value: 'pero', text: 'Pero' }
    ]

    return (
        <ModalWrapper>
            <Modal>

                <Title> New Product</Title>
                {/* <p>{msg}</p> */}
                <FormSubmit onsubmit="return false">
                    <Label>Name</Label>
                    <InputProduct
                        type='text'
                        value={productName}
                        onChange={e => {
                            dispatch(action.setInputName(e.target.value))
                        }}

                    />

                    <Label>Price</Label>
                    <InputProduct
                        type='text'
                        value={productPrice}
                        onChange={e => {
                            dispatch(action.setInputPrice(e.target.value))
                        }}

                    />

                    <Label>Brand</Label>
                    <SelectBrand
                        value={productBrand}
                        onChange={e => {
                            dispatch(action.setInputBrand(e.target.value))
                        }}

                    >
                        {options.map(option => (
                            <ValueOption key={option.value} value={option.value}>
                                {option.text}
                            </ValueOption>
                        ))}
                    </SelectBrand>

                    <Label>Image</Label>
                    <InputProduct
                        value={productImage}
                        onChange={e => {
                            dispatch(action.setInputImage(e.target.value));
                        }}

                    />
                    <PopupButton />
                </FormSubmit>

            </Modal>
        </ModalWrapper>
    )

}

export default Popup
