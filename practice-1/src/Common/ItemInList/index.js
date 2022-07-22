import Button from '../ButtonIcon'
import { useStore } from '../../store'
import { listProducts } from '../../data'
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

    const [state, dispatch] = useStore()

    let DsProducts = [].concat(listProducts, state.products)
    console.log(DsProducts)

    localStorage.setItem('listProduct', JSON.stringify(DsProducts))
    let listProduct = JSON.parse(localStorage.getItem('listProduct'))
    console.log(listProduct)

    return (
        <ItemLs>
            {listProduct.map((product, index) => (
                <Item key={index}>
                    <LeftSide>
                        <ImageItem src={(product.productImage)} />
                        <Button />
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
