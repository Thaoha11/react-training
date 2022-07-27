import Button from '../Button'
import DeletePopup from '../DeletePopup'
import { useState } from 'react'
import {
    Icon
} from './styles'

function Buttons() {

    const [show, setShow] = useState(false)

    const handleClose = () => {
        setShow(false)
    }
    return (
        <Icon>
            <Button className='edit' icon='fas fa-edit'> </Button>
            <Button
                onClicked={() => setShow(!show)}
                className='delete'
                icon='fas fa-trash-alt'
            >
            </Button>
            {show && <DeletePopup onClosePopup={handleClose} />}

        </Icon>
    )
}
export default Buttons
