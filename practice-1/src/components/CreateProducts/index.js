import { useState } from 'react'
import Popup from '../../Common/Popup'
import Button from '../../Common/Button'
import {
    AddNew,

} from './styles'

function CreateProducts() {
    // show popup
    const [show, setShow] = useState(false)

    const handleClosePopup = () => {
        setShow(false)
    }
    return (
        <>
            <AddNew>Add new </AddNew>
            <Button onClicked={() => setShow(!show)} icon='fas fa-plus-square' ></Button>
            {show && <Popup text='Create product' onClosePopup={handleClosePopup} />}

        </>

    )

}
export default CreateProducts
