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

const Content = styled.div`
    font-family: 'Inter';
    background: #DAE5D0;
    border-radius: 5px;
    padding: 25px;
    margin-top: 10px;
    
`


const Row = styled.div`
    display :flex;
    flex-direction: row;
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


export {
    SectionBackGroundStyles,
    Wrapper,
    Title,
    Content,
    Row,
    TitleText,
    ListItem,
    Line,
}
