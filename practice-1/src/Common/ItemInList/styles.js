import styled from 'styled-components'

const ItemLs = styled.div`
    width :900px;
    height:auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const Item = styled.div`
    display: flex;
    flex-direction: row;
    width: 325px;
    margin-bottom: 20px;
    margin-left: 79px;
`
const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
`
const ImageItem = styled.img`
    width: 170px;
    
`
const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`
const NameItem = styled.p`
    font-size: 28px;
    font-weight: 700;
    color :#0F1A42;
`
const DescrItem = styled.p`
    font-size: 19px;
    font-weight: 600;
`

export {
    ItemLs,
    Item,
    LeftSide,
    ImageItem,
    RightSide,
    NameItem,
    DescrItem
}
