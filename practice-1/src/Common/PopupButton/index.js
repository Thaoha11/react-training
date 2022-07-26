import { useState } from 'react'
// import { action, useStore } from '../../store'
import Popup from '../Popup'

import {
    ButtonFunc,
    Button
} from './styles'


function PopupButton() {

    // const [state, dispatch] = useStore()
    // const { products, ...productInput } = state

    const [hide, setHide] = useState(true)



    const handleClose = (e) => {
        // e.preventDefault()
        setHide(!hide)
        console.log(123)
    }


    return (
        <ButtonFunc>
            <Button save type="submit" value="Submit">Save</Button>
            <Button type='button' onClick={handleClose}>Cancel</Button>
            {!hide && <Popup /> === null}
        </ButtonFunc>
    )
}
export default PopupButton
