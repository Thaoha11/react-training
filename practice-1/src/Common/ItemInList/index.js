import Buttons from '../ButtonIcon'
import { useStore } from '../../store'

import {
    ItemLs,
    Item,
    LeftSide,
    ImageItem,
    RightSide,
    NameItem,
    DescrItem
} from './styles'


function ItemInList() {

    const [state] = useStore()

    console.log(state.products)
    return (
        <ItemLs>
            {state.products.map((product, index) => (
                <Item key={index}>
                    <LeftSide>
                        <ImageItem src={(product.productImage)} />
                        <Buttons />
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
