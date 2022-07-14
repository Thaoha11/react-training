import { action, useStore } from '../../../store'

import {
    ButtonFunc,
    Button

} from './styles'

function PopupButton() {

    // const handleAdd = () => {
    //     dispatch(action.addProduct())
    // }
    return (
        <ButtonFunc>
            <Button save type='submit'>Save</Button>
            <Button>Cancel</Button>

        </ButtonFunc>
    )
}
export default PopupButton
