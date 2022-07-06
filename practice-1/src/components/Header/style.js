import styled from 'styled-components'

const SectionBackGroundStyles = styled.div`
  position: fixed;  
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #A0BCC2;
  
`

const Wrapper = styled.div`
    width :900px;
    margin : auto;
`

const Title = styled.h1`
    text-align: center;
    font-family: 'Inter';
`

const ButtonAdd = styled.button`
    background: #DAE5D0;
    border-radius: 50px;
    border:none;
    width: 134px;
    height: 48px;
    font-family: 'Inter';
    font-size: 16px;
    cursor: pointer;
`
const Content = styled.div`
    font-family: 'Inter';
    background: #DAE5D0;
    border-radius: 5px;
    padding: 25px;
    margin-top: 20px;
`
const SearchInput = styled.input`
    width: 686px;
    height: 34px;
    border-radius: 7px;
    border:none;
`
const SortByBrand = styled.span`
  
    font-size: 14px;
    margin-left : 20px;
`
const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-top: 30px;

`
const Item = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`

const ImageItem = styled.img`
    width: 250px;
    
`
const DescrItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 320px;
`
const NameItem = styled.p`
    font-size: 32px;
    font-weight: 700;
`
const PriceItem = styled.p`
    font-size: 22px;
    font-weight: 600;
`
const ButtonItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
`
const Button = styled.button`

    border:  ${props => props.edit ? "2px solid #FFD700" : "2px solid #FF5B5B"};
    border-radius: 50px;
    font-size: 14px;
    width: 86px;
    height: 42px;
    margin-left: 20px;
`
export {
    SectionBackGroundStyles,
    Wrapper,
    Title,
    ButtonAdd,
    Content,
    SearchInput,
    SortByBrand,
    ListItem,
    Item,
    ImageItem,
    NameItem,
    PriceItem,
    DescrItem,
    ButtonItem,
    Button
}
