import { useState } from 'react'
import Popup from '../../Common/Popup'
import {
    AddNew,
    ButtonAdd
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
            <ButtonAdd onClick={() => setShow(!show)}>
                <i className="fas fa-plus-square"></i>
            </ButtonAdd>
            {show && <Popup onClosePopup={handleClosePopup} />}

        </>

    )

}
export default CreateProducts
