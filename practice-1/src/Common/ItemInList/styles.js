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
    margin-bottom: 30px;
    margin-left: 79px;
`
const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
`
const ImageItem = styled.img`
    width: 170px;
    height: 215px;
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
// Icon Button
const Icon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const FontAwesomeIcon = styled.button`
    font-size :25px;
    border :none;
    background-color: #DAE5D0;
    margin-top: 10px;
    cursor: pointer;
    color:  ${props => props.edit ? "#A3A0C2" : "#C36C1C"};
`
export {
    ItemLs,
    Item,
    LeftSide,
    ImageItem,
    RightSide,
    NameItem,
    DescrItem,
    Icon,
    FontAwesomeIcon
}
