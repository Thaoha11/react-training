import { useState } from 'react'
import { useStore } from '../../store'
import DeletePopup from '../DeletePopup'
import Button from '../Button'
import {
    ItemLs,
    Item,
    LeftSide,
    ImageItem,
    RightSide,
    NameItem,
    DescrItem,
    Icon,
} from './styles'


function ItemInList() {

    const [state] = useStore()
    const [show, setShow] = useState(false)

    // Show DeletePopup
    const handleOpen = () => {
        setShow(!show)
    }
    // Close DeletePopup
    const handleClose = () => {
        setShow(false)
    }
    return (
        <ItemLs>
            {state.products.map((product, index) => (
                <Item key={index}>
                    <LeftSide>
                        <ImageItem src={(product.productImage)} />
                        <Icon>
                            <Button className='edit' icon='fas fa-edit'> </Button>
                            <Button
                                onClicked={handleOpen}
                                className='delete'
                                icon='fas fa-trash-alt'
                            >
                            </Button>
                            {show && <DeletePopup onClosePopup={handleClose} />}
                        </Icon>
                    </LeftSide>
                    <RightSide>
                        <NameItem> {product.productName}</NameItem>
                        <DescrItem>Price: {product.productPrice} </DescrItem>
                        <DescrItem>Brand : {product.productBrand}</DescrItem>
                    </RightSide>
                </Item>
            ))}
        </ItemLs>
    )

}
export default ItemInList
