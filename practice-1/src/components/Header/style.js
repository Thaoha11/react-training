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
    padding-bottom: 20px;
`
const AddNew = styled.p`
    font-size :16px;
    font-family: 'Inter';
    margin-bottom: 2px;
`



const ButtonAdd = styled.button`
    background: bottom;
    border:none;
    cursor: pointer;
    font-size :22px;
`
const Content = styled.div`
    font-family: 'Inter';
    background: #DAE5D0;
    border-radius: 5px;
    padding: 25px;
    margin-top: 10px;
`
const InputWrapper = styled.div`
    display : flex;
    justify-content : flex-end;
    position: relative;
`
const SearchInput = styled.input`
    width: 206px;
    height: 34px;
    border-radius: 7px;
    border:none;
    
`
const ButtonSearch = styled.button`
    background: bottom;
    border:none;
    cursor: pointer;
    font-size :22px;
    position: absolute;
    top: 5px;
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
    AddNew,
    ButtonAdd,
    Content,
    InputWrapper,
    SearchInput,
    ButtonSearch,
    ListItem,
    Item,
    ImageItem,
    NameItem,
    PriceItem,
    DescrItem,
    ButtonItem,
    Button
}
