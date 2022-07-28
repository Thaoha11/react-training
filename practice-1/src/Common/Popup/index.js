
import { action, useStore } from '../../store'
import { useState } from 'react'

import {
    ModalWrapper,
    Modal,
    Title,
    FormSubmit,
    Label,
    InputProduct,
    SelectBrand,
    ValueOption,
    Errors,
    ButtonWrapper,
    Button
} from './styles'

function Popup({ onClosePopup, text }) {

    const [state, dispatch] = useStore()

    const { productName, productPrice, productBrand, productImage } = state.product
    // error message
    const [errors, setErrors] = useState([])
    // success messgage
    const [msg, setMsg] = useState('')

    const options = [
        { value: '', text: '--Choose an option--' },
        { value: 'nike', text: 'Nike' },
        { value: 'adidas', text: 'Adidas' },
        { value: 'mlb', text: 'MLB' },
        { value: 'pero', text: 'Pero' }
    ]

    // validate form
    const validate = () => {
        const errors = []
        if (productName === '') {
            errors.push("Please enter email");
        }
        if (productPrice === '') {
            errors.push("Please enter price");

        } else {
            if (Number(productPrice) < 0) {
                errors.push("Wrong type of price");
            }
        }

        if (productBrand === '') {
            errors.push("Please enter brand");
        }
        if (productImage === '') {
            errors.push("Please enter image");
        }

        return errors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { products, ...product } = state

        const errors = validate()

        if (errors.length > 0) {
            setErrors(errors)
            return
        }
        // submit data
        else {

            dispatch(action.addProduct(state.product))
            // save to localStorage
            // localStorage.setItem('listProduct', JSON.stringify([...products, { ...productInput }]))
            localStorage.setItem('listProduct', JSON.stringify([...products, state.product]))
            setMsg('Create successful products ')

        }
    }


    return (
        <ModalWrapper>
            <Modal>
                <Title> {text}</Title>
                {errors.map((error) => (
                    <Errors key={error}>Error: {error}</Errors>
                ))}

                <Errors notice>{msg}</Errors>
                <FormSubmit onSubmit={handleSubmit} >
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

                    {/* <PopupButton /> */}
                    <ButtonWrapper>
                        <Button save type="submit" value="Submit">Save</Button>
                        <Button type='button' onClick={onClosePopup}>Cancel</Button>
                    </ButtonWrapper>

                </FormSubmit>

            </Modal>
        </ModalWrapper>
    )

}

export default Popup
