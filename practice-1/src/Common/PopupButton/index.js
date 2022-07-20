import { useState } from 'react'
import { action, useStore } from '../../store'
import Popup from '../Popup'

import {
    ButtonFunc,
    Button
} from './styles'


function PopupButton() {

    const [state, dispatch] = useStore()

    const { products } = state

    const [hide, setHide] = useState(true)

    const handleAdd = (e) => {
        e.preventDefault()
        dispatch(action.addProduct(state))
    }
    console.log(products)
    const handleClose = (e) => {
        e.preventDefault()
        setHide(s => s)


    }
    return (
        <ButtonFunc>
            <Button save onClick={handleAdd}>Save</Button>
            {/* <Button onClick={() => setHide(e => e)} >Cancel</Button> */}
            <Button onClick={handleClose}>Cancel</Button>

            {!hide && <Popup /> === null}

        </ButtonFunc>
    )
}
export default PopupButton
