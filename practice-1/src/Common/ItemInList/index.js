import Button from '../ButtonIcon'
import { useStore } from '../../store'
import React, { useState } from "react";


import {
    ItemLs,
    Item,
    LeftSide,
    ImageItem,
    RightSide,
    NameItem,
    DescrItem
} from './styles'
import { setInputImage } from '../../actions/action';

function ItemInList() {

    const [state, dispatch] = useStore()


    return (
        <ItemLs>
            {state.products.map((product, index) => (
                <Item key={index}>
                    <LeftSide>
                        <ImageItem src={URL.createObjectURL(product.productImage)} />
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
