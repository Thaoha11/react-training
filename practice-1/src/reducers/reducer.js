
import {
    ADD_PRODUCT,
    SET_INPUT_NAME,
    SET_INPUT_PRICE,
    SET_INPUT_BRAND,
    SET_INPUT_IMAGE,

} from '../store/constants'

let listProduct = JSON.parse(localStorage.getItem('listProduct')) || []

const initState = {
    products: listProduct,
    productId: new Date().getTime().toString(),
    productName: '',
    productPrice: '',
    productBrand: '',
    productImage: '',
}

function reducer(state, action) {
    switch (action.type) {
        case SET_INPUT_NAME:
            return {
                ...state,
                productName: action.payload

            }

        case SET_INPUT_PRICE:
            return {
                ...state,
                productPrice: action.payload
            }
        case SET_INPUT_BRAND:
            return {
                ...state,
                productBrand: action.payload
            }
        case SET_INPUT_IMAGE:
            return {
                ...state,
                productImage: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
                productName: '',
                productPrice: '',
                productBrand: '',
                productImage: '',

            }

        default:
            throw new Error('Invalid action')
    }

}

export { initState }
export default reducer
