import { action, useStore } from '../../store'


import {
    ButtonFunc,
    Button
} from './styles'


function PopupButton() {

    const [state, dispatch] = useStore()

    const { products } = state


    const handleAdd = (e) => {
        e.preventDefault()
        dispatch(action.addProduct(state))
    }
    console.log(products)

    return (
        <ButtonFunc>
            <Button save onClick={handleAdd}>Save</Button>
            <Button>Cancel</Button>

        </ButtonFunc>
    )
}
export default PopupButton
