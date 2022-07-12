import { useState } from 'react'
import Popup from '../Common/Popup'
import {
    AddNew,
    ButtonAdd
} from './styles'

function CreateProducts() {


    return (
        <>
            <AddNew>Add new </AddNew>
            <ButtonAdd >
                <i className="fas fa-plus-square"></i>
            </ButtonAdd>
            <Popup />
        </>

    )

}
export default CreateProducts
