
import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    SET_INPUT_NAME,
    SET_INPUT_PRICE,
    SET_INPUT_BRAND,
    SET_INPUT_IMAGE,

} from '../store/constants'

// get from localStorage
const listProduct = JSON.parse(localStorage.getItem('listProduct')) || []

const initState = {
    products: listProduct,
    product: {
        productId: new Date().getTime().toString(),
        productName: '',
        productPrice: '',
        productBrand: '',
        productImage: '',
    }

}

function reducer(state, action) {
    switch (action.type) {

        case SET_INPUT_NAME:
            return {
                ...state,
                product: {
                    ...state.product,
                    productName: action.payload,

                }

            }

        case SET_INPUT_PRICE:
            return {
                ...state,
                product: {
                    ...state.product,
                    productPrice: action.payload
                }
            }
        case SET_INPUT_BRAND:
            return {
                ...state,
                product: {
                    ...state.product,
                    productBrand: action.payload
                }
            }
        case SET_INPUT_IMAGE:
            return {
                ...state,
                product: {
                    ...state.product,
                    productImage: action.payload
                }
            }


        case ADD_PRODUCT: {


            return {
                ...state,

                products: [...state.products, action.payload],
                // product: {
                //     ...state.product,
                //     productId: new Date().getTime().toString(),

                // },

            }
        }
        case DELETE_PRODUCT: {


            return {
                ...state,

                // products: state.products.filter(product => product.productId !== action.payload),
                // product: {
                //     ...state.product
                // }
            }

        }
        default:
            throw new Error('Invalid action')
    }

}

export { initState }
export default reducer
