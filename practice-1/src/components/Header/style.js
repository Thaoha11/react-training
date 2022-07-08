import styled from 'styled-components'

const SectionBackGroundStyles = styled.div`
    position: fixed;  
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #A0BCC2;
  
`

const Wrapper = styled.div`
    width :1024px;
    margin : auto;
`

const Title = styled.h1`
    text-align: center;
    font-family: 'Inter';
    text-transform: uppercase;
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
const Row = styled.div`
    display :flex;
    flex-direction: row;
`

const LetSidebar = styled.div`
    display :flex;
    flex-direction: column;
    
`
const BrandTitle = styled.p`
    font-size: 18px;
    font-weight: 700;
    margin: 0 auto 30px;
    text-align: center;
    text-transform: uppercase;
    position: relative;
    z-index: 3;
    :before{
        content: " ";
        position: absolute;
        background: rgba(0, 0, 0, 0.42);
        bottom: 8px;
        width: 48px;
        height: 2px;
        z-index: -1;
        left: 70%;
        margin-left: -100px;
    }
  
    :after {
        content: " ";
        position: absolute;
        border: 1px solid rgba(0, 0, 0, 0.42);
        bottom: 8px;
        left: 70px;
        width: 100%;
        height: 0;
        z-index: -2;
    }
   
`
const BrandName = styled.div`
    display :flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Inter';
    width : 126px;
    height: 125px;
    background: rgba(91, 196, 255, 0.13);
    border-radius: 5px;
`
const Brand = styled.a`
    font-size: 14px;
    text-transform: uppercase;
    line-height: 30px;
    cursor: pointer;
    text-align: center;
    
`

const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 900px;

`
const Line = styled.div`
    width: 900px;
    margin-top: -5px;
`

const TitleText = styled.h2`
    position: relative;
    z-index: 3;
    margin: 0 auto 30px;
    text-align: center;
    text-transform: uppercase;
    :before{
        content: " ";
        position: absolute;
        background: rgba(0, 0, 0, 0.42);
        bottom: 8px;
        width: 292px;
        height: 2px;
        z-index: -1;
        left: 20%;
        margin-left: -100px;
    }
  
    :after {
        content: " ";
        position: absolute;
        border: 1px solid rgba(0, 0, 0, 0.42);
        bottom: 8px;
        left: 530px;
        width: 30%;
        height: 0;
        z-index: -2;
    }

`
const ItemLs = styled.div`
    width :900px;
    height:auto;
    display: flex;
    flex-direction: row;

`
const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-left: 79px;
`

const ImageItem = styled.img`
    width: 200px;
    
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
    Row,
    LetSidebar,
    BrandTitle,
    BrandName,
    Brand,
    TitleText,
    ListItem,
    Line,
    ItemLs,
    Item,
    ImageItem,
    NameItem,
    PriceItem,
    DescrItem,
    ButtonItem,
    Button
}
